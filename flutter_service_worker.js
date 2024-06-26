'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "438dcdc305d7b50447573ddb1ca9ffc1",
".git/config": "e477318836fc0890ed7b92e04815d234",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "8eed50e72d8d38bd7d7dd74854a0c3f6",
".git/HEAD": "db39470bb7c3af3c215d8edd89b4514e",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "c1685eacf3c0005bcf7ea7468df55ac9",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a057d4e09d234722a956e63a6195ab28",
".git/logs/refs/heads/main": "e5bde42151b483bbbc027c0b662548a7",
".git/logs/refs/heads/performance_test": "53c8a74ca024361ba00dffd6c8f8ce65",
".git/logs/refs/remotes/origin/gege": "0b8b7e4b2c709017805d964d17ac1966",
".git/logs/refs/remotes/origin/liars_dice": "b3aa181897420e4b448aab55da51bdb4",
".git/logs/refs/remotes/origin/main": "67f2dc07937ddc0490e255e2789347a2",
".git/logs/refs/remotes/origin/party_planer": "67f2dc07937ddc0490e255e2789347a2",
".git/logs/refs/remotes/origin/performance_test": "f71db1e449e150d2e8bc3a34a45bbde9",
".git/objects/03/a6e8749030a68424f722dad2bcb6628c7dc43b": "c97978c41b6eea5c0304893bea243d12",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/12/9b3c643127c532c3bc66c5a04668da058a9516": "b6d4fb52ad9fee641a118e8428627e72",
".git/objects/15/175d16a956b69384badad96ad6b88921d7d99c": "ee16ff06abf4e30943d711ce5a30810f",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/16/a2b6804d32a5d1f8370f270ac2c536b4215032": "368e85a0980e32ea11f8bac29b9eeb4e",
".git/objects/18/c0b6e9cce3da7869df769bf1d7b006bdaf3f59": "3bf46df5af6d78e29a4acebbf1566eda",
".git/objects/1a/8cbaf9e73cf8170b9db0f835eeeb61e4803d8f": "be2a3debe08da3abdbaea7ecefcd80a1",
".git/objects/1d/3563a453a9bb86ff93c239f849ed4fc9aa0fdb": "28e0fbfc070d6e6558bf358114db1edb",
".git/objects/1d/90d5df15addd343fca125b4bf0dcf269745543": "2ef59161d202fd2e5843f0f50d7d8cb8",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/22/e2506357a2b59cd9276611bd6dbd64c40e9bce": "7c00d1fcaa75033c087ac2582dd4858d",
".git/objects/24/eab47936caa6394f9790481c0aef00bdf8a678": "2a3d387ddb593afc799e40ef4715c566",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/3a/4240baba12fe884ca36681a1aa7e294d38cf43": "e8b0c5fa5f412c89fa3f4b7f39f660b1",
".git/objects/3e/068924aeb781d9f33f80b7c2b7468e015f1f87": "20267cf5f037210f67c515edfae2db67",
".git/objects/3e/8fc645721382f211cfb00bf8e6d6ac822886f4": "9740305c5d238e53e28cb5c9daf6751a",
".git/objects/3f/4227ad7ce0d9532eca528261dd577341978087": "d367cbb1f0e0ae74bac7e23a80c80998",
".git/objects/3f/6d4205bfb145ccfd2b76c2f6b81c00708ef0a6": "c6839d621546fd69525d27b9566910ca",
".git/objects/3f/7636b1ad3274bcc9f51e2c0b909743fe5b3958": "8ec0bf21549310a26416ebb4ea3c74a7",
".git/objects/43/67cfb9d76c5bf3ef14d1ec1d0fe566f6811af3": "2fcdf01563ad8783d0e518b4d4eb559c",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/c066d0afcad0f55fb18966cc3724f58b1f5b4e": "20d0d84b5f205fb0871aca06758efe12",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/52/e4df79e6325731ea7bb6a5e39e3396ed280226": "13c04a5238e9e54d9770ead279def9f9",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/56/edd9c211940d4509241cd08867edb99b7b1ead": "4f9d1dd45deee2ccb540a26fd918608b",
".git/objects/56/feddb0c5675f3d696a17a14d6caf12d198d34f": "3c0f4f5cecd6ce9fe2a30edd378e5f10",
".git/objects/57/32530780cb4c168f4ff4f8b33cce3dc571defc": "df4e47db62256c21b4850cebf09c7296",
".git/objects/5a/7b05e1be311772247124911182fda78fde2cec": "d38bfbb93663df272dc4920186bd1040",
".git/objects/5c/f10808c9f96fa5c3ceecb2c8c7e48b3cbc829f": "d1c4376e0ff81875da24db14105e1f6b",
".git/objects/5e/ce3d5a883608d462cae327cc1cbf73f642ba8c": "5dce6c5688cdb92b3337e27f16cad372",
".git/objects/61/bc4ed48994e2e2779c29061644a0d417311584": "b7462184e9f58d3ff9fa3c1fd6a00bdc",
".git/objects/68/57b4021e8c9e83623b2993bf6cb01109840319": "affcbc9cf3a905fe4476bc4f0f2aa5dd",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/71/7809363ed19bdd7e1d78f6e421e40a96bc29e3": "9414a3044cb191cc3f57340f57c3dc93",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/7d/8f9936167b33f7ad01ef7fdf140f3dcceb7705": "0999dc5b2eeec96a067c4410ba739d6d",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/85/c2136d59f5f21e42dfd4e48ca2411ff10ac9fa": "cf8026ddac2d4242c3d6a1de56755dd3",
".git/objects/86/d37be8c0300b2674c850d16d94ff9c398f86f8": "7df8bbc079ff0a5109b04f16277b3146",
".git/objects/87/4db9c2ddd38c120e66ce046e310995cae81ac0": "c2ec537b80fce0802dc2c3147ba8609a",
".git/objects/88/915bdffe9e79291d0578484c134601305a761f": "de64848241b6a7c8d5fd35030aa354d5",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/e4681a5d2f60c695c220c3f44c1fcb7750a2d6": "05c996ba141f103ae2aab2f1521c04d2",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/95/45a89d8968ec05cc6eeca3d4cd298af022f76d": "90c23c3ebf2475333baa899e49e7f4e4",
".git/objects/ac/557e562824cf6319a0c88055d5d16f3ebe96c1": "cdc2f71c315ec53bfc5e4f529799b202",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b4/662426113872655172cb7613c6e18d81020a34": "ae4df35281962a6c094ed2af663652a5",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bc/d5df688fcb808efffb55d2b4725254015eb47a": "1ebdcedc23e52f896363271e08e2ee69",
".git/objects/c0/4c9fa283cd2fc227821f0af5d3d60abdfd5de8": "67770205fb1a8eb7f15d0c2038a7f1ca",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e8/1cf331a2bff09071892ef028c4b4bf0267cea5": "527272567802f775bb4d96d0d88eadb1",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/fc7813293385f3244113681eaf5a7191314688": "d7cdff486a12bc8366e6e57b71150db6",
".git/objects/f0/aeebbca7edafa9b84f6c4ed2a208ca454b7917": "b04df1adce626844a5af2e40dabd8fd9",
".git/objects/f1/cb00f8bae30f095cc56233f2c110a1314c68fc": "f2dc4b0ee7fb8d2d1517fe05650a1e8a",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/e5551c78da26238e6bc1cf8dd592ee71ba14f8": "31ee97c5546f6b774ae4738f039b33eb",
".git/objects/fd/e51e9a28397397ab1524d6320f0ec9e54ca29e": "91d6ca08537a7141a6860acbbe5e7201",
".git/objects/ff/a8382ae509b126d77100989d6560724225b3f1": "760ab3c6ccb59984723c0a3ebcbe322d",
".git/refs/heads/main": "72db7b11979d1f201bd3cf5cc9f25a23",
".git/refs/heads/performance_test": "d1aecab87023f34a0e9cda93dfd4872b",
".git/refs/remotes/origin/gege": "f0fdb230e90f77d942b001e960139a82",
".git/refs/remotes/origin/liars_dice": "b8c9785c1f2ad8d01f11c3e4712b4595",
".git/refs/remotes/origin/main": "72db7b11979d1f201bd3cf5cc9f25a23",
".git/refs/remotes/origin/party_planer": "72db7b11979d1f201bd3cf5cc9f25a23",
".git/refs/remotes/origin/performance_test": "d1aecab87023f34a0e9cda93dfd4872b",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "8ea08ea2444cc58ec5807fd7669e488f",
"assets/NOTICES": "0a8d05c8b1869580511ed2082285c3f6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "1c0d9c26d773153e28f3643b6c17ae8f",
"/": "1c0d9c26d773153e28f3643b6c17ae8f",
"main.dart.js": "42b9296f6a087861134d70988fc2b16c",
"manifest.json": "65d9044254593c7181140340045ee654",
"version.json": "17eac4ea3b61624befe97dc71f915a0a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
