_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[74],{"0oBi":function(e,a,t){"use strict";var n=t("63Ad");Object.defineProperty(a,"__esModule",{value:!0}),a.isDarkMode=function(){if(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches)return!0;return!1},a.useDarkMode=function(){var e=r.default.useState(!1),a=(0,c.default)(e,2),t=a[0],n=a[1];return(0,o.default)((function(){var e=window.matchMedia("(prefers-color-scheme: dark)"),a=function(){n(window.matchMedia("(prefers-color-scheme: dark)").matches)};return a(),e.addListener(a),function(){e.removeListener(a)}}),[]),t};var c=n(t("nxTg")),r=n(t("mXGw")),o=n(t("YO29"))},"63Ad":function(e,a){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},"6f/q":function(e,a,t){"use strict";var n=t("63Ad");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var c=n(t("RiSW")),r=n(t("mXGw")),o=n(t("9fEB")),s=t("GDok"),m=t("nZpd"),d=t("AFBu"),l=t("0oBi"),p=function(e){var a=e.children,t=(0,c.default)(e,["children"]),n=r.default.useState(!1);r.default.useEffect((function(){if("undefined"!==typeof document)return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)};function e(e){"/"===e.key&&(document.getElementById("search").focus(),e.preventDefault())}}),[]);var p=(0,l.useDarkMode)();return r.default.createElement(m.MobileMenuContext.Provider,{value:t.menuState||n},r.default.createElement(o.default,null,r.default.createElement("link",{rel:"shortcut icon",media:"(prefers-color-scheme:dark)",href:(0,d.formatPath)(p?"favicon-dark.png":"favicon.png")})),r.default.createElement("div",{id:"ignite",className:"min-h-screen flex flex-col dark:bg-gray-1000"},r.default.createElement(s.NavBar,{sections:["docs","blog"],hasHomePage:!0}),a))};a.default=p},AFBu:function(e,a,t){"use strict";var n=t("63Ad");Object.defineProperty(a,"__esModule",{value:!0}),a.formatPath=function(e){return c.default.join("/auto","/".concat(e.replace(/\.mdx$/,"")))},a.postFixHTML=function(e){return e};var c=n(t("R8iU"))},C3pV:function(e,a,t){"use strict";(function(e){var n=t("63Ad");Object.defineProperty(a,"__esModule",{value:!0}),a.Sidebar=a.SidebarActiveItem=void 0;var c=n(t("OvAC")),r=n(t("RiSW")),o=n(t("nxTg")),s=n(t("mXGw")),m=n(t("5dyF")),d=n(t("9fEB")),l=n(t("R8iU")),p=n(t("PDtE")),u=t("/FXl"),i=t("bBV7"),b=t("nZpd"),O=t("AFBu");function j(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function x(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?j(Object(t),!0).forEach((function(a){(0,c.default)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):j(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}var N=s.default.createContext({pathname:"",sidebarFileLocation:""});a.SidebarActiveItem=N;var f=function(e){var a=e.href,t=e.children,n=s.default.useContext(N),c=(0,u.useMDXComponents)().SidebarLink,r=l.default.join(n.sidebarFileLocation,a),o=a;return n.sidebarFileLocation&&((o=r).endsWith("/index")&&(o=o.replace("/index","")),o.endsWith("/")&&(o=o.slice(0,-1))),s.default.createElement(m.default,{passHref:!0,href:(0,O.postFixHTML)(o)},s.default.createElement(c,{isActive:n.pathname.replace("/index","")===(0,O.formatPath)(o)},t))};a.Sidebar=function(a){var n=a.links,c=a.folder,m=s.default.useContext(b.MobileMenuContext),j=(0,o.default)(m,1)[0],g="/".concat(c),k=function(e){try{return t("f+ue")("./pages"+e+"/_sidebar.mdx").default}catch(a){try{return t("NDOZ")("./pages"+e+"/_sidebar.js").default}catch(a){}}}(g),h=function(a){var t=(0,i.useRouter)(),n="phase-production-build"!==e.env.NEXT_PHASE&&t.pathname.includes("/auto")?l.default.relative("/auto",t.pathname):l.default.relative("/",t.pathname),c=a.find((function(e){return e.__resourcePath.replace(".mdx","")===n}));return c||(c=a.find((function(e){var a=e.__resourcePath.replace(".mdx","");return a.endsWith("index")&&t.pathname.includes(a.replace("/index",""))}))),{title:c.title||"auto",pathname:(0,O.formatPath)(c.__resourcePath)}}(n),v=(0,u.useMDXComponents)(),y=v.SidebarItemWrapper,w=(v.SidebarLink,v.SidebarTitle),E=v.SidebarDivider,_=v.SidebarList,P=v.Sidebar,M=(0,r.default)(v,["SidebarItemWrapper","SidebarLink","SidebarTitle","SidebarDivider","SidebarList","Sidebar"]);return s.default.createElement(N.Provider,{value:x({},h,{sidebarFileLocation:k?g:""})},s.default.createElement(u.MDXProvider,{components:x({},M,{li:y,ul:_,a:f,p:w,hr:E})},s.default.createElement(d.default,null,s.default.createElement("title",null,h.title.replace(/\\`/g,"`"))),s.default.createElement(P,{className:(0,p.default)(!j&&"hidden","lg:block")},k?s.default.createElement(k,null):s.default.createElement(_,null,n.map((function(e){return s.default.createElement(y,{key:e.__resourcePath},s.default.createElement(f,{href:e.__resourcePath},e.title))}))))))}}).call(this,t("5IsQ"))},GDok:function(e,a,t){"use strict";var n=t("63Ad");Object.defineProperty(a,"__esModule",{value:!0}),a.NavBar=void 0;var c=n(t("nxTg")),r=n(t("8VmE")),o=n(t("RiSW")),s=n(t("mXGw")),m=n(t("5dyF")),d=t("V5Fo"),l=t("/FXl"),p=n(t("PDtE")),u=t("nZpd"),i=t("AFBu"),b=function(e){var a=e.className,t=(0,o.default)(e,["className"]);return s.default.createElement("svg",(0,r.default)({className:(0,p.default)("fill-current w-5 h-5",a),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},t),s.default.createElement("path",{d:"M10 0a10 10 0 0 0-3.16 19.49c.5.1.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69a3.6 3.6 0 0 1 .1-2.64s.84-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.37.2 2.4.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85l-.01 2.75c0 .26.18.58.69.48A10 10 0 0 0 10 0"}))},O=function(){var e=(0,l.useMDXComponents)().SearchInput;return s.default.createElement("div",{className:"relative h-full flex items-center w-full lg:w-auto lg:flex-1 lg:mr-4 px-4"},s.default.createElement(e,null))};a.NavBar=function(e){var a=e.sections,t=e.hasHomePage,n=s.default.useContext(u.MobileMenuContext),r=(0,c.default)(n,2),o=r[0],p=r[1],j=(0,l.useMDXComponents)(),x=j.Logo,N=j.NavBarWrapper,f=j.NavBar,g=j.NavBarItem,k=j.MobileMenuButton;return s.default.createElement(s.default.Fragment,null,s.default.createElement(N,null,s.default.createElement(f,null,t?s.default.createElement(m.default,{passHref:!0,href:"/"},s.default.createElement(x,null)):s.default.createElement(x,null),s.default.createElement("div",{className:"w-full h-full flex items-center lg:flex flex-1 lg:max-w-screen-md lg:mx-auto"},s.default.createElement(O,null),s.default.createElement(k,{open:o,setOpen:p,className:"lg:hidden"}),s.default.createElement("div",{className:"hidden lg:flex h-full"},a.map((function(e){return s.default.createElement(m.default,{passHref:!0,key:e,href:(0,i.postFixHTML)("/".concat(e))},s.default.createElement(g,null,(0,d.titleCase)(e)))})),s.default.createElement(g,{href:"https://github.com/intuit/auto",target:"_blank","aria-label":"Open on GitHub"},s.default.createElement(b,null)))))),o&&s.default.createElement("div",{className:"lg:hidden"},a.map((function(e){return s.default.createElement(m.default,{passHref:!0,key:e,href:(0,i.postFixHTML)("/".concat(e))},s.default.createElement(g,null,(0,d.titleCase)(e)))})),s.default.createElement(g,{href:"https://github.com/intuit/auto",target:"_blank"},s.default.createElement(b,{className:"mr-2"}),"Open on GitHub")))}},Wr3q:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return l})),t.d(a,"default",(function(){return i}));var n=t("Fcif"),c=t("dV/x"),r=t("mXGw"),o=t.n(r),s=t("/FXl"),m=t("pu0P"),d=t.n(m),l=(o.a.createElement,{title:"Init APIs",layout:"docs",date:null,author:"",email:"",__resourcePath:"docs/plugins/init-hooks.mdx",__scans:{}}),p={frontMatter:l},u=d.a;function i(e){var a=e.components,t=Object(c.a)(e,["components"]);return Object(s.mdx)(u,Object(n.a)({},p,t,{components:a,mdxType:"MDXLayout"}),Object(s.mdx)("p",null,"The ",Object(s.mdx)("inlineCode",{parentName:"p"},"auto init")," command provides an easy way to create an ",Object(s.mdx)("inlineCode",{parentName:"p"},".autorc")," without reading too many docs.\nIt exposes hooks to get the basic information auto needs to function (",Object(s.mdx)("a",Object(n.a)({parentName:"p"},{href:"#getrepo"}),"getRepo")," and ",Object(s.mdx)("a",Object(n.a)({parentName:"p"},{href:"#getauthor"}),"getAuthor"),").\nIt also provides hooks the set up your plugin quicker (",Object(s.mdx)("a",Object(n.a)({parentName:"p"},{href:"#configureplugin"}),"configurePlugin")," and ",Object(s.mdx)("a",Object(n.a)({parentName:"p"},{href:"#createenv"}),"createEnv"),")."),Object(s.mdx)("ul",null,Object(s.mdx)("li",{parentName:"ul"},Object(s.mdx)("a",Object(n.a)({parentName:"li"},{href:"#writercfile"}),"writeRcFile")),Object(s.mdx)("li",{parentName:"ul"},Object(s.mdx)("a",Object(n.a)({parentName:"li"},{href:"#getrepo"}),"getRepo")),Object(s.mdx)("li",{parentName:"ul"},Object(s.mdx)("a",Object(n.a)({parentName:"li"},{href:"#getauthor"}),"getAuthor")),Object(s.mdx)("li",{parentName:"ul"},Object(s.mdx)("a",Object(n.a)({parentName:"li"},{href:"#configureplugin"}),"configurePlugin")),Object(s.mdx)("li",{parentName:"ul"},Object(s.mdx)("a",Object(n.a)({parentName:"li"},{href:"#createenv"}),"createEnv"))),Object(s.mdx)("h2",{id:"writercfile"},Object(s.mdx)("a",Object(n.a)({parentName:"h2"},{className:'header-link no-underline text-gray-900" hover:underline',href:"#writercfile"}),"writeRcFile")),Object(s.mdx)("p",null,"Override where/how the rc file is written."),Object(s.mdx)("pre",{className:"language-ts"},Object(s.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),Object(s.mdx)("span",Object(n.a)({parentName:"code"},{className:"token keyword"}),"class")," ",Object(s.mdx)("span",Object(n.a)({parentName:"code"},{className:"token class-name"}),"MyPlugin")," ",Object(s.mdx)("span",Object(n.a)({parentName:"code"},{className:"token keyword"}),"implements")," ",Object(s.mdx)("span",Object(n.a)({parentName:"code"},{className:"token class-name"}),"IPlugin")," ",Object(s.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n  ",Object(s.mdx)("span",Object(n.a)({parentName:"code"},{className:"token function"}),"init"),Object(s.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"("),Object(s.mdx)("span",Object(n.a)({parentName:"code"},{className:"token parameter"}),"initializer",Object(s.mdx)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),":")," ",Object(s.mdx)("span",Object(n.a)({parentName:"span"},{className:"token maybe-class-name"}),"InteractiveInit")),Object(s.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),")")," ",Object(s.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n    initializer",Object(s.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"."),Object(s.mdx)("span",Object(n.a)({parentName:"code"},{className:"token property-access"}),"hooks"),Object(s.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"."),Object(s.mdx)("span",Object(n.a)({parentName:"code"},{className:"token property-access"}),"writeRcFile"),Object(s.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"."),Object(s.mdx)("span",Object(n.a)({parentName:"code"},{className:"token method function property-access"}),"tapPromise"),Object(s.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"("),Object(s.mdx)("span",Object(n.a)({parentName:"code"},{className:"token string"}),'"Example"'),Object(s.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),",")," ",Object(s.mdx)("span",Object(n.a)({parentName:"code"},{className:"token keyword"}),"async")," ",Object(s.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"("),Object(s.mdx)("span",Object(n.a)({parentName:"code"},{className:"token parameter"}),"rc"),Object(s.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),")")," ",Object(s.mdx)("span",Object(n.a)({parentName:"code"},{className:"token arrow operator"}),"=>")," ",Object(s.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n      ",Object(s.mdx)("span",Object(n.a)({parentName:"code"},{className:"token comment"}),"// write the file somewhere other than .autorc"),"\n      ",Object(s.mdx)("span",Object(n.a)({parentName:"code"},{className:"token keyword"}),"return")," filename",Object(s.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),";"),"\n    ",Object(s.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),Object(s.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),")"),Object(s.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),";"),"\n  ",Object(s.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),"\n",Object(s.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),"\n")),Object(s.mdx)("p",null,Object(s.mdx)("em",{parentName:"p"},"Other examples:")),Object(s.mdx)("ul",null,Object(s.mdx)("li",{parentName:"ul"},"In Core: Defaults to writing rc file to root of project"),Object(s.mdx)("li",{parentName:"ul"},Object(s.mdx)("a",Object(n.a)({parentName:"li"},{href:"../generated/npm"}),"npm")," - Writes RC file to package.json")),Object(s.mdx)("h2",{id:"getrepo"},Object(s.mdx)("a",Object(n.a)({parentName:"h2"},{className:'header-link no-underline text-gray-900" hover:underline',href:"#getrepo"}),"getRepo")),Object(s.mdx)("p",null,"Get or verify the repo information."),Object(s.mdx)("p",null,Object(s.mdx)("em",{parentName:"p"},"Examples:")),Object(s.mdx)("ul",null,Object(s.mdx)("li",{parentName:"ul"},Object(s.mdx)("a",Object(n.a)({parentName:"li"},{href:"../generated/npm"}),"npm")," - Gets repo info from package.json")),Object(s.mdx)("h2",{id:"getauthor"},Object(s.mdx)("a",Object(n.a)({parentName:"h2"},{className:'header-link no-underline text-gray-900" hover:underline',href:"#getauthor"}),"getAuthor")),Object(s.mdx)("p",null,"Get or verify the author information."),Object(s.mdx)("p",null,Object(s.mdx)("em",{parentName:"p"},"Examples:")),Object(s.mdx)("ul",null,Object(s.mdx)("li",{parentName:"ul"},Object(s.mdx)("a",Object(n.a)({parentName:"li"},{href:"../generated/npm"}),"npm")," - Gets author info from package.json")),Object(s.mdx)("h2",{id:"configureplugin"},Object(s.mdx)("a",Object(n.a)({parentName:"h2"},{className:'header-link no-underline text-gray-900" hover:underline',href:"#configureplugin"}),"configurePlugin")),Object(s.mdx)("p",null,"Run extra configuration for a plugin. Here is where to display prompts to the user."),Object(s.mdx)("pre",{className:"language-ts"},Object(s.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),Object(s.mdx)("span",Object(n.a)({parentName:"code"},{className:"token keyword"}),"class")," ",Object(s.mdx)("span",Object(n.a)({parentName:"code"},{className:"token class-name"}),"MyPlugin")," ",Object(s.mdx)("span",Object(n.a)({parentName:"code"},{className:"token keyword"}),"implements")," ",Object(s.mdx)("span",Object(n.a)({parentName:"code"},{className:"token class-name"}),"IPlugin")," ",Object(s.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n  ",Object(s.mdx)("span",Object(n.a)({parentName:"code"},{className:"token function"}),"init"),Object(s.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"("),Object(s.mdx)("span",Object(n.a)({parentName:"code"},{className:"token parameter"}),"initializer",Object(s.mdx)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),":")," ",Object(s.mdx)("span",Object(n.a)({parentName:"span"},{className:"token maybe-class-name"}),"InteractiveInit")),Object(s.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),")")," ",Object(s.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n    initializer",Object(s.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"."),Object(s.mdx)("span",Object(n.a)({parentName:"code"},{className:"token property-access"}),"hooks"),Object(s.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"."),Object(s.mdx)("span",Object(n.a)({parentName:"code"},{className:"token property-access"}),"configurePlugin"),Object(s.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"."),Object(s.mdx)("span",Object(n.a)({parentName:"code"},{className:"token method function property-access"}),"tapPromise"),Object(s.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"("),Object(s.mdx)("span",Object(n.a)({parentName:"code"},{className:"token string"}),'"Example"'),Object(s.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),",")," ",Object(s.mdx)("span",Object(n.a)({parentName:"code"},{className:"token keyword"}),"async")," ",Object(s.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"("),Object(s.mdx)("span",Object(n.a)({parentName:"code"},{className:"token parameter"}),"name"),Object(s.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),")")," ",Object(s.mdx)("span",Object(n.a)({parentName:"code"},{className:"token arrow operator"}),"=>")," ",Object(s.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n      ",Object(s.mdx)("span",Object(n.a)({parentName:"code"},{className:"token keyword"}),"if")," ",Object(s.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"("),"name ",Object(s.mdx)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),"===")," ",Object(s.mdx)("span",Object(n.a)({parentName:"code"},{className:"token string"}),'"my-plugins"'),Object(s.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),")")," ",Object(s.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n        ",Object(s.mdx)("span",Object(n.a)({parentName:"code"},{className:"token keyword"}),"return")," ",Object(s.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"["),"\n          name",Object(s.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n          ",Object(s.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n            ",Object(s.mdx)("span",Object(n.a)({parentName:"code"},{className:"token comment"}),"// extra config options"),"\n          ",Object(s.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),Object(s.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n        ",Object(s.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"]"),Object(s.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),";"),"\n      ",Object(s.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),"\n    ",Object(s.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),Object(s.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),")"),Object(s.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),";"),"\n  ",Object(s.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),"\n",Object(s.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),"\n")),Object(s.mdx)("p",null,Object(s.mdx)("em",{parentName:"p"},"Other examples:")),Object(s.mdx)("ul",null,Object(s.mdx)("li",{parentName:"ul"},Object(s.mdx)("a",Object(n.a)({parentName:"li"},{href:"../generated/jira"}),"jira")," - Query the user for their JIRA url")),Object(s.mdx)("h2",{id:"createenv"},Object(s.mdx)("a",Object(n.a)({parentName:"h2"},{className:'header-link no-underline text-gray-900" hover:underline',href:"#createenv"}),"createEnv")),Object(s.mdx)("p",null,"Add environment variables to get from the user.\nThese values are stored in a local ",Object(s.mdx)("inlineCode",{parentName:"p"},".env")," file."),Object(s.mdx)("pre",{className:"language-ts"},Object(s.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),Object(s.mdx)("span",Object(n.a)({parentName:"code"},{className:"token keyword"}),"class")," ",Object(s.mdx)("span",Object(n.a)({parentName:"code"},{className:"token class-name"}),"MyPlugin")," ",Object(s.mdx)("span",Object(n.a)({parentName:"code"},{className:"token keyword"}),"implements")," ",Object(s.mdx)("span",Object(n.a)({parentName:"code"},{className:"token class-name"}),"IPlugin")," ",Object(s.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n  ",Object(s.mdx)("span",Object(n.a)({parentName:"code"},{className:"token function"}),"init"),Object(s.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"("),Object(s.mdx)("span",Object(n.a)({parentName:"code"},{className:"token parameter"}),"initializer",Object(s.mdx)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),":")," ",Object(s.mdx)("span",Object(n.a)({parentName:"span"},{className:"token maybe-class-name"}),"InteractiveInit")),Object(s.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),")")," ",Object(s.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n    initializer",Object(s.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"."),Object(s.mdx)("span",Object(n.a)({parentName:"code"},{className:"token property-access"}),"hooks"),Object(s.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"."),Object(s.mdx)("span",Object(n.a)({parentName:"code"},{className:"token property-access"}),"createEnv"),Object(s.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"."),Object(s.mdx)("span",Object(n.a)({parentName:"code"},{className:"token method function property-access"}),"tap"),Object(s.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"("),Object(s.mdx)("span",Object(n.a)({parentName:"code"},{className:"token string"}),'"Example"'),Object(s.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),",")," ",Object(s.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"("),Object(s.mdx)("span",Object(n.a)({parentName:"code"},{className:"token parameter"}),"vars"),Object(s.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),")")," ",Object(s.mdx)("span",Object(n.a)({parentName:"code"},{className:"token arrow operator"}),"=>")," ",Object(s.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"["),"\n      ",Object(s.mdx)("span",Object(n.a)({parentName:"code"},{className:"token spread operator"}),"..."),"vars",Object(s.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n      ",Object(s.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n        variable",Object(s.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),":")," ",Object(s.mdx)("span",Object(n.a)({parentName:"code"},{className:"token string"}),'"MY_TOKEN"'),Object(s.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n        message",Object(s.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),":")," ",Object(s.mdx)("span",Object(n.a)({parentName:"code"},{className:"token template-string"}),Object(s.mdx)("span",Object(n.a)({parentName:"span"},{className:"token template-punctuation string"}),"`"),Object(s.mdx)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"This is a very important secret"),Object(s.mdx)("span",Object(n.a)({parentName:"span"},{className:"token template-punctuation string"}),"`")),Object(s.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n      ",Object(s.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),Object(s.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n    ",Object(s.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"]"),Object(s.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),")"),Object(s.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),";"),"\n  ",Object(s.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),"\n",Object(s.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),"\n")),Object(s.mdx)("p",null,Object(s.mdx)("em",{parentName:"p"},"Other examples:")),Object(s.mdx)("ul",null,Object(s.mdx)("li",{parentName:"ul"},Object(s.mdx)("a",Object(n.a)({parentName:"li"},{href:"../generated/npm"}),"npm")," - Query the user for their npm token"),Object(s.mdx)("li",{parentName:"ul"},Object(s.mdx)("a",Object(n.a)({parentName:"li"},{href:"../generated/slack"}),"slack")," - Query the user for their slack url")))}i.isMDXComponent=!0},fEB8:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/plugins/init-hooks",function(){return t("Wr3q")}])},nZpd:function(e,a,t){"use strict";var n=t("63Ad");Object.defineProperty(a,"__esModule",{value:!0}),a.MobileMenuContext=void 0;var c=n(t("mXGw")).default.createContext([!1,function(){}]);a.MobileMenuContext=c},pu0P:function(e,a,t){"use strict";var n=t("63Ad");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var c=n(t("nxTg")),r=n(t("mXGw")),o=n(t("R8iU")),s=t("/FXl"),m=n(t("PDtE")),d=t("C3pV"),l=n(t("6f/q")),p=n(t("x3GE")),u=/([^`]*)`([^`]*)`(.*)/m;var i=function(e){var a=e.children,t=e.frontMatter,n=r.default.useState(!1),i=(0,c.default)(n,2),b=i[0],O=i[1],j=(0,s.useMDXComponents)(),x=t.__resourcePath.split("/")[0],N=(0,p.default)(),f=["index.mdx","blog/both-worlds.mdx","blog/npm-canary-scope.mdx","blog/pr-in-progress.mdx","blog/using-shipit.mdx","blog/v8.mdx","blog/why.mdx","docs/_sidebar.mdx","docs/index.mdx","docs/build-platforms/circleci.mdx","docs/build-platforms/github-actions.mdx","docs/build-platforms/jenkins.mdx","docs/build-platforms/travis.mdx","docs/configuration/autorc.mdx","docs/configuration/non-npm.mdx","docs/configuration/plugins.mdx","docs/configuration/troubleshooting.mdx","docs/generated/all-contributors.mdx","docs/generated/brew.mdx","docs/generated/canary.mdx","docs/generated/changelog.mdx","docs/generated/chrome.mdx","docs/generated/cocoapods.mdx","docs/generated/comment.mdx","docs/generated/conventional-commits.mdx","docs/generated/crates.mdx","docs/generated/create-labels.mdx","docs/generated/docker.mdx","docs/generated/exec.mdx","docs/generated/first-time-contributor.mdx","docs/generated/gem.mdx","docs/generated/gh-pages.mdx","docs/generated/git-tag.mdx","docs/generated/gradle.mdx","docs/generated/info.mdx","docs/generated/init.mdx","docs/generated/jira.mdx","docs/generated/label.mdx","docs/generated/latest.mdx","docs/generated/maven.mdx","docs/generated/microsoft-teams.mdx","docs/generated/next.mdx","docs/generated/npm.mdx","docs/generated/omit-commits.mdx","docs/generated/omit-release-notes.mdx","docs/generated/pr-body-labels.mdx","docs/generated/pr-body.mdx","docs/generated/pr-check.mdx","docs/generated/pr-status.mdx","docs/generated/release.mdx","docs/generated/released.mdx","docs/generated/s3.mdx","docs/generated/shipit.mdx","docs/generated/slack.mdx","docs/generated/twitter.mdx","docs/generated/upload-assets.mdx","docs/generated/version.mdx","docs/plugins/changelog-hooks.mdx","docs/plugins/configuration-hooks.mdx","docs/plugins/hook-api-docs.mdx","docs/plugins/init-hooks.mdx","docs/plugins/log-parse-hooks.mdx","docs/plugins/release-lifecycle-hooks.mdx","docs/plugins/writing-plugins.mdx","docs/plugins/writing-publishing-plugins.mdx","docs/welcome/getting-started.mdx","docs/welcome/quick-merge.mdx"].map((function(e){return o.default.relative("./",e)})).filter((function(e){return e.startsWith(x)})).map((function(e){return N.find((function(a){return a.__resourcePath===e}))}));return r.default.createElement(l.default,{menuState:[b,O]},r.default.createElement("div",{className:"flex flex-1 w-full max-w-screen-sm lg:max-w-screen-xl mx-auto"},r.default.createElement(d.Sidebar,{links:f,folder:x}),r.default.createElement("main",{className:(0,m.default)("DocSearch-content","pt-8 pb-32 px-4 lg:mx-auto max-w-full md:max-w-screen-sm lg:max-w-screen-md","flex-1","lg:block",b&&"hidden")},r.default.createElement(j.h1,null,function(e,a){if(a){for(var t=[],n=a.replace(/\\`/g,"`");u.test(n);){var o=n.match(u),s=(0,c.default)(o,4),m=s[1],d=s[2],l=s[3];t.push(m),t.push(r.default.createElement(e.inlineCode,null,d)),n=l}return t.push(n),r.default.createElement("div",null,t)}}(j,t.title)),a)))};a.default=i},x3GE:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=t("jmz1");a.default=function(){try{return n.keys().map(n)}catch(e){return[]}}}},[["fEB8",0,1,2,3,4]]]);