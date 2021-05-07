(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{108:function(e,t,a){"use strict";a.d(t,"a",(function(){return c})),a.d(t,"b",(function(){return O}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=r.a.createContext({}),p=function(e){var t=r.a.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):b(b({},t),e)),a},c=function(e){var t=p(e.components);return r.a.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=p(a),s=n,O=c["".concat(i,".").concat(s)]||c[s]||m[s]||l;return a?r.a.createElement(O,b(b({ref:t},d),{},{components:a})):r.a.createElement(O,b({ref:t},d))}));function O(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=s;var b={};for(var o in t)hasOwnProperty.call(t,o)&&(b[o]=t[o]);b.originalType=e,b.mdxType="string"==typeof e?e:n,i[1]=b;for(var d=2;d<l;d++)i[d]=a[d];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}s.displayName="MDXCreateElement"},207:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/ex-html-to-powerpoint-1-d5eb65272cf24996271a83dc50681409.png"},208:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/ex-html-to-powerpoint-2-86dfcfe05047001b3e07d723d476ca03.png"},87:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return b})),a.d(t,"toc",(function(){return o})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(8),l=(a(0),a(108)),i={id:"html-to-powerpoint",sidebar_label:"HTML-to-PowerPoint",title:"HTML to PowerPoint"},b={unversionedId:"html-to-powerpoint",id:"html-to-powerpoint",isDocsHomePage:!1,title:"HTML to PowerPoint",description:"Reproduces an HTML table into 1 or more slides (auto-paging).",source:"@site/docs/html-to-powerpoint.md",slug:"/html-to-powerpoint",permalink:"/PptxGenJS/docs/html-to-powerpoint",version:"current",lastUpdatedBy:"Brent Ely",lastUpdatedAt:1616114678,formattedLastUpdatedAt:"3/18/2021",sidebar_label:"HTML-to-PowerPoint",sidebar:"docs",previous:{title:"Saving Presentations",permalink:"/PptxGenJS/docs/usage-saving"},next:{title:"Masters and Placeholders",permalink:"/PptxGenJS/docs/masters"}},o=[{value:"HTML to PowerPoint Syntax",id:"html-to-powerpoint-syntax",children:[]},{value:"HTML to PowerPoint Options (<code>ITableToSlidesOpts</code>)",id:"html-to-powerpoint-options-itabletoslidesopts",children:[]},{value:"HTML to PowerPoint Table Options",id:"html-to-powerpoint-table-options",children:[]},{value:"HTML to PowerPoint Notes",id:"html-to-powerpoint-notes",children:[]},{value:"HTML to PowerPoint Examples",id:"html-to-powerpoint-examples",children:[{value:"HTML Table",id:"html-table",children:[]},{value:"Resulting Slides",id:"resulting-slides",children:[]},{value:"Demos",id:"demos",children:[]}]},{value:"HTML to PowerPoint Creative Solutions",id:"html-to-powerpoint-creative-solutions",children:[]}],d={toc:o};function p(e){var t=e.components,i=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},d,i,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Reproduces an HTML table into 1 or more slides (auto-paging)."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Supported cell styling includes background colors, borders, fonts, padding, etc."),Object(l.b)("li",{parentName:"ul"},"Slide margin settings can be set using options, or by providing a Master Slide definition")),Object(l.b)("p",null,"Notes:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"CSS styles are only supported down to the cell level (word-level formatting is not supported)"),Object(l.b)("li",{parentName:"ul"},"Nested tables are not supported in PowerPoint, therefore they cannot be reproduced (only the text will be included)")),Object(l.b)("h2",{id:"html-to-powerpoint-syntax"},"HTML to PowerPoint Syntax"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-javascript"},"slide.tableToSlides(htmlElementID);\nslide.tableToSlides(htmlElementID, { OPTIONS });\n")),Object(l.b)("h2",{id:"html-to-powerpoint-options-itabletoslidesopts"},"HTML to PowerPoint Options (",Object(l.b)("inlineCode",{parentName:"h2"},"ITableToSlidesOpts"),")"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:"left"},"Option"),Object(l.b)("th",{parentName:"tr",align:"left"},"Type"),Object(l.b)("th",{parentName:"tr",align:"left"},"Default"),Object(l.b)("th",{parentName:"tr",align:"left"},"Description"),Object(l.b)("th",{parentName:"tr",align:"left"},"Possible Values"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("inlineCode",{parentName:"td"},"x")),Object(l.b)("td",{parentName:"tr",align:"left"},"number"),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("inlineCode",{parentName:"td"},"1.0")),Object(l.b)("td",{parentName:"tr",align:"left"},"horizontal location (inches)"),Object(l.b)("td",{parentName:"tr",align:"left"},"0-256. Table will be placed here on each Slide")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("inlineCode",{parentName:"td"},"y")),Object(l.b)("td",{parentName:"tr",align:"left"},"number"),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("inlineCode",{parentName:"td"},"1.0")),Object(l.b)("td",{parentName:"tr",align:"left"},"vertical location (inches)"),Object(l.b)("td",{parentName:"tr",align:"left"},"0-256. Table will be placed here on each Slide")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("inlineCode",{parentName:"td"},"w")),Object(l.b)("td",{parentName:"tr",align:"left"},"number"),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("inlineCode",{parentName:"td"},"100%")),Object(l.b)("td",{parentName:"tr",align:"left"},"width (inches)"),Object(l.b)("td",{parentName:"tr",align:"left"},"0-256.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("inlineCode",{parentName:"td"},"h")),Object(l.b)("td",{parentName:"tr",align:"left"},"number"),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("inlineCode",{parentName:"td"},"100%")),Object(l.b)("td",{parentName:"tr",align:"left"},"height (inches)"),Object(l.b)("td",{parentName:"tr",align:"left"},"0-256.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("inlineCode",{parentName:"td"},"addHeaderToEach")),Object(l.b)("td",{parentName:"tr",align:"left"},"boolean"),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("inlineCode",{parentName:"td"},"false")),Object(l.b)("td",{parentName:"tr",align:"left"},"add table headers to each slide"),Object(l.b)("td",{parentName:"tr",align:"left"},"Ex: ",Object(l.b)("inlineCode",{parentName:"td"},"{addHeaderToEach:true}"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("inlineCode",{parentName:"td"},"addImage")),Object(l.b)("td",{parentName:"tr",align:"left"},"string"),Object(l.b)("td",{parentName:"tr",align:"left"}),Object(l.b)("td",{parentName:"tr",align:"left"},"add an image to each slide"),Object(l.b)("td",{parentName:"tr",align:"left"},"Ex: ",Object(l.b)("inlineCode",{parentName:"td"},'{addImage:{ path:"images/logo.png", x:10, y:0.5, w:1.2, h:0.75 }}'))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("inlineCode",{parentName:"td"},"addShape")),Object(l.b)("td",{parentName:"tr",align:"left"},"string"),Object(l.b)("td",{parentName:"tr",align:"left"}),Object(l.b)("td",{parentName:"tr",align:"left"},"add a shape to each slide"),Object(l.b)("td",{parentName:"tr",align:"left"},"Use the established syntax")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("inlineCode",{parentName:"td"},"addTable")),Object(l.b)("td",{parentName:"tr",align:"left"},"string"),Object(l.b)("td",{parentName:"tr",align:"left"}),Object(l.b)("td",{parentName:"tr",align:"left"},"add a table to each slide"),Object(l.b)("td",{parentName:"tr",align:"left"},"Use the established syntax")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("inlineCode",{parentName:"td"},"addText")),Object(l.b)("td",{parentName:"tr",align:"left"},"string"),Object(l.b)("td",{parentName:"tr",align:"left"}),Object(l.b)("td",{parentName:"tr",align:"left"},"add text to each slide"),Object(l.b)("td",{parentName:"tr",align:"left"},"Use the established syntax")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("inlineCode",{parentName:"td"},"autoPage")),Object(l.b)("td",{parentName:"tr",align:"left"},"boolean"),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("inlineCode",{parentName:"td"},"true")),Object(l.b)("td",{parentName:"tr",align:"left"},"create new slides when content overflows"),Object(l.b)("td",{parentName:"tr",align:"left"},"Ex: ",Object(l.b)("inlineCode",{parentName:"td"},"{autoPage:false}"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("inlineCode",{parentName:"td"},"autoPageCharWeight")),Object(l.b)("td",{parentName:"tr",align:"left"},"number"),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("inlineCode",{parentName:"td"},"0.0")),Object(l.b)("td",{parentName:"tr",align:"left"},"character weight used to determine when lines wrap"),Object(l.b)("td",{parentName:"tr",align:"left"},"-1.0 to 1.0. Ex: ",Object(l.b)("inlineCode",{parentName:"td"},"{autoPageCharWeight:0.5}"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("inlineCode",{parentName:"td"},"autoPageLineWeight")),Object(l.b)("td",{parentName:"tr",align:"left"},"number"),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("inlineCode",{parentName:"td"},"0.0")),Object(l.b)("td",{parentName:"tr",align:"left"},"line weight used to determine when tables wrap"),Object(l.b)("td",{parentName:"tr",align:"left"},"-1.0 to 1.0. Ex: ",Object(l.b)("inlineCode",{parentName:"td"},"{autoPageLineWeight:0.5}"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("inlineCode",{parentName:"td"},"colW")),Object(l.b)("td",{parentName:"tr",align:"left"},"number"),Object(l.b)("td",{parentName:"tr",align:"left"}),Object(l.b)("td",{parentName:"tr",align:"left"},"table column widths"),Object(l.b)("td",{parentName:"tr",align:"left"},"Array of column widths. Ex: ",Object(l.b)("inlineCode",{parentName:"td"},"{ colW: [2.0, 3.0, 1.0] }"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("inlineCode",{parentName:"td"},"masterSlideName")),Object(l.b)("td",{parentName:"tr",align:"left"},"string"),Object(l.b)("td",{parentName:"tr",align:"left"}),Object(l.b)("td",{parentName:"tr",align:"left"},"master slide to use"),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("a",{parentName:"td",href:"#slide-masters"},"Slide Masters")," name. Ex: ",Object(l.b)("inlineCode",{parentName:"td"},"{ master:'TITLE_SLIDE' }"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("inlineCode",{parentName:"td"},"newSlideStartY")),Object(l.b)("td",{parentName:"tr",align:"left"},"number"),Object(l.b)("td",{parentName:"tr",align:"left"}),Object(l.b)("td",{parentName:"tr",align:"left"},"starting location on Slide after initial"),Object(l.b)("td",{parentName:"tr",align:"left"},"0-(slide height). Ex: ",Object(l.b)("inlineCode",{parentName:"td"},"{newSlideStartY:0.5}"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("inlineCode",{parentName:"td"},"slideMargin")),Object(l.b)("td",{parentName:"tr",align:"left"},"number"),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("inlineCode",{parentName:"td"},"1.0")),Object(l.b)("td",{parentName:"tr",align:"left"},"margins to use on Slide"),Object(l.b)("td",{parentName:"tr",align:"left"},"Use a number for same TRBL, or use array. Ex: ",Object(l.b)("inlineCode",{parentName:"td"},"{ margin:[1.0,0.5,1.0,0.5] }"))))),Object(l.b)("h2",{id:"html-to-powerpoint-table-options"},"HTML to PowerPoint Table Options"),Object(l.b)("p",null,"Add an ",Object(l.b)("inlineCode",{parentName:"p"},"data")," attribute to the table's ",Object(l.b)("inlineCode",{parentName:"p"},"<th>")," tag to manually size columns (inches)"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"minimum column width can be specified by using the ",Object(l.b)("inlineCode",{parentName:"li"},"data-pptx-min-width")," attribute"),Object(l.b)("li",{parentName:"ul"},"fixed column width can be specified by using the ",Object(l.b)("inlineCode",{parentName:"li"},"data-pptx-width")," attribute")),Object(l.b)("p",null,"Example:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-HTML"},'<table id="tabAutoPaging" class="tabCool">\n  <thead>\n    <tr>\n      <th data-pptx-min-width="0.6" style="width: 5%">Row</th>\n      <th data-pptx-min-width="0.8" style="width:10%">Last Name</th>\n      <th data-pptx-min-width="0.8" style="width:10%">First Name</th>\n      <th data-pptx-width="8.5"     style="width:75%">Description</th>\n    </tr>\n  </thead>\n  <tbody></tbody>\n</table>\n')),Object(l.b)("h2",{id:"html-to-powerpoint-notes"},"HTML to PowerPoint Notes"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Your Master Slides should already have defined margins, so a Master Slide name is the only option you'll need most of the time"),Object(l.b)("li",{parentName:"ul"},"Hidden tables wont auto-size their columns correctly (as the properties are not accurate)")),Object(l.b)("h2",{id:"html-to-powerpoint-examples"},"HTML to PowerPoint Examples"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-javascript"},'// Pass table element ID to tableToSlides function to produce 1-N slides\npptx.tableToSlides("myHtmlTableID");\n\n// Optionally, include a Master Slide name for pre-defined margins, background, logo, etc.\npptx.tableToSlides("myHtmlTableID", { master: "MASTER_SLIDE" });\n\n// Optionally, add images/shapes/text/tables to each Slide\npptx.tableToSlides("myHtmlTableID", {\n  addText: { text: "Dynamic Title", options: { x: 1, y: 0.5, color: "0088CC" } }\n});\npptx.tableToSlides("myHtmlTableID", {\n  addImage: { path: "images/logo.png", x: 10, y: 0.5, w: 1.2, h: 0.75 }\n});\n')),Object(l.b)("h3",{id:"html-table"},"HTML Table"),Object(l.b)("p",null,Object(l.b)("img",{alt:"HTML-to-PowerPoint Table",src:a(207).default})),Object(l.b)("h3",{id:"resulting-slides"},"Resulting Slides"),Object(l.b)("p",null,Object(l.b)("img",{alt:"HTML-to-PowerPoint Presentation",src:a(208).default})),Object(l.b)("h3",{id:"demos"},"Demos"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Working example is available under ",Object(l.b)("a",{parentName:"li",href:"https://github.com/gitbrent/PptxGenJS/tree/master/demos"},"/demos"))),Object(l.b)("h2",{id:"html-to-powerpoint-creative-solutions"},"HTML to PowerPoint Creative Solutions"),Object(l.b)("p",null,"Design a Master Slide that already contains: slide layout, margins, logos, etc., then you can produce\nprofessional looking Presentations with a single line of code which can be embedded into a link or a button:"),Object(l.b)("p",null,"Add a button to a webpage that will create a Presentation using whatever table data is present:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-html"},'<button\n  onclick="{ var pptx=new PptxGenJS(); pptx.tableToSlides(\'tableId\'); pptx.writeFile(); }"\n  type="button"\n>\n  Export to PPTX\n</button>\n')),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"SharePoint Integration")),Object(l.b)("p",null,'Placing a button like this into a WebPart is a great way to add "Export to PowerPoint" functionality\nto SharePoint. (You\'d also need to add the PptxGenJS bundle ',Object(l.b)("inlineCode",{parentName:"p"},"<script>")," in that/another WebPart)"))}p.isMDXComponent=!0}}]);