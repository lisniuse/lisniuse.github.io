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
    "revision": "8059a8ba4a0499fa14020c759619bd4d"
  },
  {
    "url": "api/cli.html",
    "revision": "a08f0402cc7618fab8f47f38b1b214d1"
  },
  {
    "url": "api/node.html",
    "revision": "65d616f2db1e05babe4e3e1ba6ffabdd"
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
    "url": "assets/js/16.63d7e6ca.js",
    "revision": "d2afe0b71d3376a8a5bbc41cd42b7ea6"
  },
  {
    "url": "assets/js/17.a46dfb85.js",
    "revision": "5fc038876161df2838f0ac9224195ac4"
  },
  {
    "url": "assets/js/18.2d5fd5e4.js",
    "revision": "e11caea7bee00c7f614fa251f992da50"
  },
  {
    "url": "assets/js/19.da58f0d0.js",
    "revision": "146e5b04e3b4b9ae031de03a94ea2262"
  },
  {
    "url": "assets/js/20.49690d0d.js",
    "revision": "cd24a8d5985a8028cd20738ace266e7b"
  },
  {
    "url": "assets/js/21.1c9df137.js",
    "revision": "f238ab43466e57cd5a21b6aaa3b757d9"
  },
  {
    "url": "assets/js/22.de316fd4.js",
    "revision": "bca9da09511ad023fca0f576942a60ca"
  },
  {
    "url": "assets/js/23.6da5bf40.js",
    "revision": "95045e7fb6bf7dd84db77adbbb7b15a1"
  },
  {
    "url": "assets/js/24.b6f91fcc.js",
    "revision": "9e1d2aadbc9ba42905047a29c1857206"
  },
  {
    "url": "assets/js/25.2befb256.js",
    "revision": "dc143e59a9f103c9c43b012e49944b7c"
  },
  {
    "url": "assets/js/26.7e32c5fb.js",
    "revision": "53935f4ad3bde5537d3700b93cfaaaae"
  },
  {
    "url": "assets/js/27.a3d8630a.js",
    "revision": "bd597443f2bdd8659a1a16b3e2e400ba"
  },
  {
    "url": "assets/js/28.cdb5ec27.js",
    "revision": "a7a2d04077105fdba32eedf32c7fb789"
  },
  {
    "url": "assets/js/29.3933646b.js",
    "revision": "901642c8bb0123e48bc083e0d6fa39c1"
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
    "url": "assets/js/31.2dc8513c.js",
    "revision": "66d172e68a86755269e845fc49029d54"
  },
  {
    "url": "assets/js/32.373e2338.js",
    "revision": "7ebe37a570f88647af3df013b81e4c36"
  },
  {
    "url": "assets/js/33.92f73a2f.js",
    "revision": "5fbb51128e8e71690ea7735ab55d592c"
  },
  {
    "url": "assets/js/34.f74dc6e4.js",
    "revision": "6103801b2299d86500b4845b9f312dc6"
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
    "url": "assets/js/37.8aed8c75.js",
    "revision": "cfb7c17a8b993d7376e0f31ac9cdd4e7"
  },
  {
    "url": "assets/js/38.bba97849.js",
    "revision": "283200f153a96c882809c47da4cd3abb"
  },
  {
    "url": "assets/js/39.0be7aafe.js",
    "revision": "c037f97d5d965a7c0283aaec0a4d6745"
  },
  {
    "url": "assets/js/4.3cc19772.js",
    "revision": "2d9fbb0762476df179373af177be751b"
  },
  {
    "url": "assets/js/40.9c423fe9.js",
    "revision": "32c465c892da6cdd47d58b0698119a65"
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
    "url": "assets/js/5.0cf59afe.js",
    "revision": "a9ad37e62974c0227e4bbb7c7797da91"
  },
  {
    "url": "assets/js/50.aa2e3643.js",
    "revision": "70a4faf1a89c4ae70d9d0d6cbff7041b"
  },
  {
    "url": "assets/js/51.c280bba9.js",
    "revision": "57d001e4d414afedaa470d5452f491c6"
  },
  {
    "url": "assets/js/52.1983a068.js",
    "revision": "9164d846fe2cb0965ed81d3874c896c5"
  },
  {
    "url": "assets/js/53.5a4ead54.js",
    "revision": "8e56da0c871af5a1626f3ea864766264"
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
    "url": "assets/js/59.f4674ae0.js",
    "revision": "ebf9e3d56d123fbbe394b67784c0f785"
  },
  {
    "url": "assets/js/6.c1ab3c69.js",
    "revision": "7e75a3475e47e4b3cd5447a277801ef7"
  },
  {
    "url": "assets/js/60.2bc66db7.js",
    "revision": "2d355f266661920401ac5c2bc1940abc"
  },
  {
    "url": "assets/js/61.17d96087.js",
    "revision": "d9d6fec6d09e21db59e48569beea5ed3"
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
    "url": "assets/js/71.527ddfc7.js",
    "revision": "70e75fd19fd834ea50c19725538f589e"
  },
  {
    "url": "assets/js/72.e72030a5.js",
    "revision": "3c465d448bf62a3a3ab0f97943db40d8"
  },
  {
    "url": "assets/js/73.47c57123.js",
    "revision": "52687156769957dd8924191a6388bed1"
  },
  {
    "url": "assets/js/74.15fa9520.js",
    "revision": "0bc835d0daf69e31bfd1bec91420a9cc"
  },
  {
    "url": "assets/js/75.8f08ee2e.js",
    "revision": "8793b18e1c411661487802be84313f28"
  },
  {
    "url": "assets/js/76.796b249c.js",
    "revision": "d0d23a9eef94d43f824e162973a32c76"
  },
  {
    "url": "assets/js/77.b0ef7e97.js",
    "revision": "65443fd4abaecdd6cb064bdc6eae5eba"
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
    "url": "assets/js/84.8ab155a8.js",
    "revision": "04559dbd7bc904369640bf4d0744855d"
  },
  {
    "url": "assets/js/85.2bd24a9d.js",
    "revision": "b0ab8d6f5cc3e1a29032e1490f4ff4fd"
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
    "url": "assets/js/90.5ecee264.js",
    "revision": "9469d60ad503ba4265bf614907f77835"
  },
  {
    "url": "assets/js/91.a234ae63.js",
    "revision": "48b8a6ea6814b56b42949aa7d51a8076"
  },
  {
    "url": "assets/js/92.44a772b2.js",
    "revision": "0dec27dc36946c22145798fda52791af"
  },
  {
    "url": "assets/js/93.f66691a8.js",
    "revision": "d5d79b31866d728d790b957dc432846d"
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
    "url": "assets/js/96.2061fbaf.js",
    "revision": "2fff5f32c038ef2acc8b4893a89d2ed4"
  },
  {
    "url": "assets/js/97.9cf0b6ad.js",
    "revision": "a3a8bc6bca322417b046de5ff2d8f5f4"
  },
  {
    "url": "assets/js/98.6464b21d.js",
    "revision": "ca5bd2ae27926443b40d8c44b2b53cc2"
  },
  {
    "url": "assets/js/app.3943c0ef.js",
    "revision": "95b6586388abfc12efedf860202a571d"
  },
  {
    "url": "assets/js/vendors~notification.4bf19253.js",
    "revision": "0323189e8550f6c29bde78c90c5ea5b7"
  },
  {
    "url": "config/index.html",
    "revision": "d05c9e631175a0f4e4eea25db54e1f04"
  },
  {
    "url": "faq/index.html",
    "revision": "63f79bf178b31927d7be58d238750ca5"
  },
  {
    "url": "guide/assets.html",
    "revision": "7809050b35a1ef8abe6a033cd214edb5"
  },
  {
    "url": "guide/basic-config.html",
    "revision": "435198cfa3a7aaba5bcec2c143589ce9"
  },
  {
    "url": "guide/deploy.html",
    "revision": "255b3655cde7d7df5807cf04b601f6be"
  },
  {
    "url": "guide/directory-structure.html",
    "revision": "20b033fc0f0a0a037e6f06f7e451db4f"
  },
  {
    "url": "guide/frontmatter.html",
    "revision": "f5fd5c178c3a2484fe4330c9df4710cc"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "eaa30326c95291eb0e4d656f4a9d348e"
  },
  {
    "url": "guide/global-computed.html",
    "revision": "ea2a9d57d0259175baa00391ae81e1b4"
  },
  {
    "url": "guide/i18n.html",
    "revision": "182b22e2aa6458f3a549abd2a69d4a20"
  },
  {
    "url": "guide/index.html",
    "revision": "83221ada5578b8b8315949c031f30535"
  },
  {
    "url": "guide/markdown-slot.html",
    "revision": "fde601045f6df347521ac3a6f9e9de67"
  },
  {
    "url": "guide/markdown.html",
    "revision": "780ae69a944afdf0698bf9891439401e"
  },
  {
    "url": "guide/permalinks.html",
    "revision": "637ac1890e13f2a6b716dfe33600ad04"
  },
  {
    "url": "guide/using-vue.html",
    "revision": "a8049a1aed0e87bc7032bbcdffe9cb0a"
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
    "revision": "70db42b079274354ed87d89ed171126b"
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
    "revision": "82bdac684ad46b9de5ffa7eb745a1f99"
  },
  {
    "url": "miscellaneous/glossary.html",
    "revision": "05460df4ecf35bceb690f889a3a52deb"
  },
  {
    "url": "miscellaneous/migration-guide.html",
    "revision": "c7c6498016c60616ede8011572167bdc"
  },
  {
    "url": "plugin.png",
    "revision": "3e325210d3e3752e32818385fc4afbc9"
  },
  {
    "url": "plugin/context-api.html",
    "revision": "8a09e9dc4d7c527d491205ea0a65628c"
  },
  {
    "url": "plugin/index.html",
    "revision": "f3da3e00c22273fadbceafe7e26cfabb"
  },
  {
    "url": "plugin/life-cycle.html",
    "revision": "f5ab9fd8b3808f9e0c15585a17be5250"
  },
  {
    "url": "plugin/official/plugin-active-header-links.html",
    "revision": "932d01bee870f314bd00d81c06d0e2c7"
  },
  {
    "url": "plugin/official/plugin-back-to-top.html",
    "revision": "2d8d7650a930b30c5e1d962e3a43a611"
  },
  {
    "url": "plugin/official/plugin-google-analytics.html",
    "revision": "c8d0a5e1820cf6fa24a62bf8fa0024eb"
  },
  {
    "url": "plugin/official/plugin-last-updated.html",
    "revision": "5b23acc97b43c48f6e1606e4baa93a05"
  },
  {
    "url": "plugin/official/plugin-medium-zoom.html",
    "revision": "556f92afccfaa85532875e99b0190238"
  },
  {
    "url": "plugin/official/plugin-nprogress.html",
    "revision": "6eede0ce8ae16785aac397c8417db5f0"
  },
  {
    "url": "plugin/official/plugin-pwa.html",
    "revision": "1e9cb8149d6d9f75c5528feb39bc68c4"
  },
  {
    "url": "plugin/official/plugin-register-components.html",
    "revision": "c346b1b37c4537853c5f8dfb8045fa4b"
  },
  {
    "url": "plugin/official/plugin-search.html",
    "revision": "4d078c2a05e034f64934816ed56af5a4"
  },
  {
    "url": "plugin/option-api.html",
    "revision": "1bf8aa7a22e57708731d91a3de81bc15"
  },
  {
    "url": "plugin/using-a-plugin.html",
    "revision": "b7321f063b37b4ebaac6c36c38812135"
  },
  {
    "url": "plugin/writing-a-plugin.html",
    "revision": "72eb2ada245dc76406d2fcb04613e4c7"
  },
  {
    "url": "theme/default-theme-config.html",
    "revision": "2b8ad7983654153ce74a480a66b4bb28"
  },
  {
    "url": "theme/index.html",
    "revision": "057dd791789207a1de73b71852b3e4d6"
  },
  {
    "url": "theme/inheritance.html",
    "revision": "d2b54cd1fe2dd4aa92546d2d4b2d1394"
  },
  {
    "url": "theme/option-api.html",
    "revision": "e45953a7f12d3f40bee358020a13dd06"
  },
  {
    "url": "theme/using-a-theme.html",
    "revision": "cb372631d6e0a725fe3b37817ae7b979"
  },
  {
    "url": "theme/writing-a-theme.html",
    "revision": "c11352eedb5bcfcae2bf6cedb9f79833"
  },
  {
    "url": "zh/api/cli.html",
    "revision": "16ed651cf8c2d20681f1a941bde3d66e"
  },
  {
    "url": "zh/api/node.html",
    "revision": "2d650b543be312dca6d7ca1e12d47a40"
  },
  {
    "url": "zh/config/index.html",
    "revision": "bfb95fe041d0f24eae0e7e1005fca4a9"
  },
  {
    "url": "zh/faq/index.html",
    "revision": "b19d543312bec425a49b54ab9ec89ca7"
  },
  {
    "url": "zh/guide/assets.html",
    "revision": "da38bc137aeef7052815c462a42be3e8"
  },
  {
    "url": "zh/guide/basic-config.html",
    "revision": "97f9280025d8f2c71ed55063d24c36ad"
  },
  {
    "url": "zh/guide/deploy.html",
    "revision": "046354556cf066835ad950ceb4552e90"
  },
  {
    "url": "zh/guide/directory-structure.html",
    "revision": "a4f7bac1f5c542c27f6562883355b824"
  },
  {
    "url": "zh/guide/frontmatter.html",
    "revision": "a88a7001aefeb9170ae2d4b0cf80af30"
  },
  {
    "url": "zh/guide/getting-started.html",
    "revision": "7ccf3540a9c9b042b998347b180e0017"
  },
  {
    "url": "zh/guide/global-computed.html",
    "revision": "bd23f56804b185c48c147966fa91779e"
  },
  {
    "url": "zh/guide/i18n.html",
    "revision": "f4786d0ad23db80447ddc2235fe3b587"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "18ee92c9b4cc49b9b9e4a19492e7c0e6"
  },
  {
    "url": "zh/guide/markdown-slot.html",
    "revision": "ffc96dd4e646c21635eabd19ef6ac983"
  },
  {
    "url": "zh/guide/markdown.html",
    "revision": "0a3489907c65d0e2a40dc4378af568fd"
  },
  {
    "url": "zh/guide/permalinks.html",
    "revision": "03915602d66cdc3f61317636a64f3601"
  },
  {
    "url": "zh/guide/using-vue.html",
    "revision": "b59c44c52036979eae12d36bac652af2"
  },
  {
    "url": "zh/index.html",
    "revision": "f8c4b1c15020efe97e170334e7b578bf"
  },
  {
    "url": "zh/miscellaneous/design-concepts.html",
    "revision": "a0aa6fd0a9e1ccb4a7fbabd0e0d4e21d"
  },
  {
    "url": "zh/miscellaneous/glossary.html",
    "revision": "268f8886cf452a55de286ac1a2fd4d42"
  },
  {
    "url": "zh/miscellaneous/migration-guide.html",
    "revision": "ab83675e0325cef57a399097644d09a3"
  },
  {
    "url": "zh/plugin/context-api.html",
    "revision": "be4ab0bd60ea8ec6339ddac3ece2ebf3"
  },
  {
    "url": "zh/plugin/index.html",
    "revision": "9e2798b9ea4789733ce6f85cec5d907f"
  },
  {
    "url": "zh/plugin/life-cycle.html",
    "revision": "c95b54fa14ffc170afc7c013dec45c08"
  },
  {
    "url": "zh/plugin/official/plugin-active-header-links.html",
    "revision": "89a99fe92640780572513a6dd8350c20"
  },
  {
    "url": "zh/plugin/official/plugin-back-to-top.html",
    "revision": "bc4bb91a1618406aa6a8c11042095115"
  },
  {
    "url": "zh/plugin/official/plugin-google-analytics.html",
    "revision": "be060b9c2f0bf0bb2245a51ffaeab694"
  },
  {
    "url": "zh/plugin/official/plugin-last-updated.html",
    "revision": "0dcabf6e6f6d46a1d2bd01113e4bbccf"
  },
  {
    "url": "zh/plugin/official/plugin-medium-zoom.html",
    "revision": "dc926b3bb997a39e37b99fb017f696dd"
  },
  {
    "url": "zh/plugin/official/plugin-nprogress.html",
    "revision": "f8608466714743458d442d47bc969efb"
  },
  {
    "url": "zh/plugin/official/plugin-pwa.html",
    "revision": "a10f9083e7ee8f5e6b112c71a30a561d"
  },
  {
    "url": "zh/plugin/official/plugin-register-components.html",
    "revision": "65b108c09c31637d5af45f19284dc573"
  },
  {
    "url": "zh/plugin/official/plugin-search.html",
    "revision": "aa908c7176e224bb85ad665597bde7af"
  },
  {
    "url": "zh/plugin/option-api.html",
    "revision": "d174958d264eff4cc6d340259a1aaf6b"
  },
  {
    "url": "zh/plugin/using-a-plugin.html",
    "revision": "06152a84b7844cd91158707a40ed724c"
  },
  {
    "url": "zh/plugin/writing-a-plugin.html",
    "revision": "e68e6e30b21ebc3db5e45db087718e79"
  },
  {
    "url": "zh/theme/default-theme-config.html",
    "revision": "681ee464551e73e38828a24b9b517108"
  },
  {
    "url": "zh/theme/index.html",
    "revision": "9ee491f57c827a487f30f0c15bb527ae"
  },
  {
    "url": "zh/theme/inheritance.html",
    "revision": "a72ba4773b4688e2db908b80b1fc21d9"
  },
  {
    "url": "zh/theme/option-api.html",
    "revision": "3508128b865ef0677d316fdf94f5a0c2"
  },
  {
    "url": "zh/theme/using-a-theme.html",
    "revision": "3d15989b3f45cd4b0f147146d0341001"
  },
  {
    "url": "zh/theme/writing-a-theme.html",
    "revision": "5ced8a500f1d6985add8f9a42a24bcb1"
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
