/*! For license information please see c42a90fb.eade59ba.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[484271],{792040:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>l,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=t(824246),o=t(511151);const i={id:"plugin-jenkins-backend.jenkinsconfig.getinstanceconfig",title:"JenkinsConfig.getInstanceConfig()",description:"API reference for JenkinsConfig.getInstanceConfig()"},c=void 0,s={unversionedId:"reference/plugin-jenkins-backend.jenkinsconfig.getinstanceconfig",id:"reference/plugin-jenkins-backend.jenkinsconfig.getinstanceconfig",title:"JenkinsConfig.getInstanceConfig()",description:"API reference for JenkinsConfig.getInstanceConfig()",source:"@site/../docs/reference/plugin-jenkins-backend.jenkinsconfig.getinstanceconfig.md",sourceDirName:"reference",slug:"/reference/plugin-jenkins-backend.jenkinsconfig.getinstanceconfig",permalink:"/docs/reference/plugin-jenkins-backend.jenkinsconfig.getinstanceconfig",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-jenkins-backend.jenkinsconfig.getinstanceconfig.md",tags:[],version:"current",frontMatter:{id:"plugin-jenkins-backend.jenkinsconfig.getinstanceconfig",title:"JenkinsConfig.getInstanceConfig()",description:"API reference for JenkinsConfig.getInstanceConfig()"}},a={},u=[{value:"Parameters",id:"parameters",level:2}];function f(e){const n=Object.assign({p:"p",a:"a",code:"code",pre:"pre",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,o.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/reference/",children:"Home"})," > ",(0,r.jsx)(n.a,{href:"/docs/reference/plugin-jenkins-backend",children:(0,r.jsx)(n.code,{children:"@backstage/plugin-jenkins-backend"})})," > ",(0,r.jsx)(n.a,{href:"/docs/reference/plugin-jenkins-backend.jenkinsconfig",children:(0,r.jsx)(n.code,{children:"JenkinsConfig"})})," > ",(0,r.jsx)(n.a,{href:"/docs/reference/plugin-jenkins-backend.jenkinsconfig.getinstanceconfig",children:(0,r.jsx)(n.code,{children:"getInstanceConfig"})})]}),"\n",(0,r.jsx)(n.p,{children:"Gets a Jenkins instance configuration by name, or the default one if no name is provided."}),"\n",(0,r.jsx)(n.p,{children:"Signature:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"getInstanceConfig(jenkinsName?: string): JenkinsInstanceConfig;\n"})}),"\n",(0,r.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"jenkinsName"}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsxs)(n.td,{children:["(Optional)"," Optional name of the Jenkins instance."]})]})})]}),"\n",(0,r.jsx)(n.p,{children:"Returns:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/reference/plugin-jenkins-backend.jenkinsinstanceconfig",children:"JenkinsInstanceConfig"})}),"\n",(0,r.jsx)(n.p,{children:"The requested Jenkins instance."})]})}const l=function(e={}){const{wrapper:n}=Object.assign({},(0,o.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(f,e)})):f(e)}},862525:e=>{var n=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var n={},t=0;t<10;t++)n["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(n).map((function(e){return n[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,o){for(var i,c,s=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),a=1;a<arguments.length;a++){for(var u in i=Object(arguments[a]))t.call(i,u)&&(s[u]=i[u]);if(n){c=n(i);for(var f=0;f<c.length;f++)r.call(i,c[f])&&(s[c[f]]=i[c[f]])}}return s}},371426:(e,n,t)=>{t(862525);var r=t(827378),o=60103;if(n.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var i=Symbol.for;o=i("react.element"),n.Fragment=i("react.fragment")}var c=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s=Object.prototype.hasOwnProperty,a={key:!0,ref:!0,__self:!0,__source:!0};function u(e,n,t){var r,i={},u=null,f=null;for(r in void 0!==t&&(u=""+t),void 0!==n.key&&(u=""+n.key),void 0!==n.ref&&(f=n.ref),n)s.call(n,r)&&!a.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===i[r]&&(i[r]=n[r]);return{$$typeof:o,type:e,key:u,ref:f,props:i,_owner:c.current}}n.jsx=u,n.jsxs=u},541535:(e,n,t)=>{var r=t(862525),o=60103,i=60106;n.Fragment=60107,n.StrictMode=60108,n.Profiler=60114;var c=60109,s=60110,a=60112;n.Suspense=60113;var u=60115,f=60116;if("function"==typeof Symbol&&Symbol.for){var l=Symbol.for;o=l("react.element"),i=l("react.portal"),n.Fragment=l("react.fragment"),n.StrictMode=l("react.strict_mode"),n.Profiler=l("react.profiler"),c=l("react.provider"),s=l("react.context"),a=l("react.forward_ref"),n.Suspense=l("react.suspense"),u=l("react.memo"),f=l("react.lazy")}var p="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h={};function y(e,n,t){this.props=e,this.context=n,this.refs=h,this.updater=t||g}function j(){}function k(e,n,t){this.props=e,this.context=n,this.refs=h,this.updater=t||g}y.prototype.isReactComponent={},y.prototype.setState=function(e,n){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,n,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},j.prototype=y.prototype;var m=k.prototype=new j;m.constructor=k,r(m,y.prototype),m.isPureReactComponent=!0;var b={current:null},v=Object.prototype.hasOwnProperty,_={key:!0,ref:!0,__self:!0,__source:!0};function x(e,n,t){var r,i={},c=null,s=null;if(null!=n)for(r in void 0!==n.ref&&(s=n.ref),void 0!==n.key&&(c=""+n.key),n)v.call(n,r)&&!_.hasOwnProperty(r)&&(i[r]=n[r]);var a=arguments.length-2;if(1===a)i.children=t;else if(1<a){for(var u=Array(a),f=0;f<a;f++)u[f]=arguments[f+2];i.children=u}if(e&&e.defaultProps)for(r in a=e.defaultProps)void 0===i[r]&&(i[r]=a[r]);return{$$typeof:o,type:e,key:c,ref:s,props:i,_owner:b.current}}function C(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var O=/\/+/g;function w(e,n){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return n[e]}))}(""+e.key):n.toString(36)}function S(e,n,t,r,c){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var a=!1;if(null===e)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case o:case i:a=!0}}if(a)return c=c(a=e),e=""===r?"."+w(a,0):r,Array.isArray(c)?(t="",null!=e&&(t=e.replace(O,"$&/")+"/"),S(c,n,t,"",(function(e){return e}))):null!=c&&(C(c)&&(c=function(e,n){return{$$typeof:o,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}(c,t+(!c.key||a&&a.key===c.key?"":(""+c.key).replace(O,"$&/")+"/")+e)),n.push(c)),1;if(a=0,r=""===r?".":r+":",Array.isArray(e))for(var u=0;u<e.length;u++){var f=r+w(s=e[u],u);a+=S(s,n,t,f,c)}else if(f=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof f)for(e=f.call(e),u=0;!(s=e.next()).done;)a+=S(s=s.value,n,t,f=r+w(s,u++),c);else if("object"===s)throw n=""+e,Error(d(31,"[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n));return a}function E(e,n,t){if(null==e)return e;var r=[],o=0;return S(e,r,"","",(function(e){return n.call(t,e,o++)})),r}function P(e){if(-1===e._status){var n=e._result;n=n(),e._status=0,e._result=n,n.then((function(n){0===e._status&&(n=n.default,e._status=1,e._result=n)}),(function(n){0===e._status&&(e._status=2,e._result=n)}))}if(1===e._status)return e._result;throw e._result}var I={current:null};function R(){var e=I.current;if(null===e)throw Error(d(321));return e}var $={ReactCurrentDispatcher:I,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:b,IsSomeRendererActing:{current:!1},assign:r};n.Children={map:E,forEach:function(e,n,t){E(e,(function(){n.apply(this,arguments)}),t)},count:function(e){var n=0;return E(e,(function(){n++})),n},toArray:function(e){return E(e,(function(e){return e}))||[]},only:function(e){if(!C(e))throw Error(d(143));return e}},n.Component=y,n.PureComponent=k,n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$,n.cloneElement=function(e,n,t){if(null==e)throw Error(d(267,e));var i=r({},e.props),c=e.key,s=e.ref,a=e._owner;if(null!=n){if(void 0!==n.ref&&(s=n.ref,a=b.current),void 0!==n.key&&(c=""+n.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(f in n)v.call(n,f)&&!_.hasOwnProperty(f)&&(i[f]=void 0===n[f]&&void 0!==u?u[f]:n[f])}var f=arguments.length-2;if(1===f)i.children=t;else if(1<f){u=Array(f);for(var l=0;l<f;l++)u[l]=arguments[l+2];i.children=u}return{$$typeof:o,type:e.type,key:c,ref:s,props:i,_owner:a}},n.createContext=function(e,n){return void 0===n&&(n=null),(e={$$typeof:s,_calculateChangedBits:n,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:c,_context:e},e.Consumer=e},n.createElement=x,n.createFactory=function(e){var n=x.bind(null,e);return n.type=e,n},n.createRef=function(){return{current:null}},n.forwardRef=function(e){return{$$typeof:a,render:e}},n.isValidElement=C,n.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:P}},n.memo=function(e,n){return{$$typeof:u,type:e,compare:void 0===n?null:n}},n.useCallback=function(e,n){return R().useCallback(e,n)},n.useContext=function(e,n){return R().useContext(e,n)},n.useDebugValue=function(){},n.useEffect=function(e,n){return R().useEffect(e,n)},n.useImperativeHandle=function(e,n,t){return R().useImperativeHandle(e,n,t)},n.useLayoutEffect=function(e,n){return R().useLayoutEffect(e,n)},n.useMemo=function(e,n){return R().useMemo(e,n)},n.useReducer=function(e,n,t){return R().useReducer(e,n,t)},n.useRef=function(e){return R().useRef(e)},n.useState=function(e){return R().useState(e)},n.version="17.0.2"},827378:(e,n,t)=>{e.exports=t(541535)},824246:(e,n,t)=>{e.exports=t(371426)},511151:(e,n,t)=>{t.d(n,{Zo:()=>s,ah:()=>i});var r=t(667294);const o=r.createContext({});function i(e){const n=r.useContext(o);return r.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const c={};function s({components:e,children:n,disableParentContext:t}){let s;return s=t?"function"==typeof e?e({}):e||c:i(e),r.createElement(o.Provider,{value:s},n)}}}]);