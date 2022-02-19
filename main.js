let video  = chrome.extension.getURL("assets/video.mp4");
let blacklist  = chrome.extension.getURL("blacklist.json");

fetch(blacklist).then(res => res.json()).then(urls => {
  if (urls.find((url)=>document.URL.includes(url))) {
    document.documentElement.innerHTML = `
  <!DOCTYPE html>
<html>
    <head>
    <title>You can't join</title>

    <style>
  video {
      position: fixed;
      right: 0;
      bottom: 0;
      min-width: 100%;
      min-height: 100%;
    z-index: -1;
    }
  </style>

    </head>  
  <body>
  
  <video autoplay muted loop>
    <source src="${video}" type="video/mp4">
  </video>
  </body>
  </html>
  `;
  }
})