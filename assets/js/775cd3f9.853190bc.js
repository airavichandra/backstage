/*! For license information please see 775cd3f9.853190bc.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[955211],{144977:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=n(824246),o=n(511151);const i={id:"org",title:"GitHub Organizational Data",sidebar_label:"Org Data",description:"Importing users and groups from a GitHub organization into Backstage"},a=void 0,s={unversionedId:"integrations/github/org",id:"integrations/github/org",title:"GitHub Organizational Data",description:"Importing users and groups from a GitHub organization into Backstage",source:"@site/../docs/integrations/github/org.md",sourceDirName:"integrations/github",slug:"/integrations/github/org",permalink:"/docs/integrations/github/org",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/integrations/github/org.md",tags:[],version:"current",frontMatter:{id:"org",title:"GitHub Organizational Data",sidebar_label:"Org Data",description:"Importing users and groups from a GitHub organization into Backstage"},sidebar:"docs",previous:{title:"Discovery",permalink:"/docs/integrations/github/discovery"},next:{title:"GitHub Apps",permalink:"/docs/integrations/github/github-apps"}},c={},u=[{value:"Installation without Events Support",id:"installation-without-events-support",level:2},{value:"Installation with Events Support",id:"installation-with-events-support",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Custom Transformers",id:"custom-transformers",level:3},{value:"Resolving GitHub users via organization email",id:"resolving-github-users-via-organization-email",level:3},{value:"Using a Processor instead of a Provider",id:"using-a-processor-instead-of-a-provider",level:2},{value:"Processor Installation",id:"processor-installation",level:3},{value:"Processor Configuration",id:"processor-configuration",level:3}];function l(e){const t=Object.assign({p:"p",a:"a",code:"code",blockquote:"blockquote",h2:"h2",pre:"pre",em:"em",ul:"ul",li:"li",img:"img",strong:"strong",h3:"h3"},(0,o.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["The Backstage catalog can be set up to ingest organizational data - users and\nteams - directly from an organization in GitHub or GitHub Enterprise. The result\nis a hierarchy of\n",(0,r.jsx)(t.a,{href:"/docs/features/software-catalog/descriptor-format#kind-user",children:(0,r.jsx)(t.code,{children:"User"})})," and\n",(0,r.jsx)(t.a,{href:"/docs/features/software-catalog/descriptor-format#kind-group",children:(0,r.jsx)(t.code,{children:"Group"})})," kind\nentities that mirror your org setup."]}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:["Note: This adds ",(0,r.jsx)(t.code,{children:"User"})," and ",(0,r.jsx)(t.code,{children:"Group"})," entities to the catalog, but does not\nprovide authentication. See the\n",(0,r.jsx)(t.a,{href:"/docs/auth/github/provider",children:"GitHub auth provider"})," for that."]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"installation-without-events-support",children:"Installation without Events Support"}),"\n",(0,r.jsx)(t.p,{children:"This guide will use the Entity Provider method. If you for some reason prefer\nthe Processor method (not recommended), it is described separately below."}),"\n",(0,r.jsxs)(t.p,{children:["The provider is not installed by default, therefore you have to add a dependency\nto ",(0,r.jsx)(t.code,{children:"@backstage/plugin-catalog-backend-module-github"})," to your backend package."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"# From your Backstage root directory\nyarn add --cwd packages/backend @backstage/plugin-catalog-backend-module-github\n"})}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:["Note: When configuring to use a Provider instead of a Processor you do not\nneed to add a ",(0,r.jsx)(t.em,{children:"location"})," pointing to your GitHub server/organization"]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"Update the catalog plugin initialization in your backend to add the provider and\nschedule it:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",metastring:'title="packages/backend/src/plugins/catalog.ts"',children:"/* highlight-add-next-line */\nimport { GithubOrgEntityProvider } from '@backstage/plugin-catalog-backend-module-github';\n\nexport default async function createPlugin(\n  env: PluginEnvironment,\n): Promise<Router> {\n  const builder = await CatalogBuilder.create(env);\n\n  /* highlight-add-start */\n  // The org URL below needs to match a configured integrations.github entry\n  // specified in your app-config.\n  builder.addEntityProvider(\n    GithubOrgEntityProvider.fromConfig(env.config, {\n      id: 'production',\n      orgUrl: 'https://github.com/backstage',\n      logger: env.logger,\n      schedule: env.scheduler.createScheduledTaskRunner({\n        frequency: { minutes: 60 },\n        timeout: { minutes: 15 },\n      }),\n    }),\n  );\n  /* highlight-add-end */\n\n  // ..\n}\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Alternatively, if you wish to ingest data from multiple GitHub organizations you can use\nthe ",(0,r.jsx)(t.code,{children:"GithubMultiOrgEntityProvider"})," instead. Note that by default, this provider will namespace\ngroups according to the org they originate from to avoid potential name duplicates:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",metastring:'title="packages/backend/src/plugins/catalog.ts"',children:"/* highlight-add-next-line */\nimport { GithubMultiOrgEntityProvider } from '@backstage/plugin-catalog-backend-module-github';\n\nexport default async function createPlugin(\n  env: PluginEnvironment,\n): Promise<Router> {\n  const builder = await CatalogBuilder.create(env);\n\n  /* highlight-add-start */\n  // The GitHub URL below needs to match a configured integrations.github entry\n  // specified in your app-config.\n  builder.addEntityProvider(\n    GithubMultiOrgEntityProvider.fromConfig(env.config, {\n      id: 'production',\n      githubUrl: 'https://github.com',\n      // Set the following to list the GitHub orgs you wish to ingest from. You can\n      // also omit this option to ingest all orgs accessible by your GitHub integration\n      orgs: ['org-a', 'org-b'],\n      logger: env.logger,\n      schedule: env.scheduler.createScheduledTaskRunner({\n        frequency: { minutes: 60 },\n        timeout: { minutes: 15 },\n      }),\n    }),\n  );\n  /* highlight-add-end */\n\n  // ..\n}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"installation-with-events-support",children:"Installation with Events Support"}),"\n",(0,r.jsx)(t.p,{children:"Please follow the installation instructions at"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/plugins/events-backend/README.md",children:"https://github.com/backstage/backstage/tree/master/plugins/events-backend/README.md"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/plugins/events-backend-module-github/README.md",children:"https://github.com/backstage/backstage/tree/master/plugins/events-backend-module-github/README.md"})}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"Additionally, you need to decide how you want to receive events from external sources like"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/plugins/events-backend/README.md",children:"via HTTP endpoint"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/plugins/events-backend-module-aws-sqs/README.md",children:"via an AWS SQS queue"})}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"Set up your provider"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",metastring:'title="packages/backend/src/plugins/catalog.ts"',children:"import { CatalogBuilder } from '@backstage/plugin-catalog-backend';\n/* highlight-add-next-line */\nimport { GithubOrgEntityProvider } from '@backstage/plugin-catalog-backend-module-github';\nimport { ScaffolderEntitiesProcessor } from '@backstage/plugin-scaffolder-backend';\nimport { Router } from 'express';\nimport { PluginEnvironment } from '../types';\n\nexport default async function createPlugin(\n  env: PluginEnvironment,\n): Promise<Router> {\n  const builder = await CatalogBuilder.create(env);\n  builder.addProcessor(new ScaffolderEntitiesProcessor());\n  /* highlight-add-start */\n  const githubOrgProvider = GithubOrgEntityProvider.fromConfig(env.config, {\n      id: 'production',\n      orgUrl: 'https://github.com/backstage',\n      logger: env.logger,\n      schedule: env.scheduler.createScheduledTaskRunner({\n        frequency: { minutes: 60 },\n        timeout: { minutes: 15 },\n      }),\n  env.eventBroker.subscribe(githubOrgProvider);\n  builder.addEntityProvider(githubOrgProvider);\n  /* highlight-add-end */\n  const { processingEngine, router } = await builder.build();\n  await processingEngine.start();\n  return router;\n}\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Or, alternatively, if using the ",(0,r.jsx)(t.code,{children:"GithubMultiOrgEntityProvider"}),":"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",metastring:'title="packages/backend/src/plugins/catalog.ts"',children:"/* highlight-add-next-line */\nimport { GithubMultiOrgEntityProvider } from '@backstage/plugin-catalog-backend-module-github';\n\nexport default async function createPlugin(\n  env: PluginEnvironment,\n): Promise<Router> {\n  const builder = await CatalogBuilder.create(env);\n\n  /* highlight-add-start */\n  // The GitHub URL below needs to match a configured integrations.github entry\n  // specified in your app-config.\n  builder.addEntityProvider(\n    GithubMultiOrgEntityProvider.fromConfig(env.config, {\n      id: 'production',\n      githubUrl: 'https://github.com',\n      // Set the following to list the GitHub orgs you wish to ingest from. You can\n      // also omit this option to ingest all orgs accessible by your GitHub integration\n      orgs: ['org-a', 'org-b'],\n      logger: env.logger,\n      schedule: env.scheduler.createScheduledTaskRunner({\n        frequency: { minutes: 60 },\n        timeout: { minutes: 15 },\n      }),\n      // Pass in the eventBroker to allow this provider to subscribe to GitHub events\n      eventBroker: env.eventBroker,\n    }),\n  );\n  /* highlight-add-end */\n\n  // ..\n}\n"})}),"\n",(0,r.jsxs)(t.p,{children:["You can check the official docs to ",(0,r.jsx)(t.a,{href:"https://docs.github.com/en/developers/webhooks-and-events/webhooks/creating-webhooks",children:"configure your webhook"})," and to ",(0,r.jsx)(t.a,{href:"https://docs.github.com/en/developers/webhooks-and-events/webhooks/securing-your-webhooks",children:"secure your request"}),".\nThe webhook will need to be configured to forward ",(0,r.jsx)(t.code,{children:"organization"}),",",(0,r.jsx)(t.code,{children:"team"})," and ",(0,r.jsx)(t.code,{children:"membership"})," events."]}),"\n",(0,r.jsx)(t.h2,{id:"configuration",children:"Configuration"}),"\n",(0,r.jsx)(t.p,{children:"As mentioned above, you also must have some configuration in your app-config\nthat describes the targets that you want to import. This lets the entity\nprovider know what authorization to use, and what the API endpoints are. You may\nor may not have such an entry already added since before:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:"integrations:\n  github:\n    # example for public github\n    - host: github.com\n      token: ${GITHUB_TOKEN}\n    # example for a private GitHub Enterprise instance\n    - host: ghe.example.net\n      apiBaseUrl: https://ghe.example.net/api/v3\n      token: ${GHE_TOKEN}\n"})}),"\n",(0,r.jsxs)(t.p,{children:["These examples use ",(0,r.jsx)(t.code,{children:"${}"})," placeholders to reference environment variables. This\nis often suitable for production setups, but also means that you will have to\nsupply those variables to the backend as it starts up. If you want, for local\ndevelopment in particular, you can experiment first by putting the actual tokens\nin a mirrored config directly in your ",(0,r.jsx)(t.code,{children:"app-config.local.yaml"})," as well."]}),"\n",(0,r.jsxs)(t.p,{children:["If Backstage is configured to use GitHub Apps authentication you must grant\n",(0,r.jsx)(t.code,{children:"Read-Only"})," access for ",(0,r.jsx)(t.code,{children:"Members"})," under ",(0,r.jsx)(t.code,{children:"Organization"})," in order to ingest users\ncorrectly. You can modify the app's permissions under the organization settings,\n",(0,r.jsx)(t.code,{children:"https://github.com/organizations/{ORG}/settings/apps/{APP_NAME}/permissions"}),"."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"permissions",src:n(531061).Z+"",width:"1534",height:"324"})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Please note that when you change permissions, the app owner will get an email\nthat must be approved first before the changes are applied."})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"email",src:n(871162).Z+"",width:"1262",height:"732"})}),"\n",(0,r.jsx)(t.h3,{id:"custom-transformers",children:"Custom Transformers"}),"\n",(0,r.jsx)(t.p,{children:"You can inject your own transformation logic to help map from GH API responses\ninto backstage entities. You can do this on the user and team requests to\nenable you to do further processing or updates to the entities."}),"\n",(0,r.jsxs)(t.p,{children:["To enable this you pass a function into the ",(0,r.jsx)(t.code,{children:"GitHubOrgEntityProvider"}),". You can\npass a ",(0,r.jsx)(t.code,{children:"UserTransformer"}),", ",(0,r.jsx)(t.code,{children:"TeamTransformer"})," or both. The function is invoked\nfor each item (user or team) that is returned from the API. You can either\nreturn an Entity (User or Group) or ",(0,r.jsx)(t.code,{children:"undefined"})," if you do not want to import\nthat item."]}),"\n",(0,r.jsxs)(t.p,{children:["There is also a ",(0,r.jsx)(t.code,{children:"defaultUserTransformer"})," and ",(0,r.jsx)(t.code,{children:"defaultOrganizationTeamTransformer"}),".\nYou could use these and simply decorate the response from the default\ntransformation if you only need to change a few properties."]}),"\n",(0,r.jsx)(t.h3,{id:"resolving-github-users-via-organization-email",children:"Resolving GitHub users via organization email"}),"\n",(0,r.jsx)(t.p,{children:"When you authenticate users you should resolve them to an entity within the\ncatalog. Often the authentication you use could be a corporate SSO system that\nprovides you with email as a key. To enable you to find and resolve GitHub users\nit's useful to also import the private domain verified emails into the User\nentity in backstage."}),"\n",(0,r.jsxs)(t.p,{children:["The integration attempts to return ",(0,r.jsx)(t.code,{children:"organizationVerifiedDomainEmails"})," from the\nGitHub API and makes this available as part of the object passed to\n",(0,r.jsx)(t.code,{children:"UserTransformer"}),". The GitHub API will only return emails that use a domain\nthat's a verified domain for your GitHub Org. It also relies on the user having\nconfigured such an email in their own account. The API will only return these\nvalues when using GitHub App authentication and with the correct app permission\nallowing access to emails."]}),"\n",(0,r.jsxs)(t.p,{children:["You can decorate the ",(0,r.jsx)(t.code,{children:"defaultUserTransformer"})," to replace the org email in the\nreturned identity."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"async (user, ctx): Promise<UserEntity | undefined> => {\n  const entity = await defaultUserTransformer(user, ctx);\n\n  if (entity && user.organizationVerifiedDomainEmails) {\n    entity.spec.profile!.email = user.organizationVerifiedDomainEmails[0] || '';\n  }\n\n  return entity;\n},\n"})}),"\n",(0,r.jsx)(t.p,{children:"Once you have imported the emails you can resolve users in your sign-in in\nresolver using the catalog entity search via email"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",metastring:'title="packages/backend/src/plugins/auth.ts"',children:"ctx.signInWithCatalogUser({\n  filter: {\n    kind: ['User'],\n    'spec.profile.email': email as string,\n  },\n});\n"})}),"\n",(0,r.jsx)(t.h2,{id:"using-a-processor-instead-of-a-provider",children:"Using a Processor instead of a Provider"}),"\n",(0,r.jsx)(t.p,{children:"An alternative to using the Provider for ingesting organizational entities is to\nuse a Processor. This is the old way that's based on registering locations with\nthe proper type and target, triggering the processor to run."}),"\n",(0,r.jsx)(t.p,{children:"The drawback of this method is that it will leave orphaned Group/User entities\nwhenever they are deleted on your GitHub server, and you cannot control the\nfrequency with which they are refreshed, separately from other processors."}),"\n",(0,r.jsx)(t.h3,{id:"processor-installation",children:"Processor Installation"}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"GithubOrgReaderProcessor"})," is not registered by default, so you have to\ninstall and register it in the catalog plugin:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"# From your Backstage root directory\nyarn add --cwd packages/backend @backstage/plugin-catalog-backend-module-github\n"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",metastring:'title="packages/backend/src/plugins/catalog.ts"',children:"import { GithubOrgReaderProcessor } from '@backstage/plugin-catalog-backend-module-github';\n\nbuilder.addProcessor(\n  GithubOrgReaderProcessor.fromConfig(env.config, { logger: env.logger }),\n);\n"})}),"\n",(0,r.jsx)(t.h3,{id:"processor-configuration",children:"Processor Configuration"}),"\n",(0,r.jsx)(t.p,{children:"The integration section of your app-config needs to be set up in the same way as\nfor the Entity Provider - see above."}),"\n",(0,r.jsxs)(t.p,{children:["In addition to that, you typically want to add a few static locations to your\napp-config, which reference your organizations to import. The following\nconfiguration enables an import of the teams and users under the org\n",(0,r.jsx)(t.code,{children:"https://github.com/my-org-name"})," on public GitHub."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:"catalog:\n  locations:\n    - type: github-org\n      target: https://github.com/my-org-name\n      rules:\n        - allow: [User, Group]\n"})})]})}const d=function(e={}){const{wrapper:t}=Object.assign({},(0,o.ah)(),e.components);return t?(0,r.jsx)(t,Object.assign({},e,{children:(0,r.jsx)(l,e)})):l(e)}},871162:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/email-d5628d6813a978b367112f533ff20242.png"},531061:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/permissions-a2f1b6967d5d744368b60016dfba17ba.png"},862525:e=>{var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,o){for(var i,a,s=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),c=1;c<arguments.length;c++){for(var u in i=Object(arguments[c]))n.call(i,u)&&(s[u]=i[u]);if(t){a=t(i);for(var l=0;l<a.length;l++)r.call(i,a[l])&&(s[a[l]]=i[a[l]])}}return s}},371426:(e,t,n)=>{n(862525);var r=n(827378),o=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var i=Symbol.for;o=i("react.element"),t.Fragment=i("react.fragment")}var a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s=Object.prototype.hasOwnProperty,c={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,n){var r,i={},u=null,l=null;for(r in void 0!==n&&(u=""+n),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(l=t.ref),t)s.call(t,r)&&!c.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:o,type:e,key:u,ref:l,props:i,_owner:a.current}}t.jsx=u,t.jsxs=u},541535:(e,t,n)=>{var r=n(862525),o=60103,i=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var a=60109,s=60110,c=60112;t.Suspense=60113;var u=60115,l=60116;if("function"==typeof Symbol&&Symbol.for){var d=Symbol.for;o=d("react.element"),i=d("react.portal"),t.Fragment=d("react.fragment"),t.StrictMode=d("react.strict_mode"),t.Profiler=d("react.profiler"),a=d("react.provider"),s=d("react.context"),c=d("react.forward_ref"),t.Suspense=d("react.suspense"),u=d("react.memo"),l=d("react.lazy")}var h="function"==typeof Symbol&&Symbol.iterator;function g(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var p={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},f={};function m(e,t,n){this.props=e,this.context=t,this.refs=f,this.updater=n||p}function b(){}function y(e,t,n){this.props=e,this.context=t,this.refs=f,this.updater=n||p}m.prototype.isReactComponent={},m.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(g(85));this.updater.enqueueSetState(this,e,t,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=m.prototype;var v=y.prototype=new b;v.constructor=y,r(v,m.prototype),v.isPureReactComponent=!0;var j={current:null},x=Object.prototype.hasOwnProperty,k={key:!0,ref:!0,__self:!0,__source:!0};function w(e,t,n){var r,i={},a=null,s=null;if(null!=t)for(r in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(a=""+t.key),t)x.call(t,r)&&!k.hasOwnProperty(r)&&(i[r]=t[r]);var c=arguments.length-2;if(1===c)i.children=n;else if(1<c){for(var u=Array(c),l=0;l<c;l++)u[l]=arguments[l+2];i.children=u}if(e&&e.defaultProps)for(r in c=e.defaultProps)void 0===i[r]&&(i[r]=c[r]);return{$$typeof:o,type:e,key:a,ref:s,props:i,_owner:j.current}}function P(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var E=/\/+/g;function O(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function _(e,t,n,r,a){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var c=!1;if(null===e)c=!0;else switch(s){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case o:case i:c=!0}}if(c)return a=a(c=e),e=""===r?"."+O(c,0):r,Array.isArray(a)?(n="",null!=e&&(n=e.replace(E,"$&/")+"/"),_(a,t,n,"",(function(e){return e}))):null!=a&&(P(a)&&(a=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(a,n+(!a.key||c&&c.key===a.key?"":(""+a.key).replace(E,"$&/")+"/")+e)),t.push(a)),1;if(c=0,r=""===r?".":r+":",Array.isArray(e))for(var u=0;u<e.length;u++){var l=r+O(s=e[u],u);c+=_(s,t,n,l,a)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=h&&e[h]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),u=0;!(s=e.next()).done;)c+=_(s=s.value,t,n,l=r+O(s,u++),a);else if("object"===s)throw t=""+e,Error(g(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return c}function G(e,t,n){if(null==e)return e;var r=[],o=0;return _(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function T(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var S={current:null};function R(){var e=S.current;if(null===e)throw Error(g(321));return e}var C={ReactCurrentDispatcher:S,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:j,IsSomeRendererActing:{current:!1},assign:r};t.Children={map:G,forEach:function(e,t,n){G(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return G(e,(function(){t++})),t},toArray:function(e){return G(e,(function(e){return e}))||[]},only:function(e){if(!P(e))throw Error(g(143));return e}},t.Component=m,t.PureComponent=y,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=C,t.cloneElement=function(e,t,n){if(null==e)throw Error(g(267,e));var i=r({},e.props),a=e.key,s=e.ref,c=e._owner;if(null!=t){if(void 0!==t.ref&&(s=t.ref,c=j.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(l in t)x.call(t,l)&&!k.hasOwnProperty(l)&&(i[l]=void 0===t[l]&&void 0!==u?u[l]:t[l])}var l=arguments.length-2;if(1===l)i.children=n;else if(1<l){u=Array(l);for(var d=0;d<l;d++)u[d]=arguments[d+2];i.children=u}return{$$typeof:o,type:e.type,key:a,ref:s,props:i,_owner:c}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:s,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:a,_context:e},e.Consumer=e},t.createElement=w,t.createFactory=function(e){var t=w.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:c,render:e}},t.isValidElement=P,t.lazy=function(e){return{$$typeof:l,_payload:{_status:-1,_result:e},_init:T}},t.memo=function(e,t){return{$$typeof:u,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return R().useCallback(e,t)},t.useContext=function(e,t){return R().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return R().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return R().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return R().useLayoutEffect(e,t)},t.useMemo=function(e,t){return R().useMemo(e,t)},t.useReducer=function(e,t,n){return R().useReducer(e,t,n)},t.useRef=function(e){return R().useRef(e)},t.useState=function(e){return R().useState(e)},t.version="17.0.2"},827378:(e,t,n)=>{e.exports=n(541535)},824246:(e,t,n)=>{e.exports=n(371426)},511151:(e,t,n)=>{n.d(t,{Zo:()=>s,ah:()=>i});var r=n(667294);const o=r.createContext({});function i(e){const t=r.useContext(o);return r.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const a={};function s({components:e,children:t,disableParentContext:n}){let s;return s=n?"function"==typeof e?e({}):e||a:i(e),r.createElement(o.Provider,{value:s},t)}}}]);