!function(t){function e(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var n={};e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=0)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(1),i=n(2);n.n(i);(()=>{const t=document.querySelector("canvas");t.width=window.innerWidth,t.height=window.innerHeight;const e=t.getContext("2d"),n=new(window.AudioContext||window.webkitAudioContext),i=n.createOscillator();i.type="square",i.frequency.value=500,i.start();let o={x:void 0,y:void 0};window.addEventListener("mousemove",t=>{o.x=t.x,o.y=t.y});let s=[];const a=()=>{e.clearRect(0,0,t.width,t.height),u.forEach(t=>{t.update(),s.push(t)}),s.forEach(t=>{for(let r=0;r<s.length;r++)t.x-s[r].x<250&&t.x-s[r].x>-250&&t.x!==s[r].x&&t.y-s[r].y<250&&t.y-s[r].y>-250&&t.y!==s[r].y&&(e.beginPath(),e.moveTo(t.x+t.w/2,t.y+t.h/2),e.lineTo(s[r].x+s[r].w/2,s[r].y+s[r].h/2),e.strokeStyle="white",e.stroke(),window.addEventListener("click",()=>{t.speed+=1}),t.x<s[r].x+s[r].w&&t.x+t.w>s[r].x&&t.y<s[r].y+s[r].h&&t.h+t.y>s[r].y&&(t.dx=-t.dx,t.dy=-t.dy,s[r].dx=-s[r].dx,s[r].dy=-s[r].dy,i.connect(n.destination),setTimeout(()=>{i.disconnect()},10),t.update()))}),s=[],requestAnimationFrame(a)};let u=[];for(let n=0;n<10;n++){let n=Math.random()*t.width,i=Math.random()*t.height,s=Math.random()-1,a=Math.random()-1;u.push(new r.a(t,e,n,i,10,10,s,a,4,o))}a()})(),function(){let t=document.createElement("script");t.onload=function(){let t=new Stats;document.body.appendChild(t.dom),requestAnimationFrame(function e(){t.update(),requestAnimationFrame(e)})},t.src="//rawgit.com/mrdoob/stats.js/master/build/stats.min.js",document.head.appendChild(t)}()},function(t,e,n){"use strict";class r{constructor(t,e,n,r,i,o,s,a,u,c){this.canvas=t,this.ctx=e,this.x=n,this.y=r,this.w=i,this.h=o,this.dx=s,this.dy=a,this.speed=u,this.mouse=c,this.minW=10,this.maxW=40}draw(){this.ctx.fillStyle="white",this.ctx.fillRect(this.x,this.y,this.w,this.h)}update(){this.x+=this.dx*this.speed,this.y+=this.dy*this.speed,(this.x<0||this.x>this.canvas.width)&&(this.dx=-this.dx),(this.y<0||this.y>this.canvas.height)&&(this.dy=-this.dy),this.mouse.x-this.x<120&&this.mouse.x-this.x>-120&&this.mouse.y-this.y>-120&&this.mouse.y-this.y<120?this.w<this.maxW&&(this.w+=2,this.h+=2):this.w>this.minW&&(this.w-=1,this.h-=1),this.draw()}}e.a=r},function(t,e,n){var r=n(3);"string"==typeof r&&(r=[[t.i,r,""]]);var i={};i.transform=void 0;n(5)(r,i);r.locals&&(t.exports=r.locals)},function(t,e,n){(t.exports=n(4)(void 0)).push([t.i,"canvas {\n    background-color: black;\n}\n\n* {\n    margin: 0;\n    padding: 0;\n    overflow: hidden;\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n}",""])},function(t,e){function n(t,e){var n=t[1]||"",i=t[3];if(!i)return n;if(e&&"function"==typeof btoa){var o=r(i),s=i.sources.map(function(t){return"/*# sourceURL="+i.sourceRoot+t+" */"});return[n].concat(s).concat([o]).join("\n")}return[n].join("\n")}function r(t){return"/*# "+("sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t)))))+" */"}t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var r=n(e,t);return e[2]?"@media "+e[2]+"{"+r+"}":r}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(r[o]=!0)}for(i=0;i<t.length;i++){var s=t[i];"number"==typeof s[0]&&r[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),e.push(s))}},e}},function(t,e,n){function r(t,e){for(var n=0;n<t.length;n++){var r=t[n],i=p[r.id];if(i){i.refs++;for(s=0;s<i.parts.length;s++)i.parts[s](r.parts[s]);for(;s<r.parts.length;s++)i.parts.push(d(r.parts[s],e))}else{for(var o=[],s=0;s<r.parts.length;s++)o.push(d(r.parts[s],e));p[r.id]={id:r.id,refs:1,parts:o}}}}function i(t,e){for(var n=[],r={},i=0;i<t.length;i++){var o=t[i],s=e.base?o[0]+e.base:o[0],a={css:o[1],media:o[2],sourceMap:o[3]};r[s]?r[s].parts.push(a):n.push(r[s]={id:s,parts:[a]})}return n}function o(t,e){var n=y(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=b[b.length-1];if("top"===t.insertAt)r?r.nextSibling?n.insertBefore(e,r.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),b.push(e);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(e)}}function s(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=b.indexOf(t);e>=0&&b.splice(e,1)}function a(t){var e=document.createElement("style");return t.attrs.type="text/css",c(e,t.attrs),o(t,e),e}function u(t){var e=document.createElement("link");return t.attrs.type="text/css",t.attrs.rel="stylesheet",c(e,t.attrs),o(t,e),e}function c(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function d(t,e){var n,r,i,o;if(e.transform&&t.css){if(!(o=e.transform(t.css)))return function(){};t.css=o}if(e.singleton){var c=x++;n=m||(m=a(e)),r=f.bind(null,n,c,!1),i=f.bind(null,n,c,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=u(e),r=l.bind(null,n,e),i=function(){s(n),n.href&&URL.revokeObjectURL(n.href)}):(n=a(e),r=h.bind(null,n),i=function(){s(n)});return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else i()}}function f(t,e,n,r){var i=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=g(e,i);else{var o=document.createTextNode(i),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(o,s[e]):t.appendChild(o)}}function h(t,e){var n=e.css,r=e.media;if(r&&t.setAttribute("media",r),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}function l(t,e,n){var r=n.css,i=n.sourceMap,o=void 0===e.convertToAbsoluteUrls&&i;(e.convertToAbsoluteUrls||o)&&(r=w(r)),i&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var s=new Blob([r],{type:"text/css"}),a=t.href;t.href=URL.createObjectURL(s),a&&URL.revokeObjectURL(a)}var p={},v=function(t){var e;return function(){return void 0===e&&(e=t.apply(this,arguments)),e}}(function(){return window&&document&&document.all&&!window.atob}),y=function(t){var e={};return function(n){return void 0===e[n]&&(e[n]=t.call(this,n)),e[n]}}(function(t){return document.querySelector(t)}),m=null,x=0,b=[],w=n(6);t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||(e.singleton=v()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=i(t,e);return r(n,e),function(t){for(var o=[],s=0;s<n.length;s++){var a=n[s];(u=p[a.id]).refs--,o.push(u)}t&&r(i(t,e),e);for(s=0;s<o.length;s++){var u=o[s];if(0===u.refs){for(var c=0;c<u.parts.length;c++)u.parts[c]();delete p[u.id]}}}};var g=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,r=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var i=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(i))return t;var o;return o=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")"})}}]);