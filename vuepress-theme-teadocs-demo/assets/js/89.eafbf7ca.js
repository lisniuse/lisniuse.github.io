(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{242:function(t,a,s){"use strict";s.r(a);var e=s(4),n=Object(e.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"vuepress-plugin-search"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-plugin-search","aria-hidden":"true"}},[t._v("#")]),t._v(" "),s("a",{attrs:{href:"https://github.com/vuejs/vuepress/tree/master/packages/@vuepress/plugin-search",target:"_blank",rel:"noopener noreferrer"}},[t._v("@vuepress/plugin-search"),s("OutboundLink")],1)]),t._v(" "),s("blockquote",[s("p",[t._v("基于 "),s("router-link",{attrs:{to:"/zh/miscellaneous/glossary.html#headers"}},[t._v("Headers")]),t._v(" 的搜索插件")],1)]),t._v(" "),s("h2",{attrs:{id:"安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装","aria-hidden":"true"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" -D @vuepress/plugin-search@next\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# OR npm install -D @vuepress/plugin-search@next")]),t._v("\n")])])]),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),s("p",[t._v("请注意，此插件已包含在"),s("strong",[t._v("默认主题")]),t._v("中，你现在看到的搜索便是由本插件提供支持。")])]),t._v(" "),s("h2",{attrs:{id:"使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用","aria-hidden":"true"}},[t._v("#")]),t._v(" 使用")]),t._v(" "),s("ol",[s("li",[t._v("启用此插件：")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// .vuepress/config.js or themePath/index.js")]),t._v("\nmodule"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  plugins"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@vuepress/search'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      searchMaxSuggestions"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("ol",{attrs:{start:"2"}},[s("li",[t._v("本插件将自动注入指向搜索组件的 webpack 别名 "),s("code",[t._v("@SearchBox")]),t._v("，以便您可以直接在 "),s("router-link",{attrs:{to:"/zh/miscellaneous/glossary.html#layout"}},[t._v("layout")]),t._v(" 组件中使用它：")],1)]),t._v(" "),s("div",{staticClass:"language-vue extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("foo-layout"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("header")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("SearchBox")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("header")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      ...\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}},[s("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" SearchBox "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@SearchBox'")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  components"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" SearchBox "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("h2",{attrs:{id:"选项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#选项","aria-hidden":"true"}},[t._v("#")]),t._v(" 选项")]),t._v(" "),s("h3",{attrs:{id:"searchmaxsuggestions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#searchmaxsuggestions","aria-hidden":"true"}},[t._v("#")]),t._v(" searchMaxSuggestions")]),t._v(" "),s("ul",[s("li",[t._v("类型: "),s("code",[t._v("number")])]),t._v(" "),s("li",[t._v("默认值: 5")])]),t._v(" "),s("p",[t._v("设置搜索的最大结果数。")]),t._v(" "),s("h2",{attrs:{id:"技巧"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#技巧","aria-hidden":"true"}},[t._v("#")]),t._v(" 技巧")]),t._v(" "),s("h3",{attrs:{id:"调整默认颜色"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#调整默认颜色","aria-hidden":"true"}},[t._v("#")]),t._v(" 调整默认颜色")]),t._v(" "),s("p",[t._v("由于该搜索组件使用了内置调色板，你可以通过 "),s("code",[t._v("styles/palette.styl")]),t._v(" 来调整搜索框的默认颜色：")]),t._v(" "),s("div",{staticClass:"language-stylus extra-class"},[s("pre",{pre:!0,attrs:{class:"language-stylus"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 你现在看到的这个搜索栏的颜色：")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token variable-declaration"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$accentColor")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token hexcode"}},[t._v("#3eaf7c")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token variable-declaration"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$textColor")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token hexcode"}},[t._v("#2c3e50")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token variable-declaration"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$borderColor")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token hexcode"}},[t._v("#eaecef")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token variable-declaration"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$codeBgColor")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token hexcode"}},[t._v("#282c34")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token variable-declaration"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$arrowBgColor")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token hexcode"}},[t._v("#ccc")])]),t._v("\n")])])])])},[],!1,null,null,null);a.default=n.exports}}]);