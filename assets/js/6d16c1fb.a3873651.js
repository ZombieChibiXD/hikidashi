(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{109:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return u}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),p=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):b(b({},t),e)),a},d=function(e){var t=p(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,i=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),d=p(a),s=n,u=d["".concat(i,".").concat(s)]||d[s]||m[s]||c;return a?r.a.createElement(u,b(b({ref:t},o),{},{components:a})):r.a.createElement(u,b({ref:t},o))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,i=new Array(c);i[0]=s;var b={};for(var l in t)hasOwnProperty.call(t,l)&&(b[l]=t[l]);b.originalType=e,b.mdxType="string"==typeof e?e:n,i[1]=b;for(var o=2;o<c;o++)i[o]=a[o];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}s.displayName="MDXCreateElement"},87:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return b})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(7),c=(a(0),a(109)),i={id:"each",title:"Function: each",sidebar_label:"each",custom_edit_url:null,hide_title:!0},b={unversionedId:"safe/functions/each",id:"safe/functions/each",isDocsHomePage:!1,title:"Function: each",description:"\u25b8 each(arr ArrayCBT, thisArg? void",source:"@site/docs/safe/functions/each.md",sourceDirName:"safe/functions",slug:"/safe/functions/each",permalink:"/hikidashi/docs/safe/functions/each",editUrl:null,version:"current",sidebar_label:"each",frontMatter:{id:"each",title:"Function: each",sidebar_label:"each",custom_edit_url:null,hide_title:!0},sidebar:"sidebar",previous:{title:"Function: divide",permalink:"/hikidashi/docs/safe/functions/divide"},next:{title:"Function: filter",permalink:"/hikidashi/docs/safe/functions/filter"}},l=[],o={toc:l};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"each"),"<Q, T",">","(",Object(c.b)("inlineCode",{parentName:"p"},"arr"),": Q, ",Object(c.b)("inlineCode",{parentName:"p"},"callback?"),": ",Object(c.b)("em",{parentName:"p"},"ArrayCBT"),"<T",">",", ",Object(c.b)("inlineCode",{parentName:"p"},"thisArg?"),": ",Object(c.b)("em",{parentName:"p"},"unknown"),"): ",Object(c.b)("em",{parentName:"p"},"void")),Object(c.b)("p",null,"A more-or-less spec-compliant Array forEach."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"remarks"))," "),Object(c.b)("p",null,"This implementation loops in reverse order."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"see"))," ",Object(c.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map"},"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map")),Object(c.b)("h4",{id:"type-parameters"},"Type parameters:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:"left"},"Name"),Object(c.b)("th",{parentName:"tr",align:"left"},"Type"),Object(c.b)("th",{parentName:"tr",align:"left"},"Default"),Object(c.b)("th",{parentName:"tr",align:"left"},"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("inlineCode",{parentName:"td"},"Q")),Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("em",{parentName:"td"},"unknown")),Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("em",{parentName:"td"},"unknown"),"[]"),Object(c.b)("td",{parentName:"tr",align:"left"},"The type of the array-like being provided.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("inlineCode",{parentName:"td"},"T")),Object(c.b)("td",{parentName:"tr",align:"left"},"-"),Object(c.b)("td",{parentName:"tr",align:"left"},"Q","[keyof Q]"),Object(c.b)("td",{parentName:"tr",align:"left"},"The type of elements in the array-like being provided.")))),Object(c.b)("h4",{id:"parameters"},"Parameters:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:"left"},"Name"),Object(c.b)("th",{parentName:"tr",align:"left"},"Type"),Object(c.b)("th",{parentName:"tr",align:"left"},"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("inlineCode",{parentName:"td"},"arr")),Object(c.b)("td",{parentName:"tr",align:"left"},"Q"),Object(c.b)("td",{parentName:"tr",align:"left"},"The input array-like to loop through.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("inlineCode",{parentName:"td"},"callback")),Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("em",{parentName:"td"},"ArrayCBT"),"<T",">"),Object(c.b)("td",{parentName:"tr",align:"left"},"The callback provided.                   This iteratee is invoked with three arguments: value, index","|","key, and arr.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("inlineCode",{parentName:"td"},"thisArg")),Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("em",{parentName:"td"},"unknown")),Object(c.b)("td",{parentName:"tr",align:"left"},"The value to use as ",Object(c.b)("inlineCode",{parentName:"td"},"this")," when executing callback.")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"void")),Object(c.b)("p",null,"void"),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/kaihodev/hikidashi/blob/978802d/src/safe/array/each.ts#L23"},"safe/array/each.ts:23")))}p.isMDXComponent=!0}}]);