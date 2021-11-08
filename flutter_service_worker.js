'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "b9d779299b9b8df580850f5e82397e44",
".git/config": "caacfa2da699d916c0b3bed560d87588",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "8cdf88dc9f9e89e9497d44da17b52729",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
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
".git/index": "609bb154270de9013cf7d14e2d150d75",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f1fc8e4e079a7feaf656d0f3e0ccd04b",
".git/logs/refs/heads/main": "ebe39cb1d995632f186b3117bca1897a",
".git/logs/refs/remotes/origin/main": "621fe516acf88327bb7abbe35d78e380",
".git/objects/03/cf151d7def58655b3e4d164265b17c5dbaef95": "e1664f2ca62d3a9ca94266039d1b8f86",
".git/objects/07/f086fce12939b0f6a8eb02e709be685fab356d": "9a032f13ff4ca56ebc6149293afc11aa",
".git/objects/09/d70e7414a098cea7f4fa6de2020d6906c0208f": "d448c8f87acc50d80f8256f621e99933",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/23/fa1441ceac366b0022a69caec1d15e9217107d": "dc93446af8d694627d39f8282d4aaf4e",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/35/73ef45a4760c147a87d700c104e855d728fc81": "969db6869e00b16782d6497b6c298b20",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/5e/fa7b15c68ed492f30dd20ddda55498919b1a9c": "24d601479a1bf6507ba654237950b53b",
".git/objects/60/6946d7cca6f48c3194b61f13b613ab8c86ced9": "e45ead5b3d9a5c3704371a60e31089d6",
".git/objects/63/2aad3e3108629e7fd3777473e05c7dbb560b71": "84920ec198e44a82791554728d9f97cc",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/92/94decfbce1e148993ffbc5614c06335c7a34d1": "766446087fb66c8a02ab755512334134",
".git/objects/a1/2457bdb2abeb05e28572ca2353cf585fe786df": "c166456bbfefb8e7fd815111f0373f34",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ae/ea1abc49c6e06261762b04e222d60699b47a07": "7d68b3cb30fd48a145d9ef755caae9bd",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/bd/91431659e703054bec1c784eb3af6784a60023": "2e6438f8ad68c1f51a4cb21ec9b114c9",
".git/objects/c0/9a522fbaf6a4abc75ff7ef1033c78e83391ca5": "0cf376e6673d7def1eeadf78cf3469d9",
".git/objects/c6/d5481ad7151c0be15b797cc538fb008986c833": "cebd5f6e4119349b0227d66cc86cb587",
".git/objects/c8/0f2045fdc8f7e852369bd6507f9336cc6b845b": "4b9453daad2c9f0dd704955a2fdd25fe",
".git/objects/cd/8e031a9230b432363204ee927cd5d5941839bd": "97a1a32b711f1e63d7d8ada03a7dc251",
".git/objects/d9/402da287c01b409a3b7079d73d4ba27cd5024d": "9ad050fe8361730829a333ee509f8593",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e5/b4017b70a4e64f8887892f6c6ed65a7ff09277": "76020a284753c42098ccb315b70e9dc2",
".git/objects/f6/24d55d8f3679bab90efb4360693666683eb2e1": "eb96f84e934465c323ec9fff4692d548",
".git/objects/fc/82093eb40dfe6bed27e302c7bf86cfd238bf70": "5e8b84ab96e959fe0a5c32cb1df91cfa",
".git/refs/heads/main": "ddd9d100c6a23b379d00ef59529890cf",
".git/refs/remotes/origin/main": "ddd9d100c6a23b379d00ef59529890cf",
"assets/AssetManifest.json": "4bb95cdb7418af8eae997170d7ef004e",
"assets/assets/images/people_007-blk-f.png": "90ddc35c40f68a1efb5d261c0bdbcfa9",
"assets/assets/images/people_007-blk-w.png": "8f87acc88bb313b4db9a5f025987b52b",
"assets/assets/images/people_007-blk.png": "7874125b7d780aac4bdbfdf8b32a71be",
"assets/assets/images/people_007-wht.png": "41cc9bf6f9f5a96054864823087521d3",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "f1e06427f6866f9a321e0fe8c8085a37",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b37ae0f14cbc958316fac4635383b6e8",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5178af1d278432bec8fc830d50996d6f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "aa1ec80f1b30a51d64c72f669c1326a7",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "f540db429a1dc0389151505b23e10cb7",
"/": "f540db429a1dc0389151505b23e10cb7",
"main.dart.js": "86574e3cf74630420193ee8abd8679d7",
"manifest.json": "cac4d5c13d68109e5f926abd01519096",
"README.md": "54a69b0dbf9e7889a61dce138d4045b2",
"version.json": "e6af4538251282cda9d488aa28386db2"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
