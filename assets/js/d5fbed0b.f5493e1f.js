/*! For license information please see d5fbed0b.f5493e1f.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[681172],{631579:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>l,frontMatter:()=>i,metadata:()=>a,toc:()=>f});var n=r(824246),o=r(511151);const i={id:"catalog-model.stringifyentityref",title:"stringifyEntityRef()",description:"API reference for stringifyEntityRef()"},c=void 0,a={unversionedId:"reference/catalog-model.stringifyentityref",id:"reference/catalog-model.stringifyentityref",title:"stringifyEntityRef()",description:"API reference for stringifyEntityRef()",source:"@site/../docs/reference/catalog-model.stringifyentityref.md",sourceDirName:"reference",slug:"/reference/catalog-model.stringifyentityref",permalink:"/docs/reference/catalog-model.stringifyentityref",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/catalog-model.stringifyentityref.md",tags:[],version:"current",frontMatter:{id:"catalog-model.stringifyentityref",title:"stringifyEntityRef()",description:"API reference for stringifyEntityRef()"}},s={},f=[{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}];function u(e){const t=Object.assign({p:"p",a:"a",code:"code",strong:"strong",pre:"pre",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,o.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/catalog-model",children:(0,n.jsx)(t.code,{children:"@backstage/catalog-model"})})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/catalog-model.stringifyentityref",children:(0,n.jsx)(t.code,{children:"stringifyEntityRef"})})]}),"\n",(0,n.jsx)(t.p,{children:"Takes an entity or entity name/reference, and returns the string form of an entity ref."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"function stringifyEntityRef(ref: Entity | {\n    kind: string;\n    namespace?: string;\n    name: string;\n}): string;\n"})}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Parameter"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"ref"}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.a,{href:"/docs/reference/catalog-model.entity",children:"Entity"})," | { kind: string; namespace?: string; name: string; }"]}),(0,n.jsx)(t.td,{children:"The reference to serialize"})]})})]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Returns:"})}),"\n",(0,n.jsx)(t.p,{children:"string"}),"\n",(0,n.jsx)(t.p,{children:"The same reference on either string or compound form"}),"\n",(0,n.jsx)(t.h2,{id:"remarks",children:"Remarks"}),"\n",(0,n.jsx)(t.p,{children:"This function creates a canonical and unique reference to the entity, converting all parts of the name to lowercase and inserts the default namespace if needed. It is typically not the best way to represent the entity reference to the user."})]})}const l=function(e={}){const{wrapper:t}=Object.assign({},(0,o.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(u,e)})):u(e)}},862525:e=>{var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,o){for(var i,c,a=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),s=1;s<arguments.length;s++){for(var f in i=Object(arguments[s]))r.call(i,f)&&(a[f]=i[f]);if(t){c=t(i);for(var u=0;u<c.length;u++)n.call(i,c[u])&&(a[c[u]]=i[c[u]])}}return a}},371426:(e,t,r)=>{r(862525);var n=r(827378),o=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var i=Symbol.for;o=i("react.element"),t.Fragment=i("react.fragment")}var c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a=Object.prototype.hasOwnProperty,s={key:!0,ref:!0,__self:!0,__source:!0};function f(e,t,r){var n,i={},f=null,u=null;for(n in void 0!==r&&(f=""+r),void 0!==t.key&&(f=""+t.key),void 0!==t.ref&&(u=t.ref),t)a.call(t,n)&&!s.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===i[n]&&(i[n]=t[n]);return{$$typeof:o,type:e,key:f,ref:u,props:i,_owner:c.current}}t.jsx=f,t.jsxs=f},541535:(e,t,r)=>{var n=r(862525),o=60103,i=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var c=60109,a=60110,s=60112;t.Suspense=60113;var f=60115,u=60116;if("function"==typeof Symbol&&Symbol.for){var l=Symbol.for;o=l("react.element"),i=l("react.portal"),t.Fragment=l("react.fragment"),t.StrictMode=l("react.strict_mode"),t.Profiler=l("react.profiler"),c=l("react.provider"),a=l("react.context"),s=l("react.forward_ref"),t.Suspense=l("react.suspense"),f=l("react.memo"),u=l("react.lazy")}var d="function"==typeof Symbol&&Symbol.iterator;function p(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h={};function m(e,t,r){this.props=e,this.context=t,this.refs=h,this.updater=r||y}function g(){}function v(e,t,r){this.props=e,this.context=t,this.refs=h,this.updater=r||y}m.prototype.isReactComponent={},m.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(p(85));this.updater.enqueueSetState(this,e,t,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},g.prototype=m.prototype;var j=v.prototype=new g;j.constructor=v,n(j,m.prototype),j.isPureReactComponent=!0;var b={current:null},_=Object.prototype.hasOwnProperty,x={key:!0,ref:!0,__self:!0,__source:!0};function k(e,t,r){var n,i={},c=null,a=null;if(null!=t)for(n in void 0!==t.ref&&(a=t.ref),void 0!==t.key&&(c=""+t.key),t)_.call(t,n)&&!x.hasOwnProperty(n)&&(i[n]=t[n]);var s=arguments.length-2;if(1===s)i.children=r;else if(1<s){for(var f=Array(s),u=0;u<s;u++)f[u]=arguments[u+2];i.children=f}if(e&&e.defaultProps)for(n in s=e.defaultProps)void 0===i[n]&&(i[n]=s[n]);return{$$typeof:o,type:e,key:c,ref:a,props:i,_owner:b.current}}function w(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var E=/\/+/g;function O(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function R(e,t,r,n,c){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var s=!1;if(null===e)s=!0;else switch(a){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case o:case i:s=!0}}if(s)return c=c(s=e),e=""===n?"."+O(s,0):n,Array.isArray(c)?(r="",null!=e&&(r=e.replace(E,"$&/")+"/"),R(c,t,r,"",(function(e){return e}))):null!=c&&(w(c)&&(c=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(c,r+(!c.key||s&&s.key===c.key?"":(""+c.key).replace(E,"$&/")+"/")+e)),t.push(c)),1;if(s=0,n=""===n?".":n+":",Array.isArray(e))for(var f=0;f<e.length;f++){var u=n+O(a=e[f],f);s+=R(a,t,r,u,c)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),f=0;!(a=e.next()).done;)s+=R(a=a.value,t,r,u=n+O(a,f++),c);else if("object"===a)throw t=""+e,Error(p(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return s}function S(e,t,r){if(null==e)return e;var n=[],o=0;return R(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function C(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var P={current:null};function $(){var e=P.current;if(null===e)throw Error(p(321));return e}var I={ReactCurrentDispatcher:P,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:b,IsSomeRendererActing:{current:!1},assign:n};t.Children={map:S,forEach:function(e,t,r){S(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return S(e,(function(){t++})),t},toArray:function(e){return S(e,(function(e){return e}))||[]},only:function(e){if(!w(e))throw Error(p(143));return e}},t.Component=m,t.PureComponent=v,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=I,t.cloneElement=function(e,t,r){if(null==e)throw Error(p(267,e));var i=n({},e.props),c=e.key,a=e.ref,s=e._owner;if(null!=t){if(void 0!==t.ref&&(a=t.ref,s=b.current),void 0!==t.key&&(c=""+t.key),e.type&&e.type.defaultProps)var f=e.type.defaultProps;for(u in t)_.call(t,u)&&!x.hasOwnProperty(u)&&(i[u]=void 0===t[u]&&void 0!==f?f[u]:t[u])}var u=arguments.length-2;if(1===u)i.children=r;else if(1<u){f=Array(u);for(var l=0;l<u;l++)f[l]=arguments[l+2];i.children=f}return{$$typeof:o,type:e.type,key:c,ref:a,props:i,_owner:s}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:a,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:c,_context:e},e.Consumer=e},t.createElement=k,t.createFactory=function(e){var t=k.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:s,render:e}},t.isValidElement=w,t.lazy=function(e){return{$$typeof:u,_payload:{_status:-1,_result:e},_init:C}},t.memo=function(e,t){return{$$typeof:f,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return $().useCallback(e,t)},t.useContext=function(e,t){return $().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return $().useEffect(e,t)},t.useImperativeHandle=function(e,t,r){return $().useImperativeHandle(e,t,r)},t.useLayoutEffect=function(e,t){return $().useLayoutEffect(e,t)},t.useMemo=function(e,t){return $().useMemo(e,t)},t.useReducer=function(e,t,r){return $().useReducer(e,t,r)},t.useRef=function(e){return $().useRef(e)},t.useState=function(e){return $().useState(e)},t.version="17.0.2"},827378:(e,t,r)=>{e.exports=r(541535)},824246:(e,t,r)=>{e.exports=r(371426)},511151:(e,t,r)=>{r.d(t,{Zo:()=>a,ah:()=>i});var n=r(667294);const o=n.createContext({});function i(e){const t=n.useContext(o);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const c={};function a({components:e,children:t,disableParentContext:r}){let a;return a=r?"function"==typeof e?e({}):e||c:i(e),n.createElement(o.Provider,{value:a},t)}}}]);