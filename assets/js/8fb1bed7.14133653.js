/*! For license information please see 8fb1bed7.14133653.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[817710],{224943:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(824246),i=n(511151);const o={id:"integrating-plugin-into-software-catalog",title:"Integrate into the Software Catalog",description:"How to integrate a plugin into software catalog"},a=void 0,s={unversionedId:"plugins/integrating-plugin-into-software-catalog",id:"plugins/integrating-plugin-into-software-catalog",title:"Integrate into the Software Catalog",description:"How to integrate a plugin into software catalog",source:"@site/../docs/plugins/integrating-plugin-into-software-catalog.md",sourceDirName:"plugins",slug:"/plugins/integrating-plugin-into-software-catalog",permalink:"/docs/plugins/integrating-plugin-into-software-catalog",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/plugins/integrating-plugin-into-software-catalog.md",tags:[],version:"current",frontMatter:{id:"integrating-plugin-into-software-catalog",title:"Integrate into the Software Catalog",description:"How to integrate a plugin into software catalog"},sidebar:"docs",previous:{title:"Structure of a Plugin",permalink:"/docs/plugins/structure-of-a-plugin"},next:{title:"Integrating Search into a plugin",permalink:"/docs/plugins/integrating-search-into-plugins"}},u={},c=[{value:"Steps",id:"steps",level:2},{value:"Create a plugin",id:"create-a-plugin",level:3},{value:"Reading entities from within your plugin",id:"reading-entities-from-within-your-plugin",level:3},{value:"Import your plugin and embed in the entities page",id:"import-your-plugin-and-embed-in-the-entities-page",level:3}];function l(e){const t=Object.assign({blockquote:"blockquote",p:"p",h2:"h2",ol:"ol",li:"li",a:"a",h3:"h3",pre:"pre",code:"code"},(0,i.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"This is an advanced use case and currently is an experimental feature. Expect\nAPI to change over time"}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"steps",children:"Steps"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"#create-a-plugin",children:"Create a plugin"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"#reading-entities-from-within-your-plugin",children:"Reading entities from within your plugin"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"#import-your-plugin-and-embed-in-the-entities-page",children:"Import your plugin and embed in the entities page"})}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"create-a-plugin",children:"Create a plugin"}),"\n",(0,r.jsxs)(t.p,{children:["Follow the ",(0,r.jsx)(t.a,{href:"/docs/plugins/create-a-plugin",children:"same process"})," as for standalone plugin. You\nshould have a separate package in a folder, which represents your plugin."]}),"\n",(0,r.jsx)(t.p,{children:"Example:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"$ yarn new --select plugin\n> ? Enter an ID for the plugin [required] my-plugin\n> ? Enter the owner(s) of the plugin. If specified, this will be added to CODEOWNERS for the plugin path. [optional]\n\nCreating the plugin...\n"})}),"\n",(0,r.jsx)(t.h3,{id:"reading-entities-from-within-your-plugin",children:"Reading entities from within your plugin"}),"\n",(0,r.jsxs)(t.p,{children:["You can access the currently selected entity using the backstage api\n",(0,r.jsx)(t.a,{href:"/docs/reference/plugin-catalog-react.useentity",children:(0,r.jsx)(t.code,{children:"useEntity"})}),". For example,"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import { useEntity } from '@backstage/plugin-catalog-react';\n\nexport const MyPluginEntityContent = () => {\n  const { entity, loading, error, refresh } = useEntity();\n\n  // Do something with the entity data...\n};\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Internally ",(0,r.jsx)(t.code,{children:"useEntity"})," makes use of\n",(0,r.jsxs)(t.a,{href:"https://reactjs.org/docs/context.html",children:["react ",(0,r.jsx)(t.code,{children:"Context"}),"s"]}),". The entity context is\nprovided by the entity page into which your plugin will be embedded."]}),"\n",(0,r.jsx)(t.h3,{id:"import-your-plugin-and-embed-in-the-entities-page",children:"Import your plugin and embed in the entities page"}),"\n",(0,r.jsxs)(t.p,{children:["To begin, you will need to import your plugin in the entities page. Located at\n",(0,r.jsx)(t.code,{children:"packages/app/src/components/Catalog/EntityPage.tsx"})," from the root package of\nyour backstage app."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import { MyPluginEntityContent } from '@backstage/plugin-my-plugin;\n"})}),"\n",(0,r.jsxs)(t.p,{children:["To add your component to the Entity view, you will need to modify the\n",(0,r.jsx)(t.code,{children:"packages/app/src/components/Catalog/EntityPage.tsx"}),". Depending on the needs of\nyour plugin, you may only care about certain kinds of\n",(0,r.jsx)(t.a,{href:"https://backstage.io/docs/features/software-catalog/descriptor-format",children:"entities"}),",\neach of which has its own\n",(0,r.jsx)(t.a,{href:"https://reactjs.org/docs/rendering-elements.html",children:"element"})," for rendering. This\nfunctionality is handled by the ",(0,r.jsx)(t.code,{children:"EntitySwitch"})," component:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"export const entityPage = (\n  <EntitySwitch>\n    <EntitySwitch.Case if={isKind('component')} children={componentPage} />\n    <EntitySwitch.Case if={isKind('api')} children={apiPage} />\n    <EntitySwitch.Case if={isKind('group')} children={groupPage} />\n    <EntitySwitch.Case if={isKind('user')} children={userPage} />\n    <EntitySwitch.Case if={isKind('system')} children={systemPage} />\n    <EntitySwitch.Case if={isKind('domain')} children={domainPage} />\n\n    <EntitySwitch.Case>{defaultEntityPage}</EntitySwitch.Case>\n  </EntitySwitch>\n);\n"})}),"\n",(0,r.jsxs)(t.p,{children:["At this point, you will need to modify the specific page where you want your\ncomponent to appear. If you are extending the Software Catalog model you will\nneed to add a new case to the ",(0,r.jsx)(t.code,{children:"EntitySwitch"}),". For adding a plugin to an existing\ncomponent type, you modify the existing page. For example, if you want to add\nyour plugin to the ",(0,r.jsx)(t.code,{children:"systemPage"}),", you can add a new tab by adding an\n",(0,r.jsx)(t.code,{children:"EntityLayout.Route"})," such as below:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:'const systemPage = (\n  <EntityLayout>\n    <EntityLayout.Route path="/" title="Overview">\n      <Grid container spacing={3} alignItems="stretch">\n        <Grid item md={6}>\n          <EntityAboutCard variant="gridItem" />\n        </Grid>\n        <Grid item md={6}>\n          <EntityHasComponentsCard variant="gridItem" />\n        </Grid>\n        <Grid item md={6}>\n          <EntityHasApisCard variant="gridItem" />\n        </Grid>\n        <Grid item md={6}>\n          <EntityHasResourcesCard variant="gridItem" />\n        </Grid>\n      </Grid>\n    </EntityLayout.Route>\n    <EntityLayout.Route path="/diagram" title="Diagram">\n      <EntityCatalogGraphCard variant="gridItem" height={400} />\n    </EntityLayout.Route>\n\n    {/* Adding a new tab to the system view */}\n    <EntityLayout.Route path="/your-custom-route" title="CustomTitle">\n      <MyPluginEntityContent />\n    </EntityLayout.Route>\n  </EntityLayout>\n);\n'})})]})}const p=function(e={}){const{wrapper:t}=Object.assign({},(0,i.ah)(),e.components);return t?(0,r.jsx)(t,Object.assign({},e,{children:(0,r.jsx)(l,e)})):l(e)}},862525:e=>{var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(i){return!1}}()?Object.assign:function(e,i){for(var o,a,s=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),u=1;u<arguments.length;u++){for(var c in o=Object(arguments[u]))n.call(o,c)&&(s[c]=o[c]);if(t){a=t(o);for(var l=0;l<a.length;l++)r.call(o,a[l])&&(s[a[l]]=o[a[l]])}}return s}},371426:(e,t,n)=>{n(862525);var r=n(827378),i=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var o=Symbol.for;i=o("react.element"),t.Fragment=o("react.fragment")}var a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s=Object.prototype.hasOwnProperty,u={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var r,o={},c=null,l=null;for(r in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(l=t.ref),t)s.call(t,r)&&!u.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===o[r]&&(o[r]=t[r]);return{$$typeof:i,type:e,key:c,ref:l,props:o,_owner:a.current}}t.jsx=c,t.jsxs=c},541535:(e,t,n)=>{var r=n(862525),i=60103,o=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var a=60109,s=60110,u=60112;t.Suspense=60113;var c=60115,l=60116;if("function"==typeof Symbol&&Symbol.for){var p=Symbol.for;i=p("react.element"),o=p("react.portal"),t.Fragment=p("react.fragment"),t.StrictMode=p("react.strict_mode"),t.Profiler=p("react.profiler"),a=p("react.provider"),s=p("react.context"),u=p("react.forward_ref"),t.Suspense=p("react.suspense"),c=p("react.memo"),l=p("react.lazy")}var d="function"==typeof Symbol&&Symbol.iterator;function f(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h={};function y(e,t,n){this.props=e,this.context=t,this.refs=h,this.updater=n||g}function m(){}function w(e,t,n){this.props=e,this.context=t,this.refs=h,this.updater=n||g}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(f(85));this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},m.prototype=y.prototype;var v=w.prototype=new m;v.constructor=w,r(v,y.prototype),v.isPureReactComponent=!0;var j={current:null},b=Object.prototype.hasOwnProperty,x={key:!0,ref:!0,__self:!0,__source:!0};function E(e,t,n){var r,o={},a=null,s=null;if(null!=t)for(r in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(a=""+t.key),t)b.call(t,r)&&!x.hasOwnProperty(r)&&(o[r]=t[r]);var u=arguments.length-2;if(1===u)o.children=n;else if(1<u){for(var c=Array(u),l=0;l<u;l++)c[l]=arguments[l+2];o.children=c}if(e&&e.defaultProps)for(r in u=e.defaultProps)void 0===o[r]&&(o[r]=u[r]);return{$$typeof:i,type:e,key:a,ref:s,props:o,_owner:j.current}}function _(e){return"object"==typeof e&&null!==e&&e.$$typeof===i}var C=/\/+/g;function S(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function k(e,t,n,r,a){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var u=!1;if(null===e)u=!0;else switch(s){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case i:case o:u=!0}}if(u)return a=a(u=e),e=""===r?"."+S(u,0):r,Array.isArray(a)?(n="",null!=e&&(n=e.replace(C,"$&/")+"/"),k(a,t,n,"",(function(e){return e}))):null!=a&&(_(a)&&(a=function(e,t){return{$$typeof:i,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(a,n+(!a.key||u&&u.key===a.key?"":(""+a.key).replace(C,"$&/")+"/")+e)),t.push(a)),1;if(u=0,r=""===r?".":r+":",Array.isArray(e))for(var c=0;c<e.length;c++){var l=r+S(s=e[c],c);u+=k(s,t,n,l,a)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),c=0;!(s=e.next()).done;)u+=k(s=s.value,t,n,l=r+S(s,c++),a);else if("object"===s)throw t=""+e,Error(f(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return u}function O(e,t,n){if(null==e)return e;var r=[],i=0;return k(e,r,"","",(function(e){return t.call(n,e,i++)})),r}function P(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var R={current:null};function I(){var e=R.current;if(null===e)throw Error(f(321));return e}var $={ReactCurrentDispatcher:R,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:j,IsSomeRendererActing:{current:!1},assign:r};t.Children={map:O,forEach:function(e,t,n){O(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return O(e,(function(){t++})),t},toArray:function(e){return O(e,(function(e){return e}))||[]},only:function(e){if(!_(e))throw Error(f(143));return e}},t.Component=y,t.PureComponent=w,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$,t.cloneElement=function(e,t,n){if(null==e)throw Error(f(267,e));var o=r({},e.props),a=e.key,s=e.ref,u=e._owner;if(null!=t){if(void 0!==t.ref&&(s=t.ref,u=j.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(l in t)b.call(t,l)&&!x.hasOwnProperty(l)&&(o[l]=void 0===t[l]&&void 0!==c?c[l]:t[l])}var l=arguments.length-2;if(1===l)o.children=n;else if(1<l){c=Array(l);for(var p=0;p<l;p++)c[p]=arguments[p+2];o.children=c}return{$$typeof:i,type:e.type,key:a,ref:s,props:o,_owner:u}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:s,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:a,_context:e},e.Consumer=e},t.createElement=E,t.createFactory=function(e){var t=E.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:u,render:e}},t.isValidElement=_,t.lazy=function(e){return{$$typeof:l,_payload:{_status:-1,_result:e},_init:P}},t.memo=function(e,t){return{$$typeof:c,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return I().useCallback(e,t)},t.useContext=function(e,t){return I().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return I().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return I().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return I().useLayoutEffect(e,t)},t.useMemo=function(e,t){return I().useMemo(e,t)},t.useReducer=function(e,t,n){return I().useReducer(e,t,n)},t.useRef=function(e){return I().useRef(e)},t.useState=function(e){return I().useState(e)},t.version="17.0.2"},827378:(e,t,n)=>{e.exports=n(541535)},824246:(e,t,n)=>{e.exports=n(371426)},511151:(e,t,n)=>{n.d(t,{Zo:()=>s,ah:()=>o});var r=n(667294);const i=r.createContext({});function o(e){const t=r.useContext(i);return r.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const a={};function s({components:e,children:t,disableParentContext:n}){let s;return s=n?"function"==typeof e?e({}):e||a:o(e),r.createElement(i.Provider,{value:s},t)}}}]);