_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[54],{"0oBi":function(e,t,a){"use strict";var n=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.isDarkMode=function(){if(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches)return!0;return!1},t.useDarkMode=function(){var e=r.default.useState(!1),t=(0,c.default)(e,2),a=t[0],n=t[1];return(0,o.default)((function(){var e=window.matchMedia("(prefers-color-scheme: dark)"),t=function(){n(window.matchMedia("(prefers-color-scheme: dark)").matches)};return t(),e.addListener(t),function(){e.removeListener(t)}}),[]),a};var c=n(a("nxTg")),r=n(a("mXGw")),o=n(a("YO29"))},"63Ad":function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},"6f/q":function(e,t,a){"use strict";var n=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=n(a("RiSW")),r=n(a("mXGw")),o=n(a("9fEB")),d=a("GDok"),s=a("nZpd"),l=a("AFBu"),m=a("0oBi"),u=function(e){var t=e.children,a=(0,c.default)(e,["children"]),n=r.default.useState(!1);r.default.useEffect((function(){if("undefined"!==typeof document)return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)};function e(e){"/"===e.key&&(document.getElementById("search").focus(),e.preventDefault())}}),[]);var u=(0,m.useDarkMode)();return r.default.createElement(s.MobileMenuContext.Provider,{value:a.menuState||n},r.default.createElement(o.default,null,r.default.createElement("link",{rel:"shortcut icon",media:"(prefers-color-scheme:dark)",href:(0,l.formatPath)(u?"favicon-dark.png":"favicon.png")})),r.default.createElement("div",{id:"ignite",className:"min-h-screen flex flex-col dark:bg-gray-1000"},r.default.createElement(d.NavBar,{sections:["docs","blog"],hasHomePage:!0}),t))};t.default=u},AFBu:function(e,t,a){"use strict";var n=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.formatPath=function(e){return c.default.join("/auto","/".concat(e.replace(/\.mdx$/,"")))},t.postFixHTML=function(e){return e};var c=n(a("R8iU"))},C3pV:function(e,t,a){"use strict";(function(e){var n=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.Sidebar=t.SidebarActiveItem=void 0;var c=n(a("OvAC")),r=n(a("RiSW")),o=n(a("nxTg")),d=n(a("mXGw")),s=n(a("5dyF")),l=n(a("9fEB")),m=n(a("R8iU")),u=n(a("PDtE")),i=a("/FXl"),p=a("bBV7"),f=a("nZpd"),b=a("AFBu");function x(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function g(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?x(Object(a),!0).forEach((function(t){(0,c.default)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):x(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var O=d.default.createContext({pathname:"",sidebarFileLocation:""});t.SidebarActiveItem=O;var h=function(e){var t=e.href,a=e.children,n=d.default.useContext(O),c=(0,i.useMDXComponents)().SidebarLink,r=m.default.join(n.sidebarFileLocation,t),o=t;return n.sidebarFileLocation&&((o=r).endsWith("/index")&&(o=o.replace("/index","")),o.endsWith("/")&&(o=o.slice(0,-1))),d.default.createElement(s.default,{passHref:!0,href:(0,b.postFixHTML)(o)},d.default.createElement(c,{isActive:n.pathname.replace("/index","")===(0,b.formatPath)(o)},a))};t.Sidebar=function(t){var n=t.links,c=t.folder,s=d.default.useContext(f.MobileMenuContext),x=(0,o.default)(s,1)[0],j="/".concat(c),N=function(e){try{return a("f+ue")("./pages"+e+"/_sidebar.mdx").default}catch(t){try{return a("NDOZ")("./pages"+e+"/_sidebar.js").default}catch(t){}}}(j),v=function(t){var a=(0,p.useRouter)(),n="phase-production-build"!==e.env.NEXT_PHASE&&a.pathname.includes("/auto")?m.default.relative("/auto",a.pathname):m.default.relative("/",a.pathname),c=t.find((function(e){return e.__resourcePath.replace(".mdx","")===n}));return c||(c=t.find((function(e){var t=e.__resourcePath.replace(".mdx","");return t.endsWith("index")&&a.pathname.includes(t.replace("/index",""))}))),{title:c.title||"auto",pathname:(0,b.formatPath)(c.__resourcePath)}}(n),k=(0,i.useMDXComponents)(),E=k.SidebarItemWrapper,w=(k.SidebarLink,k.SidebarTitle),_=k.SidebarDivider,y=k.SidebarList,M=k.Sidebar,P=(0,r.default)(k,["SidebarItemWrapper","SidebarLink","SidebarTitle","SidebarDivider","SidebarList","Sidebar"]);return d.default.createElement(O.Provider,{value:g({},v,{sidebarFileLocation:N?j:""})},d.default.createElement(i.MDXProvider,{components:g({},P,{li:E,ul:y,a:h,p:w,hr:_})},d.default.createElement(l.default,null,d.default.createElement("title",null,v.title.replace(/\\`/g,"`"))),d.default.createElement(M,{className:(0,u.default)(!x&&"hidden","lg:block")},N?d.default.createElement(N,null):d.default.createElement(y,null,n.map((function(e){return d.default.createElement(E,{key:e.__resourcePath},d.default.createElement(h,{href:e.__resourcePath},e.title))}))))))}}).call(this,a("5IsQ"))},GDok:function(e,t,a){"use strict";var n=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.NavBar=void 0;var c=n(a("nxTg")),r=n(a("8VmE")),o=n(a("RiSW")),d=n(a("mXGw")),s=n(a("5dyF")),l=a("V5Fo"),m=a("/FXl"),u=n(a("PDtE")),i=a("nZpd"),p=a("AFBu"),f=function(e){var t=e.className,a=(0,o.default)(e,["className"]);return d.default.createElement("svg",(0,r.default)({className:(0,u.default)("fill-current w-5 h-5",t),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},a),d.default.createElement("path",{d:"M10 0a10 10 0 0 0-3.16 19.49c.5.1.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69a3.6 3.6 0 0 1 .1-2.64s.84-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.37.2 2.4.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85l-.01 2.75c0 .26.18.58.69.48A10 10 0 0 0 10 0"}))},b=function(){var e=(0,m.useMDXComponents)().SearchInput;return d.default.createElement("div",{className:"relative h-full flex items-center w-full lg:w-auto lg:flex-1 lg:mr-4 px-4"},d.default.createElement(e,null))};t.NavBar=function(e){var t=e.sections,a=e.hasHomePage,n=d.default.useContext(i.MobileMenuContext),r=(0,c.default)(n,2),o=r[0],u=r[1],x=(0,m.useMDXComponents)(),g=x.Logo,O=x.NavBarWrapper,h=x.NavBar,j=x.NavBarItem,N=x.MobileMenuButton;return d.default.createElement(d.default.Fragment,null,d.default.createElement(O,null,d.default.createElement(h,null,a?d.default.createElement(s.default,{passHref:!0,href:"/"},d.default.createElement(g,null)):d.default.createElement(g,null),d.default.createElement("div",{className:"w-full h-full flex items-center lg:flex flex-1 lg:max-w-screen-md lg:mx-auto"},d.default.createElement(b,null),d.default.createElement(N,{open:o,setOpen:u,className:"lg:hidden"}),d.default.createElement("div",{className:"hidden lg:flex h-full"},t.map((function(e){return d.default.createElement(s.default,{passHref:!0,key:e,href:(0,p.postFixHTML)("/".concat(e))},d.default.createElement(j,null,(0,l.titleCase)(e)))})),d.default.createElement(j,{href:"https://github.com/intuit/auto",target:"_blank","aria-label":"Open on GitHub"},d.default.createElement(f,null)))))),o&&d.default.createElement("div",{className:"lg:hidden"},t.map((function(e){return d.default.createElement(s.default,{passHref:!0,key:e,href:(0,p.postFixHTML)("/".concat(e))},d.default.createElement(j,null,(0,l.titleCase)(e)))})),d.default.createElement(j,{href:"https://github.com/intuit/auto",target:"_blank"},d.default.createElement(f,{className:"mr-2"}),"Open on GitHub")))}},mtnZ:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return m})),a.d(t,"default",(function(){return p}));var n=a("Fcif"),c=a("dV/x"),r=a("mXGw"),o=a.n(r),d=a("/FXl"),s=a("pu0P"),l=a.n(s),m=(o.a.createElement,{title:"Microsoft-Teams Plugin",layout:"docs",date:null,author:"",email:"",__resourcePath:"docs/generated/microsoft-teams.mdx",__scans:{}}),u={frontMatter:m},i=l.a;function p(e){var t=e.components,a=Object(c.a)(e,["components"]);return Object(d.mdx)(i,Object(n.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(d.mdx)("p",null,"Microsoft Teams plugin for auto"),Object(d.mdx)("h2",{id:"installation"},Object(d.mdx)("a",Object(n.a)({parentName:"h2"},{className:'header-link no-underline text-gray-900" hover:underline',href:"#installation"}),"Installation")),Object(d.mdx)("p",null,"This plugin is not included with the ",Object(d.mdx)("inlineCode",{parentName:"p"},"auto")," CLI installed via NPM. To install:"),Object(d.mdx)("pre",{className:"language-bash"},Object(d.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token function"}),"npm")," i --save-dev @auto-it/microsoft-teams\n",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token comment"}),"# or"),"\n",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token function"}),"yarn")," ",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token function"}),"add")," -D @auto-it/microsoft-teams\n")),Object(d.mdx)("h2",{id:"usage"},Object(d.mdx)("a",Object(n.a)({parentName:"h2"},{className:'header-link no-underline text-gray-900" hover:underline',href:"#usage"}),"Usage")),Object(d.mdx)("p",null,"To use the plugin include it in your ",Object(d.mdx)("inlineCode",{parentName:"p"},".autorc"),".\nTo generate incoming webhook in microsoft teams, checkout ",Object(d.mdx)("a",Object(n.a)({parentName:"p"},{href:"https://medium.com/@ankush.kumar133/get-started-with-microsoft-team-connectors-incoming-webhook-a330657993e7"}),"this blog"),". "),Object(d.mdx)("pre",{className:"language-json"},Object(d.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n  ",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token property"}),'"plugins"'),Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"["),"\n    ",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"["),Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token string"}),'"microsoft-teams"'),Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),",")," ",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{")," ",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token property"}),'"url"'),Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token string"}),'"https://url-to-your-hook.com"')," ",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"]"),Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n    ",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token comment"}),"// or"),"\n    ",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"["),Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token string"}),'"microsoft-teams"'),Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),",")," ",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token string"}),'"https://url-to-your-hook.com"'),Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"]"),Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n    ",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token comment"}),"// or"),"\n    ",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"["),"\n      ",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token string"}),'"microsoft-teams"'),Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n      ",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{")," ",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token property"}),'"url"'),Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token string"}),'"https://url-to-your--hook.com"'),Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),",")," ",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token property"}),'"atTarget"'),Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token string"}),'"username"')," ",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),"\n    ",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"]"),"\n    ",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token comment"}),"// Below: Uses microsoft-teams hook set in process.env.MICROSOFT_TEAMS_WEBHOOK_URL"),"\n    ",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token string"}),'"microsoft-teams"'),"\n  ",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"]"),"\n",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),"\n")))}p.isMDXComponent=!0},nZpd:function(e,t,a){"use strict";var n=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.MobileMenuContext=void 0;var c=n(a("mXGw")).default.createContext([!1,function(){}]);t.MobileMenuContext=c},pu0P:function(e,t,a){"use strict";var n=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=n(a("nxTg")),r=n(a("mXGw")),o=n(a("R8iU")),d=a("/FXl"),s=n(a("PDtE")),l=a("C3pV"),m=n(a("6f/q")),u=n(a("x3GE")),i=/([^`]*)`([^`]*)`(.*)/m;var p=function(e){var t=e.children,a=e.frontMatter,n=r.default.useState(!1),p=(0,c.default)(n,2),f=p[0],b=p[1],x=(0,d.useMDXComponents)(),g=a.__resourcePath.split("/")[0],O=(0,u.default)(),h=["index.mdx","blog/both-worlds.mdx","blog/npm-canary-scope.mdx","blog/pr-in-progress.mdx","blog/using-shipit.mdx","blog/v8.mdx","blog/why.mdx","docs/_sidebar.mdx","docs/index.mdx","docs/build-platforms/circleci.mdx","docs/build-platforms/github-actions.mdx","docs/build-platforms/jenkins.mdx","docs/build-platforms/travis.mdx","docs/configuration/autorc.mdx","docs/configuration/non-npm.mdx","docs/configuration/plugins.mdx","docs/configuration/troubleshooting.mdx","docs/generated/all-contributors.mdx","docs/generated/brew.mdx","docs/generated/canary.mdx","docs/generated/changelog.mdx","docs/generated/chrome.mdx","docs/generated/cocoapods.mdx","docs/generated/comment.mdx","docs/generated/conventional-commits.mdx","docs/generated/crates.mdx","docs/generated/create-labels.mdx","docs/generated/docker.mdx","docs/generated/exec.mdx","docs/generated/first-time-contributor.mdx","docs/generated/gem.mdx","docs/generated/gh-pages.mdx","docs/generated/git-tag.mdx","docs/generated/gradle.mdx","docs/generated/info.mdx","docs/generated/init.mdx","docs/generated/jira.mdx","docs/generated/label.mdx","docs/generated/latest.mdx","docs/generated/maven.mdx","docs/generated/microsoft-teams.mdx","docs/generated/next.mdx","docs/generated/npm.mdx","docs/generated/omit-commits.mdx","docs/generated/omit-release-notes.mdx","docs/generated/pr-body-labels.mdx","docs/generated/pr-body.mdx","docs/generated/pr-check.mdx","docs/generated/pr-status.mdx","docs/generated/release.mdx","docs/generated/released.mdx","docs/generated/s3.mdx","docs/generated/shipit.mdx","docs/generated/slack.mdx","docs/generated/twitter.mdx","docs/generated/upload-assets.mdx","docs/generated/version.mdx","docs/plugins/changelog-hooks.mdx","docs/plugins/configuration-hooks.mdx","docs/plugins/hook-api-docs.mdx","docs/plugins/init-hooks.mdx","docs/plugins/log-parse-hooks.mdx","docs/plugins/release-lifecycle-hooks.mdx","docs/plugins/writing-plugins.mdx","docs/plugins/writing-publishing-plugins.mdx","docs/welcome/getting-started.mdx","docs/welcome/quick-merge.mdx"].map((function(e){return o.default.relative("./",e)})).filter((function(e){return e.startsWith(g)})).map((function(e){return O.find((function(t){return t.__resourcePath===e}))}));return r.default.createElement(m.default,{menuState:[f,b]},r.default.createElement("div",{className:"flex flex-1 w-full max-w-screen-sm lg:max-w-screen-xl mx-auto"},r.default.createElement(l.Sidebar,{links:h,folder:g}),r.default.createElement("main",{className:(0,s.default)("DocSearch-content","pt-8 pb-32 px-4 lg:mx-auto max-w-full md:max-w-screen-sm lg:max-w-screen-md","flex-1","lg:block",f&&"hidden")},r.default.createElement(x.h1,null,function(e,t){if(t){for(var a=[],n=t.replace(/\\`/g,"`");i.test(n);){var o=n.match(i),d=(0,c.default)(o,4),s=d[1],l=d[2],m=d[3];a.push(s),a.push(r.default.createElement(e.inlineCode,null,l)),n=m}return a.push(n),r.default.createElement("div",null,a)}}(x,a.title)),t)))};t.default=p},x3GE:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a("jmz1");t.default=function(){try{return n.keys().map(n)}catch(e){return[]}}},yMVt:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/generated/microsoft-teams",function(){return a("mtnZ")}])}},[["yMVt",0,1,2,3,4]]]);