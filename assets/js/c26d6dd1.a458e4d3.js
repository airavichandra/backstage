/*! For license information please see c26d6dd1.a458e4d3.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[600054],{975150:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var n=r(824246),s=r(511151);const o={id:"v1.7.0",title:"v1.7.0",description:"Backstage Release v1.7.0"},a=void 0,i={id:"releases/v1.7.0",title:"v1.7.0",description:"Backstage Release v1.7.0",source:"@site/../docs/releases/v1.7.0.md",sourceDirName:"releases",slug:"/releases/v1.7.0",permalink:"/docs/releases/v1.7.0",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/releases/v1.7.0.md",tags:[],version:"current",frontMatter:{id:"v1.7.0",title:"v1.7.0",description:"Backstage Release v1.7.0"},sidebar:"releases",previous:{title:"v1.8.0",permalink:"/docs/releases/v1.8.0"},next:{title:"v1.6.0",permalink:"/docs/releases/v1.6.0"}},c={},l=[{value:"Highlights",id:"highlights",level:2},{value:"GitHub Catalog Import now Powered by the Backend",id:"github-catalog-import-now-powered-by-the-backend",level:3},{value:"Permission Rule Changes",id:"permission-rule-changes",level:3},{value:"Migration: <code>jest</code> v29",id:"migration-jest-v29",level:3},{value:"Migration: <code>react-router</code> v6",id:"migration-react-router-v6",level:3},{value:"Support for <code>__mocks__</code> and <code>__testUtils__</code> directories",id:"support-for-__mocks__-and-__testutils__-directories",level:3},{value:"New Arguments for the Router of <code>@backstage/plugin-bazaar-backend</code>",id:"new-arguments-for-the-router-of-backstageplugin-bazaar-backend",level:3},{value:"Deprecated plugin: <code>@backstage/plugin-catalog-backend-module-bitbucket</code>",id:"deprecated-plugin-backstageplugin-catalog-backend-module-bitbucket",level:3},{value:"Security Fixes",id:"security-fixes",level:2},{value:"Upgrade path",id:"upgrade-path",level:2},{value:"Links and References",id:"links-and-references",level:2}];function u(e){const t=Object.assign({p:"p",a:"a",h2:"h2",h3:"h3",code:"code",ul:"ul",li:"li"},(0,s.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["These are the release notes for the v1.7.0 release of\n",(0,n.jsx)(t.a,{href:"https://backstage.io/",children:"Backstage"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"A huge thanks to the whole team of maintainers and contributors as well as the\namazing Backstage Community for the hard work in getting this release developed\nand done."}),"\n",(0,n.jsx)(t.h2,{id:"highlights",children:"Highlights"}),"\n",(0,n.jsx)(t.h3,{id:"github-catalog-import-now-powered-by-the-backend",children:"GitHub Catalog Import now Powered by the Backend"}),"\n",(0,n.jsx)(t.p,{children:"The analysis performed during catalog imports (i.e. when supplying the URL of a\nrepository rather than an individual YAML file in the Create flow) is now\npowered by the backend rather than frontend code. This means that the catalog\nbackend needs to be supplied with a location analyzer for this use case to\ncontinue to function."}),"\n",(0,n.jsxs)(t.p,{children:["If you want to make use of this feature, check out the installation instructions\nin ",(0,n.jsx)(t.a,{href:"https://github.com/backstage/backstage/blob/master/plugins/catalog-import/CHANGELOG.md#090",children:"the\nchangelog"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["Contributed by ",(0,n.jsx)(t.a,{href:"https://github.com/kissmikijr",children:"@kissmikijr"})," in\n",(0,n.jsx)(t.a,{href:"https://github.com/backstage/backstage/pull/13800",children:"#13800"})]}),"\n",(0,n.jsx)(t.h3,{id:"permission-rule-changes",children:"Permission Rule Changes"}),"\n",(0,n.jsxs)(t.p,{children:["When defining permission rules, it's now necessary to provide a ",(0,n.jsx)(t.a,{href:"https://github.com/colinhacks/zod",children:"Zod\nSchema"})," that specifies the parameters the\nrule expects. This has been added to help better describe the parameters in the\nresponse of the metadata endpoint and to validate the parameters before a rule\nis executed. The signatures of the rule methods (",(0,n.jsx)(t.code,{children:"apply"})," and ",(0,n.jsx)(t.code,{children:"toQuery"}),") have\nchanged slightly as well."]}),"\n",(0,n.jsxs)(t.p,{children:["You can read more about this in ",(0,n.jsx)(t.a,{href:"https://backstage.io/docs/permissions/overview",children:"the permissions\ndocumentation"})," and ",(0,n.jsx)(t.a,{href:"https://github.com/backstage/backstage/blob/master/plugins/permission-node/CHANGELOG.md#070",children:"the\nchangelog"}),"."]}),"\n",(0,n.jsxs)(t.h3,{id:"migration-jest-v29",children:["Migration: ",(0,n.jsx)(t.code,{children:"jest"})," v29"]}),"\n",(0,n.jsxs)(t.p,{children:["Both ",(0,n.jsx)(t.code,{children:"jest"}),", ",(0,n.jsx)(t.code,{children:"jest-runtime"}),", and ",(0,n.jsx)(t.code,{children:"jest-environment-jsdom"})," as used by the\nBackstage CLI were bumped to version 29. This is up from version 27, so check\nout both the ",(0,n.jsx)(t.a,{href:"https://jestjs.io/docs/28.x/upgrading-to-jest28",children:"v28"})," and\n",(0,n.jsx)(t.a,{href:"https://jestjs.io/docs/upgrading-to-jest29",children:"v29"})," (later\n",(0,n.jsx)(t.a,{href:"https://jestjs.io/docs/29.x/upgrading-to-jest29",children:"here"}),") migration guides, since\nyour existing tests may be affected."]}),"\n",(0,n.jsx)(t.p,{children:"Particular changes that were encountered in the main Backstage repository are:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"The updated snapshot format."}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"jest.useFakeTimers('legacy')"})," is now ",(0,n.jsx)(t.code,{children:"jest.useFakeTimers({ legacyFakeTimers: true })"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:["Error objects collected by ",(0,n.jsx)(t.code,{children:"withLogCollector"})," from ",(0,n.jsx)(t.code,{children:"@backstage/test-utils"})," are\nnow objects with a ",(0,n.jsx)(t.code,{children:"detail"})," property rather than a string."]}),"\n"]}),"\n",(0,n.jsxs)(t.h3,{id:"migration-react-router-v6",children:["Migration: ",(0,n.jsx)(t.code,{children:"react-router"})," v6"]}),"\n",(0,n.jsxs)(t.p,{children:["Newly created Backstage repositories now use the stable version 6 of\n",(0,n.jsx)(t.code,{children:"react-router"}),", just like the main repository does."]}),"\n",(0,n.jsxs)(t.p,{children:["Migrating to the stable version of ",(0,n.jsx)(t.code,{children:"react-router"})," is optional for the time\nbeing; Backstage has support for both versions. But if you want to do the same\nfor your existing repository, please follow ",(0,n.jsx)(t.a,{href:"https://backstage.io/docs/tutorials/react-router-stable-migration",children:"this\nguide"}),".\nSupport for the beta version will be removed in a later release."]}),"\n",(0,n.jsxs)(t.h3,{id:"support-for-__mocks__-and-__testutils__-directories",children:["Support for ",(0,n.jsx)(t.code,{children:"__mocks__"})," and ",(0,n.jsx)(t.code,{children:"__testUtils__"})," directories"]}),"\n",(0,n.jsxs)(t.p,{children:["The Backstage CLI now has built-in support for ",(0,n.jsx)(t.code,{children:"__mocks__"})," and ",(0,n.jsx)(t.code,{children:"__testUtils__"}),"\ndirectories in your code. These can be used for mocks and shared utilities in\ntests."]}),"\n",(0,n.jsxs)(t.h3,{id:"new-arguments-for-the-router-of-backstageplugin-bazaar-backend",children:["New Arguments for the Router of ",(0,n.jsx)(t.code,{children:"@backstage/plugin-bazaar-backend"})]}),"\n",(0,n.jsxs)(t.p,{children:["The bazaar-backend ",(0,n.jsx)(t.code,{children:"createRouter"})," function now requires that the ",(0,n.jsx)(t.code,{children:"identityApi"}),"\nis passed to the router."]}),"\n",(0,n.jsxs)(t.h3,{id:"deprecated-plugin-backstageplugin-catalog-backend-module-bitbucket",children:["Deprecated plugin: ",(0,n.jsx)(t.code,{children:"@backstage/plugin-catalog-backend-module-bitbucket"})]}),"\n",(0,n.jsxs)(t.p,{children:["This has been deprecated and split into\n",(0,n.jsx)(t.code,{children:"@backstage/plugin-catalog-backend-module-bitbucket-cloud"})," and\n",(0,n.jsx)(t.code,{children:"@backstage/plugin-catalog-backend-module-bitbucket-server"}),", for BitBucket Cloud\nand BitBucket Server respectively. Please update your dependencies accordingly,\ndepending on which product you use."]}),"\n",(0,n.jsx)(t.p,{children:"The original package will be removed in a future release."}),"\n",(0,n.jsxs)(t.p,{children:["Contributed by ",(0,n.jsx)(t.a,{href:"https://github.com/pjungermann",children:"@pjungermann"})," in\n",(0,n.jsx)(t.a,{href:"https://github.com/backstage/backstage/pull/14070",children:"#14070"})]}),"\n",(0,n.jsx)(t.h2,{id:"security-fixes",children:"Security Fixes"}),"\n",(0,n.jsx)(t.p,{children:"This release does not contain any security fixes."}),"\n",(0,n.jsx)(t.h2,{id:"upgrade-path",children:"Upgrade path"}),"\n",(0,n.jsxs)(t.p,{children:["We recommend that you keep your Backstage project up to date with this latest\nrelease. For more guidance on how to upgrade, check out the documentation for\n",(0,n.jsx)(t.a,{href:"https://backstage.io/docs/getting-started/keeping-backstage-updated",children:"keeping Backstage\nupdated"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"links-and-references",children:"Links and References"}),"\n",(0,n.jsx)(t.p,{children:"Below you can find a list of links and references to help you learn about and\nstart using this new release."}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://backstage.io/",children:"Backstage official website"}),",\n",(0,n.jsx)(t.a,{href:"https://backstage.io/docs/",children:"documentation"}),", and ",(0,n.jsx)(t.a,{href:"https://backstage.io/docs/getting-started/",children:"getting started\nguide"})]}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/backstage/backstage",children:"GitHub repository"})}),"\n",(0,n.jsxs)(t.li,{children:["Backstage's ",(0,n.jsx)(t.a,{href:"https://backstage.io/docs/overview/versioning-policy",children:"versioning and support\npolicy"})]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://discord.gg/backstage-687207715902193673",children:"Community Discord"})," for discussions and support"]}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/docs/releases/v1.7.0-changelog.md",children:"Changelog"})}),"\n",(0,n.jsxs)(t.li,{children:["Backstage ",(0,n.jsx)(t.a,{href:"https://backstage.io/demos",children:"Demos"}),",\n",(0,n.jsx)(t.a,{href:"https://backstage.io/blog",children:"Blog"}),",\n",(0,n.jsx)(t.a,{href:"https://backstage.io/docs/overview/roadmap",children:"Roadmap"})," and\n",(0,n.jsx)(t.a,{href:"https://backstage.io/plugins",children:"Plugins"})]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["Sign up for our ",(0,n.jsx)(t.a,{href:"https://mailchi.mp/spotify/backstage-community",children:"newsletter"})," if\nyou want to be informed about what is happening in the world of Backstage."]})]})}const d=function(e={}){const{wrapper:t}=Object.assign({},(0,s.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(u,e)})):u(e)}},371426:(e,t,r)=>{var n=r(827378),s=Symbol.for("react.element"),o=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,r){var n,o={},l=null,u=null;for(n in void 0!==r&&(l=""+r),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(u=t.ref),t)a.call(t,n)&&!c.hasOwnProperty(n)&&(o[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===o[n]&&(o[n]=t[n]);return{$$typeof:s,type:e,key:l,ref:u,props:o,_owner:i.current}}t.Fragment=o,t.jsx=l,t.jsxs=l},541535:(e,t)=>{var r=Symbol.for("react.element"),n=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),c=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),h=Symbol.for("react.lazy"),p=Symbol.iterator;var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,b={};function m(e,t,r){this.props=e,this.context=t,this.refs=b,this.updater=r||f}function y(){}function k(e,t,r){this.props=e,this.context=t,this.refs=b,this.updater=r||f}m.prototype.isReactComponent={},m.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=m.prototype;var j=k.prototype=new y;j.constructor=k,g(j,m.prototype),j.isPureReactComponent=!0;var v=Array.isArray,x=Object.prototype.hasOwnProperty,_={current:null},w={key:!0,ref:!0,__self:!0,__source:!0};function S(e,t,n){var s,o={},a=null,i=null;if(null!=t)for(s in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(a=""+t.key),t)x.call(t,s)&&!w.hasOwnProperty(s)&&(o[s]=t[s]);var c=arguments.length-2;if(1===c)o.children=n;else if(1<c){for(var l=Array(c),u=0;u<c;u++)l[u]=arguments[u+2];o.children=l}if(e&&e.defaultProps)for(s in c=e.defaultProps)void 0===o[s]&&(o[s]=c[s]);return{$$typeof:r,type:e,key:a,ref:i,props:o,_owner:_.current}}function C(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var R=/\/+/g;function E(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function B(e,t,s,o,a){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var c=!1;if(null===e)c=!0;else switch(i){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case r:case n:c=!0}}if(c)return a=a(c=e),e=""===o?"."+E(c,0):o,v(a)?(s="",null!=e&&(s=e.replace(R,"$&/")+"/"),B(a,t,s,"",(function(e){return e}))):null!=a&&(C(a)&&(a=function(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(a,s+(!a.key||c&&c.key===a.key?"":(""+a.key).replace(R,"$&/")+"/")+e)),t.push(a)),1;if(c=0,o=""===o?".":o+":",v(e))for(var l=0;l<e.length;l++){var u=o+E(i=e[l],l);c+=B(i,t,s,u,a)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),l=0;!(i=e.next()).done;)c+=B(i=i.value,t,s,u=o+E(i,l++),a);else if("object"===i)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return c}function T(e,t,r){if(null==e)return e;var n=[],s=0;return B(e,n,"","",(function(e){return t.call(r,e,s++)})),n}function O(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var P={current:null},$={transition:null},I={ReactCurrentDispatcher:P,ReactCurrentBatchConfig:$,ReactCurrentOwner:_};t.Children={map:T,forEach:function(e,t,r){T(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return T(e,(function(){t++})),t},toArray:function(e){return T(e,(function(e){return e}))||[]},only:function(e){if(!C(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=m,t.Fragment=s,t.Profiler=a,t.PureComponent=k,t.StrictMode=o,t.Suspense=u,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=I,t.cloneElement=function(e,t,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var s=g({},e.props),o=e.key,a=e.ref,i=e._owner;if(null!=t){if(void 0!==t.ref&&(a=t.ref,i=_.current),void 0!==t.key&&(o=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(l in t)x.call(t,l)&&!w.hasOwnProperty(l)&&(s[l]=void 0===t[l]&&void 0!==c?c[l]:t[l])}var l=arguments.length-2;if(1===l)s.children=n;else if(1<l){c=Array(l);for(var u=0;u<l;u++)c[u]=arguments[u+2];s.children=c}return{$$typeof:r,type:e.type,key:o,ref:a,props:s,_owner:i}},t.createContext=function(e){return(e={$$typeof:c,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},t.createElement=S,t.createFactory=function(e){var t=S.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:l,render:e}},t.isValidElement=C,t.lazy=function(e){return{$$typeof:h,_payload:{_status:-1,_result:e},_init:O}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=$.transition;$.transition={};try{e()}finally{$.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return P.current.useCallback(e,t)},t.useContext=function(e){return P.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return P.current.useDeferredValue(e)},t.useEffect=function(e,t){return P.current.useEffect(e,t)},t.useId=function(){return P.current.useId()},t.useImperativeHandle=function(e,t,r){return P.current.useImperativeHandle(e,t,r)},t.useInsertionEffect=function(e,t){return P.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return P.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return P.current.useMemo(e,t)},t.useReducer=function(e,t,r){return P.current.useReducer(e,t,r)},t.useRef=function(e){return P.current.useRef(e)},t.useState=function(e){return P.current.useState(e)},t.useSyncExternalStore=function(e,t,r){return P.current.useSyncExternalStore(e,t,r)},t.useTransition=function(){return P.current.useTransition()},t.version="18.2.0"},827378:(e,t,r)=>{e.exports=r(541535)},824246:(e,t,r)=>{e.exports=r(371426)},511151:(e,t,r)=>{r.d(t,{Zo:()=>i,ah:()=>o});var n=r(667294);const s=n.createContext({});function o(e){const t=n.useContext(s);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const a={};function i({components:e,children:t,disableParentContext:r}){let i;return i=r?"function"==typeof e?e({}):e||a:o(e),n.createElement(s.Provider,{value:i},t)}}}]);