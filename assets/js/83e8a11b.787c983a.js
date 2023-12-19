/*! For license information please see 83e8a11b.787c983a.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[271278],{117503:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>f,frontMatter:()=>o,metadata:()=>i,toc:()=>a});var n=r(824246),c=r(511151);const o={id:"plugin-tech-insights-node.factchecker",title:"FactChecker",description:"API reference for FactChecker"},s=void 0,i={id:"reference/plugin-tech-insights-node.factchecker",title:"FactChecker",description:"API reference for FactChecker",source:"@site/../docs/reference/plugin-tech-insights-node.factchecker.md",sourceDirName:"reference",slug:"/reference/plugin-tech-insights-node.factchecker",permalink:"/docs/reference/plugin-tech-insights-node.factchecker",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-tech-insights-node.factchecker.md",tags:[],version:"current",frontMatter:{id:"plugin-tech-insights-node.factchecker",title:"FactChecker",description:"API reference for FactChecker"}},u={},a=[{value:"Methods",id:"methods",level:2}];function l(e){const t=Object.assign({p:"p",a:"a",code:"code",strong:"strong",pre:"pre",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,c.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/plugin-tech-insights-node",children:(0,n.jsx)(t.code,{children:"@backstage/plugin-tech-insights-node"})})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/plugin-tech-insights-node.factchecker",children:(0,n.jsx)(t.code,{children:"FactChecker"})})]}),"\n",(0,n.jsx)(t.p,{children:"FactChecker interface"}),"\n",(0,n.jsx)(t.p,{children:"A generic interface that can be implemented to create checkers for specific check and check return types. This is used especially when creating Scorecards and displaying results of rules when run against facts."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"export interface FactChecker<CheckType extends TechInsightCheck, CheckResultType extends CheckResult> \n"})}),"\n",(0,n.jsx)(t.h2,{id:"methods",children:"Methods"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Method"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/plugin-tech-insights-node.factchecker.getchecks",children:"getChecks()"})}),(0,n.jsx)(t.td,{children:"Retrieves all available checks that can be used to run checks against. The implementation can be just a piping through to CheckRegistry implementation if such is in use."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/plugin-tech-insights-node.factchecker.runchecks",children:"runChecks(entity, checks)"})}),(0,n.jsx)(t.td,{children:"Runs checks against an entity."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/plugin-tech-insights-node.factchecker.validate",children:"validate(check)"})}),(0,n.jsx)(t.td,{children:"Validates if check is valid and can be run with the current implementation"})]})]})]})]})}const f=function(e={}){const{wrapper:t}=Object.assign({},(0,c.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(l,e)})):l(e)}},371426:(e,t,r)=>{var n=r(827378),c=Symbol.for("react.element"),o=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function a(e,t,r){var n,o={},a=null,l=null;for(n in void 0!==r&&(a=""+r),void 0!==t.key&&(a=""+t.key),void 0!==t.ref&&(l=t.ref),t)s.call(t,n)&&!u.hasOwnProperty(n)&&(o[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===o[n]&&(o[n]=t[n]);return{$$typeof:c,type:e,key:a,ref:l,props:o,_owner:i.current}}t.Fragment=o,t.jsx=a,t.jsxs=a},541535:(e,t)=>{var r=Symbol.for("react.element"),n=Symbol.for("react.portal"),c=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),u=Symbol.for("react.context"),a=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),h=Symbol.for("react.lazy"),d=Symbol.iterator;var p={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y=Object.assign,m={};function g(e,t,r){this.props=e,this.context=t,this.refs=m,this.updater=r||p}function k(){}function b(e,t,r){this.props=e,this.context=t,this.refs=m,this.updater=r||p}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},k.prototype=g.prototype;var _=b.prototype=new k;_.constructor=b,y(_,g.prototype),_.isPureReactComponent=!0;var v=Array.isArray,j=Object.prototype.hasOwnProperty,x={current:null},C={key:!0,ref:!0,__self:!0,__source:!0};function S(e,t,n){var c,o={},s=null,i=null;if(null!=t)for(c in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(s=""+t.key),t)j.call(t,c)&&!C.hasOwnProperty(c)&&(o[c]=t[c]);var u=arguments.length-2;if(1===u)o.children=n;else if(1<u){for(var a=Array(u),l=0;l<u;l++)a[l]=arguments[l+2];o.children=a}if(e&&e.defaultProps)for(c in u=e.defaultProps)void 0===o[c]&&(o[c]=u[c]);return{$$typeof:r,type:e,key:s,ref:i,props:o,_owner:x.current}}function w(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var R=/\/+/g;function E(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function $(e,t,c,o,s){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var u=!1;if(null===e)u=!0;else switch(i){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case r:case n:u=!0}}if(u)return s=s(u=e),e=""===o?"."+E(u,0):o,v(s)?(c="",null!=e&&(c=e.replace(R,"$&/")+"/"),$(s,t,c,"",(function(e){return e}))):null!=s&&(w(s)&&(s=function(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(s,c+(!s.key||u&&u.key===s.key?"":(""+s.key).replace(R,"$&/")+"/")+e)),t.push(s)),1;if(u=0,o=""===o?".":o+":",v(e))for(var a=0;a<e.length;a++){var l=o+E(i=e[a],a);u+=$(i,t,c,l,s)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),a=0;!(i=e.next()).done;)u+=$(i=i.value,t,c,l=o+E(i,a++),s);else if("object"===i)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return u}function O(e,t,r){if(null==e)return e;var n=[],c=0;return $(e,n,"","",(function(e){return t.call(r,e,c++)})),n}function P(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var F={current:null},I={transition:null},T={ReactCurrentDispatcher:F,ReactCurrentBatchConfig:I,ReactCurrentOwner:x};t.Children={map:O,forEach:function(e,t,r){O(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return O(e,(function(){t++})),t},toArray:function(e){return O(e,(function(e){return e}))||[]},only:function(e){if(!w(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=g,t.Fragment=c,t.Profiler=s,t.PureComponent=b,t.StrictMode=o,t.Suspense=l,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T,t.cloneElement=function(e,t,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var c=y({},e.props),o=e.key,s=e.ref,i=e._owner;if(null!=t){if(void 0!==t.ref&&(s=t.ref,i=x.current),void 0!==t.key&&(o=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(a in t)j.call(t,a)&&!C.hasOwnProperty(a)&&(c[a]=void 0===t[a]&&void 0!==u?u[a]:t[a])}var a=arguments.length-2;if(1===a)c.children=n;else if(1<a){u=Array(a);for(var l=0;l<a;l++)u[l]=arguments[l+2];c.children=u}return{$$typeof:r,type:e.type,key:o,ref:s,props:c,_owner:i}},t.createContext=function(e){return(e={$$typeof:u,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},t.createElement=S,t.createFactory=function(e){var t=S.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:a,render:e}},t.isValidElement=w,t.lazy=function(e){return{$$typeof:h,_payload:{_status:-1,_result:e},_init:P}},t.memo=function(e,t){return{$$typeof:f,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=I.transition;I.transition={};try{e()}finally{I.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return F.current.useCallback(e,t)},t.useContext=function(e){return F.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return F.current.useDeferredValue(e)},t.useEffect=function(e,t){return F.current.useEffect(e,t)},t.useId=function(){return F.current.useId()},t.useImperativeHandle=function(e,t,r){return F.current.useImperativeHandle(e,t,r)},t.useInsertionEffect=function(e,t){return F.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return F.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return F.current.useMemo(e,t)},t.useReducer=function(e,t,r){return F.current.useReducer(e,t,r)},t.useRef=function(e){return F.current.useRef(e)},t.useState=function(e){return F.current.useState(e)},t.useSyncExternalStore=function(e,t,r){return F.current.useSyncExternalStore(e,t,r)},t.useTransition=function(){return F.current.useTransition()},t.version="18.2.0"},827378:(e,t,r)=>{e.exports=r(541535)},824246:(e,t,r)=>{e.exports=r(371426)},511151:(e,t,r)=>{r.d(t,{Zo:()=>i,ah:()=>o});var n=r(667294);const c=n.createContext({});function o(e){const t=n.useContext(c);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const s={};function i({components:e,children:t,disableParentContext:r}){let i;return i=r?"function"==typeof e?e({}):e||s:o(e),n.createElement(c.Provider,{value:i},t)}}}]);