import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

if (window.navigator && navigator.serviceWorker) {
  navigator.serviceWorker.getRegistrations()
    .then(function (registrations) {
      const promise = [];
      for (let registration of registrations) {
        promise.push(registration.unregister());
      }
      return Promise.all(promise);
    }).then((data) => {
        navigator.serviceWorker.register('service-worker.js').then(function (registration) {
          // Registration Success
          console.log(registration);
          console.log('[serviceWorker]: registration successful with scope: ', registration.scope + 'for env ' + process.env.PUBLIC_URL);
        }).catch(function (err) {
          // Registration failed :(
          console.log('[serviceWorker] registration failed', err);
        });
    })
}

