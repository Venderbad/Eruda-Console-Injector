// ==UserScript==
// @name         Eruda Console Injector
// @namespace    https://venderbad.github.io
// @version      0.0.1
// @description  A script to enable eruda console on any site
// @author       Venderbad
// @match        *
// @grant        none
// @run-at       document-body
// @license      WTFPL
// ==/UserScript==

(function() {
    if (!/eruda=true/.test(window.location) && localStorage.getItem('active-eruda') != 'true') return;
    var s = document.createElement("script");
    var src = "//cdn.jsdelivr.net/npm/eruda";
    s.src = src;
    s.addEventListener(
        "load",
        function() {
            eruda.init();
        },
        false
    );
    document.body.appendChild(s);
})();
