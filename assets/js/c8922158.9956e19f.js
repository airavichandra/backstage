/*! For license information please see c8922158.9956e19f.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[931948],{603905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var n=r(667294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},f="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=u(r),y=o,d=f["".concat(i,".").concat(y)]||f[y]||p[y]||l;return r?n.createElement(d,a(a({ref:t},s),{},{components:r})):n.createElement(d,a({ref:t},s))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,a=new Array(l);a[0]=y;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[f]="string"==typeof e?e:o,a[1]=c;for(var u=2;u<l;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},729889:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>s});r(827378);var n=r(603905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const a={id:"test-utils.withlogcollector_2",title:"withLogCollector()",description:"API reference for withLogCollector()"},c=void 0,i={unversionedId:"reference/test-utils.withlogcollector_2",id:"reference/test-utils.withlogcollector_2",title:"withLogCollector()",description:"API reference for withLogCollector()",source:"@site/../docs/reference/test-utils.withlogcollector_2.md",sourceDirName:"reference",slug:"/reference/test-utils.withlogcollector_2",permalink:"/docs/reference/test-utils.withlogcollector_2",draft:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/test-utils.withlogcollector_2.md",tags:[],version:"current",frontMatter:{id:"test-utils.withlogcollector_2",title:"withLogCollector()",description:"API reference for withLogCollector()"}},u={},s=[{value:"Parameters",id:"parameters",level:2}],f={toc:s};function p(e){var{components:t}=e,r=l(e,["components"]);return(0,n.kt)("wrapper",o({},f,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",o({parentName:"p"},{href:"/docs/reference/"}),"Home")," ",">"," ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/reference/test-utils"}),(0,n.kt)("inlineCode",{parentName:"a"},"@backstage/test-utils"))," ",">"," ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/reference/test-utils.withlogcollector_2"}),(0,n.kt)("inlineCode",{parentName:"a"},"withLogCollector"))),(0,n.kt)("p",null,"Asynchronous log collector with that only collects selected categories"),(0,n.kt)("b",null,"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-typescript"}),"function withLogCollector<T extends LogFuncs>(logsToCollect: T[], callback: AsyncLogCollector): Promise<CollectedLogs<T>>;\n")),(0,n.kt)("h2",o({},{id:"parameters"}),"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Parameter"),(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"logsToCollect"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"T","[","]"),(0,n.kt)("td",o({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"callback"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("a",o({parentName:"td"},{href:"/docs/reference/test-utils.asynclogcollector"}),"AsyncLogCollector")),(0,n.kt)("td",o({parentName:"tr"},{align:null}))))),(0,n.kt)("b",null,"Returns:"),(0,n.kt)("p",null,"Promise","<",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/reference/test-utils.collectedlogs"}),"CollectedLogs"),"<","T",">",">"))}p.isMDXComponent=!0},862525:e=>{var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,l){for(var a,c,i=o(e),u=1;u<arguments.length;u++){for(var s in a=Object(arguments[u]))r.call(a,s)&&(i[s]=a[s]);if(t){c=t(a);for(var f=0;f<c.length;f++)n.call(a,c[f])&&(i[c[f]]=a[c[f]])}}return i}},541535:(e,t,r)=>{var n=r(862525),o=60103,l=60106;var a=60109,c=60110,i=60112;var u=60115,s=60116;if("function"==typeof Symbol&&Symbol.for){var f=Symbol.for;o=f("react.element"),l=f("react.portal"),f("react.fragment"),f("react.strict_mode"),f("react.profiler"),a=f("react.provider"),c=f("react.context"),i=f("react.forward_ref"),f("react.suspense"),u=f("react.memo"),s=f("react.lazy")}var p="function"==typeof Symbol&&Symbol.iterator;function y(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var d={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m={};function g(e,t,r){this.props=e,this.context=t,this.refs=m,this.updater=r||d}function h(){}function b(e,t,r){this.props=e,this.context=t,this.refs=m,this.updater=r||d}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(y(85));this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},h.prototype=g.prototype;var v=b.prototype=new h;v.constructor=b,n(v,g.prototype),v.isPureReactComponent=!0;var k={current:null},w=Object.prototype.hasOwnProperty,O={key:!0,ref:!0,__self:!0,__source:!0};function j(e,t,r){var n,l={},a=null,c=null;if(null!=t)for(n in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(a=""+t.key),t)w.call(t,n)&&!O.hasOwnProperty(n)&&(l[n]=t[n]);var i=arguments.length-2;if(1===i)l.children=r;else if(1<i){for(var u=Array(i),s=0;s<i;s++)u[s]=arguments[s+2];l.children=u}if(e&&e.defaultProps)for(n in i=e.defaultProps)void 0===l[n]&&(l[n]=i[n]);return{$$typeof:o,type:e,key:a,ref:c,props:l,_owner:k.current}}function _(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var P=/\/+/g;function N(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function C(e,t,r,n,a){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var i=!1;if(null===e)i=!0;else switch(c){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case o:case l:i=!0}}if(i)return a=a(i=e),e=""===n?"."+N(i,0):n,Array.isArray(a)?(r="",null!=e&&(r=e.replace(P,"$&/")+"/"),C(a,t,r,"",(function(e){return e}))):null!=a&&(_(a)&&(a=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(a,r+(!a.key||i&&i.key===a.key?"":(""+a.key).replace(P,"$&/")+"/")+e)),t.push(a)),1;if(i=0,n=""===n?".":n+":",Array.isArray(e))for(var u=0;u<e.length;u++){var s=n+N(c=e[u],u);i+=C(c,t,r,s,a)}else if(s=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof s)for(e=s.call(e),u=0;!(c=e.next()).done;)i+=C(c=c.value,t,r,s=n+N(c,u++),a);else if("object"===c)throw t=""+e,Error(y(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return i}function S(e,t,r){if(null==e)return e;var n=[],o=0;return C(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function T(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var x={current:null};function E(){var e=x.current;if(null===e)throw Error(y(321));return e}},827378:(e,t,r)=>{r(541535)}}]);