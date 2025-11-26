/*! For license information please see main.b1cdb184.js.LICENSE.txt */
(()=>{var e={43:(e,t,n)=>{"use strict";e.exports=n(202)},153:(e,t,n)=>{"use strict";var r=n(43),o=Symbol.for("react.element"),a=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,n){var r,a={},u=null,c=null;for(r in void 0!==n&&(u=""+n),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(c=t.ref),t)i.call(t,r)&&!s.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===a[r]&&(a[r]=t[r]);return{$$typeof:o,type:e,key:u,ref:c,props:a,_owner:l.current}}t.jsx=u,t.jsxs=u},202:(e,t)=>{"use strict";var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),s=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),p=Symbol.iterator;var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,g={};function b(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||h}function v(){}function y(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||h}b.prototype.isReactComponent={},b.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=b.prototype;var x=y.prototype=new v;x.constructor=y,m(x,b.prototype),x.isPureReactComponent=!0;var w=Array.isArray,S=Object.prototype.hasOwnProperty,k={current:null},E={key:!0,ref:!0,__self:!0,__source:!0};function j(e,t,r){var o,a={},i=null,l=null;if(null!=t)for(o in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(i=""+t.key),t)S.call(t,o)&&!E.hasOwnProperty(o)&&(a[o]=t[o]);var s=arguments.length-2;if(1===s)a.children=r;else if(1<s){for(var u=Array(s),c=0;c<s;c++)u[c]=arguments[c+2];a.children=u}if(e&&e.defaultProps)for(o in s=e.defaultProps)void 0===a[o]&&(a[o]=s[o]);return{$$typeof:n,type:e,key:i,ref:l,props:a,_owner:k.current}}function C(e){return"object"===typeof e&&null!==e&&e.$$typeof===n}var _=/\/+/g;function R(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(e){return t[e]})}(""+e.key):t.toString(36)}function P(e,t,o,a,i){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var s=!1;if(null===e)s=!0;else switch(l){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case n:case r:s=!0}}if(s)return i=i(s=e),e=""===a?"."+R(s,0):a,w(i)?(o="",null!=e&&(o=e.replace(_,"$&/")+"/"),P(i,t,o,"",function(e){return e})):null!=i&&(C(i)&&(i=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,o+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(_,"$&/")+"/")+e)),t.push(i)),1;if(s=0,a=""===a?".":a+":",w(e))for(var u=0;u<e.length;u++){var c=a+R(l=e[u],u);s+=P(l,t,o,c,i)}else if(c=function(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"===typeof c)for(e=c.call(e),u=0;!(l=e.next()).done;)s+=P(l=l.value,t,o,c=a+R(l,u++),i);else if("object"===l)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function T(e,t,n){if(null==e)return e;var r=[],o=0;return P(e,r,"","",function(e){return t.call(n,e,o++)}),r}function O(e){if(-1===e._status){var t=e._result;(t=t()).then(function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)},function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)}),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var N={current:null},L={transition:null},z={ReactCurrentDispatcher:N,ReactCurrentBatchConfig:L,ReactCurrentOwner:k};function A(){throw Error("act(...) is not supported in production builds of React.")}t.Children={map:T,forEach:function(e,t,n){T(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return T(e,function(){t++}),t},toArray:function(e){return T(e,function(e){return e})||[]},only:function(e){if(!C(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=b,t.Fragment=o,t.Profiler=i,t.PureComponent=y,t.StrictMode=a,t.Suspense=c,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=z,t.act=A,t.cloneElement=function(e,t,r){if(null===e||void 0===e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=m({},e.props),a=e.key,i=e.ref,l=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,l=k.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)S.call(t,u)&&!E.hasOwnProperty(u)&&(o[u]=void 0===t[u]&&void 0!==s?s[u]:t[u])}var u=arguments.length-2;if(1===u)o.children=r;else if(1<u){s=Array(u);for(var c=0;c<u;c++)s[c]=arguments[c+2];o.children=s}return{$$typeof:n,type:e.type,key:a,ref:i,props:o,_owner:l}},t.createContext=function(e){return(e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:l,_context:e},e.Consumer=e},t.createElement=j,t.createFactory=function(e){var t=j.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:u,render:e}},t.isValidElement=C,t.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:O}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=L.transition;L.transition={};try{e()}finally{L.transition=t}},t.unstable_act=A,t.useCallback=function(e,t){return N.current.useCallback(e,t)},t.useContext=function(e){return N.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return N.current.useDeferredValue(e)},t.useEffect=function(e,t){return N.current.useEffect(e,t)},t.useId=function(){return N.current.useId()},t.useImperativeHandle=function(e,t,n){return N.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return N.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return N.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return N.current.useMemo(e,t)},t.useReducer=function(e,t,n){return N.current.useReducer(e,t,n)},t.useRef=function(e){return N.current.useRef(e)},t.useState=function(e){return N.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return N.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return N.current.useTransition()},t.version="18.3.1"},234:(e,t)=>{"use strict";function n(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,o=e[r];if(!(0<a(o,t)))break e;e[r]=t,e[n]=o,n=r}}function r(e){return 0===e.length?null:e[0]}function o(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,o=e.length,i=o>>>1;r<i;){var l=2*(r+1)-1,s=e[l],u=l+1,c=e[u];if(0>a(s,n))u<o&&0>a(c,s)?(e[r]=c,e[u]=n,r=u):(e[r]=s,e[l]=n,r=l);else{if(!(u<o&&0>a(c,n)))break e;e[r]=c,e[u]=n,r=u}}}return t}function a(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if("object"===typeof performance&&"function"===typeof performance.now){var i=performance;t.unstable_now=function(){return i.now()}}else{var l=Date,s=l.now();t.unstable_now=function(){return l.now()-s}}var u=[],c=[],d=1,f=null,p=3,h=!1,m=!1,g=!1,b="function"===typeof setTimeout?setTimeout:null,v="function"===typeof clearTimeout?clearTimeout:null,y="undefined"!==typeof setImmediate?setImmediate:null;function x(e){for(var t=r(c);null!==t;){if(null===t.callback)o(c);else{if(!(t.startTime<=e))break;o(c),t.sortIndex=t.expirationTime,n(u,t)}t=r(c)}}function w(e){if(g=!1,x(e),!m)if(null!==r(u))m=!0,L(S);else{var t=r(c);null!==t&&z(w,t.startTime-e)}}function S(e,n){m=!1,g&&(g=!1,v(C),C=-1),h=!0;var a=p;try{for(x(n),f=r(u);null!==f&&(!(f.expirationTime>n)||e&&!P());){var i=f.callback;if("function"===typeof i){f.callback=null,p=f.priorityLevel;var l=i(f.expirationTime<=n);n=t.unstable_now(),"function"===typeof l?f.callback=l:f===r(u)&&o(u),x(n)}else o(u);f=r(u)}if(null!==f)var s=!0;else{var d=r(c);null!==d&&z(w,d.startTime-n),s=!1}return s}finally{f=null,p=a,h=!1}}"undefined"!==typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);var k,E=!1,j=null,C=-1,_=5,R=-1;function P(){return!(t.unstable_now()-R<_)}function T(){if(null!==j){var e=t.unstable_now();R=e;var n=!0;try{n=j(!0,e)}finally{n?k():(E=!1,j=null)}}else E=!1}if("function"===typeof y)k=function(){y(T)};else if("undefined"!==typeof MessageChannel){var O=new MessageChannel,N=O.port2;O.port1.onmessage=T,k=function(){N.postMessage(null)}}else k=function(){b(T,0)};function L(e){j=e,E||(E=!0,k())}function z(e,n){C=b(function(){e(t.unstable_now())},n)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_continueExecution=function(){m||h||(m=!0,L(S))},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_=0<e?Math.floor(1e3/e):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return r(u)},t.unstable_next=function(e){switch(p){case 1:case 2:case 3:var t=3;break;default:t=p}var n=p;p=t;try{return e()}finally{p=n}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=p;p=e;try{return t()}finally{p=n}},t.unstable_scheduleCallback=function(e,o,a){var i=t.unstable_now();switch("object"===typeof a&&null!==a?a="number"===typeof(a=a.delay)&&0<a?i+a:i:a=i,e){case 1:var l=-1;break;case 2:l=250;break;case 5:l=1073741823;break;case 4:l=1e4;break;default:l=5e3}return e={id:d++,callback:o,priorityLevel:e,startTime:a,expirationTime:l=a+l,sortIndex:-1},a>i?(e.sortIndex=a,n(c,e),null===r(u)&&e===r(c)&&(g?(v(C),C=-1):g=!0,z(w,a-i))):(e.sortIndex=l,n(u,e),m||h||(m=!0,L(S))),e},t.unstable_shouldYield=P,t.unstable_wrapCallback=function(e){var t=p;return function(){var n=p;p=t;try{return e.apply(this,arguments)}finally{p=n}}}},324:e=>{e.exports=function(e,t,n,r){var o=n?n.call(r,e,t):void 0;if(void 0!==o)return!!o;if(e===t)return!0;if("object"!==typeof e||!e||"object"!==typeof t||!t)return!1;var a=Object.keys(e),i=Object.keys(t);if(a.length!==i.length)return!1;for(var l=Object.prototype.hasOwnProperty.bind(t),s=0;s<a.length;s++){var u=a[s];if(!l(u))return!1;var c=e[u],d=t[u];if(!1===(o=n?n.call(r,c,d,u):void 0)||void 0===o&&c!==d)return!1}return!0}},391:(e,t,n)=>{"use strict";var r=n(950);t.createRoot=r.createRoot,t.hydrateRoot=r.hydrateRoot},579:(e,t,n)=>{"use strict";e.exports=n(153)},730:(e,t,n)=>{"use strict";var r=n(43),o=n(853);function a(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,l={};function s(e,t){u(e,t),u(e+"Capture",t)}function u(e,t){for(l[e]=t,e=0;e<t.length;e++)i.add(t[e])}var c=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),d=Object.prototype.hasOwnProperty,f=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,p={},h={};function m(e,t,n,r,o,a,i){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=i}var g={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){g[e]=new m(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];g[t]=new m(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){g[e]=new m(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){g[e]=new m(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){g[e]=new m(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){g[e]=new m(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){g[e]=new m(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){g[e]=new m(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){g[e]=new m(e,5,!1,e.toLowerCase(),null,!1,!1)});var b=/[\-:]([a-z])/g;function v(e){return e[1].toUpperCase()}function y(e,t,n,r){var o=g.hasOwnProperty(t)?g[t]:null;(null!==o?0!==o.type:r||!(2<t.length)||"o"!==t[0]&&"O"!==t[0]||"n"!==t[1]&&"N"!==t[1])&&(function(e,t,n,r){if(null===t||"undefined"===typeof t||function(e,t,n,r){if(null!==n&&0===n.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return!r&&(null!==n?!n.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e);default:return!1}}(e,t,n,r))return!0;if(r)return!1;if(null!==n)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(t,n,o,r)&&(n=null),r||null===o?function(e){return!!d.call(h,e)||!d.call(p,e)&&(f.test(e)?h[e]=!0:(p[e]=!0,!1))}(t)&&(null===n?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=null===n?3!==o.type&&"":n:(t=o.attributeName,r=o.attributeNamespace,null===n?e.removeAttribute(t):(n=3===(o=o.type)||4===o&&!0===n?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(b,v);g[t]=new m(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(b,v);g[t]=new m(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(b,v);g[t]=new m(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){g[e]=new m(e,1,!1,e.toLowerCase(),null,!1,!1)}),g.xlinkHref=new m("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){g[e]=new m(e,1,!1,e.toLowerCase(),null,!0,!0)});var x=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,w=Symbol.for("react.element"),S=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),E=Symbol.for("react.strict_mode"),j=Symbol.for("react.profiler"),C=Symbol.for("react.provider"),_=Symbol.for("react.context"),R=Symbol.for("react.forward_ref"),P=Symbol.for("react.suspense"),T=Symbol.for("react.suspense_list"),O=Symbol.for("react.memo"),N=Symbol.for("react.lazy");Symbol.for("react.scope"),Symbol.for("react.debug_trace_mode");var L=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden"),Symbol.for("react.cache"),Symbol.for("react.tracing_marker");var z=Symbol.iterator;function A(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=z&&e[z]||e["@@iterator"])?e:null}var D,F=Object.assign;function I(e){if(void 0===D)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);D=t&&t[1]||""}return"\n"+D+e}var U=!1;function $(e,t){if(!e||U)return"";U=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&"string"===typeof u.stack){for(var o=u.stack.split("\n"),a=r.stack.split("\n"),i=o.length-1,l=a.length-1;1<=i&&0<=l&&o[i]!==a[l];)l--;for(;1<=i&&0<=l;i--,l--)if(o[i]!==a[l]){if(1!==i||1!==l)do{if(i--,0>--l||o[i]!==a[l]){var s="\n"+o[i].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}}while(1<=i&&0<=l);break}}}finally{U=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?I(e):""}function M(e){switch(e.tag){case 5:return I(e.type);case 16:return I("Lazy");case 13:return I("Suspense");case 19:return I("SuspenseList");case 0:case 2:case 15:return e=$(e.type,!1);case 11:return e=$(e.type.render,!1);case 1:return e=$(e.type,!0);default:return""}}function B(e){if(null==e)return null;if("function"===typeof e)return e.displayName||e.name||null;if("string"===typeof e)return e;switch(e){case k:return"Fragment";case S:return"Portal";case j:return"Profiler";case E:return"StrictMode";case P:return"Suspense";case T:return"SuspenseList"}if("object"===typeof e)switch(e.$$typeof){case _:return(e.displayName||"Context")+".Consumer";case C:return(e._context.displayName||"Context")+".Provider";case R:var t=e.render;return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case O:return null!==(t=e.displayName||null)?t:B(e.type)||"Memo";case N:t=e._payload,e=e._init;try{return B(e(t))}catch(n){}}return null}function W(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=(e=t.render).displayName||e.name||"",t.displayName||(""!==e?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return B(t);case 8:return t===E?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"===typeof t)return t.displayName||t.name||null;if("string"===typeof t)return t}return null}function H(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function V(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function K(e){e._valueTracker||(e._valueTracker=function(e){var t=V(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&"undefined"!==typeof n&&"function"===typeof n.get&&"function"===typeof n.set){var o=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(e){r=""+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function q(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=V(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function Q(e){if("undefined"===typeof(e=e||("undefined"!==typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}function X(e,t){var n=t.checked;return F({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=n?n:e._wrapperState.initialChecked})}function G(e,t){var n=null==t.defaultValue?"":t.defaultValue,r=null!=t.checked?t.checked:t.defaultChecked;n=H(null!=t.value?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function Y(e,t){null!=(t=t.checked)&&y(e,"checked",t,!1)}function J(e,t){Y(e,t);var n=H(t.value),r=t.type;if(null!=n)"number"===r?(0===n&&""===e.value||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if("submit"===r||"reset"===r)return void e.removeAttribute("value");t.hasOwnProperty("value")?ee(e,t.type,n):t.hasOwnProperty("defaultValue")&&ee(e,t.type,H(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function Z(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!("submit"!==r&&"reset"!==r||void 0!==t.value&&null!==t.value))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}""!==(n=e.name)&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,""!==n&&(e.name=n)}function ee(e,t,n){"number"===t&&Q(e.ownerDocument)===e||(null==n?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var te=Array.isArray;function ne(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+H(n),t=null,o=0;o<e.length;o++){if(e[o].value===n)return e[o].selected=!0,void(r&&(e[o].defaultSelected=!0));null!==t||e[o].disabled||(t=e[o])}null!==t&&(t.selected=!0)}}function re(e,t){if(null!=t.dangerouslySetInnerHTML)throw Error(a(91));return F({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function oe(e,t){var n=t.value;if(null==n){if(n=t.children,t=t.defaultValue,null!=n){if(null!=t)throw Error(a(92));if(te(n)){if(1<n.length)throw Error(a(93));n=n[0]}t=n}null==t&&(t=""),n=t}e._wrapperState={initialValue:H(n)}}function ae(e,t){var n=H(t.value),r=H(t.defaultValue);null!=n&&((n=""+n)!==e.value&&(e.value=n),null==t.defaultValue&&e.defaultValue!==n&&(e.defaultValue=n)),null!=r&&(e.defaultValue=""+r)}function ie(e){var t=e.textContent;t===e._wrapperState.initialValue&&""!==t&&null!==t&&(e.value=t)}function le(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function se(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?le(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}var ue,ce,de=(ce=function(e,t){if("http://www.w3.org/2000/svg"!==e.namespaceURI||"innerHTML"in e)e.innerHTML=t;else{for((ue=ue||document.createElement("div")).innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ue.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}},"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(e,t,n,r){MSApp.execUnsafeLocalFunction(function(){return ce(e,t)})}:ce);function fe(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var pe={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},he=["Webkit","ms","Moz","O"];function me(e,t,n){return null==t||"boolean"===typeof t||""===t?"":n||"number"!==typeof t||0===t||pe.hasOwnProperty(e)&&pe[e]?(""+t).trim():t+"px"}function ge(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var r=0===n.indexOf("--"),o=me(n,t[n],r);"float"===n&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}Object.keys(pe).forEach(function(e){he.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),pe[t]=pe[e]})});var be=F({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ve(e,t){if(t){if(be[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML))throw Error(a(137,e));if(null!=t.dangerouslySetInnerHTML){if(null!=t.children)throw Error(a(60));if("object"!==typeof t.dangerouslySetInnerHTML||!("__html"in t.dangerouslySetInnerHTML))throw Error(a(61))}if(null!=t.style&&"object"!==typeof t.style)throw Error(a(62))}}function ye(e,t){if(-1===e.indexOf("-"))return"string"===typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xe=null;function we(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var Se=null,ke=null,Ee=null;function je(e){if(e=xo(e)){if("function"!==typeof Se)throw Error(a(280));var t=e.stateNode;t&&(t=So(t),Se(e.stateNode,e.type,t))}}function Ce(e){ke?Ee?Ee.push(e):Ee=[e]:ke=e}function _e(){if(ke){var e=ke,t=Ee;if(Ee=ke=null,je(e),t)for(e=0;e<t.length;e++)je(t[e])}}function Re(e,t){return e(t)}function Pe(){}var Te=!1;function Oe(e,t,n){if(Te)return e(t,n);Te=!0;try{return Re(e,t,n)}finally{Te=!1,(null!==ke||null!==Ee)&&(Pe(),_e())}}function Ne(e,t){var n=e.stateNode;if(null===n)return null;var r=So(n);if(null===r)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r;break e;default:e=!1}if(e)return null;if(n&&"function"!==typeof n)throw Error(a(231,t,typeof n));return n}var Le=!1;if(c)try{var ze={};Object.defineProperty(ze,"passive",{get:function(){Le=!0}}),window.addEventListener("test",ze,ze),window.removeEventListener("test",ze,ze)}catch(ce){Le=!1}function Ae(e,t,n,r,o,a,i,l,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var De=!1,Fe=null,Ie=!1,Ue=null,$e={onError:function(e){De=!0,Fe=e}};function Me(e,t,n,r,o,a,i,l,s){De=!1,Fe=null,Ae.apply($e,arguments)}function Be(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{0!==(4098&(t=e).flags)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function We(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function He(e){if(Be(e)!==e)throw Error(a(188))}function Ve(e){return null!==(e=function(e){var t=e.alternate;if(!t){if(null===(t=Be(e)))throw Error(a(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(null===o)break;var i=o.alternate;if(null===i){if(null!==(r=o.return)){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return He(o),e;if(i===r)return He(o),t;i=i.sibling}throw Error(a(188))}if(n.return!==r.return)n=o,r=i;else{for(var l=!1,s=o.child;s;){if(s===n){l=!0,n=o,r=i;break}if(s===r){l=!0,r=o,n=i;break}s=s.sibling}if(!l){for(s=i.child;s;){if(s===n){l=!0,n=i,r=o;break}if(s===r){l=!0,r=i,n=o;break}s=s.sibling}if(!l)throw Error(a(189))}}if(n.alternate!==r)throw Error(a(190))}if(3!==n.tag)throw Error(a(188));return n.stateNode.current===n?e:t}(e))?Ke(e):null}function Ke(e){if(5===e.tag||6===e.tag)return e;for(e=e.child;null!==e;){var t=Ke(e);if(null!==t)return t;e=e.sibling}return null}var qe=o.unstable_scheduleCallback,Qe=o.unstable_cancelCallback,Xe=o.unstable_shouldYield,Ge=o.unstable_requestPaint,Ye=o.unstable_now,Je=o.unstable_getCurrentPriorityLevel,Ze=o.unstable_ImmediatePriority,et=o.unstable_UserBlockingPriority,tt=o.unstable_NormalPriority,nt=o.unstable_LowPriority,rt=o.unstable_IdlePriority,ot=null,at=null;var it=Math.clz32?Math.clz32:function(e){return e>>>=0,0===e?32:31-(lt(e)/st|0)|0},lt=Math.log,st=Math.LN2;var ut=64,ct=4194304;function dt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194240&e;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return 130023424&e;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ft(e,t){var n=e.pendingLanes;if(0===n)return 0;var r=0,o=e.suspendedLanes,a=e.pingedLanes,i=268435455&n;if(0!==i){var l=i&~o;0!==l?r=dt(l):0!==(a&=i)&&(r=dt(a))}else 0!==(i=n&~o)?r=dt(i):0!==a&&(r=dt(a));if(0===r)return 0;if(0!==t&&t!==r&&0===(t&o)&&((o=r&-r)>=(a=t&-t)||16===o&&0!==(4194240&a)))return t;if(0!==(4&r)&&(r|=16&n),0!==(t=e.entangledLanes))for(e=e.entanglements,t&=r;0<t;)o=1<<(n=31-it(t)),r|=e[n],t&=~o;return r}function pt(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return-1}}function ht(e){return 0!==(e=-1073741825&e.pendingLanes)?e:1073741824&e?1073741824:0}function mt(){var e=ut;return 0===(4194240&(ut<<=1))&&(ut=64),e}function gt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function bt(e,t,n){e.pendingLanes|=t,536870912!==t&&(e.suspendedLanes=0,e.pingedLanes=0),(e=e.eventTimes)[t=31-it(t)]=n}function vt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-it(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var yt=0;function xt(e){return 1<(e&=-e)?4<e?0!==(268435455&e)?16:536870912:4:1}var wt,St,kt,Et,jt,Ct=!1,_t=[],Rt=null,Pt=null,Tt=null,Ot=new Map,Nt=new Map,Lt=[],zt="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function At(e,t){switch(e){case"focusin":case"focusout":Rt=null;break;case"dragenter":case"dragleave":Pt=null;break;case"mouseover":case"mouseout":Tt=null;break;case"pointerover":case"pointerout":Ot.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Nt.delete(t.pointerId)}}function Dt(e,t,n,r,o,a){return null===e||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[o]},null!==t&&(null!==(t=xo(t))&&St(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,null!==o&&-1===t.indexOf(o)&&t.push(o),e)}function Ft(e){var t=yo(e.target);if(null!==t){var n=Be(t);if(null!==n)if(13===(t=n.tag)){if(null!==(t=We(n)))return e.blockedOn=t,void jt(e.priority,function(){kt(n)})}else if(3===t&&n.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function It(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=Xt(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(null!==n)return null!==(t=xo(n))&&St(t),e.blockedOn=n,!1;var r=new(n=e.nativeEvent).constructor(n.type,n);xe=r,n.target.dispatchEvent(r),xe=null,t.shift()}return!0}function Ut(e,t,n){It(e)&&n.delete(t)}function $t(){Ct=!1,null!==Rt&&It(Rt)&&(Rt=null),null!==Pt&&It(Pt)&&(Pt=null),null!==Tt&&It(Tt)&&(Tt=null),Ot.forEach(Ut),Nt.forEach(Ut)}function Mt(e,t){e.blockedOn===t&&(e.blockedOn=null,Ct||(Ct=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,$t)))}function Bt(e){function t(t){return Mt(t,e)}if(0<_t.length){Mt(_t[0],e);for(var n=1;n<_t.length;n++){var r=_t[n];r.blockedOn===e&&(r.blockedOn=null)}}for(null!==Rt&&Mt(Rt,e),null!==Pt&&Mt(Pt,e),null!==Tt&&Mt(Tt,e),Ot.forEach(t),Nt.forEach(t),n=0;n<Lt.length;n++)(r=Lt[n]).blockedOn===e&&(r.blockedOn=null);for(;0<Lt.length&&null===(n=Lt[0]).blockedOn;)Ft(n),null===n.blockedOn&&Lt.shift()}var Wt=x.ReactCurrentBatchConfig,Ht=!0;function Vt(e,t,n,r){var o=yt,a=Wt.transition;Wt.transition=null;try{yt=1,qt(e,t,n,r)}finally{yt=o,Wt.transition=a}}function Kt(e,t,n,r){var o=yt,a=Wt.transition;Wt.transition=null;try{yt=4,qt(e,t,n,r)}finally{yt=o,Wt.transition=a}}function qt(e,t,n,r){if(Ht){var o=Xt(e,t,n,r);if(null===o)Hr(e,t,r,Qt,n),At(e,r);else if(function(e,t,n,r,o){switch(t){case"focusin":return Rt=Dt(Rt,e,t,n,r,o),!0;case"dragenter":return Pt=Dt(Pt,e,t,n,r,o),!0;case"mouseover":return Tt=Dt(Tt,e,t,n,r,o),!0;case"pointerover":var a=o.pointerId;return Ot.set(a,Dt(Ot.get(a)||null,e,t,n,r,o)),!0;case"gotpointercapture":return a=o.pointerId,Nt.set(a,Dt(Nt.get(a)||null,e,t,n,r,o)),!0}return!1}(o,e,t,n,r))r.stopPropagation();else if(At(e,r),4&t&&-1<zt.indexOf(e)){for(;null!==o;){var a=xo(o);if(null!==a&&wt(a),null===(a=Xt(e,t,n,r))&&Hr(e,t,r,Qt,n),a===o)break;o=a}null!==o&&r.stopPropagation()}else Hr(e,t,r,null,n)}}var Qt=null;function Xt(e,t,n,r){if(Qt=null,null!==(e=yo(e=we(r))))if(null===(t=Be(e)))e=null;else if(13===(n=t.tag)){if(null!==(e=We(t)))return e;e=null}else if(3===n){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Qt=e,null}function Gt(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Je()){case Ze:return 1;case et:return 4;case tt:case nt:return 16;case rt:return 536870912;default:return 16}default:return 16}}var Yt=null,Jt=null,Zt=null;function en(){if(Zt)return Zt;var e,t,n=Jt,r=n.length,o="value"in Yt?Yt.value:Yt.textContent,a=o.length;for(e=0;e<r&&n[e]===o[e];e++);var i=r-e;for(t=1;t<=i&&n[r-t]===o[a-t];t++);return Zt=o.slice(e,1<t?1-t:void 0)}function tn(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function nn(){return!0}function rn(){return!1}function on(e){function t(t,n,r,o,a){for(var i in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=o,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(i)&&(t=e[i],this[i]=t?t(o):o[i]);return this.isDefaultPrevented=(null!=o.defaultPrevented?o.defaultPrevented:!1===o.returnValue)?nn:rn,this.isPropagationStopped=rn,this}return F(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!==typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=nn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!==typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=nn)},persist:function(){},isPersistent:nn}),t}var an,ln,sn,un={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},cn=on(un),dn=F({},un,{view:0,detail:0}),fn=on(dn),pn=F({},dn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:jn,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==sn&&(sn&&"mousemove"===e.type?(an=e.screenX-sn.screenX,ln=e.screenY-sn.screenY):ln=an=0,sn=e),an)},movementY:function(e){return"movementY"in e?e.movementY:ln}}),hn=on(pn),mn=on(F({},pn,{dataTransfer:0})),gn=on(F({},dn,{relatedTarget:0})),bn=on(F({},un,{animationName:0,elapsedTime:0,pseudoElement:0})),vn=F({},un,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),yn=on(vn),xn=on(F({},un,{data:0})),wn={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Sn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},kn={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function En(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=kn[e])&&!!t[e]}function jn(){return En}var Cn=F({},dn,{key:function(e){if(e.key){var t=wn[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=tn(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?Sn[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:jn,charCode:function(e){return"keypress"===e.type?tn(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?tn(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}}),_n=on(Cn),Rn=on(F({},pn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Pn=on(F({},dn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:jn})),Tn=on(F({},un,{propertyName:0,elapsedTime:0,pseudoElement:0})),On=F({},pn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Nn=on(On),Ln=[9,13,27,32],zn=c&&"CompositionEvent"in window,An=null;c&&"documentMode"in document&&(An=document.documentMode);var Dn=c&&"TextEvent"in window&&!An,Fn=c&&(!zn||An&&8<An&&11>=An),In=String.fromCharCode(32),Un=!1;function $n(e,t){switch(e){case"keyup":return-1!==Ln.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Mn(e){return"object"===typeof(e=e.detail)&&"data"in e?e.data:null}var Bn=!1;var Wn={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Hn(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!Wn[e.type]:"textarea"===t}function Vn(e,t,n,r){Ce(r),0<(t=Kr(t,"onChange")).length&&(n=new cn("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Kn=null,qn=null;function Qn(e){Ir(e,0)}function Xn(e){if(q(wo(e)))return e}function Gn(e,t){if("change"===e)return t}var Yn=!1;if(c){var Jn;if(c){var Zn="oninput"in document;if(!Zn){var er=document.createElement("div");er.setAttribute("oninput","return;"),Zn="function"===typeof er.oninput}Jn=Zn}else Jn=!1;Yn=Jn&&(!document.documentMode||9<document.documentMode)}function tr(){Kn&&(Kn.detachEvent("onpropertychange",nr),qn=Kn=null)}function nr(e){if("value"===e.propertyName&&Xn(qn)){var t=[];Vn(t,qn,e,we(e)),Oe(Qn,t)}}function rr(e,t,n){"focusin"===e?(tr(),qn=n,(Kn=t).attachEvent("onpropertychange",nr)):"focusout"===e&&tr()}function or(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return Xn(qn)}function ar(e,t){if("click"===e)return Xn(t)}function ir(e,t){if("input"===e||"change"===e)return Xn(t)}var lr="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t};function sr(e,t){if(lr(e,t))return!0;if("object"!==typeof e||null===e||"object"!==typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!d.call(t,o)||!lr(e[o],t[o]))return!1}return!0}function ur(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function cr(e,t){var n,r=ur(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=ur(r)}}function dr(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?dr(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function fr(){for(var e=window,t=Q();t instanceof e.HTMLIFrameElement;){try{var n="string"===typeof t.contentWindow.location.href}catch(r){n=!1}if(!n)break;t=Q((e=t.contentWindow).document)}return t}function pr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}function hr(e){var t=fr(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&dr(n.ownerDocument.documentElement,n)){if(null!==r&&pr(n))if(t=r.start,void 0===(e=r.end)&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if((e=(t=n.ownerDocument||document)&&t.defaultView||window).getSelection){e=e.getSelection();var o=n.textContent.length,a=Math.min(r.start,o);r=void 0===r.end?a:Math.min(r.end,o),!e.extend&&a>r&&(o=r,r=a,a=o),o=cr(n,a);var i=cr(n,r);o&&i&&(1!==e.rangeCount||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&((t=t.createRange()).setStart(o.node,o.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}for(t=[],e=n;e=e.parentNode;)1===e.nodeType&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for("function"===typeof n.focus&&n.focus(),n=0;n<t.length;n++)(e=t[n]).element.scrollLeft=e.left,e.element.scrollTop=e.top}}var mr=c&&"documentMode"in document&&11>=document.documentMode,gr=null,br=null,vr=null,yr=!1;function xr(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;yr||null==gr||gr!==Q(r)||("selectionStart"in(r=gr)&&pr(r)?r={start:r.selectionStart,end:r.selectionEnd}:r={anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},vr&&sr(vr,r)||(vr=r,0<(r=Kr(br,"onSelect")).length&&(t=new cn("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=gr)))}function wr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Sr={animationend:wr("Animation","AnimationEnd"),animationiteration:wr("Animation","AnimationIteration"),animationstart:wr("Animation","AnimationStart"),transitionend:wr("Transition","TransitionEnd")},kr={},Er={};function jr(e){if(kr[e])return kr[e];if(!Sr[e])return e;var t,n=Sr[e];for(t in n)if(n.hasOwnProperty(t)&&t in Er)return kr[e]=n[t];return e}c&&(Er=document.createElement("div").style,"AnimationEvent"in window||(delete Sr.animationend.animation,delete Sr.animationiteration.animation,delete Sr.animationstart.animation),"TransitionEvent"in window||delete Sr.transitionend.transition);var Cr=jr("animationend"),_r=jr("animationiteration"),Rr=jr("animationstart"),Pr=jr("transitionend"),Tr=new Map,Or="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Nr(e,t){Tr.set(e,t),s(t,[e])}for(var Lr=0;Lr<Or.length;Lr++){var zr=Or[Lr];Nr(zr.toLowerCase(),"on"+(zr[0].toUpperCase()+zr.slice(1)))}Nr(Cr,"onAnimationEnd"),Nr(_r,"onAnimationIteration"),Nr(Rr,"onAnimationStart"),Nr("dblclick","onDoubleClick"),Nr("focusin","onFocus"),Nr("focusout","onBlur"),Nr(Pr,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),s("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),s("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),s("onBeforeInput",["compositionend","keypress","textInput","paste"]),s("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),s("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),s("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ar="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Dr=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ar));function Fr(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,function(e,t,n,r,o,i,l,s,u){if(Me.apply(this,arguments),De){if(!De)throw Error(a(198));var c=Fe;De=!1,Fe=null,Ie||(Ie=!0,Ue=c)}}(r,t,void 0,e),e.currentTarget=null}function Ir(e,t){t=0!==(4&t);for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var i=r.length-1;0<=i;i--){var l=r[i],s=l.instance,u=l.currentTarget;if(l=l.listener,s!==a&&o.isPropagationStopped())break e;Fr(o,l,u),a=s}else for(i=0;i<r.length;i++){if(s=(l=r[i]).instance,u=l.currentTarget,l=l.listener,s!==a&&o.isPropagationStopped())break e;Fr(o,l,u),a=s}}}if(Ie)throw e=Ue,Ie=!1,Ue=null,e}function Ur(e,t){var n=t[go];void 0===n&&(n=t[go]=new Set);var r=e+"__bubble";n.has(r)||(Wr(t,e,2,!1),n.add(r))}function $r(e,t,n){var r=0;t&&(r|=4),Wr(n,e,r,t)}var Mr="_reactListening"+Math.random().toString(36).slice(2);function Br(e){if(!e[Mr]){e[Mr]=!0,i.forEach(function(t){"selectionchange"!==t&&(Dr.has(t)||$r(t,!1,e),$r(t,!0,e))});var t=9===e.nodeType?e:e.ownerDocument;null===t||t[Mr]||(t[Mr]=!0,$r("selectionchange",!1,t))}}function Wr(e,t,n,r){switch(Gt(t)){case 1:var o=Vt;break;case 4:o=Kt;break;default:o=qt}n=o.bind(null,t,n,e),o=void 0,!Le||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(o=!0),r?void 0!==o?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):void 0!==o?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Hr(e,t,n,r,o){var a=r;if(0===(1&t)&&0===(2&t)&&null!==r)e:for(;;){if(null===r)return;var i=r.tag;if(3===i||4===i){var l=r.stateNode.containerInfo;if(l===o||8===l.nodeType&&l.parentNode===o)break;if(4===i)for(i=r.return;null!==i;){var s=i.tag;if((3===s||4===s)&&((s=i.stateNode.containerInfo)===o||8===s.nodeType&&s.parentNode===o))return;i=i.return}for(;null!==l;){if(null===(i=yo(l)))return;if(5===(s=i.tag)||6===s){r=a=i;continue e}l=l.parentNode}}r=r.return}Oe(function(){var r=a,o=we(n),i=[];e:{var l=Tr.get(e);if(void 0!==l){var s=cn,u=e;switch(e){case"keypress":if(0===tn(n))break e;case"keydown":case"keyup":s=_n;break;case"focusin":u="focus",s=gn;break;case"focusout":u="blur",s=gn;break;case"beforeblur":case"afterblur":s=gn;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":s=hn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":s=mn;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":s=Pn;break;case Cr:case _r:case Rr:s=bn;break;case Pr:s=Tn;break;case"scroll":s=fn;break;case"wheel":s=Nn;break;case"copy":case"cut":case"paste":s=yn;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":s=Rn}var c=0!==(4&t),d=!c&&"scroll"===e,f=c?null!==l?l+"Capture":null:l;c=[];for(var p,h=r;null!==h;){var m=(p=h).stateNode;if(5===p.tag&&null!==m&&(p=m,null!==f&&(null!=(m=Ne(h,f))&&c.push(Vr(h,m,p)))),d)break;h=h.return}0<c.length&&(l=new s(l,u,null,n,o),i.push({event:l,listeners:c}))}}if(0===(7&t)){if(s="mouseout"===e||"pointerout"===e,(!(l="mouseover"===e||"pointerover"===e)||n===xe||!(u=n.relatedTarget||n.fromElement)||!yo(u)&&!u[mo])&&(s||l)&&(l=o.window===o?o:(l=o.ownerDocument)?l.defaultView||l.parentWindow:window,s?(s=r,null!==(u=(u=n.relatedTarget||n.toElement)?yo(u):null)&&(u!==(d=Be(u))||5!==u.tag&&6!==u.tag)&&(u=null)):(s=null,u=r),s!==u)){if(c=hn,m="onMouseLeave",f="onMouseEnter",h="mouse","pointerout"!==e&&"pointerover"!==e||(c=Rn,m="onPointerLeave",f="onPointerEnter",h="pointer"),d=null==s?l:wo(s),p=null==u?l:wo(u),(l=new c(m,h+"leave",s,n,o)).target=d,l.relatedTarget=p,m=null,yo(o)===r&&((c=new c(f,h+"enter",u,n,o)).target=p,c.relatedTarget=d,m=c),d=m,s&&u)e:{for(f=u,h=0,p=c=s;p;p=qr(p))h++;for(p=0,m=f;m;m=qr(m))p++;for(;0<h-p;)c=qr(c),h--;for(;0<p-h;)f=qr(f),p--;for(;h--;){if(c===f||null!==f&&c===f.alternate)break e;c=qr(c),f=qr(f)}c=null}else c=null;null!==s&&Qr(i,l,s,c,!1),null!==u&&null!==d&&Qr(i,d,u,c,!0)}if("select"===(s=(l=r?wo(r):window).nodeName&&l.nodeName.toLowerCase())||"input"===s&&"file"===l.type)var g=Gn;else if(Hn(l))if(Yn)g=ir;else{g=or;var b=rr}else(s=l.nodeName)&&"input"===s.toLowerCase()&&("checkbox"===l.type||"radio"===l.type)&&(g=ar);switch(g&&(g=g(e,r))?Vn(i,g,n,o):(b&&b(e,l,r),"focusout"===e&&(b=l._wrapperState)&&b.controlled&&"number"===l.type&&ee(l,"number",l.value)),b=r?wo(r):window,e){case"focusin":(Hn(b)||"true"===b.contentEditable)&&(gr=b,br=r,vr=null);break;case"focusout":vr=br=gr=null;break;case"mousedown":yr=!0;break;case"contextmenu":case"mouseup":case"dragend":yr=!1,xr(i,n,o);break;case"selectionchange":if(mr)break;case"keydown":case"keyup":xr(i,n,o)}var v;if(zn)e:{switch(e){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else Bn?$n(e,n)&&(y="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(y="onCompositionStart");y&&(Fn&&"ko"!==n.locale&&(Bn||"onCompositionStart"!==y?"onCompositionEnd"===y&&Bn&&(v=en()):(Jt="value"in(Yt=o)?Yt.value:Yt.textContent,Bn=!0)),0<(b=Kr(r,y)).length&&(y=new xn(y,e,null,n,o),i.push({event:y,listeners:b}),v?y.data=v:null!==(v=Mn(n))&&(y.data=v))),(v=Dn?function(e,t){switch(e){case"compositionend":return Mn(t);case"keypress":return 32!==t.which?null:(Un=!0,In);case"textInput":return(e=t.data)===In&&Un?null:e;default:return null}}(e,n):function(e,t){if(Bn)return"compositionend"===e||!zn&&$n(e,t)?(e=en(),Zt=Jt=Yt=null,Bn=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Fn&&"ko"!==t.locale?null:t.data}}(e,n))&&(0<(r=Kr(r,"onBeforeInput")).length&&(o=new xn("onBeforeInput","beforeinput",null,n,o),i.push({event:o,listeners:r}),o.data=v))}Ir(i,t)})}function Vr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Kr(e,t){for(var n=t+"Capture",r=[];null!==e;){var o=e,a=o.stateNode;5===o.tag&&null!==a&&(o=a,null!=(a=Ne(e,n))&&r.unshift(Vr(e,a,o)),null!=(a=Ne(e,t))&&r.push(Vr(e,a,o))),e=e.return}return r}function qr(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag);return e||null}function Qr(e,t,n,r,o){for(var a=t._reactName,i=[];null!==n&&n!==r;){var l=n,s=l.alternate,u=l.stateNode;if(null!==s&&s===r)break;5===l.tag&&null!==u&&(l=u,o?null!=(s=Ne(n,a))&&i.unshift(Vr(n,s,l)):o||null!=(s=Ne(n,a))&&i.push(Vr(n,s,l))),n=n.return}0!==i.length&&e.push({event:t,listeners:i})}var Xr=/\r\n?/g,Gr=/\u0000|\uFFFD/g;function Yr(e){return("string"===typeof e?e:""+e).replace(Xr,"\n").replace(Gr,"")}function Jr(e,t,n){if(t=Yr(t),Yr(e)!==t&&n)throw Error(a(425))}function Zr(){}var eo=null,to=null;function no(e,t){return"textarea"===e||"noscript"===e||"string"===typeof t.children||"number"===typeof t.children||"object"===typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var ro="function"===typeof setTimeout?setTimeout:void 0,oo="function"===typeof clearTimeout?clearTimeout:void 0,ao="function"===typeof Promise?Promise:void 0,io="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof ao?function(e){return ao.resolve(null).then(e).catch(lo)}:ro;function lo(e){setTimeout(function(){throw e})}function so(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&8===o.nodeType)if("/$"===(n=o.data)){if(0===r)return e.removeChild(o),void Bt(t);r--}else"$"!==n&&"$?"!==n&&"$!"!==n||r++;n=o}while(n);Bt(t)}function uo(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t)break;if("/$"===t)return null}}return e}function co(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n){if(0===t)return e;t--}else"/$"===n&&t++}e=e.previousSibling}return null}var fo=Math.random().toString(36).slice(2),po="__reactFiber$"+fo,ho="__reactProps$"+fo,mo="__reactContainer$"+fo,go="__reactEvents$"+fo,bo="__reactListeners$"+fo,vo="__reactHandles$"+fo;function yo(e){var t=e[po];if(t)return t;for(var n=e.parentNode;n;){if(t=n[mo]||n[po]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=co(e);null!==e;){if(n=e[po])return n;e=co(e)}return t}n=(e=n).parentNode}return null}function xo(e){return!(e=e[po]||e[mo])||5!==e.tag&&6!==e.tag&&13!==e.tag&&3!==e.tag?null:e}function wo(e){if(5===e.tag||6===e.tag)return e.stateNode;throw Error(a(33))}function So(e){return e[ho]||null}var ko=[],Eo=-1;function jo(e){return{current:e}}function Co(e){0>Eo||(e.current=ko[Eo],ko[Eo]=null,Eo--)}function _o(e,t){Eo++,ko[Eo]=e.current,e.current=t}var Ro={},Po=jo(Ro),To=jo(!1),Oo=Ro;function No(e,t){var n=e.type.contextTypes;if(!n)return Ro;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o,a={};for(o in n)a[o]=t[o];return r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function Lo(e){return null!==(e=e.childContextTypes)&&void 0!==e}function zo(){Co(To),Co(Po)}function Ao(e,t,n){if(Po.current!==Ro)throw Error(a(168));_o(Po,t),_o(To,n)}function Do(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,"function"!==typeof r.getChildContext)return n;for(var o in r=r.getChildContext())if(!(o in t))throw Error(a(108,W(e)||"Unknown",o));return F({},n,r)}function Fo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ro,Oo=Po.current,_o(Po,e),_o(To,To.current),!0}function Io(e,t,n){var r=e.stateNode;if(!r)throw Error(a(169));n?(e=Do(e,t,Oo),r.__reactInternalMemoizedMergedChildContext=e,Co(To),Co(Po),_o(Po,e)):Co(To),_o(To,n)}var Uo=null,$o=!1,Mo=!1;function Bo(e){null===Uo?Uo=[e]:Uo.push(e)}function Wo(){if(!Mo&&null!==Uo){Mo=!0;var e=0,t=yt;try{var n=Uo;for(yt=1;e<n.length;e++){var r=n[e];do{r=r(!0)}while(null!==r)}Uo=null,$o=!1}catch(o){throw null!==Uo&&(Uo=Uo.slice(e+1)),qe(Ze,Wo),o}finally{yt=t,Mo=!1}}return null}var Ho=[],Vo=0,Ko=null,qo=0,Qo=[],Xo=0,Go=null,Yo=1,Jo="";function Zo(e,t){Ho[Vo++]=qo,Ho[Vo++]=Ko,Ko=e,qo=t}function ea(e,t,n){Qo[Xo++]=Yo,Qo[Xo++]=Jo,Qo[Xo++]=Go,Go=e;var r=Yo;e=Jo;var o=32-it(r)-1;r&=~(1<<o),n+=1;var a=32-it(t)+o;if(30<a){var i=o-o%5;a=(r&(1<<i)-1).toString(32),r>>=i,o-=i,Yo=1<<32-it(t)+o|n<<o|r,Jo=a+e}else Yo=1<<a|n<<o|r,Jo=e}function ta(e){null!==e.return&&(Zo(e,1),ea(e,1,0))}function na(e){for(;e===Ko;)Ko=Ho[--Vo],Ho[Vo]=null,qo=Ho[--Vo],Ho[Vo]=null;for(;e===Go;)Go=Qo[--Xo],Qo[Xo]=null,Jo=Qo[--Xo],Qo[Xo]=null,Yo=Qo[--Xo],Qo[Xo]=null}var ra=null,oa=null,aa=!1,ia=null;function la(e,t){var n=Ou(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,null===(t=e.deletions)?(e.deletions=[n],e.flags|=16):t.push(n)}function sa(e,t){switch(e.tag){case 5:var n=e.type;return null!==(t=1!==t.nodeType||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t)&&(e.stateNode=t,ra=e,oa=uo(t.firstChild),!0);case 6:return null!==(t=""===e.pendingProps||3!==t.nodeType?null:t)&&(e.stateNode=t,ra=e,oa=null,!0);case 13:return null!==(t=8!==t.nodeType?null:t)&&(n=null!==Go?{id:Yo,overflow:Jo}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},(n=Ou(18,null,null,0)).stateNode=t,n.return=e,e.child=n,ra=e,oa=null,!0);default:return!1}}function ua(e){return 0!==(1&e.mode)&&0===(128&e.flags)}function ca(e){if(aa){var t=oa;if(t){var n=t;if(!sa(e,t)){if(ua(e))throw Error(a(418));t=uo(n.nextSibling);var r=ra;t&&sa(e,t)?la(r,n):(e.flags=-4097&e.flags|2,aa=!1,ra=e)}}else{if(ua(e))throw Error(a(418));e.flags=-4097&e.flags|2,aa=!1,ra=e}}}function da(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag&&13!==e.tag;)e=e.return;ra=e}function fa(e){if(e!==ra)return!1;if(!aa)return da(e),aa=!0,!1;var t;if((t=3!==e.tag)&&!(t=5!==e.tag)&&(t="head"!==(t=e.type)&&"body"!==t&&!no(e.type,e.memoizedProps)),t&&(t=oa)){if(ua(e))throw pa(),Error(a(418));for(;t;)la(e,t),t=uo(t.nextSibling)}if(da(e),13===e.tag){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(a(317));e:{for(e=e.nextSibling,t=0;e;){if(8===e.nodeType){var n=e.data;if("/$"===n){if(0===t){oa=uo(e.nextSibling);break e}t--}else"$"!==n&&"$!"!==n&&"$?"!==n||t++}e=e.nextSibling}oa=null}}else oa=ra?uo(e.stateNode.nextSibling):null;return!0}function pa(){for(var e=oa;e;)e=uo(e.nextSibling)}function ha(){oa=ra=null,aa=!1}function ma(e){null===ia?ia=[e]:ia.push(e)}var ga=x.ReactCurrentBatchConfig;function ba(e,t,n){if(null!==(e=n.ref)&&"function"!==typeof e&&"object"!==typeof e){if(n._owner){if(n=n._owner){if(1!==n.tag)throw Error(a(309));var r=n.stateNode}if(!r)throw Error(a(147,e));var o=r,i=""+e;return null!==t&&null!==t.ref&&"function"===typeof t.ref&&t.ref._stringRef===i?t.ref:(t=function(e){var t=o.refs;null===e?delete t[i]:t[i]=e},t._stringRef=i,t)}if("string"!==typeof e)throw Error(a(284));if(!n._owner)throw Error(a(290,e))}return e}function va(e,t){throw e=Object.prototype.toString.call(t),Error(a(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ya(e){return(0,e._init)(e._payload)}function xa(e){function t(t,n){if(e){var r=t.deletions;null===r?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function r(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling;return e}function o(e,t){return(e=Lu(e,t)).index=0,e.sibling=null,e}function i(t,n,r){return t.index=r,e?null!==(r=t.alternate)?(r=r.index)<n?(t.flags|=2,n):r:(t.flags|=2,n):(t.flags|=1048576,n)}function l(t){return e&&null===t.alternate&&(t.flags|=2),t}function s(e,t,n,r){return null===t||6!==t.tag?((t=Fu(n,e.mode,r)).return=e,t):((t=o(t,n)).return=e,t)}function u(e,t,n,r){var a=n.type;return a===k?d(e,t,n.props.children,r,n.key):null!==t&&(t.elementType===a||"object"===typeof a&&null!==a&&a.$$typeof===N&&ya(a)===t.type)?((r=o(t,n.props)).ref=ba(e,t,n),r.return=e,r):((r=zu(n.type,n.key,n.props,null,e.mode,r)).ref=ba(e,t,n),r.return=e,r)}function c(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=Iu(n,e.mode,r)).return=e,t):((t=o(t,n.children||[])).return=e,t)}function d(e,t,n,r,a){return null===t||7!==t.tag?((t=Au(n,e.mode,r,a)).return=e,t):((t=o(t,n)).return=e,t)}function f(e,t,n){if("string"===typeof t&&""!==t||"number"===typeof t)return(t=Fu(""+t,e.mode,n)).return=e,t;if("object"===typeof t&&null!==t){switch(t.$$typeof){case w:return(n=zu(t.type,t.key,t.props,null,e.mode,n)).ref=ba(e,null,t),n.return=e,n;case S:return(t=Iu(t,e.mode,n)).return=e,t;case N:return f(e,(0,t._init)(t._payload),n)}if(te(t)||A(t))return(t=Au(t,e.mode,n,null)).return=e,t;va(e,t)}return null}function p(e,t,n,r){var o=null!==t?t.key:null;if("string"===typeof n&&""!==n||"number"===typeof n)return null!==o?null:s(e,t,""+n,r);if("object"===typeof n&&null!==n){switch(n.$$typeof){case w:return n.key===o?u(e,t,n,r):null;case S:return n.key===o?c(e,t,n,r):null;case N:return p(e,t,(o=n._init)(n._payload),r)}if(te(n)||A(n))return null!==o?null:d(e,t,n,r,null);va(e,n)}return null}function h(e,t,n,r,o){if("string"===typeof r&&""!==r||"number"===typeof r)return s(t,e=e.get(n)||null,""+r,o);if("object"===typeof r&&null!==r){switch(r.$$typeof){case w:return u(t,e=e.get(null===r.key?n:r.key)||null,r,o);case S:return c(t,e=e.get(null===r.key?n:r.key)||null,r,o);case N:return h(e,t,n,(0,r._init)(r._payload),o)}if(te(r)||A(r))return d(t,e=e.get(n)||null,r,o,null);va(t,r)}return null}function m(o,a,l,s){for(var u=null,c=null,d=a,m=a=0,g=null;null!==d&&m<l.length;m++){d.index>m?(g=d,d=null):g=d.sibling;var b=p(o,d,l[m],s);if(null===b){null===d&&(d=g);break}e&&d&&null===b.alternate&&t(o,d),a=i(b,a,m),null===c?u=b:c.sibling=b,c=b,d=g}if(m===l.length)return n(o,d),aa&&Zo(o,m),u;if(null===d){for(;m<l.length;m++)null!==(d=f(o,l[m],s))&&(a=i(d,a,m),null===c?u=d:c.sibling=d,c=d);return aa&&Zo(o,m),u}for(d=r(o,d);m<l.length;m++)null!==(g=h(d,o,m,l[m],s))&&(e&&null!==g.alternate&&d.delete(null===g.key?m:g.key),a=i(g,a,m),null===c?u=g:c.sibling=g,c=g);return e&&d.forEach(function(e){return t(o,e)}),aa&&Zo(o,m),u}function g(o,l,s,u){var c=A(s);if("function"!==typeof c)throw Error(a(150));if(null==(s=c.call(s)))throw Error(a(151));for(var d=c=null,m=l,g=l=0,b=null,v=s.next();null!==m&&!v.done;g++,v=s.next()){m.index>g?(b=m,m=null):b=m.sibling;var y=p(o,m,v.value,u);if(null===y){null===m&&(m=b);break}e&&m&&null===y.alternate&&t(o,m),l=i(y,l,g),null===d?c=y:d.sibling=y,d=y,m=b}if(v.done)return n(o,m),aa&&Zo(o,g),c;if(null===m){for(;!v.done;g++,v=s.next())null!==(v=f(o,v.value,u))&&(l=i(v,l,g),null===d?c=v:d.sibling=v,d=v);return aa&&Zo(o,g),c}for(m=r(o,m);!v.done;g++,v=s.next())null!==(v=h(m,o,g,v.value,u))&&(e&&null!==v.alternate&&m.delete(null===v.key?g:v.key),l=i(v,l,g),null===d?c=v:d.sibling=v,d=v);return e&&m.forEach(function(e){return t(o,e)}),aa&&Zo(o,g),c}return function e(r,a,i,s){if("object"===typeof i&&null!==i&&i.type===k&&null===i.key&&(i=i.props.children),"object"===typeof i&&null!==i){switch(i.$$typeof){case w:e:{for(var u=i.key,c=a;null!==c;){if(c.key===u){if((u=i.type)===k){if(7===c.tag){n(r,c.sibling),(a=o(c,i.props.children)).return=r,r=a;break e}}else if(c.elementType===u||"object"===typeof u&&null!==u&&u.$$typeof===N&&ya(u)===c.type){n(r,c.sibling),(a=o(c,i.props)).ref=ba(r,c,i),a.return=r,r=a;break e}n(r,c);break}t(r,c),c=c.sibling}i.type===k?((a=Au(i.props.children,r.mode,s,i.key)).return=r,r=a):((s=zu(i.type,i.key,i.props,null,r.mode,s)).ref=ba(r,a,i),s.return=r,r=s)}return l(r);case S:e:{for(c=i.key;null!==a;){if(a.key===c){if(4===a.tag&&a.stateNode.containerInfo===i.containerInfo&&a.stateNode.implementation===i.implementation){n(r,a.sibling),(a=o(a,i.children||[])).return=r,r=a;break e}n(r,a);break}t(r,a),a=a.sibling}(a=Iu(i,r.mode,s)).return=r,r=a}return l(r);case N:return e(r,a,(c=i._init)(i._payload),s)}if(te(i))return m(r,a,i,s);if(A(i))return g(r,a,i,s);va(r,i)}return"string"===typeof i&&""!==i||"number"===typeof i?(i=""+i,null!==a&&6===a.tag?(n(r,a.sibling),(a=o(a,i)).return=r,r=a):(n(r,a),(a=Fu(i,r.mode,s)).return=r,r=a),l(r)):n(r,a)}}var wa=xa(!0),Sa=xa(!1),ka=jo(null),Ea=null,ja=null,Ca=null;function _a(){Ca=ja=Ea=null}function Ra(e){var t=ka.current;Co(ka),e._currentValue=t}function Pa(e,t,n){for(;null!==e;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==r&&(r.childLanes|=t)):null!==r&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Ta(e,t){Ea=e,Ca=ja=null,null!==(e=e.dependencies)&&null!==e.firstContext&&(0!==(e.lanes&t)&&(yl=!0),e.firstContext=null)}function Oa(e){var t=e._currentValue;if(Ca!==e)if(e={context:e,memoizedValue:t,next:null},null===ja){if(null===Ea)throw Error(a(308));ja=e,Ea.dependencies={lanes:0,firstContext:e}}else ja=ja.next=e;return t}var Na=null;function La(e){null===Na?Na=[e]:Na.push(e)}function za(e,t,n,r){var o=t.interleaved;return null===o?(n.next=n,La(t)):(n.next=o.next,o.next=n),t.interleaved=n,Aa(e,r)}function Aa(e,t){e.lanes|=t;var n=e.alternate;for(null!==n&&(n.lanes|=t),n=e,e=e.return;null!==e;)e.childLanes|=t,null!==(n=e.alternate)&&(n.childLanes|=t),n=e,e=e.return;return 3===n.tag?n.stateNode:null}var Da=!1;function Fa(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ia(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ua(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function $a(e,t,n){var r=e.updateQueue;if(null===r)return null;if(r=r.shared,0!==(2&Rs)){var o=r.pending;return null===o?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Aa(e,n)}return null===(o=r.interleaved)?(t.next=t,La(r)):(t.next=o.next,o.next=t),r.interleaved=t,Aa(e,n)}function Ma(e,t,n){if(null!==(t=t.updateQueue)&&(t=t.shared,0!==(4194240&n))){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,vt(e,n)}}function Ba(e,t){var n=e.updateQueue,r=e.alternate;if(null!==r&&n===(r=r.updateQueue)){var o=null,a=null;if(null!==(n=n.firstBaseUpdate)){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};null===a?o=a=i:a=a.next=i,n=n.next}while(null!==n);null===a?o=a=t:a=a.next=t}else o=a=t;return n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:a,shared:r.shared,effects:r.effects},void(e.updateQueue=n)}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Wa(e,t,n,r){var o=e.updateQueue;Da=!1;var a=o.firstBaseUpdate,i=o.lastBaseUpdate,l=o.shared.pending;if(null!==l){o.shared.pending=null;var s=l,u=s.next;s.next=null,null===i?a=u:i.next=u,i=s;var c=e.alternate;null!==c&&((l=(c=c.updateQueue).lastBaseUpdate)!==i&&(null===l?c.firstBaseUpdate=u:l.next=u,c.lastBaseUpdate=s))}if(null!==a){var d=o.baseState;for(i=0,c=u=s=null,l=a;;){var f=l.lane,p=l.eventTime;if((r&f)===f){null!==c&&(c=c.next={eventTime:p,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var h=e,m=l;switch(f=t,p=n,m.tag){case 1:if("function"===typeof(h=m.payload)){d=h.call(p,d,f);break e}d=h;break e;case 3:h.flags=-65537&h.flags|128;case 0:if(null===(f="function"===typeof(h=m.payload)?h.call(p,d,f):h)||void 0===f)break e;d=F({},d,f);break e;case 2:Da=!0}}null!==l.callback&&0!==l.lane&&(e.flags|=64,null===(f=o.effects)?o.effects=[l]:f.push(l))}else p={eventTime:p,lane:f,tag:l.tag,payload:l.payload,callback:l.callback,next:null},null===c?(u=c=p,s=d):c=c.next=p,i|=f;if(null===(l=l.next)){if(null===(l=o.shared.pending))break;l=(f=l).next,f.next=null,o.lastBaseUpdate=f,o.shared.pending=null}}if(null===c&&(s=d),o.baseState=s,o.firstBaseUpdate=u,o.lastBaseUpdate=c,null!==(t=o.shared.interleaved)){o=t;do{i|=o.lane,o=o.next}while(o!==t)}else null===a&&(o.shared.lanes=0);Ds|=i,e.lanes=i,e.memoizedState=d}}function Ha(e,t,n){if(e=t.effects,t.effects=null,null!==e)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(null!==o){if(r.callback=null,r=n,"function"!==typeof o)throw Error(a(191,o));o.call(r)}}}var Va={},Ka=jo(Va),qa=jo(Va),Qa=jo(Va);function Xa(e){if(e===Va)throw Error(a(174));return e}function Ga(e,t){switch(_o(Qa,t),_o(qa,e),_o(Ka,Va),e=t.nodeType){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:se(null,"");break;default:t=se(t=(e=8===e?t.parentNode:t).namespaceURI||null,e=e.tagName)}Co(Ka),_o(Ka,t)}function Ya(){Co(Ka),Co(qa),Co(Qa)}function Ja(e){Xa(Qa.current);var t=Xa(Ka.current),n=se(t,e.type);t!==n&&(_o(qa,e),_o(Ka,n))}function Za(e){qa.current===e&&(Co(Ka),Co(qa))}var ei=jo(0);function ti(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||"$?"===n.data||"$!"===n.data))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(0!==(128&t.flags))return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ni=[];function ri(){for(var e=0;e<ni.length;e++)ni[e]._workInProgressVersionPrimary=null;ni.length=0}var oi=x.ReactCurrentDispatcher,ai=x.ReactCurrentBatchConfig,ii=0,li=null,si=null,ui=null,ci=!1,di=!1,fi=0,pi=0;function hi(){throw Error(a(321))}function mi(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!lr(e[n],t[n]))return!1;return!0}function gi(e,t,n,r,o,i){if(ii=i,li=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,oi.current=null===e||null===e.memoizedState?Zi:el,e=n(r,o),di){i=0;do{if(di=!1,fi=0,25<=i)throw Error(a(301));i+=1,ui=si=null,t.updateQueue=null,oi.current=tl,e=n(r,o)}while(di)}if(oi.current=Ji,t=null!==si&&null!==si.next,ii=0,ui=si=li=null,ci=!1,t)throw Error(a(300));return e}function bi(){var e=0!==fi;return fi=0,e}function vi(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===ui?li.memoizedState=ui=e:ui=ui.next=e,ui}function yi(){if(null===si){var e=li.alternate;e=null!==e?e.memoizedState:null}else e=si.next;var t=null===ui?li.memoizedState:ui.next;if(null!==t)ui=t,si=e;else{if(null===e)throw Error(a(310));e={memoizedState:(si=e).memoizedState,baseState:si.baseState,baseQueue:si.baseQueue,queue:si.queue,next:null},null===ui?li.memoizedState=ui=e:ui=ui.next=e}return ui}function xi(e,t){return"function"===typeof t?t(e):t}function wi(e){var t=yi(),n=t.queue;if(null===n)throw Error(a(311));n.lastRenderedReducer=e;var r=si,o=r.baseQueue,i=n.pending;if(null!==i){if(null!==o){var l=o.next;o.next=i.next,i.next=l}r.baseQueue=o=i,n.pending=null}if(null!==o){i=o.next,r=r.baseState;var s=l=null,u=null,c=i;do{var d=c.lane;if((ii&d)===d)null!==u&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};null===u?(s=u=f,l=r):u=u.next=f,li.lanes|=d,Ds|=d}c=c.next}while(null!==c&&c!==i);null===u?l=r:u.next=s,lr(r,t.memoizedState)||(yl=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=u,n.lastRenderedState=r}if(null!==(e=n.interleaved)){o=e;do{i=o.lane,li.lanes|=i,Ds|=i,o=o.next}while(o!==e)}else null===o&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Si(e){var t=yi(),n=t.queue;if(null===n)throw Error(a(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(null!==o){n.pending=null;var l=o=o.next;do{i=e(i,l.action),l=l.next}while(l!==o);lr(i,t.memoizedState)||(yl=!0),t.memoizedState=i,null===t.baseQueue&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function ki(){}function Ei(e,t){var n=li,r=yi(),o=t(),i=!lr(r.memoizedState,o);if(i&&(r.memoizedState=o,yl=!0),r=r.queue,Di(_i.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||null!==ui&&1&ui.memoizedState.tag){if(n.flags|=2048,Oi(9,Ci.bind(null,n,r,o,t),void 0,null),null===Ps)throw Error(a(349));0!==(30&ii)||ji(n,t,o)}return o}function ji(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},null===(t=li.updateQueue)?(t={lastEffect:null,stores:null},li.updateQueue=t,t.stores=[e]):null===(n=t.stores)?t.stores=[e]:n.push(e)}function Ci(e,t,n,r){t.value=n,t.getSnapshot=r,Ri(t)&&Pi(e)}function _i(e,t,n){return n(function(){Ri(t)&&Pi(e)})}function Ri(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!lr(e,n)}catch(r){return!0}}function Pi(e){var t=Aa(e,1);null!==t&&nu(t,e,1,-1)}function Ti(e){var t=vi();return"function"===typeof e&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:xi,lastRenderedState:e},t.queue=e,e=e.dispatch=Qi.bind(null,li,e),[t.memoizedState,e]}function Oi(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},null===(t=li.updateQueue)?(t={lastEffect:null,stores:null},li.updateQueue=t,t.lastEffect=e.next=e):null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function Ni(){return yi().memoizedState}function Li(e,t,n,r){var o=vi();li.flags|=e,o.memoizedState=Oi(1|t,n,void 0,void 0===r?null:r)}function zi(e,t,n,r){var o=yi();r=void 0===r?null:r;var a=void 0;if(null!==si){var i=si.memoizedState;if(a=i.destroy,null!==r&&mi(r,i.deps))return void(o.memoizedState=Oi(t,n,a,r))}li.flags|=e,o.memoizedState=Oi(1|t,n,a,r)}function Ai(e,t){return Li(8390656,8,e,t)}function Di(e,t){return zi(2048,8,e,t)}function Fi(e,t){return zi(4,2,e,t)}function Ii(e,t){return zi(4,4,e,t)}function Ui(e,t){return"function"===typeof t?(e=e(),t(e),function(){t(null)}):null!==t&&void 0!==t?(e=e(),t.current=e,function(){t.current=null}):void 0}function $i(e,t,n){return n=null!==n&&void 0!==n?n.concat([e]):null,zi(4,4,Ui.bind(null,t,e),n)}function Mi(){}function Bi(e,t){var n=yi();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&mi(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Wi(e,t){var n=yi();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&mi(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Hi(e,t,n){return 0===(21&ii)?(e.baseState&&(e.baseState=!1,yl=!0),e.memoizedState=n):(lr(n,t)||(n=mt(),li.lanes|=n,Ds|=n,e.baseState=!0),t)}function Vi(e,t){var n=yt;yt=0!==n&&4>n?n:4,e(!0);var r=ai.transition;ai.transition={};try{e(!1),t()}finally{yt=n,ai.transition=r}}function Ki(){return yi().memoizedState}function qi(e,t,n){var r=tu(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Xi(e))Gi(t,n);else if(null!==(n=za(e,t,n,r))){nu(n,e,r,eu()),Yi(n,t,r)}}function Qi(e,t,n){var r=tu(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Xi(e))Gi(t,o);else{var a=e.alternate;if(0===e.lanes&&(null===a||0===a.lanes)&&null!==(a=t.lastRenderedReducer))try{var i=t.lastRenderedState,l=a(i,n);if(o.hasEagerState=!0,o.eagerState=l,lr(l,i)){var s=t.interleaved;return null===s?(o.next=o,La(t)):(o.next=s.next,s.next=o),void(t.interleaved=o)}}catch(u){}null!==(n=za(e,t,o,r))&&(nu(n,e,r,o=eu()),Yi(n,t,r))}}function Xi(e){var t=e.alternate;return e===li||null!==t&&t===li}function Gi(e,t){di=ci=!0;var n=e.pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Yi(e,t,n){if(0!==(4194240&n)){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,vt(e,n)}}var Ji={readContext:Oa,useCallback:hi,useContext:hi,useEffect:hi,useImperativeHandle:hi,useInsertionEffect:hi,useLayoutEffect:hi,useMemo:hi,useReducer:hi,useRef:hi,useState:hi,useDebugValue:hi,useDeferredValue:hi,useTransition:hi,useMutableSource:hi,useSyncExternalStore:hi,useId:hi,unstable_isNewReconciler:!1},Zi={readContext:Oa,useCallback:function(e,t){return vi().memoizedState=[e,void 0===t?null:t],e},useContext:Oa,useEffect:Ai,useImperativeHandle:function(e,t,n){return n=null!==n&&void 0!==n?n.concat([e]):null,Li(4194308,4,Ui.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Li(4194308,4,e,t)},useInsertionEffect:function(e,t){return Li(4,2,e,t)},useMemo:function(e,t){var n=vi();return t=void 0===t?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=vi();return t=void 0!==n?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=qi.bind(null,li,e),[r.memoizedState,e]},useRef:function(e){return e={current:e},vi().memoizedState=e},useState:Ti,useDebugValue:Mi,useDeferredValue:function(e){return vi().memoizedState=e},useTransition:function(){var e=Ti(!1),t=e[0];return e=Vi.bind(null,e[1]),vi().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=li,o=vi();if(aa){if(void 0===n)throw Error(a(407));n=n()}else{if(n=t(),null===Ps)throw Error(a(349));0!==(30&ii)||ji(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,Ai(_i.bind(null,r,i,e),[e]),r.flags|=2048,Oi(9,Ci.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=vi(),t=Ps.identifierPrefix;if(aa){var n=Jo;t=":"+t+"R"+(n=(Yo&~(1<<32-it(Yo)-1)).toString(32)+n),0<(n=fi++)&&(t+="H"+n.toString(32)),t+=":"}else t=":"+t+"r"+(n=pi++).toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},el={readContext:Oa,useCallback:Bi,useContext:Oa,useEffect:Di,useImperativeHandle:$i,useInsertionEffect:Fi,useLayoutEffect:Ii,useMemo:Wi,useReducer:wi,useRef:Ni,useState:function(){return wi(xi)},useDebugValue:Mi,useDeferredValue:function(e){return Hi(yi(),si.memoizedState,e)},useTransition:function(){return[wi(xi)[0],yi().memoizedState]},useMutableSource:ki,useSyncExternalStore:Ei,useId:Ki,unstable_isNewReconciler:!1},tl={readContext:Oa,useCallback:Bi,useContext:Oa,useEffect:Di,useImperativeHandle:$i,useInsertionEffect:Fi,useLayoutEffect:Ii,useMemo:Wi,useReducer:Si,useRef:Ni,useState:function(){return Si(xi)},useDebugValue:Mi,useDeferredValue:function(e){var t=yi();return null===si?t.memoizedState=e:Hi(t,si.memoizedState,e)},useTransition:function(){return[Si(xi)[0],yi().memoizedState]},useMutableSource:ki,useSyncExternalStore:Ei,useId:Ki,unstable_isNewReconciler:!1};function nl(e,t){if(e&&e.defaultProps){for(var n in t=F({},t),e=e.defaultProps)void 0===t[n]&&(t[n]=e[n]);return t}return t}function rl(e,t,n,r){n=null===(n=n(r,t=e.memoizedState))||void 0===n?t:F({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}var ol={isMounted:function(e){return!!(e=e._reactInternals)&&Be(e)===e},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=eu(),o=tu(e),a=Ua(r,o);a.payload=t,void 0!==n&&null!==n&&(a.callback=n),null!==(t=$a(e,a,o))&&(nu(t,e,o,r),Ma(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=eu(),o=tu(e),a=Ua(r,o);a.tag=1,a.payload=t,void 0!==n&&null!==n&&(a.callback=n),null!==(t=$a(e,a,o))&&(nu(t,e,o,r),Ma(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=eu(),r=tu(e),o=Ua(n,r);o.tag=2,void 0!==t&&null!==t&&(o.callback=t),null!==(t=$a(e,o,r))&&(nu(t,e,r,n),Ma(t,e,r))}};function al(e,t,n,r,o,a,i){return"function"===typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,a,i):!t.prototype||!t.prototype.isPureReactComponent||(!sr(n,r)||!sr(o,a))}function il(e,t,n){var r=!1,o=Ro,a=t.contextType;return"object"===typeof a&&null!==a?a=Oa(a):(o=Lo(t)?Oo:Po.current,a=(r=null!==(r=t.contextTypes)&&void 0!==r)?No(e,o):Ro),t=new t(n,a),e.memoizedState=null!==t.state&&void 0!==t.state?t.state:null,t.updater=ol,e.stateNode=t,t._reactInternals=e,r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=a),t}function ll(e,t,n,r){e=t.state,"function"===typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"===typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ol.enqueueReplaceState(t,t.state,null)}function sl(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},Fa(e);var a=t.contextType;"object"===typeof a&&null!==a?o.context=Oa(a):(a=Lo(t)?Oo:Po.current,o.context=No(e,a)),o.state=e.memoizedState,"function"===typeof(a=t.getDerivedStateFromProps)&&(rl(e,t,a,n),o.state=e.memoizedState),"function"===typeof t.getDerivedStateFromProps||"function"===typeof o.getSnapshotBeforeUpdate||"function"!==typeof o.UNSAFE_componentWillMount&&"function"!==typeof o.componentWillMount||(t=o.state,"function"===typeof o.componentWillMount&&o.componentWillMount(),"function"===typeof o.UNSAFE_componentWillMount&&o.UNSAFE_componentWillMount(),t!==o.state&&ol.enqueueReplaceState(o,o.state,null),Wa(e,n,o,r),o.state=e.memoizedState),"function"===typeof o.componentDidMount&&(e.flags|=4194308)}function ul(e,t){try{var n="",r=t;do{n+=M(r),r=r.return}while(r);var o=n}catch(a){o="\nError generating stack: "+a.message+"\n"+a.stack}return{value:e,source:t,stack:o,digest:null}}function cl(e,t,n){return{value:e,source:null,stack:null!=n?n:null,digest:null!=t?t:null}}function dl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var fl="function"===typeof WeakMap?WeakMap:Map;function pl(e,t,n){(n=Ua(-1,n)).tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Hs||(Hs=!0,Vs=r),dl(0,t)},n}function hl(e,t,n){(n=Ua(-1,n)).tag=3;var r=e.type.getDerivedStateFromError;if("function"===typeof r){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){dl(0,t)}}var a=e.stateNode;return null!==a&&"function"===typeof a.componentDidCatch&&(n.callback=function(){dl(0,t),"function"!==typeof r&&(null===Ks?Ks=new Set([this]):Ks.add(this));var e=t.stack;this.componentDidCatch(t.value,{componentStack:null!==e?e:""})}),n}function ml(e,t,n){var r=e.pingCache;if(null===r){r=e.pingCache=new fl;var o=new Set;r.set(t,o)}else void 0===(o=r.get(t))&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=ju.bind(null,e,t,n),t.then(e,e))}function gl(e){do{var t;if((t=13===e.tag)&&(t=null===(t=e.memoizedState)||null!==t.dehydrated),t)return e;e=e.return}while(null!==e);return null}function bl(e,t,n,r,o){return 0===(1&e.mode)?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,1===n.tag&&(null===n.alternate?n.tag=17:((t=Ua(-1,1)).tag=2,$a(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=o,e)}var vl=x.ReactCurrentOwner,yl=!1;function xl(e,t,n,r){t.child=null===e?Sa(t,null,n,r):wa(t,e.child,n,r)}function wl(e,t,n,r,o){n=n.render;var a=t.ref;return Ta(t,o),r=gi(e,t,n,r,a,o),n=bi(),null===e||yl?(aa&&n&&ta(t),t.flags|=1,xl(e,t,r,o),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Hl(e,t,o))}function Sl(e,t,n,r,o){if(null===e){var a=n.type;return"function"!==typeof a||Nu(a)||void 0!==a.defaultProps||null!==n.compare||void 0!==n.defaultProps?((e=zu(n.type,null,r,t,t.mode,o)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=a,kl(e,t,a,r,o))}if(a=e.child,0===(e.lanes&o)){var i=a.memoizedProps;if((n=null!==(n=n.compare)?n:sr)(i,r)&&e.ref===t.ref)return Hl(e,t,o)}return t.flags|=1,(e=Lu(a,r)).ref=t.ref,e.return=t,t.child=e}function kl(e,t,n,r,o){if(null!==e){var a=e.memoizedProps;if(sr(a,r)&&e.ref===t.ref){if(yl=!1,t.pendingProps=r=a,0===(e.lanes&o))return t.lanes=e.lanes,Hl(e,t,o);0!==(131072&e.flags)&&(yl=!0)}}return Cl(e,t,n,r,o)}function El(e,t,n){var r=t.pendingProps,o=r.children,a=null!==e?e.memoizedState:null;if("hidden"===r.mode)if(0===(1&t.mode))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},_o(Ls,Ns),Ns|=n;else{if(0===(1073741824&n))return e=null!==a?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,_o(Ls,Ns),Ns|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=null!==a?a.baseLanes:n,_o(Ls,Ns),Ns|=r}else null!==a?(r=a.baseLanes|n,t.memoizedState=null):r=n,_o(Ls,Ns),Ns|=r;return xl(e,t,o,n),t.child}function jl(e,t){var n=t.ref;(null===e&&null!==n||null!==e&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Cl(e,t,n,r,o){var a=Lo(n)?Oo:Po.current;return a=No(t,a),Ta(t,o),n=gi(e,t,n,r,a,o),r=bi(),null===e||yl?(aa&&r&&ta(t),t.flags|=1,xl(e,t,n,o),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Hl(e,t,o))}function _l(e,t,n,r,o){if(Lo(n)){var a=!0;Fo(t)}else a=!1;if(Ta(t,o),null===t.stateNode)Wl(e,t),il(t,n,r),sl(t,n,r,o),r=!0;else if(null===e){var i=t.stateNode,l=t.memoizedProps;i.props=l;var s=i.context,u=n.contextType;"object"===typeof u&&null!==u?u=Oa(u):u=No(t,u=Lo(n)?Oo:Po.current);var c=n.getDerivedStateFromProps,d="function"===typeof c||"function"===typeof i.getSnapshotBeforeUpdate;d||"function"!==typeof i.UNSAFE_componentWillReceiveProps&&"function"!==typeof i.componentWillReceiveProps||(l!==r||s!==u)&&ll(t,i,r,u),Da=!1;var f=t.memoizedState;i.state=f,Wa(t,r,i,o),s=t.memoizedState,l!==r||f!==s||To.current||Da?("function"===typeof c&&(rl(t,n,c,r),s=t.memoizedState),(l=Da||al(t,n,l,r,f,s,u))?(d||"function"!==typeof i.UNSAFE_componentWillMount&&"function"!==typeof i.componentWillMount||("function"===typeof i.componentWillMount&&i.componentWillMount(),"function"===typeof i.UNSAFE_componentWillMount&&i.UNSAFE_componentWillMount()),"function"===typeof i.componentDidMount&&(t.flags|=4194308)):("function"===typeof i.componentDidMount&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),i.props=r,i.state=s,i.context=u,r=l):("function"===typeof i.componentDidMount&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,Ia(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:nl(t.type,l),i.props=u,d=t.pendingProps,f=i.context,"object"===typeof(s=n.contextType)&&null!==s?s=Oa(s):s=No(t,s=Lo(n)?Oo:Po.current);var p=n.getDerivedStateFromProps;(c="function"===typeof p||"function"===typeof i.getSnapshotBeforeUpdate)||"function"!==typeof i.UNSAFE_componentWillReceiveProps&&"function"!==typeof i.componentWillReceiveProps||(l!==d||f!==s)&&ll(t,i,r,s),Da=!1,f=t.memoizedState,i.state=f,Wa(t,r,i,o);var h=t.memoizedState;l!==d||f!==h||To.current||Da?("function"===typeof p&&(rl(t,n,p,r),h=t.memoizedState),(u=Da||al(t,n,u,r,f,h,s)||!1)?(c||"function"!==typeof i.UNSAFE_componentWillUpdate&&"function"!==typeof i.componentWillUpdate||("function"===typeof i.componentWillUpdate&&i.componentWillUpdate(r,h,s),"function"===typeof i.UNSAFE_componentWillUpdate&&i.UNSAFE_componentWillUpdate(r,h,s)),"function"===typeof i.componentDidUpdate&&(t.flags|=4),"function"===typeof i.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!==typeof i.componentDidUpdate||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),"function"!==typeof i.getSnapshotBeforeUpdate||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=h),i.props=r,i.state=h,i.context=s,r=u):("function"!==typeof i.componentDidUpdate||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),"function"!==typeof i.getSnapshotBeforeUpdate||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return Rl(e,t,n,r,a,o)}function Rl(e,t,n,r,o,a){jl(e,t);var i=0!==(128&t.flags);if(!r&&!i)return o&&Io(t,n,!1),Hl(e,t,a);r=t.stateNode,vl.current=t;var l=i&&"function"!==typeof n.getDerivedStateFromError?null:r.render();return t.flags|=1,null!==e&&i?(t.child=wa(t,e.child,null,a),t.child=wa(t,null,l,a)):xl(e,t,l,a),t.memoizedState=r.state,o&&Io(t,n,!0),t.child}function Pl(e){var t=e.stateNode;t.pendingContext?Ao(0,t.pendingContext,t.pendingContext!==t.context):t.context&&Ao(0,t.context,!1),Ga(e,t.containerInfo)}function Tl(e,t,n,r,o){return ha(),ma(o),t.flags|=256,xl(e,t,n,r),t.child}var Ol,Nl,Ll,zl,Al={dehydrated:null,treeContext:null,retryLane:0};function Dl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Fl(e,t,n){var r,o=t.pendingProps,i=ei.current,l=!1,s=0!==(128&t.flags);if((r=s)||(r=(null===e||null!==e.memoizedState)&&0!==(2&i)),r?(l=!0,t.flags&=-129):null!==e&&null===e.memoizedState||(i|=1),_o(ei,1&i),null===e)return ca(t),null!==(e=t.memoizedState)&&null!==(e=e.dehydrated)?(0===(1&t.mode)?t.lanes=1:"$!"===e.data?t.lanes=8:t.lanes=1073741824,null):(s=o.children,e=o.fallback,l?(o=t.mode,l=t.child,s={mode:"hidden",children:s},0===(1&o)&&null!==l?(l.childLanes=0,l.pendingProps=s):l=Du(s,o,0,null),e=Au(e,o,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=Dl(n),t.memoizedState=Al,e):Il(t,s));if(null!==(i=e.memoizedState)&&null!==(r=i.dehydrated))return function(e,t,n,r,o,i,l){if(n)return 256&t.flags?(t.flags&=-257,Ul(e,t,l,r=cl(Error(a(422))))):null!==t.memoizedState?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=Du({mode:"visible",children:r.children},o,0,null),(i=Au(i,o,l,null)).flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,0!==(1&t.mode)&&wa(t,e.child,null,l),t.child.memoizedState=Dl(l),t.memoizedState=Al,i);if(0===(1&t.mode))return Ul(e,t,l,null);if("$!"===o.data){if(r=o.nextSibling&&o.nextSibling.dataset)var s=r.dgst;return r=s,Ul(e,t,l,r=cl(i=Error(a(419)),r,void 0))}if(s=0!==(l&e.childLanes),yl||s){if(null!==(r=Ps)){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}0!==(o=0!==(o&(r.suspendedLanes|l))?0:o)&&o!==i.retryLane&&(i.retryLane=o,Aa(e,o),nu(r,e,o,-1))}return mu(),Ul(e,t,l,r=cl(Error(a(421))))}return"$?"===o.data?(t.flags|=128,t.child=e.child,t=_u.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,oa=uo(o.nextSibling),ra=t,aa=!0,ia=null,null!==e&&(Qo[Xo++]=Yo,Qo[Xo++]=Jo,Qo[Xo++]=Go,Yo=e.id,Jo=e.overflow,Go=t),t=Il(t,r.children),t.flags|=4096,t)}(e,t,s,o,r,i,n);if(l){l=o.fallback,s=t.mode,r=(i=e.child).sibling;var u={mode:"hidden",children:o.children};return 0===(1&s)&&t.child!==i?((o=t.child).childLanes=0,o.pendingProps=u,t.deletions=null):(o=Lu(i,u)).subtreeFlags=14680064&i.subtreeFlags,null!==r?l=Lu(r,l):(l=Au(l,s,n,null)).flags|=2,l.return=t,o.return=t,o.sibling=l,t.child=o,o=l,l=t.child,s=null===(s=e.child.memoizedState)?Dl(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},l.memoizedState=s,l.childLanes=e.childLanes&~n,t.memoizedState=Al,o}return e=(l=e.child).sibling,o=Lu(l,{mode:"visible",children:o.children}),0===(1&t.mode)&&(o.lanes=n),o.return=t,o.sibling=null,null!==e&&(null===(n=t.deletions)?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=o,t.memoizedState=null,o}function Il(e,t){return(t=Du({mode:"visible",children:t},e.mode,0,null)).return=e,e.child=t}function Ul(e,t,n,r){return null!==r&&ma(r),wa(t,e.child,null,n),(e=Il(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function $l(e,t,n){e.lanes|=t;var r=e.alternate;null!==r&&(r.lanes|=t),Pa(e.return,t,n)}function Ml(e,t,n,r,o){var a=e.memoizedState;null===a?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=o)}function Bl(e,t,n){var r=t.pendingProps,o=r.revealOrder,a=r.tail;if(xl(e,t,r.children,n),0!==(2&(r=ei.current)))r=1&r|2,t.flags|=128;else{if(null!==e&&0!==(128&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&$l(e,n,t);else if(19===e.tag)$l(e,n,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(_o(ei,r),0===(1&t.mode))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;null!==n;)null!==(e=n.alternate)&&null===ti(e)&&(o=n),n=n.sibling;null===(n=o)?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Ml(t,!1,o,n,a);break;case"backwards":for(n=null,o=t.child,t.child=null;null!==o;){if(null!==(e=o.alternate)&&null===ti(e)){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Ml(t,!0,n,null,a);break;case"together":Ml(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Wl(e,t){0===(1&t.mode)&&null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Hl(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),Ds|=t.lanes,0===(n&t.childLanes))return null;if(null!==e&&t.child!==e.child)throw Error(a(153));if(null!==t.child){for(n=Lu(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=Lu(e,e.pendingProps)).return=t;n.sibling=null}return t.child}function Vl(e,t){if(!aa)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Kl(e){var t=null!==e.alternate&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;null!==o;)n|=o.lanes|o.childLanes,r|=14680064&o.subtreeFlags,r|=14680064&o.flags,o.return=e,o=o.sibling;else for(o=e.child;null!==o;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function ql(e,t,n){var r=t.pendingProps;switch(na(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Kl(t),null;case 1:case 17:return Lo(t.type)&&zo(),Kl(t),null;case 3:return r=t.stateNode,Ya(),Co(To),Co(Po),ri(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),null!==e&&null!==e.child||(fa(t)?t.flags|=4:null===e||e.memoizedState.isDehydrated&&0===(256&t.flags)||(t.flags|=1024,null!==ia&&(iu(ia),ia=null))),Nl(e,t),Kl(t),null;case 5:Za(t);var o=Xa(Qa.current);if(n=t.type,null!==e&&null!=t.stateNode)Ll(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(null===t.stateNode)throw Error(a(166));return Kl(t),null}if(e=Xa(Ka.current),fa(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[po]=t,r[ho]=i,e=0!==(1&t.mode),n){case"dialog":Ur("cancel",r),Ur("close",r);break;case"iframe":case"object":case"embed":Ur("load",r);break;case"video":case"audio":for(o=0;o<Ar.length;o++)Ur(Ar[o],r);break;case"source":Ur("error",r);break;case"img":case"image":case"link":Ur("error",r),Ur("load",r);break;case"details":Ur("toggle",r);break;case"input":G(r,i),Ur("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},Ur("invalid",r);break;case"textarea":oe(r,i),Ur("invalid",r)}for(var s in ve(n,i),o=null,i)if(i.hasOwnProperty(s)){var u=i[s];"children"===s?"string"===typeof u?r.textContent!==u&&(!0!==i.suppressHydrationWarning&&Jr(r.textContent,u,e),o=["children",u]):"number"===typeof u&&r.textContent!==""+u&&(!0!==i.suppressHydrationWarning&&Jr(r.textContent,u,e),o=["children",""+u]):l.hasOwnProperty(s)&&null!=u&&"onScroll"===s&&Ur("scroll",r)}switch(n){case"input":K(r),Z(r,i,!0);break;case"textarea":K(r),ie(r);break;case"select":case"option":break;default:"function"===typeof i.onClick&&(r.onclick=Zr)}r=o,t.updateQueue=r,null!==r&&(t.flags|=4)}else{s=9===o.nodeType?o:o.ownerDocument,"http://www.w3.org/1999/xhtml"===e&&(e=le(n)),"http://www.w3.org/1999/xhtml"===e?"script"===n?((e=s.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):"string"===typeof r.is?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),"select"===n&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[po]=t,e[ho]=r,Ol(e,t,!1,!1),t.stateNode=e;e:{switch(s=ye(n,r),n){case"dialog":Ur("cancel",e),Ur("close",e),o=r;break;case"iframe":case"object":case"embed":Ur("load",e),o=r;break;case"video":case"audio":for(o=0;o<Ar.length;o++)Ur(Ar[o],e);o=r;break;case"source":Ur("error",e),o=r;break;case"img":case"image":case"link":Ur("error",e),Ur("load",e),o=r;break;case"details":Ur("toggle",e),o=r;break;case"input":G(e,r),o=X(e,r),Ur("invalid",e);break;case"option":default:o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=F({},r,{value:void 0}),Ur("invalid",e);break;case"textarea":oe(e,r),o=re(e,r),Ur("invalid",e)}for(i in ve(n,o),u=o)if(u.hasOwnProperty(i)){var c=u[i];"style"===i?ge(e,c):"dangerouslySetInnerHTML"===i?null!=(c=c?c.__html:void 0)&&de(e,c):"children"===i?"string"===typeof c?("textarea"!==n||""!==c)&&fe(e,c):"number"===typeof c&&fe(e,""+c):"suppressContentEditableWarning"!==i&&"suppressHydrationWarning"!==i&&"autoFocus"!==i&&(l.hasOwnProperty(i)?null!=c&&"onScroll"===i&&Ur("scroll",e):null!=c&&y(e,i,c,s))}switch(n){case"input":K(e),Z(e,r,!1);break;case"textarea":K(e),ie(e);break;case"option":null!=r.value&&e.setAttribute("value",""+H(r.value));break;case"select":e.multiple=!!r.multiple,null!=(i=r.value)?ne(e,!!r.multiple,i,!1):null!=r.defaultValue&&ne(e,!!r.multiple,r.defaultValue,!0);break;default:"function"===typeof o.onClick&&(e.onclick=Zr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}null!==t.ref&&(t.flags|=512,t.flags|=2097152)}return Kl(t),null;case 6:if(e&&null!=t.stateNode)zl(e,t,e.memoizedProps,r);else{if("string"!==typeof r&&null===t.stateNode)throw Error(a(166));if(n=Xa(Qa.current),Xa(Ka.current),fa(t)){if(r=t.stateNode,n=t.memoizedProps,r[po]=t,(i=r.nodeValue!==n)&&null!==(e=ra))switch(e.tag){case 3:Jr(r.nodeValue,n,0!==(1&e.mode));break;case 5:!0!==e.memoizedProps.suppressHydrationWarning&&Jr(r.nodeValue,n,0!==(1&e.mode))}i&&(t.flags|=4)}else(r=(9===n.nodeType?n:n.ownerDocument).createTextNode(r))[po]=t,t.stateNode=r}return Kl(t),null;case 13:if(Co(ei),r=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(aa&&null!==oa&&0!==(1&t.mode)&&0===(128&t.flags))pa(),ha(),t.flags|=98560,i=!1;else if(i=fa(t),null!==r&&null!==r.dehydrated){if(null===e){if(!i)throw Error(a(318));if(!(i=null!==(i=t.memoizedState)?i.dehydrated:null))throw Error(a(317));i[po]=t}else ha(),0===(128&t.flags)&&(t.memoizedState=null),t.flags|=4;Kl(t),i=!1}else null!==ia&&(iu(ia),ia=null),i=!0;if(!i)return 65536&t.flags?t:null}return 0!==(128&t.flags)?(t.lanes=n,t):((r=null!==r)!==(null!==e&&null!==e.memoizedState)&&r&&(t.child.flags|=8192,0!==(1&t.mode)&&(null===e||0!==(1&ei.current)?0===zs&&(zs=3):mu())),null!==t.updateQueue&&(t.flags|=4),Kl(t),null);case 4:return Ya(),Nl(e,t),null===e&&Br(t.stateNode.containerInfo),Kl(t),null;case 10:return Ra(t.type._context),Kl(t),null;case 19:if(Co(ei),null===(i=t.memoizedState))return Kl(t),null;if(r=0!==(128&t.flags),null===(s=i.rendering))if(r)Vl(i,!1);else{if(0!==zs||null!==e&&0!==(128&e.flags))for(e=t.child;null!==e;){if(null!==(s=ti(e))){for(t.flags|=128,Vl(i,!1),null!==(r=s.updateQueue)&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;null!==n;)e=r,(i=n).flags&=14680066,null===(s=i.alternate)?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=s.childLanes,i.lanes=s.lanes,i.child=s.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=s.memoizedProps,i.memoizedState=s.memoizedState,i.updateQueue=s.updateQueue,i.type=s.type,e=s.dependencies,i.dependencies=null===e?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return _o(ei,1&ei.current|2),t.child}e=e.sibling}null!==i.tail&&Ye()>Bs&&(t.flags|=128,r=!0,Vl(i,!1),t.lanes=4194304)}else{if(!r)if(null!==(e=ti(s))){if(t.flags|=128,r=!0,null!==(n=e.updateQueue)&&(t.updateQueue=n,t.flags|=4),Vl(i,!0),null===i.tail&&"hidden"===i.tailMode&&!s.alternate&&!aa)return Kl(t),null}else 2*Ye()-i.renderingStartTime>Bs&&1073741824!==n&&(t.flags|=128,r=!0,Vl(i,!1),t.lanes=4194304);i.isBackwards?(s.sibling=t.child,t.child=s):(null!==(n=i.last)?n.sibling=s:t.child=s,i.last=s)}return null!==i.tail?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Ye(),t.sibling=null,n=ei.current,_o(ei,r?1&n|2:1&n),t):(Kl(t),null);case 22:case 23:return du(),r=null!==t.memoizedState,null!==e&&null!==e.memoizedState!==r&&(t.flags|=8192),r&&0!==(1&t.mode)?0!==(1073741824&Ns)&&(Kl(t),6&t.subtreeFlags&&(t.flags|=8192)):Kl(t),null;case 24:case 25:return null}throw Error(a(156,t.tag))}function Ql(e,t){switch(na(t),t.tag){case 1:return Lo(t.type)&&zo(),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return Ya(),Co(To),Co(Po),ri(),0!==(65536&(e=t.flags))&&0===(128&e)?(t.flags=-65537&e|128,t):null;case 5:return Za(t),null;case 13:if(Co(ei),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(a(340));ha()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return Co(ei),null;case 4:return Ya(),null;case 10:return Ra(t.type._context),null;case 22:case 23:return du(),null;default:return null}}Ol=function(e,t){for(var n=t.child;null!==n;){if(5===n.tag||6===n.tag)e.appendChild(n.stateNode);else if(4!==n.tag&&null!==n.child){n.child.return=n,n=n.child;continue}if(n===t)break;for(;null===n.sibling;){if(null===n.return||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},Nl=function(){},Ll=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Xa(Ka.current);var a,i=null;switch(n){case"input":o=X(e,o),r=X(e,r),i=[];break;case"select":o=F({},o,{value:void 0}),r=F({},r,{value:void 0}),i=[];break;case"textarea":o=re(e,o),r=re(e,r),i=[];break;default:"function"!==typeof o.onClick&&"function"===typeof r.onClick&&(e.onclick=Zr)}for(c in ve(n,r),n=null,o)if(!r.hasOwnProperty(c)&&o.hasOwnProperty(c)&&null!=o[c])if("style"===c){var s=o[c];for(a in s)s.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else"dangerouslySetInnerHTML"!==c&&"children"!==c&&"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&"autoFocus"!==c&&(l.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var u=r[c];if(s=null!=o?o[c]:void 0,r.hasOwnProperty(c)&&u!==s&&(null!=u||null!=s))if("style"===c)if(s){for(a in s)!s.hasOwnProperty(a)||u&&u.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in u)u.hasOwnProperty(a)&&s[a]!==u[a]&&(n||(n={}),n[a]=u[a])}else n||(i||(i=[]),i.push(c,n)),n=u;else"dangerouslySetInnerHTML"===c?(u=u?u.__html:void 0,s=s?s.__html:void 0,null!=u&&s!==u&&(i=i||[]).push(c,u)):"children"===c?"string"!==typeof u&&"number"!==typeof u||(i=i||[]).push(c,""+u):"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&(l.hasOwnProperty(c)?(null!=u&&"onScroll"===c&&Ur("scroll",e),i||s===u||(i=[])):(i=i||[]).push(c,u))}n&&(i=i||[]).push("style",n);var c=i;(t.updateQueue=c)&&(t.flags|=4)}},zl=function(e,t,n,r){n!==r&&(t.flags|=4)};var Xl=!1,Gl=!1,Yl="function"===typeof WeakSet?WeakSet:Set,Jl=null;function Zl(e,t){var n=e.ref;if(null!==n)if("function"===typeof n)try{n(null)}catch(r){Eu(e,t,r)}else n.current=null}function es(e,t,n){try{n()}catch(r){Eu(e,t,r)}}var ts=!1;function ns(e,t,n){var r=t.updateQueue;if(null!==(r=null!==r?r.lastEffect:null)){var o=r=r.next;do{if((o.tag&e)===e){var a=o.destroy;o.destroy=void 0,void 0!==a&&es(t,n,a)}o=o.next}while(o!==r)}}function rs(e,t){if(null!==(t=null!==(t=t.updateQueue)?t.lastEffect:null)){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function os(e){var t=e.ref;if(null!==t){var n=e.stateNode;e.tag,e=n,"function"===typeof t?t(e):t.current=e}}function as(e){var t=e.alternate;null!==t&&(e.alternate=null,as(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&(null!==(t=e.stateNode)&&(delete t[po],delete t[ho],delete t[go],delete t[bo],delete t[vo])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function is(e){return 5===e.tag||3===e.tag||4===e.tag}function ls(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||is(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(2&e.flags)continue e;if(null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function ss(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?8===n.nodeType?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(8===n.nodeType?(t=n.parentNode).insertBefore(e,n):(t=n).appendChild(e),null!==(n=n._reactRootContainer)&&void 0!==n||null!==t.onclick||(t.onclick=Zr));else if(4!==r&&null!==(e=e.child))for(ss(e,t,n),e=e.sibling;null!==e;)ss(e,t,n),e=e.sibling}function us(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(4!==r&&null!==(e=e.child))for(us(e,t,n),e=e.sibling;null!==e;)us(e,t,n),e=e.sibling}var cs=null,ds=!1;function fs(e,t,n){for(n=n.child;null!==n;)ps(e,t,n),n=n.sibling}function ps(e,t,n){if(at&&"function"===typeof at.onCommitFiberUnmount)try{at.onCommitFiberUnmount(ot,n)}catch(l){}switch(n.tag){case 5:Gl||Zl(n,t);case 6:var r=cs,o=ds;cs=null,fs(e,t,n),ds=o,null!==(cs=r)&&(ds?(e=cs,n=n.stateNode,8===e.nodeType?e.parentNode.removeChild(n):e.removeChild(n)):cs.removeChild(n.stateNode));break;case 18:null!==cs&&(ds?(e=cs,n=n.stateNode,8===e.nodeType?so(e.parentNode,n):1===e.nodeType&&so(e,n),Bt(e)):so(cs,n.stateNode));break;case 4:r=cs,o=ds,cs=n.stateNode.containerInfo,ds=!0,fs(e,t,n),cs=r,ds=o;break;case 0:case 11:case 14:case 15:if(!Gl&&(null!==(r=n.updateQueue)&&null!==(r=r.lastEffect))){o=r=r.next;do{var a=o,i=a.destroy;a=a.tag,void 0!==i&&(0!==(2&a)||0!==(4&a))&&es(n,t,i),o=o.next}while(o!==r)}fs(e,t,n);break;case 1:if(!Gl&&(Zl(n,t),"function"===typeof(r=n.stateNode).componentWillUnmount))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Eu(n,t,l)}fs(e,t,n);break;case 21:fs(e,t,n);break;case 22:1&n.mode?(Gl=(r=Gl)||null!==n.memoizedState,fs(e,t,n),Gl=r):fs(e,t,n);break;default:fs(e,t,n)}}function hs(e){var t=e.updateQueue;if(null!==t){e.updateQueue=null;var n=e.stateNode;null===n&&(n=e.stateNode=new Yl),t.forEach(function(t){var r=Ru.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))})}}function ms(e,t){var n=t.deletions;if(null!==n)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,l=t,s=l;e:for(;null!==s;){switch(s.tag){case 5:cs=s.stateNode,ds=!1;break e;case 3:case 4:cs=s.stateNode.containerInfo,ds=!0;break e}s=s.return}if(null===cs)throw Error(a(160));ps(i,l,o),cs=null,ds=!1;var u=o.alternate;null!==u&&(u.return=null),o.return=null}catch(c){Eu(o,t,c)}}if(12854&t.subtreeFlags)for(t=t.child;null!==t;)gs(t,e),t=t.sibling}function gs(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ms(t,e),bs(e),4&r){try{ns(3,e,e.return),rs(3,e)}catch(g){Eu(e,e.return,g)}try{ns(5,e,e.return)}catch(g){Eu(e,e.return,g)}}break;case 1:ms(t,e),bs(e),512&r&&null!==n&&Zl(n,n.return);break;case 5:if(ms(t,e),bs(e),512&r&&null!==n&&Zl(n,n.return),32&e.flags){var o=e.stateNode;try{fe(o,"")}catch(g){Eu(e,e.return,g)}}if(4&r&&null!=(o=e.stateNode)){var i=e.memoizedProps,l=null!==n?n.memoizedProps:i,s=e.type,u=e.updateQueue;if(e.updateQueue=null,null!==u)try{"input"===s&&"radio"===i.type&&null!=i.name&&Y(o,i),ye(s,l);var c=ye(s,i);for(l=0;l<u.length;l+=2){var d=u[l],f=u[l+1];"style"===d?ge(o,f):"dangerouslySetInnerHTML"===d?de(o,f):"children"===d?fe(o,f):y(o,d,f,c)}switch(s){case"input":J(o,i);break;case"textarea":ae(o,i);break;case"select":var p=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var h=i.value;null!=h?ne(o,!!i.multiple,h,!1):p!==!!i.multiple&&(null!=i.defaultValue?ne(o,!!i.multiple,i.defaultValue,!0):ne(o,!!i.multiple,i.multiple?[]:"",!1))}o[ho]=i}catch(g){Eu(e,e.return,g)}}break;case 6:if(ms(t,e),bs(e),4&r){if(null===e.stateNode)throw Error(a(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(g){Eu(e,e.return,g)}}break;case 3:if(ms(t,e),bs(e),4&r&&null!==n&&n.memoizedState.isDehydrated)try{Bt(t.containerInfo)}catch(g){Eu(e,e.return,g)}break;case 4:default:ms(t,e),bs(e);break;case 13:ms(t,e),bs(e),8192&(o=e.child).flags&&(i=null!==o.memoizedState,o.stateNode.isHidden=i,!i||null!==o.alternate&&null!==o.alternate.memoizedState||(Ms=Ye())),4&r&&hs(e);break;case 22:if(d=null!==n&&null!==n.memoizedState,1&e.mode?(Gl=(c=Gl)||d,ms(t,e),Gl=c):ms(t,e),bs(e),8192&r){if(c=null!==e.memoizedState,(e.stateNode.isHidden=c)&&!d&&0!==(1&e.mode))for(Jl=e,d=e.child;null!==d;){for(f=Jl=d;null!==Jl;){switch(h=(p=Jl).child,p.tag){case 0:case 11:case 14:case 15:ns(4,p,p.return);break;case 1:Zl(p,p.return);var m=p.stateNode;if("function"===typeof m.componentWillUnmount){r=p,n=p.return;try{t=r,m.props=t.memoizedProps,m.state=t.memoizedState,m.componentWillUnmount()}catch(g){Eu(r,n,g)}}break;case 5:Zl(p,p.return);break;case 22:if(null!==p.memoizedState){ws(f);continue}}null!==h?(h.return=p,Jl=h):ws(f)}d=d.sibling}e:for(d=null,f=e;;){if(5===f.tag){if(null===d){d=f;try{o=f.stateNode,c?"function"===typeof(i=o.style).setProperty?i.setProperty("display","none","important"):i.display="none":(s=f.stateNode,l=void 0!==(u=f.memoizedProps.style)&&null!==u&&u.hasOwnProperty("display")?u.display:null,s.style.display=me("display",l))}catch(g){Eu(e,e.return,g)}}}else if(6===f.tag){if(null===d)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(g){Eu(e,e.return,g)}}else if((22!==f.tag&&23!==f.tag||null===f.memoizedState||f===e)&&null!==f.child){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;null===f.sibling;){if(null===f.return||f.return===e)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:ms(t,e),bs(e),4&r&&hs(e);case 21:}}function bs(e){var t=e.flags;if(2&t){try{e:{for(var n=e.return;null!==n;){if(is(n)){var r=n;break e}n=n.return}throw Error(a(160))}switch(r.tag){case 5:var o=r.stateNode;32&r.flags&&(fe(o,""),r.flags&=-33),us(e,ls(e),o);break;case 3:case 4:var i=r.stateNode.containerInfo;ss(e,ls(e),i);break;default:throw Error(a(161))}}catch(l){Eu(e,e.return,l)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function vs(e,t,n){Jl=e,ys(e,t,n)}function ys(e,t,n){for(var r=0!==(1&e.mode);null!==Jl;){var o=Jl,a=o.child;if(22===o.tag&&r){var i=null!==o.memoizedState||Xl;if(!i){var l=o.alternate,s=null!==l&&null!==l.memoizedState||Gl;l=Xl;var u=Gl;if(Xl=i,(Gl=s)&&!u)for(Jl=o;null!==Jl;)s=(i=Jl).child,22===i.tag&&null!==i.memoizedState?Ss(o):null!==s?(s.return=i,Jl=s):Ss(o);for(;null!==a;)Jl=a,ys(a,t,n),a=a.sibling;Jl=o,Xl=l,Gl=u}xs(e)}else 0!==(8772&o.subtreeFlags)&&null!==a?(a.return=o,Jl=a):xs(e)}}function xs(e){for(;null!==Jl;){var t=Jl;if(0!==(8772&t.flags)){var n=t.alternate;try{if(0!==(8772&t.flags))switch(t.tag){case 0:case 11:case 15:Gl||rs(5,t);break;case 1:var r=t.stateNode;if(4&t.flags&&!Gl)if(null===n)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:nl(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;null!==i&&Ha(t,i,r);break;case 3:var l=t.updateQueue;if(null!==l){if(n=null,null!==t.child)switch(t.child.tag){case 5:case 1:n=t.child.stateNode}Ha(t,l,n)}break;case 5:var s=t.stateNode;if(null===n&&4&t.flags){n=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:case 4:case 12:case 19:case 17:case 21:case 22:case 23:case 25:break;case 13:if(null===t.memoizedState){var c=t.alternate;if(null!==c){var d=c.memoizedState;if(null!==d){var f=d.dehydrated;null!==f&&Bt(f)}}}break;default:throw Error(a(163))}Gl||512&t.flags&&os(t)}catch(p){Eu(t,t.return,p)}}if(t===e){Jl=null;break}if(null!==(n=t.sibling)){n.return=t.return,Jl=n;break}Jl=t.return}}function ws(e){for(;null!==Jl;){var t=Jl;if(t===e){Jl=null;break}var n=t.sibling;if(null!==n){n.return=t.return,Jl=n;break}Jl=t.return}}function Ss(e){for(;null!==Jl;){var t=Jl;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{rs(4,t)}catch(s){Eu(t,n,s)}break;case 1:var r=t.stateNode;if("function"===typeof r.componentDidMount){var o=t.return;try{r.componentDidMount()}catch(s){Eu(t,o,s)}}var a=t.return;try{os(t)}catch(s){Eu(t,a,s)}break;case 5:var i=t.return;try{os(t)}catch(s){Eu(t,i,s)}}}catch(s){Eu(t,t.return,s)}if(t===e){Jl=null;break}var l=t.sibling;if(null!==l){l.return=t.return,Jl=l;break}Jl=t.return}}var ks,Es=Math.ceil,js=x.ReactCurrentDispatcher,Cs=x.ReactCurrentOwner,_s=x.ReactCurrentBatchConfig,Rs=0,Ps=null,Ts=null,Os=0,Ns=0,Ls=jo(0),zs=0,As=null,Ds=0,Fs=0,Is=0,Us=null,$s=null,Ms=0,Bs=1/0,Ws=null,Hs=!1,Vs=null,Ks=null,qs=!1,Qs=null,Xs=0,Gs=0,Ys=null,Js=-1,Zs=0;function eu(){return 0!==(6&Rs)?Ye():-1!==Js?Js:Js=Ye()}function tu(e){return 0===(1&e.mode)?1:0!==(2&Rs)&&0!==Os?Os&-Os:null!==ga.transition?(0===Zs&&(Zs=mt()),Zs):0!==(e=yt)?e:e=void 0===(e=window.event)?16:Gt(e.type)}function nu(e,t,n,r){if(50<Gs)throw Gs=0,Ys=null,Error(a(185));bt(e,n,r),0!==(2&Rs)&&e===Ps||(e===Ps&&(0===(2&Rs)&&(Fs|=n),4===zs&&lu(e,Os)),ru(e,r),1===n&&0===Rs&&0===(1&t.mode)&&(Bs=Ye()+500,$o&&Wo()))}function ru(e,t){var n=e.callbackNode;!function(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,a=e.pendingLanes;0<a;){var i=31-it(a),l=1<<i,s=o[i];-1===s?0!==(l&n)&&0===(l&r)||(o[i]=pt(l,t)):s<=t&&(e.expiredLanes|=l),a&=~l}}(e,t);var r=ft(e,e===Ps?Os:0);if(0===r)null!==n&&Qe(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(null!=n&&Qe(n),1===t)0===e.tag?function(e){$o=!0,Bo(e)}(su.bind(null,e)):Bo(su.bind(null,e)),io(function(){0===(6&Rs)&&Wo()}),n=null;else{switch(xt(r)){case 1:n=Ze;break;case 4:n=et;break;case 16:default:n=tt;break;case 536870912:n=rt}n=Pu(n,ou.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function ou(e,t){if(Js=-1,Zs=0,0!==(6&Rs))throw Error(a(327));var n=e.callbackNode;if(Su()&&e.callbackNode!==n)return null;var r=ft(e,e===Ps?Os:0);if(0===r)return null;if(0!==(30&r)||0!==(r&e.expiredLanes)||t)t=gu(e,r);else{t=r;var o=Rs;Rs|=2;var i=hu();for(Ps===e&&Os===t||(Ws=null,Bs=Ye()+500,fu(e,t));;)try{vu();break}catch(s){pu(e,s)}_a(),js.current=i,Rs=o,null!==Ts?t=0:(Ps=null,Os=0,t=zs)}if(0!==t){if(2===t&&(0!==(o=ht(e))&&(r=o,t=au(e,o))),1===t)throw n=As,fu(e,0),lu(e,r),ru(e,Ye()),n;if(6===t)lu(e,r);else{if(o=e.current.alternate,0===(30&r)&&!function(e){for(var t=e;;){if(16384&t.flags){var n=t.updateQueue;if(null!==n&&null!==(n=n.stores))for(var r=0;r<n.length;r++){var o=n[r],a=o.getSnapshot;o=o.value;try{if(!lr(a(),o))return!1}catch(l){return!1}}}if(n=t.child,16384&t.subtreeFlags&&null!==n)n.return=t,t=n;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}(o)&&(2===(t=gu(e,r))&&(0!==(i=ht(e))&&(r=i,t=au(e,i))),1===t))throw n=As,fu(e,0),lu(e,r),ru(e,Ye()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(a(345));case 2:case 5:wu(e,$s,Ws);break;case 3:if(lu(e,r),(130023424&r)===r&&10<(t=Ms+500-Ye())){if(0!==ft(e,0))break;if(((o=e.suspendedLanes)&r)!==r){eu(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=ro(wu.bind(null,e,$s,Ws),t);break}wu(e,$s,Ws);break;case 4:if(lu(e,r),(4194240&r)===r)break;for(t=e.eventTimes,o=-1;0<r;){var l=31-it(r);i=1<<l,(l=t[l])>o&&(o=l),r&=~i}if(r=o,10<(r=(120>(r=Ye()-r)?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Es(r/1960))-r)){e.timeoutHandle=ro(wu.bind(null,e,$s,Ws),r);break}wu(e,$s,Ws);break;default:throw Error(a(329))}}}return ru(e,Ye()),e.callbackNode===n?ou.bind(null,e):null}function au(e,t){var n=Us;return e.current.memoizedState.isDehydrated&&(fu(e,t).flags|=256),2!==(e=gu(e,t))&&(t=$s,$s=n,null!==t&&iu(t)),e}function iu(e){null===$s?$s=e:$s.push.apply($s,e)}function lu(e,t){for(t&=~Is,t&=~Fs,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-it(t),r=1<<n;e[n]=-1,t&=~r}}function su(e){if(0!==(6&Rs))throw Error(a(327));Su();var t=ft(e,0);if(0===(1&t))return ru(e,Ye()),null;var n=gu(e,t);if(0!==e.tag&&2===n){var r=ht(e);0!==r&&(t=r,n=au(e,r))}if(1===n)throw n=As,fu(e,0),lu(e,t),ru(e,Ye()),n;if(6===n)throw Error(a(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,wu(e,$s,Ws),ru(e,Ye()),null}function uu(e,t){var n=Rs;Rs|=1;try{return e(t)}finally{0===(Rs=n)&&(Bs=Ye()+500,$o&&Wo())}}function cu(e){null!==Qs&&0===Qs.tag&&0===(6&Rs)&&Su();var t=Rs;Rs|=1;var n=_s.transition,r=yt;try{if(_s.transition=null,yt=1,e)return e()}finally{yt=r,_s.transition=n,0===(6&(Rs=t))&&Wo()}}function du(){Ns=Ls.current,Co(Ls)}function fu(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(-1!==n&&(e.timeoutHandle=-1,oo(n)),null!==Ts)for(n=Ts.return;null!==n;){var r=n;switch(na(r),r.tag){case 1:null!==(r=r.type.childContextTypes)&&void 0!==r&&zo();break;case 3:Ya(),Co(To),Co(Po),ri();break;case 5:Za(r);break;case 4:Ya();break;case 13:case 19:Co(ei);break;case 10:Ra(r.type._context);break;case 22:case 23:du()}n=n.return}if(Ps=e,Ts=e=Lu(e.current,null),Os=Ns=t,zs=0,As=null,Is=Fs=Ds=0,$s=Us=null,null!==Na){for(t=0;t<Na.length;t++)if(null!==(r=(n=Na[t]).interleaved)){n.interleaved=null;var o=r.next,a=n.pending;if(null!==a){var i=a.next;a.next=o,r.next=i}n.pending=r}Na=null}return e}function pu(e,t){for(;;){var n=Ts;try{if(_a(),oi.current=Ji,ci){for(var r=li.memoizedState;null!==r;){var o=r.queue;null!==o&&(o.pending=null),r=r.next}ci=!1}if(ii=0,ui=si=li=null,di=!1,fi=0,Cs.current=null,null===n||null===n.return){zs=1,As=t,Ts=null;break}e:{var i=e,l=n.return,s=n,u=t;if(t=Os,s.flags|=32768,null!==u&&"object"===typeof u&&"function"===typeof u.then){var c=u,d=s,f=d.tag;if(0===(1&d.mode)&&(0===f||11===f||15===f)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var h=gl(l);if(null!==h){h.flags&=-257,bl(h,l,s,0,t),1&h.mode&&ml(i,c,t),u=c;var m=(t=h).updateQueue;if(null===m){var g=new Set;g.add(u),t.updateQueue=g}else m.add(u);break e}if(0===(1&t)){ml(i,c,t),mu();break e}u=Error(a(426))}else if(aa&&1&s.mode){var b=gl(l);if(null!==b){0===(65536&b.flags)&&(b.flags|=256),bl(b,l,s,0,t),ma(ul(u,s));break e}}i=u=ul(u,s),4!==zs&&(zs=2),null===Us?Us=[i]:Us.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t,Ba(i,pl(0,u,t));break e;case 1:s=u;var v=i.type,y=i.stateNode;if(0===(128&i.flags)&&("function"===typeof v.getDerivedStateFromError||null!==y&&"function"===typeof y.componentDidCatch&&(null===Ks||!Ks.has(y)))){i.flags|=65536,t&=-t,i.lanes|=t,Ba(i,hl(i,s,t));break e}}i=i.return}while(null!==i)}xu(n)}catch(x){t=x,Ts===n&&null!==n&&(Ts=n=n.return);continue}break}}function hu(){var e=js.current;return js.current=Ji,null===e?Ji:e}function mu(){0!==zs&&3!==zs&&2!==zs||(zs=4),null===Ps||0===(268435455&Ds)&&0===(268435455&Fs)||lu(Ps,Os)}function gu(e,t){var n=Rs;Rs|=2;var r=hu();for(Ps===e&&Os===t||(Ws=null,fu(e,t));;)try{bu();break}catch(o){pu(e,o)}if(_a(),Rs=n,js.current=r,null!==Ts)throw Error(a(261));return Ps=null,Os=0,zs}function bu(){for(;null!==Ts;)yu(Ts)}function vu(){for(;null!==Ts&&!Xe();)yu(Ts)}function yu(e){var t=ks(e.alternate,e,Ns);e.memoizedProps=e.pendingProps,null===t?xu(e):Ts=t,Cs.current=null}function xu(e){var t=e;do{var n=t.alternate;if(e=t.return,0===(32768&t.flags)){if(null!==(n=ql(n,t,Ns)))return void(Ts=n)}else{if(null!==(n=Ql(n,t)))return n.flags&=32767,void(Ts=n);if(null===e)return zs=6,void(Ts=null);e.flags|=32768,e.subtreeFlags=0,e.deletions=null}if(null!==(t=t.sibling))return void(Ts=t);Ts=t=e}while(null!==t);0===zs&&(zs=5)}function wu(e,t,n){var r=yt,o=_s.transition;try{_s.transition=null,yt=1,function(e,t,n,r){do{Su()}while(null!==Qs);if(0!==(6&Rs))throw Error(a(327));n=e.finishedWork;var o=e.finishedLanes;if(null===n)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(a(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(function(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-it(n),a=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~a}}(e,i),e===Ps&&(Ts=Ps=null,Os=0),0===(2064&n.subtreeFlags)&&0===(2064&n.flags)||qs||(qs=!0,Pu(tt,function(){return Su(),null})),i=0!==(15990&n.flags),0!==(15990&n.subtreeFlags)||i){i=_s.transition,_s.transition=null;var l=yt;yt=1;var s=Rs;Rs|=4,Cs.current=null,function(e,t){if(eo=Ht,pr(e=fr())){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{var r=(n=(n=e.ownerDocument)&&n.defaultView||window).getSelection&&n.getSelection();if(r&&0!==r.rangeCount){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch(w){n=null;break e}var l=0,s=-1,u=-1,c=0,d=0,f=e,p=null;t:for(;;){for(var h;f!==n||0!==o&&3!==f.nodeType||(s=l+o),f!==i||0!==r&&3!==f.nodeType||(u=l+r),3===f.nodeType&&(l+=f.nodeValue.length),null!==(h=f.firstChild);)p=f,f=h;for(;;){if(f===e)break t;if(p===n&&++c===o&&(s=l),p===i&&++d===r&&(u=l),null!==(h=f.nextSibling))break;p=(f=p).parentNode}f=h}n=-1===s||-1===u?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(to={focusedElem:e,selectionRange:n},Ht=!1,Jl=t;null!==Jl;)if(e=(t=Jl).child,0!==(1028&t.subtreeFlags)&&null!==e)e.return=t,Jl=e;else for(;null!==Jl;){t=Jl;try{var m=t.alternate;if(0!==(1024&t.flags))switch(t.tag){case 0:case 11:case 15:case 5:case 6:case 4:case 17:break;case 1:if(null!==m){var g=m.memoizedProps,b=m.memoizedState,v=t.stateNode,y=v.getSnapshotBeforeUpdate(t.elementType===t.type?g:nl(t.type,g),b);v.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var x=t.stateNode.containerInfo;1===x.nodeType?x.textContent="":9===x.nodeType&&x.documentElement&&x.removeChild(x.documentElement);break;default:throw Error(a(163))}}catch(w){Eu(t,t.return,w)}if(null!==(e=t.sibling)){e.return=t.return,Jl=e;break}Jl=t.return}m=ts,ts=!1}(e,n),gs(n,e),hr(to),Ht=!!eo,to=eo=null,e.current=n,vs(n,e,o),Ge(),Rs=s,yt=l,_s.transition=i}else e.current=n;if(qs&&(qs=!1,Qs=e,Xs=o),i=e.pendingLanes,0===i&&(Ks=null),function(e){if(at&&"function"===typeof at.onCommitFiberRoot)try{at.onCommitFiberRoot(ot,e,void 0,128===(128&e.current.flags))}catch(t){}}(n.stateNode),ru(e,Ye()),null!==t)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Hs)throw Hs=!1,e=Vs,Vs=null,e;0!==(1&Xs)&&0!==e.tag&&Su(),i=e.pendingLanes,0!==(1&i)?e===Ys?Gs++:(Gs=0,Ys=e):Gs=0,Wo()}(e,t,n,r)}finally{_s.transition=o,yt=r}return null}function Su(){if(null!==Qs){var e=xt(Xs),t=_s.transition,n=yt;try{if(_s.transition=null,yt=16>e?16:e,null===Qs)var r=!1;else{if(e=Qs,Qs=null,Xs=0,0!==(6&Rs))throw Error(a(331));var o=Rs;for(Rs|=4,Jl=e.current;null!==Jl;){var i=Jl,l=i.child;if(0!==(16&Jl.flags)){var s=i.deletions;if(null!==s){for(var u=0;u<s.length;u++){var c=s[u];for(Jl=c;null!==Jl;){var d=Jl;switch(d.tag){case 0:case 11:case 15:ns(8,d,i)}var f=d.child;if(null!==f)f.return=d,Jl=f;else for(;null!==Jl;){var p=(d=Jl).sibling,h=d.return;if(as(d),d===c){Jl=null;break}if(null!==p){p.return=h,Jl=p;break}Jl=h}}}var m=i.alternate;if(null!==m){var g=m.child;if(null!==g){m.child=null;do{var b=g.sibling;g.sibling=null,g=b}while(null!==g)}}Jl=i}}if(0!==(2064&i.subtreeFlags)&&null!==l)l.return=i,Jl=l;else e:for(;null!==Jl;){if(0!==(2048&(i=Jl).flags))switch(i.tag){case 0:case 11:case 15:ns(9,i,i.return)}var v=i.sibling;if(null!==v){v.return=i.return,Jl=v;break e}Jl=i.return}}var y=e.current;for(Jl=y;null!==Jl;){var x=(l=Jl).child;if(0!==(2064&l.subtreeFlags)&&null!==x)x.return=l,Jl=x;else e:for(l=y;null!==Jl;){if(0!==(2048&(s=Jl).flags))try{switch(s.tag){case 0:case 11:case 15:rs(9,s)}}catch(S){Eu(s,s.return,S)}if(s===l){Jl=null;break e}var w=s.sibling;if(null!==w){w.return=s.return,Jl=w;break e}Jl=s.return}}if(Rs=o,Wo(),at&&"function"===typeof at.onPostCommitFiberRoot)try{at.onPostCommitFiberRoot(ot,e)}catch(S){}r=!0}return r}finally{yt=n,_s.transition=t}}return!1}function ku(e,t,n){e=$a(e,t=pl(0,t=ul(n,t),1),1),t=eu(),null!==e&&(bt(e,1,t),ru(e,t))}function Eu(e,t,n){if(3===e.tag)ku(e,e,n);else for(;null!==t;){if(3===t.tag){ku(t,e,n);break}if(1===t.tag){var r=t.stateNode;if("function"===typeof t.type.getDerivedStateFromError||"function"===typeof r.componentDidCatch&&(null===Ks||!Ks.has(r))){t=$a(t,e=hl(t,e=ul(n,e),1),1),e=eu(),null!==t&&(bt(t,1,e),ru(t,e));break}}t=t.return}}function ju(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),t=eu(),e.pingedLanes|=e.suspendedLanes&n,Ps===e&&(Os&n)===n&&(4===zs||3===zs&&(130023424&Os)===Os&&500>Ye()-Ms?fu(e,0):Is|=n),ru(e,t)}function Cu(e,t){0===t&&(0===(1&e.mode)?t=1:(t=ct,0===(130023424&(ct<<=1))&&(ct=4194304)));var n=eu();null!==(e=Aa(e,t))&&(bt(e,t,n),ru(e,n))}function _u(e){var t=e.memoizedState,n=0;null!==t&&(n=t.retryLane),Cu(e,n)}function Ru(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;null!==o&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(a(314))}null!==r&&r.delete(t),Cu(e,n)}function Pu(e,t){return qe(e,t)}function Tu(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ou(e,t,n,r){return new Tu(e,t,n,r)}function Nu(e){return!(!(e=e.prototype)||!e.isReactComponent)}function Lu(e,t){var n=e.alternate;return null===n?((n=Ou(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=14680064&e.flags,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function zu(e,t,n,r,o,i){var l=2;if(r=e,"function"===typeof e)Nu(e)&&(l=1);else if("string"===typeof e)l=5;else e:switch(e){case k:return Au(n.children,o,i,t);case E:l=8,o|=8;break;case j:return(e=Ou(12,n,t,2|o)).elementType=j,e.lanes=i,e;case P:return(e=Ou(13,n,t,o)).elementType=P,e.lanes=i,e;case T:return(e=Ou(19,n,t,o)).elementType=T,e.lanes=i,e;case L:return Du(n,o,i,t);default:if("object"===typeof e&&null!==e)switch(e.$$typeof){case C:l=10;break e;case _:l=9;break e;case R:l=11;break e;case O:l=14;break e;case N:l=16,r=null;break e}throw Error(a(130,null==e?e:typeof e,""))}return(t=Ou(l,n,t,o)).elementType=e,t.type=r,t.lanes=i,t}function Au(e,t,n,r){return(e=Ou(7,e,r,t)).lanes=n,e}function Du(e,t,n,r){return(e=Ou(22,e,r,t)).elementType=L,e.lanes=n,e.stateNode={isHidden:!1},e}function Fu(e,t,n){return(e=Ou(6,e,null,t)).lanes=n,e}function Iu(e,t,n){return(t=Ou(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Uu(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=gt(0),this.expirationTimes=gt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=gt(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function $u(e,t,n,r,o,a,i,l,s){return e=new Uu(e,t,n,l,s),1===t?(t=1,!0===a&&(t|=8)):t=0,a=Ou(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Fa(a),e}function Mu(e){if(!e)return Ro;e:{if(Be(e=e._reactInternals)!==e||1!==e.tag)throw Error(a(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Lo(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(null!==t);throw Error(a(171))}if(1===e.tag){var n=e.type;if(Lo(n))return Do(e,n,t)}return t}function Bu(e,t,n,r,o,a,i,l,s){return(e=$u(n,r,!0,e,0,a,0,l,s)).context=Mu(null),n=e.current,(a=Ua(r=eu(),o=tu(n))).callback=void 0!==t&&null!==t?t:null,$a(n,a,o),e.current.lanes=o,bt(e,o,r),ru(e,r),e}function Wu(e,t,n,r){var o=t.current,a=eu(),i=tu(o);return n=Mu(n),null===t.context?t.context=n:t.pendingContext=n,(t=Ua(a,i)).payload={element:e},null!==(r=void 0===r?null:r)&&(t.callback=r),null!==(e=$a(o,t,i))&&(nu(e,o,i,a),Ma(e,o,i)),i}function Hu(e){return(e=e.current).child?(e.child.tag,e.child.stateNode):null}function Vu(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function Ku(e,t){Vu(e,t),(e=e.alternate)&&Vu(e,t)}ks=function(e,t,n){if(null!==e)if(e.memoizedProps!==t.pendingProps||To.current)yl=!0;else{if(0===(e.lanes&n)&&0===(128&t.flags))return yl=!1,function(e,t,n){switch(t.tag){case 3:Pl(t),ha();break;case 5:Ja(t);break;case 1:Lo(t.type)&&Fo(t);break;case 4:Ga(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;_o(ka,r._currentValue),r._currentValue=o;break;case 13:if(null!==(r=t.memoizedState))return null!==r.dehydrated?(_o(ei,1&ei.current),t.flags|=128,null):0!==(n&t.child.childLanes)?Fl(e,t,n):(_o(ei,1&ei.current),null!==(e=Hl(e,t,n))?e.sibling:null);_o(ei,1&ei.current);break;case 19:if(r=0!==(n&t.childLanes),0!==(128&e.flags)){if(r)return Bl(e,t,n);t.flags|=128}if(null!==(o=t.memoizedState)&&(o.rendering=null,o.tail=null,o.lastEffect=null),_o(ei,ei.current),r)break;return null;case 22:case 23:return t.lanes=0,El(e,t,n)}return Hl(e,t,n)}(e,t,n);yl=0!==(131072&e.flags)}else yl=!1,aa&&0!==(1048576&t.flags)&&ea(t,qo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Wl(e,t),e=t.pendingProps;var o=No(t,Po.current);Ta(t,n),o=gi(null,t,r,e,o,n);var i=bi();return t.flags|=1,"object"===typeof o&&null!==o&&"function"===typeof o.render&&void 0===o.$$typeof?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Lo(r)?(i=!0,Fo(t)):i=!1,t.memoizedState=null!==o.state&&void 0!==o.state?o.state:null,Fa(t),o.updater=ol,t.stateNode=o,o._reactInternals=t,sl(t,r,e,n),t=Rl(null,t,r,!0,i,n)):(t.tag=0,aa&&i&&ta(t),xl(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Wl(e,t),e=t.pendingProps,r=(o=r._init)(r._payload),t.type=r,o=t.tag=function(e){if("function"===typeof e)return Nu(e)?1:0;if(void 0!==e&&null!==e){if((e=e.$$typeof)===R)return 11;if(e===O)return 14}return 2}(r),e=nl(r,e),o){case 0:t=Cl(null,t,r,e,n);break e;case 1:t=_l(null,t,r,e,n);break e;case 11:t=wl(null,t,r,e,n);break e;case 14:t=Sl(null,t,r,nl(r.type,e),n);break e}throw Error(a(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,Cl(e,t,r,o=t.elementType===r?o:nl(r,o),n);case 1:return r=t.type,o=t.pendingProps,_l(e,t,r,o=t.elementType===r?o:nl(r,o),n);case 3:e:{if(Pl(t),null===e)throw Error(a(387));r=t.pendingProps,o=(i=t.memoizedState).element,Ia(e,t),Wa(t,r,null,n);var l=t.memoizedState;if(r=l.element,i.isDehydrated){if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,256&t.flags){t=Tl(e,t,r,n,o=ul(Error(a(423)),t));break e}if(r!==o){t=Tl(e,t,r,n,o=ul(Error(a(424)),t));break e}for(oa=uo(t.stateNode.containerInfo.firstChild),ra=t,aa=!0,ia=null,n=Sa(t,null,r,n),t.child=n;n;)n.flags=-3&n.flags|4096,n=n.sibling}else{if(ha(),r===o){t=Hl(e,t,n);break e}xl(e,t,r,n)}t=t.child}return t;case 5:return Ja(t),null===e&&ca(t),r=t.type,o=t.pendingProps,i=null!==e?e.memoizedProps:null,l=o.children,no(r,o)?l=null:null!==i&&no(r,i)&&(t.flags|=32),jl(e,t),xl(e,t,l,n),t.child;case 6:return null===e&&ca(t),null;case 13:return Fl(e,t,n);case 4:return Ga(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=wa(t,null,r,n):xl(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,wl(e,t,r,o=t.elementType===r?o:nl(r,o),n);case 7:return xl(e,t,t.pendingProps,n),t.child;case 8:case 12:return xl(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,l=o.value,_o(ka,r._currentValue),r._currentValue=l,null!==i)if(lr(i.value,l)){if(i.children===o.children&&!To.current){t=Hl(e,t,n);break e}}else for(null!==(i=t.child)&&(i.return=t);null!==i;){var s=i.dependencies;if(null!==s){l=i.child;for(var u=s.firstContext;null!==u;){if(u.context===r){if(1===i.tag){(u=Ua(-1,n&-n)).tag=2;var c=i.updateQueue;if(null!==c){var d=(c=c.shared).pending;null===d?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}i.lanes|=n,null!==(u=i.alternate)&&(u.lanes|=n),Pa(i.return,n,t),s.lanes|=n;break}u=u.next}}else if(10===i.tag)l=i.type===t.type?null:i.child;else if(18===i.tag){if(null===(l=i.return))throw Error(a(341));l.lanes|=n,null!==(s=l.alternate)&&(s.lanes|=n),Pa(l,n,t),l=i.sibling}else l=i.child;if(null!==l)l.return=i;else for(l=i;null!==l;){if(l===t){l=null;break}if(null!==(i=l.sibling)){i.return=l.return,l=i;break}l=l.return}i=l}xl(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Ta(t,n),r=r(o=Oa(o)),t.flags|=1,xl(e,t,r,n),t.child;case 14:return o=nl(r=t.type,t.pendingProps),Sl(e,t,r,o=nl(r.type,o),n);case 15:return kl(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:nl(r,o),Wl(e,t),t.tag=1,Lo(r)?(e=!0,Fo(t)):e=!1,Ta(t,n),il(t,r,o),sl(t,r,o,n),Rl(null,t,r,!0,e,n);case 19:return Bl(e,t,n);case 22:return El(e,t,n)}throw Error(a(156,t.tag))};var qu="function"===typeof reportError?reportError:function(e){console.error(e)};function Qu(e){this._internalRoot=e}function Xu(e){this._internalRoot=e}function Gu(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function Yu(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function Ju(){}function Zu(e,t,n,r,o){var a=n._reactRootContainer;if(a){var i=a;if("function"===typeof o){var l=o;o=function(){var e=Hu(i);l.call(e)}}Wu(t,i,e,o)}else i=function(e,t,n,r,o){if(o){if("function"===typeof r){var a=r;r=function(){var e=Hu(i);a.call(e)}}var i=Bu(t,r,e,0,null,!1,0,"",Ju);return e._reactRootContainer=i,e[mo]=i.current,Br(8===e.nodeType?e.parentNode:e),cu(),i}for(;o=e.lastChild;)e.removeChild(o);if("function"===typeof r){var l=r;r=function(){var e=Hu(s);l.call(e)}}var s=$u(e,0,!1,null,0,!1,0,"",Ju);return e._reactRootContainer=s,e[mo]=s.current,Br(8===e.nodeType?e.parentNode:e),cu(function(){Wu(t,s,n,r)}),s}(n,t,e,o,r);return Hu(i)}Xu.prototype.render=Qu.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(a(409));Wu(e,t,null,null)},Xu.prototype.unmount=Qu.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;cu(function(){Wu(null,e,null,null)}),t[mo]=null}},Xu.prototype.unstable_scheduleHydration=function(e){if(e){var t=Et();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Lt.length&&0!==t&&t<Lt[n].priority;n++);Lt.splice(n,0,e),0===n&&Ft(e)}},wt=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=dt(t.pendingLanes);0!==n&&(vt(t,1|n),ru(t,Ye()),0===(6&Rs)&&(Bs=Ye()+500,Wo()))}break;case 13:cu(function(){var t=Aa(e,1);if(null!==t){var n=eu();nu(t,e,1,n)}}),Ku(e,1)}},St=function(e){if(13===e.tag){var t=Aa(e,134217728);if(null!==t)nu(t,e,134217728,eu());Ku(e,134217728)}},kt=function(e){if(13===e.tag){var t=tu(e),n=Aa(e,t);if(null!==n)nu(n,e,t,eu());Ku(e,t)}},Et=function(){return yt},jt=function(e,t){var n=yt;try{return yt=e,t()}finally{yt=n}},Se=function(e,t,n){switch(t){case"input":if(J(e,n),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=So(r);if(!o)throw Error(a(90));q(r),J(r,o)}}}break;case"textarea":ae(e,n);break;case"select":null!=(t=n.value)&&ne(e,!!n.multiple,t,!1)}},Re=uu,Pe=cu;var ec={usingClientEntryPoint:!1,Events:[xo,wo,So,Ce,_e,uu]},tc={findFiberByHostInstance:yo,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},nc={bundleType:tc.bundleType,version:tc.version,rendererPackageName:tc.rendererPackageName,rendererConfig:tc.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:x.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return null===(e=Ve(e))?null:e.stateNode},findFiberByHostInstance:tc.findFiberByHostInstance||function(){return null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var rc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!rc.isDisabled&&rc.supportsFiber)try{ot=rc.inject(nc),at=rc}catch(ce){}}t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ec,t.createPortal=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!Gu(t))throw Error(a(200));return function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:S,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}(e,t,null,n)},t.createRoot=function(e,t){if(!Gu(e))throw Error(a(299));var n=!1,r="",o=qu;return null!==t&&void 0!==t&&(!0===t.unstable_strictMode&&(n=!0),void 0!==t.identifierPrefix&&(r=t.identifierPrefix),void 0!==t.onRecoverableError&&(o=t.onRecoverableError)),t=$u(e,1,!1,null,0,n,0,r,o),e[mo]=t.current,Br(8===e.nodeType?e.parentNode:e),new Qu(t)},t.findDOMNode=function(e){if(null==e)return null;if(1===e.nodeType)return e;var t=e._reactInternals;if(void 0===t){if("function"===typeof e.render)throw Error(a(188));throw e=Object.keys(e).join(","),Error(a(268,e))}return e=null===(e=Ve(t))?null:e.stateNode},t.flushSync=function(e){return cu(e)},t.hydrate=function(e,t,n){if(!Yu(t))throw Error(a(200));return Zu(null,e,t,!0,n)},t.hydrateRoot=function(e,t,n){if(!Gu(e))throw Error(a(405));var r=null!=n&&n.hydratedSources||null,o=!1,i="",l=qu;if(null!==n&&void 0!==n&&(!0===n.unstable_strictMode&&(o=!0),void 0!==n.identifierPrefix&&(i=n.identifierPrefix),void 0!==n.onRecoverableError&&(l=n.onRecoverableError)),t=Bu(t,null,e,1,null!=n?n:null,o,0,i,l),e[mo]=t.current,Br(e),r)for(e=0;e<r.length;e++)o=(o=(n=r[e])._getVersion)(n._source),null==t.mutableSourceEagerHydrationData?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Xu(t)},t.render=function(e,t,n){if(!Yu(t))throw Error(a(200));return Zu(null,e,t,!1,n)},t.unmountComponentAtNode=function(e){if(!Yu(e))throw Error(a(40));return!!e._reactRootContainer&&(cu(function(){Zu(null,null,e,!1,function(){e._reactRootContainer=null,e[mo]=null})}),!0)},t.unstable_batchedUpdates=uu,t.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Yu(n))throw Error(a(200));if(null==e||void 0===e._reactInternals)throw Error(a(38));return Zu(e,t,n,!1,r)},t.version="18.3.1-next-f1338f8080-20240426"},853:(e,t,n)=>{"use strict";e.exports=n(234)},950:(e,t,n)=>{"use strict";!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=n(730)}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},(()=>{var e,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;n.t=function(r,o){if(1&o&&(r=this(r)),8&o)return r;if("object"===typeof r&&r){if(4&o&&r.__esModule)return r;if(16&o&&"function"===typeof r.then)return r}var a=Object.create(null);n.r(a);var i={};e=e||[null,t({}),t([]),t(t)];for(var l=2&o&&r;("object"==typeof l||"function"==typeof l)&&!~e.indexOf(l);l=t(l))Object.getOwnPropertyNames(l).forEach(e=>i[e]=()=>r[e]);return i.default=()=>r,n.d(a,i),a}})(),n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.nc=void 0,(()=>{"use strict";var e={};n.r(e),n.d(e,{hasBrowserEnv:()=>Io,hasStandardBrowserEnv:()=>$o,hasStandardBrowserWebWorkerEnv:()=>Mo,navigator:()=>Uo,origin:()=>Bo});var t,r=n(43),o=n.t(r,2),a=n(391),i=n(950),l=n.t(i,2);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}!function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"}(t||(t={}));const u="popstate";function c(e,t){if(!1===e||null===e||"undefined"===typeof e)throw new Error(t)}function d(e,t){if(!e){"undefined"!==typeof console&&console.warn(t);try{throw new Error(t)}catch(n){}}}function f(e,t){return{usr:e.state,key:e.key,idx:t}}function p(e,t,n,r){return void 0===n&&(n=null),s({pathname:"string"===typeof e?e:e.pathname,search:"",hash:""},"string"===typeof t?m(t):t,{state:n,key:t&&t.key||r||Math.random().toString(36).substr(2,8)})}function h(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&"?"!==n&&(t+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(t+="#"===r.charAt(0)?r:"#"+r),t}function m(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function g(e,n,r,o){void 0===o&&(o={});let{window:a=document.defaultView,v5Compat:i=!1}=o,l=a.history,d=t.Pop,m=null,g=b();function b(){return(l.state||{idx:null}).idx}function v(){d=t.Pop;let e=b(),n=null==e?null:e-g;g=e,m&&m({action:d,location:x.location,delta:n})}function y(e){let t="null"!==a.location.origin?a.location.origin:a.location.href,n="string"===typeof e?e:h(e);return n=n.replace(/ $/,"%20"),c(t,"No window.location.(origin|href) available to create URL for href: "+n),new URL(n,t)}null==g&&(g=0,l.replaceState(s({},l.state,{idx:g}),""));let x={get action(){return d},get location(){return e(a,l)},listen(e){if(m)throw new Error("A history only accepts one active listener");return a.addEventListener(u,v),m=e,()=>{a.removeEventListener(u,v),m=null}},createHref:e=>n(a,e),createURL:y,encodeLocation(e){let t=y(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:function(e,n){d=t.Push;let o=p(x.location,e,n);r&&r(o,e),g=b()+1;let s=f(o,g),u=x.createHref(o);try{l.pushState(s,"",u)}catch(c){if(c instanceof DOMException&&"DataCloneError"===c.name)throw c;a.location.assign(u)}i&&m&&m({action:d,location:x.location,delta:1})},replace:function(e,n){d=t.Replace;let o=p(x.location,e,n);r&&r(o,e),g=b();let a=f(o,g),s=x.createHref(o);l.replaceState(a,"",s),i&&m&&m({action:d,location:x.location,delta:0})},go:e=>l.go(e)};return x}var b;!function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"}(b||(b={}));new Set(["lazy","caseSensitive","path","id","index","children"]);function v(e,t,n){return void 0===n&&(n="/"),y(e,t,n,!1)}function y(e,t,n,r){let o=L(("string"===typeof t?m(t):t).pathname||"/",n);if(null==o)return null;let a=x(e);!function(e){e.sort((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){let n=e.length===t.length&&e.slice(0,-1).every((e,n)=>e===t[n]);return n?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map(e=>e.childrenIndex),t.routesMeta.map(e=>e.childrenIndex)))}(a);let i=null;for(let l=0;null==i&&l<a.length;++l){let e=N(o);i=T(a[l],e,r)}return i}function x(e,t,n,r){void 0===t&&(t=[]),void 0===n&&(n=[]),void 0===r&&(r="");let o=(e,o,a)=>{let i={relativePath:void 0===a?e.path||"":a,caseSensitive:!0===e.caseSensitive,childrenIndex:o,route:e};i.relativePath.startsWith("/")&&(c(i.relativePath.startsWith(r),'Absolute route path "'+i.relativePath+'" nested under path "'+r+'" is not valid. An absolute child route path must start with the combined path of all its parent routes.'),i.relativePath=i.relativePath.slice(r.length));let l=I([r,i.relativePath]),s=n.concat(i);e.children&&e.children.length>0&&(c(!0!==e.index,'Index routes must not have child routes. Please remove all child routes from route path "'+l+'".'),x(e.children,t,s,l)),(null!=e.path||e.index)&&t.push({path:l,score:P(l,e.index),routesMeta:s})};return e.forEach((e,t)=>{var n;if(""!==e.path&&null!=(n=e.path)&&n.includes("?"))for(let r of w(e.path))o(e,t,r);else o(e,t)}),t}function w(e){let t=e.split("/");if(0===t.length)return[];let[n,...r]=t,o=n.endsWith("?"),a=n.replace(/\?$/,"");if(0===r.length)return o?[a,""]:[a];let i=w(r.join("/")),l=[];return l.push(...i.map(e=>""===e?a:[a,e].join("/"))),o&&l.push(...i),l.map(t=>e.startsWith("/")&&""===t?"/":t)}const S=/^:[\w-]+$/,k=3,E=2,j=1,C=10,_=-2,R=e=>"*"===e;function P(e,t){let n=e.split("/"),r=n.length;return n.some(R)&&(r+=_),t&&(r+=E),n.filter(e=>!R(e)).reduce((e,t)=>e+(S.test(t)?k:""===t?j:C),r)}function T(e,t,n){void 0===n&&(n=!1);let{routesMeta:r}=e,o={},a="/",i=[];for(let l=0;l<r.length;++l){let e=r[l],s=l===r.length-1,u="/"===a?t:t.slice(a.length)||"/",c=O({path:e.relativePath,caseSensitive:e.caseSensitive,end:s},u),d=e.route;if(!c&&s&&n&&!r[r.length-1].route.index&&(c=O({path:e.relativePath,caseSensitive:e.caseSensitive,end:!1},u)),!c)return null;Object.assign(o,c.params),i.push({params:o,pathname:I([a,c.pathname]),pathnameBase:U(I([a,c.pathnameBase])),route:d}),"/"!==c.pathnameBase&&(a=I([a,c.pathnameBase]))}return i}function O(e,t){"string"===typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=function(e,t,n){void 0===t&&(t=!1);void 0===n&&(n=!0);d("*"===e||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were "'+e.replace(/\*$/,"/*")+'" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "'+e.replace(/\*$/,"/*")+'".');let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(e,t,n)=>(r.push({paramName:t,isOptional:null!=n}),n?"/?([^\\/]+)?":"/([^\\/]+)"));e.endsWith("*")?(r.push({paramName:"*"}),o+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":""!==e&&"/"!==e&&(o+="(?:(?=\\/|$))");let a=new RegExp(o,t?void 0:"i");return[a,r]}(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let a=o[0],i=a.replace(/(.)\/+$/,"$1"),l=o.slice(1);return{params:r.reduce((e,t,n)=>{let{paramName:r,isOptional:o}=t;if("*"===r){let e=l[n]||"";i=a.slice(0,a.length-e.length).replace(/(.)\/+$/,"$1")}const s=l[n];return e[r]=o&&!s?void 0:(s||"").replace(/%2F/g,"/"),e},{}),pathname:a,pathnameBase:i,pattern:e}}function N(e){try{return e.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(t){return d(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding ('+t+")."),e}}function L(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&"/"!==r?null:e.slice(n)||"/"}function z(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified `to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the `to."+n+'` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'}function A(e){return e.filter((e,t)=>0===t||e.route.path&&e.route.path.length>0)}function D(e,t){let n=A(e);return t?n.map((e,t)=>t===n.length-1?e.pathname:e.pathnameBase):n.map(e=>e.pathnameBase)}function F(e,t,n,r){let o;void 0===r&&(r=!1),"string"===typeof e?o=m(e):(o=s({},e),c(!o.pathname||!o.pathname.includes("?"),z("?","pathname","search",o)),c(!o.pathname||!o.pathname.includes("#"),z("#","pathname","hash",o)),c(!o.search||!o.search.includes("#"),z("#","search","hash",o)));let a,i=""===e||""===o.pathname,l=i?"/":o.pathname;if(null==l)a=n;else{let e=t.length-1;if(!r&&l.startsWith("..")){let t=l.split("/");for(;".."===t[0];)t.shift(),e-=1;o.pathname=t.join("/")}a=e>=0?t[e]:"/"}let u=function(e,t){void 0===t&&(t="/");let{pathname:n,search:r="",hash:o=""}="string"===typeof e?m(e):e,a=n?n.startsWith("/")?n:function(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(e=>{".."===e?n.length>1&&n.pop():"."!==e&&n.push(e)}),n.length>1?n.join("/"):"/"}(n,t):t;return{pathname:a,search:$(r),hash:M(o)}}(o,a),d=l&&"/"!==l&&l.endsWith("/"),f=(i||"."===l)&&n.endsWith("/");return u.pathname.endsWith("/")||!d&&!f||(u.pathname+="/"),u}const I=e=>e.join("/").replace(/\/\/+/g,"/"),U=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),$=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",M=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";Error;function B(e){return null!=e&&"number"===typeof e.status&&"string"===typeof e.statusText&&"boolean"===typeof e.internal&&"data"in e}const W=["post","put","patch","delete"],H=(new Set(W),["get",...W]);new Set(H),new Set([301,302,303,307,308]),new Set([307,308]);Symbol("deferred");function V(){return V=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},V.apply(this,arguments)}const K=r.createContext(null);const q=r.createContext(null);const Q=r.createContext(null);const X=r.createContext(null);const G=r.createContext({outlet:null,matches:[],isDataRoute:!1});const Y=r.createContext(null);function J(){return null!=r.useContext(X)}function Z(){return J()||c(!1),r.useContext(X).location}function ee(e){r.useContext(Q).static||r.useLayoutEffect(e)}function te(){let{isDataRoute:e}=r.useContext(G);return e?function(){let{router:e}=fe(ce.UseNavigateStable),t=he(de.UseNavigateStable),n=r.useRef(!1);return ee(()=>{n.current=!0}),r.useCallback(function(r,o){void 0===o&&(o={}),n.current&&("number"===typeof r?e.navigate(r):e.navigate(r,V({fromRouteId:t},o)))},[e,t])}():function(){J()||c(!1);let e=r.useContext(K),{basename:t,future:n,navigator:o}=r.useContext(Q),{matches:a}=r.useContext(G),{pathname:i}=Z(),l=JSON.stringify(D(a,n.v7_relativeSplatPath)),s=r.useRef(!1);return ee(()=>{s.current=!0}),r.useCallback(function(n,r){if(void 0===r&&(r={}),!s.current)return;if("number"===typeof n)return void o.go(n);let a=F(n,JSON.parse(l),i,"path"===r.relative);null==e&&"/"!==t&&(a.pathname="/"===a.pathname?t:I([t,a.pathname])),(r.replace?o.replace:o.push)(a,r.state,r)},[t,o,l,i,e])}()}function ne(){let{matches:e}=r.useContext(G),t=e[e.length-1];return t?t.params:{}}function re(e,t){let{relative:n}=void 0===t?{}:t,{future:o}=r.useContext(Q),{matches:a}=r.useContext(G),{pathname:i}=Z(),l=JSON.stringify(D(a,o.v7_relativeSplatPath));return r.useMemo(()=>F(e,JSON.parse(l),i,"path"===n),[e,l,i,n])}function oe(e,n,o,a){J()||c(!1);let{navigator:i}=r.useContext(Q),{matches:l}=r.useContext(G),s=l[l.length-1],u=s?s.params:{},d=(s&&s.pathname,s?s.pathnameBase:"/");s&&s.route;let f,p=Z();if(n){var h;let e="string"===typeof n?m(n):n;"/"===d||(null==(h=e.pathname)?void 0:h.startsWith(d))||c(!1),f=e}else f=p;let g=f.pathname||"/",b=g;if("/"!==d){let e=d.replace(/^\//,"").split("/");b="/"+g.replace(/^\//,"").split("/").slice(e.length).join("/")}let y=v(e,{pathname:b});let x=ue(y&&y.map(e=>Object.assign({},e,{params:Object.assign({},u,e.params),pathname:I([d,i.encodeLocation?i.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?d:I([d,i.encodeLocation?i.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])})),l,o,a);return n&&x?r.createElement(X.Provider,{value:{location:V({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:t.Pop}},x):x}function ae(){let e=function(){var e;let t=r.useContext(Y),n=pe(de.UseRouteError),o=he(de.UseRouteError);if(void 0!==t)return t;return null==(e=n.errors)?void 0:e[o]}(),t=B(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,o="rgba(200,200,200, 0.5)",a={padding:"0.5rem",backgroundColor:o};return r.createElement(r.Fragment,null,r.createElement("h2",null,"Unexpected Application Error!"),r.createElement("h3",{style:{fontStyle:"italic"}},t),n?r.createElement("pre",{style:a},n):null,null)}const ie=r.createElement(ae,null);class le extends r.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||"idle"!==t.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:void 0!==e.error?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return void 0!==this.state.error?r.createElement(G.Provider,{value:this.props.routeContext},r.createElement(Y.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function se(e){let{routeContext:t,match:n,children:o}=e,a=r.useContext(K);return a&&a.static&&a.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=n.route.id),r.createElement(G.Provider,{value:t},o)}function ue(e,t,n,o){var a;if(void 0===t&&(t=[]),void 0===n&&(n=null),void 0===o&&(o=null),null==e){var i;if(!n)return null;if(n.errors)e=n.matches;else{if(!(null!=(i=o)&&i.v7_partialHydration&&0===t.length&&!n.initialized&&n.matches.length>0))return null;e=n.matches}}let l=e,s=null==(a=n)?void 0:a.errors;if(null!=s){let e=l.findIndex(e=>e.route.id&&void 0!==(null==s?void 0:s[e.route.id]));e>=0||c(!1),l=l.slice(0,Math.min(l.length,e+1))}let u=!1,d=-1;if(n&&o&&o.v7_partialHydration)for(let r=0;r<l.length;r++){let e=l[r];if((e.route.HydrateFallback||e.route.hydrateFallbackElement)&&(d=r),e.route.id){let{loaderData:t,errors:r}=n,o=e.route.loader&&void 0===t[e.route.id]&&(!r||void 0===r[e.route.id]);if(e.route.lazy||o){u=!0,l=d>=0?l.slice(0,d+1):[l[0]];break}}}return l.reduceRight((e,o,a)=>{let i,c=!1,f=null,p=null;var h;n&&(i=s&&o.route.id?s[o.route.id]:void 0,f=o.route.errorElement||ie,u&&(d<0&&0===a?(h="route-fallback",!1||me[h]||(me[h]=!0),c=!0,p=null):d===a&&(c=!0,p=o.route.hydrateFallbackElement||null)));let m=t.concat(l.slice(0,a+1)),g=()=>{let t;return t=i?f:c?p:o.route.Component?r.createElement(o.route.Component,null):o.route.element?o.route.element:e,r.createElement(se,{match:o,routeContext:{outlet:e,matches:m,isDataRoute:null!=n},children:t})};return n&&(o.route.ErrorBoundary||o.route.errorElement||0===a)?r.createElement(le,{location:n.location,revalidation:n.revalidation,component:f,error:i,children:g(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):g()},null)}var ce=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(ce||{}),de=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(de||{});function fe(e){let t=r.useContext(K);return t||c(!1),t}function pe(e){let t=r.useContext(q);return t||c(!1),t}function he(e){let t=function(){let e=r.useContext(G);return e||c(!1),e}(),n=t.matches[t.matches.length-1];return n.route.id||c(!1),n.route.id}const me={};function ge(e,t){null==e||e.v7_startTransition,void 0===(null==e?void 0:e.v7_relativeSplatPath)&&(!t||t.v7_relativeSplatPath),t&&(t.v7_fetcherPersist,t.v7_normalizeFormMethod,t.v7_partialHydration,t.v7_skipActionErrorRevalidation)}o.startTransition;function be(e){c(!1)}function ve(e){let{basename:n="/",children:o=null,location:a,navigationType:i=t.Pop,navigator:l,static:s=!1,future:u}=e;J()&&c(!1);let d=n.replace(/^\/*/,"/"),f=r.useMemo(()=>({basename:d,navigator:l,static:s,future:V({v7_relativeSplatPath:!1},u)}),[d,u,l,s]);"string"===typeof a&&(a=m(a));let{pathname:p="/",search:h="",hash:g="",state:b=null,key:v="default"}=a,y=r.useMemo(()=>{let e=L(p,d);return null==e?null:{location:{pathname:e,search:h,hash:g,state:b,key:v},navigationType:i}},[d,p,h,g,b,v,i]);return null==y?null:r.createElement(Q.Provider,{value:f},r.createElement(X.Provider,{children:o,value:y}))}function ye(e){let{children:t,location:n}=e;return oe(xe(t),n)}new Promise(()=>{});r.Component;function xe(e,t){void 0===t&&(t=[]);let n=[];return r.Children.forEach(e,(e,o)=>{if(!r.isValidElement(e))return;let a=[...t,o];if(e.type===r.Fragment)return void n.push.apply(n,xe(e.props.children,a));e.type!==be&&c(!1),e.props.index&&e.props.children&&c(!1);let i={id:e.props.id||a.join("-"),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,loader:e.props.loader,action:e.props.action,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:null!=e.props.ErrorBoundary||null!=e.props.errorElement,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(i.children=xe(e.props.children,a)),n.push(i)}),n}function we(){return we=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},we.apply(this,arguments)}function Se(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);const ke=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"];try{window.__reactRouterVersion="6"}catch(uu){}new Map;const Ee=o.startTransition;l.flushSync,o.useId;function je(e){let{basename:t,children:n,future:o,window:a}=e,i=r.useRef();var l;null==i.current&&(i.current=(void 0===(l={window:a,v5Compat:!0})&&(l={}),g(function(e,t){let{pathname:n,search:r,hash:o}=e.location;return p("",{pathname:n,search:r,hash:o},t.state&&t.state.usr||null,t.state&&t.state.key||"default")},function(e,t){return"string"===typeof t?t:h(t)},null,l)));let s=i.current,[u,c]=r.useState({action:s.action,location:s.location}),{v7_startTransition:d}=o||{},f=r.useCallback(e=>{d&&Ee?Ee(()=>c(e)):c(e)},[c,d]);return r.useLayoutEffect(()=>s.listen(f),[s,f]),r.useEffect(()=>ge(o),[o]),r.createElement(ve,{basename:t,children:n,location:u.location,navigationType:u.action,navigator:s,future:o})}const Ce="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement,_e=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Re=r.forwardRef(function(e,t){let n,{onClick:o,relative:a,reloadDocument:i,replace:l,state:s,target:u,to:d,preventScrollReset:f,viewTransition:p}=e,m=Se(e,ke),{basename:g}=r.useContext(Q),b=!1;if("string"===typeof d&&_e.test(d)&&(n=d,Ce))try{let e=new URL(window.location.href),t=d.startsWith("//")?new URL(e.protocol+d):new URL(d),n=L(t.pathname,g);t.origin===e.origin&&null!=n?d=n+t.search+t.hash:b=!0}catch(uu){}let v=function(e,t){let{relative:n}=void 0===t?{}:t;J()||c(!1);let{basename:o,navigator:a}=r.useContext(Q),{hash:i,pathname:l,search:s}=re(e,{relative:n}),u=l;return"/"!==o&&(u="/"===l?o:I([o,l])),a.createHref({pathname:u,search:s,hash:i})}(d,{relative:a}),y=function(e,t){let{target:n,replace:o,state:a,preventScrollReset:i,relative:l,viewTransition:s}=void 0===t?{}:t,u=te(),c=Z(),d=re(e,{relative:l});return r.useCallback(t=>{if(function(e,t){return 0===e.button&&(!t||"_self"===t)&&!function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)}(t,n)){t.preventDefault();let n=void 0!==o?o:h(c)===h(d);u(e,{replace:n,state:a,preventScrollReset:i,relative:l,viewTransition:s})}},[c,u,d,o,a,n,e,i,l,s])}(d,{replace:l,state:s,target:u,preventScrollReset:f,relative:a,viewTransition:p});return r.createElement("a",we({},m,{href:n||v,onClick:b||i?o:function(e){o&&o(e),e.defaultPrevented||y(e)},ref:t,target:u}))});var Pe,Te;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Pe||(Pe={})),function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"}(Te||(Te={}));var Oe=function(){return Oe=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},Oe.apply(this,arguments)};Object.create;function Ne(e,t,n){if(n||2===arguments.length)for(var r,o=0,a=t.length;o<a;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))}Object.create;"function"===typeof SuppressedError&&SuppressedError;var Le=n(324),ze=n.n(Le),Ae="-ms-",De="-moz-",Fe="-webkit-",Ie="comm",Ue="rule",$e="decl",Me="@keyframes",Be=Math.abs,We=String.fromCharCode,He=Object.assign;function Ve(e){return e.trim()}function Ke(e,t){return(e=t.exec(e))?e[0]:e}function qe(e,t,n){return e.replace(t,n)}function Qe(e,t,n){return e.indexOf(t,n)}function Xe(e,t){return 0|e.charCodeAt(t)}function Ge(e,t,n){return e.slice(t,n)}function Ye(e){return e.length}function Je(e){return e.length}function Ze(e,t){return t.push(e),e}function et(e,t){return e.filter(function(e){return!Ke(e,t)})}var tt=1,nt=1,rt=0,ot=0,at=0,it="";function lt(e,t,n,r,o,a,i,l){return{value:e,root:t,parent:n,type:r,props:o,children:a,line:tt,column:nt,length:i,return:"",siblings:l}}function st(e,t){return He(lt("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function ut(e){for(;e.root;)e=st(e.root,{children:[e]});Ze(e,e.siblings)}function ct(){return at=ot>0?Xe(it,--ot):0,nt--,10===at&&(nt=1,tt--),at}function dt(){return at=ot<rt?Xe(it,ot++):0,nt++,10===at&&(nt=1,tt++),at}function ft(){return Xe(it,ot)}function pt(){return ot}function ht(e,t){return Ge(it,e,t)}function mt(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function gt(e){return tt=nt=1,rt=Ye(it=e),ot=0,[]}function bt(e){return it="",e}function vt(e){return Ve(ht(ot-1,wt(91===e?e+2:40===e?e+1:e)))}function yt(e){for(;(at=ft())&&at<33;)dt();return mt(e)>2||mt(at)>3?"":" "}function xt(e,t){for(;--t&&dt()&&!(at<48||at>102||at>57&&at<65||at>70&&at<97););return ht(e,pt()+(t<6&&32==ft()&&32==dt()))}function wt(e){for(;dt();)switch(at){case e:return ot;case 34:case 39:34!==e&&39!==e&&wt(at);break;case 40:41===e&&wt(e);break;case 92:dt()}return ot}function St(e,t){for(;dt()&&e+at!==57&&(e+at!==84||47!==ft()););return"/*"+ht(t,ot-1)+"*"+We(47===e?e:dt())}function kt(e){for(;!mt(ft());)dt();return ht(e,ot)}function Et(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function jt(e,t,n,r){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case $e:return e.return=e.return||e.value;case Ie:return"";case Me:return e.return=e.value+"{"+Et(e.children,r)+"}";case Ue:if(!Ye(e.value=e.props.join(",")))return""}return Ye(n=Et(e.children,r))?e.return=e.value+"{"+n+"}":""}function Ct(e,t,n){switch(function(e,t){return 45^Xe(e,0)?(((t<<2^Xe(e,0))<<2^Xe(e,1))<<2^Xe(e,2))<<2^Xe(e,3):0}(e,t)){case 5103:return Fe+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Fe+e+e;case 4789:return De+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Fe+e+De+e+Ae+e+e;case 5936:switch(Xe(e,t+11)){case 114:return Fe+e+Ae+qe(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return Fe+e+Ae+qe(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return Fe+e+Ae+qe(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return Fe+e+Ae+e+e;case 6165:return Fe+e+Ae+"flex-"+e+e;case 5187:return Fe+e+qe(e,/(\w+).+(:[^]+)/,Fe+"box-$1$2"+Ae+"flex-$1$2")+e;case 5443:return Fe+e+Ae+"flex-item-"+qe(e,/flex-|-self/g,"")+(Ke(e,/flex-|baseline/)?"":Ae+"grid-row-"+qe(e,/flex-|-self/g,""))+e;case 4675:return Fe+e+Ae+"flex-line-pack"+qe(e,/align-content|flex-|-self/g,"")+e;case 5548:return Fe+e+Ae+qe(e,"shrink","negative")+e;case 5292:return Fe+e+Ae+qe(e,"basis","preferred-size")+e;case 6060:return Fe+"box-"+qe(e,"-grow","")+Fe+e+Ae+qe(e,"grow","positive")+e;case 4554:return Fe+qe(e,/([^-])(transform)/g,"$1"+Fe+"$2")+e;case 6187:return qe(qe(qe(e,/(zoom-|grab)/,Fe+"$1"),/(image-set)/,Fe+"$1"),e,"")+e;case 5495:case 3959:return qe(e,/(image-set\([^]*)/,Fe+"$1$`$1");case 4968:return qe(qe(e,/(.+:)(flex-)?(.*)/,Fe+"box-pack:$3"+Ae+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Fe+e+e;case 4200:if(!Ke(e,/flex-|baseline/))return Ae+"grid-column-align"+Ge(e,t)+e;break;case 2592:case 3360:return Ae+qe(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(e,n){return t=n,Ke(e.props,/grid-\w+-end/)})?~Qe(e+(n=n[t].value),"span",0)?e:Ae+qe(e,"-start","")+e+Ae+"grid-row-span:"+(~Qe(n,"span",0)?Ke(n,/\d+/):+Ke(n,/\d+/)-+Ke(e,/\d+/))+";":Ae+qe(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(e){return Ke(e.props,/grid-\w+-start/)})?e:Ae+qe(qe(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return qe(e,/(.+)-inline(.+)/,Fe+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Ye(e)-1-t>6)switch(Xe(e,t+1)){case 109:if(45!==Xe(e,t+4))break;case 102:return qe(e,/(.+:)(.+)-([^]+)/,"$1"+Fe+"$2-$3$1"+De+(108==Xe(e,t+3)?"$3":"$2-$3"))+e;case 115:return~Qe(e,"stretch",0)?Ct(qe(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return qe(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(t,n,r,o,a,i,l){return Ae+n+":"+r+l+(o?Ae+n+"-span:"+(a?i:+i-+r)+l:"")+e});case 4949:if(121===Xe(e,t+6))return qe(e,":",":"+Fe)+e;break;case 6444:switch(Xe(e,45===Xe(e,14)?18:11)){case 120:return qe(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Fe+(45===Xe(e,14)?"inline-":"")+"box$3$1"+Fe+"$2$3$1"+Ae+"$2box$3")+e;case 100:return qe(e,":",":"+Ae)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return qe(e,"scroll-","scroll-snap-")+e}return e}function _t(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case $e:return void(e.return=Ct(e.value,e.length,n));case Me:return Et([st(e,{value:qe(e.value,"@","@"+Fe)})],r);case Ue:if(e.length)return function(e,t){return e.map(t).join("")}(n=e.props,function(t){switch(Ke(t,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":ut(st(e,{props:[qe(t,/:(read-\w+)/,":-moz-$1")]})),ut(st(e,{props:[t]})),He(e,{props:et(n,r)});break;case"::placeholder":ut(st(e,{props:[qe(t,/:(plac\w+)/,":"+Fe+"input-$1")]})),ut(st(e,{props:[qe(t,/:(plac\w+)/,":-moz-$1")]})),ut(st(e,{props:[qe(t,/:(plac\w+)/,Ae+"input-$1")]})),ut(st(e,{props:[t]})),He(e,{props:et(n,r)})}return""})}}function Rt(e){return bt(Pt("",null,null,null,[""],e=gt(e),0,[0],e))}function Pt(e,t,n,r,o,a,i,l,s){for(var u=0,c=0,d=i,f=0,p=0,h=0,m=1,g=1,b=1,v=0,y="",x=o,w=a,S=r,k=y;g;)switch(h=v,v=dt()){case 40:if(108!=h&&58==Xe(k,d-1)){-1!=Qe(k+=qe(vt(v),"&","&\f"),"&\f",Be(u?l[u-1]:0))&&(b=-1);break}case 34:case 39:case 91:k+=vt(v);break;case 9:case 10:case 13:case 32:k+=yt(h);break;case 92:k+=xt(pt()-1,7);continue;case 47:switch(ft()){case 42:case 47:Ze(Ot(St(dt(),pt()),t,n,s),s);break;default:k+="/"}break;case 123*m:l[u++]=Ye(k)*b;case 125*m:case 59:case 0:switch(v){case 0:case 125:g=0;case 59+c:-1==b&&(k=qe(k,/\f/g,"")),p>0&&Ye(k)-d&&Ze(p>32?Nt(k+";",r,n,d-1,s):Nt(qe(k," ","")+";",r,n,d-2,s),s);break;case 59:k+=";";default:if(Ze(S=Tt(k,t,n,u,c,o,l,y,x=[],w=[],d,a),a),123===v)if(0===c)Pt(k,t,S,S,x,a,d,l,w);else switch(99===f&&110===Xe(k,3)?100:f){case 100:case 108:case 109:case 115:Pt(e,S,S,r&&Ze(Tt(e,S,S,0,0,o,l,y,o,x=[],d,w),w),o,w,d,l,r?x:w);break;default:Pt(k,S,S,S,[""],w,0,l,w)}}u=c=p=0,m=b=1,y=k="",d=i;break;case 58:d=1+Ye(k),p=h;default:if(m<1)if(123==v)--m;else if(125==v&&0==m++&&125==ct())continue;switch(k+=We(v),v*m){case 38:b=c>0?1:(k+="\f",-1);break;case 44:l[u++]=(Ye(k)-1)*b,b=1;break;case 64:45===ft()&&(k+=vt(dt())),f=ft(),c=d=Ye(y=k+=kt(pt())),v++;break;case 45:45===h&&2==Ye(k)&&(m=0)}}return a}function Tt(e,t,n,r,o,a,i,l,s,u,c,d){for(var f=o-1,p=0===o?a:[""],h=Je(p),m=0,g=0,b=0;m<r;++m)for(var v=0,y=Ge(e,f+1,f=Be(g=i[m])),x=e;v<h;++v)(x=Ve(g>0?p[v]+" "+y:qe(y,/&\f/g,p[v])))&&(s[b++]=x);return lt(e,t,n,0===o?Ue:l,s,u,c,d)}function Ot(e,t,n,r){return lt(e,t,n,Ie,We(at),Ge(e,2,-2),0,r)}function Nt(e,t,n,r,o){return lt(e,t,n,$e,Ge(e,0,r),Ge(e,r+1,-1),r,o)}var Lt={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},zt="undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_BACKEND_URL:"http://localhost:5000/api"}&&({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_BACKEND_URL:"http://localhost:5000/api"}.REACT_APP_SC_ATTR||{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_BACKEND_URL:"http://localhost:5000/api"}.SC_ATTR)||"data-styled",At="active",Dt="data-styled-version",Ft="6.1.19",It="/*!sc*/\n",Ut="undefined"!=typeof window&&"undefined"!=typeof document,$t=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_BACKEND_URL:"http://localhost:5000/api"}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_BACKEND_URL:"http://localhost:5000/api"}.REACT_APP_SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_BACKEND_URL:"http://localhost:5000/api"}.REACT_APP_SC_DISABLE_SPEEDY?"false"!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_BACKEND_URL:"http://localhost:5000/api"}.REACT_APP_SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_BACKEND_URL:"http://localhost:5000/api"}.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_BACKEND_URL:"http://localhost:5000/api"}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_BACKEND_URL:"http://localhost:5000/api"}.SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_BACKEND_URL:"http://localhost:5000/api"}.SC_DISABLE_SPEEDY&&("false"!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_BACKEND_URL:"http://localhost:5000/api"}.SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_BACKEND_URL:"http://localhost:5000/api"}.SC_DISABLE_SPEEDY)),Mt=(new Set,Object.freeze([])),Bt=Object.freeze({});function Wt(e,t,n){return void 0===n&&(n=Bt),e.theme!==n.theme&&e.theme||t||n.theme}var Ht=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Vt=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Kt=/(^-|-$)/g;function qt(e){return e.replace(Vt,"-").replace(Kt,"")}var Qt=/(a)(d)/gi,Xt=function(e){return String.fromCharCode(e+(e>25?39:97))};function Gt(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Xt(t%52)+n;return(Xt(t%52)+n).replace(Qt,"$1-$2")}var Yt,Jt=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Zt=function(e){return Jt(5381,e)};function en(e){return Gt(Zt(e)>>>0)}function tn(e){return e.displayName||e.name||"Component"}function nn(e){return"string"==typeof e&&!0}var rn="function"==typeof Symbol&&Symbol.for,on=rn?Symbol.for("react.memo"):60115,an=rn?Symbol.for("react.forward_ref"):60112,ln={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},sn={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},un={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},cn=((Yt={})[an]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Yt[on]=un,Yt);function dn(e){return("type"in(t=e)&&t.type.$$typeof)===on?un:"$$typeof"in e?cn[e.$$typeof]:ln;var t}var fn=Object.defineProperty,pn=Object.getOwnPropertyNames,hn=Object.getOwnPropertySymbols,mn=Object.getOwnPropertyDescriptor,gn=Object.getPrototypeOf,bn=Object.prototype;function vn(e,t,n){if("string"!=typeof t){if(bn){var r=gn(t);r&&r!==bn&&vn(e,r,n)}var o=pn(t);hn&&(o=o.concat(hn(t)));for(var a=dn(e),i=dn(t),l=0;l<o.length;++l){var s=o[l];if(!(s in sn||n&&n[s]||i&&s in i||a&&s in a)){var u=mn(t,s);try{fn(e,s,u)}catch(e){}}}}return e}function yn(e){return"function"==typeof e}function xn(e){return"object"==typeof e&&"styledComponentId"in e}function wn(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Sn(e,t){if(0===e.length)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function kn(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function En(e,t,n){if(void 0===n&&(n=!1),!n&&!kn(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=En(e[r],t[r]);else if(kn(t))for(var r in t)e[r]=En(e[r],t[r]);return e}function jn(e,t){Object.defineProperty(e,"toString",{value:t})}function Cn(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var _n=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return e.prototype.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,o=r;e>=o;)if((o<<=1)<0)throw Cn(16,"".concat(e));this.groupSizes=new Uint32Array(o),this.groupSizes.set(n),this.length=o;for(var a=r;a<o;a++)this.groupSizes[a]=0}for(var i=this.indexOfGroup(e+1),l=(a=0,t.length);a<l;a++)this.tag.insertRule(i,t[a])&&(this.groupSizes[e]++,i++)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var o=n;o<r;o++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),o=r+n,a=r;a<o;a++)t+="".concat(this.tag.getRule(a)).concat(It);return t},e}(),Rn=new Map,Pn=new Map,Tn=1,On=function(e){if(Rn.has(e))return Rn.get(e);for(;Pn.has(Tn);)Tn++;var t=Tn++;return Rn.set(e,t),Pn.set(t,e),t},Nn=function(e,t){Tn=t+1,Rn.set(e,t),Pn.set(t,e)},Ln="style[".concat(zt,"][").concat(Dt,'="').concat(Ft,'"]'),zn=new RegExp("^".concat(zt,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),An=function(e,t,n){for(var r,o=n.split(","),a=0,i=o.length;a<i;a++)(r=o[a])&&e.registerName(t,r)},Dn=function(e,t){for(var n,r=(null!==(n=t.textContent)&&void 0!==n?n:"").split(It),o=[],a=0,i=r.length;a<i;a++){var l=r[a].trim();if(l){var s=l.match(zn);if(s){var u=0|parseInt(s[1],10),c=s[2];0!==u&&(Nn(c,u),An(e,c,s[3]),e.getTag().insertRules(u,o)),o.length=0}else o.push(l)}}},Fn=function(e){for(var t=document.querySelectorAll(Ln),n=0,r=t.length;n<r;n++){var o=t[n];o&&o.getAttribute(zt)!==At&&(Dn(e,o),o.parentNode&&o.parentNode.removeChild(o))}};function In(){return n.nc}var Un=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(e){var t=Array.from(e.querySelectorAll("style[".concat(zt,"]")));return t[t.length-1]}(n),a=void 0!==o?o.nextSibling:null;r.setAttribute(zt,At),r.setAttribute(Dt,Ft);var i=In();return i&&r.setAttribute("nonce",i),n.insertBefore(r,a),r},$n=function(){function e(e){this.element=Un(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var o=t[n];if(o.ownerNode===e)return o}throw Cn(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),Mn=function(){function e(e){this.element=Un(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),Bn=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),Wn=Ut,Hn={isServer:!Ut,useCSSOMInjection:!$t},Vn=function(){function e(e,t,n){void 0===e&&(e=Bt),void 0===t&&(t={});var r=this;this.options=Oe(Oe({},Hn),e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&Ut&&Wn&&(Wn=!1,Fn(this)),jn(this,function(){return function(e){for(var t=e.getTag(),n=t.length,r="",o=function(n){var o=function(e){return Pn.get(e)}(n);if(void 0===o)return"continue";var a=e.names.get(o),i=t.getGroup(n);if(void 0===a||!a.size||0===i.length)return"continue";var l="".concat(zt,".g").concat(n,'[id="').concat(o,'"]'),s="";void 0!==a&&a.forEach(function(e){e.length>0&&(s+="".concat(e,","))}),r+="".concat(i).concat(l,'{content:"').concat(s,'"}').concat(It)},a=0;a<n;a++)o(a);return r}(r)})}return e.registerId=function(e){return On(e)},e.prototype.rehydrate=function(){!this.server&&Ut&&Fn(this)},e.prototype.reconstructWithOptions=function(t,n){return void 0===n&&(n=!0),new e(Oe(Oe({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(e=function(e){var t=e.useCSSOMInjection,n=e.target;return e.isServer?new Bn(n):t?new $n(n):new Mn(n)}(this.options),new _n(e)));var e},e.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},e.prototype.registerName=function(e,t){if(On(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},e.prototype.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(On(e),n)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(On(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Kn=/&/g,qn=/^\s*\/\/.*$/gm;function Qn(e,t){return e.map(function(e){return"rule"===e.type&&(e.value="".concat(t," ").concat(e.value),e.value=e.value.replaceAll(",",",".concat(t," ")),e.props=e.props.map(function(e){return"".concat(t," ").concat(e)})),Array.isArray(e.children)&&"@keyframes"!==e.type&&(e.children=Qn(e.children,t)),e})}function Xn(e){var t,n,r,o=void 0===e?Bt:e,a=o.options,i=void 0===a?Bt:a,l=o.plugins,s=void 0===l?Mt:l,u=function(e,r,o){return o.startsWith(n)&&o.endsWith(n)&&o.replaceAll(n,"").length>0?".".concat(t):e},c=s.slice();c.push(function(e){e.type===Ue&&e.value.includes("&")&&(e.props[0]=e.props[0].replace(Kn,n).replace(r,u))}),i.prefix&&c.push(_t),c.push(jt);var d=function(e,o,a,l){void 0===o&&(o=""),void 0===a&&(a=""),void 0===l&&(l="&"),t=l,n=o,r=new RegExp("\\".concat(n,"\\b"),"g");var s=e.replace(qn,""),u=Rt(a||o?"".concat(a," ").concat(o," { ").concat(s," }"):s);i.namespace&&(u=Qn(u,i.namespace));var d,f=[];return Et(u,function(e){var t=Je(e);return function(n,r,o,a){for(var i="",l=0;l<t;l++)i+=e[l](n,r,o,a)||"";return i}}(c.concat((d=function(e){return f.push(e)},function(e){e.root||(e=e.return)&&d(e)})))),f};return d.hash=s.length?s.reduce(function(e,t){return t.name||Cn(15),Jt(e,t.name)},5381).toString():"",d}var Gn=new Vn,Yn=Xn(),Jn=r.createContext({shouldForwardProp:void 0,styleSheet:Gn,stylis:Yn}),Zn=(Jn.Consumer,r.createContext(void 0));function er(){return(0,r.useContext)(Jn)}function tr(e){var t=(0,r.useState)(e.stylisPlugins),n=t[0],o=t[1],a=er().styleSheet,i=(0,r.useMemo)(function(){var t=a;return e.sheet?t=e.sheet:e.target&&(t=t.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(t=t.reconstructWithOptions({useCSSOMInjection:!1})),t},[e.disableCSSOMInjection,e.sheet,e.target,a]),l=(0,r.useMemo)(function(){return Xn({options:{namespace:e.namespace,prefix:e.enableVendorPrefixes},plugins:n})},[e.enableVendorPrefixes,e.namespace,n]);(0,r.useEffect)(function(){ze()(n,e.stylisPlugins)||o(e.stylisPlugins)},[e.stylisPlugins]);var s=(0,r.useMemo)(function(){return{shouldForwardProp:e.shouldForwardProp,styleSheet:i,stylis:l}},[e.shouldForwardProp,i,l]);return r.createElement(Jn.Provider,{value:s},r.createElement(Zn.Provider,{value:l},e.children))}var nr=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=Yn);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,jn(this,function(){throw Cn(12,String(n.name))})}return e.prototype.getName=function(e){return void 0===e&&(e=Yn),this.name+e.hash},e}(),rr=function(e){return e>="A"&&e<="Z"};function or(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(1===n&&"-"===r&&"-"===e[0])return e;rr(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var ar=function(e){return null==e||!1===e||""===e},ir=function(e){var t,n,r=[];for(var o in e){var a=e[o];e.hasOwnProperty(o)&&!ar(a)&&(Array.isArray(a)&&a.isCss||yn(a)?r.push("".concat(or(o),":"),a,";"):kn(a)?r.push.apply(r,Ne(Ne(["".concat(o," {")],ir(a),!1),["}"],!1)):r.push("".concat(or(o),": ").concat((t=o,null==(n=a)||"boolean"==typeof n||""===n?"":"number"!=typeof n||0===n||t in Lt||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function lr(e,t,n,r){return ar(e)?[]:xn(e)?[".".concat(e.styledComponentId)]:yn(e)?!yn(o=e)||o.prototype&&o.prototype.isReactComponent||!t?[e]:lr(e(t),t,n,r):e instanceof nr?n?(e.inject(n,r),[e.getName(r)]):[e]:kn(e)?ir(e):Array.isArray(e)?Array.prototype.concat.apply(Mt,e.map(function(e){return lr(e,t,n,r)})):[e.toString()];var o}function sr(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(yn(n)&&!xn(n))return!1}return!0}var ur=Zt(Ft),cr=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===n||n.isStatic)&&sr(e),this.componentId=t,this.baseHash=Jt(ur,t),this.baseStyle=n,Vn.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))r=wn(r,this.staticRulesId);else{var o=Sn(lr(this.rules,e,t,n)),a=Gt(Jt(this.baseHash,o)>>>0);if(!t.hasNameForId(this.componentId,a)){var i=n(o,".".concat(a),void 0,this.componentId);t.insertRules(this.componentId,a,i)}r=wn(r,a),this.staticRulesId=a}else{for(var l=Jt(this.baseHash,n.hash),s="",u=0;u<this.rules.length;u++){var c=this.rules[u];if("string"==typeof c)s+=c;else if(c){var d=Sn(lr(c,e,t,n));l=Jt(l,d+u),s+=d}}if(s){var f=Gt(l>>>0);t.hasNameForId(this.componentId,f)||t.insertRules(this.componentId,f,n(s,".".concat(f),void 0,this.componentId)),r=wn(r,f)}}return r},e}(),dr=r.createContext(void 0);dr.Consumer;var fr={};new Set;function pr(e,t,n){var o=xn(e),a=e,i=!nn(e),l=t.attrs,s=void 0===l?Mt:l,u=t.componentId,c=void 0===u?function(e,t){var n="string"!=typeof e?"sc":qt(e);fr[n]=(fr[n]||0)+1;var r="".concat(n,"-").concat(en(Ft+n+fr[n]));return t?"".concat(t,"-").concat(r):r}(t.displayName,t.parentComponentId):u,d=t.displayName,f=void 0===d?function(e){return nn(e)?"styled.".concat(e):"Styled(".concat(tn(e),")")}(e):d,p=t.displayName&&t.componentId?"".concat(qt(t.displayName),"-").concat(t.componentId):t.componentId||c,h=o&&a.attrs?a.attrs.concat(s).filter(Boolean):s,m=t.shouldForwardProp;if(o&&a.shouldForwardProp){var g=a.shouldForwardProp;if(t.shouldForwardProp){var b=t.shouldForwardProp;m=function(e,t){return g(e,t)&&b(e,t)}}else m=g}var v=new cr(n,p,o?a.componentStyle:void 0);function y(e,t){return function(e,t,n){var o=e.attrs,a=e.componentStyle,i=e.defaultProps,l=e.foldedComponentIds,s=e.styledComponentId,u=e.target,c=r.useContext(dr),d=er(),f=e.shouldForwardProp||d.shouldForwardProp,p=Wt(t,c,i)||Bt,h=function(e,t,n){for(var r,o=Oe(Oe({},t),{className:void 0,theme:n}),a=0;a<e.length;a+=1){var i=yn(r=e[a])?r(o):r;for(var l in i)o[l]="className"===l?wn(o[l],i[l]):"style"===l?Oe(Oe({},o[l]),i[l]):i[l]}return t.className&&(o.className=wn(o.className,t.className)),o}(o,t,p),m=h.as||u,g={};for(var b in h)void 0===h[b]||"$"===b[0]||"as"===b||"theme"===b&&h.theme===p||("forwardedAs"===b?g.as=h.forwardedAs:f&&!f(b,m)||(g[b]=h[b]));var v=function(e,t){var n=er();return e.generateAndInjectStyles(t,n.styleSheet,n.stylis)}(a,h),y=wn(l,s);return v&&(y+=" "+v),h.className&&(y+=" "+h.className),g[nn(m)&&!Ht.has(m)?"class":"className"]=y,n&&(g.ref=n),(0,r.createElement)(m,g)}(x,e,t)}y.displayName=f;var x=r.forwardRef(y);return x.attrs=h,x.componentStyle=v,x.displayName=f,x.shouldForwardProp=m,x.foldedComponentIds=o?wn(a.foldedComponentIds,a.styledComponentId):"",x.styledComponentId=p,x.target=o?a.target:e,Object.defineProperty(x,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=o?function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];for(var r=0,o=t;r<o.length;r++)En(e,o[r],!0);return e}({},a.defaultProps,e):e}}),jn(x,function(){return".".concat(x.styledComponentId)}),i&&vn(x,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),x}function hr(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n}var mr=function(e){return Object.assign(e,{isCss:!0})};function gr(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(yn(e)||kn(e))return mr(lr(hr(Mt,Ne([e],t,!0))));var r=e;return 0===t.length&&1===r.length&&"string"==typeof r[0]?lr(r):mr(lr(hr(r,t)))}function br(e,t,n){if(void 0===n&&(n=Bt),!t)throw Cn(1,t);var r=function(r){for(var o=[],a=1;a<arguments.length;a++)o[a-1]=arguments[a];return e(t,n,gr.apply(void 0,Ne([r],o,!1)))};return r.attrs=function(r){return br(e,t,Oe(Oe({},n),{attrs:Array.prototype.concat(n.attrs,r).filter(Boolean)}))},r.withConfig=function(r){return br(e,t,Oe(Oe({},n),r))},r}var vr=function(e){return br(pr,e)},yr=vr;Ht.forEach(function(e){yr[e]=vr(e)});!function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=sr(e),Vn.registerId(this.componentId+1)}e.prototype.createStyles=function(e,t,n,r){var o=r(Sn(lr(this.rules,t,n,r)),""),a=this.componentId+e;n.insertRules(a,a,o)},e.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},e.prototype.renderStyles=function(e,t,n,r){e>2&&Vn.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,t,n,r)}}();(function(){function e(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString();if(!t)return"";var n=In(),r=Sn([n&&'nonce="'.concat(n,'"'),"".concat(zt,'="true"'),"".concat(Dt,'="').concat(Ft,'"')].filter(Boolean)," ");return"<style ".concat(r,">").concat(t,"</style>")},this.getStyleTags=function(){if(e.sealed)throw Cn(2);return e._emitSheetCSS()},this.getStyleElement=function(){var t;if(e.sealed)throw Cn(2);var n=e.instance.toString();if(!n)return[];var o=((t={})[zt]="",t[Dt]=Ft,t.dangerouslySetInnerHTML={__html:n},t),a=In();return a&&(o.nonce=a),[r.createElement("style",Oe({},o,{key:"sc-0-0"}))]},this.seal=function(){e.sealed=!0},this.instance=new Vn({isServer:!0}),this.sealed=!1}e.prototype.collectStyles=function(e){if(this.sealed)throw Cn(2);return r.createElement(tr,{sheet:this.instance},e)},e.prototype.interleaveWithNodeStream=function(e){throw Cn(3)}})(),"__sc-".concat(zt,"__");var xr=n(579);const wr=yr.header`
  background-color: #2c3e50;
  color: white;
  padding: 1rem 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`,Sr=yr.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`,kr=yr(Re)`
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  text-decoration: none;

  &:hover {
    color: #ecf0f1;
  }
`,Er=yr.div`
  display: flex;
  gap: 20px;
`,jr=yr(Re)`
  color: white;
  text-decoration: none;

  &:hover {
    color: #ecf0f1;
    text-decoration: underline;
  }
`;const Cr=function(){return(0,xr.jsxs)(wr,{children:[(0,xr.jsx)(Sr,{children:(0,xr.jsx)(kr,{to:"/",children:"STEM 2026 Registration"})}),(0,xr.jsx)(Sr,{children:(0,xr.jsxs)(Er,{children:[(0,xr.jsx)(jr,{to:"/login",children:"Login"}),(0,xr.jsx)(jr,{to:"/",children:"Register"}),(0,xr.jsx)(jr,{to:"/volunteer_registration",children:"Volunteer"}),(0,xr.jsx)(jr,{to:"/admin",children:"Admin"})]})})]})},_r=yr.footer`
  background-color: #2c3e50;
  color: white;
  padding: 1rem 2rem;
  text-align: center;
  margin-top: auto;
`,Rr=yr.div`
  max-width: 1200px;
  margin: 0 auto;
`;const Pr=function(){return(0,xr.jsx)(_r,{children:(0,xr.jsx)(Rr,{children:(0,xr.jsxs)("p",{children:["\xa9 ",(new Date).getFullYear()," STEM Registration. All rights reserved."]})})})};function Tr(e,t){return function(){return e.apply(t,arguments)}}const{toString:Or}=Object.prototype,{getPrototypeOf:Nr}=Object,{iterator:Lr,toStringTag:zr}=Symbol,Ar=(Dr=Object.create(null),e=>{const t=Or.call(e);return Dr[t]||(Dr[t]=t.slice(8,-1).toLowerCase())});var Dr;const Fr=e=>(e=e.toLowerCase(),t=>Ar(t)===e),Ir=e=>t=>typeof t===e,{isArray:Ur}=Array,$r=Ir("undefined");function Mr(e){return null!==e&&!$r(e)&&null!==e.constructor&&!$r(e.constructor)&&Hr(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Br=Fr("ArrayBuffer");const Wr=Ir("string"),Hr=Ir("function"),Vr=Ir("number"),Kr=e=>null!==e&&"object"===typeof e,qr=e=>{if("object"!==Ar(e))return!1;const t=Nr(e);return(null===t||t===Object.prototype||null===Object.getPrototypeOf(t))&&!(zr in e)&&!(Lr in e)},Qr=Fr("Date"),Xr=Fr("File"),Gr=Fr("Blob"),Yr=Fr("FileList"),Jr=Fr("URLSearchParams"),[Zr,eo,to,no]=["ReadableStream","Request","Response","Headers"].map(Fr);function ro(e,t){let n,r,{allOwnKeys:o=!1}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(null!==e&&"undefined"!==typeof e)if("object"!==typeof e&&(e=[e]),Ur(e))for(n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else{if(Mr(e))return;const r=o?Object.getOwnPropertyNames(e):Object.keys(e),a=r.length;let i;for(n=0;n<a;n++)i=r[n],t.call(null,e[i],i,e)}}function oo(e,t){if(Mr(e))return null;t=t.toLowerCase();const n=Object.keys(e);let r,o=n.length;for(;o-- >0;)if(r=n[o],t===r.toLowerCase())return r;return null}const ao="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:global,io=e=>!$r(e)&&e!==ao;const lo=(so="undefined"!==typeof Uint8Array&&Nr(Uint8Array),e=>so&&e instanceof so);var so;const uo=Fr("HTMLFormElement"),co=(e=>{let{hasOwnProperty:t}=e;return(e,n)=>t.call(e,n)})(Object.prototype),fo=Fr("RegExp"),po=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};ro(n,(n,o)=>{let a;!1!==(a=t(n,o,e))&&(r[o]=a||n)}),Object.defineProperties(e,r)};const ho=Fr("AsyncFunction"),mo=(go="function"===typeof setImmediate,bo=Hr(ao.postMessage),go?setImmediate:bo?((e,t)=>(ao.addEventListener("message",n=>{let{source:r,data:o}=n;r===ao&&o===e&&t.length&&t.shift()()},!1),n=>{t.push(n),ao.postMessage(e,"*")}))(`axios@${Math.random()}`,[]):e=>setTimeout(e));var go,bo;const vo="undefined"!==typeof queueMicrotask?queueMicrotask.bind(ao):"undefined"!==typeof process&&process.nextTick||mo,yo={isArray:Ur,isArrayBuffer:Br,isBuffer:Mr,isFormData:e=>{let t;return e&&("function"===typeof FormData&&e instanceof FormData||Hr(e.append)&&("formdata"===(t=Ar(e))||"object"===t&&Hr(e.toString)&&"[object FormData]"===e.toString()))},isArrayBufferView:function(e){let t;return t="undefined"!==typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&Br(e.buffer),t},isString:Wr,isNumber:Vr,isBoolean:e=>!0===e||!1===e,isObject:Kr,isPlainObject:qr,isEmptyObject:e=>{if(!Kr(e)||Mr(e))return!1;try{return 0===Object.keys(e).length&&Object.getPrototypeOf(e)===Object.prototype}catch(uu){return!1}},isReadableStream:Zr,isRequest:eo,isResponse:to,isHeaders:no,isUndefined:$r,isDate:Qr,isFile:Xr,isBlob:Gr,isRegExp:fo,isFunction:Hr,isStream:e=>Kr(e)&&Hr(e.pipe),isURLSearchParams:Jr,isTypedArray:lo,isFileList:Yr,forEach:ro,merge:function e(){const{caseless:t}=io(this)&&this||{},n={},r=(r,o)=>{const a=t&&oo(n,o)||o;qr(n[a])&&qr(r)?n[a]=e(n[a],r):qr(r)?n[a]=e({},r):Ur(r)?n[a]=r.slice():n[a]=r};for(let o=0,a=arguments.length;o<a;o++)arguments[o]&&ro(arguments[o],r);return n},extend:function(e,t,n){let{allOwnKeys:r}=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return ro(t,(t,r)=>{n&&Hr(t)?e[r]=Tr(t,n):e[r]=t},{allOwnKeys:r}),e},trim:e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:e=>(65279===e.charCodeAt(0)&&(e=e.slice(1)),e),inherits:(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},toFlatObject:(e,t,n,r)=>{let o,a,i;const l={};if(t=t||{},null==e)return t;do{for(o=Object.getOwnPropertyNames(e),a=o.length;a-- >0;)i=o[a],r&&!r(i,e,t)||l[i]||(t[i]=e[i],l[i]=!0);e=!1!==n&&Nr(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},kindOf:Ar,kindOfTest:Fr,endsWith:(e,t,n)=>{e=String(e),(void 0===n||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return-1!==r&&r===n},toArray:e=>{if(!e)return null;if(Ur(e))return e;let t=e.length;if(!Vr(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},forEachEntry:(e,t)=>{const n=(e&&e[Lr]).call(e);let r;for(;(r=n.next())&&!r.done;){const n=r.value;t.call(e,n[0],n[1])}},matchAll:(e,t)=>{let n;const r=[];for(;null!==(n=e.exec(t));)r.push(n);return r},isHTMLForm:uo,hasOwnProperty:co,hasOwnProp:co,reduceDescriptors:po,freezeMethods:e=>{po(e,(t,n)=>{if(Hr(e)&&-1!==["arguments","caller","callee"].indexOf(n))return!1;const r=e[n];Hr(r)&&(t.enumerable=!1,"writable"in t?t.writable=!1:t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")}))})},toObjectSet:(e,t)=>{const n={},r=e=>{e.forEach(e=>{n[e]=!0})};return Ur(e)?r(e):r(String(e).split(t)),n},toCamelCase:e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(e,t,n){return t.toUpperCase()+n}),noop:()=>{},toFiniteNumber:(e,t)=>null!=e&&Number.isFinite(e=+e)?e:t,findKey:oo,global:ao,isContextDefined:io,isSpecCompliantForm:function(e){return!!(e&&Hr(e.append)&&"FormData"===e[zr]&&e[Lr])},toJSONObject:e=>{const t=new Array(10),n=(e,r)=>{if(Kr(e)){if(t.indexOf(e)>=0)return;if(Mr(e))return e;if(!("toJSON"in e)){t[r]=e;const o=Ur(e)?[]:{};return ro(e,(e,t)=>{const a=n(e,r+1);!$r(a)&&(o[t]=a)}),t[r]=void 0,o}}return e};return n(e,0)},isAsyncFn:ho,isThenable:e=>e&&(Kr(e)||Hr(e))&&Hr(e.then)&&Hr(e.catch),setImmediate:mo,asap:vo,isIterable:e=>null!=e&&Hr(e[Lr])};function xo(e,t,n,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o,this.status=o.status?o.status:null)}yo.inherits(xo,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:yo.toJSONObject(this.config),code:this.code,status:this.status}}});const wo=xo.prototype,So={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{So[e]={value:e}}),Object.defineProperties(xo,So),Object.defineProperty(wo,"isAxiosError",{value:!0}),xo.from=(e,t,n,r,o,a)=>{const i=Object.create(wo);return yo.toFlatObject(e,i,function(e){return e!==Error.prototype},e=>"isAxiosError"!==e),xo.call(i,e.message,t,n,r,o),i.cause=e,i.name=e.name,a&&Object.assign(i,a),i};const ko=xo;function Eo(e){return yo.isPlainObject(e)||yo.isArray(e)}function jo(e){return yo.endsWith(e,"[]")?e.slice(0,-2):e}function Co(e,t,n){return e?e.concat(t).map(function(e,t){return e=jo(e),!n&&t?"["+e+"]":e}).join(n?".":""):t}const _o=yo.toFlatObject(yo,{},null,function(e){return/^is[A-Z]/.test(e)});const Ro=function(e,t,n){if(!yo.isObject(e))throw new TypeError("target must be an object");t=t||new FormData;const r=(n=yo.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(e,t){return!yo.isUndefined(t[e])})).metaTokens,o=n.visitor||u,a=n.dots,i=n.indexes,l=(n.Blob||"undefined"!==typeof Blob&&Blob)&&yo.isSpecCompliantForm(t);if(!yo.isFunction(o))throw new TypeError("visitor must be a function");function s(e){if(null===e)return"";if(yo.isDate(e))return e.toISOString();if(yo.isBoolean(e))return e.toString();if(!l&&yo.isBlob(e))throw new ko("Blob is not supported. Use a Buffer instead.");return yo.isArrayBuffer(e)||yo.isTypedArray(e)?l&&"function"===typeof Blob?new Blob([e]):Buffer.from(e):e}function u(e,n,o){let l=e;if(e&&!o&&"object"===typeof e)if(yo.endsWith(n,"{}"))n=r?n:n.slice(0,-2),e=JSON.stringify(e);else if(yo.isArray(e)&&function(e){return yo.isArray(e)&&!e.some(Eo)}(e)||(yo.isFileList(e)||yo.endsWith(n,"[]"))&&(l=yo.toArray(e)))return n=jo(n),l.forEach(function(e,r){!yo.isUndefined(e)&&null!==e&&t.append(!0===i?Co([n],r,a):null===i?n:n+"[]",s(e))}),!1;return!!Eo(e)||(t.append(Co(o,n,a),s(e)),!1)}const c=[],d=Object.assign(_o,{defaultVisitor:u,convertValue:s,isVisitable:Eo});if(!yo.isObject(e))throw new TypeError("data must be an object");return function e(n,r){if(!yo.isUndefined(n)){if(-1!==c.indexOf(n))throw Error("Circular reference detected in "+r.join("."));c.push(n),yo.forEach(n,function(n,a){!0===(!(yo.isUndefined(n)||null===n)&&o.call(t,n,yo.isString(a)?a.trim():a,r,d))&&e(n,r?r.concat(a):[a])}),c.pop()}}(e),t};function Po(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(e){return t[e]})}function To(e,t){this._pairs=[],e&&Ro(e,this,t)}const Oo=To.prototype;Oo.append=function(e,t){this._pairs.push([e,t])},Oo.toString=function(e){const t=e?function(t){return e.call(this,t,Po)}:Po;return this._pairs.map(function(e){return t(e[0])+"="+t(e[1])},"").join("&")};const No=To;function Lo(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function zo(e,t,n){if(!t)return e;const r=n&&n.encode||Lo;yo.isFunction(n)&&(n={serialize:n});const o=n&&n.serialize;let a;if(a=o?o(t,n):yo.isURLSearchParams(t)?t.toString():new No(t,n).toString(r),a){const t=e.indexOf("#");-1!==t&&(e=e.slice(0,t)),e+=(-1===e.indexOf("?")?"?":"&")+a}return e}const Ao=class{constructor(){this.handlers=[]}use(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){yo.forEach(this.handlers,function(t){null!==t&&e(t)})}},Do={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Fo={isBrowser:!0,classes:{URLSearchParams:"undefined"!==typeof URLSearchParams?URLSearchParams:No,FormData:"undefined"!==typeof FormData?FormData:null,Blob:"undefined"!==typeof Blob?Blob:null},protocols:["http","https","file","blob","url","data"]},Io="undefined"!==typeof window&&"undefined"!==typeof document,Uo="object"===typeof navigator&&navigator||void 0,$o=Io&&(!Uo||["ReactNative","NativeScript","NS"].indexOf(Uo.product)<0),Mo="undefined"!==typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"===typeof self.importScripts,Bo=Io&&window.location.href||"http://localhost",Wo={...e,...Fo};const Ho=function(e){function t(e,n,r,o){let a=e[o++];if("__proto__"===a)return!0;const i=Number.isFinite(+a),l=o>=e.length;if(a=!a&&yo.isArray(r)?r.length:a,l)return yo.hasOwnProp(r,a)?r[a]=[r[a],n]:r[a]=n,!i;r[a]&&yo.isObject(r[a])||(r[a]=[]);return t(e,n,r[a],o)&&yo.isArray(r[a])&&(r[a]=function(e){const t={},n=Object.keys(e);let r;const o=n.length;let a;for(r=0;r<o;r++)a=n[r],t[a]=e[a];return t}(r[a])),!i}if(yo.isFormData(e)&&yo.isFunction(e.entries)){const n={};return yo.forEachEntry(e,(e,r)=>{t(function(e){return yo.matchAll(/\w+|\[(\w*)]/g,e).map(e=>"[]"===e[0]?"":e[1]||e[0])}(e),r,n,0)}),n}return null};const Vo={transitional:Do,adapter:["xhr","http","fetch"],transformRequest:[function(e,t){const n=t.getContentType()||"",r=n.indexOf("application/json")>-1,o=yo.isObject(e);o&&yo.isHTMLForm(e)&&(e=new FormData(e));if(yo.isFormData(e))return r?JSON.stringify(Ho(e)):e;if(yo.isArrayBuffer(e)||yo.isBuffer(e)||yo.isStream(e)||yo.isFile(e)||yo.isBlob(e)||yo.isReadableStream(e))return e;if(yo.isArrayBufferView(e))return e.buffer;if(yo.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(o){if(n.indexOf("application/x-www-form-urlencoded")>-1)return function(e,t){return Ro(e,new Wo.classes.URLSearchParams,{visitor:function(e,t,n,r){return Wo.isNode&&yo.isBuffer(e)?(this.append(t,e.toString("base64")),!1):r.defaultVisitor.apply(this,arguments)},...t})}(e,this.formSerializer).toString();if((a=yo.isFileList(e))||n.indexOf("multipart/form-data")>-1){const t=this.env&&this.env.FormData;return Ro(a?{"files[]":e}:e,t&&new t,this.formSerializer)}}return o||r?(t.setContentType("application/json",!1),function(e,t,n){if(yo.isString(e))try{return(t||JSON.parse)(e),yo.trim(e)}catch(uu){if("SyntaxError"!==uu.name)throw uu}return(n||JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){const t=this.transitional||Vo.transitional,n=t&&t.forcedJSONParsing,r="json"===this.responseType;if(yo.isResponse(e)||yo.isReadableStream(e))return e;if(e&&yo.isString(e)&&(n&&!this.responseType||r)){const n=!(t&&t.silentJSONParsing)&&r;try{return JSON.parse(e)}catch(uu){if(n){if("SyntaxError"===uu.name)throw ko.from(uu,ko.ERR_BAD_RESPONSE,this,null,this.response);throw uu}}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Wo.classes.FormData,Blob:Wo.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};yo.forEach(["delete","get","head","post","put","patch"],e=>{Vo.headers[e]={}});const Ko=Vo,qo=yo.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Qo=Symbol("internals");function Xo(e){return e&&String(e).trim().toLowerCase()}function Go(e){return!1===e||null==e?e:yo.isArray(e)?e.map(Go):String(e)}function Yo(e,t,n,r,o){return yo.isFunction(r)?r.call(this,t,n):(o&&(t=n),yo.isString(t)?yo.isString(r)?-1!==t.indexOf(r):yo.isRegExp(r)?r.test(t):void 0:void 0)}class Jo{constructor(e){e&&this.set(e)}set(e,t,n){const r=this;function o(e,t,n){const o=Xo(t);if(!o)throw new Error("header name must be a non-empty string");const a=yo.findKey(r,o);(!a||void 0===r[a]||!0===n||void 0===n&&!1!==r[a])&&(r[a||t]=Go(e))}const a=(e,t)=>yo.forEach(e,(e,n)=>o(e,n,t));if(yo.isPlainObject(e)||e instanceof this.constructor)a(e,t);else if(yo.isString(e)&&(e=e.trim())&&!/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim()))a((e=>{const t={};let n,r,o;return e&&e.split("\n").forEach(function(e){o=e.indexOf(":"),n=e.substring(0,o).trim().toLowerCase(),r=e.substring(o+1).trim(),!n||t[n]&&qo[n]||("set-cookie"===n?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t})(e),t);else if(yo.isObject(e)&&yo.isIterable(e)){let n,r,o={};for(const t of e){if(!yo.isArray(t))throw TypeError("Object iterator must return a key-value pair");o[r=t[0]]=(n=o[r])?yo.isArray(n)?[...n,t[1]]:[n,t[1]]:t[1]}a(o,t)}else null!=e&&o(t,e,n);return this}get(e,t){if(e=Xo(e)){const n=yo.findKey(this,e);if(n){const e=this[n];if(!t)return e;if(!0===t)return function(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}(e);if(yo.isFunction(t))return t.call(this,e,n);if(yo.isRegExp(t))return t.exec(e);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=Xo(e)){const n=yo.findKey(this,e);return!(!n||void 0===this[n]||t&&!Yo(0,this[n],n,t))}return!1}delete(e,t){const n=this;let r=!1;function o(e){if(e=Xo(e)){const o=yo.findKey(n,e);!o||t&&!Yo(0,n[o],o,t)||(delete n[o],r=!0)}}return yo.isArray(e)?e.forEach(o):o(e),r}clear(e){const t=Object.keys(this);let n=t.length,r=!1;for(;n--;){const o=t[n];e&&!Yo(0,this[o],o,e,!0)||(delete this[o],r=!0)}return r}normalize(e){const t=this,n={};return yo.forEach(this,(r,o)=>{const a=yo.findKey(n,o);if(a)return t[a]=Go(r),void delete t[o];const i=e?function(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,t,n)=>t.toUpperCase()+n)}(o):String(o).trim();i!==o&&delete t[o],t[i]=Go(r),n[i]=!0}),this}concat(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return this.constructor.concat(this,...t)}toJSON(e){const t=Object.create(null);return yo.forEach(this,(n,r)=>{null!=n&&!1!==n&&(t[r]=e&&yo.isArray(n)?n.join(", "):n)}),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(e=>{let[t,n]=e;return t+": "+n}).join("\n")}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e){const t=new this(e);for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return r.forEach(e=>t.set(e)),t}static accessor(e){const t=(this[Qo]=this[Qo]={accessors:{}}).accessors,n=this.prototype;function r(e){const r=Xo(e);t[r]||(!function(e,t){const n=yo.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(e,n,o){return this[r].call(this,t,e,n,o)},configurable:!0})})}(n,e),t[r]=!0)}return yo.isArray(e)?e.forEach(r):r(e),this}}Jo.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),yo.reduceDescriptors(Jo.prototype,(e,t)=>{let{value:n}=e,r=t[0].toUpperCase()+t.slice(1);return{get:()=>n,set(e){this[r]=e}}}),yo.freezeMethods(Jo);const Zo=Jo;function ea(e,t){const n=this||Ko,r=t||n,o=Zo.from(r.headers);let a=r.data;return yo.forEach(e,function(e){a=e.call(n,a,o.normalize(),t?t.status:void 0)}),o.normalize(),a}function ta(e){return!(!e||!e.__CANCEL__)}function na(e,t,n){ko.call(this,null==e?"canceled":e,ko.ERR_CANCELED,t,n),this.name="CanceledError"}yo.inherits(na,ko,{__CANCEL__:!0});const ra=na;function oa(e,t,n){const r=n.config.validateStatus;n.status&&r&&!r(n.status)?t(new ko("Request failed with status code "+n.status,[ko.ERR_BAD_REQUEST,ko.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):e(n)}const aa=function(e,t){e=e||10;const n=new Array(e),r=new Array(e);let o,a=0,i=0;return t=void 0!==t?t:1e3,function(l){const s=Date.now(),u=r[i];o||(o=s),n[a]=l,r[a]=s;let c=i,d=0;for(;c!==a;)d+=n[c++],c%=e;if(a=(a+1)%e,a===i&&(i=(i+1)%e),s-o<t)return;const f=u&&s-u;return f?Math.round(1e3*d/f):void 0}};const ia=function(e,t){let n,r,o=0,a=1e3/t;const i=function(t){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Date.now();o=a,n=null,r&&(clearTimeout(r),r=null),e(...t)};return[function(){const e=Date.now(),t=e-o;for(var l=arguments.length,s=new Array(l),u=0;u<l;u++)s[u]=arguments[u];t>=a?i(s,e):(n=s,r||(r=setTimeout(()=>{r=null,i(n)},a-t)))},()=>n&&i(n)]},la=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:3,r=0;const o=aa(50,250);return ia(n=>{const a=n.loaded,i=n.lengthComputable?n.total:void 0,l=a-r,s=o(l);r=a;e({loaded:a,total:i,progress:i?a/i:void 0,bytes:l,rate:s||void 0,estimated:s&&i&&a<=i?(i-a)/s:void 0,event:n,lengthComputable:null!=i,[t?"download":"upload"]:!0})},n)},sa=(e,t)=>{const n=null!=e;return[r=>t[0]({lengthComputable:n,total:e,loaded:r}),t[1]]},ua=e=>function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return yo.asap(()=>e(...n))},ca=Wo.hasStandardBrowserEnv?((e,t)=>n=>(n=new URL(n,Wo.origin),e.protocol===n.protocol&&e.host===n.host&&(t||e.port===n.port)))(new URL(Wo.origin),Wo.navigator&&/(msie|trident)/i.test(Wo.navigator.userAgent)):()=>!0,da=Wo.hasStandardBrowserEnv?{write(e,t,n,r,o,a){const i=[e+"="+encodeURIComponent(t)];yo.isNumber(n)&&i.push("expires="+new Date(n).toGMTString()),yo.isString(r)&&i.push("path="+r),yo.isString(o)&&i.push("domain="+o),!0===a&&i.push("secure"),document.cookie=i.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read:()=>null,remove(){}};function fa(e,t,n){let r=!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);return e&&(r||0==n)?function(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}(e,t):t}const pa=e=>e instanceof Zo?{...e}:e;function ha(e,t){t=t||{};const n={};function r(e,t,n,r){return yo.isPlainObject(e)&&yo.isPlainObject(t)?yo.merge.call({caseless:r},e,t):yo.isPlainObject(t)?yo.merge({},t):yo.isArray(t)?t.slice():t}function o(e,t,n,o){return yo.isUndefined(t)?yo.isUndefined(e)?void 0:r(void 0,e,0,o):r(e,t,0,o)}function a(e,t){if(!yo.isUndefined(t))return r(void 0,t)}function i(e,t){return yo.isUndefined(t)?yo.isUndefined(e)?void 0:r(void 0,e):r(void 0,t)}function l(n,o,a){return a in t?r(n,o):a in e?r(void 0,n):void 0}const s={url:a,method:a,data:a,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,withXSRFToken:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:l,headers:(e,t,n)=>o(pa(e),pa(t),0,!0)};return yo.forEach(Object.keys({...e,...t}),function(r){const a=s[r]||o,i=a(e[r],t[r],r);yo.isUndefined(i)&&a!==l||(n[r]=i)}),n}const ma=e=>{const t=ha({},e);let n,{data:r,withXSRFToken:o,xsrfHeaderName:a,xsrfCookieName:i,headers:l,auth:s}=t;if(t.headers=l=Zo.from(l),t.url=zo(fa(t.baseURL,t.url,t.allowAbsoluteUrls),e.params,e.paramsSerializer),s&&l.set("Authorization","Basic "+btoa((s.username||"")+":"+(s.password?unescape(encodeURIComponent(s.password)):""))),yo.isFormData(r))if(Wo.hasStandardBrowserEnv||Wo.hasStandardBrowserWebWorkerEnv)l.setContentType(void 0);else if(!1!==(n=l.getContentType())){const[e,...t]=n?n.split(";").map(e=>e.trim()).filter(Boolean):[];l.setContentType([e||"multipart/form-data",...t].join("; "))}if(Wo.hasStandardBrowserEnv&&(o&&yo.isFunction(o)&&(o=o(t)),o||!1!==o&&ca(t.url))){const e=a&&i&&da.read(i);e&&l.set(a,e)}return t},ga="undefined"!==typeof XMLHttpRequest&&function(e){return new Promise(function(t,n){const r=ma(e);let o=r.data;const a=Zo.from(r.headers).normalize();let i,l,s,u,c,{responseType:d,onUploadProgress:f,onDownloadProgress:p}=r;function h(){u&&u(),c&&c(),r.cancelToken&&r.cancelToken.unsubscribe(i),r.signal&&r.signal.removeEventListener("abort",i)}let m=new XMLHttpRequest;function g(){if(!m)return;const r=Zo.from("getAllResponseHeaders"in m&&m.getAllResponseHeaders());oa(function(e){t(e),h()},function(e){n(e),h()},{data:d&&"text"!==d&&"json"!==d?m.response:m.responseText,status:m.status,statusText:m.statusText,headers:r,config:e,request:m}),m=null}m.open(r.method.toUpperCase(),r.url,!0),m.timeout=r.timeout,"onloadend"in m?m.onloadend=g:m.onreadystatechange=function(){m&&4===m.readyState&&(0!==m.status||m.responseURL&&0===m.responseURL.indexOf("file:"))&&setTimeout(g)},m.onabort=function(){m&&(n(new ko("Request aborted",ko.ECONNABORTED,e,m)),m=null)},m.onerror=function(){n(new ko("Network Error",ko.ERR_NETWORK,e,m)),m=null},m.ontimeout=function(){let t=r.timeout?"timeout of "+r.timeout+"ms exceeded":"timeout exceeded";const o=r.transitional||Do;r.timeoutErrorMessage&&(t=r.timeoutErrorMessage),n(new ko(t,o.clarifyTimeoutError?ko.ETIMEDOUT:ko.ECONNABORTED,e,m)),m=null},void 0===o&&a.setContentType(null),"setRequestHeader"in m&&yo.forEach(a.toJSON(),function(e,t){m.setRequestHeader(t,e)}),yo.isUndefined(r.withCredentials)||(m.withCredentials=!!r.withCredentials),d&&"json"!==d&&(m.responseType=r.responseType),p&&([s,c]=la(p,!0),m.addEventListener("progress",s)),f&&m.upload&&([l,u]=la(f),m.upload.addEventListener("progress",l),m.upload.addEventListener("loadend",u)),(r.cancelToken||r.signal)&&(i=t=>{m&&(n(!t||t.type?new ra(null,e,m):t),m.abort(),m=null)},r.cancelToken&&r.cancelToken.subscribe(i),r.signal&&(r.signal.aborted?i():r.signal.addEventListener("abort",i)));const b=function(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}(r.url);b&&-1===Wo.protocols.indexOf(b)?n(new ko("Unsupported protocol "+b+":",ko.ERR_BAD_REQUEST,e)):m.send(o||null)})},ba=(e,t)=>{const{length:n}=e=e?e.filter(Boolean):[];if(t||n){let n,r=new AbortController;const o=function(e){if(!n){n=!0,i();const t=e instanceof Error?e:this.reason;r.abort(t instanceof ko?t:new ra(t instanceof Error?t.message:t))}};let a=t&&setTimeout(()=>{a=null,o(new ko(`timeout ${t} of ms exceeded`,ko.ETIMEDOUT))},t);const i=()=>{e&&(a&&clearTimeout(a),a=null,e.forEach(e=>{e.unsubscribe?e.unsubscribe(o):e.removeEventListener("abort",o)}),e=null)};e.forEach(e=>e.addEventListener("abort",o));const{signal:l}=r;return l.unsubscribe=()=>yo.asap(i),l}},va=function*(e,t){let n=e.byteLength;if(!t||n<t)return void(yield e);let r,o=0;for(;o<n;)r=o+t,yield e.slice(o,r),o=r},ya=async function*(e){if(e[Symbol.asyncIterator])return void(yield*e);const t=e.getReader();try{for(;;){const{done:e,value:n}=await t.read();if(e)break;yield n}}finally{await t.cancel()}},xa=(e,t,n,r)=>{const o=async function*(e,t){for await(const n of ya(e))yield*va(n,t)}(e,t);let a,i=0,l=e=>{a||(a=!0,r&&r(e))};return new ReadableStream({async pull(e){try{const{done:t,value:r}=await o.next();if(t)return l(),void e.close();let a=r.byteLength;if(n){let e=i+=a;n(e)}e.enqueue(new Uint8Array(r))}catch(t){throw l(t),t}},cancel:e=>(l(e),o.return())},{highWaterMark:2})},wa="function"===typeof fetch&&"function"===typeof Request&&"function"===typeof Response,Sa=wa&&"function"===typeof ReadableStream,ka=wa&&("function"===typeof TextEncoder?(Ea=new TextEncoder,e=>Ea.encode(e)):async e=>new Uint8Array(await new Response(e).arrayBuffer()));var Ea;const ja=function(e){try{for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return!!e(...n)}catch(uu){return!1}},Ca=Sa&&ja(()=>{let e=!1;const t=new Request(Wo.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t}),_a=Sa&&ja(()=>yo.isReadableStream(new Response("").body)),Ra={stream:_a&&(e=>e.body)};var Pa;wa&&(Pa=new Response,["text","arrayBuffer","blob","formData","stream"].forEach(e=>{!Ra[e]&&(Ra[e]=yo.isFunction(Pa[e])?t=>t[e]():(t,n)=>{throw new ko(`Response type '${e}' is not supported`,ko.ERR_NOT_SUPPORT,n)})}));const Ta=async(e,t)=>{const n=yo.toFiniteNumber(e.getContentLength());return null==n?(async e=>{if(null==e)return 0;if(yo.isBlob(e))return e.size;if(yo.isSpecCompliantForm(e)){const t=new Request(Wo.origin,{method:"POST",body:e});return(await t.arrayBuffer()).byteLength}return yo.isArrayBufferView(e)||yo.isArrayBuffer(e)?e.byteLength:(yo.isURLSearchParams(e)&&(e+=""),yo.isString(e)?(await ka(e)).byteLength:void 0)})(t):n},Oa=wa&&(async e=>{let{url:t,method:n,data:r,signal:o,cancelToken:a,timeout:i,onDownloadProgress:l,onUploadProgress:s,responseType:u,headers:c,withCredentials:d="same-origin",fetchOptions:f}=ma(e);u=u?(u+"").toLowerCase():"text";let p,h=ba([o,a&&a.toAbortSignal()],i);const m=h&&h.unsubscribe&&(()=>{h.unsubscribe()});let g;try{if(s&&Ca&&"get"!==n&&"head"!==n&&0!==(g=await Ta(c,r))){let e,n=new Request(t,{method:"POST",body:r,duplex:"half"});if(yo.isFormData(r)&&(e=n.headers.get("content-type"))&&c.setContentType(e),n.body){const[e,t]=sa(g,la(ua(s)));r=xa(n.body,65536,e,t)}}yo.isString(d)||(d=d?"include":"omit");const o="credentials"in Request.prototype;p=new Request(t,{...f,signal:h,method:n.toUpperCase(),headers:c.normalize().toJSON(),body:r,duplex:"half",credentials:o?d:void 0});let a=await fetch(p,f);const i=_a&&("stream"===u||"response"===u);if(_a&&(l||i&&m)){const e={};["status","statusText","headers"].forEach(t=>{e[t]=a[t]});const t=yo.toFiniteNumber(a.headers.get("content-length")),[n,r]=l&&sa(t,la(ua(l),!0))||[];a=new Response(xa(a.body,65536,n,()=>{r&&r(),m&&m()}),e)}u=u||"text";let b=await Ra[yo.findKey(Ra,u)||"text"](a,e);return!i&&m&&m(),await new Promise((t,n)=>{oa(t,n,{data:b,headers:Zo.from(a.headers),status:a.status,statusText:a.statusText,config:e,request:p})})}catch(b){if(m&&m(),b&&"TypeError"===b.name&&/Load failed|fetch/i.test(b.message))throw Object.assign(new ko("Network Error",ko.ERR_NETWORK,e,p),{cause:b.cause||b});throw ko.from(b,b&&b.code,e,p)}}),Na={http:null,xhr:ga,fetch:Oa};yo.forEach(Na,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch(uu){}Object.defineProperty(e,"adapterName",{value:t})}});const La=e=>`- ${e}`,za=e=>yo.isFunction(e)||null===e||!1===e,Aa=e=>{e=yo.isArray(e)?e:[e];const{length:t}=e;let n,r;const o={};for(let a=0;a<t;a++){let t;if(n=e[a],r=n,!za(n)&&(r=Na[(t=String(n)).toLowerCase()],void 0===r))throw new ko(`Unknown adapter '${t}'`);if(r)break;o[t||"#"+a]=r}if(!r){const e=Object.entries(o).map(e=>{let[t,n]=e;return`adapter ${t} `+(!1===n?"is not supported by the environment":"is not available in the build")});let n=t?e.length>1?"since :\n"+e.map(La).join("\n"):" "+La(e[0]):"as no adapter specified";throw new ko("There is no suitable adapter to dispatch the request "+n,"ERR_NOT_SUPPORT")}return r};function Da(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new ra(null,e)}function Fa(e){Da(e),e.headers=Zo.from(e.headers),e.data=ea.call(e,e.transformRequest),-1!==["post","put","patch"].indexOf(e.method)&&e.headers.setContentType("application/x-www-form-urlencoded",!1);return Aa(e.adapter||Ko.adapter)(e).then(function(t){return Da(e),t.data=ea.call(e,e.transformResponse,t),t.headers=Zo.from(t.headers),t},function(t){return ta(t)||(Da(e),t&&t.response&&(t.response.data=ea.call(e,e.transformResponse,t.response),t.response.headers=Zo.from(t.response.headers))),Promise.reject(t)})}const Ia="1.11.0",Ua={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{Ua[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}});const $a={};Ua.transitional=function(e,t,n){function r(e,t){return"[Axios v"+Ia+"] Transitional option '"+e+"'"+t+(n?". "+n:"")}return(n,o,a)=>{if(!1===e)throw new ko(r(o," has been removed"+(t?" in "+t:"")),ko.ERR_DEPRECATED);return t&&!$a[o]&&($a[o]=!0,console.warn(r(o," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,o,a)}},Ua.spelling=function(e){return(t,n)=>(console.warn(`${n} is likely a misspelling of ${e}`),!0)};const Ma={assertOptions:function(e,t,n){if("object"!==typeof e)throw new ko("options must be an object",ko.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let o=r.length;for(;o-- >0;){const a=r[o],i=t[a];if(i){const t=e[a],n=void 0===t||i(t,a,e);if(!0!==n)throw new ko("option "+a+" must be "+n,ko.ERR_BAD_OPTION_VALUE);continue}if(!0!==n)throw new ko("Unknown option "+a,ko.ERR_BAD_OPTION)}},validators:Ua},Ba=Ma.validators;class Wa{constructor(e){this.defaults=e||{},this.interceptors={request:new Ao,response:new Ao}}async request(e,t){try{return await this._request(e,t)}catch(n){if(n instanceof Error){let e={};Error.captureStackTrace?Error.captureStackTrace(e):e=new Error;const t=e.stack?e.stack.replace(/^.+\n/,""):"";try{n.stack?t&&!String(n.stack).endsWith(t.replace(/^.+\n.+\n/,""))&&(n.stack+="\n"+t):n.stack=t}catch(uu){}}throw n}}_request(e,t){"string"===typeof e?(t=t||{}).url=e:t=e||{},t=ha(this.defaults,t);const{transitional:n,paramsSerializer:r,headers:o}=t;void 0!==n&&Ma.assertOptions(n,{silentJSONParsing:Ba.transitional(Ba.boolean),forcedJSONParsing:Ba.transitional(Ba.boolean),clarifyTimeoutError:Ba.transitional(Ba.boolean)},!1),null!=r&&(yo.isFunction(r)?t.paramsSerializer={serialize:r}:Ma.assertOptions(r,{encode:Ba.function,serialize:Ba.function},!0)),void 0!==t.allowAbsoluteUrls||(void 0!==this.defaults.allowAbsoluteUrls?t.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:t.allowAbsoluteUrls=!0),Ma.assertOptions(t,{baseUrl:Ba.spelling("baseURL"),withXsrfToken:Ba.spelling("withXSRFToken")},!0),t.method=(t.method||this.defaults.method||"get").toLowerCase();let a=o&&yo.merge(o.common,o[t.method]);o&&yo.forEach(["delete","get","head","post","put","patch","common"],e=>{delete o[e]}),t.headers=Zo.concat(a,o);const i=[];let l=!0;this.interceptors.request.forEach(function(e){"function"===typeof e.runWhen&&!1===e.runWhen(t)||(l=l&&e.synchronous,i.unshift(e.fulfilled,e.rejected))});const s=[];let u;this.interceptors.response.forEach(function(e){s.push(e.fulfilled,e.rejected)});let c,d=0;if(!l){const e=[Fa.bind(this),void 0];for(e.unshift(...i),e.push(...s),c=e.length,u=Promise.resolve(t);d<c;)u=u.then(e[d++],e[d++]);return u}c=i.length;let f=t;for(d=0;d<c;){const e=i[d++],t=i[d++];try{f=e(f)}catch(p){t.call(this,p);break}}try{u=Fa.call(this,f)}catch(p){return Promise.reject(p)}for(d=0,c=s.length;d<c;)u=u.then(s[d++],s[d++]);return u}getUri(e){return zo(fa((e=ha(this.defaults,e)).baseURL,e.url,e.allowAbsoluteUrls),e.params,e.paramsSerializer)}}yo.forEach(["delete","get","head","options"],function(e){Wa.prototype[e]=function(t,n){return this.request(ha(n||{},{method:e,url:t,data:(n||{}).data}))}}),yo.forEach(["post","put","patch"],function(e){function t(t){return function(n,r,o){return this.request(ha(o||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:n,data:r}))}}Wa.prototype[e]=t(),Wa.prototype[e+"Form"]=t(!0)});const Ha=Wa;class Va{constructor(e){if("function"!==typeof e)throw new TypeError("executor must be a function.");let t;this.promise=new Promise(function(e){t=e});const n=this;this.promise.then(e=>{if(!n._listeners)return;let t=n._listeners.length;for(;t-- >0;)n._listeners[t](e);n._listeners=null}),this.promise.then=e=>{let t;const r=new Promise(e=>{n.subscribe(e),t=e}).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e(function(e,r,o){n.reason||(n.reason=new ra(e,r,o),t(n.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}toAbortSignal(){const e=new AbortController,t=t=>{e.abort(t)};return this.subscribe(t),e.signal.unsubscribe=()=>this.unsubscribe(t),e.signal}static source(){let e;return{token:new Va(function(t){e=t}),cancel:e}}}const Ka=Va;const qa={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(qa).forEach(e=>{let[t,n]=e;qa[n]=t});const Qa=qa;const Xa=function e(t){const n=new Ha(t),r=Tr(Ha.prototype.request,n);return yo.extend(r,Ha.prototype,n,{allOwnKeys:!0}),yo.extend(r,n,null,{allOwnKeys:!0}),r.create=function(n){return e(ha(t,n))},r}(Ko);Xa.Axios=Ha,Xa.CanceledError=ra,Xa.CancelToken=Ka,Xa.isCancel=ta,Xa.VERSION=Ia,Xa.toFormData=Ro,Xa.AxiosError=ko,Xa.Cancel=Xa.CanceledError,Xa.all=function(e){return Promise.all(e)},Xa.spread=function(e){return function(t){return e.apply(null,t)}},Xa.isAxiosError=function(e){return yo.isObject(e)&&!0===e.isAxiosError},Xa.mergeConfig=ha,Xa.AxiosHeaders=Zo,Xa.formToJSON=e=>Ho(yo.isHTMLForm(e)?new FormData(e):e),Xa.getAdapter=Aa,Xa.HttpStatusCode=Qa,Xa.default=Xa;const Ga=Xa;function Ya(){const[e,t]=(0,r.useState)(""),[n,o]=(0,r.useState)(""),[a,i]=(0,r.useState)(""),[l,s]=(0,r.useState)(null);return(0,xr.jsxs)("div",{style:Ja.container,children:[(0,xr.jsx)("h2",{children:"Login"}),(0,xr.jsxs)("form",{onSubmit:async t=>{t.preventDefault(),i("");try{s(null);const t=await Ga.post("http://localhost:5000/api/login",{email:e,password:n});i(t.data.message),t.data.success&&navigate("/register")}catch(a){var r,o;s((null===(r=a.response)||void 0===r||null===(o=r.data)||void 0===o?void 0:o.message)||"Registration failed. Please try again.")}},style:Ja.form,children:[(0,xr.jsx)("input",{type:"email",placeholder:"Email",value:e,onChange:e=>t(e.target.value),required:!0,style:Ja.input}),(0,xr.jsx)("input",{type:"password",placeholder:"Password",value:n,onChange:e=>o(e.target.value),required:!0,style:Ja.input}),(0,xr.jsx)("button",{type:"submit",style:Ja.button,children:"Login"})]}),(0,xr.jsx)("p",{children:a})]})}const Ja={container:{maxWidth:"300px",margin:"auto",textAlign:"center",padding:"20px"},form:{display:"flex",flexDirection:"column",gap:"10px"},input:{padding:"10px",fontSize:"14px"},button:{padding:"10px",background:"#007bff",color:"white",border:"none",cursor:"pointer"}},Za=yr.div`
  background: #f8f9fa;
  border-radius: 6px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  border-left: 4px solid #3498db;
`,ei=yr.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`,ti=yr.h3`
  color: #2c3e50;
  margin: 0;
`,ni=yr.button`
  background: #e74c3c;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.5rem 0.75rem;
  font-size: 0.875rem;
  cursor: pointer;

  &:hover {
    background: #c0392b;
  }

  &:disabled {
    background: #bdc3c7;
    cursor: not-allowed;
  }
`,ri=yr.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`,oi=yr.div`
  flex: 1;
`,ai=yr.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
`,ii=yr.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #3498db;
    box-shadow: 0 0 0 2px rgba(52, 152, 219, 0.2);
  }
`,li=yr.textarea`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  min-height: 80px;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: #3498db;
    box-shadow: 0 0 0 2px rgba(52, 152, 219, 0.2);
  }
`,si=yr.div`
  margin-top: 1.5rem;
`,ui=yr.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
  margin-top: 0.5rem;
`,ci=yr.div`
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 1rem;
  background: ${e=>e.selected?"rgba(52, 152, 219, 0.1)":"white"};
  border-color: ${e=>e.selected?"#3498db":"#ddd"};
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    border-color: #3498db;
  }

  ${e=>e.disabled&&"\n    opacity: 0.6;\n    cursor: not-allowed;\n    background: #f1f2f6;\n  "}
`,di=yr.h4`
  margin: 0 0 0.5rem;
  color: #2c3e50;
`,fi=yr.p`
  margin: 0;
  font-size: 0.875rem;
  color: #7f8c8d;
`,pi=yr.div`
  font-size: 0.75rem;
  margin-top: 0.5rem;
  color: ${e=>e.available?"#27ae60":"#e74c3c"};
`,hi=yr.div`
  font-size: 0.9rem;
  margin-top: 0.5rem;
  color: ${e=>e.complete?"#27ae60":e.tooMany?"#e74c3c":"#7f8c8d"};
`;const mi=function(e){let{student:t,classes:n,onChange:o,onRemove:a,isRemoveDisabled:i}=e;const[l,s]=(0,r.useState)(""),u=e=>{const{name:n,value:r}=e.target;o({...t,[n]:r})},c=e=>t.class1==e,d=e=>t.class2==e,f=e=>t.class3==e,p=e=>!c(e.id)&&(t.class1.length>=1||e.available_session1<=0),h=e=>!d(e.id)&&(t.class2.length>=1||e.available_session2<=0),m=e=>!f(e.id)&&(t.class3.length>=1||e.available_session3<=0);return(0,xr.jsxs)(Za,{children:[(0,xr.jsxs)(ei,{children:[(0,xr.jsx)(ti,{children:"Student Information"}),(0,xr.jsx)(ni,{onClick:a,disabled:i,type:"button",children:"Remove"})]}),(0,xr.jsxs)(ri,{children:[(0,xr.jsxs)(oi,{children:[(0,xr.jsx)(ai,{htmlFor:`name-${t.id}`,children:"Full Name"}),(0,xr.jsx)(ii,{id:`name-${t.id}`,name:"name",value:t.name,onChange:u,required:!0})]}),(0,xr.jsxs)(oi,{children:[(0,xr.jsx)(ai,{htmlFor:"email",children:"Email"}),(0,xr.jsx)(ii,{id:"email",name:"email",type:"email",value:t.email,onChange:u})]}),(0,xr.jsxs)(oi,{children:[(0,xr.jsx)(ai,{htmlFor:"phone",children:"Phone Number"}),(0,xr.jsx)(ii,{id:"phone",name:"phone",type:"tel",value:t.phone,onChange:u})]}),(0,xr.jsxs)(oi,{children:[(0,xr.jsx)(ai,{htmlFor:`age-${t.id}`,children:"Age"}),(0,xr.jsx)(ii,{id:`age-${t.id}`,name:"age",type:"number",min:"5",max:"18",value:t.age,onChange:u,required:!0})]})]}),(0,xr.jsxs)(oi,{children:[(0,xr.jsx)(ai,{htmlFor:`allergies-${t.id}`,children:"Food Allergies"}),(0,xr.jsx)(ii,{id:`allergies-${t.id}`,name:"allergies",placeholder:"List any food allergies, or type 'None'",value:t.allergies,onChange:u,required:!0})]}),(0,xr.jsxs)(oi,{children:[(0,xr.jsx)(ai,{htmlFor:`shirt-${t.id}`,children:"Shirt Size"}),(0,xr.jsxs)("select",{name:"shirt",value:t.shirt,onChange:u,children:[(0,xr.jsx)("option",{value:"",children:"-- Choose a shirt size --"}),["XS","S","M","L","XL","XXL","XXXL"].map((e,t)=>(0,xr.jsx)("option",{value:e,children:e},t))]})]}),(0,xr.jsxs)(oi,{children:[(0,xr.jsx)(ai,{htmlFor:`medicalNotes-${t.id}`,children:"Medical Notes"}),(0,xr.jsx)(li,{id:`medicalNotes-${t.id}`,name:"medicalNotes",placeholder:"Any additional medical information we should know",value:t.medicalNotes,onChange:u})]}),(0,xr.jsxs)(oi,{children:[(0,xr.jsx)(ai,{htmlFor:`name-${t.id}`,children:"School"}),(0,xr.jsx)(ii,{id:`school-${t.id}`,name:"school",value:t.school,onChange:u})]}),(0,xr.jsxs)(si,{children:[(0,xr.jsx)(ai,{children:"Class Session 1 (Choose 1)"}),(0,xr.jsxs)(hi,{complete:1===t.class1.length,tooMany:t.class1.length>1,children:[t.class1.length,"/1 classes selected"]}),(0,xr.jsx)(ui,{children:n.map(e=>(0,xr.jsxs)(ci,{selected:c(e.id),disabled:p(e),onClick:()=>!p(e)&&(e=>{const n=t.class1;return n==e?(n="",void o({...t,class1:n})):(t.class1=e,void o({...t,class1:e}))})(e.id),children:[(0,xr.jsx)(di,{children:e.name}),(0,xr.jsx)(fi,{children:e.description}),(0,xr.jsx)(pi,{available:e.available_session1>0,children:e.available_session1>0?`${e.available_session1} spots available`:"Class full"})]},e.id))})]}),(0,xr.jsxs)(si,{children:[(0,xr.jsx)(ai,{children:"Class Session 2 (Choose 1)"}),(0,xr.jsxs)(hi,{complete:1===t.class2.length,tooMany:t.class2.length>1,children:[t.class2.length,"/1 classes selected"]}),(0,xr.jsx)(ui,{children:n.map(e=>(0,xr.jsxs)(ci,{selected:d(e.id),disabled:h(e),onClick:()=>!h(e)&&(e=>{const n=t.class2;return n==e?(n="",void o({...t,class2:n})):void o({...t,class2:e})})(e.id),children:[(0,xr.jsx)(di,{children:e.name}),(0,xr.jsx)(fi,{children:e.description}),(0,xr.jsx)(pi,{available:e.available_session2>0,children:e.available_session2>0?`${e.available_session2} spots available`:"Class full"})]},e.id))})]}),(0,xr.jsxs)(si,{children:[(0,xr.jsx)(ai,{children:"Class Session 3 (Choose 1)"}),(0,xr.jsxs)(hi,{complete:1===t.class3.length,tooMany:t.class3.length>1,children:[t.class3.length,"/1 classes selected"]}),(0,xr.jsx)(ui,{children:n.map(e=>(0,xr.jsxs)(ci,{selected:f(e.id),disabled:m(e),onClick:()=>!m(e)&&(e=>{const n=t.class3;return n==e?(n="",void o({...t,class3:n})):void o({...t,class3:e})})(e.id),children:[(0,xr.jsx)(di,{children:e.name}),(0,xr.jsx)(fi,{children:e.description}),(0,xr.jsx)(pi,{available:e.available_session3>0,children:e.available_session3>0?`${e.available_session3} spots available`:"Class full"})]},e.id))})]})]})},gi="http://localhost:5000/api",bi=yr.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`,vi=yr.h1`
  color: #2c3e50;
  margin-bottom: 1.5rem;
  text-align: center;
`,yi=yr.div`
  margin-bottom: 2rem;
`,xi=yr.h2`
  color: #34495e;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #ecf0f1;
`,wi=yr.div`
  margin-bottom: 1rem;
`,Si=yr.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
`,ki=yr.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #3498db;
    box-shadow: 0 0 0 2px rgba(52, 152, 219, 0.2);
  }
`,Ei=yr.div`
  margin-top: 1rem;
`,ji=yr.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`,Ci=yr.button`
  padding: 0.75rem 1.5rem;
  background: ${e=>e.primary?"#3498db":"#ecf0f1"};
  color: ${e=>e.primary?"white":"#34495e"};
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: ${e=>e.primary?"#2980b9":"#dfe6e9"};
  }

  &:disabled {
    background: #bdc3c7;
    cursor: not-allowed;
  }
`,_i=yr(Ci)`
  background: #27ae60;

  &:hover {
    background: #2ecc71;
  }

  &:disabled {
    background: #bdc3c7;
  }
`,Ri=yr.div`
  color: #e74c3c;
  padding: 0.75rem;
  background: #fadbd8;
  border-radius: 4px;
  margin-bottom: 1rem;
`;const Pi=function(){const[e,t]=(0,r.useState)([]),[n,o]=(0,r.useState)(!0),[a,i]=(0,r.useState)(null),l=te(),[s,u]=(0,r.useState)({name:"",password:"",email:"",phone:""}),[c,d]=(0,r.useState)([{id:Date.now().toString(36)+Math.random().toString(36).slice(2),name:"",email:"",phone:"",age:"",allergies:"",shirt:"",medicalNotes:"",class1:"",class2:"",class3:""}]);(0,r.useEffect)(()=>{(async()=>{try{const e=await Ga.get(`${gi}/classes`);t(e.data),o(!1)}catch(e){i("Failed to load available classes. Please try again later."),o(!1)}})()},[]);const f=e=>{const{name:t,value:n}=e.target;u(e=>({...e,[t]:n}))};return n?(0,xr.jsx)("div",{children:"Loading class information..."}):(0,xr.jsxs)(bi,{children:[(0,xr.jsx)(vi,{children:"STEM 2026 Registration"}),a&&(0,xr.jsx)(Ri,{children:a}),(0,xr.jsxs)("form",{onSubmit:async e=>{e.preventDefault();try{i(null);const e=await Ga.post(`${gi}/register`,{parentInfo:s,students:c});e.data.success&&l(`/success/${e.data.registrationId}`)}catch(r){var t,n;i((null===(t=r.response)||void 0===t||null===(n=t.data)||void 0===n?void 0:n.message)||"Registration failed. Please try again.")}},children:[(0,xr.jsxs)(yi,{children:[(0,xr.jsx)(xi,{children:"Parent/Guardian Information"}),(0,xr.jsxs)(wi,{children:[(0,xr.jsx)(Si,{htmlFor:"parentName",children:"Full Name"}),(0,xr.jsx)(ki,{id:"parentName",name:"name",value:s.name,onChange:f,required:!0})]}),(0,xr.jsxs)(wi,{children:[(0,xr.jsx)(Si,{htmlFor:"password",children:"Password"}),(0,xr.jsx)(ki,{id:"password",name:"password",value:s.password,onChange:f,required:!0})]}),(0,xr.jsxs)(wi,{children:[(0,xr.jsx)(Si,{htmlFor:"parentEmail",children:"Email"}),(0,xr.jsx)(ki,{id:"parentEmail",name:"email",type:"email",value:s.email,onChange:f,required:!0})]}),(0,xr.jsxs)(wi,{children:[(0,xr.jsx)(Si,{htmlFor:"parentPhone",children:"Phone Number"}),(0,xr.jsx)(ki,{id:"parentPhone",name:"phone",type:"tel",value:s.phone,onChange:f,required:!0})]})]}),(0,xr.jsxs)(yi,{children:[(0,xr.jsx)(xi,{children:"Student Information"}),(0,xr.jsx)(Ei,{children:c.map(t=>(0,xr.jsx)(mi,{student:t,classes:e,onChange:e=>((e,t)=>{d(n=>n.map(n=>n.id===e?t:n))})(t.id,e),onRemove:()=>{return e=t.id,void d(t=>t.filter(t=>t.id!==e));var e},isRemoveDisabled:1===c.length},t.id))}),(0,xr.jsx)(ji,{children:(0,xr.jsx)(Ci,{type:"button",onClick:()=>{d(e=>[...e,{id:Date.now().toString(36)+Math.random().toString(36).slice(2),name:"",email:"",phone:"",age:"",allergies:"",shirt:"",medicalNotes:"",class1:"",class2:"",class3:""}])},children:"Add Another Student"})})]}),(0,xr.jsx)(_i,{type:"submit",disabled:!(()=>{if(!s.name||!s.email||!s.phone||!s.password)return!1;for(const e of c)if(!e.name||!e.age||!e.shirt||!e.class1||!e.class2||!e.class3)return!1;return!0})(),primary:!0,children:"Complete Registration"})]})]})},Ti=yr.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
`,Oi=yr.div`
  color: #27ae60;
  font-size: 4rem;
  margin-bottom: 1rem;
`,Ni=yr.h1`
  color: #2c3e50;
  margin-bottom: 1rem;
`,Li=yr.p`
  font-size: 1.1rem;
  margin-bottom: 2rem;
`,zi=yr.div`
  max-width: 600px;
  margin: 0 auto;
  text-align: left;
  padding: 1.5rem;
  background: #f8f9fa;
  border-radius: 6px;
`,Ai=yr.div`
  margin-bottom: 1.5rem;
`,Di=yr.h3`
  color: #34495e;
  margin-bottom: 0.5rem;
  padding-bottom: 0.25rem;
  border-bottom: 1px solid #ddd;
`,Fi=yr.div`
  margin-top: 1rem;
`,Ii=yr.div`
  padding: 1rem;
  background: white;
  border-radius: 4px;
  margin-bottom: 1rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`,Ui=yr.ul`
  list-style-type: none;
  padding-left: 0;
  margin-top: 0.5rem;
`,$i=yr.li`
  padding: 0.25rem 0;
`,Mi=yr(Re)`
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background: #3498db;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  margin-top: 1rem;

  &:hover {
    background: #2980b9;
  }
`;const Bi=function(){const{id:e}=ne(),[t,n]=(0,r.useState)(null),[o,a]=(0,r.useState)(!0),[i,l]=(0,r.useState)(null);return(0,r.useEffect)(()=>{e&&(async()=>{try{const t=await Ga.get(`http://localhost:5000/api/registrations/${e}`);t.data.success?n(t.data.registration):l("Failed to load registration details."),a(!1)}catch(t){l("Failed to load registration details."),a(!1)}})()},[e]),o?(0,xr.jsx)("div",{children:"Loading registration details..."}):i||!t?(0,xr.jsxs)(Ti,{children:[(0,xr.jsx)(Ni,{children:"Error"}),(0,xr.jsx)(Li,{children:i||"Registration not found."}),(0,xr.jsx)(Mi,{to:"/",children:"Return to Registration"})]}):(0,xr.jsxs)(Ti,{children:[(0,xr.jsx)(Oi,{children:"\u2713"}),(0,xr.jsx)(Ni,{children:"Registration Complete!"}),(0,xr.jsx)(Li,{children:"Thank you for registering for our summer camp program. Please save your registration ID for future reference."}),(0,xr.jsxs)(zi,{children:[(0,xr.jsxs)(Ai,{children:[(0,xr.jsx)(Di,{children:"Registration Information"}),(0,xr.jsxs)("p",{children:[(0,xr.jsx)("strong",{children:"Registration ID:"})," ",t.id]}),(0,xr.jsxs)("p",{children:[(0,xr.jsx)("strong",{children:"Date:"})," ",new Date(t.timestamp).toLocaleDateString()]})]}),(0,xr.jsxs)(Ai,{children:[(0,xr.jsx)(Di,{children:"Parent/Guardian Information"}),(0,xr.jsxs)("p",{children:[(0,xr.jsx)("strong",{children:"Name:"})," ",t.parentInfo.name]}),(0,xr.jsxs)("p",{children:[(0,xr.jsx)("strong",{children:"Email:"})," ",t.parentInfo.email]}),(0,xr.jsxs)("p",{children:[(0,xr.jsx)("strong",{children:"Phone:"})," ",t.parentInfo.phone]})]}),(0,xr.jsxs)(Ai,{children:[(0,xr.jsx)(Di,{children:"Student Information"}),(0,xr.jsx)(Fi,{children:t.students.map((e,t)=>(0,xr.jsxs)(Ii,{children:[(0,xr.jsxs)("h4",{children:[e.name," (Age ",e.age,")"]}),e.allergies&&(0,xr.jsxs)("p",{children:[(0,xr.jsx)("strong",{children:"Allergies:"})," ",e.allergies]}),e.medicalNotes&&(0,xr.jsxs)("p",{children:[(0,xr.jsx)("strong",{children:"Medical Notes:"})," ",e.medicalNotes]}),(0,xr.jsx)("p",{children:(0,xr.jsx)("strong",{children:"Classes:"})}),(0,xr.jsx)(Ui,{children:e.classSelections.map((e,t)=>(0,xr.jsxs)($i,{children:["Class ",e]},t))})]},t))})]})]}),(0,xr.jsx)(Mi,{to:"/",children:"Register Another Student"})]})},Wi=yr.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
`,Hi=yr.div`
  color: #27ae60;
  font-size: 4rem;
  margin-bottom: 1rem;
`,Vi=yr.h1`
  color: #2c3e50;
  margin-bottom: 1rem;
`,Ki=yr.p`
  font-size: 1.1rem;
  margin-bottom: 2rem;
`,qi=yr.div`
  max-width: 600px;
  margin: 0 auto;
  text-align: left;
  padding: 1.5rem;
  background: #f8f9fa;
  border-radius: 6px;
`,Qi=yr.div`
  margin-bottom: 1.5rem;
`,Xi=yr.h3`
  color: #34495e;
  margin-bottom: 0.5rem;
  padding-bottom: 0.25rem;
  border-bottom: 1px solid #ddd;
`,Gi=(yr.div`
  margin-top: 1rem;
`,yr.div`
  padding: 1rem;
  background: white;
  border-radius: 4px;
  margin-bottom: 1rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`,yr.ul`
  list-style-type: none;
  padding-left: 0;
  margin-top: 0.5rem;
`,yr.li`
  padding: 0.25rem 0;
`,yr(Re)`
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background: #3498db;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  margin-top: 1rem;

  &:hover {
    background: #2980b9;
  }
`);const Yi=function(){const{id:e}=ne(),[t,n]=(0,r.useState)(null),[o,a]=(0,r.useState)(!0),[i,l]=(0,r.useState)(null);return(0,r.useEffect)(()=>{e&&(async()=>{try{const t=await Ga.get(`http://localhost:5000/api/volunteers/${e}`);t.data.success?n(t.data.registration):l("Failed to load registration details."),a(!1)}catch(t){l("Failed to load registration details."),a(!1)}})()},[e]),o?(0,xr.jsx)("div",{children:"Loading registration details..."}):i||!t?(0,xr.jsxs)(Wi,{children:[(0,xr.jsx)(Vi,{children:"Error"}),(0,xr.jsx)(Ki,{children:i||"Volunteer Registration not found."}),(0,xr.jsx)(Gi,{to:"/volunteer_registration",children:"Return to Volunteer Registration"})]}):(0,xr.jsxs)(Wi,{children:[(0,xr.jsx)(Hi,{children:"\u2713"}),(0,xr.jsx)(Vi,{children:"Registration Complete!"}),(0,xr.jsx)(Ki,{children:"Thank you for registering to be a volunteer at the STEM event."}),(0,xr.jsxs)(qi,{children:[(0,xr.jsxs)(Qi,{children:[(0,xr.jsx)(Xi,{children:"Registration Information"}),(0,xr.jsxs)("p",{children:[(0,xr.jsx)("strong",{children:"Registration ID:"})," ",t.id]}),(0,xr.jsxs)("p",{children:[(0,xr.jsx)("strong",{children:"Date:"})," ",new Date(t.timestamp).toLocaleDateString()]})]}),(0,xr.jsxs)(Qi,{children:[(0,xr.jsx)(Xi,{children:"Volunteer Information"}),(0,xr.jsxs)("p",{children:[(0,xr.jsx)("strong",{children:"Name:"})," ",t.name]}),(0,xr.jsxs)("p",{children:[(0,xr.jsx)("strong",{children:"Email:"})," ",t.email]}),(0,xr.jsxs)("p",{children:[(0,xr.jsx)("strong",{children:"Phone:"})," ",t.phone]}),(0,xr.jsxs)("p",{children:[(0,xr.jsx)("strong",{children:"Shirt Size:"})," ",t.shirt]})]})]})]})},Ji=yr.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`,Zi=yr.h1`
  color: #2c3e50;
  margin-bottom: 1.5rem;
`,el=yr.div`
  border: 1px solid #ddd;
  border-radius: 6px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  background: #f8f9fa;
`,tl=yr.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #ddd;
`,nl=yr.div`
  font-weight: bold;
  color: #3498db;
`,rl=yr.div`
  color: #7f8c8d;
  font-size: 0.9rem;
`,ol=yr.div`
  margin-bottom: 1rem;
`,al=yr.div`
  margin-top: 1rem;
`,il=yr.div`
  background: white;
  padding: 1rem;
  border-radius: 4px;
  margin-bottom: 1rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`,ll=yr.h4`
  color: #2c3e50;
  margin: 0 0 0.5rem;
`,sl=yr.ul`
  margin: 0.5rem 0;
  padding-left: 1.5rem;
`;const ul=function(){const[e,t]=(0,r.useState)([]),[n,o]=(0,r.useState)(!0);return(0,r.useEffect)(()=>{(async()=>{try{const e=await Ga.get("http://localhost:5000/api/registrations");t(e.data),o(!1)}catch(e){console.error("Failed to load registrations:",e),o(!1)}})()},[]),n?(0,xr.jsx)("div",{children:"Loading registrations..."}):0===e.length?(0,xr.jsxs)(Ji,{children:[(0,xr.jsx)(Zi,{children:"Registrations"}),(0,xr.jsx)("p",{children:"No registrations found."})]}):(0,xr.jsxs)(Ji,{children:[(0,xr.jsx)(Zi,{children:"All Registrations"}),e.map(e=>(0,xr.jsxs)(el,{children:[(0,xr.jsxs)(tl,{children:[(0,xr.jsxs)(nl,{children:["Registration ID: ",e.id]}),(0,xr.jsx)(rl,{children:new Date(e.timestamp).toLocaleString()})]}),(0,xr.jsxs)(ol,{children:[(0,xr.jsx)("h3",{children:"Parent Information"}),(0,xr.jsxs)("p",{children:[(0,xr.jsx)("strong",{children:"Name:"})," ",e.parentInfo.name]}),(0,xr.jsxs)("p",{children:[(0,xr.jsx)("strong",{children:"Email:"})," ",e.parentInfo.email]}),(0,xr.jsxs)("p",{children:[(0,xr.jsx)("strong",{children:"Phone:"})," ",e.parentInfo.phone]})]}),(0,xr.jsxs)(al,{children:[(0,xr.jsxs)("h3",{children:["Students (",e.students.length,")"]}),e.students.map((e,t)=>(0,xr.jsxs)(il,{children:[(0,xr.jsxs)(ll,{children:[e.name," (Age ",e.age,")"]}),e.allergies&&(0,xr.jsxs)("p",{children:[(0,xr.jsx)("strong",{children:"Allergies:"})," ",e.allergies]}),(0,xr.jsxs)("div",{children:[(0,xr.jsx)("strong",{children:"Classes:"}),(0,xr.jsx)(sl,{children:e.classSelections.map((e,t)=>(0,xr.jsxs)("li",{children:["Class ID: ",e]},t))})]})]},t))]})]},e.id))]})},cl=(yr.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`,yr.div`
  background: #f8f9fa;
  border-radius: 6px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  border-left: 4px solid #3498db;
`),dl=yr.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`,fl=yr.h3`
  color: #2c3e50;
  margin: 0;
`,pl=(yr.table`
  width: 100%;
  border-collapse: collapse;
`,yr.thead`
  background: #f1f2f6;
`,yr.tr`
  border-bottom: 1px solid #ddd;

  &:hover {
    background: #f8f9fa;
  }
`,yr.th`
  text-align: left;
  padding: 0.75rem;
`,yr.td`
  padding: 0.75rem;
`,yr.button`
  background: #e74c3c;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.5rem 0.75rem;
  font-size: 0.875rem;
  cursor: pointer;

  &:hover {
    background: #c0392b;
  }

  &:disabled {
    background: #bdc3c7;
    cursor: not-allowed;
  }
`,yr.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`),hl=(yr.div`
  flex: 1;
`,yr.th`
  text-align: left;
  padding: 0.75rem;
`),ml=yr.td`
  padding: 0.75rem;
`,gl=(yr.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #3498db;
    box-shadow: 0 0 0 2px rgba(52, 152, 219, 0.2);
  }
`,yr.textarea`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  min-height: 80px;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: #3498db;
    box-shadow: 0 0 0 2px rgba(52, 152, 219, 0.2);
  }
`,yr.div`
  margin-top: 1.5rem;
`,yr.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
  margin-top: 0.5rem;
`,yr.div`
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 1rem;
  background: ${e=>e.selected?"rgba(52, 152, 219, 0.1)":"white"};
  border-color: ${e=>e.selected?"#3498db":"#ddd"};
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    border-color: #3498db;
  }

  ${e=>e.disabled&&"\n    opacity: 0.6;\n    cursor: not-allowed;\n    background: #f1f2f6;\n  "}
`,yr.h4`
  margin: 0 0 0.5rem;
  color: #2c3e50;
`,yr.p`
  margin: 0;
  font-size: 0.875rem;
  color: #7f8c8d;
`,yr.div`
  font-size: 0.75rem;
  margin-top: 0.5rem;
  color: ${e=>e.available?"#27ae60":"#e74c3c"};
`,yr.div`
  font-size: 0.9rem;
  margin-top: 0.5rem;
  color: ${e=>e.complete?"#27ae60":e.tooMany?"#e74c3c":"#7f8c8d"};
`,yr.button`
  padding: 0.75rem 1.5rem;
  background: white;
  color: black;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: ${e=>e.primary?"#2980b9":"#dfe6e9"};
  }

  &:disabled {
    background: #bdc3c7;
    cursor: not-allowed;
  }
`);const bl=function(e){let{student:t}=e;return(0,xr.jsxs)(cl,{children:[(0,xr.jsx)(dl,{children:(0,xr.jsx)(fl,{children:"Student Information"})}),(0,xr.jsxs)(pl,{children:[(0,xr.jsx)(gl,{type:"button",onClick:()=>{},children:"Check In"}),(0,xr.jsx)(gl,{type:"button",onClick:()=>{},children:"Check Out"})]}),(0,xr.jsxs)(pl,{children:[(0,xr.jsx)(hl,{children:"Full Name: "}),(0,xr.jsx)(ml,{children:t.name})]}),(0,xr.jsxs)(pl,{children:[(0,xr.jsx)(hl,{children:"Age: "}),(0,xr.jsx)(ml,{children:t.age})]}),(0,xr.jsxs)(pl,{children:[(0,xr.jsx)(hl,{children:"Email:"}),(0,xr.jsx)(ml,{children:t.email})]}),(0,xr.jsxs)(pl,{children:[(0,xr.jsx)(hl,{children:"Phone Number:"}),(0,xr.jsx)(ml,{children:t.phone})]}),(0,xr.jsxs)(pl,{children:[(0,xr.jsx)(hl,{children:"Food Allergies:"}),(0,xr.jsx)(ml,{children:t.allergies})]}),(0,xr.jsxs)(pl,{children:[(0,xr.jsx)(hl,{children:"Shirt Size:"}),(0,xr.jsx)(ml,{children:t.shirt})]}),(0,xr.jsxs)(pl,{children:[(0,xr.jsx)(hl,{children:"Medical Notes:"}),(0,xr.jsx)(ml,{children:t.medicalNotes})]}),(0,xr.jsxs)(pl,{children:[(0,xr.jsx)(hl,{children:"School:"}),(0,xr.jsx)(ml,{children:t.school})]})]})};yr.div`
  background: #f8f9fa;
  border-radius: 6px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  border-left: 4px solid #3498db;
`,yr.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`,yr.h3`
  color: #2c3e50;
  margin: 0;
`,yr.button`
  background: #e74c3c;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.5rem 0.75rem;
  font-size: 0.875rem;
  cursor: pointer;

  &:hover {
    background: #c0392b;
  }

  &:disabled {
    background: #bdc3c7;
    cursor: not-allowed;
  }
`,yr.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`,yr.div`
  flex: 1;
`,yr.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
`,yr.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #3498db;
    box-shadow: 0 0 0 2px rgba(52, 152, 219, 0.2);
  }
`,yr.textarea`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  min-height: 80px;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: #3498db;
    box-shadow: 0 0 0 2px rgba(52, 152, 219, 0.2);
  }
`,yr.div`
  margin-top: 1.5rem;
`,yr.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
  margin-top: 0.5rem;
`,yr.div`
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 1rem;
  background: ${e=>e.selected?"rgba(52, 152, 219, 0.1)":"white"};
  border-color: ${e=>e.selected?"#3498db":"#ddd"};
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    border-color: #3498db;
  }

  ${e=>e.disabled&&"\n    opacity: 0.6;\n    cursor: not-allowed;\n    background: #f1f2f6;\n  "}
`,yr.h4`
  margin: 0 0 0.5rem;
  color: #2c3e50;
`,yr.p`
  margin: 0;
  font-size: 0.875rem;
  color: #7f8c8d;
`,yr.div`
  font-size: 0.75rem;
  margin-top: 0.5rem;
  color: ${e=>e.available?"#27ae60":"#e74c3c"};
`,yr.div`
  font-size: 0.9rem;
  margin-top: 0.5rem;
  color: ${e=>e.complete?"#27ae60":e.tooMany?"#e74c3c":"#7f8c8d"};
`;const vl="http://localhost:5000/api",yl=yr.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`,xl=(yr.h1`
  color: #2c3e50;
  margin-bottom: 1.5rem;
`,yr.div`
  display: flex;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid #ddd;
`),wl=yr.button`
  padding: 0.75rem 1.5rem;
  background: ${e=>e.active?"#3498db":"transparent"};
  color: ${e=>e.active?"white":"#34495e"};
  border: none;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background: ${e=>e.active?"#3498db":"#f1f2f6"};
  }
`,Sl=(yr.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
`,yr.div`
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 1rem;
  background: white;
`,yr.h3`
  color: #2c3e50;
  margin: 0 0 0.5rem;
`,yr.div`
  background: #ecf0f1;
  border-radius: 10px;
  height: 10px;
  overflow: hidden;
  margin: 0.5rem 0;
`,yr.div`
  height: 100%;
  background: ${e=>{const t=e.value/e.max*100;return t<60?"#2ecc71":t<80?"#f39c12":"#e74c3c"}};
  width: ${e=>e.value/e.max*100}%;
`,yr.table`
  width: 100%;
  border-collapse: collapse;
`,yr.table`
  width: 100%;
  border-collapse: collapse;
`),kl=yr.thead`
  background: #f1f2f6;
`,El=yr.tr`
  border-bottom: 1px solid #ddd;

  &:hover {
    background: #f8f9fa;
  }
`,jl=yr.th`
  text-align: left;
  padding: 0.75rem;
`,Cl=yr.td`
  padding: 0.75rem;
`,_l=yr.button`
  padding: 0.75rem 1.5rem;
  background: white;
  color: black;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: ${e=>e.primary?"#2980b9":"#dfe6e9"};
  }

  &:disabled {
    background: #bdc3c7;
    cursor: not-allowed;
  }
`;let Rl="";const Pl=e=>{Rl=e};const Tl=function(){const[e,t]=(0,r.useState)("list"),[n,o]=(0,r.useState)([]),[a,i]=(0,r.useState)([]),[l,s]=(0,r.useState)([]),[u,c]=(0,r.useState)(!0),[d,f]=(0,r.useState)("");(0,r.useEffect)(()=>{(async()=>{try{const[e,t,n]=await Promise.all([Ga.get(`${vl}/classes`),Ga.get(`${vl}/registrations`),Ga.get(`${vl}/students`)]);o(e.data),i(t.data),s(n.data),c(!1)}catch(e){console.error("Failed to load data:",e),c(!1)}})()},[]);const p=l.filter(e=>e.name.toLowerCase().includes(d.toLowerCase())||e.email.toLowerCase().includes(d.toLowerCase()));return u?(0,xr.jsx)("div",{children:"Loading dashboard data..."}):(0,xr.jsxs)(yl,{children:[(0,xr.jsxs)(xl,{children:[(0,xr.jsx)(wl,{active:"list"===e,onClick:()=>t("list"),children:"List"}),(0,xr.jsx)(wl,{active:"info"===e,onClick:()=>t("info"),children:"Info"})]}),"list"===e&&(0,xr.jsxs)("p",{children:[(0,xr.jsx)("input",{type:"text",placeholder:"Search by name",value:d,onChange:e=>f(e.target.value),style:{marginBottom:10,padding:8,width:"100%"}}),(0,xr.jsxs)(Sl,{children:[(0,xr.jsx)(kl,{children:(0,xr.jsxs)(El,{children:[(0,xr.jsx)(jl,{children:"Name"}),(0,xr.jsx)(jl,{children:"Class 1"}),(0,xr.jsx)(jl,{children:"Class 2"}),(0,xr.jsx)(jl,{children:"Class 3"})]})}),(0,xr.jsx)("tbody",{children:p.map(e=>(0,xr.jsxs)(El,{children:[(0,xr.jsx)(Cl,{children:(0,xr.jsx)(_l,{type:"button",onClick:()=>{Pl(e),t("info")},children:e.name})}),(0,xr.jsx)(Cl,{children:(0,xr.jsx)(_l,{type:"button",onClick:()=>{Pl(e),t("info")},children:"class 1"})}),(0,xr.jsx)(Cl,{children:(0,xr.jsx)(_l,{type:"button",onClick:()=>{Pl(e),t("info")},children:"class 2"})}),(0,xr.jsx)(Cl,{children:(0,xr.jsx)(_l,{type:"button",onClick:()=>{Pl(e),t("info")},children:"class 3"})})]},e.id))})]})]}),"info"===e&&(0,xr.jsx)("p",{children:(0,xr.jsx)(bl,{student:Rl})})]})},Ol=yr.div`
  background: #f8f9fa;
  border-radius: 6px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  border-left: 4px solid #3498db;
`,Nl=yr.table`
  width: 100%;
  border-collapse: collapse;
`,Ll=yr.thead`
  background: #f1f2f6;
`,zl=yr.tr`
  border-bottom: 1px solid #ddd;

  &:hover {
    background: #f8f9fa;
  }
`,Al=yr.th`
  text-align: left;
  padding: 0.75rem;
`,Dl=yr.td`
  padding: 0.75rem;
`;yr.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`,yr.h3`
  color: #2c3e50;
  margin: 0;
`,yr.button`
  background: #e74c3c;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.5rem 0.75rem;
  font-size: 0.875rem;
  cursor: pointer;

  &:hover {
    background: #c0392b;
  }

  &:disabled {
    background: #bdc3c7;
    cursor: not-allowed;
  }
`,yr.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`,yr.div`
  flex: 1;
`,yr.th`
  text-align: left;
  padding: 0.75rem;
`,yr.td`
  padding: 0.75rem;
`,yr.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #3498db;
    box-shadow: 0 0 0 2px rgba(52, 152, 219, 0.2);
  }
`,yr.textarea`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  min-height: 80px;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: #3498db;
    box-shadow: 0 0 0 2px rgba(52, 152, 219, 0.2);
  }
`,yr.div`
  margin-top: 1.5rem;
`,yr.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
  margin-top: 0.5rem;
`,yr.div`
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 1rem;
  background: ${e=>e.selected?"rgba(52, 152, 219, 0.1)":"white"};
  border-color: ${e=>e.selected?"#3498db":"#ddd"};
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    border-color: #3498db;
  }

  ${e=>e.disabled&&"\n    opacity: 0.6;\n    cursor: not-allowed;\n    background: #f1f2f6;\n  "}
`,yr.h4`
  margin: 0 0 0.5rem;
  color: #2c3e50;
`,yr.p`
  margin: 0;
  font-size: 0.875rem;
  color: #7f8c8d;
`,yr.div`
  font-size: 0.75rem;
  margin-top: 0.5rem;
  color: ${e=>e.available?"#27ae60":"#e74c3c"};
`,yr.div`
  font-size: 0.9rem;
  margin-top: 0.5rem;
  color: ${e=>e.complete?"#27ae60":e.tooMany?"#e74c3c":"#7f8c8d"};
`;const Fl=function(){const[e,t]=(0,r.useState)([]),[n,o]=(0,r.useState)(!0);te(),(0,r.useEffect)(()=>{(async()=>{try{const[e]=await Promise.all([Ga.get(`${API_URL}/students`)]);t(e.data),o(!1)}catch(e){console.error("Failed to load data:",e),o(!1)}})()},[]);const a=e.filter(e=>e.allergies.toLowerCase().length>0);return n?(0,xr.jsx)("div",{children:"Loading dashboard data..."}):(0,xr.jsx)(Ol,{children:(0,xr.jsxs)(Nl,{children:[(0,xr.jsx)(Ll,{children:(0,xr.jsxs)(zl,{children:[(0,xr.jsx)(Al,{children:"Student"}),(0,xr.jsx)(Al,{children:"Allergies"})]})}),(0,xr.jsx)("tbody",{children:a.map(e=>(0,xr.jsxs)(zl,{children:[(0,xr.jsx)(Dl,{children:e.name}),(0,xr.jsx)(Dl,{children:e.allergies})]},e.id))})]})})},Il=yr.div`
  background: #f8f9fa;
  border-radius: 6px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  border-left: 4px solid #3498db;
`,Ul=yr.table`
  width: 100%;
  border-collapse: collapse;
`,$l=yr.thead`
  background: #f1f2f6;
`,Ml=yr.tr`
  border-bottom: 1px solid #ddd;

  &:hover {
    background: #f8f9fa;
  }
`,Bl=yr.th`
  text-align: left;
  padding: 0.75rem;
`,Wl=yr.td`
  padding: 0.75rem;
`;yr.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`,yr.h3`
  color: #2c3e50;
  margin: 0;
`,yr.button`
  background: #e74c3c;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.5rem 0.75rem;
  font-size: 0.875rem;
  cursor: pointer;

  &:hover {
    background: #c0392b;
  }

  &:disabled {
    background: #bdc3c7;
    cursor: not-allowed;
  }
`,yr.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`,yr.div`
  flex: 1;
`,yr.th`
  text-align: left;
  padding: 0.75rem;
`,yr.td`
  padding: 0.75rem;
`,yr.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #3498db;
    box-shadow: 0 0 0 2px rgba(52, 152, 219, 0.2);
  }
`,yr.textarea`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  min-height: 80px;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: #3498db;
    box-shadow: 0 0 0 2px rgba(52, 152, 219, 0.2);
  }
`,yr.div`
  margin-top: 1.5rem;
`,yr.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
  margin-top: 0.5rem;
`,yr.div`
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 1rem;
  background: ${e=>e.selected?"rgba(52, 152, 219, 0.1)":"white"};
  border-color: ${e=>e.selected?"#3498db":"#ddd"};
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    border-color: #3498db;
  }

  ${e=>e.disabled&&"\n    opacity: 0.6;\n    cursor: not-allowed;\n    background: #f1f2f6;\n  "}
`,yr.h4`
  margin: 0 0 0.5rem;
  color: #2c3e50;
`,yr.p`
  margin: 0;
  font-size: 0.875rem;
  color: #7f8c8d;
`,yr.div`
  font-size: 0.75rem;
  margin-top: 0.5rem;
  color: ${e=>e.available?"#27ae60":"#e74c3c"};
`,yr.div`
  font-size: 0.9rem;
  margin-top: 0.5rem;
  color: ${e=>e.complete?"#27ae60":e.tooMany?"#e74c3c":"#7f8c8d"};
`;const Hl=function(){const[e,t]=(0,r.useState)([]),[n,o]=(0,r.useState)(!0);te(),(0,r.useEffect)(()=>{(async()=>{try{const[e]=await Promise.all([Ga.get(`${API_URL}/students`)]);t(e.data),o(!1)}catch(e){console.error("Failed to load data:",e),o(!1)}})()},[]);const a=e.filter(e=>e.medicalNotes.toLowerCase().length>0);return n?(0,xr.jsx)("div",{children:"Loading dashboard data..."}):(0,xr.jsx)(Il,{children:(0,xr.jsxs)(Ul,{children:[(0,xr.jsx)($l,{children:(0,xr.jsxs)(Ml,{children:[(0,xr.jsx)(Bl,{children:"Student"}),(0,xr.jsx)(Bl,{children:"Medical Notes"})]})}),(0,xr.jsx)("tbody",{children:a.map(e=>(0,xr.jsxs)(Ml,{children:[(0,xr.jsx)(Wl,{children:e.name}),(0,xr.jsx)(Wl,{children:e.medicalNotes})]},e.id))})]})})},Vl="http://localhost:5000/api",Kl=yr.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`,ql=yr.h1`
  color: #2c3e50;
  margin-bottom: 1.5rem;
`,Ql=yr.div`
  display: flex;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid #ddd;
`,Xl=yr.button`
  padding: 0.75rem 1.5rem;
  background: ${e=>e.active?"#3498db":"transparent"};
  color: ${e=>e.active?"white":"#34495e"};
  border: none;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background: ${e=>e.active?"#3498db":"#f1f2f6"};
  }
`,Gl=(yr.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
`,yr.div`
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 1rem;
  background: white;
`,yr.h3`
  color: #2c3e50;
  margin: 0 0 0.5rem;
`,yr.div`
  background: #ecf0f1;
  border-radius: 10px;
  height: 10px;
  overflow: hidden;
  margin: 0.5rem 0;
`,yr.div`
  height: 100%;
  background: ${e=>{const t=e.value/e.max*100;return t<60?"#2ecc71":t<80?"#f39c12":"#e74c3c"}};
  width: ${e=>e.value/e.max*100}%;
`,yr.table`
  width: 100%;
  border-collapse: collapse;
`,yr.table`
  width: 100%;
  border-collapse: collapse;
`),Yl=yr.thead`
  background: #f1f2f6;
`,Jl=yr.tr`
  border-bottom: 1px solid #ddd;

  &:hover {
    background: #f8f9fa;
  }
`,Zl=yr.th`
  text-align: left;
  padding: 0.75rem;
`,es=yr.td`
  padding: 0.75rem;
`;yr.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`,yr.button`
  padding: 0.75rem 1.5rem;
  background: white;
  color: black;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: ${e=>e.primary?"#2980b9":"#dfe6e9"};
  }

  &:disabled {
    background: #bdc3c7;
    cursor: not-allowed;
  }
`;const ts=function(){const[e,t]=(0,r.useState)("stats"),[n,o]=(0,r.useState)([]),[a,i]=(0,r.useState)([]),[l,s]=(0,r.useState)([]),[u,c]=(0,r.useState)([]),[d,f]=(0,r.useState)(!0);return(0,r.useEffect)(()=>{(async()=>{try{const[e,t,n,r]=await Promise.all([Ga.get(`${Vl}/classes`),Ga.get(`${Vl}/students`),Ga.get(`${Vl}/student_shirts`),Ga.get(`${Vl}/volunteer_shirts`)]);o(e.data),i(t.data),setExportStudents(exportStudentRes.data),s(n.data),c(r.data),f(!1)}catch(e){console.error("Failed to load data:",e),f(!1)}})()},[]),d?(0,xr.jsx)("div",{children:"Loading dashboard data..."}):(0,xr.jsxs)(Kl,{children:[(0,xr.jsxs)(Ql,{children:[(0,xr.jsx)(Xl,{active:"stats"===e,onClick:()=>t("stats"),children:"Stats"}),(0,xr.jsx)(Xl,{active:"allergies"===e,onClick:()=>t("allergies"),children:"Allergies"}),(0,xr.jsx)(Xl,{active:"medical"===e,onClick:()=>t("medical"),children:"Medical"})]}),"stats"===e&&(0,xr.jsxs)("p",{children:[(0,xr.jsx)(ql,{children:"Student Shirt Sizes"}),(0,xr.jsxs)(Gl,{children:[(0,xr.jsx)(Yl,{children:(0,xr.jsxs)(Jl,{children:[(0,xr.jsx)(Zl,{children:"XS"}),(0,xr.jsx)(Zl,{children:"S"}),(0,xr.jsx)(Zl,{children:"M"}),(0,xr.jsx)(Zl,{children:"L"}),(0,xr.jsx)(Zl,{children:"XL"}),(0,xr.jsx)(Zl,{children:"XXL"}),(0,xr.jsx)(Zl,{children:"XXXL"})]})}),(0,xr.jsx)("tbody",{children:(0,xr.jsxs)(Jl,{children:[(0,xr.jsx)(es,{children:l.xs}),(0,xr.jsx)(es,{children:l.s}),(0,xr.jsx)(es,{children:l.m}),(0,xr.jsx)(es,{children:l.l}),(0,xr.jsx)(es,{children:l.xl}),(0,xr.jsx)(es,{children:l.xxl}),(0,xr.jsx)(es,{children:l.xxxl})]})})]}),(0,xr.jsxs)("p",{children:[(0,xr.jsx)("br",{}),(0,xr.jsx)("br",{}),(0,xr.jsx)("br",{})]}),(0,xr.jsx)(ql,{children:"Volunteer Shirt Sizes"}),(0,xr.jsxs)(Gl,{children:[(0,xr.jsx)(Yl,{children:(0,xr.jsxs)(Jl,{children:[(0,xr.jsx)(Zl,{children:"XS"}),(0,xr.jsx)(Zl,{children:"S"}),(0,xr.jsx)(Zl,{children:"M"}),(0,xr.jsx)(Zl,{children:"L"}),(0,xr.jsx)(Zl,{children:"XL"}),(0,xr.jsx)(Zl,{children:"XXL"}),(0,xr.jsx)(Zl,{children:"XXXL"})]})}),(0,xr.jsx)("tbody",{children:(0,xr.jsxs)(Jl,{children:[(0,xr.jsx)(es,{children:u.xs}),(0,xr.jsx)(es,{children:u.s}),(0,xr.jsx)(es,{children:u.m}),(0,xr.jsx)(es,{children:u.l}),(0,xr.jsx)(es,{children:u.xl}),(0,xr.jsx)(es,{children:u.xxl}),(0,xr.jsx)(es,{children:u.xxxl})]})})]}),(0,xr.jsxs)("p",{children:[(0,xr.jsx)("br",{}),(0,xr.jsx)("br",{}),(0,xr.jsx)("br",{})]}),(0,xr.jsx)(ql,{children:"Exports"}),(0,xr.jsx)("button",{onClick:async()=>{try{const e=await Ga.get(`${Vl}/exportStudents`,{responseType:"blob"}),t=window.URL.createObjectURL(new Blob([e.data])),n=document.createElement("a");n.href=t,n.setAttribute("download","students.csv"),document.body.appendChild(n),n.click(),n.remove()}catch(e){console.error("Export failed:",e)}},children:"Export Students CSV"}),(0,xr.jsx)("br",{}),(0,xr.jsx)("br",{}),(0,xr.jsx)("button",{onClick:async()=>{try{const e=await Ga.get(`${Vl}/exportVolunteers`,{responseType:"blob"}),t=window.URL.createObjectURL(new Blob([e.data])),n=document.createElement("a");n.href=t,n.setAttribute("download","volunteers.csv"),document.body.appendChild(n),n.click(),n.remove()}catch(e){console.error("Export failed:",e)}},children:"Export Volunteers CSV"}),(0,xr.jsx)("br",{}),(0,xr.jsx)("br",{}),(0,xr.jsx)("button",{onClick:async()=>{try{const e=await Ga.get(`${Vl}/exportParents`,{responseType:"blob"}),t=window.URL.createObjectURL(new Blob([e.data])),n=document.createElement("a");n.href=t,n.setAttribute("download","parents.csv"),document.body.appendChild(n),n.click(),n.remove()}catch(e){console.error("Export failed:",e)}},children:"Export Parents CSV"})]}),"allergies"===e&&(0,xr.jsx)("p",{children:(0,xr.jsx)(Fl,{})}),"medical"===e&&(0,xr.jsx)("p",{children:(0,xr.jsx)(Hl,{})})]})},ns=yr.div`
  background: #f8f9fa;
  border-radius: 6px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  border-left: 4px solid #3498db;
`,rs=yr.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`,os=yr.h3`
  color: #2c3e50;
  margin: 0;
`,as=(yr.button`
  background: #e74c3c;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.5rem 0.75rem;
  font-size: 0.875rem;
  cursor: pointer;

  &:hover {
    background: #c0392b;
  }

  &:disabled {
    background: #bdc3c7;
    cursor: not-allowed;
  }
`,yr.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`),is=(yr.div`
  flex: 1;
`,yr.th`
  text-align: left;
  padding: 0.75rem;
`),ls=yr.td`
  padding: 0.75rem;
`,ss=(yr.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #3498db;
    box-shadow: 0 0 0 2px rgba(52, 152, 219, 0.2);
  }
`,yr.textarea`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  min-height: 80px;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: #3498db;
    box-shadow: 0 0 0 2px rgba(52, 152, 219, 0.2);
  }
`,yr.div`
  margin-top: 1.5rem;
`,yr.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
  margin-top: 0.5rem;
`,yr.div`
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 1rem;
  background: ${e=>e.selected?"rgba(52, 152, 219, 0.1)":"white"};
  border-color: ${e=>e.selected?"#3498db":"#ddd"};
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    border-color: #3498db;
  }

  ${e=>e.disabled&&"\n    opacity: 0.6;\n    cursor: not-allowed;\n    background: #f1f2f6;\n  "}
`,yr.h4`
  margin: 0 0 0.5rem;
  color: #2c3e50;
`,yr.p`
  margin: 0;
  font-size: 0.875rem;
  color: #7f8c8d;
`,yr.div`
  font-size: 0.75rem;
  margin-top: 0.5rem;
  color: ${e=>e.available?"#27ae60":"#e74c3c"};
`,yr.div`
  font-size: 0.9rem;
  margin-top: 0.5rem;
  color: ${e=>e.complete?"#27ae60":e.tooMany?"#e74c3c":"#7f8c8d"};
`,yr.button`
  padding: 0.75rem 1.5rem;
  background: white;
  color: black;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: ${e=>e.primary?"#2980b9":"#dfe6e9"};
  }

  &:disabled {
    background: #bdc3c7;
    cursor: not-allowed;
  }
`);const us=function(e){let{volunteer:t}=e;return(0,xr.jsxs)(ns,{children:[(0,xr.jsx)(rs,{children:(0,xr.jsx)(os,{children:"Volunteer Information"})}),(0,xr.jsxs)(as,{children:[(0,xr.jsx)(ss,{type:"submit",onClick:()=>{},children:"Check In"}),(0,xr.jsx)(ss,{type:"button",onClick:()=>{},children:"Check Out"})]}),(0,xr.jsxs)(as,{children:[(0,xr.jsx)(is,{children:"Full Name: "}),(0,xr.jsx)(ls,{children:t.name})]}),(0,xr.jsxs)(as,{children:[(0,xr.jsx)(is,{children:"Email:"}),(0,xr.jsx)(ls,{children:t.email})]}),(0,xr.jsxs)(as,{children:[(0,xr.jsx)(is,{children:"Phone Number:"}),(0,xr.jsx)(ls,{children:t.phone})]}),(0,xr.jsxs)(as,{children:[(0,xr.jsx)(is,{children:"Shirt Size:"}),(0,xr.jsx)(ls,{children:t.shirt})]})]})},cs=yr.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`,ds=(yr.h1`
  color: #2c3e50;
  margin-bottom: 1.5rem;
`,yr.div`
  display: flex;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid #ddd;
`),fs=yr.button`
  padding: 0.75rem 1.5rem;
  background: ${e=>e.active?"#3498db":"transparent"};
  color: ${e=>e.active?"white":"#34495e"};
  border: none;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background: ${e=>e.active?"#3498db":"#f1f2f6"};
  }
`,ps=(yr.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
`,yr.div`
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 1rem;
  background: white;
`,yr.h3`
  color: #2c3e50;
  margin: 0 0 0.5rem;
`,yr.div`
  background: #ecf0f1;
  border-radius: 10px;
  height: 10px;
  overflow: hidden;
  margin: 0.5rem 0;
`,yr.div`
  height: 100%;
  background: ${e=>{const t=e.value/e.max*100;return t<60?"#2ecc71":t<80?"#f39c12":"#e74c3c"}};
  width: ${e=>e.value/e.max*100}%;
`,yr.table`
  width: 100%;
  border-collapse: collapse;
`,yr.table`
  width: 100%;
  border-collapse: collapse;
`),hs=yr.thead`
  background: #f1f2f6;
`,ms=yr.tr`
  border-bottom: 1px solid #ddd;

  &:hover {
    background: #f8f9fa;
  }
`,gs=yr.th`
  text-align: left;
  padding: 0.75rem;
`,bs=yr.td`
  padding: 0.75rem;
`,vs=yr.button`
  padding: 0.75rem 1.5rem;
  background: white;
  color: black;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: ${e=>e.primary?"#2980b9":"#dfe6e9"};
  }

  &:disabled {
    background: #bdc3c7;
    cursor: not-allowed;
  }
`;let ys="";const xs=e=>{ys=e};const ws=function(){const[e,t]=(0,r.useState)("list"),[n,o]=(0,r.useState)([]),[a,i]=(0,r.useState)(!0),[l,s]=(0,r.useState)("");(0,r.useEffect)(()=>{(async()=>{try{const[e]=await Promise.all([Ga.get("http://localhost:5000/api/volunteers")]);o(e.data),i(!1)}catch(e){console.error("Failed to load data:",e),i(!1)}})()},[]);const u=n.filter(e=>e.name.toLowerCase().includes(l.toLowerCase())||e.email.toLowerCase().includes(l.toLowerCase()));return a?(0,xr.jsx)("div",{children:"Loading dashboard data..."}):(0,xr.jsxs)(cs,{children:[(0,xr.jsxs)(ds,{children:[(0,xr.jsx)(fs,{active:"list"===e,onClick:()=>t("list"),children:"List"}),(0,xr.jsx)(fs,{active:"info"===e,onClick:()=>t("info"),children:"Info"})]}),"list"===e&&(0,xr.jsxs)("p",{children:[(0,xr.jsx)("input",{type:"text",placeholder:"Search by name",value:l,onChange:e=>s(e.target.value),style:{marginBottom:10,padding:8,width:"100%"}}),(0,xr.jsxs)(ps,{children:[(0,xr.jsx)(hs,{children:(0,xr.jsxs)(ms,{children:[(0,xr.jsx)(gs,{children:"Name"}),(0,xr.jsx)(gs,{children:"Class 1"}),(0,xr.jsx)(gs,{children:"Class 2"}),(0,xr.jsx)(gs,{children:"Class 3"})]})}),(0,xr.jsx)("tbody",{children:u.map(e=>(0,xr.jsxs)(ms,{children:[(0,xr.jsx)(bs,{children:(0,xr.jsx)(vs,{type:"button",onClick:()=>{xs(e),t("info")},children:e.name})}),(0,xr.jsx)(bs,{children:(0,xr.jsx)(vs,{type:"button",onClick:()=>{xs(e),t("info")},children:"class 1"})}),(0,xr.jsx)(bs,{children:(0,xr.jsx)(vs,{type:"button",onClick:()=>{xs(e),t("info")},children:"class 2"})}),(0,xr.jsx)(bs,{children:(0,xr.jsx)(vs,{type:"button",onClick:()=>{xs(e),t("info")},children:"class 3"})})]},e.id))})]})]}),"info"===e&&(0,xr.jsx)("p",{children:(0,xr.jsx)(us,{volunteer:ys})})]})};yr.div`
  background: #f8f9fa;
  border-radius: 6px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  border-left: 4px solid #3498db;
`,yr.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`,yr.h3`
  color: #2c3e50;
  margin: 0;
`,yr.button`
  background: #e74c3c;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.5rem 0.75rem;
  font-size: 0.875rem;
  cursor: pointer;

  &:hover {
    background: #c0392b;
  }

  &:disabled {
    background: #bdc3c7;
    cursor: not-allowed;
  }
`,yr.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`,yr.div`
  flex: 1;
`,yr.th`
  text-align: left;
  padding: 0.75rem;
`,yr.td`
  padding: 0.75rem;
`,yr.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #3498db;
    box-shadow: 0 0 0 2px rgba(52, 152, 219, 0.2);
  }
`,yr.textarea`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  min-height: 80px;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: #3498db;
    box-shadow: 0 0 0 2px rgba(52, 152, 219, 0.2);
  }
`,yr.div`
  margin-top: 1.5rem;
`,yr.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
  margin-top: 0.5rem;
`,yr.div`
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 1rem;
  background: ${e=>e.selected?"rgba(52, 152, 219, 0.1)":"white"};
  border-color: ${e=>e.selected?"#3498db":"#ddd"};
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    border-color: #3498db;
  }

  ${e=>e.disabled&&"\n    opacity: 0.6;\n    cursor: not-allowed;\n    background: #f1f2f6;\n  "}
`,yr.h4`
  margin: 0 0 0.5rem;
  color: #2c3e50;
`,yr.p`
  margin: 0;
  font-size: 0.875rem;
  color: #7f8c8d;
`,yr.div`
  font-size: 0.75rem;
  margin-top: 0.5rem;
  color: ${e=>e.available?"#27ae60":"#e74c3c"};
`,yr.div`
  font-size: 0.9rem;
  margin-top: 0.5rem;
  color: ${e=>e.complete?"#27ae60":e.tooMany?"#e74c3c":"#7f8c8d"};
`;yr.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`,yr.div`
  background: #f8f9fa;
  border-radius: 6px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  border-left: 4px solid #3498db;
`,yr.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`,yr.h3`
  color: #2c3e50;
  margin: 0;
`;const Ss=yr.table`
  width: 100%;
  border-collapse: collapse;
`,ks=yr.thead`
  background: #f1f2f6;
`,Es=yr.tr`
  border-bottom: 1px solid #ddd;

  &:hover {
    background: #f8f9fa;
  }
`,js=yr.th`
  text-align: left;
  padding: 0.75rem;
`,Cs=yr.td`
  padding: 0.75rem;
`,_s=(yr.button`
  background: #e74c3c;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.5rem 0.75rem;
  font-size: 0.875rem;
  cursor: pointer;

  &:hover {
    background: #c0392b;
  }

  &:disabled {
    background: #bdc3c7;
    cursor: not-allowed;
  }
`,yr.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`,yr.div`
  flex: 1;
`,yr.th`
  text-align: left;
  padding: 0.75rem;
`);yr.td`
  padding: 0.75rem;
`,yr.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #3498db;
    box-shadow: 0 0 0 2px rgba(52, 152, 219, 0.2);
  }
`,yr.textarea`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  min-height: 80px;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: #3498db;
    box-shadow: 0 0 0 2px rgba(52, 152, 219, 0.2);
  }
`,yr.div`
  margin-top: 1.5rem;
`,yr.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
  margin-top: 0.5rem;
`,yr.div`
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 1rem;
  background: ${e=>e.selected?"rgba(52, 152, 219, 0.1)":"white"};
  border-color: ${e=>e.selected?"#3498db":"#ddd"};
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    border-color: #3498db;
  }

  ${e=>e.disabled&&"\n    opacity: 0.6;\n    cursor: not-allowed;\n    background: #f1f2f6;\n  "}
`,yr.h4`
  margin: 0 0 0.5rem;
  color: #2c3e50;
`,yr.p`
  margin: 0;
  font-size: 0.875rem;
  color: #7f8c8d;
`,yr.div`
  font-size: 0.75rem;
  margin-top: 0.5rem;
  color: ${e=>e.available?"#27ae60":"#e74c3c"};
`,yr.div`
  font-size: 0.9rem;
  margin-top: 0.5rem;
  color: ${e=>e.complete?"#27ae60":e.tooMany?"#e74c3c":"#7f8c8d"};
`;const Rs=function(e){let{cls:t,sessionId:n}=e;const[o,a]=(0,r.useState)([]),[i,l]=(0,r.useState)(!0);return(0,r.useEffect)(()=>{(async()=>{try{const e=await Ga.get(`http://localhost:5000/api/session/${t.id}/${n}`);a(e.data),l(!1)}catch(e){console.error("Failed to load roster:",e),l(!1)}})()},[]),i?(0,xr.jsx)("div",{children:"Loading registrations..."}):0===o.students.length?(0,xr.jsxs)("p",{children:[(0,xr.jsxs)(_s,{children:[t.name," - Session ",n]}),(0,xr.jsx)("p",{children:"No registrations found."})]}):(0,xr.jsxs)("p",{children:[(0,xr.jsxs)(_s,{children:[t.name," - Session ",n]}),(0,xr.jsxs)(Ss,{children:[(0,xr.jsx)(ks,{children:(0,xr.jsxs)(Es,{children:[(0,xr.jsx)(js,{children:"Name"}),(0,xr.jsx)(js,{children:"Checked In"}),(0,xr.jsx)(js,{children:"Checked Out"})]})}),(0,xr.jsx)("tbody",{children:o.students.map(e=>(0,xr.jsx)(Es,{children:(0,xr.jsx)(Cs,{children:e.student_name})},e.student_id))})]})]})},Ps={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_BACKEND_URL:"http://localhost:5000/api"}.BACKEND_URL,Ts=yr.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`,Os=(yr.th`
  text-align: left;
  padding: 0.75rem;
`,yr.td`
  padding: 0.75rem;
`,yr.h1`
  color: #2c3e50;
  margin-bottom: 1.5rem;
`,yr.div`
  display: flex;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid #ddd;
`),Ns=yr.button`
  padding: 0.75rem 1.5rem;
  background: ${e=>e.active?"#3498db":"transparent"};
  color: ${e=>e.active?"white":"#34495e"};
  border: none;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background: ${e=>e.active?"#3498db":"#f1f2f6"};
  }
`,Ls=(yr.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
`,yr.div`
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 1rem;
  background: white;
`,yr.h3`
  color: #2c3e50;
  margin: 0 0 0.5rem;
`,yr.div`
  background: #ecf0f1;
  border-radius: 10px;
  height: 10px;
  overflow: hidden;
  margin: 0.5rem 0;
`,yr.div`
  height: 100%;
  background: ${e=>{const t=e.value/e.max*100;return t<60?"#2ecc71":t<80?"#f39c12":"#e74c3c"}};
  width: ${e=>e.value/e.max*100}%;
`,yr.table`
  width: 100%;
  border-collapse: collapse;
`,yr.table`
  width: 100%;
  border-collapse: collapse;
`,yr.table`
  width: 100%;
  border-collapse: collapse;
`),zs=yr.thead`
  background: #f1f2f6;
`,As=yr.tr`
  border-bottom: 1px solid #ddd;

  &:hover {
    background: #f8f9fa;
  }
`,Ds=yr.th`
  text-align: left;
  padding: 0.75rem;
`,Fs=yr.td`
  padding: 0.75rem;
`,Is=yr.button`
  padding: 0.75rem 1.5rem;
  background: white;
  color: black;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: ${e=>e.primary?"#2980b9":"#dfe6e9"};
  }

  &:disabled {
    background: #bdc3c7;
    cursor: not-allowed;
  }
`;let Us="";const $s=e=>{Us=e};const Ms=function(){const[e,t]=(0,r.useState)("list"),[n,o]=(0,r.useState)([]),[a,i]=(0,r.useState)([]),[l,s]=(0,r.useState)([]),[u,c]=(0,r.useState)(!0);return(0,r.useEffect)(()=>{(async()=>{try{const[e,t,n]=await Promise.all([Ga.get(`${Ps}/classes`),Ga.get(`${Ps}/registrations`),Ga.get(`${Ps}/students`)]);o(e.data),i(t.data),s(n.data),c(!1)}catch(e){console.error("Failed to load data:",e),c(!1)}})()},[]),u?(0,xr.jsx)("div",{children:"Loading dashboard data..."}):(0,xr.jsxs)(Ts,{children:[(0,xr.jsxs)(Os,{children:[(0,xr.jsx)(Ns,{active:"list"===e,onClick:()=>t("list"),children:"List"}),(0,xr.jsx)(Ns,{active:"info"===e,onClick:()=>t("info"),children:"Info"}),(0,xr.jsx)(Ns,{active:"session1"===e,onClick:()=>t("session1"),children:"Session 1"}),(0,xr.jsx)(Ns,{active:"session2"===e,onClick:()=>t("session2"),children:"Session 2"}),(0,xr.jsx)(Ns,{active:"session3"===e,onClick:()=>t("session3"),children:"Session 3"})]}),"list"===e&&(0,xr.jsxs)(Ls,{children:[(0,xr.jsx)(zs,{children:(0,xr.jsxs)(As,{children:[(0,xr.jsx)(Ds,{children:"Name"}),(0,xr.jsx)(Ds,{children:"Session 1"}),(0,xr.jsx)(Ds,{children:"Session 2"}),(0,xr.jsx)(Ds,{children:"Session 3"})]})}),(0,xr.jsx)("tbody",{children:n.map(e=>(0,xr.jsxs)(As,{children:[(0,xr.jsx)(Fs,{children:(0,xr.jsx)(Is,{type:"button",onClick:()=>{$s(e),t("info")},children:e.name})}),(0,xr.jsx)(Fs,{children:(0,xr.jsxs)(Is,{type:"button",onClick:()=>{$s(e),t("session1")},children:[e.enrolled_session1,"/",e.capacity]})}),(0,xr.jsx)(Fs,{children:(0,xr.jsxs)(Is,{type:"button",onClick:()=>{$s(e),t("session2")},children:[e.enrolled_session2,"/",e.capacity]})}),(0,xr.jsx)(Fs,{children:(0,xr.jsxs)(Is,{type:"button",onClick:()=>{$s(e),t("session3")},children:[e.enrolled_session3,"/",e.capacity]})})]},e.id))})]}),"info"===e&&(0,xr.jsxs)("p",{children:["process.env.BACKEND_URL",(0,xr.jsx)(Rs,{cls:Us,sessionId:"1"}),(0,xr.jsx)(Rs,{cls:Us,sessionId:"2"}),(0,xr.jsx)(Rs,{cls:Us,sessionId:"3"})]}),"session1"===e&&(0,xr.jsx)("p",{children:n.map(e=>(0,xr.jsx)(Rs,{cls:e,sessionId:"1"}))}),"session2"===e&&(0,xr.jsx)("p",{children:n.map(e=>(0,xr.jsx)(Rs,{cls:e,sessionId:"2"}))}),"session3"===e&&(0,xr.jsx)("p",{children:n.map(e=>(0,xr.jsx)(Rs,{cls:e,sessionId:"3"}))})]})},Bs="http://localhost:5000/api",Ws=yr.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`,Hs=yr.h1`
  color: #2c3e50;
  margin-bottom: 1.5rem;
`,Vs=yr.div`
  display: flex;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid #ddd;
`,Ks=yr.button`
  padding: 0.75rem 1.5rem;
  background: ${e=>e.active?"#3498db":"transparent"};
  color: ${e=>e.active?"white":"#34495e"};
  border: none;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background: ${e=>e.active?"#3498db":"#f1f2f6"};
  }
`;yr.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
`,yr.div`
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 1rem;
  background: white;
`,yr.h3`
  color: #2c3e50;
  margin: 0 0 0.5rem;
`,yr.div`
  background: #ecf0f1;
  border-radius: 10px;
  height: 10px;
  overflow: hidden;
  margin: 0.5rem 0;
`,yr.div`
  height: 100%;
  background: ${e=>{const t=e.value/e.max*100;return t<60?"#2ecc71":t<80?"#f39c12":"#e74c3c"}};
  width: ${e=>e.value/e.max*100}%;
`,yr.table`
  width: 100%;
  border-collapse: collapse;
`,yr.table`
  width: 100%;
  border-collapse: collapse;
`,yr.thead`
  background: #f1f2f6;
`,yr.tr`
  border-bottom: 1px solid #ddd;

  &:hover {
    background: #f8f9fa;
  }
`,yr.th`
  text-align: left;
  padding: 0.75rem;
`,yr.td`
  padding: 0.75rem;
`;const qs=function(){const[e,t]=(0,r.useState)("stats"),[n,o]=(0,r.useState)([]),[a,i]=(0,r.useState)([]),[l,s]=(0,r.useState)([]),[u,c]=(0,r.useState)(!0);return(0,r.useEffect)(()=>{(async()=>{try{const[e,t,n]=await Promise.all([Ga.get(`${Bs}/classes`),Ga.get(`${Bs}/registrations`),Ga.get(`${Bs}/students`)]);o(e.data),i(t.data),s(n.data),c(!1)}catch(e){console.error("Failed to load data:",e),c(!1)}})()},[]),u?(0,xr.jsx)("div",{children:"Loading dashboard data..."}):(0,xr.jsxs)(Ws,{children:[(0,xr.jsx)(Hs,{children:"Admin Dashboard"}),(0,xr.jsxs)(Vs,{children:[(0,xr.jsx)(Ks,{active:"classes"===e,onClick:()=>t("classes"),children:"Classes"}),(0,xr.jsx)(Ks,{active:"students"===e,onClick:()=>t("students"),children:"Students"}),(0,xr.jsx)(Ks,{active:"volunteers"===e,onClick:()=>t("volunteers"),children:"Volunteers"}),(0,xr.jsx)(Ks,{active:"repoerts"===e,onClick:()=>t("reports"),children:"Reports"})]}),"classes"===e&&(0,xr.jsx)("p",{children:(0,xr.jsx)(Ms,{})}),"volunteers"===e&&(0,xr.jsx)("p",{children:(0,xr.jsx)(ws,{})}),"students"===e&&(0,xr.jsx)("p",{children:(0,xr.jsx)(Tl,{})}),"reports"===e&&(0,xr.jsx)("p",{children:(0,xr.jsx)(ts,{})})]})},Qs="http://localhost:5000/api",Xs=yr.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`,Gs=yr.h1`
  color: #2c3e50;
  margin-bottom: 1.5rem;
  text-align: center;
`,Ys=yr.div`
  margin-bottom: 2rem;
`,Js=yr.h2`
  color: #34495e;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #ecf0f1;
`,Zs=yr.div`
  margin-bottom: 1rem;
`,eu=yr.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
`,tu=yr.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #3498db;
    box-shadow: 0 0 0 2px rgba(52, 152, 219, 0.2);
  }
`,nu=(yr.div`
  margin-top: 1rem;
`,yr.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`,yr.button`
  padding: 0.75rem 1.5rem;
  background: ${e=>e.primary?"#3498db":"#ecf0f1"};
  color: ${e=>e.primary?"white":"#34495e"};
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: ${e=>e.primary?"#2980b9":"#dfe6e9"};
  }

  &:disabled {
    background: #bdc3c7;
    cursor: not-allowed;
  }
`),ru=yr(nu)`
  background: #27ae60;

  &:hover {
    background: #2ecc71;
  }

  &:disabled {
    background: #bdc3c7;
  }
`,ou=yr.div`
  color: #e74c3c;
  padding: 0.75rem;
  background: #fadbd8;
  border-radius: 4px;
  margin-bottom: 1rem;
`;const au=function(){const[e,t]=(0,r.useState)([]),[n,o]=(0,r.useState)(!0),[a,i]=(0,r.useState)(null),[l,s]=(0,r.useState)(""),u=te(),[c,d]=(0,r.useState)({name:"",password:"",email:"",phone:"",shirt:""});(0,r.useEffect)(()=>{(async()=>{try{const e=await Ga.get(`${Qs}/classes`);t(e.data),o(!1)}catch(e){i("Failed to load available classes. Please try again later."),o(!1)}})()},[]);const f=e=>{const{name:t,value:n}=e.target;d(e=>({...e,[t]:n}))};return n?(0,xr.jsx)("div",{children:"Loading volunteer information..."}):(0,xr.jsxs)(Xs,{children:[(0,xr.jsx)(Gs,{children:"STEM 2026 Volunteer Registration"}),a&&(0,xr.jsx)(ou,{children:a}),(0,xr.jsxs)("form",{onSubmit:async e=>{e.preventDefault();try{i(null);const e=await Ga.post(`${Qs}/volunteer`,{volunteerInfo:c});e.data.success&&u(`/volunteer_success/${e.data.registrationId}`)}catch(r){var t,n;i((null===(t=r.response)||void 0===t||null===(n=t.data)||void 0===n?void 0:n.message)||"Registration failed. Please try again.")}},children:[(0,xr.jsxs)(Ys,{children:[(0,xr.jsx)(Js,{children:"Volunteer Information"}),(0,xr.jsxs)(Zs,{children:[(0,xr.jsx)(eu,{htmlFor:"volunteerName",children:"Full Name"}),(0,xr.jsx)(tu,{id:"volunteerName",name:"name",value:c.name,onChange:f,required:!0})]}),(0,xr.jsxs)(Zs,{children:[(0,xr.jsx)(eu,{htmlFor:"volunteerEmail",children:"Email"}),(0,xr.jsx)(tu,{id:"volunteerEmail",name:"email",type:"email",value:c.email,onChange:f,required:!0})]}),(0,xr.jsxs)(Zs,{children:[(0,xr.jsx)(eu,{htmlFor:"password",children:"Password"}),(0,xr.jsx)(tu,{id:"password",name:"password",value:c.password,onChange:f,required:!0})]}),(0,xr.jsxs)(Zs,{children:[(0,xr.jsx)(eu,{htmlFor:"volunteerPhone",children:"Phone Number"}),(0,xr.jsx)(tu,{id:"volunteerPhone",name:"phone",type:"tel",value:c.phone,onChange:f,required:!0})]})]}),(0,xr.jsxs)(Zs,{children:[(0,xr.jsx)(eu,{htmlFor:"volunteerShirt",children:"Shirt Size"}),(0,xr.jsxs)("select",{name:"shirt",value:c.shirt,onChange:f,children:[(0,xr.jsx)("option",{value:"",children:"-- Choose a shirt size --"}),["XS","S","M","L","XL","XXL","XXXL"].map((e,t)=>(0,xr.jsx)("option",{value:e,children:e},t))]})]}),(0,xr.jsx)(ru,{type:"submit",disabled:!(c.name&&c.email&&c.phone&&c.password&&c.shirt),primary:!0,children:"Complete Registration"})]})]})},iu=yr.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`,lu=yr.main`
  flex: 1;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  width: 100%;
`;const su=function(){return(0,xr.jsx)(je,{children:(0,xr.jsxs)(iu,{children:[(0,xr.jsx)(Cr,{}),(0,xr.jsx)(lu,{children:(0,xr.jsxs)(ye,{children:[(0,xr.jsx)(be,{path:"/",element:(0,xr.jsx)(Pi,{})}),(0,xr.jsx)(be,{path:"/success/:id",element:(0,xr.jsx)(Bi,{})}),(0,xr.jsx)(be,{path:"/volunteer_success/:id",element:(0,xr.jsx)(Yi,{})}),(0,xr.jsx)(be,{path:"/admin",element:(0,xr.jsx)(qs,{})}),(0,xr.jsx)(be,{path:"/registrations",element:(0,xr.jsx)(ul,{})}),(0,xr.jsx)(be,{path:"/volunteer_registration",element:(0,xr.jsx)(au,{})}),(0,xr.jsx)(be,{path:"/login",element:(0,xr.jsx)(Ya,{})})]})}),(0,xr.jsx)(Pr,{})]})})};a.createRoot(document.getElementById("root")).render((0,xr.jsx)(r.StrictMode,{children:(0,xr.jsx)(su,{})}))})()})();
//# sourceMappingURL=main.b1cdb184.js.map