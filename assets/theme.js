/*! VelocityJS.org (1.5.0). (C) 2014 Julian Shapiro. MIT @license: en.wikipedia.org/wiki/MIT_License */
/*! VelocityJS.org jQuery Shim (1.0.1). (C) 2014 The jQuery Foundation. MIT @license: en.wikipedia.org/wiki/MIT_License. */
!function(e){"use strict";function t(e){var t=e.length,i=n.type(e);return"function"!==i&&!n.isWindow(e)&&(!(1!==e.nodeType||!t)||("array"===i||0===t||"number"==typeof t&&t>0&&t-1 in e))}if(!e.jQuery){var n=function(e,t){return new n.fn.init(e,t)};n.isWindow=function(e){return e&&e===e.window},n.type=function(e){return e?"object"==typeof e||"function"==typeof e?o[s.call(e)]||"object":typeof e:e+""},n.isArray=Array.isArray||function(e){return"array"===n.type(e)},n.isPlainObject=function(e){var t;if(!e||"object"!==n.type(e)||e.nodeType||n.isWindow(e))return!1;try{if(e.constructor&&!r.call(e,"constructor")&&!r.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(e){return!1}for(t in e);return void 0===t||r.call(e,t)},n.each=function(e,n,i){var o=0,r=e.length,s=t(e);if(i){if(s)for(;o<r&&!1!==n.apply(e[o],i);o++);else for(o in e)if(e.hasOwnProperty(o)&&!1===n.apply(e[o],i))break}else if(s)for(;o<r&&!1!==n.call(e[o],o,e[o]);o++);else for(o in e)if(e.hasOwnProperty(o)&&!1===n.call(e[o],o,e[o]))break;return e},n.data=function(e,t,o){if(void 0===o){var r=e[n.expando],s=r&&i[r];if(void 0===t)return s;if(s&&t in s)return s[t]}else if(void 0!==t){var a=e[n.expando]||(e[n.expando]=++n.uuid);return i[a]=i[a]||{},i[a][t]=o,o}},n.removeData=function(e,t){var o=e[n.expando],r=o&&i[o];r&&(t?n.each(t,function(e,t){delete r[t]}):delete i[o])},n.extend=function(){var e,t,i,o,r,s,a=arguments[0]||{},l=1,u=arguments.length,c=!1;for("boolean"==typeof a&&(c=a,a=arguments[l]||{},l++),"object"!=typeof a&&"function"!==n.type(a)&&(a={}),l===u&&(a=this,l--);l<u;l++)if(r=arguments[l])for(o in r)r.hasOwnProperty(o)&&(e=a[o],i=r[o],a!==i&&(c&&i&&(n.isPlainObject(i)||(t=n.isArray(i)))?(t?(t=!1,s=e&&n.isArray(e)?e:[]):s=e&&n.isPlainObject(e)?e:{},a[o]=n.extend(c,s,i)):void 0!==i&&(a[o]=i)));return a},n.queue=function(e,i,o){if(e){i=(i||"fx")+"queue";var r=n.data(e,i);return o?(!r||n.isArray(o)?r=n.data(e,i,function(e,n){var i=n||[];return e&&(t(Object(e))?function(e,t){for(var n=+t.length,i=0,o=e.length;i<n;)e[o++]=t[i++];if(n!==n)for(;void 0!==t[i];)e[o++]=t[i++];e.length=o}(i,"string"==typeof e?[e]:e):[].push.call(i,e)),i}(o)):r.push(o),r):r||[]}},n.dequeue=function(e,t){n.each(e.nodeType?[e]:e,function(e,i){t=t||"fx";var o=n.queue(i,t),r=o.shift();"inprogress"===r&&(r=o.shift()),r&&("fx"===t&&o.unshift("inprogress"),r.call(i,function(){n.dequeue(i,t)}))})},n.fn=n.prototype={init:function(e){if(e.nodeType)return this[0]=e,this;throw new Error("Not a DOM node.")},offset:function(){var t=this[0].getBoundingClientRect?this[0].getBoundingClientRect():{top:0,left:0};return{top:t.top+(e.pageYOffset||document.scrollTop||0)-(document.clientTop||0),left:t.left+(e.pageXOffset||document.scrollLeft||0)-(document.clientLeft||0)}},position:function(){var e=this[0],t=function(e){for(var t=e.offsetParent;t&&"html"!==t.nodeName.toLowerCase()&&t.style&&"static"===t.style.position;)t=t.offsetParent;return t||document}(e),i=this.offset(),o=/^(?:body|html)$/i.test(t.nodeName)?{top:0,left:0}:n(t).offset();return i.top-=parseFloat(e.style.marginTop)||0,i.left-=parseFloat(e.style.marginLeft)||0,t.style&&(o.top+=parseFloat(t.style.borderTopWidth)||0,o.left+=parseFloat(t.style.borderLeftWidth)||0),{top:i.top-o.top,left:i.left-o.left}}};var i={};n.expando="velocity"+(new Date).getTime(),n.uuid=0;for(var o={},r=o.hasOwnProperty,s=o.toString,a="Boolean Number String Function Array Date RegExp Object Error".split(" "),l=0;l<a.length;l++)o["[object "+a[l]+"]"]=a[l].toLowerCase();n.fn.init.prototype=n.fn,e.Velocity={Utilities:n}}}(window),function(e){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e():"function"==typeof define&&define.amd?define(e):e()}(function(){"use strict";return function(e,t,n,i){/* Array compacting. Copyright Lo-Dash. MIT License: https://github.com/lodash/lodash/blob/master/LICENSE.txt */
function o(e){for(var t=-1,n=e?e.length:0,i=[];++t<n;){var o=e[t];o&&i.push(o)}return i}function r(e){return b.isWrapped(e)?e=y.call(e):b.isNode(e)&&(e=[e]),e}function s(e){var t=m.data(e,"velocity");return null===t?i:t}function a(e,t){var n=s(e);n&&n.delayTimer&&!n.delayPaused&&(n.delayRemaining=n.delay-t+n.delayBegin,n.delayPaused=!0,clearTimeout(n.delayTimer.setTimeout))}function l(e,t){var n=s(e);n&&n.delayTimer&&n.delayPaused&&(n.delayPaused=!1,n.delayTimer.setTimeout=setTimeout(n.delayTimer.next,n.delayRemaining))}function u(e){return function(t){return Math.round(t*e)*(1/e)}}/* Bezier curve function generator. Copyright Gaetan Renaudeau. MIT License: http://en.wikipedia.org/wiki/MIT_License */
function c(e,n,i,o){function r(e,t){return 1-3*t+3*e}function s(e,t){return 3*t-6*e}function a(e){return 3*e}function l(e,t,n){return((r(t,n)*e+s(t,n))*e+a(t))*e}function u(e,t,n){return 3*r(t,n)*e*e+2*s(t,n)*e+a(t)}function c(t,n){for(var o=0;o<h;++o){var r=u(n,e,i);if(0===r)return n;n-=(l(n,e,i)-t)/r}return n}function p(){for(var t=0;t<w;++t)C[t]=l(t*b,e,i)}function d(t,n,o){var r,s,a=0;do{s=n+(o-n)/2,r=l(s,e,i)-t,r>0?o=s:n=s}while(Math.abs(r)>v&&++a<y);return s}function f(t){for(var n=0,o=1,r=w-1;o!==r&&C[o]<=t;++o)n+=b;--o;var s=(t-C[o])/(C[o+1]-C[o]),a=n+s*b,l=u(a,e,i);return l>=g?c(t,a):0===l?a:d(t,n,n+b)}function m(){T=!0,e===n&&i===o||p()}var h=4,g=.001,v=1e-7,y=10,w=11,b=1/(w-1),x="Float32Array"in t;if(4!==arguments.length)return!1;for(var S=0;S<4;++S)if("number"!=typeof arguments[S]||isNaN(arguments[S])||!isFinite(arguments[S]))return!1;e=Math.min(e,1),i=Math.min(i,1),e=Math.max(e,0),i=Math.max(i,0);var C=x?new Float32Array(w):new Array(w),T=!1,P=function(t){return T||m(),e===n&&i===o?t:0===t?0:1===t?1:l(f(t),n,o)};P.getControlPoints=function(){return[{x:e,y:n},{x:i,y:o}]};var I="generateBezier("+[e,n,i,o]+")";return P.toString=function(){return I},P}function p(e,t){var n=e;return b.isString(e)?T.Easings[e]||(n=!1):n=b.isArray(e)&&1===e.length?u.apply(null,e):b.isArray(e)&&2===e.length?P.apply(null,e.concat([t])):!(!b.isArray(e)||4!==e.length)&&c.apply(null,e),!1===n&&(n=T.Easings[T.defaults.easing]?T.defaults.easing:C),n}function d(e){if(e){var t=T.timestamp&&!0!==e?e:v.now(),n=T.State.calls.length;n>1e4&&(T.State.calls=o(T.State.calls),n=T.State.calls.length);for(var r=0;r<n;r++)if(T.State.calls[r]){var a=T.State.calls[r],l=a[0],u=a[2],c=a[3],p=!!c,g=null,y=a[5],w=a[6];if(c||(c=T.State.calls[r][3]=t-16),y){if(!0!==y.resume)continue;c=a[3]=Math.round(t-w-16),a[5]=null}w=a[6]=t-c;for(var x=Math.min(w/u.duration,1),S=0,C=l.length;S<C;S++){var P=l[S],E=P.element;if(s(E)){var A=!1;if(u.display!==i&&null!==u.display&&"none"!==u.display){if("flex"===u.display){var z=["-webkit-box","-moz-box","-ms-flexbox","-webkit-flex"];m.each(z,function(e,t){I.setPropertyValue(E,"display",t)})}I.setPropertyValue(E,"display",u.display)}u.visibility!==i&&"hidden"!==u.visibility&&I.setPropertyValue(E,"visibility",u.visibility);for(var V in P)if(P.hasOwnProperty(V)&&"element"!==V){var O,N=P[V],_=b.isString(N.easing)?T.Easings[N.easing]:N.easing;if(b.isString(N.pattern)){var L=1===x?function(e,t,n){var i=N.endValue[t];return n?Math.round(i):i}:function(e,t,n){var i=N.startValue[t],o=N.endValue[t]-i,r=i+o*_(x,u,o);return n?Math.round(r):r};O=N.pattern.replace(/{(\d+)(!)?}/g,L)}else if(1===x)O=N.endValue;else{var W=N.endValue-N.startValue;O=N.startValue+W*_(x,u,W)}if(!p&&O===N.currentValue)continue;if(N.currentValue=O,"tween"===V)g=O;else{var j;if(I.Hooks.registered[V]){j=I.Hooks.getRoot(V);var R=s(E).rootPropertyValueCache[j];R&&(N.rootPropertyValue=R)}var F=I.setPropertyValue(E,V,N.currentValue+(h<9&&0===parseFloat(O)?"":N.unitType),N.rootPropertyValue,N.scrollData);I.Hooks.registered[V]&&(I.Normalizations.registered[j]?s(E).rootPropertyValueCache[j]=I.Normalizations.registered[j]("extract",null,F[1]):s(E).rootPropertyValueCache[j]=F[1]),"transform"===F[0]&&(A=!0)}}u.mobileHA&&s(E).transformCache.translate3d===i&&(s(E).transformCache.translate3d="(0px, 0px, 0px)",A=!0),A&&I.flushTransformCache(E)}}u.display!==i&&"none"!==u.display&&(T.State.calls[r][2].display=!1),u.visibility!==i&&"hidden"!==u.visibility&&(T.State.calls[r][2].visibility=!1),u.progress&&u.progress.call(a[1],a[1],x,Math.max(0,c+u.duration-t),c,g),1===x&&f(r)}}T.State.isTicking&&k(d)}function f(e,t){if(!T.State.calls[e])return!1;for(var n=T.State.calls[e][0],o=T.State.calls[e][1],r=T.State.calls[e][2],a=T.State.calls[e][4],l=!1,u=0,c=n.length;u<c;u++){var p=n[u].element;t||r.loop||("none"===r.display&&I.setPropertyValue(p,"display",r.display),"hidden"===r.visibility&&I.setPropertyValue(p,"visibility",r.visibility));var d=s(p);if(!0!==r.loop&&(m.queue(p)[1]===i||!/\.velocityQueueEntryFlag/i.test(m.queue(p)[1]))&&d){d.isAnimating=!1,d.rootPropertyValueCache={};var f=!1;m.each(I.Lists.transforms3D,function(e,t){var n=/^scale/.test(t)?1:0,o=d.transformCache[t];d.transformCache[t]!==i&&new RegExp("^\\("+n+"[^.]").test(o)&&(f=!0,delete d.transformCache[t])}),r.mobileHA&&(f=!0,delete d.transformCache.translate3d),f&&I.flushTransformCache(p),I.Values.removeClass(p,"velocity-animating")}if(!t&&r.complete&&!r.loop&&u===c-1)try{r.complete.call(o,o)}catch(e){setTimeout(function(){throw e},1)}a&&!0!==r.loop&&a(o),d&&!0===r.loop&&!t&&(m.each(d.tweensContainer,function(e,t){if(/^rotate/.test(e)&&(parseFloat(t.startValue)-parseFloat(t.endValue))%360==0){var n=t.startValue;t.startValue=t.endValue,t.endValue=n}/^backgroundPosition/.test(e)&&100===parseFloat(t.endValue)&&"%"===t.unitType&&(t.endValue=0,t.startValue=100)}),T(p,"reverse",{loop:!0,delay:r.delay})),!1!==r.queue&&m.dequeue(p,r.queue)}T.State.calls[e]=!1;for(var h=0,g=T.State.calls.length;h<g;h++)if(!1!==T.State.calls[h]){l=!0;break}!1===l&&(T.State.isTicking=!1,delete T.State.calls,T.State.calls=[])}var m,h=function(){if(n.documentMode)return n.documentMode;for(var e=7;e>4;e--){var t=n.createElement("div");if(t.innerHTML="\x3c!--[if IE "+e+"]><span></span><![endif]--\x3e",t.getElementsByTagName("span").length)return t=null,e}return i}(),g=function(){var e=0;return t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||function(t){var n,i=(new Date).getTime();/* Technique by Erik Moller. MIT license: https://gist.github.com/paulirish/1579671 */
return n=Math.max(0,16-(i-e)),e=i+n,setTimeout(function(){t(i+n)},n)}}(),v=function(){var e=t.performance||{};if("function"!=typeof e.now){var n=e.timing&&e.timing.navigationStart?e.timing.navigationStart:(new Date).getTime();e.now=function(){return(new Date).getTime()-n}}return e}(),y=function(){var e=Array.prototype.slice;try{return e.call(n.documentElement),e}catch(t){return function(t,n){var i=this.length;if("number"!=typeof t&&(t=0),"number"!=typeof n&&(n=i),this.slice)return e.call(this,t,n);var o,r=[],s=t>=0?t:Math.max(0,i+t),a=n<0?i+n:Math.min(n,i),l=a-s;if(l>0)if(r=new Array(l),this.charAt)for(o=0;o<l;o++)r[o]=this.charAt(s+o);else for(o=0;o<l;o++)r[o]=this[s+o];return r}}}(),w=function(){return Array.prototype.includes?function(e,t){return e.includes(t)}:Array.prototype.indexOf?function(e,t){return e.indexOf(t)>=0}:function(e,t){for(var n=0;n<e.length;n++)if(e[n]===t)return!0;return!1}},b={isNumber:function(e){return"number"==typeof e},isString:function(e){return"string"==typeof e},isArray:Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)},isFunction:function(e){return"[object Function]"===Object.prototype.toString.call(e)},isNode:function(e){return e&&e.nodeType},isWrapped:function(e){return e&&e!==t&&b.isNumber(e.length)&&!b.isString(e)&&!b.isFunction(e)&&!b.isNode(e)&&(0===e.length||b.isNode(e[0]))},isSVG:function(e){return t.SVGElement&&e instanceof t.SVGElement},isEmptyObject:function(e){for(var t in e)if(e.hasOwnProperty(t))return!1;return!0}},x=!1;if(e.fn&&e.fn.jquery?(m=e,x=!0):m=t.Velocity.Utilities,h<=8&&!x)throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");if(h<=7)return void(jQuery.fn.velocity=jQuery.fn.animate);var S=400,C="swing",T={State:{isMobile:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),isAndroid:/Android/i.test(navigator.userAgent),isGingerbread:/Android 2\.3\.[3-7]/i.test(navigator.userAgent),isChrome:t.chrome,isFirefox:/Firefox/i.test(navigator.userAgent),prefixElement:n.createElement("div"),prefixMatches:{},scrollAnchor:null,scrollPropertyLeft:null,scrollPropertyTop:null,isTicking:!1,calls:[],delayedElements:{count:0}},CSS:{},Utilities:m,Redirects:{},Easings:{},Promise:t.Promise,defaults:{queue:"",duration:S,easing:C,begin:i,complete:i,progress:i,display:i,visibility:i,loop:!1,delay:!1,mobileHA:!0,_cacheValues:!0,promiseRejectEmpty:!0},init:function(e){m.data(e,"velocity",{isSVG:b.isSVG(e),isAnimating:!1,computedStyle:null,tweensContainer:null,rootPropertyValueCache:{},transformCache:{}})},hook:null,mock:!1,version:{major:1,minor:5,patch:0},debug:!1,timestamp:!0,pauseAll:function(e){var t=(new Date).getTime();m.each(T.State.calls,function(t,n){if(n){if(e!==i&&(n[2].queue!==e||!1===n[2].queue))return!0;n[5]={resume:!1}}}),m.each(T.State.delayedElements,function(e,n){n&&a(n,t)})},resumeAll:function(e){var t=(new Date).getTime();m.each(T.State.calls,function(t,n){if(n){if(e!==i&&(n[2].queue!==e||!1===n[2].queue))return!0;n[5]&&(n[5].resume=!0)}}),m.each(T.State.delayedElements,function(e,n){n&&l(n,t)})}};t.pageYOffset!==i?(T.State.scrollAnchor=t,T.State.scrollPropertyLeft="pageXOffset",T.State.scrollPropertyTop="pageYOffset"):(T.State.scrollAnchor=n.documentElement||n.body.parentNode||n.body,T.State.scrollPropertyLeft="scrollLeft",T.State.scrollPropertyTop="scrollTop");/* Runge-Kutta spring physics function generator. Adapted from Framer.js, copyright Koen Bok. MIT License: http://en.wikipedia.org/wiki/MIT_License */
/* Given a tension, friction, and duration, a simulation at 60FPS will first run without a defined duration in order to calculate the full path. A second pass
		 then adjusts the time delta -- using the relation between actual time and duration -- to calculate the path for the duration-constrained animation. */
var P=function(){function e(e){return-e.tension*e.x-e.friction*e.v}function t(t,n,i){var o={x:t.x+i.dx*n,v:t.v+i.dv*n,tension:t.tension,friction:t.friction};return{dx:o.v,dv:e(o)}}function n(n,i){var o={dx:n.v,dv:e(n)},r=t(n,.5*i,o),s=t(n,.5*i,r),a=t(n,i,s),l=1/6*(o.dx+2*(r.dx+s.dx)+a.dx),u=1/6*(o.dv+2*(r.dv+s.dv)+a.dv);return n.x=n.x+l*i,n.v=n.v+u*i,n}return function e(t,i,o){var r,s,a,l={x:-1,v:0,tension:null,friction:null},u=[0],c=0;for(t=parseFloat(t)||500,i=parseFloat(i)||20,o=o||null,l.tension=t,l.friction=i,r=null!==o,r?(c=e(t,i),s=c/o*.016):s=.016;;)if(a=n(a||l,s),u.push(1+a.x),c+=16,!(Math.abs(a.x)>1e-4&&Math.abs(a.v)>1e-4))break;return r?function(e){return u[e*(u.length-1)|0]}:c}}();T.Easings={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},spring:function(e){return 1-Math.cos(4.5*e*Math.PI)*Math.exp(6*-e)}},m.each([["ease",[.25,.1,.25,1]],["ease-in",[.42,0,1,1]],["ease-out",[0,0,.58,1]],["ease-in-out",[.42,0,.58,1]],["easeInSine",[.47,0,.745,.715]],["easeOutSine",[.39,.575,.565,1]],["easeInOutSine",[.445,.05,.55,.95]],["easeInQuad",[.55,.085,.68,.53]],["easeOutQuad",[.25,.46,.45,.94]],["easeInOutQuad",[.455,.03,.515,.955]],["easeInCubic",[.55,.055,.675,.19]],["easeOutCubic",[.215,.61,.355,1]],["easeInOutCubic",[.645,.045,.355,1]],["easeInQuart",[.895,.03,.685,.22]],["easeOutQuart",[.165,.84,.44,1]],["easeInOutQuart",[.77,0,.175,1]],["easeInQuint",[.755,.05,.855,.06]],["easeOutQuint",[.23,1,.32,1]],["easeInOutQuint",[.86,0,.07,1]],["easeInExpo",[.95,.05,.795,.035]],["easeOutExpo",[.19,1,.22,1]],["easeInOutExpo",[1,0,0,1]],["easeInCirc",[.6,.04,.98,.335]],["easeOutCirc",[.075,.82,.165,1]],["easeInOutCirc",[.785,.135,.15,.86]]],function(e,t){T.Easings[t[0]]=c.apply(null,t[1])});var I=T.CSS={RegEx:{isHex:/^#([A-f\d]{3}){1,2}$/i,valueUnwrap:/^[A-z]+\((.*)\)$/i,wrappedValueAlreadyExtracted:/[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,valueSplit:/([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi},Lists:{colors:["fill","stroke","stopColor","color","backgroundColor","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor","outlineColor"],transformsBase:["translateX","translateY","scale","scaleX","scaleY","skewX","skewY","rotateZ"],transforms3D:["transformPerspective","translateZ","scaleZ","rotateX","rotateY"],units:["%","em","ex","ch","rem","vw","vh","vmin","vmax","cm","mm","Q","in","pc","pt","px","deg","grad","rad","turn","s","ms"],colorNames:{aliceblue:"240,248,255",antiquewhite:"250,235,215",aquamarine:"127,255,212",aqua:"0,255,255",azure:"240,255,255",beige:"245,245,220",bisque:"255,228,196",black:"0,0,0",blanchedalmond:"255,235,205",blueviolet:"138,43,226",blue:"0,0,255",brown:"165,42,42",burlywood:"222,184,135",cadetblue:"95,158,160",chartreuse:"127,255,0",chocolate:"210,105,30",coral:"255,127,80",cornflowerblue:"100,149,237",cornsilk:"255,248,220",crimson:"220,20,60",cyan:"0,255,255",darkblue:"0,0,139",darkcyan:"0,139,139",darkgoldenrod:"184,134,11",darkgray:"169,169,169",darkgrey:"169,169,169",darkgreen:"0,100,0",darkkhaki:"189,183,107",darkmagenta:"139,0,139",darkolivegreen:"85,107,47",darkorange:"255,140,0",darkorchid:"153,50,204",darkred:"139,0,0",darksalmon:"233,150,122",darkseagreen:"143,188,143",darkslateblue:"72,61,139",darkslategray:"47,79,79",darkturquoise:"0,206,209",darkviolet:"148,0,211",deeppink:"255,20,147",deepskyblue:"0,191,255",dimgray:"105,105,105",dimgrey:"105,105,105",dodgerblue:"30,144,255",firebrick:"178,34,34",floralwhite:"255,250,240",forestgreen:"34,139,34",fuchsia:"255,0,255",gainsboro:"220,220,220",ghostwhite:"248,248,255",gold:"255,215,0",goldenrod:"218,165,32",gray:"128,128,128",grey:"128,128,128",greenyellow:"173,255,47",green:"0,128,0",honeydew:"240,255,240",hotpink:"255,105,180",indianred:"205,92,92",indigo:"75,0,130",ivory:"255,255,240",khaki:"240,230,140",lavenderblush:"255,240,245",lavender:"230,230,250",lawngreen:"124,252,0",lemonchiffon:"255,250,205",lightblue:"173,216,230",lightcoral:"240,128,128",lightcyan:"224,255,255",lightgoldenrodyellow:"250,250,210",lightgray:"211,211,211",lightgrey:"211,211,211",lightgreen:"144,238,144",lightpink:"255,182,193",lightsalmon:"255,160,122",lightseagreen:"32,178,170",lightskyblue:"135,206,250",lightslategray:"119,136,153",lightsteelblue:"176,196,222",lightyellow:"255,255,224",limegreen:"50,205,50",lime:"0,255,0",linen:"250,240,230",magenta:"255,0,255",maroon:"128,0,0",mediumaquamarine:"102,205,170",mediumblue:"0,0,205",mediumorchid:"186,85,211",mediumpurple:"147,112,219",mediumseagreen:"60,179,113",mediumslateblue:"123,104,238",mediumspringgreen:"0,250,154",mediumturquoise:"72,209,204",mediumvioletred:"199,21,133",midnightblue:"25,25,112",mintcream:"245,255,250",mistyrose:"255,228,225",moccasin:"255,228,181",navajowhite:"255,222,173",navy:"0,0,128",oldlace:"253,245,230",olivedrab:"107,142,35",olive:"128,128,0",orangered:"255,69,0",orange:"255,165,0",orchid:"218,112,214",palegoldenrod:"238,232,170",palegreen:"152,251,152",paleturquoise:"175,238,238",palevioletred:"219,112,147",papayawhip:"255,239,213",peachpuff:"255,218,185",peru:"205,133,63",pink:"255,192,203",plum:"221,160,221",powderblue:"176,224,230",purple:"128,0,128",red:"255,0,0",rosybrown:"188,143,143",royalblue:"65,105,225",saddlebrown:"139,69,19",salmon:"250,128,114",sandybrown:"244,164,96",seagreen:"46,139,87",seashell:"255,245,238",sienna:"160,82,45",silver:"192,192,192",skyblue:"135,206,235",slateblue:"106,90,205",slategray:"112,128,144",snow:"255,250,250",springgreen:"0,255,127",steelblue:"70,130,180",tan:"210,180,140",teal:"0,128,128",thistle:"216,191,216",tomato:"255,99,71",turquoise:"64,224,208",violet:"238,130,238",wheat:"245,222,179",whitesmoke:"245,245,245",white:"255,255,255",yellowgreen:"154,205,50",yellow:"255,255,0"}},Hooks:{templates:{textShadow:["Color X Y Blur","black 0px 0px 0px"],boxShadow:["Color X Y Blur Spread","black 0px 0px 0px 0px"],clip:["Top Right Bottom Left","0px 0px 0px 0px"],backgroundPosition:["X Y","0% 0%"],transformOrigin:["X Y Z","50% 50% 0px"],perspectiveOrigin:["X Y","50% 50%"]},registered:{},register:function(){for(var e=0;e<I.Lists.colors.length;e++){var t="color"===I.Lists.colors[e]?"0 0 0 1":"255 255 255 1";I.Hooks.templates[I.Lists.colors[e]]=["Red Green Blue Alpha",t]}var n,i,o;if(h)for(n in I.Hooks.templates)if(I.Hooks.templates.hasOwnProperty(n)){i=I.Hooks.templates[n],o=i[0].split(" ");var r=i[1].match(I.RegEx.valueSplit);"Color"===o[0]&&(o.push(o.shift()),r.push(r.shift()),I.Hooks.templates[n]=[o.join(" "),r.join(" ")])}for(n in I.Hooks.templates)if(I.Hooks.templates.hasOwnProperty(n)){i=I.Hooks.templates[n],o=i[0].split(" ");for(var s in o)if(o.hasOwnProperty(s)){var a=n+o[s],l=s;I.Hooks.registered[a]=[n,l]}}},getRoot:function(e){var t=I.Hooks.registered[e];return t?t[0]:e},getUnit:function(e,t){var n=(e.substr(t||0,5).match(/^[a-z%]+/)||[])[0]||"";return n&&w(I.Lists.units,n)?n:""},fixColors:function(e){return e.replace(/(rgba?\(\s*)?(\b[a-z]+\b)/g,function(e,t,n){return I.Lists.colorNames.hasOwnProperty(n)?(t||"rgba(")+I.Lists.colorNames[n]+(t?"":",1)"):t+n})},cleanRootPropertyValue:function(e,t){return I.RegEx.valueUnwrap.test(t)&&(t=t.match(I.RegEx.valueUnwrap)[1]),I.Values.isCSSNullValue(t)&&(t=I.Hooks.templates[e][1]),t},extractValue:function(e,t){var n=I.Hooks.registered[e];if(n){var i=n[0],o=n[1];return t=I.Hooks.cleanRootPropertyValue(i,t),t.toString().match(I.RegEx.valueSplit)[o]}return t},injectValue:function(e,t,n){var i=I.Hooks.registered[e];if(i){var o,r=i[0],s=i[1];return n=I.Hooks.cleanRootPropertyValue(r,n),o=n.toString().match(I.RegEx.valueSplit),o[s]=t,o.join(" ")}return n}},Normalizations:{registered:{clip:function(e,t,n){switch(e){case"name":return"clip";case"extract":var i;return I.RegEx.wrappedValueAlreadyExtracted.test(n)?i=n:(i=n.toString().match(I.RegEx.valueUnwrap),i=i?i[1].replace(/,(\s+)?/g," "):n),i;case"inject":return"rect("+n+")"}},blur:function(e,t,n){switch(e){case"name":return T.State.isFirefox?"filter":"-webkit-filter";case"extract":var i=parseFloat(n);if(!i&&0!==i){var o=n.toString().match(/blur\(([0-9]+[A-z]+)\)/i);i=o?o[1]:0}return i;case"inject":return parseFloat(n)?"blur("+n+")":"none"}},opacity:function(e,t,n){if(h<=8)switch(e){case"name":return"filter";case"extract":var i=n.toString().match(/alpha\(opacity=(.*)\)/i);return n=i?i[1]/100:1;case"inject":return t.style.zoom=1,parseFloat(n)>=1?"":"alpha(opacity="+parseInt(100*parseFloat(n),10)+")"}else switch(e){case"name":return"opacity";case"extract":case"inject":return n}}},register:function(){function e(e,t,n){if("border-box"===I.getPropertyValue(t,"boxSizing").toString().toLowerCase()===(n||!1)){var i,o,r=0,s="width"===e?["Left","Right"]:["Top","Bottom"],a=["padding"+s[0],"padding"+s[1],"border"+s[0]+"Width","border"+s[1]+"Width"];for(i=0;i<a.length;i++)o=parseFloat(I.getPropertyValue(t,a[i])),isNaN(o)||(r+=o);return n?-r:r}return 0}function t(t,n){return function(i,o,r){switch(i){case"name":return t;case"extract":return parseFloat(r)+e(t,o,n);case"inject":return parseFloat(r)-e(t,o,n)+"px"}}}h&&!(h>9)||T.State.isGingerbread||(I.Lists.transformsBase=I.Lists.transformsBase.concat(I.Lists.transforms3D));for(var n=0;n<I.Lists.transformsBase.length;n++)!function(){var e=I.Lists.transformsBase[n];I.Normalizations.registered[e]=function(t,n,o){switch(t){case"name":return"transform";case"extract":return s(n)===i||s(n).transformCache[e]===i?/^scale/i.test(e)?1:0:s(n).transformCache[e].replace(/[()]/g,"");case"inject":var r=!1;switch(e.substr(0,e.length-1)){case"translate":r=!/(%|px|em|rem|vw|vh|\d)$/i.test(o);break;case"scal":case"scale":T.State.isAndroid&&s(n).transformCache[e]===i&&o<1&&(o=1),r=!/(\d)$/i.test(o);break;case"skew":case"rotate":r=!/(deg|\d)$/i.test(o)}return r||(s(n).transformCache[e]="("+o+")"),s(n).transformCache[e]}}}();for(var o=0;o<I.Lists.colors.length;o++)!function(){var e=I.Lists.colors[o];I.Normalizations.registered[e]=function(t,n,o){switch(t){case"name":return e;case"extract":var r;if(I.RegEx.wrappedValueAlreadyExtracted.test(o))r=o;else{var s,a={black:"rgb(0, 0, 0)",blue:"rgb(0, 0, 255)",gray:"rgb(128, 128, 128)",green:"rgb(0, 128, 0)",red:"rgb(255, 0, 0)",white:"rgb(255, 255, 255)"};/^[A-z]+$/i.test(o)?s=a[o]!==i?a[o]:a.black:I.RegEx.isHex.test(o)?s="rgb("+I.Values.hexToRgb(o).join(" ")+")":/^rgba?\(/i.test(o)||(s=a.black),r=(s||o).toString().match(I.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g," ")}return(!h||h>8)&&3===r.split(" ").length&&(r+=" 1"),r;case"inject":return/^rgb/.test(o)?o:(h<=8?4===o.split(" ").length&&(o=o.split(/\s+/).slice(0,3).join(" ")):3===o.split(" ").length&&(o+=" 1"),(h<=8?"rgb":"rgba")+"("+o.replace(/\s+/g,",").replace(/\.(\d)+(?=,)/g,"")+")")}}}();I.Normalizations.registered.innerWidth=t("width",!0),I.Normalizations.registered.innerHeight=t("height",!0),I.Normalizations.registered.outerWidth=t("width"),I.Normalizations.registered.outerHeight=t("height")}},Names:{camelCase:function(e){return e.replace(/-(\w)/g,function(e,t){return t.toUpperCase()})},SVGAttribute:function(e){var t="width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";return(h||T.State.isAndroid&&!T.State.isChrome)&&(t+="|transform"),new RegExp("^("+t+")$","i").test(e)},prefixCheck:function(e){if(T.State.prefixMatches[e])return[T.State.prefixMatches[e],!0];for(var t=["","Webkit","Moz","ms","O"],n=0,i=t.length;n<i;n++){var o;if(o=0===n?e:t[n]+e.replace(/^\w/,function(e){return e.toUpperCase()}),b.isString(T.State.prefixElement.style[o]))return T.State.prefixMatches[e]=o,[o,!0]}return[e,!1]}},Values:{/* Hex to RGB conversion. Copyright Tim Down: http://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb */
hexToRgb:function(e){var t,n=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,i=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;return e=e.replace(n,function(e,t,n,i){return t+t+n+n+i+i}),t=i.exec(e),t?[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]:[0,0,0]},isCSSNullValue:function(e){return!e||/^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(e)},getUnitType:function(e){return/^(rotate|skew)/i.test(e)?"deg":/(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(e)?"":"px"},getDisplayType:function(e){var t=e&&e.tagName.toString().toLowerCase();return/^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(t)?"inline":/^(li)$/i.test(t)?"list-item":/^(tr)$/i.test(t)?"table-row":/^(table)$/i.test(t)?"table":/^(tbody)$/i.test(t)?"table-row-group":"block"},addClass:function(e,t){if(e)if(e.classList)e.classList.add(t);else if(b.isString(e.className))e.className+=(e.className.length?" ":"")+t;else{var n=e.getAttribute(h<=7?"className":"class")||"";e.setAttribute("class",n+(n?" ":"")+t)}},removeClass:function(e,t){if(e)if(e.classList)e.classList.remove(t);else if(b.isString(e.className))e.className=e.className.toString().replace(new RegExp("(^|\\s)"+t.split(" ").join("|")+"(\\s|$)","gi")," ");else{var n=e.getAttribute(h<=7?"className":"class")||"";e.setAttribute("class",n.replace(new RegExp("(^|s)"+t.split(" ").join("|")+"(s|$)","gi")," "))}}},getPropertyValue:function(e,n,o,r){function a(e,n){var o=0;if(h<=8)o=m.css(e,n);else{var l=!1;/^(width|height)$/.test(n)&&0===I.getPropertyValue(e,"display")&&(l=!0,I.setPropertyValue(e,"display",I.Values.getDisplayType(e)));var u=function(){l&&I.setPropertyValue(e,"display","none")};if(!r){if("height"===n&&"border-box"!==I.getPropertyValue(e,"boxSizing").toString().toLowerCase()){var c=e.offsetHeight-(parseFloat(I.getPropertyValue(e,"borderTopWidth"))||0)-(parseFloat(I.getPropertyValue(e,"borderBottomWidth"))||0)-(parseFloat(I.getPropertyValue(e,"paddingTop"))||0)-(parseFloat(I.getPropertyValue(e,"paddingBottom"))||0);return u(),c}if("width"===n&&"border-box"!==I.getPropertyValue(e,"boxSizing").toString().toLowerCase()){var p=e.offsetWidth-(parseFloat(I.getPropertyValue(e,"borderLeftWidth"))||0)-(parseFloat(I.getPropertyValue(e,"borderRightWidth"))||0)-(parseFloat(I.getPropertyValue(e,"paddingLeft"))||0)-(parseFloat(I.getPropertyValue(e,"paddingRight"))||0);return u(),p}}var d;d=s(e)===i?t.getComputedStyle(e,null):s(e).computedStyle?s(e).computedStyle:s(e).computedStyle=t.getComputedStyle(e,null),"borderColor"===n&&(n="borderTopColor"),o=9===h&&"filter"===n?d.getPropertyValue(n):d[n],""!==o&&null!==o||(o=e.style[n]),u()}if("auto"===o&&/^(top|right|bottom|left)$/i.test(n)){var f=a(e,"position");("fixed"===f||"absolute"===f&&/top|left/i.test(n))&&(o=m(e).position()[n]+"px")}return o}var l;if(I.Hooks.registered[n]){var u=n,c=I.Hooks.getRoot(u);o===i&&(o=I.getPropertyValue(e,I.Names.prefixCheck(c)[0])),I.Normalizations.registered[c]&&(o=I.Normalizations.registered[c]("extract",e,o)),l=I.Hooks.extractValue(u,o)}else if(I.Normalizations.registered[n]){var p,d;p=I.Normalizations.registered[n]("name",e),"transform"!==p&&(d=a(e,I.Names.prefixCheck(p)[0]),I.Values.isCSSNullValue(d)&&I.Hooks.templates[n]&&(d=I.Hooks.templates[n][1])),l=I.Normalizations.registered[n]("extract",e,d)}if(!/^[\d-]/.test(l)){var f=s(e);if(f&&f.isSVG&&I.Names.SVGAttribute(n))if(/^(height|width)$/i.test(n))try{l=e.getBBox()[n]}catch(e){l=0}else l=e.getAttribute(n);else l=a(e,I.Names.prefixCheck(n)[0])}return I.Values.isCSSNullValue(l)&&(l=0),T.debug>=2&&console.log("Get "+n+": "+l),l},setPropertyValue:function(e,n,i,o,r){var a=n;if("scroll"===n)r.container?r.container["scroll"+r.direction]=i:"Left"===r.direction?t.scrollTo(i,r.alternateValue):t.scrollTo(r.alternateValue,i);else if(I.Normalizations.registered[n]&&"transform"===I.Normalizations.registered[n]("name",e))I.Normalizations.registered[n]("inject",e,i),a="transform",i=s(e).transformCache[n];else{if(I.Hooks.registered[n]){var l=n,u=I.Hooks.getRoot(n);o=o||I.getPropertyValue(e,u),i=I.Hooks.injectValue(l,i,o),n=u}if(I.Normalizations.registered[n]&&(i=I.Normalizations.registered[n]("inject",e,i),n=I.Normalizations.registered[n]("name",e)),a=I.Names.prefixCheck(n)[0],h<=8)try{e.style[a]=i}catch(e){T.debug&&console.log("Browser does not support ["+i+"] for ["+a+"]")}else{var c=s(e);c&&c.isSVG&&I.Names.SVGAttribute(n)?e.setAttribute(n,i):e.style[a]=i}T.debug>=2&&console.log("Set "+n+" ("+a+"): "+i)}return[a,i]},flushTransformCache:function(e){var t="",n=s(e);if((h||T.State.isAndroid&&!T.State.isChrome)&&n&&n.isSVG){var i=function(t){return parseFloat(I.getPropertyValue(e,t))},o={translate:[i("translateX"),i("translateY")],skewX:[i("skewX")],skewY:[i("skewY")],scale:1!==i("scale")?[i("scale"),i("scale")]:[i("scaleX"),i("scaleY")],rotate:[i("rotateZ"),0,0]};m.each(s(e).transformCache,function(e){/^translate/i.test(e)?e="translate":/^scale/i.test(e)?e="scale":/^rotate/i.test(e)&&(e="rotate"),o[e]&&(t+=e+"("+o[e].join(" ")+") ",delete o[e])})}else{var r,a;m.each(s(e).transformCache,function(n){if(r=s(e).transformCache[n],"transformPerspective"===n)return a=r,!0;9===h&&"rotateZ"===n&&(n="rotate"),t+=n+r+" "}),a&&(t="perspective"+a+" "+t)}I.setPropertyValue(e,"transform",t)}};I.Hooks.register(),I.Normalizations.register(),T.hook=function(e,t,n){var o;return e=r(e),m.each(e,function(e,r){if(s(r)===i&&T.init(r),n===i)o===i&&(o=I.getPropertyValue(r,t));else{var a=I.setPropertyValue(r,t,n);"transform"===a[0]&&T.CSS.flushTransformCache(r),o=a}}),o};var E=function(){function e(){return c?P.promise||null:h}function o(e,o){function r(r){var c,f;if(l.begin&&0===A)try{l.begin.call(v,v)}catch(e){setTimeout(function(){throw e},1)}if("scroll"===O){var h,g,S,C=/^x$/i.test(l.axis)?"Left":"Top",E=parseFloat(l.offset)||0;l.container?b.isWrapped(l.container)||b.isNode(l.container)?(l.container=l.container[0]||l.container,h=l.container["scroll"+C],S=h+m(e).position()[C.toLowerCase()]+E):l.container=null:(h=T.State.scrollAnchor[T.State["scrollProperty"+C]],g=T.State.scrollAnchor[T.State["scrollProperty"+("Left"===C?"Top":"Left")]],S=m(e).offset()[C.toLowerCase()]+E),u={scroll:{rootPropertyValue:!1,startValue:h,currentValue:h,endValue:S,unitType:"",easing:l.easing,scrollData:{container:l.container,direction:C,alternateValue:g}},element:e},T.debug&&console.log("tweensContainer (scroll): ",u.scroll,e)}else if("reverse"===O){if(!(c=s(e)))return;if(!c.tweensContainer)return void m.dequeue(e,l.queue);"none"===c.opts.display&&(c.opts.display="auto"),"hidden"===c.opts.visibility&&(c.opts.visibility="visible"),c.opts.loop=!1,c.opts.begin=null,c.opts.complete=null,x.easing||delete l.easing,x.duration||delete l.duration,l=m.extend({},c.opts,l),f=m.extend(!0,{},c?c.tweensContainer:null);for(var z in f)if(f.hasOwnProperty(z)&&"element"!==z){var V=f[z].startValue;f[z].startValue=f[z].currentValue=f[z].endValue,f[z].endValue=V,b.isEmptyObject(x)||(f[z].easing=l.easing),T.debug&&console.log("reverse tweensContainer ("+z+"): "+JSON.stringify(f[z]),e)}u=f}else if("start"===O){c=s(e),c&&c.tweensContainer&&!0===c.isAnimating&&(f=c.tweensContainer);var N=function(o,r){var s,p=I.Hooks.getRoot(o),d=!1,h=r[0],g=r[1],v=r[2];if(!(c&&c.isSVG||"tween"===p||!1!==I.Names.prefixCheck(p)[1]||I.Normalizations.registered[p]!==i))return void(T.debug&&console.log("Skipping ["+p+"] due to a lack of browser support."));(l.display!==i&&null!==l.display&&"none"!==l.display||l.visibility!==i&&"hidden"!==l.visibility)&&/opacity|filter/.test(o)&&!v&&0!==h&&(v=0),l._cacheValues&&f&&f[o]?(v===i&&(v=f[o].endValue+f[o].unitType),d=c.rootPropertyValueCache[p]):I.Hooks.registered[o]?v===i?(d=I.getPropertyValue(e,p),v=I.getPropertyValue(e,o,d)):d=I.Hooks.templates[p][1]:v===i&&(v=I.getPropertyValue(e,o));var y,w,x,S=!1,C=function(e,t){var n,i;return i=(t||"0").toString().toLowerCase().replace(/[%A-z]+$/,function(e){return n=e,""}),n||(n=I.Values.getUnitType(e)),[i,n]};if(v!==h&&b.isString(v)&&b.isString(h)){s="";var P=0,E=0,k=[],A=[],z=0,V=0,O=0;for(v=I.Hooks.fixColors(v),h=I.Hooks.fixColors(h);P<v.length&&E<h.length;){var N=v[P],_=h[E];if(/[\d\.-]/.test(N)&&/[\d\.-]/.test(_)){for(var L=N,W=_,j=".",F=".";++P<v.length;){if((N=v[P])===j)j="..";else if(!/\d/.test(N))break;L+=N}for(;++E<h.length;){if((_=h[E])===F)F="..";else if(!/\d/.test(_))break;W+=_}var $=I.Hooks.getUnit(v,P),M=I.Hooks.getUnit(h,E);if(P+=$.length,E+=M.length,$===M)L===W?s+=L+$:(s+="{"+k.length+(V?"!":"")+"}"+$,k.push(parseFloat(L)),A.push(parseFloat(W)));else{var D=parseFloat(L),H=parseFloat(W);s+=(z<5?"calc":"")+"("+(D?"{"+k.length+(V?"!":"")+"}":"0")+$+" + "+(H?"{"+(k.length+(D?1:0))+(V?"!":"")+"}":"0")+M+")",D&&(k.push(D),A.push(0)),H&&(k.push(0),A.push(H))}}else{if(N!==_){z=0;break}s+=N,P++,E++,0===z&&"c"===N||1===z&&"a"===N||2===z&&"l"===N||3===z&&"c"===N||z>=4&&"("===N?z++:(z&&z<5||z>=4&&")"===N&&--z<5)&&(z=0),0===V&&"r"===N||1===V&&"g"===N||2===V&&"b"===N||3===V&&"a"===N||V>=3&&"("===N?(3===V&&"a"===N&&(O=1),V++):O&&","===N?++O>3&&(V=O=0):(O&&V<(O?5:4)||V>=(O?4:3)&&")"===N&&--V<(O?5:4))&&(V=O=0)}}P===v.length&&E===h.length||(T.debug&&console.error('Trying to pattern match mis-matched strings ["'+h+'", "'+v+'"]'),s=i),s&&(k.length?(T.debug&&console.log('Pattern found "'+s+'" -> ',k,A,"["+v+","+h+"]"),v=k,h=A,w=x=""):s=i)}s||(y=C(o,v),v=y[0],x=y[1],y=C(o,h),h=y[0].replace(/^([+-\/*])=/,function(e,t){return S=t,""}),w=y[1],v=parseFloat(v)||0,h=parseFloat(h)||0,"%"===w&&(/^(fontSize|lineHeight)$/.test(o)?(h/=100,w="em"):/^scale/.test(o)?(h/=100,w=""):/(Red|Green|Blue)$/i.test(o)&&(h=h/100*255,w="")));if(/[\/*]/.test(S))w=x;else if(x!==w&&0!==v)if(0===h)w=x;else{a=a||function(){var i={myParent:e.parentNode||n.body,position:I.getPropertyValue(e,"position"),fontSize:I.getPropertyValue(e,"fontSize")},o=i.position===R.lastPosition&&i.myParent===R.lastParent,r=i.fontSize===R.lastFontSize;R.lastParent=i.myParent,R.lastPosition=i.position,R.lastFontSize=i.fontSize;var s={};if(r&&o)s.emToPx=R.lastEmToPx,s.percentToPxWidth=R.lastPercentToPxWidth,s.percentToPxHeight=R.lastPercentToPxHeight;else{var a=c&&c.isSVG?n.createElementNS("http://www.w3.org/2000/svg","rect"):n.createElement("div");T.init(a),i.myParent.appendChild(a),m.each(["overflow","overflowX","overflowY"],function(e,t){T.CSS.setPropertyValue(a,t,"hidden")}),T.CSS.setPropertyValue(a,"position",i.position),T.CSS.setPropertyValue(a,"fontSize",i.fontSize),T.CSS.setPropertyValue(a,"boxSizing","content-box"),m.each(["minWidth","maxWidth","width","minHeight","maxHeight","height"],function(e,t){T.CSS.setPropertyValue(a,t,"100%")}),T.CSS.setPropertyValue(a,"paddingLeft","100em"),s.percentToPxWidth=R.lastPercentToPxWidth=(parseFloat(I.getPropertyValue(a,"width",null,!0))||1)/100,s.percentToPxHeight=R.lastPercentToPxHeight=(parseFloat(I.getPropertyValue(a,"height",null,!0))||1)/100,s.emToPx=R.lastEmToPx=(parseFloat(I.getPropertyValue(a,"paddingLeft"))||1)/100,i.myParent.removeChild(a)}return null===R.remToPx&&(R.remToPx=parseFloat(I.getPropertyValue(n.body,"fontSize"))||16),null===R.vwToPx&&(R.vwToPx=parseFloat(t.innerWidth)/100,R.vhToPx=parseFloat(t.innerHeight)/100),s.remToPx=R.remToPx,s.vwToPx=R.vwToPx,s.vhToPx=R.vhToPx,T.debug>=1&&console.log("Unit ratios: "+JSON.stringify(s),e),s}();var q=/margin|padding|left|right|width|text|word|letter/i.test(o)||/X$/.test(o)||"x"===o?"x":"y";switch(x){case"%":v*="x"===q?a.percentToPxWidth:a.percentToPxHeight;break;case"px":break;default:v*=a[x+"ToPx"]}switch(w){case"%":v*=1/("x"===q?a.percentToPxWidth:a.percentToPxHeight);break;case"px":break;default:v*=1/a[w+"ToPx"]}}switch(S){case"+":h=v+h;break;case"-":h=v-h;break;case"*":h*=v;break;case"/":h=v/h}u[o]={rootPropertyValue:d,startValue:v,currentValue:v,endValue:h,unitType:w,easing:g},s&&(u[o].pattern=s),T.debug&&console.log("tweensContainer ("+o+"): "+JSON.stringify(u[o]),e)};for(var _ in y)if(y.hasOwnProperty(_)){var L=I.Names.camelCase(_),W=function(t,n){var i,r,s;return b.isFunction(t)&&(t=t.call(e,o,k)),b.isArray(t)?(i=t[0],!b.isArray(t[1])&&/^[\d-]/.test(t[1])||b.isFunction(t[1])||I.RegEx.isHex.test(t[1])?s=t[1]:b.isString(t[1])&&!I.RegEx.isHex.test(t[1])&&T.Easings[t[1]]||b.isArray(t[1])?(r=n?t[1]:p(t[1],l.duration),s=t[2]):s=t[1]||t[2]):i=t,n||(r=r||l.easing),b.isFunction(i)&&(i=i.call(e,o,k)),b.isFunction(s)&&(s=s.call(e,o,k)),[i||0,r,s]}(y[_]);if(w(I.Lists.colors,L)){var j=W[0],$=W[1],M=W[2];if(I.RegEx.isHex.test(j)){for(var D=["Red","Green","Blue"],H=I.Values.hexToRgb(j),q=M?I.Values.hexToRgb(M):i,B=0;B<D.length;B++){var Y=[H[B]];$&&Y.push($),q!==i&&Y.push(q[B]),N(L+D[B],Y)}continue}}N(L,W)}u.element=e}u.element&&(I.Values.addClass(e,"velocity-animating"),F.push(u),c=s(e),c&&(""===l.queue&&(c.tweensContainer=u,c.opts=l),c.isAnimating=!0),A===k-1?(T.State.calls.push([F,v,l,null,P.resolver,null,0]),!1===T.State.isTicking&&(T.State.isTicking=!0,d())):A++)}var a,l=m.extend({},T.defaults,x),u={};switch(s(e)===i&&T.init(e),parseFloat(l.delay)&&!1!==l.queue&&m.queue(e,l.queue,function(t){T.velocityQueueEntryFlag=!0;var n=T.State.delayedElements.count++;T.State.delayedElements[n]=e;var i=function(e){return function(){T.State.delayedElements[e]=!1,t()}}(n);s(e).delayBegin=(new Date).getTime(),s(e).delay=parseFloat(l.delay),s(e).delayTimer={setTimeout:setTimeout(t,parseFloat(l.delay)),next:i}}),l.duration.toString().toLowerCase()){case"fast":l.duration=200;break;case"normal":l.duration=S;break;case"slow":l.duration=600;break;default:l.duration=parseFloat(l.duration)||1}if(!1!==T.mock&&(!0===T.mock?l.duration=l.delay=1:(l.duration*=parseFloat(T.mock)||1,l.delay*=parseFloat(T.mock)||1)),l.easing=p(l.easing,l.duration),l.begin&&!b.isFunction(l.begin)&&(l.begin=null),l.progress&&!b.isFunction(l.progress)&&(l.progress=null),l.complete&&!b.isFunction(l.complete)&&(l.complete=null),l.display!==i&&null!==l.display&&(l.display=l.display.toString().toLowerCase(),"auto"===l.display&&(l.display=T.CSS.Values.getDisplayType(e))),l.visibility!==i&&null!==l.visibility&&(l.visibility=l.visibility.toString().toLowerCase()),l.mobileHA=l.mobileHA&&T.State.isMobile&&!T.State.isGingerbread,!1===l.queue)if(l.delay){var c=T.State.delayedElements.count++;T.State.delayedElements[c]=e;var f=function(e){return function(){T.State.delayedElements[e]=!1,r()}}(c);s(e).delayBegin=(new Date).getTime(),s(e).delay=parseFloat(l.delay),s(e).delayTimer={setTimeout:setTimeout(r,parseFloat(l.delay)),next:f}}else r();else m.queue(e,l.queue,function(e,t){if(!0===t)return P.promise&&P.resolver(v),!0;T.velocityQueueEntryFlag=!0,r(e)});""!==l.queue&&"fx"!==l.queue||"inprogress"===m.queue(e)[0]||m.dequeue(e)}var u,c,h,g,v,y,x,C=arguments[0]&&(arguments[0].p||m.isPlainObject(arguments[0].properties)&&!arguments[0].properties.names||b.isString(arguments[0].properties));b.isWrapped(this)?(c=!1,g=0,v=this,h=this):(c=!0,g=1,v=C?arguments[0].elements||arguments[0].e:arguments[0]);var P={promise:null,resolver:null,rejecter:null};if(c&&T.Promise&&(P.promise=new T.Promise(function(e,t){P.resolver=e,P.rejecter=t})),C?(y=arguments[0].properties||arguments[0].p,x=arguments[0].options||arguments[0].o):(y=arguments[g],x=arguments[g+1]),!(v=r(v)))return void(P.promise&&(y&&x&&!1===x.promiseRejectEmpty?P.resolver():P.rejecter()));var k=v.length,A=0;if(!/^(stop|finish|finishAll|pause|resume)$/i.test(y)&&!m.isPlainObject(x)){var z=g+1;x={};for(var V=z;V<arguments.length;V++)b.isArray(arguments[V])||!/^(fast|normal|slow)$/i.test(arguments[V])&&!/^\d/.test(arguments[V])?b.isString(arguments[V])||b.isArray(arguments[V])?x.easing=arguments[V]:b.isFunction(arguments[V])&&(x.complete=arguments[V]):x.duration=arguments[V]}var O;switch(y){case"scroll":O="scroll";break;case"reverse":O="reverse";break;case"pause":var N=(new Date).getTime();return m.each(v,function(e,t){a(t,N)}),m.each(T.State.calls,function(e,t){var n=!1;t&&m.each(t[1],function(e,o){var r=x===i?"":x;return!0!==r&&t[2].queue!==r&&(x!==i||!1!==t[2].queue)||(m.each(v,function(e,i){if(i===o)return t[5]={resume:!1},n=!0,!1}),!n&&void 0)})}),e();case"resume":return m.each(v,function(e,t){l(t,N)}),m.each(T.State.calls,function(e,t){var n=!1;t&&m.each(t[1],function(e,o){var r=x===i?"":x;return!0!==r&&t[2].queue!==r&&(x!==i||!1!==t[2].queue)||(!t[5]||(m.each(v,function(e,i){if(i===o)return t[5].resume=!0,n=!0,!1}),!n&&void 0))})}),e();case"finish":case"finishAll":case"stop":m.each(v,function(e,t){s(t)&&s(t).delayTimer&&(clearTimeout(s(t).delayTimer.setTimeout),s(t).delayTimer.next&&s(t).delayTimer.next(),delete s(t).delayTimer),"finishAll"!==y||!0!==x&&!b.isString(x)||(m.each(m.queue(t,b.isString(x)?x:""),function(e,t){b.isFunction(t)&&t()}),m.queue(t,b.isString(x)?x:"",[]))});var _=[];return m.each(T.State.calls,function(e,t){t&&m.each(t[1],function(n,o){var r=x===i?"":x;if(!0!==r&&t[2].queue!==r&&(x!==i||!1!==t[2].queue))return!0;m.each(v,function(n,i){if(i===o)if((!0===x||b.isString(x))&&(m.each(m.queue(i,b.isString(x)?x:""),function(e,t){b.isFunction(t)&&t(null,!0)}),m.queue(i,b.isString(x)?x:"",[])),"stop"===y){var a=s(i);a&&a.tweensContainer&&!1!==r&&m.each(a.tweensContainer,function(e,t){t.endValue=t.currentValue}),_.push(e)}else"finish"!==y&&"finishAll"!==y||(t[2].duration=1)})})}),"stop"===y&&(m.each(_,function(e,t){f(t,!0)}),P.promise&&P.resolver(v)),e();default:if(!m.isPlainObject(y)||b.isEmptyObject(y)){if(b.isString(y)&&T.Redirects[y]){u=m.extend({},x);var L=u.duration,W=u.delay||0;return!0===u.backwards&&(v=m.extend(!0,[],v).reverse()),m.each(v,function(e,t){parseFloat(u.stagger)?u.delay=W+parseFloat(u.stagger)*e:b.isFunction(u.stagger)&&(u.delay=W+u.stagger.call(t,e,k)),u.drag&&(u.duration=parseFloat(L)||(/^(callout|transition)/.test(y)?1e3:S),u.duration=Math.max(u.duration*(u.backwards?1-e/k:(e+1)/k),.75*u.duration,200)),T.Redirects[y].call(t,t,u||{},e,k,v,P.promise?P:i)}),e()}var j="Velocity: First argument ("+y+") was not a property map, a known action, or a registered redirect. Aborting.";return P.promise?P.rejecter(new Error(j)):t.console&&console.log(j),e()}O="start"}var R={lastParent:null,lastPosition:null,lastFontSize:null,lastPercentToPxWidth:null,lastPercentToPxHeight:null,lastEmToPx:null,remToPx:null,vwToPx:null,vhToPx:null},F=[];m.each(v,function(e,t){b.isNode(t)&&o(t,e)}),u=m.extend({},T.defaults,x),u.loop=parseInt(u.loop,10);var $=2*u.loop-1;if(u.loop)for(var M=0;M<$;M++){var D={delay:u.delay,progress:u.progress};M===$-1&&(D.display=u.display,D.visibility=u.visibility,D.complete=u.complete),E(v,"reverse",D)}return e()};T=m.extend(E,T),T.animate=E;var k=t.requestAnimationFrame||g;if(!T.State.isMobile&&n.hidden!==i){var A=function(){n.hidden?(k=function(e){return setTimeout(function(){e(!0)},16)},d()):k=t.requestAnimationFrame||g};A(),n.addEventListener("visibilitychange",A)}return e.Velocity=T,e!==t&&(e.fn.velocity=E,e.fn.velocity.defaults=T.defaults),m.each(["Down","Up"],function(e,t){T.Redirects["slide"+t]=function(e,n,o,r,s,a){var l=m.extend({},n),u=l.begin,c=l.complete,p={},d={height:"",marginTop:"",marginBottom:"",paddingTop:"",paddingBottom:""};l.display===i&&(l.display="Down"===t?"inline"===T.CSS.Values.getDisplayType(e)?"inline-block":"block":"none"),l.begin=function(){0===o&&u&&u.call(s,s);for(var n in d)if(d.hasOwnProperty(n)){p[n]=e.style[n];var i=I.getPropertyValue(e,n);d[n]="Down"===t?[i,0]:[0,i]}p.overflow=e.style.overflow,e.style.overflow="hidden"},l.complete=function(){for(var t in p)p.hasOwnProperty(t)&&(e.style[t]=p[t]);o===r-1&&(c&&c.call(s,s),a&&a.resolver(s))},T(e,d,l)}}),m.each(["In","Out"],function(e,t){T.Redirects["fade"+t]=function(e,n,o,r,s,a){var l=m.extend({},n),u=l.complete,c={opacity:"In"===t?1:0};0!==o&&(l.begin=null),l.complete=o!==r-1?null:function(){u&&u.call(s,s),a&&a.resolver(s)},l.display===i&&(l.display="In"===t?"auto":"none"),T(this,c,l)}}),T}(window.jQuery||window.Zepto||window,window,window?window.document:void 0)}),function(e){"use strict";e.fn.fitVids=function(t){var n={customSelector:null,ignore:null};if(!document.getElementById("fit-vids-style")){var i=document.head||document.getElementsByTagName("head")[0],o=document.createElement("div");o.innerHTML='<p>x</p><style id="fit-vids-style">.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}</style>',i.appendChild(o.childNodes[1])}return t&&e.extend(n,t),this.each(function(){var t=['iframe[src*="player.vimeo.com"]','iframe[src*="youtube.com"]','iframe[src*="youtube-nocookie.com"]','iframe[src*="kickstarter.com"][src*="video.html"]',"object","embed"];n.customSelector&&t.push(n.customSelector);var i=".fitvidsignore";n.ignore&&(i=i+", "+n.ignore);var o=e(this).find(t.join(","));o=o.not("object object"),o=o.not(i),o.each(function(){var t=e(this);if(!(t.parents(i).length>0||"embed"===this.tagName.toLowerCase()&&t.parent("object").length||t.parent(".fluid-width-video-wrapper").length)){t.css("height")||t.css("width")||!isNaN(t.attr("height"))&&!isNaN(t.attr("width"))||(t.attr("height",9),t.attr("width",16));var n="object"===this.tagName.toLowerCase()||t.attr("height")&&!isNaN(parseInt(t.attr("height"),10))?parseInt(t.attr("height"),10):t.height(),o=isNaN(parseInt(t.attr("width"),10))?t.width():parseInt(t.attr("width"),10),r=n/o;if(!t.attr("name")){var s="fitvid"+e.fn.fitVids._count;t.attr("name",s),e.fn.fitVids._count++}t.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top",100*r+"%"),t.removeAttr("height").removeAttr("width")}})})},e.fn.fitVids._count=0}(window.jQuery||window.Zepto),function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).cssVars=t()}(this,function(){"use strict";function e(){return(e=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}function t(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function n(e){function t(){return!("<"===(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").trim().charAt(0))}function n(e,t){r.onError(e,s[t],t)}function i(e,t){var n=r.onSuccess(e,s[t],t);e=!1===n?"":n||e,a[t]=e,-1===a.indexOf(null)&&r.onComplete(a)}var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r={mimeType:o.mimeType||null,onBeforeSend:o.onBeforeSend||Function.prototype,onSuccess:o.onSuccess||Function.prototype,onError:o.onError||Function.prototype,onComplete:o.onComplete||Function.prototype},s=Array.isArray(e)?e:[e],a=Array.apply(null,Array(s.length)).map(function(e){return null}),l=document.createElement("a");s.forEach(function(e,o){if(l.setAttribute("href",e),l.href=String(l.href),Boolean(document.all&&!window.atob)&&l.host.split(":")[0]!==location.host.split(":")[0])if(l.protocol===location.protocol){var s=new XDomainRequest;s.open("GET",e),s.timeout=0,s.onprogress=Function.prototype,s.ontimeout=Function.prototype,s.onload=function(){t(s.responseText)?i(s.responseText,o):n(s,o)},s.onerror=function(e){n(s,o)},setTimeout(function(){s.send()},0)}else console.warn("Internet Explorer 9 Cross-Origin (CORS) requests must use the same protocol (".concat(e,")")),n(null,o);else{var a=new XMLHttpRequest;a.open("GET",e),r.mimeType&&a.overrideMimeType&&a.overrideMimeType(r.mimeType),r.onBeforeSend(a,e,o),a.onreadystatechange=function(){4===a.readyState&&(200===a.status&&t(a.responseText)?i(a.responseText,o):n(a,o))},a.send()}})}function i(e){function t(){if(-1===u.indexOf(null)){var e=u.join("");a.onComplete(e,u,l)}}function i(e,i,o,s){var l=a.onSuccess(e,o,s);!function e(t,i,o,s){var l=arguments.length>4&&void 0!==arguments[4]?arguments[4]:[],u=arguments.length>5&&void 0!==arguments[5]?arguments[5]:[],c=r(t,o,u);c.rules.length?n(c.absoluteUrls,{onBeforeSend:function(e,t,n){a.onBeforeSend(e,i,t)},onSuccess:function(e,t,n){var o=a.onSuccess(e,i,t),s=r(e=!1===o?"":o||e,t,u);return s.rules.forEach(function(t,n){e=e.replace(t,s.absoluteRules[n])}),e},onError:function(n,r,a){l.push({xhr:n,url:r}),u.push(c.rules[a]),e(t,i,o,s,l,u)},onComplete:function(n){n.forEach(function(e,n){t=t.replace(c.rules[n],e)}),e(t,i,o,s,l,u)}}):s(t,l)}(e=void 0!==l&&!1===Boolean(l)?"":l||e,o,s,function(e,n){null===u[i]&&(n.forEach(function(e){return a.onError(e.xhr,o,e.url)}),!a.filter||a.filter.test(e)?u[i]=e:u[i]="",t())})}function r(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],i={};return i.rules=(e.replace(s.cssComments,"").match(s.cssImports)||[]).filter(function(e){return-1===n.indexOf(e)}),i.urls=i.rules.map(function(e){return e.replace(s.cssImports,"$1")}),i.absoluteUrls=i.urls.map(function(e){return o(e,t)}),i.absoluteRules=i.rules.map(function(e,n){var r=i.urls[n],s=o(i.absoluteUrls[n],t);return e.replace(r,s)}),i}var s={cssComments:/\/\*[\s\S]+?\*\//g,cssImports:/(?:@import\s*)(?:url\(\s*)?(?:['"])([^'"]*)(?:['"])(?:\s*\))?(?:[^;]*;)/g},a={rootElement:e.rootElement||document,include:e.include||'style,link[rel="stylesheet"]',exclude:e.exclude||null,filter:e.filter||null,useCSSOM:e.useCSSOM||!1,onBeforeSend:e.onBeforeSend||Function.prototype,onSuccess:e.onSuccess||Function.prototype,onError:e.onError||Function.prototype,onComplete:e.onComplete||Function.prototype},l=Array.apply(null,a.rootElement.querySelectorAll(a.include)).filter(function(e){return t=e,n=a.exclude,!(t.matches||t.matchesSelector||t.webkitMatchesSelector||t.mozMatchesSelector||t.msMatchesSelector||t.oMatchesSelector).call(t,n);var t,n}),u=Array.apply(null,Array(l.length)).map(function(e){return null});l.length?l.forEach(function(e,r){var s=e.getAttribute("href"),l=e.getAttribute("rel"),c="LINK"===e.nodeName&&s&&l&&"stylesheet"===l.toLowerCase(),p="STYLE"===e.nodeName;if(c)n(s,{mimeType:"text/css",onBeforeSend:function(t,n,i){a.onBeforeSend(t,e,n)},onSuccess:function(t,n,a){var l=o(s,location.href);i(t,r,e,l)},onError:function(n,i,o){u[r]="",a.onError(n,e,i),t()}});else if(p){var d=e.textContent;a.useCSSOM&&(d=Array.apply(null,e.sheet.cssRules).map(function(e){return e.cssText}).join("")),i(d,r,e,location.href)}else u[r]="",t()}):a.onComplete("",[])}function o(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:location.href,n=document.implementation.createHTMLDocument(""),i=n.createElement("base"),o=n.createElement("a");return n.head.appendChild(i),n.body.appendChild(o),i.href=t,o.href=e,o.href}function r(e,t,n){e instanceof RegExp&&(e=s(e,n)),t instanceof RegExp&&(t=s(t,n));var i=a(e,t,n);return i&&{start:i[0],end:i[1],pre:n.slice(0,i[0]),body:n.slice(i[0]+e.length,i[1]),post:n.slice(i[1]+t.length)}}function s(e,t){var n=t.match(e);return n?n[0]:null}function a(e,t,n){var i,o,r,s,a,l=n.indexOf(e),u=n.indexOf(t,l+1),c=l;if(l>=0&&u>0){for(i=[],r=n.length;c>=0&&!a;)c==l?(i.push(c),l=n.indexOf(e,c+1)):1==i.length?a=[i.pop(),u]:((o=i.pop())<r&&(r=o,s=u),u=n.indexOf(t,c+1)),c=l<u&&l>=0?l:u;i.length&&(a=[r,s])}return a}function l(t){function n(e){throw new Error("CSS parse error: ".concat(e))}function i(e){var n=e.exec(t);if(n)return t=t.slice(n[0].length),n}function o(){return i(/^{\s*/)}function r(){return i(/^}/)}function s(){i(/^\s*/)}function a(){if(s(),"/"===t[0]&&"*"===t[1]){for(var e=2;t[e]&&("*"!==t[e]||"/"!==t[e+1]);)e++;if(!t[e])return n("end of comment is missing");var i=t.slice(2,e);return t=t.slice(e+2),{type:"comment",comment:i}}}function l(){for(var e,t=[];e=a();)t.push(e);return v.removeComments?[]:t}function u(){for(s();"}"===t[0];)n("extra closing bracket");var e=i(/^(("(?:\\"|[^"])*"|'(?:\\'|[^'])*'|[^{])+)/);if(e)return e[0].trim().replace(/\/\*([^*]|[\r\n]|(\*+([^*\/]|[\r\n])))*\*\/+/g,"").replace(/"(?:\\"|[^"])*"|'(?:\\'|[^'])*'/g,function(e){return e.replace(/,/g,"‌")}).split(/\s*(?![^(]*\)),\s*/).map(function(e){return e.replace(/\u200C/g,",")})}function c(){i(/^([;\s]*)+/);var e=/\/\*[^*]*\*+([^\/*][^*]*\*+)*\//g,t=i(/^(\*?[-#\/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/);if(t){if(t=t[0].trim(),!i(/^:\s*/))return n("property missing ':'");var o=i(/^((?:\/\*.*?\*\/|'(?:\\'|.)*?'|"(?:\\"|.)*?"|\((\s*'(?:\\'|.)*?'|"(?:\\"|.)*?"|[^)]*?)\s*\)|[^};])+)/),r={type:"declaration",property:t.replace(e,""),value:o?o[0].replace(e,"").trim():""};return i(/^[;\s]*/),r}}function p(){if(!o())return n("missing '{'");for(var e,t=l();e=c();)t.push(e),t=t.concat(l());return r()?t:n("missing '}'")}function d(){s();for(var e,t=[];e=i(/^((\d+\.\d+|\.\d+|\d+)%?|[a-z]+)\s*/);)t.push(e[1]),i(/^,\s*/);if(t.length)return{type:"keyframe",values:t,declarations:p()}}function m(){if(s(),"@"===t[0]){var e=function(){var e=i(/^@([-\w]+)?keyframes\s*/);if(e){var t=e[1];if(!(e=i(/^([-\w]+)\s*/)))return n("@keyframes missing name");var s,a=e[1];if(!o())return n("@keyframes missing '{'");for(var u=l();s=d();)u.push(s),u=u.concat(l());return r()?{type:"keyframes",name:a,vendor:t,keyframes:u}:n("@keyframes missing '}'")}}()||function(){var e=i(/^@supports *([^{]+)/);if(e)return{type:"supports",supports:e[1].trim(),rules:g()}}()||function(){if(i(/^@host\s*/))return{type:"host",rules:g()}}()||function(){var e=i(/^@media *([^{]+)/);if(e)return{type:"media",media:e[1].trim(),rules:g()}}()||function(){var e=i(/^@custom-media\s+(--[^\s]+)\s*([^{;]+);/);if(e)return{type:"custom-media",name:e[1].trim(),media:e[2].trim()}}()||function(){if(i(/^@page */))return{type:"page",selectors:u()||[],declarations:p()}}()||function(){var e=i(/^@([-\w]+)?document *([^{]+)/);if(e)return{type:"document",document:e[2].trim(),vendor:e[1]?e[1].trim():null,rules:g()}}()||function(){if(i(/^@font-face\s*/))return{type:"font-face",declarations:p()}}()||function(){var e=i(/^@(import|charset|namespace)\s*([^;]+);/);if(e)return{type:e[1],name:e[2].trim()}}();if(e&&v.onlyVars){var a=!1;return a=e.declarations?e.declarations.some(function(e){return/var\(/.test(e.value)}):(e.keyframes||e.rules||[]).some(function(e){return(e.declarations||[]).some(function(e){return/var\(/.test(e.value)})}),a?e:{}}return e}}function h(){if(v.onlyVars){var e=f("{","}",t);if(e){var i=-1!==e.pre.indexOf(":root")&&/--\S*\s*:/.test(e.body),o=/var\(/.test(e.body);if(!i&&!o)return t=t.slice(e.end+1),{}}}var r=u()||[],s=v.onlyVars?p().filter(function(e){var t=r.some(function(e){return-1!==e.indexOf(":root")})&&/^--\S/.test(e.property),n=/var\(/.test(e.value);return t||n}):p();return r.length||n("selector missing"),{type:"rule",selectors:r,declarations:s}}function g(e){if(!e&&!o())return n("missing '{'");for(var i,s=l();t.length&&(e||"}"!==t[0])&&(i=m()||h());)i.type&&s.push(i),s=s.concat(l());return e||r()?s:n("missing '}'")}var v=e({},{onlyVars:!1,removeComments:!1},arguments.length>1&&void 0!==arguments[1]?arguments[1]:{});return{type:"stylesheet",stylesheet:{rules:g(!0),errors:[]}}}function u(t){var n,i,o=e({},{fixNestedCalc:!0,onlyVars:!1,persist:!1,preserve:!1,variables:{},onWarning:function(){}},arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}),r=o.persist?g.dom:g.temp=JSON.parse(JSON.stringify(g.dom)),s=l(t,{onlyVars:o.onlyVars});if(s.stylesheet.rules.forEach(function(e){var t=[];if("rule"===e.type&&1===e.selectors.length&&":root"===e.selectors[0]&&(e.declarations.forEach(function(e,n){var i=e.property,o=e.value;i&&0===i.indexOf(m)&&(r[i]=o,t.push(n))}),!o.preserve))for(var n=t.length-1;n>=0;n--)e.declarations.splice(t[n],1)}),Object.keys(g.user).forEach(function(e){r[e]=g.user[e]}),Object.keys(o.variables).length){var a={declarations:[],selectors:[":root"],type:"rule"};Object.keys(o.variables).forEach(function(e){var t="--".concat(e.replace(/^-+/,"")),n=o.variables[e];o.persist&&(g.user[t]=n),r[t]!==n&&(r[t]=n,a.declarations.push({type:"declaration",property:t,value:n}))}),
o.preserve&&a.declarations.length&&s.stylesheet.rules.push(a)}return function e(t,n){t.rules.forEach(function(i){i.rules?e(i,n):i.keyframes?i.keyframes.forEach(function(e){"keyframe"===e.type&&n(e.declarations,i)}):i.declarations&&n(i.declarations,t)})}(s.stylesheet,function(e,t){for(var n,i,s,a=0;a<e.length;a++)s=(n=e[a]).value,"declaration"===n.type&&s&&-1!==s.indexOf(h+"(")&&(i=c(s,r,o))!==n.value&&(o.preserve?(e.splice(a,0,{type:n.type,property:n.property,value:i}),a++):n.value=i)}),o.fixNestedCalc&&(n=s.stylesheet.rules,i=/(-[a-z]+-)?calc\(/,n.forEach(function(e){e.declarations&&e.declarations.forEach(function(e){for(var t=e.value,n="";i.test(t);){var o=f("calc(",")",t||"");for(t=t.slice(o.end);i.test(o.body);){var r=f(i,")",o.body);o.body="".concat(r.pre,"(").concat(r.body,")").concat(r.post)}n+="".concat(o.pre,"calc(").concat(o.body),n+=i.test(t)?"":")".concat(o.post)}e.value=n||e.value})})),function(e){function t(e){for(var t="",r=0;r<e.length;r++){var s=e[r];i&&i(s);var a=o[s.type](s);a&&(t+=a,a.length&&s.selectors&&(t+=n))}return t}var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",i=arguments.length>2?arguments[2]:void 0,o={charset:function(e){return"@charset "+e.name+";"},comment:function(e){return 0===e.comment.indexOf("__CSSVARSPONYFILL")?"/*"+e.comment+"*/":""},"custom-media":function(e){return"@custom-media "+e.name+" "+e.media+";"},declaration:function(e){return e.property+":"+e.value+";"},document:function(e){return"@"+(e.vendor||"")+"document "+e.document+"{"+t(e.rules)+"}"},"font-face":function(e){return"@font-face{"+t(e.declarations)+"}"},host:function(e){return"@host{"+t(e.rules)+"}"},import:function(e){return"@import "+e.name+";"},keyframe:function(e){return e.values.join(",")+"{"+t(e.declarations)+"}"},keyframes:function(e){return"@"+(e.vendor||"")+"keyframes "+e.name+"{"+t(e.keyframes)+"}"},media:function(e){return"@media "+e.media+"{"+t(e.rules)+"}"},namespace:function(e){return"@namespace "+e.name+";"},page:function(e){return"@page "+(e.selectors.length?e.selectors.join(", "):"")+"{"+t(e.declarations)+"}"},rule:function(e){var n=e.declarations;if(n.length)return e.selectors.join(",")+"{"+t(n)+"}"},supports:function(e){return"@supports "+e.supports+"{"+t(e.rules)+"}"}};return t(e.stylesheet.rules)}(s)}function c(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=arguments.length>3?arguments[3]:void 0;if(-1===e.indexOf("var("))return e;var o=f("(",")",e),r="CSS transform warning:";return o?"var"===o.pre.slice(-3)?0===o.body.trim().length?(n.onWarning("".concat(r," var() must contain a non-whitespace string")),e):o.pre.slice(0,-3)+function(e){var o=e.split(",")[0].replace(/[\s\n\t]/g,""),s=(e.match(/(?:\s*,\s*){1}(.*)?/)||[])[1],a=t.hasOwnProperty(o)?String(t[o]):void 0,l=a||(s?String(s):void 0),u=i||e;return a||n.onWarning("".concat(r,' variable "').concat(o,'" is undefined')),l&&"undefined"!==l&&l.length>0?c(l,t,n,u):"var(".concat(u,")")}(o.body)+c(o.post,t,n):o.pre+"(".concat(c(o.body,t,n),")")+c(o.post,t,n):(-1!==e.indexOf("var(")&&n.onWarning("".concat(r,' missing closing ")" in the value "').concat(e,'"')),e)}function p(){function n(e,t,n,i){s.silent||console.error("".concat(e,"\n"),t),s.onError(e,t,n,i)}function o(e){s.silent||console.warn(e),s.onWarning(e)}var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},s=e({},b,r),a=v;if(s.exclude="#".concat(a)+(s.exclude?",".concat(s.exclude):""),y)if("loading"!==document.readyState){var l=s.shadowDOM||s.rootElement.shadowRoot||s.rootElement.host;if(w&&s.onlyLegacy){if(s.updateDOM){var c=s.rootElement.host||(s.rootElement===document?document.documentElement:s.rootElement);Object.keys(s.variables).forEach(function(e){var t="--".concat(e.replace(/^-+/,"")),n=s.variables[e];c.style.setProperty(t,n)})}}else l&&!C?i({rootElement:b.rootElement,include:b.include,exclude:s.exclude,onSuccess:function(e,t,n){return(e.match(x.cssRootRules)||[]).join("")||!1},onComplete:function(e,t,n){u(e,{persist:!0}),C=!0,p(s)}}):(s.watch?function(e,t){if(window.MutationObserver){var n=function(e){return"LINK"===e.tagName&&-1!==(e.getAttribute("rel")||"").indexOf("stylesheet")},i=function(e){return"STYLE"===e.tagName&&(!t||e.id!==t)},o=null;S&&S.disconnect(),e.watch=b.watch,(S=new MutationObserver(function(t){var r=!1;t.forEach(function(t){if("attributes"===t.type)r=n(t.target)||i(t.target);else if("childList"===t.type){var s=Array.apply(null,t.addedNodes),a=Array.apply(null,t.removedNodes);r=[].concat(s,a).some(function(e){var t=n(e)&&!e.disabled,o=i(e)&&!e.disabled&&x.cssVars.test(e.textContent);return t||o})}r&&(clearTimeout(o),o=setTimeout(function(){p(e)},1))})})).observe(document.documentElement,{attributes:!0,attributeFilter:["disabled","href"],childList:!0,subtree:!0})}}(s,a):!1===s.watch&&S&&S.disconnect(),i({rootElement:s.rootElement,include:s.include,exclude:s.exclude,filter:s.onlyVars?x.cssVars:null,onBeforeSend:s.onBeforeSend,onSuccess:function(e,t,n){var i=s.onSuccess(e,t,n);return e=void 0!==i&&!1===Boolean(i)?"":i||e,s.updateURLs&&(e.replace(x.cssComments,"").match(x.cssUrls)||[]).forEach(function(t){var i=t.replace(x.cssUrls,"$1"),o=d(i,n);e=e.replace(t,t.replace(i,o))}),e},onError:function(e,t,i){var o=e.responseURL||d(i,location.href),r=e.statusText?"(".concat(e.statusText,")"):"Unspecified Error"+(0===e.status?" (possibly CORS related)":"");n("CSS XHR Error: ".concat(o," ").concat(e.status," ").concat(r),t,e,o)},onComplete:function(i,r,l){var c=null;i=r.map(function(e,t){return x.cssVars.test(e)?e:"/*__CSSVARSPONYFILL-".concat(t,"__*/")}).join("");try{i=u(i,{fixNestedCalc:s.fixNestedCalc,onlyVars:s.onlyVars,persist:s.updateDOM,preserve:s.preserve,variables:s.variables,onWarning:o});var d=x.cssKeyframes.test(i);if(i=i.replace(/\/\*__CSSVARSPONYFILL-(\d+)__\*\//g,function(e,t){return r[t]}),s.updateDOM&&l&&l.length){var f=l[l.length-1];(c=s.rootElement.querySelector("#".concat(a))||document.createElement("style")).setAttribute("id",a),c.textContent!==i&&(c.textContent=i),f.nextSibling!==c&&f.parentNode&&f.parentNode.insertBefore(c,f.nextSibling),d&&function(e){var t=["animation-name","-moz-animation-name","-webkit-animation-name"].filter(function(e){return getComputedStyle(document.body)[e]})[0];if(t){for(var n=e.getElementsByTagName("*"),i=[],o=0,r=n.length;o<r;o++){var s=n[o];"none"!==getComputedStyle(s)[t]&&(s.style[t]+="__CSSVARSPONYFILL-KEYFRAMES__",i.push(s))}document.body.offsetHeight;for(var a=0,l=i.length;a<l;a++){var u=i[a].style;u[t]=u[t].replace("__CSSVARSPONYFILL-KEYFRAMES__","")}}}(s.rootElement)}}catch(e){var m=!1;r.forEach(function(e,t){try{e=u(e,s)}catch(e){var i=l[t-0];m=!0,n(e.message,i)}}),m||n(e.message||e)}if(s.shadowDOM)for(var h,v=[s.rootElement].concat(t(s.rootElement.querySelectorAll("*"))),y=0;h=v[y];++y)h.shadowRoot&&h.shadowRoot.querySelector("style")&&p(e({},s,{rootElement:h.shadowRoot,variables:g.dom}));s.onComplete(i,c,JSON.parse(JSON.stringify(s.updateDOM?g.dom:g.temp)))}}))}else document.addEventListener("DOMContentLoaded",function e(t){p(r),document.removeEventListener("DOMContentLoaded",e)})}function d(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:location.href,n=document.implementation.createHTMLDocument(""),i=n.createElement("base"),o=n.createElement("a");return n.head.appendChild(i),n.body.appendChild(o),i.href=t,o.href=e,o.href}var f=r;r.range=a;var m="--",h="var",g={dom:{},temp:{},user:{}},v="css-vars-ponyfill",y="undefined"!=typeof window,w=y&&window.CSS&&window.CSS.supports&&window.CSS.supports("(--a: 0)"),b={rootElement:y?document:null,include:"style,link[rel=stylesheet]",exclude:"",fixNestedCalc:!0,onlyLegacy:!0,onlyVars:!1,preserve:!1,shadowDOM:!1,silent:!1,updateDOM:!0,updateURLs:!0,variables:{},watch:null,onBeforeSend:function(){},onSuccess:function(){},onWarning:function(){},onError:function(){},onComplete:function(){}},x={cssComments:/\/\*[\s\S]+?\*\//g,cssKeyframes:/@(?:-\w*-)?keyframes/,cssRootRules:/(?::root\s*{\s*[^}]*})/g,cssUrls:/url\((?!['"]?(?:data|http|\/\/):)['"]?([^'")]*)['"]?\)/g,cssVars:/(?:(?::root\s*{\s*[^;]*;*\s*)|(?:var\(\s*))(--[^:)]+)(?:\s*[:)])/},S=null,C=!1;return p}),/*!
 * Masonry PACKAGED v4.2.2
 * Cascading grid layout library
 * https://masonry.desandro.com
 * MIT License
 * by David DeSandro
 */
function(e,t){"function"==typeof define&&define.amd?define("jquery-bridget/jquery-bridget",["jquery"],function(n){return t(e,n)}):"object"==typeof module&&module.exports?module.exports=t(e,require("jquery")):e.jQueryBridget=t(e,e.jQuery)}(window,function(e,t){"use strict";function n(n,r,a){function l(e,t,i){var o,r="$()."+n+'("'+t+'")';return e.each(function(e,l){var u=a.data(l,n);if(!u)return void s(n+" not initialized. Cannot call methods, i.e. "+r);var c=u[t];if(!c||"_"==t.charAt(0))return void s(r+" is not a valid method");var p=c.apply(u,i);o=void 0===o?p:o}),void 0!==o?o:e}function u(e,t){e.each(function(e,i){var o=a.data(i,n);o?(o.option(t),o._init()):(o=new r(i,t),a.data(i,n,o))})}(a=a||t||e.jQuery)&&(r.prototype.option||(r.prototype.option=function(e){a.isPlainObject(e)&&(this.options=a.extend(!0,this.options,e))}),a.fn[n]=function(e){if("string"==typeof e){return l(this,e,o.call(arguments,1))}return u(this,e),this},i(a))}function i(e){!e||e&&e.bridget||(e.bridget=n)}var o=Array.prototype.slice,r=e.console,s=void 0===r?function(){}:function(e){r.error(e)};return i(t||e.jQuery),n}),function(e,t){"function"==typeof define&&define.amd?define("ev-emitter/ev-emitter",t):"object"==typeof module&&module.exports?module.exports=t():e.EvEmitter=t()}("undefined"!=typeof window?window:this,function(){function e(){}var t=e.prototype;return t.on=function(e,t){if(e&&t){var n=this._events=this._events||{},i=n[e]=n[e]||[];return-1==i.indexOf(t)&&i.push(t),this}},t.once=function(e,t){if(e&&t){this.on(e,t);var n=this._onceEvents=this._onceEvents||{};return(n[e]=n[e]||{})[t]=!0,this}},t.off=function(e,t){var n=this._events&&this._events[e];if(n&&n.length){var i=n.indexOf(t);return-1!=i&&n.splice(i,1),this}},t.emitEvent=function(e,t){var n=this._events&&this._events[e];if(n&&n.length){n=n.slice(0),t=t||[];for(var i=this._onceEvents&&this._onceEvents[e],o=0;o<n.length;o++){var r=n[o];i&&i[r]&&(this.off(e,r),delete i[r]),r.apply(this,t)}return this}},t.allOff=function(){delete this._events,delete this._onceEvents},e}),function(e,t){"function"==typeof define&&define.amd?define("get-size/get-size",t):"object"==typeof module&&module.exports?module.exports=t():e.getSize=t()}(window,function(){"use strict";function e(e){var t=parseFloat(e);return-1==e.indexOf("%")&&!isNaN(t)&&t}function t(){}function n(){for(var e={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},t=0;u>t;t++){e[l[t]]=0}return e}function i(e){var t=getComputedStyle(e);return t||a("Style returned "+t+". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"),t}function o(){if(!c){c=!0;var t=document.createElement("div");t.style.width="200px",t.style.padding="1px 2px 3px 4px",t.style.borderStyle="solid",t.style.borderWidth="1px 2px 3px 4px",t.style.boxSizing="border-box";var n=document.body||document.documentElement;n.appendChild(t);var o=i(t);s=200==Math.round(e(o.width)),r.isBoxSizeOuter=s,n.removeChild(t)}}function r(t){if(o(),"string"==typeof t&&(t=document.querySelector(t)),t&&"object"==typeof t&&t.nodeType){var r=i(t);if("none"==r.display)return n();var a={};a.width=t.offsetWidth,a.height=t.offsetHeight;for(var c=a.isBorderBox="border-box"==r.boxSizing,p=0;u>p;p++){var d=l[p],f=r[d],m=parseFloat(f);a[d]=isNaN(m)?0:m}var h=a.paddingLeft+a.paddingRight,g=a.paddingTop+a.paddingBottom,v=a.marginLeft+a.marginRight,y=a.marginTop+a.marginBottom,w=a.borderLeftWidth+a.borderRightWidth,b=a.borderTopWidth+a.borderBottomWidth,x=c&&s,S=e(r.width);!1!==S&&(a.width=S+(x?0:h+w));var C=e(r.height);return!1!==C&&(a.height=C+(x?0:g+b)),a.innerWidth=a.width-(h+w),a.innerHeight=a.height-(g+b),a.outerWidth=a.width+v,a.outerHeight=a.height+y,a}}var s,a="undefined"==typeof console?t:function(e){console.error(e)},l=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"],u=l.length,c=!1;return r}),function(e,t){"use strict";"function"==typeof define&&define.amd?define("desandro-matches-selector/matches-selector",t):"object"==typeof module&&module.exports?module.exports=t():e.matchesSelector=t()}(window,function(){"use strict";var e=function(){var e=window.Element.prototype;if(e.matches)return"matches";if(e.matchesSelector)return"matchesSelector";for(var t=["webkit","moz","ms","o"],n=0;n<t.length;n++){var i=t[n],o=i+"MatchesSelector";if(e[o])return o}}();return function(t,n){return t[e](n)}}),function(e,t){"function"==typeof define&&define.amd?define("fizzy-ui-utils/utils",["desandro-matches-selector/matches-selector"],function(n){return t(e,n)}):"object"==typeof module&&module.exports?module.exports=t(e,require("desandro-matches-selector")):e.fizzyUIUtils=t(e,e.matchesSelector)}(window,function(e,t){var n={};n.extend=function(e,t){for(var n in t)e[n]=t[n];return e},n.modulo=function(e,t){return(e%t+t)%t};var i=Array.prototype.slice;n.makeArray=function(e){return Array.isArray(e)?e:null===e||void 0===e?[]:"object"==typeof e&&"number"==typeof e.length?i.call(e):[e]},n.removeFrom=function(e,t){var n=e.indexOf(t);-1!=n&&e.splice(n,1)},n.getParent=function(e,n){for(;e.parentNode&&e!=document.body;)if(e=e.parentNode,t(e,n))return e},n.getQueryElement=function(e){return"string"==typeof e?document.querySelector(e):e},n.handleEvent=function(e){var t="on"+e.type;this[t]&&this[t](e)},n.filterFindElements=function(e,i){e=n.makeArray(e);var o=[];return e.forEach(function(e){if(e instanceof HTMLElement){if(!i)return void o.push(e);t(e,i)&&o.push(e);for(var n=e.querySelectorAll(i),r=0;r<n.length;r++)o.push(n[r])}}),o},n.debounceMethod=function(e,t,n){n=n||100;var i=e.prototype[t],o=t+"Timeout";e.prototype[t]=function(){var e=this[o];clearTimeout(e);var t=arguments,r=this;this[o]=setTimeout(function(){i.apply(r,t),delete r[o]},n)}},n.docReady=function(e){var t=document.readyState;"complete"==t||"interactive"==t?setTimeout(e):document.addEventListener("DOMContentLoaded",e)},n.toDashed=function(e){return e.replace(/(.)([A-Z])/g,function(e,t,n){return t+"-"+n}).toLowerCase()};var o=e.console;return n.htmlInit=function(t,i){n.docReady(function(){var r=n.toDashed(i),s="data-"+r,a=document.querySelectorAll("["+s+"]"),l=document.querySelectorAll(".js-"+r),u=n.makeArray(a).concat(n.makeArray(l)),c=s+"-options",p=e.jQuery;u.forEach(function(e){var n,r=e.getAttribute(s)||e.getAttribute(c);try{n=r&&JSON.parse(r)}catch(t){return void(o&&o.error("Error parsing "+s+" on "+e.className+": "+t))}var a=new t(e,n);p&&p.data(e,i,a)})})},n}),function(e,t){"function"==typeof define&&define.amd?define("outlayer/item",["ev-emitter/ev-emitter","get-size/get-size"],t):"object"==typeof module&&module.exports?module.exports=t(require("ev-emitter"),require("get-size")):(e.Outlayer={},e.Outlayer.Item=t(e.EvEmitter,e.getSize))}(window,function(e,t){"use strict";function n(e){for(var t in e)return!1;return null,!0}function i(e,t){e&&(this.element=e,this.layout=t,this.position={x:0,y:0},this._create())}var o=document.documentElement.style,r="string"==typeof o.transition?"transition":"WebkitTransition",s="string"==typeof o.transform?"transform":"WebkitTransform",a={WebkitTransition:"webkitTransitionEnd",transition:"transitionend"}[r],l={transform:s,transition:r,transitionDuration:r+"Duration",transitionProperty:r+"Property",transitionDelay:r+"Delay"},u=i.prototype=Object.create(e.prototype);u.constructor=i,u._create=function(){this._transn={ingProperties:{},clean:{},onEnd:{}},this.css({position:"absolute"})},u.handleEvent=function(e){var t="on"+e.type;this[t]&&this[t](e)},u.getSize=function(){this.size=t(this.element)},u.css=function(e){var t=this.element.style;for(var n in e){t[l[n]||n]=e[n]}},u.getPosition=function(){var e=getComputedStyle(this.element),t=this.layout._getOption("originLeft"),n=this.layout._getOption("originTop"),i=e[t?"left":"right"],o=e[n?"top":"bottom"],r=parseFloat(i),s=parseFloat(o),a=this.layout.size;-1!=i.indexOf("%")&&(r=r/100*a.width),-1!=o.indexOf("%")&&(s=s/100*a.height),r=isNaN(r)?0:r,s=isNaN(s)?0:s,r-=t?a.paddingLeft:a.paddingRight,s-=n?a.paddingTop:a.paddingBottom,this.position.x=r,this.position.y=s},u.layoutPosition=function(){var e=this.layout.size,t={},n=this.layout._getOption("originLeft"),i=this.layout._getOption("originTop"),o=n?"paddingLeft":"paddingRight",r=n?"left":"right",s=n?"right":"left",a=this.position.x+e[o];t[r]=this.getXValue(a),t[s]="";var l=i?"paddingTop":"paddingBottom",u=i?"top":"bottom",c=i?"bottom":"top",p=this.position.y+e[l];t[u]=this.getYValue(p),t[c]="",this.css(t),this.emitEvent("layout",[this])},u.getXValue=function(e){var t=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&!t?e/this.layout.size.width*100+"%":e+"px"},u.getYValue=function(e){var t=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&t?e/this.layout.size.height*100+"%":e+"px"},u._transitionTo=function(e,t){this.getPosition();var n=this.position.x,i=this.position.y,o=e==this.position.x&&t==this.position.y;if(this.setPosition(e,t),o&&!this.isTransitioning)return void this.layoutPosition();var r=e-n,s=t-i,a={};a.transform=this.getTranslate(r,s),this.transition({to:a,onTransitionEnd:{transform:this.layoutPosition},isCleaning:!0})},u.getTranslate=function(e,t){var n=this.layout._getOption("originLeft"),i=this.layout._getOption("originTop");return e=n?e:-e,t=i?t:-t,"translate3d("+e+"px, "+t+"px, 0)"},u.goTo=function(e,t){this.setPosition(e,t),this.layoutPosition()},u.moveTo=u._transitionTo,u.setPosition=function(e,t){this.position.x=parseFloat(e),this.position.y=parseFloat(t)},u._nonTransition=function(e){this.css(e.to),e.isCleaning&&this._removeStyles(e.to);for(var t in e.onTransitionEnd)e.onTransitionEnd[t].call(this)},u.transition=function(e){if(!parseFloat(this.layout.options.transitionDuration))return void this._nonTransition(e);var t=this._transn;for(var n in e.onTransitionEnd)t.onEnd[n]=e.onTransitionEnd[n];for(n in e.to)t.ingProperties[n]=!0,e.isCleaning&&(t.clean[n]=!0);if(e.from){this.css(e.from);this.element.offsetHeight;null}this.enableTransition(e.to),this.css(e.to),this.isTransitioning=!0};var c="opacity,"+function(e){return e.replace(/([A-Z])/g,function(e){return"-"+e.toLowerCase()})}(s);u.enableTransition=function(){if(!this.isTransitioning){var e=this.layout.options.transitionDuration;e="number"==typeof e?e+"ms":e,this.css({transitionProperty:c,transitionDuration:e,transitionDelay:this.staggerDelay||0}),this.element.addEventListener(a,this,!1)}},u.onwebkitTransitionEnd=function(e){this.ontransitionend(e)},u.onotransitionend=function(e){this.ontransitionend(e)};var p={"-webkit-transform":"transform"};u.ontransitionend=function(e){if(e.target===this.element){var t=this._transn,i=p[e.propertyName]||e.propertyName;if(delete t.ingProperties[i],n(t.ingProperties)&&this.disableTransition(),i in t.clean&&(this.element.style[e.propertyName]="",delete t.clean[i]),i in t.onEnd){t.onEnd[i].call(this),delete t.onEnd[i]}this.emitEvent("transitionEnd",[this])}},u.disableTransition=function(){this.removeTransitionStyles(),this.element.removeEventListener(a,this,!1),this.isTransitioning=!1},u._removeStyles=function(e){var t={};for(var n in e)t[n]="";this.css(t)};var d={transitionProperty:"",transitionDuration:"",transitionDelay:""};return u.removeTransitionStyles=function(){this.css(d)},u.stagger=function(e){e=isNaN(e)?0:e,this.staggerDelay=e+"ms"},u.removeElem=function(){this.element.parentNode.removeChild(this.element),this.css({display:""}),this.emitEvent("remove",[this])},u.remove=function(){return r&&parseFloat(this.layout.options.transitionDuration)?(this.once("transitionEnd",function(){this.removeElem()}),void this.hide()):void this.removeElem()},u.reveal=function(){delete this.isHidden,this.css({display:""});var e=this.layout.options,t={};t[this.getHideRevealTransitionEndProperty("visibleStyle")]=this.onRevealTransitionEnd,this.transition({from:e.hiddenStyle,to:e.visibleStyle,isCleaning:!0,onTransitionEnd:t})},u.onRevealTransitionEnd=function(){this.isHidden||this.emitEvent("reveal")},u.getHideRevealTransitionEndProperty=function(e){var t=this.layout.options[e];if(t.opacity)return"opacity";for(var n in t)return n},u.hide=function(){this.isHidden=!0,this.css({display:""});var e=this.layout.options,t={};t[this.getHideRevealTransitionEndProperty("hiddenStyle")]=this.onHideTransitionEnd,this.transition({from:e.visibleStyle,to:e.hiddenStyle,isCleaning:!0,onTransitionEnd:t})},u.onHideTransitionEnd=function(){this.isHidden&&(this.css({display:"none"}),this.emitEvent("hide"))},u.destroy=function(){this.css({position:"",left:"",right:"",top:"",bottom:"",transition:"",transform:""})},i}),function(e,t){"use strict";"function"==typeof define&&define.amd?define("outlayer/outlayer",["ev-emitter/ev-emitter","get-size/get-size","fizzy-ui-utils/utils","./item"],function(n,i,o,r){return t(e,n,i,o,r)}):"object"==typeof module&&module.exports?module.exports=t(e,require("ev-emitter"),require("get-size"),require("fizzy-ui-utils"),require("./item")):e.Outlayer=t(e,e.EvEmitter,e.getSize,e.fizzyUIUtils,e.Outlayer.Item)}(window,function(e,t,n,i,o){"use strict";function r(e,t){var n=i.getQueryElement(e);if(!n)return void(l&&l.error("Bad element for "+this.constructor.namespace+": "+(n||e)));this.element=n,u&&(this.$element=u(this.element)),this.options=i.extend({},this.constructor.defaults),this.option(t);var o=++p;this.element.outlayerGUID=o,d[o]=this,this._create(),this._getOption("initLayout")&&this.layout()}function s(e){function t(){e.apply(this,arguments)}return t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t}function a(e){if("number"==typeof e)return e;var t=e.match(/(^\d*\.?\d*)(\w*)/),n=t&&t[1],i=t&&t[2];return n.length?(n=parseFloat(n))*(m[i]||1):0}var l=e.console,u=e.jQuery,c=function(){},p=0,d={};r.namespace="outlayer",r.Item=o,r.defaults={containerStyle:{position:"relative"},initLayout:!0,originLeft:!0,originTop:!0,resize:!0,resizeContainer:!0,transitionDuration:"0.4s",hiddenStyle:{opacity:0,transform:"scale(0.001)"},visibleStyle:{opacity:1,transform:"scale(1)"}};var f=r.prototype;i.extend(f,t.prototype),f.option=function(e){i.extend(this.options,e)},f._getOption=function(e){var t=this.constructor.compatOptions[e];return t&&void 0!==this.options[t]?this.options[t]:this.options[e]},r.compatOptions={initLayout:"isInitLayout",horizontal:"isHorizontal",layoutInstant:"isLayoutInstant",originLeft:"isOriginLeft",originTop:"isOriginTop",resize:"isResizeBound",resizeContainer:"isResizingContainer"},f._create=function(){this.reloadItems(),this.stamps=[],this.stamp(this.options.stamp),i.extend(this.element.style,this.options.containerStyle),this._getOption("resize")&&this.bindResize()},f.reloadItems=function(){this.items=this._itemize(this.element.children)},f._itemize=function(e){for(var t=this._filterFindItemElements(e),n=this.constructor.Item,i=[],o=0;o<t.length;o++){var r=t[o],s=new n(r,this);i.push(s)}return i},f._filterFindItemElements=function(e){return i.filterFindElements(e,this.options.itemSelector)},f.getItemElements=function(){return this.items.map(function(e){return e.element})},f.layout=function(){this._resetLayout(),this._manageStamps();var e=this._getOption("layoutInstant"),t=void 0!==e?e:!this._isLayoutInited;this.layoutItems(this.items,t),this._isLayoutInited=!0},f._init=f.layout,f._resetLayout=function(){this.getSize()},f.getSize=function(){this.size=n(this.element)},f._getMeasurement=function(e,t){var i,o=this.options[e];o?("string"==typeof o?i=this.element.querySelector(o):o instanceof HTMLElement&&(i=o),this[e]=i?n(i)[t]:o):this[e]=0},f.layoutItems=function(e,t){e=this._getItemsForLayout(e),this._layoutItems(e,t),this._postLayout()},f._getItemsForLayout=function(e){return e.filter(function(e){return!e.isIgnored})},f._layoutItems=function(e,t){if(this._emitCompleteOnItems("layout",e),e&&e.length){var n=[];e.forEach(function(e){var i=this._getItemLayoutPosition(e);i.item=e,i.isInstant=t||e.isLayoutInstant,n.push(i)},this),this._processLayoutQueue(n)}},f._getItemLayoutPosition=function(){return{x:0,y:0}},f._processLayoutQueue=function(e){this.updateStagger(),e.forEach(function(e,t){this._positionItem(e.item,e.x,e.y,e.isInstant,t)},this)},f.updateStagger=function(){var e=this.options.stagger;return null===e||void 0===e?void(this.stagger=0):(this.stagger=a(e),this.stagger)},f._positionItem=function(e,t,n,i,o){i?e.goTo(t,n):(e.stagger(o*this.stagger),e.moveTo(t,n))},f._postLayout=function(){this.resizeContainer()},f.resizeContainer=function(){if(this._getOption("resizeContainer")){var e=this._getContainerSize();e&&(this._setContainerMeasure(e.width,!0),this._setContainerMeasure(e.height,!1))}},f._getContainerSize=c,f._setContainerMeasure=function(e,t){if(void 0!==e){var n=this.size;n.isBorderBox&&(e+=t?n.paddingLeft+n.paddingRight+n.borderLeftWidth+n.borderRightWidth:n.paddingBottom+n.paddingTop+n.borderTopWidth+n.borderBottomWidth),e=Math.max(e,0),this.element.style[t?"width":"height"]=e+"px"}},f._emitCompleteOnItems=function(e,t){function n(){o.dispatchEvent(e+"Complete",null,[t])}function i(){++s==r&&n()}var o=this,r=t.length;if(!t||!r)return void n();var s=0;t.forEach(function(t){t.once(e,i)})},f.dispatchEvent=function(e,t,n){var i=t?[t].concat(n):n;if(this.emitEvent(e,i),u)if(this.$element=this.$element||u(this.element),t){var o=u.Event(t);o.type=e,this.$element.trigger(o,n)}else this.$element.trigger(e,n)},f.ignore=function(e){var t=this.getItem(e);t&&(t.isIgnored=!0)},f.unignore=function(e){var t=this.getItem(e);t&&delete t.isIgnored},f.stamp=function(e){(e=this._find(e))&&(this.stamps=this.stamps.concat(e),e.forEach(this.ignore,this))},f.unstamp=function(e){(e=this._find(e))&&e.forEach(function(e){i.removeFrom(this.stamps,e),this.unignore(e)},this)},f._find=function(e){return e?("string"==typeof e&&(e=this.element.querySelectorAll(e)),e=i.makeArray(e)):void 0},f._manageStamps=function(){this.stamps&&this.stamps.length&&(this._getBoundingRect(),this.stamps.forEach(this._manageStamp,this))},f._getBoundingRect=function(){var e=this.element.getBoundingClientRect(),t=this.size;this._boundingRect={left:e.left+t.paddingLeft+t.borderLeftWidth,top:e.top+t.paddingTop+t.borderTopWidth,right:e.right-(t.paddingRight+t.borderRightWidth),bottom:e.bottom-(t.paddingBottom+t.borderBottomWidth)}},f._manageStamp=c,f._getElementOffset=function(e){var t=e.getBoundingClientRect(),i=this._boundingRect,o=n(e);return{left:t.left-i.left-o.marginLeft,top:t.top-i.top-o.marginTop,right:i.right-t.right-o.marginRight,bottom:i.bottom-t.bottom-o.marginBottom}},f.handleEvent=i.handleEvent,f.bindResize=function(){e.addEventListener("resize",this),this.isResizeBound=!0},f.unbindResize=function(){e.removeEventListener("resize",this),this.isResizeBound=!1},f.onresize=function(){this.resize()},i.debounceMethod(r,"onresize",100),f.resize=function(){this.isResizeBound&&this.needsResizeLayout()&&this.layout()},f.needsResizeLayout=function(){var e=n(this.element);return this.size&&e&&e.innerWidth!==this.size.innerWidth},f.addItems=function(e){var t=this._itemize(e);return t.length&&(this.items=this.items.concat(t)),t},f.appended=function(e){var t=this.addItems(e);t.length&&(this.layoutItems(t,!0),this.reveal(t))},f.prepended=function(e){var t=this._itemize(e);if(t.length){var n=this.items.slice(0);this.items=t.concat(n),this._resetLayout(),this._manageStamps(),this.layoutItems(t,!0),this.reveal(t),this.layoutItems(n)}},f.reveal=function(e){if(this._emitCompleteOnItems("reveal",e),e&&e.length){var t=this.updateStagger();e.forEach(function(e,n){e.stagger(n*t),e.reveal()})}},f.hide=function(e){if(this._emitCompleteOnItems("hide",e),e&&e.length){var t=this.updateStagger();e.forEach(function(e,n){e.stagger(n*t),e.hide()})}},f.revealItemElements=function(e){var t=this.getItems(e);this.reveal(t)},f.hideItemElements=function(e){var t=this.getItems(e);this.hide(t)},f.getItem=function(e){for(var t=0;t<this.items.length;t++){var n=this.items[t];if(n.element==e)return n}},f.getItems=function(e){e=i.makeArray(e);var t=[];return e.forEach(function(e){var n=this.getItem(e);n&&t.push(n)},this),t},f.remove=function(e){var t=this.getItems(e);this._emitCompleteOnItems("remove",t),t&&t.length&&t.forEach(function(e){e.remove(),i.removeFrom(this.items,e)},this)},f.destroy=function(){var e=this.element.style;e.height="",e.position="",e.width="",this.items.forEach(function(e){e.destroy()}),this.unbindResize();var t=this.element.outlayerGUID;delete d[t],delete this.element.outlayerGUID,u&&u.removeData(this.element,this.constructor.namespace)},r.data=function(e){e=i.getQueryElement(e);var t=e&&e.outlayerGUID;return t&&d[t]},r.create=function(e,t){var n=s(r);return n.defaults=i.extend({},r.defaults),i.extend(n.defaults,t),n.compatOptions=i.extend({},r.compatOptions),n.namespace=e,n.data=r.data,n.Item=s(o),i.htmlInit(n,e),u&&u.bridget&&u.bridget(e,n),n};var m={ms:1,s:1e3};return r.Item=o,r}),function(e,t){"function"==typeof define&&define.amd?define(["outlayer/outlayer","get-size/get-size"],t):"object"==typeof module&&module.exports?module.exports=t(require("outlayer"),require("get-size")):e.Masonry=t(e.Outlayer,e.getSize)}(window,function(e,t){var n=e.create("masonry");n.compatOptions.fitWidth="isFitWidth";var i=n.prototype;return i._resetLayout=function(){this.getSize(),this._getMeasurement("columnWidth","outerWidth"),this._getMeasurement("gutter","outerWidth"),this.measureColumns(),this.colYs=[];for(var e=0;e<this.cols;e++)this.colYs.push(0);this.maxY=0,this.horizontalColIndex=0},i.measureColumns=function(){if(this.getContainerWidth(),!this.columnWidth){var e=this.items[0],n=e&&e.element;this.columnWidth=n&&t(n).outerWidth||this.containerWidth}var i=this.columnWidth+=this.gutter,o=this.containerWidth+this.gutter,r=o/i,s=i-o%i,a=s&&1>s?"round":"floor";r=Math[a](r),this.cols=Math.max(r,1)},i.getContainerWidth=function(){var e=this._getOption("fitWidth"),n=e?this.element.parentNode:this.element,i=t(n);this.containerWidth=i&&i.innerWidth},i._getItemLayoutPosition=function(e){e.getSize();var t=e.size.outerWidth%this.columnWidth,n=t&&1>t?"round":"ceil",i=Math[n](e.size.outerWidth/this.columnWidth);i=Math.min(i,this.cols);for(var o=this.options.horizontalOrder?"_getHorizontalColPosition":"_getTopColPosition",r=this[o](i,e),s={x:this.columnWidth*r.col,y:r.y},a=r.y+e.size.outerHeight,l=i+r.col,u=r.col;l>u;u++)this.colYs[u]=a;return s},i._getTopColPosition=function(e){var t=this._getTopColGroup(e),n=Math.min.apply(Math,t);return{col:t.indexOf(n),y:n}},i._getTopColGroup=function(e){if(2>e)return this.colYs;for(var t=[],n=this.cols+1-e,i=0;n>i;i++)t[i]=this._getColGroupY(i,e);return t},i._getColGroupY=function(e,t){if(2>t)return this.colYs[e];var n=this.colYs.slice(e,e+t);return Math.max.apply(Math,n)},i._getHorizontalColPosition=function(e,t){var n=this.horizontalColIndex%this.cols;n=e>1&&n+e>this.cols?0:n;var i=t.size.outerWidth&&t.size.outerHeight;return this.horizontalColIndex=i?n+e:this.horizontalColIndex,{col:n,y:this._getColGroupY(n,e)}},i._manageStamp=function(e){var n=t(e),i=this._getElementOffset(e),o=this._getOption("originLeft"),r=o?i.left:i.right,s=r+n.outerWidth,a=Math.floor(r/this.columnWidth);a=Math.max(0,a);var l=Math.floor(s/this.columnWidth);l-=s%this.columnWidth?0:1,l=Math.min(this.cols-1,l);for(var u=this._getOption("originTop"),c=(u?i.top:i.bottom)+n.outerHeight,p=a;l>=p;p++)this.colYs[p]=Math.max(c,this.colYs[p])},i._getContainerSize=function(){this.maxY=Math.max.apply(Math,this.colYs);var e={height:this.maxY};return this._getOption("fitWidth")&&(e.width=this._getContainerFitWidth()),e},i._getContainerFitWidth=function(){for(var e=0,t=this.cols;--t&&0===this.colYs[t];)e++;return(this.cols-e)*this.columnWidth-this.gutter},i.needsResizeLayout=function(){var e=this.containerWidth;return this.getContainerWidth(),e!=this.containerWidth},n}),/*!

 matchMedia() polyfill - Test a CSS media type/query in JS. Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas, David Knight. Dual MIT/BSD license 

*/
window.matchMedia||(window.matchMedia=function(){"use strict";var e=window.styleMedia||window.media;if(!e){var t=document.createElement("style"),n=document.getElementsByTagName("script")[0],i=null;t.type="text/css",t.id="matchmediajs-test",n.parentNode.insertBefore(t,n),i="getComputedStyle"in window&&window.getComputedStyle(t,null)||t.currentStyle,e={matchMedium:function(e){var n="@media "+e+"{ #matchmediajs-test { width: 1px; } }";return t.styleSheet?t.styleSheet.cssText=n:t.textContent=n,"1px"===i.width}}}return function(t){return{matches:e.matchMedium(t||"all"),media:t||"all"}}}()),function(e,t,n){function i(e,t){return typeof e===t}function o(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function r(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):S?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function s(){var e=t.body;return e||(e=r(S?"svg":"body"),e.fake=!0),e}function a(e,n,i,o){var a,l,u,c,p="modernizr",d=r("div"),f=s();if(parseInt(i,10))for(;i--;)u=r("div"),u.id=o?o[i]:p+(i+1),d.appendChild(u);return a=r("style"),a.type="text/css",a.id="s"+p,(f.fake?f:d).appendChild(a),f.appendChild(d),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(t.createTextNode(e)),d.id=p,f.fake&&(f.style.background="",f.style.overflow="hidden",c=x.style.overflow,x.style.overflow="hidden",x.appendChild(f)),l=n(d,e),f.fake?(f.parentNode.removeChild(f),x.style.overflow=c,x.offsetHeight):d.parentNode.removeChild(d),!!l}function l(e,t){return!!~(""+e).indexOf(t)}function u(e,t){return function(){return e.apply(t,arguments)}}function c(e,t,n){var o;for(var r in e)if(e[r]in t)return!1===n?e[r]:(o=t[e[r]],i(o,"function")?u(o,n||t):o);return!1}function p(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function d(t,n,i){var o;if("getComputedStyle"in e){o=getComputedStyle.call(e,t,n);var r=e.console;if(null!==o)i&&(o=o.getPropertyValue(i));else if(r){var s=r.error?"error":"log";r[s].call(r,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else o=!n&&t.currentStyle&&t.currentStyle[i];return o}function f(t,i){var o=t.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(p(t[o]),i))return!0;return!1}if("CSSSupportsRule"in e){for(var r=[];o--;)r.push("("+p(t[o])+":"+i+")");return r=r.join(" or "),a("@supports ("+r+") { #modernizr { position: absolute; } }",function(e){return"absolute"==d(e,null,"position")})}return n}function m(e,t,s,a){function u(){p&&(delete z.style,delete z.modElem)}if(a=!i(a,"undefined")&&a,!i(s,"undefined")){var c=f(e,s);if(!i(c,"undefined"))return c}for(var p,d,m,h,g,v=["modernizr","tspan","samp"];!z.style&&v.length;)p=!0,z.modElem=r(v.shift()),z.style=z.modElem.style;for(m=e.length,d=0;m>d;d++)if(h=e[d],g=z.style[h],l(h,"-")&&(h=o(h)),z.style[h]!==n){if(a||i(s,"undefined"))return u(),"pfx"!=t||h;try{z.style[h]=s}catch(e){}if(z.style[h]!=g)return u(),"pfx"!=t||h}return u(),!1}function h(e,t,n,o,r){var s=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+I.join(s+" ")+s).split(" ");return i(t,"string")||i(t,"undefined")?m(a,t,o,r):(a=(e+" "+k.join(s+" ")+s).split(" "),c(a,t,n))}function g(e,t,i){return h(e,n,n,t,i)}var v=[],y=[],w={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){y.push({name:e,fn:t,options:n})},addAsyncTest:function(e){y.push({name:null,fn:e})}},b=function(){};b.prototype=w,b=new b,b.addTest("localstorage",function(){var e="modernizr";try{return localStorage.setItem(e,e),localStorage.removeItem(e),!0}catch(e){return!1}});var x=t.documentElement,S="svg"===x.nodeName.toLowerCase(),C=w._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];w._prefixes=C;var T=w.testStyles=a;b.addTest("touchevents",function(){var n;if("ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch)n=!0;else{var i=["@media (",C.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");T(i,function(e){n=9===e.offsetTop})}return n});var P="Moz O ms Webkit",I=w._config.usePrefixes?P.split(" "):[];w._cssomPrefixes=I;var E=function(t){var i,o=C.length,r=e.CSSRule;if(void 0===r)return n;if(!t)return!1;if(t=t.replace(/^@/,""),(i=t.replace(/-/g,"_").toUpperCase()+"_RULE")in r)return"@"+t;for(var s=0;o>s;s++){var a=C[s];if(a.toUpperCase()+"_"+i in r)return"@-"+a.toLowerCase()+"-"+t}return!1};w.atRule=E;var k=w._config.usePrefixes?P.toLowerCase().split(" "):[];w._domPrefixes=k;var A={elem:r("modernizr")};b._q.push(function(){delete A.elem});var z={style:A.elem.style};b._q.unshift(function(){delete z.style}),w.testAllProps=h,w.testAllProps=g,b.addTest("cssgridlegacy",g("grid-columns","10px",!0)),b.addTest("cssgrid",g("grid-template-rows","none",!0));var V=w.prefixed=function(e,t,n){return 0===e.indexOf("@")?E(e):(-1!=e.indexOf("-")&&(e=o(e)),t?h(e,t,n):h(e,"pfx"))};b.addTest("objectfit",!!V("objectFit"),{aliases:["object-fit"]}),function(){var e,t,n,o,r,s,a;for(var l in y)if(y.hasOwnProperty(l)){if(e=[],t=y[l],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(o=i(t.fn,"function")?t.fn():t.fn,r=0;r<e.length;r++)s=e[r],a=s.split("."),1===a.length?b[a[0]]=o:(!b[a[0]]||b[a[0]]instanceof Boolean||(b[a[0]]=new Boolean(b[a[0]])),b[a[0]][a[1]]=o),v.push((o?"":"no-")+a.join("-"))}}(),function(e){var t=x.className,n=b._config.classPrefix||"";if(S&&(t=t.baseVal),b._config.enableJSClass){var i=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(i,"$1"+n+"js$2")}b._config.enableClasses&&(t+=" "+n+e.join(" "+n),S?x.className.baseVal=t:x.className=t)}(v),delete w.addTest,delete w.addAsyncTest;for(var O=0;O<b._q.length;O++)b._q[O]();e.Modernizr=b}(window,document),/*!
 *	jQuery OwlCarousel v1.31
 *
 *	Copyright (c) 2013 Bartosz Wojciechowski
 *	http://www.owlgraphic.com/owlcarousel/
 *
 *	Licensed under MIT
 *
 */
"function"!=typeof Object.create&&(Object.create=function(e){function t(){}return t.prototype=e,new t}),function(e,t,n,i){var o={init:function(t,n){var i=this;i.$elem=e(n),i.options=e.extend({},e.fn.owlCarousel.options,i.$elem.data(),t),i.userOptions=t,i.loadContent()},loadContent:function(){function t(e){if("function"==typeof n.options.jsonSuccess)n.options.jsonSuccess.apply(this,[e]);else{var t="";for(var i in e.owl)t+=e.owl[i].item;n.$elem.html(t)}n.logIn()}var n=this;if("function"==typeof n.options.beforeInit&&n.options.beforeInit.apply(this,[n.$elem]),"string"==typeof n.options.jsonPath){var i=n.options.jsonPath;e.getJSON(i,t)}else n.logIn()},logIn:function(e){var t=this;t.$elem.data("owl-originalStyles",t.$elem.attr("style")).data("owl-originalClasses",t.$elem.attr("class")),t.$elem.css({opacity:0}),t.orignalItems=t.options.items,t.checkBrowser(),t.wrapperWidth=0,t.checkVisible,t.setVars()},setVars:function(){var e=this;if(0===e.$elem.children().length)return!1;e.baseClass(),e.eventTypes(),e.$userItems=e.$elem.children(),e.itemsAmount=e.$userItems.length,e.wrapItems(),e.$owlItems=e.$elem.find(".owl-item"),e.$owlWrapper=e.$elem.find(".owl-wrapper"),e.playDirection="next",e.prevItem=0,e.prevArr=[0],e.currentItem=0,e.customEvents(),e.onStartup()},onStartup:function(){var e=this;e.updateItems(),e.calculateAll(),e.buildControls(),e.updateControls(),e.response(),e.moveEvents(),e.stopOnHover(),e.owlStatus(),!1!==e.options.transitionStyle&&e.transitionTypes(e.options.transitionStyle),!0===e.options.autoPlay&&(e.options.autoPlay=5e3),e.play(),e.$elem.find(".owl-wrapper").css("display","block"),e.$elem.is(":visible")?e.$elem.css("opacity",1):e.watchVisibility(),e.onstartup=!1,e.eachMoveUpdate(),"function"==typeof e.options.afterInit&&e.options.afterInit.apply(this,[e.$elem])},eachMoveUpdate:function(){var e=this;!0===e.options.lazyLoad&&e.lazyLoad(),!0===e.options.autoHeight&&e.autoHeight(),e.onVisibleItems(),"function"==typeof e.options.afterAction&&e.options.afterAction.apply(this,[e.$elem])},updateVars:function(){var e=this;"function"==typeof e.options.beforeUpdate&&e.options.beforeUpdate.apply(this,[e.$elem]),e.watchVisibility(),e.updateItems(),e.calculateAll(),e.updatePosition(),e.updateControls(),e.eachMoveUpdate(),"function"==typeof e.options.afterUpdate&&e.options.afterUpdate.apply(this,[e.$elem])},reload:function(e){var t=this;setTimeout(function(){t.updateVars()},0)},watchVisibility:function(){var e=this;if(!1!==e.$elem.is(":visible"))return!1;e.$elem.css({opacity:0}),clearInterval(e.autoPlayInterval),clearInterval(e.checkVisible),e.checkVisible=setInterval(function(){e.$elem.is(":visible")&&(e.reload(),e.$elem.animate({opacity:1},200),clearInterval(e.checkVisible))},500)},wrapItems:function(){var e=this;e.$userItems.wrapAll('<div class="owl-wrapper">').wrap('<div class="owl-item"></div>'),e.$elem.find(".owl-wrapper").wrap('<div class="owl-wrapper-outer">'),e.wrapperOuter=e.$elem.find(".owl-wrapper-outer"),e.$elem.css("display","block")},baseClass:function(){var e=this,t=e.$elem.hasClass(e.options.baseClass),n=e.$elem.hasClass(e.options.theme);t||e.$elem.addClass(e.options.baseClass),n||e.$elem.addClass(e.options.theme)},updateItems:function(){var t=this;if(!1===t.options.responsive)return!1;if(!0===t.options.singleItem)return t.options.items=t.orignalItems=1,t.options.itemsCustom=!1,t.options.itemsDesktop=!1,t.options.itemsDesktopSmall=!1,t.options.itemsTablet=!1,t.options.itemsTabletSmall=!1,t.options.itemsMobile=!1,!1;var n=e(t.options.responsiveBaseWidth).width();if(n>(t.options.itemsDesktop[0]||t.orignalItems)&&(t.options.items=t.orignalItems),void 0!==t.options.itemsCustom&&!1!==t.options.itemsCustom){t.options.itemsCustom.sort(function(e,t){return e[0]-t[0]});for(var i in t.options.itemsCustom)void 0!==t.options.itemsCustom[i]&&t.options.itemsCustom[i][0]<=n&&(t.options.items=t.options.itemsCustom[i][1])}else n<=t.options.itemsDesktop[0]&&!1!==t.options.itemsDesktop&&(t.options.items=t.options.itemsDesktop[1]),n<=t.options.itemsDesktopSmall[0]&&!1!==t.options.itemsDesktopSmall&&(t.options.items=t.options.itemsDesktopSmall[1]),n<=t.options.itemsTablet[0]&&!1!==t.options.itemsTablet&&(t.options.items=t.options.itemsTablet[1]),n<=t.options.itemsTabletSmall[0]&&!1!==t.options.itemsTabletSmall&&(t.options.items=t.options.itemsTabletSmall[1]),n<=t.options.itemsMobile[0]&&!1!==t.options.itemsMobile&&(t.options.items=t.options.itemsMobile[1]);t.options.items>t.itemsAmount&&!0===t.options.itemsScaleUp&&(t.options.items=t.itemsAmount)},response:function(){var n,i=this;if(!0!==i.options.responsive)return!1;var o=e(t).width();i.resizer=function(){e(t).width()!==o&&(!1!==i.options.autoPlay&&clearInterval(i.autoPlayInterval),clearTimeout(n),n=setTimeout(function(){o=e(t).width(),i.updateVars()},i.options.responsiveRefreshRate))},e(t).resize(i.resizer)},updatePosition:function(){var e=this;e.jumpTo(e.currentItem),!1!==e.options.autoPlay&&e.checkAp()},appendItemsSizes:function(){var t=this,n=0,i=t.itemsAmount-t.options.items;t.$owlItems.each(function(o){var r=e(this);r.css({width:t.itemWidth}).data("owl-item",Number(o)),o%t.options.items!=0&&o!==i||o>i||(n+=1),r.data("owl-roundPages",n)})},appendWrapperSizes:function(){var e=this,t=0,t=e.$owlItems.length*e.itemWidth;e.$owlWrapper.css({width:2*t,left:0}),e.appendItemsSizes()},calculateAll:function(){var e=this;e.calculateWidth(),e.appendWrapperSizes(),e.loops(),e.max()},calculateWidth:function(){var e=this;e.itemWidth=Math.floor(e.$elem.width()/e.options.items)},max:function(){var e=this,t=-1*(e.itemsAmount*e.itemWidth-e.options.items*e.itemWidth);return e.options.items>e.itemsAmount?(e.maximumItem=0,t=0,e.maximumPixels=0):(e.maximumItem=e.itemsAmount-e.options.items,e.maximumPixels=t),t},min:function(){return 0},loops:function(){var t=this;t.positionsInArray=[0],t.pagesInArray=[];for(var n=0,i=0,o=0;o<t.itemsAmount;o++)if(i+=t.itemWidth,t.positionsInArray.push(-i),!0===t.options.scrollPerPage){var r=e(t.$owlItems[o]),s=r.data("owl-roundPages");s!==n&&(t.pagesInArray[n]=t.positionsInArray[o],n=s)}},buildControls:function(){var t=this;!0!==t.options.navigation&&!0!==t.options.pagination||(t.owlControls=e('<div class="owl-controls"/>').toggleClass("clickable",!t.browser.isTouch).appendTo(t.$elem)),!0===t.options.pagination&&t.buildPagination(),!0===t.options.navigation&&t.buildButtons()},buildButtons:function(){var t=this,n=e('<div class="owl-buttons"/>');t.owlControls.append(n),t.buttonPrev=e("<div/>",{class:"owl-prev",html:t.options.navigationText[0]||""}),t.buttonNext=e("<div/>",{class:"owl-next",html:t.options.navigationText[1]||""}),n.append(t.buttonPrev).append(t.buttonNext),n.on("touchstart.owlControls mousedown.owlControls",'div[class^="owl"]',function(e){e.preventDefault()}),n.on("touchend.owlControls mouseup.owlControls",'div[class^="owl"]',function(n){n.preventDefault(),e(this).hasClass("owl-next")?t.next():t.prev()})},buildPagination:function(){var t=this;t.paginationWrapper=e('<div class="owl-pagination"/>'),t.owlControls.append(t.paginationWrapper),t.paginationWrapper.on("touchend.owlControls mouseup.owlControls",".owl-page",function(n){n.preventDefault(),Number(e(this).data("owl-page"))!==t.currentItem&&t.goTo(Number(e(this).data("owl-page")),!0)})},updatePagination:function(){var t=this;if(!1===t.options.pagination)return!1;t.paginationWrapper.html("");for(var n=0,i=t.itemsAmount-t.itemsAmount%t.options.items,o=0;o<t.itemsAmount;o++)if(o%t.options.items==0){if(n+=1,i===o)var r=t.itemsAmount-t.options.items;var s=e("<div/>",{class:"owl-page"}),a=e("<span></span>",{text:!0===t.options.paginationNumbers?n:"",class:!0===t.options.paginationNumbers?"owl-numbers":""});s.append(a),s.data("owl-page",i===o?r:o),s.data("owl-roundPages",n),t.paginationWrapper.append(s)}t.checkPagination()},checkPagination:function(){var t=this;if(!1===t.options.pagination)return!1;t.paginationWrapper.find(".owl-page").each(function(n,i){e(this).data("owl-roundPages")===e(t.$owlItems[t.currentItem]).data("owl-roundPages")&&(t.paginationWrapper.find(".owl-page").removeClass("active"),e(this).addClass("active"))})},checkNavigation:function(){var e=this;if(!1===e.options.navigation)return!1;!1===e.options.rewindNav&&(0===e.currentItem&&0===e.maximumItem?(e.buttonPrev.addClass("disabled"),e.buttonNext.addClass("disabled")):0===e.currentItem&&0!==e.maximumItem?(e.buttonPrev.addClass("disabled"),e.buttonNext.removeClass("disabled")):e.currentItem===e.maximumItem?(e.buttonPrev.removeClass("disabled"),e.buttonNext.addClass("disabled")):0!==e.currentItem&&e.currentItem!==e.maximumItem&&(e.buttonPrev.removeClass("disabled"),e.buttonNext.removeClass("disabled")))},updateControls:function(){var e=this;e.updatePagination(),e.checkNavigation(),e.owlControls&&(e.options.items>=e.itemsAmount?e.owlControls.hide():e.owlControls.show())},destroyControls:function(){var e=this;e.owlControls&&e.owlControls.remove()},next:function(e){var t=this;if(t.isTransition)return!1;if(t.currentItem+=!0===t.options.scrollPerPage?t.options.items:1,t.currentItem>t.maximumItem+(1==t.options.scrollPerPage?t.options.items-1:0)){if(!0!==t.options.rewindNav)return t.currentItem=t.maximumItem,!1;t.currentItem=0,e="rewind"}t.goTo(t.currentItem,e)},prev:function(e){var t=this;if(t.isTransition)return!1;if(!0===t.options.scrollPerPage&&t.currentItem>0&&t.currentItem<t.options.items?t.currentItem=0:t.currentItem-=!0===t.options.scrollPerPage?t.options.items:1,t.currentItem<0){if(!0!==t.options.rewindNav)return t.currentItem=0,!1;t.currentItem=t.maximumItem,e="rewind"}t.goTo(t.currentItem,e)},goTo:function(e,t,n){var i=this;if(i.isTransition)return!1;if("function"==typeof i.options.beforeMove&&i.options.beforeMove.apply(this,[i.$elem]),e>=i.maximumItem?e=i.maximumItem:e<=0&&(e=0),i.currentItem=i.owl.currentItem=e,!1!==i.options.transitionStyle&&"drag"!==n&&1===i.options.items&&!0===i.browser.support3d)return i.swapSpeed(0),!0===i.browser.support3d?i.transition3d(i.positionsInArray[e]):i.css2slide(i.positionsInArray[e],1),i.afterGo(),i.singleItemTransition(),!1;var o=i.positionsInArray[e];!0===i.browser.support3d?(i.isCss3Finish=!1,!0===t?(i.swapSpeed("paginationSpeed"),setTimeout(function(){i.isCss3Finish=!0},i.options.paginationSpeed)):"rewind"===t?(i.swapSpeed(i.options.rewindSpeed),setTimeout(function(){i.isCss3Finish=!0},i.options.rewindSpeed)):(i.swapSpeed("slideSpeed"),setTimeout(function(){i.isCss3Finish=!0},i.options.slideSpeed)),i.transition3d(o)):!0===t?i.css2slide(o,i.options.paginationSpeed):"rewind"===t?i.css2slide(o,i.options.rewindSpeed):i.css2slide(o,i.options.slideSpeed),i.afterGo()},jumpTo:function(e){var t=this;"function"==typeof t.options.beforeMove&&t.options.beforeMove.apply(this,[t.$elem]),e>=t.maximumItem||-1===e?e=t.maximumItem:e<=0&&(e=0),t.swapSpeed(0),!0===t.browser.support3d?t.transition3d(t.positionsInArray[e]):t.css2slide(t.positionsInArray[e],1),t.currentItem=t.owl.currentItem=e,t.afterGo()},afterGo:function(){var e=this;e.prevArr.push(e.currentItem),e.prevItem=e.owl.prevItem=e.prevArr[e.prevArr.length-2],e.prevArr.shift(0),e.prevItem!==e.currentItem&&(e.checkPagination(),e.checkNavigation(),e.eachMoveUpdate(),!1!==e.options.autoPlay&&e.checkAp()),"function"==typeof e.options.afterMove&&e.prevItem!==e.currentItem&&e.options.afterMove.apply(this,[e.$elem])},stop:function(){var e=this;e.apStatus="stop",clearInterval(e.autoPlayInterval)},checkAp:function(){var e=this;"stop"!==e.apStatus&&e.play()},play:function(){var e=this;if(e.apStatus="play",!1===e.options.autoPlay)return!1;clearInterval(e.autoPlayInterval),e.autoPlayInterval=setInterval(function(){e.next(!0)},e.options.autoPlay)},swapSpeed:function(e){var t=this;"slideSpeed"===e?t.$owlWrapper.css(t.addCssSpeed(t.options.slideSpeed)):"paginationSpeed"===e?t.$owlWrapper.css(t.addCssSpeed(t.options.paginationSpeed)):"string"!=typeof e&&t.$owlWrapper.css(t.addCssSpeed(e))},addCssSpeed:function(e){return{"-webkit-transition":"all "+e+"ms ease","-moz-transition":"all "+e+"ms ease","-o-transition":"all "+e+"ms ease",transition:"all "+e+"ms ease"}},removeTransition:function(){return{"-webkit-transition":"","-moz-transition":"","-o-transition":"",transition:""}},doTranslate:function(e){return{"-webkit-transform":"translate3d("+e+"px, 0px, 0px)","-moz-transform":"translate3d("+e+"px, 0px, 0px)","-o-transform":"translate3d("+e+"px, 0px, 0px)","-ms-transform":"translate3d("+e+"px, 0px, 0px)",transform:"translate3d("+e+"px, 0px,0px)"}},transition3d:function(e){var t=this;t.$owlWrapper.css(t.doTranslate(e))},css2move:function(e){this.$owlWrapper.css({left:e})},css2slide:function(e,t){var n=this;n.isCssFinish=!1,n.$owlWrapper.stop(!0,!0).animate({left:e},{duration:t||n.options.slideSpeed,complete:function(){n.isCssFinish=!0}})},checkBrowser:function(){var e=this,i="translate3d(0px, 0px, 0px)",o=n.createElement("div");o.style.cssText="  -moz-transform:"+i+"; -ms-transform:"+i+"; -o-transform:"+i+"; -webkit-transform:"+i+"; transform:"+i;var r=/translate3d\(0px, 0px, 0px\)/g,s=o.style.cssText.match(r),a=null!==s&&1===s.length,l="ontouchstart"in t||navigator.msMaxTouchPoints;e.browser={support3d:a,isTouch:l}},moveEvents:function(){var e=this;!1===e.options.mouseDrag&&!1===e.options.touchDrag||(e.gestures(),e.disabledEvents())},eventTypes:function(){var e=this,t=["s","e","x"];e.ev_types={},!0===e.options.mouseDrag&&!0===e.options.touchDrag?t=["touchstart.owl mousedown.owl","touchmove.owl mousemove.owl","touchend.owl touchcancel.owl mouseup.owl"]:!1===e.options.mouseDrag&&!0===e.options.touchDrag?t=["touchstart.owl","touchmove.owl","touchend.owl touchcancel.owl"]:!0===e.options.mouseDrag&&!1===e.options.touchDrag&&(t=["mousedown.owl","mousemove.owl","mouseup.owl"]),e.ev_types.start=t[0],e.ev_types.move=t[1],e.ev_types.end=t[2]},disabledEvents:function(){var t=this;t.$elem.on("dragstart.owl",function(e){e.preventDefault()}),t.$elem.on("mousedown.disableTextSelect",function(t){return e(t.target).is("input, textarea, select, option")})},gestures:function(){function o(e){return e.touches?{x:e.touches[0].pageX,y:e.touches[0].pageY}:e.pageX!==i?{x:e.pageX,y:e.pageY}:{x:e.clientX,y:e.clientY}}function r(t){"on"===t?(e(n).on(u.ev_types.move,a),e(n).on(u.ev_types.end,l)):"off"===t&&(e(n).off(u.ev_types.move),e(n).off(u.ev_types.end))}function s(n){var n=n.originalEvent||n||t.event;if(3===n.which)return!1;if(!(u.itemsAmount<=u.options.items)){if(!1===u.isCssFinish&&!u.options.dragBeforeAnimFinish)return!1;if(!1===u.isCss3Finish&&!u.options.dragBeforeAnimFinish)return!1;!1!==u.options.autoPlay&&clearInterval(u.autoPlayInterval),!0===u.browser.isTouch||u.$owlWrapper.hasClass("grabbing")||u.$owlWrapper.addClass("grabbing"),u.newPosX=0,u.newRelativeX=0,e(this).css(u.removeTransition());var i=e(this).position();c.relativePos=i.left,c.offsetX=o(n).x-i.left,c.offsetY=o(n).y-i.top,r("on"),c.sliding=!1,c.targetElement=n.target||n.srcElement}}function a(i){var i=i.originalEvent||i||t.event;u.newPosX=o(i).x-c.offsetX,u.newPosY=o(i).y-c.offsetY,u.newRelativeX=u.newPosX-c.relativePos,"function"==typeof u.options.startDragging&&!0!==c.dragging&&0!==u.newRelativeX&&(c.dragging=!0,u.options.startDragging.apply(u,[u.$elem])),(u.newRelativeX>8||u.newRelativeX<-8&&!0===u.browser.isTouch)&&(i.preventDefault?i.preventDefault():i.returnValue=!1,c.sliding=!0),(u.newPosY>10||u.newPosY<-10)&&!1===c.sliding&&e(n).off("touchmove.owl");u.newPosX=Math.max(Math.min(u.newPosX,function(){return u.newRelativeX/5}()),function(){return u.maximumPixels+u.newRelativeX/5}()),!0===u.browser.support3d?u.transition3d(u.newPosX):u.css2move(u.newPosX)}function l(n){var n=n.originalEvent||n||t.event;if(n.target=n.target||n.srcElement,c.dragging=!1,!0!==u.browser.isTouch&&u.$owlWrapper.removeClass("grabbing"),u.newRelativeX<0?u.dragDirection=u.owl.dragDirection="left":u.dragDirection=u.owl.dragDirection="right",0!==u.newRelativeX){var i=u.getNewPosition();if(u.goTo(i,!1,"drag"),c.targetElement===n.target&&!0!==u.browser.isTouch){e(n.target).on("click.disable",function(t){t.stopImmediatePropagation(),t.stopPropagation(),t.preventDefault(),e(n.target).off("click.disable")});var o=e._data(n.target,"events").click,s=o.pop();o.splice(0,0,s)}}r("off")}var u=this,c={offsetX:0,offsetY:0,baseElWidth:0,relativePos:0,position:null,minSwipe:null,maxSwipe:null,sliding:null,dargging:null,targetElement:null};u.isCssFinish=!0,u.$elem.on(u.ev_types.start,".owl-wrapper",s)},getNewPosition:function(){var e,t=this;return e=t.closestItem(),e>t.maximumItem?(t.currentItem=t.maximumItem,e=t.maximumItem):t.newPosX>=0&&(e=0,t.currentItem=0),e},closestItem:function(){var t=this,n=!0===t.options.scrollPerPage?t.pagesInArray:t.positionsInArray,i=t.newPosX,o=null;return e.each(n,function(r,s){i-t.itemWidth/20>n[r+1]&&i-t.itemWidth/20<s&&"left"===t.moveDirection()?(o=s,!0===t.options.scrollPerPage?t.currentItem=e.inArray(o,t.positionsInArray):t.currentItem=r):i+t.itemWidth/20<s&&i+t.itemWidth/20>(n[r+1]||n[r]-t.itemWidth)&&"right"===t.moveDirection()&&(!0===t.options.scrollPerPage?(o=n[r+1]||n[n.length-1],t.currentItem=e.inArray(o,t.positionsInArray)):(o=n[r+1],t.currentItem=r+1))}),t.currentItem},moveDirection:function(){var e,t=this;return t.newRelativeX<0?(e="right",t.playDirection="next"):(e="left",t.playDirection="prev"),e},customEvents:function(){var e=this;e.$elem.on("owl.next",function(){e.next()}),e.$elem.on("owl.prev",function(){e.prev()}),e.$elem.on("owl.play",function(t,n){e.options.autoPlay=n,e.play(),e.hoverStatus="play"}),e.$elem.on("owl.stop",function(){e.stop(),e.hoverStatus="stop"}),e.$elem.on("owl.goTo",function(t,n){e.goTo(n)}),e.$elem.on("owl.jumpTo",function(t,n){e.jumpTo(n)})},stopOnHover:function(){var e=this;!0===e.options.stopOnHover&&!0!==e.browser.isTouch&&!1!==e.options.autoPlay&&(e.$elem.on("mouseover",function(){e.stop()}),e.$elem.on("mouseout",function(){"stop"!==e.hoverStatus&&e.play()}))},lazyLoad:function(){var t=this;if(!1===t.options.lazyLoad)return!1;for(var n=0;n<t.itemsAmount;n++){var o=e(t.$owlItems[n]);if("loaded"!==o.data("owl-loaded")){var r=o.data("owl-item"),s=o.find(".lazyOwl");"string"==typeof s.data("src")?(o.data("owl-loaded")===i&&(s.hide(),o.addClass("loading").data("owl-loaded","checked")),(!0!==t.options.lazyFollow||r>=t.currentItem)&&r<t.currentItem+t.options.items&&s.length&&t.lazyPreload(o,s)):o.data("owl-loaded","loaded")}}},lazyPreload:function(e,t){function n(){r+=1,o.completeImg(t.get(0))||!0===s?i():r<=100?setTimeout(n,100):i()}function i(){e.data("owl-loaded","loaded").removeClass("loading"),t.removeAttr("data-src"),"fade"===o.options.lazyEffect?t.fadeIn(400):t.show(),"function"==typeof o.options.afterLazyLoad&&o.options.afterLazyLoad.apply(this,[o.$elem])}var o=this,r=0;if("DIV"===t.prop("tagName")){t.css("background-image","url("+t.data("src")+")");var s=!0}else t[0].src=t.data("src");n()},autoHeight:function(){function t(){s+=1,o.completeImg(r.get(0))?n():s<=100?setTimeout(t,100):o.wrapperOuter.css("height","")}function n(){var t=e(o.$owlItems[o.currentItem]).height();o.wrapperOuter.css("height",t+"px"),o.wrapperOuter.hasClass("autoHeight")||setTimeout(function(){o.wrapperOuter.addClass("autoHeight")},0)}var o=this,r=e(o.$owlItems[o.currentItem]).find("img");if(r.get(0)!==i){var s=0;t()}else n()},completeImg:function(e){return!!e.complete&&(void 0===e.naturalWidth||0!=e.naturalWidth)},onVisibleItems:function(){var t=this;!0===t.options.addClassActive&&t.$owlItems.removeClass("active"),t.visibleItems=[];for(var n=t.currentItem;n<t.currentItem+t.options.items;n++)t.visibleItems.push(n),!0===t.options.addClassActive&&e(t.$owlItems[n]).addClass("active");t.owl.visibleItems=t.visibleItems},transitionTypes:function(e){var t=this;t.outClass="owl-"+e+"-out",t.inClass="owl-"+e+"-in"},singleItemTransition:function(){var e=this;e.isTransition=!0;var t=e.outClass,n=e.inClass,i=e.$owlItems.eq(e.currentItem),o=e.$owlItems.eq(e.prevItem),r=Math.abs(e.positionsInArray[e.currentItem])+e.positionsInArray[e.prevItem],s=Math.abs(e.positionsInArray[e.currentItem])+e.itemWidth/2;e.$owlWrapper.addClass("owl-origin").css({"-webkit-transform-origin":s+"px","-moz-perspective-origin":s+"px","perspective-origin":s+"px"});var a="webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend";o.css(function(e,t){return{position:"relative",left:e+"px"}}(r,10)).addClass(t).on(a,function(){e.endPrev=!0,o.off(a),e.clearTransStyle(o,t)}),i.addClass(n).on(a,function(){e.endCurrent=!0,i.off(a),e.clearTransStyle(i,n)})},clearTransStyle:function(e,t){var n=this;e.css({position:"",left:""}).removeClass(t),n.endPrev&&n.endCurrent&&(n.$owlWrapper.removeClass("owl-origin"),n.endPrev=!1,n.endCurrent=!1,n.isTransition=!1)},owlStatus:function(){var e=this;e.owl={userOptions:e.userOptions,baseElement:e.$elem,userItems:e.$userItems,owlItems:e.$owlItems,currentItem:e.currentItem,prevItem:e.prevItem,visibleItems:e.visibleItems,isTouch:e.browser.isTouch,browser:e.browser,dragDirection:e.dragDirection}},clearEvents:function(){var i=this;i.$elem.off(".owl owl mousedown.disableTextSelect"),e(n).off(".owl owl"),e(t).off("resize",i.resizer)},unWrap:function(){var e=this;0!==e.$elem.children().length&&(e.$owlWrapper.unwrap(),e.$userItems.unwrap().unwrap(),e.owlControls&&e.owlControls.remove()),e.clearEvents(),e.$elem.attr("style",e.$elem.data("owl-originalStyles")||"").attr("class",e.$elem.data("owl-originalClasses"))},destroy:function(){var e=this;e.stop(),clearInterval(e.checkVisible),e.unWrap(),e.$elem.removeData()},reinit:function(t){var n=this,i=e.extend({},n.userOptions,t);n.unWrap(),n.init(i,n.$elem)},addItem:function(e,t){var n,o=this;return!!e&&(0===o.$elem.children().length?(o.$elem.append(e),o.setVars(),!1):(o.unWrap(),n=t===i||-1===t?-1:t,n>=o.$userItems.length||-1===n?o.$userItems.eq(-1).after(e):o.$userItems.eq(n).before(e),void o.setVars()))},removeItem:function(e){var t,n=this;if(0===n.$elem.children().length)return!1;t=e===i||-1===e?-1:e,n.unWrap(),n.$userItems.eq(t).remove(),n.setVars()}};e.fn.owlCarousel=function(t){return this.each(function(){if(!0===e(this).data("owl-init"))return!1;e(this).data("owl-init",!0);var n=Object.create(o);n.init(t,this),e.data(this,"owlCarousel",n)})},e.fn.owlCarousel.options={items:5,itemsCustom:!1,itemsDesktop:[1199,4],itemsDesktopSmall:[979,3],itemsTablet:[768,2],itemsTabletSmall:!1,itemsMobile:[479,1],singleItem:!1,itemsScaleUp:!1,slideSpeed:200,paginationSpeed:800,rewindSpeed:1e3,autoPlay:!1,stopOnHover:!1,navigation:!1,navigationText:["prev","next"],rewindNav:!0,scrollPerPage:!1,pagination:!0,paginationNumbers:!1,responsive:!0,responsiveRefreshRate:200,responsiveBaseWidth:t,baseClass:"owl-carousel",theme:"owl-theme",lazyLoad:!1,lazyFollow:!0,lazyEffect:"fade",autoHeight:!1,jsonPath:!1,jsonSuccess:!1,dragBeforeAnimFinish:!0,mouseDrag:!0,touchDrag:!0,addClassActive:!1,transitionStyle:!1,beforeUpdate:!1,afterUpdate:!1,beforeInit:!1,afterInit:!1,beforeMove:!1,afterMove:!1,afterAction:!1,startDragging:!1,afterLazyLoad:!1}}(jQuery,window,document),/*!
 *
 * Spin.js
 * Copyright (c) 2011-2013 Felix Gnass
 * Licensed under the MIT license
 */
function(e,t){"object"==typeof exports?module.exports=t():"function"==typeof define&&define.amd?define(t):e.Spinner=t()}(this,function(){"use strict";function e(e,t){var n,i=document.createElement(e||"div");for(n in t)i[n]=t[n];return i}function t(e){for(var t=1,n=arguments.length;t<n;t++)e.appendChild(arguments[t]);return e}function n(e,t,n,i){var o=["opacity",t,~~(100*e),n,i].join("-"),r=.01+n/i*100,s=Math.max(1-(1-e)/t*(100-r),e),a=u.substring(0,u.indexOf("Animation")).toLowerCase(),l=a&&"-"+a+"-"||"";return p[o]||(d.insertRule("@"+l+"keyframes "+o+"{0%{opacity:"+s+"}"+r+"%{opacity:"+e+"}"+(r+.01)+"%{opacity:1}"+(r+t)%100+"%{opacity:"+e+"}100%{opacity:"+s+"}}",d.cssRules.length),p[o]=1),o}function i(e,t){var n,i,o=e.style;for(t=t.charAt(0).toUpperCase()+t.slice(1),i=0;i<c.length;i++)if(n=c[i]+t,void 0!==o[n])return n;if(void 0!==o[t])return t}function o(e,t){for(var n in t)e.style[i(e,n)||n]=t[n];return e}function r(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)void 0===e[i]&&(e[i]=n[i])}return e}function s(e){for(var t={x:e.offsetLeft,y:e.offsetTop};e=e.offsetParent;)t.x+=e.offsetLeft,t.y+=e.offsetTop;return t}function a(e,t){return"string"==typeof e?e:e[t%e.length]}function l(e){if(void 0===this)return new l(e);this.opts=r(e||{},l.defaults,f)}var u,c=["webkit","Moz","ms","O"],p={},d=function(){var n=e("style",{type:"text/css"});return t(document.getElementsByTagName("head")[0],n),n.sheet||n.styleSheet}(),f={lines:12,length:7,width:5,radius:10,rotate:0,corners:1,color:"#000",direction:1,speed:1,trail:100,opacity:.25,fps:20,zIndex:2e9,className:"spinner",top:"auto",left:"auto",position:"relative"};l.defaults={},r(l.prototype,{spin:function(t){this.stop();var n,i,r=this,a=r.opts,l=r.el=o(e(0,{className:a.className}),{position:a.position,width:0,zIndex:a.zIndex}),c=a.radius+a.length+a.width;if(t&&(t.insertBefore(l,t.firstChild||null),i=s(t),n=s(l),o(l,{left:("auto"==a.left?i.x-n.x+(t.offsetWidth>>1):parseInt(a.left,10)+c)+"px",top:("auto"==a.top?i.y-n.y+(t.offsetHeight>>1):parseInt(a.top,10)+c)+"px"})),l.setAttribute("role","progressbar"),r.lines(l,r.opts),!u){var p,d=0,f=(a.lines-1)*(1-a.direction)/2,m=a.fps,h=m/a.speed,g=(1-a.opacity)/(h*a.trail/100),v=h/a.lines;!function e(){d++;for(var t=0;t<a.lines;t++)p=Math.max(1-(d+(a.lines-t)*v)%h*g,a.opacity),r.opacity(l,t*a.direction+f,p,a);r.timeout=r.el&&setTimeout(e,~~(1e3/m))}()}return r},stop:function(){var e=this.el;return e&&(clearTimeout(this.timeout),e.parentNode&&e.parentNode.removeChild(e),this.el=void 0),this},lines:function(i,r){function s(t,n){return o(e(),{position:"absolute",width:r.length+r.width+"px",height:r.width+"px",background:t,boxShadow:n,transformOrigin:"left",transform:"rotate("+~~(360/r.lines*c+r.rotate)+"deg) translate("+r.radius+"px,0)",borderRadius:(r.corners*r.width>>1)+"px"})}for(var l,c=0,p=(r.lines-1)*(1-r.direction)/2;c<r.lines;c++)l=o(e(),{position:"absolute",top:1+~(r.width/2)+"px",transform:r.hwaccel?"translate3d(0,0,0)":"",opacity:r.opacity,animation:u&&n(r.opacity,r.trail,p+c*r.direction,r.lines)+" "+1/r.speed+"s linear infinite"}),r.shadow&&t(l,o(s("#000","0 0 4px #000"),{top:"2px"})),t(i,t(l,s(a(r.color,c),"0 0 1px rgba(0,0,0,.1)")));return i},opacity:function(e,t,n){t<e.childNodes.length&&(e.childNodes[t].style.opacity=n)}});var m=o(e("group"),{behavior:"url(#default#VML)"});return!i(m,"transform")&&m.adj?function(){function n(t,n){return e("<"+t+' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">',n)}d.addRule(".spin-vml","behavior:url(#default#VML)"),l.prototype.lines=function(e,i){function r(){return o(n("group",{coordsize:c+" "+c,coordorigin:-u+" "+-u}),{width:c,height:c})}function s(e,s,l){t(d,t(o(r(),{rotation:360/i.lines*e+"deg",left:~~s}),t(o(n("roundrect",{arcsize:i.corners}),{width:u,height:i.width,left:i.radius,top:-i.width>>1,filter:l}),n("fill",{color:a(i.color,e),opacity:i.opacity}),n("stroke",{opacity:0}))))}var l,u=i.length+i.width,c=2*u,p=2*-(i.width+i.length)+"px",d=o(r(),{position:"absolute",top:p,left:p});if(i.shadow)for(l=1;l<=i.lines;l++)s(l,-2,"progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");for(l=1;l<=i.lines;l++)s(l);return t(e,d)},l.prototype.opacity=function(e,t,n,i){var o=e.firstChild;i=i.shadow&&i.lines||0,o&&t+i<o.childNodes.length&&(o=o.childNodes[t+i],o=o&&o.firstChild,(o=o&&o.firstChild)&&(o.opacity=n))}}():u=i(m,"animation"),l}),function(e){if("object"==typeof exports)e(require("jquery"),require("spin"));else if("function"==typeof define&&define.amd)define(["jquery","spin"],e);else{if(!window.Spinner)throw new Error("Spin.js not present");e(window.jQuery,window.Spinner)}}(function(e,t){e.fn.spin=function(n,i){return this.each(function(){var o=e(this),r=o.data();r.spinner&&(r.spinner.stop(),delete r.spinner),!1!==n&&(n=e.extend({color:i||o.css("color")},e.fn.spin.presets[n]||n),r.spinner=new t(n).spin(this))})},e.fn.spin.presets={tiny:{lines:8,length:2,width:2,radius:3},small:{lines:8,length:4,width:3,radius:5},large:{lines:10,length:8,width:4,radius:8}}});
(function() {
  var Accordion, Cart, Collection, DOC, Footer, FrameworkAlign, FullscreenSlider, HEADER, HorizontalTabs, MediaQueries, PAGE, Popup, ProductSlider, PromoBar, VerticalTabs, VideoModal, WINDOW, current_window, log, mq_large, mq_medium, mq_small, touchevents_exist,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  FrameworkAlign = (function() {
    function FrameworkAlign(element1, type1) {
      this.element = element1;
      this.type = type1;
      this.resizeListeners = bind(this.resizeListeners, this);
      this.fillYSpace = bind(this.fillYSpace, this);
      this.checkOverlap = bind(this.checkOverlap, this);
      this.createOverlapDetectors = bind(this.createOverlapDetectors, this);
      this.position = bind(this.position, this);
      this.parent = this.element.parent();
      this.left_side_border;
      this.right_element_width = null;
      this.position();
      this.fillYSpace();
      this.createOverlapDetectors();
      this.resizeListeners();
    }

    FrameworkAlign.prototype.position = function() {
      if (this.type === 'center-x') {
        return this.element.css({
          'margin-left': -(this.element.outerWidth() / 2)
        });
      }
    };

    FrameworkAlign.prototype.createOverlapDetectors = function() {
      var _this;
      _this = this;
      if (_this.type === 'right') {
        return this.right_element_width = _this.element.outerWidth();
      }
    };

    FrameworkAlign.prototype.checkOverlap = function() {
      var _this, left_element, left_side_border, right_side_border;
      _this = this;
      if (_this.type === 'right') {
        _this.parent.removeClass('overlap');
        left_element = _this.parent.children().eq(_this.element.index() - 1);
        left_side_border = left_element.position().left + left_element.outerWidth();
        right_side_border = _this.parent.outerWidth() - _this.right_element_width;
        if (left_side_border >= right_side_border) {
          return _this.parent.addClass('overlap');
        }
      }
    };

    FrameworkAlign.prototype.fillYSpace = function() {
      var _this, container_height, text_panel_height;
      _this = this;
      if (_this.type === 'fill-y--dynamic') {
        container_height = _this.parent.outerHeight();
        text_panel_height = _this.parent.find('.fw--align--fill-y--fixed').outerHeight();
        return _this.element.outerHeight(container_height - text_panel_height);
      }
    };

    FrameworkAlign.prototype.resizeListeners = function() {
      var _this;
      _this = this;
      $(window).on('resize.FrameworkAlign', function() {
        _this.checkOverlap();
        return _this.fillYSpace();
      });
      return setTimeout(function() {
        return _this.checkOverlap();
      }, 1);
    };

    return FrameworkAlign;

  })();

  theme.classes.FrameworkAnimation = (function() {
    function FrameworkAnimation() {}

    return FrameworkAnimation;

  })();

  theme.classes.FrameworkArticle = (function() {
    function FrameworkArticle(root) {
      var _this;
      this.root = root;
      this.startDisqus = bind(this.startDisqus, this);
      this.load = bind(this.load, this);
      _this = this;
      _this.load();
    }

    FrameworkArticle.prototype.load = function() {
      var _this, comments_enabled, enable_disqus;
      _this = this;
      enable_disqus = $('.article--root').attr('data-enable-disqus');
      comments_enabled = $('.article--root').attr('data-comments-enabled');
      if (enable_disqus && comments_enabled) {
        return _this.startDisqus();
      }
    };

    FrameworkArticle.prototype.startDisqus = function() {
      var _this, disqusConfig, disqus_shortname;
      _this = this;
      disqusConfig = function() {
        _this.page.url = $('.article--root').attr('data-canonical-url');
        return _this.page.identifier = $('.article--root').attr('data-article-id');
      };
      disqus_shortname = $('.article--root').attr('data-disqus-shortname');
      return (function() {
        var s;
        s = document.createElement('script');
        s.src = "https://" + disqus_shortname + ".disqus.com/embed.js";
        s.setAttribute('data-timestamp', +new Date());
        return (document.head || document.body).appendChild(s);
      })();
    };

    return FrameworkArticle;

  })();

  theme.classes.FrameworkBlog = (function() {
    function FrameworkBlog(root) {
      var _this;
      this.root = root;
      this.initMasonry = bind(this.initMasonry, this);
      this.eventListeners = bind(this.eventListeners, this);
      this.load = bind(this.load, this);
      _this = this;
      _this.load();
    }

    FrameworkBlog.prototype.load = function() {
      var _this, is_mobile;
      _this = this;
      _this.eventListeners();
      _this.has_multi_columns = _this.root.attr('data-columns') !== '1';
      is_mobile = theme.utils.mqs.current_window === 'small';
      if (!is_mobile && _this.has_multi_columns) {
        _this.initMasonry();
        return $(window).load(function() {
          return _this.initMasonry();
        });
      }
    };

    FrameworkBlog.prototype.eventListeners = function() {
      var _this;
      _this = this;
      return $(window).on('resize.Blog', theme.utils.debounce(100, function() {
        if (_this.has_multi_columns && theme.utils.mqs.current_window !== 'small') {
          return _this.initMasonry();
        } else {
          return $('.blog--list').masonry('destroy');
        }
      }));
    };

    FrameworkBlog.prototype.initMasonry = function() {
      return $('.blog--list').masonry({
        itemSelector: '.blog--list--item',
        percentPosition: true,
        horizontalOrder: true,
        columnWidth: '.blog--list--item'
      });
    };

    return FrameworkBlog;

  })();

  theme.classes.FrameworkCart = (function() {
    function FrameworkCart(root) {
      var _this;
      this.root = root;
      this.convertCurrency = bind(this.convertCurrency, this);
      this.openModalListener = bind(this.openModalListener, this);
      this.openOffCanvasListener = bind(this.openOffCanvasListener, this);
      this.removeItem = bind(this.removeItem, this);
      this.removeItemListeners = bind(this.removeItemListeners, this);
      this.updateTotalsComplete = bind(this.updateTotalsComplete, this);
      this.updateTotals = bind(this.updateTotals, this);
      this.plusQuantity = bind(this.plusQuantity, this);
      this.minusQuantity = bind(this.minusQuantity, this);
      this.updateQuantityListeners = bind(this.updateQuantityListeners, this);
      this.addItem = bind(this.addItem, this);
      this.renderOther = bind(this.renderOther, this);
      this.renderListener = bind(this.renderListener, this);
      this.renderCart = bind(this.renderCart, this);
      _this = this;
      _this.adjusting_qty_timer = null;
      _this.table_content = _this.root.find('form > .content');
      _this.render_trigger = $('.fw--cart-modal--trigger-render');
      _this.totals = {};
      _this.add_locked = false;
      _this.render_locked = false;
      if (_this.root.hasClass('off-canvas')) {
        _this.view = 'off canvas';
      }
      if (_this.root.hasClass('modal--content')) {
        _this.view = 'modal';
      }
      _this.temp_quantity = 0;
      _this.renderCart();
      if (_this.view === 'off canvas') {
        _this.openOffCanvasListener();
      }
      _this.openModalListener();
      _this.renderListener();
    }

    FrameworkCart.prototype.renderCart = function(callback) {
      var _this;
      _this = this;
      if (!_this.render_locked) {
        _this.render_locked = true;
        _this.table_content.empty();
        return $.ajax({
          type: "GET",
          url: "/cart.js",
          dataType: "json"
        }).done(function(data, textStatus, jqXHR) {
          var cart, index, item, j, len, ref, row;
          if (textStatus === 'success') {
            cart = data;
            if (cart.items.length) {
              _this.root.removeClass('no-items');
            } else {
              _this.root.addClass('no-items');
            }
            ref = cart.items;
            for (index = j = 0, len = ref.length; j < len; index = ++j) {
              item = ref[index];
              item.image_url = Shopify.resizeImage(item.image, "400x");
              item.price = Currency.formatMoney(item.price, theme.money_format);
              if ((index + 1) === cart.items.length) {
                row = '<div class="variant-id last-variant width--12" data-variant-id=' + item.variant_id + '>';
              } else {
                row = '<div class="variant-id width--12" data-variant-id=' + item.variant_id + '>';
              }
              row += '<div class="width--12 width--medium-4 width--large-6 block">';
              if (item.image_url === null) {
                row += '<span class="image block width--4 width--medium-12 width--large-4 spacing--3"></span>';
              } else {
                row += '<span class="image block width--4 width--medium-12 width--large-4 spacing--3"><a href="' + item.url + '"><img src="' + item.image_url + '" alt="' + item.title + '"></a></span>';
              }
              row += '<span class="title show--small show--large block width--8 spacing--3 font--block-heading"><a href="' + item.url + '">' + item.title + '</a></span>';
              row += '</div>';
              row += '<div class="right-column width--12 width--medium-8 width--large-6 block spacing--3y text-align--left text-align--large-right font--accent">';
              row += '<span class="title show--medium block width--12 spacing--3"><a href="' + item.url + '">' + item.title + '</a></span>';
              row += '<span class="price spacing--3 money">' + item.price + '</span>';
              row += '<span class="quantity spacing--3"><div class="input--number">';
              row += '<a tabindex="0" aria-label="' + theme.translations.remove_one_item + '" class="minus">' + theme.utils.addSymbol('minus') + '</a>';
              row += '<input type="text" value="' + item.quantity + '" min="1" pattern="[1-9]*">';
              row += '<a tabindex="0" aria-label="' + theme.translations.add_one_item + '" class="plus">' + theme.utils.addSymbol('plus') + '</a>';
              row += '</div></span>';
              row += '<span class="remove spacing--3">';
              row += '<a aria-label="' + theme.translations.remove_item + '" role="button" href="#" class="cart--remove-button remove">' + theme.utils.addSymbol('cross-circle') + '</a>';
              row += '</span>';
              row += '</div>';
              row += '</div>';
              row += '<div class="spacer spacing--3y"></div>';
              _this.table_content.append(row);
            }
            row = '<div class="totals width--12 text-align--center ">';
            row += '<div class="width--12 width--large-8 block">';
            row += '</div>';
            row += '<div class="block spacing--3y width--12 width--large-4 font--accent text-align--large-right ">';
            row += '<span class="spacing--3">' + theme.translations.cart_subtotal + '</span>';
            row += '<span class="total spacing--3 money">' + _this.totals.price + '</span>';
            row += '</div>';
            row += '</div>';
            row += '<div class="spacer spacing--3y show--small-medium"></div>';
            _this.table_content.append(row);
            _this.updateTotals();
            if (callback) {
              callback();
            }
            $(window).trigger('resize.FrameworkModal');
            _this.render_locked = false;
            _this.removeItemListeners();
            _this.updateQuantityListeners();
            return _this.convertCurrency(_this.root.find('.money'));
          } else {
            return console.log('cart - render item status - ' + textStatus);
          }
        }).fail(function(jqXHR, textStatus) {
          console.log("cart rendering failed");
          return _this.render_locked = false;
        });
      }
    };

    FrameworkCart.prototype.renderListener = function() {
      var _this;
      _this = this;
      return _this.root.on('renderCart', function() {
        return _this.renderCart();
      });
    };

    FrameworkCart.prototype.renderOther = function() {
      var _this;
      _this = this;
      if (theme.utils.mqs.current_window === 'small') {
        return $('.fw--cart.modal--content').trigger('renderCart');
      } else {
        return $('.fw--cart.off-canvas').trigger('renderCart');
      }
    };

    FrameworkCart.prototype.addItem = function(form, callback) {
      var _this;
      _this = this;
      if (!_this.add_locked) {
        _this.add_locked = true;
        return $.ajax({
          type: "POST",
          url: "/cart/add.js",
          dataType: "json",
          data: form.serialize()
        }).done(function(data, textStatus, jqXHR) {
          callback(true);
          _this.renderOther();
          return _this.add_locked = false;
        }).fail(function(jqXHR, textStatus) {
          callback(false, $.parseJSON(jqXHR.responseText).description);
          return _this.add_locked = false;
        });
      }
    };

    FrameworkCart.prototype.updateQuantityListeners = function() {
      var _this;
      _this = this;
      _this.table_content.find('.input--number input').attr("autocomplete", "off").on('keyup.LayoutCartModal paste.LayoutCartModal', function() {
        var input, input_wrapper, variant_id;
        input_wrapper = $(this).closest('.input--number');
        input = input_wrapper.find('input');
        if (parseInt(input.val()) > 0) {
          input_wrapper.addClass('updating');
          clearTimeout(_this.adjusting_qty_timer);
          variant_id = $(this).closest('.variant-id').data('variant-id');
          _this.adjusting_qty_timer = setTimeout(function() {
            input_wrapper.removeClass('updating');
            return _this.updateTotals();
          }, 500);
        } else if (parseInt(input.val()) === 0) {
          variant_id = $(this).closest('.variant-id').data('variant-id');
          _this.removeItem(variant_id);
          if ($(this).closest('form').find('.variant-id').length === 1) {
            _this.root.addClass('no-items');
          } else {
            $(this).closest('.variant-id').remove();
          }
        }
        return false;
      });
      _this.table_content.find('.input--number .minus').on('keypress.LayoutCartModal click.LayoutCartModal', function(e) {
        var input, input_wrapper, variant_id;
        if (theme.utils.a11yClick(e) === true) {
          input_wrapper = $(this).closest('.input--number');
          input = input_wrapper.find('input');
          if (parseInt(input.val()) > 1) {
            input_wrapper.addClass('updating');
            clearTimeout(_this.adjusting_qty_timer);
            input.val(parseInt(input.val()) - 1);
            variant_id = $(this).closest('.variant-id').data('variant-id');
            _this.adjusting_qty_timer = setTimeout(function() {
              _this.minusQuantity(variant_id, parseInt(input.val()));
              input_wrapper.removeClass('updating');
              return _this.updateTotals();
            }, 500);
          }
          return false;
        }
      });
      return _this.table_content.find('.input--number .plus').on('keypress.LayoutCartModal click.LayoutCartModal', function(e) {
        var input, input_wrapper, variant_id;
        if (theme.utils.a11yClick(e) === true) {
          clearTimeout(_this.adjusting_qty_timer);
          input_wrapper = $(this).closest('.input--number');
          input = input_wrapper.find('input');
          if (_this.temp_quantity === 0) {
            _this.temp_quantity = parseInt(input.val());
          }
          input_wrapper.addClass('updating');
          input.val(1 + parseInt(input.val()));
          variant_id = $(this).closest('.variant-id').data('variant-id');
          _this.adjusting_qty_timer = setTimeout(function() {
            var add_quantity;
            add_quantity = parseInt(input.val()) - _this.temp_quantity;
            return _this.plusQuantity(variant_id, add_quantity, function(pass, error) {
              if (pass) {
                input_wrapper.removeClass('updating');
                _this.updateTotals();
                return _this.temp_quantity = 0;
              } else {
                input.val(_this.temp_quantity);
                input_wrapper.removeClass('updating');
                _this.updateTotals();
                return _this.temp_quantity = 0;
              }
            });
          }, 500);
          return false;
        }
      });
    };

    FrameworkCart.prototype.minusQuantity = function(variant_id, quantity) {
      var _this;
      _this = this;
      return $.ajax({
        type: "POST",
        url: "/cart/change.js",
        dataType: "json",
        data: 'quantity=' + quantity + '&id=' + variant_id
      }).done(function(data, textStatus, jqXHR) {
        if (textStatus === 'success') {
          _this.updateTotals();
          return _this.renderOther();
        } else {
          return console.log('cart - update cart item status - ' + textStatus);
        }
      }).fail(function(jqXHR, textStatus) {
        return console.log("cart - update failed");
      });
    };

    FrameworkCart.prototype.plusQuantity = function(variant_id, quantity, callback) {
      var _this;
      _this = this;
      if (!_this.add_locked) {
        _this.add_locked = true;
        return $.ajax({
          type: "POST",
          url: "/cart/add.js",
          dataType: "json",
          data: 'quantity=' + quantity + '&id=' + variant_id
        }).done(function(data, textStatus, jqXHR) {
          callback(true);
          _this.renderOther();
          return _this.add_locked = false;
        }).fail(function(jqXHR, textStatus) {
          callback(false, $.parseJSON(jqXHR.responseText).description);
          return _this.add_locked = false;
        });
      }
    };

    FrameworkCart.prototype.updateTotals = function() {
      var _this;
      _this = this;
      return $.ajax({
        type: "GET",
        url: "/cart.js",
        dataType: "json"
      }).done(function(data, textStatus, jqXHR) {
        var cart, cart_total, item, j, len, ref;
        if (textStatus === 'success') {
          cart = data;
          cart_total = {};
          cart_total.quantity = 0;
          cart_total.price = 0;
          ref = cart.items;
          for (j = 0, len = ref.length; j < len; j++) {
            item = ref[j];
            cart_total.quantity += item.quantity;
            cart_total.price += item.price * item.quantity;
          }
          _this.totals.count = cart_total.quantity;
          _this.totals.price = Currency.formatMoney(cart_total.price, theme.money_format);
          _this.render_trigger.find('.count').html(_this.totals.count);
          _this.render_trigger.find('.total-price').html(_this.totals.price);
          _this.table_content.find('.total').html(_this.totals.price);
          $('.layout--header .layout--off-canvas--open.right').html(_this.totals.count);
          $('.layout--header .cart-link .count').html('(' + _this.totals.count + ')');
          if (_this.totals.count > 0) {
            _this.render_trigger.css('display', 'inline-block');
            $('.layout--header .cart-link .count').css('display', 'inline');
            $('.header--cart-count').css('display', 'inline-block');
          } else {
            _this.render_trigger.hide();
            $('.layout--header .cart-link .count').hide();
          }
          if (theme.currency_switcher_enabled) {
            _this.convertCurrency(_this.render_trigger.find('.total-price'));
            _this.convertCurrency(_this.table_content.find('.total'));
          }
          return _this.updateTotalsComplete();
        } else {
          return console.log('cart - update totals item status - ' + textStatus);
        }
      }).fail(function(jqXHR, textStatus) {
        return console.log("cart - updating totals failed");
      });
    };

    FrameworkCart.prototype.updateTotalsComplete = function() {
      var _this;
      return _this = this;
    };

    FrameworkCart.prototype.removeItemListeners = function() {
      var _this;
      _this = this;
      return _this.table_content.find('a.remove').on('click.LayoutCartModal', function() {
        var variant_id;
        variant_id = $(this).closest('.variant-id').data('variant-id');
        _this.removeItem(variant_id);
        if ($(this).closest('form').find('.variant-id').length === 1) {
          _this.root.addClass('no-items');
          $(window).trigger('resize.FrameworkModal');
        } else {
          $(this).closest('.variant-id').remove();
        }
        _this.updateTotals();
        return false;
      });
    };

    FrameworkCart.prototype.removeItem = function(variant_id) {
      var _this;
      _this = this;
      return _this.minusQuantity(variant_id, 0);
    };

    FrameworkCart.prototype.openOffCanvasListener = function() {
      var _this;
      _this = this;
      return $('.layout--off-canvas--cart--open-trigger').on('click', function() {
        $('.layout--off-canvas--right-sidebar').trigger('open');
        return false;
      });
    };

    FrameworkCart.prototype.openModalListener = function() {
      var _this;
      _this = this;
      return $('.fw--cart-modal--trigger-render').on('click', function() {
        $('.cart-link .modal--link').trigger('click');
        return false;
      });
    };

    FrameworkCart.prototype.convertCurrency = function(elems) {
      var _this;
      _this = this;
      if (theme.currency_switcher_enabled) {
        return Currency.convertAll(shopCurrency, jQuery('[name=currencies]').val());
      } else {
        return false;
      }
    };

    return FrameworkCart;

  })();

  theme.classes.FrameworkFeaturedBlog = (function() {
    function FrameworkFeaturedBlog(root) {
      var _this;
      this.root = root;
      this.resizeListeners = bind(this.resizeListeners, this);
      this.matchImageHeights = bind(this.matchImageHeights, this);
      _this = this;
      _this.item_container = _this.root.find('.featured-blog--body');
      _this.items = _this.root.find('.featured-blog--item');
      _this.matchImageHeights();
      _this.resizeListeners();
    }

    FrameworkFeaturedBlog.prototype.matchImageHeights = function() {
      var _this;
      _this = this;
      return theme.utils.matchImageHeights(_this.item_container, _this.items, '.featured-blog--item--image');
    };

    FrameworkFeaturedBlog.prototype.resizeListeners = function() {
      var _this;
      _this = this;
      return $(window).on('resize.FeaturedGrid', theme.utils.debounce(100, function() {
        return _this.matchImageHeights();
      }));
    };

    return FrameworkFeaturedBlog;

  })();

  theme.classes.FrameworkFeaturedCollections = (function() {
    function FrameworkFeaturedCollections(root) {
      var _this;
      this.root = root;
      this.resizeListeners = bind(this.resizeListeners, this);
      this.matchImageHeights = bind(this.matchImageHeights, this);
      _this = this;
      _this.item_container = _this.root.find('.featured-collections--body');
      _this.items = _this.root.find('.featured-collections--item');
      _this.matchImageHeights();
      _this.resizeListeners();
    }

    FrameworkFeaturedCollections.prototype.matchImageHeights = function() {
      var _this;
      _this = this;
      return theme.utils.matchImageHeights(_this.item_container, _this.items, '.featured-collections--image');
    };

    FrameworkFeaturedCollections.prototype.resizeListeners = function() {
      var _this;
      _this = this;
      return $(window).on('resize.FeaturedCollections', theme.utils.debounce(100, function() {
        return _this.matchImageHeights();
      }));
    };

    return FrameworkFeaturedCollections;

  })();

  theme.classes.FrameworkFeaturedContent = (function() {
    function FrameworkFeaturedContent(root) {
      var _this;
      this.root = root;
      _this = this;
    }

    return FrameworkFeaturedContent;

  })();

  theme.classes.FrameworkFeaturedGrid = (function() {
    function FrameworkFeaturedGrid(root) {
      var _this;
      this.root = root;
      this.resizeListeners = bind(this.resizeListeners, this);
      this.matchImageHeights = bind(this.matchImageHeights, this);
      _this = this;
      _this.item_container = _this.root.find('.featured-grid--body');
      _this.items = _this.root.find('.featured-grid--item');
      _this.text_position = _this.root.data('text-position');
      _this.matchImageHeights();
      _this.resizeListeners();
    }

    FrameworkFeaturedGrid.prototype.matchImageHeights = function() {
      var _this;
      _this = this;
      _this.items.find('.featured-grid--item--image, .placeholder--root').css('height', 'auto');
      if (_this.text_position === 'center' && theme.utils.mqs.current_window !== 'small') {
        return;
      }
      return theme.utils.matchImageHeights(_this.item_container, _this.items, '.featured-grid--item--image');
    };

    FrameworkFeaturedGrid.prototype.resizeListeners = function() {
      var _this;
      _this = this;
      return $(window).on('resize.FeaturedGrid', theme.utils.debounce(100, function() {
        return _this.matchImageHeights();
      }));
    };

    return FrameworkFeaturedGrid;

  })();

  theme.classes.FrameworkFeaturedProduct = (function() {
    function FrameworkFeaturedProduct(root) {
      var _this;
      this.root = root;
      this.addProductComplete = bind(this.addProductComplete, this);
      this.renderCart = bind(this.renderCart, this);
      this.addToCartListener = bind(this.addToCartListener, this);
      this.updateVariantImage = bind(this.updateVariantImage, this);
      this.sectionListeners = bind(this.sectionListeners, this);
      this.variantSelected = bind(this.variantSelected, this);
      this.initiateVariants = bind(this.initiateVariants, this);
      this.load = bind(this.load, this);
      _this = this;
      _this.id = _this.root.data('id');
      _this.add_button = _this.root.find('.featured-product--add-to-cart');
      _this.cart_form = _this.root.find('.featured-product--cart-form > form');
      _this.compare_price = _this.root.find('.featured-product--compare-price');
      _this.main_images = _this.root.find('.featured-product--image');
      _this.price = _this.root.find('.featured-product--actual-price');
      _this.price_wrapper = _this.root.find('.featured-product--price-wrapper');
      _this.smart_payment_buttons = _this.root.find('.featured-product--smart-payment-buttons');
      _this.unavailable_variant = _this.root.find('.featured-product--unavailable-variant');
      _this.variant_sold_out = _this.root.find('.featured-product--sold-out--variant');
      _this.cart_form = _this.root.find('.featured-product--cart-form > form');
      _this.json = $.parseJSON(_this.root.find('.featured-product--json').text());
      _this.load();
    }

    FrameworkFeaturedProduct.prototype.load = function() {
      var _this;
      _this = this;
      _this.initiateVariants();
      return _this.addToCartListener();
    };

    FrameworkFeaturedProduct.prototype.initiateVariants = function() {
      var _this, id, options;
      _this = this;
      if (_this.root.find('select').length > 0) {
        id = 'featured-product--select--' + _this.id;
        return options = new Shopify.OptionSelectors(id, {
          product: _this.json,
          onVariantSelected: _this.variantSelected,
          enableHistoryState: false
        });
      }
    };

    FrameworkFeaturedProduct.prototype.variantSelected = function(variant, selector, options) {
      var _this, product_sold_out, variant_compare_price, variant_price;
      _this = this;
      product_sold_out = false;
      if (_this.root.find('.featured-product--sold-out--product').length) {
        product_sold_out = true;
      }
      _this.variant_sold_out.hide();
      _this.unavailable_variant.hide();
      _this.add_button.hide();
      _this.price_wrapper.hide();
      if (!variant) {
        _this.unavailable_variant.show();
        _this.smart_payment_buttons.hide();
        return false;
      } else if (variant && variant.available) {
        _this.price_wrapper.show();
        _this.add_button.show();
        _this.smart_payment_buttons.show();
      } else if (product_sold_out) {
        _this.variant_sold_out.hide();
        _this.add_button.hide();
        _this.smart_payment_buttons.hide();
      } else {
        _this.variant_sold_out.show();
        _this.smart_payment_buttons.hide();
      }
      variant_price = Shopify.formatMoney(variant.price, theme.money_format);
      _this.price.replaceWith('<span class="featured-product--actual-price money font--accent">' + variant_price + '</span>');
      _this.price = _this.root.find('.featured-product--actual-price');
      if (variant.compare_at_price > variant.price) {
        variant_compare_price = Shopify.formatMoney(variant.compare_at_price, theme.money_format);
        _this.compare_price.replaceWith('<span class="featured-product--compare-price money font--light-accent">' + variant_compare_price + '</span>');
        _this.compare_price = _this.root.find('.featured-product--compare-price');
        _this.compare_price.show();
      } else {
        _this.compare_price.hide();
      }
      if (theme.settings.currency_switcher_enabled) {
        Currency.convertAll(shopCurrency, $('[name=currencies]').val());
      }
      if (variant.featured_image) {
        return _this.updateVariantImage(variant.featured_image.id);
      }
    };

    FrameworkFeaturedProduct.prototype.sectionListeners = function() {
      var _this;
      _this = this;
      return _this.root.on('theme:section:load', function() {
        return new Shopify.OptionSelectors('featured-product--select', {
          product: theme.product_json,
          onVariantSelected: _this.variantSelected,
          enableHistoryState: true
        });
      });
    };

    FrameworkFeaturedProduct.prototype.updateVariantImage = function(variant_id) {
      var _this, variant_image;
      _this = this;
      _this.main_images.attr('data-active', 'false');
      variant_image = _this.main_images.filter('[data-image-id="' + variant_id + '"]');
      return variant_image.attr('data-active', 'true');
    };

    FrameworkFeaturedProduct.prototype.addToCartListener = function() {
      var _this;
      _this = this;
      if (_this.cart_form.length > 0) {
        return _this.cart_form.submit(function() {
          _this.cart_form.find('.error').remove();
          _this.add_button.attr('data-loading', 'true');
          theme.partials.Cart.addItem($(this), function(pass, error) {
            if (pass) {
              return _this.renderCart();
            } else {
              _this.cart_form.append('<div class="featured-product--error error">' + error + '</div>');
              return _this.add_button.attr('data-loading', 'false');
            }
          });
          return false;
        });
      }
    };

    FrameworkFeaturedProduct.prototype.renderCart = function() {
      var _this;
      _this = this;
      return theme.partials.Cart.renderCart(function() {
        return _this.addProductComplete();
      });
    };

    FrameworkFeaturedProduct.prototype.addProductComplete = function() {
      var _this;
      _this = this;
      _this.add_button.attr('data-loading', 'false');
      return $('.modal.cart-link .modal--link').trigger('click');
    };

    return FrameworkFeaturedProduct;

  })();

  theme.classes.FrameworkFeedbackBar = (function() {
    function FrameworkFeedbackBar(root) {
      var _this;
      this.root = root;
      this.load = bind(this.load, this);
      _this = this;
      _this.messages = _this.root.find('.feedback-bar--message span');
      _this.load();
    }

    FrameworkFeedbackBar.prototype.load = function() {
      var _this, anchor_tag, message, message_elem;
      _this = this;
      _this.messages.hide();
      anchor_tag = window.location.hash.substr(1);
      message = anchor_tag.replace('feedback-bar--', '');
      message_elem = _this.messages.filter('[data-feedback-bar--message="' + message + '"]');
      if (message_elem.length) {
        message_elem.show();
        setTimeout(function() {
          return _this.root.attr('data-feedback-bar--open', 'true');
        }, 200);
        return setTimeout(function() {
          return _this.root.attr('data-feedback-bar--open', 'false');
        }, 3000);
      }
    };

    return FrameworkFeedbackBar;

  })();

  theme.classes.FrameworkInstagram = (function() {
    function FrameworkInstagram(container1) {
      var _this;
      this.container = container1;
      this.load = bind(this.load, this);
      _this = this;
      _this.username = _this.container.data('username');
      _this.access_token = _this.container.data('access-token');
      _this.body = _this.container.find('.instagram--body');
      _this.rows = _this.container.data('rows');
      _this.columns = _this.container.data('columns');
      _this.total_items = _this.rows * _this.columns;
      if (theme.utils.mqs.current_window === 'small') {
        _this.total_items = 4;
      }
      _this.load();
    }

    FrameworkInstagram.prototype.load = function() {
      var _this;
      _this = this;
      if (_this.access_token.length < 1) {
        return false;
      }
      return $.ajax({
        dataType: "jsonp",
        url: 'https://api.instagram.com/v1/users/self/media/recent/?access_token=' + _this.access_token + '&count=' + _this.total_items,
        success: function(response) {
          var data, i, img_src, j, ref, results1;
          if (response.meta.code === 200) {
            data = response.data;
            results1 = [];
            for (i = j = 0, ref = _this.total_items - 1; 0 <= ref ? j <= ref : j >= ref; i = 0 <= ref ? ++j : --j) {
              if (data[i]) {
                img_src = data[i].images.standard_resolution.url;
                img_src = img_src.replace("http:", "https:");
                results1.push(_this.body.append('<a class="instagram--item" target="_blank" href="' + data[i].link + '" > <div class="instagram--item-container"> <div class="instagram--image" style="background-image: url(\'' + img_src + '\');" > </div> </div> </a>'));
              } else {
                results1.push(void 0);
              }
            }
            return results1;
          } else {
            return _this.body.append('<h4 class="error">' + response.meta.error_message + '</h4>');
          }
        },
        error: function(jqXHR, textStatus) {
          console.log(jqXHR);
          return console.log(textStatus);
        }
      });
    };

    return FrameworkInstagram;

  })();

  theme.classes.FrameworkLoadingAnimation = (function() {
    function FrameworkLoadingAnimation(root) {
      var _this;
      this.root = root;
      _this = this;
      if (_this.root.hasClass('tiny')) {
        _this.root.spin('tiny');
      } else {
        _this.root.spin('small');
      }
    }

    return FrameworkLoadingAnimation;

  })();

  theme.classes.FrameworkMap = (function() {
    function FrameworkMap(root) {
      var _this;
      this.root = root;
      this.buildStyles = bind(this.buildStyles, this);
      this.buildMap = bind(this.buildMap, this);
      this.geolocate = bind(this.geolocate, this);
      this.loadMapsApi = bind(this.loadMapsApi, this);
      this.load = bind(this.load, this);
      _this = this;
      _this.api_status = null;
      _this.map_instance = null;
      _this.key = _this.root.data('api-key');
      _this.address = _this.root.data('address');
      _this.theme = _this.root.data('theme');
      _this.styles = null;
      _this.container = _this.root.find('.map--google-maps');
      _this.center = null;
      _this.load();
    }

    FrameworkMap.prototype.load = function() {
      var _this;
      _this = this;
      if (_this.container.length > 0) {
        return _this.loadMapsApi();
      }
    };

    FrameworkMap.prototype.loadMapsApi = function() {
      var _this, other_map_loading_checker;
      _this = this;
      if (theme.utils.google_map_api_status === 'loading') {
        return other_map_loading_checker = setInterval(function() {
          if (theme.utils.google_map_api_status === 'loaded') {
            _this.geolocate();
            return clearInterval(other_map_loading_checker);
          }
        }, 100);
      } else if (typeof window.google === 'undefined') {
        theme.utils.google_map_api_status = 'loading';
        return $.getScript('https://maps.googleapis.com/maps/api/js?key=' + _this.key).then(function() {
          _this.geolocate();
          return theme.utils.google_map_api_status = 'loaded';
        });
      } else {
        return _this.geolocate();
      }
    };

    FrameworkMap.prototype.geolocate = function() {
      var _this, geocoder;
      _this = this;
      geocoder = new google.maps.Geocoder;
      return geocoder.geocode({
        address: _this.address
      }, function(results, status) {
        if (status === 'OK') {
          _this.center = results[0].geometry.location;
          _this.buildStyles();
          return _this.buildMap();
        } else {
          return console.log('couldn\'t convert address with geocoder');
        }
      });
    };

    FrameworkMap.prototype.buildMap = function() {
      var _this, center, map, mapOptions, marker;
      _this = this;
      mapOptions = {
        zoom: 15,
        center: _this.center,
        disableDefaultUI: true,
        zoomControl: true,
        scrollwheel: false,
        styles: _this.styles
      };
      map = new google.maps.Map(_this.container[0], mapOptions);
      center = map.getCenter();
      marker = new google.maps.Marker({
        map: map,
        position: map.getCenter()
      });
      return _this.map_instance = google.maps.event.addDomListener(window, 'resize', theme.utils.debounce(500, function() {
        google.maps.event.trigger(map, 'resize');
        map.setCenter(center);
      }));
    };

    FrameworkMap.prototype.buildStyles = function() {
      var _this;
      _this = this;
      if (_this.theme === 'grayscale') {
        return _this.styles = [
          {
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#f5f5f5"
              }
            ]
          }, {
            "elementType": "labels.icon",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          }, {
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#616161"
              }
            ]
          }, {
            "elementType": "labels.text.stroke",
            "stylers": [
              {
                "color": "#f5f5f5"
              }
            ]
          }, {
            "featureType": "administrative.land_parcel",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#bdbdbd"
              }
            ]
          }, {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#eeeeee"
              }
            ]
          }, {
            "featureType": "poi",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#757575"
              }
            ]
          }, {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#e5e5e5"
              }
            ]
          }, {
            "featureType": "poi.park",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#9e9e9e"
              }
            ]
          }, {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#ffffff"
              }
            ]
          }, {
            "featureType": "road.arterial",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#757575"
              }
            ]
          }, {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#dadada"
              }
            ]
          }, {
            "featureType": "road.highway",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#616161"
              }
            ]
          }, {
            "featureType": "road.local",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#9e9e9e"
              }
            ]
          }, {
            "featureType": "transit.line",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#e5e5e5"
              }
            ]
          }, {
            "featureType": "transit.station",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#eeeeee"
              }
            ]
          }, {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#c9c9c9"
              }
            ]
          }, {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#9e9e9e"
              }
            ]
          }
        ];
      } else if (_this.theme === 'dark') {
        return _this.styles = [
          {
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#212121"
              }
            ]
          }, {
            "elementType": "labels.icon",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          }, {
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#757575"
              }
            ]
          }, {
            "elementType": "labels.text.stroke",
            "stylers": [
              {
                "color": "#212121"
              }
            ]
          }, {
            "featureType": "administrative",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#757575"
              }
            ]
          }, {
            "featureType": "administrative.country",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#9e9e9e"
              }
            ]
          }, {
            "featureType": "administrative.land_parcel",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          }, {
            "featureType": "administrative.locality",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#bdbdbd"
              }
            ]
          }, {
            "featureType": "poi",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#757575"
              }
            ]
          }, {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#181818"
              }
            ]
          }, {
            "featureType": "poi.park",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#616161"
              }
            ]
          }, {
            "featureType": "poi.park",
            "elementType": "labels.text.stroke",
            "stylers": [
              {
                "color": "#1b1b1b"
              }
            ]
          }, {
            "featureType": "road",
            "elementType": "geometry.fill",
            "stylers": [
              {
                "color": "#2c2c2c"
              }
            ]
          }, {
            "featureType": "road",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#8a8a8a"
              }
            ]
          }, {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#373737"
              }
            ]
          }, {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#3c3c3c"
              }
            ]
          }, {
            "featureType": "road.highway.controlled_access",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#4e4e4e"
              }
            ]
          }, {
            "featureType": "road.local",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#616161"
              }
            ]
          }, {
            "featureType": "transit",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#757575"
              }
            ]
          }, {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#000000"
              }
            ]
          }, {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#3d3d3d"
              }
            ]
          }
        ];
      }
    };

    return FrameworkMap;

  })();

  theme.classes.FrameworkMediaQueries = (function() {
    function FrameworkMediaQueries() {
      this.screenSizeListener = bind(this.screenSizeListener, this);
      this.getScreenSize = bind(this.getScreenSize, this);
      this.medium_screen = 768;
      this.large_screen = 1024;
      this.current_window = null;
      this.getScreenSize();
      this.screenSizeListener();
    }

    FrameworkMediaQueries.prototype.getScreenSize = function() {
      var _this;
      _this = this;
      if (window.matchMedia('only screen and (min-width: ' + _this.large_screen + 'px)').matches) {
        if (_this.current_window !== 'large') {
          $.event.trigger("largeWindow");
          return _this.current_window = 'large';
        }
      } else if (window.matchMedia('only screen and (min-width: ' + _this.medium_screen + 'px)').matches) {
        if (_this.current_window !== 'medium') {
          $.event.trigger("mediumWindow");
          return _this.current_window = 'medium';
        }
      } else {
        if (_this.current_window !== 'small') {
          $.event.trigger("smallWindow");
          return _this.current_window = 'small';
        }
      }
    };

    FrameworkMediaQueries.prototype.screenSizeListener = function() {
      var _this;
      _this = this;
      return $(window).resize(function() {
        return _this.getScreenSize();
      });
    };

    return FrameworkMediaQueries;

  })();

  theme.classes.FrameworkModal = (function() {
    function FrameworkModal(container1) {
      var _this;
      this.container = container1;
      _this = this;
      _this.fullscreen = _this.container.data('modal--fullscreen') ? true : false;
      if (_this.container.data('modal--custom-close')) {
        _this.custom_close_button = _this.container.data('modal--custom-close');
      } else {
        _this.custom_close_button = '';
      }
      _this.force_view = _this.container.data('force-view');
      _this.view = _this.container.data('modal--view');
      _this.links = _this.container.find('.modal--link');
      _this.content = _this.container.find('.modal--content');
      _this.window = _this.createModalWindow();
      _this.window_container = _this.window.find('.modal--container');
      _this.mask = _this.window.find('.modal--mask');
      _this.close_button = _this.window.find('.modal--close');
      _this.next_button = _this.window.find('.modal--next');
      _this.prev_button = _this.window.find('.modal--prev');
      _this.slider = null;
      _this.slides = null;
      _this.main_content_window = $('.off-canvas--main-content');
      _this.openListeners();
      _this.modal_state = 'closed';
      _this.nav_lock = false;
    }

    FrameworkModal.prototype.createModalWindow = function() {
      var _this, window, window_html;
      _this = this;
      window = null;
      if ($('.modal--window').length) {
        window = $('.modal--window');
      } else {
        window_html = '<div class="modal--window"> <div class="modal--mask"></div> <div class="modal--container"></div> <button class="modal--close">' + theme.utils.addSymbol('cross') + '</button> <button class="modal--prev">' + theme.utils.addSymbol('chevron-left') + '</button> <button class="modal--next">' + theme.utils.addSymbol('chevron-right') + '</button> </div>';
        window = $(window_html).appendTo('body');
      }
      return window;
    };

    FrameworkModal.prototype.openListeners = function() {
      var _this;
      _this = this;
      return _this.links.on('keypress.FrameworkModal, click.FrameworkModal, quick-open', function(e) {
        var clicked_item;
        if (e.type === 'keypress' && theme.utils.a11yClick(e) === false) {
          return false;
        }
        clicked_item = $(this);
        _this.links.each(function(index) {
          if ($(this).is(clicked_item)) {
            if (e.type === 'quick-open') {
              return _this.open(index, true);
            } else {
              return _this.open(index);
            }
          }
        });
        return false;
      });
    };

    FrameworkModal.prototype.open = function(index, quick_open) {
      var _this, scrolled_position;
      if (quick_open == null) {
        quick_open = false;
      }
      _this = this;
      if (_this.modal_state === 'closed') {
        _this.modal_state = 'opened';
        $('html').addClass('modal-open');
        _this.window.attr('data-modal--fullscreen', _this.fullscreen);
        _this.window.attr('data-modal--custom-close', _this.custom_close_button);
        _this.window.attr('data-modal--view', _this.view);
        _this.closeListeners();
        _this.positionListeners();
        scrolled_position = $(window).scrollTop();
        _this.main_content_window.css({
          position: 'fixed',
          top: -scrolled_position
        });
        _this.moveContentToWindow();
        if (_this.slides.length > 1) {
          _this.next_button.show();
          _this.prev_button.show();
          _this.prevListeners();
          _this.nextListeners();
        }
        _this.window.show();
        _this.window_container.show();
        _this.renderVideo(_this.slides.eq(index));
        if (quick_open) {
          _this.slides.eq(index).addClass('active');
          return _this.position();
        } else {
          _this.mask.fadeIn();
          return _this.loadModal(_this.slides.eq(index), function() {
            return setTimeout(function() {
              return _this.window_container.find('input[type="text"]').focus();
            }, 0);
          });
        }
      }
    };

    FrameworkModal.prototype.moveContentToWindow = function(index) {
      var _this, content;
      _this = this;
      content = _this.container.find('.modal--content');
      _this.window_container.append(content);
      return _this.slides = _this.window_container.find('.modal--content');
    };

    FrameworkModal.prototype.detectImageSlide = function(slide) {
      var _this;
      return _this = this;
    };

    FrameworkModal.prototype.renderVideo = function(slide) {
      var _this, id, iframe, src_url, type, video;
      _this = this;
      video = slide.find('.responsive-video').first();
      src_url = video.data('video');
      type = _this.extractVideoType(src_url);
      id = _this.extractVideoId(src_url, type);
      iframe = _this.createIframe(type, id);
      if (type === 'vimeo') {
        video.addClass('vimeo');
      }
      if (type === 'kickstarter') {
        video.addClass('kickstarter');
      }
      return video.append(iframe);
    };

    FrameworkModal.prototype.extractVideoType = function(src_url) {
      var _this, matches, re;
      _this = this;
      re = /\/\/(?:www\.)?youtu(?:\.be|be\.com)\/(?:watch\?v=|embed\/)?([a-z0-9_\-]+)/i;
      matches = re.exec(src_url);
      if (matches) {
        return 'youtube';
      }
      re = /^.*(vimeo)\.com\/(?:watch\?v=)?(.*?)(?:\z|$|&)/;
      matches = re.exec(src_url);
      if (matches) {
        return 'vimeo';
      }
      re = /^.*(kickstarter)\.com/g;
      matches = re.exec(src_url);
      if (matches) {
        return 'kickstarter';
      }
      return false;
    };

    FrameworkModal.prototype.extractVideoId = function(src_url, type) {
      var _this, match, regExp;
      _this = this;
      if (type === 'youtube') {
        regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
        match = src_url.match(regExp);
        if (match && match[2].length === 11) {
          return match[2];
        }
      } else if (type === "vimeo") {
        regExp = /^.*(vimeo)\.com\/(?:watch\?v=)?(.*?)(?:\z|$|&)/;
        match = src_url.match(regExp);
        if (match) {
          return match[2];
        }
      } else if (type === "kickstarter") {
        regExp = /(?:kickstarter\.com\/projects\/)(.*)(|\?)/;
        match = src_url.match(regExp);
        if (match) {
          return match[1];
        }
      }
    };

    FrameworkModal.prototype.createIframe = function(type, id) {
      var _this;
      _this = this;
      if (type === "youtube") {
        return '<iframe  src="//www.youtube.com/embed/' + id + '?autoplay=1" frameborder="0" allowfullwidth></iframe>';
      } else if (type === "vimeo") {
        return '<iframe src="//player.vimeo.com/video/' + id + '?title=0&amp;byline=0&amp;portrait=0&amp;color=ffffff&amp;autoplay=1?" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
      } else if (type === "kickstarter") {
        return '<iframe src="//www.kickstarter.com/projects/' + id + '/widget/video.html" frameborder="0" webkitallowfullwidth mozallowfullwidth allowfullwidth></iframe>';
      }
    };

    FrameworkModal.prototype.removeVideos = function() {
      var _this;
      _this = this;
      return _this.slides.find('.responsive-video').each(function() {
        if ($(this).data('video')) {
          return $(this).find('iframe').remove();
        }
      });
    };

    FrameworkModal.prototype.loadModal = function(modal, callback) {
      var _this;
      _this = this;
      modal.addClass('active');
      _this.position();
      if (callback) {
        callback();
      }
      return _this.nav_lock = false;
    };

    FrameworkModal.prototype.position = function() {
      var _this, active_modal, entire_modal_height, modal_height, modal_width;
      _this = this;
      if (_this.window_container != null) {
        active_modal = _this.content.filter('.active');
        _this.window_container.attr('style', '');
        _this.positionVideoColumns(active_modal);
        _this.detectImageSlide(active_modal);
        _this.window.removeClass('fixed');
        modal_height = active_modal.outerHeight();
        modal_width = active_modal.outerWidth();
        entire_modal_height = modal_height + parseInt(_this.window.css('padding-top')) + parseInt(_this.window.css('padding-bottom'));
        if (_this.fullscreen) {
          return;
        }
        if (active_modal.hasClass('type--image')) {
          entire_modal_height = modal_height;
        }
        if ($(window).height() >= entire_modal_height && _this.force_view !== 'absolute') {
          return _this.window.addClass('fixed');
        } else {
          $("html, body").animate({
            scrollTop: 0
          }, '0');
          $('body,html').on('DOMMouseScroll.FrameworkModal mousewheel.FrameworkModal touchmove.FrameworkModal', function(e) {
            if (e.which > 0 || e.type === "mousewheel" || e.type === "touchmove") {
              return $("html,body").stop();
            }
          });
          return _this.window.removeClass('fixed');
        }
      }
    };

    FrameworkModal.prototype.positionVideoColumns = function(modal) {
      var _this, column_one, column_two, height_one, height_two;
      _this = this;
      if (modal.find('.responsive-video').length > 0) {
        column_one = modal.find('.fw--blocks > div').eq(0);
        column_two = modal.find('.fw--blocks > div').eq(1);
        column_one.css({
          width: ''
        });
        column_two.css({
          width: ''
        });
        height_one = column_one.outerHeight();
        height_two = column_two.outerHeight();
        if (height_one < height_two) {
          column_one.css({
            width: '100%'
          });
          return column_two.css({
            width: '100%'
          });
        }
      }
    };

    FrameworkModal.prototype.positionListeners = function() {
      var _this;
      _this = this;
      return $(window).on('resize.FrameworkModal', function() {
        return _this.position();
      });
    };

    FrameworkModal.prototype.nextListeners = function() {
      var _this;
      _this = this;
      $(document).on('keydown.FrameworkModal', function(e) {
        if (e.keyCode === 39) {
          return _this.next();
        }
      });
      return _this.next_button.on('click.FrameworkModal', function() {
        return _this.next();
      });
    };

    FrameworkModal.prototype.next = function() {
      var _this, active_slide, index;
      _this = this;
      if (!_this.nav_lock) {
        _this.nav_lock = true;
        index = _this.slides.filter('.active').index();
        _this.slides.removeClass('active');
        _this.removeVideos();
        if ((index + 1) === _this.slides.length) {
          active_slide = _this.slides.eq(0);
        } else {
          active_slide = _this.slides.eq(index + 1);
        }
        _this.renderVideo(active_slide);
        return _this.loadModal(active_slide);
      }
    };

    FrameworkModal.prototype.prevListeners = function() {
      var _this;
      _this = this;
      $(document).on('keydown.FrameworkModal', function(e) {
        if (e.keyCode === 37) {
          return _this.prev();
        }
      });
      return _this.prev_button.on('click.FrameworkModal', function() {
        return _this.prev();
      });
    };

    FrameworkModal.prototype.prev = function() {
      var _this, active_slide, index;
      _this = this;
      if (!_this.nav_lock) {
        _this.nav_lock = true;
        index = _this.slides.filter('.active').index();
        _this.slides.removeClass('active');
        _this.removeVideos();
        if (index === 0) {
          active_slide = _this.slides.eq(_this.slides.length - 1);
        } else {
          active_slide = _this.slides.eq(index - 1);
        }
        _this.renderVideo(active_slide);
        return _this.loadModal(active_slide);
      }
    };

    FrameworkModal.prototype.closeListeners = function() {
      var _this;
      _this = this;
      _this.container.on('quick-close', function() {
        return _this.close(true);
      });
      $(document).on('keydown.FrameworkModal', function(e) {
        if (e.keyCode === 27) {
          return _this.close();
        }
      });
      _this.mask.on('click.FrameworkModal', function() {
        return _this.close();
      });
      _this.window_container.on('click.FrameworkModal', function() {
        return _this.close();
      });
      _this.content.on('click.FrameworkModal', function(e) {
        return e.stopPropagation();
      });
      return _this.close_button.on('click.FrameworkModal', function() {
        return _this.close();
      });
    };

    FrameworkModal.prototype.close = function(quick_close) {
      var _this, scrolled_position;
      if (quick_close == null) {
        quick_close = false;
      }
      _this = this;
      scrolled_position = parseInt(_this.main_content_window.css('top')) * -1;
      _this.container.trigger('modalClosed');
      _this.main_content_window.css({
        top: '0',
        position: 'relative'
      });
      $(window).scrollTop(scrolled_position);
      _this.putBackContent();
      _this.next_button.hide();
      _this.prev_button.hide();
      _this.window.hide();
      if (quick_close) {
        _this.mask.hide();
        this.window_container.empty();
        _this.modal_state = 'closed';
      } else {
        _this.mask.fadeOut(function() {
          _this.window_container.empty();
          return _this.modal_state = 'closed';
        });
      }
      $('html').removeClass('modal-open');
      _this.removeListeners();
      return $(window).trigger('FrameworkModal.afterClose');
    };

    FrameworkModal.prototype.putBackContent = function() {
      var _this;
      _this = this;
      _this.removeVideos();
      return _this.slides.removeClass('active').appendTo(_this.container);
    };

    FrameworkModal.prototype.removeListeners = function() {
      var _this;
      _this = this;
      $(document).off('keydown.FrameworkModal');
      $(window).off('resize.FrameworkModal');
      $('body,html').off('DOMMouseScroll.FrameworkModal mousewheel.FrameworkModal touchmove.FrameworkModal');
      _this.next_button.off('click.FrameworkModal');
      _this.prev_button.off('click.FrameworkModal');
      _this.close_button.off('click.FrameworkModal');
      _this.mask.off('click.FrameworkModal');
      return _this.window_container.off('click.FrameworkModal');
    };

    return FrameworkModal;

  })();

  theme.classes.FrameworkOffCanvas = (function() {
    function FrameworkOffCanvas(root) {
      var _this;
      this.root = root;
      this.touchListener = bind(this.touchListener, this);
      this.closeRight = bind(this.closeRight, this);
      this.closeLeft = bind(this.closeLeft, this);
      this.fadeInOverlay = bind(this.fadeInOverlay, this);
      this.openRight = bind(this.openRight, this);
      this.openLeft = bind(this.openLeft, this);
      this.toggle = bind(this.toggle, this);
      this.toggleListeners = bind(this.toggleListeners, this);
      this.viewPortHeightListener = bind(this.viewPortHeightListener, this);
      this.setViewPortHeight = bind(this.setViewPortHeight, this);
      this.setState = bind(this.setState, this);
      this.unload = bind(this.unload, this);
      this.load = bind(this.load, this);
      _this = this;
      _this.viewport = $('.off-canvas--viewport');
      _this.left_sidebar = $('.off-canvas--left-sidebar');
      _this.right_sidebar = $('.off-canvas--right-sidebar');
      _this.main_content = $('.off-canvas--main-content');
      _this.overlay = $('.off-canvas--overlay');
      _this.state = 'closed';
      _this.load();
    }

    FrameworkOffCanvas.prototype.load = function() {
      var _this;
      _this = this;
      _this.close = $('.off-canvas--close');
      _this.triggers = $('.off-canvas--open');
      _this.setViewPortHeight();
      _this.viewPortHeightListener();
      _this.toggleListeners();
      return _this.touchListener();
    };

    FrameworkOffCanvas.prototype.unload = function() {
      var _this;
      _this = this;
      _this.triggers.off('click');
      _this.overlay.add(_this.close).off('click');
      $(document).off('touchstart.FrameworkOffCanvas');
      return $(document).off('touchend.FrameworkOffCanvas');
    };

    FrameworkOffCanvas.prototype.setState = function(state) {
      var _this;
      _this = this;
      _this.state = state;
      return _this.root.attr('data-off-canvas--state', state);
    };

    FrameworkOffCanvas.prototype.setViewPortHeight = function() {
      var _this;
      _this = this;
      return _this.viewport.css({
        'min-height': $(window).height()
      });
    };

    FrameworkOffCanvas.prototype.viewPortHeightListener = function() {
      var _this;
      _this = this;
      return $(window).resize(function() {
        return _this.setViewPortHeight();
      });
    };

    FrameworkOffCanvas.prototype.toggleListeners = function() {
      var _this;
      _this = this;
      _this.triggers.on('click', function() {
        if ($(this).data('off-canvas--open') === 'left-sidebar') {
          _this.toggle('left-sidebar');
        } else if ($(this).data('off-canvas--open') === 'right-sidebar') {
          _this.toggle('right-sidebar');
        }
        return false;
      });
      return _this.overlay.add(_this.close).on('click', function() {
        if (_this.state === 'left-open') {
          return _this.toggle('left-sidebar');
        } else if (_this.state === 'right-open') {
          return _this.toggle('right-sidebar');
        }
      });
    };

    FrameworkOffCanvas.prototype.toggle = function(element) {
      var _this;
      _this = this;
      if (element === 'left-sidebar' && _this.state === 'closed') {
        return _this.openLeft();
      } else if (element === 'left-sidebar' && _this.state === 'left-open') {
        return _this.closeLeft();
      } else if (element === 'right-sidebar' && _this.state === 'closed') {
        return _this.openRight();
      } else if (element === 'right-sidebar' && _this.state === 'right-open') {
        return _this.closeRight();
      }
    };

    FrameworkOffCanvas.prototype.openLeft = function() {
      var _this;
      _this = this;
      _this.setState('left-open');
      _this.main_content.css({
        position: 'fixed',
        top: -($(window).scrollTop())
      });
      _this.left_sidebar.velocity({
        translateX: [0, '-100%']
      }, {
        complete: function() {
          return _this.left_sidebar.css({
            position: 'relative'
          });
        }
      });
      return _this.fadeInOverlay();
    };

    FrameworkOffCanvas.prototype.openRight = function() {
      var _this;
      _this = this;
      _this.setState('right-open');
      _this.main_content.css({
        position: 'fixed',
        top: -($(window).scrollTop())
      });
      _this.right_sidebar.velocity({
        translateX: ['-100%', 0]
      }, {
        complete: function() {
          return _this.right_sidebar.css({
            position: 'relative'
          });
        }
      });
      return _this.fadeInOverlay();
    };

    FrameworkOffCanvas.prototype.fadeInOverlay = function() {
      var _this;
      _this = this;
      _this.overlay.show();
      return _this.overlay.velocity({
        opacity: '0.3'
      });
    };

    FrameworkOffCanvas.prototype.closeLeft = function() {
      var _this, scrolled_position;
      _this = this;
      if (_this.state !== 'left-open') {
        return false;
      }
      _this.setState('closed');
      scrolled_position = parseInt(_this.main_content.css('top')) * -1;
      _this.left_sidebar.velocity({
        translateX: ['-100%', 0]
      }, {
        complete: function() {
          _this.left_sidebar.css({
            position: 'absolute'
          });
          _this.main_content.css({
            position: 'relative',
            top: 'initial'
          });
          return $(window).scrollTop(scrolled_position);
        }
      });
      return _this.overlay.velocity('fadeOut');
    };

    FrameworkOffCanvas.prototype.closeRight = function() {
      var _this, scrolled_position;
      _this = this;
      if (_this.state !== 'right-open') {
        return false;
      }
      _this.setState('closed');
      scrolled_position = parseInt(_this.main_content.css('top')) * -1;
      _this.right_sidebar.velocity({
        translateX: [0, '-100%']
      }, {
        complete: function() {
          _this.right_sidebar.css({
            position: 'absolute'
          });
          _this.main_content.css({
            position: 'relative',
            top: 'initial'
          });
          return $(window).scrollTop(scrolled_position);
        }
      });
      return _this.overlay.velocity('fadeOut');
    };

    FrameworkOffCanvas.prototype.touchListener = function() {
      var _this, position;
      _this = this;
      if (!Modernizr.touchevents) {
        return false;
      }
      position = {
        start: {},
        end: {}
      };
      $(document).on('touchstart.FrameworkOffCanvas', function(e) {
        position.start.x = e.originalEvent.touches[0].clientX;
        position.start.y = e.originalEvent.touches[0].clientY;
      });
      return $(document).on('touchend.FrameworkOffCanvas', function(e) {
        position.end.x = e.originalEvent.changedTouches[0].clientX;
        position.end.y = e.originalEvent.changedTouches[0].clientY;
        if (Math.abs(position.start.y - position.end.y) > 30) {
          return false;
        }
        if (position.start.x > position.end.x + 5) {
          return _this.closeLeft();
        } else if (position.start.x < position.end.x - 5) {
          return _this.closeRight();
        }
      });
    };

    return FrameworkOffCanvas;

  })();

  theme.classes.FrameworkSearch = (function() {
    function FrameworkSearch(root) {
      var _this;
      this.root = root;
      this.resizeListeners = bind(this.resizeListeners, this);
      this.matchImageHeights = bind(this.matchImageHeights, this);
      this.getResults = bind(this.getResults, this);
      this.listenForKeyEntered = bind(this.listenForKeyEntered, this);
      this.getSearchUrl = bind(this.getSearchUrl, this);
      this.searchLinks = bind(this.searchLinks, this);
      this.loadSpinners = bind(this.loadSpinners, this);
      this.onOpen = bind(this.onOpen, this);
      _this = this;
      _this.articles = _this.root.find('.search--articles');
      _this.form = _this.root.find('form');
      _this.icon = _this.root.find('.search--icon');
      _this.loading = _this.root.find('.search--loading');
      _this.no_results = _this.root.find('.search--no-results');
      _this.products = _this.root.find('.search--products');
      _this.results = _this.root.find('.search--results');
      _this.text_box = _this.root.find('.search--textbox');
      _this.toggle_link = _this.root.find('.search--toggle');
      _this.show_articles = _this.root.data('show-articles');
      _this.show_pages = _this.root.data('show-pages');
      _this.view = _this.root.data('view');
      _this.ajax_request = null;
      _this.search_term = null;
      _this.search_url = null;
      _this.close_results_timer = null;
      _this.typing_timer = null;
      _this.article_page_combination = "";
      _this.offCanvas = null;
      if (theme.partials.OffCanvas !== void 0) {
        _this.offCanvas = theme.partials.OffCanvas;
      } else {
        _this.offCanvas = theme.partials.FrameworkOffCanvas;
      }
      if (_this.show_articles && _this.show_pages) {
        _this.article_page_combination = 'article,page';
      } else if (_this.show_articles) {
        _this.article_page_combination = 'article';
      } else if (_this.show_pages) {
        _this.article_page_combination = 'page';
      }
      if (_this.view === 'modal') {
        _this.searchLinks();
        _this.getSearchUrl();
        _this.listenForKeyEntered();
        _this.loadSpinners();
      }
      _this.resizeListeners();
      _this.matchImageHeights();
    }

    FrameworkSearch.prototype.onOpen = function() {
      var _this, temp_val;
      _this = this;
      _this.text_box.focus();
      temp_val = _this.text_box.val();
      _this.text_box.val('');
      _this.text_box.val(temp_val);
      return _this.text_box.trigger('keyup');
    };

    FrameworkSearch.prototype.loadSpinners = function() {
      var _this, spinner;
      _this = this;
      spinner = _this.loading.find('.animation');
      if (spinner.hasClass('tiny')) {
        return spinner.spin('tiny');
      } else {
        return spinner.spin('small');
      }
    };

    FrameworkSearch.prototype.searchLinks = function() {
      var _this;
      _this = this;
      $('.off-canvas--main-content a[href="/search"]').on('click', function() {
        $('[data-trigger="search-modal"]').trigger('click');
        _this.onOpen();
        return false;
      });
      $('.off-canvas--right-sidebar a[href="/search"]').on('click', function() {
        _this.offCanvas.closeRight();
        setTimeout(function() {
          $('[data-trigger="search-modal"]').trigger('click');
          return _this.onOpen();
        }, 450);
        return false;
      });
      return $('.off-canvas--left-sidebar a[href="/search"]').on('click', function() {
        _this.offCanvas.closeLeft();
        setTimeout(function() {
          $('[data-trigger="search-modal"]').trigger('click');
          return _this.onOpen();
        }, 450);
        return false;
      });
    };

    FrameworkSearch.prototype.getSearchUrl = function() {
      var _this;
      _this = this;
      _this.search_url = window.location.href;
      _this.search_url = _this.search_url.replace(window.location.hostname + window.location.pathname, window.location.hostname + '/search');
      _this.search_url = _this.search_url.replace('#', '');
      if (_this.search_url.indexOf("?") >= 0) {
        return _this.search_url = _this.search_url + '&';
      } else {
        return _this.search_url = _this.search_url + '?';
      }
    };

    FrameworkSearch.prototype.listenForKeyEntered = function() {
      var _this;
      _this = this;
      return _this.text_box.attr("autocomplete", "off").on("keyup paste", function(event) {
        var term;
        clearTimeout(_this.typing_timer);
        term = $(this).val();
        if (term.length < 2 && event.type !== 'paste') {
          _this.products.empty();
          _this.articles.empty();
          _this.loading.hide();
          _this.icon.show();
          return false;
        }
        _this.loading.show();
        _this.icon.hide();
        return _this.typing_timer = setTimeout(function() {
          var url;
          clearTimeout(_this.typing_timer);
          url = _this.search_url + "view=ajax-product&type=product&q=" + term + "*";
          _this.getResults(url, term, 'product');
          if (_this.show_articles || _this.show_pages) {
            url = _this.search_url + "view=ajax-article-page&type=" + _this.article_page_combination + "&q=" + term + "*";
            return _this.getResults(url, term, 'article');
          }
        }, 750);
      });
    };

    FrameworkSearch.prototype.getResults = function(url, term, type) {
      var _this;
      _this = this;
      _this.products.empty();
      _this.articles.empty();
      $.ajax({
        url: url,
        type: "GET",
        dataType: "html",
        success: function(data) {
          _this.loading.hide();
          _this.icon.show();
          if (type === 'product') {
            _this.products.empty();
            _this.products.append(data);
            return _this.matchImageHeights();
          } else if (type === 'article') {
            _this.articles.empty();
            return _this.articles.append(data);
          }
        },
        error: function(jqxhr, textStatus, error) {
          var err;
          err = textStatus + ', ' + error;
          return console.log('search.json Request Failed: ' + err);
        }
      });
    };

    FrameworkSearch.prototype.matchImageHeights = function() {
      var _this;
      _this = this;
      return theme.utils.matchImageHeights(_this.products, _this.products.find('.product--root'), '.product--image-wrapper');
    };

    FrameworkSearch.prototype.resizeListeners = function() {
      var _this;
      _this = this;
      return $(window).on('resize.Search', theme.utils.debounce(100, function() {
        return _this.matchImageHeights();
      }));
    };

    return FrameworkSearch;

  })();

  theme.classes.Sections = (function() {
    function Sections() {
      this.unload = bind(this.unload, this);
      this.deselectBlock = bind(this.deselectBlock, this);
      this.selectBlock = bind(this.selectBlock, this);
      this.deselectSection = bind(this.deselectSection, this);
      this.selectSection = bind(this.selectSection, this);
      this.load = bind(this.load, this);
      this.getActiveBlock = bind(this.getActiveBlock, this);
      this.getActiveSection = bind(this.getActiveSection, this);
      this.listeners = bind(this.listeners, this);
      var _this;
      _this = this;
      _this.listeners();
    }

    Sections.prototype.listeners = function() {
      var _this;
      _this = this;
      _this.load();
      _this.unload();
      _this.selectSection();
      _this.deselectSection();
      _this.selectBlock();
      return _this.deselectBlock();
    };

    Sections.prototype.getActiveSection = function(evt) {
      var _this, active_section;
      _this = this;
      active_section = $(evt.target).find('[data-section-id]');
      return active_section;
    };

    Sections.prototype.getActiveBlock = function(evt) {
      var _this, active_block;
      _this = this;
      active_block = $(evt.target);
      return active_block;
    };

    Sections.prototype.load = function(evt) {
      var _this;
      _this = this;
      return $(document).on('shopify:section:load', function(evt) {
        var active_section;
        theme.utils.loadJsClasses();
        active_section = _this.getActiveSection(evt);
        active_section.triggerHandler("theme:section:load");
        return active_section.find('[data-js-class]').each(function() {
          return $(this).triggerHandler("theme:section:load");
        });
      });
    };

    Sections.prototype.selectSection = function() {
      var _this;
      _this = this;
      return $(document).on('shopify:section:select', function(evt) {
        var active_section;
        active_section = _this.getActiveSection(evt);
        return active_section.triggerHandler("theme:section:select");
      });
    };

    Sections.prototype.deselectSection = function() {
      var _this;
      _this = this;
      return $(document).on('shopify:section:deselect', function(evt) {
        var active_section;
        active_section = _this.getActiveSection(evt);
        return active_section.triggerHandler('theme:section:deselect');
      });
    };

    Sections.prototype.selectBlock = function() {
      var _this;
      _this = this;
      return $(document).on('shopify:block:select', function(evt) {
        var active_block;
        active_block = _this.getActiveBlock(evt);
        return active_block.triggerHandler('theme:block:select');
      });
    };

    Sections.prototype.deselectBlock = function() {
      var _this;
      _this = this;
      return $(document).on('shopify:block:deselect', function(evt) {
        var active_block;
        active_block = _this.getActiveBlock(evt);
        return active_block.triggerHandler('theme:block:deselect');
      });
    };

    Sections.prototype.unload = function(evt) {
      var _this;
      _this = this;
      return $(document).on('shopify:section:unload', function(evt) {
        var active_section;
        active_section = _this.getActiveSection(evt);
        active_section.triggerHandler("theme:section:unload");
        return active_section.find('[data-js-loaded="true"]').each(function() {
          return $(this).triggerHandler("theme:section:unload");
        });
      });
    };

    return Sections;

  })();

  theme.classes.FrameworkSlider = (function() {
    function FrameworkSlider(container1) {
      this.container = container1;
      this.eventListeners = bind(this.eventListeners, this);
      this.alignPlayButton = bind(this.alignPlayButton, this);
      this.updateContextMenu = bind(this.updateContextMenu, this);
      this.autoplay = bind(this.autoplay, this);
      this.formatPaginationNumbers = bind(this.formatPaginationNumbers, this);
      this.getActiveIndex = bind(this.getActiveIndex, this);
      this.createSlider = bind(this.createSlider, this);
      this.autoplay_enabled = this.container.data('autoplay') ? true : false;
      this.navigation = this.container.data('navigation') ? true : false;
      this.pagination_numbers = this.container.data('pagination-numbers') ? true : false;
      this.autoplay_frequency = 3000;
      this.slide_length = this.container.children().length;
      this.active_index = 0;
      this.news_panel = this.container.data('news-panel') ? true : false;
      this.createSlider();
      this.eventListeners();
      this.owl = this.container.data('owlCarousel');
    }

    FrameworkSlider.prototype.createSlider = function() {
      var _this, slider;
      _this = this;
      slider = this.container.owlCarousel({
        singleItem: true,
        navigation: _this.navigation,
        navigationText: false,
        pagination: _this.container.data('pagination') ? true : false,
        paginationNumbers: _this.pagination_numbers,
        scrollPerPageNav: true,
        slideSpeed: 800,
        autoHeight: false,
        autoPlay: _this.autoplay(),
        afterInit: function() {},
        afterAction: function() {
          _this.alignPlayButton();
          _this.active_index = _this.getActiveIndex();
          _this.updateContextMenu(_this.active_index);
          return _this.formatPaginationNumbers();
        }
      });
      if (_this.navigation) {
        slider.find('.owl-prev').html(theme.utils.addSymbol('chevron-left'));
        slider.find('.owl-next').html(theme.utils.addSymbol('chevron-right'));
      }
      return slider;
    };

    FrameworkSlider.prototype.getActiveIndex = function() {
      return this.container.find('.owl-pagination .owl-page.active').index();
    };

    FrameworkSlider.prototype.formatPaginationNumbers = function() {
      return this.container.find('.owl-page.active .owl-numbers').text((this.active_index + 1) + "/" + this.slide_length);
    };

    FrameworkSlider.prototype.autoplay = function() {
      if (this.autoplay_enabled) {
        return this.autoplay_frequency;
      }
      return false;
    };

    FrameworkSlider.prototype.updateContextMenu = function(index) {
      var context_navigation, type_class;
      if (this.news_panel) {
        type_class = '.' + this.container.find('.slide').eq(index).data('feed-type');
        context_navigation = this.container.closest('.template--index--news').find('.context-navigation');
        context_navigation.find('.item').hide();
        return context_navigation.find(type_class).show();
      }
    };

    FrameworkSlider.prototype.alignPlayButton = function() {
      var play_button, play_button_height, slide, slide_height, video_offset;
      slide = this.container.find('.owl-item').eq(this.active_index);
      play_button = slide.find('.play-button');
      if (play_button.length === 0) {
        return;
      }
      play_button.css('visibility', 'hidden');
      if (PAGE.hasClass('transparent-menu') && $('.main-header').css('position') === 'absolute') {
        slide_height = slide.outerHeight();
        play_button_height = play_button.outerHeight();
        video_offset = (slide_height - play_button_height) / 2;
        play_button.css({
          'margin-top': 0,
          'top': video_offset
        });
      } else {
        play_button.css({
          'margin-top': '-40px',
          'top': '50%'
        });
      }
      return play_button.css('visibility', 'visible');
    };

    FrameworkSlider.prototype.eventListeners = function() {
      var _this;
      _this = this;
      this.container.find(".play-button").on('click', function() {
        var video_modal;
        video_modal = new VideoModal($(this).closest('.video'));
        video_modal.open();
        _this.owl.stop();
        return false;
      });
      return this.container.find('.owl-pagination .owl-page, .skip-to-next').on('click', function() {
        _this.owl.next();
        return false;
      });
    };

    return FrameworkSlider;

  })();

  theme.classes.FrameworkStickyColumn = (function() {
    function FrameworkStickyColumn(container1, column_a, column_b, mq) {
      this.container = container1;
      this.column_a = column_a;
      this.column_b = column_b;
      this.mq = mq;
      this.Listeners = bind(this.Listeners, this);
      this.setColumnPosition = bind(this.setColumnPosition, this);
      this.getAlignment = bind(this.getAlignment, this);
      this.getState = bind(this.getState, this);
      this.resetLargerColumn = bind(this.resetLargerColumn, this);
      this.getSmallerColumn = bind(this.getSmallerColumn, this);
      this.heightsHaveChanged = bind(this.heightsHaveChanged, this);
      this.setHeights = bind(this.setHeights, this);
      this.loadColumns = bind(this.loadColumns, this);
      if (Modernizr.touchevents) {
        return false;
      }
      this.current_state = 'auto';
      this.column_a_height = 0;
      this.column_b_height = 0;
      this.loadColumns();
    }

    FrameworkStickyColumn.prototype.loadColumns = function() {
      var _this;
      _this = this;
      return theme.utils.imagesLoaded(_this.container, function() {
        _this.Listeners();
        return _this.setColumnPosition();
      });
    };

    FrameworkStickyColumn.prototype.setHeights = function() {
      this.column_a_height = this.column_a.outerHeight();
      return this.column_b_height = this.column_b.outerHeight();
    };

    FrameworkStickyColumn.prototype.heightsHaveChanged = function() {
      if (this.column_a.outerHeight() !== this.column_a_height) {
        this.setHeights();
        return true;
      }
      if (this.column_b.outerHeight() !== this.column_b_height) {
        this.setHeights();
        return true;
      }
      return false;
    };

    FrameworkStickyColumn.prototype.getSmallerColumn = function() {
      if (this.column_a_height < this.column_b_height) {
        return this.column_a;
      } else {
        return this.column_b;
      }
    };

    FrameworkStickyColumn.prototype.resetLargerColumn = function() {
      if (this.column_a_height > this.column_b_height) {
        return this.column_a.css({
          'position': 'relative',
          'top': 'auto',
          'bottom': 'auto'
        });
      } else {
        return this.column_b.css({
          'position': 'relative',
          'top': 'auto',
          'bottom': 'auto'
        });
      }
    };

    FrameworkStickyColumn.prototype.getState = function(scroll_pos, window_height, column) {
      var column_height, height_for_bottom, overflowing_column, state;
      state = 'auto';
      if (this.mq.current_window === 'small') {
        return 'auto';
      }
      column_height = column.outerHeight();
      if (window_height > column_height) {
        overflowing_column = true;
      }
      if (scroll_pos < this.container.offset().top) {
        state = 'auto';
      }
      if (overflowing_column) {
        height_for_bottom = column_height;
      } else {
        height_for_bottom = window_height;
      }
      if ((scroll_pos + height_for_bottom) > (this.container.offset().top + this.container.outerHeight())) {
        state = 'absolute-bottom';
      } else if (scroll_pos > this.container.offset().top && overflowing_column) {
        state = 'fixed-top';
      } else if (window_height < column_height && (scroll_pos + window_height) > (this.container.offset().top + column.outerHeight())) {
        state = 'fixed-bottom';
      }
      return state;
    };

    FrameworkStickyColumn.prototype.getAlignment = function(column) {
      if (column.hasClass('column-a')) {
        return 'left';
      } else if (column.hasClass('column-b')) {
        return 'right';
      }
    };

    FrameworkStickyColumn.prototype.setColumnPosition = function() {
      var _this, align, column, state;
      _this = this;
      _this.setHeights();
      column = _this.getSmallerColumn();
      state = _this.getState($(window).scrollTop(), $(window).height(), column);
      align = _this.getAlignment(column);
      if (state === 'auto' && this.current_state !== 'auto') {
        this.current_state = 'auto';
        column.css({
          'position': 'relative',
          'top': 'auto',
          'bottom': 'auto'
        });
      } else if (state === 'fixed-bottom' && this.current_state !== 'fixed-bottom') {
        this.current_state = 'fixed-bottom';
        column.css({
          'position': 'fixed',
          'top': 'auto',
          'bottom': 0
        });
      } else if (state === 'fixed-top' && this.current_state !== 'fixed-top') {
        this.current_state = 'fixed-top';
        column.css({
          'position': 'fixed',
          'top': 0,
          'bottom': 'auto'
        });
      } else if (state === 'absolute-bottom' && this.current_state !== 'absolute-bottom') {
        this.current_state = 'absolute-bottom';
        column.css({
          'position': 'absolute',
          'top': 'auto',
          'bottom': 0
        });
      }
      if (align === 'right') {
        return column.css({
          'right': 0
        });
      }
    };

    FrameworkStickyColumn.prototype.Listeners = function() {
      var _this;
      _this = this;
      $(window).scroll(function() {
        return _this.setColumnPosition();
      });
      setInterval(function() {
        if (_this.heightsHaveChanged()) {
          _this.resetLargerColumn();
          return _this.setColumnPosition();
        }
      }, 250);
      return $(window).resize(function() {
        _this.resetLargerColumn();
        return _this.setColumnPosition();
      });
    };

    return FrameworkStickyColumn;

  })();

  theme.classes.FrameworkUtils = (function() {
    function FrameworkUtils() {
      var _this;
      _this = this;
      _this.google_map_api_status = null;
      cssVars();
    }

    FrameworkUtils.prototype.debounce = function(delay, fn) {
      var timeoutId;
      timeoutId = void 0;
      return function() {
        if (timeoutId) {
          clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(fn.bind(this), delay, arguments);
      };
    };

    FrameworkUtils.prototype.imagesLoaded = function(selector, callback) {
      var count, images_length;
      count = 0;
      images_length = selector.find('img[data-sizes="auto"]').length;
      if (images_length < 1) {
        callback();
        return;
      }
      return selector.on('lazybeforeunveil', function(e) {
        return $(e.target).one('load', function() {
          count++;
          if (count === images_length) {
            return callback();
          }
        });
      });
    };

    FrameworkUtils.prototype.a11yClick = function(event) {
      var code;
      if (event.type === 'click') {
        return true;
      } else if (event.type === 'keypress') {
        code = event.charCode || event.keyCode;
        if (code === 32) {
          event.preventDefault();
        }
        if (code === 32 || code === 13) {
          return true;
        }
      }
      return false;
    };

    FrameworkUtils.prototype.matchImageHeights = function(container, items, image_class) {
      var _this, greatest_image_height, items_per_row, row_items;
      _this = this;
      items_per_row = Math.round(container.width() / items.first().outerWidth());
      greatest_image_height = 0;
      row_items = $();
      items.find(image_class).css('height', 'auto');
      items.find('.placeholder--root').css('height', 'auto');
      return items.each(function(index) {
        var this_height;
        if ($(this).find('.image--root').length > 0) {
          this_height = $(this).find(image_class + ' .image--root').outerHeight();
        } else {
          this_height = $(this).find('.placeholder--root').outerHeight();
        }
        row_items = row_items.add($(this));
        if (this_height > greatest_image_height) {
          greatest_image_height = this_height;
        }
        if (index % items_per_row === items_per_row - 1 || index + 1 === items.length) {
          row_items.find(image_class + ', .placeholder--root').height(greatest_image_height);
          greatest_image_height = 0;
          return row_items = $();
        }
      });
    };

    return FrameworkUtils;

  })();

  theme.classes.FrameworkVideo = (function() {
    function FrameworkVideo(root) {
      var _this;
      this.root = root;
      _this = this;
      _this.root.fitVids();
    }

    return FrameworkVideo;

  })();

  theme.classes.FrameworkXMenu = (function() {
    function FrameworkXMenu(root) {
      var _this;
      this.root = root;
      this.slideUp = bind(this.slideUp, this);
      this.slideDown = bind(this.slideDown, this);
      this.arrangeMegaNav = bind(this.arrangeMegaNav, this);
      this.resizeListeners = bind(this.resizeListeners, this);
      this.checkOverlap = bind(this.checkOverlap, this);
      this.listeners = bind(this.listeners, this);
      this.load = bind(this.load, this);
      _this = this;
      _this.debugging = false;
      _this.state = 'closed';
      _this.parent_links = _this.root.find('.x-menu--level-1--link > a');
      _this.sub_menu_links = _this.root.find('.x-menu--level-1--link:not([data-x-menu--depth="1"]) > a');
      _this.sub_menu_items = _this.sub_menu_links.parent().find('ul a');
      _this.parents_with_sub_menu = _this.sub_menu_links.parent();
      _this.overlap_parent = _this.root.data('x-menu--overlap-parent');
      _this.load();
    }

    FrameworkXMenu.prototype.load = function() {
      var _this;
      _this = this;
      _this.arrangeMegaNav();
      _this.listeners();
      _this.checkOverlap();
      return _this.resizeListeners();
    };

    FrameworkXMenu.prototype.listeners = function() {
      var _this;
      _this = this;
      _this.parents_with_sub_menu.on('mouseenter.XMenu', function(e) {
        return _this.slideDown($(this).find('> a'));
      });
      _this.parents_with_sub_menu.on('mouseleave.XMenu', function() {
        return _this.slideUp();
      });
      _this.parent_links.on('focus', function(e) {
        return _this.slideUp();
      });
      _this.sub_menu_links.on('focus', function(e) {
        return _this.slideDown($(this));
      });
      return _this.sub_menu_links.on('touchstart.XMenu', function(e) {
        e.preventDefault();
        if ($(this).parent().attr('data-x-menu--open') === 'true') {
          return _this.slideUp();
        } else {
          return _this.slideDown($(this));
        }
      });
    };

    FrameworkXMenu.prototype.checkOverlap = function() {
      var _this, center_index, center_item, center_item_left_edge, center_item_right_edge, center_item_width, container, container_width, first_center_child, last_center_child, left_break_point, left_item, right_item, right_item_edge;
      _this = this;
      if (Modernizr.touchevents && theme.utils.mqs.current_window !== 'large') {
        _this.root.attr('data-x-menu--overlap', 'true');
        return false;
      }
      _this.root.attr('data-x-menu--overlap', 'false');
      center_item = _this.root;
      if (_this.overlap_parent === 1) {
        center_item = center_item.parent();
      } else if (_this.overlap_parent === 2) {
        center_item = center_item.parent().parent();
      }
      container = center_item.parent();
      center_index = center_item.index();
      left_item = false;
      if (center_index > 1) {
        left_item = container.children().eq(center_index - 1);
      }
      right_item = false;
      if (center_index + 1 < container.children().length) {
        right_item = container.children().eq(center_index + 1);
      }
      container_width = container.width();
      center_item_width = _this.root.outerWidth();
      if (left_item) {
        first_center_child = center_item.find('> :first-child');
        center_item_left_edge = first_center_child.offset().left - 1;
        left_break_point = (container_width - center_item_width) / 2;
        if (left_edge >= center_item_left_edge) {
          _this.root.attr('data-x-menu--overlap', 'true');
        }
      }
      if (right_item) {
        last_center_child = center_item.find('> :last-child');
        center_item_right_edge = last_center_child.outerWidth() + last_center_child.offset().left + 1;
        right_item_edge = right_item.offset().left;
        if (center_item_right_edge >= right_item_edge) {
          return _this.root.attr('data-x-menu--overlap', 'true');
        }
      }
    };

    FrameworkXMenu.prototype.resizeListeners = function() {
      var _this;
      _this = this;
      return $(window).on('resize.XMenu', _this.debounce(100, function() {
        return _this.checkOverlap();
      }));
    };

    FrameworkXMenu.prototype.debounce = function(delay, fn) {
      var timeoutId;
      timeoutId = void 0;
      return function() {
        if (timeoutId) {
          clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(fn.bind(this), delay, arguments);
      };
    };

    FrameworkXMenu.prototype.arrangeMegaNav = function() {
      var _this, mega_navs;
      _this = this;
      if (_this.parents_with_sub_menu.length === 0) {
        return false;
      }
      mega_navs = _this.root.find('[data-x-menu--depth="3"] .x-menu--level-2--container');
      return mega_navs.each(function() {
        var container, single_parents, single_parents_container;
        container = $(this);
        single_parents = container.find('[data-x-menu--single-parent="true"]');
        if (single_parents.length > 0) {
          single_parents_container = $('<div class="x-menu--single-parents"></div>').insertAfter(container.find('.x-menu--bg'));
          return single_parents_container.append('<ul>').find('ul').append(single_parents);
        }
      });
    };

    FrameworkXMenu.prototype.slideDown = function(link, delay) {
      var _this, display_type, link_wrapper, menu_height, sub_menu;
      if (delay == null) {
        delay = false;
      }
      _this = this;
      clearTimeout(_this.timer);
      link_wrapper = link.parent();
      if (link_wrapper.attr('data-x-menu--open') === 'true' || _this.state === 'closing') {
        return false;
      }
      _this.slideUp(false);
      if (delay && delay !== 'complete') {
        _this.timer = setTimeout(function() {
          return _this.slideDown(link, 'complete');
        }, delay);
      } else {
        link.closest('.x-menu--level-1--link').find('.fw--icon--expand-less').show();
        link.closest('.x-menu--level-1--link').find('.fw--icon--expand-more').hide();
        link.closest('.x-menu--level-1--link').find('.fw--icon--minus').show();
        link.closest('.x-menu--level-1--link').find('.fw--icon--plus').hide();
        _this.state = 'open';
        link_wrapper.attr('data-x-menu--open', 'true');
        link.attr('aria-expanded', 'true');
        sub_menu = link.closest('.x-menu--level-1--link').find('.x-menu--level-2--container');
        display_type = 'block';
        if (link_wrapper.attr('data-x-menu--depth') === "3") {
          display_type = 'flex';
        }
        sub_menu.velocity('stop');
        sub_menu.css({
          height: 'auto',
          display: display_type
        });
        sub_menu.find('.x-menu--level-2--list').css({
          display: display_type
        });
        menu_height = sub_menu.outerHeight();
        sub_menu.css({
          height: 0,
          opacity: 1
        });
        sub_menu.velocity({
          height: [menu_height, 0]
        }, {
          queue: false,
          duration: 600,
          easing: "easeOutExpo"
        });
      }
    };

    FrameworkXMenu.prototype.slideUp = function(delay) {
      var _this, link, link_wrapper, sub_menu;
      if (delay == null) {
        delay = 300;
      }
      _this = this;
      if (_this.debugging) {
        return false;
      }
      link_wrapper = _this.parents_with_sub_menu.filter('[data-x-menu--open="true"]');
      link = link_wrapper.find('> a');
      if (link_wrapper.attr('data-x-menu--open') === 'false') {
        return false;
      }
      if (delay) {
        return _this.timer = setTimeout(function() {
          return _this.slideUp(false);
        }, delay);
      } else {
        link.closest('.x-menu--level-1--link').find('.fw--icon--expand-less').hide();
        link.closest('.x-menu--level-1--link').find('.fw--icon--expand-more').show();
        link.closest('.x-menu--level-1--link').find('.fw--icon--minus').hide();
        link.closest('.x-menu--level-1--link').find('.fw--icon--plus').show();
        sub_menu = link.closest('.x-menu--level-1--link').find('.x-menu--level-2--container');
        link_wrapper.attr('data-x-menu--open', 'false');
        link.attr('aria-expanded', 'false');
        return sub_menu.velocity({
          opacity: 0
        }, {
          begin: function() {
            return _this.state = 'closing';
          },
          complete: function() {
            sub_menu.css({
              'display': 'none'
            });
            return _this.state = 'closed';
          },
          duration: 200
        });
      }
    };

    return FrameworkXMenu;

  })();

  theme.classes.FrameworkYMenu = (function() {
    function FrameworkYMenu(root) {
      var _this;
      this.root = root;
      this.slideRight = bind(this.slideRight, this);
      this.slideLeft = bind(this.slideLeft, this);
      this.adjustHeight = bind(this.adjustHeight, this);
      this.listeners = bind(this.listeners, this);
      this.load = bind(this.load, this);
      _this = this;
      _this.state = 'closed';
      _this.sub_menu_links = _this.root.find('.fw--icon--chevron-right').parent();
      _this.back_links = _this.root.find('.y-menu--back-link a');
      _this.regular_links = _this.root.find('.y-menu--level-1--link > a:not([data-submenu="true"]), .y-menu--level-2--link > a:not([data-submenu="true"]), .y-menu--level-3--link > a:not([data-submenu="true"])');
      _this.timer = null;
      _this.load();
    }

    FrameworkYMenu.prototype.load = function() {
      var _this;
      _this = this;
      return _this.listeners();
    };

    FrameworkYMenu.prototype.listeners = function() {
      var _this;
      _this = this;
      _this.regular_links.on('click', function(e) {
        var href;
        href = $(this).attr('href');
        if (href.indexOf('#') !== -1) {
          if (theme.partials.FrameworkOffCanvas.state === 'left-open') {
            theme.partials.FrameworkOffCanvas.closeLeft();
          } else if (theme.partials.FrameworkOffCanvas.state === 'right-open') {
            theme.partials.FrameworkOffCanvas.closeRight();
          }
          setTimeout(function() {
            return window.location.href = href;
          }, 450);
        }
      });
      _this.sub_menu_links.on('click', function(e) {
        _this.slideLeft($(this));
        return false;
      });
      return _this.back_links.on('click', function(e) {
        _this.slideRight($(this));
        return false;
      });
    };

    FrameworkYMenu.prototype.adjustHeight = function(open_list) {
      var _this, current_height, open_list_height;
      _this = this;
      _this.root.css({
        height: 'auto'
      });
      current_height = _this.root.outerHeight();
      open_list_height = open_list.outerHeight();
      if (open_list.css('position') === 'absolute') {
        open_list.css('position', 'relative');
        open_list_height = open_list.outerHeight();
        open_list.css('position', 'absolute');
      }
      return _this.root.velocity({
        height: open_list_height
      });
    };

    FrameworkYMenu.prototype.slideLeft = function(link) {
      var _this, sub_menu;
      _this = this;
      sub_menu = link.closest('li').find('ul').first();
      sub_menu.css({
        display: 'block'
      });
      _this.adjustHeight(sub_menu);
      return sub_menu.velocity({
        translateX: ['-100%', 0]
      });
    };

    FrameworkYMenu.prototype.slideRight = function(link) {
      var _this, container, parent_container;
      _this = this;
      container = link.closest('ul');
      parent_container = container.parent().closest('ul');
      _this.adjustHeight(parent_container);
      return container.velocity({
        translateX: [0, '-100%']
      });
    };

    return FrameworkYMenu;

  })();

  Accordion = (function() {
    function Accordion() {
      $('.accordion.headings').each(function() {
        return $(this).add($(this).next('.accordion.content')).wrapAll("<div class='accordion-wrapper'/>");
      });
      $('.accordion.headings li').wrapInner('<div class="trigger"></div>');
      $('.accordion.headings li .trigger').append('<div class="bg"></div>');
      $('.accordion-wrapper').each(function() {
        var accordion_content, accordion_heading;
        accordion_heading = $(this).find('.accordion.headings > li');
        accordion_content = $(this).find('.accordion.content > li');
        accordion_heading.first().addClass('active');
        accordion_content.each(function(index) {
          var content;
          content = $('<div class="content">' + $(this).html() + '</div>');
          return content.appendTo(accordion_heading.eq(index));
        });
        accordion_content.remove();
        $(this).find('.content').first().show();
        return $(this).find('.trigger').on("click", function() {
          var panels, this_panel;
          panels = $(this).closest(".accordion").find('.content');
          this_panel = $(this).closest("li").find(".content");
          panels.not(this_panel).slideUp(200);
          this_panel.slideDown(200);
          $(this).closest(".accordion").find("li").removeClass("active");
          return $(this).closest("li").addClass("active");
        });
      });
    }

    return Accordion;

  })();

  theme.classes.Article = (function(superClass) {
    extend(Article, superClass);

    function Article() {
      return Article.__super__.constructor.apply(this, arguments);
    }

    return Article;

  })(theme.classes.FrameworkArticle);

  theme.classes.FeaturedProduct = (function(superClass) {
    extend(FeaturedProduct, superClass);

    function FeaturedProduct() {
      this.addToCartListener = bind(this.addToCartListener, this);
      return FeaturedProduct.__super__.constructor.apply(this, arguments);
    }

    FeaturedProduct.prototype.addToCartListener = function() {
      var _this;
      _this = this;
      if (_this.cart_form.length > 0) {
        return _this.cart_form.submit(function() {
          theme.partials.cart.addToCart($(this));
          return false;
        });
      }
    };

    return FeaturedProduct;

  })(theme.classes.FrameworkFeaturedProduct);

  Footer = (function() {
    function Footer(root) {
      var _this;
      this.root = root;
      this.stickyFooter = bind(this.stickyFooter, this);
      this.addListeners = bind(this.addListeners, this);
      this.load = bind(this.load, this);
      _this = this;
      _this.load();
    }

    Footer.prototype.load = function() {
      var _this;
      _this = this;
      _this.addListeners();
      return _this.stickyFooter();
    };

    Footer.prototype.addListeners = function() {
      var _this;
      _this = this;
      return WINDOW.on('resize', function() {
        return _this.stickyFooter();
      });
    };

    Footer.prototype.stickyFooter = function() {
      var total_content_height;
      total_content_height = HEADER.outerHeight() + $('.main-content').outerHeight() + $('.main-footer').outerHeight();
      if (WINDOW.outerHeight() > total_content_height) {
        return $('.main-content').css({
          'min-height': WINDOW.outerHeight() - $('.main-header').outerHeight() - $('.main-footer').outerHeight()
        });
      }
    };

    return Footer;

  })();

  FullscreenSlider = (function() {
    function FullscreenSlider(slider_element) {
      this.eventListeners = bind(this.eventListeners, this);
      this.alignPlayButton = bind(this.alignPlayButton, this);
      this.alignCaption = bind(this.alignCaption, this);
      this.isFirstSlider = bind(this.isFirstSlider, this);
      this.getActiveIndex = bind(this.getActiveIndex, this);
      this.autoplay = bind(this.autoplay, this);
      this.removeDuplicateVideoModals = bind(this.removeDuplicateVideoModals, this);
      this.createSlider = bind(this.createSlider, this);
      var _this, slide_parent;
      _this = this;
      this.el = slider_element;
      slide_parent = this.el.closest('.slider');
      this.autoplay_enabled = slide_parent.data('autoplay');
      if (slide_parent.find('.slide').length < 2) {
        this.autoplay_enabled = false;
      }
      this.autoplay_frequency = slide_parent.data('rotateFrequency');
      this.transition_style = slide_parent.data('transitionStyle');
      _this.removeDuplicateVideoModals();
      this.createSlider();
      this.owl = $(".owl-carousel").data('owlCarousel');
    }

    FullscreenSlider.prototype.createSlider = function() {
      var slider, slider_options;
      slider = this;
      slider_options = {
        singleItem: true,
        navigation: false,
        paginationNumbers: false,
        scrollPerPageNav: true,
        slideSpeed: 800,
        pagination: true,
        autoHeight: true,
        autoPlay: slider.autoplay(),
        afterInit: function() {
          return slider.eventListeners();
        },
        afterAction: function() {
          slider.alignCaption();
          return slider.alignPlayButton();
        }
      };
      if (this.transition_style !== 'default') {
        slider_options['transitionStyle'] = this.transition_style;
      }
      return slider.el.owlCarousel(slider_options);
    };

    FullscreenSlider.prototype.removeDuplicateVideoModals = function() {
      var _this;
      _this = this;
      return $('.modal.video:gt(0)').remove();
    };

    FullscreenSlider.prototype.autoplay = function() {
      if (this.autoplay_enabled) {
        return this.autoplay_frequency;
      }
      return false;
    };

    FullscreenSlider.prototype.getActiveIndex = function() {
      return this.el.find('.owl-pagination .owl-page.active').index();
    };

    FullscreenSlider.prototype.isFirstSlider = function() {
      var current_section_id, first_section, first_section_id;
      first_section = $('.index-sections').children('div:first');
      first_section_id = first_section.find('.slider').data('sectionId');
      current_section_id = this.el.closest('.slider').data('sectionId');
      if (first_section.hasClass('section--slideshow')) {
        return current_section_id === first_section_id;
      }
      return false;
    };

    FullscreenSlider.prototype.alignCaption = function() {
      var caption, caption_height, caption_width, slide, slide_padding, top_offset;
      slide = this.el.find('.owl-item').eq(this.getActiveIndex());
      caption = slide.find('.caption');
      caption.css('visibility', 'hidden');
      caption_height = caption.outerHeight();
      caption_width = caption.outerWidth();
      slide_padding = 30;
      if (theme.utils.transparentMenuIsEnabled() && this.isFirstSlider() === true) {
        top_offset = $('.main-header').outerHeight();
      } else {
        top_offset = 0;
      }
      return theme.utils.imagesLoaded(slide.find('img').first(), function() {
        var left_offset, middle_top, slide_height, slide_width;
        slide_height = slide.outerHeight();
        slide_width = slide.outerWidth();
        if (caption.hasClass('top')) {
          caption.css('top', top_offset + slide_padding);
        } else if (caption.hasClass('middle')) {
          middle_top = top_offset + (slide_height - top_offset - caption_height) / 2;
          caption.css('top', middle_top);
        }
        if (caption.hasClass('center')) {
          left_offset = (slide_width - caption_width) / 2;
          caption.css('left', left_offset);
        }
        return caption.css('visibility', 'visible');
      });
    };

    FullscreenSlider.prototype.alignPlayButton = function() {
      var play_button, slide;
      slide = this.el.find('.owl-item').eq(this.getActiveIndex());
      play_button = slide.find('.play-button');
      play_button.css('visibility', 'hidden');
      if (theme.utils.transparentMenuIsEnabled() && $('.main-header').css('position') === 'absolute') {
        theme.utils.imagesLoaded(slide.find('img').first(), function() {
          var play_button_height, slide_height, video_offset;
          slide_height = slide.outerHeight();
          play_button_height = play_button.outerHeight();
          video_offset = (slide_height - play_button_height) / 2;
          return play_button.css({
            'margin-top': 0,
            'top': video_offset
          });
        });
      } else {
        play_button.css({
          'margin-top': '-40px',
          'top': '50%'
        });
      }
      return play_button.css('visibility', 'visible');
    };

    FullscreenSlider.prototype.eventListeners = function() {
      var slider;
      slider = this;
      this.el.find(".play-button").on('click', function() {
        var video_modal;
        video_modal = new VideoModal($(this).closest('.video'));
        video_modal.open();
        slider.owl.stop();
        return false;
      });
      this.el.find('.owl-pagination .owl-page').on('click', function() {
        return slider.owl.stop();
      });
      return DOC.on('header.transparentMenuIsUpdated', slider.alignCaption);
    };

    return FullscreenSlider;

  })();

  theme.classes.Header = (function() {
    function Header(root) {
      var _this;
      this.root = root;
      this.moveYMenu = bind(this.moveYMenu, this);
      this.sectionListeners = bind(this.sectionListeners, this);
      this.load = bind(this.load, this);
      _this = this;
      _this.load();
    }

    Header.prototype.load = function() {
      var _this;
      _this = this;
      _this.searchAndAccount();
      _this.sectionListeners();
      return _this.moveYMenu();
    };

    Header.prototype.sectionListeners = function() {
      var _this;
      _this = this;
      return _this.root.on('theme:section:load', function() {
        theme.partials.FrameworkOffCanvas.unload();
        return theme.partials.FrameworkOffCanvas.load();
      });
    };

    Header.prototype.moveYMenu = function() {
      var _this;
      _this = this;
      $('.mobile-nav--menu').empty();
      return $('.y-menu').appendTo('.mobile-nav--menu');
    };

    Header.prototype.searchAndAccount = function() {
      var _this;
      _this = this;
      $('.account-open').click(function() {
        $(this).closest('.menu').fadeOut(100, function() {
          return $('.account-container').fadeIn(200);
        });
        return false;
      });
      return $('.account-close').click(function() {
        $('.account-container').fadeOut(100, function() {
          return $('.search-account .menu').fadeIn(200);
        });
        return false;
      });
    };

    return Header;

  })();

  HorizontalTabs = (function() {
    function HorizontalTabs() {
      $('.tabs-horizontal.headings').each(function() {
        return $(this).add($(this).next('.tabs.content')).wrapAll("<div class='tabs-wrapper horizontal'/>");
      });
      $('.tabs-horizontal.headings li').wrapInner('<div class="trigger"></div>');
      $('.tabs-horizontal.headings li .trigger').append('<div class="bg"></div>');
      $('.tabs-wrapper.horizontal').each(function() {
        var tab_content, tab_headings;
        tab_headings = $(this).find('.headings > li');
        tab_content = $(this).find('.tabs.content > li');
        tab_content.first().addClass('active');
        tab_headings.first().addClass('active');
        return tab_headings.on('click', function() {
          tab_headings.removeClass('active');
          tab_content.removeClass('active');
          $(this).addClass('active');
          return tab_content.eq($(this).index()).addClass('active');
        });
      });
    }

    return HorizontalTabs;

  })();

  MediaQueries = (function() {
    function MediaQueries() {
      this.load = bind(this.load, this);
      var _this;
      _this = this;
      _this.listeners();
      _this.load();
    }

    MediaQueries.prototype.load = function() {
      var _this, current_window;
      _this = this;
      if (window.matchMedia('only screen and (min-width: ' + mq_medium + 'px)').matches) {
        if (current_window !== 'large') {
          $.event.trigger("largeWindow");
          return current_window = 'large';
        }
      } else if (window.matchMedia('only screen and (min-width: ' + mq_small + 'px)').matches) {
        if (current_window !== 'medium') {
          $.event.trigger("mediumWindow");
          return current_window = 'medium';
        }
      } else {
        if (current_window !== 'small') {
          $.event.trigger("smallWindow");
          return current_window = 'small';
        }
      }
    };

    MediaQueries.prototype.listeners = function() {
      var _this;
      _this = this;
      return WINDOW.on('resize.section-' + _this.section_id, _this.load);
    };

    return MediaQueries;

  })();

  Popup = (function() {
    function Popup(clazz) {
      var checkContentOverflow, closeDialog, eventListeners, fillPopupDialog, fillSizeChartDialog, getCustomClasses, getImage, getNewsletter, getPageContent, getSocialIcons, getWrapper, hideMask, ieCenter, isExpired, mask, maskIsActive, modal, modal_clazz, openDialog, passesExpiration, resetExpiration, showMask, storeExpiration;
      this.clazz = clazz;
      modal = null;
      modal_clazz = this.clazz;
      mask = $('.popup-modal-mask');
      storeExpiration = function() {
        var date, e, expires, object, seconds_from_now;
        date = new Date();
        seconds_from_now = 1000 * 60 * 60 * 24 * popup_config.days_until;
        expires = date.setTime(date.getTime() + seconds_from_now);
        object = {
          expires: expires
        };
        try {
          return localStorage[popup_config.storage_key] = JSON.stringify(object);
        } catch (error1) {
          e = error1;
          return false;
        }
      };
      resetExpiration = function() {
        localStorage.removeItem(popup_config.storage_key);
        return storeExpiration();
      };
      isExpired = function() {
        var expires, now, object;
        object = JSON.parse(localStorage[popup_config.storage_key]);
        expires = object.expires;
        now = new Date().getTime();
        if (parseFloat(expires - now) <= 0) {
          resetExpiration();
          return true;
        }
        return false;
      };
      passesExpiration = function() {
        var passed;
        passed = false;
        if (Storage === "undefined" || popup_config.test_mode) {
          passed = true;
        } else if (typeof localStorage[popup_config.storage_key] === "undefined") {
          passed = true;
          storeExpiration();
        } else {
          passed = isExpired();
        }
        return passed;
      };
      maskIsActive = function() {
        return $('.popup-modal').is(':visible') || $('.modal-mask').length > 0 && $('.modal-mask').is(':visible');
      };
      showMask = function() {
        mask.show();
        return PAGE.addClass("modal-on");
      };
      hideMask = function() {
        mask.hide();
        return PAGE.removeClass("modal-on");
      };
      getImage = function() {
        if (popup_config.show_image_enabled === false) {
          return "";
        }
        if (popup_config.image_link.length > 0) {
          return $('<div class="popup-image"> <a href="' + popup_config.image_link + '">' + popup_config.show_image_url + '</a> </div>');
        } else {
          return $('<div class="popup-image">').append(popup_config.show_image_url);
        }
      };
      getNewsletter = function() {
        var subscribe_module;
        if (popup_config.newsletter_enabled === false) {
          return "";
        }
        subscribe_module = $("<div id='subscribe_module'></div>").append($(".popup--root"));
        return subscribe_module;
      };
      getSocialIcons = function() {
        if (popup_config.social_icons_enabled === false) {
          return "";
        }
        return $(".social-follow").clone();
      };
      getCustomClasses = function() {
        var class_list;
        class_list = "";
        class_list += popup_config.show_image_enabled === true ? " has-image" : " has-no-image";
        class_list += popup_config.page_content.length > 0 ? " has-page-content" : " has-no-page-content";
        class_list += popup_config.newsletter_enabled ? " has-newsletter" : " has-no-newsletter";
        class_list += popup_config.social_icons_enabled ? " has-social-icons" : " has-no-social-icons";
        return class_list;
      };
      getWrapper = function() {
        return '<dialog class="' + modal_clazz + ' popup-modal' + getCustomClasses() + '" />';
      };
      getPageContent = function() {
        var page_content;
        page_content = null;
        if (popup_config.page_content.length < 1) {
          return "";
        }
        $.getJSON('/pages/' + popup_config.page_content + '.json', function(data, textStatus) {
          return page_content = "<div class='page-contents'>" + data.page.body_html + "</div>";
        });
        return page_content;
      };
      fillSizeChartDialog = function() {
        var dialog;
        if ($('.popup-modal.size-chart').length < 1) {
          dialog = {
            wrapper: getWrapper()
          };
          PAGE.append($(dialog.wrapper).append($('.size-chart')));
        }
        return openDialog();
      };
      fillPopupDialog = function() {
        var dialog, getInnerContent, render;
        dialog = {
          wrapper: getWrapper(),
          newsletter: getNewsletter(),
          social_icons: getSocialIcons(),
          image: getImage()
        };
        getInnerContent = function() {
          if (popup_config.page_content.length < 1 && popup_config.newsletter_enabled === false && popup_config.social_icons_enabled === false) {
            return "";
          }
          return $("<div class='inner' />").append(dialog.body, dialog.newsletter, dialog.social_icons);
        };
        render = function() {
          PAGE.append($(dialog.wrapper).append(dialog.image, getInnerContent()));
          return openDialog();
        };
        if (popup_config.page_content.length > 0) {
          return $.getJSON('/pages/' + popup_config.page_content + '.json', function(data, textStatus) {
            dialog['body'] = "<div class='page-contents'>" + data.page.body_html + "</div>";
            return render();
          });
        } else {
          return render();
        }
      };
      checkContentOverflow = function() {
        return setTimeout((function() {
          if (modal.length > 0 && $('.popup-modal-mask').is(':visible')) {
            return theme.utils.imagesLoaded(modal, function() {
              var dialog_height;
              dialog_height = $('dialog[class*="' + modal_clazz + '"]:last-of-type').outerHeight();
              if (dialog_height >= WINDOW.height()) {
                return PAGE.addClass('modal-unfix');
              } else {
                return PAGE.removeClass('modal-unfix');
              }
            });
          }
        }), 0);
      };
      ieCenter = function() {
        return modal.css({
          marginTop: -(modal.outerHeight() * 0.5) + "px",
          marginLeft: -(modal.outerWidth() * 0.5) + "px"
        });
      };
      openDialog = function() {
        modal = $('dialog[class*="' + modal_clazz + '"]');
        eventListeners();
        modal.addClass("opened").removeClass("closed");
        checkContentOverflow();
        return showMask();
      };
      eventListeners = function() {
        var removeAnimation;
        removeAnimation = function(event) {
          if (event.originalEvent.animationName === 'modal-close') {
            if (modal_clazz === 'popup') {
              return modal.remove();
            } else {
              return modal.removeClass('closed, completed');
            }
          } else {
            return modal.addClass('completed').removeClass('opened');
          }
        };
        DOC.on('click', '.popup-modal', function(e) {
          e.stopPropagation();
          if (e.target === this) {
            return closeDialog();
          }
        });
        $('.popup-modal-close').click(closeDialog);
        mask.click(closeDialog);
        modal.on('animationend webkitAnimationEnd MSAnimationEnd oAnimationEnd', removeAnimation);
        WINDOW.resize(checkContentOverflow);
        DOC.keydown(function(e) {
          if (modal.hasClass('completed') && e.keyCode === 27) {
            return closeDialog();
          }
        });
        return $('dialog.popup-modal #contact_form').on('submit', function(event) {
          var form;
          form = this;
          modal = $(this).closest('.popup-modal');
          modal.find('.error, .success').remove();
          event.preventDefault();
          if (modal.find('input[type="email"]').val().length === 0) {
            modal.find('.inner').prepend('<p class="error">' + theme.translation.newsletter_email_blank + '</p>');
            return false;
          } else {
            form.submit();
          }
          return false;
        });
      };
      closeDialog = function() {
        modal.addClass('closed').removeClass('completed').removeClass('opened');
        return hideMask();
      };
      if (modal_clazz !== 'popup') {
        fillSizeChartDialog();
      } else {
        if (popup_config.enabled && passesExpiration() && (popup_config.page_content.length > 0 || popup_config.newsletter_enabled || popup_config.show_image_enabled || popup_config.social_icons_enabled)) {
          setTimeout((function() {
            if (!(maskIsActive() === true || $('.popup-modal-mask').length < 1)) {
              return fillPopupDialog();
            }
          }), popup_config.seconds_until * 1000);
        }
      }
    }

    return Popup;

  })();

  theme.classes.ProductGrid = (function() {
    function ProductGrid(root) {
      var _this;
      this.root = root;
      this.hoverImagesLoaded = bind(this.hoverImagesLoaded, this);
      this.listeners = bind(this.listeners, this);
      this.matchImageHeights = bind(this.matchImageHeights, this);
      this.detectOnboarding = bind(this.detectOnboarding, this);
      this.load = bind(this.load, this);
      _this = this;
      _this.items = _this.root.find('.product--root');
      _this.onboarding = _this.detectOnboarding();
      _this.in_slider = _this.root.data('in-slider');
      _this.load();
    }

    ProductGrid.prototype.load = function() {
      var _this;
      _this = this;
      _this.listeners();
      _this.hoverImagesLoaded();
      if (!_this.in_slider) {
        return _this.matchImageHeights();
      }
    };

    ProductGrid.prototype.detectOnboarding = function() {
      var _this;
      _this = this;
      if (_this.items.first().find('.placeholder').length) {
        return true;
      }
      return false;
    };

    ProductGrid.prototype.matchImageHeights = function() {
      var _this;
      _this = this;
      return theme.utils.matchImageHeights(_this.root, _this.items, '.product--image-wrapper');
    };

    ProductGrid.prototype.listeners = function() {
      var _this;
      _this = this;
      if (!_this.in_slider) {
        return $(window).on('resize.ProductGrid', theme.utils.debounce(100, function() {
          return _this.matchImageHeights();
        }));
      }
    };

    ProductGrid.prototype.hoverImagesLoaded = function() {
      var _this;
      _this = this;
      return _this.items.filter('[data-hover-image="true"]').each(function() {
        var product;
        product = $(this);
        return theme.utils.imagesLoaded(product, function() {
          return product.attr('data-hover-image', 'loaded');
        });
      });
    };

    return ProductGrid;

  })();

  ProductSlider = (function() {
    function ProductSlider(root) {
      var _this;
      this.root = root;
      this.listeners = bind(this.listeners, this);
      this.afterUpdate = bind(this.afterUpdate, this);
      this.load = bind(this.load, this);
      _this = this;
      _this.product_grid = _this.root.find('.product-grid--root');
      _this.product_item = _this.root.find('.product--root');
      _this.load();
      _this.listeners();
    }

    ProductSlider.prototype.load = function() {
      var _this;
      _this = this;
      _this.product_grid.owlCarousel({
        items: 4,
        navigation: true,
        scrollPerPage: true,
        slideSpeed: 800,
        lazyLoad: false,
        pagination: false,
        navigationText: false,
        afterUpdate: _this.afterUpdate()
      });
      return _this.product_item.show();
    };

    ProductSlider.prototype.afterUpdate = function() {
      var _this;
      _this = this;
      return $(window).trigger('ProductSlider.afterUpdate');
    };

    ProductSlider.prototype.listeners = function() {
      var _this;
      _this = this;
      return $(window).on('resize.ProductGrid', theme.utils.debounce(100, function() {
        return _this.loadCarousel;
      }));
    };

    return ProductSlider;

  })();

  PromoBar = (function() {
    function PromoBar(root) {
      var _this;
      this.root = root;
      this.load = bind(this.load, this);
      _this = this;
      _this.promo_bar = _this.root;
      _this.close_btn = _this.root.find('button');
      _this.load();
    }

    PromoBar.prototype.load = function() {
      var _this;
      _this = this;
      if ((typeof Storage !== "undefined" && Storage !== null) && sessionStorage['promo-bar-closed']) {
        return _this.promo_bar.hide();
      } else {
        _this.promo_bar.show();
        return _this.close_btn.on('click', function() {
          return _this.close();
        });
      }
    };

    PromoBar.prototype.close = function() {
      var _this;
      _this = this;
      if ((typeof Storage !== "undefined" && Storage !== null) && !sessionStorage['promo-bar-closed']) {
        sessionStorage['promo-bar-closed'] = true;
      }
      return _this.promo_bar.addClass('closed');
    };

    return PromoBar;

  })();

  VerticalTabs = (function() {
    function VerticalTabs() {
      $('.tabs-vertical.headings').each(function() {
        return $(this).add($(this).next('.tabs.content')).wrapAll("<div class='tabs-wrapper vertical'/>");
      });
      $('.tabs-vertical.headings li').wrapInner('<div class="trigger"></div>');
      $('.tabs-vertical.headings li .trigger').append('<div class="bg"></div>');
      $('.tabs-wrapper.vertical').each(function() {
        var tab_content, tab_headings, tab_wrapper;
        tab_wrapper = $(this);
        tab_headings = $(this).find('.headings > li');
        tab_content = $(this).find('.tabs.content > li');
        tab_content.first().addClass('active');
        tab_headings.first().addClass('active');
        return tab_headings.on('click', function() {
          tab_headings.removeClass('active');
          tab_content.removeClass('active');
          $(this).addClass('active');
          tab_content.eq($(this).index()).addClass('active');
          if (general_scroll_to_active_item) {
            if (matchMedia('only screen and (min-width: ' + mq_small + 'px)').matches) {
              return $('html, body').animate({
                scrollTop: tab_wrapper.offset().top - 50
              }, 'slow');
            } else {
              return $('html, body').animate({
                scrollTop: tab_wrapper.offset().top + tab_wrapper.find('.headings').outerHeight() - 50
              }, 'slow');
            }
          }
        });
      });
    }

    return VerticalTabs;

  })();

  VideoModal = (function() {
    function VideoModal(video) {
      this.createIframe = bind(this.createIframe, this);
      this.extractVideoId = bind(this.extractVideoId, this);
      this.extractVideoType = bind(this.extractVideoType, this);
      this.eventListeners = bind(this.eventListeners, this);
      this.centerPosition = bind(this.centerPosition, this);
      this.close = bind(this.close, this);
      this.open = bind(this.open, this);
      this.opened = false;
      this.video = video;
      this.modal = $('.video.modal');
      this.player_button = video.find('.player-button');
      this.src_url = video.find('.play-button').attr('href');
      this.type = this.extractVideoType();
      this.id = this.extractVideoId();
      this.iframe = this.createIframe();
      this.caption = video.find('.caption');
    }

    VideoModal.prototype.open = function() {
      this.opened = true;
      this.modal.find(".flex-video").append(this.iframe);
      if (this.caption.length > 0) {
        this.modal.find(".caption").append(this.caption.html());
        this.modal.addClass("wide");
      } else {
        this.modal.find(".player").removeClass('large-8');
        this.modal.find('.caption').hide();
        this.modal.removeClass("wide");
      }
      this.player_button.hide();
      $('.modal-mask').show();
      this.modal.find('.close').show();
      this.modal.fadeIn();
      this.centerPosition();
      $(".modal").fadeIn(0);
      return this.eventListeners();
    };

    VideoModal.prototype.close = function() {
      this.opened = false;
      this.modal.find(".flex-video").empty();
      this.modal.find(".caption").empty();
      this.modal.hide();
      $('.modal-mask').fadeOut();
      if (this.caption.length === 0) {
        this.modal.find(".player").addClass('large-8');
        return this.modal.find('.caption').show();
      }
    };

    VideoModal.prototype.centerPosition = function() {
      if (WINDOW.height() < this.modal.outerHeight()) {
        return this.modal.css({
          'position': 'absolute',
          'top': '30px',
          'margin-top': 0,
          'margin-left': -(this.modal.outerWidth() / 2)
        });
      } else {
        return this.modal.css({
          'position': 'fixed',
          'top': '50%',
          'margin-top': -(this.modal.outerHeight() / 2),
          'margin-left': -(this.modal.outerWidth() / 2)
        });
      }
    };

    VideoModal.prototype.eventListeners = function() {
      var modal;
      modal = this;
      this.modal.find('.close').on('click', function() {
        return modal.close();
      });
      WINDOW.resize(function() {
        return modal.centerPosition();
      });
      DOC.keydown(function(e) {
        if (modal.opened) {
          if (e.keyCode === 27) {
            return modal.close();
          }
        }
      });
      $('.modal-mask').on('click', function() {
        return modal.close();
      });
      return this.player_button.on('click', function() {
        return false;
      });
    };

    VideoModal.prototype.extractVideoType = function() {
      var matches, re;
      re = /\/\/(?:www\.)?youtu(?:\.be|be\.com)\/(?:watch\?v=|embed\/)?([a-z0-9_\-]+)/i;
      matches = re.exec(this.src_url);
      if (matches) {
        return 'youtube';
      } else {
        re = /^.*(vimeo)\.com\/(?:watch\?v=)?(.*?)(?:\z|$|&)/;
        matches = re.exec(this.src_url);
        if (matches) {
          return 'vimeo';
        }
      }
      return false;
    };

    VideoModal.prototype.extractVideoId = function() {
      var match, regExp;
      if (this.type === 'youtube') {
        regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
        match = this.src_url.match(regExp);
        if (match && match[2].length === 11) {
          return match[2];
        }
      } else if (this.type === "vimeo") {
        regExp = /^.*(vimeo)\.com\/(?:watch\?v=)?(.*?)(?:\z|$|&)/;
        match = this.src_url.match(regExp);
        if (match) {
          return match[2];
        }
      }
    };

    VideoModal.prototype.createIframe = function() {
      if (this.type === "youtube") {
        return '<iframe  src="//www.youtube.com/embed/' + this.id + '?autoplay=1&rel=0" frameborder="0" allowfullscreen></iframe>';
      } else if (this.type === "vimeo") {
        return '<iframe src="//player.vimeo.com/video/' + this.id + '?title=0&amp;byline=0&amp;portrait=0&amp;color=ffffff&amp;autoplay=1?" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
      }
    };

    return VideoModal;

  })();

  theme.classes.XMenu = (function(superClass) {
    extend(XMenu, superClass);

    function XMenu(root) {
      var _this;
      this.root = root;
      this.slideDown = bind(this.slideDown, this);
      this.hideHeader = bind(this.hideHeader, this);
      this.showHeader = bind(this.showHeader, this);
      this.headerListeners = bind(this.headerListeners, this);
      this.isHeaderTransparent = bind(this.isHeaderTransparent, this);
      _this = this;
      _this.header = $('.main-header');
      _this.header_bg = _this.header.find('.header--bg');
      _this.header_timer = null;
      _this.transparent_header = _this.isHeaderTransparent();
      XMenu.__super__.constructor.apply(this, arguments);
      _this.headerListeners();
    }

    XMenu.prototype.isHeaderTransparent = function() {
      var _this;
      _this = this;
      if ($('.header').attr('data-header--menu-transparent') === 'true') {
        return true;
      } else {
        return false;
      }
    };

    XMenu.prototype.headerListeners = function() {
      var _this;
      _this = this;
      _this.parents_with_sub_menu.on('mouseenter', function(e) {
        return clearTimeout(_this.header_timer);
      });
      _this.header.on('mouseenter touchstart', function(e) {
        clearTimeout(_this.header_timer);
        return _this.showHeader();
      });
      return _this.header.on('mouseleave', function(e) {
        return _this.header_timer = setTimeout(function() {
          return _this.hideHeader();
        }, 500);
      });
    };

    XMenu.prototype.showHeader = function() {
      var _this;
      _this = this;
      if (parseInt(_this.header_bg.css('opacity')) !== 0) {
        return;
      }
      return _this.header_bg.velocity({
        opacity: [0.95]
      }, {
        duration: 400,
        queue: false
      });
    };

    XMenu.prototype.hideHeader = function() {
      var _this;
      _this = this;
      if (_this.parents_with_sub_menu.filter('[data-main-menu--open="true"]').length > 0) {
        return false;
      }
      _this.header_bg.velocity({
        opacity: 0
      }, {
        duration: 400
      });
      return _this.slideUp();
    };

    XMenu.prototype.slideDown = function(link, delay) {
      var _this, opacity;
      if (delay == null) {
        delay = false;
      }
      _this = this;
      if (delay !== 'complete') {
        opacity = Math.round(parseFloat(_this.header_bg.css('opacity')) * 100);
        if (opacity < 90 && _this.transparent_header) {
          delay = 400;
        }
      }
      return XMenu.__super__.slideDown.call(this, link, delay);
    };

    return XMenu;

  })(theme.classes.FrameworkXMenu);

  theme.classes.Blog = (function(superClass) {
    extend(Blog, superClass);

    function Blog() {
      return Blog.__super__.constructor.apply(this, arguments);
    }

    return Blog;

  })(theme.classes.FrameworkBlog);

  Cart = (function() {
    function Cart() {
      this.recentCartItemPopUp = bind(this.recentCartItemPopUp, this);
      this.addToCart = bind(this.addToCart, this);
      this.validateSize = bind(this.validateSize, this);
      this.stopResetTimer = bind(this.stopResetTimer, this);
      this.startTimer = bind(this.startTimer, this);
      this.fadeOutCartDropdown = bind(this.fadeOutCartDropdown, this);
      this.openMobileModal = bind(this.openMobileModal, this);
      this.slideDownCartDropdown = bind(this.slideDownCartDropdown, this);
      this.listeners = bind(this.listeners, this);
      this.load = bind(this.load, this);
      var _this;
      _this = this;
      _this.cart_dropdown_timer = null;
      _this.listeners();
    }

    Cart.prototype.load = function() {
      var _this;
      return _this = this;
    };

    Cart.prototype.listeners = function() {
      var _this;
      _this = this;
      $('.product-page--cart-form form').off().on('submit', function() {
        _this.addToCart($(this));
        return false;
      });
      $('.recently-added.mobile .close').off().on('click', function() {
        return _this.fadeOutCartDropdown();
      });
      $('.recently-added-mask').off().on('click', function() {
        return _this.fadeOutCartDropdown();
      });
      $('.main-header .recently-added').mouseenter(function() {
        return _this.stopResetTimer();
      });
      return $('.main-header .recently-added').mouseleave(function() {
        return _this.startTimer();
      });
    };

    Cart.prototype.toggleCartDropdown = function() {
      return $('.main-header .recently-added').slideToggle('fast');
    };

    Cart.prototype.slideDownCartDropdown = function() {
      $('.main-header .recently-added').slideDown('fast');
      return $("html, body").animate({
        scrollTop: 0
      });
    };

    Cart.prototype.openMobileModal = function() {
      $('.main-header .recently-added.mobile').fadeIn();
      return $('.main-header .recently-added-mask').removeClass('hide');
    };

    Cart.prototype.fadeOutCartDropdown = function() {
      var _this;
      _this = this;
      clearTimeout(_this.cart_dropdown_timer);
      $('.main-header .recently-added').fadeOut('fast');
      return $('.main-header .recently-added-mask').addClass('hide');
    };

    Cart.prototype.startTimer = function() {
      var _this;
      _this = this;
      return _this.cart_dropdown_timer = setTimeout((function() {
        return _this.fadeOutCartDropdown();
      }), 4000);
    };

    Cart.prototype.stopResetTimer = function() {
      var _this;
      _this = this;
      return clearTimeout(_this.cart_dropdown_timer);
    };

    Cart.prototype.validateSize = function(cart_form) {
      if (cart_form.find('select option:selected').is(':disabled')) {
        cart_form.find('.dropdown').effect('shake', {
          'times': 2,
          'distance': 5
        }, 400);
        return false;
      }
      return true;
    };

    Cart.prototype.addToCart = function(cart_form) {
      var _this, addToCartFail, addToCartPass;
      _this = this;
      addToCartPass = function(product) {
        return _this.recentCartItemPopUp();
      };
      addToCartFail = function(obj, status) {
        $('.recently-added .error').show();
        $('.recently-added table').hide();
        $('.recently-added div.row').hide();
        _this.slideDownCartDropdown();
        return _this.startTimer();
      };
      return $.ajax({
        type: "POST",
        url: "/cart/add.js",
        dataType: "json",
        data: cart_form.serialize(),
        success: addToCartPass,
        error: addToCartFail
      });
    };

    Cart.prototype.recentCartItemPopUp = function() {
      var _this, cart_item, cart_total;
      _this = this;
      cart_item = {};
      cart_total = {};
      return $.getJSON("/cart.js", function(cart, textStatus) {
        var item_trans, new_cart_row, new_mobile_item;
        cart_item.image_url = Shopify.resizeImage(cart.items[0].image, "160x");
        cart_item.url = cart.items[0].url;
        cart_item.title = cart.items[0].title;
        cart_item.price = Shopify.formatMoney(cart.items[0].price, shop_money_format);
        cart_total.price = Shopify.formatMoney(cart.total_price, shop_money_format);
        cart_total.quantity = cart.item_count;
        $('.cart-link .number, .header--mobile--cart-link .number').html(cart_total.quantity);
        $('.cart-link .number-wrapper, .header--mobile--cart-link .number-wrapper').removeClass('hide');
        new_cart_row = '<tr>';
        new_cart_row += '<td class="cart-item">';
        new_cart_row += '<a href="' + cart_item.url + '">';
        new_cart_row += '<img src="' + cart_item.image_url + '" alt="' + cart_item.title + '">';
        new_cart_row += '</a>';
        new_cart_row += '</td>';
        new_cart_row += '<td>';
        new_cart_row += '<h2 class="font--accent"><a href="' + cart_item.url + '">' + cart_item.title + '</a></h2>';
        new_cart_row += '</td>';
        new_cart_row += '<td class="cart-price font--accent"><span class="money">' + cart_item.price + '</span></td>';
        new_cart_row += '</tr>';
        new_mobile_item = '<a href="' + cart_item.url + '">';
        new_mobile_item += '<img src="' + cart_item.image_url + '" alt="' + cart_item.title + '">';
        new_mobile_item += '</a>';
        $('.recently-added tbody').html(new_cart_row);
        $('.recently-added .mobile-item').html(new_mobile_item);
        if (cart_total.quantity > 1) {
          item_trans = theme.translations.cart_items;
        } else {
          item_trans = theme.translations.cart_item;
        }
        $('.recently-added .items-count').html('<a href="/cart"> <span class="number">' + cart_total.quantity + '</span> ' + item_trans + '</a>');
        $('.recently-added .total-price').html(cart_total.price);
        if (currency_switcher_enabled) {
          $.each($('.recently-added .total-price').get(0).attributes, function(i, attrib) {
            if (attrib.name.match("^data-currency")) {
              return $('.recently-added .total-price').attr(attrib.name, "");
            }
          });
          Currency.convertAll(shopCurrency, jQuery('[name=currencies]').val());
        }
        $('.recently-added .error').hide();
        $('.recently-added table, .recently-added div.row').show();
        if (theme.utils.mqs.current_window === 'small') {
          _this.openMobileModal();
        } else {
          _this.slideDownCartDropdown();
        }
        return _this.startTimer();
      });
    };

    return Cart;

  })();

  Collection = (function() {
    function Collection() {
      DOC.on('change', '.tags-listbox', function() {
        var collFilters, newTags, query;
        newTags = [];
        collFilters = $(this);
        collFilters.each(function(index, element) {
          if ($(this).val()) {
            return newTags.push($(this).val());
          }
        });
        if (newTags.length) {
          query = newTags.join('+');
          return window.location.href = $(theme.collection.tag).attr('href').replace('tag', query);
        } else {
          if (theme.collection.handle) {
            return window.location.href = '/collections/' + theme.collection.handle;
          } else if (theme.collection.products.first_type === theme.collection.title) {
            return window.location.href = theme.collection.url_for_type;
          } else if (theme.collection.products.first_vendor === theme.collection.title) {
            return window.location.href = theme.collection.url_for_vendor;
          }
        }
      });
    }

    return Collection;

  })();

  theme.classes.ProductPage = (function() {
    function ProductPage(root) {
      var _this;
      this.root = root;
      this.cssGridFallback = bind(this.cssGridFallback, this);
      this.modalCloseListener = bind(this.modalCloseListener, this);
      this.resizeListeners = bind(this.resizeListeners, this);
      this.imageZoom = bind(this.imageZoom, this);
      this.getActiveImageId = bind(this.getActiveImageId, this);
      this.updateVariantImage = bind(this.updateVariantImage, this);
      this.thumbListener = bind(this.thumbListener, this);
      this.variantSelected = bind(this.variantSelected, this);
      this.sizeChart = bind(this.sizeChart, this);
      this.updateLowInStock = bind(this.updateLowInStock, this);
      this.getVariantQuantity = bind(this.getVariantQuantity, this);
      this.getLowInStockAmount = bind(this.getLowInStockAmount, this);
      this.getLowInStockMessage = bind(this.getLowInStockMessage, this);
      this.mobileModalHandler = bind(this.mobileModalHandler, this);
      this.load = bind(this.load, this);
      _this = this;
      _this.thumbs = _this.root.find('.product-page--thumb');
      _this.main_images = _this.root.find('.product-page--image');
      _this.zoom_images = _this.root.find('.product-page--zoom-image');
      _this.image_container = _this.root.find('.product-page--images-container');
      _this.magnify = parseFloat(_this.root.data('magnify'));
      _this.size_chart_enabled = _this.root.data('size-chart-enabled');
      _this.size_chart_option = _this.root.data('size-chart-option').toLowerCase();
      _this.load();
    }

    ProductPage.prototype.load = function() {
      var _this, photos;
      _this = this;
      _this.cssGridFallback();
      _this.thumbListener();
      _this.imageZoom();
      _this.resizeListeners();
      _this.modalCloseListener();
      _this.mobileModalHandler();
      _this.root.on('theme:section:load', function() {
        new Cart();
        new Accordion();
        new HorizontalTabs();
        new VerticalTabs();
        return new Shopify.OptionSelectors('variant-listbox', {
          product: product_json,
          onVariantSelected: _this.variantSelected,
          enableHistoryState: true
        });
      });
      photos = $('article .photos');
      DOC.on('click', '.size-chart-trigger', function(e) {
        e.preventDefault();
        return new Popup('size-chart-container');
      });
      photos.on('click', function() {
        return false;
      });
      $("article .custom.dropdown").hide();
      if (product_options_size === 1 && product_options_first !== "Title") {
        return $(".selector-wrapper:eq(0)").prepend("<label>" + product_options_first + "</label>");
      }
    };

    ProductPage.prototype.mobileModalHandler = function() {
      var _this, modal_links;
      _this = this;
      modal_links = _this.image_container.find('.modal--link');
      return modal_links.on('click', function(e) {
        if (theme.utils.mqs.current_window === 'small') {
          return e.stopImmediatePropagation();
        }
      });
    };

    ProductPage.prototype.getLowInStockMessage = function(quantity) {
      var _this, message;
      _this = this;
      message = quantity === 1 ? theme.products.low_in_stock.one : theme.products.low_in_stock.other;
      if (quantity > 1) {
        message = message.replace(/\d+/, quantity);
      }
      return message;
    };

    ProductPage.prototype.getLowInStockAmount = function() {
      var _this;
      _this = this;
      return _this.root.data('product-low-in-stock-amount');
    };

    ProductPage.prototype.getVariantQuantity = function(variant) {
      var option;
      option = $('#variant-listbox').find('[value="' + variant.id + '"]');
      if (option.length > 0) {
        return parseInt(option.data('inventory-quantity'));
      } else {
        return 'not available';
      }
    };

    ProductPage.prototype.updateLowInStock = function(variant) {
      var _this, quantity, threshold;
      _this = this;
      quantity = _this.getVariantQuantity(variant);
      threshold = _this.getLowInStockAmount();
      if (threshold === 'undefined') {
        return false;
      }
      if (quantity > 0 && quantity <= threshold) {
        $('.product-low-in-stock').html('<p>' + _this.getLowInStockMessage(quantity) + '</p>').show();
      } else {
        $('.product-low-in-stock').hide();
      }
      return DOC.on('.shopify-section section--products shopify:section:select', function() {
        return _this.updateLowInStock(variant);
      });
    };

    ProductPage.prototype.sizeChart = function(product_options) {
      var _this;
      _this = this;
      if (!_this.size_chart_enabled) {
        return;
      }
      return $('.selector-wrapper').each(function(index, element) {
        if (product_options[index].toLowerCase() === _this.size_chart_option && $(element).find('.size-chart-trigger').length === 0) {
          return $(element).append('<div class="font--block-link"><a class="size-chart-trigger" href="#">' + theme.products.size_chart.label + '</a></div>');
        }
      });
    };

    ProductPage.prototype.variantSelected = function(variant, selector, options) {
      var _this, actual_price, compare_price, show_low_in_stock;
      _this = this;
      $(".compare-price").html("");
      $('.product-unavailable [type="submit"]').prop("disabled", true);
      if (variant && variant.available) {
        $(".quanity-cart-row, .product-page--smart-payment-buttons").show();
        $('.product-unavailable').hide();
      } else {
        $(".quanity-cart-row, .product-page--smart-payment-buttons").hide();
        $('.product-unavailable').show();
        $('.product-low-in-stock').hide();
        $('.product-unavailable [type="submit"]').prop("disabled", false);
        if (product_variant_size > 1 && variant) {
          $('.product-unavailable form .email-body').attr('value', 'Please notify me when this is back in stock: ' + product_title + ' - ' + variant.title);
        }
      }
      if (variant) {
        actual_price = Shopify.formatMoney(variant.price, shop_money_format);
        $(".actual-price").replaceWith('<span class="actual-price money font--accent" itemprop="price">' + actual_price + '</span>');
        if (variant.compare_at_price > variant.price) {
          compare_price = Shopify.formatMoney(variant.compare_at_price, shop_money_format);
          $(".compare-price").html('<span class="money font--light-accent">' + compare_price + '</span>');
        }
        if (currency_switcher_enabled) {
          Currency.convertAll(shopCurrency, $('[name=currencies]').val());
        }
        if (variant.featured_image) {
          _this.updateVariantImage(variant.featured_image.id);
        }
      }
      show_low_in_stock = _this.getLowInStockAmount() === false ? false : true;
      if (show_low_in_stock === true) {
        _this.updateLowInStock(variant);
      }
      _this.sizeChart(selector.product.options);
    };

    ProductPage.prototype.thumbListener = function() {
      var _this;
      _this = this;
      return _this.thumbs.on('keypress click', function(e) {
        var variant_id;
        if (theme.utils.a11yClick(e)) {
          variant_id = $(this).data('id');
          _this.updateVariantImage(variant_id);
        }
        return _this.imageZoom();
      });
    };

    ProductPage.prototype.updateVariantImage = function(variant_id) {
      var _this, variant_image, variant_thumb;
      _this = this;
      _this.main_images.attr('data-active', 'false');
      variant_image = _this.main_images.filter('[data-id="' + variant_id + '"]');
      variant_image.attr('data-active', 'true');
      _this.thumbs.attr('data-active', 'false');
      variant_thumb = _this.thumbs.filter('[data-id="' + variant_id + '"]');
      variant_thumb.attr('data-active', 'true');
      return _this.imageZoom();
    };

    ProductPage.prototype.getActiveImageId = function() {
      var _this, active_image, active_image_id;
      _this = this;
      active_image = _this.main_images.filter('[data-active="true"]');
      active_image_id = active_image.data('id');
      return active_image_id;
    };

    ProductPage.prototype.imageZoom = function() {
      var _this, active_zoom_image, aspect_ratio, left_position, top_position, wrapper_height, wrapper_width, x_ratio, y_ratio;
      _this = this;
      if (_this.root.data('zoom-enabled') === false || _this.main_images.length < 1) {
        return;
      }
      _this.image_container.off('mouseenter.ProductPage.imageZoom');
      _this.image_container.off('mouseleave.ProductPage.imageZoom');
      _this.zoom_images.css('display', 'none');
      active_zoom_image = _this.zoom_images.filter('[data-id="' + _this.getActiveImageId() + '"]');
      aspect_ratio = active_zoom_image.data('aspect-ratio');
      wrapper_width = _this.image_container.width();
      wrapper_height = _this.image_container.height();
      active_zoom_image.find('.image--root').css('width', wrapper_width * _this.magnify);
      top_position = _this.image_container.offset().top;
      left_position = _this.image_container.offset().left;
      x_ratio = (wrapper_width * _this.magnify - wrapper_width) / wrapper_width;
      y_ratio = (wrapper_height * _this.magnify - wrapper_height) / wrapper_height;
      _this.image_container.on('mouseenter.ProductPage.imageZoom', function() {
        return active_zoom_image.css('display', 'block');
      });
      _this.image_container.on('mouseleave.ProductPage.imageZoom', function() {
        return active_zoom_image.css('display', 'none');
      });
      return _this.image_container.on('mousemove', function(e) {
        var relative_left, relative_top;
        relative_left = e.pageX - left_position;
        relative_top = e.pageY - top_position;
        return active_zoom_image.css({
          'left': relative_left * -x_ratio,
          'top': relative_top * -y_ratio
        });
      });
    };

    ProductPage.prototype.resizeListeners = function() {
      var _this;
      _this = this;
      return $(window).on('resize.ProductPage', theme.utils.debounce(100, function() {
        return _this.imageZoom();
      }));
    };

    ProductPage.prototype.modalCloseListener = function() {
      var _this;
      _this = this;
      return $(window).on('FrameworkModal.afterClose', function() {
        return _this.imageZoom();
      });
    };

    ProductPage.prototype.cssGridFallback = function() {
      var _this;
      _this = this;
      if (!Modernizr.cssgrid) {
        $('.product-page--title-n-vendor, .product-page--cart-form-block, .product-page--description').wrapAll('<div class="product-page--no-grid--left-column"></div>');
        return $('.product-page--images').wrapAll('<div class="product-page--no-grid--right-column"></div>');
      }
    };

    return ProductPage;

  })();

  theme.classes.Utils = (function(superClass) {
    extend(Utils, superClass);

    function Utils() {
      var _this;
      _this = this;
      _this.sections = new theme.classes.Sections();
      _this.mqs = new theme.classes.FrameworkMediaQueries();
    }

    Utils.prototype.transparentMenuIsEnabled = function() {
      return PAGE.find("[data-header--menu-transparent=true]").length > 0;
    };

    Utils.prototype.loadJsClasses = function() {
      return $('[data-js-class]').each(function() {
        var js_class, partial_class;
        js_class = $(this).attr('data-js-class');
        if ($(this).attr('data-js-loaded') !== 'true') {
          partial_class = theme.classes[js_class];
          if (typeof partial_class !== "undefined") {
            theme.partials[js_class] = new partial_class($(this));
            return $(this).attr('data-js-loaded', 'true');
          }
        }
      });
    };

    Utils.prototype.addSymbol = function(icon_name) {
      return '<svg class="fw--icon fw--icon--' + icon_name + '"> <use xlink:href="#fw--icon--' + icon_name + '" /> </svg>';
    };

    Utils.prototype.isIE11 = function() {
      if (!!window.MSInputMethodContext && !!document.documentMode) {
        return true;
      }
      return false;
    };

    return Utils;

  })(theme.classes.FrameworkUtils);

  PAGE = null;

  DOC = null;

  WINDOW = null;

  HEADER = null;

  touchevents_exist = null;

  mq_small = null;

  mq_medium = null;

  mq_large = null;

  log = null;

  current_window = '';

  jQuery(function($) {
    var first_article_img, isFirefox, page_content, pinterest_button;
    PAGE = $('body');
    DOC = $(document);
    WINDOW = $(window);
    HEADER = $('.main-header');
    touchevents_exist = Modernizr.touchevents;
    mq_small = 768;
    mq_medium = 1280;
    mq_large = 1440;
    theme.utils = new theme.classes.Utils();
    if (general_external_links_enabled) {
      $('a[href^="http"]').not('a[href^="' + shop_url + '"]').attr('target', '_blank');
    }
    new Popup('popup');
    new Footer($('.footer'));
    new Accordion();
    new HorizontalTabs();
    new VerticalTabs();
    theme.partials.cart = new Cart();
    new PromoBar($('.promo-bar'));
    if (PAGE.hasClass('template-page')) {
      page_content = $('.page-content .rte-content');
      if (page_content.find('.left-side-column').length || page_content.find('.right-side-column').length) {
        if (page_content.find('.left-side-column').length && page_content.find('.right-side-column').length) {
          page_content.wrapInner("<div class='main-column with-2-sidebars'></div>");
          $('.left-side-column').addClass('with-2-sidebars');
          $('.right-side-column').addClass('with-2-sidebars');
        } else {
          page_content.wrapInner("<div class='main-column'></div>");
        }
        $('.left-side-column').prependTo(page_content);
        $('.right-side-column').appendTo(page_content);
      }
    }
    if (PAGE.hasClass('template-index')) {
      $('.slider').each(function() {
        return new FullscreenSlider($(this).find('.slides'));
      });
      $('.product-slider').each(function() {
        return new ProductSlider($(this));
      });
    }
    if (PAGE.hasClass('template-collection')) {
      new Collection();
    }
    if (PAGE.hasClass('template-article')) {
      pinterest_button = $('.social-share .pinterest');
      first_article_img = $('.article img').first().attr('src');
      pinterest_button.attr('href', pinterest_button.attr('href') + '&media=' + first_article_img);
    }
    if (PAGE.hasClass('template-password')) {
      $(document).on('click', '.password--login-link', function() {
        $(this).css('visibility', 'hidden');
        $('.password--main').hide();
        $('.password--login-form').css('visibility', 'visible');
        $('.password--login-form input[type="password"]').focus();
        return false;
      }).on('click', '.password--login-form .cancel', function() {
        $('.password--login-link').css('visibility', 'visible');
        $('.password--main').fadeIn();
        $('.password--login-form').css('visibility', 'hidden');
        return false;
      });
      if ($('.password--login-form .errors').size()) {
        $('.password--login-link').click();
      }
    }
    isFirefox = typeof InstallTrigger !== "undefined";
    if (isFirefox) {
      $('img').addClass('image-scale-hack');
    }
    if (touchevents_exist) {
      $("form.custom .hidden-field").removeClass('hidden-field');
    }
    current_window = '';
    new MediaQueries();
    $('.hide-until-js').show();
    DOC.on('shopify:section:load', function(e) {
      var section_wrapper;
      section_wrapper = $(e.target).closest('.shopify-section');
      section_wrapper.css('min-height', '2000px');
      if (section_wrapper.hasClass('section--slideshow')) {
        new FullscreenSlider($(e.target).find('.slides'));
      } else if (section_wrapper.hasClass('section--featured-collection')) {
        new ProductSlider($(e.target).find('.product-slider'));
      } else if (section_wrapper.hasClass('section--header')) {
        setTimeout(function() {
          if ($('.slider').length > 0) {
            return DOC.trigger('header.transparentMenuIsUpdated');
          }
        }, 0);
        new PromoBar($('.promo-bar'));
      } else if (section_wrapper.hasClass('section--products')) {
        DOC.trigger('set-option-selectors');
      }
      return section_wrapper.css('min-height', 'auto');
    });
    DOC.on('shopify:section:unload', function(e) {
      var mask, section_wrapper;
      section_wrapper = $(e.target).closest('.shopify-section');
      if (section_wrapper.hasClass('section--featured-collection')) {
        return setTimeout((function() {
          if ($('.section--featured-collection').length === 0) {
            return WINDOW.off("resize.ProductSlider");
          }
        }), 0);
      } else if (section_wrapper.hasClass('section--products')) {
        mask = $(".popup-modal-mask");
        $(".size-chart").remove();
        if (mask.is(":visible")) {
          return mask.trigger("click");
        }
      } else if (section_wrapper.hasClass('section--slideshow')) {
        return setTimeout(function() {
          if ($('.slider').length === 0) {
            return DOC.off('header.transparentMenuIsUpdated');
          }
        }, 0);
      }
    });
    DOC.on('shopify:block:select', function(e) {
      var section_wrapper, slide_selected;
      section_wrapper = $(e.target).closest('.shopify-section');
      if (section_wrapper.hasClass('section--slideshow')) {
        slide_selected = section_wrapper.find('.slide').index(e.target);
        return $(e.target).closest('.owl-carousel').trigger('owl.jumpTo', slide_selected).trigger('owl.stop');
      }
    });
    DOC.on('shopify:section:deselect', function(e) {
      var section_wrapper, should_autoplay, slider;
      section_wrapper = $(e.target).closest('.shopify-section');
      if (section_wrapper.hasClass('section--slideshow')) {
        should_autoplay = section_wrapper.find('.slider').data('autoplay');
        if (should_autoplay === true) {
          slider = section_wrapper.find('.slides');
          return slider.trigger('owl.play', section_wrapper.find('.slider').data('rotateFrequency'));
        }
      }
    });
    theme.utils.loadJsClasses();
    return false;
  });

}).call(this);
