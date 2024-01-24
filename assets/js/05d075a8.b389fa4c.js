"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2726],{5363:(e,o,r)=>{r.r(o),r.d(o,{assets:()=>t,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var n=r(5893),i=r(1670);const l={id:"color-picker",title:"Color Picker Control",sidebar_label:"Color Picker Control Overview"},s="About",c={id:"color-picker",title:"Color Picker Control",description:"A collection of various WPF and AvaloniaUI controls used to select colors.",source:"@site/../docs/ColorPicker.mdx",sourceDirName:".",slug:"/color-picker",permalink:"/docs/color-picker",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"color-picker",title:"Color Picker Control",sidebar_label:"Color Picker Control Overview"},sidebar:"docs",previous:{title:"Toolbar Settings",permalink:"/docs/toolbar-settings"},next:{title:"AvaloniaUI",permalink:"/docs/color-picker-avaloniaui"}},t={},d=[{value:"AvaloniaUI",id:"avaloniaui",level:2},{value:"WPF",id:"wpf",level:2}];function a(e){const o={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.h1,{id:"about",children:"About"}),"\n",(0,n.jsxs)(o.p,{children:["A collection of various WPF and AvaloniaUI controls used to select colors.\r\nSupports .NET Framework 4.5.1+, .NET Core 3.1+, .NET 5 - 7 (WPF) and .NET 6 - 7 (AvaloniaUI).\r\nOriginally developed for ",(0,n.jsx)(o.a,{href:"https://github.com/PixiEditor/PixiEditor",children:"PixiEditor"}),"."]}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.img,{src:"https://i.imgur.com/4ysN4Fe.png",alt:"screenshot"})}),"\n",(0,n.jsx)(o.h1,{id:"included-controls",children:"Included Controls"}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.code,{children:"SquarePicker"}),": A HSV/HSL Color Picker, consists of a circular hue slider and HV/HL square."]}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.code,{children:"ColorSliders"}),": A set of HSV/RGB + Alpha sliders"]}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.code,{children:"HexColorTextBox"}),": An RGBA Hex text field"]}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.code,{children:"ColorDisplay"}),": A Primary/Secondary Color display with a swap button"]}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.code,{children:"StandardColorPicker"}),": Combines everything listed above in one control"]}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.code,{children:"PortableColorPicker"}),": A collapsible version of StandardColorPicker"]}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.code,{children:"AlphaSlider"}),": A separate alpha slider control"]}),"\n"]}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.img,{src:"https://i.imgur.com/wZkkykY.png",alt:"demo project"})}),"\n",(0,n.jsx)(o.h1,{id:"example-usage",children:"Example Usage"}),"\n",(0,n.jsxs)(o.p,{children:["See ",(0,n.jsx)(o.a,{href:"https://github.com/PixiEditor/ColorPicker/tree/master/ColorPickerDemo",children:"ColorPickerDemo"})," for an example project."]}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.strong,{children:"Basic usage:"})}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsx)(o.li,{children:(0,n.jsx)(o.a,{href:"https://github.com/PixiEditor/ColorPicker/tree/master/src/ColorPicker/README.md#example-usage",children:"WPF Basic Usage"})}),"\n",(0,n.jsx)(o.li,{children:(0,n.jsx)(o.a,{href:"https://github.com/PixiEditor/ColorPicker/tree/master/src/ColorPicker.AvaloniaUI/README.md#example-usage",children:"AvaloniaUI Basic Usage"})}),"\n"]}),"\n",(0,n.jsx)(o.h1,{id:"properties",children:"Properties"}),"\n",(0,n.jsx)(o.p,{children:"All controls share these properties:"}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.code,{children:"SelectedColor"})," dependency property stores the current color as ",(0,n.jsx)(o.code,{children:"System.Windows.Media.Color"})," or ",(0,n.jsx)(o.code,{children:"Avalonia.Media.Color"}),". ",(0,n.jsx)(o.strong,{children:"Use this one if you simply want to get (or bind to) the current color."})," When connecting controls together with bindings, use the ",(0,n.jsx)(o.code,{children:"ColorState"})," dependency property instead."]}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.code,{children:"ColorChanged"}),": An event that fires on SelectedColor change."]}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.code,{children:"Color"})," property contains nested properties you may bind to or use to retrieve the color in code-behind:","\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.code,{children:"Color.A"}),": Current Alpha, a double ranging from 0 to 255"]}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.code,{children:"Color.RGB_R"}),", ",(0,n.jsx)(o.code,{children:"Color.RGB_G"}),", ",(0,n.jsx)(o.code,{children:"Color.RGB_B"}),": Dimensions of the RGB color space, each is a 0-255 double"]}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.code,{children:"Color.HSV_H"}),": Hue in the HSV color space, a 0-360 double"]}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.code,{children:"Color.HSV_S"}),": Saturation in the HSV color space, a 0-100 double"]}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.code,{children:"Color.HSV_V"}),": Value in the HSV color space, a 0-100 double"]}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.code,{children:"Color.HSL_H"}),": Hue in the HSL color space, a 0-360 double"]}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.code,{children:"Color.HSL_S"}),": Saturation in the HSL color space, a 0-100 double"]}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.code,{children:"Color.HSL_L"}),": Lightness in the HSL color space, a 0-100 double"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.code,{children:"ColorState"})," dependency property contains all info about the current state of the control. Use this property to bind controls together. ",(0,n.jsx)(o.strong,{children:"Do not use it for any other purpose, use the other properties listed above."})]}),"\n"]}),"\n",(0,n.jsx)(o.p,{children:"Apart from those, some controls have unique properties:"}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.code,{children:"SecondColorState"}),", ",(0,n.jsx)(o.code,{children:"SecondColor"}),", and ",(0,n.jsx)(o.code,{children:"SecondaryColor"})," are functionally identical to ",(0,n.jsx)(o.code,{children:"ColorState"}),", ",(0,n.jsx)(o.code,{children:"Color"}),", and ",(0,n.jsx)(o.code,{children:"SelectedColor"})," respectively. These are present on controls that have a secondary color."]}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.code,{children:"HintColorState"}),", ",(0,n.jsx)(o.code,{children:"HintNotifyableColor"}),", and ",(0,n.jsx)(o.code,{children:"HintColor"})," are functionally identical to ",(0,n.jsx)(o.code,{children:"ColorState"}),", ",(0,n.jsx)(o.code,{children:"Color"}),", and ",(0,n.jsx)(o.code,{children:"SelectedColor"})," respectively. These are present on controls that have a hint color. The hint color is a color field that can be used to obtain the primary color from an external source when the user clicks a button."]}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.code,{children:"UseHintColor"})," enables the hint color or disables it (disabled by default)."]}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.code,{children:"SmallChange"})," lets you change ",(0,n.jsx)(o.code,{children:"SmallChange"})," of sliders, which is used as sensitivity for when the user turns the scroll wheel with the cursor over the sliders. Present on controls with sliders."]}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.code,{children:"ShowAlpha"})," lets you hide the alpha channel on various controls. Present on all controls containing either an alpha slider or a hex color textbox."]}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.code,{children:"ShowFractionalPart"}),' lets you hide the digits after the "." in the textboxes showing HSV and HSL values. Present on ',(0,n.jsx)(o.code,{children:"ColorSliders"})," and on other controls containing ",(0,n.jsx)(o.code,{children:"ColorSliders"}),"."]}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.code,{children:"PickerType"}),": HSV or HSL, present on ",(0,n.jsx)(o.code,{children:"SquarePicker"})," and on controls that contain ",(0,n.jsx)(o.code,{children:"SquarePicker"}),"."]}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.code,{children:"HexRepresentation"}),": RGBA or ARGB, present on ",(0,n.jsx)(o.code,{children:"HexColorTextBox"})," and on controls that contain ",(0,n.jsx)(o.code,{children:"HexColorTextBox"}),"."]}),"\n"]}),"\n",(0,n.jsx)(o.h1,{id:"styling",children:"Styling"}),"\n",(0,n.jsx)(o.p,{children:"Styling differs between AvaloniaUI and WPF version. See the respective READMEs for more info."}),"\n",(0,n.jsx)(o.h2,{id:"avaloniaui",children:"AvaloniaUI"}),"\n",(0,n.jsxs)(o.p,{children:["See ",(0,n.jsx)(o.a,{href:"color-picker-avaloniaui",children:"AvaloniaUI Styling"})]}),"\n",(0,n.jsx)(o.h2,{id:"wpf",children:"WPF"}),"\n",(0,n.jsxs)(o.p,{children:["See ",(0,n.jsx)(o.a,{href:"color-picker-wpf",children:"WPF Styling"})]}),"\n",(0,n.jsx)(o.h1,{id:"other",children:"Other"}),"\n",(0,n.jsxs)(o.p,{children:["Read flabbet's article on the theory behind the first version of this project\r\non ",(0,n.jsx)(o.a,{href:"https://dev.to/flabbet/how-does-color-pickers-work-1275",children:"dev.to"})]})]})}function h(e={}){const{wrapper:o}={...(0,i.a)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},1670:(e,o,r)=>{r.d(o,{a:()=>s});var n=r(7294);const i={},l=n.createContext(i);function s(e){const o=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}}}]);