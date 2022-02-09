window.addEventListener("load", () =>
{
  if ("serviceWorker" in navigator)
  {
    navigator.serviceWorker.register('/sw.js')
      .then(reg => console.log('serviceWorker is register!'))
      .catch(err => console.log('SW registration FAIL:', err))
  }
})