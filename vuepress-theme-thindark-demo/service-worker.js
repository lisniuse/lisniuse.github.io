/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "6ffde5701d90492d2a3518be46e28803"
  },
  {
    "url": "api/cli.html",
    "revision": "3db15a9b8f03c3524c3c9c018fbd44e1"
  },
  {
    "url": "api/node.html",
    "revision": "afc987753776724a16b693031a3674b7"
  },
  {
    "url": "architecture.png",
    "revision": "9a93cf6cea38878e19c5816d1af28b17"
  },
  {
    "url": "assets/css/0.styles.87f54baf.css",
    "revision": "b92965c43cde2e65a87251bfecbba374"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.4df7ce6d.js",
    "revision": "1f01666d9779d29ae0b4b55ef0054496"
  },
  {
    "url": "assets/js/11.7610c607.js",
    "revision": "e8507974d5faecd6a999182486b399eb"
  },
  {
    "url": "assets/js/12.56ad5be4.js",
    "revision": "4d2fce86b43d63946a433243430fc117"
  },
  {
    "url": "assets/js/13.3612b7dc.js",
    "revision": "ca40713ae2b169c432113311faea499c"
  },
  {
    "url": "assets/js/14.2ef522ec.js",
    "revision": "22512f1830df379ae7f53aecd7ae1c97"
  },
  {
    "url": "assets/js/15.8d66dcdc.js",
    "revision": "f7880ebed58aaaba70826077d92a70d6"
  },
  {
    "url": "assets/js/16.ef33ff69.js",
    "revision": "d2afe0b71d3376a8a5bbc41cd42b7ea6"
  },
  {
    "url": "assets/js/17.d09bab31.js",
    "revision": "5fc038876161df2838f0ac9224195ac4"
  },
  {
    "url": "assets/js/18.77b043db.js",
    "revision": "72d773cc492b58c194974b70f29f7ca8"
  },
  {
    "url": "assets/js/19.6bc04e25.js",
    "revision": "787c60e94f17851d19899e54c07180d8"
  },
  {
    "url": "assets/js/20.c776c4ec.js",
    "revision": "189c63ed211f47a7268831c815874a9c"
  },
  {
    "url": "assets/js/21.e645e763.js",
    "revision": "f238ab43466e57cd5a21b6aaa3b757d9"
  },
  {
    "url": "assets/js/22.1327feaa.js",
    "revision": "bca9da09511ad023fca0f576942a60ca"
  },
  {
    "url": "assets/js/23.6921e7f7.js",
    "revision": "95045e7fb6bf7dd84db77adbbb7b15a1"
  },
  {
    "url": "assets/js/24.71f8cafc.js",
    "revision": "9e1d2aadbc9ba42905047a29c1857206"
  },
  {
    "url": "assets/js/25.c0c02658.js",
    "revision": "dc143e59a9f103c9c43b012e49944b7c"
  },
  {
    "url": "assets/js/26.a43fbdc4.js",
    "revision": "0f222d7992482769d0c7fe1e497d9c2a"
  },
  {
    "url": "assets/js/27.0293f56a.js",
    "revision": "d917ea57aa656021a536627f198b5a88"
  },
  {
    "url": "assets/js/28.640fd0a0.js",
    "revision": "eb2c2fec07095707fc54e6c930669f80"
  },
  {
    "url": "assets/js/29.3335fba2.js",
    "revision": "dc88422a107944b6eb5bc78079f9886d"
  },
  {
    "url": "assets/js/3.c5ca51b0.js",
    "revision": "73f4685f8a7b6cc5e011a3e3ea9b28cf"
  },
  {
    "url": "assets/js/30.780400c5.js",
    "revision": "a5dc9144ac21a21566b5c10805d87005"
  },
  {
    "url": "assets/js/31.ac8897e7.js",
    "revision": "66d172e68a86755269e845fc49029d54"
  },
  {
    "url": "assets/js/32.96204724.js",
    "revision": "7ebe37a570f88647af3df013b81e4c36"
  },
  {
    "url": "assets/js/33.c9b8d5f0.js",
    "revision": "4df2a0a66073e6c4a87a391a1f35b5b8"
  },
  {
    "url": "assets/js/34.f5ea1d22.js",
    "revision": "6103801b2299d86500b4845b9f312dc6"
  },
  {
    "url": "assets/js/35.13abb9f5.js",
    "revision": "869a108766e80c2159b67752aeaf86b2"
  },
  {
    "url": "assets/js/36.abd92917.js",
    "revision": "1fda703ef7fcb1e798e2578cab8fc77e"
  },
  {
    "url": "assets/js/37.c8c63df5.js",
    "revision": "9744d09911aa1624635ba85536410806"
  },
  {
    "url": "assets/js/38.0be19e18.js",
    "revision": "283200f153a96c882809c47da4cd3abb"
  },
  {
    "url": "assets/js/39.b2b4b0ff.js",
    "revision": "150e33a4f41175e80a6ed493e05f0a5f"
  },
  {
    "url": "assets/js/4.fd532479.js",
    "revision": "2d9fbb0762476df179373af177be751b"
  },
  {
    "url": "assets/js/40.e4b7ffa8.js",
    "revision": "32c465c892da6cdd47d58b0698119a65"
  },
  {
    "url": "assets/js/41.d92ac8fe.js",
    "revision": "3f515ec82be43d75a4ee2fbe25e11807"
  },
  {
    "url": "assets/js/42.abeb53f6.js",
    "revision": "88a4f4d4d0e1f30d1f3428ee1abed13c"
  },
  {
    "url": "assets/js/43.4e86fc1d.js",
    "revision": "e2cbe4bf8be5450cc19dafabd11a0466"
  },
  {
    "url": "assets/js/44.75a26c98.js",
    "revision": "ca6b9b7aafda8c06099fb9c444f992ef"
  },
  {
    "url": "assets/js/45.db91ac88.js",
    "revision": "917ef3749ba6ab680260d7559a8c5450"
  },
  {
    "url": "assets/js/46.5b6df222.js",
    "revision": "4e6b2e11f86a788a3c5c542a8bbbefd1"
  },
  {
    "url": "assets/js/47.a6307fcd.js",
    "revision": "c9422ba54783dc822aac16c5d18aa0c0"
  },
  {
    "url": "assets/js/48.e34a86a8.js",
    "revision": "4540dd033b35d94e53b3f6aa5555e13d"
  },
  {
    "url": "assets/js/49.f759969f.js",
    "revision": "1ca333567481786bc0b7b16c99e227cd"
  },
  {
    "url": "assets/js/5.b9a3ab87.js",
    "revision": "60353965ce2ea7dc4b42295f1a610ccd"
  },
  {
    "url": "assets/js/50.3c0cafab.js",
    "revision": "70a4faf1a89c4ae70d9d0d6cbff7041b"
  },
  {
    "url": "assets/js/51.fef9a1ac.js",
    "revision": "57d001e4d414afedaa470d5452f491c6"
  },
  {
    "url": "assets/js/52.f5dd30f9.js",
    "revision": "50219b17c482abd18c3713c293c96dc3"
  },
  {
    "url": "assets/js/53.7ab108cd.js",
    "revision": "8e56da0c871af5a1626f3ea864766264"
  },
  {
    "url": "assets/js/54.ec7216cc.js",
    "revision": "f5047492e85f1776f994728fa1a6b6cd"
  },
  {
    "url": "assets/js/55.3f15801a.js",
    "revision": "d570c6e8cddb901ee6733ecfd6152844"
  },
  {
    "url": "assets/js/56.d913d5de.js",
    "revision": "0cfdbf9433cb3f151a998d73794ddeef"
  },
  {
    "url": "assets/js/57.b2e47acb.js",
    "revision": "81a4fe94cd994f7e00b4b176cdfa11d6"
  },
  {
    "url": "assets/js/58.e80ffc36.js",
    "revision": "e87300ab83bb2180006a2418a558021b"
  },
  {
    "url": "assets/js/59.0a0824a5.js",
    "revision": "ebf9e3d56d123fbbe394b67784c0f785"
  },
  {
    "url": "assets/js/6.583cf7db.js",
    "revision": "7e75a3475e47e4b3cd5447a277801ef7"
  },
  {
    "url": "assets/js/60.53a50bdb.js",
    "revision": "2d355f266661920401ac5c2bc1940abc"
  },
  {
    "url": "assets/js/61.9db652f1.js",
    "revision": "d9d6fec6d09e21db59e48569beea5ed3"
  },
  {
    "url": "assets/js/62.b7c6455c.js",
    "revision": "580e20b1074ec15a5b9e32b64fc83f30"
  },
  {
    "url": "assets/js/63.e3ba80d0.js",
    "revision": "37ae4d5d7f5bb1dd329213ea6caf5224"
  },
  {
    "url": "assets/js/64.0246249b.js",
    "revision": "7e0db9ca17523a1e785b214ed7f2899a"
  },
  {
    "url": "assets/js/65.d12ffc83.js",
    "revision": "2afe34fb11fd7f0b8d6f46a5aada3f8a"
  },
  {
    "url": "assets/js/66.051f4bea.js",
    "revision": "574a4981db2dab784febca2274e311ee"
  },
  {
    "url": "assets/js/67.dc53d6f1.js",
    "revision": "c5204cbd0d5622e01e6d3b88b3596288"
  },
  {
    "url": "assets/js/68.2c2d6c9c.js",
    "revision": "3a1f86f95272b0c67ed3a168d9fba320"
  },
  {
    "url": "assets/js/69.fce2fec5.js",
    "revision": "cee0dca3f6e1368a01870ed317087762"
  },
  {
    "url": "assets/js/7.82105b8c.js",
    "revision": "c217d091abbc5a3731ca8aef9e606ce6"
  },
  {
    "url": "assets/js/70.c53267a1.js",
    "revision": "6169d5deb39627bb6409f65983b0b303"
  },
  {
    "url": "assets/js/71.a36684bc.js",
    "revision": "70e75fd19fd834ea50c19725538f589e"
  },
  {
    "url": "assets/js/72.7aa11abe.js",
    "revision": "3c465d448bf62a3a3ab0f97943db40d8"
  },
  {
    "url": "assets/js/73.02b4b5b2.js",
    "revision": "52687156769957dd8924191a6388bed1"
  },
  {
    "url": "assets/js/74.0e19a8c9.js",
    "revision": "7799ac55a8767155b79d0e620500e9c0"
  },
  {
    "url": "assets/js/75.41590176.js",
    "revision": "8793b18e1c411661487802be84313f28"
  },
  {
    "url": "assets/js/76.bf3e9565.js",
    "revision": "d0d23a9eef94d43f824e162973a32c76"
  },
  {
    "url": "assets/js/77.515dc5c9.js",
    "revision": "348467750970358d00884708e8957c5e"
  },
  {
    "url": "assets/js/78.4dc2be63.js",
    "revision": "0209828ffa56d7c1dd8f189e0a07764c"
  },
  {
    "url": "assets/js/79.5dbb598c.js",
    "revision": "c54fe357c4a239d26c82f35ba2f75f1f"
  },
  {
    "url": "assets/js/8.3df3c4a9.js",
    "revision": "b6ab8522f536ce6513a8aefe3102af0f"
  },
  {
    "url": "assets/js/80.d3466279.js",
    "revision": "f3ea0297d7af64f9c86426578e479948"
  },
  {
    "url": "assets/js/81.51282c54.js",
    "revision": "b9e2b0396f47f557922519c9c8bd6936"
  },
  {
    "url": "assets/js/82.e640d57b.js",
    "revision": "3d0fa61488034a067e605031fcf26b87"
  },
  {
    "url": "assets/js/83.c721a8ec.js",
    "revision": "a20e357c7774cff68468ef568020d0c2"
  },
  {
    "url": "assets/js/84.61b444bc.js",
    "revision": "bbb65598e20e6f00c31a34ec3d2c5391"
  },
  {
    "url": "assets/js/85.536217e3.js",
    "revision": "9094a5d4fadfdb1f019624f29c6ab430"
  },
  {
    "url": "assets/js/86.82a7a3b1.js",
    "revision": "6740e3b15ec956da34d776a2de5ec90b"
  },
  {
    "url": "assets/js/87.a5f39f28.js",
    "revision": "5051e0d94faa434cfa414bfb110bba1f"
  },
  {
    "url": "assets/js/88.76103831.js",
    "revision": "3302f41d4b4f0de16e71518ada7b26b6"
  },
  {
    "url": "assets/js/89.dd59fc83.js",
    "revision": "f6d0c31fabf4281e6ac1c9fe5779994e"
  },
  {
    "url": "assets/js/9.e544b8c3.js",
    "revision": "104e9ddb135dcaad7a4709a97e20ffc1"
  },
  {
    "url": "assets/js/90.720f7bee.js",
    "revision": "25dd821ea6dfd370f8545087d4856710"
  },
  {
    "url": "assets/js/91.677659f9.js",
    "revision": "dc7c1e98abc6c9a877cdca20af326f4d"
  },
  {
    "url": "assets/js/92.266dbf8a.js",
    "revision": "7ddd460fb2a4954785c698ccfed2e0aa"
  },
  {
    "url": "assets/js/93.1f76e552.js",
    "revision": "d5d79b31866d728d790b957dc432846d"
  },
  {
    "url": "assets/js/94.c15fb094.js",
    "revision": "73250100e1b53993dc05926a01382140"
  },
  {
    "url": "assets/js/95.f24538e4.js",
    "revision": "6722f3d9131e0bbbb9d716b604fcfd4b"
  },
  {
    "url": "assets/js/96.18983547.js",
    "revision": "2fff5f32c038ef2acc8b4893a89d2ed4"
  },
  {
    "url": "assets/js/97.b8dc160a.js",
    "revision": "a3a8bc6bca322417b046de5ff2d8f5f4"
  },
  {
    "url": "assets/js/98.ba527200.js",
    "revision": "ca5bd2ae27926443b40d8c44b2b53cc2"
  },
  {
    "url": "assets/js/app.cee4c525.js",
    "revision": "fb9e1b665d4650b322d2b9ce945b44af"
  },
  {
    "url": "assets/js/vendors~notification.7c649649.js",
    "revision": "0323189e8550f6c29bde78c90c5ea5b7"
  },
  {
    "url": "config/index.html",
    "revision": "2d14759db35f1febff14e25f3ad4ca92"
  },
  {
    "url": "faq/index.html",
    "revision": "4b31c9c3fdaae81c672b6347ee0ade2f"
  },
  {
    "url": "guide/assets.html",
    "revision": "f6b469a523a558a7a2aa0d22231d26bc"
  },
  {
    "url": "guide/basic-config.html",
    "revision": "4610f62f9e7e8fc0e9512be54688dfea"
  },
  {
    "url": "guide/deploy.html",
    "revision": "cb44deb5b35f637c9cbb8b88130703d6"
  },
  {
    "url": "guide/directory-structure.html",
    "revision": "75dfeb3dc037d828955ea7f317c53b31"
  },
  {
    "url": "guide/frontmatter.html",
    "revision": "90a29160f8db81f78d0f7dce11abee55"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "8b44c0a8de5c6b3b095e4b3f0fab4560"
  },
  {
    "url": "guide/global-computed.html",
    "revision": "261861c8ef8a50db46987fd45a050bd4"
  },
  {
    "url": "guide/i18n.html",
    "revision": "985b109c205806f512f20ed61aa2842a"
  },
  {
    "url": "guide/index.html",
    "revision": "78331af8e44a4a389aa5c0437cf718d2"
  },
  {
    "url": "guide/markdown-slot.html",
    "revision": "15958d1dd7c220b22a9d940dde6fe5c2"
  },
  {
    "url": "guide/markdown.html",
    "revision": "2bddcb5a7f505dd16898a2056f529fb4"
  },
  {
    "url": "guide/permalinks.html",
    "revision": "3e7901942e7a0ad7d34cffe98e28ca33"
  },
  {
    "url": "guide/using-vue.html",
    "revision": "2cae53f1a357fc9d49f14d9495174429"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f22d501a35a87d9f21701cb031f6ea17"
  },
  {
    "url": "index.html",
    "revision": "9e59c601d82e27e22022441317bf1553"
  },
  {
    "url": "line-numbers-desktop.png",
    "revision": "7c8ccab7c4953ac2fb9e4bc93ecd25ac"
  },
  {
    "url": "line-numbers-mobile.gif",
    "revision": "580b860f45436c9a15a9f3bd036edd97"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "miscellaneous/design-concepts.html",
    "revision": "5683f7c3133dbd5b1368dcda648c829e"
  },
  {
    "url": "miscellaneous/glossary.html",
    "revision": "08aab4f554f6ab27bfac2f8342427c76"
  },
  {
    "url": "miscellaneous/migration-guide.html",
    "revision": "3b44be82dcea86dbccf7b66232afe4da"
  },
  {
    "url": "plugin.png",
    "revision": "3e325210d3e3752e32818385fc4afbc9"
  },
  {
    "url": "plugin/context-api.html",
    "revision": "95428b61666298a6f73396504fec6a39"
  },
  {
    "url": "plugin/index.html",
    "revision": "7e8add0bb16463819c96f845caa7625e"
  },
  {
    "url": "plugin/life-cycle.html",
    "revision": "87e319c297d9697a53f6ff74f6264018"
  },
  {
    "url": "plugin/official/plugin-active-header-links.html",
    "revision": "fa54766398c7edc522061d46a0edb3a1"
  },
  {
    "url": "plugin/official/plugin-back-to-top.html",
    "revision": "8dabbcdfd47ea2e20269e51aac44d0ea"
  },
  {
    "url": "plugin/official/plugin-google-analytics.html",
    "revision": "cf16acb0c1c011db0e67d496a46621eb"
  },
  {
    "url": "plugin/official/plugin-last-updated.html",
    "revision": "e6dc382c9218c78ef453247aee1ec53b"
  },
  {
    "url": "plugin/official/plugin-medium-zoom.html",
    "revision": "4b1db0a1178e28af83519d4994e9a2ba"
  },
  {
    "url": "plugin/official/plugin-nprogress.html",
    "revision": "532b4b21e831209aeb1cce9a06668569"
  },
  {
    "url": "plugin/official/plugin-pwa.html",
    "revision": "f080fffad2dc103f3c04710581b499ff"
  },
  {
    "url": "plugin/official/plugin-register-components.html",
    "revision": "201ed09f1fc2fa696d00b29250986bc6"
  },
  {
    "url": "plugin/official/plugin-search.html",
    "revision": "4f9da8569ed488ded638fed39e4f4c05"
  },
  {
    "url": "plugin/option-api.html",
    "revision": "e3171c378af5234dd0a8fdde5cd04781"
  },
  {
    "url": "plugin/using-a-plugin.html",
    "revision": "03026f8b5529695b739ce027624dd625"
  },
  {
    "url": "plugin/writing-a-plugin.html",
    "revision": "e68d1c44810f20f7618213dc7202a7c4"
  },
  {
    "url": "theme/default-theme-config.html",
    "revision": "9a2c7fb9c868a35b4204b132c3e07ceb"
  },
  {
    "url": "theme/index.html",
    "revision": "c132052387cc8b15f379cb22fad1d42d"
  },
  {
    "url": "theme/inheritance.html",
    "revision": "e72ab716b7acefc3a0fd907f85f57e03"
  },
  {
    "url": "theme/option-api.html",
    "revision": "d6a2b9d5ee7fc6cdc75578a6337a9591"
  },
  {
    "url": "theme/using-a-theme.html",
    "revision": "04e05d94054b7d9fb06a5f2fb5169614"
  },
  {
    "url": "theme/writing-a-theme.html",
    "revision": "85d2f873a261c8794cb269913363cc9c"
  },
  {
    "url": "zh/api/cli.html",
    "revision": "71a4918dbd4ac523163944bfb2a2a438"
  },
  {
    "url": "zh/api/node.html",
    "revision": "b3acd9ff779392f14e12e30aea225509"
  },
  {
    "url": "zh/config/index.html",
    "revision": "6288d8bb0302b2ca139a5f221802e3d7"
  },
  {
    "url": "zh/faq/index.html",
    "revision": "a2ee21fd86fb00ff58604edfae23702f"
  },
  {
    "url": "zh/guide/assets.html",
    "revision": "a89106d478fe2ab3b96b159d3b861a7f"
  },
  {
    "url": "zh/guide/basic-config.html",
    "revision": "a2c401c9effc1bd8ce941119e73563c3"
  },
  {
    "url": "zh/guide/deploy.html",
    "revision": "0e31077ccfc462e85279bd9a898fffa0"
  },
  {
    "url": "zh/guide/directory-structure.html",
    "revision": "25d4b175d4c72fd19e3d443ddc894355"
  },
  {
    "url": "zh/guide/frontmatter.html",
    "revision": "3d6680d06e2c414535993378936397e0"
  },
  {
    "url": "zh/guide/getting-started.html",
    "revision": "47e846bce7077b23ed34006307f0e35e"
  },
  {
    "url": "zh/guide/global-computed.html",
    "revision": "a22f57e577210398682b41093df10104"
  },
  {
    "url": "zh/guide/i18n.html",
    "revision": "f324dcbb31c1c7245639060d9d724eb7"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "7caa6bce367bf09372618524fb161331"
  },
  {
    "url": "zh/guide/markdown-slot.html",
    "revision": "e456edc89b2a3323ba75c3fb01edd968"
  },
  {
    "url": "zh/guide/markdown.html",
    "revision": "8b7a9c0811477ee184712c32ff0aa9aa"
  },
  {
    "url": "zh/guide/permalinks.html",
    "revision": "50e007378f3be2cfe2a46f3973c0032a"
  },
  {
    "url": "zh/guide/using-vue.html",
    "revision": "0f98f2cd246e2322349e3ee78303912b"
  },
  {
    "url": "zh/index.html",
    "revision": "13c6b45ca89156868401f96e8af74ec8"
  },
  {
    "url": "zh/miscellaneous/design-concepts.html",
    "revision": "dd1ff0b7e1e1c30a45a112d2c5607da0"
  },
  {
    "url": "zh/miscellaneous/glossary.html",
    "revision": "f79839fdb15e569df6e060a6a341f048"
  },
  {
    "url": "zh/miscellaneous/migration-guide.html",
    "revision": "4efc990858029396b33dbf923e6dcd69"
  },
  {
    "url": "zh/plugin/context-api.html",
    "revision": "7c858351e49167b5450e039298c16cb8"
  },
  {
    "url": "zh/plugin/index.html",
    "revision": "15c0f68371e61682beb1e10bccf674b7"
  },
  {
    "url": "zh/plugin/life-cycle.html",
    "revision": "706c7805ef38c5be638302f166cdf6d3"
  },
  {
    "url": "zh/plugin/official/plugin-active-header-links.html",
    "revision": "3dc559bb34d3a8755e35ed704c62c6b6"
  },
  {
    "url": "zh/plugin/official/plugin-back-to-top.html",
    "revision": "e80e4a3437c46b53ef4cdb3047500902"
  },
  {
    "url": "zh/plugin/official/plugin-google-analytics.html",
    "revision": "452ad0bed080490090816d712fdc4087"
  },
  {
    "url": "zh/plugin/official/plugin-last-updated.html",
    "revision": "a8e9d978bf5db25ccdac297ad7699a81"
  },
  {
    "url": "zh/plugin/official/plugin-medium-zoom.html",
    "revision": "6969ea31d2d3b4cfb5d8be30037403ec"
  },
  {
    "url": "zh/plugin/official/plugin-nprogress.html",
    "revision": "daf420bb26180d44306fbc39ba1fb256"
  },
  {
    "url": "zh/plugin/official/plugin-pwa.html",
    "revision": "fa9806e605865d7ac0be1d52ce342b76"
  },
  {
    "url": "zh/plugin/official/plugin-register-components.html",
    "revision": "e4ecd78ba70db10c7883e833fc9de311"
  },
  {
    "url": "zh/plugin/official/plugin-search.html",
    "revision": "e9c0e1ee0ee84cb66141da638db5da0f"
  },
  {
    "url": "zh/plugin/option-api.html",
    "revision": "b61f40f1452782bc2058b6eef5a80395"
  },
  {
    "url": "zh/plugin/using-a-plugin.html",
    "revision": "ebeb5bf261eeebc8a5f8e4e9cef2b4a1"
  },
  {
    "url": "zh/plugin/writing-a-plugin.html",
    "revision": "8373cdb1d1e2343ecececed02fedb8b7"
  },
  {
    "url": "zh/theme/default-theme-config.html",
    "revision": "413f1e28d6be15fb77fbb23d46b42526"
  },
  {
    "url": "zh/theme/index.html",
    "revision": "fba32b938c4c6effd6a8b3fba4c45f4e"
  },
  {
    "url": "zh/theme/inheritance.html",
    "revision": "237906bb3f1cf43e8f65510cad6cfbb3"
  },
  {
    "url": "zh/theme/option-api.html",
    "revision": "064fb3381a28c0b16707c1bda59fd6e1"
  },
  {
    "url": "zh/theme/using-a-theme.html",
    "revision": "49a2700eff43ebaa9b6069c3af2dbdfe"
  },
  {
    "url": "zh/theme/writing-a-theme.html",
    "revision": "34934ff7e7aec97b36a996e252206dbe"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
