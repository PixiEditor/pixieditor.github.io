"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5378],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(r),m=o,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return r?n.createElement(f,a(a({ref:t},p),{},{components:r})):n.createElement(f,a({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7235:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>u,toc:()=>c});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),a=["components"],l={id:"start-here",title:"Start here",sidebar_label:"Start here"},s="Getting started with source code guide",u={unversionedId:"start-here",id:"start-here",title:"Start here",description:"This guide will help you start with PixiEditor codebase.",source:"@site/../docs/StartHere.mdx",sourceDirName:".",slug:"/start-here",permalink:"/docs/start-here",draft:!1,tags:[],version:"current",frontMatter:{id:"start-here",title:"Start here",sidebar_label:"Start here"},sidebar:"docs",previous:{title:"Introduction",permalink:"/docs/introduction"},next:{title:"Toolbars",permalink:"/docs/toolbars"}},p={},c=[{value:"Important information",id:"important-information",level:2},{value:"Code main points",id:"code-main-points",level:2},{value:"List of useful guides",id:"list-of-useful-guides",level:2}],d={toc:c};function m(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"getting-started-with-source-code-guide"},"Getting started with source code guide"),(0,i.kt)("p",null,"This guide will help you start with PixiEditor codebase."),(0,i.kt)("h2",{id:"important-information"},"Important information"),(0,i.kt)("p",null,"Want to make something cool huh? Great! But first, you need to know a few things."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"PixiEditor is written in C#"),(0,i.kt)("li",{parentName:"ul"},"PixiEditor is built in .NET 5 WPF framework"),(0,i.kt)("li",{parentName:"ul"},"We use the MVVM design pattern.")),(0,i.kt)("p",null,"Everyone can find something for themselves. From easy things, to hard."),(0,i.kt)("p",null,"PixiEditor is a complex application, so it's important to follow some rules, to ensure quality and maintainability."),(0,i.kt)("p",null,"Most important is the MVVM design pattern. Separating UI from logic is crucial. However, we accept some exceptions to that. For example, building ",(0,i.kt)("strong",{parentName:"p"},"simple")," user controls or dialogs can hold logic in code-behind, building ViewModel is unnecessary, but there is no clear border, it all depends on complexity."),(0,i.kt)("h2",{id:"code-main-points"},"Code main points"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/PixiEditor/PixiEditor/blob/master/PixiEditor/ViewModels/ViewModelMain.cs"},"ViewModelMain")," is considered entry point of program. It is a DataContext to MainWindow, all initialization happens there."),(0,i.kt)("h2",{id:"list-of-useful-guides"},"List of useful guides"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"building-tool"},"Building a Tool")," - Covers basics of the tool system."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"Toolbars"},"Toolbars")," - How they work and how to create them"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"undo-manager"},"Undo system")," - Understanding how to add new undo changes and how do they work"))}m.isMDXComponent=!0}}]);