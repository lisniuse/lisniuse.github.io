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
    "revision": "7b5fb20716bb24fe555559c67c325fb4"
  },
  {
    "url": "api/cli.html",
    "revision": "fb563ca19a80f52d009769ac6e190ccf"
  },
  {
    "url": "api/node.html",
    "revision": "9a1b1ca99e9b93463270330dab60b955"
  },
  {
    "url": "architecture.png",
    "revision": "9a93cf6cea38878e19c5816d1af28b17"
  },
  {
    "url": "assets/css/0.styles.becdb8f0.css",
    "revision": "6780bf383b2b00f80988265503f1c81d"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.b201a772.js",
    "revision": "246bba23686211e1aabb627eb82014e5"
  },
  {
    "url": "assets/js/11.127465b5.js",
    "revision": "6616d9cd861962d1988f5cb40e464dd1"
  },
  {
    "url": "assets/js/12.ce1a78af.js",
    "revision": "6e245ab9f9c17aab8d3ac3fd068710ad"
  },
  {
    "url": "assets/js/13.d34a9ec1.js",
    "revision": "c093422f9ce308f21173566ea559827e"
  },
  {
    "url": "assets/js/14.81f322d3.js",
    "revision": "0fc9bbb95f65d0470850548510753805"
  },
  {
    "url": "assets/js/15.3a468411.js",
    "revision": "1731eb2097b34d45d2d3f20eda648ac6"
  },
  {
    "url": "assets/js/16.50d0c19c.js",
    "revision": "f4ba0ffc828b2f28f5104bcf5ff71065"
  },
  {
    "url": "assets/js/17.340d34ee.js",
    "revision": "21b6c0389b628e83a80d1b95b1ab4485"
  },
  {
    "url": "assets/js/18.33546159.js",
    "revision": "388a76c2934946012feb942f183ab851"
  },
  {
    "url": "assets/js/19.fc9fe2ee.js",
    "revision": "3ddfcc878716bb4e9a7fdca30ffc8dc5"
  },
  {
    "url": "assets/js/20.9567116f.js",
    "revision": "745c5e346f45ca497b08871ec3456b2c"
  },
  {
    "url": "assets/js/21.08ef3f7e.js",
    "revision": "684b6fae082df80b43f4e444403abcba"
  },
  {
    "url": "assets/js/22.c4f2a731.js",
    "revision": "5efe61c25f85dc8ecb69ce9f726829c7"
  },
  {
    "url": "assets/js/23.9eae04bf.js",
    "revision": "e2d92dc4293aadbfdf2356e80e349b6a"
  },
  {
    "url": "assets/js/24.795fbfa5.js",
    "revision": "a0d41b30ad59dabb5b65ae3ac81d68c6"
  },
  {
    "url": "assets/js/25.3850f4f4.js",
    "revision": "d0001affb50b5b3cd74caf2be5cf391d"
  },
  {
    "url": "assets/js/26.18cae56a.js",
    "revision": "76e6e13fc7fa53eba4729cc76f52f6eb"
  },
  {
    "url": "assets/js/27.118dae04.js",
    "revision": "2a8575a129a2c05040245229dbfe1637"
  },
  {
    "url": "assets/js/28.879a40fb.js",
    "revision": "f14c76635425baff0dc57f009cbaacf2"
  },
  {
    "url": "assets/js/29.ce6d770d.js",
    "revision": "2cd88e95aaa77351fee11d7d52abb43a"
  },
  {
    "url": "assets/js/3.fdc63463.js",
    "revision": "47edb734002f3b26aae25b0e29b4c3cd"
  },
  {
    "url": "assets/js/30.984ff21e.js",
    "revision": "eccb6d1afb2eade3c97986b8b84ce535"
  },
  {
    "url": "assets/js/31.2fde26de.js",
    "revision": "f7a7b2370c23886ddcad9555791f1171"
  },
  {
    "url": "assets/js/32.a49519ed.js",
    "revision": "d259615433e30fb85a87a37b7da9dcb5"
  },
  {
    "url": "assets/js/33.8cfe2c7f.js",
    "revision": "01f8a5ad148cea0e9c9a55f4164796d3"
  },
  {
    "url": "assets/js/34.2cd1235a.js",
    "revision": "797b6cced5359265b58bc2e8309e5ae7"
  },
  {
    "url": "assets/js/35.9b1f73ad.js",
    "revision": "da47ab2dcd72b74f1081c59bbe5a5cf1"
  },
  {
    "url": "assets/js/36.df8e7c5a.js",
    "revision": "d83963382d4f31ec5488f11276885d37"
  },
  {
    "url": "assets/js/37.aa68b33f.js",
    "revision": "12ff53164004b9e22069b5b16a148ea7"
  },
  {
    "url": "assets/js/38.dd74fcb5.js",
    "revision": "2ee3a5c647e8b3fc557b5cbbc1508bd2"
  },
  {
    "url": "assets/js/39.b362aea8.js",
    "revision": "b38c437ab92da51aa10315f6d7d2062a"
  },
  {
    "url": "assets/js/4.684cb84e.js",
    "revision": "4944e103b46a8b6858e101a594b895e2"
  },
  {
    "url": "assets/js/40.5bdccc83.js",
    "revision": "cd463b39f40cc984f00524e1a1704de8"
  },
  {
    "url": "assets/js/41.50598150.js",
    "revision": "2fb0c900cbb9c00021f50d2babd77276"
  },
  {
    "url": "assets/js/42.14de1a13.js",
    "revision": "510da48b05f0b1bf57759af73d6c4e3a"
  },
  {
    "url": "assets/js/43.d4cc1e34.js",
    "revision": "dfd28f4062ee6e5fdcc3fe08f13781e2"
  },
  {
    "url": "assets/js/44.61a7e979.js",
    "revision": "40b0e773a13a8c472652938cc4a02b5d"
  },
  {
    "url": "assets/js/45.9d5e7567.js",
    "revision": "edf9b13d269261e941496e23a251b78f"
  },
  {
    "url": "assets/js/46.104f332a.js",
    "revision": "367814b24bbba165aecf51d414c54e50"
  },
  {
    "url": "assets/js/47.5c2e02cb.js",
    "revision": "60139d9be945395bde3de22ed4f667b0"
  },
  {
    "url": "assets/js/48.14c2cf59.js",
    "revision": "2a08d46d0d8061c6d75aa80160cf420a"
  },
  {
    "url": "assets/js/49.a399302f.js",
    "revision": "95776211ff0ec12c8e495ae4355c8c76"
  },
  {
    "url": "assets/js/5.fe2c197e.js",
    "revision": "b0dbf92edde97607c6f99ec980600413"
  },
  {
    "url": "assets/js/50.218df04c.js",
    "revision": "0be4fbb8cf7da02cd263d12374af08dd"
  },
  {
    "url": "assets/js/51.413181a5.js",
    "revision": "5a2d30b851bebbfd08bfb6d444003999"
  },
  {
    "url": "assets/js/52.e746ad43.js",
    "revision": "666c08ef398bc0522d2bdee5bd25814c"
  },
  {
    "url": "assets/js/53.46bdd0ea.js",
    "revision": "7c311d722941878daa5f81f979ae2f9c"
  },
  {
    "url": "assets/js/54.c96d0000.js",
    "revision": "49814c58092db7baaa95d7854710808b"
  },
  {
    "url": "assets/js/55.8093636d.js",
    "revision": "42ad5633cd04f229e800b7fb93ca27c3"
  },
  {
    "url": "assets/js/56.19e58433.js",
    "revision": "8bb2152909245923c644b5ab501e690d"
  },
  {
    "url": "assets/js/57.dd1a5211.js",
    "revision": "ede9087ba099e9be873a73c769c89b45"
  },
  {
    "url": "assets/js/58.bba4a03c.js",
    "revision": "ad26e24e7054d9df8e339d09369f7fd7"
  },
  {
    "url": "assets/js/59.27630a4e.js",
    "revision": "87e405c5c1808a8d00927bbd76d992f1"
  },
  {
    "url": "assets/js/6.d81ff61d.js",
    "revision": "0cf1489df48f568b3ab93ab0fc8092c5"
  },
  {
    "url": "assets/js/60.e1e97a3d.js",
    "revision": "6b89fdba8e656942b0f13b688378c995"
  },
  {
    "url": "assets/js/61.c21038e0.js",
    "revision": "a5f7c05c88c1fdc2fe349e4212d85d81"
  },
  {
    "url": "assets/js/62.c5c6b23b.js",
    "revision": "aa656310c8f42bf5a2c1da32fd1a8f5d"
  },
  {
    "url": "assets/js/63.82f65054.js",
    "revision": "3ff2a228ffcd6b474885b77b584ad238"
  },
  {
    "url": "assets/js/64.5900f744.js",
    "revision": "abace4b565cf971b8f0ee81241a77626"
  },
  {
    "url": "assets/js/65.ce42ec88.js",
    "revision": "e6bd771771b51652fead95de829264c0"
  },
  {
    "url": "assets/js/66.da82369e.js",
    "revision": "5c45911e171702e4d6cac7375e3aee6a"
  },
  {
    "url": "assets/js/67.13ff4c61.js",
    "revision": "37b0495ef59e17ad69bfecd57664ce72"
  },
  {
    "url": "assets/js/68.d02c07a3.js",
    "revision": "a1a324a7a01273d9354a2d0eb983f6bc"
  },
  {
    "url": "assets/js/69.f744d69a.js",
    "revision": "83c76fbc67f0d750ae59deca0e9955c7"
  },
  {
    "url": "assets/js/7.01019075.js",
    "revision": "588ab24ea15b45ab2f9f8fefdc18ad93"
  },
  {
    "url": "assets/js/70.5930f173.js",
    "revision": "d6945536a98dd4ea9133a4761d955676"
  },
  {
    "url": "assets/js/71.35c66ffe.js",
    "revision": "13d32d0d6fefd58a0b3a8e84eaf33ed1"
  },
  {
    "url": "assets/js/72.abebcd4c.js",
    "revision": "f4f58e2e070631432a0f68d30e023480"
  },
  {
    "url": "assets/js/73.3f179ac4.js",
    "revision": "11b687e14773dbdb77fc6c492b03f2c3"
  },
  {
    "url": "assets/js/74.a84a76e1.js",
    "revision": "1efaf03ed16463fcd26870a7ce10e4c3"
  },
  {
    "url": "assets/js/75.2d6d526c.js",
    "revision": "f7d76d24943404dcb02dfac0cdbfe961"
  },
  {
    "url": "assets/js/76.d409cbe1.js",
    "revision": "c9279090ebe3541640d8aee34bfea95c"
  },
  {
    "url": "assets/js/77.97f71ef4.js",
    "revision": "f7afe58f0cbc4216af44ae1708b042fa"
  },
  {
    "url": "assets/js/78.e0f329f9.js",
    "revision": "15b9626655255990dbcf5fbdbad9e7a0"
  },
  {
    "url": "assets/js/79.35ff33eb.js",
    "revision": "74f901d942b7e8fb0391dc7b3c0d279f"
  },
  {
    "url": "assets/js/8.06f44cec.js",
    "revision": "af8015b5b3a2617d84446b954a3e4f95"
  },
  {
    "url": "assets/js/80.917121a6.js",
    "revision": "9b7a752bb687a12451f8305d3393d236"
  },
  {
    "url": "assets/js/81.641cbc6e.js",
    "revision": "20fd2e9bf821350ff224277dd8f161b3"
  },
  {
    "url": "assets/js/82.5cf123aa.js",
    "revision": "131f9ec32658aa35dfb846a21975c3e4"
  },
  {
    "url": "assets/js/83.c320b68a.js",
    "revision": "66a9ecd96b11c037a37ee7863b5c08b1"
  },
  {
    "url": "assets/js/84.d786de5b.js",
    "revision": "a1c44077d04bb3d9c96c8fbcf069496b"
  },
  {
    "url": "assets/js/85.8cfa8732.js",
    "revision": "fc5f957bbb88b87934b7ca9475115771"
  },
  {
    "url": "assets/js/86.69845d3a.js",
    "revision": "8d2ea580eb81ab89ca37a70e69554eb1"
  },
  {
    "url": "assets/js/87.76ab3d0b.js",
    "revision": "0d06f376dbbe436fe25aa7928977537d"
  },
  {
    "url": "assets/js/88.0e630d62.js",
    "revision": "b10f38833d16ce57920549a8d99a005f"
  },
  {
    "url": "assets/js/89.eafbf7ca.js",
    "revision": "40e14a0ddfcd8607387ba5351a054a7e"
  },
  {
    "url": "assets/js/9.7f80370a.js",
    "revision": "fa9246930e36d4b9f742a253dbc17aec"
  },
  {
    "url": "assets/js/90.7be35b8e.js",
    "revision": "aeaddeb5bf541c058ae71853e51967f5"
  },
  {
    "url": "assets/js/91.9a79dbd2.js",
    "revision": "98cdbb9d88d380e767c54f4678c6b158"
  },
  {
    "url": "assets/js/92.c677745a.js",
    "revision": "843a0edaca3a1b46bc9ea838430f1602"
  },
  {
    "url": "assets/js/93.b2dd0249.js",
    "revision": "30a24a0df8f081dd8d5b823a3bbc07ce"
  },
  {
    "url": "assets/js/94.5bbc64d0.js",
    "revision": "83539a06e054abb6e26eff2666322eab"
  },
  {
    "url": "assets/js/95.fc0c826d.js",
    "revision": "2db5b99fc13f07df700e9a673040a0ca"
  },
  {
    "url": "assets/js/96.314df108.js",
    "revision": "4053d15972a0116e9bec77119d6b7320"
  },
  {
    "url": "assets/js/97.343107dd.js",
    "revision": "58ef997e45f2290651f4037ae74345cc"
  },
  {
    "url": "assets/js/98.b2a06f16.js",
    "revision": "40fa19f8ee763e75f839b3715a968b0a"
  },
  {
    "url": "assets/js/99.fec9a41a.js",
    "revision": "dc8d8c59dc5ababbd8e23f18c71987ff"
  },
  {
    "url": "assets/js/app.3649a16a.js",
    "revision": "39dde91166c8510f2225c60a12ae356c"
  },
  {
    "url": "assets/js/vendors~notification.73884a3b.js",
    "revision": "1ece06e885ce685c9ce2b00e68f4f123"
  },
  {
    "url": "config/index.html",
    "revision": "c3a7b86b95a81a834d51b6e52a6979e4"
  },
  {
    "url": "faq/index.html",
    "revision": "1d3335a5bac6bfb60356cdc33036a02d"
  },
  {
    "url": "guide/assets.html",
    "revision": "9b24022819340fac00a4efddfc0420fc"
  },
  {
    "url": "guide/basic-config.html",
    "revision": "eb55339d0ecdba0b389b9a7711fb14fa"
  },
  {
    "url": "guide/deploy.html",
    "revision": "3cef072fc160c4e9e22421ab63237136"
  },
  {
    "url": "guide/directory-structure.html",
    "revision": "73fe760ad0827f4c98b1c8407e7a497c"
  },
  {
    "url": "guide/frontmatter.html",
    "revision": "c180d0d592ac1066425470b5b209cc3f"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "cf765e0e1b6b1af9b4edf6979bf363ad"
  },
  {
    "url": "guide/global-computed.html",
    "revision": "71e46af785139054ae1b8dafc7f971f7"
  },
  {
    "url": "guide/i18n.html",
    "revision": "ee92fcaa6da3511103d20dc30f487f83"
  },
  {
    "url": "guide/index.html",
    "revision": "d0e59775fe44960067cb6e1d9c1eff55"
  },
  {
    "url": "guide/markdown-slot.html",
    "revision": "548c555c9f98fd693fd15e368e57fee8"
  },
  {
    "url": "guide/markdown.html",
    "revision": "d33b620a56b3dcc20a4184fb63ad3b8c"
  },
  {
    "url": "guide/permalinks.html",
    "revision": "3fd1fb8f06d4c640003703aef93bb5e5"
  },
  {
    "url": "guide/using-vue.html",
    "revision": "80299d410f61d299d58dceaba4ce975c"
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
    "revision": "9663d04f5ed71ca114d80b62749cddf9"
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
    "revision": "f76d00c3c005f9926a86b71f3ba97bc9"
  },
  {
    "url": "miscellaneous/glossary.html",
    "revision": "1023a018a2e315706a790d10fec5009d"
  },
  {
    "url": "miscellaneous/migration-guide.html",
    "revision": "e35893f959af4027ab21b3257205de72"
  },
  {
    "url": "plugin.png",
    "revision": "3e325210d3e3752e32818385fc4afbc9"
  },
  {
    "url": "plugin/context-api.html",
    "revision": "1a0da4d77a8a2327d93dac9cfa64e974"
  },
  {
    "url": "plugin/index.html",
    "revision": "bf2840d5a75b0d90f4f7863ec7a77bc7"
  },
  {
    "url": "plugin/life-cycle.html",
    "revision": "92565584d892ad4ea0205f1c3055a031"
  },
  {
    "url": "plugin/official/plugin-active-header-links.html",
    "revision": "46955084f103d5cfd9bf9fa7868eb37d"
  },
  {
    "url": "plugin/official/plugin-back-to-top.html",
    "revision": "a5da054cb97e3923a9853a4edaccda08"
  },
  {
    "url": "plugin/official/plugin-google-analytics.html",
    "revision": "6dcdc0decb67e0be8553566a5b53d989"
  },
  {
    "url": "plugin/official/plugin-last-updated.html",
    "revision": "bf3b3f890d7f97c1cd6e729c7820552b"
  },
  {
    "url": "plugin/official/plugin-medium-zoom.html",
    "revision": "f71daddbdb4b54cd4c48dbccf91f1e00"
  },
  {
    "url": "plugin/official/plugin-nprogress.html",
    "revision": "12c32585012620ed073d9ef5215e0b1d"
  },
  {
    "url": "plugin/official/plugin-pwa.html",
    "revision": "5e75de1c035330109997e67587cd9cdc"
  },
  {
    "url": "plugin/official/plugin-register-components.html",
    "revision": "f9386399e7eda10c751b0648679ced4e"
  },
  {
    "url": "plugin/official/plugin-search.html",
    "revision": "193b1c04f777be31c1e1bfe1ce04a4df"
  },
  {
    "url": "plugin/option-api.html",
    "revision": "6b910512bc4e003a3d97c1c822b31c11"
  },
  {
    "url": "plugin/using-a-plugin.html",
    "revision": "008c090bc1f8923f1c19f1a933c7b209"
  },
  {
    "url": "plugin/writing-a-plugin.html",
    "revision": "a87dbc00e04c185fdfa02d9d415457d6"
  },
  {
    "url": "theme/default-theme-config.html",
    "revision": "55882d853338234b202dc74d13251eea"
  },
  {
    "url": "theme/index.html",
    "revision": "77b4ab986873687e14d2a9df1a2eef84"
  },
  {
    "url": "theme/inheritance.html",
    "revision": "52786ae8944b92ded5f51be46536c887"
  },
  {
    "url": "theme/option-api.html",
    "revision": "6e182329e4facd9530958c2acbbf5fa6"
  },
  {
    "url": "theme/using-a-theme.html",
    "revision": "c925cb2ec651dbf8fcad02e0ea3bf4dc"
  },
  {
    "url": "theme/writing-a-theme.html",
    "revision": "be9ed26e8f08bc2e56f6dd8c101c1671"
  },
  {
    "url": "zh/api/cli.html",
    "revision": "9f3997074b275708a6e85c4c416a72a9"
  },
  {
    "url": "zh/api/node.html",
    "revision": "7e8f0ce011ec4870cfa9050c18a5dc79"
  },
  {
    "url": "zh/config/index.html",
    "revision": "b27203674afbb3ff27ef0b4626057513"
  },
  {
    "url": "zh/faq/index.html",
    "revision": "0f095ddf05fb767ca88dc0478fe55f01"
  },
  {
    "url": "zh/guide/assets.html",
    "revision": "335f3a3ab3c31dc8e596aa76dc97f823"
  },
  {
    "url": "zh/guide/basic-config.html",
    "revision": "a5dca561e395cb1b39c1045f72ec894d"
  },
  {
    "url": "zh/guide/deploy.html",
    "revision": "086e0471e5312a7e6089c248b11f03e2"
  },
  {
    "url": "zh/guide/directory-structure.html",
    "revision": "7219736a45802a9b5bb3aa97eab285d7"
  },
  {
    "url": "zh/guide/frontmatter.html",
    "revision": "8cb069f6670160f775aaccb019e26e3d"
  },
  {
    "url": "zh/guide/getting-started.html",
    "revision": "ee1d1d28016690522f2d40decaba640f"
  },
  {
    "url": "zh/guide/global-computed.html",
    "revision": "d538d9688656cb724eee0e6b42d50805"
  },
  {
    "url": "zh/guide/i18n.html",
    "revision": "32c76b086296dfbda9a75447155272d3"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "97836e8af867b380169ebf128be1020b"
  },
  {
    "url": "zh/guide/markdown-slot.html",
    "revision": "5e8d54f26944aaa1563a6ba52952ee10"
  },
  {
    "url": "zh/guide/markdown.html",
    "revision": "77914c49d8e067563d527656e8cb43ae"
  },
  {
    "url": "zh/guide/permalinks.html",
    "revision": "9e4dbfad671054967d577669f929cdfa"
  },
  {
    "url": "zh/guide/using-vue.html",
    "revision": "4313f955ab3910e862481fe5bde0bbb5"
  },
  {
    "url": "zh/index.html",
    "revision": "9e4111fbfe2cba2649578f03f6f6fc7c"
  },
  {
    "url": "zh/miscellaneous/design-concepts.html",
    "revision": "99ef94890bbb7929021a0b61e4f07442"
  },
  {
    "url": "zh/miscellaneous/glossary.html",
    "revision": "3d8383ce656cb6d9093cca5618b8c1e8"
  },
  {
    "url": "zh/miscellaneous/migration-guide.html",
    "revision": "479c33ca7071a435e9449ff848e99dd3"
  },
  {
    "url": "zh/plugin/context-api.html",
    "revision": "e6280cd6526328551dfa6820f71fdd00"
  },
  {
    "url": "zh/plugin/index.html",
    "revision": "d4a4a9d92204300e38e69bd98ff6f38c"
  },
  {
    "url": "zh/plugin/life-cycle.html",
    "revision": "838360c593ffcd1317f5decad3eaa3a7"
  },
  {
    "url": "zh/plugin/official/plugin-active-header-links.html",
    "revision": "573d41f38d69ce94e780ba8431acd1fa"
  },
  {
    "url": "zh/plugin/official/plugin-back-to-top.html",
    "revision": "9b32d2843f239364559285ab1b9972a2"
  },
  {
    "url": "zh/plugin/official/plugin-google-analytics.html",
    "revision": "ea4e10dd31b596a1aa81075a4152c1fe"
  },
  {
    "url": "zh/plugin/official/plugin-last-updated.html",
    "revision": "3b007fc25e5421a5300991a19668dfa5"
  },
  {
    "url": "zh/plugin/official/plugin-medium-zoom.html",
    "revision": "2dabcc14e3c70207b77bf4bdd04bb321"
  },
  {
    "url": "zh/plugin/official/plugin-nprogress.html",
    "revision": "b249ad3de254f2ec40fed7889adcb9d7"
  },
  {
    "url": "zh/plugin/official/plugin-pwa.html",
    "revision": "ee9d1fbd3e9ba26e17cd6fa0d7506a0f"
  },
  {
    "url": "zh/plugin/official/plugin-register-components.html",
    "revision": "fdb4b9731fa4155f9cc682d39bc95df1"
  },
  {
    "url": "zh/plugin/official/plugin-search.html",
    "revision": "ff2d671626b5958d141e7dc37c6ff48d"
  },
  {
    "url": "zh/plugin/option-api.html",
    "revision": "1492f7d4cb601b607b4b946bc755b64e"
  },
  {
    "url": "zh/plugin/using-a-plugin.html",
    "revision": "ce8fa09cd3c000b014b24600d1014799"
  },
  {
    "url": "zh/plugin/writing-a-plugin.html",
    "revision": "a3023270a96f999cede3f2b3e0b481a5"
  },
  {
    "url": "zh/theme/default-theme-config.html",
    "revision": "ee1300443426b9753b5eba3c61aef41a"
  },
  {
    "url": "zh/theme/index.html",
    "revision": "5c74c6aa6925d50b91a36ed41d59ccf2"
  },
  {
    "url": "zh/theme/inheritance.html",
    "revision": "044309f0455de662fe2059559c187b0e"
  },
  {
    "url": "zh/theme/option-api.html",
    "revision": "96a2e216d1dda8d2c78511fdeaf94e38"
  },
  {
    "url": "zh/theme/using-a-theme.html",
    "revision": "a1a8bc104bf9123c1c812710fd8042be"
  },
  {
    "url": "zh/theme/writing-a-theme.html",
    "revision": "76254d3f3cf0c45c1045552070b5825d"
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
