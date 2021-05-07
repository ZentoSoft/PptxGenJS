(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{108:function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return O}));var n=a(0),r=a.n(n);function p(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){p(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},p=Object.keys(e);for(n=0;n<p.length;n++)a=p[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)a=p[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=r.a.createContext({}),c=function(e){var t=r.a.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},o=function(e){var t=c(e.components);return r.a.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,p=e.originalType,b=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),o=c(a),m=n,O=o["".concat(b,".").concat(m)]||o[m]||s[m]||p;return a?r.a.createElement(O,l(l({ref:t},d),{},{components:a})):r.a.createElement(O,l({ref:t},d))}));function O(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=a.length,b=new Array(p);b[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,b[1]=l;for(var d=2;d<p;d++)b[d]=a[d];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},205:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/ex-shape-slide-da6d30f411b3140efc58bef6b275c2b5.png"},81:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return i})),a.d(t,"default",(function(){return c}));var n=a(3),r=a(8),p=(a(0),a(108)),b={id:"api-shapes",title:"Shapes"},l={unversionedId:"api-shapes",id:"api-shapes",isDocsHomePage:!1,title:"Shapes",description:"Almost 200 shape types can be added to Slides (see ShapeType enum).",source:"@site/docs/api-shapes.md",slug:"/api-shapes",permalink:"/PptxGenJS/docs/api-shapes",version:"current",lastUpdatedBy:"Brent Ely",lastUpdatedAt:1620100410,formattedLastUpdatedAt:"5/3/2021",sidebar:"docs",previous:{title:"Media",permalink:"/PptxGenJS/docs/api-media"},next:{title:"Tables",permalink:"/PptxGenJS/docs/api-tables"}},i=[{value:"Usage",id:"usage",children:[]},{value:"Properties",id:"properties",children:[{value:"Position/Size Props (PositionProps)",id:"positionsize-props-positionprops",children:[]},{value:"Shape Props (ShapeProps)",id:"shape-props-shapeprops",children:[]}]},{value:"Examples",id:"examples",children:[]},{value:"Samples",id:"samples",children:[]}],d={toc:i};function c(e){var t=e.components,b=Object(r.a)(e,["components"]);return Object(p.b)("wrapper",Object(n.a)({},d,b,{components:t,mdxType:"MDXLayout"}),Object(p.b)("p",null,"Almost 200 shape types can be added to Slides (see ",Object(p.b)("a",{parentName:"p",href:"https://github.com/gitbrent/PptxGenJS/blob/master/types/index.d.ts"},Object(p.b)("inlineCode",{parentName:"a"},"ShapeType"))," enum)."),Object(p.b)("h2",{id:"usage"},"Usage"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-typescript"},'// Shapes without text\nslide.addShape(pres.ShapeType.rect, { fill: { color: "FF0000" } });\nslide.addShape(pres.ShapeType.ellipse, { fill: { type: "solid", color: "0088CC" } });\nslide.addShape(pres.ShapeType.line, { line: { color: "FF0000", width: 1 } });\n\n// Shapes with text\nslide.addText("ShapeType.rect", { shape: pres.ShapeType.rect, fill: { color: "FF0000" } });\nslide.addText("ShapeType.ellipse", { shape: pres.ShapeType.ellipse, fill: { color: "FF0000" } });\nslide.addText("ShapeType.line", { shape: pres.ShapeType.line, line: { color: "FF0000", width: 1, dashType: "lgDash" } });\n')),Object(p.b)("h2",{id:"properties"},"Properties"),Object(p.b)("h3",{id:"positionsize-props-positionprops"},"Position/Size Props (",Object(p.b)("a",{parentName:"h3",href:"/PptxGenJS/docs/types#position-props"},"PositionProps"),")"),Object(p.b)("table",null,Object(p.b)("thead",{parentName:"table"},Object(p.b)("tr",{parentName:"thead"},Object(p.b)("th",{parentName:"tr",align:"left"},"Name"),Object(p.b)("th",{parentName:"tr",align:"left"},"Type"),Object(p.b)("th",{parentName:"tr",align:"left"},"Default"),Object(p.b)("th",{parentName:"tr",align:"left"},"Description"),Object(p.b)("th",{parentName:"tr",align:"left"},"Possible Values"))),Object(p.b)("tbody",{parentName:"table"},Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:"left"},Object(p.b)("inlineCode",{parentName:"td"},"x")),Object(p.b)("td",{parentName:"tr",align:"left"},"number"),Object(p.b)("td",{parentName:"tr",align:"left"},Object(p.b)("inlineCode",{parentName:"td"},"1.0")),Object(p.b)("td",{parentName:"tr",align:"left"},"hor location (inches)"),Object(p.b)("td",{parentName:"tr",align:"left"},"0-n")),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:"left"},Object(p.b)("inlineCode",{parentName:"td"},"x")),Object(p.b)("td",{parentName:"tr",align:"left"},"string"),Object(p.b)("td",{parentName:"tr",align:"left"}),Object(p.b)("td",{parentName:"tr",align:"left"},"hor location (percent)"),Object(p.b)("td",{parentName:"tr",align:"left"},"'n%'. (Ex: ",Object(p.b)("inlineCode",{parentName:"td"},"{x:'50%'}")," middle of the Slide)")),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:"left"},Object(p.b)("inlineCode",{parentName:"td"},"y")),Object(p.b)("td",{parentName:"tr",align:"left"},"number"),Object(p.b)("td",{parentName:"tr",align:"left"},Object(p.b)("inlineCode",{parentName:"td"},"1.0")),Object(p.b)("td",{parentName:"tr",align:"left"},"ver location (inches)"),Object(p.b)("td",{parentName:"tr",align:"left"},"0-n")),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:"left"},Object(p.b)("inlineCode",{parentName:"td"},"y")),Object(p.b)("td",{parentName:"tr",align:"left"},"string"),Object(p.b)("td",{parentName:"tr",align:"left"}),Object(p.b)("td",{parentName:"tr",align:"left"},"ver location (percent)"),Object(p.b)("td",{parentName:"tr",align:"left"},"'n%'. (Ex: ",Object(p.b)("inlineCode",{parentName:"td"},"{y:'50%'}")," middle of the Slide)")),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:"left"},Object(p.b)("inlineCode",{parentName:"td"},"w")),Object(p.b)("td",{parentName:"tr",align:"left"},"number"),Object(p.b)("td",{parentName:"tr",align:"left"},Object(p.b)("inlineCode",{parentName:"td"},"1.0")),Object(p.b)("td",{parentName:"tr",align:"left"},"width (inches)"),Object(p.b)("td",{parentName:"tr",align:"left"},"0-n")),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:"left"},Object(p.b)("inlineCode",{parentName:"td"},"w")),Object(p.b)("td",{parentName:"tr",align:"left"},"string"),Object(p.b)("td",{parentName:"tr",align:"left"}),Object(p.b)("td",{parentName:"tr",align:"left"},"width (percent)"),Object(p.b)("td",{parentName:"tr",align:"left"},"'n%'. (Ex: ",Object(p.b)("inlineCode",{parentName:"td"},"{w:'50%'}")," 50% the Slide width)")),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:"left"},Object(p.b)("inlineCode",{parentName:"td"},"h")),Object(p.b)("td",{parentName:"tr",align:"left"},"number"),Object(p.b)("td",{parentName:"tr",align:"left"},Object(p.b)("inlineCode",{parentName:"td"},"1.0")),Object(p.b)("td",{parentName:"tr",align:"left"},"height (inches)"),Object(p.b)("td",{parentName:"tr",align:"left"},"0-n")),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:"left"},Object(p.b)("inlineCode",{parentName:"td"},"h")),Object(p.b)("td",{parentName:"tr",align:"left"},"string"),Object(p.b)("td",{parentName:"tr",align:"left"}),Object(p.b)("td",{parentName:"tr",align:"left"},"height (percent)"),Object(p.b)("td",{parentName:"tr",align:"left"},"'n%'. (Ex: ",Object(p.b)("inlineCode",{parentName:"td"},"{h:'50%'}")," 50% the Slide height)")))),Object(p.b)("h3",{id:"shape-props-shapeprops"},"Shape Props (",Object(p.b)("a",{parentName:"h3",href:"/PptxGenJS/docs/types#shape-props-shapeprops"},"ShapeProps"),")"),Object(p.b)("table",null,Object(p.b)("thead",{parentName:"table"},Object(p.b)("tr",{parentName:"thead"},Object(p.b)("th",{parentName:"tr",align:"left"},"Name"),Object(p.b)("th",{parentName:"tr",align:"left"},"Type"),Object(p.b)("th",{parentName:"tr",align:"left"},"Description"),Object(p.b)("th",{parentName:"tr",align:"left"},"Possible Values"))),Object(p.b)("tbody",{parentName:"table"},Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:"left"},Object(p.b)("inlineCode",{parentName:"td"},"align")),Object(p.b)("td",{parentName:"tr",align:"left"},"string"),Object(p.b)("td",{parentName:"tr",align:"left"},"alignment"),Object(p.b)("td",{parentName:"tr",align:"left"},Object(p.b)("inlineCode",{parentName:"td"},"left")," or ",Object(p.b)("inlineCode",{parentName:"td"},"center")," or ",Object(p.b)("inlineCode",{parentName:"td"},"right"),". Default: ",Object(p.b)("inlineCode",{parentName:"td"},"left"))),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:"left"},Object(p.b)("inlineCode",{parentName:"td"},"fill")),Object(p.b)("td",{parentName:"tr",align:"left"},Object(p.b)("a",{parentName:"td",href:"/PptxGenJS/docs/types#fill-props-shapefillprops"},"ShapeFillProps")),Object(p.b)("td",{parentName:"tr",align:"left"},"fill props"),Object(p.b)("td",{parentName:"tr",align:"left"},"Fill color/transparency props")),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:"left"},Object(p.b)("inlineCode",{parentName:"td"},"flipH")),Object(p.b)("td",{parentName:"tr",align:"left"},"boolean"),Object(p.b)("td",{parentName:"tr",align:"left"},"flip Horizontal"),Object(p.b)("td",{parentName:"tr",align:"left"},Object(p.b)("inlineCode",{parentName:"td"},"true")," or ",Object(p.b)("inlineCode",{parentName:"td"},"false"))),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:"left"},Object(p.b)("inlineCode",{parentName:"td"},"flipV")),Object(p.b)("td",{parentName:"tr",align:"left"},"boolean"),Object(p.b)("td",{parentName:"tr",align:"left"},"flip Vertical"),Object(p.b)("td",{parentName:"tr",align:"left"},Object(p.b)("inlineCode",{parentName:"td"},"true")," or ",Object(p.b)("inlineCode",{parentName:"td"},"false"))),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:"left"},Object(p.b)("inlineCode",{parentName:"td"},"hyperlink")),Object(p.b)("td",{parentName:"tr",align:"left"},Object(p.b)("a",{parentName:"td",href:"/PptxGenJS/docs/types#hyperlink-props-hyperlinkprops"},"HyperlinkProps")),Object(p.b)("td",{parentName:"tr",align:"left"},"hyperlink props"),Object(p.b)("td",{parentName:"tr",align:"left"},"(see type link)")),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:"left"},Object(p.b)("inlineCode",{parentName:"td"},"line")),Object(p.b)("td",{parentName:"tr",align:"left"},Object(p.b)("a",{parentName:"td",href:"/PptxGenJS/docs/types#shape-line-props-shapelineprops"},"ShapeLineProps")),Object(p.b)("td",{parentName:"tr",align:"left"},"border line props"),Object(p.b)("td",{parentName:"tr",align:"left"},"(see type link)")),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:"left"},Object(p.b)("inlineCode",{parentName:"td"},"rectRadius")),Object(p.b)("td",{parentName:"tr",align:"left"},"number"),Object(p.b)("td",{parentName:"tr",align:"left"},"rounding radius"),Object(p.b)("td",{parentName:"tr",align:"left"},"0-180. (only for ",Object(p.b)("inlineCode",{parentName:"td"},"pptx.shapes.ROUNDED_RECTANGLE"),")")),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:"left"},Object(p.b)("inlineCode",{parentName:"td"},"rotate")),Object(p.b)("td",{parentName:"tr",align:"left"},"number"),Object(p.b)("td",{parentName:"tr",align:"left"},"rotation (degrees)"),Object(p.b)("td",{parentName:"tr",align:"left"},"-360 to 360. Default: ",Object(p.b)("inlineCode",{parentName:"td"},"0"))),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:"left"},Object(p.b)("inlineCode",{parentName:"td"},"shadow")),Object(p.b)("td",{parentName:"tr",align:"left"},Object(p.b)("a",{parentName:"td",href:"/PptxGenJS/docs/types#shadow-props-shadowprops"},"ShadowProps")),Object(p.b)("td",{parentName:"tr",align:"left"},"shadow props"),Object(p.b)("td",{parentName:"tr",align:"left"},"(see type link)")),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:"left"},Object(p.b)("inlineCode",{parentName:"td"},"shapeName")),Object(p.b)("td",{parentName:"tr",align:"left"},"string"),Object(p.b)("td",{parentName:"tr",align:"left"},"optional shape name"),Object(p.b)("td",{parentName:"tr",align:"left"},'Ex: "Customer Network Diagram 99"')))),Object(p.b)("h2",{id:"examples"},"Examples"),Object(p.b)("p",null,Object(p.b)("img",{alt:"Shapes with Text Demo",src:a(205).default})),Object(p.b)("h2",{id:"samples"},"Samples"),Object(p.b)("p",null,"Sample code all available types: ",Object(p.b)("a",{parentName:"p",href:"https://github.com/gitbrent/PptxGenJS/blob/master/demos/modules/demo_shape.mjs"},"demos/modules/demo_shape.mjs")))}c.isMDXComponent=!0}}]);