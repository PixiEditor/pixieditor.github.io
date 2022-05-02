"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[452],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return g}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),g=r,m=d["".concat(s,".").concat(g)]||d[g]||u[g]||o;return n?i.createElement(m,a(a({ref:t},c),{},{components:n})):i.createElement(m,a({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var p=2;p<o;p++)a[p]=n[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4548:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var i=n(7462),r=n(3366),o=(n(7294),n(3905)),a=["components"],l={id:"toolbar-settings",title:"Toolbar Settings",sidebar_label:"Toolbar Settings"},s=void 0,p={unversionedId:"toolbar-settings",id:"toolbar-settings",title:"Toolbar Settings",description:"Since version 0.1.3.2, Settings are typed, this guide is still relevant, but syntax might vary.",source:"@site/../docs/ToolbarSettings.mdx",sourceDirName:".",slug:"/toolbar-settings",permalink:"/docs/toolbar-settings",tags:[],version:"current",frontMatter:{id:"toolbar-settings",title:"Toolbar Settings",sidebar_label:"Toolbar Settings"},sidebar:"docs",previous:{title:"Building a tool",permalink:"/docs/building-tool"},next:{title:"UndoManager and Changes",permalink:"/docs/undo-manager"}},c={},u=[{value:"Creating existing Setting",id:"creating-existing-setting",level:2}],d={toc:u};function g(e){var t=e.components,n=(0,r.Z)(e,a);return(0,o.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Since version 0.1.3.2, Settings are typed, this guide is still relevant, but syntax might vary."))),(0,o.kt)("h1",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/PixiEditor/PixiEditor/blob/master/PixiEditor/Models/Tools/ToolSettings/Settings/Setting.cs"},"Setting")," is a core part of ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/PixiEditor/PixiEditor/wiki/Toolbars"},"Toolbars"),", Setting can be a simple CheckBox or a complex Color Picker. Every setting consist of:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Name")," - A unique id, that allows identifying the setting and share values between toolbars."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Value")," - A result value of the setting."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"SettingControl")," - UI part of Setting, a WPF Control."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Label")," (optional) - Label for Setting, appears on the left from the control")),(0,o.kt)("h1",{id:"pre-made-settings"},"Pre-made Settings"),(0,o.kt)("p",null,"Here is a list of some of the pre-built settings ready to use, for a full list, check out ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/PixiEditor/PixiEditor/tree/master/PixiEditor/Models/Tools/ToolSettings/Settings"},"source code")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"BoolSetting")," - Boolean Checkbox"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ColorSetting")," - Pop-up(Portable) color picker"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"DropdownSetting")," - ComboBox with array of string values"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"FloatSetting")," - A TextBox that accepts floating precision values"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"SizeSetting"),' - A TextBox that accepts integers (Size in pixels), adds "px" at the end of edit (Value is still integer)')),(0,o.kt)("h2",{id:"creating-existing-setting"},"Creating existing Setting"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'Setting setting = new DropdownSetting("Mode", new[] {"New", "Add", "Subtract"}, "Selection type"); //"Mode" is a name (ID), array is a list of values for \n                                                                                                   //DropdownSetting, "Selection type" is a label.\n')),(0,o.kt)("p",null,"You can add ",(0,o.kt)("inlineCode",{parentName:"p"},"setting")," to Toolbar as described in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/PixiEditor/PixiEditor/wiki/Toolbars"},"this guide")," and it will be ready to use."),(0,o.kt)("h1",{id:"creating-a-new-setting"},"Creating a new Setting"),(0,o.kt)("p",null,"Creating a Setting is not a hard task, but can be tricky sometimes. "),(0,o.kt)("p",null,"Let's get a simple example from source code."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'public class ColorSetting : Setting\n    {\n        public ColorSetting(string name, string label = "") : base(name)\n        {\n            Label = label;\n            SettingControl = GenerateColorPicker();\n            Value = Color.FromArgb(0, 0, 0, 0);\n        }\n\n        private PortableColorPicker GenerateColorPicker()\n        {\n            PortableColorPicker picker = new PortableColorPicker();\n            Binding binding = new Binding("Value")\n            {\n                Mode = BindingMode.TwoWay\n            };\n            picker.SetBinding(PortableColorPicker.SelectedColorProperty, binding);\n            return picker;\n        }\n    }\n')),(0,o.kt)("p",null,"As you can see, a ",(0,o.kt)("inlineCode",{parentName:"p"},"Setting")," requires ",(0,o.kt)("inlineCode",{parentName:"p"},"Name")," as a parameter. It's good to pass a label as an optional one. We are providing transparent color as a default ",(0,o.kt)("inlineCode",{parentName:"p"},"Value")," and generating ",(0,o.kt)("inlineCode",{parentName:"p"},"PortableColorPicker"),"."),(0,o.kt)("p",null,"The tricky part is in generating Control since you must bind correct values. "),(0,o.kt)("p",null,'In this example, we are binding "Value" (the Setting property) to the PortableColorPicker ',(0,o.kt)("inlineCode",{parentName:"p"},"SelectedColorProperty"),". Usually, the principle is the same for most controls, but sometimes you might want to bind more things, check out ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/PixiEditor/PixiEditor/tree/master/PixiEditor/Models/Tools/ToolSettings/Settings"},"other source code files")," for more reference. "),(0,o.kt)("h1",{id:"conclusion"},"Conclusion"),(0,o.kt)("p",null,"The settings are a very comfortable way for easily setting up the tool values, Toolbar system takes care of getting the values and managing them. Building a Setting is easy but requires a bit of setup."))}g.isMDXComponent=!0}}]);