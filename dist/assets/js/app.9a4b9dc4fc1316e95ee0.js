!function(e){function t(t){for(var r,u,a=t[0],i=t[1],l=t[2],d=0,f=[];d<a.length;d++)u=a[d],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&f.push(o[u][0]),o[u]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);for(c&&c(t);f.length;)f.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,a=1;a<n.length;a++){var i=n[a];0!==o[i]&&(r=!1)}r&&(s.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={0:0},s=[];function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="";var a=window.webpackJsonp=window.webpackJsonp||[],i=a.push.bind(a);a.push=t,a=a.slice();for(var l=0;l<a.length;l++)t(a[l]);var c=i;s.push([66,1]),n()}({48:function(e,t,n){var r=n(26),o=n(49);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var s={insert:"head",singleton:!1};r(o,s);e.exports=o.locals||{}},49:function(e,t,n){},50:function(e,t,n){var r=n(26),o=n(51);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var s={insert:"head",singleton:!1};r(o,s);e.exports=o.locals||{}},51:function(e,t,n){},66:function(e,t,n){"use strict";n.r(t);n(28),n(48),n(50),n(52);var r=new DocumentFragment;["waves","forest","rain","cafe","frogs","snow","train","fire"].forEach((function(e){var t=document.createElement("button");t.className="buttons__button",t.append(e),t.value=e,r.appendChild(t)}));var o=n(64).soundManager;document.getElementById("buttons-section").appendChild(r);var s=document.getElementById("bg-section"),u="waves";s.style.backgroundImage='url("/assets/img/'+u+'.jpg")',o.setup({preferFlash:!1,onready:function(){o.createSound({url:["/assets/img/sounds/waves.mp3"],id:"waves"}),o.createSound({url:["/assets/img/sounds/forest.mp3"],id:"forest"}),o.createSound({url:["/assets/img/sounds/rain.mp3"],id:"rain"}),o.createSound({url:["/assets/img/sounds/cafe.mp3"],id:"cafe"}),o.createSound({url:["/assets/img/sounds/frogs.mp3"],id:"frogs"}),o.createSound({url:["/assets/img/sounds/snow.mp3"],id:"snow"}),o.createSound({url:["/assets/img/sounds/train.mp3"],id:"train"}),o.createSound({url:["/assets/img/sounds/fire.mp3"],id:"fire"})}}).beginDelayedInit(),window.onload=function(){function e(){u=this.value,s.style.backgroundImage='url("/assets/img/'+u+'.jpg")',o.stopAll(),o.play(u,{loops:1/0})}for(var t=document.getElementsByClassName("buttons__button"),n=0;n<t.length;n++)t[n].onclick=e};var a,i=document.getElementById("volume__button");function l(){var e=this;clearTimeout(a),a=setTimeout((function(){!function(e){o.setVolume(u,e.value)}(e)}),100)}i.addEventListener("input",l,!1),i.addEventListener("change",l,!1)}});