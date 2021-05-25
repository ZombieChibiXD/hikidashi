(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{106:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),i=(n(0),n(122)),c={id:"isarithmeticsequence",title:"Function: isArithmeticSequence",sidebar_label:"isArithmeticSequence",custom_edit_url:null,hide_title:!0},o={unversionedId:"safe/functions/isarithmeticsequence",id:"safe/functions/isarithmeticsequence",isDocsHomePage:!1,title:"Function: isArithmeticSequence",description:"\u25b8 isArithmeticSequence(a boolean",source:"@site/docs/safe/functions/isarithmeticsequence.md",sourceDirName:"safe/functions",slug:"/safe/functions/isarithmeticsequence",permalink:"/docs/safe/functions/isarithmeticsequence",editUrl:null,version:"current",sidebar_label:"isArithmeticSequence",frontMatter:{id:"isarithmeticsequence",title:"Function: isArithmeticSequence",sidebar_label:"isArithmeticSequence",custom_edit_url:null,hide_title:!0},sidebar:"sidebar",previous:{title:"Function: identity",permalink:"/docs/safe/functions/identity"},next:{title:"Function: map",permalink:"/docs/safe/functions/map"}},u=[],s={toc:u};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"\u25b8 ",Object(i.b)("strong",{parentName:"p"},"isArithmeticSequence"),"(",Object(i.b)("inlineCode",{parentName:"p"},"a"),": NumberLike[]): ",Object(i.b)("em",{parentName:"p"},"boolean")),Object(i.b)("p",null,"A function that checks whether a provided array contains numbers in an arithmetic sequence."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"remarks")),"\nIf the provided array has a length of 0 or 1, true is returned."),Object(i.b)("h4",{id:"parameters"},"Parameters:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:"left"},"Name"),Object(i.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"a")),Object(i.b)("td",{parentName:"tr",align:"left"},"NumberLike[]")))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns:")," ",Object(i.b)("em",{parentName:"p"},"boolean")),Object(i.b)("p",null,"boolean - true or false result."),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/kaihodev/hikidashi/blob/22233da/src/safe/array/isArithmeticSequence.ts#L13"},"safe/array/isArithmeticSequence.ts:13")))}l.isMDXComponent=!0},122:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),l=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=l(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),b=l(n),m=r,f=b["".concat(c,".").concat(m)]||b[m]||p[m]||i;return n?a.a.createElement(f,o(o({ref:t},s),{},{components:n})):a.a.createElement(f,o({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var s=2;s<i;s++)c[s]=n[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);