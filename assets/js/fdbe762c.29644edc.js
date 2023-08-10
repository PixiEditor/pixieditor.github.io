"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1251],{3905:(e,t,i)=>{i.d(t,{Zo:()=>d,kt:()=>u});var n=i(7294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},d=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=p(i),h=a,u=m["".concat(l,".").concat(h)]||m[h]||c[h]||o;return i?n.createElement(u,r(r({ref:t},d),{},{components:i})):n.createElement(u,r({ref:t},d))}));function u(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=i.length,r=new Array(o);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:a,r[1]=s;for(var p=2;p<o;p++)r[p]=i[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,i)}h.displayName="MDXCreateElement"},8545:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>p,toc:()=>m});var n=i(7462),a=i(3366),o=(i(7294),i(3905)),r=["components"],s={title:"Dynamic bitmaps",author:"Krzysztof Krysi\u0144ski",author_title:"PixiEditor Creator",author_url:"https://krysinski.me",author_image_url:"https://avatars.githubusercontent.com/u/25402427?s=400&v=4",tags:["code","solution"],keywords:["bitmap","dynamic","data-structure","image","optimization"],description:"Dynamic bitmap is a solution which made PixiEditor work multiple times faster, decreased RAM usage 10 times, and solved memory leak problems.  This article will explain what it is and how it works."},l=void 0,p={permalink:"/blog/2021/07/22/dynamic-bitmaps",source:"@site/blog/2021-07-22-dynamic-bitmaps.mdx",title:"Dynamic bitmaps",description:"Dynamic bitmap is a solution which made PixiEditor work multiple times faster, decreased RAM usage 10 times, and solved memory leak problems.  This article will explain what it is and how it works.",date:"2021-07-22T00:00:00.000Z",formattedDate:"July 22, 2021",tags:[{label:"code",permalink:"/blog/tags/code"},{label:"solution",permalink:"/blog/tags/solution"}],readingTime:5.39,hasTruncateMarker:!0,authors:[{name:"Krzysztof Krysi\u0144ski",title:"PixiEditor Creator",url:"https://krysinski.me",imageURL:"https://avatars.githubusercontent.com/u/25402427?s=400&v=4"}],frontMatter:{title:"Dynamic bitmaps",author:"Krzysztof Krysi\u0144ski",author_title:"PixiEditor Creator",author_url:"https://krysinski.me",author_image_url:"https://avatars.githubusercontent.com/u/25402427?s=400&v=4",tags:["code","solution"],keywords:["bitmap","dynamic","data-structure","image","optimization"],description:"Dynamic bitmap is a solution which made PixiEditor work multiple times faster, decreased RAM usage 10 times, and solved memory leak problems.  This article will explain what it is and how it works."},prevItem:{title:"How to write a Todo list app in 10 lines of code in pure C# [no dependencies]",permalink:"/blog/2021/08/06/todo-csharp"},nextItem:{title:"Launching PixiEditor.net",permalink:"/blog/2021/06/06/pixieditor-net-launch"}},d={authorsImageUrls:[void 0]},m=[{value:"History",id:"history",level:2},{value:"What is a dynamic bitmap?",id:"what-is-a-dynamic-bitmap",level:2},{value:"How it works",id:"how-it-works",level:2},{value:"How PixiEditor does this",id:"how-pixieditor-does-this",level:2},{value:"Performance",id:"performance",level:2},{value:"Other benefits",id:"other-benefits",level:2},{value:"Conclusion",id:"conclusion",level:2}],c={toc:m},h="wrapper";function u(e){var t=e.components,i=(0,a.Z)(e,r);return(0,o.kt)(h,(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Dynamic bitmaps are a solution that made PixiEditor work multiple times faster, decreased RAM usage by about 10 times and solved memory leak problems.\nThis article will explain what dynamic bitmaps are and how they work."),(0,o.kt)("h2",{id:"history"},"History"),(0,o.kt)("p",null,"Dynamic bitmaps have been introduced in a very early alpha (version v0.0.3), before that the PixiEditor image system was pretty straightforward."),(0,o.kt)("p",null,"Mouse clicks were converted into relative canvas coordinates, and then color was applied to the pixels at a given position. It was pretty simple, however, this solution had one big downside. PixiEditor uses ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/pl-pl/dotnet/api/system.windows.media.imaging.writeablebitmap?view=net-5.0"},"WriteableBitmap"),"\nto manipulate bitmaps and working on bigger canvases using this solution yielded bad performance and huge memory consumption."),(0,o.kt)("p",null,"So what was the solution? Dynamic bitmaps!"),(0,o.kt)("h2",{id:"what-is-a-dynamic-bitmap"},"What is a dynamic bitmap?"),(0,o.kt)("p",null,"In simple words, a dynamic bitmap is a bitmap that fits the size of its content. This is crucial for the layer system.\nHere is a visual representation of how it works "),(0,o.kt)("video",{class:"blog-video",controls:!0},(0,o.kt)("source",{src:"/videos/dynamic-bitmaps.mp4",type:"video/mp4"})),(0,o.kt)("h2",{id:"how-it-works"},"How it works"),(0,o.kt)("p",null,"Let's start with a simple algorithm"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"1. Create a new bitmap with a size of 0x0 (or of any other size, depending on your usage)\n2. When set pixel is requested (for example user clicked on canvas), do the following:\n3. If the color is not transparent (if alpha is not 0):\n\n  a. If X of given coordinates is bigger than current width or Y is bigger than height, Increase size to bottom right\n\n  b. Else if new colored pixel X is smaller than 0 (relative to bitmap coordinates) or Y is smaller than 0, then increase the size to top left\n  \n4. Else If: color is transparent and coordinates already contain non-transparent pixel and after deleting them, there is a gap between content and the bitmap:\n  a. Decrease size of bitmap to fit content\n")),(0,o.kt)("p",null,"  The process of resizing the bitmap is quite simple:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"1. Create a new bitmap with the desired size\n2. Copy pixels from the current bitmap\n3. Fill a new bitmap with the copied pixels at a calculated offset.\n")),(0,o.kt)("p",null,"  However, the implementation is not trivial, it requires some calculations, like extracting the border pixels, calculating offsets,\nchecking if a coordinate is a border pixel and more."),(0,o.kt)("h2",{id:"how-pixieditor-does-this"},"How PixiEditor does this"),(0,o.kt)("p",null,"   Our algorithms look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"     public void DynamicResize(BitmapPixelChanges pixels)\n     {\n         if (pixels.ChangedPixels.Count == 0)\n         {\n             return;\n         }\n\n         ResetOffset(pixels);\n         Tuple<DoubleCords, bool> borderData = ExtractBorderData(pixels);\n         DoubleCords minMaxCords = borderData.Item1;\n         int newMaxX = minMaxCords.Coords2.X - OffsetX;\n         int newMaxY = minMaxCords.Coords2.Y - OffsetY;\n         int newMinX = minMaxCords.Coords1.X - OffsetX;\n         int newMinY = minMaxCords.Coords1.Y - OffsetY;\n\n         if (!(pixels.WasBuiltAsSingleColored && pixels.ChangedPixels.First().Value.A == 0)) //Check if all requested pixels are transparent\n         {\n             if ((newMaxX + 1 > Width && Width < MaxWidth) || (newMaxY + 1 > Height && Height < MaxHeight))\n             {\n                 IncreaseSizeToBottomAndRight(newMaxX, newMaxY);\n             }\n\n             if ((newMinX < 0 && Width < MaxWidth) || (newMinY < 0 && Height < MaxHeight))\n             {\n                 IncreaseSizeToTopAndLeft(newMinX, newMinY);\n             }\n         }\n\n         // if clip (fit bitmap to content) is requested\n         if (borderData.Item2)\n         {\n             clipRequested = true;\n         }\n     }\n\n     private void IncreaseSizeToBottomAndRight(int newMaxX, int newMaxY)\n     {\n         if (MaxWidth - OffsetX < 0 || MaxHeight - OffsetY < 0)\n         {\n             return;\n         }\n\n         newMaxX = Math.Clamp(Math.Max(newMaxX + 1, Width), 0, MaxWidth - OffsetX);\n         newMaxY = Math.Clamp(Math.Max(newMaxY + 1, Height), 0, MaxHeight - OffsetY);\n\n         ResizeCanvas(0, 0, 0, 0, newMaxX, newMaxY);\n     }\n\n     private void IncreaseSizeToTopAndLeft(int newMinX, int newMinY)\n     {\n         newMinX = Math.Clamp(Math.Min(newMinX, Width), Math.Min(-OffsetX, OffsetX), 0);\n         newMinY = Math.Clamp(Math.Min(newMinY, Height), Math.Min(-OffsetY, OffsetY), 0);\n\n         Offset = new Thickness(\n             Math.Clamp(OffsetX + newMinX, 0, MaxWidth),\n             Math.Clamp(OffsetY + newMinY, 0, MaxHeight),\n             0,\n             0);\n\n         int newWidth = Math.Clamp(Width - newMinX, 0, MaxWidth);\n         int newHeight = Math.Clamp(Height - newMinY, 0, MaxHeight);\n\n         int offsetX = Math.Abs(newWidth - Width);\n         int offsetY = Math.Abs(newHeight - Height);\n\n         ResizeCanvas(offsetX, offsetY, 0, 0, newWidth, newHeight);\n     }\n\n     private void ResizeCanvas(int offsetX, int offsetY, int offsetXSrc, int offsetYSrc, int newWidth, int newHeight)\n     {\n         int iteratorHeight = Height > newHeight ? newHeight : Height;\n         int count = Width > newWidth ? newWidth : Width;\n\n         using (BitmapContext srcContext = LayerBitmap.GetBitmapContext(ReadWriteMode.ReadOnly))\n         {\n             WriteableBitmap result = BitmapFactory.New(newWidth, newHeight);\n             using (BitmapContext destContext = result.GetBitmapContext())\n             {\n                 for (int line = 0; line < iteratorHeight; line++)\n                 {\n                     int srcOff = (((offsetYSrc + line) * Width) + offsetXSrc) * SizeOfArgb;\n                     int dstOff = (((offsetY + line) * newWidth) + offsetX) * SizeOfArgb;\n                     BitmapContext.BlockCopy(srcContext, srcOff, destContext, dstOff, count * SizeOfArgb);\n                 }\n\n                 LayerBitmap = result;\n                 Width = newWidth;\n                 Height = newHeight;\n             }\n         }\n     }\n\n     private Tuple<DoubleCords, bool> ExtractBorderData(BitmapPixelChanges pixels)\n     {\n         Coordinates firstCords = pixels.ChangedPixels.First().Key;\n         int minX = firstCords.X;\n         int minY = firstCords.Y;\n         int maxX = minX;\n         int maxY = minY;\n         bool clipRequested = false;\n\n         foreach (KeyValuePair<Coordinates, Color> pixel in pixels.ChangedPixels)\n         {\n             if (pixel.Key.X < minX)\n             {\n                 minX = pixel.Key.X;\n             }\n             else if (pixel.Key.X > maxX)\n             {\n                 maxX = pixel.Key.X;\n             }\n\n             if (pixel.Key.Y < minY)\n             {\n                 minY = pixel.Key.Y;\n             }\n             else if (pixel.Key.Y > maxY)\n             {\n                 maxY = pixel.Key.Y;\n             }\n\n             if (clipRequested == false && IsBorderPixel(pixel.Key) && pixel.Value.A == 0)\n             {\n                 clipRequested = true;\n             }\n         }\n\n         return new Tuple<DoubleCords, bool>(\n             new DoubleCords(new Coordinates(minX, minY), new Coordinates(maxX, maxY)), clipRequested);\n     }\n\n     private bool IsBorderPixel(Coordinates cords)\n     {\n         return cords.X - OffsetX == 0 || cords.Y - OffsetY == 0 || cords.X - OffsetX == Width - 1 ||\n                cords.Y - OffsetY == Height - 1;\n     }\n")),(0,o.kt)("p",null,"As you can see, the code is not trivial, it takes a lot of steps, our implementation also does a bit more stuff, like requesting clips\n(resizing whole document to perfectly fit the content) and clamping the maximum size. "),(0,o.kt)("h2",{id:"performance"},"Performance"),(0,o.kt)("p",null,"Our implementation is very performant since we are using fast ",(0,o.kt)("inlineCode",{parentName:"p"},"BitmapContext.BlockCopy")," to copy and paste pixels into a new bitmap."),(0,o.kt)("p",null,"It's almost unnoticeable in real-time, with fast mouse movement small visual jittering can be visible, but there is no delay whatsoever.\nHow fast dynamic bitmaps work, depends on the implementation, platform, native bitmap APIs, etc."),(0,o.kt)("h2",{id:"other-benefits"},"Other benefits"),(0,o.kt)("p",null,"The benefits described below are not directly related to the implementation, but the usage of dynamic bitmaps."),(0,o.kt)("p",null,"These features are way easier to create (or possible at all), thanks to perfectly fitted bitmaps:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Resize and rotate border,"),(0,o.kt)("li",{parentName:"ul"},"Clip canvas (fit document to content),"),(0,o.kt)("li",{parentName:"ul"},"Center content relative to document or other layers,"),(0,o.kt)("li",{parentName:"ul"},"Snapping and guides"),(0,o.kt)("li",{parentName:"ul"},"Efficient preview layers")),(0,o.kt)("h2",{id:"conclusion"},"Conclusion"),(0,o.kt)("p",null,"Dynamic bitmaps are a very useful structure, it helps to create a lot of small bitmaps, which can be easily reused.\nNo more unnecessary memory allocation and heavy CPU operations. If you want to learn more,\njoin our ",(0,o.kt)("a",{parentName:"p",href:"https://discord.gg/qSRMYmq"},"Discord"),", we are open to discussions!"))}u.isMDXComponent=!0}}]);