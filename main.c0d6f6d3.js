parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function e(e,t){var n=document.createElement("div");n.classList.add(t),n.setAttribute("data-qa","notification"),n.innerText=e,document.body.append(n)}document.addEventListener("contextmenu",function(e){e.preventDefault()});var t=new Promise(function(e,t){setTimeout(function(){return t(new Error)},3e3),document.addEventListener("mousedown",function(){return e()})}),n=new Promise(function(e,t){document.addEventListener("mousedown",function(t){0!==t.button&&2!==t.button||e()})}),i=new Promise(function(e,t){var n={leftClick:!1,rightClick:!1};document.addEventListener("mousedown",function(t){0===t.button&&(n.leftClick=!0),2===t.button&&(n.rightClick=!0),n.leftClick&&n.rightClick&&e()})});t.then(function(){e("First promise was resolved","success")}).catch(function(){e("First promise was rejected","warning")}),n.then(function(){e("Second promise was resolved","success")}),i.then(function(){e("Third promise was resolved","success")});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.c0d6f6d3.js.map