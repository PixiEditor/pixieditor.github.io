"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4861],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>h});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(o),m=r,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return o?n.createElement(h,i(i({ref:t},c),{},{components:o})):n.createElement(h,i({ref:t},c))}));function h(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<a;p++)i[p]=o[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},7687:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var n=o(7462),r=o(3366),a=(o(7294),o(3905)),i=["components"],l={title:"How to write a Todo list app in 10 lines of code in pure C# [no dependencies]",author:"Krzysztof Krysi\u0144ski",author_title:"PixiEditor Creator",author_url:"https://krysinski.me",author_image_url:"https://avatars.githubusercontent.com/u/25402427?s=400&v=4",tags:["code","programming","funny"],keywords:["todo","to-do","list","csharp","programming"],description:"This tutorial shows how to write to do app in 10 lines of code in pure C#."},s=void 0,p={permalink:"/blog/2021/08/06/todo-csharp",source:"@site/blog/2021-08-06-todo-csharp.mdx",title:"How to write a Todo list app in 10 lines of code in pure C# [no dependencies]",description:"This tutorial shows how to write to do app in 10 lines of code in pure C#.",date:"2021-08-06T00:00:00.000Z",formattedDate:"August 6, 2021",tags:[{label:"code",permalink:"/blog/tags/code"},{label:"programming",permalink:"/blog/tags/programming"},{label:"funny",permalink:"/blog/tags/funny"}],readingTime:1.265,hasTruncateMarker:!0,authors:[{name:"Krzysztof Krysi\u0144ski",title:"PixiEditor Creator",url:"https://krysinski.me",imageURL:"https://avatars.githubusercontent.com/u/25402427?s=400&v=4"}],frontMatter:{title:"How to write a Todo list app in 10 lines of code in pure C# [no dependencies]",author:"Krzysztof Krysi\u0144ski",author_title:"PixiEditor Creator",author_url:"https://krysinski.me",author_image_url:"https://avatars.githubusercontent.com/u/25402427?s=400&v=4",tags:["code","programming","funny"],keywords:["todo","to-do","list","csharp","programming"],description:"This tutorial shows how to write to do app in 10 lines of code in pure C#."},prevItem:{title:"Devlog 1 v0.1.7",permalink:"/blog/2021/11/13/devlog1"},nextItem:{title:"Dynamic bitmaps",permalink:"/blog/2021/07/22/dynamic-bitmaps"}},c={authorsImageUrls:[void 0]},d=[{value:"Talk is cheap, show me the code",id:"talk-is-cheap-show-me-the-code",level:2},{value:"Great! Coding time",id:"great-coding-time",level:2}],u={toc:d},m="wrapper";function h(e){var t=e.components,l=(0,r.Z)(e,i);return(0,a.kt)(m,(0,n.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Show me the one programmer who didn't want to write its own todo list app. In this article, I'll show you how\nto do that in 10 lines of code, without any external dependencies. Yes, really."),(0,a.kt)("h2",{id:"talk-is-cheap-show-me-the-code"},"Talk is cheap, show me the code"),(0,a.kt)("p",null,"So, let's start with a new console app in .NET 5"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"New Console App",src:o(8070).Z,width:"1348",height:"943"})),(0,a.kt)("p",null,"Let's give it a name"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Todo App Name",src:o(4533).Z,width:"1349",height:"934"})),(0,a.kt)("p",null,"Now select .NET 5"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Select .NET 5",src:o(7025).Z,width:"1308",height:"906"})),(0,a.kt)("h2",{id:"great-coding-time"},"Great! Coding time"),(0,a.kt)("p",null,"So, you ask me, how on earth, are you going to implement todo app in 10 lines of code?"),(0,a.kt)("p",null,"The answer is simple, let me explain it step by step."),(0,a.kt)("p",null,"Let's start with defining your todo tasks."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"BuyMilk();\nBakeCookies();\nTalkToYourGrandma();\nWatchTv();\nCode();\n")),(0,a.kt)("p",null,"awesome, tasks defined. Now, go complete them, and after each completed task, come back to your pc and\nwrite a method. Like that"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"BuyMilk();\nBakeCookies();\nTalkToYourGrandma();\nWatchTv();\nCode();\n\nvoid BuyMilk() { }\n")),(0,a.kt)("p",null,"After you complete all of your tasks, your program will compile, which means,\nyou have completed your todo list and app at the same time!"),(0,a.kt)("p",null,"You can see which tasks are completed and which are not, in the real time."),(0,a.kt)("p",null,"Bonus points if your code editor highlights existing methods with green color, and undefined with red. "),(0,a.kt)("p",null,"This is a final code "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"BuyMilk();\nBakeCookies();\nTalkToYourGrandma();\nWatchTv();\nCode();\n\nvoid BuyMilk() { }\nvoid BakeCookies() { } ;\nvoid WatchTv() { }\nvoid TalkToYourGrandma() { }\nvoid Code() { }\n")),(0,a.kt)("p",null,"Thank you for coming to my TED talk."))}h.isMDXComponent=!0},7025:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/dotnet5-24d8b62bd87942a76bca27c6f336b9d7.png"},8070:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/newproj-cb194198ac9198976ff52105ed7ef9bd.png"},4533:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/todoname-49b165c0d4e02a0bbb0f502e0decbdc7.png"}}]);