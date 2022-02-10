// const style = document.querySelector('head').appendChild(document.createElement('link'))
//   style.rel="stylesheet"
//   style.href = '/style.css'
window.addEventListener('load',
  () =>
  {   
    if ('serviceWorker' in navigator)
    {
      navigator.serviceWorker.register('/sw.js')
        .then(reg => { console.log('SW registered!', reg); })
        .catch(err => console.log('SW registration FAIL:', err));
    }
  });

