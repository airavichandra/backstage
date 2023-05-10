/*! For license information please see 8ac8139b.49a34984.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[616423],{211835:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>f,frontMatter:()=>o,metadata:()=>u,toc:()=>i});var n=r(824246),s=r(511151);const o={id:"backend-tasks.plugintaskscheduler.getscheduledtasks",title:"PluginTaskScheduler.getScheduledTasks()",description:"API reference for PluginTaskScheduler.getScheduledTasks()"},c=void 0,u={unversionedId:"reference/backend-tasks.plugintaskscheduler.getscheduledtasks",id:"reference/backend-tasks.plugintaskscheduler.getscheduledtasks",title:"PluginTaskScheduler.getScheduledTasks()",description:"API reference for PluginTaskScheduler.getScheduledTasks()",source:"@site/../docs/reference/backend-tasks.plugintaskscheduler.getscheduledtasks.md",sourceDirName:"reference",slug:"/reference/backend-tasks.plugintaskscheduler.getscheduledtasks",permalink:"/docs/reference/backend-tasks.plugintaskscheduler.getscheduledtasks",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/backend-tasks.plugintaskscheduler.getscheduledtasks.md",tags:[],version:"current",frontMatter:{id:"backend-tasks.plugintaskscheduler.getscheduledtasks",title:"PluginTaskScheduler.getScheduledTasks()",description:"API reference for PluginTaskScheduler.getScheduledTasks()"}},a={},i=[{value:"Remarks",id:"remarks",level:2}];function l(e){const t=Object.assign({p:"p",a:"a",code:"code",pre:"pre",h2:"h2"},(0,s.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/backend-tasks",children:(0,n.jsx)(t.code,{children:"@backstage/backend-tasks"})})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/backend-tasks.plugintaskscheduler",children:(0,n.jsx)(t.code,{children:"PluginTaskScheduler"})})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/backend-tasks.plugintaskscheduler.getscheduledtasks",children:(0,n.jsx)(t.code,{children:"getScheduledTasks"})})]}),"\n",(0,n.jsx)(t.p,{children:"Returns all scheduled tasks registered to this scheduler."}),"\n",(0,n.jsx)(t.p,{children:"Signature:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"getScheduledTasks(): Promise<TaskDescriptor[]>;\n"})}),"\n",(0,n.jsx)(t.p,{children:"Returns:"}),"\n",(0,n.jsxs)(t.p,{children:["Promise<",(0,n.jsx)(t.a,{href:"/docs/reference/backend-tasks.taskdescriptor",children:"TaskDescriptor"}),"[]>"]}),"\n",(0,n.jsx)(t.p,{children:"Scheduled tasks"}),"\n",(0,n.jsx)(t.h2,{id:"remarks",children:"Remarks"}),"\n",(0,n.jsx)(t.p,{children:"This method is useful for triggering tasks manually using the triggerTask functionality. Note that the returned tasks contain only tasks that have been initialized in this instance of the scheduler."})]})}const f=function(e={}){const{wrapper:t}=Object.assign({},(0,s.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(l,e)})):l(e)}},862525:e=>{var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(s){return!1}}()?Object.assign:function(e,s){for(var o,c,u=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),a=1;a<arguments.length;a++){for(var i in o=Object(arguments[a]))r.call(o,i)&&(u[i]=o[i]);if(t){c=t(o);for(var l=0;l<c.length;l++)n.call(o,c[l])&&(u[c[l]]=o[c[l]])}}return u}},371426:(e,t,r)=>{r(862525);var n=r(827378),s=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var o=Symbol.for;s=o("react.element"),t.Fragment=o("react.fragment")}var c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u=Object.prototype.hasOwnProperty,a={key:!0,ref:!0,__self:!0,__source:!0};function i(e,t,r){var n,o={},i=null,l=null;for(n in void 0!==r&&(i=""+r),void 0!==t.key&&(i=""+t.key),void 0!==t.ref&&(l=t.ref),t)u.call(t,n)&&!a.hasOwnProperty(n)&&(o[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===o[n]&&(o[n]=t[n]);return{$$typeof:s,type:e,key:i,ref:l,props:o,_owner:c.current}}t.jsx=i,t.jsxs=i},541535:(e,t,r)=>{var n=r(862525),s=60103,o=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var c=60109,u=60110,a=60112;t.Suspense=60113;var i=60115,l=60116;if("function"==typeof Symbol&&Symbol.for){var f=Symbol.for;s=f("react.element"),o=f("react.portal"),t.Fragment=f("react.fragment"),t.StrictMode=f("react.strict_mode"),t.Profiler=f("react.profiler"),c=f("react.provider"),u=f("react.context"),a=f("react.forward_ref"),t.Suspense=f("react.suspense"),i=f("react.memo"),l=f("react.lazy")}var d="function"==typeof Symbol&&Symbol.iterator;function p(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},k={};function y(e,t,r){this.props=e,this.context=t,this.refs=k,this.updater=r||h}function g(){}function m(e,t,r){this.props=e,this.context=t,this.refs=k,this.updater=r||h}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(p(85));this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},g.prototype=y.prototype;var v=m.prototype=new g;v.constructor=m,n(v,y.prototype),v.isPureReactComponent=!0;var b={current:null},_=Object.prototype.hasOwnProperty,j={key:!0,ref:!0,__self:!0,__source:!0};function S(e,t,r){var n,o={},c=null,u=null;if(null!=t)for(n in void 0!==t.ref&&(u=t.ref),void 0!==t.key&&(c=""+t.key),t)_.call(t,n)&&!j.hasOwnProperty(n)&&(o[n]=t[n]);var a=arguments.length-2;if(1===a)o.children=r;else if(1<a){for(var i=Array(a),l=0;l<a;l++)i[l]=arguments[l+2];o.children=i}if(e&&e.defaultProps)for(n in a=e.defaultProps)void 0===o[n]&&(o[n]=a[n]);return{$$typeof:s,type:e,key:c,ref:u,props:o,_owner:b.current}}function O(e){return"object"==typeof e&&null!==e&&e.$$typeof===s}var w=/\/+/g;function x(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function P(e,t,r,n,c){var u=typeof e;"undefined"!==u&&"boolean"!==u||(e=null);var a=!1;if(null===e)a=!0;else switch(u){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case s:case o:a=!0}}if(a)return c=c(a=e),e=""===n?"."+x(a,0):n,Array.isArray(c)?(r="",null!=e&&(r=e.replace(w,"$&/")+"/"),P(c,t,r,"",(function(e){return e}))):null!=c&&(O(c)&&(c=function(e,t){return{$$typeof:s,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(c,r+(!c.key||a&&a.key===c.key?"":(""+c.key).replace(w,"$&/")+"/")+e)),t.push(c)),1;if(a=0,n=""===n?".":n+":",Array.isArray(e))for(var i=0;i<e.length;i++){var l=n+x(u=e[i],i);a+=P(u,t,r,l,c)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),i=0;!(u=e.next()).done;)a+=P(u=u.value,t,r,l=n+x(u,i++),c);else if("object"===u)throw t=""+e,Error(p(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return a}function C(e,t,r){if(null==e)return e;var n=[],s=0;return P(e,n,"","",(function(e){return t.call(r,e,s++)})),n}function E(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var R={current:null};function T(){var e=R.current;if(null===e)throw Error(p(321));return e}var $={ReactCurrentDispatcher:R,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:b,IsSomeRendererActing:{current:!1},assign:n};t.Children={map:C,forEach:function(e,t,r){C(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return C(e,(function(){t++})),t},toArray:function(e){return C(e,(function(e){return e}))||[]},only:function(e){if(!O(e))throw Error(p(143));return e}},t.Component=y,t.PureComponent=m,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$,t.cloneElement=function(e,t,r){if(null==e)throw Error(p(267,e));var o=n({},e.props),c=e.key,u=e.ref,a=e._owner;if(null!=t){if(void 0!==t.ref&&(u=t.ref,a=b.current),void 0!==t.key&&(c=""+t.key),e.type&&e.type.defaultProps)var i=e.type.defaultProps;for(l in t)_.call(t,l)&&!j.hasOwnProperty(l)&&(o[l]=void 0===t[l]&&void 0!==i?i[l]:t[l])}var l=arguments.length-2;if(1===l)o.children=r;else if(1<l){i=Array(l);for(var f=0;f<l;f++)i[f]=arguments[f+2];o.children=i}return{$$typeof:s,type:e.type,key:c,ref:u,props:o,_owner:a}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:u,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:c,_context:e},e.Consumer=e},t.createElement=S,t.createFactory=function(e){var t=S.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:a,render:e}},t.isValidElement=O,t.lazy=function(e){return{$$typeof:l,_payload:{_status:-1,_result:e},_init:E}},t.memo=function(e,t){return{$$typeof:i,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return T().useCallback(e,t)},t.useContext=function(e,t){return T().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return T().useEffect(e,t)},t.useImperativeHandle=function(e,t,r){return T().useImperativeHandle(e,t,r)},t.useLayoutEffect=function(e,t){return T().useLayoutEffect(e,t)},t.useMemo=function(e,t){return T().useMemo(e,t)},t.useReducer=function(e,t,r){return T().useReducer(e,t,r)},t.useRef=function(e){return T().useRef(e)},t.useState=function(e){return T().useState(e)},t.version="17.0.2"},827378:(e,t,r)=>{e.exports=r(541535)},824246:(e,t,r)=>{e.exports=r(371426)},511151:(e,t,r)=>{r.d(t,{Zo:()=>u,ah:()=>o});var n=r(667294);const s=n.createContext({});function o(e){const t=n.useContext(s);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const c={};function u({components:e,children:t,disableParentContext:r}){let u;return u=r?"function"==typeof e?e({}):e||c:o(e),n.createElement(s.Provider,{value:u},t)}}}]);