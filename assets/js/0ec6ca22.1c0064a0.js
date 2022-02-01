"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[91],{1315:function(e,t,n){n.d(t,{Z:function(){return T}});var a=n(7462),r=n(7294),l=n(6010),o={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},c={Prism:n(7410).default,theme:o};function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},s.apply(this,arguments)}var u=/\r\n|\r|\n/,m=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},p=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},d=function(e,t){var n=e.plain,a=Object.create(null),r=e.styles.reduce((function(e,n){var a=n.languages,r=n.style;return a&&!a.includes(t)||n.types.forEach((function(t){var n=s({},e[t],r);e[t]=n})),e}),a);return r.root=n,r.plain=s({},n,{backgroundColor:null}),r};function g(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}var h=function(e){function t(){for(var t=this,n=[],a=arguments.length;a--;)n[a]=arguments[a];e.apply(this,n),i(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?d(e.theme,e.language):void 0;return t.themeDict=n})),i(this,"getLineProps",(function(e){var n=e.key,a=e.className,r=e.style,l=s({},g(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),o=t.getThemeDict(t.props);return void 0!==o&&(l.style=o.plain),void 0!==r&&(l.style=void 0!==l.style?s({},l.style,r):r),void 0!==n&&(l.key=n),a&&(l.className+=" "+a),l})),i(this,"getStyleForToken",(function(e){var n=e.types,a=e.empty,r=n.length,l=t.getThemeDict(t.props);if(void 0!==l){if(1===r&&"plain"===n[0])return a?{display:"inline-block"}:void 0;if(1===r&&!a)return l[n[0]];var o=a?{display:"inline-block"}:{},c=n.map((function(e){return l[e]}));return Object.assign.apply(Object,[o].concat(c))}})),i(this,"getTokenProps",(function(e){var n=e.key,a=e.className,r=e.style,l=e.token,o=s({},g(e,["key","className","style","token"]),{className:"token "+l.types.join(" "),children:l.content,style:t.getStyleForToken(l),key:void 0});return void 0!==r&&(o.style=void 0!==o.style?s({},o.style,r):r),void 0!==n&&(o.key=n),a&&(o.className+=" "+a),o})),i(this,"tokenize",(function(e,t,n,a){var r={code:t,grammar:n,language:a,tokens:[]};e.hooks.run("before-tokenize",r);var l=r.tokens=e.tokenize(r.code,r.grammar,r.language);return e.hooks.run("after-tokenize",r),l}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,a=e.code,r=e.children,l=this.getThemeDict(this.props),o=t.languages[n];return r({tokens:function(e){for(var t=[[]],n=[e],a=[0],r=[e.length],l=0,o=0,c=[],i=[c];o>-1;){for(;(l=a[o]++)<r[o];){var s=void 0,d=t[o],g=n[o][l];if("string"==typeof g?(d=o>0?d:["plain"],s=g):(d=p(d,g.type),g.alias&&(d=p(d,g.alias)),s=g.content),"string"==typeof s){var h=s.split(u),v=h.length;c.push({types:d,content:h[0]});for(var y=1;y<v;y++)m(c),i.push(c=[]),c.push({types:d,content:h[y]})}else o++,t.push(d),n.push(s),a.push(0),r.push(s.length)}o--,t.pop(),n.pop(),a.pop(),r.pop()}return m(c),i}(void 0!==o?this.tokenize(t,a,o,n):[a]),className:"prism-code language-"+n,style:void 0!==l?l.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(r.Component),v=h;var y=n(5999),f=n(9548),k="codeBlockContainer_I0IT",b="codeBlockContent_wNvx",E="codeBlockTitle_BvAR",N="codeBlock_jd64",P="codeBlockStandalone_csWH",C="copyButton_wuS7",w="codeBlockLines_mRuA";function T(e){var t,n=e.children,o=e.className,i=void 0===o?"":o,s=e.metastring,u=e.title,m=e.language,p=(0,f.LU)().prism,d=(0,r.useState)(!1),g=d[0],h=d[1],T=(0,r.useState)(!1),_=T[0],x=T[1];(0,r.useEffect)((function(){x(!0)}),[]);var Z=(0,f.bc)(s)||u,B=(0,f.pJ)();if(r.Children.toArray(n).some((function(e){return(0,r.isValidElement)(e)})))return r.createElement(v,(0,a.Z)({},c,{key:String(_),theme:B,code:"",language:"text"}),(function(e){var t=e.className,a=e.style;return r.createElement("pre",{tabIndex:0,className:(0,l.Z)(t,P,"thin-scrollbar",k,i,f.kM.common.codeBlock),style:a},r.createElement("code",{className:w},n))}));var I=Array.isArray(n)?n.join(""):n,S=null!=(t=null!=m?m:(0,f.Vo)(i))?t:p.defaultLanguage,D=(0,f.nZ)(I,s,S),L=D.highlightLines,A=D.code,O=function(){!function(e,{target:t=document.body}={}){const n=document.createElement("textarea"),a=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const r=document.getSelection();let l=!1;r.rangeCount>0&&(l=r.getRangeAt(0)),t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let o=!1;try{o=document.execCommand("copy")}catch{}n.remove(),l&&(r.removeAllRanges(),r.addRange(l)),a&&a.focus()}(A),h(!0),setTimeout((function(){return h(!1)}),2e3)};return r.createElement(v,(0,a.Z)({},c,{key:String(_),theme:B,code:A,language:null!=S?S:"text"}),(function(e){var t,n=e.className,o=e.style,c=e.tokens,s=e.getLineProps,u=e.getTokenProps;return r.createElement("div",{className:(0,l.Z)(k,i,(t={},t["language-"+S]=S&&!i.includes("language-"+S),t),f.kM.common.codeBlock)},Z&&r.createElement("div",{style:o,className:E},Z),r.createElement("div",{className:(0,l.Z)(b,S)},r.createElement("pre",{tabIndex:0,className:(0,l.Z)(n,N,"thin-scrollbar"),style:o},r.createElement("code",{className:w},c.map((function(e,t){1===e.length&&"\n"===e[0].content&&(e[0].content="");var n=s({line:e,key:t});return L.includes(t)&&(n.className+=" docusaurus-highlight-code-line"),r.createElement("span",(0,a.Z)({key:t},n),e.map((function(e,t){return r.createElement("span",(0,a.Z)({key:t},u({token:e,key:t})))})),r.createElement("br",null))})))),r.createElement("button",{type:"button","aria-label":(0,y.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:(0,l.Z)(C,"clean-btn"),onClick:O},g?r.createElement(y.Z,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):r.createElement(y.Z,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))}))}},3288:function(e,t,n){n.r(t),n.d(t,{default:function(){return g}});var a=n(7294),r=n(2434),l=n(1315),o=n(7462),c=n(2389),i=n(9548),s=n(6010),u="tabItem_LplD";function m(e){var t,n,r,l=e.lazy,c=e.block,m=e.defaultValue,p=e.values,d=e.groupId,g=e.className,h=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=p?p:h.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,i.lx)(v,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var f=null===m?m:null!=(t=null!=m?m:null==(n=h.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(r=h[0])?void 0:r.props.value;if(null!==f&&!v.some((function(e){return e.value===f})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+f+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=(0,i.UB)(),b=k.tabGroupChoices,E=k.setTabGroupChoices,N=(0,a.useState)(f),P=N[0],C=N[1],w=[],T=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var _=b[d];null!=_&&_!==P&&v.some((function(e){return e.value===_}))&&C(_)}var x=function(e){var t=e.currentTarget,n=w.indexOf(t),a=v[n].value;a!==P&&(T(t),C(a),null!=d&&E(d,a))},Z=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=w.indexOf(e.currentTarget)+1;n=w[a]||w[0];break;case"ArrowLeft":var r=w.indexOf(e.currentTarget)-1;n=w[r]||w[w.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":c},g)},v.map((function(e){var t=e.value,n=e.label,r=e.attributes;return a.createElement("li",(0,o.Z)({role:"tab",tabIndex:P===t?0:-1,"aria-selected":P===t,key:t,ref:function(e){return w.push(e)},onKeyDown:Z,onFocus:x,onClick:x},r,{className:(0,s.Z)("tabs__item",u,null==r?void 0:r.className,{"tabs__item--active":P===t})}),null!=n?n:t)}))),l?(0,a.cloneElement)(h.filter((function(e){return e.props.value===P}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==P})}))))}function p(e){var t=(0,c.Z)();return a.createElement(m,(0,o.Z)({key:String(t)},e))}var d=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)};var g=function(e){return a.createElement(r.Z,{title:"WPF Color Picker"},a.createElement("div",{className:"colorPicker"},a.createElement("div",{className:"page-title"},a.createElement("h2",{className:"animate__animated animate__fadeInDown animate__delay-1s"},"The most customizable and advanced color picker for WPF."),a.createElement("img",{src:"/img/colorPicker.png",alt:"screenshot",className:"animate__animated animate__fadeInDown highlighted-img"})),a.createElement("div",{className:"usage"},a.createElement("h3",null,"Installation"),a.createElement(p,{defaultValue:"PM",values:[{label:"Package Manager",value:"PM"},{label:".NET CLI",value:"dotnet-cli"}]},a.createElement(d,{value:"PM"},a.createElement(l.Z,{className:"language-powershell"},"Install-Package PixiEditor.ColorPicker")),a.createElement(d,{value:"dotnet-cli"},a.createElement(l.Z,{className:"language-bash"},"dotnet add package PixiEditor.ColorPicker"))),a.createElement("h3",null,"Usage"),a.createElement(l.Z,{className:"language-xml"},'<Window\nxmlns:colorpicker="clr-namespace:ColorPicker;assembly=ColorPicker">'," "),a.createElement(l.Z,{className:"language-xml"},'<colorpicker:StandardColorPicker x:Name="main" />\n<colorpicker:PortableColorPicker ColorState="{Binding ElementName=main, Path=ColorState, Mode=TwoWay}"/>')),a.createElement("div",{className:"buttons"},a.createElement("a",{href:"https://github.com/PixiEditor/ColorPicker",target:"_blank"},a.createElement("div",{className:"github-link"},a.createElement("img",{src:"/icons/github.svg",width:"50"}),a.createElement("span",null,"GitHub"))),a.createElement("a",{href:"https://www.nuget.org/packages/PixiEditor.ColorPicker",target:"_blank"},a.createElement("div",{className:"github-link"},a.createElement("img",{src:"/icons/nuget-logo.png",width:"50"}),a.createElement("span",null,"NuGet")))),a.createElement("h3",{className:"markdown",style:{textAlign:"center",marginBottom:50,marginTop:25}},"Check out ",a.createElement("a",{href:"/docs/color-picker",target:"_blank"},"the docs")," for more"),a.createElement("div",{className:"companies-using-section"},a.createElement("h2",null,"Companies using our Color Picker"),a.createElement("div",{className:"company-container"},a.createElement("a",{href:"https://icons8.com/app/windows",target:"_blank"},a.createElement("img",{src:"/icons/Icons8_logo_full.png",width:"250",alt:"icons8 logo"}),a.createElement("div",{className:"product-name"},"Pichon for Windows"))))))}}}]);