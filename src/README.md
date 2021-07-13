# Lessons in PWA

1. Updates for the Service Worker itself i.e. changes to the sw.js file is handled by the browser. We do not have control over it.

> When the user navigates to your site, the browser tries to redownload the script file that defined the service worker in the background. If there is even a byte's difference in the service worker file compared to what it currently has, it considers it new. [(Source : Google)](https://developers.google.com/web/fundamentals/primers/service-workers#update-a-service-worker)

2. DOM (Html, Css, JS) can send and receive messages to/from the Service Worker by the postMessage API. [(Source: MDN)](https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerGlobalScope/message_event#examples)

3. The Service Worker has access to the Cache API, so you can add/clear cached items from the SW itself.

4. The Service Worker doesn't have access to the `window` object.
