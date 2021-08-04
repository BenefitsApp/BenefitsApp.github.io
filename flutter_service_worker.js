'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "5841af25c604855409fc52cabe606f26",
".git/config": "c0662e8be6aabfcc8a06dc95c9597201",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/index": "4bbd2fd1bb9d61a43e7889765cf0f2a7",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "7d6ac8c6a03cefee4479bae873ac1643",
".git/logs/refs/heads/master": "7d6ac8c6a03cefee4479bae873ac1643",
".git/logs/refs/remotes/origin/master": "3802d63ac68d00bf85b5be2d006d68cc",
".git/objects/05/283ae7dfea0a75f46a8c96bac7b2d456a4ead5": "09b5254ff1f6ea62a8c83318af2aae39",
".git/objects/0b/51ae864e67e73719455784e5b0f3e9e55c0773": "51c3e49ee310412d2d83588bd907a878",
".git/objects/0e/176f66270856c1fc9393f94f0aa908ac283dcf": "310431bf50936f5505ba3123c556a5d3",
".git/objects/11/0875b5c3a1f711c45856f433561aeffff6abf7": "8656334b72379f119bbc8bbc0b21ecc5",
".git/objects/13/0ac3af0ad58ce766354d1bc8571037bffcd847": "221e6fb1bdf9eb233cce90e3483fbe9c",
".git/objects/14/40a26c49a2a186f251427a25cf3793afc047d6": "19c1f6cff9a3e99ede4b369351e0b8f4",
".git/objects/17/d39f27727c2a852461391eb71209913508f314": "a8494767d229fe34494bb3661c7c219e",
".git/objects/18/2aee8ecd0ed836f6407de97840ad0c9ae47cb4": "331bf305c71f5ea59e5bb6bf030ced9e",
".git/objects/1a/d80b5217c0476ac1ee8d43ec3810e56345fc1a": "f9241e7c202e8bee646afb0bd8622dd7",
".git/objects/1b/c2916d07c00f8adc65384101a26e765d5668f5": "9fef17f0149dd8cd4eabe377e489df69",
".git/objects/1c/82f2fe977e62d88f2ce84ae818fcff682d387e": "6c75d165b0c8a3d5e1e8b66b0c8b26c9",
".git/objects/1c/ab5c109d78b13345d5074abe57f8ca0253a88c": "081622d5cb65d3317649e15b4d9e5b1b",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/25/be7ba167ea7fdf4a67fc5a2985f52ddcd3aaa0": "17ff0a3162167ca3d43559524ca54552",
".git/objects/2f/0246071e3311d53d804be776af02f2cdd9b2e1": "2a0c6c2e528451a9fb51d3c0463b70cf",
".git/objects/31/104dac8e944d382e32c11967d1da7f6449013f": "0e3cd58e83893afca8ce6719dc647ce2",
".git/objects/36/f89377d2c2625125b6d54ef2fe578c63f93261": "592f6c2e71159f34bb5cfc545d599671",
".git/objects/41/56e8bab808d5f163de282dfbcf913123e76f87": "63c75d111ab1a2c723c7da6de3a6fa10",
".git/objects/42/4f4d461ad21acf5e51f5ccd8c994e8a151b915": "05971421f138ac8a34ac1735a6ca802f",
".git/objects/47/0cfb5b1dd04b6955ed2b8f930ad2efef2c7b97": "113c7e716fd752a405cb889725565c7b",
".git/objects/47/b25e60cf5ed949c87513cdb4a0da7228994c38": "7033e0c321579a16aa9a2f6d47f96337",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/54/ee2f729f0c14be54c690003fd0edcdfa52198c": "537aebf22670efa7697f043e40340f36",
".git/objects/5d/080620722c92d64606615c6c977cd15fa36c1e": "d1e234229ee0bc55f96314f5955b6473",
".git/objects/62/d4a91f8520d8b25bed93541caa4a04ebc56bd3": "edbe9657f62f2bb96ec143026b944a35",
".git/objects/63/8b0b640747be92d6a09d079290609589832c00": "c445ea3385ab22ae1dd61aaac26647a9",
".git/objects/64/b7b06412bc00587ee705b45b0f294cc995e57c": "9cb18d24298921cb6205f27722c58db4",
".git/objects/6a/4c71c0366de9a0d0d1961d9127b8898b4033da": "43404e4e2e1599b50cd18d1d6ae81ccb",
".git/objects/6d/730f17bf1b73ced05bb7e796cf2d3173270a19": "49daec94b452b22bd9d180e548a76905",
".git/objects/6e/8ed8aed0cfd3d51f5ab8527e7888af7c13120f": "18c6141fd1890b19175cd186087b3176",
".git/objects/73/47b7310118f2710322bc75e3cf26744f7c798d": "f1f8ad00e3c6f06fca759d0bf7456395",
".git/objects/74/d99d9f927f0d180d2bd003a142fc413bf9e4d9": "9fa5a3eca468b67540bb3c94385eb0e0",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7f/3a246e1bfb802e579e2abd004fdb6799e3a551": "b532c3f859f94de6a9ffcf68cab42e87",
".git/objects/82/f5ab88738686c2742fa77b4d67f0a14684984c": "3426dd12927eb95428b472047b2374fc",
".git/objects/85/0c4670d73422d74e0a50faea2815af2d462d41": "96d23ea0bf153d3b391df0d2c9d41541",
".git/objects/85/1b3e763088424371e9bcddb6b0fcfbc87e31ce": "6bdf609b2276980817f9e56ad3f19cfb",
".git/objects/85/f37113a9ba01e0f8e3e1a913c517819c35972f": "bc4aa033a8758ff4199f3304d06680b2",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/5d59fb72e7425200af692446cd59177084e287": "df8034978203810d809ba0b08f5f1837",
".git/objects/8d/4783bf6a978f9e6be1beafb556a0bf81851255": "38e8c96df1696290d283b1ba45512812",
".git/objects/8e/65741110f7621c18de8244af86f99a8e885e38": "5db139668f1f361cc3eae5f18aff096a",
".git/objects/8e/f8c64d28825afb7e53079ea0ca8c508f923fa7": "2b4f31cd557011016f88af64693e861e",
".git/objects/97/9e9a6d5a895ceb92298f962744b8f4d6fe6e96": "499b37307ac59a1e33c62ec9060681a3",
".git/objects/98/24df0c87e558c8342d3ab6f6cd49898b92606d": "272484e279b8398c2a25f52c43916162",
".git/objects/98/4eea041b8a3b99bd974829875c2c6f2fadcf2c": "e717623e32bfedaf79ee28b717d575ff",
".git/objects/98/aeadb4f7180ed4e1e622cec33c95e0f22adcb0": "b6fd46fc74e163211fd1b718dc42b814",
".git/objects/9a/1418d62d2f6d82c6d906a84db514b7c7cd9bd4": "91ed6c563a35b38398742a26b027000b",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a3/0b1bd8faf4e3b44eb4b542c1935c9e7cd6404d": "e1ec5d2c6589f6f8549c3f07e0e7a579",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/ad/e4138a17993d7d8246f6e2ddd0095ffee65e18": "f34dcde6a11b488739e3420d35fdbb1e",
".git/objects/af/5e3957fb950e8619b9b328d28621037cf80525": "b2562c11db7615bded1c1f617473e74e",
".git/objects/b5/354b51d3326d1dac9f10b2cdde0ae45102da5c": "72b2c084f03710993ae653ff82e379a0",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/eacdcca8f33f8d456931044acfec92a26bfc71": "4416077756214c01362742691601533a",
".git/objects/ba/16decf3bf859e4ccf1600b6e93564624d6b62e": "c0378e4c55ca05c99d2508c22f720777",
".git/objects/bc/d696e5ffb6f28374930ae4f9aab91034869ba2": "b879e740aa575bae8bd9eabc77e62991",
".git/objects/bd/3f1357db532d7f70b40042b217ea6fde89755e": "e4e07ebdfe8b54f4fc3cddac4e38a183",
".git/objects/c0/561f443da04b15587f88de4ac81efb2e2cac4f": "3124d577cec006dc7e356edd2fe90da5",
".git/objects/c1/c516afe016b255b4f688dcc191ab83062202bc": "3611e5002c89371d752aa90f41a4e07f",
".git/objects/c2/f32fbddd0900f0cebb8a04f39e745b061beb72": "ab80a2ee56220a4bc0932725d9f2340c",
".git/objects/c3/09f33ca622d20708e29b28368d43e42220987d": "ea884a4975684c305688a5bb76cd22e2",
".git/objects/c4/4af2a387ce6299eb3d58adb6b28cd5bde2cecb": "7ea2531ce35a3035b4eae8292dfe266f",
".git/objects/cc/4e750ad909b643ac3b5b9722b486b3ccdb4083": "2484746a959e6446e38c9ac67d06f564",
".git/objects/d0/c0c114d09b0d1f05e79438534725bafe1cbcb4": "e46ab774feeb82408849b67e6ac5114b",
".git/objects/d2/7b0a1f431d34ebe770adbfa5949a4e1ab022df": "f05d056e0da4bd8713e04b47a0673b89",
".git/objects/d4/22bd94ba65ebed542afe5e51f6a5dc918c4fc1": "ca784a3789386ef739c5d4a7d51ee054",
".git/objects/d9/2e84b2a817b97a8d45fb79595d38554df3fe13": "f6c4ac1a579bd4e2a5fa80394d66d32a",
".git/objects/d9/36d9f20ea5d9f1f1648b49673af213143c6530": "83497c7d9d62fd4b7461e861ff682ed6",
".git/objects/da/955fbd67c68f89f1f807d850466721f682d0d3": "0cf3601ffda49ebb9d2e2da471885bda",
".git/objects/dc/8aecf6d45e79ee830ecc6dc5106d19f67b4b7d": "3e0e11084b5f34f04710f8fa60bd2ed5",
".git/objects/e1/db8477a6e1773069bcd1b7ffccad44719a8067": "bed34bb2795f4530ef31705781a19eb6",
".git/objects/e5/53611e070d58a15c9fdfcc5c156d1ffa0fdb4a": "d563c782702e59696ebb88bf8eeec82a",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f0/5feae6c0069e3e903e83b00438e9c601724f92": "fe1b7877a904b44963adbba35325b760",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/f4/61f61ae4f6398cc0732be2f62bdbe169f83772": "b1fa2de993839aa1f12b50f39ded62b3",
".git/objects/fa/ef6a857330879b521460bcdf38b70662aeb6fc": "90d394ad6ecc333e5f43f736e2decb6d",
".git/objects/ff/f98530aca2303f714ff969243b95d9bfb755d1": "c2f1d1555d2e025e0356b2bbec7f0aaf",
".git/refs/heads/master": "c1194bcd786bb33c7f536c1c5970b9ad",
".git/refs/remotes/origin/master": "c1194bcd786bb33c7f536c1c5970b9ad",
"assets/AssetManifest.json": "ae6c8187071797dbd55d5691749270a4",
"assets/assets/appimages/Baking.jpeg": "efd67d5cb6139a4bee4ffd0f0137deda",
"assets/assets/appimages/Body%2520Strength%2520Training.jpeg": "3876bcbb5300e4262df0df10ca3e1781",
"assets/assets/appimages/Cooking.jpeg": "3358d1696be7c8c22942d6230cf0c77e",
"assets/assets/appimages/Dancing.jpeg": "07e143ef1e526543d6fa6551dfb0d7f8",
"assets/assets/appimages/education.jpg": "24def1b308ed6a6d1ac25e4f2558be04",
"assets/assets/appimages/floppy.jpg": "4813e3787381704fce76cef6c6365c5a",
"assets/assets/appimages/guitar.jpg": "d9f954caadd9440e89850f738e6dc7ee",
"assets/assets/appimages/gym.jpg": "47b378cbb7bf1aa35765416f23304a33",
"assets/assets/appimages/hotel.jpg": "83c44abb40456cb422a9e76252323fa6",
"assets/assets/appimages/iphone.jpg": "8af91d230182fa77a1657f7dd5c9f475",
"assets/assets/appimages/laptop.jpg": "2bc342e42ee516887eb01a8c40f1203f",
"assets/assets/appimages/logo.jpeg": "9f60fca7523b78e88b41c124b4d86426",
"assets/assets/appimages/Music%2520Therpy.jpeg": "f7da50ebb039e35bfe899475b62b6cf0",
"assets/assets/appimages/music.jpg": "893d8989c453a7b90150cfe816023cd6",
"assets/assets/appimages/Musical%2520Instrument.jpeg": "7950e53b4e3fb3b935b8ea85236be020",
"assets/assets/appimages/no%2520item.jpg": "167f8dacb715c9624a6352d2724fe978",
"assets/assets/appimages/nointernet.jpg": "1fcd1e604317896aec7a8a079d0b7748",
"assets/assets/appimages/Nutritional%2520Counselling.jpeg": "3b1594092c37b4392b82332f30d33b5e",
"assets/assets/appimages/pendrive.jpg": "4eedce2f1c7d7e80c001c336087415db",
"assets/assets/appimages/pixel.jpg": "b2a521c26fac30dcac9cdc0c9db89c2f",
"assets/assets/appimages/tablet.jpg": "c0fe0aac801c958b8283d4e810cb37a1",
"assets/assets/appimages/upwellness.jpg": "858301904903577fc5dc85529e3cdf23",
"assets/assets/appimages/Vocal%2520Music.jpeg": "0b12d0f519f40e2c71719151099654de",
"assets/assets/appimages/Yoga.jpeg": "ede522caa71b5b3586063430003231c0",
"assets/assets/fonts/Raleway-Black.ttf": "3469d4a9bf3b8f9db8f3e5c69e3fce8e",
"assets/assets/fonts/Raleway-Bold.ttf": "2f99a85426a45e0c7f8707aae53af803",
"assets/assets/fonts/Raleway-Regular.ttf": "84abe14c9756256a4b91300ba3e4ec62",
"assets/assets/fonts/RobotoCondensed-Bold.ttf": "141d6bca9dd80c70f193e15e44e196e9",
"assets/assets/fonts/RobotoCondensed-Italic.ttf": "198e3f07ee8b96ece655b7c4b4b3ce24",
"assets/assets/fonts/RobotoCondensed-Light.ttf": "a60a2f5cb89d9def151ac47b377a1f09",
"assets/assets/fonts/RobotoCondensed-Regular.ttf": "9c6aac5ea7419fbe344b1e8f6cc10dac",
"assets/assets/html/payment.html": "11e1ee56c25fe7692e8eb0789411f865",
"assets/assets/icons/add_to_cart.svg": "91d2102e7b89fec10fcb816275041b0a",
"assets/assets/icons/back.svg": "6faa6d40f8e404d040b147b67d9bf16c",
"assets/assets/icons/cart.svg": "2cc4f936dbb97ec3263d3d3c08a38290",
"assets/assets/icons/heart.svg": "fafdb8afc30748f259b6ff64d51e3088",
"assets/assets/icons/search.svg": "676863abb3dbd91d7139d3434c94736a",
"assets/FontManifest.json": "10c37a8c3560718613dda15650581333",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "10ff47a75d481af65309a864c2bb4d46",
"assets/packages/awesome_dialog/assets/flare/error.flr": "87d83833748ad4425a01986f2821a75b",
"assets/packages/awesome_dialog/assets/flare/error_without_loop.flr": "35b9b6c9a71063406bdac60d7b3d53e8",
"assets/packages/awesome_dialog/assets/flare/info.flr": "bc654ba9a96055d7309f0922746fe7a7",
"assets/packages/awesome_dialog/assets/flare/info2.flr": "21af33cb65751b76639d98e106835cfb",
"assets/packages/awesome_dialog/assets/flare/info_without_loop.flr": "cf106e19d7dee9846bbc1ac29296a43f",
"assets/packages/awesome_dialog/assets/flare/question.flr": "1c31ec57688a19de5899338f898290f0",
"assets/packages/awesome_dialog/assets/flare/succes.flr": "ebae20460b624d738bb48269fb492edf",
"assets/packages/awesome_dialog/assets/flare/succes_without_loop.flr": "3d8b3b3552370677bf3fb55d0d56a152",
"assets/packages/awesome_dialog/assets/flare/warning.flr": "68898234dacef62093ae95ff4772509b",
"assets/packages/awesome_dialog/assets/flare/warning_without_loop.flr": "c84f528c7e7afe91a929898988012291",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/ionicons/fonts/Ionicons.ttf": "0cdf2a324d5c21f08c7f446476aa2ee3",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "04310751d42f703468e3634432e71d66",
"/": "04310751d42f703468e3634432e71d66",
"main.dart.js": "ed5c67abab1d8bfa943c2f6a4267b71a",
"manifest.json": "94a56bea4e67007c76b3e22a000fd2d0",
"payment.html": "11e1ee56c25fe7692e8eb0789411f865",
"version.json": "5c2ca8d3d676a70bf29709c921e06423"
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
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
