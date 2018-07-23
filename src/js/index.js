import particles from './particles'
(function () {
  // if ('serviceWorker' in navigator) {
  //   navigator.serviceWorker.register('../sw.js')
  //     .then((registration) => {
  //       console.log(`SW registration successful with scope: ${registration.scope}`)
  //     })
  //       .catch(err => {
  //         console.log(`SW registration failed with error: ${err}`)
  //       })
  // }
  /* Generate particles */
  particles('particles')
})()

