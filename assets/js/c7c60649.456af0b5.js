/*! For license information please see c7c60649.456af0b5.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[19806],{741218:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=n(824246),o=n(511151);const i={id:"deprecations",title:"Deprecations",description:"A list of active and past deprecations"},a=void 0,s={unversionedId:"api/deprecations",id:"api/deprecations",title:"Deprecations",description:"A list of active and past deprecations",source:"@site/../docs/api/deprecations.md",sourceDirName:"api",slug:"/api/deprecations",permalink:"/docs/api/deprecations",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/api/deprecations.md",tags:[],version:"current",frontMatter:{id:"deprecations",title:"Deprecations",description:"A list of active and past deprecations"},sidebar:"docs",previous:{title:"Package Index",permalink:"/docs/reference/"},next:{title:"Future developer journey",permalink:"/docs/tutorials/journey"}},c={},u=[{value:"Introduction",id:"introduction",level:2},{value:"App Theme",id:"app-theme",level:3},{value:"Generic Auth API Refs",id:"generic-auth-api-refs",level:3}];function l(e){const t=Object.assign({h2:"h2",p:"p",h3:"h3",code:"code",pre:"pre",a:"a"},(0,o.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,r.jsx)(t.p,{children:"This page contains extended documentation for some of the deprecations in\nvarious parts of Backstage. It is not an exhaustive list as most deprecation\nonly come in the form of a changelog notice and a console warning. The\ndeprecations listed here are the ones that need a bit more guidance than what\nfits in a console message."}),"\n",(0,r.jsx)(t.h3,{id:"app-theme",children:"App Theme"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"Released 2021-11-12 in @backstage/core-plugin-api v0.1.13"})}),"\n",(0,r.jsxs)(t.p,{children:["In order to provide more flexibility in what types of themes can be used and how\nthey are applied, the ",(0,r.jsx)(t.code,{children:"theme"})," property on the ",(0,r.jsx)(t.code,{children:"AppTheme"})," type is being\ndeprecated and replaced by a ",(0,r.jsx)(t.code,{children:"Provider"})," property instead. The ",(0,r.jsx)(t.code,{children:"Provider"}),"\nproperty is a React component that will be mounted at the root of the app\nwhenever that theme is active. This also removes the tight connection to MUI and\nopens up for other type of themes, and removes the hardcoded usage of\n",(0,r.jsx)(t.code,{children:"<CssBaseline>"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["To migrate an existing theme, remove the ",(0,r.jsx)(t.code,{children:"theme"})," property and move it over to a\nnew ",(0,r.jsx)(t.code,{children:"Provider"})," component, using ",(0,r.jsx)(t.code,{children:"ThemeProvider"})," from MUI to provide the new\ntheme, along with ",(0,r.jsx)(t.code,{children:"<CssBaseline>"}),". For example a theme that currently looks like\nthis:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"const darkTheme = {\n  id: 'dark',\n  title: 'Dark Theme',\n  variant: 'dark',\n  icon: <DarkIcon />,\n  theme: darkTheme,\n};\n"})}),"\n",(0,r.jsx)(t.p,{children:"Would be migrated to the following:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"const darkTheme = {\n  id: 'dark',\n  title: 'Dark Theme',\n  variant: 'dark',\n  icon: <DarkIcon />,\n  Provider: ({ children }) => (\n    <ThemeProvider theme={darkTheme}>\n      <CssBaseline>{children}</CssBaseline>\n    </ThemeProvider>\n  ),\n};\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Note that the existing ",(0,r.jsx)(t.code,{children:"AppTheme"})," type still requires the ",(0,r.jsx)(t.code,{children:"theme"})," property to be\nset since it's the type that's consumed in the ",(0,r.jsx)(t.code,{children:"AppThemeApi"}),", and it would be a\nbreaking change to make ",(0,r.jsx)(t.code,{children:"theme"})," optional. This means that if you currently\nconstruct the themes that you pass on to ",(0,r.jsx)(t.code,{children:"createApp"})," using ",(0,r.jsx)(t.code,{children:"AppTheme"})," as an\nintermediate type, you will need to work around this in some way, for example by\npassing the themes to ",(0,r.jsx)(t.code,{children:"createApp"})," more directly."]}),"\n",(0,r.jsx)(t.h3,{id:"generic-auth-api-refs",children:"Generic Auth API Refs"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"Released 2021-12-16 in @backstage/core-plugin-api v0.3.1"})}),"\n",(0,r.jsxs)(t.p,{children:["There are four auth Utility API references in ",(0,r.jsx)(t.code,{children:"@backstage/core-plugin-api"})," that\nwere too generic to be useful. The APIs in question are ",(0,r.jsx)(t.code,{children:"auth0AuthApiRef"}),",\n",(0,r.jsx)(t.code,{children:"oauth2ApiRef"}),", ",(0,r.jsx)(t.code,{children:"oidcAuthApiRef"}),", and ",(0,r.jsx)(t.code,{children:"samlAuthApiRef"}),". The issue with these\nAPIs was that they had no actual contract of what the backing auth provider was.\nThis made it more or less impossible to use these providers in open source\nplugins in any meaningful way. We also did not want to keep these Utility API\nreferences around just as helpers either, instead opting to remove them and let\nintegrators define their own APIs that are more specific to their auth provider.\nThis is also falls in line with a long-term goal to unify all auth providers to\nnot have separate frontend implementations."]}),"\n",(0,r.jsx)(t.p,{children:"If you're currently using one of these API references for either Sign-In or\naccess delegation within an app, there are a couple of steps you need to take to\nmigrate to your own custom API."}),"\n",(0,r.jsxs)(t.p,{children:["First, you'll need to define a new Utility API reference. If you're only using\nthe API for sign-in, you can put the definition in ",(0,r.jsx)(t.code,{children:"packages/app/src/apis.ts"}),".\nHowever, if you need to access your auth API inside plugins you you'll need to\nexport it from a common package. If you don't already have one we recommended\ncreating ",(0,r.jsx)(t.code,{children:"@internal/apis"})," and from there export the API reference."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"// `ProfileInfoApi & BackstageIdentityApi & SessionApi` are required for sign-in\n// Include `OAuthApi & OpenIdConnectApi` only if applicable\nexport const acmeAuthApiRef: ApiRef<\n  OAuthApi &\n    OpenIdConnectApi &\n    ProfileInfoApi &\n    BackstageIdentityApi &\n    SessionApi\n> = createApiRef({\n  id: 'internal.auth.acme',\n});\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Next you'll want to wire up the API inside ",(0,r.jsx)(t.code,{children:"packages/app/src/apis.ts"}),", which\nvaries depending on which API you're replacing. If you for example are replacing\nthe ",(0,r.jsx)(t.code,{children:"oauth2ApiRef"}),", the factory might look like this:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"// oauth2\ncreateApiFactory({\n  api: acmeAuthApiRef,\n  deps: {\n    discoveryApi: discoveryApiRef,\n    oauthRequestApi: oauthRequestApiRef,\n    configApi: configApiRef,\n  },\n  factory: ({ discoveryApi, oauthRequestApi, configApi }) =>\n    OAuth2.create({\n      discoveryApi,\n      oauthRequestApi,\n      environment: configApi.getOptionalString('auth.environment'),\n    }),\n});\n"})}),"\n",(0,r.jsx)(t.p,{children:"Provider specific factory implementations, copy the code you need into the\nfactory method depending on which apiRef you previously used."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"// samlAuthApiRef\nSamlAuth.create({\n  discoveryApi,\n  environment: configApi.getOptionalString('auth.environment'),\n});\n\n// oidcAuthApiRef\nOAuth2.create({\n  discoveryApi,\n  oauthRequestApi,\n  provider: {\n    id: 'oidc',\n    title: 'Your Identity Provider',\n    icon: () => null,\n  },\n  environment: configApi.getOptionalString('auth.environment'),\n});\n\n// auth0AuthApiRef\nOAuth2.create({\n  discoveryApi,\n  oauthRequestApi,\n  provider: {\n    id: 'auth0',\n    title: 'Auth0',\n    icon: () => null,\n  },\n  defaultScopes: ['openid', 'email', 'profile'],\n  environment: configApi.getOptionalString('auth.environment'),\n});\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Finally, for the provider to show up in your settings menu, you also need to\nupdate the settings route in ",(0,r.jsx)(t.code,{children:"packages/app/src/App.tsx"})," to pass the\n",(0,r.jsx)(t.code,{children:"acmeAuthApiRef"})," to the ",(0,r.jsx)(t.code,{children:"UserSettingsPage"}),". This replaces all existing provider\nitems, so you might want to add back any of the default ones that you are using\nfrom the\n",(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/blob/a3ec122170e0205fd3f9c307b98b1c5e4f55bf5f/plugins/user-settings/src/components/AuthProviders/DefaultProviderSettings.tsx#L35",children:"DefaultProviderSettings"}),"."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:'<Route\n  path="/settings"\n  element={\n    <UserSettingsPage\n      providerSettings={\n        <ProviderSettingsItem\n          title="ACME"\n          description="Provides sign-in via ACME"\n          apiRef={acmeAuthApiRef}\n          icon={Star}\n        />\n      }\n    />\n  }\n/>\n'})})]})}const p=function(e={}){const{wrapper:t}=Object.assign({},(0,o.ah)(),e.components);return t?(0,r.jsx)(t,Object.assign({},e,{children:(0,r.jsx)(l,e)})):l(e)}},862525:e=>{var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,o){for(var i,a,s=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),c=1;c<arguments.length;c++){for(var u in i=Object(arguments[c]))n.call(i,u)&&(s[u]=i[u]);if(t){a=t(i);for(var l=0;l<a.length;l++)r.call(i,a[l])&&(s[a[l]]=i[a[l]])}}return s}},371426:(e,t,n)=>{n(862525);var r=n(827378),o=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var i=Symbol.for;o=i("react.element"),t.Fragment=i("react.fragment")}var a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s=Object.prototype.hasOwnProperty,c={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,n){var r,i={},u=null,l=null;for(r in void 0!==n&&(u=""+n),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(l=t.ref),t)s.call(t,r)&&!c.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:o,type:e,key:u,ref:l,props:i,_owner:a.current}}t.jsx=u,t.jsxs=u},541535:(e,t,n)=>{var r=n(862525),o=60103,i=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var a=60109,s=60110,c=60112;t.Suspense=60113;var u=60115,l=60116;if("function"==typeof Symbol&&Symbol.for){var p=Symbol.for;o=p("react.element"),i=p("react.portal"),t.Fragment=p("react.fragment"),t.StrictMode=p("react.strict_mode"),t.Profiler=p("react.profiler"),a=p("react.provider"),s=p("react.context"),c=p("react.forward_ref"),t.Suspense=p("react.suspense"),u=p("react.memo"),l=p("react.lazy")}var d="function"==typeof Symbol&&Symbol.iterator;function h(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m={};function y(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||f}function g(){}function v(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||f}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(h(85));this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},g.prototype=y.prototype;var A=v.prototype=new g;A.constructor=v,r(A,y.prototype),A.isPureReactComponent=!0;var j={current:null},x=Object.prototype.hasOwnProperty,b={key:!0,ref:!0,__self:!0,__source:!0};function k(e,t,n){var r,i={},a=null,s=null;if(null!=t)for(r in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(a=""+t.key),t)x.call(t,r)&&!b.hasOwnProperty(r)&&(i[r]=t[r]);var c=arguments.length-2;if(1===c)i.children=n;else if(1<c){for(var u=Array(c),l=0;l<c;l++)u[l]=arguments[l+2];i.children=u}if(e&&e.defaultProps)for(r in c=e.defaultProps)void 0===i[r]&&(i[r]=c[r]);return{$$typeof:o,type:e,key:a,ref:s,props:i,_owner:j.current}}function w(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var _=/\/+/g;function P(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function R(e,t,n,r,a){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var c=!1;if(null===e)c=!0;else switch(s){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case o:case i:c=!0}}if(c)return a=a(c=e),e=""===r?"."+P(c,0):r,Array.isArray(a)?(n="",null!=e&&(n=e.replace(_,"$&/")+"/"),R(a,t,n,"",(function(e){return e}))):null!=a&&(w(a)&&(a=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(a,n+(!a.key||c&&c.key===a.key?"":(""+a.key).replace(_,"$&/")+"/")+e)),t.push(a)),1;if(c=0,r=""===r?".":r+":",Array.isArray(e))for(var u=0;u<e.length;u++){var l=r+P(s=e[u],u);c+=R(s,t,n,l,a)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),u=0;!(s=e.next()).done;)c+=R(s=s.value,t,n,l=r+P(s,u++),a);else if("object"===s)throw t=""+e,Error(h(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return c}function I(e,t,n){if(null==e)return e;var r=[],o=0;return R(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function O(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var S={current:null};function C(){var e=S.current;if(null===e)throw Error(h(321));return e}var T={ReactCurrentDispatcher:S,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:j,IsSomeRendererActing:{current:!1},assign:r};t.Children={map:I,forEach:function(e,t,n){I(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return I(e,(function(){t++})),t},toArray:function(e){return I(e,(function(e){return e}))||[]},only:function(e){if(!w(e))throw Error(h(143));return e}},t.Component=y,t.PureComponent=v,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T,t.cloneElement=function(e,t,n){if(null==e)throw Error(h(267,e));var i=r({},e.props),a=e.key,s=e.ref,c=e._owner;if(null!=t){if(void 0!==t.ref&&(s=t.ref,c=j.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(l in t)x.call(t,l)&&!b.hasOwnProperty(l)&&(i[l]=void 0===t[l]&&void 0!==u?u[l]:t[l])}var l=arguments.length-2;if(1===l)i.children=n;else if(1<l){u=Array(l);for(var p=0;p<l;p++)u[p]=arguments[p+2];i.children=u}return{$$typeof:o,type:e.type,key:a,ref:s,props:i,_owner:c}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:s,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:a,_context:e},e.Consumer=e},t.createElement=k,t.createFactory=function(e){var t=k.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:c,render:e}},t.isValidElement=w,t.lazy=function(e){return{$$typeof:l,_payload:{_status:-1,_result:e},_init:O}},t.memo=function(e,t){return{$$typeof:u,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return C().useCallback(e,t)},t.useContext=function(e,t){return C().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return C().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return C().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return C().useLayoutEffect(e,t)},t.useMemo=function(e,t){return C().useMemo(e,t)},t.useReducer=function(e,t,n){return C().useReducer(e,t,n)},t.useRef=function(e){return C().useRef(e)},t.useState=function(e){return C().useState(e)},t.version="17.0.2"},827378:(e,t,n)=>{e.exports=n(541535)},824246:(e,t,n)=>{e.exports=n(371426)},511151:(e,t,n)=>{n.d(t,{Zo:()=>s,ah:()=>i});var r=n(667294);const o=r.createContext({});function i(e){const t=r.useContext(o);return r.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const a={};function s({components:e,children:t,disableParentContext:n}){let s;return s=n?"function"==typeof e?e({}):e||a:i(e),r.createElement(o.Provider,{value:s},t)}}}]);