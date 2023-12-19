/*! For license information please see a7dcf2b5.3bb8bb74.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[3525],{269671:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>f,frontMatter:()=>o,metadata:()=>u,toc:()=>l});var n=r(824246),s=r(511151);const o={id:"plugin-git-release-manager.internals.testhelpers.testhelpers.mock_release_name_semver",title:"internals.testHelpers.testHelpers.MOCK_RELEASE_NAME_SEMVER",description:"API reference for internals.testHelpers.testHelpers.MOCK_RELEASE_NAME_SEMVER"},a=void 0,u={id:"reference/plugin-git-release-manager.internals.testhelpers.testhelpers.mock_release_name_semver",title:"internals.testHelpers.testHelpers.MOCK_RELEASE_NAME_SEMVER",description:"API reference for internals.testHelpers.testHelpers.MOCK_RELEASE_NAME_SEMVER",source:"@site/../docs/reference/plugin-git-release-manager.internals.testhelpers.testhelpers.mock_release_name_semver.md",sourceDirName:"reference",slug:"/reference/plugin-git-release-manager.internals.testhelpers.testhelpers.mock_release_name_semver",permalink:"/docs/reference/plugin-git-release-manager.internals.testhelpers.testhelpers.mock_release_name_semver",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-git-release-manager.internals.testhelpers.testhelpers.mock_release_name_semver.md",tags:[],version:"current",frontMatter:{id:"plugin-git-release-manager.internals.testhelpers.testhelpers.mock_release_name_semver",title:"internals.testHelpers.testHelpers.MOCK_RELEASE_NAME_SEMVER",description:"API reference for internals.testHelpers.testHelpers.MOCK_RELEASE_NAME_SEMVER"}},c={},l=[];function i(e){const t=Object.assign({p:"p",a:"a",code:"code",strong:"strong",pre:"pre"},(0,s.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/plugin-git-release-manager",children:(0,n.jsx)(t.code,{children:"@backstage/plugin-git-release-manager"})})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/plugin-git-release-manager.internals",children:(0,n.jsx)(t.code,{children:"internals"})})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/plugin-git-release-manager.internals.testhelpers",children:(0,n.jsx)(t.code,{children:"testHelpers"})})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/plugin-git-release-manager.internals.testhelpers.testhelpers",children:(0,n.jsx)(t.code,{children:"testHelpers"})})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/plugin-git-release-manager.internals.testhelpers.testhelpers.mock_release_name_semver",children:(0,n.jsx)(t.code,{children:"MOCK\\_RELEASE\\_NAME\\_SEMVER"})})]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:'MOCK_RELEASE_NAME_SEMVER = "Version 1.2.3"\n'})})]})}const f=function(e={}){const{wrapper:t}=Object.assign({},(0,s.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(i,e)})):i(e)}},371426:(e,t,r)=>{var n=r(827378),s=Symbol.for("react.element"),o=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,u=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,r){var n,o={},l=null,i=null;for(n in void 0!==r&&(l=""+r),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(i=t.ref),t)a.call(t,n)&&!c.hasOwnProperty(n)&&(o[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===o[n]&&(o[n]=t[n]);return{$$typeof:s,type:e,key:l,ref:i,props:o,_owner:u.current}}t.Fragment=o,t.jsx=l,t.jsxs=l},541535:(e,t)=>{var r=Symbol.for("react.element"),n=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),c=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),i=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),d=Symbol.iterator;var _={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y=Object.assign,m={};function h(e,t,r){this.props=e,this.context=t,this.refs=m,this.updater=r||_}function E(){}function g(e,t,r){this.props=e,this.context=t,this.refs=m,this.updater=r||_}h.prototype.isReactComponent={},h.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},E.prototype=h.prototype;var v=g.prototype=new E;v.constructor=g,y(v,h.prototype),v.isPureReactComponent=!0;var b=Array.isArray,S=Object.prototype.hasOwnProperty,k={current:null},R={key:!0,ref:!0,__self:!0,__source:!0};function j(e,t,n){var s,o={},a=null,u=null;if(null!=t)for(s in void 0!==t.ref&&(u=t.ref),void 0!==t.key&&(a=""+t.key),t)S.call(t,s)&&!R.hasOwnProperty(s)&&(o[s]=t[s]);var c=arguments.length-2;if(1===c)o.children=n;else if(1<c){for(var l=Array(c),i=0;i<c;i++)l[i]=arguments[i+2];o.children=l}if(e&&e.defaultProps)for(s in c=e.defaultProps)void 0===o[s]&&(o[s]=c[s]);return{$$typeof:r,type:e,key:a,ref:u,props:o,_owner:k.current}}function x(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var C=/\/+/g;function O(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function M(e,t,s,o,a){var u=typeof e;"undefined"!==u&&"boolean"!==u||(e=null);var c=!1;if(null===e)c=!0;else switch(u){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case r:case n:c=!0}}if(c)return a=a(c=e),e=""===o?"."+O(c,0):o,b(a)?(s="",null!=e&&(s=e.replace(C,"$&/")+"/"),M(a,t,s,"",(function(e){return e}))):null!=a&&(x(a)&&(a=function(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(a,s+(!a.key||c&&c.key===a.key?"":(""+a.key).replace(C,"$&/")+"/")+e)),t.push(a)),1;if(c=0,o=""===o?".":o+":",b(e))for(var l=0;l<e.length;l++){var i=o+O(u=e[l],l);c+=M(u,t,s,i,a)}else if(i=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof i)for(e=i.call(e),l=0;!(u=e.next()).done;)c+=M(u=u.value,t,s,i=o+O(u,l++),a);else if("object"===u)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return c}function w(e,t,r){if(null==e)return e;var n=[],s=0;return M(e,n,"","",(function(e){return t.call(r,e,s++)})),n}function A(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var $={current:null},P={transition:null},H={ReactCurrentDispatcher:$,ReactCurrentBatchConfig:P,ReactCurrentOwner:k};t.Children={map:w,forEach:function(e,t,r){w(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return w(e,(function(){t++})),t},toArray:function(e){return w(e,(function(e){return e}))||[]},only:function(e){if(!x(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=h,t.Fragment=s,t.Profiler=a,t.PureComponent=g,t.StrictMode=o,t.Suspense=i,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=H,t.cloneElement=function(e,t,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var s=y({},e.props),o=e.key,a=e.ref,u=e._owner;if(null!=t){if(void 0!==t.ref&&(a=t.ref,u=k.current),void 0!==t.key&&(o=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(l in t)S.call(t,l)&&!R.hasOwnProperty(l)&&(s[l]=void 0===t[l]&&void 0!==c?c[l]:t[l])}var l=arguments.length-2;if(1===l)s.children=n;else if(1<l){c=Array(l);for(var i=0;i<l;i++)c[i]=arguments[i+2];s.children=c}return{$$typeof:r,type:e.type,key:o,ref:a,props:s,_owner:u}},t.createContext=function(e){return(e={$$typeof:c,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:u,_context:e},e.Consumer=e},t.createElement=j,t.createFactory=function(e){var t=j.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:l,render:e}},t.isValidElement=x,t.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:A}},t.memo=function(e,t){return{$$typeof:f,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=P.transition;P.transition={};try{e()}finally{P.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return $.current.useCallback(e,t)},t.useContext=function(e){return $.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return $.current.useDeferredValue(e)},t.useEffect=function(e,t){return $.current.useEffect(e,t)},t.useId=function(){return $.current.useId()},t.useImperativeHandle=function(e,t,r){return $.current.useImperativeHandle(e,t,r)},t.useInsertionEffect=function(e,t){return $.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return $.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return $.current.useMemo(e,t)},t.useReducer=function(e,t,r){return $.current.useReducer(e,t,r)},t.useRef=function(e){return $.current.useRef(e)},t.useState=function(e){return $.current.useState(e)},t.useSyncExternalStore=function(e,t,r){return $.current.useSyncExternalStore(e,t,r)},t.useTransition=function(){return $.current.useTransition()},t.version="18.2.0"},827378:(e,t,r)=>{e.exports=r(541535)},824246:(e,t,r)=>{e.exports=r(371426)},511151:(e,t,r)=>{r.d(t,{Zo:()=>u,ah:()=>o});var n=r(667294);const s=n.createContext({});function o(e){const t=n.useContext(s);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const a={};function u({components:e,children:t,disableParentContext:r}){let u;return u=r?"function"==typeof e?e({}):e||a:o(e),n.createElement(s.Provider,{value:u},t)}}}]);