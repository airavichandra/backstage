/*! For license information please see cb07ae94.da5a72a7.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[894735],{678922:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>a,default:()=>f,frontMatter:()=>c,metadata:()=>u,toc:()=>s});var t=r(824246),o=r(511151);const c={id:"backend-plugin-manager.backenddynamicplugin",title:"BackendDynamicPlugin",description:"API reference for BackendDynamicPlugin"},a=void 0,u={id:"reference/backend-plugin-manager.backenddynamicplugin",title:"BackendDynamicPlugin",description:"API reference for BackendDynamicPlugin",source:"@site/../docs/reference/backend-plugin-manager.backenddynamicplugin.md",sourceDirName:"reference",slug:"/reference/backend-plugin-manager.backenddynamicplugin",permalink:"/docs/reference/backend-plugin-manager.backenddynamicplugin",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/backend-plugin-manager.backenddynamicplugin.md",tags:[],version:"current",frontMatter:{id:"backend-plugin-manager.backenddynamicplugin",title:"BackendDynamicPlugin",description:"API reference for BackendDynamicPlugin"}},i={},s=[{value:"Properties",id:"properties",level:2}];function l(e){const n=Object.assign({p:"p",a:"a",code:"code",strong:"strong",pre:"pre",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,o.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/reference/",children:"Home"})," > ",(0,t.jsx)(n.a,{href:"/docs/reference/backend-plugin-manager",children:(0,t.jsx)(n.code,{children:"@backstage/backend-plugin-manager"})})," > ",(0,t.jsx)(n.a,{href:"/docs/reference/backend-plugin-manager.backenddynamicplugin",children:(0,t.jsx)(n.code,{children:"BackendDynamicPlugin"})})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"export interface BackendDynamicPlugin extends BaseDynamicPlugin \n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Extends:"})," ",(0,t.jsx)(n.a,{href:"/docs/reference/backend-plugin-manager.basedynamicplugin",children:"BaseDynamicPlugin"})]}),"\n",(0,t.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Property"}),(0,t.jsx)(n.th,{children:"Modifiers"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/backend-plugin-manager.backenddynamicplugin.installer",children:"installer"})}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/backend-plugin-manager.backenddynamicplugininstaller",children:"BackendDynamicPluginInstaller"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/backend-plugin-manager.backenddynamicplugin.platform",children:"platform"})}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"'node'"}),(0,t.jsx)(n.td,{})]})]})]})]})}const f=function(e={}){const{wrapper:n}=Object.assign({},(0,o.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(l,e)})):l(e)}},371426:(e,n,r)=>{var t=r(827378),o=Symbol.for("react.element"),c=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,u=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function s(e,n,r){var t,c={},s=null,l=null;for(t in void 0!==r&&(s=""+r),void 0!==n.key&&(s=""+n.key),void 0!==n.ref&&(l=n.ref),n)a.call(n,t)&&!i.hasOwnProperty(t)&&(c[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===c[t]&&(c[t]=n[t]);return{$$typeof:o,type:e,key:s,ref:l,props:c,_owner:u.current}}n.Fragment=c,n.jsx=s,n.jsxs=s},541535:(e,n)=>{var r=Symbol.for("react.element"),t=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),i=Symbol.for("react.context"),s=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),p=Symbol.iterator;var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,m={};function b(e,n,r){this.props=e,this.context=n,this.refs=m,this.updater=r||y}function g(){}function k(e,n,r){this.props=e,this.context=n,this.refs=m,this.updater=r||y}b.prototype.isReactComponent={},b.prototype.setState=function(e,n){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},g.prototype=b.prototype;var _=k.prototype=new g;_.constructor=k,h(_,b.prototype),_.isPureReactComponent=!0;var j=Array.isArray,x=Object.prototype.hasOwnProperty,v={current:null},S={key:!0,ref:!0,__self:!0,__source:!0};function P(e,n,t){var o,c={},a=null,u=null;if(null!=n)for(o in void 0!==n.ref&&(u=n.ref),void 0!==n.key&&(a=""+n.key),n)x.call(n,o)&&!S.hasOwnProperty(o)&&(c[o]=n[o]);var i=arguments.length-2;if(1===i)c.children=t;else if(1<i){for(var s=Array(i),l=0;l<i;l++)s[l]=arguments[l+2];c.children=s}if(e&&e.defaultProps)for(o in i=e.defaultProps)void 0===c[o]&&(c[o]=i[o]);return{$$typeof:r,type:e,key:a,ref:u,props:c,_owner:v.current}}function E(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var w=/\/+/g;function R(e,n){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return n[e]}))}(""+e.key):n.toString(36)}function C(e,n,o,c,a){var u=typeof e;"undefined"!==u&&"boolean"!==u||(e=null);var i=!1;if(null===e)i=!0;else switch(u){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case r:case t:i=!0}}if(i)return a=a(i=e),e=""===c?"."+R(i,0):c,j(a)?(o="",null!=e&&(o=e.replace(w,"$&/")+"/"),C(a,n,o,"",(function(e){return e}))):null!=a&&(E(a)&&(a=function(e,n){return{$$typeof:r,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}(a,o+(!a.key||i&&i.key===a.key?"":(""+a.key).replace(w,"$&/")+"/")+e)),n.push(a)),1;if(i=0,c=""===c?".":c+":",j(e))for(var s=0;s<e.length;s++){var l=c+R(u=e[s],s);i+=C(u,n,o,l,a)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),s=0;!(u=e.next()).done;)i+=C(u=u.value,n,o,l=c+R(u,s++),a);else if("object"===u)throw n=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return i}function $(e,n,r){if(null==e)return e;var t=[],o=0;return C(e,t,"","",(function(e){return n.call(r,e,o++)})),t}function O(e){if(-1===e._status){var n=e._result;(n=n()).then((function(n){0!==e._status&&-1!==e._status||(e._status=1,e._result=n)}),(function(n){0!==e._status&&-1!==e._status||(e._status=2,e._result=n)})),-1===e._status&&(e._status=0,e._result=n)}if(1===e._status)return e._result.default;throw e._result}var D={current:null},I={transition:null},B={ReactCurrentDispatcher:D,ReactCurrentBatchConfig:I,ReactCurrentOwner:v};n.Children={map:$,forEach:function(e,n,r){$(e,(function(){n.apply(this,arguments)}),r)},count:function(e){var n=0;return $(e,(function(){n++})),n},toArray:function(e){return $(e,(function(e){return e}))||[]},only:function(e){if(!E(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},n.Component=b,n.Fragment=o,n.Profiler=a,n.PureComponent=k,n.StrictMode=c,n.Suspense=l,n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=B,n.cloneElement=function(e,n,t){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=h({},e.props),c=e.key,a=e.ref,u=e._owner;if(null!=n){if(void 0!==n.ref&&(a=n.ref,u=v.current),void 0!==n.key&&(c=""+n.key),e.type&&e.type.defaultProps)var i=e.type.defaultProps;for(s in n)x.call(n,s)&&!S.hasOwnProperty(s)&&(o[s]=void 0===n[s]&&void 0!==i?i[s]:n[s])}var s=arguments.length-2;if(1===s)o.children=t;else if(1<s){i=Array(s);for(var l=0;l<s;l++)i[l]=arguments[l+2];o.children=i}return{$$typeof:r,type:e.type,key:c,ref:a,props:o,_owner:u}},n.createContext=function(e){return(e={$$typeof:i,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:u,_context:e},e.Consumer=e},n.createElement=P,n.createFactory=function(e){var n=P.bind(null,e);return n.type=e,n},n.createRef=function(){return{current:null}},n.forwardRef=function(e){return{$$typeof:s,render:e}},n.isValidElement=E,n.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:O}},n.memo=function(e,n){return{$$typeof:f,type:e,compare:void 0===n?null:n}},n.startTransition=function(e){var n=I.transition;I.transition={};try{e()}finally{I.transition=n}},n.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},n.useCallback=function(e,n){return D.current.useCallback(e,n)},n.useContext=function(e){return D.current.useContext(e)},n.useDebugValue=function(){},n.useDeferredValue=function(e){return D.current.useDeferredValue(e)},n.useEffect=function(e,n){return D.current.useEffect(e,n)},n.useId=function(){return D.current.useId()},n.useImperativeHandle=function(e,n,r){return D.current.useImperativeHandle(e,n,r)},n.useInsertionEffect=function(e,n){return D.current.useInsertionEffect(e,n)},n.useLayoutEffect=function(e,n){return D.current.useLayoutEffect(e,n)},n.useMemo=function(e,n){return D.current.useMemo(e,n)},n.useReducer=function(e,n,r){return D.current.useReducer(e,n,r)},n.useRef=function(e){return D.current.useRef(e)},n.useState=function(e){return D.current.useState(e)},n.useSyncExternalStore=function(e,n,r){return D.current.useSyncExternalStore(e,n,r)},n.useTransition=function(){return D.current.useTransition()},n.version="18.2.0"},827378:(e,n,r)=>{e.exports=r(541535)},824246:(e,n,r)=>{e.exports=r(371426)},511151:(e,n,r)=>{r.d(n,{Zo:()=>u,ah:()=>c});var t=r(667294);const o=t.createContext({});function c(e){const n=t.useContext(o);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const a={};function u({components:e,children:n,disableParentContext:r}){let u;return u=r?"function"==typeof e?e({}):e||a:c(e),t.createElement(o.Provider,{value:u},n)}}}]);