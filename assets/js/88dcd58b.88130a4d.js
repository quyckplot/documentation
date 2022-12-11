"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[2023],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,f=u["".concat(c,".").concat(d)]||u[d]||m[d]||o;return n?a.createElement(f,i(i({ref:t},s),{},{components:n})):a.createElement(f,i({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2230:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={title:"DataSet.map"},i=void 0,l={unversionedId:"reference/DataSet/map",id:"reference/DataSet/map",title:"DataSet.map",description:"Applies a function to each FileData instance stored in the DataSet instance. This is one of the most useful methods of the DataSet class: it is often used to plot the data from each file.",source:"@site/docs/reference/DataSet/map.md",sourceDirName:"reference/DataSet",slug:"/reference/DataSet/map",permalink:"/documentation/docs/reference/DataSet/map",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/reference/DataSet/map.md",tags:[],version:"current",frontMatter:{title:"DataSet.map"},sidebar:"referenceSidebar",previous:{title:"DataSet.clear",permalink:"/documentation/docs/reference/DataSet/clear"}},c={},p=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Example",id:"example",level:2}],s={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"ds.map(\n    func\n)\n")),(0,r.kt)("p",null,"Applies a function to each ",(0,r.kt)("inlineCode",{parentName:"p"},"FileData")," instance stored in the ",(0,r.kt)("inlineCode",{parentName:"p"},"DataSet")," instance. This is one of the most useful methods of the ",(0,r.kt)("inlineCode",{parentName:"p"},"DataSet")," class: it is often used to plot the data from each file."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"map")," is most powerful when used with the ",(0,r.kt)("inlineCode",{parentName:"p"},"sequence")," utility function. See ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/utils/sequence"},"the documentation for the ",(0,r.kt)("inlineCode",{parentName:"a"},"sequence")," function")," for more details.")),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"func: callable")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The function to apply to each ",(0,r.kt)("inlineCode",{parentName:"li"},"FileData")," instance. The function must take a ",(0,r.kt)("inlineCode",{parentName:"li"},"FileData")," instance as its only argument modify it in place and return nothing.")),(0,r.kt)("h2",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"None")),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'ds = DataSet.from_regex(\n    "*.csv", # load every csv file in the current directory\n    names=["x", "y"], # we assume the files have two columns named "x" and "y"\n)\n\ndef func(fd):\n    fd.data["z"] = 2 * fd.data["x"] # multiply the x column by 2 and put it in a new column named "z"\n\nds.map(func) # apply the function to each FileData instance\n')),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Python lambda functions are a good way to quickly define a function that you will use only once. See ",(0,r.kt)("a",{parentName:"p",href:"https://docs.python.org/3/reference/expressions.html#lambda"},"the documentation for the ",(0,r.kt)("inlineCode",{parentName:"a"},"lambda")," keyword")," for more details.")))}u.isMDXComponent=!0}}]);