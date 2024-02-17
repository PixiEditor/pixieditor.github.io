"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5091],{1700:(e,a,r)=>{r.d(a,{Z:()=>l});var n=r(7294),t=r(5893);const l=function(e){var a=(0,n.useState)(!0),r=a[0],l=a[1],i=(0,n.useState)(!1),o=i[0],s=i[1];return(0,t.jsxs)("div",{className:"togglePicker-container",children:[(0,t.jsx)("button",{onClick:function(){l(!0),s(!1),null==e.onOptionSelected||e.onOptionSelected(0)},disabled:r,className:"togglePicker firstButton",children:e.label1}),(0,t.jsx)("button",{onClick:function(){l(!1),s(!0),null==e.onOptionSelected||e.onOptionSelected(1)},disabled:o,className:"togglePicker secondButton",children:e.label2})]})}},2178:(e,a,r)=>{r.r(a),r.d(a,{default:()=>_});var n=r(7294),t=r(6040),l=r(4179),i=r(6905),o=r(2466),s=r(6550),u=r(469),c=r(1980),d=r(7392),h=r(12);function m(e){var a,r;return null!=(a=null==(r=n.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,n.isValidElement)(e)&&((a=e.props)&&"object"==typeof a&&"value"in a))return e;var a;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:r.filter(Boolean))?a:[]}function v(e){var a=e.values,r=e.children;return(0,n.useMemo)((function(){var e=null!=a?a:function(e){return m(e).map((function(e){var a=e.props;return{value:a.value,label:a.label,attributes:a.attributes,default:a.default}}))}(r);return function(e){var a=(0,d.l)(e,(function(e,a){return e.value===a.value}));if(a.length>0)throw new Error('Docusaurus error: Duplicate values "'+a.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[a,r])}function f(e){var a=e.value;return e.tabValues.some((function(e){return e.value===a}))}function b(e){var a=e.queryString,r=void 0!==a&&a,t=e.groupId,l=(0,s.k6)(),i=function(e){var a=e.queryString,r=void 0!==a&&a,n=e.groupId;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:r,groupId:t});return[(0,c._X)(i),(0,n.useCallback)((function(e){if(i){var a=new URLSearchParams(l.location.search);a.set(i,e),l.replace(Object.assign({},l.location,{search:a.toString()}))}}),[i,l])]}function g(e){var a,r,t,l,i=e.defaultValue,o=e.queryString,s=void 0!==o&&o,c=e.groupId,d=v(e),m=(0,n.useState)((function(){return function(e){var a,r=e.defaultValue,n=e.tabValues;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!f({value:r,tabValues:n}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+r+'" but none of its children has the corresponding value. Available values are: '+n.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return r}var t=null!=(a=n.find((function(e){return e.default})))?a:n[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:i,tabValues:d})})),g=m[0],p=m[1],k=b({queryString:s,groupId:c}),x=k[0],j=k[1],P=(a=function(e){return e?"docusaurus.tab."+e:null}({groupId:c}.groupId),r=(0,h.Nk)(a),t=r[0],l=r[1],[t,(0,n.useCallback)((function(e){a&&l.set(e)}),[a,l])]),w=P[0],y=P[1],I=function(){var e=null!=x?x:w;return f({value:e,tabValues:d})?e:null}();return(0,u.Z)((function(){I&&p(I)}),[I]),{selectedValue:g,selectValue:(0,n.useCallback)((function(e){if(!f({value:e,tabValues:d}))throw new Error("Can't select invalid tab value="+e);p(e),j(e),y(e)}),[j,y,d]),tabValues:d}}var p=r(2389);const k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=r(5893);function j(e){var a=e.className,r=e.block,n=e.selectedValue,t=e.selectValue,l=e.tabValues,s=[],u=(0,o.o5)().blockElementScrollPositionUntilNextRender,c=function(e){var a=e.currentTarget,r=s.indexOf(a),i=l[r].value;i!==n&&(u(a),t(i))},d=function(e){var a,r=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":var n,t=s.indexOf(e.currentTarget)+1;r=null!=(n=s[t])?n:s[0];break;case"ArrowLeft":var l,i=s.indexOf(e.currentTarget)-1;r=null!=(l=s[i])?l:s[s.length-1]}null==(a=r)||a.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":r},a),children:l.map((function(e){var a=e.value,r=e.label,t=e.attributes;return(0,x.jsx)("li",Object.assign({role:"tab",tabIndex:n===a?0:-1,"aria-selected":n===a,ref:function(e){return s.push(e)},onKeyDown:d,onClick:c},t,{className:(0,i.Z)("tabs__item",k.tabItem,null==t?void 0:t.className,{"tabs__item--active":n===a}),children:null!=r?r:a}),a)}))})}function P(e){var a=e.lazy,r=e.children,t=e.selectedValue,l=(Array.isArray(r)?r:[r]).filter(Boolean);if(a){var i=l.find((function(e){return e.props.value===t}));return i?(0,n.cloneElement)(i,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:l.map((function(e,a){return(0,n.cloneElement)(e,{key:a,hidden:e.props.value!==t})}))})}function w(e){var a=g(e);return(0,x.jsxs)("div",{className:(0,i.Z)("tabs-container",k.tabList),children:[(0,x.jsx)(j,Object.assign({},e,a)),(0,x.jsx)(P,Object.assign({},e,a))]})}function y(e){var a=(0,p.Z)();return(0,x.jsx)(w,Object.assign({},e,{children:m(e.children)}),String(a))}const I={tabItem:"tabItem_Ymn6"};function N(e){var a=e.children,r=e.hidden,n=e.className;return(0,x.jsx)("div",{role:"tabpanel",className:(0,i.Z)(I.tabItem,n),hidden:r,children:a})}var C=r(1700);const _=function(e){var a=(0,n.useState)(0),r=a[0],i=a[1];return(0,x.jsx)(t.Z,{title:"AvaloniaUI/WPF Color Picker",children:(0,x.jsxs)("div",{className:"colorPicker",children:[(0,x.jsxs)("div",{className:"page-title",children:[(0,x.jsxs)("h2",{className:"animate__animated animate__fadeInDown animate__delay-1s",children:["Likely the most customizable and advanced color picker for WPF and AvaloniaUI. ",(0,x.jsx)("br",{}),(0,x.jsx)("a",{href:"/ColorPickerDemo/",target:"_blank",style:{color:"#c6283d"},children:"Try in the browser"})]}),(0,x.jsx)("a",{href:"/ColorPickerDemo/",target:"_blank",children:(0,x.jsx)("video",{muted:!0,autoPlay:!0,className:"animate__animated animate__fadeInDown highlighted-img",src:"/videos/colorpicker.mp4"})})]}),(0,x.jsxs)("div",{className:"usage",children:[(0,x.jsx)("h3",{children:"Installation"}),(0,x.jsx)(C.Z,{label1:"WPF",label2:"AvaloniaUI",onOptionSelected:function(e){console.log(e),i(e)}}),(0,x.jsxs)(y,{defaultValue:"PM",values:[{label:"Package Manager",value:"PM"},{label:".NET CLI",value:"dotnet-cli"}],children:[(0,x.jsx)(N,{value:"PM",children:(0,x.jsx)(l.Z,{className:"language-powershell",children:0===r?"Install-Package PixiEditor.ColorPicker":"Install-Package PixiEditor.ColorPicker.AvaloniaUI"})}),(0,x.jsx)(N,{value:"dotnet-cli",children:(0,x.jsx)(l.Z,{className:"language-bash",children:0===r?"dotnet add package PixiEditor.ColorPicker":"dotnet add package PixiEditor.ColorPicker.AvaloniaUI"})})]}),(0,x.jsx)("h3",{children:"Usage"}),(0,x.jsxs)(l.Z,{className:"language-xml",children:[0===r?'<Window\nxmlns:colorpicker="clr-namespace:ColorPicker;assembly=ColorPicker">':'<Window \nxmlns:colorpicker="clr-namespace:ColorPicker;assembly=ColorPicker.AvaloniaUI">'," "]}),(0,x.jsx)(l.Z,{className:"language-xml",children:'<colorpicker:StandardColorPicker x:Name="main" />\n<colorpicker:PortableColorPicker ColorState="{Binding ElementName=main, Path=ColorState, Mode=TwoWay}"/>'})]}),(0,x.jsxs)("div",{className:"buttons",children:[(0,x.jsx)("a",{href:"https://github.com/PixiEditor/ColorPicker",target:"_blank",children:(0,x.jsxs)("div",{className:"github-link",children:[(0,x.jsx)("img",{src:"/icons/github.svg",width:"50"}),(0,x.jsx)("span",{children:"GitHub"})]})}),(0,x.jsx)("a",{href:0===r?"https://www.nuget.org/packages/PixiEditor.ColorPicker":"https://www.nuget.org/packages/PixiEditor.ColorPicker.AvaloniaUI",target:"_blank",children:(0,x.jsxs)("div",{className:"github-link",children:[(0,x.jsx)("img",{src:"/icons/nuget-logo.png",width:"50"}),(0,x.jsx)("span",{children:"NuGet"})]})})]}),(0,x.jsxs)("h3",{className:"markdown",style:{textAlign:"center",marginBottom:50,marginTop:25},children:["Check out ",(0,x.jsx)("a",{href:"/docs/color-picker",target:"_blank",children:"the docs"})," for more"]})]})})}}}]);