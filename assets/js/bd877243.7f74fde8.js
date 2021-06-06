(self.webpackChunk=self.webpackChunk||[]).push([[0],{2105:(e,n,a)=>{"use strict";a.r(n),a.d(n,{frontMatter:()=>s,metadata:()=>l,toc:()=>d,default:()=>c});var t=a(2122),i=a(9756),o=(a(7294),a(3905)),r=["components"],s={id:"undo-manager",title:"Working with UndoManager and Changes",sidebar_label:"UndoManager and Changes"},l={unversionedId:"undo-manager",id:"undo-manager",isDocsHomePage:!1,title:"About",description:"PixiEditor utilizes a quite complex undo system, yet easy to use after understanding a few concepts. The editor itself handles almost all the hard work and unless you are building some complex tool, implementing new things should come with ease.",source:"@site/../docs/UndoManager.mdx",sourceDirName:".",slug:"/undo-manager",permalink:"/docs/undo-manager",version:"current",sidebar_label:"UndoManager and Changes",frontMatter:{id:"undo-manager",title:"Working with UndoManager and Changes",sidebar_label:"UndoManager and Changes"},sidebar:"docs",previous:{title:"Toolbar Settings",permalink:"/docs/toolbar-settings"},next:{title:"FAQ (Frequently Asked Questions)",permalink:"/docs/faq"}},d=[{value:"<code>AddUndoChange</code>",id:"addundochange",children:[]},{value:"Property-based change",id:"property-based-change",children:[]},{value:"Process-based change",id:"process-based-change",children:[]},{value:"StorageBasedChange",id:"storagebasedchange",children:[]}],p={toc:d};function c(e){var n=e.components,a=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,t.Z)({},p,a,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"PixiEditor utilizes a quite complex undo system, yet easy to use after understanding a few concepts. The editor itself handles almost all the hard work and unless you are building some complex tool, implementing new things should come with ease."),(0,o.kt)("h1",{id:"the-undomanager-class"},"The UndoManager class"),(0,o.kt)("p",null,"Generally, there are 3 methods, that you'll use while working with ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/PixiEditor/PixiEditor/blob/master/PixiEditor/Models/Controllers/UndoManager.cs"},"UndoManager"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"AddUndoChange")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Undo")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Redo"))),(0,o.kt)("h2",{id:"addundochange"},(0,o.kt)("inlineCode",{parentName:"h2"},"AddUndoChange")),(0,o.kt)("p",null,"This is a method that adds your change to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/PixiEditor/PixiEditor/blob/master/PixiEditor/Models/Controllers/UndoManager.cs"},"UndoManager")),(0,o.kt)("p",null,"Example usage: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'public int Number { get; set; }\n\npublic void ChangeNumber(int newNumber)\n{\n    UndoManager.AddUndoChange(new Change("Number", Number, newNumber, "Changed number", this));\n    Number = newNumber;\n}\n')),(0,o.kt)("hr",null),(0,o.kt)("p",null,"There are 2 parameters, ",(0,o.kt)("inlineCode",{parentName:"p"},"Change change")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"bool invokedInsideSetter = false"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Change is a class that contains all the data about your undoable change."),(0,o.kt)("li",{parentName:"ul"},"invokedInsideSetter is used to prevent infinite adding the same change when ",(0,o.kt)("inlineCode",{parentName:"li"},"AddUndoChange")," is located inside the setter property of this change.")),(0,o.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"wrong")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This Example will yield an infinite loop of adding changes to UndoManager"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'private int number;\npublic int Number\n{\n    get => number;\n    set\n    {\n        UndoManager.AddUndoChange(new Change("Number", number, value, "Changed number", this));\n        number = value;\n    }\n}\n')),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"correct")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"By setting ",(0,o.kt)("inlineCode",{parentName:"p"},"invokedInsideSetter")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," this problem is gone."))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'private int number;\npublic int Number\n{\n    get => number;\n    set\n    {\n        UndoManager.AddUndoChange(new Change("Number", number, value, "Changed number", this), true);\n        number = value;\n    }\n}\n')),(0,o.kt)("h1",{id:"different-types-of-change"},"Different types of Change"),(0,o.kt)("h2",{id:"property-based-change"},"Property-based change"),(0,o.kt)("p",null,"This is the most basic change type. It sets the property value on ",(0,o.kt)("inlineCode",{parentName:"p"},"Undo")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Redo"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'public Change(string property, object oldValue, object newValue, string description = "", object root = null)\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"property")," is the name of the property that is affected, dot format is supported (ex. ",(0,o.kt)("inlineCode",{parentName:"li"},"NumberStore.Number"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"oldValue")," is the value before the property was changed"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"newValue")," is the value after the property was changed"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"description")," is the description of the change, it's just a documentation"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"root")," is the parent class that contains property, default is null, which points to PixiEditor ",(0,o.kt)("inlineCode",{parentName:"li"},"UndoChanges")," property containing class (while writing this doc, it's: ",(0,o.kt)("inlineCode",{parentName:"li"},"ViewModelMain.Current.UndoSubViewModel"),")")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"#addundochange"},"Example is shown above")),(0,o.kt)("h2",{id:"process-based-change"},"Process-based change"),(0,o.kt)("p",null,"This type of change is significantly different from a property-based one. It doesn't set any values by itself, but rather executes a defined process (method/function/Action) on ",(0,o.kt)("inlineCode",{parentName:"p"},"Undo")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Redo"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},' public Change(Action<object[]> reverseProcess, object[] reverseArguments, Action<object[]> process, object[] processArguments, string description = "")\n')),(0,o.kt)("p",null,"In this constructor, we have ",(0,o.kt)("inlineCode",{parentName:"p"},"reverseProcess"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"reverseArguments"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"process")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"processArguments"),". The reverse process is a function that is called on ",(0,o.kt)("inlineCode",{parentName:"p"},"Undo")," and the process is a function called on ",(0,o.kt)("inlineCode",{parentName:"p"},"Redo"),". They both are Actions with ",(0,o.kt)("inlineCode",{parentName:"p"},"object[]")," arguments. This kind of Undo is for more complex cases, where simple property changing isn't enough. PixiEditor mainly uses them, since working with images is a challenging task, and we do not store whole bitmaps in memory."),(0,o.kt)("p",null,"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'\npublic WriteableBitmap Bitmap { get; set; }\n\npublic void SetBlackPixel(Coordinates position)\n{\n    object[] processArgs = new object[] { position };\n    object[] reverseProcessArgs = new object[] { position, Colors.Red };\n    UndoManager.AddUndoChange(new Change(RemovePixelProcess, reverseProcessArgs, SetPixelProcess, processArgs, "Set pixel to black"));\n    SetPixelToBlack(position);\n}\n\npublic void SetPixelToBlack(Coordinates position)\n{\n    Bitmap.SetPixel(pixelPosition.X, pixelPosition.Y, Colors.Black);\n}\n\npublic void SetPixelProcess(object[] arguments)\n{\n    if (arguments.Length > 0 && arguments[0] is Coordinates pixelPosition)\n    {\n        SetPixelToBlack(pixelPosition);\n    }\n}\n\npublic void RemovePixelProcess(object[] arguments)\n{\n    if (arguments.Length > 1 && arguments[0] is Coordinates pixelPosition && arguments[1] is Color lastColor)\n    {\n        Bitmap.SetPixel(pixelPosition.X, pixelPosition.Y, lastColor);\n    }\n}\n')),(0,o.kt)("p",null,"In this example, we are setting the pixel at some Coordinates to black, we have 2 methods that are used in undo, they are called processes, One is basically a wrapper for ",(0,o.kt)("inlineCode",{parentName:"p"},"SetPixelToBlack")," with ",(0,o.kt)("inlineCode",{parentName:"p"},"object[] arguments")," and second Undoes the setting pixel with ",(0,o.kt)("inlineCode",{parentName:"p"},"lastColor")," which is red."),(0,o.kt)("h2",{id:"storagebasedchange"},"StorageBasedChange"),(0,o.kt)("p",null,"Some actions are unreversible, and cannot be recreated without saving the bitmap somewhere, that's where ",(0,o.kt)("inlineCode",{parentName:"p"},"StorageBasedChange")," comes in. This change saves selected layers on the disk."),(0,o.kt)("p",null,"This class is basically a wrapper for normal Change, that injects some logic into ",(0,o.kt)("inlineCode",{parentName:"p"},"ReverseProcess")," (undo) and ",(0,o.kt)("inlineCode",{parentName:"p"},"Process")," (redo). Either you choose to save layers on each ",(0,o.kt)("inlineCode",{parentName:"p"},"Undo()")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"Redo()"),", StorageBasedChange supports both approaches."),(0,o.kt)("p",null,"First, you need to construct an object and provide layers, which you want to save with some additional parameters."),(0,o.kt)("p",null,"The basic syntax looks like this: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"StorageBasedChange(Document document, IEnumerable<Layer> layersToSave, bool saveOnStartup = true);\n")),(0,o.kt)("p",null,"where"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"document")," - is a Document that contains layers to save."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"layers")," - layers to save on disk"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"saveOnStartup")," - if true, layers are saved on disk after object initialization (in the constructor)."),(0,o.kt)("p",null,"And the next this is to construct actual ",(0,o.kt)("inlineCode",{parentName:"p"},"Change"),", which you can insert into ",(0,o.kt)("inlineCode",{parentName:"p"},"UndoManager")," using ",(0,o.kt)("inlineCode",{parentName:"p"},"ToChange(...) function"),"."),(0,o.kt)("p",null,"One of the method overloads looks like this"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'public Change ToChange(Action<Layer[], UndoLayer[]> undoProcess, Action<object[]> redoProcess, object[] redoProcessParameters, string description = "")\n')),(0,o.kt)("p",null,"Where"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"undoProcess")," - is a method that will be executed on Undo, it needs to have 2 parameters and doesn't return anything. Both parameters are connected with restored layers from the disk."),(0,o.kt)("p",null,"The first parameter is a ",(0,o.kt)("inlineCode",{parentName:"p"},"Layer[]"),", these layer array is loaded from disk, and you can do whatever with them."),(0,o.kt)("p",null,"The Second parameter is a UndoLayer[], this class contains information about the layer before saving, this is required since ",(0,o.kt)("inlineCode",{parentName:"p"},"StorageBasedUndo")," saves only layer bitmap on disk (as a PNG)."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"redoProcess")," - is a basic method with object[] parameters, same as a normal Change process, but before calling this function, ",(0,o.kt)("inlineCode",{parentName:"p"},"StorageBasedUndo")," saves layers on disk again."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"redoProcessParameters")," - arguments for ",(0,o.kt)("inlineCode",{parentName:"p"},"redoProcess")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"description")," - description of undo."),(0,o.kt)("p",null,"There are a few more overloads, one which swaps ",(0,o.kt)("inlineCode",{parentName:"p"},"Undo")," with ",(0,o.kt)("inlineCode",{parentName:"p"},"Redo"),", so you save layers on disk on ",(0,o.kt)("inlineCode",{parentName:"p"},"Redo")," and restore on ",(0,o.kt)("inlineCode",{parentName:"p"},"Undo"),", another adds the possibility to attach custom parameters to ",(0,o.kt)("inlineCode",{parentName:"p"},"Undo")," etc."),(0,o.kt)("p",null,"Example of add layer undo (taken directly from PixiEditor)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'\n StorageBasedChange storageChange = new StorageBasedChange(this, new[] { Layers[^1] }, false); //Constructing StorageBasedChange with last layer in Layers array\n\nUndoManager.AddUndoChange(\n    storageChange.ToChange(\n    RemoveLayerProcess,\n    new object[] { Layers[^1].LayerGuid },\n    RestoreLayersProcess,\n    "Add layer"));\n\nprivate void RestoreLayersProcess(Layer[] layers, UndoLayer[] layersData)\n        {\n            for (int i = 0; i < layers.Length; i++)\n            {\n                Layer layer = layers[i];\n\n                Layers.Insert(layersData[i].LayerIndex, layer);\n                if (layersData[i].IsActive)\n                {\n                    SetActiveLayer(Layers.IndexOf(layer));\n                }\n            }\n        }\n\nprivate void RemoveLayerProcess(object[] parameters)\n        {\n            if (parameters != null && parameters.Length > 0 && parameters[0] is Guid layerGuid)\n            {\n                Layer layer = Layers.First(x => x.LayerGuid == layerGuid);\n                int index = Layers.IndexOf(layer);\n                bool wasActive = layer.IsActive;\n                Layers.Remove(layer);\n\n                if (wasActive || ActiveLayerIndex >= index)\n                {\n                    SetNextLayerAsActive(index);\n                }\n            }\n        }\n\n')),(0,o.kt)("h1",{id:"summary"},"Summary"),(0,o.kt)("p",null,"Undo system is quite complex, there are a lot of variations and possibilities, you've learned from this guide about most important aspects, you can find out more examples in source code and tests (they are a great source of knowledge!)."))}c.isMDXComponent=!0}}]);