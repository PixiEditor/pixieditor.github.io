(self.webpackChunk=self.webpackChunk||[]).push([[683],{3905:(e,t,r)=>{"use strict";r.d(t,{Zo:()=>p,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),d=a,y=u["".concat(s,".").concat(d)]||u[d]||m[d]||i;return r?n.createElement(y,o(o({ref:t},p),{},{components:r})):n.createElement(y,o({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},771:(e,t,r)=>{"use strict";r.r(t),r.d(t,{frontMatter:()=>l,metadata:()=>s,toc:()=>c,default:()=>m});var n=r(2122),a=r(9756),i=(r(7294),r(3905)),o=["components"],l={title:"Dynamic bitmaps",author:"Krzysztof Krysi\u0144ski",author_title:"PixiEditor Creator",author_url:"https://krysinski.me",author_image_url:"https://avatars.githubusercontent.com/u/25402427?s=400&v=4",tags:["code","solution"],keywords:["bitmap","dynamic","data-structure","image","optimization"],description:"Dynamic bitmap is a solution which made PixiEditor work multiple times faster, decreased RAM usage 10 times, and solved memory leak problems.  This article will explain what it is and how it works."},s={permalink:"/blog/2021/07/22/dynamic-bitmaps",source:"@site/blog/2021-07-22-dynamic-bitmaps.mdx",title:"Dynamic bitmaps",description:"Dynamic bitmap is a solution which made PixiEditor work multiple times faster, decreased RAM usage 10 times, and solved memory leak problems.  This article will explain what it is and how it works.",date:"2021-07-22T00:00:00.000Z",formattedDate:"July 22, 2021",tags:[{label:"code",permalink:"/blog/tags/code"},{label:"solution",permalink:"/blog/tags/solution"}],readingTime:5.39,truncated:!0,nextItem:{title:"Launching PixiEditor.net",permalink:"/blog/2021/06/06/pixieditor-net-launch"}},c=[],p={toc:c};function m(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Dynamic bitmaps are a solution that made PixiEditor work multiple times faster, decreased RAM usage by about 10 times and solved memory leak problems.\nThis article will explain what dynamic bitmaps are and how they work."))}m.isMDXComponent=!0}}]);