/*! For license information please see 1df93b7f.87bbb734.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([[237],{9754:function(e,t,n){"use strict";n.r(t);var o=n(5068),r=n(7294),i=n(2434),c=n(2491),a=n.n(c),l=function(e){return r.createElement("div",{className:"right"===e.align?"feature right":"feature"},r.createElement("div",{className:"featrue-col"},r.createElement("div",{className:"feature-heading"},r.createElement("div",{className:"feature-icon"},r.createElement("img",{src:e.icon,alt:""})),r.createElement("div",{className:"feature-title"},e.title)),r.createElement("div",{className:"feature-description"},e.description.map((function(e,t){return r.createElement("div",{key:t,className:"feature-description-item"},e)})))),r.createElement("div",{className:"feature-gif"},r.createElement("img",{src:e.gif,alt:"feature gif"})))},s=function(e){return r.createElement("div",{className:"bullet-point"},r.createElement("div",{className:"bullet-point-icon"},r.createElement("img",{src:e.icon,alt:""})),r.createElement("div",{className:"bullet-point-text"},e.text))},u=function(e){function t(){return e.apply(this,arguments)||this}return(0,o.Z)(t,e),t.prototype.render=function(){return r.createElement(i.Z,{id:"mainPage",title:"Main page"},r.createElement("div",{className:"download-section"},r.createElement("h1",{className:"animate__animated animate__fadeInUp"},"A beautiful, lightweight pixel-art editor packed in eye-friendly dark theme."),r.createElement("img",{className:"animate__animated animate__fadeInUp highlighted-img",id:"screenshot",src:"screenshot.png",alt:"Program screenshot"}),r.createElement("div",{className:"download-buttons animate__animated animate__fadeInUp"},r.createElement("a",{href:"/download",className:"download-button"},"Download now"))),r.createElement("div",{className:"bullet-points"},r.createElement(s,{text:"Open source",icon:"icons/github.svg"}),r.createElement(s,{text:"Lightweight",icon:"icons/feather.svg"}),r.createElement(s,{text:"Easy to use",icon:"icons/star.svg"})),r.createElement("div",{className:"features-container"},r.createElement("div",{className:"features"},r.createElement(l,{icon:"icons/layers.svg",title:"Create, edit and organize layers",description:["With our advanced layer system, you can easily organize, edit and work with layers. Delete, group, rename, merge and much more!","We know how important organization is, that's why we designed them, so you can easily locate your layers with live previews."],gif:"gifs/layers.gif"}),r.createElement(l,{icon:"icons/transparency.svg",title:"Full RGBA + layer opacity transparency support",description:["With layer opacity and color alpha, you can combine multiple transparency levels and work with them easily.","You can set individual pixels alpha, or apply whole layer using opacity."],gif:"gifs/RGBA.gif",align:"right"}),r.createElement(l,{icon:"icons/pen-tool.svg",title:" Numerous pixel-perfect tools.",description:["Draw like a pro, using our pixel-perfect pen, which removes unnecessary pixels, so your artwork can be done faster and better.","Bucket, line, ellipse, rectangle, all ready for fast and flawless editing."],gif:"gifs/outline.gif"}),r.createElement(l,{gif:"gifs/Docking.gif",align:"right",icon:"icons/columns.svg",title:"Multiple documents editing support",description:["Edit documents side to side, create multiple columns, rows. Float windows and tabs.","You can organize layout anyway you want, without disturbing your work."]}))),r.createElement(a(),{location:"bottom",style:{background:"#2c2c2c"},cookieName:"cookieConsent",buttonStyle:{background:"#b91f3e",color:"white",fontSize:"13px"},expires:150},"This website uses cookies to enhance the user experience."," "))},t}(r.Component);t.default=u},2491:function(e,t,n){"undefined"!=typeof self&&self,e.exports=function(){var e={808:function(e,t,n){var o,r,i;void 0===(r="function"==typeof(o=i=function(){function e(){for(var e=0,t={};e<arguments.length;e++){var n=arguments[e];for(var o in n)t[o]=n[o]}return t}function t(e){return e.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent)}return function n(o){function r(){}function i(t,n,i){if("undefined"!=typeof document){"number"==typeof(i=e({path:"/"},r.defaults,i)).expires&&(i.expires=new Date(1*new Date+864e5*i.expires)),i.expires=i.expires?i.expires.toUTCString():"";try{var c=JSON.stringify(n);/^[\{\[]/.test(c)&&(n=c)}catch(e){}n=o.write?o.write(n,t):encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),t=encodeURIComponent(String(t)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape);var a="";for(var l in i)i[l]&&(a+="; "+l,!0!==i[l]&&(a+="="+i[l].split(";")[0]));return document.cookie=t+"="+n+a}}function c(e,n){if("undefined"!=typeof document){for(var r={},i=document.cookie?document.cookie.split("; "):[],c=0;c<i.length;c++){var a=i[c].split("="),l=a.slice(1).join("=");n||'"'!==l.charAt(0)||(l=l.slice(1,-1));try{var s=t(a[0]);if(l=(o.read||o)(l,s)||t(l),n)try{l=JSON.parse(l)}catch(e){}if(r[s]=l,e===s)break}catch(e){}}return e?r[e]:r}}return r.set=i,r.get=function(e){return c(e,!1)},r.getJSON=function(e){return c(e,!0)},r.remove=function(t,n){i(t,"",e(n,{expires:-1}))},r.defaults={},r.withConverter=n,r}((function(){}))})?o.call(t,n,t,e):o)||(e.exports=r),e.exports=i()},703:function(e,t,n){"use strict";var o=n(414);function r(){}function i(){}i.resetWarningCache=r,e.exports=function(){function e(e,t,n,r,i,c){if(c!==o){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:r};return n.PropTypes=n,n}},697:function(e,t,n){e.exports=n(703)()},414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}},t={};function o(n){var r=t[n];if(void 0!==r)return r.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,o),i.exports}o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,{a:t}),t},o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var r={};return function(){"use strict";o.r(r),o.d(r,{Cookies:function(){return l()},OPTIONS:function(){return O},SAME_SITE_OPTIONS:function(){return k},VISIBLE_OPTIONS:function(){return C},default:function(){return B},getCookieConsentValue:function(){return S},resetCookieConsentValue:function(){return w}});const e=n(7294);var t=o.n(e),i=o(697),c=o.n(i),a=o(808),l=o.n(a);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var u=["children"];function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){g(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function y(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e,t){if(t&&("object"===s(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return h(e)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var O={TOP:"top",BOTTOM:"bottom",NONE:"none"},k={STRICT:"strict",LAX:"lax",NONE:"none"},C={HIDDEN:"hidden",SHOW:"show",BY_COOKIE_VALUE:"byCookieValue"},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=l().get(e);return void 0===t&&(t=l().get(E(e))),t},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x;l().remove(e)},E=function(e){return"".concat(e,"-legacy")},x="CookieConsent",N=function(e){var t=e.condition,n=e.wrapper,o=e.children;return t?n(o):o},j=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(c,e);var n,o,r,i=(o=c,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=v(o);if(r){var n=v(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return b(this,e)});function c(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),g(h(t=i.call(this,e)),"handleScroll",(function(){var e=t.props.acceptOnScrollPercentage,n=document.documentElement,o=document.body,r="scrollTop",i="scrollHeight";(n[r]||o[r])/((n[i]||o[i])-n.clientHeight)*100>e&&t.accept(!0)})),g(h(t),"removeScrollListener",(function(){t.props.acceptOnScroll&&window.removeEventListener("scroll",t.handleScroll)})),t.state={visible:!1,style:{alignItems:"baseline",background:"#353535",color:"white",display:"flex",flexWrap:"wrap",justifyContent:"space-between",left:"0",position:"fixed",width:"100%",zIndex:"999"},buttonStyle:{background:"#ffd42d",border:"0",borderRadius:"0px",boxShadow:"none",color:"black",cursor:"pointer",flex:"0 0 auto",padding:"5px 10px",margin:"15px"},declineButtonStyle:{background:"#c12a2a",border:"0",borderRadius:"0px",boxShadow:"none",color:"#e5e5e5",cursor:"pointer",flex:"0 0 auto",padding:"5px 10px",margin:"15px"},contentStyle:{flex:"1 0 300px",margin:"15px"},overlayStyle:{position:"fixed",left:0,top:0,width:"100%",height:"100%",zIndex:"999",backgroundColor:"rgba(0,0,0,0.3)"}},t}return(n=[{key:"componentDidMount",value:function(){var e=this.props.debug;(void 0===this.getCookieValue()||e)&&(this.setState({visible:!0}),this.props.acceptOnScroll&&window.addEventListener("scroll",this.handleScroll,{passive:!0}))}},{key:"componentWillUnmount",value:function(){this.removeScrollListener()}},{key:"accept",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=this.props,n=t.cookieName,o=t.cookieValue,r=t.hideOnAccept,i=t.onAccept;this.setCookie(n,o),i(null!=e&&e),r&&(this.setState({visible:!1}),this.removeScrollListener())}},{key:"overlayClick",value:function(){var e=this.props,t=e.acceptOnOverlayClick,n=e.onOverlayClick;t&&this.accept(),n()}},{key:"decline",value:function(){var e=this.props,t=e.cookieName,n=e.declineCookieValue,o=e.hideOnDecline,r=e.onDecline;e.setDeclineCookie&&this.setCookie(t,n),r(),o&&this.setState({visible:!1})}},{key:"setCookie",value:function(e,t){var n=this.props,o=n.extraCookieOptions,r=n.expires,i=n.sameSite,c=this.props.cookieSecurity;void 0===c&&(c=!location||"https:"===location.protocol);var a=d(d({expires:r},o),{},{sameSite:i,secure:c});i===k.NONE&&l().set(E(e),t,a),l().set(e,t,a)}},{key:"getCookieValue",value:function(){var e=this.props.cookieName;return S(e)}},{key:"render",value:function(){var e=this;switch(this.props.visible){case C.HIDDEN:return null;case C.BY_COOKIE_VALUE:if(!this.state.visible)return null}var n=this.props,o=n.location,r=n.style,i=n.buttonStyle,c=n.declineButtonStyle,a=n.contentStyle,l=n.disableStyles,s=n.buttonText,u=n.declineButtonText,f=n.containerClasses,y=n.contentClasses,m=n.buttonClasses,b=n.buttonWrapperClasses,h=n.declineButtonClasses,v=n.buttonId,g=n.declineButtonId,k=n.disableButtonStyles,S=n.enableDeclineButton,w=n.flipButtons,E=n.ButtonComponent,x=n.overlay,j=n.overlayClasses,B=n.overlayStyle,T=n.ariaAcceptLabel,_=n.ariaDeclineLabel,P=n.customContainerAttributes,D=n.customContentAttributes,I={},A={},R={},L={},V={};switch(l?(I=p({},r),A=p({},i),R=p({},c),L=p({},a),V=p({},B)):(I=p({},d(d({},this.state.style),r)),L=p({},d(d({},this.state.contentStyle),a)),V=p({},d(d({},this.state.overlayStyle),B)),k?(A=p({},i),R=p({},c)):(A=p({},d(d({},this.state.buttonStyle),i)),R=p({},d(d({},this.state.declineButtonStyle),c)))),o){case O.TOP:I.top="0";break;case O.BOTTOM:I.bottom="0"}var U=[];return S&&U.push(t().createElement(E,{key:"declineButton",style:R,className:h,id:g,"aria-label":_,onClick:function(){e.decline()}},u)),U.push(t().createElement(E,{key:"acceptButton",style:A,className:m,id:v,"aria-label":T,onClick:function(){e.accept()}},s)),w&&U.reverse(),t().createElement(N,{condition:x,wrapper:function(n){return t().createElement("div",{style:V,className:j,onClick:function(){e.overlayClick()}},n)}},t().createElement("div",p({className:"".concat(f),style:I},P),t().createElement("div",p({style:L,className:y},D),this.props.children),t().createElement("div",{className:"".concat(b)},U.map((function(e){return e})))))}}])&&y(c.prototype,n),c}(e.Component);j.propTypes={location:c().oneOf(Object.keys(O).map((function(e){return O[e]}))),visible:c().oneOf(Object.keys(C).map((function(e){return C[e]}))),sameSite:c().oneOf(Object.keys(k).map((function(e){return k[e]}))),style:c().object,buttonStyle:c().object,declineButtonStyle:c().object,contentStyle:c().object,children:c().any,disableStyles:c().bool,hideOnAccept:c().bool,hideOnDecline:c().bool,onAccept:c().func,onDecline:c().func,buttonText:c().oneOfType([c().string,c().func,c().element]),declineButtonText:c().oneOfType([c().string,c().func,c().element]),cookieName:c().string,cookieValue:c().oneOfType([c().string,c().bool,c().number]),declineCookieValue:c().oneOfType([c().string,c().bool,c().number]),setDeclineCookie:c().bool,debug:c().bool,expires:c().number,containerClasses:c().string,contentClasses:c().string,buttonClasses:c().string,buttonWrapperClasses:c().string,declineButtonClasses:c().string,buttonId:c().string,declineButtonId:c().string,extraCookieOptions:c().object,disableButtonStyles:c().bool,enableDeclineButton:c().bool,flipButtons:c().bool,ButtonComponent:c().elementType,cookieSecurity:c().bool,overlay:c().bool,overlayClasses:c().string,overlayStyle:c().object,onOverlayClick:c().func,acceptOnOverlayClick:c().bool,ariaAcceptLabel:c().string,ariaDeclineLabel:c().string,acceptOnScroll:c().bool,acceptOnScrollPercentage:c().number,customContentAttributes:c().object,customContainerAttributes:c().object},j.defaultProps={disableStyles:!1,hideOnAccept:!0,hideOnDecline:!0,location:O.BOTTOM,visible:C.BY_COOKIE_VALUE,onAccept:function(){},onDecline:function(){},cookieName:x,cookieValue:!0,declineCookieValue:!1,setDeclineCookie:!0,buttonText:"I understand",declineButtonText:"I decline",debug:!1,expires:365,containerClasses:"CookieConsent",contentClasses:"",buttonClasses:"",buttonWrapperClasses:"",declineButtonClasses:"",buttonId:"rcc-confirm-button",declineButtonId:"rcc-decline-button",extraCookieOptions:{},disableButtonStyles:!1,enableDeclineButton:!1,flipButtons:!1,sameSite:k.LAX,ButtonComponent:function(e){var n=e.children,o=function(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}(e,u);return t().createElement("button",o,n)},overlay:!1,overlayClasses:"",onOverlayClick:function(){},acceptOnOverlayClick:!1,ariaAcceptLabel:"Accept cookies",ariaDeclineLabel:"Decline cookies",acceptOnScroll:!1,acceptOnScrollPercentage:25,customContentAttributes:{},customContainerAttributes:{}};const B=j}(),r}()}}]);