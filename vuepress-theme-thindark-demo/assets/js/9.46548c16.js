(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{113:function(t,a,e){},206:function(t,a,e){"use strict";var s=e(113);e.n(s).a},271:function(t,a,e){"use strict";e.r(a);e(206);var s=e(4),n=Object(s.a)({},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"markdown-extensions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#markdown-extensions","aria-hidden":"true"}},[t._v("#")]),t._v(" Markdown Extensions")]),t._v(" "),e("h2",{attrs:{id:"header-anchors"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#header-anchors","aria-hidden":"true"}},[t._v("#")]),t._v(" Header Anchors")]),t._v(" "),e("p",[t._v("Headers automatically get anchor links applied. Rendering of anchors can be configured using the "),e("router-link",{attrs:{to:"/config/#markdown-anchor"}},[e("code",[t._v("markdown.anchor")])]),t._v(" option.")],1),t._v(" "),e("h2",{attrs:{id:"links"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#links","aria-hidden":"true"}},[t._v("#")]),t._v(" Links")]),t._v(" "),e("h3",{attrs:{id:"internal-links"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#internal-links","aria-hidden":"true"}},[t._v("#")]),t._v(" Internal Links")]),t._v(" "),e("p",[t._v("Internal links are converted to "),e("code",[t._v("<router-link>")]),t._v(" for SPA navigation. Also, every "),e("code",[t._v("README.md")]),t._v(" or "),e("code",[t._v("index.md")]),t._v(" contained in each sub-directory will automatically be converted to "),e("code",[t._v("index.html")]),t._v(", with corresponding url "),e("code",[t._v("/")]),t._v(".")]),t._v(" "),e("p",[t._v("Given the following directory structure:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v(".\n├─ README.md\n├─ foo\n│  ├─ README.md\n│  ├─ one.md\n│  └─ two.md\n└─ bar\n   ├─ README.md\n   ├─ three.md\n   └─ four.md\n")])])]),e("p",[t._v("And providing you are in "),e("code",[t._v("foo/one.md")]),t._v(":")]),t._v(" "),e("div",{staticClass:"language-md extra-class"},[e("pre",{pre:!0,attrs:{class:"language-md"}},[e("code",[e("span",{pre:!0,attrs:{class:"token url"}},[t._v("[Home](/)")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- Sends the user to the root README.md --\x3e")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token url"}},[t._v("[foo](/foo/)")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- Sends the user to index.html of directory foo --\x3e")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token url"}},[t._v("[foo heading](./#heading)")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- Anchors user to a heading in the foo README file --\x3e")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token url"}},[t._v("[bar - three](../bar/three.md)")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- You can append .md (recommended) --\x3e")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token url"}},[t._v("[bar - four](../bar/four.html)")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- Or you can append .html --\x3e")]),t._v("\n")])])]),e("h3",{attrs:{id:"redirection-for-urls"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#redirection-for-urls","aria-hidden":"true"}},[t._v("#")]),t._v(" Redirection for URLs "),e("Badge",{attrs:{text:"1.0.0-alpha.37"}})],1),t._v(" "),e("p",[t._v("VuePress supports redirecting to clean links. If a link "),e("code",[t._v("/foo")]),t._v(" is not found, VuePress will look for a existing "),e("code",[t._v("/foo/")]),t._v(" or "),e("code",[t._v("/foo.html")]),t._v(". Conversely, when one of "),e("code",[t._v("/foo/")]),t._v(" or "),e("code",[t._v("/foo.html")]),t._v(" is not found, VuePress will also try the other. With this feature, we can customize your website's urls with the official plugin "),e("a",{attrs:{href:"https://vuepress.github.io/plugins/clean-urls/",target:"_blank",rel:"noopener noreferrer"}},[t._v("vuepress-plugin-clean-urls"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("div",{staticClass:"tip custom-block"},[e("p",[t._v("Regardless of whether the permalink and clean-urls plugins are used, your relative path should be defined by the current file structure. In the above example, even though you set the path of "),e("code",[t._v("/foo/one.md")]),t._v(" to "),e("code",[t._v("/foo/one/")]),t._v(", you should still access "),e("code",[t._v("/foo/two.md")]),t._v(" via "),e("code",[t._v("./two.md")]),t._v(".")])]),t._v(" "),e("h3",{attrs:{id:"external-links"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#external-links","aria-hidden":"true"}},[t._v("#")]),t._v(" External Links")]),t._v(" "),e("p",[t._v("Outbound links automatically gets "),e("code",[t._v('target="_blank" rel="noopener noreferrer"')]),t._v(":")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("vuejs.org"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/vuejs/vuepress",target:"_blank",rel:"noopener noreferrer"}},[t._v("VuePress on GitHub"),e("OutboundLink")],1)])]),t._v(" "),e("p",[t._v("You can customize the attributes added to external links by setting "),e("router-link",{attrs:{to:"/config/#markdown-externallinks"}},[t._v("config.markdown.externalLinks")]),t._v(".")],1),t._v(" "),e("h2",{attrs:{id:"front-matter"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#front-matter","aria-hidden":"true"}},[t._v("#")]),t._v(" Front Matter")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://jekyllrb.com/docs/frontmatter/",target:"_blank",rel:"noopener noreferrer"}},[t._v("YAML front matter"),e("OutboundLink")],1),t._v(" is supported out of the box:")]),t._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("title")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Blogging Like a Hacker\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("lang")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" en"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("US\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n")])])]),e("p",[t._v("This data will be available to the rest of the page, along with all custom and theming components.")]),t._v(" "),e("p",[t._v("For more details, check out the "),e("router-link",{attrs:{to:"/guide/frontmatter.html"}},[t._v("Front Matter")]),t._v(" page.")],1),t._v(" "),e("h2",{attrs:{id:"github-style-tables"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#github-style-tables","aria-hidden":"true"}},[t._v("#")]),t._v(" GitHub-Style Tables")]),t._v(" "),e("p",[e("strong",[t._v("Input")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("| Tables        | Are           | Cool  |\n| ------------- |:-------------:| -----:|\n| col 3 is      | right-aligned | $1600 |\n| col 2 is      | centered      |   $12 |\n| zebra stripes | are neat      |    $1 |\n")])])]),e("p",[e("strong",[t._v("Output")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Tables")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("Are")]),t._v(" "),e("th",{staticStyle:{"text-align":"right"}},[t._v("Cool")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("col 3 is")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("right-aligned")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("$1600")])]),t._v(" "),e("tr",[e("td",[t._v("col 2 is")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("centered")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("$12")])]),t._v(" "),e("tr",[e("td",[t._v("zebra stripes")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("are neat")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("$1")])])])]),t._v(" "),e("h2",{attrs:{id:"emoji"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#emoji","aria-hidden":"true"}},[t._v("#")]),t._v(" Emoji 🎉")]),t._v(" "),e("p",[e("strong",[t._v("Input")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v(":tada: :100:\n")])])]),e("p",[e("strong",[t._v("Output")])]),t._v(" "),e("p",[t._v("🎉 💯")]),t._v(" "),e("p",[t._v("A list of all emojis available can be found "),e("a",{attrs:{href:"https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.json",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("h2",{attrs:{id:"table-of-contents"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#table-of-contents","aria-hidden":"true"}},[t._v("#")]),t._v(" Table of Contents")]),t._v(" "),e("p",[e("strong",[t._v("Input")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("[[toc]]\n")])])]),e("p",[e("strong",[t._v("Output")])]),t._v(" "),e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#header-anchors"}},[t._v("Header Anchors")])]),e("li",[e("a",{attrs:{href:"#links"}},[t._v("Links")]),e("ul",[e("li",[e("a",{attrs:{href:"#internal-links"}},[t._v("Internal Links")])]),e("li",[e("a",{attrs:{href:"#redirection-for-urls-badge-text-1-0-0-alpha-37"}},[t._v("Redirection for URLs "),e("Badge",{attrs:{text:"1.0.0-alpha.37"}})],1)]),e("li",[e("a",{attrs:{href:"#external-links"}},[t._v("External Links")])])])]),e("li",[e("a",{attrs:{href:"#front-matter"}},[t._v("Front Matter")])]),e("li",[e("a",{attrs:{href:"#github-style-tables"}},[t._v("GitHub-Style Tables")])]),e("li",[e("a",{attrs:{href:"#emoji-tada"}},[t._v("Emoji 🎉")])]),e("li",[e("a",{attrs:{href:"#table-of-contents"}},[t._v("Table of Contents")])]),e("li",[e("a",{attrs:{href:"#custom-containers-badge-text-default-theme"}},[t._v("Custom Containers "),e("Badge",{attrs:{text:"default theme"}})],1)]),e("li",[e("a",{attrs:{href:"#syntax-highlighting-in-code-blocks"}},[t._v("Syntax Highlighting in Code Blocks")])]),e("li",[e("a",{attrs:{href:"#line-highlighting-in-code-blocks"}},[t._v("Line Highlighting in Code Blocks")])]),e("li",[e("a",{attrs:{href:"#line-numbers"}},[t._v("Line Numbers")])]),e("li",[e("a",{attrs:{href:"#import-code-snippets-badge-text-beta-type-warn"}},[t._v("Import Code Snippets "),e("Badge",{attrs:{text:"beta",type:"warn"}})],1)]),e("li",[e("a",{attrs:{href:"#advanced-configuration"}},[t._v("Advanced Configuration")])])])]),e("p"),t._v(" "),e("p",[t._v("Rendering of TOC can be configured using the "),e("router-link",{attrs:{to:"/config/#markdown-toc"}},[e("code",[t._v("markdown.toc")])]),t._v(" option.")],1),t._v(" "),e("h2",{attrs:{id:"custom-containers"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#custom-containers","aria-hidden":"true"}},[t._v("#")]),t._v(" Custom Containers "),e("Badge",{attrs:{text:"default theme"}})],1),t._v(" "),e("p",[e("strong",[t._v("Input")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("::: tip\nThis is a tip\n:::\n\n::: warning\nThis is a warning\n:::\n\n::: danger\nThis is a dangerous warning\n:::\n")])])]),e("p",[e("strong",[t._v("Output")])]),t._v(" "),e("div",{staticClass:"tip custom-block"},[e("p",[t._v("This is a tip")])]),t._v(" "),e("div",{staticClass:"warning custom-block"},[e("p",[t._v("This is a warning")])]),t._v(" "),e("div",{staticClass:"danger custom-block"},[e("p",[t._v("This is a dangerous warning")])]),t._v(" "),e("p",[t._v("You can also customize the title of the block:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("::: danger STOP\nDanger zone, do not proceed\n:::\n")])])]),e("div",{staticClass:"danger custom-block"},[e("p",{staticClass:"custom-block-title"},[t._v("STOP")]),t._v(" "),e("p",[t._v("Danger zone, do not proceed")])]),t._v(" "),e("p",[e("strong",[t._v("Also see:")])]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://vuepress.github.io/plugins/container/",target:"_blank",rel:"noopener noreferrer"}},[t._v("vuepress-plugin-container"),e("OutboundLink")],1)])]),t._v(" "),e("h2",{attrs:{id:"syntax-highlighting-in-code-blocks"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#syntax-highlighting-in-code-blocks","aria-hidden":"true"}},[t._v("#")]),t._v(" Syntax Highlighting in Code Blocks")]),t._v(" "),e("p",[t._v("VuePress uses "),e("a",{attrs:{href:"https://prismjs.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Prism"),e("OutboundLink")],1),t._v(" to highlight language syntax in markdown code blocks, using coloured text. Prism supports a wide variety of programming languages. All you need to do is append a valid language alias to the beginning backticks for the code block:")]),t._v(" "),e("p",[e("strong",[t._v("Input")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("``` js\nexport default {\n  name: 'MyComponent',\n  // ...\n}\n```\n")])])]),e("p",[e("strong",[t._v("Output")])]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  name"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'MyComponent'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[e("strong",[t._v("Input")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('``` html\n<ul>\n  <li\n    v-for="todo in todos"\n    :key="todo.id"\n  >\n    {{ todo.text }}\n  </li>\n</ul>\n```\n')])])]),e("p",[e("strong",[t._v("Output")])]),t._v(" "),e("div",{staticClass:"language-html extra-class"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("ul")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("li")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-for")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("todo in todos"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":key")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("todo.id"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    {{ todo.text }}\n  "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("li")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("ul")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),e("p",[t._v("Check out "),e("a",{attrs:{href:"https://prismjs.com/#languages-list",target:"_blank",rel:"noopener noreferrer"}},[t._v("the list of valid languages"),e("OutboundLink")],1),t._v(" on the Prism website.")]),t._v(" "),e("h2",{attrs:{id:"line-highlighting-in-code-blocks"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#line-highlighting-in-code-blocks","aria-hidden":"true"}},[t._v("#")]),t._v(" Line Highlighting in Code Blocks")]),t._v(" "),e("p",[e("strong",[t._v("Input")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("``` js{4}\nexport default {\n  data () {\n    return {\n      msg: 'Highlighted!'\n    }\n  }\n}\n```\n")])])]),e("p",[e("strong",[t._v("Output")])]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("div",{staticClass:"highlight-lines"},[e("br"),e("br"),e("br"),e("div",{staticClass:"highlighted"},[t._v(" ")]),e("br"),e("br"),e("br"),e("br")]),e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("data")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      msg"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Highlighted!'")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h2",{attrs:{id:"line-numbers"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#line-numbers","aria-hidden":"true"}},[t._v("#")]),t._v(" Line Numbers")]),t._v(" "),e("p",[t._v("You can enable line numbers for each code blocks via config:")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("module"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  markdown"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    lineNumbers"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),t._v(" "),e("ul",[e("li",[t._v("Demo:")])]),t._v(" "),e("picture",[e("source",{attrs:{srcset:"/line-numbers-desktop.png",media:"(min-width: 719px)"}}),t._v(" "),e("img",{staticClass:"line-numbers-desktop-snap",attrs:{src:"/line-numbers-desktop.png",alt:"Image"}})]),t._v(" "),e("picture",[e("source",{attrs:{srcset:"/line-numbers-mobile.gif",media:"(max-width: 719px)"}}),t._v(" "),e("img",{staticClass:"line-numbers-mobile-snap",attrs:{src:"/line-numbers-mobile.gif",alt:"Image"}})]),t._v(" "),e("h2",{attrs:{id:"import-code-snippets"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#import-code-snippets","aria-hidden":"true"}},[t._v("#")]),t._v(" Import Code Snippets "),e("Badge",{attrs:{text:"beta",type:"warn"}})],1),t._v(" "),e("p",[t._v("You can import code snippets from existing files via following syntax:")]),t._v(" "),e("div",{staticClass:"language-md extra-class"},[e("pre",{pre:!0,attrs:{class:"language-md"}},[e("code",[t._v("<<< @/filepath\n")])])]),e("p",[t._v("It also supports "),e("a",{attrs:{href:"#line-highlighting-in-code-blocks"}},[t._v("line highlighting")]),t._v(":")]),t._v(" "),e("div",{staticClass:"language-md extra-class"},[e("pre",{pre:!0,attrs:{class:"language-md"}},[e("code",[t._v("<<< @/filepath{highlightLines}\n")])])]),e("p",[e("strong",[t._v("Input")])]),t._v(" "),e("div",{staticClass:"language-md extra-class"},[e("pre",{pre:!0,attrs:{class:"language-md"}},[e("code",[t._v("<<< @/../@vuepress/markdown/"),e("span",{pre:!0,attrs:{class:"token bold"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("__")]),t._v("tests"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("__")])]),t._v("/fragments/snippet.js{2}\n")])])]),e("p",[e("strong",[t._v("Output")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("Not found: /Users/mac/dev/test/@vuepress/markdown/__tests__/fragments/snippet.js")])])]),e("div",{staticClass:"tip custom-block"},[e("p",[t._v("Since the import of the code snippets will be executed before webpack compilation, you can't use the path alias in webpack. The default value of "),e("code",[t._v("@")]),t._v(" is "),e("code",[t._v("process.cwd()")]),t._v(".")])]),t._v(" "),e("h2",{attrs:{id:"advanced-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#advanced-configuration","aria-hidden":"true"}},[t._v("#")]),t._v(" Advanced Configuration")]),t._v(" "),e("p",[t._v("VuePress uses "),e("a",{attrs:{href:"https://github.com/markdown-it/markdown-it",target:"_blank",rel:"noopener noreferrer"}},[t._v("markdown-it"),e("OutboundLink")],1),t._v(" as the markdown renderer. A lot of the extensions above are implemented via custom plugins. You can further customize the "),e("code",[t._v("markdown-it")]),t._v(" instance using the "),e("code",[t._v("markdown")]),t._v(" option in "),e("code",[t._v(".vuepress/config.js")]),t._v(":")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("module"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  markdown"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// options for markdown-it-anchor")]),t._v("\n    anchor"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" permalink"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// options for markdown-it-toc")]),t._v("\n    toc"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" includeLevel"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("extendMarkdown")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("md")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// use more markdown-it plugins!")]),t._v("\n      md"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'markdown-it-xxx'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])},[],!1,null,null,null);a.default=n.exports}}]);