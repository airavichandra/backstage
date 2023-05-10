/*! For license information please see 5ec3cc36.0d56ff08.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[794337],{41189:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var r=n(824246),s=n(511151);const a={id:"project-structure",title:"Backstage Project Structure",description:"Introduction to files and folders in the Backstage Project repository"},o=void 0,c={unversionedId:"getting-started/project-structure",id:"getting-started/project-structure",title:"Backstage Project Structure",description:"Introduction to files and folders in the Backstage Project repository",source:"@site/../docs/getting-started/project-structure.md",sourceDirName:"getting-started",slug:"/getting-started/project-structure",permalink:"/docs/getting-started/project-structure",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/getting-started/project-structure.md",tags:[],version:"current",frontMatter:{id:"project-structure",title:"Backstage Project Structure",description:"Introduction to files and folders in the Backstage Project repository"},sidebar:"docs",previous:{title:"Getting Involved",permalink:"/docs/getting-started/getting-involved"},next:{title:"Overview",permalink:"/docs/local-dev/cli-overview"}},i={},l=[{value:"General purpose files and folders",id:"general-purpose-files-and-folders",level:2},{value:"Monorepo packages",id:"monorepo-packages",level:2},{value:"<code>packages/</code>",id:"packages",level:3},{value:"<code>plugins/</code>",id:"plugins",level:3},{value:"Packages outside of the monorepo",id:"packages-outside-of-the-monorepo",level:2},{value:"Root files specifically used by the <code>app</code>",id:"root-files-specifically-used-by-the-app",level:2}];function h(e){const t=Object.assign({p:"p",h2:"h2",ul:"ul",li:"li",a:"a",code:"code",pre:"pre",h3:"h3",em:"em",strong:"strong"},(0,s.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"Backstage is a complex project, and the GitHub repository contains many\ndifferent files and folders. This document aims to clarify the purpose of those\nfiles and folders."}),"\n",(0,r.jsx)(t.h2,{id:"general-purpose-files-and-folders",children:"General purpose files and folders"}),"\n",(0,r.jsx)(t.p,{children:"In the project root, there are a set of files and folders which are not part of\nthe project as such, and may or may not be familiar to someone looking through\nthe code."}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/.changeset",children:(0,r.jsx)(t.code,{children:".changeset/"})})," -\nThis folder contains files outlining which changes occurred in the project\nsince the last release. These files are added manually, but managed by\n",(0,r.jsx)(t.a,{href:"https://github.com/atlassian/changesets",children:"changesets"})," and will be removed at\nevery new release. They are essentially building-blocks of a CHANGELOG."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/.github",children:(0,r.jsx)(t.code,{children:".github/"})})," -\nStandard GitHub folder. It contains - amongst other things - our workflow\ndefinitions and templates. Worth noting is the\n",(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/.github/vale",children:"vale"}),"\nsub-folder which is used for a markdown spellchecker."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/.yarn",children:(0,r.jsx)(t.code,{children:".yarn/"})})," -\nBackstage ships with its own ",(0,r.jsx)(t.code,{children:"yarn"})," implementation. This allows us to have\nbetter control over our ",(0,r.jsx)(t.code,{children:"yarn.lock"})," file and hopefully avoid problems due to\nyarn versioning differences."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/contrib",children:(0,r.jsx)(t.code,{children:"contrib/"})})," -\nCollection of examples or resources contributed by the community. We really\nappreciate contributions in here and encourage them being kept up to date."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/docs",children:(0,r.jsx)(t.code,{children:"docs/"})})," - This is\nwhere we keep all of our documentation Markdown files. These end up on\n",(0,r.jsx)(t.a,{href:"https://backstage.io/docs",children:"https://backstage.io/docs"}),". Just keep in mind that changes to the\n",(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/blob/master/microsite/sidebars.json",children:(0,r.jsx)(t.code,{children:"sidebars.json"})}),"\nfile may be needed as sections are added/removed."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/.editorconfig",children:(0,r.jsx)(t.code,{children:".editorconfig"})})," -\nA configuration file used by most common code editors. Learn more at\n",(0,r.jsx)(t.a,{href:"https://editorconfig.org/",children:"EditorConfig.org"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/.imgbotconfig",children:(0,r.jsx)(t.code,{children:".imgbotconfig"})})," -\nConfiguration for a ",(0,r.jsx)(t.a,{href:"https://imgbot.net/",children:"bot"})," which helps reduce image sizes."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"monorepo-packages",children:"Monorepo packages"}),"\n",(0,r.jsxs)(t.p,{children:["Every folder in both ",(0,r.jsx)(t.code,{children:"packages/"})," and ",(0,r.jsx)(t.code,{children:"plugins/"})," is within our monorepo setup, as\ndefined in\n",(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/blob/master/package.json",children:(0,r.jsx)(t.code,{children:"package.json"})}),":"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:' "workspaces": {\n    "packages": [\n      "packages/*",\n      "plugins/*"\n    ]\n  },\n'})}),"\n",(0,r.jsx)(t.p,{children:"Let's look at them individually."}),"\n",(0,r.jsx)(t.h3,{id:"packages",children:(0,r.jsx)(t.code,{children:"packages/"})}),"\n",(0,r.jsxs)(t.p,{children:["These are all the packages that we use within the project. ",(0,r.jsx)(t.a,{href:"#plugins",children:"Plugins"}),"\nare separated out into their own folder, see further down."]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/packages/app",children:(0,r.jsx)(t.code,{children:"app/"})})," -\nThis is our take on how an App could look like, bringing together a set of\npackages and plugins into a working Backstage App. This is not a published\npackage, and the main goals are to provide a demo of what an App could look\nlike and to enable local development."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/packages/backend",children:(0,r.jsx)(t.code,{children:"backend/"})})," -\nEvery standalone Backstage project will have both an ",(0,r.jsx)(t.code,{children:"app"})," ",(0,r.jsx)(t.em,{children:"and"})," a ",(0,r.jsx)(t.code,{children:"backend"}),"\npackage. The ",(0,r.jsx)(t.code,{children:"backend"})," uses plugins to construct a working backend that the\nfrontend (",(0,r.jsx)(t.code,{children:"app"}),") can use."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/packages/backend-common",children:(0,r.jsx)(t.code,{children:"backend-common/"})}),' -\nThere are no "core" packages in the backend. Instead we have ',(0,r.jsx)(t.code,{children:"backend-common"}),"\nwhich contains helper middleware and other utils."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/packages/catalog-client",children:(0,r.jsx)(t.code,{children:"catalog-client"})})," -\nAn isomorphic client to interact with the Software Catalog. Backend plugins\ncan use the package directly. Frontend plugins can use the client by using\n",(0,r.jsx)(t.code,{children:"@backstage/plugin-catalog"})," in combination with ",(0,r.jsx)(t.code,{children:"useApi"})," and the\n",(0,r.jsx)(t.code,{children:"catalogApiRef"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/packages/catalog-model",children:(0,r.jsx)(t.code,{children:"catalog-model/"})})," -\nYou can consider this to be a library for working with the catalog of sorts.\nIt contains the definition of an\n",(0,r.jsx)(t.a,{href:"https://backstage.io/docs/features/software-catalog/references#docsNav",children:"Entity"}),",\nas well as validation and other logic related to it. This package can be used\nin both the frontend and the backend."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/packages/cli",children:(0,r.jsx)(t.code,{children:"cli/"})})," -\nOne of the biggest packages in our project, the ",(0,r.jsx)(t.code,{children:"cli"})," is used to build, serve,\ndiff, create plugins and more. In the early days of this project, we started\nout with calling tools directly - such as ",(0,r.jsx)(t.code,{children:"eslint"})," - through ",(0,r.jsx)(t.code,{children:"package.json"}),".\nBut as it was tricky to have a good development experience around that when we\nchange named tooling, we opted for wrapping those in our own CLI. That way\neverything looks the same in ",(0,r.jsx)(t.code,{children:"package.json"}),". Much like\n",(0,r.jsx)(t.a,{href:"https://github.com/facebook/create-react-app/tree/master/packages/react-scripts",children:"react-scripts"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/packages/cli-common",children:(0,r.jsx)(t.code,{children:"cli-common/"})})," -\nThis package mainly handles path resolving. It is a separate package to reduce\nbugs in\n",(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/packages/cli",children:"CLI"}),". We\nalso want as few dependencies as possible to reduce download time when running\nthe CLI which is another reason this is a separate package."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/packages/config",children:(0,r.jsx)(t.code,{children:"config/"})})," -\nThe way we read configuration data. This package can take a bunch of config\nobjects and merge them together.\n",(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/blob/master/app-config.yaml",children:"app-config.yaml"}),"\nis an example of an config object."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/packages/config-loader",children:(0,r.jsx)(t.code,{children:"config-loader/"})})," -\nThis package is used to read config objects. It does not know how to merge,\nbut only reads files and passes them on to the config. As this part is only\nused by the backend, we chose to separate ",(0,r.jsx)(t.code,{children:"config"})," and ",(0,r.jsx)(t.code,{children:"config-loader"})," into\ntwo different packages."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/packages/core-app-api",children:(0,r.jsx)(t.code,{children:"core-app-api/"})})," -\nThis package contains the core APIs that are used to wire together Backstage\napps."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/packages/core-components",children:(0,r.jsx)(t.code,{children:"core-components/"})})," -\nThis package contains our visual React components, some of which you can find\nin\n",(0,r.jsx)(t.a,{href:"https://backstage.io/storybook/?path=/story/plugins-examples--plugin-with-data",children:"plugin examples"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/packages/core-plugin-api",children:(0,r.jsx)(t.code,{children:"core-plugin-api/"})})," -\nThis package contains the core APIs that are used to build Backstage plugins."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/packages/create-app",children:(0,r.jsx)(t.code,{children:"create-app/"})})," -\nAn CLI to specifically scaffold a new Backstage App. It does so by using a\n",(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/packages/create-app/templates/default-app",children:"template"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/packages/dev-utils",children:(0,r.jsx)(t.code,{children:"dev-utils/"})})," -\nHelps you setup a plugin for isolated development so that it can be served\nseparately."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/packages/e2e-test",children:(0,r.jsx)(t.code,{children:"e2e-test/"})})," -\nAnother CLI that can be run to try out what would happen if you build all the\npackages, publish them, create a new app, and then run them. CI uses this for\ne2e-tests."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/packages/integration",children:(0,r.jsx)(t.code,{children:"integration/"})})," -\nCommon functionalities of integrations like GitHub, GitLab, etc."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/storybook",children:(0,r.jsx)(t.code,{children:"storybook/"})})," -\nThis folder contains only the Storybook config which helps visualize our\nreusable React components. Stories are within the core package, and are\npublished in the ",(0,r.jsx)(t.a,{href:"https://backstage.io/storybook",children:"Backstage Storybook"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/plugins/techdocs-node",children:(0,r.jsx)(t.code,{children:"techdocs-node/"})})," -\nCommon node.js functionalities for TechDocs, to be shared between\n",(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/plugins/techdocs-backend",children:"techdocs-backend"}),"\nplugin and ",(0,r.jsx)(t.a,{href:"https://github.com/backstage/techdocs-cli",children:"techdocs-cli"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/packages/test-utils",children:(0,r.jsx)(t.code,{children:"test-utils/"})})," -\nThis package contains general purpose testing facilities for testing a\nBackstage App or its plugins."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/packages/theme",children:(0,r.jsx)(t.code,{children:"theme/"})})," -\nHolds the Backstage Theme."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"plugins",children:(0,r.jsx)(t.code,{children:"plugins/"})}),"\n",(0,r.jsxs)(t.p,{children:["Most of the functionality of a Backstage App comes from plugins. Even core\nfeatures can be plugins, take the\n",(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/plugins/catalog",children:"catalog"})," as\nan example."]}),"\n",(0,r.jsxs)(t.p,{children:["We can categorize plugins into three different types; ",(0,r.jsx)(t.strong,{children:"Frontend"}),", ",(0,r.jsx)(t.strong,{children:"Backend"}),"\nand ",(0,r.jsx)(t.strong,{children:"GraphQL"}),". We differentiate these types of plugins when we name them, with\na dash-suffix. ",(0,r.jsx)(t.code,{children:"-backend"})," means it\u2019s a backend plugin and so on."]}),"\n",(0,r.jsx)(t.p,{children:"One reason for splitting a plugin is because of its dependencies. Another reason\nis for clear separation of concerns."}),"\n",(0,r.jsxs)(t.p,{children:["Take a look at our ",(0,r.jsx)(t.a,{href:"https://backstage.io/plugins",children:"Plugin Marketplace"})," or browse\nthrough the\n",(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/plugins",children:(0,r.jsx)(t.code,{children:"plugins/"})})," folder."]}),"\n",(0,r.jsx)(t.h2,{id:"packages-outside-of-the-monorepo",children:"Packages outside of the monorepo"}),"\n",(0,r.jsx)(t.p,{children:"For convenience we include packages in our project that are not part of our\nmonorepo setup."}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/blob/master/microsite",children:(0,r.jsx)(t.code,{children:"microsite/"})})," -\nThis folder contains the source code for backstage.io. It is built with\n",(0,r.jsx)(t.a,{href:"https://docusaurus.io/",children:"Docusaurus"}),". This folder is not part of the monorepo\ndue to dependency reasons. Look at the\n",(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/blob/master/microsite/README.md",children:"microsite README"}),"\nfor instructions on how to run it locally."]}),"\n"]}),"\n",(0,r.jsxs)(t.h2,{id:"root-files-specifically-used-by-the-app",children:["Root files specifically used by the ",(0,r.jsx)(t.code,{children:"app"})]}),"\n",(0,r.jsx)(t.p,{children:"These files are kept in the root of the project mostly by historical reasons.\nSome of these files may be subject to be moved out of the root sometime in the\nfuture."}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/.npmrc",children:(0,r.jsx)(t.code,{children:".npmrc"})})," - It's\ncommon for companies to have their own npm registry, and this file makes sure\nthat this folder always uses the public registry."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/.yarnrc.yml",children:(0,r.jsx)(t.code,{children:".yarnrc.yml"})}),' -\nEnforces "our" version of Yarn.']}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/app-config.yaml",children:(0,r.jsx)(t.code,{children:"app-config.yaml"})})," -\nConfiguration for the app, both frontend and backend."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/catalog-info.yaml",children:(0,r.jsx)(t.code,{children:"catalog-info.yaml"})})," -\nDescription of Backstage in the Backstage Entity format."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/lerna.json",children:(0,r.jsx)(t.code,{children:"lerna.json"})})," -\n",(0,r.jsx)(t.a,{href:"https://github.com/lerna/lerna",children:"Lerna"})," monorepo config. We are using\n",(0,r.jsx)(t.code,{children:"yarn workspaces"}),", so this will only be used for executing scripts."]}),"\n"]}),"\n"]})]})}const d=function(e={}){const{wrapper:t}=Object.assign({},(0,s.ah)(),e.components);return t?(0,r.jsx)(t,Object.assign({},e,{children:(0,r.jsx)(h,e)})):h(e)}},862525:e=>{var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(s){return!1}}()?Object.assign:function(e,s){for(var a,o,c=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),i=1;i<arguments.length;i++){for(var l in a=Object(arguments[i]))n.call(a,l)&&(c[l]=a[l]);if(t){o=t(a);for(var h=0;h<o.length;h++)r.call(a,o[h])&&(c[o[h]]=a[o[h]])}}return c}},371426:(e,t,n)=>{n(862525);var r=n(827378),s=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var a=Symbol.for;s=a("react.element"),t.Fragment=a("react.fragment")}var o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c=Object.prototype.hasOwnProperty,i={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var r,a={},l=null,h=null;for(r in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(h=t.ref),t)c.call(t,r)&&!i.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===a[r]&&(a[r]=t[r]);return{$$typeof:s,type:e,key:l,ref:h,props:a,_owner:o.current}}t.jsx=l,t.jsxs=l},541535:(e,t,n)=>{var r=n(862525),s=60103,a=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var o=60109,c=60110,i=60112;t.Suspense=60113;var l=60115,h=60116;if("function"==typeof Symbol&&Symbol.for){var d=Symbol.for;s=d("react.element"),a=d("react.portal"),t.Fragment=d("react.fragment"),t.StrictMode=d("react.strict_mode"),t.Profiler=d("react.profiler"),o=d("react.provider"),c=d("react.context"),i=d("react.forward_ref"),t.Suspense=d("react.suspense"),l=d("react.memo"),h=d("react.lazy")}var p="function"==typeof Symbol&&Symbol.iterator;function u(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},f={};function b(e,t,n){this.props=e,this.context=t,this.refs=f,this.updater=n||g}function m(){}function j(e,t,n){this.props=e,this.context=t,this.refs=f,this.updater=n||g}b.prototype.isReactComponent={},b.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(u(85));this.updater.enqueueSetState(this,e,t,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},m.prototype=b.prototype;var k=j.prototype=new m;k.constructor=j,r(k,b.prototype),k.isPureReactComponent=!0;var x={current:null},y=Object.prototype.hasOwnProperty,v={key:!0,ref:!0,__self:!0,__source:!0};function w(e,t,n){var r,a={},o=null,c=null;if(null!=t)for(r in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(o=""+t.key),t)y.call(t,r)&&!v.hasOwnProperty(r)&&(a[r]=t[r]);var i=arguments.length-2;if(1===i)a.children=n;else if(1<i){for(var l=Array(i),h=0;h<i;h++)l[h]=arguments[h+2];a.children=l}if(e&&e.defaultProps)for(r in i=e.defaultProps)void 0===a[r]&&(a[r]=i[r]);return{$$typeof:s,type:e,key:o,ref:c,props:a,_owner:x.current}}function _(e){return"object"==typeof e&&null!==e&&e.$$typeof===s}var C=/\/+/g;function O(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function E(e,t,n,r,o){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var i=!1;if(null===e)i=!0;else switch(c){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case s:case a:i=!0}}if(i)return o=o(i=e),e=""===r?"."+O(i,0):r,Array.isArray(o)?(n="",null!=e&&(n=e.replace(C,"$&/")+"/"),E(o,t,n,"",(function(e){return e}))):null!=o&&(_(o)&&(o=function(e,t){return{$$typeof:s,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(o,n+(!o.key||i&&i.key===o.key?"":(""+o.key).replace(C,"$&/")+"/")+e)),t.push(o)),1;if(i=0,r=""===r?".":r+":",Array.isArray(e))for(var l=0;l<e.length;l++){var h=r+O(c=e[l],l);i+=E(c,t,n,h,o)}else if(h=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof h)for(e=h.call(e),l=0;!(c=e.next()).done;)i+=E(c=c.value,t,n,h=r+O(c,l++),o);else if("object"===c)throw t=""+e,Error(u(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return i}function S(e,t,n){if(null==e)return e;var r=[],s=0;return E(e,r,"","",(function(e){return t.call(n,e,s++)})),r}function T(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var P={current:null};function I(){var e=P.current;if(null===e)throw Error(u(321));return e}var R={ReactCurrentDispatcher:P,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:x,IsSomeRendererActing:{current:!1},assign:r};t.Children={map:S,forEach:function(e,t,n){S(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return S(e,(function(){t++})),t},toArray:function(e){return S(e,(function(e){return e}))||[]},only:function(e){if(!_(e))throw Error(u(143));return e}},t.Component=b,t.PureComponent=j,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=R,t.cloneElement=function(e,t,n){if(null==e)throw Error(u(267,e));var a=r({},e.props),o=e.key,c=e.ref,i=e._owner;if(null!=t){if(void 0!==t.ref&&(c=t.ref,i=x.current),void 0!==t.key&&(o=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(h in t)y.call(t,h)&&!v.hasOwnProperty(h)&&(a[h]=void 0===t[h]&&void 0!==l?l[h]:t[h])}var h=arguments.length-2;if(1===h)a.children=n;else if(1<h){l=Array(h);for(var d=0;d<h;d++)l[d]=arguments[d+2];a.children=l}return{$$typeof:s,type:e.type,key:o,ref:c,props:a,_owner:i}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:c,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:o,_context:e},e.Consumer=e},t.createElement=w,t.createFactory=function(e){var t=w.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:i,render:e}},t.isValidElement=_,t.lazy=function(e){return{$$typeof:h,_payload:{_status:-1,_result:e},_init:T}},t.memo=function(e,t){return{$$typeof:l,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return I().useCallback(e,t)},t.useContext=function(e,t){return I().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return I().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return I().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return I().useLayoutEffect(e,t)},t.useMemo=function(e,t){return I().useMemo(e,t)},t.useReducer=function(e,t,n){return I().useReducer(e,t,n)},t.useRef=function(e){return I().useRef(e)},t.useState=function(e){return I().useState(e)},t.version="17.0.2"},827378:(e,t,n)=>{e.exports=n(541535)},824246:(e,t,n)=>{e.exports=n(371426)},511151:(e,t,n)=>{n.d(t,{Zo:()=>c,ah:()=>a});var r=n(667294);const s=r.createContext({});function a(e){const t=r.useContext(s);return r.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const o={};function c({components:e,children:t,disableParentContext:n}){let c;return c=n?"function"==typeof e?e({}):e||o:a(e),r.createElement(s.Provider,{value:c},t)}}}]);