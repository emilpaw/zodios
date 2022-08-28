"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[797],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,g=c["".concat(l,".").concat(m)]||c[m]||u[m]||s;return n?o.createElement(g,r(r({ref:t},d),{},{components:n})):o.createElement(g,r({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,r=new Array(s);r[0]=c;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,r[1]=i;for(var p=2;p<s;p++)r[p]=n[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2482:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var o=n(7462),a=(n(7294),n(3905));const s={sidebar_position:1},r="Client API instance",i={unversionedId:"client/client",id:"client/client",title:"Client API instance",description:"Use Zodios instance to fetch data from multiple API endpoints.",source:"@site/docs/client/client.md",sourceDirName:"client",slug:"/client/",permalink:"/docs/client/",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Zodios client",permalink:"/docs/category/zodios-client"},next:{title:"Client API plugins",permalink:"/docs/client/plugins"}},l={},p=[{value:"Create Zodios Client instance",id:"create-zodios-client-instance",level:2},{value:"Options",id:"options",level:3},{value:"Zodios attributes",id:"zodios-attributes",level:2},{value:"<code>baseURL</code>",id:"baseurl",level:3},{value:"<code>axios</code>",id:"axios",level:3},{value:"Zodios methods",id:"zodios-methods",level:2},{value:"<code>zodios.use</code>",id:"zodiosuse",level:3},{value:"<code>zodios.eject</code>",id:"zodioseject",level:3},{value:"<code>zodios.[alias]</code>",id:"zodiosalias",level:3},{value:"query alias:",id:"query-alias",level:4},{value:"mutation alias",id:"mutation-alias",level:4},{value:"<code>zodios.request</code>",id:"zodiosrequest",level:3},{value:"<code>zodios.get</code>",id:"zodiosget",level:3},{value:"<code>zodios.post</code>",id:"zodiospost",level:3},{value:"<code>zodios.put</code>",id:"zodiosput",level:3},{value:"<code>zodios.patch</code>",id:"zodiospatch",level:3},{value:"<code>zodios.delete</code>",id:"zodiosdelete",level:3},{value:"Request Options",id:"request-options",level:2}],d={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"client-api-instance"},"Client API instance"),(0,a.kt)("p",null,"Use ",(0,a.kt)("inlineCode",{parentName:"p"},"Zodios")," instance to fetch data from multiple API endpoints.",(0,a.kt)("br",{parentName:"p"}),"\n","It's an API client based on ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/zod"},"zod")," and ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/axios"},"axios")," with a powerful plugin system."),(0,a.kt)("admonition",{title:"Zodios API client is like no one at the moment to make REST API fetching.",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"All your parameters and responses are fully typed. And by default they are also validated at runtime to prevent unrecoverable errors.",(0,a.kt)("br",{parentName:"p"}),"\n","Check the simple ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/api-definition"},"API definition format")," that powers full end-to-end typesafety.")),(0,a.kt)("h2",{id:"create-zodios-client-instance"},"Create Zodios Client instance"),(0,a.kt)("p",null,"When creating an instance or zodios api client, you need to at least provide the api definition.",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"baseURL")," is optional in browsers and will default to the current page url."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"new Zodios(baseURL: string, api: ZodiosEnpointDescriptions, options?: ZodiosOptions)\n// or\nnew Zodios(api: ZodiosEnpointDescriptions, options?: ZodiosOptions)\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import { Zodios, asErrors } from "@zodios/core";\nimport z from "zod";\n\nconst errors = asErrors([\n  {\n    status: "default",\n    schema: z.object({\n      error: z.object({\n        code: z.number(),\n        message: z.string(),\n      }),\n    }),\n  },\n]);\n\nconst user = z.object({\n  id: z.number(),\n  name: z.string(),\n  age: z.number().positive(),\n  email: z.string().email(),\n});\n\nconst apiClient = new Zodios(\'/api\', [\n  {\n    method: "get",\n    path: "/users",\n    alias: "getUsers",\n    response: z.array(user),\n  },\n  {\n    method: "get",\n    path: "/users/:id",\n    alias: "getUser",\n    response: user,\n    errors,\n  },\n  {\n    method: "post",\n    path: "/users",\n    alias: "createUser",\n    parameters: [\n      {\n        name: "user",\n        type: "Body",\n        schema: user.omit({ id: true }),\n      },\n    ],\n    response: user,\n    errors,\n  },  \n]);\n')),(0,a.kt)("h3",{id:"options"},"Options"),(0,a.kt)("p",null,"Zodios constructor options are straightforward."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"export type ZodiosOptions = {\n  validate?: boolean; // validate zod input params and response - default: true\n  axiosInstance?: AxiosInstance; // add your own axios instance\n  axiosConfig?: AxiosRequestConfig; // add your own default axios config\n};\n")),(0,a.kt)("h2",{id:"zodios-attributes"},"Zodios attributes"),(0,a.kt)("h3",{id:"baseurl"},(0,a.kt)("inlineCode",{parentName:"h3"},"baseURL")),(0,a.kt)("p",null,"access ",(0,a.kt)("inlineCode",{parentName:"p"},"baseURL")," property to get the base url of the api."),(0,a.kt)("h3",{id:"axios"},(0,a.kt)("inlineCode",{parentName:"h3"},"axios")),(0,a.kt)("p",null,"access ",(0,a.kt)("inlineCode",{parentName:"p"},"axios")," property to get back zodios internal axios instance."),(0,a.kt)("h2",{id:"zodios-methods"},"Zodios methods"),(0,a.kt)("h3",{id:"zodiosuse"},(0,a.kt)("inlineCode",{parentName:"h3"},"zodios.use")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"use")," method allows to add a plugin to the client instance. See ",(0,a.kt)("a",{parentName:"p",href:"/docs/client/plugins"},"plugins")," for more information."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"use(plugin: ZodiosPlugin): PluginId;\n// or\nuse(method: string, path: string, plugin: ZodiosPlugin): PluginId;\n// or\nuse(alias: string, plugin: ZodiosPlugin): PluginId;\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import { pluginFetch } from "@zodios/plugins";\n\napiClient.use(pluginFetch({\n  keepAlive: true,\n}));\n')),(0,a.kt)("h3",{id:"zodioseject"},(0,a.kt)("inlineCode",{parentName:"h3"},"zodios.eject")),(0,a.kt)("p",null,"Eject method allows to remove a plugin from the client instance."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"eject(pluginId: PluginId): void;\n")),(0,a.kt)("h3",{id:"zodiosalias"},(0,a.kt)("inlineCode",{parentName:"h3"},"zodios.[alias]")),(0,a.kt)("p",null,"You will usually want to use aliases to call your endpoints. You can define them in the ",(0,a.kt)("inlineCode",{parentName:"p"},"alias")," option in your API definition endpoint."),(0,a.kt)("h4",{id:"query-alias"},"query alias:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"function [alias](config?: ZodiosRequestOptions): Promise<Response>;\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"example"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'// identical to api.get("/users")\nconst users = await api.getUsers();\n')),(0,a.kt)("h4",{id:"mutation-alias"},"mutation alias"),(0,a.kt)("p",null,"Alias for ",(0,a.kt)("inlineCode",{parentName:"p"},"post"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"put"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"patch"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"delete")," endpoints:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"function [alias](body: BodyParam, config?: ZodiosRequestOptions): Promise<Response>;\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"example"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'// identical to api.post("/users", { name: "John" })\nconst user = await api.createUser({ name: "John" });\n')),(0,a.kt)("h3",{id:"zodiosrequest"},(0,a.kt)("inlineCode",{parentName:"h3"},"zodios.request")),(0,a.kt)("p",null,"Generic request method that allows to do both query and mutation calls."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"request(config: ZodiosRequestOptions): Promise<Response>;\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'const user = await api.request({\n  method: "post",\n  url: "/users",\n  data: { name: "John" },\n});\n')),(0,a.kt)("h3",{id:"zodiosget"},(0,a.kt)("inlineCode",{parentName:"h3"},"zodios.get")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"get(path: string, config?: ZodiosRequestOptions): Promise<Response>;\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'const user = await api.get("/users/:id", { params: { id: 1 } });\n')),(0,a.kt)("h3",{id:"zodiospost"},(0,a.kt)("inlineCode",{parentName:"h3"},"zodios.post")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"post(path: string, body: BodyParam, config?: ZodiosRequestOptions): Promise<Response>;\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'const user = await api.post("/users", { name: "John" });\n')),(0,a.kt)("h3",{id:"zodiosput"},(0,a.kt)("inlineCode",{parentName:"h3"},"zodios.put")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"put(path: string, body: BodyParam, config?: ZodiosRequestOptions): Promise<Response>;\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'const user = await api.put("/users/:id", {id: 1, name: "John" }, { params: { id: 1 } });\n')),(0,a.kt)("h3",{id:"zodiospatch"},(0,a.kt)("inlineCode",{parentName:"h3"},"zodios.patch")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"patch(path: string, body: BodyParam, config?: ZodiosRequestOptions): Promise<Response>;\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'const user = await api.patch("/users/:id", {name: "John" }, {params: {id: 1}});\n')),(0,a.kt)("h3",{id:"zodiosdelete"},(0,a.kt)("inlineCode",{parentName:"h3"},"zodios.delete")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"delete(path: string, body: BodyParam, config?: ZodiosRequestOptions): Promise<Response>;\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'const user = await api.delete("/users/:id", {params: {id: 1}});\n')),(0,a.kt)("h2",{id:"request-options"},"Request Options"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"type ZodiosRequestOptions ={\n  method: \"get\" | \"post\" | \"put\" | \"patch\"| \"delete\";\n  url: string; // path to the endpoint\n  data?: BodyParam, // body param for post, put, patch, delete\n  params?: PathParams; // path parameters\n  queries?: QueryParams; // search string params\n  headers?: HeaderParams; // request headers\n  paramsSerializer?: (params) => string; // default to qs with array brackets\n  timeout: number; // default to 5s\n  withCredentials?: boolean; // default to false\n  adapter?: (config) => Promise<Response>; // internal adapter replacement, you usually don't need to use it, let library authors implement it\n  auth?: {\n    username: string;\n    password: string;\n  },\n  responseType?: 'arraybuffer'| 'blob' | 'document'| 'json'| 'text'| 'stream'; // default to json\n  responseEncoding?: 'utf8'; // only for node\n  xsrfCookieName?: string; // default to XSRF-TOKEN\n  xsrfHeaderName: string; // default to X-XSRF-TOKEN\n  onUploadProgress: (progressEvent) => void; // only for browser with XMLHttpRequest\n  onDownloadProgress: (progressEvent) => void; // only for browser with XMLHttpRequest\n  maxContentLength?: number; // default to 2000\n  maxBodyLength?: number; // default to 2000 - Node only\n  validateStatus?: (status) => boolean; // default to status >= 200 && status < 300\n  maxRedirects?: number; // default to 5\n  httpAgent?: NodeHttpAgent; // only for node\n  httpsAgent?: NodeHttpsAgent; // only for node\n  proxy?: {  // only for node\n    protocol: string; // http or https\n    host: string; // proxy host\n    port: number; // proxy port\n    auth: {\n      username: string;\n      password: string;\n    }\n  };\n\n  decompress?: boolean; // default to true\n}\n")))}u.isMDXComponent=!0}}]);