"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8301],{3905:(e,r,n)=>{n.r(r),n.d(r,{MDXContext:()=>s,MDXProvider:()=>u,mdx:()=>v,useMDXComponents:()=>c,withMDXComponents:()=>m});var t=n(67294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(){return i=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},i.apply(this,arguments)}function p(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?p(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=t.createContext({}),m=function(e){return function(r){var n=c(r.components);return t.createElement(e,i({},r,{components:n}))}},c=function(e){var r=t.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):a(a({},r),e)),n},u=function(e){var r=c(e.components);return t.createElement(s.Provider,{value:r},e.children)},d="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},y=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(n),u=o,d=m["".concat(p,".").concat(u)]||m[u]||f[u]||i;return n?t.createElement(d,a(a({ref:r},s),{},{components:n})):t.createElement(d,a({ref:r},s))}));function v(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=n.length,p=new Array(i);p[0]=y;var a={};for(var l in r)hasOwnProperty.call(r,l)&&(a[l]=r[l]);a.originalType=e,a[d]="string"==typeof e?e:o,p[1]=a;for(var s=2;s<i;s++)p[s]=n[s];return t.createElement.apply(null,p)}return t.createElement.apply(null,n)}y.displayName="MDXCreateElement"},2692:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>p,default:()=>c,frontMatter:()=>i,metadata:()=>a,toc:()=>s});var t=n(87462),o=(n(67294),n(3905));const i={id:"promise"},p="promise type",a={unversionedId:"api/bxl/promise",id:"api/bxl/promise",title:"promise type",description:"promise.join",source:"@site/../docs/api/bxl/promise.generated.md",sourceDirName:"api/bxl",slug:"/api/bxl/promise",permalink:"/docs/api/bxl/promise",draft:!1,tags:[],version:"current",frontMatter:{id:"promise"},sidebar:"manualSidebar",previous:{title:"plugins type",permalink:"/docs/api/bxl/plugins"},next:{title:"provider_collection type",permalink:"/docs/api/bxl/provider_collection"}},l={},s=[{value:"promise.join",id:"promisejoin",level:2},{value:"promise.map",id:"promisemap",level:2}],m={toc:s};function c(e){let{components:r,...n}=e;return(0,o.mdx)("wrapper",(0,t.Z)({},m,n,{components:r,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"promise-type"},(0,o.mdx)("inlineCode",{parentName:"h1"},"promise")," type"),(0,o.mdx)("h2",{id:"promisejoin"},"promise.join"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-python"},"def promise.join(*args) -> promise\n")),(0,o.mdx)("p",null,"Join a set of promises together into a single promise."),(0,o.mdx)("p",null,"Given a series of promises, ",(0,o.mdx)("inlineCode",{parentName:"p"},"p4 = p1.join(p2, p3)")," will produce a promise\nwhere the value is promise that resolves to a tuple containing the three values,\nthose from ",(0,o.mdx)("inlineCode",{parentName:"p"},"p1"),", ",(0,o.mdx)("inlineCode",{parentName:"p"},"p2")," and ",(0,o.mdx)("inlineCode",{parentName:"p"},"p3")," respectively."),(0,o.mdx)("hr",null),(0,o.mdx)("h2",{id:"promisemap"},"promise.map"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-python"},"def promise.map(func: typing.Callable[[typing.Any], typing.Any], /) -> promise\n")),(0,o.mdx)("p",null,"Given a promise, apply a function to the value it contains, producing a promise with the resulting value."))}c.isMDXComponent=!0}}]);