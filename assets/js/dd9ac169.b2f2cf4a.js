(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{101:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return o})),a.d(t,"default",(function(){return c}));var n=a(3),r=a(8),l=(a(0),a(108)),b={id:"api-tables",title:"Tables"},i={unversionedId:"api-tables",id:"api-tables",isDocsHomePage:!1,title:"Tables",description:"Tables and content can be added to Slides.",source:"@site/docs/api-tables.md",slug:"/api-tables",permalink:"/PptxGenJS/docs/api-tables",version:"current",lastUpdatedBy:"Brent Ely",lastUpdatedAt:1620100410,formattedLastUpdatedAt:"5/3/2021",sidebar:"docs",previous:{title:"Shapes",permalink:"/PptxGenJS/docs/api-shapes"},next:{title:"Text",permalink:"/PptxGenJS/docs/api-text"}},o=[{value:"Usage",id:"usage",children:[{value:"Usage Notes",id:"usage-notes",children:[]},{value:"Table Cell Formatting",id:"table-cell-formatting",children:[]},{value:"Table Row Height",id:"table-row-height",children:[]}]},{value:"Properties",id:"properties",children:[{value:"Position/Size Props (PositionProps)",id:"positionsize-props-positionprops",children:[]},{value:"Table Layout Options (<code>ITableOptions</code>)",id:"table-layout-options-itableoptions",children:[]},{value:"Table Formatting Props (<code>ITableOptions</code>)",id:"table-formatting-props-itableoptions",children:[]},{value:"Table Border Options (<code>IBorderOptions</code>)",id:"table-border-options-iborderoptions",children:[]}]},{value:"Table Auto-Paging",id:"table-auto-paging",children:[{value:"Table Auto-Paging Options (<code>ITableOptions</code>)",id:"table-auto-paging-options-itableoptions",children:[]},{value:"Auto-Paging Property Notes",id:"auto-paging-property-notes",children:[]},{value:"Auto-Paging Usage Notes",id:"auto-paging-usage-notes",children:[]}]},{value:"Examples",id:"examples",children:[{value:"Table Cell Formatting",id:"table-cell-formatting-1",children:[]}]},{value:"Samples",id:"samples",children:[]}],d={toc:o};function c(e){var t=e.components,b=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},d,b,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Tables and content can be added to Slides."),Object(l.b)("h2",{id:"usage"},"Usage"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-typescript"},'// TABLE 1: Single-row table\nlet rows = [["Cell 1", "Cell 2", "Cell 3"]];\nslide.addTable(rows, { w: 9 });\n\n// TABLE 2: Multi-row table\n// - each row\'s array element is an array of cells\nlet rows = [["A1", "B1", "C1"]];\nslide.addTable(rows, { align: "left", fontFace: "Arial" });\n\n// TABLE 3: Formatting at a cell level\n// - use this to selectively override the table\'s cell options\nlet rows = [\n    [\n        { text: "Top Lft", options: { align: "left", fontFace: "Arial" } },\n        { text: "Top Ctr", options: { align: "center", fontFace: "Verdana" } },\n        { text: "Top Rgt", options: { align: "right", fontFace: "Courier" } },\n    ],\n];\nslide.addTable(rows, { w: 9, rowH: 1, align: "left", fontFace: "Arial" });\n')),Object(l.b)("h3",{id:"usage-notes"},"Usage Notes"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Properties passed to ",Object(l.b)("inlineCode",{parentName:"li"},"addTable()")," apply to every cell in the table"),Object(l.b)("li",{parentName:"ul"},"Selectively override formatting at a cell-level by providing properties to the cell object")),Object(l.b)("h3",{id:"table-cell-formatting"},"Table Cell Formatting"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Table cells can be either a plain text string or an object with text and options properties"),Object(l.b)("li",{parentName:"ul"},"When using an object, any of the formatting options above can be passed in ",Object(l.b)("inlineCode",{parentName:"li"},"options")," and will apply to that cell only"),Object(l.b)("li",{parentName:"ul"},"Cell borders can be removed (aka: borderless table) by using the 'none' type (Ex: ",Object(l.b)("inlineCode",{parentName:"li"},"border: {type:'none'}"),")"),Object(l.b)("li",{parentName:"ul"},"Bullets and word-level formatting are supported inside table cells. Passing an array of objects with text/options values\nas the ",Object(l.b)("inlineCode",{parentName:"li"},"text")," value allows fine-grained control over the text inside cells."),Object(l.b)("li",{parentName:"ul"},"Available formatting options are here: ",Object(l.b)("a",{parentName:"li",href:"/PptxGenJS/docs/api-text.html#text-options"},"Text Options"))),Object(l.b)("h3",{id:"table-row-height"},"Table Row Height"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Use the ",Object(l.b)("inlineCode",{parentName:"li"},"h")," property to have row(s) divided evenly across the defined area"),Object(l.b)("li",{parentName:"ul"},"Use the ",Object(l.b)("inlineCode",{parentName:"li"},"rowH")," property with an array of values to specify row heights (indexed 0-n)"),Object(l.b)("li",{parentName:"ul"},"Omit both properties to have table rows consume only the space required for its contents")),Object(l.b)("h2",{id:"properties"},"Properties"),Object(l.b)("h3",{id:"positionsize-props-positionprops"},"Position/Size Props (",Object(l.b)("a",{parentName:"h3",href:"/PptxGenJS/docs/types#position-props"},"PositionProps"),")"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:"left"},"Option"),Object(l.b)("th",{parentName:"tr",align:"left"},"Type"),Object(l.b)("th",{parentName:"tr",align:"left"},"Default"),Object(l.b)("th",{parentName:"tr",align:"left"},"Description"),Object(l.b)("th",{parentName:"tr",align:"left"},"Possible Values"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("inlineCode",{parentName:"td"},"x")),Object(l.b)("td",{parentName:"tr",align:"left"},"number"),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("inlineCode",{parentName:"td"},"1.0")),Object(l.b)("td",{parentName:"tr",align:"left"},"hor location (inches)"),Object(l.b)("td",{parentName:"tr",align:"left"},"0-n")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("inlineCode",{parentName:"td"},"x")),Object(l.b)("td",{parentName:"tr",align:"left"},"string"),Object(l.b)("td",{parentName:"tr",align:"left"}),Object(l.b)("td",{parentName:"tr",align:"left"},"hor location (percent)"),Object(l.b)("td",{parentName:"tr",align:"left"},"'n%'. (Ex: ",Object(l.b)("inlineCode",{parentName:"td"},"{x:'50%'}")," middle of the Slide)")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("inlineCode",{parentName:"td"},"y")),Object(l.b)("td",{parentName:"tr",align:"left"},"number"),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("inlineCode",{parentName:"td"},"1.0")),Object(l.b)("td",{parentName:"tr",align:"left"},"ver location (inches)"),Object(l.b)("td",{parentName:"tr",align:"left"},"0-n")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("inlineCode",{parentName:"td"},"y")),Object(l.b)("td",{parentName:"tr",align:"left"},"string"),Object(l.b)("td",{parentName:"tr",align:"left"}),Object(l.b)("td",{parentName:"tr",align:"left"},"ver location (percent)"),Object(l.b)("td",{parentName:"tr",align:"left"},"'n%'. (Ex: ",Object(l.b)("inlineCode",{parentName:"td"},"{y:'50%'}")," middle of the Slide)")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("inlineCode",{parentName:"td"},"w")),Object(l.b)("td",{parentName:"tr",align:"left"},"number"),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("inlineCode",{parentName:"td"},"1.0")),Object(l.b)("td",{parentName:"tr",align:"left"},"width (inches)"),Object(l.b)("td",{parentName:"tr",align:"left"},"0-n")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("inlineCode",{parentName:"td"},"w")),Object(l.b)("td",{parentName:"tr",align:"left"},"string"),Object(l.b)("td",{parentName:"tr",align:"left"}),Object(l.b)("td",{parentName:"tr",align:"left"},"width (percent)"),Object(l.b)("td",{parentName:"tr",align:"left"},"'n%'. (Ex: ",Object(l.b)("inlineCode",{parentName:"td"},"{w:'50%'}")," 50% the Slide width)")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("inlineCode",{parentName:"td"},"h")),Object(l.b)("td",{parentName:"tr",align:"left"},"number"),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("inlineCode",{parentName:"td"},"1.0")),Object(l.b)("td",{parentName:"tr",align:"left"},"height (inches)"),Object(l.b)("td",{parentName:"tr",align:"left"},"0-n")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("inlineCode",{parentName:"td"},"h")),Object(l.b)("td",{parentName:"tr",align:"left"},"string"),Object(l.b)("td",{parentName:"tr",align:"left"}),Object(l.b)("td",{parentName:"tr",align:"left"},"height (percent)"),Object(l.b)("td",{parentName:"tr",align:"left"},"'n%'. (Ex: ",Object(l.b)("inlineCode",{parentName:"td"},"{h:'50%'}")," 50% the Slide height)")))),Object(l.b)("h3",{id:"table-layout-options-itableoptions"},"Table Layout Options (",Object(l.b)("inlineCode",{parentName:"h3"},"ITableOptions"),")"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:"left"},"Option"),Object(l.b)("th",{parentName:"tr",align:"left"},"Type"),Object(l.b)("th",{parentName:"tr",align:"left"},"Description"),Object(l.b)("th",{parentName:"tr",align:"left"},"Possible Values (inches or percent)"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("inlineCode",{parentName:"td"},"colW")),Object(l.b)("td",{parentName:"tr",align:"left"},"integer"),Object(l.b)("td",{parentName:"tr",align:"left"},"width for every column"),Object(l.b)("td",{parentName:"tr",align:"left"},"Ex: Width for every column in table (uniform) ",Object(l.b)("inlineCode",{parentName:"td"},"2.0"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("inlineCode",{parentName:"td"},"colW")),Object(l.b)("td",{parentName:"tr",align:"left"},"array"),Object(l.b)("td",{parentName:"tr",align:"left"},"column widths in order"),Object(l.b)("td",{parentName:"tr",align:"left"},"Ex: Width for each of 5 columns ",Object(l.b)("inlineCode",{parentName:"td"},"[1.0, 2.0, 2.5, 1.5, 1.0]"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("inlineCode",{parentName:"td"},"rowH")),Object(l.b)("td",{parentName:"tr",align:"left"},"integer"),Object(l.b)("td",{parentName:"tr",align:"left"},"height for every row"),Object(l.b)("td",{parentName:"tr",align:"left"},"Ex: Height for every row in table (uniform) ",Object(l.b)("inlineCode",{parentName:"td"},"2.0"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("inlineCode",{parentName:"td"},"rowH")),Object(l.b)("td",{parentName:"tr",align:"left"},"array"),Object(l.b)("td",{parentName:"tr",align:"left"},"row heights in order"),Object(l.b)("td",{parentName:"tr",align:"left"},"Ex: Height for each of 5 rows ",Object(l.b)("inlineCode",{parentName:"td"},"[1.0, 2.0, 2.5, 1.5, 1.0]"))))),Object(l.b)("h3",{id:"table-formatting-props-itableoptions"},"Table Formatting Props (",Object(l.b)("inlineCode",{parentName:"h3"},"ITableOptions"),")"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:"left"},"Option"),Object(l.b)("th",{parentName:"tr",align:"left"},"Type"),Object(l.b)("th",{parentName:"tr",align:"left"},"Unit"),Object(l.b)("th",{parentName:"tr",align:"left"},"Default"),Object(l.b)("th",{parentName:"tr",align:"left"},"Description"),Object(l.b)("th",{parentName:"tr",align:"left"},"Possible Values"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("inlineCode",{parentName:"td"},"align")),Object(l.b)("td",{parentName:"tr",align:"left"},"string"),Object(l.b)("td",{parentName:"tr",align:"left"}),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("inlineCode",{parentName:"td"},"left")),Object(l.b)("td",{parentName:"tr",align:"left"},"alignment"),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("inlineCode",{parentName:"td"},"left")," or ",Object(l.b)("inlineCode",{parentName:"td"},"center")," or ",Object(l.b)("inlineCode",{parentName:"td"},"right"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("inlineCode",{parentName:"td"},"bold")),Object(l.b)("td",{parentName:"tr",align:"left"},"boolean"),Object(l.b)("td",{parentName:"tr",align:"left"}),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("inlineCode",{parentName:"td"},"false")),Object(l.b)("td",{parentName:"tr",align:"left"},"bold text"),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("inlineCode",{parentName:"td"},"true")," or ",Object(l.b)("inlineCode",{parentName:"td"},"false"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("inlineCode",{parentName:"td"},"border")),Object(l.b)("td",{parentName:"tr",align:"left"},"object"),Object(l.b)("td",{parentName:"tr",align:"left"}),Object(l.b)("td",{parentName:"tr",align:"left"}),Object(l.b)("td",{parentName:"tr",align:"left"},"cell border"),Object(l.b)("td",{parentName:"tr",align:"left"},"object with ",Object(l.b)("inlineCode",{parentName:"td"},"type"),", ",Object(l.b)("inlineCode",{parentName:"td"},"pt")," and ",Object(l.b)("inlineCode",{parentName:"td"},"color")," values. (see below)")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("inlineCode",{parentName:"td"},"border")),Object(l.b)("td",{parentName:"tr",align:"left"},"array"),Object(l.b)("td",{parentName:"tr",align:"left"}),Object(l.b)("td",{parentName:"tr",align:"left"}),Object(l.b)("td",{parentName:"tr",align:"left"},"cell border"),Object(l.b)("td",{parentName:"tr",align:"left"},"array of objects with ",Object(l.b)("inlineCode",{parentName:"td"},"pt")," and ",Object(l.b)("inlineCode",{parentName:"td"},"color")," values in TRBL order.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("inlineCode",{parentName:"td"},"color")),Object(l.b)("td",{parentName:"tr",align:"left"},"string"),Object(l.b)("td",{parentName:"tr",align:"left"}),Object(l.b)("td",{parentName:"tr",align:"left"}),Object(l.b)("td",{parentName:"tr",align:"left"},"text color"),Object(l.b)("td",{parentName:"tr",align:"left"},"hex color code or ",Object(l.b)("a",{parentName:"td",href:"#scheme-colors"},"scheme color constant"),". Ex: ",Object(l.b)("inlineCode",{parentName:"td"},"{color:'0088CC'}"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("inlineCode",{parentName:"td"},"colspan")),Object(l.b)("td",{parentName:"tr",align:"left"},"integer"),Object(l.b)("td",{parentName:"tr",align:"left"}),Object(l.b)("td",{parentName:"tr",align:"left"}),Object(l.b)("td",{parentName:"tr",align:"left"},"column span"),Object(l.b)("td",{parentName:"tr",align:"left"},"2-n. Ex: ",Object(l.b)("inlineCode",{parentName:"td"},"{colspan:2}")," (Note: be sure to include a table ",Object(l.b)("inlineCode",{parentName:"td"},"w")," value)")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("inlineCode",{parentName:"td"},"fill")),Object(l.b)("td",{parentName:"tr",align:"left"},"string"),Object(l.b)("td",{parentName:"tr",align:"left"}),Object(l.b)("td",{parentName:"tr",align:"left"}),Object(l.b)("td",{parentName:"tr",align:"left"},"fill/bkgd color"),Object(l.b)("td",{parentName:"tr",align:"left"},"hex color code or ",Object(l.b)("a",{parentName:"td",href:"#scheme-colors"},"scheme color constant"),". Ex: ",Object(l.b)("inlineCode",{parentName:"td"},"{color:'0088CC'}"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("inlineCode",{parentName:"td"},"fontFace")),Object(l.b)("td",{parentName:"tr",align:"left"},"string"),Object(l.b)("td",{parentName:"tr",align:"left"}),Object(l.b)("td",{parentName:"tr",align:"left"}),Object(l.b)("td",{parentName:"tr",align:"left"},"font face"),Object(l.b)("td",{parentName:"tr",align:"left"},"Ex: ",Object(l.b)("inlineCode",{parentName:"td"},"{fontFace:'Arial'}"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("inlineCode",{parentName:"td"},"fontSize")),Object(l.b)("td",{parentName:"tr",align:"left"},"number"),Object(l.b)("td",{parentName:"tr",align:"left"},"points"),Object(l.b)("td",{parentName:"tr",align:"left"}),Object(l.b)("td",{parentName:"tr",align:"left"},"font size"),Object(l.b)("td",{parentName:"tr",align:"left"},"1-256. Ex: ",Object(l.b)("inlineCode",{parentName:"td"},"{fontSize:12}"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("inlineCode",{parentName:"td"},"italic")),Object(l.b)("td",{parentName:"tr",align:"left"},"boolean"),Object(l.b)("td",{parentName:"tr",align:"left"}),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("inlineCode",{parentName:"td"},"false")),Object(l.b)("td",{parentName:"tr",align:"left"},"italic text"),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("inlineCode",{parentName:"td"},"true")," or ",Object(l.b)("inlineCode",{parentName:"td"},"false"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("inlineCode",{parentName:"td"},"margin")),Object(l.b)("td",{parentName:"tr",align:"left"},"number"),Object(l.b)("td",{parentName:"tr",align:"left"},"points"),Object(l.b)("td",{parentName:"tr",align:"left"}),Object(l.b)("td",{parentName:"tr",align:"left"},"margin"),Object(l.b)("td",{parentName:"tr",align:"left"},"0-99 (ProTip: use the same value from CSS ",Object(l.b)("inlineCode",{parentName:"td"},"padding"),")")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("inlineCode",{parentName:"td"},"margin")),Object(l.b)("td",{parentName:"tr",align:"left"},"array"),Object(l.b)("td",{parentName:"tr",align:"left"},"points"),Object(l.b)("td",{parentName:"tr",align:"left"}),Object(l.b)("td",{parentName:"tr",align:"left"},"margin"),Object(l.b)("td",{parentName:"tr",align:"left"},"array of integer values in TRBL order. Ex: ",Object(l.b)("inlineCode",{parentName:"td"},"margin:[5,10,5,10]"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("inlineCode",{parentName:"td"},"rowspan")),Object(l.b)("td",{parentName:"tr",align:"left"},"integer"),Object(l.b)("td",{parentName:"tr",align:"left"}),Object(l.b)("td",{parentName:"tr",align:"left"}),Object(l.b)("td",{parentName:"tr",align:"left"},"row span"),Object(l.b)("td",{parentName:"tr",align:"left"},"2-n. Ex: ",Object(l.b)("inlineCode",{parentName:"td"},"{rowspan:2}"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("inlineCode",{parentName:"td"},"underline")),Object(l.b)("td",{parentName:"tr",align:"left"},"boolean"),Object(l.b)("td",{parentName:"tr",align:"left"}),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("inlineCode",{parentName:"td"},"false")),Object(l.b)("td",{parentName:"tr",align:"left"},"underline text"),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("inlineCode",{parentName:"td"},"true")," or ",Object(l.b)("inlineCode",{parentName:"td"},"false"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("inlineCode",{parentName:"td"},"valign")),Object(l.b)("td",{parentName:"tr",align:"left"},"string"),Object(l.b)("td",{parentName:"tr",align:"left"}),Object(l.b)("td",{parentName:"tr",align:"left"}),Object(l.b)("td",{parentName:"tr",align:"left"},"vertical alignment"),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("inlineCode",{parentName:"td"},"top")," or ",Object(l.b)("inlineCode",{parentName:"td"},"middle")," or ",Object(l.b)("inlineCode",{parentName:"td"},"bottom")," (or ",Object(l.b)("inlineCode",{parentName:"td"},"t")," ",Object(l.b)("inlineCode",{parentName:"td"},"m")," ",Object(l.b)("inlineCode",{parentName:"td"},"b"),")")))),Object(l.b)("h3",{id:"table-border-options-iborderoptions"},"Table Border Options (",Object(l.b)("inlineCode",{parentName:"h3"},"IBorderOptions"),")"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:"left"},"Option"),Object(l.b)("th",{parentName:"tr",align:"left"},"Type"),Object(l.b)("th",{parentName:"tr",align:"left"},"Default"),Object(l.b)("th",{parentName:"tr",align:"left"},"Description"),Object(l.b)("th",{parentName:"tr",align:"left"},"Possible Values"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("inlineCode",{parentName:"td"},"type")),Object(l.b)("td",{parentName:"tr",align:"left"},"string"),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("inlineCode",{parentName:"td"},"solid")),Object(l.b)("td",{parentName:"tr",align:"left"},"border type"),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("inlineCode",{parentName:"td"},"none")," or ",Object(l.b)("inlineCode",{parentName:"td"},"solid")," or ",Object(l.b)("inlineCode",{parentName:"td"},"dash"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("inlineCode",{parentName:"td"},"pt")),Object(l.b)("td",{parentName:"tr",align:"left"},"string"),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("inlineCode",{parentName:"td"},"1")),Object(l.b)("td",{parentName:"tr",align:"left"},"border thickness"),Object(l.b)("td",{parentName:"tr",align:"left"},"any positive number")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("inlineCode",{parentName:"td"},"color")),Object(l.b)("td",{parentName:"tr",align:"left"},"string"),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("inlineCode",{parentName:"td"},"black")),Object(l.b)("td",{parentName:"tr",align:"left"},"cell border"),Object(l.b)("td",{parentName:"tr",align:"left"},"hex color code or ",Object(l.b)("a",{parentName:"td",href:"#scheme-colors"},"scheme color constant"),". Ex: ",Object(l.b)("inlineCode",{parentName:"td"},"{color:'0088CC'}"))))),Object(l.b)("h2",{id:"table-auto-paging"},"Table Auto-Paging"),Object(l.b)("p",null,"Auto-paging will create new slides as table rows overflow, doing the magical work for you."),Object(l.b)("h3",{id:"table-auto-paging-options-itableoptions"},"Table Auto-Paging Options (",Object(l.b)("inlineCode",{parentName:"h3"},"ITableOptions"),")"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:"left"},"Option"),Object(l.b)("th",{parentName:"tr",align:"left"},"Default"),Object(l.b)("th",{parentName:"tr",align:"left"},"Description"),Object(l.b)("th",{parentName:"tr",align:"left"},"Possible Values"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("inlineCode",{parentName:"td"},"autoPage")),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("inlineCode",{parentName:"td"},"false")),Object(l.b)("td",{parentName:"tr",align:"left"},"auto-page table"),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("inlineCode",{parentName:"td"},"true")," or ",Object(l.b)("inlineCode",{parentName:"td"},"false"),". Ex: ",Object(l.b)("inlineCode",{parentName:"td"},"{autoPage:true}"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("inlineCode",{parentName:"td"},"autoPageCharWeight")),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("inlineCode",{parentName:"td"},"0")),Object(l.b)("td",{parentName:"tr",align:"left"},"char weight value (adjusts letter spacing)"),Object(l.b)("td",{parentName:"tr",align:"left"},"-1.0 to 1.0. Ex: ",Object(l.b)("inlineCode",{parentName:"td"},"{autoPageCharWeight:0.5}"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("inlineCode",{parentName:"td"},"autoPageLineWeight")),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("inlineCode",{parentName:"td"},"0")),Object(l.b)("td",{parentName:"tr",align:"left"},"line weight value (adjusts line height)"),Object(l.b)("td",{parentName:"tr",align:"left"},"-1.0 to 1.0. Ex: ",Object(l.b)("inlineCode",{parentName:"td"},"{autoPageLineWeight:0.5}"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("inlineCode",{parentName:"td"},"autoPageRepeatHeader")),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("inlineCode",{parentName:"td"},"false")),Object(l.b)("td",{parentName:"tr",align:"left"},"repeat header row(s) on each auto-page slide"),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("inlineCode",{parentName:"td"},"true")," or ",Object(l.b)("inlineCode",{parentName:"td"},"false"),". Ex: ",Object(l.b)("inlineCode",{parentName:"td"},"{autoPageRepeatHeader:true}"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("inlineCode",{parentName:"td"},"autoPageHeaderRows")),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("inlineCode",{parentName:"td"},"1")),Object(l.b)("td",{parentName:"tr",align:"left"},"number of table rows that comprise the headers"),Object(l.b)("td",{parentName:"tr",align:"left"},"1-n. Ex: ",Object(l.b)("inlineCode",{parentName:"td"},"2")," repeats the first two rows on every slide")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("inlineCode",{parentName:"td"},"newSlideStartY")),Object(l.b)("td",{parentName:"tr",align:"left"}),Object(l.b)("td",{parentName:"tr",align:"left"},"starting ",Object(l.b)("inlineCode",{parentName:"td"},"y")," value for tables on new Slides"),Object(l.b)("td",{parentName:"tr",align:"left"},"0-n OR 'n%'. Ex:",Object(l.b)("inlineCode",{parentName:"td"},"{newSlideStartY:0.5}"))))),Object(l.b)("h3",{id:"auto-paging-property-notes"},"Auto-Paging Property Notes"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"autoPage"),": allows the auto-paging functionality (as table rows overflow the Slide, new Slides will be added) to be disabled."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"autoPageCharWeight"),": adjusts the calculated width of characters. If too much empty space is left on each line,\nthen increase char weight value. Conversely, if the table rows are overflowing, then reduce the char weight value."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"autoPageLineWeight"),": adjusts the calculated height of lines. If too much empty space is left under each table,\nthen increase line weight value. Conversely, if the tables are overflowing the bottom of the Slides, then\nreduce the line weight value. Also helpful when using some fonts that do not have the usual golden ratio."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"newSlideStartY"),": provides the ability to specify where new tables will be placed on new Slides. For example,\nyou may place a table halfway down a Slide, but you wouldn't that to be the starting location for subsequent\ntables. Use this option to ensure there is no wasted space and to guarantee a professional look.")),Object(l.b)("h3",{id:"auto-paging-usage-notes"},"Auto-Paging Usage Notes"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"New slides will be created as tables overflow. The table will start at either ",Object(l.b)("inlineCode",{parentName:"li"},"newSlideStartY")," (if present) or the Slide's top ",Object(l.b)("inlineCode",{parentName:"li"},"margin")),Object(l.b)("li",{parentName:"ul"},"Tables will retain their existing ",Object(l.b)("inlineCode",{parentName:"li"},"x"),", ",Object(l.b)("inlineCode",{parentName:"li"},"w"),", and ",Object(l.b)("inlineCode",{parentName:"li"},"colW")," values as they are rendered onto subsequent Slides"),Object(l.b)("li",{parentName:"ul"},"Auto-paging is not an exact science! Try using different values for ",Object(l.b)("inlineCode",{parentName:"li"},"autoPageCharWeight"),"/",Object(l.b)("inlineCode",{parentName:"li"},"autoPageLineWeight")," and slide margin"),Object(l.b)("li",{parentName:"ul"},"Very small and very large font sizes cause tables to over/under-flow, be sure to adjust the char and line properties"),Object(l.b)("li",{parentName:"ul"},"There are many examples of auto-paging in the ",Object(l.b)("inlineCode",{parentName:"li"},"examples")," folder")),Object(l.b)("h2",{id:"examples"},"Examples"),Object(l.b)("h3",{id:"table-cell-formatting-1"},"Table Cell Formatting"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Sample Code: ",Object(l.b)("a",{parentName:"li",href:"https://github.com/gitbrent/PptxGenJS/blob/master/demos/modules/demo_table.mjs"},Object(l.b)("inlineCode",{parentName:"a"},"demo_table.mjs"))," for 700+ lines of demo code"),Object(l.b)("li",{parentName:"ul"},"Online Demo: ",Object(l.b)("a",{parentName:"li",href:"https://gitbrent.github.io/PptxGenJS/demo/#tables"},"pptxgenjs Table Demos"))),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-typescript"},'// -------\n// TABLE 1: Cell-level Formatting\n// -------\nlet rows = [];\n\n// Row One: cells will be formatted according to any options provided to `addTable()`\nrows.push(["First", "Second", "Third"]);\n\n// Row Two: set/override formatting for each cell\nrows.push([\n    { text: "1st", options: { color: "ff0000" } },\n    { text: "2nd", options: { color: "00ff00" } },\n    { text: "3rd", options: { color: "0000ff" } },\n]);\n\nslide.addTable(rows, { x: 0.5, y: 1.0, w: 9.0, color: "363636" });\n\n// -------\n// TABLE 2: Using word-level formatting inside cells\n// -------\n// NOTE: An array of text/options objects provides fine-grained control over formatting\nlet arrObjText = [\n    { text: "Red ", options: { color: "FF0000" } },\n    { text: "Green ", options: { color: "00FF00" } },\n    { text: "Blue", options: { color: "0000FF" } },\n];\n\n// EX A: Pass an array of text objects to `addText()`\nslide.addText(arrObjText, {\n    x: 0.5,\n    y: 2.0,\n    w: 9,\n    h: 1,\n    margin: 0.1,\n    fill: "232323",\n});\n\n// EX B: Pass the same objects as a cell\'s `text` value\nlet arrTabRows = [\n    [\n        { text: "Cell 1 A", options: { fontFace: "Arial" } },\n        { text: "Cell 1 B", options: { fontFace: "Courier" } },\n        { text: arrObjText, options: { fill: "232323" } },\n    ],\n];\n\nslide.addTable(arrTabRows, { x: 0.5, y: 3.5, w: 9, h: 1, colW: [1.5, 1.5, 6] });\n')),Object(l.b)("p",null,Object(l.b)("img",{alt:"Table Cell Formatting",src:a(220).default})),Object(l.b)("h2",{id:"samples"},"Samples"),Object(l.b)("p",null,"Sample code: ",Object(l.b)("a",{parentName:"p",href:"https://github.com/gitbrent/PptxGenJS/blob/master/demos/modules/demo_table.mjs"},"demos/modules/demo_table.mjs")))}c.isMDXComponent=!0},108:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return j}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=r.a.createContext({}),c=function(e){var t=r.a.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return r.a.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,b=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=c(a),O=n,j=p["".concat(b,".").concat(O)]||p[O]||m[O]||l;return a?r.a.createElement(j,i(i({ref:t},d),{},{components:a})):r.a.createElement(j,i({ref:t},d))}));function j(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,b=new Array(l);b[0]=O;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:n,b[1]=i;for(var d=2;d<l;d++)b[d]=a[d];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"},220:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/ex-table-cell-format-2a4c51f4ad042e23f06fcdc0c197ee06.png"}}]);