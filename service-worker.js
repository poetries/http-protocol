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
    "revision": "92fc782c978a4e281d4b3bbe9505c000"
  },
  {
    "url": "assets/css/0.styles.b675c6e7.css",
    "revision": "d1fb359462d1c5c359ca662041617430"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.1a4fd81e.js",
    "revision": "3fc68e05175f41cd4b91134b598c2634"
  },
  {
    "url": "assets/js/11.9df38c1d.js",
    "revision": "cb8ace9336805d2e14d0b64af701a06d"
  },
  {
    "url": "assets/js/12.8c02302e.js",
    "revision": "5e4648db53d2343a4d7e2a343f9c2334"
  },
  {
    "url": "assets/js/13.1b41a4b4.js",
    "revision": "1e2f8f5c59e714d30c397f7b06f87f08"
  },
  {
    "url": "assets/js/14.90547274.js",
    "revision": "439d72d6cb9059ffa6e31bd9bcf9d639"
  },
  {
    "url": "assets/js/15.8962bc20.js",
    "revision": "aed4156d9accea77dff55b2f632667b4"
  },
  {
    "url": "assets/js/16.2722bc6a.js",
    "revision": "e6ff5c8034cb959bd258b72a07c26a08"
  },
  {
    "url": "assets/js/17.df8a2743.js",
    "revision": "9d811b3dff4155246a722c3e6d646135"
  },
  {
    "url": "assets/js/18.bde6d342.js",
    "revision": "b331d52851a1045c38f2aa79d1597a69"
  },
  {
    "url": "assets/js/19.4d443996.js",
    "revision": "9ed915d2e87c0bd8204cffd434041da0"
  },
  {
    "url": "assets/js/20.935291d4.js",
    "revision": "ad93864f8188b2b7da33b157795b938e"
  },
  {
    "url": "assets/js/21.2c7d5f12.js",
    "revision": "40056e7e7ad76e1b750dde6f376406b0"
  },
  {
    "url": "assets/js/22.02fbf24a.js",
    "revision": "af048a81679f07702024492f0f6b661d"
  },
  {
    "url": "assets/js/23.a3870d7c.js",
    "revision": "1de6a9c0522208d65dad8431d5cd122f"
  },
  {
    "url": "assets/js/24.8ff6bc93.js",
    "revision": "0b56299346f5c1bde338cc4af6d16e05"
  },
  {
    "url": "assets/js/25.440c53f4.js",
    "revision": "121efba2a9b72ae4d5b1b543aef849b8"
  },
  {
    "url": "assets/js/26.a7d1f2b8.js",
    "revision": "1fda51975f633d93064db673e9628ede"
  },
  {
    "url": "assets/js/27.ed248eac.js",
    "revision": "e7417562fc5abc88243fef05bc3797cc"
  },
  {
    "url": "assets/js/28.2dd02504.js",
    "revision": "f66eed206db172575dc517acabcdbcb4"
  },
  {
    "url": "assets/js/29.c8cdac1f.js",
    "revision": "57ab508e9392d7901e05180b4fa26d0c"
  },
  {
    "url": "assets/js/30.19b569b8.js",
    "revision": "0a47c1294a81a02ae3d5563ecde88132"
  },
  {
    "url": "assets/js/31.876b77c3.js",
    "revision": "835f9fe90a2da3825bdefae24a17f09a"
  },
  {
    "url": "assets/js/32.f3ac294b.js",
    "revision": "8ba8a2829d7ff583ce72e736e68b1efb"
  },
  {
    "url": "assets/js/33.fcd0c437.js",
    "revision": "cad448241fa0e9b5e65f602997bd64f6"
  },
  {
    "url": "assets/js/34.ca083c31.js",
    "revision": "f2458512ef75db0fdd32a37c7f32ead0"
  },
  {
    "url": "assets/js/35.220afe2a.js",
    "revision": "ecd3804cede6dad3ae733bc490b889c3"
  },
  {
    "url": "assets/js/36.68b3b6f6.js",
    "revision": "bc6f2b04220a52797cb642efcad54eb9"
  },
  {
    "url": "assets/js/37.895746b0.js",
    "revision": "1c73de35ba290dcbd17c81f412f6fba5"
  },
  {
    "url": "assets/js/38.10c1637e.js",
    "revision": "df425514be257e3d26ef0107fbb5ac70"
  },
  {
    "url": "assets/js/39.e77be0dc.js",
    "revision": "f3b18b49fa353702cd8a6608ff73d0c0"
  },
  {
    "url": "assets/js/4.7a93d0ed.js",
    "revision": "8fd3478985436ebe48cbbda8503d87a4"
  },
  {
    "url": "assets/js/40.6c45c829.js",
    "revision": "8518094cbb1b07c4d80349ea60a2beb8"
  },
  {
    "url": "assets/js/41.72424b73.js",
    "revision": "6cdf674c2ae3ae1441c638aaf91b1eff"
  },
  {
    "url": "assets/js/42.d74f90e5.js",
    "revision": "65c1ce91ed3439cfd227fa7a84019804"
  },
  {
    "url": "assets/js/43.63b1c5c9.js",
    "revision": "c46fb771e521ded85911c025e4853f8a"
  },
  {
    "url": "assets/js/44.93aae44c.js",
    "revision": "31fe06732413563e52a8ce3f13edba0a"
  },
  {
    "url": "assets/js/45.a17215c3.js",
    "revision": "61a43c15c0fd540ebdba4a28b9de1d14"
  },
  {
    "url": "assets/js/46.78be481c.js",
    "revision": "d9978d50fafd475f467954878692da5f"
  },
  {
    "url": "assets/js/47.6a48ce04.js",
    "revision": "ac4ebde032506a3d8db3bd484a1089c8"
  },
  {
    "url": "assets/js/5.811674b8.js",
    "revision": "e0149158706c19960090d8221939a2d5"
  },
  {
    "url": "assets/js/6.ebecd21b.js",
    "revision": "8a56f5e4ade606a24b5f00a2086ee716"
  },
  {
    "url": "assets/js/7.1fd81328.js",
    "revision": "55e2561acfba4abfadcde86fee7efee1"
  },
  {
    "url": "assets/js/8.225ea378.js",
    "revision": "03c0efcbf0607f84cc29a680d3bdeff9"
  },
  {
    "url": "assets/js/9.960c6d15.js",
    "revision": "62c7f42745b28994a6e79f479d15e891"
  },
  {
    "url": "assets/js/app.0cce05a9.js",
    "revision": "559a1298ce5fd40797226aa8d538be23"
  },
  {
    "url": "assets/js/vendors~docsearch.15b7b07c.js",
    "revision": "69ea857ead9c28cfe8cba41774fd9594"
  },
  {
    "url": "assets/js/vendors~notification.521adeb0.js",
    "revision": "af4af765ced5252707d9aed3af0f6fc9"
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
    "revision": "85b159813cb3ef8c6ac7eed81f6eae51"
  },
  {
    "url": "logo.png",
    "revision": "736ab2ad735e2b92e0b74ba0ca36ca7a"
  },
  {
    "url": "logo.svg",
    "revision": "193a730d0b1344fdbbbcd2c9cd733edc"
  },
  {
    "url": "notes/advance/20-对称加密与非对称加密.html",
    "revision": "27cd5901563fe5baa2511acee63b1142"
  },
  {
    "url": "notes/advance/21-数字签名与证书.html",
    "revision": "f680dafae390dc5df80178f06dd864e1"
  },
  {
    "url": "notes/advance/22-TLS1.2连接过程解析.html",
    "revision": "cec124cdbdbce7f8fbf2efc498b59384"
  },
  {
    "url": "notes/advance/23-TLS1.3特性解析.html",
    "revision": "69464df276398ee5db4b3cc29e2a4ccd"
  },
  {
    "url": "notes/advance/24-HTTPS的优化.html",
    "revision": "b0da24a11dcbce147ede1405f9457cc9"
  },
  {
    "url": "notes/advance/25-迁移到HTTPS.html",
    "revision": "6ea051f49d8b26027ffdd5ae79b0b46f"
  },
  {
    "url": "notes/advance/26-HTTP2特性概览.html",
    "revision": "cfe89a49b9d975e58f35e2c059c0eaba"
  },
  {
    "url": "notes/advance/27-HTTP3展望.html",
    "revision": "4e1f88c673a028c98e1a6e4f027f0978"
  },
  {
    "url": "notes/advance/28-迁移到HTTP2.html",
    "revision": "d41ef34b3d3480e903cf246ee8f15da5"
  },
  {
    "url": "notes/base/01-HTTP的前世今生.html",
    "revision": "93ed00134c88b672737054720c60308c"
  },
  {
    "url": "notes/base/02-HTTP是什么.html",
    "revision": "8c478774480d7edb829d41e8ab10372a"
  },
  {
    "url": "notes/base/03-HTTP世界全览.html",
    "revision": "2cd8b80302e5487f67731f9bccd12bf9"
  },
  {
    "url": "notes/base/04-HTTP分层.html",
    "revision": "75157bfd445c2d259b26d41cba5cdb90"
  },
  {
    "url": "notes/base/05-键入网址到回车发生什么.html",
    "revision": "701e7cb71c06639f47f85c372d3a4990"
  },
  {
    "url": "notes/base/06-HTTP报文是什么样子的.html",
    "revision": "1fbf42cd349185d5ea67fae1eb3b4ce8"
  },
  {
    "url": "notes/base/07-理解请求方法.html",
    "revision": "f335c51ecbf02c1cb8baa2ffe27e60d7"
  },
  {
    "url": "notes/base/08-URI.html",
    "revision": "215dca88278b27323ea2dfdab927a238"
  },
  {
    "url": "notes/base/09-响应状态码.html",
    "revision": "ec16d482fd6310df7601691a76d9c617"
  },
  {
    "url": "notes/base/10-HTTP有哪些特点.html",
    "revision": "7732b6453556bdb6eb2793651073a66b"
  },
  {
    "url": "notes/base/11-HTTP优缺点.html",
    "revision": "e29c172ab0232e564b971bbb701301b9"
  },
  {
    "url": "notes/base/12-HTTP的实体数据.html",
    "revision": "36713887217e613fdc6b5c6b6dd47d83"
  },
  {
    "url": "notes/base/13-HTTP传输大文件.html",
    "revision": "4150fee36da54813ac52c2746e354cd3"
  },
  {
    "url": "notes/base/14-HTTP的连接管理.html",
    "revision": "fe15109a148975182287ce5bbc0efb41"
  },
  {
    "url": "notes/base/15-HTTP的重定向.html",
    "revision": "da35fac30a2e13c985de39468241e863"
  },
  {
    "url": "notes/base/16-HTTP的Cookie机制.html",
    "revision": "64a0dfc8cf75c092219512ddc16430ca"
  },
  {
    "url": "notes/base/17-HTTP的缓存控制.html",
    "revision": "df23e64a9dc50a6b454b2a5f42ff730d"
  },
  {
    "url": "notes/base/18-HTTP的代理服务.html",
    "revision": "9dce38ca05ac435ee214473a0833e598"
  },
  {
    "url": "notes/base/19-HTTP的缓存代理.html",
    "revision": "07ff742cb2f90f0e899e4efa628f46ef"
  },
  {
    "url": "notes/extend/29-CDN.html",
    "revision": "058d8af20c6db9ab8fe5c4d02dd8766f"
  },
  {
    "url": "notes/extend/30-webSocket.html",
    "revision": "de65b0295b54b605f528ddbf4448b44d"
  },
  {
    "url": "notes/extend/31-HTTP性能优化上.html",
    "revision": "afe5d401df7af5b1f9eb598b1cfe707f"
  },
  {
    "url": "notes/extend/32-HTTP性能优化下.html",
    "revision": "ec18e2fe5ba9817af63b7e0155f20103"
  },
  {
    "url": "notes/index.html",
    "revision": "caf8620b53000d60265765d92fa89ffb"
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
