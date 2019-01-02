// ==UserScript==
// @name     Minor Planet set L01 observer
// @version  1
// @grant    none
// @include  https://www.minorplanetcenter.net/iau/NEO/toconfirm_tabular.html
// @version  1.0
// ==/UserScript==


document.querySelector('input[name="obscode"]').value = "L01";
document.querySelector('input[name="int"][value="1"]').checked = true;
