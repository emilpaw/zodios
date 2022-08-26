"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[644],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=l(n),m=a,f=c["".concat(p,".").concat(m)]||c[m]||u[m]||i;return n?r.createElement(f,o(o({ref:t},d),{},{components:n})):r.createElement(f,o({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=c;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},51:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:2},o="API definition helpers",s={unversionedId:"api/helpers",id:"api/helpers",title:"API definition helpers",description:"Usually, you'll want to define your API definition in a separate file and import it in your server and client code.",source:"@site/docs/api/helpers.md",sourceDirName:"api",slug:"/api/helpers",permalink:"/docs/api/helpers",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"API definition",permalink:"/docs/api/api-definition"},next:{title:"Examples",permalink:"/docs/api/examples"}},p={},l=[{value:"asApi",id:"asapi",level:2},{value:"asParameters",id:"asparameters",level:2},{value:"asErrors",id:"aserrors",level:2},{value:"apiBuilder",id:"apibuilder",level:2},{value:"ApiBuilder methods",id:"apibuilder-methods",level:3}],d={toc:l};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"api-definition-helpers"},"API definition helpers"),(0,a.kt)("p",null,"Usually, you'll want to define your API definition in a separate file and import it in your server and client code.\nFor this use case, Zodios provides some helpers to make your life easier and still keep your API definition correctly inferred without needing to use Typescript ",(0,a.kt)("inlineCode",{parentName:"p"},"as const"),".",(0,a.kt)("br",{parentName:"p"}),"\n","These helpers, allow your API definitions to be correctly inferred in both pure Javascript and Typescript."),(0,a.kt)("h2",{id:"asapi"},"asApi"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"asApi")," is a helper to narrow your api definitions and make some runtime checks."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"function asAPI(api: ZodiosEndpointDescriptions): ZodiosEndpointDescriptions;\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import { asApi } from "@zodios/core";\n\nconst api = asApi([\n  {\n    method: "GET",\n    path: "/users/:id",\n    response: user,\n    alias: "getUser",\n    description: "Get user",\n  },\n  {\n    method: "GET",\n    path: "/users",\n    response: z.array(user),\n    alias: "getUsers",\n    description: "Get users",\n  },\n]);\n')),(0,a.kt)("h2",{id:"asparameters"},"asParameters"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"asParameters")," is a helper to narrow your parameter definitions."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"function asParameters(params: ZodiosEndpointParameters): ZodiosEndpointParameters;\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import { asParameters } from "@zodios/core";\n\nconst params = asParameters([\n  {\n    name: "limit",\n    description: "Limit",\n    schema: z.number().positive(),\n  },\n  {\n    name: "offset",\n    description: "Offset",\n    schema: z.number().positive(),\n  },\n]);\n')),(0,a.kt)("h2",{id:"aserrors"},"asErrors"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"asErrors")," is a helper to narrow your error definitions."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"function asErrors(errors: ZodiosEndpointErrors): ZodiosEndpointErrors;\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import { asErrors } from "@zodios/core";\n\nconst errors = asErrors([\n  {\n    status: 404,\n    description: "User not found",\n    schema: z.object({\n      error: z.object({\n        userId: z.number(),\n        code: z.string(),\n        message: z.string(),\n      }),\n    }),\n  },\n  {\n    status: "default",\n    description: "Default error",\n    schema: z.object({\n      error: z.object({\n        code: z.string(),\n        message: z.string(),\n      }),\n    }),\n  },\n]);\n')),(0,a.kt)("h2",{id:"apibuilder"},"apiBuilder"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"apiBuilder")," is a helper to build API definitions with better type autocompletion."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"function apiBuilder(endpoint: ZodiosEndpointDescription): ApiBuilder;\n")),(0,a.kt)("h3",{id:"apibuilder-methods"},"ApiBuilder methods"),(0,a.kt)("p",null,"ApiBuilder is a helper to build API definitions with better type autocompletion."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"methods"),(0,a.kt)("th",{parentName:"tr",align:null},"parameters"),(0,a.kt)("th",{parentName:"tr",align:null},"return"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"addEndpoint"),(0,a.kt)("td",{parentName:"tr",align:null},"ZodiosEndpointDescription"),(0,a.kt)("td",{parentName:"tr",align:null},"ApiBuilder")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"build"),(0,a.kt)("td",{parentName:"tr",align:null},"none"),(0,a.kt)("td",{parentName:"tr",align:null},"ZodiosEndpointDescriptions")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import { apiBuilder } from "@zodios/core";\n\nconst api = apiBuilder({\n  method: "GET",\n  path: "/users",\n  response: z.array(user),\n  alias: "getUsers",\n  description: "Get users",\n})\n  .addEndpoint({\n    method: "GET",\n    path: "/users/:id",\n    response: user,\n    alias: "getUser",\n    description: "Get user",\n  })\n  .build();\n')))}u.isMDXComponent=!0}}]);