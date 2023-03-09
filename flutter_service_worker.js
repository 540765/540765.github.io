'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "1dd4e77f5c2c59dab6d079bc6015814d",
"assets/assets/animations/register_success.json": "8e0b6e90fba17ed1226596c19a1bf39c",
"assets/assets/animations/success.json": "2c75fa1a277946797bde8bb2e2d551ed",
"assets/assets/html/privacy.html": "e860dc16251444675c6493d135e4d4c4",
"assets/assets/html/register.html": "84a175a94d016429bdccdc885cf08be3",
"assets/assets/images/2.0x/fav_adventure.png": "817641fdde603ca0c29b614635f96a1d",
"assets/assets/images/2.0x/fav_application.png": "6c3f4ede83bee5c4382bba4a2010169c",
"assets/assets/images/2.0x/fav_art.png": "7262de80ef9156b9715b9f3f50d46035",
"assets/assets/images/2.0x/fav_fiction.png": "62f26c6ba1390a75bf845297dab55090",
"assets/assets/images/2.0x/fav_history.png": "c2023c771185f946271e4d1c0c83aea7",
"assets/assets/images/2.0x/fav_literature.png": "91e88d0acd2db11d9556f1ca9a0918d8",
"assets/assets/images/2.0x/fav_management.png": "7f49282d288d803ca2688feebdf09a6a",
"assets/assets/images/2.0x/fav_natural.png": "498eaef1e3de3811fd130ebf9dea06c6",
"assets/assets/images/2.0x/fav_other.png": "adca1f5f4c87e51d7b3e8439c10f3ca0",
"assets/assets/images/2.0x/fav_philosophy.png": "4f934ea338044233a6c7140b37659e8a",
"assets/assets/images/2.0x/fav_religion.png": "3b75d5ee03a0634391ead853ac624b80",
"assets/assets/images/2.0x/fav_society.png": "812460dadb7dce926d0f2239cd52e9b8",
"assets/assets/images/2.0x/fav_world.png": "c03cc8eabf6f6addc877cf73c6b0ec19",
"assets/assets/images/2.0x/login_logo.png": "213badb04e664a42d65c918726c4ecfd",
"assets/assets/images/2.0x/op_booking_header.png": "2221d6a328d5548aa6037882cc1115ae",
"assets/assets/images/2.0x/op_empty_data.png": "98a78bb19b53685e76e93d4afe5d7969",
"assets/assets/images/2.0x/op_main_header.png": "dce712042f07c54126e5395a9fc262a9",
"assets/assets/images/2.0x/op_no_network.png": "933fbafbf754332753b3101bb6e8f5fe",
"assets/assets/images/2.0x/op_point_header.png": "a589a699bca11339f118f42e0a47a22c",
"assets/assets/images/2.0x/op_user_header.png": "4e34fad891e2237c8a432d55e92ab8d3",
"assets/assets/images/2.0x/op_user_point_bg.png": "78261f8dfde50d063a24ec7cf364f5c2",
"assets/assets/images/2.0x/splash.png": "e2faea3d7554dd825d828162495bd908",
"assets/assets/images/2.0x/theme_bg.png": "9b82616a392d10b1b2c64fdd7bde0789",
"assets/assets/images/3.0x/fav_adventure.png": "ab1ff134f93376f616394776bea294b4",
"assets/assets/images/3.0x/fav_application.png": "85741bff4f94010f3efce4ff2eeb1080",
"assets/assets/images/3.0x/fav_art.png": "1f7d487576e54cf1b4dc0d4b95a72fe0",
"assets/assets/images/3.0x/fav_fiction.png": "dcea07ad97915c86d2dae140bb59bd24",
"assets/assets/images/3.0x/fav_history.png": "bc313cf632ef8a7c3524c648eb47a787",
"assets/assets/images/3.0x/fav_literature.png": "3030be4c0dc8f4b48fdd477f68884327",
"assets/assets/images/3.0x/fav_management.png": "ae1caf9e004a9d50ee9190c08d72c89e",
"assets/assets/images/3.0x/fav_natural.png": "e3503d2617c2763e5b15be2c1fcc2997",
"assets/assets/images/3.0x/fav_other.png": "59160decd41cb1737ed74ac7c46cce07",
"assets/assets/images/3.0x/fav_philosophy.png": "079e5aac018e4768491f710333fe3da9",
"assets/assets/images/3.0x/fav_religion.png": "8812e9f424bd3fe059a413886936c251",
"assets/assets/images/3.0x/fav_society.png": "e343c738d5122694483929bc627c6ed7",
"assets/assets/images/3.0x/fav_world.png": "4ddbd70668a9e1792868f7d169b9b922",
"assets/assets/images/3.0x/login_logo@3x.png": "60075cea34e6a2f5de811b7f31dddb59",
"assets/assets/images/3.0x/op_booking_header.png": "ef309d90614470159ff7fc543816f7c2",
"assets/assets/images/3.0x/op_empty_data.png": "b7f1999b1f7fa633a0e5fbc7e6be6b3a",
"assets/assets/images/3.0x/op_main_header.png": "d6ce91e4ace3f8aaa7a3eadbfbeb2e5c",
"assets/assets/images/3.0x/op_no_network.png": "7ed3ce37bfa25d5d0fe4e28a1b65738b",
"assets/assets/images/3.0x/op_point_header.png": "31c2b4eed8dd0e1faf47983ed9aa596e",
"assets/assets/images/3.0x/op_user_header.png": "b1329582d8d0af9c3f590bed511f4a78",
"assets/assets/images/3.0x/op_user_point_bg.png": "a772a973ee969c2b873a880514d7ebee",
"assets/assets/images/3.0x/splash.png": "d47883dfd30627eea7369d9866908a75",
"assets/assets/images/3.0x/theme_bg.png": "05ca960d2568f8f31af5b22cd5c0443b",
"assets/assets/images/default_avatar.png": "e37a0360cb22c46f47c10ccdd957a13d",
"assets/assets/images/fav_adventure.png": "9e6282cfcfb5044eed147aefa6e545d9",
"assets/assets/images/fav_application.png": "77c77001b2fb4b319dddafbbb141dc22",
"assets/assets/images/fav_art.png": "494113b1ada45b639914fc2de3323719",
"assets/assets/images/fav_fiction.png": "4bbdc0a4e5d6f61347919373816cb96a",
"assets/assets/images/fav_history.png": "e4de14b0fd7065a3b55447643628fff5",
"assets/assets/images/fav_literature.png": "119b1c7948ecde6869de15df8c256576",
"assets/assets/images/fav_management.png": "bea0f703c645c48cddb114fa1e87abd2",
"assets/assets/images/fav_natural.png": "6936b3e0d9e1424cfe03b595a995cc97",
"assets/assets/images/fav_other.png": "de6f752fa3f82b0f8013d9250b664cc7",
"assets/assets/images/fav_philosophy.png": "b4ea879657f02c62789b667ecb3a3f40",
"assets/assets/images/fav_religion.png": "394ec624ce678d7269250098e242d146",
"assets/assets/images/fav_society.png": "695519502fec9d59d2b87e46ce19912f",
"assets/assets/images/fav_world.png": "f002ff75090c27d77ad8308c0ef6f509",
"assets/assets/images/launch_icon.png": "8149e5b278c5b501495e6ed0079a0380",
"assets/assets/images/login_logo.png": "9f1bae389b268d07da22420f1f27dcba",
"assets/assets/images/map_marker.png": "e9547557e748d7628521cbe937b2bc8c",
"assets/assets/images/map_marker_selected.png": "d40c90f03f241d422d3d327e13c9ef8a",
"assets/assets/images/op_booking_header.png": "daef924896daf1385bc737b504e2de53",
"assets/assets/images/op_empty_data.png": "5a51ad14cd6d0db3d3394efe9de656dd",
"assets/assets/images/op_main_header.png": "d6b5f00bc56a192248b1f7616f1a7e46",
"assets/assets/images/op_no_network.png": "f105fcaa12ced28ead34f81b513d3468",
"assets/assets/images/op_point_header.png": "b1b336e44717f9a397075b5544125871",
"assets/assets/images/op_user_header.png": "65f493ec010ea074244dd0017478fd1e",
"assets/assets/images/op_user_point_bg.png": "7dea00bbf8610d949da070f688db1980",
"assets/assets/images/splash.png": "0aff58c06a1d69dc6b30c8fec5f80cd1",
"assets/assets/images/theme_bg.png": "bd55a16665653f3c070ad7ee5acbf202",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "e1587221675d2dd286ebbe10aa2e83d1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/map_launcher/assets/icons/amap.svg": "00409535b144c70322cd4600de82657c",
"assets/packages/map_launcher/assets/icons/apple.svg": "6fe49a5ae50a4c603897f6f54dec16a8",
"assets/packages/map_launcher/assets/icons/baidu.svg": "22335d62432f9d5aac833bcccfa5cfe8",
"assets/packages/map_launcher/assets/icons/citymapper.svg": "58c49ff6df286e325c21a28ebf783ebe",
"assets/packages/map_launcher/assets/icons/doubleGis.svg": "ab8f52395c01fcd87ed3e2ed9660966e",
"assets/packages/map_launcher/assets/icons/google.svg": "cb318c1fc31719ceda4073d8ca38fc1e",
"assets/packages/map_launcher/assets/icons/googleGo.svg": "cb318c1fc31719ceda4073d8ca38fc1e",
"assets/packages/map_launcher/assets/icons/here.svg": "aea2492cde15953de7bb2ab1487fd4c7",
"assets/packages/map_launcher/assets/icons/mapswithme.svg": "87df7956e58cae949e88a0c744ca49e8",
"assets/packages/map_launcher/assets/icons/osmand.svg": "639b2304776a6794ec682a926dbcbc4c",
"assets/packages/map_launcher/assets/icons/osmandplus.svg": "31c36b1f20dc45a88c283e928583736f",
"assets/packages/map_launcher/assets/icons/petal.svg": "76c9cfa1bfefb298416cfef6a13a70c5",
"assets/packages/map_launcher/assets/icons/tencent.svg": "4e1babec6bbab0159bdc204932193a89",
"assets/packages/map_launcher/assets/icons/tomtomgo.svg": "493b0844a3218a19b1c80c92c060bba7",
"assets/packages/map_launcher/assets/icons/waze.svg": "311a17de2a40c8fa1dd9022d4e12982c",
"assets/packages/map_launcher/assets/icons/yandexMaps.svg": "3dfd1d365352408e86c9c57fef238eed",
"assets/packages/map_launcher/assets/icons/yandexNavi.svg": "bad6bf6aebd1e0d711f3c7ed9497e9a3",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "bbcf464d4d50c0438f58462f1959fb1f",
"/": "bbcf464d4d50c0438f58462f1959fb1f",
"jsQR.js": "278d39742571e397e44035774c2197d4",
"main.dart.js": "a4ebd3591ca76c6cbdb34f5e87334041",
"manifest.json": "397a1ecbc03b226512fb76edaa4f63cf",
"splash/img/dark-background.png": "d47883dfd30627eea7369d9866908a75",
"splash/img/light-background.png": "d47883dfd30627eea7369d9866908a75",
"splash/splash.js": "f6ee10f0a11f96089a97623ece9a1367",
"splash/style.css": "07c0ab0f3738428900317396b6757b0a",
"version.json": "eb84e4d24dfae0b78be3e91172b06c26"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
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
