"use strict";var precacheConfig=[["/portfolio/index.html","db6acf9fabf334387ad16b3a67c6c545"],["/portfolio/static/css/main.7503b497.css","650aef2108014069e84884dc4972bc12"],["/portfolio/static/js/main.b8453c2a.js","64c54153daa99a88ae6a366c03050c97"],["/portfolio/static/media/0.0f83fc0c.png","0f83fc0c09af7478625bc02d9c2d928a"],["/portfolio/static/media/0.1be0d84a.png","1be0d84adf28e725bb263b32599cd9d4"],["/portfolio/static/media/0.2bbd61c1.png","2bbd61c15f472533abac62e547c0d24c"],["/portfolio/static/media/0.30750085.png","3075008569a107ec141abe00becbf200"],["/portfolio/static/media/0.71528d30.png","71528d30edefc4a17fc18963af711c1f"],["/portfolio/static/media/0.ac344236.png","ac344236c65911f67722e5f4c605fb88"],["/portfolio/static/media/1.3932fa16.png","3932fa163c89fea95bf12835d4b67ba2"],["/portfolio/static/media/1.4c371c1d.png","4c371c1db317b55315a9509d0f34ff49"],["/portfolio/static/media/1.563af0cd.png","563af0cdcf487978c670c4ff9571d01e"],["/portfolio/static/media/1.b717f97f.png","b717f97fb53ab93a2bffcddc46dc44dd"],["/portfolio/static/media/1.d43a288e.gif","d43a288e60ea5aa717901985a6051f79"],["/portfolio/static/media/2.1674bf86.png","1674bf86bba0d0a2fdaa98d729ae15db"],["/portfolio/static/media/2.3b921b6e.png","3b921b6e0ca8fe4e7705182a8f41f06a"],["/portfolio/static/media/2.e2a7265c.png","e2a7265c27da246bc9963f524044a379"],["/portfolio/static/media/2.f327552a.gif","f327552ae2b36a4d13378eaf994139b3"],["/portfolio/static/media/button_design.d985bb52.svg","d985bb52d40e5e255e791a19316d7908"],["/portfolio/static/media/button_dev.506870db.svg","506870dbc2707e4e3d80d432c86f3ecb"],["/portfolio/static/media/button_illustration.94445677.svg","94445677a0ec837af1f394e4f91896e4"],["/portfolio/static/media/button_white.a0cbf03b.svg","a0cbf03b2340d946d55130a8fc9958d0"],["/portfolio/static/media/color_design.129c4cae.svg","129c4cae2f86b827951a6b79babce782"],["/portfolio/static/media/color_dev.c42d311f.svg","c42d311fd338c71e4f1cb3b96ca6321e"],["/portfolio/static/media/color_illustration.9d392471.svg","9d392471f7dba4e9c0788c4de7009cb3"],["/portfolio/static/media/header.077a5212.jpg","077a5212681af8b9a086d3ff5960e848"],["/portfolio/static/media/headshot.1b15e9b2.png","1b15e9b2d4f947f16f5b1f9e19f56fbd"],["/portfolio/static/media/laptop.eec01cd0.png","eec01cd03eeece1599990055cec44458"],["/portfolio/static/media/logo.890e69a5.svg","890e69a5eac53dc82dfc745a943a12d8"],["/portfolio/static/media/moonWitch.27de95ad.jpg","27de95ad78915f2b197292ea34da15ec"],["/portfolio/static/media/phone_landscape.b5cb4417.png","b5cb441750f99a51056cf1dd1ff06b3e"],["/portfolio/static/media/phone_portrait.8743bec4.png","8743bec490f70493247da0b56352d41f"],["/portfolio/static/media/tablet_landscape.b28eaa9a.png","b28eaa9a47492ebedfea58236069abe1"],["/portfolio/static/media/tablet_portrait.098417e7.png","098417e77a04e3d7c0e65279b15ae349"],["/portfolio/static/media/temple.9fc2b64c.png","9fc2b64c5c08c5de2ded1bd1c84ed449"],["/portfolio/static/media/testThumb.2c07116a.png","2c07116aefa1385282f7e3291b9d8019"],["/portfolio/static/media/thumb.22a67a3a.jpg","22a67a3a569f81f6f0515a2525395fd6"],["/portfolio/static/media/thumb.4af824d2.jpg","4af824d290a6d49aae4b585dc79d88f1"],["/portfolio/static/media/thumb.57581a1c.jpg","57581a1cc14f6046ea114e21e23dc40e"],["/portfolio/static/media/thumb.76c8d869.png","76c8d869e89a064c0b49d2793d49d71e"],["/portfolio/static/media/thumb.b41cdecb.png","b41cdecb00222ebdd3031fc2cbf6175a"],["/portfolio/static/media/thumb.bf43498e.jpg","bf43498e57b0dbb370977534c1b6877f"],["/portfolio/static/media/thumb.de14ab48.png","de14ab4804e9ccd5c8cf80b78cdf2ee3"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,c){var o=new URL(e);return c&&o.pathname.match(c)||(o.search+=(o.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),o.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],c=new URL(t,self.location),o=createCacheKey(c,hashParamName,a,/\.\w{8}\./);return[c.toString(),o]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var c=new Request(a,{credentials:"same-origin"});return fetch(c).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),c="index.html";(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,c),t=urlsToCacheKeys.has(a));var o="/portfolio/index.html";!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL(o,self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});