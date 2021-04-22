(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{110:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=a.a.createContext({}),l=function(e){var t=a.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return a.a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,d=b(e,["components","mdxType","originalType","parentName"]),u=l(n),s=r,m=u["".concat(c,".").concat(s)]||u[s]||p[s]||i;return n?a.a.createElement(m,o(o({ref:t},d),{},{components:n})):a.a.createElement(m,o({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=s;var o={};for(var b in t)hasOwnProperty.call(t,b)&&(o[b]=t[b]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var d=2;d<i;d++)c[d]=n[d];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},91:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),i=(n(0),n(110)),c={id:"add",title:"Function: add",sidebar_label:"add",custom_edit_url:null,hide_title:!0},o={unversionedId:"safe/functions/add",id:"safe/functions/add",isDocsHomePage:!1,title:"Function: add",description:"\u25b8 add(x? NumberLike): number",source:"@site/docs/safe/functions/add.md",sourceDirName:"safe/functions",slug:"/safe/functions/add",permalink:"/hikidashi/docs/safe/functions/add",editUrl:null,version:"current",lastUpdatedAt:1619066311,formattedLastUpdatedAt:"4/22/2021",sidebar_label:"add",frontMatter:{id:"add",title:"Function: add",sidebar_label:"add",custom_edit_url:null,hide_title:!0},sidebar:"sidebar",previous:{title:"hikidashi",permalink:"/hikidashi/docs/safe/modules"},next:{title:"Function: divide",permalink:"/hikidashi/docs/safe/functions/divide"}},b=[],d={toc:b};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"\u25b8 ",Object(i.b)("strong",{parentName:"p"},"add"),"(",Object(i.b)("inlineCode",{parentName:"p"},"x?"),": NumberLike, ",Object(i.b)("inlineCode",{parentName:"p"},"y?"),": NumberLike): ",Object(i.b)("em",{parentName:"p"},"number")),Object(i.b)("p",null,"Adds two given NumberLikes."),Object(i.b)("h4",{id:"parameters"},"Parameters:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:"left"},"Name"),Object(i.b)("th",{parentName:"tr",align:"left"},"Type"),Object(i.b)("th",{parentName:"tr",align:"left"},"Default value"),Object(i.b)("th",{parentName:"tr",align:"left"},"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"x")),Object(i.b)("td",{parentName:"tr",align:"left"},"NumberLike"),Object(i.b)("td",{parentName:"tr",align:"left"},"0"),Object(i.b)("td",{parentName:"tr",align:"left"},"The augend.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"y")),Object(i.b)("td",{parentName:"tr",align:"left"},"NumberLike"),Object(i.b)("td",{parentName:"tr",align:"left"},"0"),Object(i.b)("td",{parentName:"tr",align:"left"},"The addend.")))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns:")," ",Object(i.b)("em",{parentName:"p"},"number")),Object(i.b)("p",null,"number - The resulting sum."),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/kaihodev/hikidashi/blob/00f7d6b/src/safe/math/add.ts#L10"},"safe/math/add.ts:10")))}l.isMDXComponent=!0}}]);