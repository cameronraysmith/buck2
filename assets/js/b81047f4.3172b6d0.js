"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5609],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>c,MDXProvider:()=>p,mdx:()=>b,useMDXComponents:()=>u,withMDXComponents:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),d=function(e){return function(t){var n=u(t.components);return a.createElement(e,o({},t,{components:n}))}},u=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(c.Provider,{value:t},e.children)},f="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),p=r,f=d["".concat(i,".").concat(p)]||d[p]||h[p]||o;return n?a.createElement(f,s(s({ref:t},c),{},{components:n})):a.createElement(f,s({ref:t},c))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[f]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},71749:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={},i="Bxl Actions and Build API",s={unversionedId:"rfcs/drafts/bxl-actions",id:"rfcs/drafts/bxl-actions",title:"Bxl Actions and Build API",description:"Bxl allows integrators to write Starlark snippets that introspect the buck2",source:"@site/../docs/rfcs/drafts/bxl-actions.md",sourceDirName:"rfcs/drafts",slug:"/rfcs/drafts/bxl-actions",permalink:"/docs/rfcs/drafts/bxl-actions",draft:!1,tags:[],version:"current",frontMatter:{}},l={},c=[{value:"Actions API",id:"actions-api",level:2},{value:"Creating and Building the Actions",id:"creating-and-building-the-actions",level:2},{value:"Internal Representation (Deferred Framework)",id:"internal-representation-deferred-framework",level:2}],d={toc:c};function u(e){let{components:t,...n}=e;return(0,r.mdx)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"bxl-actions-and-build-api"},"Bxl Actions and Build API"),(0,r.mdx)("p",null,"Bxl allows integrators to write Starlark snippets that introspect the buck2\ngraph, and perform various operations on them within Starlark to accomplish\ncomplex operations, as previously proposed in ",(0,r.mdx)("a",{parentName:"p",href:"/docs/rfcs/bxl"},"bxl RFC"),")"),(0,r.mdx)("p",null,"This document is intended at discussing the aspects of build and actions\ndeclaration of a bxl function in more details, and proposed changes to deferred\nframework to support bxl actions."),(0,r.mdx)("h2",{id:"actions-api"},"Actions API"),(0,r.mdx)("p",null,"The actions API should be the same as rules' actions API. That is, it has the\nsame ",(0,r.mdx)("inlineCode",{parentName:"p"},"ctx.actions")," that allows registering of artifacts, creating actions,\ndynamic actions via the same api."),(0,r.mdx)("h2",{id:"creating-and-building-the-actions"},"Creating and Building the Actions"),(0,r.mdx)("p",null,"Bxl allows users to build targets and actions. However, when creating actions,\nthey are not bound/buildable until the artifact/action factories are finalized.\nAs such, we will introduce the limitation that bxl cannot build artifacts that\nthey themselves declared within the bxl. Instead, they will return a set of\nartifacts to expose to users, which buck2 will automatically build after\nfinalizing the action factory. For dynamic-ness, bxl users will use the standard\ndynamic output api. There is an issue that during the dynamic output api's\nlambda, bxl functions will not be able to access the regular bxl functions for\nqueries, etc. However, this is likely not important as most use cases should\nreasonably query bxl data before the dynamic outputs, and have limited power in\ndynamic-ness. We can also always replace the ctx of the dynamic to be the bxl\ncontext in the future, as we see fit."),(0,r.mdx)("p",null,"Sample:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python"},'def my_bxl(ctx):\n    actions_factory = ctx.bxl_actions.factory()\n\n    artifact = actions_factory.write("file.txt", "content")\n\n    # note that existing artifacts that were declared by other rules can be built\n    ctx.actions.build(ctx.analysis(ctx.target("foo")).providers[DefaultInfo].default_output))\n\n    return [artifact] # exposes the declared artifact to users\n')),(0,r.mdx)("h2",{id:"internal-representation-deferred-framework"},"Internal Representation (Deferred Framework)"),(0,r.mdx)("p",null,"The existing actions framework attaches all actions to a deferred, which is\nbased off a ",(0,r.mdx)("inlineCode",{parentName:"p"},"ConfiguredLabel"),", which also corresponds to the output path prefix.\nbxl actions should also have a unique output path prefix, and follow the same\nsystem of having a base deferred key to reuse the action implementation."),(0,r.mdx)("p",null,"We should extend the ",(0,r.mdx)("inlineCode",{parentName:"p"},"BaseKey")," of a ",(0,r.mdx)("inlineCode",{parentName:"p"},"DeferredKey")," to support beyond a\n",(0,r.mdx)("inlineCode",{parentName:"p"},"ConfiguredLabel"),", so that we can use a ",(0,r.mdx)("inlineCode",{parentName:"p"},"BxlFunctionLabel")," in its place. This\nwould allow ",(0,r.mdx)("inlineCode",{parentName:"p"},"owner")," of these actions to point to the correct creator. The output\npath would be determined by using the ",(0,r.mdx)("inlineCode",{parentName:"p"},"BxlFunctionLabel")," as prefix similar to a\nlabel. While this means that not all outputs are associated with an actual rule,\nthis is arguably more correct as bxl that creates outputs that doesn't fit the\ntarget graph structure (i.e android project generation follows directory\nstructure rather than the packages defined by targets) to not have to conform\nthe attaching their actions to existing rules. bxl functions can examine\nmultiple rules and create a single action, attached only to their function\nlabel."),(0,r.mdx)("p",null,"The ActionRegistry will be attached to the evaluation result of ",(0,r.mdx)("inlineCode",{parentName:"p"},"bxl"),". Since we\ndo not allow bxl to explicitly request build of the actions itself declares, we\ncan wait until the end of the bxl function to finalize the actions. Then, the\naction lookup can simply refer to the result of the ",(0,r.mdx)("inlineCode",{parentName:"p"},"bxl"),"."),(0,r.mdx)("p",null,"With the above changes, the rest of the actions framework does not need changed\nto support the proposed API. DICE caching will work as today."))}u.isMDXComponent=!0}}]);