/*! For license information please see e6de2355.7432b158.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[919382],{280264:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>c,default:()=>f,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var n=t(824246),o=t(511151);const a={id:"catalog-model.makevalidator",title:"makeValidator()",description:"API reference for makeValidator()"},c=void 0,i={unversionedId:"reference/catalog-model.makevalidator",id:"reference/catalog-model.makevalidator",title:"makeValidator()",description:"API reference for makeValidator()",source:"@site/../docs/reference/catalog-model.makevalidator.md",sourceDirName:"reference",slug:"/reference/catalog-model.makevalidator",permalink:"/docs/reference/catalog-model.makevalidator",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/catalog-model.makevalidator.md",tags:[],version:"current",frontMatter:{id:"catalog-model.makevalidator",title:"makeValidator()",description:"API reference for makeValidator()"}},l={},s=[{value:"Parameters",id:"parameters",level:2}];function u(e){const r=Object.assign({p:"p",a:"a",code:"code",pre:"pre",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,o.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/catalog-model",children:(0,n.jsx)(r.code,{children:"@backstage/catalog-model"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/catalog-model.makevalidator",children:(0,n.jsx)(r.code,{children:"makeValidator"})})]}),"\n",(0,n.jsxs)(r.p,{children:["Creates a ",(0,n.jsx)(r.a,{href:"/docs/reference/catalog-model.validators",children:"Validators"})," object from ",(0,n.jsx)(r.code,{children:"overrides"}),", with default values taken from ",(0,n.jsx)(r.a,{href:"/docs/reference/catalog-model.kubernetesvalidatorfunctions",children:"KubernetesValidatorFunctions"})]}),"\n",(0,n.jsx)(r.p,{children:"Signature:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"function makeValidator(overrides?: Partial<Validators>): Validators;\n"})}),"\n",(0,n.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Parameter"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsx)(r.tbody,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"overrides"}),(0,n.jsxs)(r.td,{children:["Partial<",(0,n.jsx)(r.a,{href:"/docs/reference/catalog-model.validators",children:"Validators"}),">"]}),(0,n.jsx)(r.td,{children:"(Optional)"})]})})]}),"\n",(0,n.jsx)(r.p,{children:"Returns:"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"/docs/reference/catalog-model.validators",children:"Validators"})})]})}const f=function(e={}){const{wrapper:r}=Object.assign({},(0,o.ah)(),e.components);return r?(0,n.jsx)(r,Object.assign({},e,{children:(0,n.jsx)(u,e)})):u(e)}},862525:e=>{var r=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,o){for(var a,c,i=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),l=1;l<arguments.length;l++){for(var s in a=Object(arguments[l]))t.call(a,s)&&(i[s]=a[s]);if(r){c=r(a);for(var u=0;u<c.length;u++)n.call(a,c[u])&&(i[c[u]]=a[c[u]])}}return i}},371426:(e,r,t)=>{t(862525);var n=t(827378),o=60103;if(r.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var a=Symbol.for;o=a("react.element"),r.Fragment=a("react.fragment")}var c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i=Object.prototype.hasOwnProperty,l={key:!0,ref:!0,__self:!0,__source:!0};function s(e,r,t){var n,a={},s=null,u=null;for(n in void 0!==t&&(s=""+t),void 0!==r.key&&(s=""+r.key),void 0!==r.ref&&(u=r.ref),r)i.call(r,n)&&!l.hasOwnProperty(n)&&(a[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===a[n]&&(a[n]=r[n]);return{$$typeof:o,type:e,key:s,ref:u,props:a,_owner:c.current}}r.jsx=s,r.jsxs=s},541535:(e,r,t)=>{var n=t(862525),o=60103,a=60106;r.Fragment=60107,r.StrictMode=60108,r.Profiler=60114;var c=60109,i=60110,l=60112;r.Suspense=60113;var s=60115,u=60116;if("function"==typeof Symbol&&Symbol.for){var f=Symbol.for;o=f("react.element"),a=f("react.portal"),r.Fragment=f("react.fragment"),r.StrictMode=f("react.strict_mode"),r.Profiler=f("react.profiler"),c=f("react.provider"),i=f("react.context"),l=f("react.forward_ref"),r.Suspense=f("react.suspense"),s=f("react.memo"),u=f("react.lazy")}var d="function"==typeof Symbol&&Symbol.iterator;function p(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)r+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y={};function m(e,r,t){this.props=e,this.context=r,this.refs=y,this.updater=t||h}function v(){}function j(e,r,t){this.props=e,this.context=r,this.refs=y,this.updater=t||h}m.prototype.isReactComponent={},m.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(p(85));this.updater.enqueueSetState(this,e,r,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=m.prototype;var b=j.prototype=new v;b.constructor=j,n(b,m.prototype),b.isPureReactComponent=!0;var g={current:null},_=Object.prototype.hasOwnProperty,k={key:!0,ref:!0,__self:!0,__source:!0};function x(e,r,t){var n,a={},c=null,i=null;if(null!=r)for(n in void 0!==r.ref&&(i=r.ref),void 0!==r.key&&(c=""+r.key),r)_.call(r,n)&&!k.hasOwnProperty(n)&&(a[n]=r[n]);var l=arguments.length-2;if(1===l)a.children=t;else if(1<l){for(var s=Array(l),u=0;u<l;u++)s[u]=arguments[u+2];a.children=s}if(e&&e.defaultProps)for(n in l=e.defaultProps)void 0===a[n]&&(a[n]=l[n]);return{$$typeof:o,type:e,key:c,ref:i,props:a,_owner:g.current}}function O(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var w=/\/+/g;function S(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return r[e]}))}(""+e.key):r.toString(36)}function P(e,r,t,n,c){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var l=!1;if(null===e)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case o:case a:l=!0}}if(l)return c=c(l=e),e=""===n?"."+S(l,0):n,Array.isArray(c)?(t="",null!=e&&(t=e.replace(w,"$&/")+"/"),P(c,r,t,"",(function(e){return e}))):null!=c&&(O(c)&&(c=function(e,r){return{$$typeof:o,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(c,t+(!c.key||l&&l.key===c.key?"":(""+c.key).replace(w,"$&/")+"/")+e)),r.push(c)),1;if(l=0,n=""===n?".":n+":",Array.isArray(e))for(var s=0;s<e.length;s++){var u=n+S(i=e[s],s);l+=P(i,r,t,u,c)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),s=0;!(i=e.next()).done;)l+=P(i=i.value,r,t,u=n+S(i,s++),c);else if("object"===i)throw r=""+e,Error(p(31,"[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r));return l}function C(e,r,t){if(null==e)return e;var n=[],o=0;return P(e,n,"","",(function(e){return r.call(t,e,o++)})),n}function E(e){if(-1===e._status){var r=e._result;r=r(),e._status=0,e._result=r,r.then((function(r){0===e._status&&(r=r.default,e._status=1,e._result=r)}),(function(r){0===e._status&&(e._status=2,e._result=r)}))}if(1===e._status)return e._result;throw e._result}var R={current:null};function $(){var e=R.current;if(null===e)throw Error(p(321));return e}var V={ReactCurrentDispatcher:R,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:g,IsSomeRendererActing:{current:!1},assign:n};r.Children={map:C,forEach:function(e,r,t){C(e,(function(){r.apply(this,arguments)}),t)},count:function(e){var r=0;return C(e,(function(){r++})),r},toArray:function(e){return C(e,(function(e){return e}))||[]},only:function(e){if(!O(e))throw Error(p(143));return e}},r.Component=m,r.PureComponent=j,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=V,r.cloneElement=function(e,r,t){if(null==e)throw Error(p(267,e));var a=n({},e.props),c=e.key,i=e.ref,l=e._owner;if(null!=r){if(void 0!==r.ref&&(i=r.ref,l=g.current),void 0!==r.key&&(c=""+r.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in r)_.call(r,u)&&!k.hasOwnProperty(u)&&(a[u]=void 0===r[u]&&void 0!==s?s[u]:r[u])}var u=arguments.length-2;if(1===u)a.children=t;else if(1<u){s=Array(u);for(var f=0;f<u;f++)s[f]=arguments[f+2];a.children=s}return{$$typeof:o,type:e.type,key:c,ref:i,props:a,_owner:l}},r.createContext=function(e,r){return void 0===r&&(r=null),(e={$$typeof:i,_calculateChangedBits:r,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:c,_context:e},e.Consumer=e},r.createElement=x,r.createFactory=function(e){var r=x.bind(null,e);return r.type=e,r},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:l,render:e}},r.isValidElement=O,r.lazy=function(e){return{$$typeof:u,_payload:{_status:-1,_result:e},_init:E}},r.memo=function(e,r){return{$$typeof:s,type:e,compare:void 0===r?null:r}},r.useCallback=function(e,r){return $().useCallback(e,r)},r.useContext=function(e,r){return $().useContext(e,r)},r.useDebugValue=function(){},r.useEffect=function(e,r){return $().useEffect(e,r)},r.useImperativeHandle=function(e,r,t){return $().useImperativeHandle(e,r,t)},r.useLayoutEffect=function(e,r){return $().useLayoutEffect(e,r)},r.useMemo=function(e,r){return $().useMemo(e,r)},r.useReducer=function(e,r,t){return $().useReducer(e,r,t)},r.useRef=function(e){return $().useRef(e)},r.useState=function(e){return $().useState(e)},r.version="17.0.2"},827378:(e,r,t)=>{e.exports=t(541535)},824246:(e,r,t)=>{e.exports=t(371426)},511151:(e,r,t)=>{t.d(r,{Zo:()=>i,ah:()=>a});var n=t(667294);const o=n.createContext({});function a(e){const r=n.useContext(o);return n.useMemo((()=>"function"==typeof e?e(r):{...r,...e}),[r,e])}const c={};function i({components:e,children:r,disableParentContext:t}){let i;return i=t?"function"==typeof e?e({}):e||c:a(e),n.createElement(o.Provider,{value:i},r)}}}]);