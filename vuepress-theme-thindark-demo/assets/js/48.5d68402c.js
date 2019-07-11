(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{298:function(t,a,s){"use strict";s.r(a);var e=s(4),n=Object(e.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"vuepress-plugin-search"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-plugin-search","aria-hidden":"true"}},[t._v("#")]),t._v(" "),s("a",{attrs:{href:"https://github.com/vuejs/vuepress/tree/master/packages/%40vuepress/plugin-search",target:"_blank",rel:"noopener noreferrer"}},[t._v("@vuepress/plugin-search"),s("OutboundLink")],1)]),t._v(" "),s("blockquote",[s("p",[s("router-link",{attrs:{to:"/miscellaneous/glossary.html#headers"}},[t._v("Headers")]),t._v("-based search plugin")],1)]),t._v(" "),s("h2",{attrs:{id:"install"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#install","aria-hidden":"true"}},[t._v("#")]),t._v(" Install")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" -D @vuepress/plugin-search@next\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# OR npm install -D @vuepress/plugin-search@next")]),t._v("\n")])])]),s("div",{staticClass:"tip custom-block"},[s("p",[t._v("Note that this plugin has been included in "),s("strong",[t._v("default theme")]),t._v(", the search box you see now is powered by the plugin.")])]),t._v(" "),s("h2",{attrs:{id:"usage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#usage","aria-hidden":"true"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),s("ol",[s("li",[t._v("Enable this plugin:")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// .vuepress/config.js or themePath/index.js")]),t._v("\nmodule"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  plugins"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@vuepress/search'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      searchMaxSuggestions"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("      \n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("ol",{attrs:{start:"2"}},[s("li",[t._v("This plugin will automatically inject a webpack alias "),s("code",[t._v("@SearchBox")]),t._v(" pointing to the search component so that you can use it directly in your "),s("router-link",{attrs:{to:"/miscellaneous/glossary.html#layout"}},[t._v("layout")]),t._v(" component:")],1)]),t._v(" "),s("div",{staticClass:"language-vue extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("foo-layout"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("header")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("SearchBox")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("header")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      ...\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}},[s("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" SearchBox "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@SearchBox'")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  components"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" SearchBox "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("h2",{attrs:{id:"options"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#options","aria-hidden":"true"}},[t._v("#")]),t._v(" Options")]),t._v(" "),s("h3",{attrs:{id:"searchmaxsuggestions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#searchmaxsuggestions","aria-hidden":"true"}},[t._v("#")]),t._v(" searchMaxSuggestions")]),t._v(" "),s("ul",[s("li",[t._v("Type: "),s("code",[t._v("number")])]),t._v(" "),s("li",[t._v("Default: 5")])]),t._v(" "),s("p",[t._v("Set the maximum number of results for search.")]),t._v(" "),s("h3",{attrs:{id:"test"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#test","aria-hidden":"true"}},[t._v("#")]),t._v(" test")]),t._v(" "),s("ul",[s("li",[t._v("Type: "),s("code",[t._v("RegExp")]),t._v(" | "),s("code",[t._v("Array<RegExp>")])]),t._v(" "),s("li",[t._v("Default: "),s("code",[t._v("null")])])]),t._v(" "),s("p",[t._v("Set up searchable paths with regular expressions. If no test expression is provided it will search on all paths. Considering you have this structure:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("docs/\n├── .vuepress/            \n│    └── "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n│\n├── master/               \n│    └── "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n│\n├── 1.0/               \n│    └── "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n│\n└── 2.0/               \n     └── "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".                       \n")])])]),s("p",[t._v("You can set up searchable paths with "),s("code",[t._v("test")]),t._v(" as:")]),t._v(" "),s("ul",[s("li",[t._v("RegExp: "),s("code",[t._v("'/1\\.0/'")])]),t._v(" "),s("li",[t._v("Array of RegExp: "),s("code",[t._v("['/1\\.0/', '/2\\.0/']")])])]),t._v(" "),s("p",[t._v("Otherwise,  the default search will return duplicates, once you can have similar content between folders "),s("code",[t._v("/master/")]),t._v(", "),s("code",[t._v("/1.0/")]),t._v(" and "),s("code",[t._v("/2.0/")]),t._v(".")]),t._v(" "),s("h2",{attrs:{id:"tips"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tips","aria-hidden":"true"}},[t._v("#")]),t._v(" Tips")]),t._v(" "),s("h3",{attrs:{id:"tweak-the-default-colors"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tweak-the-default-colors","aria-hidden":"true"}},[t._v("#")]),t._v(" Tweak the default colors.")]),t._v(" "),s("p",[t._v("Since the Search component leverages the built-in palette, you can tweak the default colors via "),s("code",[t._v("styles/palette.styl")]),t._v(":")]),t._v(" "),s("div",{staticClass:"language-stylus extra-class"},[s("pre",{pre:!0,attrs:{class:"language-stylus"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// colors of the searchbox you see now:")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token variable-declaration"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$accentColor")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token hexcode"}},[t._v("#3eaf7c")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token variable-declaration"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$textColor")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token hexcode"}},[t._v("#2c3e50")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token variable-declaration"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$borderColor")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token hexcode"}},[t._v("#eaecef")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token variable-declaration"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$codeBgColor")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token hexcode"}},[t._v("#282c34")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token variable-declaration"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$arrowBgColor")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token hexcode"}},[t._v("#ccc")])]),t._v("\n")])])])])},[],!1,null,null,null);a.default=n.exports}}]);