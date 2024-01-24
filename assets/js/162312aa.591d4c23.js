"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9220],{4246:(e,r,o)=>{o.r(r),o.d(r,{assets:()=>t,contentTitle:()=>a,default:()=>p,frontMatter:()=>n,metadata:()=>c,toc:()=>s});var i=o(5893),l=o(1670);const n={id:"color-picker-avaloniaui",title:"Color Picker - AvaloniaUI",sidebar_label:"AvaloniaUI"},a="AvaloniaUI version of ColorPicker",c={id:"color-picker-avaloniaui",title:"Color Picker - AvaloniaUI",description:"demo project",source:"@site/../docs/ColorPicker-AvaloniaUI.mdx",sourceDirName:".",slug:"/color-picker-avaloniaui",permalink:"/docs/color-picker-avaloniaui",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"color-picker-avaloniaui",title:"Color Picker - AvaloniaUI",sidebar_label:"AvaloniaUI"},sidebar:"docs",previous:{title:"Color Picker Control Overview",permalink:"/docs/color-picker"},next:{title:"WPF",permalink:"/docs/color-picker-wpf"}},t={},s=[];function d(e){const r={a:"a",code:"code",h1:"h1",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.h1,{id:"avaloniaui-version-of-colorpicker",children:"AvaloniaUI version of ColorPicker"}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.img,{src:"https://i.imgur.com/Jo4J8J7.png",alt:"demo project"})}),"\n",(0,i.jsx)(r.h1,{id:"example-usage",children:"Example Usage"}),"\n",(0,i.jsxs)(r.p,{children:["See ",(0,i.jsx)(r.a,{href:"https://github.com/PixiEditor/ColorPicker/tree/master/ColorPickerDemo",children:"ColorPickerDemo"})," for an example project."]}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.strong,{children:"Basic usage:"})}),"\n",(0,i.jsx)(r.p,{children:"Install the NuGet package, insert a reference to the ColorPicker namespace"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-xml",children:'<Window ...\r\n        xmlns:colorPicker="clr-namespace:ColorPicker;assembly=ColorPicker.AvaloniaUI"\r\n...>\n'})}),"\n",(0,i.jsx)(r.p,{children:"Add the controls"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-xml",children:'<colorpicker:StandardColorPicker x:Name="main" Width="200" Height="380"/>\r\n<colorpicker:PortableColorPicker ColorState="{Binding #main.ColorState, Mode=TwoWay}" Width="40" Height="40"/>\n'})}),"\n",(0,i.jsx)(r.h1,{id:"styling",children:"Styling"}),"\n",(0,i.jsx)(r.p,{children:"Out of the box, the color picker doesn't have a look.\r\nYou must select a theme for it. There are 2 bundled themes:"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:"SimpleColorPickerTheme - Basic theme, as close as possible to Avalonia's SimpleTheme"}),"\n",(0,i.jsx)(r.li,{children:"PixiPerfectColorPickerTheme - Our custom theme used in PixiEditor"}),"\n"]}),"\n",(0,i.jsx)(r.p,{children:"Both themes are available in Dark and Light variants."}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.img,{src:"https://i.imgur.com/SF1F9ba.png",alt:"SimpleColorPickerTheme"})}),"\n",(0,i.jsx)(r.p,{children:"To use a theme, go to your App.xaml and add the following:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-xml",children:'<Application ...\r\n        xmlns:templates="clr-namespace:ColorPicker.AvaloniaUI.Templates;assembly=ColorPicker.AvaloniaUI">\r\n <Application.Styles>\r\n        ...\r\n        <templates:SimpleColorPickerTheme /> \x3c!-- or --\x3e\r\n        <templates:PixiPerfectColorPickerTheme />\r\n    </Application.Styles>\n'})}),"\n",(0,i.jsx)(r.p,{children:"You may define your own themes, AvaloniaUI version of ColorPicker is built with TemplatedControls, so look can be fully customized."}),"\n",(0,i.jsxs)(r.p,{children:["Use ",(0,i.jsx)(r.a,{href:"https://github.com/PixiEditor/ColorPicker/tree/master/src/ColorPicker.AvaloniaUI/Templates",children:"SimpleColorPickerTheme"})," as a reference."]})]})}function p(e={}){const{wrapper:r}={...(0,l.a)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1670:(e,r,o)=>{o.d(r,{a:()=>a});var i=o(7294);const l={},n=i.createContext(l);function a(e){const r=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}}}]);