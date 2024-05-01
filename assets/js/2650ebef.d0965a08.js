"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2009],{3905:(e,t,r)=>{r.r(t),r.d(t,{MDXContext:()=>d,MDXProvider:()=>c,mdx:()=>f,useMDXComponents:()=>p,withMDXComponents:()=>o});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(){return u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},u.apply(this,arguments)}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},u=Object.keys(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=n.createContext({}),o=function(e){return function(t){var r=p(t.components);return n.createElement(e,u({},t,{components:r}))}},p=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(d.Provider,{value:t},e.children)},x="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,u=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),o=p(r),c=a,x=o["".concat(l,".").concat(c)]||o[c]||m[c]||u;return r?n.createElement(x,i(i({ref:t},d),{},{components:r})):n.createElement(x,i({ref:t},d))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var u=r.length,l=new Array(u);l[0]=g;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[x]="string"==typeof e?e:a,l[1]=i;for(var d=2;d<u;d++)l[d]=r[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},90090:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>u,metadata:()=>i,toc:()=>d});var n=r(87462),a=(r(67294),r(3905));const u={id:"uqueryctx"},l="uqueryctx type",i={unversionedId:"api/bxl/uqueryctx",id:"api/bxl/uqueryctx",title:"uqueryctx type",description:"The context for performing uquery operations in bxl. The functions offered on this ctx are the same behaviour as the query functions available within uquery command.",source:"@site/../docs/api/bxl/uqueryctx.generated.md",sourceDirName:"api/bxl",slug:"/api/bxl/uqueryctx",permalink:"/docs/api/bxl/uqueryctx",draft:!1,tags:[],version:"current",frontMatter:{id:"uqueryctx"},sidebar:"manualSidebar",previous:{title:"unconfigured_target_node type",permalink:"/docs/api/bxl/unconfigured_target_node"},next:{title:"Architectural Model",permalink:"/docs/developers/architecture/buck2"}},s={},d=[{value:"uqueryctx.allpaths",id:"uqueryctxallpaths",level:2},{value:"uqueryctx.attrfilter",id:"uqueryctxattrfilter",level:2},{value:"uqueryctx.attrregexfilter",id:"uqueryctxattrregexfilter",level:2},{value:"uqueryctx.buildfile",id:"uqueryctxbuildfile",level:2},{value:"uqueryctx.deps",id:"uqueryctxdeps",level:2},{value:"uqueryctx.eval",id:"uqueryctxeval",level:2},{value:"uqueryctx.filter",id:"uqueryctxfilter",level:2},{value:"uqueryctx.inputs",id:"uqueryctxinputs",level:2},{value:"uqueryctx.kind",id:"uqueryctxkind",level:2},{value:"uqueryctx.owner",id:"uqueryctxowner",level:2},{value:"uqueryctx.rdeps",id:"uqueryctxrdeps",level:2},{value:"uqueryctx.somepath",id:"uqueryctxsomepath",level:2},{value:"uqueryctx.targets_in_buildfile",id:"uqueryctxtargets_in_buildfile",level:2},{value:"uqueryctx.testsof",id:"uqueryctxtestsof",level:2}],o={toc:d};function p(e){let{components:t,...r}=e;return(0,a.mdx)("wrapper",(0,n.Z)({},o,r,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("h1",{id:"uqueryctx-type"},(0,a.mdx)("inlineCode",{parentName:"h1"},"uqueryctx")," type"),(0,a.mdx)("p",null,"The context for performing ",(0,a.mdx)("inlineCode",{parentName:"p"},"uquery")," operations in bxl. The functions offered on this ctx are the same behaviour as the query functions available within uquery command."),(0,a.mdx)("h2",{id:"uqueryctxallpaths"},"uqueryctx.allpaths"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-python"},"def uqueryctx.allpaths(\n    from: str | target_label | target_set | unconfigured_target_node | list[str | target_label | unconfigured_target_node],\n    to: str | target_label | target_set | unconfigured_target_node | list[str | target_label | unconfigured_target_node]\n) -> target_set\n")),(0,a.mdx)("p",null,"The ",(0,a.mdx)("inlineCode",{parentName:"p"},"allpaths")," query for computing all dependency paths."),(0,a.mdx)("hr",null),(0,a.mdx)("h2",{id:"uqueryctxattrfilter"},"uqueryctx.attrfilter"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-python"},"def uqueryctx.attrfilter(\n    attr: str,\n    value: str,\n    targets: str | target_label | target_set | unconfigured_target_node | list[str | target_label | unconfigured_target_node]\n) -> target_set\n")),(0,a.mdx)("p",null,"The attrfilter query for rule attribute filtering."),(0,a.mdx)("hr",null),(0,a.mdx)("h2",{id:"uqueryctxattrregexfilter"},"uqueryctx.attrregexfilter"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-python"},"def uqueryctx.attrregexfilter(\n    attribute: str,\n    value: str,\n    targets: str | target_label | target_set | unconfigured_target_node | list[str | target_label | unconfigured_target_node]\n) -> target_set\n")),(0,a.mdx)("p",null,"The attrregexfilter query for rule attribute filtering with regex."),(0,a.mdx)("p",null,"Sample usage:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-text"},'def _impl_attrregexfilter(ctx):\n    filtered = ctx.uquery().attrregexfilter("foo", "he.lo", "bin/kind/...")\n    ctx.output.print(filtered)\n')),(0,a.mdx)("hr",null),(0,a.mdx)("h2",{id:"uqueryctxbuildfile"},"uqueryctx.buildfile"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-python"},"def uqueryctx.buildfile(\n    targets: str | target_label | target_set | unconfigured_target_node | list[str | target_label | unconfigured_target_node]\n) -> file_set\n")),(0,a.mdx)("p",null,"Find the build file(s) that defines a target or a target set."),(0,a.mdx)("p",null,"Sample usage:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-text"},'def _buildfile_impl(ctx):\n    owner = ctx.uquery().owner(["bin/TARGET", "bin/kind"])\n    result = ctx.uquery().buildfile(owner)\n    ctx.output.print(result)\n')),(0,a.mdx)("hr",null),(0,a.mdx)("h2",{id:"uqueryctxdeps"},"uqueryctx.deps"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-python"},"def uqueryctx.deps(\n    universe: str | target_label | target_set | unconfigured_target_node | list[str | target_label | unconfigured_target_node],\n    depth: None | int = None,\n    filter: None | str = None\n) -> target_set\n")),(0,a.mdx)("p",null,"The deps query for finding the transitive closure of dependencies."),(0,a.mdx)("p",null,"Sample usage:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-text"},'def _impl_deps(ctx):\n    result = ctx.uquery().deps("root//bin:the_binary", 1)\n    ctx.output.print(result)\n')),(0,a.mdx)("hr",null),(0,a.mdx)("h2",{id:"uqueryctxeval"},"uqueryctx.eval"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-python"},"def uqueryctx.eval(query: str, query_args: None | target_set | list[str] = None)\n")),(0,a.mdx)("p",null,"Evaluates some general query string, ",(0,a.mdx)("inlineCode",{parentName:"p"},"query_args")," can be a target_set of unconfigured nodes, or a list of strings. Returns a ",(0,a.mdx)("inlineCode",{parentName:"p"},"dict")," of target labels mapped to their ",(0,a.mdx)("inlineCode",{parentName:"p"},"target_set")," results if ",(0,a.mdx)("inlineCode",{parentName:"p"},"query_args")," was passed in, otherwise returns a single ",(0,a.mdx)("inlineCode",{parentName:"p"},"target_set"),"."),(0,a.mdx)("p",null,"Sample usage:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-text"},'def _impl_eval(ctx):\n    result1 = ctx.uquery().eval("inputs(cell//path/to/file:target)")\n    ctx.output.print(result1)\n\n    result2 = ctx.uquery().eval("inputs(%s)", query_args = ["cell//path/to/file:target"])\n    ctx.output.print(result2)\n')),(0,a.mdx)("hr",null),(0,a.mdx)("h2",{id:"uqueryctxfilter"},"uqueryctx.filter"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-python"},"def uqueryctx.filter(\n    regex: str,\n    targets: str | target_label | target_set | unconfigured_target_node | list[str | target_label | unconfigured_target_node]\n) -> target_set\n")),(0,a.mdx)("p",null,"The filter query for filtering targets by name."),(0,a.mdx)("p",null,"Sample usage:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-text"},'def _impl_filter(ctx):\n    result = ctx.uquery().filter(".*the_binary", "root//...")\n    ctx.output.print(result)\n')),(0,a.mdx)("hr",null),(0,a.mdx)("h2",{id:"uqueryctxinputs"},"uqueryctx.inputs"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-python"},"def uqueryctx.inputs(\n    targets: str | target_label | target_set | unconfigured_target_node | list[str | target_label | unconfigured_target_node]\n) -> file_set\n")),(0,a.mdx)("p",null,"The inputs query for finding input files."),(0,a.mdx)("p",null,"Sample usage:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-text"},'def _impl_inputs(ctx):\n    result = ctx.uquery().inputs("root//bin:the_binary")\n    ctx.output.print(result)\n')),(0,a.mdx)("hr",null),(0,a.mdx)("h2",{id:"uqueryctxkind"},"uqueryctx.kind"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-python"},"def uqueryctx.kind(\n    regex: str,\n    targets: str | target_label | target_set | unconfigured_target_node | list[str | target_label | unconfigured_target_node]\n) -> target_set\n")),(0,a.mdx)("p",null,"The kind query for filtering targets by rule type."),(0,a.mdx)("p",null,"Sample usage:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-text"},'def _impl_kind(ctx):\n    kind = ctx.uquery().kind(".*1", "bin/kind/...")\n    ctx.output.print(kind)\n')),(0,a.mdx)("hr",null),(0,a.mdx)("h2",{id:"uqueryctxowner"},"uqueryctx.owner"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-python"},"def uqueryctx.owner(\n    files: file_set | str | list[str] | tuple[str, ...]\n) -> target_set\n")),(0,a.mdx)("p",null,"The owner query for finding targets that own specified files. Note that if you do not pass in a cell path (where the format is ",(0,a.mdx)("inlineCode",{parentName:"p"},"<cell>//path/to/file"),"), the path is resolved against the cell that the BXL script lives in. If you need to evaluate a file path that lives in a different cell, you must pass in the fully qualified cell path."),(0,a.mdx)("p",null,"Sample usage:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-text"},'def _owner_impl(ctx):\n    owner = ctx.uquery().owner("bin/TARGETS.fixture")\n    ctx.output.print(owner)\n')),(0,a.mdx)("hr",null),(0,a.mdx)("h2",{id:"uqueryctxrdeps"},"uqueryctx.rdeps"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-python"},"def uqueryctx.rdeps(\n    universe: str | target_label | target_set | unconfigured_target_node | list[str | target_label | unconfigured_target_node],\n    from: str | target_label | target_set | unconfigured_target_node | list[str | target_label | unconfigured_target_node],\n    depth: int = _\n) -> target_set\n")),(0,a.mdx)("p",null,"The rdeps query for finding the transitive closure of reverse dependencies."),(0,a.mdx)("p",null,"Sample usage:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-text"},'def _impl_rdeps(ctx):\n    result = ctx.uquery().rdeps("root//bin:the_binary", "//lib:file1", 100)\n    ctx.output.print(result)\n')),(0,a.mdx)("hr",null),(0,a.mdx)("h2",{id:"uqueryctxsomepath"},"uqueryctx.somepath"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-python"},"def uqueryctx.somepath(\n    from: str | target_label | target_set | unconfigured_target_node | list[str | target_label | unconfigured_target_node],\n    to: str | target_label | target_set | unconfigured_target_node | list[str | target_label | unconfigured_target_node]\n) -> target_set\n")),(0,a.mdx)("p",null,"The somepaths query, which returns the graph of nodes on some arbitrary path from a start to destination target."),(0,a.mdx)("hr",null),(0,a.mdx)("h2",{id:"uqueryctxtargets_in_buildfile"},"uqueryctx.targets","_","in","_","buildfile"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-python"},"def uqueryctx.targets_in_buildfile(\n    files: file_set | str | list[str] | tuple[str, ...]\n) -> target_set\n")),(0,a.mdx)("p",null,"Given a set of buildfiles, return all targets within those buildfiles."),(0,a.mdx)("p",null,"Usage:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-text"},'def _targets_in_buildfile_impl(ctx):\n    targets = ctx.uquery().targets_in_buildfile("bin/TARGETS.fixture")\n    ctx.output.print(targets)\n')),(0,a.mdx)("p",null,"This is subject to be removed in future in favor of a more general ",(0,a.mdx)("inlineCode",{parentName:"p"},"targets_in_packages"),"."),(0,a.mdx)("hr",null),(0,a.mdx)("h2",{id:"uqueryctxtestsof"},"uqueryctx.testsof"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-python"},"def uqueryctx.testsof(\n    targets: str | target_label | target_set | unconfigured_target_node | list[str | target_label | unconfigured_target_node]\n) -> target_set\n")),(0,a.mdx)("p",null,"The testsof query for listing the tests of the specified targets."),(0,a.mdx)("p",null,"Sample usage:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-text"},'def _testsof_impl(ctx):\n    result = ctx.uquery().testsof("//:foo_lib")\n    ctx.output.print(result)\n')))}p.isMDXComponent=!0}}]);