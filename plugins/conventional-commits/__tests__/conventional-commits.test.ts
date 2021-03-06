import Auto from "@auto-it/core";
import makeCommitFromMsg from "@auto-it/core/dist/__tests__/make-commit-from-msg";
import Git from "@auto-it/core/dist/git";
import LogParse from "@auto-it/core/dist/log-parse";
import Release, { getVersionMap } from "@auto-it/core/dist/release";
import { defaultLabels } from "@auto-it/core/dist/semver";
import { dummyLog } from "@auto-it/core/dist/utils/logger";
import {
  makeHooks,
  makeLogParseHooks,
} from "@auto-it/core/dist/utils/make-hooks";
import ConventionalCommitsPlugin from "../src";

const versionLabels = getVersionMap(defaultLabels);

test("should do nothing when conventional commit message is not present", async () => {
  const conventionalCommitsPlugin = new ConventionalCommitsPlugin();
  const autoHooks = makeHooks();
  conventionalCommitsPlugin.apply({
    hooks: autoHooks,
    labels: defaultLabels,
    semVerLabels: versionLabels,
    logger: dummyLog(),
  } as Auto);

  const logParseHooks = makeLogParseHooks();
  autoHooks.onCreateLogParse.call({
    hooks: logParseHooks,
  } as LogParse);

  const commit = makeCommitFromMsg("normal commit with no bump");
  expect(await logParseHooks.parseCommit.promise({ ...commit })).toStrictEqual(
    commit
  );
});

test("should add correct semver label to commit", async () => {
  const conventionalCommitsPlugin = new ConventionalCommitsPlugin();
  const autoHooks = makeHooks();
  conventionalCommitsPlugin.apply({
    hooks: autoHooks,
    labels: defaultLabels,
    semVerLabels: versionLabels,
    logger: dummyLog(),
  } as Auto);

  const logParseHooks = makeLogParseHooks();
  autoHooks.onCreateLogParse.call({
    hooks: logParseHooks,
  } as LogParse);

  const commit = makeCommitFromMsg("fix: normal commit with no bump");
  expect(await logParseHooks.parseCommit.promise({ ...commit })).toStrictEqual({
    ...commit,
    labels: ["patch"],
  });
});

test("should add correct semver label to commit - feat", async () => {
  const conventionalCommitsPlugin = new ConventionalCommitsPlugin();
  const autoHooks = makeHooks();
  conventionalCommitsPlugin.apply({
    hooks: autoHooks,
    labels: defaultLabels,
    semVerLabels: versionLabels,
    logger: dummyLog(),
  } as Auto);

  const logParseHooks = makeLogParseHooks();
  autoHooks.onCreateLogParse.call({
    hooks: logParseHooks,
  } as LogParse);

  const commit = makeCommitFromMsg("feat: normal commit with no bump");
  expect(await logParseHooks.parseCommit.promise({ ...commit })).toStrictEqual({
    ...commit,
    labels: ["minor"],
  });
});

test("should add major semver label to commit", async () => {
  const conventionalCommitsPlugin = new ConventionalCommitsPlugin();
  const autoHooks = makeHooks();
  conventionalCommitsPlugin.apply({
    hooks: autoHooks,
    labels: defaultLabels,
    semVerLabels: versionLabels,
    logger: dummyLog(),
  } as Auto);

  const logParseHooks = makeLogParseHooks();
  autoHooks.onCreateLogParse.call({
    hooks: logParseHooks,
  } as LogParse);

  const commit = makeCommitFromMsg("BREAKING: normal commit with no bump");
  expect(await logParseHooks.parseCommit.promise({ ...commit })).toStrictEqual({
    ...commit,
    labels: ["major"],
  });
});

test("should add major semver label to commit - !", async () => {
  const conventionalCommitsPlugin = new ConventionalCommitsPlugin();
  const autoHooks = makeHooks();
  conventionalCommitsPlugin.apply({
    hooks: autoHooks,
    labels: defaultLabels,
    semVerLabels: versionLabels,
    logger: dummyLog(),
  } as Auto);

  const logParseHooks = makeLogParseHooks();
  autoHooks.onCreateLogParse.call({
    hooks: logParseHooks,
  } as LogParse);

  const commit = makeCommitFromMsg("feat!: normal commit with no bump");
  expect(await logParseHooks.parseCommit.promise({ ...commit })).toStrictEqual({
    ...commit,
    labels: ["major"],
  });
});

test("should not include label-less head commit if any other commit in PR has conventional commit message", async () => {
  const commit = makeCommitFromMsg("Merge pull request #123 from some-pr\n\n");
  const conventionalCommitsPlugin = new ConventionalCommitsPlugin();
  const logParse = new LogParse();
  const autoHooks = makeHooks();
  const mockGit = ({
    getUserByEmail: jest.fn(),
    searchRepo: jest.fn(),
    getCommitDate: jest.fn(),
    getFirstCommit: jest.fn(),
    getPr: jest.fn(),
    getCommitsForPR: () =>
      Promise.resolve([{ sha: "1", commit: { message: "fix: child commit" } }]),
  } as unknown) as Git;
  conventionalCommitsPlugin.apply({
    hooks: autoHooks,
    labels: defaultLabels,
    semVerLabels: versionLabels,
    logger: dummyLog(),
    git: mockGit,
    release: new Release(mockGit),
  } as Auto);

  autoHooks.onCreateLogParse.call(logParse);

  const result = await logParse.normalizeCommit(commit);
  expect(result).toBeUndefined();
});

test("should include labeled head commit", async () => {
  const commit = makeCommitFromMsg("Merge pull request #123 from some-pr\n\n", {
    labels: ["major"],
  });
  const conventionalCommitsPlugin = new ConventionalCommitsPlugin();
  const logParse = new LogParse();
  const autoHooks = makeHooks();
  const mockGit = ({
    getUserByEmail: jest.fn(),
    searchRepo: jest.fn(),
    getCommitDate: jest.fn(),
    getFirstCommit: jest.fn(),
    getPr: jest.fn(),
    getLatestRelease: () => Promise.resolve("1.2.3"),
    getGitLog: () =>
      Promise.resolve([
        commit,
        makeCommitFromMsg("fix: child commit", { hash: "1" }),
        makeCommitFromMsg("unrelated", { hash: "2" }),
      ]),
    getCommitsForPR: () => Promise.resolve([{ sha: "1" }]),
  } as unknown) as Git;
  conventionalCommitsPlugin.apply({
    hooks: autoHooks,
    labels: defaultLabels,
    semVerLabels: versionLabels,
    logger: dummyLog(),
    git: mockGit,
    release: new Release(mockGit),
  } as Auto);

  autoHooks.onCreateLogParse.call(logParse);

  const result = await logParse.normalizeCommit(commit);
  expect(result?.hash).toBe("foo");
});

test("should respect PR label if SEMVER", async () => {
  const commit = makeCommitFromMsg("fix: a test", {
    labels: ["major"],
  });
  const conventionalCommitsPlugin = new ConventionalCommitsPlugin();
  const logParse = new LogParse();
  const autoHooks = makeHooks();
  const mockGit = ({
    getUserByEmail: jest.fn(),
    searchRepo: jest.fn(),
    getCommitDate: jest.fn(),
    getFirstCommit: jest.fn(),
    getPr: jest.fn(),
    getLatestRelease: () => Promise.resolve("1.2.3"),
    getGitLog: () => Promise.resolve([commit]),
    getCommitsForPR: () => Promise.resolve([{ sha: "1" }]),
  } as unknown) as Git;

  conventionalCommitsPlugin.apply({
    hooks: autoHooks,
    labels: defaultLabels,
    semVerLabels: versionLabels,
    logger: dummyLog(),
    git: mockGit,
    release: new Release(mockGit),
  } as Auto);

  autoHooks.onCreateLogParse.call(logParse);

  const result = await logParse.normalizeCommit(commit);
  expect(result?.labels).toStrictEqual(["major"]);
});

test("should add conventional commit label if none/skip", async () => {
  const commit = makeCommitFromMsg("fix: a test", {
    labels: ["skip-release", "internal"],
  });
  const conventionalCommitsPlugin = new ConventionalCommitsPlugin();
  const logParse = new LogParse();
  const autoHooks = makeHooks();
  const mockGit = ({
    getUserByEmail: jest.fn(),
    searchRepo: jest.fn(),
    getCommitDate: jest.fn(),
    getFirstCommit: jest.fn(),
    getPr: jest.fn(),
    getLatestRelease: () => Promise.resolve("1.2.3"),
    getGitLog: () => Promise.resolve([commit]),
    getCommitsForPR: () => Promise.resolve([{ sha: "1" }]),
  } as unknown) as Git;

  conventionalCommitsPlugin.apply({
    hooks: autoHooks,
    labels: defaultLabels,
    semVerLabels: versionLabels,
    logger: dummyLog(),
    git: mockGit,
    release: new Release(mockGit),
  } as Auto);

  autoHooks.onCreateLogParse.call(logParse);

  const result = await logParse.normalizeCommit(commit);
  expect(result?.labels).toStrictEqual(["skip-release", "internal", "patch"]);
});

test("should not add skip when a non skip commit is present with a skip commit", async () => {
  const commit = makeCommitFromMsg("fix: a test");
  const conventionalCommitsPlugin = new ConventionalCommitsPlugin();
  const logParse = new LogParse();
  const autoHooks = makeHooks();
  const mockGit = ({
    getUserByEmail: jest.fn(),
    searchRepo: jest.fn(),
    getCommitDate: jest.fn(),
    getFirstCommit: jest.fn(),
    getPr: jest.fn(),
    getLatestRelease: () => Promise.resolve("1.2.3"),
    getGitLog: () =>
      Promise.resolve([commit, makeCommitFromMsg("chore: a test 2")]),
    getCommitsForPR: () => Promise.resolve([{ sha: "1" }]),
  } as unknown) as Git;

  conventionalCommitsPlugin.apply({
    hooks: autoHooks,
    labels: defaultLabels,
    semVerLabels: versionLabels,
    logger: dummyLog(),
    git: mockGit,
    release: new Release(mockGit),
  } as Auto);

  autoHooks.onCreateLogParse.call(logParse);

  const result = await logParse.normalizeCommit(commit);
  expect(result?.labels).toStrictEqual(["patch"]);
});

test("should skip when not a fix/feat/breaking change commit", async () => {
  const conventionalCommitsPlugin = new ConventionalCommitsPlugin();
  const autoHooks = makeHooks();
  conventionalCommitsPlugin.apply({
    hooks: autoHooks,
    labels: defaultLabels,
    semVerLabels: versionLabels,
    logger: dummyLog(),
  } as Auto);

  const logParseHooks = makeLogParseHooks();
  autoHooks.onCreateLogParse.call({
    hooks: logParseHooks,
  } as LogParse);

  const commit = makeCommitFromMsg("chore: i should not trigger a release");
  expect(await logParseHooks.parseCommit.promise({ ...commit })).toStrictEqual({
    ...commit,
    labels: ["skip-release"],
  });
});
