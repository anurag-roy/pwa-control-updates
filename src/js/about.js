async function updateClickHandler()
{
  // Clear Cache Storage Completely
  let cacheKeys = await caches.keys();
  for (let key of cacheKeys)
  {
    await caches.delete(key);
  }

  // Unregister all Service Workers
  let registrations = await navigator.serviceWorker.getRegistrations();

  console.log('Registrations: ', registrations);

  for (let registration of registrations)
  {
    console.log('Trying to unregister', registration);
    await registration.unregister();
    console.log('Registration after unregistering: ', registration);
  }

  // On reloading the window, window.onload will register the latest Service Worker
  // and its 'install' event will get triggered which will cache all the required files/assets
  window.location.href = 'index.html';
}

// async function updateClickHandler()
// {
//   navigator.serviceWorker.getRegistrations()
//     .then(registrations =>
//     {
//       registrations.forEach(registration =>
//       {
//         registration.unregister();
//       })
//     });

//   navigator.serviceWorker.getRegistrations().then(function (registrations)
//   {
//     for (let registration of registrations)
//     {
//       registration.unregister()
//     }
//   })

//   if (window.navigator && navigator.serviceWorker)
//   {
//     navigator.serviceWorker.getRegistrations()
//       .then(function (registrations)
//       {
//         for (let registration of registrations)
//         {
//           registration.unregister();
//         }
//       });
//   }

//   if ('caches' in window)
//   {
//     caches.keys()
//       .then(function (keyList)
//       {
//         return Promise.all(keyList.map(function (key)
//         {
//           return caches.delete(key);
//         }));
//       })
//   }

//   if ('serviceWorker' in navigator)
//   {
//     navigator.serviceWorker.getRegistrations().then(function (registrations)
//     {
//       for (const registration of registrations)
//       {
//         // unregister service worker
//         console.log('serviceWorker unregistered');
//         registration.unregister();

//         setTimeout(function ()
//         {
//           console.log('trying redirect do');
//           window.location.replace('index.html'); // because without redirecting, first time on page load: still service worker will be available
//         }, 3000);
//       }
//     });
//   }
// }
