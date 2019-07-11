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
    "revision": "e2d9235902a269ec2e65fdf4d0025534"
  },
  {
    "url": "api/cli.html",
    "revision": "2baa1a7d267b05efbf156bdb4f49c912"
  },
  {
    "url": "api/node.html",
    "revision": "c1d910fb454b4e1502261a8a4bc2f0e1"
  },
  {
    "url": "architecture.png",
    "revision": "9a93cf6cea38878e19c5816d1af28b17"
  },
  {
    "url": "assets/css/0.styles.e6e7a158.css",
    "revision": "5a593258e22c5700e48b9b175fe862fd"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.dbb5be13.js",
    "revision": "1f01666d9779d29ae0b4b55ef0054496"
  },
  {
    "url": "assets/js/11.de874263.js",
    "revision": "e8507974d5faecd6a999182486b399eb"
  },
  {
    "url": "assets/js/12.3c901d1c.js",
    "revision": "4d2fce86b43d63946a433243430fc117"
  },
  {
    "url": "assets/js/13.06c84533.js",
    "revision": "ca40713ae2b169c432113311faea499c"
  },
  {
    "url": "assets/js/14.3cb7a933.js",
    "revision": "22512f1830df379ae7f53aecd7ae1c97"
  },
  {
    "url": "assets/js/15.bdc2fd07.js",
    "revision": "f7880ebed58aaaba70826077d92a70d6"
  },
  {
    "url": "assets/js/16.ed2233d0.js",
    "revision": "a026986d87078f41c8007f46959fbc75"
  },
  {
    "url": "assets/js/17.a46dfb85.js",
    "revision": "5fc038876161df2838f0ac9224195ac4"
  },
  {
    "url": "assets/js/18.b162ae32.js",
    "revision": "72d773cc492b58c194974b70f29f7ca8"
  },
  {
    "url": "assets/js/19.776818a8.js",
    "revision": "787c60e94f17851d19899e54c07180d8"
  },
  {
    "url": "assets/js/20.a65d976f.js",
    "revision": "189c63ed211f47a7268831c815874a9c"
  },
  {
    "url": "assets/js/21.084b2fda.js",
    "revision": "9d4bf69b772af7ed69847e132268dd95"
  },
  {
    "url": "assets/js/22.de316fd4.js",
    "revision": "bca9da09511ad023fca0f576942a60ca"
  },
  {
    "url": "assets/js/23.9c33ada5.js",
    "revision": "90d0af1f315270a50f3c1e78eab10a0b"
  },
  {
    "url": "assets/js/24.da90e546.js",
    "revision": "81d0a22816306861aacc63708a6f58bd"
  },
  {
    "url": "assets/js/25.2befb256.js",
    "revision": "dc143e59a9f103c9c43b012e49944b7c"
  },
  {
    "url": "assets/js/26.c08ea8d8.js",
    "revision": "0f222d7992482769d0c7fe1e497d9c2a"
  },
  {
    "url": "assets/js/27.d07570e7.js",
    "revision": "d917ea57aa656021a536627f198b5a88"
  },
  {
    "url": "assets/js/28.3f1b414d.js",
    "revision": "eb2c2fec07095707fc54e6c930669f80"
  },
  {
    "url": "assets/js/29.b4602bb1.js",
    "revision": "dc88422a107944b6eb5bc78079f9886d"
  },
  {
    "url": "assets/js/3.0a1eb8b5.js",
    "revision": "73f4685f8a7b6cc5e011a3e3ea9b28cf"
  },
  {
    "url": "assets/js/30.981e5635.js",
    "revision": "a5dc9144ac21a21566b5c10805d87005"
  },
  {
    "url": "assets/js/31.f0376629.js",
    "revision": "1ef22c196b1969fe2848e4348b3431ad"
  },
  {
    "url": "assets/js/32.a88567ba.js",
    "revision": "fdb67cb1e26067a4a825954d2963737b"
  },
  {
    "url": "assets/js/33.92f73a2f.js",
    "revision": "5fbb51128e8e71690ea7735ab55d592c"
  },
  {
    "url": "assets/js/34.2d3d61ce.js",
    "revision": "15c9ef92646db02a733941f2134851e3"
  },
  {
    "url": "assets/js/35.388d6fd6.js",
    "revision": "5b15612fbd221687b43a52d4b93d5ee8"
  },
  {
    "url": "assets/js/36.b3a27059.js",
    "revision": "2a8bd0998755850a0dee781cc4d08235"
  },
  {
    "url": "assets/js/37.9c8068e4.js",
    "revision": "b85249e9cc68cdcbc4579bac5e4a0c65"
  },
  {
    "url": "assets/js/38.7821bdc5.js",
    "revision": "96826a226e21bf5d29f2e36181ad17a5"
  },
  {
    "url": "assets/js/39.80661b6e.js",
    "revision": "53824a5e90524d08044de409e3030e63"
  },
  {
    "url": "assets/js/4.3cc19772.js",
    "revision": "2d9fbb0762476df179373af177be751b"
  },
  {
    "url": "assets/js/40.8a4bfb31.js",
    "revision": "d11c888444017ff6728aa4a7c534ed45"
  },
  {
    "url": "assets/js/41.11160ebb.js",
    "revision": "1e557e05b410307cbac57a748cc82d51"
  },
  {
    "url": "assets/js/42.f953c2a7.js",
    "revision": "3142cacc4b08c94219d52f9560ca7aee"
  },
  {
    "url": "assets/js/43.fc3a1546.js",
    "revision": "ec99facaa41a56cbf96f451a58a8784d"
  },
  {
    "url": "assets/js/44.45d897d5.js",
    "revision": "6e0f7f5d8933812d494f4ac3ac080ea5"
  },
  {
    "url": "assets/js/45.6be54a56.js",
    "revision": "dd1ec27ac0858a172e79bedc228652f8"
  },
  {
    "url": "assets/js/46.017d92da.js",
    "revision": "c3adb846cc92f98febad240e91a00690"
  },
  {
    "url": "assets/js/47.3a19d191.js",
    "revision": "c9422ba54783dc822aac16c5d18aa0c0"
  },
  {
    "url": "assets/js/48.5d68402c.js",
    "revision": "4540dd033b35d94e53b3f6aa5555e13d"
  },
  {
    "url": "assets/js/49.bd4b9475.js",
    "revision": "1ca333567481786bc0b7b16c99e227cd"
  },
  {
    "url": "assets/js/5.42e47149.js",
    "revision": "60353965ce2ea7dc4b42295f1a610ccd"
  },
  {
    "url": "assets/js/50.aa2e3643.js",
    "revision": "70a4faf1a89c4ae70d9d0d6cbff7041b"
  },
  {
    "url": "assets/js/51.28d4b7b1.js",
    "revision": "7ac894d0bdcc9fef13a22211966578d5"
  },
  {
    "url": "assets/js/52.f6421743.js",
    "revision": "b99b2cb309351c4b8137c50ed8311e37"
  },
  {
    "url": "assets/js/53.99b3b6a1.js",
    "revision": "8d3ca2771f757972a351fa364263f9ed"
  },
  {
    "url": "assets/js/54.6d229953.js",
    "revision": "8eab1fbfdec9e341df46c7956a692adb"
  },
  {
    "url": "assets/js/55.a8004bf8.js",
    "revision": "474e2fdda0867959b955f64829c385c8"
  },
  {
    "url": "assets/js/56.a49eef31.js",
    "revision": "6258a084bda31fa565db7c4a13bf2f35"
  },
  {
    "url": "assets/js/57.93920d13.js",
    "revision": "16ead81da5ff732348c24a78d7916f47"
  },
  {
    "url": "assets/js/58.b3c2c8f2.js",
    "revision": "5489a5f260b6cc84c6b15d41f056922e"
  },
  {
    "url": "assets/js/59.fc269d6b.js",
    "revision": "e5f7c73d21edba29eb4b74a30432bd00"
  },
  {
    "url": "assets/js/6.c1ab3c69.js",
    "revision": "7e75a3475e47e4b3cd5447a277801ef7"
  },
  {
    "url": "assets/js/60.465143cd.js",
    "revision": "4392218af40b0cd3defbc85890c1a0f0"
  },
  {
    "url": "assets/js/61.8b4da924.js",
    "revision": "c02cdb09b474c9add4259f8925897bad"
  },
  {
    "url": "assets/js/62.a63f2e75.js",
    "revision": "580e20b1074ec15a5b9e32b64fc83f30"
  },
  {
    "url": "assets/js/63.206be391.js",
    "revision": "3688bf21434d1da79c5805dfc962997e"
  },
  {
    "url": "assets/js/64.e76f3d02.js",
    "revision": "4718bfd813676286eaedcc3efe12e45d"
  },
  {
    "url": "assets/js/65.741ef368.js",
    "revision": "2afe34fb11fd7f0b8d6f46a5aada3f8a"
  },
  {
    "url": "assets/js/66.46d1acf9.js",
    "revision": "574a4981db2dab784febca2274e311ee"
  },
  {
    "url": "assets/js/67.89b8fa0b.js",
    "revision": "c5204cbd0d5622e01e6d3b88b3596288"
  },
  {
    "url": "assets/js/68.891b6a22.js",
    "revision": "3a1f86f95272b0c67ed3a168d9fba320"
  },
  {
    "url": "assets/js/69.70934f1a.js",
    "revision": "cee0dca3f6e1368a01870ed317087762"
  },
  {
    "url": "assets/js/7.da31c5c4.js",
    "revision": "c217d091abbc5a3731ca8aef9e606ce6"
  },
  {
    "url": "assets/js/70.a013fc10.js",
    "revision": "6169d5deb39627bb6409f65983b0b303"
  },
  {
    "url": "assets/js/71.f562300c.js",
    "revision": "be124ce8e2887b8d189391962b5b80a9"
  },
  {
    "url": "assets/js/72.135dbc69.js",
    "revision": "b526e10b19f74b576ac23b2c62dcfabd"
  },
  {
    "url": "assets/js/73.47c57123.js",
    "revision": "52687156769957dd8924191a6388bed1"
  },
  {
    "url": "assets/js/74.f63180e4.js",
    "revision": "bb38d38ee1de2c3f0d4cb2c4a0aea251"
  },
  {
    "url": "assets/js/75.9faa00da.js",
    "revision": "74ae38964f5e4f0bca1eb098d52d5cdc"
  },
  {
    "url": "assets/js/76.7661e0af.js",
    "revision": "62a050f11c3bdd93b4197bd3b04d6916"
  },
  {
    "url": "assets/js/77.a00451cf.js",
    "revision": "145d64a3496f5a9358065524dff62372"
  },
  {
    "url": "assets/js/78.adbdd99a.js",
    "revision": "57deed7d578159bfaf4aa5b2a3e4c127"
  },
  {
    "url": "assets/js/79.768b657a.js",
    "revision": "ced770098ac49321400077c251908c1c"
  },
  {
    "url": "assets/js/8.2906f1fe.js",
    "revision": "b6ab8522f536ce6513a8aefe3102af0f"
  },
  {
    "url": "assets/js/80.8397e364.js",
    "revision": "e66f670417aa27cc7bac358d10dbe789"
  },
  {
    "url": "assets/js/81.8dbec44e.js",
    "revision": "b24116fd0b8775c649206e09ea98baeb"
  },
  {
    "url": "assets/js/82.804feb31.js",
    "revision": "3d0fa61488034a067e605031fcf26b87"
  },
  {
    "url": "assets/js/83.872ffaa5.js",
    "revision": "a20e357c7774cff68468ef568020d0c2"
  },
  {
    "url": "assets/js/84.cb3b89b2.js",
    "revision": "bbb65598e20e6f00c31a34ec3d2c5391"
  },
  {
    "url": "assets/js/85.192f1825.js",
    "revision": "9094a5d4fadfdb1f019624f29c6ab430"
  },
  {
    "url": "assets/js/86.568c9883.js",
    "revision": "b9b89873af8269641f6762f8d7fce163"
  },
  {
    "url": "assets/js/87.ad222d9a.js",
    "revision": "d39bae298205006b222fb6941ccd9f6d"
  },
  {
    "url": "assets/js/88.25fb7c65.js",
    "revision": "3302f41d4b4f0de16e71518ada7b26b6"
  },
  {
    "url": "assets/js/89.060ec4f9.js",
    "revision": "f6d0c31fabf4281e6ac1c9fe5779994e"
  },
  {
    "url": "assets/js/9.46548c16.js",
    "revision": "104e9ddb135dcaad7a4709a97e20ffc1"
  },
  {
    "url": "assets/js/90.e319af11.js",
    "revision": "25dd821ea6dfd370f8545087d4856710"
  },
  {
    "url": "assets/js/91.1819fd01.js",
    "revision": "4182f87edc6c43fc551bd22aafe876e7"
  },
  {
    "url": "assets/js/92.44a772b2.js",
    "revision": "0dec27dc36946c22145798fda52791af"
  },
  {
    "url": "assets/js/93.7038da63.js",
    "revision": "c6f5a4175845e2c4c972e162ee9f2fdc"
  },
  {
    "url": "assets/js/94.0e446920.js",
    "revision": "73250100e1b53993dc05926a01382140"
  },
  {
    "url": "assets/js/95.c2ab080d.js",
    "revision": "6722f3d9131e0bbbb9d716b604fcfd4b"
  },
  {
    "url": "assets/js/96.d4da645a.js",
    "revision": "076cc89a087b9d00d35bf64f73d54ecd"
  },
  {
    "url": "assets/js/97.06941ccf.js",
    "revision": "cd7f5ae22c3cb9192472eb63ca3b7d2f"
  },
  {
    "url": "assets/js/98.6464b21d.js",
    "revision": "ca5bd2ae27926443b40d8c44b2b53cc2"
  },
  {
    "url": "assets/js/app.f20d2ac6.js",
    "revision": "28924a37f0714156f9c425a3d04ee319"
  },
  {
    "url": "assets/js/vendors~notification.4bf19253.js",
    "revision": "0323189e8550f6c29bde78c90c5ea5b7"
  },
  {
    "url": "config/index.html",
    "revision": "e0f1130bf8bd4ef724f1fba0cbb46c39"
  },
  {
    "url": "faq/index.html",
    "revision": "22f5154d49f1bfacab0d58168df87d7f"
  },
  {
    "url": "guide/assets.html",
    "revision": "e95344c65408b37eefd5cda46acecb85"
  },
  {
    "url": "guide/basic-config.html",
    "revision": "8f76114ec26276406889b5a7c229a220"
  },
  {
    "url": "guide/deploy.html",
    "revision": "17ceac918e1525774125a612ea620cfe"
  },
  {
    "url": "guide/directory-structure.html",
    "revision": "b17112eec301ddf334075fcca4a52789"
  },
  {
    "url": "guide/frontmatter.html",
    "revision": "02016a06af26c93c6ad36da4bedd8a3f"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "3aefb171e59e0e769b32ace53fe034e3"
  },
  {
    "url": "guide/global-computed.html",
    "revision": "f45ad4ec4ab1c9d0818b9907edce6b40"
  },
  {
    "url": "guide/i18n.html",
    "revision": "b0f048171d0114fc6af3925131b075a7"
  },
  {
    "url": "guide/index.html",
    "revision": "8bbdb4e5831c1714e53f0abfe90657b3"
  },
  {
    "url": "guide/markdown-slot.html",
    "revision": "7f444cfa3ac90501544c513927908f4c"
  },
  {
    "url": "guide/markdown.html",
    "revision": "34e0b2b685f35db614a69e796c3aa64c"
  },
  {
    "url": "guide/permalinks.html",
    "revision": "2c332866e47e0c3447fcb253f43a5b24"
  },
  {
    "url": "guide/using-vue.html",
    "revision": "7300264081231891978fb4ea938c51c7"
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
    "revision": "076db95ca755243f3ae0c209556d4c29"
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
    "revision": "375e3072ecc66272cf34798206ee9cee"
  },
  {
    "url": "miscellaneous/glossary.html",
    "revision": "58d20caef5b921cadb54138cb1d94c8c"
  },
  {
    "url": "miscellaneous/migration-guide.html",
    "revision": "7b39066f0d4f0bb884bd34527166175f"
  },
  {
    "url": "plugin.png",
    "revision": "3e325210d3e3752e32818385fc4afbc9"
  },
  {
    "url": "plugin/context-api.html",
    "revision": "3550c8a21def2955223519b83818f5a5"
  },
  {
    "url": "plugin/index.html",
    "revision": "f8b39ef8c244a766acd7a5dc6bc7ce83"
  },
  {
    "url": "plugin/life-cycle.html",
    "revision": "bd9e665e1567c44adf3689c59188a29a"
  },
  {
    "url": "plugin/official/plugin-active-header-links.html",
    "revision": "be9b439a8493ca339369265fd736252d"
  },
  {
    "url": "plugin/official/plugin-back-to-top.html",
    "revision": "b09aae1498f6a19e3d2fdff4728a1595"
  },
  {
    "url": "plugin/official/plugin-google-analytics.html",
    "revision": "e8012d55eb23adb2d99fc8fb1d890f24"
  },
  {
    "url": "plugin/official/plugin-last-updated.html",
    "revision": "2c7a41e8c6e9d14dedd49b903b2d53f3"
  },
  {
    "url": "plugin/official/plugin-medium-zoom.html",
    "revision": "86e26af52ab94d45926fa6de2ed9a9e4"
  },
  {
    "url": "plugin/official/plugin-nprogress.html",
    "revision": "fcc0097a7c4479818ad7da764f732ef3"
  },
  {
    "url": "plugin/official/plugin-pwa.html",
    "revision": "ada39191bad5c76d181354c7e2f1214c"
  },
  {
    "url": "plugin/official/plugin-register-components.html",
    "revision": "57b17d2f4729124473066bc998bf4e07"
  },
  {
    "url": "plugin/official/plugin-search.html",
    "revision": "ff561f4755acf720484639bef92e55d4"
  },
  {
    "url": "plugin/option-api.html",
    "revision": "1c26c02176dcbf285a1a4d76b3661f69"
  },
  {
    "url": "plugin/using-a-plugin.html",
    "revision": "4b5131d4cc144ba0ebf58c690cf35ee4"
  },
  {
    "url": "plugin/writing-a-plugin.html",
    "revision": "dc45146440857dcf3cfbf5d7fb4b94ab"
  },
  {
    "url": "theme/default-theme-config.html",
    "revision": "b518d0b9181461ed503dafbfcaf14962"
  },
  {
    "url": "theme/index.html",
    "revision": "49da67a4bbea5a1d3e16f033b709a38f"
  },
  {
    "url": "theme/inheritance.html",
    "revision": "578df673cff36d159f45e879df311986"
  },
  {
    "url": "theme/option-api.html",
    "revision": "7c9179bff31cf31888f4a8fbd8b9af2b"
  },
  {
    "url": "theme/using-a-theme.html",
    "revision": "e5d608602c866b8d003bf797edee4659"
  },
  {
    "url": "theme/writing-a-theme.html",
    "revision": "a2eacb87a3f7deaf8253c20ff7e729d4"
  },
  {
    "url": "zh/api/cli.html",
    "revision": "277ef50699806a7136897939098ce393"
  },
  {
    "url": "zh/api/node.html",
    "revision": "02d90fbd3d3c7c44e04e09c85e6f778b"
  },
  {
    "url": "zh/config/index.html",
    "revision": "d8ff447e1050f98d42fcda355bb9e365"
  },
  {
    "url": "zh/faq/index.html",
    "revision": "42d5b2562752b71ec884fc46a74ca522"
  },
  {
    "url": "zh/guide/assets.html",
    "revision": "e4890ca4f0a737a85b21a0ca1ddcc67b"
  },
  {
    "url": "zh/guide/basic-config.html",
    "revision": "cb96a0b9e47a269a66114a94f6d93349"
  },
  {
    "url": "zh/guide/deploy.html",
    "revision": "61a01197d6473deddc668ac935c2bfaa"
  },
  {
    "url": "zh/guide/directory-structure.html",
    "revision": "b8bd8c8082aae87246261ba85e08c744"
  },
  {
    "url": "zh/guide/frontmatter.html",
    "revision": "5fc861c8fefb428e83daee5a446cabf2"
  },
  {
    "url": "zh/guide/getting-started.html",
    "revision": "5202f96bf1934630fa0e5ad9d777b980"
  },
  {
    "url": "zh/guide/global-computed.html",
    "revision": "9a34c255b2228feb94bbd435a8a77c1b"
  },
  {
    "url": "zh/guide/i18n.html",
    "revision": "2c83ca7b0ac18a41637ca1f6dcf2ccb4"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "7977362e74c48850a9de3a05b8f20b53"
  },
  {
    "url": "zh/guide/markdown-slot.html",
    "revision": "fc1fde6c2fc17a4d026d4d34ab08d0c6"
  },
  {
    "url": "zh/guide/markdown.html",
    "revision": "0965d0aa1f66121822cbb3b1715dc14a"
  },
  {
    "url": "zh/guide/permalinks.html",
    "revision": "3bee3dcb16c461bdbee2a52e7e0279f5"
  },
  {
    "url": "zh/guide/using-vue.html",
    "revision": "58305c6c3ed8a37efbdec9ff3782e33a"
  },
  {
    "url": "zh/index.html",
    "revision": "47af3093da0839f0bf9e1b3f0371bb36"
  },
  {
    "url": "zh/miscellaneous/design-concepts.html",
    "revision": "3a509aa1265c1db3849e1bb10ed0d6b5"
  },
  {
    "url": "zh/miscellaneous/glossary.html",
    "revision": "c80e89b414391870382cfb8ae27443b5"
  },
  {
    "url": "zh/miscellaneous/migration-guide.html",
    "revision": "240885819114f95c67487a55afa0f3fb"
  },
  {
    "url": "zh/plugin/context-api.html",
    "revision": "73eac6f77389c606bcbf48ec91f03013"
  },
  {
    "url": "zh/plugin/index.html",
    "revision": "d052796536f01b92b6a9bc924819ba21"
  },
  {
    "url": "zh/plugin/life-cycle.html",
    "revision": "d803e6d027ce0af23b912fba4837a2c7"
  },
  {
    "url": "zh/plugin/official/plugin-active-header-links.html",
    "revision": "47e00a619c6c82898943f32f4e7be96e"
  },
  {
    "url": "zh/plugin/official/plugin-back-to-top.html",
    "revision": "60650bde813c344ecccd60963223b514"
  },
  {
    "url": "zh/plugin/official/plugin-google-analytics.html",
    "revision": "1775a0b05c7858f5ab8be553cd09d2c1"
  },
  {
    "url": "zh/plugin/official/plugin-last-updated.html",
    "revision": "f307eb2ffc20bd2dec6e9bc9aecf799e"
  },
  {
    "url": "zh/plugin/official/plugin-medium-zoom.html",
    "revision": "b08fff0a6c82afb54c35bc0e3418208d"
  },
  {
    "url": "zh/plugin/official/plugin-nprogress.html",
    "revision": "1fe0f2eeeb8d1024e9874778e4d8db9b"
  },
  {
    "url": "zh/plugin/official/plugin-pwa.html",
    "revision": "f1eb043090c7e503c5f7bcdadeaeb532"
  },
  {
    "url": "zh/plugin/official/plugin-register-components.html",
    "revision": "1abde05a5158e6c37807c59a248be8dd"
  },
  {
    "url": "zh/plugin/official/plugin-search.html",
    "revision": "0d5acf9fb5255d9138d5926d4f322bc5"
  },
  {
    "url": "zh/plugin/option-api.html",
    "revision": "d9efde941dddef30eb7c757181997fd0"
  },
  {
    "url": "zh/plugin/using-a-plugin.html",
    "revision": "a644b11ce545e2f1a2a8da5180ea398a"
  },
  {
    "url": "zh/plugin/writing-a-plugin.html",
    "revision": "991f966cb43bc11371de324b6dd098a5"
  },
  {
    "url": "zh/theme/default-theme-config.html",
    "revision": "ddaffdc277b6f2c130243706fb6911df"
  },
  {
    "url": "zh/theme/index.html",
    "revision": "651d2f00a628c0ca9db3cf37a1e99dd4"
  },
  {
    "url": "zh/theme/inheritance.html",
    "revision": "b78a4d56a937ce9e9a63dbfaff94458f"
  },
  {
    "url": "zh/theme/option-api.html",
    "revision": "165435114cdc629598a2cbc05151b940"
  },
  {
    "url": "zh/theme/using-a-theme.html",
    "revision": "cc69ff2bd796273ed6c42c32b006ef46"
  },
  {
    "url": "zh/theme/writing-a-theme.html",
    "revision": "2b0aa2e1e7a3b344fc761c12d878fc87"
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
