/*! For license information please see 68a76301.a3be777a.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[275615],{507867:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>a,contentTitle:()=>u,default:()=>s,frontMatter:()=>i,metadata:()=>c,toc:()=>f});var t=n(824246),o=n(511151);const i={id:"backend-plugin-api.backendmoduleconfig.pluginid",title:"BackendModuleConfig.pluginId",description:"API reference for BackendModuleConfig.pluginId"},u=void 0,c={unversionedId:"reference/backend-plugin-api.backendmoduleconfig.pluginid",id:"reference/backend-plugin-api.backendmoduleconfig.pluginid",title:"BackendModuleConfig.pluginId",description:"API reference for BackendModuleConfig.pluginId",source:"@site/../docs/reference/backend-plugin-api.backendmoduleconfig.pluginid.md",sourceDirName:"reference",slug:"/reference/backend-plugin-api.backendmoduleconfig.pluginid",permalink:"/docs/reference/backend-plugin-api.backendmoduleconfig.pluginid",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/backend-plugin-api.backendmoduleconfig.pluginid.md",tags:[],version:"current",frontMatter:{id:"backend-plugin-api.backendmoduleconfig.pluginid",title:"BackendModuleConfig.pluginId",description:"API reference for BackendModuleConfig.pluginId"}},a={},f=[];function l(e){const r=Object.assign({p:"p",a:"a",code:"code",b:"b",pre:"pre"},(0,o.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/backend-plugin-api",children:(0,t.jsx)(r.code,{children:"@backstage/backend-plugin-api"})})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/backend-plugin-api.backendmoduleconfig",children:(0,t.jsx)(r.code,{children:"BackendModuleConfig"})})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/backend-plugin-api.backendmoduleconfig.pluginid",children:(0,t.jsx)(r.code,{children:"pluginId"})})]}),"\n",(0,t.jsx)(r.p,{children:"The ID of this plugin."}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.b,{children:"Signature:"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-typescript",children:"pluginId: string;\n"})})]})}const s=function(e={}){const{wrapper:r}=Object.assign({},(0,o.ah)(),e.components);return r?(0,t.jsx)(r,Object.assign({},e,{children:(0,t.jsx)(l,e)})):l(e)}},862525:e=>{var r=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},n=0;n<10;n++)r["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var t={};return"abcdefghijklmnopqrst".split("").forEach((function(e){t[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},t)).join("")}catch(o){return!1}}()?Object.assign:function(e,o){for(var i,u,c=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),a=1;a<arguments.length;a++){for(var f in i=Object(arguments[a]))n.call(i,f)&&(c[f]=i[f]);if(r){u=r(i);for(var l=0;l<u.length;l++)t.call(i,u[l])&&(c[u[l]]=i[u[l]])}}return c}},371426:(e,r,n)=>{n(862525);var t=n(827378),o=60103;if(r.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var i=Symbol.for;o=i("react.element"),r.Fragment=i("react.fragment")}var u=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c=Object.prototype.hasOwnProperty,a={key:!0,ref:!0,__self:!0,__source:!0};function f(e,r,n){var t,i={},f=null,l=null;for(t in void 0!==n&&(f=""+n),void 0!==r.key&&(f=""+r.key),void 0!==r.ref&&(l=r.ref),r)c.call(r,t)&&!a.hasOwnProperty(t)&&(i[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===i[t]&&(i[t]=r[t]);return{$$typeof:o,type:e,key:f,ref:l,props:i,_owner:u.current}}r.jsx=f,r.jsxs=f},541535:(e,r,n)=>{var t=n(862525),o=60103,i=60106;r.Fragment=60107,r.StrictMode=60108,r.Profiler=60114;var u=60109,c=60110,a=60112;r.Suspense=60113;var f=60115,l=60116;if("function"==typeof Symbol&&Symbol.for){var s=Symbol.for;o=s("react.element"),i=s("react.portal"),r.Fragment=s("react.fragment"),r.StrictMode=s("react.strict_mode"),r.Profiler=s("react.profiler"),u=s("react.provider"),c=s("react.context"),a=s("react.forward_ref"),r.Suspense=s("react.suspense"),f=s("react.memo"),l=s("react.lazy")}var p="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)r+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function h(e,r,n){this.props=e,this.context=r,this.refs=g,this.updater=n||y}function b(){}function m(e,r,n){this.props=e,this.context=r,this.refs=g,this.updater=n||y}h.prototype.isReactComponent={},h.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,r,"setState")},h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=h.prototype;var v=m.prototype=new b;v.constructor=m,t(v,h.prototype),v.isPureReactComponent=!0;var k={current:null},_=Object.prototype.hasOwnProperty,j={key:!0,ref:!0,__self:!0,__source:!0};function O(e,r,n){var t,i={},u=null,c=null;if(null!=r)for(t in void 0!==r.ref&&(c=r.ref),void 0!==r.key&&(u=""+r.key),r)_.call(r,t)&&!j.hasOwnProperty(t)&&(i[t]=r[t]);var a=arguments.length-2;if(1===a)i.children=n;else if(1<a){for(var f=Array(a),l=0;l<a;l++)f[l]=arguments[l+2];i.children=f}if(e&&e.defaultProps)for(t in a=e.defaultProps)void 0===i[t]&&(i[t]=a[t]);return{$$typeof:o,type:e,key:u,ref:c,props:i,_owner:k.current}}function w(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var C=/\/+/g;function S(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return r[e]}))}(""+e.key):r.toString(36)}function x(e,r,n,t,u){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var a=!1;if(null===e)a=!0;else switch(c){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case o:case i:a=!0}}if(a)return u=u(a=e),e=""===t?"."+S(a,0):t,Array.isArray(u)?(n="",null!=e&&(n=e.replace(C,"$&/")+"/"),x(u,r,n,"",(function(e){return e}))):null!=u&&(w(u)&&(u=function(e,r){return{$$typeof:o,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(u,n+(!u.key||a&&a.key===u.key?"":(""+u.key).replace(C,"$&/")+"/")+e)),r.push(u)),1;if(a=0,t=""===t?".":t+":",Array.isArray(e))for(var f=0;f<e.length;f++){var l=t+S(c=e[f],f);a+=x(c,r,n,l,u)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),f=0;!(c=e.next()).done;)a+=x(c=c.value,r,n,l=t+S(c,f++),u);else if("object"===c)throw r=""+e,Error(d(31,"[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r));return a}function E(e,r,n){if(null==e)return e;var t=[],o=0;return x(e,t,"","",(function(e){return r.call(n,e,o++)})),t}function P(e){if(-1===e._status){var r=e._result;r=r(),e._status=0,e._result=r,r.then((function(r){0===e._status&&(r=r.default,e._status=1,e._result=r)}),(function(r){0===e._status&&(e._status=2,e._result=r)}))}if(1===e._status)return e._result;throw e._result}var $={current:null};function I(){var e=$.current;if(null===e)throw Error(d(321));return e}var R={ReactCurrentDispatcher:$,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:k,IsSomeRendererActing:{current:!1},assign:t};r.Children={map:E,forEach:function(e,r,n){E(e,(function(){r.apply(this,arguments)}),n)},count:function(e){var r=0;return E(e,(function(){r++})),r},toArray:function(e){return E(e,(function(e){return e}))||[]},only:function(e){if(!w(e))throw Error(d(143));return e}},r.Component=h,r.PureComponent=m,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=R,r.cloneElement=function(e,r,n){if(null==e)throw Error(d(267,e));var i=t({},e.props),u=e.key,c=e.ref,a=e._owner;if(null!=r){if(void 0!==r.ref&&(c=r.ref,a=k.current),void 0!==r.key&&(u=""+r.key),e.type&&e.type.defaultProps)var f=e.type.defaultProps;for(l in r)_.call(r,l)&&!j.hasOwnProperty(l)&&(i[l]=void 0===r[l]&&void 0!==f?f[l]:r[l])}var l=arguments.length-2;if(1===l)i.children=n;else if(1<l){f=Array(l);for(var s=0;s<l;s++)f[s]=arguments[s+2];i.children=f}return{$$typeof:o,type:e.type,key:u,ref:c,props:i,_owner:a}},r.createContext=function(e,r){return void 0===r&&(r=null),(e={$$typeof:c,_calculateChangedBits:r,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:u,_context:e},e.Consumer=e},r.createElement=O,r.createFactory=function(e){var r=O.bind(null,e);return r.type=e,r},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:a,render:e}},r.isValidElement=w,r.lazy=function(e){return{$$typeof:l,_payload:{_status:-1,_result:e},_init:P}},r.memo=function(e,r){return{$$typeof:f,type:e,compare:void 0===r?null:r}},r.useCallback=function(e,r){return I().useCallback(e,r)},r.useContext=function(e,r){return I().useContext(e,r)},r.useDebugValue=function(){},r.useEffect=function(e,r){return I().useEffect(e,r)},r.useImperativeHandle=function(e,r,n){return I().useImperativeHandle(e,r,n)},r.useLayoutEffect=function(e,r){return I().useLayoutEffect(e,r)},r.useMemo=function(e,r){return I().useMemo(e,r)},r.useReducer=function(e,r,n){return I().useReducer(e,r,n)},r.useRef=function(e){return I().useRef(e)},r.useState=function(e){return I().useState(e)},r.version="17.0.2"},827378:(e,r,n)=>{e.exports=n(541535)},824246:(e,r,n)=>{e.exports=n(371426)},511151:(e,r,n)=>{n.d(r,{Zo:()=>c,ah:()=>i});var t=n(667294);const o=t.createContext({});function i(e){const r=t.useContext(o);return t.useMemo((()=>"function"==typeof e?e(r):{...r,...e}),[r,e])}const u={};function c({components:e,children:r,disableParentContext:n}){let c;return c=n?"function"==typeof e?e({}):e||u:i(e),t.createElement(o.Provider,{value:c},r)}}}]);