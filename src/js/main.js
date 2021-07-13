'use strict';

if ('serviceWorker' in navigator)
{
  navigator.serviceWorker.register('./sw.js');
}

window.onload = () =>
{
  // navigator.serviceWorker.addEventListener('message', (event) => {
  //   // event is a MessageEvent object
  //   console.log('Service worker sent message event', event);
  //   console.log(`The service worker sent me a message: ${event.data}`);
  // });
  // navigator.serviceWorker.ready.then((registration) => {
  //   registration.active.postMessage('Hi service worker');
  // });
};
