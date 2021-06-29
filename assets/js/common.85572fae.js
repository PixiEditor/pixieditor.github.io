/*! For license information please see common.85572fae.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([[592],{2525:e=>{"use strict";var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,a){for(var i,u,c=o(e),s=1;s<arguments.length;s++){for(var l in i=Object(arguments[s]))r.call(i,l)&&(c[l]=i[l]);if(t){u=t(i);for(var f=0;f<u.length;f++)n.call(i,u[f])&&(c[u[f]]=i[u[f]])}}return c}},1535:(e,t,r)=>{"use strict";var n=r(2525),o=60103,a=60106;var i=60109,u=60110,c=60112;var s=60115,l=60116;if("function"==typeof Symbol&&Symbol.for){var f=Symbol.for;o=f("react.element"),a=f("react.portal"),f("react.fragment"),f("react.strict_mode"),f("react.profiler"),i=f("react.provider"),u=f("react.context"),c=f("react.forward_ref"),f("react.suspense"),s=f("react.memo"),l=f("react.lazy")}var p="function"==typeof Symbol&&Symbol.iterator;function v(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var d={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function y(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||d}function h(){}function m(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||d}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(v(85));this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},h.prototype=y.prototype;var b=m.prototype=new h;b.constructor=m,n(b,y.prototype),b.isPureReactComponent=!0;var w={current:null},P=Object.prototype.hasOwnProperty,_={key:!0,ref:!0,__self:!0,__source:!0};function O(e,t,r){var n,a={},i=null,u=null;if(null!=t)for(n in void 0!==t.ref&&(u=t.ref),void 0!==t.key&&(i=""+t.key),t)P.call(t,n)&&!_.hasOwnProperty(n)&&(a[n]=t[n]);var c=arguments.length-2;if(1===c)a.children=r;else if(1<c){for(var s=Array(c),l=0;l<c;l++)s[l]=arguments[l+2];a.children=s}if(e&&e.defaultProps)for(n in c=e.defaultProps)void 0===a[n]&&(a[n]=c[n]);return{$$typeof:o,type:e,key:i,ref:u,props:a,_owner:w.current}}function j(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var D=/\/+/g;function E(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function S(e,t,r,n,i){var u=typeof e;"undefined"!==u&&"boolean"!==u||(e=null);var c=!1;if(null===e)c=!0;else switch(u){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case o:case a:c=!0}}if(c)return i=i(c=e),e=""===n?"."+E(c,0):n,Array.isArray(i)?(r="",null!=e&&(r=e.replace(D,"$&/")+"/"),S(i,t,r,"",(function(e){return e}))):null!=i&&(j(i)&&(i=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,r+(!i.key||c&&c.key===i.key?"":(""+i.key).replace(D,"$&/")+"/")+e)),t.push(i)),1;if(c=0,n=""===n?".":n+":",Array.isArray(e))for(var s=0;s<e.length;s++){var l=n+E(u=e[s],s);c+=S(u,t,r,l,i)}else if("function"==typeof(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e)))for(e=l.call(e),s=0;!(u=e.next()).done;)c+=S(u=u.value,t,r,l=n+E(u,s++),i);else if("object"===u)throw t=""+e,Error(v(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return c}function A(e,t,r){if(null==e)return e;var n=[],o=0;return S(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function k(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var x={current:null};function V(){var e=x.current;if(null===e)throw Error(v(321));return e}},7378:(e,t,r)=>{"use strict";r(1535)},3905:(e,t,r)=>{"use strict";r.d(t,{Zo:()=>l,kt:()=>v});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=s(r),v=o,d=p["".concat(c,".").concat(v)]||p[v]||f[v]||a;return r?n.createElement(d,i(i({ref:t},l),{},{components:r})):n.createElement(d,i({ref:t},l))}));function v(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=p;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},6742:(e,t,r)=>{"use strict";r.d(t,{Z:()=>f});var n=r(9756),o=r(7294),a=r(3727),i=r(3919),u=r(412),c=(0,o.createContext)({collectLink:function(){}}),s=r(4996),l=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];const f=function(e){var t,r,f,p=e.isNavLink,v=e.to,d=e.href,g=e.activeClassName,y=e.isActive,h=e["data-noBrokenLinkCheck"],m=e.autoAddBaseUrl,b=void 0===m||m,w=(0,n.Z)(e,l),P=(0,s.C)().withBaseUrl,_=(0,o.useContext)(c),O=v||d,j=(0,i.Z)(O),D=null==O?void 0:O.replace("pathname://",""),E=void 0!==D?(r=D,b&&function(e){return e.startsWith("/")}(r)?P(r):r):void 0,S=(0,o.useRef)(!1),A=p?a.OL:a.rU,k=u.Z.canUseIntersectionObserver;(0,o.useEffect)((function(){return!k&&j&&null!=E&&window.docusaurus.prefetch(E),function(){k&&f&&f.disconnect()}}),[E,k,j]);var x=null!==(t=null==E?void 0:E.startsWith("#"))&&void 0!==t&&t,V=!E||!j||x;return E&&j&&!x&&!h&&_.collectLink(E),V?o.createElement("a",Object.assign({href:E},O&&!j&&{target:"_blank",rel:"noopener noreferrer"},w)):o.createElement(A,Object.assign({},w,{onMouseEnter:function(){S.current||null==E||(window.docusaurus.preload(E),S.current=!0)},innerRef:function(e){var t,r;k&&e&&j&&(t=e,r=function(){null!=E&&window.docusaurus.prefetch(E)},(f=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(f.unobserve(t),f.disconnect(),r())}))}))).observe(t))},to:E||""},p&&{isActive:y,activeClassName:g}))}},4973:(e,t,r)=>{"use strict";r.d(t,{Z:()=>f,I:()=>l});var n=r(7294),o=/{\w+}/g,a="{}";function i(e,t){var r=[],i=e.replace(o,(function(e){var o=e.substr(1,e.length-2),i=null==t?void 0:t[o];if(void 0!==i){var u=n.isValidElement(i)?i:String(i);return r.push(u),a}return e}));return 0===r.length?e:r.every((function(e){return"string"==typeof e}))?i.split(a).reduce((function(e,t,n){var o;return e.concat(t).concat(null!==(o=r[n])&&void 0!==o?o:"")}),""):i.split(a).reduce((function(e,t,o){return[].concat(e,[n.createElement(n.Fragment,{key:o},t,r[o])])}),[])}function u(e){return i(e.children,e.values)}var c=r(4644);function s(e){var t,r=e.id,n=e.message;return null!==(t=c[null!=r?r:n])&&void 0!==t?t:n}function l(e,t){var r,n=e.message;return i(null!==(r=s({message:n,id:e.id}))&&void 0!==r?r:n,t)}function f(e){var t,r=e.children,o=e.id,a=e.values,i=null!==(t=s({message:r,id:o}))&&void 0!==t?t:r;return n.createElement(u,{values:a},i)}},3919:(e,t,r)=>{"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!n(e)}r.d(t,{b:()=>n,Z:()=>o})},8143:(e,t,r)=>{"use strict";r.r(t),r.d(t,{BrowserRouter:()=>n.VK,HashRouter:()=>n.UT,Link:()=>n.rU,MemoryRouter:()=>n.VA,NavLink:()=>n.OL,Prompt:()=>n.NL,Redirect:()=>n.l_,Route:()=>n.AW,Router:()=>n.F0,StaticRouter:()=>n.gx,Switch:()=>n.rs,generatePath:()=>n.Gn,matchPath:()=>n.LX,useHistory:()=>n.k6,useLocation:()=>n.TH,useParams:()=>n.UO,useRouteMatch:()=>n.$B,withRouter:()=>n.EN});var n=r(3727)},4996:(e,t,r)=>{"use strict";r.d(t,{C:()=>a,Z:()=>i});var n=r(2263),o=r(3919);function a(){var e=(0,n.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,n){var a=void 0===n?{}:n,i=a.forcePrependBaseUrl,u=void 0!==i&&i,c=a.absolute,s=void 0!==c&&c;if(!r)return r;if(r.startsWith("#"))return r;if((0,o.b)(r))return r;if(u)return t+r;var l=r.startsWith(t)?r:t+r.replace(/^\//,"");return s?e+l:l}(a,r,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},8084:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>o,useAllPluginInstancesData:()=>a,usePluginData:()=>i});var n=r(2263);function o(){var e=(0,n.Z)().globalData;if(!e)throw new Error("Docusaurus global data not found");return e}function a(e){var t=o()[e];if(!t)throw new Error("Docusaurus plugin global data not found for pluginName="+e);return t}function i(e,t){void 0===t&&(t="default");var r=a(e)[t];if(!r)throw new Error("Docusaurus plugin global data not found for pluginName="+e+" and pluginId="+t);return r}},8408:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDocVersionSuggestions=t.getActiveDocContext=t.getActiveVersion=t.getLatestVersion=t.getActivePlugin=void 0;var n=r(8143);t.getActivePlugin=function(e,t,r){void 0===r&&(r={});var o=Object.entries(e).find((function(e){e[0];var r=e[1];return!!n.matchPath(t,{path:r.path,exact:!1,strict:!1})})),a=o?{pluginId:o[0],pluginData:o[1]}:void 0;if(!a&&r.failfast)throw new Error("Can't find active docs plugin for pathname="+t+", while it was expected to be found. Maybe you tried to use a docs feature that can only be used on a docs-related page? Existing docs plugin paths are: "+Object.values(e).map((function(e){return e.path})).join(", "));return a};t.getLatestVersion=function(e){return e.versions.find((function(e){return e.isLast}))};t.getActiveVersion=function(e,r){var o=t.getLatestVersion(e);return[].concat(e.versions.filter((function(e){return e!==o})),[o]).find((function(e){return!!n.matchPath(r,{path:e.path,exact:!1,strict:!1})}))};t.getActiveDocContext=function(e,r){var o,a,i=t.getActiveVersion(e,r),u=null==i?void 0:i.docs.find((function(e){return!!n.matchPath(r,{path:e.path,exact:!0,strict:!1})}));return{activeVersion:i,activeDoc:u,alternateDocVersions:u?(o=u.id,a={},e.versions.forEach((function(e){e.docs.forEach((function(t){t.id===o&&(a[e.name]=t)}))})),a):{}}};t.getDocVersionSuggestions=function(e,r){var n=t.getLatestVersion(e),o=t.getActiveDocContext(e,r),a=o.activeVersion!==n;return{latestDocSuggestion:a?null==o?void 0:o.alternateDocVersions[n.name]:void 0,latestVersionSuggestion:a?n:void 0}}},6730:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useDocVersionSuggestions=t.useActiveDocContext=t.useActiveVersion=t.useLatestVersion=t.useVersions=t.useActivePluginAndVersion=t.useActivePlugin=t.useDocsData=t.useAllDocsData=void 0;var n=r(655),o=r(8143),a=n.__importStar(r(8084)),i=r(8408);t.useAllDocsData=function(){var e;return null!==(e=a.default()["docusaurus-plugin-content-docs"])&&void 0!==e?e:{}};t.useDocsData=function(e){return a.usePluginData("docusaurus-plugin-content-docs",e)};t.useActivePlugin=function(e){void 0===e&&(e={});var r=t.useAllDocsData(),n=o.useLocation().pathname;return i.getActivePlugin(r,n,e)};t.useActivePluginAndVersion=function(e){void 0===e&&(e={});var r=t.useActivePlugin(e),n=o.useLocation().pathname;if(r)return{activePlugin:r,activeVersion:i.getActiveVersion(r.pluginData,n)}};t.useVersions=function(e){return t.useDocsData(e).versions};t.useLatestVersion=function(e){var r=t.useDocsData(e);return i.getLatestVersion(r)};t.useActiveVersion=function(e){var r=t.useDocsData(e),n=o.useLocation().pathname;return i.getActiveVersion(r,n)};t.useActiveDocContext=function(e){var r=t.useDocsData(e),n=o.useLocation().pathname;return i.getActiveDocContext(r,n)};t.useDocVersionSuggestions=function(e){var r=t.useDocsData(e),n=o.useLocation().pathname;return i.getDocVersionSuggestions(r,n)}},1217:(e,t,r)=>{"use strict";r.d(t,{Z:()=>u});var n=r(7294),o=r(9105),a=r(9732),i=r(4996);function u(e){var t=e.title,r=e.description,u=e.keywords,c=e.image,s=(0,a.LU)().image,l=(0,a.pe)(t),f=(0,i.Z)(c||s,{absolute:!0});return n.createElement(o.Z,null,t&&n.createElement("title",null,l),t&&n.createElement("meta",{property:"og:title",content:l}),r&&n.createElement("meta",{name:"description",content:r}),r&&n.createElement("meta",{property:"og:description",content:r}),u&&n.createElement("meta",{name:"keywords",content:Array.isArray(u)?u.join(","):u}),f&&n.createElement("meta",{property:"og:image",content:f}),f&&n.createElement("meta",{name:"twitter:image",content:f}),f&&n.createElement("meta",{name:"twitter:card",content:"summary_large_image"}))}},907:(e,t,r)=>{"use strict";r.d(t,{Iw:()=>n.useActiveDocContext,gA:()=>n.useActivePlugin,zu:()=>n.useActiveVersion,_r:()=>n.useAllDocsData,Jo:()=>n.useDocVersionSuggestions,zh:()=>n.useDocsData,yW:()=>n.useLatestVersion,gB:()=>n.useVersions});var n=r(6730)},9732:(e,t,r)=>{"use strict";r.d(t,{HX:()=>g,L5:()=>I,kM:()=>T,WA:()=>s,os:()=>y,Mg:()=>b,_f:()=>l,bc:()=>d,l5:()=>p,ru:()=>S,J:()=>R,c2:()=>E,LU:()=>o,pe:()=>w});var n=r(2263);function o(){return(0,n.Z)().siteConfig.themeConfig}var a="localStorage";function i(e){if(void 0===e&&(e=a),"undefined"==typeof window)throw new Error("Browser storage is not available on NodeJS / Docusaurus SSR process");if("none"===e)return null;try{return window[e]}catch(r){return t=r,u||(console.warn("Docusaurus browser storage is not available.\nPossible reasons: running Docusaurus in an Iframe, in an Incognito browser session, or using too strict browser privacy settings.",t),u=!0),null}var t}var u=!1;var c={get:function(){return null},set:function(){},del:function(){}};var s=function(e,t){if("undefined"==typeof window)return function(e){function t(){throw new Error("Illegal storage API usage for storage key="+e+".\nDocusaurus storage APIs are not supposed to be called on the server-rendering process.\nPlease only call storage APIs in effects and event handlers.")}return{get:t,set:t,del:t}}(e);var r=i(null==t?void 0:t.persistence);return null===r?c:{get:function(){return r.getItem(e)},set:function(t){return r.setItem(e,t)},del:function(){return r.removeItem(e)}}};function l(e){void 0===e&&(e=a);var t=i(e);if(!t)return[];for(var r=[],n=0;n<t.length;n+=1){var o=t.key(n);null!==o&&r.push(o)}return r}var f=r(5977);function p(){var e=(0,n.Z)(),t=e.siteConfig,r=t.baseUrl,o=t.url,a=e.i18n,i=a.defaultLocale,u=a.currentLocale,c=(0,f.TH)().pathname,s=u===i?r:r.replace("/"+u+"/","/"),l=c.replace(r,"");return{createUrl:function(e){var t=e.locale;return""+(e.fullyQualified?o:"")+function(e){return e===i?""+s:""+s+e+"/"}(t)+l}}}var v=/title=(["'])(.*?)\1/;function d(e){var t,r;return null!==(r=null===(t=null==e?void 0:e.match(v))||void 0===t?void 0:t[2])&&void 0!==r?r:""}var g="default";function y(e,t){return"docs-"+e+"-"+t}var h=r(907),m=!!h._r,b=function(e,t){var r=function(e){return!e||(null==e?void 0:e.endsWith("/"))?e:e+"/"};return r(e)===r(t)},w=function(e){var t=(0,n.Z)().siteConfig,r=void 0===t?{}:t,o=r.title,a=r.titleDelimiter,i=void 0===a?"|":a;return e&&e.trim().length?e.trim()+" "+i+" "+o:o},P=r(7294),_=["zero","one","two","few","many","other"];function O(e){return _.filter((function(t){return e.includes(t)}))}var j={locale:"en",pluralForms:O(["one","other"]),select:function(e){return 1===e?"one":"other"}};function D(){var e=(0,n.Z)().i18n.currentLocale;return(0,P.useMemo)((function(){if(!Intl.PluralRules)return console.error("Intl.PluralRules not available!\nDocusaurus will fallback to a default/fallback (English) Intl.PluralRules implementation.\n        "),j;try{return t=e,r=new Intl.PluralRules(t),{locale:t,pluralForms:O(r.resolvedOptions().pluralCategories),select:function(e){return r.select(e)}}}catch(n){return console.error("Failed to use Intl.PluralRules for locale="+e+".\nDocusaurus will fallback to a default/fallback (English) Intl.PluralRules implementation.\n"),j}var t,r}),[e])}function E(){var e=D();return{selectMessage:function(t,r){return function(e,t,r){var n=e.split("|");if(1===n.length)return n[0];n.length>r.pluralForms.length&&console.error("For locale="+r.locale+", a maximum of "+r.pluralForms.length+" plural forms are expected ("+r.pluralForms+"), but the message contains "+n.length+" plural forms: "+e+" ");var o=r.select(t),a=r.pluralForms.indexOf(o);return n[Math.min(a,n.length-1)]}(r,t,e)}}}function S(e){var t=(0,f.TH)().pathname,r=(0,P.useRef)(t);(0,P.useEffect)((function(){t!==r.current&&(r.current=t,e())}),[t,r,e])}var A=function(e){return"docs-preferred-version-"+e};const k={save:function(e,t,r){s(A(e),{persistence:t}).set(r)},read:function(e,t){return s(A(e),{persistence:t}).get()},clear:function(e,t){s(A(e),{persistence:t}).del()}};function x(e){var t=e.pluginIds,r=e.versionPersistence,n=e.allDocsData;var o={};return t.forEach((function(e){o[e]=function(e){var t=k.read(e,r);return n[e].versions.some((function(e){return e.name===t}))?{preferredVersionName:t}:(k.clear(e,r),{preferredVersionName:null})}(e)})),o}function V(){var e=(0,h._r)(),t=o().docs.versionPersistence,r=(0,P.useMemo)((function(){return Object.keys(e)}),[e]),n=(0,P.useState)((function(){return function(e){var t={};return e.forEach((function(e){t[e]={preferredVersionName:null}})),t}(r)})),a=n[0],i=n[1];return(0,P.useEffect)((function(){i(x({allDocsData:e,versionPersistence:t,pluginIds:r}))}),[e,t,r]),[a,(0,P.useMemo)((function(){return{savePreferredVersion:function(e,r){k.save(e,t,r),i((function(t){var n;return Object.assign({},t,((n={})[e]={preferredVersionName:r},n))}))}}}),[i])]}var C=(0,P.createContext)(null);function I(e){var t=e.children;return m?P.createElement(L,null,t):P.createElement(P.Fragment,null,t)}function L(e){var t=e.children,r=V();return P.createElement(C.Provider,{value:r},t)}function R(e){void 0===e&&(e="default");var t=(0,h.zh)(e),r=function(){var e=(0,P.useContext)(C);if(!e)throw new Error("Can't find docs preferred context, maybe you forgot to use the DocsPreferredVersionContextProvider ?");return e}(),n=r[0],o=r[1],a=n[e].preferredVersionName;return{preferredVersion:a?t.versions.find((function(e){return e.name===a})):null,savePreferredVersionName:(0,P.useCallback)((function(t){o.savePreferredVersion(e,t)}),[o])}}var T={page:{blogListPage:"blog-list-page",blogPostPage:"blog-post-page",blogTagsListPage:"blog-tags-list-page",blogTagsPostPage:"blog-tags-post-page",docPage:"doc-page",mdxPage:"mdx-page"},wrapper:{main:"main-wrapper",blogPages:"blog-wrapper",docPages:"docs-wrapper",mdxPages:"mdx-wrapper"}}},6010:(e,t,r)=>{"use strict";function n(e){var t,r,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(o&&(o+=" "),o+=r);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function o(){for(var e,t,r=0,o="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(o&&(o+=" "),o+=t);return o}r.d(t,{Z:()=>o})},655:(e,t,r)=>{"use strict";r.r(t),r.d(t,{__extends:()=>o,__assign:()=>a,__rest:()=>i,__decorate:()=>u,__param:()=>c,__metadata:()=>s,__awaiter:()=>l,__generator:()=>f,__createBinding:()=>p,__exportStar:()=>v,__values:()=>d,__read:()=>g,__spread:()=>y,__spreadArrays:()=>h,__spreadArray:()=>m,__await:()=>b,__asyncGenerator:()=>w,__asyncDelegator:()=>P,__asyncValues:()=>_,__makeTemplateObject:()=>O,__importStar:()=>D,__importDefault:()=>E,__classPrivateFieldGet:()=>S,__classPrivateFieldSet:()=>A});var n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])})(e,t)};function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}var a=function(){return(a=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function i(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r}function u(e,t,r,n){var o,a=arguments.length,i=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,n);else for(var u=e.length-1;u>=0;u--)(o=e[u])&&(i=(a<3?o(i):a>3?o(t,r,i):o(t,r))||i);return a>3&&i&&Object.defineProperty(t,r,i),i}function c(e,t){return function(r,n){t(r,n,e)}}function s(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}function l(e,t,r,n){return new(r||(r=Promise))((function(o,a){function i(e){try{c(n.next(e))}catch(t){a(t)}}function u(e){try{c(n.throw(e))}catch(t){a(t)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(i,u)}c((n=n.apply(e,t||[])).next())}))}function f(e,t){var r,n,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function u(a){return function(u){return function(a){if(r)throw new TypeError("Generator is already executing.");for(;i;)try{if(r=1,n&&(o=2&a[0]?n.return:a[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,a[1])).done)return o;switch(n=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,n=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=i.trys,(o=o.length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(u){a=[6,u],n=0}finally{r=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,u])}}}var p=Object.create?function(e,t,r,n){void 0===n&&(n=r),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]};function v(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||p(t,e,r)}function d(e){var t="function"==typeof Symbol&&Symbol.iterator,r=t&&e[t],n=0;if(r)return r.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function g(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,o,a=r.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(n=a.next()).done;)i.push(n.value)}catch(u){o={error:u}}finally{try{n&&!n.done&&(r=a.return)&&r.call(a)}finally{if(o)throw o.error}}return i}function y(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(g(arguments[t]));return e}function h(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;var n=Array(e),o=0;for(t=0;t<r;t++)for(var a=arguments[t],i=0,u=a.length;i<u;i++,o++)n[o]=a[i];return n}function m(e,t){for(var r=0,n=t.length,o=e.length;r<n;r++,o++)e[o]=t[r];return e}function b(e){return this instanceof b?(this.v=e,this):new b(e)}function w(e,t,r){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n,o=r.apply(e,t||[]),a=[];return n={},i("next"),i("throw"),i("return"),n[Symbol.asyncIterator]=function(){return this},n;function i(e){o[e]&&(n[e]=function(t){return new Promise((function(r,n){a.push([e,t,r,n])>1||u(e,t)}))})}function u(e,t){try{(r=o[e](t)).value instanceof b?Promise.resolve(r.value.v).then(c,s):l(a[0][2],r)}catch(n){l(a[0][3],n)}var r}function c(e){u("next",e)}function s(e){u("throw",e)}function l(e,t){e(t),a.shift(),a.length&&u(a[0][0],a[0][1])}}function P(e){var t,r;return t={},n("next"),n("throw",(function(e){throw e})),n("return"),t[Symbol.iterator]=function(){return this},t;function n(n,o){t[n]=e[n]?function(t){return(r=!r)?{value:b(e[n](t)),done:"return"===n}:o?o(t):t}:o}}function _(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,r=e[Symbol.asyncIterator];return r?r.call(e):(e=d(e),t={},n("next"),n("throw"),n("return"),t[Symbol.asyncIterator]=function(){return this},t);function n(r){t[r]=e[r]&&function(t){return new Promise((function(n,o){(function(e,t,r,n){Promise.resolve(n).then((function(t){e({value:t,done:r})}),t)})(n,o,(t=e[r](t)).done,t.value)}))}}}function O(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}var j=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t};function D(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&p(t,e,r);return j(t,e),t}function E(e){return e&&e.__esModule?e:{default:e}}function S(e,t,r,n){if("a"===r&&!n)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!n:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===r?n:"a"===r?n.call(e):n?n.value:t.get(e)}function A(e,t,r,n,o){if("m"===n)throw new TypeError("Private method is not writable");if("a"===n&&!o)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!o:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===n?o.call(e,r):o?o.value=r:t.set(e,r),r}}}]);