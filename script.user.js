// ==UserScript==
// @name         Eruda Console Injector
// @namespace    https://venderbad.github.io
// @version      0.0.3
// @description  A script to enable eruda console on any site
// @author       Venderbad
// @match        *://*/*
// @grant        GM_addElement
// @run-at       document-body
// @license      WTFPL
// ==/UserScript==

(function () {
    if (!/eruda=true/.test(window.location) && localStorage.getItem('active-eruda') != 'true') return;

    GM_addElement('script', {
        src: "https://cdn.jsdelivr.net/npm/eruda",
    }).onload = () => eruda.init();
})();
