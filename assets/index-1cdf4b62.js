function J_(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const l=Object.getOwnPropertyDescriptor(r,i);l&&Object.defineProperty(e,i,l.get?l:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const o of l.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerpolicy&&(l.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?l.credentials="include":i.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(i){if(i.ep)return;i.ep=!0;const l=n(i);fetch(i.href,l)}})();function Ld(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ki={},em={get exports(){return ki},set exports(e){ki=e}},so={},Q={},tm={get exports(){return Q},set exports(e){Q=e}},pe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vi=Symbol.for("react.element"),nm=Symbol.for("react.portal"),rm=Symbol.for("react.fragment"),im=Symbol.for("react.strict_mode"),lm=Symbol.for("react.profiler"),om=Symbol.for("react.provider"),um=Symbol.for("react.context"),am=Symbol.for("react.forward_ref"),sm=Symbol.for("react.suspense"),cm=Symbol.for("react.memo"),fm=Symbol.for("react.lazy"),Ys=Symbol.iterator;function dm(e){return e===null||typeof e!="object"?null:(e=Ys&&e[Ys]||e["@@iterator"],typeof e=="function"?e:null)}var kd={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},wd=Object.assign,Sd={};function $r(e,t,n){this.props=e,this.context=t,this.refs=Sd,this.updater=n||kd}$r.prototype.isReactComponent={};$r.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};$r.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ad(){}Ad.prototype=$r.prototype;function Ua(e,t,n){this.props=e,this.context=t,this.refs=Sd,this.updater=n||kd}var ja=Ua.prototype=new Ad;ja.constructor=Ua;wd(ja,$r.prototype);ja.isPureReactComponent=!0;var qs=Array.isArray,Cd=Object.prototype.hasOwnProperty,Wa={current:null},Id={key:!0,ref:!0,__self:!0,__source:!0};function Rd(e,t,n){var r,i={},l=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(l=""+t.key),t)Cd.call(t,r)&&!Id.hasOwnProperty(r)&&(i[r]=t[r]);var u=arguments.length-2;if(u===1)i.children=n;else if(1<u){for(var a=Array(u),s=0;s<u;s++)a[s]=arguments[s+2];i.children=a}if(e&&e.defaultProps)for(r in u=e.defaultProps,u)i[r]===void 0&&(i[r]=u[r]);return{$$typeof:Vi,type:e,key:l,ref:o,props:i,_owner:Wa.current}}function hm(e,t){return{$$typeof:Vi,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function $a(e){return typeof e=="object"&&e!==null&&e.$$typeof===Vi}function pm(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Zs=/\/+/g;function Vo(e,t){return typeof e=="object"&&e!==null&&e.key!=null?pm(""+e.key):t.toString(36)}function vl(e,t,n,r,i){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(l){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Vi:case nm:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+Vo(o,0):r,qs(i)?(n="",e!=null&&(n=e.replace(Zs,"$&/")+"/"),vl(i,t,n,"",function(s){return s})):i!=null&&($a(i)&&(i=hm(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Zs,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",qs(e))for(var u=0;u<e.length;u++){l=e[u];var a=r+Vo(l,u);o+=vl(l,t,n,a,i)}else if(a=dm(e),typeof a=="function")for(e=a.call(e),u=0;!(l=e.next()).done;)l=l.value,a=r+Vo(l,u++),o+=vl(l,t,n,a,i);else if(l==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function el(e,t,n){if(e==null)return e;var r=[],i=0;return vl(e,r,"","",function(l){return t.call(n,l,i++)}),r}function _m(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ht={current:null},El={transition:null},mm={ReactCurrentDispatcher:ht,ReactCurrentBatchConfig:El,ReactCurrentOwner:Wa};pe.Children={map:el,forEach:function(e,t,n){el(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return el(e,function(){t++}),t},toArray:function(e){return el(e,function(t){return t})||[]},only:function(e){if(!$a(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};pe.Component=$r;pe.Fragment=rm;pe.Profiler=lm;pe.PureComponent=Ua;pe.StrictMode=im;pe.Suspense=sm;pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=mm;pe.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=wd({},e.props),i=e.key,l=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(l=t.ref,o=Wa.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(a in t)Cd.call(t,a)&&!Id.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&u!==void 0?u[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){u=Array(a);for(var s=0;s<a;s++)u[s]=arguments[s+2];r.children=u}return{$$typeof:Vi,type:e.type,key:i,ref:l,props:r,_owner:o}};pe.createContext=function(e){return e={$$typeof:um,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:om,_context:e},e.Consumer=e};pe.createElement=Rd;pe.createFactory=function(e){var t=Rd.bind(null,e);return t.type=e,t};pe.createRef=function(){return{current:null}};pe.forwardRef=function(e){return{$$typeof:am,render:e}};pe.isValidElement=$a;pe.lazy=function(e){return{$$typeof:fm,_payload:{_status:-1,_result:e},_init:_m}};pe.memo=function(e,t){return{$$typeof:cm,type:e,compare:t===void 0?null:t}};pe.startTransition=function(e){var t=El.transition;El.transition={};try{e()}finally{El.transition=t}};pe.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};pe.useCallback=function(e,t){return ht.current.useCallback(e,t)};pe.useContext=function(e){return ht.current.useContext(e)};pe.useDebugValue=function(){};pe.useDeferredValue=function(e){return ht.current.useDeferredValue(e)};pe.useEffect=function(e,t){return ht.current.useEffect(e,t)};pe.useId=function(){return ht.current.useId()};pe.useImperativeHandle=function(e,t,n){return ht.current.useImperativeHandle(e,t,n)};pe.useInsertionEffect=function(e,t){return ht.current.useInsertionEffect(e,t)};pe.useLayoutEffect=function(e,t){return ht.current.useLayoutEffect(e,t)};pe.useMemo=function(e,t){return ht.current.useMemo(e,t)};pe.useReducer=function(e,t,n){return ht.current.useReducer(e,t,n)};pe.useRef=function(e){return ht.current.useRef(e)};pe.useState=function(e){return ht.current.useState(e)};pe.useSyncExternalStore=function(e,t,n){return ht.current.useSyncExternalStore(e,t,n)};pe.useTransition=function(){return ht.current.useTransition()};pe.version="18.2.0";(function(e){e.exports=pe})(tm);const Cn=Ld(Q),Ou=J_({__proto__:null,default:Cn},[Q]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gm=Q,ym=Symbol.for("react.element"),vm=Symbol.for("react.fragment"),Em=Object.prototype.hasOwnProperty,Tm=gm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,xm={key:!0,ref:!0,__self:!0,__source:!0};function Pd(e,t,n){var r,i={},l=null,o=null;n!==void 0&&(l=""+n),t.key!==void 0&&(l=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)Em.call(t,r)&&!xm.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:ym,type:e,key:l,ref:o,props:i,_owner:Tm.current}}so.Fragment=vm;so.jsx=Pd;so.jsxs=Pd;(function(e){e.exports=so})(em);const Lm=ki.Fragment,le=ki.jsx,In=ki.jsxs;var Mu={},Fu={},km={get exports(){return Fu},set exports(e){Fu=e}},At={},zu={},wm={get exports(){return zu},set exports(e){zu=e}},Nd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(z,q){var J=z.length;z.push(q);e:for(;0<J;){var v=J-1>>>1,T=z[v];if(0<i(T,q))z[v]=q,z[J]=T,J=v;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var q=z[0],J=z.pop();if(J!==q){z[0]=J;e:for(var v=0,T=z.length,A=T>>>1;v<A;){var I=2*(v+1)-1,E=z[I],w=I+1,C=z[w];if(0>i(E,J))w<T&&0>i(C,E)?(z[v]=C,z[w]=J,v=w):(z[v]=E,z[I]=J,v=I);else if(w<T&&0>i(C,J))z[v]=C,z[w]=J,v=w;else break e}}return q}function i(z,q){var J=z.sortIndex-q.sortIndex;return J!==0?J:z.id-q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var o=Date,u=o.now();e.unstable_now=function(){return o.now()-u}}var a=[],s=[],c=1,d=null,f=3,h=!1,p=!1,m=!1,L=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(z){for(var q=n(s);q!==null;){if(q.callback===null)r(s);else if(q.startTime<=z)r(s),q.sortIndex=q.expirationTime,t(a,q);else break;q=n(s)}}function k(z){if(m=!1,y(z),!p)if(n(a)!==null)p=!0,R(P);else{var q=n(s);q!==null&&De(k,q.startTime-z)}}function P(z,q){p=!1,m&&(m=!1,_(H),H=-1),h=!0;var J=f;try{for(y(q),d=n(a);d!==null&&(!(d.expirationTime>q)||z&&!V());){var v=d.callback;if(typeof v=="function"){d.callback=null,f=d.priorityLevel;var T=v(d.expirationTime<=q);q=e.unstable_now(),typeof T=="function"?d.callback=T:d===n(a)&&r(a),y(q)}else r(a);d=n(a)}if(d!==null)var A=!0;else{var I=n(s);I!==null&&De(k,I.startTime-q),A=!1}return A}finally{d=null,f=J,h=!1}}var x=!1,N=null,H=-1,X=5,Y=-1;function V(){return!(e.unstable_now()-Y<X)}function ee(){if(N!==null){var z=e.unstable_now();Y=z;var q=!0;try{q=N(!0,z)}finally{q?re():(x=!1,N=null)}}else x=!1}var re;if(typeof g=="function")re=function(){g(ee)};else if(typeof MessageChannel<"u"){var ue=new MessageChannel,Ce=ue.port2;ue.port1.onmessage=ee,re=function(){Ce.postMessage(null)}}else re=function(){L(ee,0)};function R(z){N=z,x||(x=!0,re())}function De(z,q){H=L(function(){z(e.unstable_now())},q)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(z){z.callback=null},e.unstable_continueExecution=function(){p||h||(p=!0,R(P))},e.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):X=0<z?Math.floor(1e3/z):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(z){switch(f){case 1:case 2:case 3:var q=3;break;default:q=f}var J=f;f=q;try{return z()}finally{f=J}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(z,q){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var J=f;f=z;try{return q()}finally{f=J}},e.unstable_scheduleCallback=function(z,q,J){var v=e.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?v+J:v):J=v,z){case 1:var T=-1;break;case 2:T=250;break;case 5:T=1073741823;break;case 4:T=1e4;break;default:T=5e3}return T=J+T,z={id:c++,callback:q,priorityLevel:z,startTime:J,expirationTime:T,sortIndex:-1},J>v?(z.sortIndex=J,t(s,z),n(a)===null&&z===n(s)&&(m?(_(H),H=-1):m=!0,De(k,J-v))):(z.sortIndex=T,t(a,z),p||h||(p=!0,R(P))),z},e.unstable_shouldYield=V,e.unstable_wrapCallback=function(z){var q=f;return function(){var J=f;f=q;try{return z.apply(this,arguments)}finally{f=J}}}})(Nd);(function(e){e.exports=Nd})(wm);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dd=Q,St=zu;function U(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Od=new Set,wi={};function cr(e,t){zr(e,t),zr(e+"Capture",t)}function zr(e,t){for(wi[e]=t,e=0;e<t.length;e++)Od.add(t[e])}var pn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),bu=Object.prototype.hasOwnProperty,Sm=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Js={},ec={};function Am(e){return bu.call(ec,e)?!0:bu.call(Js,e)?!1:Sm.test(e)?ec[e]=!0:(Js[e]=!0,!1)}function Cm(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Im(e,t,n,r){if(t===null||typeof t>"u"||Cm(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function pt(e,t,n,r,i,l,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=o}var nt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){nt[e]=new pt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];nt[t]=new pt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){nt[e]=new pt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){nt[e]=new pt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){nt[e]=new pt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){nt[e]=new pt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){nt[e]=new pt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){nt[e]=new pt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){nt[e]=new pt(e,5,!1,e.toLowerCase(),null,!1,!1)});var Va=/[\-:]([a-z])/g;function Ga(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Va,Ga);nt[t]=new pt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Va,Ga);nt[t]=new pt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Va,Ga);nt[t]=new pt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){nt[e]=new pt(e,1,!1,e.toLowerCase(),null,!1,!1)});nt.xlinkHref=new pt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){nt[e]=new pt(e,1,!1,e.toLowerCase(),null,!0,!0)});function Qa(e,t,n,r){var i=nt.hasOwnProperty(t)?nt[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Im(t,n,i,r)&&(n=null),r||i===null?Am(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var yn=Dd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,tl=Symbol.for("react.element"),_r=Symbol.for("react.portal"),mr=Symbol.for("react.fragment"),Ka=Symbol.for("react.strict_mode"),Hu=Symbol.for("react.profiler"),Md=Symbol.for("react.provider"),Fd=Symbol.for("react.context"),Xa=Symbol.for("react.forward_ref"),Bu=Symbol.for("react.suspense"),Uu=Symbol.for("react.suspense_list"),Ya=Symbol.for("react.memo"),xn=Symbol.for("react.lazy"),zd=Symbol.for("react.offscreen"),tc=Symbol.iterator;function Yr(e){return e===null||typeof e!="object"?null:(e=tc&&e[tc]||e["@@iterator"],typeof e=="function"?e:null)}var be=Object.assign,Go;function ui(e){if(Go===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Go=t&&t[1]||""}return`
`+Go+e}var Qo=!1;function Ko(e,t){if(!e||Qo)return"";Qo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(s){var r=s}Reflect.construct(e,[],t)}else{try{t.call()}catch(s){r=s}e.call(t.prototype)}else{try{throw Error()}catch(s){r=s}e()}}catch(s){if(s&&r&&typeof s.stack=="string"){for(var i=s.stack.split(`
`),l=r.stack.split(`
`),o=i.length-1,u=l.length-1;1<=o&&0<=u&&i[o]!==l[u];)u--;for(;1<=o&&0<=u;o--,u--)if(i[o]!==l[u]){if(o!==1||u!==1)do if(o--,u--,0>u||i[o]!==l[u]){var a=`
`+i[o].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=o&&0<=u);break}}}finally{Qo=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?ui(e):""}function Rm(e){switch(e.tag){case 5:return ui(e.type);case 16:return ui("Lazy");case 13:return ui("Suspense");case 19:return ui("SuspenseList");case 0:case 2:case 15:return e=Ko(e.type,!1),e;case 11:return e=Ko(e.type.render,!1),e;case 1:return e=Ko(e.type,!0),e;default:return""}}function ju(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case mr:return"Fragment";case _r:return"Portal";case Hu:return"Profiler";case Ka:return"StrictMode";case Bu:return"Suspense";case Uu:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Fd:return(e.displayName||"Context")+".Consumer";case Md:return(e._context.displayName||"Context")+".Provider";case Xa:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ya:return t=e.displayName||null,t!==null?t:ju(e.type)||"Memo";case xn:t=e._payload,e=e._init;try{return ju(e(t))}catch{}}return null}function Pm(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ju(t);case 8:return t===Ka?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function bn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function bd(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Nm(e){var t=bd(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,l.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function nl(e){e._valueTracker||(e._valueTracker=Nm(e))}function Hd(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=bd(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Ol(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Wu(e,t){var n=t.checked;return be({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function nc(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=bn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Bd(e,t){t=t.checked,t!=null&&Qa(e,"checked",t,!1)}function $u(e,t){Bd(e,t);var n=bn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Vu(e,t.type,n):t.hasOwnProperty("defaultValue")&&Vu(e,t.type,bn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function rc(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Vu(e,t,n){(t!=="number"||Ol(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ai=Array.isArray;function Cr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+bn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Gu(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(U(91));return be({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ic(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(U(92));if(ai(n)){if(1<n.length)throw Error(U(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:bn(n)}}function Ud(e,t){var n=bn(t.value),r=bn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function lc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function jd(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Qu(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?jd(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var rl,Wd=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(rl=rl||document.createElement("div"),rl.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=rl.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Si(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var di={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Dm=["Webkit","ms","Moz","O"];Object.keys(di).forEach(function(e){Dm.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),di[t]=di[e]})});function $d(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||di.hasOwnProperty(e)&&di[e]?(""+t).trim():t+"px"}function Vd(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=$d(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Om=be({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ku(e,t){if(t){if(Om[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(U(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(U(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(U(61))}if(t.style!=null&&typeof t.style!="object")throw Error(U(62))}}function Xu(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Yu=null;function qa(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var qu=null,Ir=null,Rr=null;function oc(e){if(e=Ki(e)){if(typeof qu!="function")throw Error(U(280));var t=e.stateNode;t&&(t=_o(t),qu(e.stateNode,e.type,t))}}function Gd(e){Ir?Rr?Rr.push(e):Rr=[e]:Ir=e}function Qd(){if(Ir){var e=Ir,t=Rr;if(Rr=Ir=null,oc(e),t)for(e=0;e<t.length;e++)oc(t[e])}}function Kd(e,t){return e(t)}function Xd(){}var Xo=!1;function Yd(e,t,n){if(Xo)return e(t,n);Xo=!0;try{return Kd(e,t,n)}finally{Xo=!1,(Ir!==null||Rr!==null)&&(Xd(),Qd())}}function Ai(e,t){var n=e.stateNode;if(n===null)return null;var r=_o(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(U(231,t,typeof n));return n}var Zu=!1;if(pn)try{var qr={};Object.defineProperty(qr,"passive",{get:function(){Zu=!0}}),window.addEventListener("test",qr,qr),window.removeEventListener("test",qr,qr)}catch{Zu=!1}function Mm(e,t,n,r,i,l,o,u,a){var s=Array.prototype.slice.call(arguments,3);try{t.apply(n,s)}catch(c){this.onError(c)}}var hi=!1,Ml=null,Fl=!1,Ju=null,Fm={onError:function(e){hi=!0,Ml=e}};function zm(e,t,n,r,i,l,o,u,a){hi=!1,Ml=null,Mm.apply(Fm,arguments)}function bm(e,t,n,r,i,l,o,u,a){if(zm.apply(this,arguments),hi){if(hi){var s=Ml;hi=!1,Ml=null}else throw Error(U(198));Fl||(Fl=!0,Ju=s)}}function fr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function qd(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function uc(e){if(fr(e)!==e)throw Error(U(188))}function Hm(e){var t=e.alternate;if(!t){if(t=fr(e),t===null)throw Error(U(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var l=i.alternate;if(l===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===l.child){for(l=i.child;l;){if(l===n)return uc(i),e;if(l===r)return uc(i),t;l=l.sibling}throw Error(U(188))}if(n.return!==r.return)n=i,r=l;else{for(var o=!1,u=i.child;u;){if(u===n){o=!0,n=i,r=l;break}if(u===r){o=!0,r=i,n=l;break}u=u.sibling}if(!o){for(u=l.child;u;){if(u===n){o=!0,n=l,r=i;break}if(u===r){o=!0,r=l,n=i;break}u=u.sibling}if(!o)throw Error(U(189))}}if(n.alternate!==r)throw Error(U(190))}if(n.tag!==3)throw Error(U(188));return n.stateNode.current===n?e:t}function Zd(e){return e=Hm(e),e!==null?Jd(e):null}function Jd(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Jd(e);if(t!==null)return t;e=e.sibling}return null}var eh=St.unstable_scheduleCallback,ac=St.unstable_cancelCallback,Bm=St.unstable_shouldYield,Um=St.unstable_requestPaint,Ue=St.unstable_now,jm=St.unstable_getCurrentPriorityLevel,Za=St.unstable_ImmediatePriority,th=St.unstable_UserBlockingPriority,zl=St.unstable_NormalPriority,Wm=St.unstable_LowPriority,nh=St.unstable_IdlePriority,co=null,tn=null;function $m(e){if(tn&&typeof tn.onCommitFiberRoot=="function")try{tn.onCommitFiberRoot(co,e,void 0,(e.current.flags&128)===128)}catch{}}var Vt=Math.clz32?Math.clz32:Qm,Vm=Math.log,Gm=Math.LN2;function Qm(e){return e>>>=0,e===0?32:31-(Vm(e)/Gm|0)|0}var il=64,ll=4194304;function si(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function bl(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,l=e.pingedLanes,o=n&268435455;if(o!==0){var u=o&~i;u!==0?r=si(u):(l&=o,l!==0&&(r=si(l)))}else o=n&~i,o!==0?r=si(o):l!==0&&(r=si(l));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,l=t&-t,i>=l||i===16&&(l&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Vt(t),i=1<<n,r|=e[n],t&=~i;return r}function Km(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Xm(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,l=e.pendingLanes;0<l;){var o=31-Vt(l),u=1<<o,a=i[o];a===-1?(!(u&n)||u&r)&&(i[o]=Km(u,t)):a<=t&&(e.expiredLanes|=u),l&=~u}}function ea(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function rh(){var e=il;return il<<=1,!(il&4194240)&&(il=64),e}function Yo(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Gi(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Vt(t),e[t]=n}function Ym(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Vt(n),l=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~l}}function Ja(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Vt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var ke=0;function ih(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var lh,es,oh,uh,ah,ta=!1,ol=[],Rn=null,Pn=null,Nn=null,Ci=new Map,Ii=new Map,kn=[],qm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function sc(e,t){switch(e){case"focusin":case"focusout":Rn=null;break;case"dragenter":case"dragleave":Pn=null;break;case"mouseover":case"mouseout":Nn=null;break;case"pointerover":case"pointerout":Ci.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ii.delete(t.pointerId)}}function Zr(e,t,n,r,i,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[i]},t!==null&&(t=Ki(t),t!==null&&es(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Zm(e,t,n,r,i){switch(t){case"focusin":return Rn=Zr(Rn,e,t,n,r,i),!0;case"dragenter":return Pn=Zr(Pn,e,t,n,r,i),!0;case"mouseover":return Nn=Zr(Nn,e,t,n,r,i),!0;case"pointerover":var l=i.pointerId;return Ci.set(l,Zr(Ci.get(l)||null,e,t,n,r,i)),!0;case"gotpointercapture":return l=i.pointerId,Ii.set(l,Zr(Ii.get(l)||null,e,t,n,r,i)),!0}return!1}function sh(e){var t=Jn(e.target);if(t!==null){var n=fr(t);if(n!==null){if(t=n.tag,t===13){if(t=qd(n),t!==null){e.blockedOn=t,ah(e.priority,function(){oh(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Tl(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=na(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Yu=r,n.target.dispatchEvent(r),Yu=null}else return t=Ki(n),t!==null&&es(t),e.blockedOn=n,!1;t.shift()}return!0}function cc(e,t,n){Tl(e)&&n.delete(t)}function Jm(){ta=!1,Rn!==null&&Tl(Rn)&&(Rn=null),Pn!==null&&Tl(Pn)&&(Pn=null),Nn!==null&&Tl(Nn)&&(Nn=null),Ci.forEach(cc),Ii.forEach(cc)}function Jr(e,t){e.blockedOn===t&&(e.blockedOn=null,ta||(ta=!0,St.unstable_scheduleCallback(St.unstable_NormalPriority,Jm)))}function Ri(e){function t(i){return Jr(i,e)}if(0<ol.length){Jr(ol[0],e);for(var n=1;n<ol.length;n++){var r=ol[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Rn!==null&&Jr(Rn,e),Pn!==null&&Jr(Pn,e),Nn!==null&&Jr(Nn,e),Ci.forEach(t),Ii.forEach(t),n=0;n<kn.length;n++)r=kn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<kn.length&&(n=kn[0],n.blockedOn===null);)sh(n),n.blockedOn===null&&kn.shift()}var Pr=yn.ReactCurrentBatchConfig,Hl=!0;function eg(e,t,n,r){var i=ke,l=Pr.transition;Pr.transition=null;try{ke=1,ts(e,t,n,r)}finally{ke=i,Pr.transition=l}}function tg(e,t,n,r){var i=ke,l=Pr.transition;Pr.transition=null;try{ke=4,ts(e,t,n,r)}finally{ke=i,Pr.transition=l}}function ts(e,t,n,r){if(Hl){var i=na(e,t,n,r);if(i===null)ou(e,t,r,Bl,n),sc(e,r);else if(Zm(i,e,t,n,r))r.stopPropagation();else if(sc(e,r),t&4&&-1<qm.indexOf(e)){for(;i!==null;){var l=Ki(i);if(l!==null&&lh(l),l=na(e,t,n,r),l===null&&ou(e,t,r,Bl,n),l===i)break;i=l}i!==null&&r.stopPropagation()}else ou(e,t,r,null,n)}}var Bl=null;function na(e,t,n,r){if(Bl=null,e=qa(r),e=Jn(e),e!==null)if(t=fr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=qd(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Bl=e,null}function ch(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(jm()){case Za:return 1;case th:return 4;case zl:case Wm:return 16;case nh:return 536870912;default:return 16}default:return 16}}var Sn=null,ns=null,xl=null;function fh(){if(xl)return xl;var e,t=ns,n=t.length,r,i="value"in Sn?Sn.value:Sn.textContent,l=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[l-r];r++);return xl=i.slice(e,1<r?1-r:void 0)}function Ll(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ul(){return!0}function fc(){return!1}function Ct(e){function t(n,r,i,l,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=l,this.target=o,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(n=e[u],this[u]=n?n(l):l[u]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?ul:fc,this.isPropagationStopped=fc,this}return be(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ul)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ul)},persist:function(){},isPersistent:ul}),t}var Vr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},rs=Ct(Vr),Qi=be({},Vr,{view:0,detail:0}),ng=Ct(Qi),qo,Zo,ei,fo=be({},Qi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:is,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ei&&(ei&&e.type==="mousemove"?(qo=e.screenX-ei.screenX,Zo=e.screenY-ei.screenY):Zo=qo=0,ei=e),qo)},movementY:function(e){return"movementY"in e?e.movementY:Zo}}),dc=Ct(fo),rg=be({},fo,{dataTransfer:0}),ig=Ct(rg),lg=be({},Qi,{relatedTarget:0}),Jo=Ct(lg),og=be({},Vr,{animationName:0,elapsedTime:0,pseudoElement:0}),ug=Ct(og),ag=be({},Vr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),sg=Ct(ag),cg=be({},Vr,{data:0}),hc=Ct(cg),fg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},dg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},hg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function pg(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=hg[e])?!!t[e]:!1}function is(){return pg}var _g=be({},Qi,{key:function(e){if(e.key){var t=fg[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ll(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?dg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:is,charCode:function(e){return e.type==="keypress"?Ll(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ll(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),mg=Ct(_g),gg=be({},fo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),pc=Ct(gg),yg=be({},Qi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:is}),vg=Ct(yg),Eg=be({},Vr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Tg=Ct(Eg),xg=be({},fo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Lg=Ct(xg),kg=[9,13,27,32],ls=pn&&"CompositionEvent"in window,pi=null;pn&&"documentMode"in document&&(pi=document.documentMode);var wg=pn&&"TextEvent"in window&&!pi,dh=pn&&(!ls||pi&&8<pi&&11>=pi),_c=String.fromCharCode(32),mc=!1;function hh(e,t){switch(e){case"keyup":return kg.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ph(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var gr=!1;function Sg(e,t){switch(e){case"compositionend":return ph(t);case"keypress":return t.which!==32?null:(mc=!0,_c);case"textInput":return e=t.data,e===_c&&mc?null:e;default:return null}}function Ag(e,t){if(gr)return e==="compositionend"||!ls&&hh(e,t)?(e=fh(),xl=ns=Sn=null,gr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return dh&&t.locale!=="ko"?null:t.data;default:return null}}var Cg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function gc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Cg[e.type]:t==="textarea"}function _h(e,t,n,r){Gd(r),t=Ul(t,"onChange"),0<t.length&&(n=new rs("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var _i=null,Pi=null;function Ig(e){Sh(e,0)}function ho(e){var t=Er(e);if(Hd(t))return e}function Rg(e,t){if(e==="change")return t}var mh=!1;if(pn){var eu;if(pn){var tu="oninput"in document;if(!tu){var yc=document.createElement("div");yc.setAttribute("oninput","return;"),tu=typeof yc.oninput=="function"}eu=tu}else eu=!1;mh=eu&&(!document.documentMode||9<document.documentMode)}function vc(){_i&&(_i.detachEvent("onpropertychange",gh),Pi=_i=null)}function gh(e){if(e.propertyName==="value"&&ho(Pi)){var t=[];_h(t,Pi,e,qa(e)),Yd(Ig,t)}}function Pg(e,t,n){e==="focusin"?(vc(),_i=t,Pi=n,_i.attachEvent("onpropertychange",gh)):e==="focusout"&&vc()}function Ng(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ho(Pi)}function Dg(e,t){if(e==="click")return ho(t)}function Og(e,t){if(e==="input"||e==="change")return ho(t)}function Mg(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Kt=typeof Object.is=="function"?Object.is:Mg;function Ni(e,t){if(Kt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!bu.call(t,i)||!Kt(e[i],t[i]))return!1}return!0}function Ec(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Tc(e,t){var n=Ec(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ec(n)}}function yh(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?yh(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function vh(){for(var e=window,t=Ol();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ol(e.document)}return t}function os(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Fg(e){var t=vh(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&yh(n.ownerDocument.documentElement,n)){if(r!==null&&os(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,l=Math.min(r.start,i);r=r.end===void 0?l:Math.min(r.end,i),!e.extend&&l>r&&(i=r,r=l,l=i),i=Tc(n,l);var o=Tc(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),l>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var zg=pn&&"documentMode"in document&&11>=document.documentMode,yr=null,ra=null,mi=null,ia=!1;function xc(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ia||yr==null||yr!==Ol(r)||(r=yr,"selectionStart"in r&&os(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),mi&&Ni(mi,r)||(mi=r,r=Ul(ra,"onSelect"),0<r.length&&(t=new rs("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=yr)))}function al(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var vr={animationend:al("Animation","AnimationEnd"),animationiteration:al("Animation","AnimationIteration"),animationstart:al("Animation","AnimationStart"),transitionend:al("Transition","TransitionEnd")},nu={},Eh={};pn&&(Eh=document.createElement("div").style,"AnimationEvent"in window||(delete vr.animationend.animation,delete vr.animationiteration.animation,delete vr.animationstart.animation),"TransitionEvent"in window||delete vr.transitionend.transition);function po(e){if(nu[e])return nu[e];if(!vr[e])return e;var t=vr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Eh)return nu[e]=t[n];return e}var Th=po("animationend"),xh=po("animationiteration"),Lh=po("animationstart"),kh=po("transitionend"),wh=new Map,Lc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Un(e,t){wh.set(e,t),cr(t,[e])}for(var ru=0;ru<Lc.length;ru++){var iu=Lc[ru],bg=iu.toLowerCase(),Hg=iu[0].toUpperCase()+iu.slice(1);Un(bg,"on"+Hg)}Un(Th,"onAnimationEnd");Un(xh,"onAnimationIteration");Un(Lh,"onAnimationStart");Un("dblclick","onDoubleClick");Un("focusin","onFocus");Un("focusout","onBlur");Un(kh,"onTransitionEnd");zr("onMouseEnter",["mouseout","mouseover"]);zr("onMouseLeave",["mouseout","mouseover"]);zr("onPointerEnter",["pointerout","pointerover"]);zr("onPointerLeave",["pointerout","pointerover"]);cr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));cr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));cr("onBeforeInput",["compositionend","keypress","textInput","paste"]);cr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));cr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));cr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ci="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Bg=new Set("cancel close invalid load scroll toggle".split(" ").concat(ci));function kc(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,bm(r,t,void 0,e),e.currentTarget=null}function Sh(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var o=r.length-1;0<=o;o--){var u=r[o],a=u.instance,s=u.currentTarget;if(u=u.listener,a!==l&&i.isPropagationStopped())break e;kc(i,u,s),l=a}else for(o=0;o<r.length;o++){if(u=r[o],a=u.instance,s=u.currentTarget,u=u.listener,a!==l&&i.isPropagationStopped())break e;kc(i,u,s),l=a}}}if(Fl)throw e=Ju,Fl=!1,Ju=null,e}function Re(e,t){var n=t[sa];n===void 0&&(n=t[sa]=new Set);var r=e+"__bubble";n.has(r)||(Ah(t,e,2,!1),n.add(r))}function lu(e,t,n){var r=0;t&&(r|=4),Ah(n,e,r,t)}var sl="_reactListening"+Math.random().toString(36).slice(2);function Di(e){if(!e[sl]){e[sl]=!0,Od.forEach(function(n){n!=="selectionchange"&&(Bg.has(n)||lu(n,!1,e),lu(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[sl]||(t[sl]=!0,lu("selectionchange",!1,t))}}function Ah(e,t,n,r){switch(ch(t)){case 1:var i=eg;break;case 4:i=tg;break;default:i=ts}n=i.bind(null,t,n,e),i=void 0,!Zu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function ou(e,t,n,r,i){var l=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var u=r.stateNode.containerInfo;if(u===i||u.nodeType===8&&u.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;o=o.return}for(;u!==null;){if(o=Jn(u),o===null)return;if(a=o.tag,a===5||a===6){r=l=o;continue e}u=u.parentNode}}r=r.return}Yd(function(){var s=l,c=qa(n),d=[];e:{var f=wh.get(e);if(f!==void 0){var h=rs,p=e;switch(e){case"keypress":if(Ll(n)===0)break e;case"keydown":case"keyup":h=mg;break;case"focusin":p="focus",h=Jo;break;case"focusout":p="blur",h=Jo;break;case"beforeblur":case"afterblur":h=Jo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=dc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=ig;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=vg;break;case Th:case xh:case Lh:h=ug;break;case kh:h=Tg;break;case"scroll":h=ng;break;case"wheel":h=Lg;break;case"copy":case"cut":case"paste":h=sg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=pc}var m=(t&4)!==0,L=!m&&e==="scroll",_=m?f!==null?f+"Capture":null:f;m=[];for(var g=s,y;g!==null;){y=g;var k=y.stateNode;if(y.tag===5&&k!==null&&(y=k,_!==null&&(k=Ai(g,_),k!=null&&m.push(Oi(g,k,y)))),L)break;g=g.return}0<m.length&&(f=new h(f,p,null,n,c),d.push({event:f,listeners:m}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",h=e==="mouseout"||e==="pointerout",f&&n!==Yu&&(p=n.relatedTarget||n.fromElement)&&(Jn(p)||p[_n]))break e;if((h||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,h?(p=n.relatedTarget||n.toElement,h=s,p=p?Jn(p):null,p!==null&&(L=fr(p),p!==L||p.tag!==5&&p.tag!==6)&&(p=null)):(h=null,p=s),h!==p)){if(m=dc,k="onMouseLeave",_="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(m=pc,k="onPointerLeave",_="onPointerEnter",g="pointer"),L=h==null?f:Er(h),y=p==null?f:Er(p),f=new m(k,g+"leave",h,n,c),f.target=L,f.relatedTarget=y,k=null,Jn(c)===s&&(m=new m(_,g+"enter",p,n,c),m.target=y,m.relatedTarget=L,k=m),L=k,h&&p)t:{for(m=h,_=p,g=0,y=m;y;y=pr(y))g++;for(y=0,k=_;k;k=pr(k))y++;for(;0<g-y;)m=pr(m),g--;for(;0<y-g;)_=pr(_),y--;for(;g--;){if(m===_||_!==null&&m===_.alternate)break t;m=pr(m),_=pr(_)}m=null}else m=null;h!==null&&wc(d,f,h,m,!1),p!==null&&L!==null&&wc(d,L,p,m,!0)}}e:{if(f=s?Er(s):window,h=f.nodeName&&f.nodeName.toLowerCase(),h==="select"||h==="input"&&f.type==="file")var P=Rg;else if(gc(f))if(mh)P=Og;else{P=Ng;var x=Pg}else(h=f.nodeName)&&h.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(P=Dg);if(P&&(P=P(e,s))){_h(d,P,n,c);break e}x&&x(e,f,s),e==="focusout"&&(x=f._wrapperState)&&x.controlled&&f.type==="number"&&Vu(f,"number",f.value)}switch(x=s?Er(s):window,e){case"focusin":(gc(x)||x.contentEditable==="true")&&(yr=x,ra=s,mi=null);break;case"focusout":mi=ra=yr=null;break;case"mousedown":ia=!0;break;case"contextmenu":case"mouseup":case"dragend":ia=!1,xc(d,n,c);break;case"selectionchange":if(zg)break;case"keydown":case"keyup":xc(d,n,c)}var N;if(ls)e:{switch(e){case"compositionstart":var H="onCompositionStart";break e;case"compositionend":H="onCompositionEnd";break e;case"compositionupdate":H="onCompositionUpdate";break e}H=void 0}else gr?hh(e,n)&&(H="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(H="onCompositionStart");H&&(dh&&n.locale!=="ko"&&(gr||H!=="onCompositionStart"?H==="onCompositionEnd"&&gr&&(N=fh()):(Sn=c,ns="value"in Sn?Sn.value:Sn.textContent,gr=!0)),x=Ul(s,H),0<x.length&&(H=new hc(H,e,null,n,c),d.push({event:H,listeners:x}),N?H.data=N:(N=ph(n),N!==null&&(H.data=N)))),(N=wg?Sg(e,n):Ag(e,n))&&(s=Ul(s,"onBeforeInput"),0<s.length&&(c=new hc("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:s}),c.data=N))}Sh(d,t)})}function Oi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ul(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,l=i.stateNode;i.tag===5&&l!==null&&(i=l,l=Ai(e,n),l!=null&&r.unshift(Oi(e,l,i)),l=Ai(e,t),l!=null&&r.push(Oi(e,l,i))),e=e.return}return r}function pr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function wc(e,t,n,r,i){for(var l=t._reactName,o=[];n!==null&&n!==r;){var u=n,a=u.alternate,s=u.stateNode;if(a!==null&&a===r)break;u.tag===5&&s!==null&&(u=s,i?(a=Ai(n,l),a!=null&&o.unshift(Oi(n,a,u))):i||(a=Ai(n,l),a!=null&&o.push(Oi(n,a,u)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Ug=/\r\n?/g,jg=/\u0000|\uFFFD/g;function Sc(e){return(typeof e=="string"?e:""+e).replace(Ug,`
`).replace(jg,"")}function cl(e,t,n){if(t=Sc(t),Sc(e)!==t&&n)throw Error(U(425))}function jl(){}var la=null,oa=null;function ua(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var aa=typeof setTimeout=="function"?setTimeout:void 0,Wg=typeof clearTimeout=="function"?clearTimeout:void 0,Ac=typeof Promise=="function"?Promise:void 0,$g=typeof queueMicrotask=="function"?queueMicrotask:typeof Ac<"u"?function(e){return Ac.resolve(null).then(e).catch(Vg)}:aa;function Vg(e){setTimeout(function(){throw e})}function uu(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Ri(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ri(t)}function Dn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Cc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Gr=Math.random().toString(36).slice(2),en="__reactFiber$"+Gr,Mi="__reactProps$"+Gr,_n="__reactContainer$"+Gr,sa="__reactEvents$"+Gr,Gg="__reactListeners$"+Gr,Qg="__reactHandles$"+Gr;function Jn(e){var t=e[en];if(t)return t;for(var n=e.parentNode;n;){if(t=n[_n]||n[en]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Cc(e);e!==null;){if(n=e[en])return n;e=Cc(e)}return t}e=n,n=e.parentNode}return null}function Ki(e){return e=e[en]||e[_n],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Er(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(U(33))}function _o(e){return e[Mi]||null}var ca=[],Tr=-1;function jn(e){return{current:e}}function Ne(e){0>Tr||(e.current=ca[Tr],ca[Tr]=null,Tr--)}function Ie(e,t){Tr++,ca[Tr]=e.current,e.current=t}var Hn={},ut=jn(Hn),yt=jn(!1),lr=Hn;function br(e,t){var n=e.type.contextTypes;if(!n)return Hn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},l;for(l in n)i[l]=t[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function vt(e){return e=e.childContextTypes,e!=null}function Wl(){Ne(yt),Ne(ut)}function Ic(e,t,n){if(ut.current!==Hn)throw Error(U(168));Ie(ut,t),Ie(yt,n)}function Ch(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(U(108,Pm(e)||"Unknown",i));return be({},n,r)}function $l(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Hn,lr=ut.current,Ie(ut,e),Ie(yt,yt.current),!0}function Rc(e,t,n){var r=e.stateNode;if(!r)throw Error(U(169));n?(e=Ch(e,t,lr),r.__reactInternalMemoizedMergedChildContext=e,Ne(yt),Ne(ut),Ie(ut,e)):Ne(yt),Ie(yt,n)}var an=null,mo=!1,au=!1;function Ih(e){an===null?an=[e]:an.push(e)}function Kg(e){mo=!0,Ih(e)}function Wn(){if(!au&&an!==null){au=!0;var e=0,t=ke;try{var n=an;for(ke=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}an=null,mo=!1}catch(i){throw an!==null&&(an=an.slice(e+1)),eh(Za,Wn),i}finally{ke=t,au=!1}}return null}var xr=[],Lr=0,Vl=null,Gl=0,It=[],Rt=0,or=null,sn=1,cn="";function Kn(e,t){xr[Lr++]=Gl,xr[Lr++]=Vl,Vl=e,Gl=t}function Rh(e,t,n){It[Rt++]=sn,It[Rt++]=cn,It[Rt++]=or,or=e;var r=sn;e=cn;var i=32-Vt(r)-1;r&=~(1<<i),n+=1;var l=32-Vt(t)+i;if(30<l){var o=i-i%5;l=(r&(1<<o)-1).toString(32),r>>=o,i-=o,sn=1<<32-Vt(t)+i|n<<i|r,cn=l+e}else sn=1<<l|n<<i|r,cn=e}function us(e){e.return!==null&&(Kn(e,1),Rh(e,1,0))}function as(e){for(;e===Vl;)Vl=xr[--Lr],xr[Lr]=null,Gl=xr[--Lr],xr[Lr]=null;for(;e===or;)or=It[--Rt],It[Rt]=null,cn=It[--Rt],It[Rt]=null,sn=It[--Rt],It[Rt]=null}var kt=null,Lt=null,Me=!1,$t=null;function Ph(e,t){var n=Dt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Pc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,kt=e,Lt=Dn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,kt=e,Lt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=or!==null?{id:sn,overflow:cn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Dt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,kt=e,Lt=null,!0):!1;default:return!1}}function fa(e){return(e.mode&1)!==0&&(e.flags&128)===0}function da(e){if(Me){var t=Lt;if(t){var n=t;if(!Pc(e,t)){if(fa(e))throw Error(U(418));t=Dn(n.nextSibling);var r=kt;t&&Pc(e,t)?Ph(r,n):(e.flags=e.flags&-4097|2,Me=!1,kt=e)}}else{if(fa(e))throw Error(U(418));e.flags=e.flags&-4097|2,Me=!1,kt=e}}}function Nc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;kt=e}function fl(e){if(e!==kt)return!1;if(!Me)return Nc(e),Me=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ua(e.type,e.memoizedProps)),t&&(t=Lt)){if(fa(e))throw Nh(),Error(U(418));for(;t;)Ph(e,t),t=Dn(t.nextSibling)}if(Nc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(U(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Lt=Dn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Lt=null}}else Lt=kt?Dn(e.stateNode.nextSibling):null;return!0}function Nh(){for(var e=Lt;e;)e=Dn(e.nextSibling)}function Hr(){Lt=kt=null,Me=!1}function ss(e){$t===null?$t=[e]:$t.push(e)}var Xg=yn.ReactCurrentBatchConfig;function jt(e,t){if(e&&e.defaultProps){t=be({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Ql=jn(null),Kl=null,kr=null,cs=null;function fs(){cs=kr=Kl=null}function ds(e){var t=Ql.current;Ne(Ql),e._currentValue=t}function ha(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Nr(e,t){Kl=e,cs=kr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(gt=!0),e.firstContext=null)}function Mt(e){var t=e._currentValue;if(cs!==e)if(e={context:e,memoizedValue:t,next:null},kr===null){if(Kl===null)throw Error(U(308));kr=e,Kl.dependencies={lanes:0,firstContext:e}}else kr=kr.next=e;return t}var er=null;function hs(e){er===null?er=[e]:er.push(e)}function Dh(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,hs(t)):(n.next=i.next,i.next=n),t.interleaved=n,mn(e,r)}function mn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Ln=!1;function ps(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Oh(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function dn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function On(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,ye&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,mn(e,n)}return i=r.interleaved,i===null?(t.next=t,hs(r)):(t.next=i.next,i.next=t),r.interleaved=t,mn(e,n)}function kl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ja(e,n)}}function Dc(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?i=l=o:l=l.next=o,n=n.next}while(n!==null);l===null?i=l=t:l=l.next=t}else i=l=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Xl(e,t,n,r){var i=e.updateQueue;Ln=!1;var l=i.firstBaseUpdate,o=i.lastBaseUpdate,u=i.shared.pending;if(u!==null){i.shared.pending=null;var a=u,s=a.next;a.next=null,o===null?l=s:o.next=s,o=a;var c=e.alternate;c!==null&&(c=c.updateQueue,u=c.lastBaseUpdate,u!==o&&(u===null?c.firstBaseUpdate=s:u.next=s,c.lastBaseUpdate=a))}if(l!==null){var d=i.baseState;o=0,c=s=a=null,u=l;do{var f=u.lane,h=u.eventTime;if((r&f)===f){c!==null&&(c=c.next={eventTime:h,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var p=e,m=u;switch(f=t,h=n,m.tag){case 1:if(p=m.payload,typeof p=="function"){d=p.call(h,d,f);break e}d=p;break e;case 3:p.flags=p.flags&-65537|128;case 0:if(p=m.payload,f=typeof p=="function"?p.call(h,d,f):p,f==null)break e;d=be({},d,f);break e;case 2:Ln=!0}}u.callback!==null&&u.lane!==0&&(e.flags|=64,f=i.effects,f===null?i.effects=[u]:f.push(u))}else h={eventTime:h,lane:f,tag:u.tag,payload:u.payload,callback:u.callback,next:null},c===null?(s=c=h,a=d):c=c.next=h,o|=f;if(u=u.next,u===null){if(u=i.shared.pending,u===null)break;f=u,u=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(1);if(c===null&&(a=d),i.baseState=a,i.firstBaseUpdate=s,i.lastBaseUpdate=c,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else l===null&&(i.shared.lanes=0);ar|=o,e.lanes=o,e.memoizedState=d}}function Oc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(U(191,i));i.call(r)}}}var Mh=new Dd.Component().refs;function pa(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:be({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var go={isMounted:function(e){return(e=e._reactInternals)?fr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=dt(),i=Fn(e),l=dn(r,i);l.payload=t,n!=null&&(l.callback=n),t=On(e,l,i),t!==null&&(Gt(t,e,i,r),kl(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=dt(),i=Fn(e),l=dn(r,i);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=On(e,l,i),t!==null&&(Gt(t,e,i,r),kl(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=dt(),r=Fn(e),i=dn(n,r);i.tag=2,t!=null&&(i.callback=t),t=On(e,i,r),t!==null&&(Gt(t,e,r,n),kl(t,e,r))}};function Mc(e,t,n,r,i,l,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,o):t.prototype&&t.prototype.isPureReactComponent?!Ni(n,r)||!Ni(i,l):!0}function Fh(e,t,n){var r=!1,i=Hn,l=t.contextType;return typeof l=="object"&&l!==null?l=Mt(l):(i=vt(t)?lr:ut.current,r=t.contextTypes,l=(r=r!=null)?br(e,i):Hn),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=go,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=l),t}function Fc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&go.enqueueReplaceState(t,t.state,null)}function _a(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=Mh,ps(e);var l=t.contextType;typeof l=="object"&&l!==null?i.context=Mt(l):(l=vt(t)?lr:ut.current,i.context=br(e,l)),i.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(pa(e,t,l,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&go.enqueueReplaceState(i,i.state,null),Xl(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function ti(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(U(309));var r=n.stateNode}if(!r)throw Error(U(147,e));var i=r,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(o){var u=i.refs;u===Mh&&(u=i.refs={}),o===null?delete u[l]:u[l]=o},t._stringRef=l,t)}if(typeof e!="string")throw Error(U(284));if(!n._owner)throw Error(U(290,e))}return e}function dl(e,t){throw e=Object.prototype.toString.call(t),Error(U(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function zc(e){var t=e._init;return t(e._payload)}function zh(e){function t(_,g){if(e){var y=_.deletions;y===null?(_.deletions=[g],_.flags|=16):y.push(g)}}function n(_,g){if(!e)return null;for(;g!==null;)t(_,g),g=g.sibling;return null}function r(_,g){for(_=new Map;g!==null;)g.key!==null?_.set(g.key,g):_.set(g.index,g),g=g.sibling;return _}function i(_,g){return _=zn(_,g),_.index=0,_.sibling=null,_}function l(_,g,y){return _.index=y,e?(y=_.alternate,y!==null?(y=y.index,y<g?(_.flags|=2,g):y):(_.flags|=2,g)):(_.flags|=1048576,g)}function o(_){return e&&_.alternate===null&&(_.flags|=2),_}function u(_,g,y,k){return g===null||g.tag!==6?(g=_u(y,_.mode,k),g.return=_,g):(g=i(g,y),g.return=_,g)}function a(_,g,y,k){var P=y.type;return P===mr?c(_,g,y.props.children,k,y.key):g!==null&&(g.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===xn&&zc(P)===g.type)?(k=i(g,y.props),k.ref=ti(_,g,y),k.return=_,k):(k=Rl(y.type,y.key,y.props,null,_.mode,k),k.ref=ti(_,g,y),k.return=_,k)}function s(_,g,y,k){return g===null||g.tag!==4||g.stateNode.containerInfo!==y.containerInfo||g.stateNode.implementation!==y.implementation?(g=mu(y,_.mode,k),g.return=_,g):(g=i(g,y.children||[]),g.return=_,g)}function c(_,g,y,k,P){return g===null||g.tag!==7?(g=ir(y,_.mode,k,P),g.return=_,g):(g=i(g,y),g.return=_,g)}function d(_,g,y){if(typeof g=="string"&&g!==""||typeof g=="number")return g=_u(""+g,_.mode,y),g.return=_,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case tl:return y=Rl(g.type,g.key,g.props,null,_.mode,y),y.ref=ti(_,null,g),y.return=_,y;case _r:return g=mu(g,_.mode,y),g.return=_,g;case xn:var k=g._init;return d(_,k(g._payload),y)}if(ai(g)||Yr(g))return g=ir(g,_.mode,y,null),g.return=_,g;dl(_,g)}return null}function f(_,g,y,k){var P=g!==null?g.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return P!==null?null:u(_,g,""+y,k);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case tl:return y.key===P?a(_,g,y,k):null;case _r:return y.key===P?s(_,g,y,k):null;case xn:return P=y._init,f(_,g,P(y._payload),k)}if(ai(y)||Yr(y))return P!==null?null:c(_,g,y,k,null);dl(_,y)}return null}function h(_,g,y,k,P){if(typeof k=="string"&&k!==""||typeof k=="number")return _=_.get(y)||null,u(g,_,""+k,P);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case tl:return _=_.get(k.key===null?y:k.key)||null,a(g,_,k,P);case _r:return _=_.get(k.key===null?y:k.key)||null,s(g,_,k,P);case xn:var x=k._init;return h(_,g,y,x(k._payload),P)}if(ai(k)||Yr(k))return _=_.get(y)||null,c(g,_,k,P,null);dl(g,k)}return null}function p(_,g,y,k){for(var P=null,x=null,N=g,H=g=0,X=null;N!==null&&H<y.length;H++){N.index>H?(X=N,N=null):X=N.sibling;var Y=f(_,N,y[H],k);if(Y===null){N===null&&(N=X);break}e&&N&&Y.alternate===null&&t(_,N),g=l(Y,g,H),x===null?P=Y:x.sibling=Y,x=Y,N=X}if(H===y.length)return n(_,N),Me&&Kn(_,H),P;if(N===null){for(;H<y.length;H++)N=d(_,y[H],k),N!==null&&(g=l(N,g,H),x===null?P=N:x.sibling=N,x=N);return Me&&Kn(_,H),P}for(N=r(_,N);H<y.length;H++)X=h(N,_,H,y[H],k),X!==null&&(e&&X.alternate!==null&&N.delete(X.key===null?H:X.key),g=l(X,g,H),x===null?P=X:x.sibling=X,x=X);return e&&N.forEach(function(V){return t(_,V)}),Me&&Kn(_,H),P}function m(_,g,y,k){var P=Yr(y);if(typeof P!="function")throw Error(U(150));if(y=P.call(y),y==null)throw Error(U(151));for(var x=P=null,N=g,H=g=0,X=null,Y=y.next();N!==null&&!Y.done;H++,Y=y.next()){N.index>H?(X=N,N=null):X=N.sibling;var V=f(_,N,Y.value,k);if(V===null){N===null&&(N=X);break}e&&N&&V.alternate===null&&t(_,N),g=l(V,g,H),x===null?P=V:x.sibling=V,x=V,N=X}if(Y.done)return n(_,N),Me&&Kn(_,H),P;if(N===null){for(;!Y.done;H++,Y=y.next())Y=d(_,Y.value,k),Y!==null&&(g=l(Y,g,H),x===null?P=Y:x.sibling=Y,x=Y);return Me&&Kn(_,H),P}for(N=r(_,N);!Y.done;H++,Y=y.next())Y=h(N,_,H,Y.value,k),Y!==null&&(e&&Y.alternate!==null&&N.delete(Y.key===null?H:Y.key),g=l(Y,g,H),x===null?P=Y:x.sibling=Y,x=Y);return e&&N.forEach(function(ee){return t(_,ee)}),Me&&Kn(_,H),P}function L(_,g,y,k){if(typeof y=="object"&&y!==null&&y.type===mr&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case tl:e:{for(var P=y.key,x=g;x!==null;){if(x.key===P){if(P=y.type,P===mr){if(x.tag===7){n(_,x.sibling),g=i(x,y.props.children),g.return=_,_=g;break e}}else if(x.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===xn&&zc(P)===x.type){n(_,x.sibling),g=i(x,y.props),g.ref=ti(_,x,y),g.return=_,_=g;break e}n(_,x);break}else t(_,x);x=x.sibling}y.type===mr?(g=ir(y.props.children,_.mode,k,y.key),g.return=_,_=g):(k=Rl(y.type,y.key,y.props,null,_.mode,k),k.ref=ti(_,g,y),k.return=_,_=k)}return o(_);case _r:e:{for(x=y.key;g!==null;){if(g.key===x)if(g.tag===4&&g.stateNode.containerInfo===y.containerInfo&&g.stateNode.implementation===y.implementation){n(_,g.sibling),g=i(g,y.children||[]),g.return=_,_=g;break e}else{n(_,g);break}else t(_,g);g=g.sibling}g=mu(y,_.mode,k),g.return=_,_=g}return o(_);case xn:return x=y._init,L(_,g,x(y._payload),k)}if(ai(y))return p(_,g,y,k);if(Yr(y))return m(_,g,y,k);dl(_,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,g!==null&&g.tag===6?(n(_,g.sibling),g=i(g,y),g.return=_,_=g):(n(_,g),g=_u(y,_.mode,k),g.return=_,_=g),o(_)):n(_,g)}return L}var Br=zh(!0),bh=zh(!1),Xi={},nn=jn(Xi),Fi=jn(Xi),zi=jn(Xi);function tr(e){if(e===Xi)throw Error(U(174));return e}function _s(e,t){switch(Ie(zi,t),Ie(Fi,e),Ie(nn,Xi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Qu(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Qu(t,e)}Ne(nn),Ie(nn,t)}function Ur(){Ne(nn),Ne(Fi),Ne(zi)}function Hh(e){tr(zi.current);var t=tr(nn.current),n=Qu(t,e.type);t!==n&&(Ie(Fi,e),Ie(nn,n))}function ms(e){Fi.current===e&&(Ne(nn),Ne(Fi))}var Fe=jn(0);function Yl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var su=[];function gs(){for(var e=0;e<su.length;e++)su[e]._workInProgressVersionPrimary=null;su.length=0}var wl=yn.ReactCurrentDispatcher,cu=yn.ReactCurrentBatchConfig,ur=0,ze=null,Qe=null,qe=null,ql=!1,gi=!1,bi=0,Yg=0;function it(){throw Error(U(321))}function ys(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Kt(e[n],t[n]))return!1;return!0}function vs(e,t,n,r,i,l){if(ur=l,ze=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,wl.current=e===null||e.memoizedState===null?ey:ty,e=n(r,i),gi){l=0;do{if(gi=!1,bi=0,25<=l)throw Error(U(301));l+=1,qe=Qe=null,t.updateQueue=null,wl.current=ny,e=n(r,i)}while(gi)}if(wl.current=Zl,t=Qe!==null&&Qe.next!==null,ur=0,qe=Qe=ze=null,ql=!1,t)throw Error(U(300));return e}function Es(){var e=bi!==0;return bi=0,e}function Zt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return qe===null?ze.memoizedState=qe=e:qe=qe.next=e,qe}function Ft(){if(Qe===null){var e=ze.alternate;e=e!==null?e.memoizedState:null}else e=Qe.next;var t=qe===null?ze.memoizedState:qe.next;if(t!==null)qe=t,Qe=e;else{if(e===null)throw Error(U(310));Qe=e,e={memoizedState:Qe.memoizedState,baseState:Qe.baseState,baseQueue:Qe.baseQueue,queue:Qe.queue,next:null},qe===null?ze.memoizedState=qe=e:qe=qe.next=e}return qe}function Hi(e,t){return typeof t=="function"?t(e):t}function fu(e){var t=Ft(),n=t.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=e;var r=Qe,i=r.baseQueue,l=n.pending;if(l!==null){if(i!==null){var o=i.next;i.next=l.next,l.next=o}r.baseQueue=i=l,n.pending=null}if(i!==null){l=i.next,r=r.baseState;var u=o=null,a=null,s=l;do{var c=s.lane;if((ur&c)===c)a!==null&&(a=a.next={lane:0,action:s.action,hasEagerState:s.hasEagerState,eagerState:s.eagerState,next:null}),r=s.hasEagerState?s.eagerState:e(r,s.action);else{var d={lane:c,action:s.action,hasEagerState:s.hasEagerState,eagerState:s.eagerState,next:null};a===null?(u=a=d,o=r):a=a.next=d,ze.lanes|=c,ar|=c}s=s.next}while(s!==null&&s!==l);a===null?o=r:a.next=u,Kt(r,t.memoizedState)||(gt=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do l=i.lane,ze.lanes|=l,ar|=l,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function du(e){var t=Ft(),n=t.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,l=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do l=e(l,o.action),o=o.next;while(o!==i);Kt(l,t.memoizedState)||(gt=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function Bh(){}function Uh(e,t){var n=ze,r=Ft(),i=t(),l=!Kt(r.memoizedState,i);if(l&&(r.memoizedState=i,gt=!0),r=r.queue,Ts($h.bind(null,n,r,e),[e]),r.getSnapshot!==t||l||qe!==null&&qe.memoizedState.tag&1){if(n.flags|=2048,Bi(9,Wh.bind(null,n,r,i,t),void 0,null),Ze===null)throw Error(U(349));ur&30||jh(n,t,i)}return i}function jh(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ze.updateQueue,t===null?(t={lastEffect:null,stores:null},ze.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Wh(e,t,n,r){t.value=n,t.getSnapshot=r,Vh(t)&&Gh(e)}function $h(e,t,n){return n(function(){Vh(t)&&Gh(e)})}function Vh(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Kt(e,n)}catch{return!0}}function Gh(e){var t=mn(e,1);t!==null&&Gt(t,e,1,-1)}function bc(e){var t=Zt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Hi,lastRenderedState:e},t.queue=e,e=e.dispatch=Jg.bind(null,ze,e),[t.memoizedState,e]}function Bi(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ze.updateQueue,t===null?(t={lastEffect:null,stores:null},ze.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Qh(){return Ft().memoizedState}function Sl(e,t,n,r){var i=Zt();ze.flags|=e,i.memoizedState=Bi(1|t,n,void 0,r===void 0?null:r)}function yo(e,t,n,r){var i=Ft();r=r===void 0?null:r;var l=void 0;if(Qe!==null){var o=Qe.memoizedState;if(l=o.destroy,r!==null&&ys(r,o.deps)){i.memoizedState=Bi(t,n,l,r);return}}ze.flags|=e,i.memoizedState=Bi(1|t,n,l,r)}function Hc(e,t){return Sl(8390656,8,e,t)}function Ts(e,t){return yo(2048,8,e,t)}function Kh(e,t){return yo(4,2,e,t)}function Xh(e,t){return yo(4,4,e,t)}function Yh(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function qh(e,t,n){return n=n!=null?n.concat([e]):null,yo(4,4,Yh.bind(null,t,e),n)}function xs(){}function Zh(e,t){var n=Ft();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ys(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Jh(e,t){var n=Ft();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ys(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function ep(e,t,n){return ur&21?(Kt(n,t)||(n=rh(),ze.lanes|=n,ar|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,gt=!0),e.memoizedState=n)}function qg(e,t){var n=ke;ke=n!==0&&4>n?n:4,e(!0);var r=cu.transition;cu.transition={};try{e(!1),t()}finally{ke=n,cu.transition=r}}function tp(){return Ft().memoizedState}function Zg(e,t,n){var r=Fn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},np(e))rp(t,n);else if(n=Dh(e,t,n,r),n!==null){var i=dt();Gt(n,e,r,i),ip(n,t,r)}}function Jg(e,t,n){var r=Fn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(np(e))rp(t,i);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var o=t.lastRenderedState,u=l(o,n);if(i.hasEagerState=!0,i.eagerState=u,Kt(u,o)){var a=t.interleaved;a===null?(i.next=i,hs(t)):(i.next=a.next,a.next=i),t.interleaved=i;return}}catch{}finally{}n=Dh(e,t,i,r),n!==null&&(i=dt(),Gt(n,e,r,i),ip(n,t,r))}}function np(e){var t=e.alternate;return e===ze||t!==null&&t===ze}function rp(e,t){gi=ql=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function ip(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ja(e,n)}}var Zl={readContext:Mt,useCallback:it,useContext:it,useEffect:it,useImperativeHandle:it,useInsertionEffect:it,useLayoutEffect:it,useMemo:it,useReducer:it,useRef:it,useState:it,useDebugValue:it,useDeferredValue:it,useTransition:it,useMutableSource:it,useSyncExternalStore:it,useId:it,unstable_isNewReconciler:!1},ey={readContext:Mt,useCallback:function(e,t){return Zt().memoizedState=[e,t===void 0?null:t],e},useContext:Mt,useEffect:Hc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Sl(4194308,4,Yh.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Sl(4194308,4,e,t)},useInsertionEffect:function(e,t){return Sl(4,2,e,t)},useMemo:function(e,t){var n=Zt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Zt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Zg.bind(null,ze,e),[r.memoizedState,e]},useRef:function(e){var t=Zt();return e={current:e},t.memoizedState=e},useState:bc,useDebugValue:xs,useDeferredValue:function(e){return Zt().memoizedState=e},useTransition:function(){var e=bc(!1),t=e[0];return e=qg.bind(null,e[1]),Zt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ze,i=Zt();if(Me){if(n===void 0)throw Error(U(407));n=n()}else{if(n=t(),Ze===null)throw Error(U(349));ur&30||jh(r,t,n)}i.memoizedState=n;var l={value:n,getSnapshot:t};return i.queue=l,Hc($h.bind(null,r,l,e),[e]),r.flags|=2048,Bi(9,Wh.bind(null,r,l,n,t),void 0,null),n},useId:function(){var e=Zt(),t=Ze.identifierPrefix;if(Me){var n=cn,r=sn;n=(r&~(1<<32-Vt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=bi++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Yg++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},ty={readContext:Mt,useCallback:Zh,useContext:Mt,useEffect:Ts,useImperativeHandle:qh,useInsertionEffect:Kh,useLayoutEffect:Xh,useMemo:Jh,useReducer:fu,useRef:Qh,useState:function(){return fu(Hi)},useDebugValue:xs,useDeferredValue:function(e){var t=Ft();return ep(t,Qe.memoizedState,e)},useTransition:function(){var e=fu(Hi)[0],t=Ft().memoizedState;return[e,t]},useMutableSource:Bh,useSyncExternalStore:Uh,useId:tp,unstable_isNewReconciler:!1},ny={readContext:Mt,useCallback:Zh,useContext:Mt,useEffect:Ts,useImperativeHandle:qh,useInsertionEffect:Kh,useLayoutEffect:Xh,useMemo:Jh,useReducer:du,useRef:Qh,useState:function(){return du(Hi)},useDebugValue:xs,useDeferredValue:function(e){var t=Ft();return Qe===null?t.memoizedState=e:ep(t,Qe.memoizedState,e)},useTransition:function(){var e=du(Hi)[0],t=Ft().memoizedState;return[e,t]},useMutableSource:Bh,useSyncExternalStore:Uh,useId:tp,unstable_isNewReconciler:!1};function jr(e,t){try{var n="",r=t;do n+=Rm(r),r=r.return;while(r);var i=n}catch(l){i=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:i,digest:null}}function hu(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ma(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var ry=typeof WeakMap=="function"?WeakMap:Map;function lp(e,t,n){n=dn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){eo||(eo=!0,Sa=r),ma(e,t)},n}function op(e,t,n){n=dn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){ma(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){ma(e,t),typeof r!="function"&&(Mn===null?Mn=new Set([this]):Mn.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Bc(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new ry;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=gy.bind(null,e,t,n),t.then(e,e))}function Uc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function jc(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=dn(-1,1),t.tag=2,On(n,t,1))),n.lanes|=1),e)}var iy=yn.ReactCurrentOwner,gt=!1;function ct(e,t,n,r){t.child=e===null?bh(t,null,n,r):Br(t,e.child,n,r)}function Wc(e,t,n,r,i){n=n.render;var l=t.ref;return Nr(t,i),r=vs(e,t,n,r,l,i),n=Es(),e!==null&&!gt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,gn(e,t,i)):(Me&&n&&us(t),t.flags|=1,ct(e,t,r,i),t.child)}function $c(e,t,n,r,i){if(e===null){var l=n.type;return typeof l=="function"&&!Rs(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,up(e,t,l,r,i)):(e=Rl(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!(e.lanes&i)){var o=l.memoizedProps;if(n=n.compare,n=n!==null?n:Ni,n(o,r)&&e.ref===t.ref)return gn(e,t,i)}return t.flags|=1,e=zn(l,r),e.ref=t.ref,e.return=t,t.child=e}function up(e,t,n,r,i){if(e!==null){var l=e.memoizedProps;if(Ni(l,r)&&e.ref===t.ref)if(gt=!1,t.pendingProps=r=l,(e.lanes&i)!==0)e.flags&131072&&(gt=!0);else return t.lanes=e.lanes,gn(e,t,i)}return ga(e,t,n,r,i)}function ap(e,t,n){var r=t.pendingProps,i=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ie(Sr,xt),xt|=n;else{if(!(n&1073741824))return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ie(Sr,xt),xt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:n,Ie(Sr,xt),xt|=r}else l!==null?(r=l.baseLanes|n,t.memoizedState=null):r=n,Ie(Sr,xt),xt|=r;return ct(e,t,i,n),t.child}function sp(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ga(e,t,n,r,i){var l=vt(n)?lr:ut.current;return l=br(t,l),Nr(t,i),n=vs(e,t,n,r,l,i),r=Es(),e!==null&&!gt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,gn(e,t,i)):(Me&&r&&us(t),t.flags|=1,ct(e,t,n,i),t.child)}function Vc(e,t,n,r,i){if(vt(n)){var l=!0;$l(t)}else l=!1;if(Nr(t,i),t.stateNode===null)Al(e,t),Fh(t,n,r),_a(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,u=t.memoizedProps;o.props=u;var a=o.context,s=n.contextType;typeof s=="object"&&s!==null?s=Mt(s):(s=vt(n)?lr:ut.current,s=br(t,s));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(u!==r||a!==s)&&Fc(t,o,r,s),Ln=!1;var f=t.memoizedState;o.state=f,Xl(t,r,o,i),a=t.memoizedState,u!==r||f!==a||yt.current||Ln?(typeof c=="function"&&(pa(t,n,c,r),a=t.memoizedState),(u=Ln||Mc(t,n,u,r,f,a,s))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),o.props=r,o.state=a,o.context=s,r=u):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,Oh(e,t),u=t.memoizedProps,s=t.type===t.elementType?u:jt(t.type,u),o.props=s,d=t.pendingProps,f=o.context,a=n.contextType,typeof a=="object"&&a!==null?a=Mt(a):(a=vt(n)?lr:ut.current,a=br(t,a));var h=n.getDerivedStateFromProps;(c=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(u!==d||f!==a)&&Fc(t,o,r,a),Ln=!1,f=t.memoizedState,o.state=f,Xl(t,r,o,i);var p=t.memoizedState;u!==d||f!==p||yt.current||Ln?(typeof h=="function"&&(pa(t,n,h,r),p=t.memoizedState),(s=Ln||Mc(t,n,s,r,f,p,a)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,p,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,p,a)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||u===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),o.props=r,o.state=p,o.context=a,r=s):(typeof o.componentDidUpdate!="function"||u===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return ya(e,t,n,r,l,i)}function ya(e,t,n,r,i,l){sp(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&Rc(t,n,!1),gn(e,t,l);r=t.stateNode,iy.current=t;var u=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=Br(t,e.child,null,l),t.child=Br(t,null,u,l)):ct(e,t,u,l),t.memoizedState=r.state,i&&Rc(t,n,!0),t.child}function cp(e){var t=e.stateNode;t.pendingContext?Ic(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ic(e,t.context,!1),_s(e,t.containerInfo)}function Gc(e,t,n,r,i){return Hr(),ss(i),t.flags|=256,ct(e,t,n,r),t.child}var va={dehydrated:null,treeContext:null,retryLane:0};function Ea(e){return{baseLanes:e,cachePool:null,transitions:null}}function fp(e,t,n){var r=t.pendingProps,i=Fe.current,l=!1,o=(t.flags&128)!==0,u;if((u=o)||(u=e!==null&&e.memoizedState===null?!1:(i&2)!==0),u?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),Ie(Fe,i&1),e===null)return da(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,l?(r=t.mode,l=t.child,o={mode:"hidden",children:o},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=o):l=To(o,r,0,null),e=ir(e,r,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=Ea(n),t.memoizedState=va,e):Ls(t,o));if(i=e.memoizedState,i!==null&&(u=i.dehydrated,u!==null))return ly(e,t,o,r,u,i,n);if(l){l=r.fallback,o=t.mode,i=e.child,u=i.sibling;var a={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=zn(i,a),r.subtreeFlags=i.subtreeFlags&14680064),u!==null?l=zn(u,l):(l=ir(l,o,n,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,r=l,l=t.child,o=e.child.memoizedState,o=o===null?Ea(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},l.memoizedState=o,l.childLanes=e.childLanes&~n,t.memoizedState=va,r}return l=e.child,e=l.sibling,r=zn(l,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ls(e,t){return t=To({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function hl(e,t,n,r){return r!==null&&ss(r),Br(t,e.child,null,n),e=Ls(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function ly(e,t,n,r,i,l,o){if(n)return t.flags&256?(t.flags&=-257,r=hu(Error(U(422))),hl(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=r.fallback,i=t.mode,r=To({mode:"visible",children:r.children},i,0,null),l=ir(l,i,o,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,t.mode&1&&Br(t,e.child,null,o),t.child.memoizedState=Ea(o),t.memoizedState=va,l);if(!(t.mode&1))return hl(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var u=r.dgst;return r=u,l=Error(U(419)),r=hu(l,r,void 0),hl(e,t,o,r)}if(u=(o&e.childLanes)!==0,gt||u){if(r=Ze,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==l.retryLane&&(l.retryLane=i,mn(e,i),Gt(r,e,i,-1))}return Is(),r=hu(Error(U(421))),hl(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=yy.bind(null,e),i._reactRetry=t,null):(e=l.treeContext,Lt=Dn(i.nextSibling),kt=t,Me=!0,$t=null,e!==null&&(It[Rt++]=sn,It[Rt++]=cn,It[Rt++]=or,sn=e.id,cn=e.overflow,or=t),t=Ls(t,r.children),t.flags|=4096,t)}function Qc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ha(e.return,t,n)}function pu(e,t,n,r,i){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=i)}function dp(e,t,n){var r=t.pendingProps,i=r.revealOrder,l=r.tail;if(ct(e,t,r.children,n),r=Fe.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Qc(e,n,t);else if(e.tag===19)Qc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Ie(Fe,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Yl(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),pu(t,!1,i,n,l);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Yl(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}pu(t,!0,n,null,l);break;case"together":pu(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Al(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function gn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),ar|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(U(153));if(t.child!==null){for(e=t.child,n=zn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=zn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function oy(e,t,n){switch(t.tag){case 3:cp(t),Hr();break;case 5:Hh(t);break;case 1:vt(t.type)&&$l(t);break;case 4:_s(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;Ie(Ql,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Ie(Fe,Fe.current&1),t.flags|=128,null):n&t.child.childLanes?fp(e,t,n):(Ie(Fe,Fe.current&1),e=gn(e,t,n),e!==null?e.sibling:null);Ie(Fe,Fe.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return dp(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ie(Fe,Fe.current),r)break;return null;case 22:case 23:return t.lanes=0,ap(e,t,n)}return gn(e,t,n)}var hp,Ta,pp,_p;hp=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ta=function(){};pp=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,tr(nn.current);var l=null;switch(n){case"input":i=Wu(e,i),r=Wu(e,r),l=[];break;case"select":i=be({},i,{value:void 0}),r=be({},r,{value:void 0}),l=[];break;case"textarea":i=Gu(e,i),r=Gu(e,r),l=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=jl)}Ku(n,r);var o;n=null;for(s in i)if(!r.hasOwnProperty(s)&&i.hasOwnProperty(s)&&i[s]!=null)if(s==="style"){var u=i[s];for(o in u)u.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else s!=="dangerouslySetInnerHTML"&&s!=="children"&&s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(wi.hasOwnProperty(s)?l||(l=[]):(l=l||[]).push(s,null));for(s in r){var a=r[s];if(u=i!=null?i[s]:void 0,r.hasOwnProperty(s)&&a!==u&&(a!=null||u!=null))if(s==="style")if(u){for(o in u)!u.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in a)a.hasOwnProperty(o)&&u[o]!==a[o]&&(n||(n={}),n[o]=a[o])}else n||(l||(l=[]),l.push(s,n)),n=a;else s==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,u=u?u.__html:void 0,a!=null&&u!==a&&(l=l||[]).push(s,a)):s==="children"?typeof a!="string"&&typeof a!="number"||(l=l||[]).push(s,""+a):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&(wi.hasOwnProperty(s)?(a!=null&&s==="onScroll"&&Re("scroll",e),l||u===a||(l=[])):(l=l||[]).push(s,a))}n&&(l=l||[]).push("style",n);var s=l;(t.updateQueue=s)&&(t.flags|=4)}};_p=function(e,t,n,r){n!==r&&(t.flags|=4)};function ni(e,t){if(!Me)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function lt(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function uy(e,t,n){var r=t.pendingProps;switch(as(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return lt(t),null;case 1:return vt(t.type)&&Wl(),lt(t),null;case 3:return r=t.stateNode,Ur(),Ne(yt),Ne(ut),gs(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(fl(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,$t!==null&&(Ia($t),$t=null))),Ta(e,t),lt(t),null;case 5:ms(t);var i=tr(zi.current);if(n=t.type,e!==null&&t.stateNode!=null)pp(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(U(166));return lt(t),null}if(e=tr(nn.current),fl(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[en]=t,r[Mi]=l,e=(t.mode&1)!==0,n){case"dialog":Re("cancel",r),Re("close",r);break;case"iframe":case"object":case"embed":Re("load",r);break;case"video":case"audio":for(i=0;i<ci.length;i++)Re(ci[i],r);break;case"source":Re("error",r);break;case"img":case"image":case"link":Re("error",r),Re("load",r);break;case"details":Re("toggle",r);break;case"input":nc(r,l),Re("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},Re("invalid",r);break;case"textarea":ic(r,l),Re("invalid",r)}Ku(n,l),i=null;for(var o in l)if(l.hasOwnProperty(o)){var u=l[o];o==="children"?typeof u=="string"?r.textContent!==u&&(l.suppressHydrationWarning!==!0&&cl(r.textContent,u,e),i=["children",u]):typeof u=="number"&&r.textContent!==""+u&&(l.suppressHydrationWarning!==!0&&cl(r.textContent,u,e),i=["children",""+u]):wi.hasOwnProperty(o)&&u!=null&&o==="onScroll"&&Re("scroll",r)}switch(n){case"input":nl(r),rc(r,l,!0);break;case"textarea":nl(r),lc(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=jl)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=jd(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[en]=t,e[Mi]=r,hp(e,t,!1,!1),t.stateNode=e;e:{switch(o=Xu(n,r),n){case"dialog":Re("cancel",e),Re("close",e),i=r;break;case"iframe":case"object":case"embed":Re("load",e),i=r;break;case"video":case"audio":for(i=0;i<ci.length;i++)Re(ci[i],e);i=r;break;case"source":Re("error",e),i=r;break;case"img":case"image":case"link":Re("error",e),Re("load",e),i=r;break;case"details":Re("toggle",e),i=r;break;case"input":nc(e,r),i=Wu(e,r),Re("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=be({},r,{value:void 0}),Re("invalid",e);break;case"textarea":ic(e,r),i=Gu(e,r),Re("invalid",e);break;default:i=r}Ku(n,i),u=i;for(l in u)if(u.hasOwnProperty(l)){var a=u[l];l==="style"?Vd(e,a):l==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Wd(e,a)):l==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&Si(e,a):typeof a=="number"&&Si(e,""+a):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(wi.hasOwnProperty(l)?a!=null&&l==="onScroll"&&Re("scroll",e):a!=null&&Qa(e,l,a,o))}switch(n){case"input":nl(e),rc(e,r,!1);break;case"textarea":nl(e),lc(e);break;case"option":r.value!=null&&e.setAttribute("value",""+bn(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?Cr(e,!!r.multiple,l,!1):r.defaultValue!=null&&Cr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=jl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return lt(t),null;case 6:if(e&&t.stateNode!=null)_p(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(U(166));if(n=tr(zi.current),tr(nn.current),fl(t)){if(r=t.stateNode,n=t.memoizedProps,r[en]=t,(l=r.nodeValue!==n)&&(e=kt,e!==null))switch(e.tag){case 3:cl(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&cl(r.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[en]=t,t.stateNode=r}return lt(t),null;case 13:if(Ne(Fe),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Me&&Lt!==null&&t.mode&1&&!(t.flags&128))Nh(),Hr(),t.flags|=98560,l=!1;else if(l=fl(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(U(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(U(317));l[en]=t}else Hr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;lt(t),l=!1}else $t!==null&&(Ia($t),$t=null),l=!0;if(!l)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Fe.current&1?Ke===0&&(Ke=3):Is())),t.updateQueue!==null&&(t.flags|=4),lt(t),null);case 4:return Ur(),Ta(e,t),e===null&&Di(t.stateNode.containerInfo),lt(t),null;case 10:return ds(t.type._context),lt(t),null;case 17:return vt(t.type)&&Wl(),lt(t),null;case 19:if(Ne(Fe),l=t.memoizedState,l===null)return lt(t),null;if(r=(t.flags&128)!==0,o=l.rendering,o===null)if(r)ni(l,!1);else{if(Ke!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Yl(e),o!==null){for(t.flags|=128,ni(l,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)l=n,e=r,l.flags&=14680066,o=l.alternate,o===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=o.childLanes,l.lanes=o.lanes,l.child=o.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=o.memoizedProps,l.memoizedState=o.memoizedState,l.updateQueue=o.updateQueue,l.type=o.type,e=o.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Ie(Fe,Fe.current&1|2),t.child}e=e.sibling}l.tail!==null&&Ue()>Wr&&(t.flags|=128,r=!0,ni(l,!1),t.lanes=4194304)}else{if(!r)if(e=Yl(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),ni(l,!0),l.tail===null&&l.tailMode==="hidden"&&!o.alternate&&!Me)return lt(t),null}else 2*Ue()-l.renderingStartTime>Wr&&n!==1073741824&&(t.flags|=128,r=!0,ni(l,!1),t.lanes=4194304);l.isBackwards?(o.sibling=t.child,t.child=o):(n=l.last,n!==null?n.sibling=o:t.child=o,l.last=o)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=Ue(),t.sibling=null,n=Fe.current,Ie(Fe,r?n&1|2:n&1),t):(lt(t),null);case 22:case 23:return Cs(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?xt&1073741824&&(lt(t),t.subtreeFlags&6&&(t.flags|=8192)):lt(t),null;case 24:return null;case 25:return null}throw Error(U(156,t.tag))}function ay(e,t){switch(as(t),t.tag){case 1:return vt(t.type)&&Wl(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ur(),Ne(yt),Ne(ut),gs(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return ms(t),null;case 13:if(Ne(Fe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(U(340));Hr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Ne(Fe),null;case 4:return Ur(),null;case 10:return ds(t.type._context),null;case 22:case 23:return Cs(),null;case 24:return null;default:return null}}var pl=!1,ot=!1,sy=typeof WeakSet=="function"?WeakSet:Set,Z=null;function wr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Be(e,t,r)}else n.current=null}function xa(e,t,n){try{n()}catch(r){Be(e,t,r)}}var Kc=!1;function cy(e,t){if(la=Hl,e=vh(),os(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var o=0,u=-1,a=-1,s=0,c=0,d=e,f=null;t:for(;;){for(var h;d!==n||i!==0&&d.nodeType!==3||(u=o+i),d!==l||r!==0&&d.nodeType!==3||(a=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(h=d.firstChild)!==null;)f=d,d=h;for(;;){if(d===e)break t;if(f===n&&++s===i&&(u=o),f===l&&++c===r&&(a=o),(h=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=h}n=u===-1||a===-1?null:{start:u,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(oa={focusedElem:e,selectionRange:n},Hl=!1,Z=t;Z!==null;)if(t=Z,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Z=e;else for(;Z!==null;){t=Z;try{var p=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(p!==null){var m=p.memoizedProps,L=p.memoizedState,_=t.stateNode,g=_.getSnapshotBeforeUpdate(t.elementType===t.type?m:jt(t.type,m),L);_.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var y=t.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(U(163))}}catch(k){Be(t,t.return,k)}if(e=t.sibling,e!==null){e.return=t.return,Z=e;break}Z=t.return}return p=Kc,Kc=!1,p}function yi(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var l=i.destroy;i.destroy=void 0,l!==void 0&&xa(t,n,l)}i=i.next}while(i!==r)}}function vo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function La(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function mp(e){var t=e.alternate;t!==null&&(e.alternate=null,mp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[en],delete t[Mi],delete t[sa],delete t[Gg],delete t[Qg])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function gp(e){return e.tag===5||e.tag===3||e.tag===4}function Xc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||gp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ka(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=jl));else if(r!==4&&(e=e.child,e!==null))for(ka(e,t,n),e=e.sibling;e!==null;)ka(e,t,n),e=e.sibling}function wa(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(wa(e,t,n),e=e.sibling;e!==null;)wa(e,t,n),e=e.sibling}var Je=null,Wt=!1;function Tn(e,t,n){for(n=n.child;n!==null;)yp(e,t,n),n=n.sibling}function yp(e,t,n){if(tn&&typeof tn.onCommitFiberUnmount=="function")try{tn.onCommitFiberUnmount(co,n)}catch{}switch(n.tag){case 5:ot||wr(n,t);case 6:var r=Je,i=Wt;Je=null,Tn(e,t,n),Je=r,Wt=i,Je!==null&&(Wt?(e=Je,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Je.removeChild(n.stateNode));break;case 18:Je!==null&&(Wt?(e=Je,n=n.stateNode,e.nodeType===8?uu(e.parentNode,n):e.nodeType===1&&uu(e,n),Ri(e)):uu(Je,n.stateNode));break;case 4:r=Je,i=Wt,Je=n.stateNode.containerInfo,Wt=!0,Tn(e,t,n),Je=r,Wt=i;break;case 0:case 11:case 14:case 15:if(!ot&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var l=i,o=l.destroy;l=l.tag,o!==void 0&&(l&2||l&4)&&xa(n,t,o),i=i.next}while(i!==r)}Tn(e,t,n);break;case 1:if(!ot&&(wr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(u){Be(n,t,u)}Tn(e,t,n);break;case 21:Tn(e,t,n);break;case 22:n.mode&1?(ot=(r=ot)||n.memoizedState!==null,Tn(e,t,n),ot=r):Tn(e,t,n);break;default:Tn(e,t,n)}}function Yc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new sy),t.forEach(function(r){var i=vy.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ut(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var l=e,o=t,u=o;e:for(;u!==null;){switch(u.tag){case 5:Je=u.stateNode,Wt=!1;break e;case 3:Je=u.stateNode.containerInfo,Wt=!0;break e;case 4:Je=u.stateNode.containerInfo,Wt=!0;break e}u=u.return}if(Je===null)throw Error(U(160));yp(l,o,i),Je=null,Wt=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(s){Be(i,t,s)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)vp(t,e),t=t.sibling}function vp(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ut(t,e),qt(e),r&4){try{yi(3,e,e.return),vo(3,e)}catch(m){Be(e,e.return,m)}try{yi(5,e,e.return)}catch(m){Be(e,e.return,m)}}break;case 1:Ut(t,e),qt(e),r&512&&n!==null&&wr(n,n.return);break;case 5:if(Ut(t,e),qt(e),r&512&&n!==null&&wr(n,n.return),e.flags&32){var i=e.stateNode;try{Si(i,"")}catch(m){Be(e,e.return,m)}}if(r&4&&(i=e.stateNode,i!=null)){var l=e.memoizedProps,o=n!==null?n.memoizedProps:l,u=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{u==="input"&&l.type==="radio"&&l.name!=null&&Bd(i,l),Xu(u,o);var s=Xu(u,l);for(o=0;o<a.length;o+=2){var c=a[o],d=a[o+1];c==="style"?Vd(i,d):c==="dangerouslySetInnerHTML"?Wd(i,d):c==="children"?Si(i,d):Qa(i,c,d,s)}switch(u){case"input":$u(i,l);break;case"textarea":Ud(i,l);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!l.multiple;var h=l.value;h!=null?Cr(i,!!l.multiple,h,!1):f!==!!l.multiple&&(l.defaultValue!=null?Cr(i,!!l.multiple,l.defaultValue,!0):Cr(i,!!l.multiple,l.multiple?[]:"",!1))}i[Mi]=l}catch(m){Be(e,e.return,m)}}break;case 6:if(Ut(t,e),qt(e),r&4){if(e.stateNode===null)throw Error(U(162));i=e.stateNode,l=e.memoizedProps;try{i.nodeValue=l}catch(m){Be(e,e.return,m)}}break;case 3:if(Ut(t,e),qt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ri(t.containerInfo)}catch(m){Be(e,e.return,m)}break;case 4:Ut(t,e),qt(e);break;case 13:Ut(t,e),qt(e),i=e.child,i.flags&8192&&(l=i.memoizedState!==null,i.stateNode.isHidden=l,!l||i.alternate!==null&&i.alternate.memoizedState!==null||(Ss=Ue())),r&4&&Yc(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(ot=(s=ot)||c,Ut(t,e),ot=s):Ut(t,e),qt(e),r&8192){if(s=e.memoizedState!==null,(e.stateNode.isHidden=s)&&!c&&e.mode&1)for(Z=e,c=e.child;c!==null;){for(d=Z=c;Z!==null;){switch(f=Z,h=f.child,f.tag){case 0:case 11:case 14:case 15:yi(4,f,f.return);break;case 1:wr(f,f.return);var p=f.stateNode;if(typeof p.componentWillUnmount=="function"){r=f,n=f.return;try{t=r,p.props=t.memoizedProps,p.state=t.memoizedState,p.componentWillUnmount()}catch(m){Be(r,n,m)}}break;case 5:wr(f,f.return);break;case 22:if(f.memoizedState!==null){Zc(d);continue}}h!==null?(h.return=f,Z=h):Zc(d)}c=c.sibling}e:for(c=null,d=e;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,s?(l=i.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(u=d.stateNode,a=d.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,u.style.display=$d("display",o))}catch(m){Be(e,e.return,m)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=s?"":d.memoizedProps}catch(m){Be(e,e.return,m)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Ut(t,e),qt(e),r&4&&Yc(e);break;case 21:break;default:Ut(t,e),qt(e)}}function qt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(gp(n)){var r=n;break e}n=n.return}throw Error(U(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Si(i,""),r.flags&=-33);var l=Xc(e);wa(e,l,i);break;case 3:case 4:var o=r.stateNode.containerInfo,u=Xc(e);ka(e,u,o);break;default:throw Error(U(161))}}catch(a){Be(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function fy(e,t,n){Z=e,Ep(e)}function Ep(e,t,n){for(var r=(e.mode&1)!==0;Z!==null;){var i=Z,l=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||pl;if(!o){var u=i.alternate,a=u!==null&&u.memoizedState!==null||ot;u=pl;var s=ot;if(pl=o,(ot=a)&&!s)for(Z=i;Z!==null;)o=Z,a=o.child,o.tag===22&&o.memoizedState!==null?Jc(i):a!==null?(a.return=o,Z=a):Jc(i);for(;l!==null;)Z=l,Ep(l),l=l.sibling;Z=i,pl=u,ot=s}qc(e)}else i.subtreeFlags&8772&&l!==null?(l.return=i,Z=l):qc(e)}}function qc(e){for(;Z!==null;){var t=Z;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ot||vo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ot)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:jt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&Oc(t,l,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Oc(t,o,n)}break;case 5:var u=t.stateNode;if(n===null&&t.flags&4){n=u;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var s=t.alternate;if(s!==null){var c=s.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&Ri(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(U(163))}ot||t.flags&512&&La(t)}catch(f){Be(t,t.return,f)}}if(t===e){Z=null;break}if(n=t.sibling,n!==null){n.return=t.return,Z=n;break}Z=t.return}}function Zc(e){for(;Z!==null;){var t=Z;if(t===e){Z=null;break}var n=t.sibling;if(n!==null){n.return=t.return,Z=n;break}Z=t.return}}function Jc(e){for(;Z!==null;){var t=Z;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{vo(4,t)}catch(a){Be(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(a){Be(t,i,a)}}var l=t.return;try{La(t)}catch(a){Be(t,l,a)}break;case 5:var o=t.return;try{La(t)}catch(a){Be(t,o,a)}}}catch(a){Be(t,t.return,a)}if(t===e){Z=null;break}var u=t.sibling;if(u!==null){u.return=t.return,Z=u;break}Z=t.return}}var dy=Math.ceil,Jl=yn.ReactCurrentDispatcher,ks=yn.ReactCurrentOwner,Ot=yn.ReactCurrentBatchConfig,ye=0,Ze=null,$e=null,tt=0,xt=0,Sr=jn(0),Ke=0,Ui=null,ar=0,Eo=0,ws=0,vi=null,mt=null,Ss=0,Wr=1/0,un=null,eo=!1,Sa=null,Mn=null,_l=!1,An=null,to=0,Ei=0,Aa=null,Cl=-1,Il=0;function dt(){return ye&6?Ue():Cl!==-1?Cl:Cl=Ue()}function Fn(e){return e.mode&1?ye&2&&tt!==0?tt&-tt:Xg.transition!==null?(Il===0&&(Il=rh()),Il):(e=ke,e!==0||(e=window.event,e=e===void 0?16:ch(e.type)),e):1}function Gt(e,t,n,r){if(50<Ei)throw Ei=0,Aa=null,Error(U(185));Gi(e,n,r),(!(ye&2)||e!==Ze)&&(e===Ze&&(!(ye&2)&&(Eo|=n),Ke===4&&wn(e,tt)),Et(e,r),n===1&&ye===0&&!(t.mode&1)&&(Wr=Ue()+500,mo&&Wn()))}function Et(e,t){var n=e.callbackNode;Xm(e,t);var r=bl(e,e===Ze?tt:0);if(r===0)n!==null&&ac(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&ac(n),t===1)e.tag===0?Kg(ef.bind(null,e)):Ih(ef.bind(null,e)),$g(function(){!(ye&6)&&Wn()}),n=null;else{switch(ih(r)){case 1:n=Za;break;case 4:n=th;break;case 16:n=zl;break;case 536870912:n=nh;break;default:n=zl}n=Cp(n,Tp.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Tp(e,t){if(Cl=-1,Il=0,ye&6)throw Error(U(327));var n=e.callbackNode;if(Dr()&&e.callbackNode!==n)return null;var r=bl(e,e===Ze?tt:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=no(e,r);else{t=r;var i=ye;ye|=2;var l=Lp();(Ze!==e||tt!==t)&&(un=null,Wr=Ue()+500,rr(e,t));do try{_y();break}catch(u){xp(e,u)}while(1);fs(),Jl.current=l,ye=i,$e!==null?t=0:(Ze=null,tt=0,t=Ke)}if(t!==0){if(t===2&&(i=ea(e),i!==0&&(r=i,t=Ca(e,i))),t===1)throw n=Ui,rr(e,0),wn(e,r),Et(e,Ue()),n;if(t===6)wn(e,r);else{if(i=e.current.alternate,!(r&30)&&!hy(i)&&(t=no(e,r),t===2&&(l=ea(e),l!==0&&(r=l,t=Ca(e,l))),t===1))throw n=Ui,rr(e,0),wn(e,r),Et(e,Ue()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(U(345));case 2:Xn(e,mt,un);break;case 3:if(wn(e,r),(r&130023424)===r&&(t=Ss+500-Ue(),10<t)){if(bl(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){dt(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=aa(Xn.bind(null,e,mt,un),t);break}Xn(e,mt,un);break;case 4:if(wn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-Vt(r);l=1<<o,o=t[o],o>i&&(i=o),r&=~l}if(r=i,r=Ue()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*dy(r/1960))-r,10<r){e.timeoutHandle=aa(Xn.bind(null,e,mt,un),r);break}Xn(e,mt,un);break;case 5:Xn(e,mt,un);break;default:throw Error(U(329))}}}return Et(e,Ue()),e.callbackNode===n?Tp.bind(null,e):null}function Ca(e,t){var n=vi;return e.current.memoizedState.isDehydrated&&(rr(e,t).flags|=256),e=no(e,t),e!==2&&(t=mt,mt=n,t!==null&&Ia(t)),e}function Ia(e){mt===null?mt=e:mt.push.apply(mt,e)}function hy(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],l=i.getSnapshot;i=i.value;try{if(!Kt(l(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function wn(e,t){for(t&=~ws,t&=~Eo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Vt(t),r=1<<n;e[n]=-1,t&=~r}}function ef(e){if(ye&6)throw Error(U(327));Dr();var t=bl(e,0);if(!(t&1))return Et(e,Ue()),null;var n=no(e,t);if(e.tag!==0&&n===2){var r=ea(e);r!==0&&(t=r,n=Ca(e,r))}if(n===1)throw n=Ui,rr(e,0),wn(e,t),Et(e,Ue()),n;if(n===6)throw Error(U(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Xn(e,mt,un),Et(e,Ue()),null}function As(e,t){var n=ye;ye|=1;try{return e(t)}finally{ye=n,ye===0&&(Wr=Ue()+500,mo&&Wn())}}function sr(e){An!==null&&An.tag===0&&!(ye&6)&&Dr();var t=ye;ye|=1;var n=Ot.transition,r=ke;try{if(Ot.transition=null,ke=1,e)return e()}finally{ke=r,Ot.transition=n,ye=t,!(ye&6)&&Wn()}}function Cs(){xt=Sr.current,Ne(Sr)}function rr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Wg(n)),$e!==null)for(n=$e.return;n!==null;){var r=n;switch(as(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Wl();break;case 3:Ur(),Ne(yt),Ne(ut),gs();break;case 5:ms(r);break;case 4:Ur();break;case 13:Ne(Fe);break;case 19:Ne(Fe);break;case 10:ds(r.type._context);break;case 22:case 23:Cs()}n=n.return}if(Ze=e,$e=e=zn(e.current,null),tt=xt=t,Ke=0,Ui=null,ws=Eo=ar=0,mt=vi=null,er!==null){for(t=0;t<er.length;t++)if(n=er[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,l=n.pending;if(l!==null){var o=l.next;l.next=i,r.next=o}n.pending=r}er=null}return e}function xp(e,t){do{var n=$e;try{if(fs(),wl.current=Zl,ql){for(var r=ze.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ql=!1}if(ur=0,qe=Qe=ze=null,gi=!1,bi=0,ks.current=null,n===null||n.return===null){Ke=1,Ui=t,$e=null;break}e:{var l=e,o=n.return,u=n,a=t;if(t=tt,u.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var s=a,c=u,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var h=Uc(o);if(h!==null){h.flags&=-257,jc(h,o,u,l,t),h.mode&1&&Bc(l,s,t),t=h,a=s;var p=t.updateQueue;if(p===null){var m=new Set;m.add(a),t.updateQueue=m}else p.add(a);break e}else{if(!(t&1)){Bc(l,s,t),Is();break e}a=Error(U(426))}}else if(Me&&u.mode&1){var L=Uc(o);if(L!==null){!(L.flags&65536)&&(L.flags|=256),jc(L,o,u,l,t),ss(jr(a,u));break e}}l=a=jr(a,u),Ke!==4&&(Ke=2),vi===null?vi=[l]:vi.push(l),l=o;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var _=lp(l,a,t);Dc(l,_);break e;case 1:u=a;var g=l.type,y=l.stateNode;if(!(l.flags&128)&&(typeof g.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(Mn===null||!Mn.has(y)))){l.flags|=65536,t&=-t,l.lanes|=t;var k=op(l,u,t);Dc(l,k);break e}}l=l.return}while(l!==null)}wp(n)}catch(P){t=P,$e===n&&n!==null&&($e=n=n.return);continue}break}while(1)}function Lp(){var e=Jl.current;return Jl.current=Zl,e===null?Zl:e}function Is(){(Ke===0||Ke===3||Ke===2)&&(Ke=4),Ze===null||!(ar&268435455)&&!(Eo&268435455)||wn(Ze,tt)}function no(e,t){var n=ye;ye|=2;var r=Lp();(Ze!==e||tt!==t)&&(un=null,rr(e,t));do try{py();break}catch(i){xp(e,i)}while(1);if(fs(),ye=n,Jl.current=r,$e!==null)throw Error(U(261));return Ze=null,tt=0,Ke}function py(){for(;$e!==null;)kp($e)}function _y(){for(;$e!==null&&!Bm();)kp($e)}function kp(e){var t=Ap(e.alternate,e,xt);e.memoizedProps=e.pendingProps,t===null?wp(e):$e=t,ks.current=null}function wp(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=ay(n,t),n!==null){n.flags&=32767,$e=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ke=6,$e=null;return}}else if(n=uy(n,t,xt),n!==null){$e=n;return}if(t=t.sibling,t!==null){$e=t;return}$e=t=e}while(t!==null);Ke===0&&(Ke=5)}function Xn(e,t,n){var r=ke,i=Ot.transition;try{Ot.transition=null,ke=1,my(e,t,n,r)}finally{Ot.transition=i,ke=r}return null}function my(e,t,n,r){do Dr();while(An!==null);if(ye&6)throw Error(U(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(U(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(Ym(e,l),e===Ze&&($e=Ze=null,tt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||_l||(_l=!0,Cp(zl,function(){return Dr(),null})),l=(n.flags&15990)!==0,n.subtreeFlags&15990||l){l=Ot.transition,Ot.transition=null;var o=ke;ke=1;var u=ye;ye|=4,ks.current=null,cy(e,n),vp(n,e),Fg(oa),Hl=!!la,oa=la=null,e.current=n,fy(n),Um(),ye=u,ke=o,Ot.transition=l}else e.current=n;if(_l&&(_l=!1,An=e,to=i),l=e.pendingLanes,l===0&&(Mn=null),$m(n.stateNode),Et(e,Ue()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(eo)throw eo=!1,e=Sa,Sa=null,e;return to&1&&e.tag!==0&&Dr(),l=e.pendingLanes,l&1?e===Aa?Ei++:(Ei=0,Aa=e):Ei=0,Wn(),null}function Dr(){if(An!==null){var e=ih(to),t=Ot.transition,n=ke;try{if(Ot.transition=null,ke=16>e?16:e,An===null)var r=!1;else{if(e=An,An=null,to=0,ye&6)throw Error(U(331));var i=ye;for(ye|=4,Z=e.current;Z!==null;){var l=Z,o=l.child;if(Z.flags&16){var u=l.deletions;if(u!==null){for(var a=0;a<u.length;a++){var s=u[a];for(Z=s;Z!==null;){var c=Z;switch(c.tag){case 0:case 11:case 15:yi(8,c,l)}var d=c.child;if(d!==null)d.return=c,Z=d;else for(;Z!==null;){c=Z;var f=c.sibling,h=c.return;if(mp(c),c===s){Z=null;break}if(f!==null){f.return=h,Z=f;break}Z=h}}}var p=l.alternate;if(p!==null){var m=p.child;if(m!==null){p.child=null;do{var L=m.sibling;m.sibling=null,m=L}while(m!==null)}}Z=l}}if(l.subtreeFlags&2064&&o!==null)o.return=l,Z=o;else e:for(;Z!==null;){if(l=Z,l.flags&2048)switch(l.tag){case 0:case 11:case 15:yi(9,l,l.return)}var _=l.sibling;if(_!==null){_.return=l.return,Z=_;break e}Z=l.return}}var g=e.current;for(Z=g;Z!==null;){o=Z;var y=o.child;if(o.subtreeFlags&2064&&y!==null)y.return=o,Z=y;else e:for(o=g;Z!==null;){if(u=Z,u.flags&2048)try{switch(u.tag){case 0:case 11:case 15:vo(9,u)}}catch(P){Be(u,u.return,P)}if(u===o){Z=null;break e}var k=u.sibling;if(k!==null){k.return=u.return,Z=k;break e}Z=u.return}}if(ye=i,Wn(),tn&&typeof tn.onPostCommitFiberRoot=="function")try{tn.onPostCommitFiberRoot(co,e)}catch{}r=!0}return r}finally{ke=n,Ot.transition=t}}return!1}function tf(e,t,n){t=jr(n,t),t=lp(e,t,1),e=On(e,t,1),t=dt(),e!==null&&(Gi(e,1,t),Et(e,t))}function Be(e,t,n){if(e.tag===3)tf(e,e,n);else for(;t!==null;){if(t.tag===3){tf(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Mn===null||!Mn.has(r))){e=jr(n,e),e=op(t,e,1),t=On(t,e,1),e=dt(),t!==null&&(Gi(t,1,e),Et(t,e));break}}t=t.return}}function gy(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=dt(),e.pingedLanes|=e.suspendedLanes&n,Ze===e&&(tt&n)===n&&(Ke===4||Ke===3&&(tt&130023424)===tt&&500>Ue()-Ss?rr(e,0):ws|=n),Et(e,t)}function Sp(e,t){t===0&&(e.mode&1?(t=ll,ll<<=1,!(ll&130023424)&&(ll=4194304)):t=1);var n=dt();e=mn(e,t),e!==null&&(Gi(e,t,n),Et(e,n))}function yy(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Sp(e,n)}function vy(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(U(314))}r!==null&&r.delete(t),Sp(e,n)}var Ap;Ap=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||yt.current)gt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return gt=!1,oy(e,t,n);gt=!!(e.flags&131072)}else gt=!1,Me&&t.flags&1048576&&Rh(t,Gl,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Al(e,t),e=t.pendingProps;var i=br(t,ut.current);Nr(t,n),i=vs(null,t,r,e,i,n);var l=Es();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,vt(r)?(l=!0,$l(t)):l=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,ps(t),i.updater=go,t.stateNode=i,i._reactInternals=t,_a(t,r,e,n),t=ya(null,t,r,!0,l,n)):(t.tag=0,Me&&l&&us(t),ct(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Al(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Ty(r),e=jt(r,e),i){case 0:t=ga(null,t,r,e,n);break e;case 1:t=Vc(null,t,r,e,n);break e;case 11:t=Wc(null,t,r,e,n);break e;case 14:t=$c(null,t,r,jt(r.type,e),n);break e}throw Error(U(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:jt(r,i),ga(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:jt(r,i),Vc(e,t,r,i,n);case 3:e:{if(cp(t),e===null)throw Error(U(387));r=t.pendingProps,l=t.memoizedState,i=l.element,Oh(e,t),Xl(t,r,null,n);var o=t.memoizedState;if(r=o.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){i=jr(Error(U(423)),t),t=Gc(e,t,r,n,i);break e}else if(r!==i){i=jr(Error(U(424)),t),t=Gc(e,t,r,n,i);break e}else for(Lt=Dn(t.stateNode.containerInfo.firstChild),kt=t,Me=!0,$t=null,n=bh(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Hr(),r===i){t=gn(e,t,n);break e}ct(e,t,r,n)}t=t.child}return t;case 5:return Hh(t),e===null&&da(t),r=t.type,i=t.pendingProps,l=e!==null?e.memoizedProps:null,o=i.children,ua(r,i)?o=null:l!==null&&ua(r,l)&&(t.flags|=32),sp(e,t),ct(e,t,o,n),t.child;case 6:return e===null&&da(t),null;case 13:return fp(e,t,n);case 4:return _s(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Br(t,null,r,n):ct(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:jt(r,i),Wc(e,t,r,i,n);case 7:return ct(e,t,t.pendingProps,n),t.child;case 8:return ct(e,t,t.pendingProps.children,n),t.child;case 12:return ct(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,l=t.memoizedProps,o=i.value,Ie(Ql,r._currentValue),r._currentValue=o,l!==null)if(Kt(l.value,o)){if(l.children===i.children&&!yt.current){t=gn(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var u=l.dependencies;if(u!==null){o=l.child;for(var a=u.firstContext;a!==null;){if(a.context===r){if(l.tag===1){a=dn(-1,n&-n),a.tag=2;var s=l.updateQueue;if(s!==null){s=s.shared;var c=s.pending;c===null?a.next=a:(a.next=c.next,c.next=a),s.pending=a}}l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),ha(l.return,n,t),u.lanes|=n;break}a=a.next}}else if(l.tag===10)o=l.type===t.type?null:l.child;else if(l.tag===18){if(o=l.return,o===null)throw Error(U(341));o.lanes|=n,u=o.alternate,u!==null&&(u.lanes|=n),ha(o,n,t),o=l.sibling}else o=l.child;if(o!==null)o.return=l;else for(o=l;o!==null;){if(o===t){o=null;break}if(l=o.sibling,l!==null){l.return=o.return,o=l;break}o=o.return}l=o}ct(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Nr(t,n),i=Mt(i),r=r(i),t.flags|=1,ct(e,t,r,n),t.child;case 14:return r=t.type,i=jt(r,t.pendingProps),i=jt(r.type,i),$c(e,t,r,i,n);case 15:return up(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:jt(r,i),Al(e,t),t.tag=1,vt(r)?(e=!0,$l(t)):e=!1,Nr(t,n),Fh(t,r,i),_a(t,r,i,n),ya(null,t,r,!0,e,n);case 19:return dp(e,t,n);case 22:return ap(e,t,n)}throw Error(U(156,t.tag))};function Cp(e,t){return eh(e,t)}function Ey(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Dt(e,t,n,r){return new Ey(e,t,n,r)}function Rs(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ty(e){if(typeof e=="function")return Rs(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Xa)return 11;if(e===Ya)return 14}return 2}function zn(e,t){var n=e.alternate;return n===null?(n=Dt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Rl(e,t,n,r,i,l){var o=2;if(r=e,typeof e=="function")Rs(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case mr:return ir(n.children,i,l,t);case Ka:o=8,i|=8;break;case Hu:return e=Dt(12,n,t,i|2),e.elementType=Hu,e.lanes=l,e;case Bu:return e=Dt(13,n,t,i),e.elementType=Bu,e.lanes=l,e;case Uu:return e=Dt(19,n,t,i),e.elementType=Uu,e.lanes=l,e;case zd:return To(n,i,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Md:o=10;break e;case Fd:o=9;break e;case Xa:o=11;break e;case Ya:o=14;break e;case xn:o=16,r=null;break e}throw Error(U(130,e==null?e:typeof e,""))}return t=Dt(o,n,t,i),t.elementType=e,t.type=r,t.lanes=l,t}function ir(e,t,n,r){return e=Dt(7,e,r,t),e.lanes=n,e}function To(e,t,n,r){return e=Dt(22,e,r,t),e.elementType=zd,e.lanes=n,e.stateNode={isHidden:!1},e}function _u(e,t,n){return e=Dt(6,e,null,t),e.lanes=n,e}function mu(e,t,n){return t=Dt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function xy(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Yo(0),this.expirationTimes=Yo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Yo(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Ps(e,t,n,r,i,l,o,u,a){return e=new xy(e,t,n,u,a),t===1?(t=1,l===!0&&(t|=8)):t=0,l=Dt(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ps(l),e}function Ly(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:_r,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Ip(e){if(!e)return Hn;e=e._reactInternals;e:{if(fr(e)!==e||e.tag!==1)throw Error(U(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(vt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(U(171))}if(e.tag===1){var n=e.type;if(vt(n))return Ch(e,n,t)}return t}function Rp(e,t,n,r,i,l,o,u,a){return e=Ps(n,r,!0,e,i,l,o,u,a),e.context=Ip(null),n=e.current,r=dt(),i=Fn(n),l=dn(r,i),l.callback=t??null,On(n,l,i),e.current.lanes=i,Gi(e,i,r),Et(e,r),e}function xo(e,t,n,r){var i=t.current,l=dt(),o=Fn(i);return n=Ip(n),t.context===null?t.context=n:t.pendingContext=n,t=dn(l,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=On(i,t,o),e!==null&&(Gt(e,i,o,l),kl(e,i,o)),o}function ro(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function nf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ns(e,t){nf(e,t),(e=e.alternate)&&nf(e,t)}function ky(){return null}var Pp=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ds(e){this._internalRoot=e}Lo.prototype.render=Ds.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(U(409));xo(e,t,null,null)};Lo.prototype.unmount=Ds.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;sr(function(){xo(null,e,null,null)}),t[_n]=null}};function Lo(e){this._internalRoot=e}Lo.prototype.unstable_scheduleHydration=function(e){if(e){var t=uh();e={blockedOn:null,target:e,priority:t};for(var n=0;n<kn.length&&t!==0&&t<kn[n].priority;n++);kn.splice(n,0,e),n===0&&sh(e)}};function Os(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ko(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function rf(){}function wy(e,t,n,r,i){if(i){if(typeof r=="function"){var l=r;r=function(){var s=ro(o);l.call(s)}}var o=Rp(t,r,e,0,null,!1,!1,"",rf);return e._reactRootContainer=o,e[_n]=o.current,Di(e.nodeType===8?e.parentNode:e),sr(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var u=r;r=function(){var s=ro(a);u.call(s)}}var a=Ps(e,0,!1,null,null,!1,!1,"",rf);return e._reactRootContainer=a,e[_n]=a.current,Di(e.nodeType===8?e.parentNode:e),sr(function(){xo(t,a,n,r)}),a}function wo(e,t,n,r,i){var l=n._reactRootContainer;if(l){var o=l;if(typeof i=="function"){var u=i;i=function(){var a=ro(o);u.call(a)}}xo(t,o,e,i)}else o=wy(n,t,e,i,r);return ro(o)}lh=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=si(t.pendingLanes);n!==0&&(Ja(t,n|1),Et(t,Ue()),!(ye&6)&&(Wr=Ue()+500,Wn()))}break;case 13:sr(function(){var r=mn(e,1);if(r!==null){var i=dt();Gt(r,e,1,i)}}),Ns(e,1)}};es=function(e){if(e.tag===13){var t=mn(e,134217728);if(t!==null){var n=dt();Gt(t,e,134217728,n)}Ns(e,134217728)}};oh=function(e){if(e.tag===13){var t=Fn(e),n=mn(e,t);if(n!==null){var r=dt();Gt(n,e,t,r)}Ns(e,t)}};uh=function(){return ke};ah=function(e,t){var n=ke;try{return ke=e,t()}finally{ke=n}};qu=function(e,t,n){switch(t){case"input":if($u(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=_o(r);if(!i)throw Error(U(90));Hd(r),$u(r,i)}}}break;case"textarea":Ud(e,n);break;case"select":t=n.value,t!=null&&Cr(e,!!n.multiple,t,!1)}};Kd=As;Xd=sr;var Sy={usingClientEntryPoint:!1,Events:[Ki,Er,_o,Gd,Qd,As]},ri={findFiberByHostInstance:Jn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Ay={bundleType:ri.bundleType,version:ri.version,rendererPackageName:ri.rendererPackageName,rendererConfig:ri.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:yn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Zd(e),e===null?null:e.stateNode},findFiberByHostInstance:ri.findFiberByHostInstance||ky,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ml=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ml.isDisabled&&ml.supportsFiber)try{co=ml.inject(Ay),tn=ml}catch{}}At.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Sy;At.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Os(t))throw Error(U(200));return Ly(e,t,null,n)};At.createRoot=function(e,t){if(!Os(e))throw Error(U(299));var n=!1,r="",i=Pp;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Ps(e,1,!1,null,null,n,!1,r,i),e[_n]=t.current,Di(e.nodeType===8?e.parentNode:e),new Ds(t)};At.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(U(188)):(e=Object.keys(e).join(","),Error(U(268,e)));return e=Zd(t),e=e===null?null:e.stateNode,e};At.flushSync=function(e){return sr(e)};At.hydrate=function(e,t,n){if(!ko(t))throw Error(U(200));return wo(null,e,t,!0,n)};At.hydrateRoot=function(e,t,n){if(!Os(e))throw Error(U(405));var r=n!=null&&n.hydratedSources||null,i=!1,l="",o=Pp;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=Rp(t,null,e,1,n??null,i,!1,l,o),e[_n]=t.current,Di(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Lo(t)};At.render=function(e,t,n){if(!ko(t))throw Error(U(200));return wo(null,e,t,!1,n)};At.unmountComponentAtNode=function(e){if(!ko(e))throw Error(U(40));return e._reactRootContainer?(sr(function(){wo(null,null,e,!1,function(){e._reactRootContainer=null,e[_n]=null})}),!0):!1};At.unstable_batchedUpdates=As;At.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ko(n))throw Error(U(200));if(e==null||e._reactInternals===void 0)throw Error(U(38));return wo(e,t,n,!1,r)};At.version="18.2.0-next-9e3b772b8-20220608";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=At})(km);var lf=Fu;Mu.createRoot=lf.createRoot,Mu.hydrateRoot=lf.hydrateRoot;/**
 * @remix-run/router v1.2.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Se(){return Se=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Se.apply(this,arguments)}var We;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(We||(We={}));const of="popstate";function Cy(e){e===void 0&&(e={});function t(r,i){let{pathname:l,search:o,hash:u}=r.location;return ji("",{pathname:l,search:o,hash:u},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:rn(i)}return Ry(t,n,null,e)}function he(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Iy(){return Math.random().toString(36).substr(2,8)}function uf(e){return{usr:e.state,key:e.key}}function ji(e,t,n,r){return n===void 0&&(n=null),Se({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?vn(t):t,{state:n,key:t&&t.key||r||Iy()})}function rn(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function vn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Wi(e){let t=typeof window<"u"&&typeof window.location<"u"&&window.location.origin!=="null"?window.location.origin:window.location.href,n=typeof e=="string"?e:rn(e);return he(t,"No window.location.(origin|href) available to create URL for href: "+n),new URL(n,t)}function Ry(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:l=!1}=r,o=i.history,u=We.Pop,a=null;function s(){u=We.Pop,a&&a({action:u,location:f.location})}function c(h,p){u=We.Push;let m=ji(f.location,h,p);n&&n(m,h);let L=uf(m),_=f.createHref(m);try{o.pushState(L,"",_)}catch{i.location.assign(_)}l&&a&&a({action:u,location:f.location})}function d(h,p){u=We.Replace;let m=ji(f.location,h,p);n&&n(m,h);let L=uf(m),_=f.createHref(m);o.replaceState(L,"",_),l&&a&&a({action:u,location:f.location})}let f={get action(){return u},get location(){return e(i,o)},listen(h){if(a)throw new Error("A history only accepts one active listener");return i.addEventListener(of,s),a=h,()=>{i.removeEventListener(of,s),a=null}},createHref(h){return t(i,h)},encodeLocation(h){let p=Wi(typeof h=="string"?h:rn(h));return{pathname:p.pathname,search:p.search,hash:p.hash}},push:c,replace:d,go(h){return o.go(h)}};return f}var et;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(et||(et={}));function Py(e){return e.index===!0}function Np(e,t,n){return t===void 0&&(t=[]),n===void 0&&(n=new Set),e.map((r,i)=>{let l=[...t,i],o=typeof r.id=="string"?r.id:l.join("-");return he(r.index!==!0||!r.children,"Cannot specify children on an index route"),he(!n.has(o),'Found a route id collision on id "'+o+`".  Route id's must be globally unique within Data Router usages`),n.add(o),Py(r)?Se({},r,{id:o}):Se({},r,{id:o,children:r.children?Np(r.children,l,n):void 0})})}function fi(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?vn(t):t,i=Mp(r.pathname||"/",n);if(i==null)return null;let l=Dp(e);Ny(l);let o=null;for(let u=0;o==null&&u<l.length;++u)o=Uy(l[u],$y(i));return o}function Dp(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(l,o,u)=>{let a={relativePath:u===void 0?l.path||"":u,caseSensitive:l.caseSensitive===!0,childrenIndex:o,route:l};a.relativePath.startsWith("/")&&(he(a.relativePath.startsWith(r),'Absolute route path "'+a.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),a.relativePath=a.relativePath.slice(r.length));let s=hn([r,a.relativePath]),c=n.concat(a);l.children&&l.children.length>0&&(he(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+s+'".')),Dp(l.children,t,c,s)),!(l.path==null&&!l.index)&&t.push({path:s,score:Hy(s,l.index),routesMeta:c})};return e.forEach((l,o)=>{var u;if(l.path===""||!((u=l.path)!=null&&u.includes("?")))i(l,o);else for(let a of Op(l.path))i(l,o,a)}),t}function Op(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),l=n.replace(/\?$/,"");if(r.length===0)return i?[l,""]:[l];let o=Op(r.join("/")),u=[];return u.push(...o.map(a=>a===""?l:[l,a].join("/"))),i&&u.push(...o),u.map(a=>e.startsWith("/")&&a===""?"/":a)}function Ny(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:By(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Dy=/^:\w+$/,Oy=3,My=2,Fy=1,zy=10,by=-2,af=e=>e==="*";function Hy(e,t){let n=e.split("/"),r=n.length;return n.some(af)&&(r+=by),t&&(r+=My),n.filter(i=>!af(i)).reduce((i,l)=>i+(Dy.test(l)?Oy:l===""?Fy:zy),r)}function By(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function Uy(e,t){let{routesMeta:n}=e,r={},i="/",l=[];for(let o=0;o<n.length;++o){let u=n[o],a=o===n.length-1,s=i==="/"?t:t.slice(i.length)||"/",c=jy({path:u.relativePath,caseSensitive:u.caseSensitive,end:a},s);if(!c)return null;Object.assign(r,c.params);let d=u.route;l.push({params:r,pathname:hn([i,c.pathname]),pathnameBase:Ky(hn([i,c.pathnameBase])),route:d}),c.pathnameBase!=="/"&&(i=hn([i,c.pathnameBase]))}return l}function jy(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Wy(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let l=i[0],o=l.replace(/(.)\/+$/,"$1"),u=i.slice(1);return{params:r.reduce((s,c,d)=>{if(c==="*"){let f=u[d]||"";o=l.slice(0,l.length-f.length).replace(/(.)\/+$/,"$1")}return s[c]=Vy(u[d]||"",c),s},{}),pathname:l,pathnameBase:o,pattern:e}}function Wy(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Ms(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,u)=>(r.push(u),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function $y(e){try{return decodeURI(e)}catch(t){return Ms(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Vy(e,t){try{return decodeURIComponent(e)}catch(n){return Ms(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function Mp(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function Ms(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Gy(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?vn(e):e;return{pathname:n?n.startsWith("/")?n:Qy(n,t):t,search:Xy(r),hash:Yy(i)}}function Qy(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function gu(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function So(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Fs(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=vn(e):(i=Se({},e),he(!i.pathname||!i.pathname.includes("?"),gu("?","pathname","search",i)),he(!i.pathname||!i.pathname.includes("#"),gu("#","pathname","hash",i)),he(!i.search||!i.search.includes("#"),gu("#","search","hash",i)));let l=e===""||i.pathname==="",o=l?"/":i.pathname,u;if(r||o==null)u=n;else{let d=t.length-1;if(o.startsWith("..")){let f=o.split("/");for(;f[0]==="..";)f.shift(),d-=1;i.pathname=f.join("/")}u=d>=0?t[d]:"/"}let a=Gy(i,u),s=o&&o!=="/"&&o.endsWith("/"),c=(l||o===".")&&n.endsWith("/");return!a.pathname.endsWith("/")&&(s||c)&&(a.pathname+="/"),a}const hn=e=>e.join("/").replace(/\/\/+/g,"/"),Ky=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Xy=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Yy=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;class sf extends Error{}class qy{constructor(t){this.pendingKeys=new Set,this.subscriber=void 0,he(t&&typeof t=="object"&&!Array.isArray(t),"defer() only accepts plain objects");let n;this.abortPromise=new Promise((i,l)=>n=l),this.controller=new AbortController;let r=()=>n(new sf("Deferred data aborted"));this.unlistenAbortSignal=()=>this.controller.signal.removeEventListener("abort",r),this.controller.signal.addEventListener("abort",r),this.data=Object.entries(t).reduce((i,l)=>{let[o,u]=l;return Object.assign(i,{[o]:this.trackPromise(o,u)})},{})}trackPromise(t,n){if(!(n instanceof Promise))return n;this.pendingKeys.add(t);let r=Promise.race([n,this.abortPromise]).then(i=>this.onSettle(r,t,null,i),i=>this.onSettle(r,t,i));return r.catch(()=>{}),Object.defineProperty(r,"_tracked",{get:()=>!0}),r}onSettle(t,n,r,i){if(this.controller.signal.aborted&&r instanceof sf)return this.unlistenAbortSignal(),Object.defineProperty(t,"_error",{get:()=>r}),Promise.reject(r);this.pendingKeys.delete(n),this.done&&this.unlistenAbortSignal();const l=this.subscriber;return r?(Object.defineProperty(t,"_error",{get:()=>r}),l&&l(!1),Promise.reject(r)):(Object.defineProperty(t,"_data",{get:()=>i}),l&&l(!1),i)}subscribe(t){this.subscriber=t}cancel(){this.controller.abort(),this.pendingKeys.forEach((n,r)=>this.pendingKeys.delete(r));let t=this.subscriber;t&&t(!0)}async resolveData(t){let n=!1;if(!this.done){let r=()=>this.cancel();t.addEventListener("abort",r),n=await new Promise(i=>{this.subscribe(l=>{t.removeEventListener("abort",r),(l||this.done)&&i(l)})})}return n}get done(){return this.pendingKeys.size===0}get unwrappedData(){return he(this.data!==null&&this.done,"Can only unwrap data on initialized and settled deferreds"),Object.entries(this.data).reduce((t,n)=>{let[r,i]=n;return Object.assign(t,{[r]:Jy(i)})},{})}}function Zy(e){return e instanceof Promise&&e._tracked===!0}function Jy(e){if(!Zy(e))return e;if(e._error)throw e._error;return e._data}class Ao{constructor(t,n,r,i){i===void 0&&(i=!1),this.status=t,this.statusText=n||"",this.internal=i,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function Fp(e){return e instanceof Ao}const zp=["post","put","patch","delete"],e1=new Set(zp),t1=["get",...zp],n1=new Set(t1),r1=new Set([301,302,303,307,308]),i1=new Set([307,308]),yu={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},l1={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},o1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",u1=!o1;function a1(e){he(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let t=Np(e.routes),n=null,r=new Set,i=null,l=null,o=null,u=e.hydrationData!=null,a=fi(t,e.history.location,e.basename),s=null;if(a==null){let O=Yn(404,{pathname:e.history.location.pathname}),{matches:M,route:b}=_f(t);a=M,s={[b.id]:O}}let c=!a.some(O=>O.route.loader)||e.hydrationData!=null,d,f={historyAction:e.history.action,location:e.history.location,matches:a,initialized:c,navigation:yu,restoreScrollPosition:e.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||s,fetchers:new Map},h=We.Pop,p=!1,m,L=!1,_=!1,g=[],y=[],k=new Map,P=0,x=-1,N=new Map,H=new Set,X=new Map,Y=new Map;function V(){return n=e.history.listen(O=>{let{action:M,location:b}=O;return z(M,b)}),f.initialized||z(We.Pop,f.location),d}function ee(){n&&n(),r.clear(),m&&m.abort(),f.fetchers.forEach((O,M)=>G(M))}function re(O){return r.add(O),()=>r.delete(O)}function ue(O){f=Se({},f,O),r.forEach(M=>M(f))}function Ce(O,M){var b;let K=f.actionData!=null&&f.navigation.formMethod!=null&&qn(f.navigation.formMethod)&&f.navigation.state==="loading"&&((b=O.state)==null?void 0:b._isRedirect)!==!0,$;M.actionData?Object.keys(M.actionData).length>0?$=M.actionData:$=null:K?$=f.actionData:$=null;let se=M.loaderData?pf(f.loaderData,M.loaderData,M.matches||[],M.errors):f.loaderData;ue(Se({},M,{actionData:$,loaderData:se,historyAction:h,location:O,initialized:!0,navigation:yu,revalidation:"idle",restoreScrollPosition:f.navigation.formData?!1:rt(O,M.matches||f.matches),preventScrollReset:p})),L||h===We.Pop||(h===We.Push?e.history.push(O,O.state):h===We.Replace&&e.history.replace(O,O.state)),h=We.Pop,p=!1,L=!1,_=!1,g=[],y=[]}async function R(O,M){if(typeof O=="number"){e.history.go(O);return}let{path:b,submission:K,error:$}=cf(O,M),se=ji(f.location,b,M&&M.state);se=Se({},se,e.history.encodeLocation(se));let ce=M&&M.replace!=null?M.replace:void 0,_e=We.Push;ce===!0?_e=We.Replace:ce===!1||K!=null&&qn(K.formMethod)&&K.formAction===f.location.pathname+f.location.search&&(_e=We.Replace);let ae=M&&"preventScrollReset"in M?M.preventScrollReset===!0:void 0;return await z(_e,se,{submission:K,pendingError:$,preventScrollReset:ae,replace:M&&M.replace})}function De(){if(C(),ue({revalidation:"loading"}),f.navigation.state!=="submitting"){if(f.navigation.state==="idle"){z(f.historyAction,f.location,{startUninterruptedRevalidation:!0});return}z(h||f.historyAction,f.navigation.location,{overrideNavigation:f.navigation})}}async function z(O,M,b){m&&m.abort(),m=null,h=O,L=(b&&b.startUninterruptedRevalidation)===!0,xe(f.location,f.matches),p=(b&&b.preventScrollReset)===!0;let K=b&&b.overrideNavigation,$=fi(t,M,e.basename);if(!$){let F=Yn(404,{pathname:M.pathname}),{matches:ne,route:fe}=_f(t);ge(),Ce(M,{matches:ne,loaderData:{},errors:{[fe.id]:F}});return}if(h1(f.location,M)){Ce(M,{matches:$});return}m=new AbortController;let se=li(M,m.signal,b&&b.submission),ce,_e;if(b&&b.pendingError)_e={[Ar($).route.id]:b.pendingError};else if(b&&b.submission&&qn(b.submission.formMethod)){let F=await q(se,M,b.submission,$,{replace:b.replace});if(F.shortCircuited)return;ce=F.pendingActionData,_e=F.pendingActionError,K=Se({state:"loading",location:M},b.submission),se=new Request(se.url,{signal:se.signal})}let{shortCircuited:ae,loaderData:Ge,errors:S}=await J(se,M,$,K,b&&b.submission,b&&b.replace,ce,_e);ae||(m=null,Ce(M,Se({matches:$},ce?{actionData:ce}:{},{loaderData:Ge,errors:S})))}async function q(O,M,b,K,$){C();let se=Se({state:"submitting",location:M},b);ue({navigation:se});let ce,_e=vf(K,M);if(!_e.route.action)ce={type:et.error,error:Yn(405,{method:O.method,pathname:M.pathname,routeId:_e.route.id})};else if(ce=await ii("action",O,_e,K,d.basename),O.signal.aborted)return{shortCircuited:!0};if(Or(ce)){let ae;return $&&$.replace!=null?ae=$.replace:ae=ce.location===f.location.pathname+f.location.search,await E(f,ce,{submission:b,replace:ae}),{shortCircuited:!0}}if(Ti(ce)){let ae=Ar(K,_e.route.id);return($&&$.replace)!==!0&&(h=We.Push),{pendingActionData:{},pendingActionError:{[ae.route.id]:ce.error}}}if(nr(ce))throw new Error("defer() is not supported in actions");return{pendingActionData:{[_e.route.id]:ce.data}}}async function J(O,M,b,K,$,se,ce,_e){let ae=K;ae||(ae=Se({state:"loading",location:M,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},$));let Ge=$||(ae.formMethod&&ae.formAction&&ae.formData&&ae.formEncType?{formMethod:ae.formMethod,formAction:ae.formAction,formData:ae.formData,formEncType:ae.formEncType}:void 0),[S,F]=ff(f,b,Ge,M,_,g,y,ce,_e,X);if(ge(He=>!(b&&b.some(me=>me.route.id===He))||S&&S.some(me=>me.route.id===He)),S.length===0&&F.length===0)return Ce(M,Se({matches:b,loaderData:{},errors:_e||null},ce?{actionData:ce}:{})),{shortCircuited:!0};if(!L){F.forEach(me=>{let[Bt]=me,st=f.fetchers.get(Bt),Xr={state:"loading",data:st&&st.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};f.fetchers.set(Bt,Xr)});let He=ce||f.actionData;ue(Se({navigation:ae},He?Object.keys(He).length===0?{actionData:null}:{actionData:He}:{},F.length>0?{fetchers:new Map(f.fetchers)}:{}))}x=++P,F.forEach(He=>{let[me]=He;return k.set(me,m)});let{results:ne,loaderResults:fe,fetcherResults:Ye}=await w(f.matches,b,S,F,O);if(O.signal.aborted)return{shortCircuited:!0};F.forEach(He=>{let[me]=He;return k.delete(me)});let Xt=mf(ne);if(Xt)return await E(f,Xt,{replace:se}),{shortCircuited:!0};let{loaderData:Le,errors:Oe}=hf(f,b,S,fe,_e,F,Ye,Y);Y.forEach((He,me)=>{He.subscribe(Bt=>{(Bt||He.done)&&Y.delete(me)})}),te();let Yt=Te(x);return Se({loaderData:Le,errors:Oe},Yt||F.length>0?{fetchers:new Map(f.fetchers)}:{})}function v(O){return f.fetchers.get(O)||l1}function T(O,M,b,K){if(u1)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");k.has(O)&&B(O);let $=fi(t,b,e.basename);if(!$){D(O,M,Yn(404,{pathname:b}));return}let{path:se,submission:ce}=cf(b,K,!0),_e=vf($,se);if(ce&&qn(ce.formMethod)){A(O,M,se,_e,$,ce);return}X.set(O,[se,_e,$]),I(O,M,se,_e,$,ce)}async function A(O,M,b,K,$,se){if(C(),X.delete(O),!K.route.action){let on=Yn(405,{method:se.formMethod,pathname:b,routeId:M});D(O,M,on);return}let ce=f.fetchers.get(O),_e=Se({state:"submitting"},se,{data:ce&&ce.data," _hasFetcherDoneAnything ":!0});f.fetchers.set(O,_e),ue({fetchers:new Map(f.fetchers)});let ae=new AbortController,Ge=li(b,ae.signal,se);k.set(O,ae);let S=await ii("action",Ge,K,$,d.basename);if(Ge.signal.aborted){k.get(O)===ae&&k.delete(O);return}if(Or(S)){k.delete(O),H.add(O);let on=Se({state:"loading"},se,{data:void 0," _hasFetcherDoneAnything ":!0});return f.fetchers.set(O,on),ue({fetchers:new Map(f.fetchers)}),E(f,S,{isFetchActionRedirect:!0})}if(Ti(S)){D(O,M,S.error);return}nr(S)&&he(!1,"defer() is not supported in actions");let F=f.navigation.location||f.location,ne=li(F,ae.signal),fe=f.navigation.state!=="idle"?fi(t,f.navigation.location,e.basename):f.matches;he(fe,"Didn't find any matches after fetcher action");let Ye=++P;N.set(O,Ye);let Xt=Se({state:"loading",data:S.data},se,{" _hasFetcherDoneAnything ":!0});f.fetchers.set(O,Xt);let[Le,Oe]=ff(f,fe,se,F,_,g,y,{[K.route.id]:S.data},void 0,X);Oe.filter(on=>{let[Vn]=on;return Vn!==O}).forEach(on=>{let[Vn]=on,Xs=f.fetchers.get(Vn),Z_={state:"loading",data:Xs&&Xs.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};f.fetchers.set(Vn,Z_),k.set(Vn,ae)}),ue({fetchers:new Map(f.fetchers)});let{results:Yt,loaderResults:He,fetcherResults:me}=await w(f.matches,fe,Le,Oe,ne);if(ae.signal.aborted)return;N.delete(O),k.delete(O),Oe.forEach(on=>{let[Vn]=on;return k.delete(Vn)});let Bt=mf(Yt);if(Bt)return E(f,Bt);let{loaderData:st,errors:Xr}=hf(f,f.matches,Le,He,void 0,Oe,me,Y),Y_={state:"idle",data:S.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};f.fetchers.set(O,Y_);let q_=Te(Ye);f.navigation.state==="loading"&&Ye>x?(he(h,"Expected pending action"),m&&m.abort(),Ce(f.navigation.location,{matches:fe,loaderData:st,errors:Xr,fetchers:new Map(f.fetchers)})):(ue(Se({errors:Xr,loaderData:pf(f.loaderData,st,fe,Xr)},q_?{fetchers:new Map(f.fetchers)}:{})),_=!1)}async function I(O,M,b,K,$,se){let ce=f.fetchers.get(O),_e=Se({state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},se,{data:ce&&ce.data," _hasFetcherDoneAnything ":!0});f.fetchers.set(O,_e),ue({fetchers:new Map(f.fetchers)});let ae=new AbortController,Ge=li(b,ae.signal);k.set(O,ae);let S=await ii("loader",Ge,K,$,d.basename);if(nr(S)&&(S=await Up(S,Ge.signal,!0)||S),k.get(O)===ae&&k.delete(O),Ge.signal.aborted)return;if(Or(S)){await E(f,S);return}if(Ti(S)){let ne=Ar(f.matches,M);f.fetchers.delete(O),ue({fetchers:new Map(f.fetchers),errors:{[ne.route.id]:S.error}});return}he(!nr(S),"Unhandled fetcher deferred data");let F={state:"idle",data:S.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};f.fetchers.set(O,F),ue({fetchers:new Map(f.fetchers)})}async function E(O,M,b){var K;let{submission:$,replace:se,isFetchActionRedirect:ce}=b===void 0?{}:b;M.revalidate&&(_=!0);let _e=ji(O.location,M.location,Se({_isRedirect:!0},ce?{_isFetchActionRedirect:!0}:{}));if(he(_e,"Expected a location on the redirect navigation"),typeof((K=window)==null?void 0:K.location)<"u"){let fe=Wi(M.location).origin;if(window.location.origin!==fe){se?window.location.replace(M.location):window.location.assign(M.location);return}}m=null;let ae=se===!0?We.Replace:We.Push,{formMethod:Ge,formAction:S,formEncType:F,formData:ne}=O.navigation;!$&&Ge&&S&&ne&&F&&($={formMethod:Ge,formAction:S,formEncType:F,formData:ne}),i1.has(M.status)&&$&&qn($.formMethod)?await z(ae,_e,{submission:Se({},$,{formAction:M.location})}):await z(ae,_e,{overrideNavigation:{state:"loading",location:_e,formMethod:$?$.formMethod:void 0,formAction:$?$.formAction:void 0,formEncType:$?$.formEncType:void 0,formData:$?$.formData:void 0}})}async function w(O,M,b,K,$){let se=await Promise.all([...b.map(ae=>ii("loader",$,ae,M,d.basename)),...K.map(ae=>{let[,Ge,S,F]=ae;return ii("loader",li(Ge,$.signal),S,F,d.basename)})]),ce=se.slice(0,b.length),_e=se.slice(b.length);return await Promise.all([gf(O,b,ce,$.signal,!1,f.loaderData),gf(O,K.map(ae=>{let[,,Ge]=ae;return Ge}),_e,$.signal,!0)]),{results:se,loaderResults:ce,fetcherResults:_e}}function C(){_=!0,g.push(...ge()),X.forEach((O,M)=>{k.has(M)&&(y.push(M),B(M))})}function D(O,M,b){let K=Ar(f.matches,M);G(O),ue({errors:{[K.route.id]:b},fetchers:new Map(f.fetchers)})}function G(O){k.has(O)&&B(O),X.delete(O),N.delete(O),H.delete(O),f.fetchers.delete(O)}function B(O){let M=k.get(O);he(M,"Expected fetch controller: "+O),M.abort(),k.delete(O)}function j(O){for(let M of O){let K={state:"idle",data:v(M).data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};f.fetchers.set(M,K)}}function te(){let O=[];for(let M of H){let b=f.fetchers.get(M);he(b,"Expected fetcher: "+M),b.state==="loading"&&(H.delete(M),O.push(M))}j(O)}function Te(O){let M=[];for(let[b,K]of N)if(K<O){let $=f.fetchers.get(b);he($,"Expected fetcher: "+b),$.state==="loading"&&(B(b),N.delete(b),M.push(b))}return j(M),M.length>0}function ge(O){let M=[];return Y.forEach((b,K)=>{(!O||O(K))&&(b.cancel(),M.push(K),Y.delete(K))}),M}function Ee(O,M,b){if(i=O,o=M,l=b||(K=>K.key),!u&&f.navigation===yu){u=!0;let K=rt(f.location,f.matches);K!=null&&ue({restoreScrollPosition:K})}return()=>{i=null,o=null,l=null}}function xe(O,M){if(i&&l&&o){let b=M.map($=>yf($,f.loaderData)),K=l(O,b)||O.key;i[K]=o()}}function rt(O,M){if(i&&l&&o){let b=M.map(se=>yf(se,f.loaderData)),K=l(O,b)||O.key,$=i[K];if(typeof $=="number")return $}return null}return d={get basename(){return e.basename},get state(){return f},get routes(){return t},initialize:V,subscribe:re,enableScrollRestoration:Ee,navigate:R,fetch:T,revalidate:De,createHref:O=>e.history.createHref(O),encodeLocation:O=>e.history.encodeLocation(O),getFetcher:v,deleteFetcher:G,dispose:ee,_internalFetchControllers:k,_internalActiveDeferreds:Y},d}function s1(e){return e!=null&&"formData"in e}function cf(e,t,n){n===void 0&&(n=!1);let r=typeof e=="string"?e:rn(e);if(!t||!s1(t))return{path:r};if(t.formMethod&&!_1(t.formMethod))return{path:r,error:Yn(405,{method:t.formMethod})};let i;if(t.formData&&(i={formMethod:t.formMethod||"get",formAction:Bp(r),formEncType:t&&t.formEncType||"application/x-www-form-urlencoded",formData:t.formData},qn(i.formMethod)))return{path:r,submission:i};let l=vn(r);try{let o=Hp(t.formData);n&&l.search&&jp(l.search)&&o.append("index",""),l.search="?"+o}catch{return{path:r,error:Yn(400)}}return{path:rn(l),submission:i}}function c1(e,t){let n=e;if(t){let r=e.findIndex(i=>i.route.id===t);r>=0&&(n=e.slice(0,r))}return n}function ff(e,t,n,r,i,l,o,u,a,s){let c=a?Object.values(a)[0]:u?Object.values(u)[0]:void 0,d=a?Object.keys(a)[0]:void 0,h=c1(t,d).filter((m,L)=>m.route.loader!=null&&(f1(e.loaderData,e.matches[L],m)||l.some(_=>_===m.route.id)||df(e.location,e.matches[L],n,r,m,i,c))),p=[];return s&&s.forEach((m,L)=>{let[_,g,y]=m;o.includes(L)?p.push([L,_,g,y]):i&&df(_,g,n,_,g,i,c)&&p.push([L,_,g,y])}),[h,p]}function f1(e,t,n){let r=!t||n.route.id!==t.route.id,i=e[n.route.id]===void 0;return r||i}function bp(e,t){let n=e.route.path;return e.pathname!==t.pathname||n&&n.endsWith("*")&&e.params["*"]!==t.params["*"]}function df(e,t,n,r,i,l,o){let u=Wi(e),a=t.params,s=Wi(r),c=i.params,d=bp(t,i)||u.toString()===s.toString()||u.search!==s.search||l;if(i.route.shouldRevalidate){let f=i.route.shouldRevalidate(Se({currentUrl:u,currentParams:a,nextUrl:s,nextParams:c},n,{actionResult:o,defaultShouldRevalidate:d}));if(typeof f=="boolean")return f}return d}async function ii(e,t,n,r,i,l,o,u){i===void 0&&(i="/"),l===void 0&&(l=!1),o===void 0&&(o=!1);let a,s,c,d=new Promise((h,p)=>c=p),f=()=>c();t.signal.addEventListener("abort",f);try{let h=n.route[e];he(h,"Could not find the "+e+' to run on the "'+n.route.id+'" route'),s=await Promise.race([h({request:t,params:n.params,context:u}),d]),he(s!==void 0,"You defined "+(e==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+e+"` ")+"function. Please return a value or `null`.")}catch(h){a=et.error,s=h}finally{t.signal.removeEventListener("abort",f)}if(p1(s)){let h=s.status;if(r1.has(h)){let L=s.headers.get("Location");if(he(L,"Redirects returned/thrown from loaders/actions must have a Location header"),!(/^[a-z+]+:\/\//i.test(L)||L.startsWith("//"))){let g=r.slice(0,r.indexOf(n)+1),y=So(g).map(P=>P.pathnameBase),k=Fs(L,y,new URL(t.url).pathname);if(he(rn(k),"Unable to resolve redirect location: "+L),i){let P=k.pathname;k.pathname=P==="/"?i:hn([i,P])}L=rn(k)}if(l)throw s.headers.set("Location",L),s;return{type:et.redirect,status:h,location:L,revalidate:s.headers.get("X-Remix-Revalidate")!==null}}if(o)throw{type:a||et.data,response:s};let p,m=s.headers.get("Content-Type");return m&&/\bapplication\/json\b/.test(m)?p=await s.json():p=await s.text(),a===et.error?{type:a,error:new Ao(h,s.statusText,p),headers:s.headers}:{type:et.data,data:p,statusCode:s.status,headers:s.headers}}return a===et.error?{type:a,error:s}:s instanceof qy?{type:et.deferred,deferredData:s}:{type:et.data,data:s}}function li(e,t,n){let r=Wi(Bp(e)).toString(),i={signal:t};if(n&&qn(n.formMethod)){let{formMethod:l,formEncType:o,formData:u}=n;i.method=l.toUpperCase(),i.body=o==="application/x-www-form-urlencoded"?Hp(u):u}return new Request(r,i)}function Hp(e){let t=new URLSearchParams;for(let[n,r]of e.entries())he(typeof r=="string",'File inputs are not supported with encType "application/x-www-form-urlencoded", please use "multipart/form-data" instead.'),t.append(n,r);return t}function d1(e,t,n,r,i){let l={},o=null,u,a=!1,s={};return n.forEach((c,d)=>{let f=t[d].route.id;if(he(!Or(c),"Cannot handle redirect results in processLoaderData"),Ti(c)){let h=Ar(e,f),p=c.error;r&&(p=Object.values(r)[0],r=void 0),o=o||{},o[h.route.id]==null&&(o[h.route.id]=p),l[f]=void 0,a||(a=!0,u=Fp(c.error)?c.error.status:500),c.headers&&(s[f]=c.headers)}else nr(c)?(i&&i.set(f,c.deferredData),l[f]=c.deferredData.data):(l[f]=c.data,c.statusCode!=null&&c.statusCode!==200&&!a&&(u=c.statusCode),c.headers&&(s[f]=c.headers))}),r&&(o=r,l[Object.keys(r)[0]]=void 0),{loaderData:l,errors:o,statusCode:u||200,loaderHeaders:s}}function hf(e,t,n,r,i,l,o,u){let{loaderData:a,errors:s}=d1(t,n,r,i,u);for(let c=0;c<l.length;c++){let[d,,f]=l[c];he(o!==void 0&&o[c]!==void 0,"Did not find corresponding fetcher result");let h=o[c];if(Ti(h)){let p=Ar(e.matches,f.route.id);s&&s[p.route.id]||(s=Se({},s,{[p.route.id]:h.error})),e.fetchers.delete(d)}else{if(Or(h))throw new Error("Unhandled fetcher revalidation redirect");if(nr(h))throw new Error("Unhandled fetcher deferred data");{let p={state:"idle",data:h.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};e.fetchers.set(d,p)}}}return{loaderData:a,errors:s}}function pf(e,t,n,r){let i=Se({},t);for(let l of n){let o=l.route.id;if(t.hasOwnProperty(o)?t[o]!==void 0&&(i[o]=t[o]):e[o]!==void 0&&(i[o]=e[o]),r&&r.hasOwnProperty(o))break}return i}function Ar(e,t){return(t?e.slice(0,e.findIndex(r=>r.route.id===t)+1):[...e]).reverse().find(r=>r.route.hasErrorBoundary===!0)||e[0]}function _f(e){let t=e.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:t}],route:t}}function Yn(e,t){let{pathname:n,routeId:r,method:i}=t===void 0?{}:t,l="Unknown Server Error",o="Unknown @remix-run/router error";return e===400?(l="Bad Request",i&&n&&r?o="You made a "+i+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":o="Cannot submit binary form data using GET"):e===403?(l="Forbidden",o='Route "'+r+'" does not match URL "'+n+'"'):e===404?(l="Not Found",o='No route matches URL "'+n+'"'):e===405&&(l="Method Not Allowed",i&&n&&r?o="You made a "+i.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":i&&(o='Invalid request method "'+i.toUpperCase()+'"')),new Ao(e||500,l,new Error(o),!0)}function mf(e){for(let t=e.length-1;t>=0;t--){let n=e[t];if(Or(n))return n}}function Bp(e){let t=typeof e=="string"?vn(e):e;return rn(Se({},t,{hash:""}))}function h1(e,t){return e.pathname===t.pathname&&e.search===t.search&&e.hash!==t.hash}function nr(e){return e.type===et.deferred}function Ti(e){return e.type===et.error}function Or(e){return(e&&e.type)===et.redirect}function p1(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}function _1(e){return n1.has(e)}function qn(e){return e1.has(e)}async function gf(e,t,n,r,i,l){for(let o=0;o<n.length;o++){let u=n[o],a=t[o],s=e.find(d=>d.route.id===a.route.id),c=s!=null&&!bp(s,a)&&(l&&l[a.route.id])!==void 0;nr(u)&&(i||c)&&await Up(u,r,i).then(d=>{d&&(n[o]=d||n[o])})}}async function Up(e,t,n){if(n===void 0&&(n=!1),!await e.deferredData.resolveData(t)){if(n)try{return{type:et.data,data:e.deferredData.unwrappedData}}catch(i){return{type:et.error,error:i}}return{type:et.data,data:e.deferredData.data}}}function jp(e){return new URLSearchParams(e).getAll("index").some(t=>t==="")}function yf(e,t){let{route:n,pathname:r,params:i}=e;return{id:n.id,pathname:r,params:i,data:t[n.id],handle:n.handle}}function vf(e,t){let n=typeof t=="string"?vn(t).search:t.search;if(e[e.length-1].route.index&&jp(n||""))return e[e.length-1];let r=So(e);return r[r.length-1]}/**
 * React Router v6.6.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function io(){return io=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},io.apply(this,arguments)}function m1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const g1=typeof Object.is=="function"?Object.is:m1,{useState:y1,useEffect:v1,useLayoutEffect:E1,useDebugValue:T1}=Ou;function x1(e,t,n){const r=t(),[{inst:i},l]=y1({inst:{value:r,getSnapshot:t}});return E1(()=>{i.value=r,i.getSnapshot=t,vu(i)&&l({inst:i})},[e,r,t]),v1(()=>(vu(i)&&l({inst:i}),e(()=>{vu(i)&&l({inst:i})})),[e]),T1(r),r}function vu(e){const t=e.getSnapshot,n=e.value;try{const r=t();return!g1(n,r)}catch{return!0}}function L1(e,t,n){return t()}const k1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",w1=!k1,S1=w1?L1:x1,A1="useSyncExternalStore"in Ou?(e=>e.useSyncExternalStore)(Ou):S1,C1=Q.createContext(null),Wp=Q.createContext(null),zs=Q.createContext(null),Co=Q.createContext(null),Io=Q.createContext(null),dr=Q.createContext({outlet:null,matches:[]}),$p=Q.createContext(null);function I1(e,t){let{relative:n}=t===void 0?{}:t;Yi()||he(!1);let{basename:r,navigator:i}=Q.useContext(Co),{hash:l,pathname:o,search:u}=Vp(e,{relative:n}),a=o;return r!=="/"&&(a=o==="/"?r:hn([r,o])),i.createHref({pathname:a,search:u,hash:l})}function Yi(){return Q.useContext(Io)!=null}function Ro(){return Yi()||he(!1),Q.useContext(Io).location}function R1(){Yi()||he(!1);let{basename:e,navigator:t}=Q.useContext(Co),{matches:n}=Q.useContext(dr),{pathname:r}=Ro(),i=JSON.stringify(So(n).map(u=>u.pathnameBase)),l=Q.useRef(!1);return Q.useEffect(()=>{l.current=!0}),Q.useCallback(function(u,a){if(a===void 0&&(a={}),!l.current)return;if(typeof u=="number"){t.go(u);return}let s=Fs(u,JSON.parse(i),r,a.relative==="path");e!=="/"&&(s.pathname=s.pathname==="/"?e:hn([e,s.pathname])),(a.replace?t.replace:t.push)(s,a.state,a)},[e,t,i,r])}const P1=Q.createContext(null);function N1(e){let t=Q.useContext(dr).outlet;return t&&Q.createElement(P1.Provider,{value:e},t)}function Vp(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=Q.useContext(dr),{pathname:i}=Ro(),l=JSON.stringify(So(r).map(o=>o.pathnameBase));return Q.useMemo(()=>Fs(e,JSON.parse(l),i,n==="path"),[e,l,i,n])}function D1(e,t){Yi()||he(!1);let{navigator:n}=Q.useContext(Co),r=Q.useContext(zs),{matches:i}=Q.useContext(dr),l=i[i.length-1],o=l?l.params:{};l&&l.pathname;let u=l?l.pathnameBase:"/";l&&l.route;let a=Ro(),s;if(t){var c;let m=typeof t=="string"?vn(t):t;u==="/"||(c=m.pathname)!=null&&c.startsWith(u)||he(!1),s=m}else s=a;let d=s.pathname||"/",f=u==="/"?d:d.slice(u.length)||"/",h=fi(e,{pathname:f}),p=z1(h&&h.map(m=>Object.assign({},m,{params:Object.assign({},o,m.params),pathname:hn([u,n.encodeLocation?n.encodeLocation(m.pathname).pathname:m.pathname]),pathnameBase:m.pathnameBase==="/"?u:hn([u,n.encodeLocation?n.encodeLocation(m.pathnameBase).pathname:m.pathnameBase])})),i,r||void 0);return t&&p?Q.createElement(Io.Provider,{value:{location:io({pathname:"/",search:"",hash:"",state:null,key:"default"},s),navigationType:We.Pop}},p):p}function O1(){let e=U1(),t=Fp(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:r},l={padding:"2px 4px",backgroundColor:r};return Q.createElement(Q.Fragment,null,Q.createElement("h2",null,"Unhandled Thrown Error!"),Q.createElement("h3",{style:{fontStyle:"italic"}},t),n?Q.createElement("pre",{style:i},n):null,Q.createElement("p",null,"💿 Hey developer 👋"),Q.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",Q.createElement("code",{style:l},"errorElement")," props on ",Q.createElement("code",{style:l},"<Route>")))}class M1 extends Q.Component{constructor(t){super(t),this.state={location:t.location,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location?{error:t.error,location:t.location}:{error:t.error||n.error,location:n.location}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?Q.createElement(dr.Provider,{value:this.props.routeContext},Q.createElement($p.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function F1(e){let{routeContext:t,match:n,children:r}=e,i=Q.useContext(C1);return i&&n.route.errorElement&&(i._deepestRenderedBoundaryId=n.route.id),Q.createElement(dr.Provider,{value:t},r)}function z1(e,t,n){if(t===void 0&&(t=[]),e==null)if(n!=null&&n.errors)e=n.matches;else return null;let r=e,i=n==null?void 0:n.errors;if(i!=null){let l=r.findIndex(o=>o.route.id&&(i==null?void 0:i[o.route.id]));l>=0||he(!1),r=r.slice(0,Math.min(r.length,l+1))}return r.reduceRight((l,o,u)=>{let a=o.route.id?i==null?void 0:i[o.route.id]:null,s=n?o.route.errorElement||Q.createElement(O1,null):null,c=t.concat(r.slice(0,u+1)),d=()=>Q.createElement(F1,{match:o,routeContext:{outlet:l,matches:c}},a?s:o.route.element!==void 0?o.route.element:l);return n&&(o.route.errorElement||u===0)?Q.createElement(M1,{location:n.location,component:s,error:a,children:d(),routeContext:{outlet:null,matches:c}}):d()},null)}var Ef;(function(e){e.UseRevalidator="useRevalidator"})(Ef||(Ef={}));var lo;(function(e){e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator"})(lo||(lo={}));function b1(e){let t=Q.useContext(zs);return t||he(!1),t}function H1(e){let t=Q.useContext(dr);return t||he(!1),t}function B1(e){let t=H1(),n=t.matches[t.matches.length-1];return n.route.id||he(!1),n.route.id}function U1(){var e;let t=Q.useContext($p),n=b1(lo.UseRouteError),r=B1(lo.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function j1(e){let{fallbackElement:t,router:n}=e,r=A1(n.subscribe,()=>n.state,()=>n.state),i=Q.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:o=>n.navigate(o),push:(o,u,a)=>n.navigate(o,{state:u,preventScrollReset:a==null?void 0:a.preventScrollReset}),replace:(o,u,a)=>n.navigate(o,{replace:!0,state:u,preventScrollReset:a==null?void 0:a.preventScrollReset})}),[n]),l=n.basename||"/";return Q.createElement(Wp.Provider,{value:{router:n,navigator:i,static:!1,basename:l}},Q.createElement(zs.Provider,{value:r},Q.createElement(V1,{basename:n.basename,location:n.state.location,navigationType:n.state.historyAction,navigator:i},n.state.initialized?Q.createElement(G1,null):t)))}function W1(e){return N1(e.context)}function $1(e){he(!1)}function V1(e){let{basename:t="/",children:n=null,location:r,navigationType:i=We.Pop,navigator:l,static:o=!1}=e;Yi()&&he(!1);let u=t.replace(/^\/*/,"/"),a=Q.useMemo(()=>({basename:u,navigator:l,static:o}),[u,l,o]);typeof r=="string"&&(r=vn(r));let{pathname:s="/",search:c="",hash:d="",state:f=null,key:h="default"}=r,p=Q.useMemo(()=>{let m=Mp(s,u);return m==null?null:{pathname:m,search:c,hash:d,state:f,key:h}},[u,s,c,d,f,h]);return p==null?null:Q.createElement(Co.Provider,{value:a},Q.createElement(Io.Provider,{children:n,value:{location:p,navigationType:i}}))}function G1(e){let{children:t,location:n}=e,r=Q.useContext(Wp),i=r&&!t?r.router.routes:Ra(t);return D1(i,n)}var Tf;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(Tf||(Tf={}));new Promise(()=>{});function Ra(e,t){t===void 0&&(t=[]);let n=[];return Q.Children.forEach(e,(r,i)=>{if(!Q.isValidElement(r))return;if(r.type===Q.Fragment){n.push.apply(n,Ra(r.props.children,t));return}r.type!==$1&&he(!1),!r.props.index||!r.props.children||he(!1);let l=[...t,i],o={id:r.props.id||l.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,hasErrorBoundary:r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle};r.props.children&&(o.children=Ra(r.props.children,l)),n.push(o)}),n}function Gp(e){return e.map(t=>{let n=io({},t);return n.hasErrorBoundary==null&&(n.hasErrorBoundary=n.errorElement!=null),n.children&&(n.children=Gp(n.children)),n})}/**
 * React Router DOM v6.6.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function oo(){return oo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},oo.apply(this,arguments)}function Q1(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,l;for(l=0;l<r.length;l++)i=r[l],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function K1(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function X1(e,t){return e.button===0&&(!t||t==="_self")&&!K1(e)}const Y1=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function q1(e,t){return a1({basename:t==null?void 0:t.basename,history:Cy({window:t==null?void 0:t.window}),hydrationData:(t==null?void 0:t.hydrationData)||Z1(),routes:Gp(e)}).initialize()}function Z1(){var e;let t=(e=window)==null?void 0:e.__staticRouterHydrationData;return t&&t.errors&&(t=oo({},t,{errors:J1(t.errors)})),t}function J1(e){if(!e)return null;let t=Object.entries(e),n={};for(let[r,i]of t)if(i&&i.__type==="RouteErrorResponse")n[r]=new Ao(i.status,i.statusText,i.data,i.internal===!0);else if(i&&i.__type==="Error"){let l=new Error(i.message);l.stack="",n[r]=l}else n[r]=i;return n}const Gn=Q.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:l,replace:o,state:u,target:a,to:s,preventScrollReset:c}=t,d=Q1(t,Y1),f=I1(s,{relative:i}),h=e0(s,{replace:o,state:u,target:a,preventScrollReset:c,relative:i});function p(m){r&&r(m),m.defaultPrevented||h(m)}return Q.createElement("a",oo({},d,{href:f,onClick:l?r:p,ref:n,target:a}))});var xf;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(xf||(xf={}));var Lf;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Lf||(Lf={}));function e0(e,t){let{target:n,replace:r,state:i,preventScrollReset:l,relative:o}=t===void 0?{}:t,u=R1(),a=Ro(),s=Vp(e,{relative:o});return Q.useCallback(c=>{if(X1(c,n)){c.preventDefault();let d=r!==void 0?r:rn(a)===rn(s);u(e,{replace:d,state:i,preventScrollReset:l,relative:o})}},[a,u,s,r,i,n,e,l,o])}function t0(){return In("div",{children:[le("h1",{className:"w-4/5 m-auto font-mono",children:"Hello world welcome to my website"}),le(Qp,{})]})}function Qp(){return le(Lm,{children:le("div",{className:"flex flex-col",children:le("div",{className:" flex justify-center",children:"About The best Programmer ever"})})})}function n0(){return le("div",{children:le("h1",{children:"Contacts"})})}function r0(){return le("div",{children:le("p",{children:"My projects"})})}function i0(){return le("div",{children:le("p",{children:"My cv"})})}const kf={about:`
    # Hello World!
My name is Patrick Igiraneza, I am an enthusiastic Software/Web developer. I am originally from Burundi which is a country found in the east of Africa. I am currently enrolled at the university of Ottawa in Software engineering(CO-OP) in French Immersion.
    
    **Location** : Gatineau, Canada

    # Skills

    ## Front-end
    
    - HTML
    - CSS | TailwindCSS
    - JavaScript
    - React
    - TypeScript

    ## Back-end
    - Node.js
    - Express | Fastify
    - Mysql | Prisma
    `,help:`
    help - help
    about - about me
    projects - my projects
    exit - Return to UI version`,ls:"README "},wf=["http","https","mailto","tel"];function l0(e){const t=(e||"").trim(),n=t.charAt(0);if(n==="#"||n==="/")return t;const r=t.indexOf(":");if(r===-1)return t;let i=-1;for(;++i<wf.length;){const l=wf[i];if(r===l.length&&t.slice(0,l.length).toLowerCase()===l)return t}return i=t.indexOf("?"),i!==-1&&r>i||(i=t.indexOf("#"),i!==-1&&r>i)?t:"javascript:void(0)"}/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */var Kp=function(t){return t!=null&&t.constructor!=null&&typeof t.constructor.isBuffer=="function"&&t.constructor.isBuffer(t)};function xi(e){return!e||typeof e!="object"?"":"position"in e||"type"in e?Sf(e.position):"start"in e||"end"in e?Sf(e):"line"in e||"column"in e?Pa(e):""}function Pa(e){return Af(e&&e.line)+":"+Af(e&&e.column)}function Sf(e){return Pa(e&&e.start)+"-"+Pa(e&&e.end)}function Af(e){return e&&typeof e=="number"?e:1}class zt extends Error{constructor(t,n,r){const i=[null,null];let l={start:{line:null,column:null},end:{line:null,column:null}};if(super(),typeof n=="string"&&(r=n,n=void 0),typeof r=="string"){const o=r.indexOf(":");o===-1?i[1]=r:(i[0]=r.slice(0,o),i[1]=r.slice(o+1))}n&&("type"in n||"position"in n?n.position&&(l=n.position):"start"in n||"end"in n?l=n:("line"in n||"column"in n)&&(l.start=n)),this.name=xi(n)||"1:1",this.message=typeof t=="object"?t.message:t,this.stack="",typeof t=="object"&&t.stack&&(this.stack=t.stack),this.reason=this.message,this.fatal,this.line=l.start.line,this.column=l.start.column,this.position=l,this.source=i[0],this.ruleId=i[1],this.file,this.actual,this.expected,this.url,this.note}}zt.prototype.file="";zt.prototype.name="";zt.prototype.reason="";zt.prototype.message="";zt.prototype.stack="";zt.prototype.fatal=null;zt.prototype.column=null;zt.prototype.line=null;zt.prototype.source=null;zt.prototype.ruleId=null;zt.prototype.position=null;const Jt={basename:o0,dirname:u0,extname:a0,join:s0,sep:"/"};function o0(e,t){if(t!==void 0&&typeof t!="string")throw new TypeError('"ext" argument must be a string');qi(e);let n=0,r=-1,i=e.length,l;if(t===void 0||t.length===0||t.length>e.length){for(;i--;)if(e.charCodeAt(i)===47){if(l){n=i+1;break}}else r<0&&(l=!0,r=i+1);return r<0?"":e.slice(n,r)}if(t===e)return"";let o=-1,u=t.length-1;for(;i--;)if(e.charCodeAt(i)===47){if(l){n=i+1;break}}else o<0&&(l=!0,o=i+1),u>-1&&(e.charCodeAt(i)===t.charCodeAt(u--)?u<0&&(r=i):(u=-1,r=o));return n===r?r=o:r<0&&(r=e.length),e.slice(n,r)}function u0(e){if(qi(e),e.length===0)return".";let t=-1,n=e.length,r;for(;--n;)if(e.charCodeAt(n)===47){if(r){t=n;break}}else r||(r=!0);return t<0?e.charCodeAt(0)===47?"/":".":t===1&&e.charCodeAt(0)===47?"//":e.slice(0,t)}function a0(e){qi(e);let t=e.length,n=-1,r=0,i=-1,l=0,o;for(;t--;){const u=e.charCodeAt(t);if(u===47){if(o){r=t+1;break}continue}n<0&&(o=!0,n=t+1),u===46?i<0?i=t:l!==1&&(l=1):i>-1&&(l=-1)}return i<0||n<0||l===0||l===1&&i===n-1&&i===r+1?"":e.slice(i,n)}function s0(...e){let t=-1,n;for(;++t<e.length;)qi(e[t]),e[t]&&(n=n===void 0?e[t]:n+"/"+e[t]);return n===void 0?".":c0(n)}function c0(e){qi(e);const t=e.charCodeAt(0)===47;let n=f0(e,!t);return n.length===0&&!t&&(n="."),n.length>0&&e.charCodeAt(e.length-1)===47&&(n+="/"),t?"/"+n:n}function f0(e,t){let n="",r=0,i=-1,l=0,o=-1,u,a;for(;++o<=e.length;){if(o<e.length)u=e.charCodeAt(o);else{if(u===47)break;u=47}if(u===47){if(!(i===o-1||l===1))if(i!==o-1&&l===2){if(n.length<2||r!==2||n.charCodeAt(n.length-1)!==46||n.charCodeAt(n.length-2)!==46){if(n.length>2){if(a=n.lastIndexOf("/"),a!==n.length-1){a<0?(n="",r=0):(n=n.slice(0,a),r=n.length-1-n.lastIndexOf("/")),i=o,l=0;continue}}else if(n.length>0){n="",r=0,i=o,l=0;continue}}t&&(n=n.length>0?n+"/..":"..",r=2)}else n.length>0?n+="/"+e.slice(i+1,o):n=e.slice(i+1,o),r=o-i-1;i=o,l=0}else u===46&&l>-1?l++:l=-1}return n}function qi(e){if(typeof e!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}const d0={cwd:h0};function h0(){return"/"}function Na(e){return e!==null&&typeof e=="object"&&e.href&&e.origin}function p0(e){if(typeof e=="string")e=new URL(e);else if(!Na(e)){const t=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+e+"`");throw t.code="ERR_INVALID_ARG_TYPE",t}if(e.protocol!=="file:"){const t=new TypeError("The URL must be of scheme file");throw t.code="ERR_INVALID_URL_SCHEME",t}return _0(e)}function _0(e){if(e.hostname!==""){const r=new TypeError('File URL host must be "localhost" or empty on darwin');throw r.code="ERR_INVALID_FILE_URL_HOST",r}const t=e.pathname;let n=-1;for(;++n<t.length;)if(t.charCodeAt(n)===37&&t.charCodeAt(n+1)===50){const r=t.charCodeAt(n+2);if(r===70||r===102){const i=new TypeError("File URL path must not include encoded / characters");throw i.code="ERR_INVALID_FILE_URL_PATH",i}}return decodeURIComponent(t)}const Eu=["history","path","basename","stem","extname","dirname"];class Xp{constructor(t){let n;t?typeof t=="string"||Kp(t)?n={value:t}:Na(t)?n={path:t}:n=t:n={},this.data={},this.messages=[],this.history=[],this.cwd=d0.cwd(),this.value,this.stored,this.result,this.map;let r=-1;for(;++r<Eu.length;){const l=Eu[r];l in n&&n[l]!==void 0&&(this[l]=l==="history"?[...n[l]]:n[l])}let i;for(i in n)Eu.includes(i)||(this[i]=n[i])}get path(){return this.history[this.history.length-1]}set path(t){Na(t)&&(t=p0(t)),xu(t,"path"),this.path!==t&&this.history.push(t)}get dirname(){return typeof this.path=="string"?Jt.dirname(this.path):void 0}set dirname(t){Cf(this.basename,"dirname"),this.path=Jt.join(t||"",this.basename)}get basename(){return typeof this.path=="string"?Jt.basename(this.path):void 0}set basename(t){xu(t,"basename"),Tu(t,"basename"),this.path=Jt.join(this.dirname||"",t)}get extname(){return typeof this.path=="string"?Jt.extname(this.path):void 0}set extname(t){if(Tu(t,"extname"),Cf(this.dirname,"extname"),t){if(t.charCodeAt(0)!==46)throw new Error("`extname` must start with `.`");if(t.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=Jt.join(this.dirname,this.stem+(t||""))}get stem(){return typeof this.path=="string"?Jt.basename(this.path,this.extname):void 0}set stem(t){xu(t,"stem"),Tu(t,"stem"),this.path=Jt.join(this.dirname||"",t+(this.extname||""))}toString(t){return(this.value||"").toString(t)}message(t,n,r){const i=new zt(t,n,r);return this.path&&(i.name=this.path+":"+i.name,i.file=this.path),i.fatal=!1,this.messages.push(i),i}info(t,n,r){const i=this.message(t,n,r);return i.fatal=null,i}fail(t,n,r){const i=this.message(t,n,r);throw i.fatal=!0,i}}function Tu(e,t){if(e&&e.includes(Jt.sep))throw new Error("`"+t+"` cannot be a path: did not expect `"+Jt.sep+"`")}function xu(e,t){if(!e)throw new Error("`"+t+"` cannot be empty")}function Cf(e,t){if(!e)throw new Error("Setting `"+t+"` requires `path` to be set too")}function If(e){if(e)throw e}var Pl=Object.prototype.hasOwnProperty,Yp=Object.prototype.toString,Rf=Object.defineProperty,Pf=Object.getOwnPropertyDescriptor,Nf=function(t){return typeof Array.isArray=="function"?Array.isArray(t):Yp.call(t)==="[object Array]"},Df=function(t){if(!t||Yp.call(t)!=="[object Object]")return!1;var n=Pl.call(t,"constructor"),r=t.constructor&&t.constructor.prototype&&Pl.call(t.constructor.prototype,"isPrototypeOf");if(t.constructor&&!n&&!r)return!1;var i;for(i in t);return typeof i>"u"||Pl.call(t,i)},Of=function(t,n){Rf&&n.name==="__proto__"?Rf(t,n.name,{enumerable:!0,configurable:!0,value:n.newValue,writable:!0}):t[n.name]=n.newValue},Mf=function(t,n){if(n==="__proto__")if(Pl.call(t,n)){if(Pf)return Pf(t,n).value}else return;return t[n]},Ff=function e(){var t,n,r,i,l,o,u=arguments[0],a=1,s=arguments.length,c=!1;for(typeof u=="boolean"&&(c=u,u=arguments[1]||{},a=2),(u==null||typeof u!="object"&&typeof u!="function")&&(u={});a<s;++a)if(t=arguments[a],t!=null)for(n in t)r=Mf(u,n),i=Mf(t,n),u!==i&&(c&&i&&(Df(i)||(l=Nf(i)))?(l?(l=!1,o=r&&Nf(r)?r:[]):o=r&&Df(r)?r:{},Of(u,{name:n,newValue:e(c,o,i)})):typeof i<"u"&&Of(u,{name:n,newValue:i}));return u};function Da(e){if(typeof e!="object"||e===null)return!1;const t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function m0(){const e=[],t={run:n,use:r};return t;function n(...i){let l=-1;const o=i.pop();if(typeof o!="function")throw new TypeError("Expected function as last argument, not "+o);u(null,...i);function u(a,...s){const c=e[++l];let d=-1;if(a){o(a);return}for(;++d<i.length;)(s[d]===null||s[d]===void 0)&&(s[d]=i[d]);i=s,c?g0(c,u)(...s):o(null,...s)}}function r(i){if(typeof i!="function")throw new TypeError("Expected `middelware` to be a function, not "+i);return e.push(i),t}}function g0(e,t){let n;return r;function r(...o){const u=e.length>o.length;let a;u&&o.push(i);try{a=e.apply(this,o)}catch(s){const c=s;if(u&&n)throw c;return i(c)}u||(a instanceof Promise?a.then(l,i):a instanceof Error?i(a):l(a))}function i(o,...u){n||(n=!0,t(o,...u))}function l(o){i(null,o)}}const y0=Zp().freeze(),qp={}.hasOwnProperty;function Zp(){const e=m0(),t=[];let n={},r,i=-1;return l.data=o,l.Parser=void 0,l.Compiler=void 0,l.freeze=u,l.attachers=t,l.use=a,l.parse=s,l.stringify=c,l.run=d,l.runSync=f,l.process=h,l.processSync=p,l;function l(){const m=Zp();let L=-1;for(;++L<t.length;)m.use(...t[L]);return m.data(Ff(!0,{},n)),m}function o(m,L){return typeof m=="string"?arguments.length===2?(wu("data",r),n[m]=L,l):qp.call(n,m)&&n[m]||null:m?(wu("data",r),n=m,l):n}function u(){if(r)return l;for(;++i<t.length;){const[m,...L]=t[i];if(L[0]===!1)continue;L[0]===!0&&(L[0]=void 0);const _=m.call(l,...L);typeof _=="function"&&e.use(_)}return r=!0,i=Number.POSITIVE_INFINITY,l}function a(m,...L){let _;if(wu("use",r),m!=null)if(typeof m=="function")P(m,...L);else if(typeof m=="object")Array.isArray(m)?k(m):y(m);else throw new TypeError("Expected usable value, not `"+m+"`");return _&&(n.settings=Object.assign(n.settings||{},_)),l;function g(x){if(typeof x=="function")P(x);else if(typeof x=="object")if(Array.isArray(x)){const[N,...H]=x;P(N,...H)}else y(x);else throw new TypeError("Expected usable value, not `"+x+"`")}function y(x){k(x.plugins),x.settings&&(_=Object.assign(_||{},x.settings))}function k(x){let N=-1;if(x!=null)if(Array.isArray(x))for(;++N<x.length;){const H=x[N];g(H)}else throw new TypeError("Expected a list of plugins, not `"+x+"`")}function P(x,N){let H=-1,X;for(;++H<t.length;)if(t[H][0]===x){X=t[H];break}X?(Da(X[1])&&Da(N)&&(N=Ff(!0,X[1],N)),X[1]=N):t.push([...arguments])}}function s(m){l.freeze();const L=oi(m),_=l.Parser;return Lu("parse",_),zf(_,"parse")?new _(String(L),L).parse():_(String(L),L)}function c(m,L){l.freeze();const _=oi(L),g=l.Compiler;return ku("stringify",g),bf(m),zf(g,"compile")?new g(m,_).compile():g(m,_)}function d(m,L,_){if(bf(m),l.freeze(),!_&&typeof L=="function"&&(_=L,L=void 0),!_)return new Promise(g);g(null,_);function g(y,k){e.run(m,oi(L),P);function P(x,N,H){N=N||m,x?k(x):y?y(N):_(null,N,H)}}}function f(m,L){let _,g;return l.run(m,L,y),Hf("runSync","run",g),_;function y(k,P){If(k),_=P,g=!0}}function h(m,L){if(l.freeze(),Lu("process",l.Parser),ku("process",l.Compiler),!L)return new Promise(_);_(null,L);function _(g,y){const k=oi(m);l.run(l.parse(k),k,(x,N,H)=>{if(x||!N||!H)P(x);else{const X=l.stringify(N,H);X==null||(T0(X)?H.value=X:H.result=X),P(x,H)}});function P(x,N){x||!N?y(x):g?g(N):L(null,N)}}}function p(m){let L;l.freeze(),Lu("processSync",l.Parser),ku("processSync",l.Compiler);const _=oi(m);return l.process(_,g),Hf("processSync","process",L),_;function g(y){L=!0,If(y)}}}function zf(e,t){return typeof e=="function"&&e.prototype&&(v0(e.prototype)||t in e.prototype)}function v0(e){let t;for(t in e)if(qp.call(e,t))return!0;return!1}function Lu(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `Parser`")}function ku(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `Compiler`")}function wu(e,t){if(t)throw new Error("Cannot call `"+e+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function bf(e){if(!Da(e)||typeof e.type!="string")throw new TypeError("Expected node, got `"+e+"`")}function Hf(e,t,n){if(!n)throw new Error("`"+e+"` finished async. Use `"+t+"` instead")}function oi(e){return E0(e)?e:new Xp(e)}function E0(e){return Boolean(e&&typeof e=="object"&&"message"in e&&"messages"in e)}function T0(e){return typeof e=="string"||Kp(e)}function x0(e,t){var{includeImageAlt:n=!0}=t||{};return Jp(e,n)}function Jp(e,t){return e&&typeof e=="object"&&(e.value||(t?e.alt:"")||"children"in e&&Bf(e.children,t)||Array.isArray(e)&&Bf(e,t))||""}function Bf(e,t){for(var n=[],r=-1;++r<e.length;)n[r]=Jp(e[r],t);return n.join("")}function wt(e,t,n,r){const i=e.length;let l=0,o;if(t<0?t=-t>i?0:i+t:t=t>i?i:t,n=n>0?n:0,r.length<1e4)o=Array.from(r),o.unshift(t,n),[].splice.apply(e,o);else for(n&&[].splice.apply(e,[t,n]);l<r.length;)o=r.slice(l,l+1e4),o.unshift(t,0),[].splice.apply(e,o),l+=1e4,t+=1e4}function Pt(e,t){return e.length>0?(wt(e,e.length,0,t),e):t}const Uf={}.hasOwnProperty;function e_(e){const t={};let n=-1;for(;++n<e.length;)L0(t,e[n]);return t}function L0(e,t){let n;for(n in t){const i=(Uf.call(e,n)?e[n]:void 0)||(e[n]={}),l=t[n];let o;for(o in l){Uf.call(i,o)||(i[o]=[]);const u=l[o];k0(i[o],Array.isArray(u)?u:u?[u]:[])}}}function k0(e,t){let n=-1;const r=[];for(;++n<t.length;)(t[n].add==="after"?e:r).push(t[n]);wt(e,0,0,r)}const w0=/[!-/:-@[-`{-~\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/,Nt=$n(/[A-Za-z]/),uo=$n(/\d/),S0=$n(/[\dA-Fa-f]/),ft=$n(/[\dA-Za-z]/),A0=$n(/[!-/:-@[-`{-~]/),jf=$n(/[#-'*+\--9=?A-Z^-~]/);function $i(e){return e!==null&&(e<32||e===127)}function Ve(e){return e!==null&&(e<0||e===32)}function ie(e){return e!==null&&e<-2}function Ae(e){return e===-2||e===-1||e===32}const Po=$n(/\s/),No=$n(w0);function $n(e){return t;function t(n){return n!==null&&e.test(String.fromCharCode(n))}}function ve(e,t,n,r){const i=r?r-1:Number.POSITIVE_INFINITY;let l=0;return o;function o(a){return Ae(a)?(e.enter(n),u(a)):t(a)}function u(a){return Ae(a)&&l++<i?(e.consume(a),u):(e.exit(n),t(a))}}const C0={tokenize:I0};function I0(e){const t=e.attempt(this.parser.constructs.contentInitial,r,i);let n;return t;function r(u){if(u===null){e.consume(u);return}return e.enter("lineEnding"),e.consume(u),e.exit("lineEnding"),ve(e,t,"linePrefix")}function i(u){return e.enter("paragraph"),l(u)}function l(u){const a=e.enter("chunkText",{contentType:"text",previous:n});return n&&(n.next=a),n=a,o(u)}function o(u){if(u===null){e.exit("chunkText"),e.exit("paragraph"),e.consume(u);return}return ie(u)?(e.consume(u),e.exit("chunkText"),l):(e.consume(u),o)}}const R0={tokenize:P0},Wf={tokenize:N0};function P0(e){const t=this,n=[];let r=0,i,l,o;return u;function u(y){if(r<n.length){const k=n[r];return t.containerState=k[1],e.attempt(k[0].continuation,a,s)(y)}return s(y)}function a(y){if(r++,t.containerState._closeFlow){t.containerState._closeFlow=void 0,i&&g();const k=t.events.length;let P=k,x;for(;P--;)if(t.events[P][0]==="exit"&&t.events[P][1].type==="chunkFlow"){x=t.events[P][1].end;break}_(r);let N=k;for(;N<t.events.length;)t.events[N][1].end=Object.assign({},x),N++;return wt(t.events,P+1,0,t.events.slice(k)),t.events.length=N,s(y)}return u(y)}function s(y){if(r===n.length){if(!i)return f(y);if(i.currentConstruct&&i.currentConstruct.concrete)return p(y);t.interrupt=Boolean(i.currentConstruct&&!i._gfmTableDynamicInterruptHack)}return t.containerState={},e.check(Wf,c,d)(y)}function c(y){return i&&g(),_(r),f(y)}function d(y){return t.parser.lazy[t.now().line]=r!==n.length,o=t.now().offset,p(y)}function f(y){return t.containerState={},e.attempt(Wf,h,p)(y)}function h(y){return r++,n.push([t.currentConstruct,t.containerState]),f(y)}function p(y){if(y===null){i&&g(),_(0),e.consume(y);return}return i=i||t.parser.flow(t.now()),e.enter("chunkFlow",{contentType:"flow",previous:l,_tokenizer:i}),m(y)}function m(y){if(y===null){L(e.exit("chunkFlow"),!0),_(0),e.consume(y);return}return ie(y)?(e.consume(y),L(e.exit("chunkFlow")),r=0,t.interrupt=void 0,u):(e.consume(y),m)}function L(y,k){const P=t.sliceStream(y);if(k&&P.push(null),y.previous=l,l&&(l.next=y),l=y,i.defineSkip(y.start),i.write(P),t.parser.lazy[y.start.line]){let x=i.events.length;for(;x--;)if(i.events[x][1].start.offset<o&&(!i.events[x][1].end||i.events[x][1].end.offset>o))return;const N=t.events.length;let H=N,X,Y;for(;H--;)if(t.events[H][0]==="exit"&&t.events[H][1].type==="chunkFlow"){if(X){Y=t.events[H][1].end;break}X=!0}for(_(r),x=N;x<t.events.length;)t.events[x][1].end=Object.assign({},Y),x++;wt(t.events,H+1,0,t.events.slice(N)),t.events.length=x}}function _(y){let k=n.length;for(;k-- >y;){const P=n[k];t.containerState=P[1],P[0].exit.call(t,e)}n.length=y}function g(){i.write([null]),l=void 0,i=void 0,t.containerState._closeFlow=void 0}}function N0(e,t,n){return ve(e,e.attempt(this.parser.constructs.document,t,n),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function ao(e){if(e===null||Ve(e)||Po(e))return 1;if(No(e))return 2}function Do(e,t,n){const r=[];let i=-1;for(;++i<e.length;){const l=e[i].resolveAll;l&&!r.includes(l)&&(t=l(t,n),r.push(l))}return t}const Oa={name:"attention",tokenize:O0,resolveAll:D0};function D0(e,t){let n=-1,r,i,l,o,u,a,s,c;for(;++n<e.length;)if(e[n][0]==="enter"&&e[n][1].type==="attentionSequence"&&e[n][1]._close){for(r=n;r--;)if(e[r][0]==="exit"&&e[r][1].type==="attentionSequence"&&e[r][1]._open&&t.sliceSerialize(e[r][1]).charCodeAt(0)===t.sliceSerialize(e[n][1]).charCodeAt(0)){if((e[r][1]._close||e[n][1]._open)&&(e[n][1].end.offset-e[n][1].start.offset)%3&&!((e[r][1].end.offset-e[r][1].start.offset+e[n][1].end.offset-e[n][1].start.offset)%3))continue;a=e[r][1].end.offset-e[r][1].start.offset>1&&e[n][1].end.offset-e[n][1].start.offset>1?2:1;const d=Object.assign({},e[r][1].end),f=Object.assign({},e[n][1].start);$f(d,-a),$f(f,a),o={type:a>1?"strongSequence":"emphasisSequence",start:d,end:Object.assign({},e[r][1].end)},u={type:a>1?"strongSequence":"emphasisSequence",start:Object.assign({},e[n][1].start),end:f},l={type:a>1?"strongText":"emphasisText",start:Object.assign({},e[r][1].end),end:Object.assign({},e[n][1].start)},i={type:a>1?"strong":"emphasis",start:Object.assign({},o.start),end:Object.assign({},u.end)},e[r][1].end=Object.assign({},o.start),e[n][1].start=Object.assign({},u.end),s=[],e[r][1].end.offset-e[r][1].start.offset&&(s=Pt(s,[["enter",e[r][1],t],["exit",e[r][1],t]])),s=Pt(s,[["enter",i,t],["enter",o,t],["exit",o,t],["enter",l,t]]),s=Pt(s,Do(t.parser.constructs.insideSpan.null,e.slice(r+1,n),t)),s=Pt(s,[["exit",l,t],["enter",u,t],["exit",u,t],["exit",i,t]]),e[n][1].end.offset-e[n][1].start.offset?(c=2,s=Pt(s,[["enter",e[n][1],t],["exit",e[n][1],t]])):c=0,wt(e,r-1,n-r+3,s),n=r+s.length-c-2;break}}for(n=-1;++n<e.length;)e[n][1].type==="attentionSequence"&&(e[n][1].type="data");return e}function O0(e,t){const n=this.parser.constructs.attentionMarkers.null,r=this.previous,i=ao(r);let l;return o;function o(a){return e.enter("attentionSequence"),l=a,u(a)}function u(a){if(a===l)return e.consume(a),u;const s=e.exit("attentionSequence"),c=ao(a),d=!c||c===2&&i||n.includes(a),f=!i||i===2&&c||n.includes(r);return s._open=Boolean(l===42?d:d&&(i||!f)),s._close=Boolean(l===42?f:f&&(c||!d)),t(a)}}function $f(e,t){e.column+=t,e.offset+=t,e._bufferIndex+=t}const M0={name:"autolink",tokenize:F0};function F0(e,t,n){let r=1;return i;function i(p){return e.enter("autolink"),e.enter("autolinkMarker"),e.consume(p),e.exit("autolinkMarker"),e.enter("autolinkProtocol"),l}function l(p){return Nt(p)?(e.consume(p),o):jf(p)?s(p):n(p)}function o(p){return p===43||p===45||p===46||ft(p)?u(p):s(p)}function u(p){return p===58?(e.consume(p),a):(p===43||p===45||p===46||ft(p))&&r++<32?(e.consume(p),u):s(p)}function a(p){return p===62?(e.exit("autolinkProtocol"),h(p)):p===null||p===32||p===60||$i(p)?n(p):(e.consume(p),a)}function s(p){return p===64?(e.consume(p),r=0,c):jf(p)?(e.consume(p),s):n(p)}function c(p){return ft(p)?d(p):n(p)}function d(p){return p===46?(e.consume(p),r=0,c):p===62?(e.exit("autolinkProtocol").type="autolinkEmail",h(p)):f(p)}function f(p){return(p===45||ft(p))&&r++<63?(e.consume(p),p===45?f:d):n(p)}function h(p){return e.enter("autolinkMarker"),e.consume(p),e.exit("autolinkMarker"),e.exit("autolink"),t}}const Zi={tokenize:z0,partial:!0};function z0(e,t,n){return ve(e,r,"linePrefix");function r(i){return i===null||ie(i)?t(i):n(i)}}const t_={name:"blockQuote",tokenize:b0,continuation:{tokenize:H0},exit:B0};function b0(e,t,n){const r=this;return i;function i(o){if(o===62){const u=r.containerState;return u.open||(e.enter("blockQuote",{_container:!0}),u.open=!0),e.enter("blockQuotePrefix"),e.enter("blockQuoteMarker"),e.consume(o),e.exit("blockQuoteMarker"),l}return n(o)}function l(o){return Ae(o)?(e.enter("blockQuotePrefixWhitespace"),e.consume(o),e.exit("blockQuotePrefixWhitespace"),e.exit("blockQuotePrefix"),t):(e.exit("blockQuotePrefix"),t(o))}}function H0(e,t,n){return ve(e,e.attempt(t_,t,n),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function B0(e){e.exit("blockQuote")}const n_={name:"characterEscape",tokenize:U0};function U0(e,t,n){return r;function r(l){return e.enter("characterEscape"),e.enter("escapeMarker"),e.consume(l),e.exit("escapeMarker"),i}function i(l){return A0(l)?(e.enter("characterEscapeValue"),e.consume(l),e.exit("characterEscapeValue"),e.exit("characterEscape"),t):n(l)}}const Vf=document.createElement("i");function bs(e){const t="&"+e+";";Vf.innerHTML=t;const n=Vf.textContent;return n.charCodeAt(n.length-1)===59&&e!=="semi"||n===t?!1:n}const r_={name:"characterReference",tokenize:j0};function j0(e,t,n){const r=this;let i=0,l,o;return u;function u(d){return e.enter("characterReference"),e.enter("characterReferenceMarker"),e.consume(d),e.exit("characterReferenceMarker"),a}function a(d){return d===35?(e.enter("characterReferenceMarkerNumeric"),e.consume(d),e.exit("characterReferenceMarkerNumeric"),s):(e.enter("characterReferenceValue"),l=31,o=ft,c(d))}function s(d){return d===88||d===120?(e.enter("characterReferenceMarkerHexadecimal"),e.consume(d),e.exit("characterReferenceMarkerHexadecimal"),e.enter("characterReferenceValue"),l=6,o=S0,c):(e.enter("characterReferenceValue"),l=7,o=uo,c(d))}function c(d){let f;return d===59&&i?(f=e.exit("characterReferenceValue"),o===ft&&!bs(r.sliceSerialize(f))?n(d):(e.enter("characterReferenceMarker"),e.consume(d),e.exit("characterReferenceMarker"),e.exit("characterReference"),t)):o(d)&&i++<l?(e.consume(d),c):n(d)}}const Gf={name:"codeFenced",tokenize:W0,concrete:!0};function W0(e,t,n){const r=this,i={tokenize:P,partial:!0},l={tokenize:k,partial:!0},o=this.events[this.events.length-1],u=o&&o[1].type==="linePrefix"?o[2].sliceSerialize(o[1],!0).length:0;let a=0,s;return c;function c(x){return e.enter("codeFenced"),e.enter("codeFencedFence"),e.enter("codeFencedFenceSequence"),s=x,d(x)}function d(x){return x===s?(e.consume(x),a++,d):(e.exit("codeFencedFenceSequence"),a<3?n(x):ve(e,f,"whitespace")(x))}function f(x){return x===null||ie(x)?L(x):(e.enter("codeFencedFenceInfo"),e.enter("chunkString",{contentType:"string"}),h(x))}function h(x){return x===null||Ve(x)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),ve(e,p,"whitespace")(x)):x===96&&x===s?n(x):(e.consume(x),h)}function p(x){return x===null||ie(x)?L(x):(e.enter("codeFencedFenceMeta"),e.enter("chunkString",{contentType:"string"}),m(x))}function m(x){return x===null||ie(x)?(e.exit("chunkString"),e.exit("codeFencedFenceMeta"),L(x)):x===96&&x===s?n(x):(e.consume(x),m)}function L(x){return e.exit("codeFencedFence"),r.interrupt?t(x):_(x)}function _(x){return x===null?y(x):ie(x)?e.attempt(l,e.attempt(i,y,u?ve(e,_,"linePrefix",u+1):_),y)(x):(e.enter("codeFlowValue"),g(x))}function g(x){return x===null||ie(x)?(e.exit("codeFlowValue"),_(x)):(e.consume(x),g)}function y(x){return e.exit("codeFenced"),t(x)}function k(x,N,H){const X=this;return Y;function Y(ee){return x.enter("lineEnding"),x.consume(ee),x.exit("lineEnding"),V}function V(ee){return X.parser.lazy[X.now().line]?H(ee):N(ee)}}function P(x,N,H){let X=0;return ve(x,Y,"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4);function Y(re){return x.enter("codeFencedFence"),x.enter("codeFencedFenceSequence"),V(re)}function V(re){return re===s?(x.consume(re),X++,V):X<a?H(re):(x.exit("codeFencedFenceSequence"),ve(x,ee,"whitespace")(re))}function ee(re){return re===null||ie(re)?(x.exit("codeFencedFence"),N(re)):H(re)}}}const Su={name:"codeIndented",tokenize:V0},$0={tokenize:G0,partial:!0};function V0(e,t,n){const r=this;return i;function i(s){return e.enter("codeIndented"),ve(e,l,"linePrefix",4+1)(s)}function l(s){const c=r.events[r.events.length-1];return c&&c[1].type==="linePrefix"&&c[2].sliceSerialize(c[1],!0).length>=4?o(s):n(s)}function o(s){return s===null?a(s):ie(s)?e.attempt($0,o,a)(s):(e.enter("codeFlowValue"),u(s))}function u(s){return s===null||ie(s)?(e.exit("codeFlowValue"),o(s)):(e.consume(s),u)}function a(s){return e.exit("codeIndented"),t(s)}}function G0(e,t,n){const r=this;return i;function i(o){return r.parser.lazy[r.now().line]?n(o):ie(o)?(e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),i):ve(e,l,"linePrefix",4+1)(o)}function l(o){const u=r.events[r.events.length-1];return u&&u[1].type==="linePrefix"&&u[2].sliceSerialize(u[1],!0).length>=4?t(o):ie(o)?i(o):n(o)}}const Q0={name:"codeText",tokenize:Y0,resolve:K0,previous:X0};function K0(e){let t=e.length-4,n=3,r,i;if((e[n][1].type==="lineEnding"||e[n][1].type==="space")&&(e[t][1].type==="lineEnding"||e[t][1].type==="space")){for(r=n;++r<t;)if(e[r][1].type==="codeTextData"){e[n][1].type="codeTextPadding",e[t][1].type="codeTextPadding",n+=2,t-=2;break}}for(r=n-1,t++;++r<=t;)i===void 0?r!==t&&e[r][1].type!=="lineEnding"&&(i=r):(r===t||e[r][1].type==="lineEnding")&&(e[i][1].type="codeTextData",r!==i+2&&(e[i][1].end=e[r-1][1].end,e.splice(i+2,r-i-2),t-=r-i-2,r=i+2),i=void 0);return e}function X0(e){return e!==96||this.events[this.events.length-1][1].type==="characterEscape"}function Y0(e,t,n){let r=0,i,l;return o;function o(d){return e.enter("codeText"),e.enter("codeTextSequence"),u(d)}function u(d){return d===96?(e.consume(d),r++,u):(e.exit("codeTextSequence"),a(d))}function a(d){return d===null?n(d):d===96?(l=e.enter("codeTextSequence"),i=0,c(d)):d===32?(e.enter("space"),e.consume(d),e.exit("space"),a):ie(d)?(e.enter("lineEnding"),e.consume(d),e.exit("lineEnding"),a):(e.enter("codeTextData"),s(d))}function s(d){return d===null||d===32||d===96||ie(d)?(e.exit("codeTextData"),a(d)):(e.consume(d),s)}function c(d){return d===96?(e.consume(d),i++,c):i===r?(e.exit("codeTextSequence"),e.exit("codeText"),t(d)):(l.type="codeTextData",s(d))}}function i_(e){const t={};let n=-1,r,i,l,o,u,a,s;for(;++n<e.length;){for(;n in t;)n=t[n];if(r=e[n],n&&r[1].type==="chunkFlow"&&e[n-1][1].type==="listItemPrefix"&&(a=r[1]._tokenizer.events,l=0,l<a.length&&a[l][1].type==="lineEndingBlank"&&(l+=2),l<a.length&&a[l][1].type==="content"))for(;++l<a.length&&a[l][1].type!=="content";)a[l][1].type==="chunkText"&&(a[l][1]._isInFirstContentOfListItem=!0,l++);if(r[0]==="enter")r[1].contentType&&(Object.assign(t,q0(e,n)),n=t[n],s=!0);else if(r[1]._container){for(l=n,i=void 0;l--&&(o=e[l],o[1].type==="lineEnding"||o[1].type==="lineEndingBlank");)o[0]==="enter"&&(i&&(e[i][1].type="lineEndingBlank"),o[1].type="lineEnding",i=l);i&&(r[1].end=Object.assign({},e[i][1].start),u=e.slice(i,n),u.unshift(r),wt(e,i,n-i+1,u))}}return!s}function q0(e,t){const n=e[t][1],r=e[t][2];let i=t-1;const l=[],o=n._tokenizer||r.parser[n.contentType](n.start),u=o.events,a=[],s={};let c,d,f=-1,h=n,p=0,m=0;const L=[m];for(;h;){for(;e[++i][1]!==h;);l.push(i),h._tokenizer||(c=r.sliceStream(h),h.next||c.push(null),d&&o.defineSkip(h.start),h._isInFirstContentOfListItem&&(o._gfmTasklistFirstContentOfListItem=!0),o.write(c),h._isInFirstContentOfListItem&&(o._gfmTasklistFirstContentOfListItem=void 0)),d=h,h=h.next}for(h=n;++f<u.length;)u[f][0]==="exit"&&u[f-1][0]==="enter"&&u[f][1].type===u[f-1][1].type&&u[f][1].start.line!==u[f][1].end.line&&(m=f+1,L.push(m),h._tokenizer=void 0,h.previous=void 0,h=h.next);for(o.events=[],h?(h._tokenizer=void 0,h.previous=void 0):L.pop(),f=L.length;f--;){const _=u.slice(L[f],L[f+1]),g=l.pop();a.unshift([g,g+_.length-1]),wt(e,g,2,_)}for(f=-1;++f<a.length;)s[p+a[f][0]]=p+a[f][1],p+=a[f][1]-a[f][0]-1;return s}const Z0={tokenize:tv,resolve:ev},J0={tokenize:nv,partial:!0};function ev(e){return i_(e),e}function tv(e,t){let n;return r;function r(u){return e.enter("content"),n=e.enter("chunkContent",{contentType:"content"}),i(u)}function i(u){return u===null?l(u):ie(u)?e.check(J0,o,l)(u):(e.consume(u),i)}function l(u){return e.exit("chunkContent"),e.exit("content"),t(u)}function o(u){return e.consume(u),e.exit("chunkContent"),n.next=e.enter("chunkContent",{contentType:"content",previous:n}),n=n.next,i}}function nv(e,t,n){const r=this;return i;function i(o){return e.exit("chunkContent"),e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),ve(e,l,"linePrefix")}function l(o){if(o===null||ie(o))return n(o);const u=r.events[r.events.length-1];return!r.parser.constructs.disable.null.includes("codeIndented")&&u&&u[1].type==="linePrefix"&&u[2].sliceSerialize(u[1],!0).length>=4?t(o):e.interrupt(r.parser.constructs.flow,n,t)(o)}}function l_(e,t,n,r,i,l,o,u,a){const s=a||Number.POSITIVE_INFINITY;let c=0;return d;function d(_){return _===60?(e.enter(r),e.enter(i),e.enter(l),e.consume(_),e.exit(l),f):_===null||_===41||$i(_)?n(_):(e.enter(r),e.enter(o),e.enter(u),e.enter("chunkString",{contentType:"string"}),m(_))}function f(_){return _===62?(e.enter(l),e.consume(_),e.exit(l),e.exit(i),e.exit(r),t):(e.enter(u),e.enter("chunkString",{contentType:"string"}),h(_))}function h(_){return _===62?(e.exit("chunkString"),e.exit(u),f(_)):_===null||_===60||ie(_)?n(_):(e.consume(_),_===92?p:h)}function p(_){return _===60||_===62||_===92?(e.consume(_),h):h(_)}function m(_){return _===40?++c>s?n(_):(e.consume(_),m):_===41?c--?(e.consume(_),m):(e.exit("chunkString"),e.exit(u),e.exit(o),e.exit(r),t(_)):_===null||Ve(_)?c?n(_):(e.exit("chunkString"),e.exit(u),e.exit(o),e.exit(r),t(_)):$i(_)?n(_):(e.consume(_),_===92?L:m)}function L(_){return _===40||_===41||_===92?(e.consume(_),m):m(_)}}function o_(e,t,n,r,i,l){const o=this;let u=0,a;return s;function s(h){return e.enter(r),e.enter(i),e.consume(h),e.exit(i),e.enter(l),c}function c(h){return h===null||h===91||h===93&&!a||h===94&&!u&&"_hiddenFootnoteSupport"in o.parser.constructs||u>999?n(h):h===93?(e.exit(l),e.enter(i),e.consume(h),e.exit(i),e.exit(r),t):ie(h)?(e.enter("lineEnding"),e.consume(h),e.exit("lineEnding"),c):(e.enter("chunkString",{contentType:"string"}),d(h))}function d(h){return h===null||h===91||h===93||ie(h)||u++>999?(e.exit("chunkString"),c(h)):(e.consume(h),a=a||!Ae(h),h===92?f:d)}function f(h){return h===91||h===92||h===93?(e.consume(h),u++,d):d(h)}}function u_(e,t,n,r,i,l){let o;return u;function u(f){return e.enter(r),e.enter(i),e.consume(f),e.exit(i),o=f===40?41:f,a}function a(f){return f===o?(e.enter(i),e.consume(f),e.exit(i),e.exit(r),t):(e.enter(l),s(f))}function s(f){return f===o?(e.exit(l),a(o)):f===null?n(f):ie(f)?(e.enter("lineEnding"),e.consume(f),e.exit("lineEnding"),ve(e,s,"linePrefix")):(e.enter("chunkString",{contentType:"string"}),c(f))}function c(f){return f===o||f===null||ie(f)?(e.exit("chunkString"),s(f)):(e.consume(f),f===92?d:c)}function d(f){return f===o||f===92?(e.consume(f),c):c(f)}}function Li(e,t){let n;return r;function r(i){return ie(i)?(e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),n=!0,r):Ae(i)?ve(e,r,n?"linePrefix":"lineSuffix")(i):t(i)}}function Qt(e){return e.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const rv={name:"definition",tokenize:lv},iv={tokenize:ov,partial:!0};function lv(e,t,n){const r=this;let i;return l;function l(a){return e.enter("definition"),o_.call(r,e,o,n,"definitionLabel","definitionLabelMarker","definitionLabelString")(a)}function o(a){return i=Qt(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)),a===58?(e.enter("definitionMarker"),e.consume(a),e.exit("definitionMarker"),Li(e,l_(e,e.attempt(iv,ve(e,u,"whitespace"),ve(e,u,"whitespace")),n,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString"))):n(a)}function u(a){return a===null||ie(a)?(e.exit("definition"),r.parser.defined.includes(i)||r.parser.defined.push(i),t(a)):n(a)}}function ov(e,t,n){return r;function r(o){return Ve(o)?Li(e,i)(o):n(o)}function i(o){return o===34||o===39||o===40?u_(e,ve(e,l,"whitespace"),n,"definitionTitle","definitionTitleMarker","definitionTitleString")(o):n(o)}function l(o){return o===null||ie(o)?t(o):n(o)}}const uv={name:"hardBreakEscape",tokenize:av};function av(e,t,n){return r;function r(l){return e.enter("hardBreakEscape"),e.enter("escapeMarker"),e.consume(l),i}function i(l){return ie(l)?(e.exit("escapeMarker"),e.exit("hardBreakEscape"),t(l)):n(l)}}const sv={name:"headingAtx",tokenize:fv,resolve:cv};function cv(e,t){let n=e.length-2,r=3,i,l;return e[r][1].type==="whitespace"&&(r+=2),n-2>r&&e[n][1].type==="whitespace"&&(n-=2),e[n][1].type==="atxHeadingSequence"&&(r===n-1||n-4>r&&e[n-2][1].type==="whitespace")&&(n-=r+1===n?2:4),n>r&&(i={type:"atxHeadingText",start:e[r][1].start,end:e[n][1].end},l={type:"chunkText",start:e[r][1].start,end:e[n][1].end,contentType:"text"},wt(e,r,n-r+1,[["enter",i,t],["enter",l,t],["exit",l,t],["exit",i,t]])),e}function fv(e,t,n){const r=this;let i=0;return l;function l(c){return e.enter("atxHeading"),e.enter("atxHeadingSequence"),o(c)}function o(c){return c===35&&i++<6?(e.consume(c),o):c===null||Ve(c)?(e.exit("atxHeadingSequence"),r.interrupt?t(c):u(c)):n(c)}function u(c){return c===35?(e.enter("atxHeadingSequence"),a(c)):c===null||ie(c)?(e.exit("atxHeading"),t(c)):Ae(c)?ve(e,u,"whitespace")(c):(e.enter("atxHeadingText"),s(c))}function a(c){return c===35?(e.consume(c),a):(e.exit("atxHeadingSequence"),u(c))}function s(c){return c===null||c===35||Ve(c)?(e.exit("atxHeadingText"),u(c)):(e.consume(c),s)}}const dv=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],Qf=["pre","script","style","textarea"],hv={name:"htmlFlow",tokenize:mv,resolveTo:_v,concrete:!0},pv={tokenize:gv,partial:!0};function _v(e){let t=e.length;for(;t--&&!(e[t][0]==="enter"&&e[t][1].type==="htmlFlow"););return t>1&&e[t-2][1].type==="linePrefix"&&(e[t][1].start=e[t-2][1].start,e[t+1][1].start=e[t-2][1].start,e.splice(t-2,2)),e}function mv(e,t,n){const r=this;let i,l,o,u,a;return s;function s(T){return e.enter("htmlFlow"),e.enter("htmlFlowData"),e.consume(T),c}function c(T){return T===33?(e.consume(T),d):T===47?(e.consume(T),p):T===63?(e.consume(T),i=3,r.interrupt?t:q):Nt(T)?(e.consume(T),o=String.fromCharCode(T),l=!0,m):n(T)}function d(T){return T===45?(e.consume(T),i=2,f):T===91?(e.consume(T),i=5,o="CDATA[",u=0,h):Nt(T)?(e.consume(T),i=4,r.interrupt?t:q):n(T)}function f(T){return T===45?(e.consume(T),r.interrupt?t:q):n(T)}function h(T){return T===o.charCodeAt(u++)?(e.consume(T),u===o.length?r.interrupt?t:V:h):n(T)}function p(T){return Nt(T)?(e.consume(T),o=String.fromCharCode(T),m):n(T)}function m(T){return T===null||T===47||T===62||Ve(T)?T!==47&&l&&Qf.includes(o.toLowerCase())?(i=1,r.interrupt?t(T):V(T)):dv.includes(o.toLowerCase())?(i=6,T===47?(e.consume(T),L):r.interrupt?t(T):V(T)):(i=7,r.interrupt&&!r.parser.lazy[r.now().line]?n(T):l?g(T):_(T)):T===45||ft(T)?(e.consume(T),o+=String.fromCharCode(T),m):n(T)}function L(T){return T===62?(e.consume(T),r.interrupt?t:V):n(T)}function _(T){return Ae(T)?(e.consume(T),_):X(T)}function g(T){return T===47?(e.consume(T),X):T===58||T===95||Nt(T)?(e.consume(T),y):Ae(T)?(e.consume(T),g):X(T)}function y(T){return T===45||T===46||T===58||T===95||ft(T)?(e.consume(T),y):k(T)}function k(T){return T===61?(e.consume(T),P):Ae(T)?(e.consume(T),k):g(T)}function P(T){return T===null||T===60||T===61||T===62||T===96?n(T):T===34||T===39?(e.consume(T),a=T,x):Ae(T)?(e.consume(T),P):(a=null,N(T))}function x(T){return T===null||ie(T)?n(T):T===a?(e.consume(T),H):(e.consume(T),x)}function N(T){return T===null||T===34||T===39||T===60||T===61||T===62||T===96||Ve(T)?k(T):(e.consume(T),N)}function H(T){return T===47||T===62||Ae(T)?g(T):n(T)}function X(T){return T===62?(e.consume(T),Y):n(T)}function Y(T){return Ae(T)?(e.consume(T),Y):T===null||ie(T)?V(T):n(T)}function V(T){return T===45&&i===2?(e.consume(T),Ce):T===60&&i===1?(e.consume(T),R):T===62&&i===4?(e.consume(T),J):T===63&&i===3?(e.consume(T),q):T===93&&i===5?(e.consume(T),z):ie(T)&&(i===6||i===7)?e.check(pv,J,ee)(T):T===null||ie(T)?ee(T):(e.consume(T),V)}function ee(T){return e.exit("htmlFlowData"),re(T)}function re(T){return T===null?v(T):ie(T)?e.attempt({tokenize:ue,partial:!0},re,v)(T):(e.enter("htmlFlowData"),V(T))}function ue(T,A,I){return E;function E(C){return T.enter("lineEnding"),T.consume(C),T.exit("lineEnding"),w}function w(C){return r.parser.lazy[r.now().line]?I(C):A(C)}}function Ce(T){return T===45?(e.consume(T),q):V(T)}function R(T){return T===47?(e.consume(T),o="",De):V(T)}function De(T){return T===62&&Qf.includes(o.toLowerCase())?(e.consume(T),J):Nt(T)&&o.length<8?(e.consume(T),o+=String.fromCharCode(T),De):V(T)}function z(T){return T===93?(e.consume(T),q):V(T)}function q(T){return T===62?(e.consume(T),J):T===45&&i===2?(e.consume(T),q):V(T)}function J(T){return T===null||ie(T)?(e.exit("htmlFlowData"),v(T)):(e.consume(T),J)}function v(T){return e.exit("htmlFlow"),t(T)}}function gv(e,t,n){return r;function r(i){return e.exit("htmlFlowData"),e.enter("lineEndingBlank"),e.consume(i),e.exit("lineEndingBlank"),e.attempt(Zi,t,n)}}const yv={name:"htmlText",tokenize:vv};function vv(e,t,n){const r=this;let i,l,o,u;return a;function a(v){return e.enter("htmlText"),e.enter("htmlTextData"),e.consume(v),s}function s(v){return v===33?(e.consume(v),c):v===47?(e.consume(v),N):v===63?(e.consume(v),P):Nt(v)?(e.consume(v),Y):n(v)}function c(v){return v===45?(e.consume(v),d):v===91?(e.consume(v),l="CDATA[",o=0,L):Nt(v)?(e.consume(v),k):n(v)}function d(v){return v===45?(e.consume(v),f):n(v)}function f(v){return v===null||v===62?n(v):v===45?(e.consume(v),h):p(v)}function h(v){return v===null||v===62?n(v):p(v)}function p(v){return v===null?n(v):v===45?(e.consume(v),m):ie(v)?(u=p,z(v)):(e.consume(v),p)}function m(v){return v===45?(e.consume(v),J):p(v)}function L(v){return v===l.charCodeAt(o++)?(e.consume(v),o===l.length?_:L):n(v)}function _(v){return v===null?n(v):v===93?(e.consume(v),g):ie(v)?(u=_,z(v)):(e.consume(v),_)}function g(v){return v===93?(e.consume(v),y):_(v)}function y(v){return v===62?J(v):v===93?(e.consume(v),y):_(v)}function k(v){return v===null||v===62?J(v):ie(v)?(u=k,z(v)):(e.consume(v),k)}function P(v){return v===null?n(v):v===63?(e.consume(v),x):ie(v)?(u=P,z(v)):(e.consume(v),P)}function x(v){return v===62?J(v):P(v)}function N(v){return Nt(v)?(e.consume(v),H):n(v)}function H(v){return v===45||ft(v)?(e.consume(v),H):X(v)}function X(v){return ie(v)?(u=X,z(v)):Ae(v)?(e.consume(v),X):J(v)}function Y(v){return v===45||ft(v)?(e.consume(v),Y):v===47||v===62||Ve(v)?V(v):n(v)}function V(v){return v===47?(e.consume(v),J):v===58||v===95||Nt(v)?(e.consume(v),ee):ie(v)?(u=V,z(v)):Ae(v)?(e.consume(v),V):J(v)}function ee(v){return v===45||v===46||v===58||v===95||ft(v)?(e.consume(v),ee):re(v)}function re(v){return v===61?(e.consume(v),ue):ie(v)?(u=re,z(v)):Ae(v)?(e.consume(v),re):V(v)}function ue(v){return v===null||v===60||v===61||v===62||v===96?n(v):v===34||v===39?(e.consume(v),i=v,Ce):ie(v)?(u=ue,z(v)):Ae(v)?(e.consume(v),ue):(e.consume(v),i=void 0,De)}function Ce(v){return v===i?(e.consume(v),R):v===null?n(v):ie(v)?(u=Ce,z(v)):(e.consume(v),Ce)}function R(v){return v===62||v===47||Ve(v)?V(v):n(v)}function De(v){return v===null||v===34||v===39||v===60||v===61||v===96?n(v):v===62||Ve(v)?V(v):(e.consume(v),De)}function z(v){return e.exit("htmlTextData"),e.enter("lineEnding"),e.consume(v),e.exit("lineEnding"),ve(e,q,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function q(v){return e.enter("htmlTextData"),u(v)}function J(v){return v===62?(e.consume(v),e.exit("htmlTextData"),e.exit("htmlText"),t):n(v)}}const Hs={name:"labelEnd",tokenize:wv,resolveTo:kv,resolveAll:Lv},Ev={tokenize:Sv},Tv={tokenize:Av},xv={tokenize:Cv};function Lv(e){let t=-1,n;for(;++t<e.length;)n=e[t][1],(n.type==="labelImage"||n.type==="labelLink"||n.type==="labelEnd")&&(e.splice(t+1,n.type==="labelImage"?4:2),n.type="data",t++);return e}function kv(e,t){let n=e.length,r=0,i,l,o,u;for(;n--;)if(i=e[n][1],l){if(i.type==="link"||i.type==="labelLink"&&i._inactive)break;e[n][0]==="enter"&&i.type==="labelLink"&&(i._inactive=!0)}else if(o){if(e[n][0]==="enter"&&(i.type==="labelImage"||i.type==="labelLink")&&!i._balanced&&(l=n,i.type!=="labelLink")){r=2;break}}else i.type==="labelEnd"&&(o=n);const a={type:e[l][1].type==="labelLink"?"link":"image",start:Object.assign({},e[l][1].start),end:Object.assign({},e[e.length-1][1].end)},s={type:"label",start:Object.assign({},e[l][1].start),end:Object.assign({},e[o][1].end)},c={type:"labelText",start:Object.assign({},e[l+r+2][1].end),end:Object.assign({},e[o-2][1].start)};return u=[["enter",a,t],["enter",s,t]],u=Pt(u,e.slice(l+1,l+r+3)),u=Pt(u,[["enter",c,t]]),u=Pt(u,Do(t.parser.constructs.insideSpan.null,e.slice(l+r+4,o-3),t)),u=Pt(u,[["exit",c,t],e[o-2],e[o-1],["exit",s,t]]),u=Pt(u,e.slice(o+1)),u=Pt(u,[["exit",a,t]]),wt(e,l,e.length,u),e}function wv(e,t,n){const r=this;let i=r.events.length,l,o;for(;i--;)if((r.events[i][1].type==="labelImage"||r.events[i][1].type==="labelLink")&&!r.events[i][1]._balanced){l=r.events[i][1];break}return u;function u(c){return l?l._inactive?s(c):(o=r.parser.defined.includes(Qt(r.sliceSerialize({start:l.end,end:r.now()}))),e.enter("labelEnd"),e.enter("labelMarker"),e.consume(c),e.exit("labelMarker"),e.exit("labelEnd"),a):n(c)}function a(c){return c===40?e.attempt(Ev,t,o?t:s)(c):c===91?e.attempt(Tv,t,o?e.attempt(xv,t,s):s)(c):o?t(c):s(c)}function s(c){return l._balanced=!0,n(c)}}function Sv(e,t,n){return r;function r(a){return e.enter("resource"),e.enter("resourceMarker"),e.consume(a),e.exit("resourceMarker"),Li(e,i)}function i(a){return a===41?u(a):l_(e,l,n,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(a)}function l(a){return Ve(a)?Li(e,o)(a):u(a)}function o(a){return a===34||a===39||a===40?u_(e,Li(e,u),n,"resourceTitle","resourceTitleMarker","resourceTitleString")(a):u(a)}function u(a){return a===41?(e.enter("resourceMarker"),e.consume(a),e.exit("resourceMarker"),e.exit("resource"),t):n(a)}}function Av(e,t,n){const r=this;return i;function i(o){return o_.call(r,e,l,n,"reference","referenceMarker","referenceString")(o)}function l(o){return r.parser.defined.includes(Qt(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)))?t(o):n(o)}}function Cv(e,t,n){return r;function r(l){return e.enter("reference"),e.enter("referenceMarker"),e.consume(l),e.exit("referenceMarker"),i}function i(l){return l===93?(e.enter("referenceMarker"),e.consume(l),e.exit("referenceMarker"),e.exit("reference"),t):n(l)}}const Iv={name:"labelStartImage",tokenize:Rv,resolveAll:Hs.resolveAll};function Rv(e,t,n){const r=this;return i;function i(u){return e.enter("labelImage"),e.enter("labelImageMarker"),e.consume(u),e.exit("labelImageMarker"),l}function l(u){return u===91?(e.enter("labelMarker"),e.consume(u),e.exit("labelMarker"),e.exit("labelImage"),o):n(u)}function o(u){return u===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(u):t(u)}}const Pv={name:"labelStartLink",tokenize:Nv,resolveAll:Hs.resolveAll};function Nv(e,t,n){const r=this;return i;function i(o){return e.enter("labelLink"),e.enter("labelMarker"),e.consume(o),e.exit("labelMarker"),e.exit("labelLink"),l}function l(o){return o===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(o):t(o)}}const Au={name:"lineEnding",tokenize:Dv};function Dv(e,t){return n;function n(r){return e.enter("lineEnding"),e.consume(r),e.exit("lineEnding"),ve(e,t,"linePrefix")}}const Nl={name:"thematicBreak",tokenize:Ov};function Ov(e,t,n){let r=0,i;return l;function l(a){return e.enter("thematicBreak"),i=a,o(a)}function o(a){return a===i?(e.enter("thematicBreakSequence"),u(a)):Ae(a)?ve(e,o,"whitespace")(a):r<3||a!==null&&!ie(a)?n(a):(e.exit("thematicBreak"),t(a))}function u(a){return a===i?(e.consume(a),r++,u):(e.exit("thematicBreakSequence"),o(a))}}const _t={name:"list",tokenize:zv,continuation:{tokenize:bv},exit:Bv},Mv={tokenize:Uv,partial:!0},Fv={tokenize:Hv,partial:!0};function zv(e,t,n){const r=this,i=r.events[r.events.length-1];let l=i&&i[1].type==="linePrefix"?i[2].sliceSerialize(i[1],!0).length:0,o=0;return u;function u(h){const p=r.containerState.type||(h===42||h===43||h===45?"listUnordered":"listOrdered");if(p==="listUnordered"?!r.containerState.marker||h===r.containerState.marker:uo(h)){if(r.containerState.type||(r.containerState.type=p,e.enter(p,{_container:!0})),p==="listUnordered")return e.enter("listItemPrefix"),h===42||h===45?e.check(Nl,n,s)(h):s(h);if(!r.interrupt||h===49)return e.enter("listItemPrefix"),e.enter("listItemValue"),a(h)}return n(h)}function a(h){return uo(h)&&++o<10?(e.consume(h),a):(!r.interrupt||o<2)&&(r.containerState.marker?h===r.containerState.marker:h===41||h===46)?(e.exit("listItemValue"),s(h)):n(h)}function s(h){return e.enter("listItemMarker"),e.consume(h),e.exit("listItemMarker"),r.containerState.marker=r.containerState.marker||h,e.check(Zi,r.interrupt?n:c,e.attempt(Mv,f,d))}function c(h){return r.containerState.initialBlankLine=!0,l++,f(h)}function d(h){return Ae(h)?(e.enter("listItemPrefixWhitespace"),e.consume(h),e.exit("listItemPrefixWhitespace"),f):n(h)}function f(h){return r.containerState.size=l+r.sliceSerialize(e.exit("listItemPrefix"),!0).length,t(h)}}function bv(e,t,n){const r=this;return r.containerState._closeFlow=void 0,e.check(Zi,i,l);function i(u){return r.containerState.furtherBlankLines=r.containerState.furtherBlankLines||r.containerState.initialBlankLine,ve(e,t,"listItemIndent",r.containerState.size+1)(u)}function l(u){return r.containerState.furtherBlankLines||!Ae(u)?(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,o(u)):(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,e.attempt(Fv,t,o)(u))}function o(u){return r.containerState._closeFlow=!0,r.interrupt=void 0,ve(e,e.attempt(_t,t,n),"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(u)}}function Hv(e,t,n){const r=this;return ve(e,i,"listItemIndent",r.containerState.size+1);function i(l){const o=r.events[r.events.length-1];return o&&o[1].type==="listItemIndent"&&o[2].sliceSerialize(o[1],!0).length===r.containerState.size?t(l):n(l)}}function Bv(e){e.exit(this.containerState.type)}function Uv(e,t,n){const r=this;return ve(e,i,"listItemPrefixWhitespace",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4+1);function i(l){const o=r.events[r.events.length-1];return!Ae(l)&&o&&o[1].type==="listItemPrefixWhitespace"?t(l):n(l)}}const Kf={name:"setextUnderline",tokenize:Wv,resolveTo:jv};function jv(e,t){let n=e.length,r,i,l;for(;n--;)if(e[n][0]==="enter"){if(e[n][1].type==="content"){r=n;break}e[n][1].type==="paragraph"&&(i=n)}else e[n][1].type==="content"&&e.splice(n,1),!l&&e[n][1].type==="definition"&&(l=n);const o={type:"setextHeading",start:Object.assign({},e[i][1].start),end:Object.assign({},e[e.length-1][1].end)};return e[i][1].type="setextHeadingText",l?(e.splice(i,0,["enter",o,t]),e.splice(l+1,0,["exit",e[r][1],t]),e[r][1].end=Object.assign({},e[l][1].end)):e[r][1]=o,e.push(["exit",o,t]),e}function Wv(e,t,n){const r=this;let i=r.events.length,l,o;for(;i--;)if(r.events[i][1].type!=="lineEnding"&&r.events[i][1].type!=="linePrefix"&&r.events[i][1].type!=="content"){o=r.events[i][1].type==="paragraph";break}return u;function u(c){return!r.parser.lazy[r.now().line]&&(r.interrupt||o)?(e.enter("setextHeadingLine"),e.enter("setextHeadingLineSequence"),l=c,a(c)):n(c)}function a(c){return c===l?(e.consume(c),a):(e.exit("setextHeadingLineSequence"),ve(e,s,"lineSuffix")(c))}function s(c){return c===null||ie(c)?(e.exit("setextHeadingLine"),t(c)):n(c)}}const $v={tokenize:Vv};function Vv(e){const t=this,n=e.attempt(Zi,r,e.attempt(this.parser.constructs.flowInitial,i,ve(e,e.attempt(this.parser.constructs.flow,i,e.attempt(Z0,i)),"linePrefix")));return n;function r(l){if(l===null){e.consume(l);return}return e.enter("lineEndingBlank"),e.consume(l),e.exit("lineEndingBlank"),t.currentConstruct=void 0,n}function i(l){if(l===null){e.consume(l);return}return e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),t.currentConstruct=void 0,n}}const Gv={resolveAll:s_()},Qv=a_("string"),Kv=a_("text");function a_(e){return{tokenize:t,resolveAll:s_(e==="text"?Xv:void 0)};function t(n){const r=this,i=this.parser.constructs[e],l=n.attempt(i,o,u);return o;function o(c){return s(c)?l(c):u(c)}function u(c){if(c===null){n.consume(c);return}return n.enter("data"),n.consume(c),a}function a(c){return s(c)?(n.exit("data"),l(c)):(n.consume(c),a)}function s(c){if(c===null)return!0;const d=i[c];let f=-1;if(d)for(;++f<d.length;){const h=d[f];if(!h.previous||h.previous.call(r,r.previous))return!0}return!1}}}function s_(e){return t;function t(n,r){let i=-1,l;for(;++i<=n.length;)l===void 0?n[i]&&n[i][1].type==="data"&&(l=i,i++):(!n[i]||n[i][1].type!=="data")&&(i!==l+2&&(n[l][1].end=n[i-1][1].end,n.splice(l+2,i-l-2),i=l+2),l=void 0);return e?e(n,r):n}}function Xv(e,t){let n=0;for(;++n<=e.length;)if((n===e.length||e[n][1].type==="lineEnding")&&e[n-1][1].type==="data"){const r=e[n-1][1],i=t.sliceStream(r);let l=i.length,o=-1,u=0,a;for(;l--;){const s=i[l];if(typeof s=="string"){for(o=s.length;s.charCodeAt(o-1)===32;)u++,o--;if(o)break;o=-1}else if(s===-2)a=!0,u++;else if(s!==-1){l++;break}}if(u){const s={type:n===e.length||a||u<2?"lineSuffix":"hardBreakTrailing",start:{line:r.end.line,column:r.end.column-u,offset:r.end.offset-u,_index:r.start._index+l,_bufferIndex:l?o:r.start._bufferIndex+o},end:Object.assign({},r.end)};r.end=Object.assign({},s.start),r.start.offset===r.end.offset?Object.assign(r,s):(e.splice(n,0,["enter",s,t],["exit",s,t]),n+=2)}n++}return e}function Yv(e,t,n){let r=Object.assign(n?Object.assign({},n):{line:1,column:1,offset:0},{_index:0,_bufferIndex:-1});const i={},l=[];let o=[],u=[];const a={consume:g,enter:y,exit:k,attempt:N(P),check:N(x),interrupt:N(x,{interrupt:!0})},s={previous:null,code:null,containerState:{},events:[],parser:e,sliceStream:h,sliceSerialize:f,now:p,defineSkip:m,write:d};let c=t.tokenize.call(s,a);return t.resolveAll&&l.push(t),s;function d(V){return o=Pt(o,V),L(),o[o.length-1]!==null?[]:(H(t,0),s.events=Do(l,s.events,s),s.events)}function f(V,ee){return Zv(h(V),ee)}function h(V){return qv(o,V)}function p(){return Object.assign({},r)}function m(V){i[V.line]=V.column,Y()}function L(){let V;for(;r._index<o.length;){const ee=o[r._index];if(typeof ee=="string")for(V=r._index,r._bufferIndex<0&&(r._bufferIndex=0);r._index===V&&r._bufferIndex<ee.length;)_(ee.charCodeAt(r._bufferIndex));else _(ee)}}function _(V){c=c(V)}function g(V){ie(V)?(r.line++,r.column=1,r.offset+=V===-3?2:1,Y()):V!==-1&&(r.column++,r.offset++),r._bufferIndex<0?r._index++:(r._bufferIndex++,r._bufferIndex===o[r._index].length&&(r._bufferIndex=-1,r._index++)),s.previous=V}function y(V,ee){const re=ee||{};return re.type=V,re.start=p(),s.events.push(["enter",re,s]),u.push(re),re}function k(V){const ee=u.pop();return ee.end=p(),s.events.push(["exit",ee,s]),ee}function P(V,ee){H(V,ee.from)}function x(V,ee){ee.restore()}function N(V,ee){return re;function re(ue,Ce,R){let De,z,q,J;return Array.isArray(ue)?T(ue):"tokenize"in ue?T([ue]):v(ue);function v(w){return C;function C(D){const G=D!==null&&w[D],B=D!==null&&w.null,j=[...Array.isArray(G)?G:G?[G]:[],...Array.isArray(B)?B:B?[B]:[]];return T(j)(D)}}function T(w){return De=w,z=0,w.length===0?R:A(w[z])}function A(w){return C;function C(D){return J=X(),q=w,w.partial||(s.currentConstruct=w),w.name&&s.parser.constructs.disable.null.includes(w.name)?E():w.tokenize.call(ee?Object.assign(Object.create(s),ee):s,a,I,E)(D)}}function I(w){return V(q,J),Ce}function E(w){return J.restore(),++z<De.length?A(De[z]):R}}}function H(V,ee){V.resolveAll&&!l.includes(V)&&l.push(V),V.resolve&&wt(s.events,ee,s.events.length-ee,V.resolve(s.events.slice(ee),s)),V.resolveTo&&(s.events=V.resolveTo(s.events,s))}function X(){const V=p(),ee=s.previous,re=s.currentConstruct,ue=s.events.length,Ce=Array.from(u);return{restore:R,from:ue};function R(){r=V,s.previous=ee,s.currentConstruct=re,s.events.length=ue,u=Ce,Y()}}function Y(){r.line in i&&r.column<2&&(r.column=i[r.line],r.offset+=i[r.line]-1)}}function qv(e,t){const n=t.start._index,r=t.start._bufferIndex,i=t.end._index,l=t.end._bufferIndex;let o;return n===i?o=[e[n].slice(r,l)]:(o=e.slice(n,i),r>-1&&(o[0]=o[0].slice(r)),l>0&&o.push(e[i].slice(0,l))),o}function Zv(e,t){let n=-1;const r=[];let i;for(;++n<e.length;){const l=e[n];let o;if(typeof l=="string")o=l;else switch(l){case-5:{o="\r";break}case-4:{o=`
`;break}case-3:{o=`\r
`;break}case-2:{o=t?" ":"	";break}case-1:{if(!t&&i)continue;o=" ";break}default:o=String.fromCharCode(l)}i=l===-2,r.push(o)}return r.join("")}const Jv={[42]:_t,[43]:_t,[45]:_t,[48]:_t,[49]:_t,[50]:_t,[51]:_t,[52]:_t,[53]:_t,[54]:_t,[55]:_t,[56]:_t,[57]:_t,[62]:t_},eE={[91]:rv},tE={[-2]:Su,[-1]:Su,[32]:Su},nE={[35]:sv,[42]:Nl,[45]:[Kf,Nl],[60]:hv,[61]:Kf,[95]:Nl,[96]:Gf,[126]:Gf},rE={[38]:r_,[92]:n_},iE={[-5]:Au,[-4]:Au,[-3]:Au,[33]:Iv,[38]:r_,[42]:Oa,[60]:[M0,yv],[91]:Pv,[92]:[uv,n_],[93]:Hs,[95]:Oa,[96]:Q0},lE={null:[Oa,Gv]},oE={null:[42,95]},uE={null:[]},aE=Object.freeze(Object.defineProperty({__proto__:null,document:Jv,contentInitial:eE,flowInitial:tE,flow:nE,string:rE,text:iE,insideSpan:lE,attentionMarkers:oE,disable:uE},Symbol.toStringTag,{value:"Module"}));function sE(e={}){const t=e_([aE].concat(e.extensions||[])),n={defined:[],lazy:{},constructs:t,content:r(C0),document:r(R0),flow:r($v),string:r(Qv),text:r(Kv)};return n;function r(i){return l;function l(o){return Yv(n,i,o)}}}const Xf=/[\0\t\n\r]/g;function cE(){let e=1,t="",n=!0,r;return i;function i(l,o,u){const a=[];let s,c,d,f,h;for(l=t+l.toString(o),d=0,t="",n&&(l.charCodeAt(0)===65279&&d++,n=void 0);d<l.length;){if(Xf.lastIndex=d,s=Xf.exec(l),f=s&&s.index!==void 0?s.index:l.length,h=l.charCodeAt(f),!s){t=l.slice(d);break}if(h===10&&d===f&&r)a.push(-3),r=void 0;else switch(r&&(a.push(-5),r=void 0),d<f&&(a.push(l.slice(d,f)),e+=f-d),h){case 0:{a.push(65533),e++;break}case 9:{for(c=Math.ceil(e/4)*4,a.push(-2);e++<c;)a.push(-1);break}case 10:{a.push(-4),e=1;break}default:r=!0,e=1}d=f+1}return u&&(r&&a.push(-5),t&&a.push(t),a.push(null)),a}}function fE(e){for(;!i_(e););return e}function c_(e,t){const n=Number.parseInt(e,t);return n<9||n===11||n>13&&n<32||n>126&&n<160||n>55295&&n<57344||n>64975&&n<65008||(n&65535)===65535||(n&65535)===65534||n>1114111?"�":String.fromCharCode(n)}const dE=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function f_(e){return e.replace(dE,hE)}function hE(e,t,n){if(t)return t;if(n.charCodeAt(0)===35){const i=n.charCodeAt(1),l=i===120||i===88;return c_(n.slice(l?2:1),l?16:10)}return bs(n)||e}const Ma={}.hasOwnProperty,pE=function(e,t,n){return typeof t!="string"&&(n=t,t=void 0),_E(n)(fE(sE(n).document().write(cE()(e,t,!0))))};function _E(e={}){const t=d_({transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:a(K),autolinkProtocol:ee,autolinkEmail:ee,atxHeading:a(rt),blockQuote:a(te),characterEscape:ee,characterReference:ee,codeFenced:a(Te),codeFencedFenceInfo:s,codeFencedFenceMeta:s,codeIndented:a(Te,s),codeText:a(ge,s),codeTextData:ee,data:ee,codeFlowValue:ee,definition:a(Ee),definitionDestinationString:s,definitionLabelString:s,definitionTitleString:s,emphasis:a(xe),hardBreakEscape:a(O),hardBreakTrailing:a(O),htmlFlow:a(M,s),htmlFlowData:ee,htmlText:a(M,s),htmlTextData:ee,image:a(b),label:s,link:a(K),listItem:a(se),listItemValue:m,listOrdered:a($,p),listUnordered:a($),paragraph:a(ce),reference:w,referenceString:s,resourceDestinationString:s,resourceTitleString:s,setextHeading:a(rt),strong:a(_e),thematicBreak:a(Ge)},exit:{atxHeading:d(),atxHeadingSequence:H,autolink:d(),autolinkEmail:j,autolinkProtocol:B,blockQuote:d(),characterEscapeValue:re,characterReferenceMarkerHexadecimal:D,characterReferenceMarkerNumeric:D,characterReferenceValue:G,codeFenced:d(y),codeFencedFence:g,codeFencedFenceInfo:L,codeFencedFenceMeta:_,codeFlowValue:re,codeIndented:d(k),codeText:d(z),codeTextData:re,data:re,definition:d(),definitionDestinationString:N,definitionLabelString:P,definitionTitleString:x,emphasis:d(),hardBreakEscape:d(Ce),hardBreakTrailing:d(Ce),htmlFlow:d(R),htmlFlowData:re,htmlText:d(De),htmlTextData:re,image:d(J),label:T,labelText:v,lineEnding:ue,link:d(q),listItem:d(),listOrdered:d(),listUnordered:d(),paragraph:d(),referenceString:C,resourceDestinationString:A,resourceTitleString:I,resource:E,setextHeading:d(V),setextHeadingLineSequence:Y,setextHeadingText:X,strong:d(),thematicBreak:d()}},e.mdastExtensions||[]),n={};return r;function r(S){let F={type:"root",children:[]};const ne=[F],fe=[],Ye=[],Xt={stack:ne,tokenStack:fe,config:t,enter:c,exit:f,buffer:s,resume:h,setData:l,getData:o};let Le=-1;for(;++Le<S.length;)if(S[Le][1].type==="listOrdered"||S[Le][1].type==="listUnordered")if(S[Le][0]==="enter")Ye.push(Le);else{const Oe=Ye.pop();Le=i(S,Oe,Le)}for(Le=-1;++Le<S.length;){const Oe=t[S[Le][0]];Ma.call(Oe,S[Le][1].type)&&Oe[S[Le][1].type].call(Object.assign({sliceSerialize:S[Le][2].sliceSerialize},Xt),S[Le][1])}if(fe.length>0){const Oe=fe[fe.length-1];(Oe[1]||Yf).call(Xt,void 0,Oe[0])}for(F.position={start:u(S.length>0?S[0][1].start:{line:1,column:1,offset:0}),end:u(S.length>0?S[S.length-2][1].end:{line:1,column:1,offset:0})},Le=-1;++Le<t.transforms.length;)F=t.transforms[Le](F)||F;return F}function i(S,F,ne){let fe=F-1,Ye=-1,Xt=!1,Le,Oe,Yt,He;for(;++fe<=ne;){const me=S[fe];if(me[1].type==="listUnordered"||me[1].type==="listOrdered"||me[1].type==="blockQuote"?(me[0]==="enter"?Ye++:Ye--,He=void 0):me[1].type==="lineEndingBlank"?me[0]==="enter"&&(Le&&!He&&!Ye&&!Yt&&(Yt=fe),He=void 0):me[1].type==="linePrefix"||me[1].type==="listItemValue"||me[1].type==="listItemMarker"||me[1].type==="listItemPrefix"||me[1].type==="listItemPrefixWhitespace"||(He=void 0),!Ye&&me[0]==="enter"&&me[1].type==="listItemPrefix"||Ye===-1&&me[0]==="exit"&&(me[1].type==="listUnordered"||me[1].type==="listOrdered")){if(Le){let Bt=fe;for(Oe=void 0;Bt--;){const st=S[Bt];if(st[1].type==="lineEnding"||st[1].type==="lineEndingBlank"){if(st[0]==="exit")continue;Oe&&(S[Oe][1].type="lineEndingBlank",Xt=!0),st[1].type="lineEnding",Oe=Bt}else if(!(st[1].type==="linePrefix"||st[1].type==="blockQuotePrefix"||st[1].type==="blockQuotePrefixWhitespace"||st[1].type==="blockQuoteMarker"||st[1].type==="listItemIndent"))break}Yt&&(!Oe||Yt<Oe)&&(Le._spread=!0),Le.end=Object.assign({},Oe?S[Oe][1].start:me[1].end),S.splice(Oe||fe,0,["exit",Le,me[2]]),fe++,ne++}me[1].type==="listItemPrefix"&&(Le={type:"listItem",_spread:!1,start:Object.assign({},me[1].start)},S.splice(fe,0,["enter",Le,me[2]]),fe++,ne++,Yt=void 0,He=!0)}}return S[F][1]._spread=Xt,ne}function l(S,F){n[S]=F}function o(S){return n[S]}function u(S){return{line:S.line,column:S.column,offset:S.offset}}function a(S,F){return ne;function ne(fe){c.call(this,S(fe),fe),F&&F.call(this,fe)}}function s(){this.stack.push({type:"fragment",children:[]})}function c(S,F,ne){return this.stack[this.stack.length-1].children.push(S),this.stack.push(S),this.tokenStack.push([F,ne]),S.position={start:u(F.start)},S}function d(S){return F;function F(ne){S&&S.call(this,ne),f.call(this,ne)}}function f(S,F){const ne=this.stack.pop(),fe=this.tokenStack.pop();if(fe)fe[0].type!==S.type&&(F?F.call(this,S,fe[0]):(fe[1]||Yf).call(this,S,fe[0]));else throw new Error("Cannot close `"+S.type+"` ("+xi({start:S.start,end:S.end})+"): it’s not open");return ne.position.end=u(S.end),ne}function h(){return x0(this.stack.pop())}function p(){l("expectingFirstListItemValue",!0)}function m(S){if(o("expectingFirstListItemValue")){const F=this.stack[this.stack.length-2];F.start=Number.parseInt(this.sliceSerialize(S),10),l("expectingFirstListItemValue")}}function L(){const S=this.resume(),F=this.stack[this.stack.length-1];F.lang=S}function _(){const S=this.resume(),F=this.stack[this.stack.length-1];F.meta=S}function g(){o("flowCodeInside")||(this.buffer(),l("flowCodeInside",!0))}function y(){const S=this.resume(),F=this.stack[this.stack.length-1];F.value=S.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),l("flowCodeInside")}function k(){const S=this.resume(),F=this.stack[this.stack.length-1];F.value=S.replace(/(\r?\n|\r)$/g,"")}function P(S){const F=this.resume(),ne=this.stack[this.stack.length-1];ne.label=F,ne.identifier=Qt(this.sliceSerialize(S)).toLowerCase()}function x(){const S=this.resume(),F=this.stack[this.stack.length-1];F.title=S}function N(){const S=this.resume(),F=this.stack[this.stack.length-1];F.url=S}function H(S){const F=this.stack[this.stack.length-1];if(!F.depth){const ne=this.sliceSerialize(S).length;F.depth=ne}}function X(){l("setextHeadingSlurpLineEnding",!0)}function Y(S){const F=this.stack[this.stack.length-1];F.depth=this.sliceSerialize(S).charCodeAt(0)===61?1:2}function V(){l("setextHeadingSlurpLineEnding")}function ee(S){const F=this.stack[this.stack.length-1];let ne=F.children[F.children.length-1];(!ne||ne.type!=="text")&&(ne=ae(),ne.position={start:u(S.start)},F.children.push(ne)),this.stack.push(ne)}function re(S){const F=this.stack.pop();F.value+=this.sliceSerialize(S),F.position.end=u(S.end)}function ue(S){const F=this.stack[this.stack.length-1];if(o("atHardBreak")){const ne=F.children[F.children.length-1];ne.position.end=u(S.end),l("atHardBreak");return}!o("setextHeadingSlurpLineEnding")&&t.canContainEols.includes(F.type)&&(ee.call(this,S),re.call(this,S))}function Ce(){l("atHardBreak",!0)}function R(){const S=this.resume(),F=this.stack[this.stack.length-1];F.value=S}function De(){const S=this.resume(),F=this.stack[this.stack.length-1];F.value=S}function z(){const S=this.resume(),F=this.stack[this.stack.length-1];F.value=S}function q(){const S=this.stack[this.stack.length-1];o("inReference")?(S.type+="Reference",S.referenceType=o("referenceType")||"shortcut",delete S.url,delete S.title):(delete S.identifier,delete S.label),l("referenceType")}function J(){const S=this.stack[this.stack.length-1];o("inReference")?(S.type+="Reference",S.referenceType=o("referenceType")||"shortcut",delete S.url,delete S.title):(delete S.identifier,delete S.label),l("referenceType")}function v(S){const F=this.stack[this.stack.length-2],ne=this.sliceSerialize(S);F.label=f_(ne),F.identifier=Qt(ne).toLowerCase()}function T(){const S=this.stack[this.stack.length-1],F=this.resume(),ne=this.stack[this.stack.length-1];l("inReference",!0),ne.type==="link"?ne.children=S.children:ne.alt=F}function A(){const S=this.resume(),F=this.stack[this.stack.length-1];F.url=S}function I(){const S=this.resume(),F=this.stack[this.stack.length-1];F.title=S}function E(){l("inReference")}function w(){l("referenceType","collapsed")}function C(S){const F=this.resume(),ne=this.stack[this.stack.length-1];ne.label=F,ne.identifier=Qt(this.sliceSerialize(S)).toLowerCase(),l("referenceType","full")}function D(S){l("characterReferenceType",S.type)}function G(S){const F=this.sliceSerialize(S),ne=o("characterReferenceType");let fe;ne?(fe=c_(F,ne==="characterReferenceMarkerNumeric"?10:16),l("characterReferenceType")):fe=bs(F);const Ye=this.stack.pop();Ye.value+=fe,Ye.position.end=u(S.end)}function B(S){re.call(this,S);const F=this.stack[this.stack.length-1];F.url=this.sliceSerialize(S)}function j(S){re.call(this,S);const F=this.stack[this.stack.length-1];F.url="mailto:"+this.sliceSerialize(S)}function te(){return{type:"blockquote",children:[]}}function Te(){return{type:"code",lang:null,meta:null,value:""}}function ge(){return{type:"inlineCode",value:""}}function Ee(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function xe(){return{type:"emphasis",children:[]}}function rt(){return{type:"heading",depth:void 0,children:[]}}function O(){return{type:"break"}}function M(){return{type:"html",value:""}}function b(){return{type:"image",title:null,url:"",alt:null}}function K(){return{type:"link",title:null,url:"",children:[]}}function $(S){return{type:"list",ordered:S.type==="listOrdered",start:null,spread:S._spread,children:[]}}function se(S){return{type:"listItem",spread:S._spread,checked:null,children:[]}}function ce(){return{type:"paragraph",children:[]}}function _e(){return{type:"strong",children:[]}}function ae(){return{type:"text",value:""}}function Ge(){return{type:"thematicBreak"}}}function d_(e,t){let n=-1;for(;++n<t.length;){const r=t[n];Array.isArray(r)?d_(e,r):mE(e,r)}return e}function mE(e,t){let n;for(n in t)if(Ma.call(t,n)){const r=n==="canContainEols"||n==="transforms",l=(Ma.call(e,n)?e[n]:void 0)||(e[n]=r?[]:{}),o=t[n];o&&(r?e[n]=[...l,...o]:Object.assign(l,o))}}function Yf(e,t){throw e?new Error("Cannot close `"+e.type+"` ("+xi({start:e.start,end:e.end})+"): a different token (`"+t.type+"`, "+xi({start:t.start,end:t.end})+") is open"):new Error("Cannot close document, a token (`"+t.type+"`, "+xi({start:t.start,end:t.end})+") is still open")}function gE(e){Object.assign(this,{Parser:n=>{const r=this.data("settings");return pE(n,Object.assign({},r,e,{extensions:this.data("micromarkExtensions")||[],mdastExtensions:this.data("fromMarkdownExtensions")||[]}))}})}var Xe=function(e,t,n){var r={type:String(e)};return n==null&&(typeof t=="string"||Array.isArray(t))?n=t:Object.assign(r,t),Array.isArray(n)?r.children=n:n!=null&&(r.value=String(n)),r};const Dl={}.hasOwnProperty;function yE(e,t){const n=t.data||{};return"value"in t&&!(Dl.call(n,"hName")||Dl.call(n,"hProperties")||Dl.call(n,"hChildren"))?e.augment(t,Xe("text",t.value)):e(t,"div",at(e,t))}function h_(e,t,n){const r=t&&t.type;let i;if(!r)throw new Error("Expected node, got `"+t+"`");return Dl.call(e.handlers,r)?i=e.handlers[r]:e.passThrough&&e.passThrough.includes(r)?i=vE:i=e.unknownHandler,(typeof i=="function"?i:yE)(e,t,n)}function vE(e,t){return"children"in t?{...t,children:at(e,t)}:t}function at(e,t){const n=[];if("children"in t){const r=t.children;let i=-1;for(;++i<r.length;){const l=h_(e,r[i],t);if(l){if(i&&r[i-1].type==="break"&&(!Array.isArray(l)&&l.type==="text"&&(l.value=l.value.replace(/^\s+/,"")),!Array.isArray(l)&&l.type==="element")){const o=l.children[0];o&&o.type==="text"&&(o.value=o.value.replace(/^\s+/,""))}Array.isArray(l)?n.push(...l):n.push(l)}}}return n}const Bs=function(e){if(e==null)return LE;if(typeof e=="string")return xE(e);if(typeof e=="object")return Array.isArray(e)?EE(e):TE(e);if(typeof e=="function")return Oo(e);throw new Error("Expected function, string, or object as test")};function EE(e){const t=[];let n=-1;for(;++n<e.length;)t[n]=Bs(e[n]);return Oo(r);function r(...i){let l=-1;for(;++l<t.length;)if(t[l].call(this,...i))return!0;return!1}}function TE(e){return Oo(t);function t(n){let r;for(r in e)if(n[r]!==e[r])return!1;return!0}}function xE(e){return Oo(t);function t(n){return n&&n.type===e}}function Oo(e){return t;function t(...n){return Boolean(e.call(this,...n))}}function LE(){return!0}const kE=!0,wE="skip",qf=!1,p_=function(e,t,n,r){typeof t=="function"&&typeof n!="function"&&(r=n,n=t,t=null);const i=Bs(t),l=r?-1:1;o(e,null,[])();function o(u,a,s){const c=typeof u=="object"&&u!==null?u:{};let d;return typeof c.type=="string"&&(d=typeof c.tagName=="string"?c.tagName:typeof c.name=="string"?c.name:void 0,Object.defineProperty(f,"name",{value:"node ("+(c.type+(d?"<"+d+">":""))+")"})),f;function f(){let h=[],p,m,L;if((!t||i(u,a,s[s.length-1]||null))&&(h=SE(n(u,s)),h[0]===qf))return h;if(u.children&&h[0]!==wE)for(m=(r?u.children.length:-1)+l,L=s.concat(u);m>-1&&m<u.children.length;){if(p=o(u.children[m],m,L)(),p[0]===qf)return p;m=typeof p[1]=="number"?p[1]:m+l}return h}}};function SE(e){return Array.isArray(e)?e:typeof e=="number"?[kE,e]:[e]}const Us=function(e,t,n,r){typeof t=="function"&&typeof n!="function"&&(r=n,n=t,t=null),p_(e,t,i,r);function i(l,o){const u=o[o.length-1];return n(l,u?u.children.indexOf(l):null,u)}},__=g_("start"),m_=g_("end");function g_(e){return t;function t(n){const r=n&&n.position&&n.position[e]||{};return{line:r.line||null,column:r.column||null,offset:r.offset>-1?r.offset:null}}}function AE(e){return!e||!e.position||!e.position.start||!e.position.start.line||!e.position.start.column||!e.position.end||!e.position.end.line||!e.position.end.column}const Zf={}.hasOwnProperty;function CE(e){const t=Object.create(null);if(!e||!e.type)throw new Error("mdast-util-definitions expected node");return Us(e,"definition",r=>{const i=Jf(r.identifier);i&&!Zf.call(t,i)&&(t[i]=r)}),n;function n(r){const i=Jf(r);return i&&Zf.call(t,i)?t[i]:null}}function Jf(e){return String(e||"").toUpperCase()}function Qr(e){const t=[];let n=-1,r=0,i=0;for(;++n<e.length;){const l=e.charCodeAt(n);let o="";if(l===37&&ft(e.charCodeAt(n+1))&&ft(e.charCodeAt(n+2)))i=2;else if(l<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(l))||(o=String.fromCharCode(l));else if(l>55295&&l<57344){const u=e.charCodeAt(n+1);l<56320&&u>56319&&u<57344?(o=String.fromCharCode(l,u),i=1):o="�"}else o=String.fromCharCode(l);o&&(t.push(e.slice(r,n),encodeURIComponent(o)),r=n+i+1,o=""),i&&(n+=i,i=0)}return t.join("")+e.slice(r)}function fn(e,t){const n=[];let r=-1;for(t&&n.push(Xe("text",`
`));++r<e.length;)r&&n.push(Xe("text",`
`)),n.push(e[r]);return t&&e.length>0&&n.push(Xe("text",`
`)),n}function IE(e){let t=-1;const n=[];for(;++t<e.footnoteOrder.length;){const r=e.footnoteById[e.footnoteOrder[t].toUpperCase()];if(!r)continue;const i=at(e,r),l=String(r.identifier),o=Qr(l.toLowerCase());let u=0;const a=[];for(;++u<=e.footnoteCounts[l];){const d={type:"element",tagName:"a",properties:{href:"#"+e.clobberPrefix+"fnref-"+o+(u>1?"-"+u:""),dataFootnoteBackref:!0,className:["data-footnote-backref"],ariaLabel:e.footnoteBackLabel},children:[{type:"text",value:"↩"}]};u>1&&d.children.push({type:"element",tagName:"sup",children:[{type:"text",value:String(u)}]}),a.length>0&&a.push({type:"text",value:" "}),a.push(d)}const s=i[i.length-1];if(s&&s.type==="element"&&s.tagName==="p"){const d=s.children[s.children.length-1];d&&d.type==="text"?d.value+=" ":s.children.push({type:"text",value:" "}),s.children.push(...a)}else i.push(...a);const c={type:"element",tagName:"li",properties:{id:e.clobberPrefix+"fn-"+o},children:fn(i,!0)};r.position&&(c.position=r.position),n.push(c)}return n.length===0?null:{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:e.footnoteLabelTagName,properties:{...JSON.parse(JSON.stringify(e.footnoteLabelProperties)),id:"footnote-label"},children:[Xe("text",e.footnoteLabel)]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:fn(n,!0)},{type:"text",value:`
`}]}}function RE(e,t){return e(t,"blockquote",fn(at(e,t),!0))}function PE(e,t){return[e(t,"br"),Xe("text",`
`)]}function NE(e,t){const n=t.value?t.value+`
`:"",r=t.lang&&t.lang.match(/^[^ \t]+(?=[ \t]|$)/),i={};r&&(i.className=["language-"+r]);const l=e(t,"code",i,[Xe("text",n)]);return t.meta&&(l.data={meta:t.meta}),e(t.position,"pre",[l])}function DE(e,t){return e(t,"del",at(e,t))}function OE(e,t){return e(t,"em",at(e,t))}function y_(e,t){const n=String(t.identifier),r=Qr(n.toLowerCase()),i=e.footnoteOrder.indexOf(n);let l;i===-1?(e.footnoteOrder.push(n),e.footnoteCounts[n]=1,l=e.footnoteOrder.length):(e.footnoteCounts[n]++,l=i+1);const o=e.footnoteCounts[n];return e(t,"sup",[e(t.position,"a",{href:"#"+e.clobberPrefix+"fn-"+r,id:e.clobberPrefix+"fnref-"+r+(o>1?"-"+o:""),dataFootnoteRef:!0,ariaDescribedBy:"footnote-label"},[Xe("text",String(l))])])}function ME(e,t){const n=e.footnoteById;let r=1;for(;r in n;)r++;const i=String(r);return n[i]={type:"footnoteDefinition",identifier:i,children:[{type:"paragraph",children:t.children}],position:t.position},y_(e,{type:"footnoteReference",identifier:i,position:t.position})}function FE(e,t){return e(t,"h"+t.depth,at(e,t))}function zE(e,t){return e.dangerous?e.augment(t,Xe("raw",t.value)):null}function v_(e,t){const n=t.referenceType;let r="]";if(n==="collapsed"?r+="[]":n==="full"&&(r+="["+(t.label||t.identifier)+"]"),t.type==="imageReference")return Xe("text","!["+t.alt+r);const i=at(e,t),l=i[0];l&&l.type==="text"?l.value="["+l.value:i.unshift(Xe("text","["));const o=i[i.length-1];return o&&o.type==="text"?o.value+=r:i.push(Xe("text",r)),i}function bE(e,t){const n=e.definition(t.identifier);if(!n)return v_(e,t);const r={src:Qr(n.url||""),alt:t.alt};return n.title!==null&&n.title!==void 0&&(r.title=n.title),e(t,"img",r)}function HE(e,t){const n={src:Qr(t.url),alt:t.alt};return t.title!==null&&t.title!==void 0&&(n.title=t.title),e(t,"img",n)}function BE(e,t){return e(t,"code",[Xe("text",t.value.replace(/\r?\n|\r/g," "))])}function UE(e,t){const n=e.definition(t.identifier);if(!n)return v_(e,t);const r={href:Qr(n.url||"")};return n.title!==null&&n.title!==void 0&&(r.title=n.title),e(t,"a",r,at(e,t))}function jE(e,t){const n={href:Qr(t.url)};return t.title!==null&&t.title!==void 0&&(n.title=t.title),e(t,"a",n,at(e,t))}function WE(e,t,n){const r=at(e,t),i=n?$E(n):E_(t),l={},o=[];if(typeof t.checked=="boolean"){let s;r[0]&&r[0].type==="element"&&r[0].tagName==="p"?s=r[0]:(s=e(null,"p",[]),r.unshift(s)),s.children.length>0&&s.children.unshift(Xe("text"," ")),s.children.unshift(e(null,"input",{type:"checkbox",checked:t.checked,disabled:!0})),l.className=["task-list-item"]}let u=-1;for(;++u<r.length;){const s=r[u];(i||u!==0||s.type!=="element"||s.tagName!=="p")&&o.push(Xe("text",`
`)),s.type==="element"&&s.tagName==="p"&&!i?o.push(...s.children):o.push(s)}const a=r[r.length-1];return a&&(i||!("tagName"in a)||a.tagName!=="p")&&o.push(Xe("text",`
`)),e(t,"li",l,o)}function $E(e){let t=e.spread;const n=e.children;let r=-1;for(;!t&&++r<n.length;)t=E_(n[r]);return Boolean(t)}function E_(e){const t=e.spread;return t??e.children.length>1}function VE(e,t){const n={},r=t.ordered?"ol":"ul",i=at(e,t);let l=-1;for(typeof t.start=="number"&&t.start!==1&&(n.start=t.start);++l<i.length;){const o=i[l];if(o.type==="element"&&o.tagName==="li"&&o.properties&&Array.isArray(o.properties.className)&&o.properties.className.includes("task-list-item")){n.className=["contains-task-list"];break}}return e(t,r,n,fn(i,!0))}function GE(e,t){return e(t,"p",at(e,t))}function QE(e,t){return e.augment(t,Xe("root",fn(at(e,t))))}function KE(e,t){return e(t,"strong",at(e,t))}function XE(e,t){const n=t.children;let r=-1;const i=t.align||[],l=[];for(;++r<n.length;){const o=n[r].children,u=r===0?"th":"td",a=[];let s=-1;const c=t.align?i.length:o.length;for(;++s<c;){const d=o[s];a.push(e(d,u,{align:i[s]},d?at(e,d):[]))}l[r]=e(n[r],"tr",fn(a,!0))}return e(t,"table",fn([e(l[0].position,"thead",fn([l[0]],!0))].concat(l[1]?e({start:__(l[1]),end:m_(l[l.length-1])},"tbody",fn(l.slice(1),!0)):[]),!0))}const ed=9,td=32;function YE(e){const t=String(e),n=/\r?\n|\r/g;let r=n.exec(t),i=0;const l=[];for(;r;)l.push(nd(t.slice(i,r.index),i>0,!0),r[0]),i=r.index+r[0].length,r=n.exec(t);return l.push(nd(t.slice(i),i>0,!1)),l.join("")}function nd(e,t,n){let r=0,i=e.length;if(t){let l=e.codePointAt(r);for(;l===ed||l===td;)r++,l=e.codePointAt(r)}if(n){let l=e.codePointAt(i-1);for(;l===ed||l===td;)i--,l=e.codePointAt(i-1)}return i>r?e.slice(r,i):""}function qE(e,t){return e.augment(t,Xe("text",YE(String(t.value))))}function ZE(e,t){return e(t,"hr")}const JE={blockquote:RE,break:PE,code:NE,delete:DE,emphasis:OE,footnoteReference:y_,footnote:ME,heading:FE,html:zE,imageReference:bE,image:HE,inlineCode:BE,linkReference:UE,link:jE,listItem:WE,list:VE,paragraph:GE,root:QE,strong:KE,table:XE,text:qE,thematicBreak:ZE,toml:gl,yaml:gl,definition:gl,footnoteDefinition:gl};function gl(){return null}const eT={}.hasOwnProperty;function tT(e,t){const n=t||{},r=n.allowDangerousHtml||!1,i={};return o.dangerous=r,o.clobberPrefix=n.clobberPrefix===void 0||n.clobberPrefix===null?"user-content-":n.clobberPrefix,o.footnoteLabel=n.footnoteLabel||"Footnotes",o.footnoteLabelTagName=n.footnoteLabelTagName||"h2",o.footnoteLabelProperties=n.footnoteLabelProperties||{className:["sr-only"]},o.footnoteBackLabel=n.footnoteBackLabel||"Back to content",o.definition=CE(e),o.footnoteById=i,o.footnoteOrder=[],o.footnoteCounts={},o.augment=l,o.handlers={...JE,...n.handlers},o.unknownHandler=n.unknownHandler,o.passThrough=n.passThrough,Us(e,"footnoteDefinition",u=>{const a=String(u.identifier).toUpperCase();eT.call(i,a)||(i[a]=u)}),o;function l(u,a){if(u&&"data"in u&&u.data){const s=u.data;s.hName&&(a.type!=="element"&&(a={type:"element",tagName:"",properties:{},children:[]}),a.tagName=s.hName),a.type==="element"&&s.hProperties&&(a.properties={...a.properties,...s.hProperties}),"children"in a&&a.children&&s.hChildren&&(a.children=s.hChildren)}if(u){const s="type"in u?u:{position:u};AE(s)||(a.position={start:__(s),end:m_(s)})}return a}function o(u,a,s,c){return Array.isArray(s)&&(c=s,s={}),l(u,{type:"element",tagName:a,properties:s||{},children:c||[]})}}function T_(e,t){const n=tT(e,t),r=h_(n,e,null),i=IE(n);return i&&r.children.push(Xe("text",`
`),i),Array.isArray(r)?{type:"root",children:r}:r}const nT=function(e,t){return e&&"run"in e?iT(e,t):lT(e||t)},rT=nT;function iT(e,t){return(n,r,i)=>{e.run(T_(n,t),r,l=>{i(l)})}}function lT(e){return t=>T_(t,e)}var oe={},oT={get exports(){return oe},set exports(e){oe=e}},uT="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",aT=uT,sT=aT;function x_(){}function L_(){}L_.resetWarningCache=x_;var cT=function(){function e(r,i,l,o,u,a){if(a!==sT){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:L_,resetWarningCache:x_};return n.PropTypes=n,n};oT.exports=cT();class Ji{constructor(t,n,r){this.property=t,this.normal=n,r&&(this.space=r)}}Ji.prototype.property={};Ji.prototype.normal={};Ji.prototype.space=null;function k_(e,t){const n={},r={};let i=-1;for(;++i<e.length;)Object.assign(n,e[i].property),Object.assign(r,e[i].normal);return new Ji(n,r,t)}function Fa(e){return e.toLowerCase()}class bt{constructor(t,n){this.property=t,this.attribute=n}}bt.prototype.space=null;bt.prototype.boolean=!1;bt.prototype.booleanish=!1;bt.prototype.overloadedBoolean=!1;bt.prototype.number=!1;bt.prototype.commaSeparated=!1;bt.prototype.spaceSeparated=!1;bt.prototype.commaOrSpaceSeparated=!1;bt.prototype.mustUseProperty=!1;bt.prototype.defined=!1;let fT=0;const de=hr(),je=hr(),w_=hr(),W=hr(),Pe=hr(),Mr=hr(),Tt=hr();function hr(){return 2**++fT}const za=Object.freeze(Object.defineProperty({__proto__:null,boolean:de,booleanish:je,overloadedBoolean:w_,number:W,spaceSeparated:Pe,commaSeparated:Mr,commaOrSpaceSeparated:Tt},Symbol.toStringTag,{value:"Module"})),Cu=Object.keys(za);class js extends bt{constructor(t,n,r,i){let l=-1;if(super(t,n),rd(this,"space",i),typeof r=="number")for(;++l<Cu.length;){const o=Cu[l];rd(this,Cu[l],(r&za[o])===za[o])}}}js.prototype.defined=!0;function rd(e,t,n){n&&(e[t]=n)}const dT={}.hasOwnProperty;function Kr(e){const t={},n={};let r;for(r in e.properties)if(dT.call(e.properties,r)){const i=e.properties[r],l=new js(r,e.transform(e.attributes||{},r),i,e.space);e.mustUseProperty&&e.mustUseProperty.includes(r)&&(l.mustUseProperty=!0),t[r]=l,n[Fa(r)]=r,n[Fa(l.attribute)]=r}return new Ji(t,n,e.space)}const S_=Kr({space:"xlink",transform(e,t){return"xlink:"+t.slice(5).toLowerCase()},properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null}}),A_=Kr({space:"xml",transform(e,t){return"xml:"+t.slice(3).toLowerCase()},properties:{xmlLang:null,xmlBase:null,xmlSpace:null}});function C_(e,t){return t in e?e[t]:t}function I_(e,t){return C_(e,t.toLowerCase())}const R_=Kr({space:"xmlns",attributes:{xmlnsxlink:"xmlns:xlink"},transform:I_,properties:{xmlns:null,xmlnsXLink:null}}),P_=Kr({transform(e,t){return t==="role"?t:"aria-"+t.slice(4).toLowerCase()},properties:{ariaActiveDescendant:null,ariaAtomic:je,ariaAutoComplete:null,ariaBusy:je,ariaChecked:je,ariaColCount:W,ariaColIndex:W,ariaColSpan:W,ariaControls:Pe,ariaCurrent:null,ariaDescribedBy:Pe,ariaDetails:null,ariaDisabled:je,ariaDropEffect:Pe,ariaErrorMessage:null,ariaExpanded:je,ariaFlowTo:Pe,ariaGrabbed:je,ariaHasPopup:null,ariaHidden:je,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:Pe,ariaLevel:W,ariaLive:null,ariaModal:je,ariaMultiLine:je,ariaMultiSelectable:je,ariaOrientation:null,ariaOwns:Pe,ariaPlaceholder:null,ariaPosInSet:W,ariaPressed:je,ariaReadOnly:je,ariaRelevant:null,ariaRequired:je,ariaRoleDescription:Pe,ariaRowCount:W,ariaRowIndex:W,ariaRowSpan:W,ariaSelected:je,ariaSetSize:W,ariaSort:null,ariaValueMax:W,ariaValueMin:W,ariaValueNow:W,ariaValueText:null,role:null}}),hT=Kr({space:"html",attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},transform:I_,mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:Mr,acceptCharset:Pe,accessKey:Pe,action:null,allow:null,allowFullScreen:de,allowPaymentRequest:de,allowUserMedia:de,alt:null,as:null,async:de,autoCapitalize:null,autoComplete:Pe,autoFocus:de,autoPlay:de,capture:de,charSet:null,checked:de,cite:null,className:Pe,cols:W,colSpan:null,content:null,contentEditable:je,controls:de,controlsList:Pe,coords:W|Mr,crossOrigin:null,data:null,dateTime:null,decoding:null,default:de,defer:de,dir:null,dirName:null,disabled:de,download:w_,draggable:je,encType:null,enterKeyHint:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:de,formTarget:null,headers:Pe,height:W,hidden:de,high:W,href:null,hrefLang:null,htmlFor:Pe,httpEquiv:Pe,id:null,imageSizes:null,imageSrcSet:null,inputMode:null,integrity:null,is:null,isMap:de,itemId:null,itemProp:Pe,itemRef:Pe,itemScope:de,itemType:Pe,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:de,low:W,manifest:null,max:null,maxLength:W,media:null,method:null,min:null,minLength:W,multiple:de,muted:de,name:null,nonce:null,noModule:de,noValidate:de,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:de,optimum:W,pattern:null,ping:Pe,placeholder:null,playsInline:de,poster:null,preload:null,readOnly:de,referrerPolicy:null,rel:Pe,required:de,reversed:de,rows:W,rowSpan:W,sandbox:Pe,scope:null,scoped:de,seamless:de,selected:de,shape:null,size:W,sizes:null,slot:null,span:W,spellCheck:je,src:null,srcDoc:null,srcLang:null,srcSet:null,start:W,step:null,style:null,tabIndex:W,target:null,title:null,translate:null,type:null,typeMustMatch:de,useMap:null,value:je,width:W,wrap:null,align:null,aLink:null,archive:Pe,axis:null,background:null,bgColor:null,border:W,borderColor:null,bottomMargin:W,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:de,declare:de,event:null,face:null,frame:null,frameBorder:null,hSpace:W,leftMargin:W,link:null,longDesc:null,lowSrc:null,marginHeight:W,marginWidth:W,noResize:de,noHref:de,noShade:de,noWrap:de,object:null,profile:null,prompt:null,rev:null,rightMargin:W,rules:null,scheme:null,scrolling:je,standby:null,summary:null,text:null,topMargin:W,valueType:null,version:null,vAlign:null,vLink:null,vSpace:W,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:de,disableRemotePlayback:de,prefix:null,property:null,results:W,security:null,unselectable:null}}),pT=Kr({space:"svg",attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},transform:C_,properties:{about:Tt,accentHeight:W,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:W,amplitude:W,arabicForm:null,ascent:W,attributeName:null,attributeType:null,azimuth:W,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:W,by:null,calcMode:null,capHeight:W,className:Pe,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:W,diffuseConstant:W,direction:null,display:null,dur:null,divisor:W,dominantBaseline:null,download:de,dx:null,dy:null,edgeMode:null,editable:null,elevation:W,enableBackground:null,end:null,event:null,exponent:W,externalResourcesRequired:null,fill:null,fillOpacity:W,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:Mr,g2:Mr,glyphName:Mr,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:W,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:W,horizOriginX:W,horizOriginY:W,id:null,ideographic:W,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:W,k:W,k1:W,k2:W,k3:W,k4:W,kernelMatrix:Tt,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:W,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:W,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:W,overlineThickness:W,paintOrder:null,panose1:null,path:null,pathLength:W,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:Pe,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:W,pointsAtY:W,pointsAtZ:W,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:Tt,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:Tt,rev:Tt,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:Tt,requiredFeatures:Tt,requiredFonts:Tt,requiredFormats:Tt,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:W,specularExponent:W,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:W,strikethroughThickness:W,string:null,stroke:null,strokeDashArray:Tt,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:W,strokeOpacity:W,strokeWidth:null,style:null,surfaceScale:W,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:Tt,tabIndex:W,tableValues:null,target:null,targetX:W,targetY:W,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:Tt,to:null,transform:null,u1:null,u2:null,underlinePosition:W,underlineThickness:W,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:W,values:null,vAlphabetic:W,vMathematical:W,vectorEffect:null,vHanging:W,vIdeographic:W,version:null,vertAdvY:W,vertOriginX:W,vertOriginY:W,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:W,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null}}),_T=/^data[-\w.:]+$/i,id=/-[a-z]/g,mT=/[A-Z]/g;function gT(e,t){const n=Fa(t);let r=t,i=bt;if(n in e.normal)return e.property[e.normal[n]];if(n.length>4&&n.slice(0,4)==="data"&&_T.test(t)){if(t.charAt(4)==="-"){const l=t.slice(5).replace(id,vT);r="data"+l.charAt(0).toUpperCase()+l.slice(1)}else{const l=t.slice(4);if(!id.test(l)){let o=l.replace(mT,yT);o.charAt(0)!=="-"&&(o="-"+o),t="data"+o}}i=js}return new i(r,t)}function yT(e){return"-"+e.toLowerCase()}function vT(e){return e.charAt(1).toUpperCase()}const ld={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},ET=k_([A_,S_,R_,P_,hT],"html"),TT=k_([A_,S_,R_,P_,pT],"svg");function xT(e){if(e.allowedElements&&e.disallowedElements)throw new TypeError("Only one of `allowedElements` and `disallowedElements` should be defined");if(e.allowedElements||e.disallowedElements||e.allowElement)return t=>{Us(t,"element",(n,r,i)=>{const l=i;let o;if(e.allowedElements?o=!e.allowedElements.includes(n.tagName):e.disallowedElements&&(o=e.disallowedElements.includes(n.tagName)),!o&&e.allowElement&&typeof r=="number"&&(o=!e.allowElement(n,r,l)),o&&typeof r=="number")return e.unwrapDisallowed&&n.children?l.children.splice(r,1,...n.children):l.children.splice(r,1),r})}}var ba={},LT={get exports(){return ba},set exports(e){ba=e}},we={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ws=Symbol.for("react.element"),$s=Symbol.for("react.portal"),Mo=Symbol.for("react.fragment"),Fo=Symbol.for("react.strict_mode"),zo=Symbol.for("react.profiler"),bo=Symbol.for("react.provider"),Ho=Symbol.for("react.context"),kT=Symbol.for("react.server_context"),Bo=Symbol.for("react.forward_ref"),Uo=Symbol.for("react.suspense"),jo=Symbol.for("react.suspense_list"),Wo=Symbol.for("react.memo"),$o=Symbol.for("react.lazy"),wT=Symbol.for("react.offscreen"),N_;N_=Symbol.for("react.module.reference");function Ht(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Ws:switch(e=e.type,e){case Mo:case zo:case Fo:case Uo:case jo:return e;default:switch(e=e&&e.$$typeof,e){case kT:case Ho:case Bo:case $o:case Wo:case bo:return e;default:return t}}case $s:return t}}}we.ContextConsumer=Ho;we.ContextProvider=bo;we.Element=Ws;we.ForwardRef=Bo;we.Fragment=Mo;we.Lazy=$o;we.Memo=Wo;we.Portal=$s;we.Profiler=zo;we.StrictMode=Fo;we.Suspense=Uo;we.SuspenseList=jo;we.isAsyncMode=function(){return!1};we.isConcurrentMode=function(){return!1};we.isContextConsumer=function(e){return Ht(e)===Ho};we.isContextProvider=function(e){return Ht(e)===bo};we.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ws};we.isForwardRef=function(e){return Ht(e)===Bo};we.isFragment=function(e){return Ht(e)===Mo};we.isLazy=function(e){return Ht(e)===$o};we.isMemo=function(e){return Ht(e)===Wo};we.isPortal=function(e){return Ht(e)===$s};we.isProfiler=function(e){return Ht(e)===zo};we.isStrictMode=function(e){return Ht(e)===Fo};we.isSuspense=function(e){return Ht(e)===Uo};we.isSuspenseList=function(e){return Ht(e)===jo};we.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Mo||e===zo||e===Fo||e===Uo||e===jo||e===wT||typeof e=="object"&&e!==null&&(e.$$typeof===$o||e.$$typeof===Wo||e.$$typeof===bo||e.$$typeof===Ho||e.$$typeof===Bo||e.$$typeof===N_||e.getModuleId!==void 0)};we.typeOf=Ht;(function(e){e.exports=we})(LT);const ST=Ld(ba);function AT(e){var t=e&&typeof e=="object"&&e.type==="text"?e.value||"":e;return typeof t=="string"&&t.replace(/[ \t\n\f\r]/g,"")===""}function CT(e){return e.join(" ").trim()}function IT(e,t){const n=t||{};return(e[e.length-1]===""?[...e,""]:e).join((n.padRight?" ":"")+","+(n.padLeft===!1?"":" ")).trim()}var od=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,RT=/\n/g,PT=/^\s*/,NT=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,DT=/^:\s*/,OT=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,MT=/^[;\s]*/,FT=/^\s+|\s+$/g,zT=`
`,ud="/",ad="*",Zn="",bT="comment",HT="declaration",BT=function(e,t){if(typeof e!="string")throw new TypeError("First argument must be a string");if(!e)return[];t=t||{};var n=1,r=1;function i(p){var m=p.match(RT);m&&(n+=m.length);var L=p.lastIndexOf(zT);r=~L?p.length-L:r+p.length}function l(){var p={line:n,column:r};return function(m){return m.position=new o(p),s(),m}}function o(p){this.start=p,this.end={line:n,column:r},this.source=t.source}o.prototype.content=e;function u(p){var m=new Error(t.source+":"+n+":"+r+": "+p);if(m.reason=p,m.filename=t.source,m.line=n,m.column=r,m.source=e,!t.silent)throw m}function a(p){var m=p.exec(e);if(m){var L=m[0];return i(L),e=e.slice(L.length),m}}function s(){a(PT)}function c(p){var m;for(p=p||[];m=d();)m!==!1&&p.push(m);return p}function d(){var p=l();if(!(ud!=e.charAt(0)||ad!=e.charAt(1))){for(var m=2;Zn!=e.charAt(m)&&(ad!=e.charAt(m)||ud!=e.charAt(m+1));)++m;if(m+=2,Zn===e.charAt(m-1))return u("End of comment missing");var L=e.slice(2,m-2);return r+=2,i(L),e=e.slice(m),r+=2,p({type:bT,comment:L})}}function f(){var p=l(),m=a(NT);if(m){if(d(),!a(DT))return u("property missing ':'");var L=a(OT),_=p({type:HT,property:sd(m[0].replace(od,Zn)),value:L?sd(L[0].replace(od,Zn)):Zn});return a(MT),_}}function h(){var p=[];c(p);for(var m;m=f();)m!==!1&&(p.push(m),c(p));return p}return s(),h()};function sd(e){return e?e.replace(FT,Zn):Zn}var UT=BT;function jT(e,t){var n=null;if(!e||typeof e!="string")return n;for(var r,i=UT(e),l=typeof t=="function",o,u,a=0,s=i.length;a<s;a++)r=i[a],o=r.property,u=r.value,l?t(o,u,r):u&&(n||(n={}),n[o]=u);return n}var WT=jT;const Ha={}.hasOwnProperty,$T=new Set(["table","thead","tbody","tfoot","tr"]);function D_(e,t){const n=[];let r=-1,i;for(;++r<t.children.length;)i=t.children[r],i.type==="element"?n.push(VT(e,i,r,t)):i.type==="text"?(t.type!=="element"||!$T.has(t.tagName)||!AT(i))&&n.push(i.value):i.type==="raw"&&!e.options.skipHtml&&n.push(i.value);return n}function VT(e,t,n,r){const i=e.options,l=e.schema,o=t.tagName,u={};let a=l,s;if(l.space==="html"&&o==="svg"&&(a=TT,e.schema=a),t.properties)for(s in t.properties)Ha.call(t.properties,s)&&QT(u,s,t.properties[s],e);(o==="ol"||o==="ul")&&e.listDepth++;const c=D_(e,t);(o==="ol"||o==="ul")&&e.listDepth--,e.schema=l;const d=t.position||{start:{line:null,column:null,offset:null},end:{line:null,column:null,offset:null}},f=i.components&&Ha.call(i.components,o)?i.components[o]:o,h=typeof f=="string"||f===Cn.Fragment;if(!ST.isValidElementType(f))throw new TypeError(`Component for name \`${o}\` not defined or is not renderable`);if(u.key=[o,d.start.line,d.start.column,n].join("-"),o==="a"&&i.linkTarget&&(u.target=typeof i.linkTarget=="function"?i.linkTarget(String(u.href||""),t.children,typeof u.title=="string"?u.title:null):i.linkTarget),o==="a"&&i.transformLinkUri&&(u.href=i.transformLinkUri(String(u.href||""),t.children,typeof u.title=="string"?u.title:null)),!h&&o==="code"&&r.type==="element"&&r.tagName!=="pre"&&(u.inline=!0),!h&&(o==="h1"||o==="h2"||o==="h3"||o==="h4"||o==="h5"||o==="h6")&&(u.level=Number.parseInt(o.charAt(1),10)),o==="img"&&i.transformImageUri&&(u.src=i.transformImageUri(String(u.src||""),String(u.alt||""),typeof u.title=="string"?u.title:null)),!h&&o==="li"&&r.type==="element"){const p=GT(t);u.checked=p&&p.properties?Boolean(p.properties.checked):null,u.index=Iu(r,t),u.ordered=r.tagName==="ol"}return!h&&(o==="ol"||o==="ul")&&(u.ordered=o==="ol",u.depth=e.listDepth),(o==="td"||o==="th")&&(u.align&&(u.style||(u.style={}),u.style.textAlign=u.align,delete u.align),h||(u.isHeader=o==="th")),!h&&o==="tr"&&r.type==="element"&&(u.isHeader=Boolean(r.tagName==="thead")),i.sourcePos&&(u["data-sourcepos"]=YT(d)),!h&&i.rawSourcePos&&(u.sourcePosition=t.position),!h&&i.includeElementIndex&&(u.index=Iu(r,t),u.siblingCount=Iu(r)),h||(u.node=t),c.length>0?Cn.createElement(f,u,c):Cn.createElement(f,u)}function GT(e){let t=-1;for(;++t<e.children.length;){const n=e.children[t];if(n.type==="element"&&n.tagName==="input")return n}return null}function Iu(e,t){let n=-1,r=0;for(;++n<e.children.length&&e.children[n]!==t;)e.children[n].type==="element"&&r++;return r}function QT(e,t,n,r){const i=gT(r.schema,t);let l=n;l==null||l!==l||(Array.isArray(l)&&(l=i.commaSeparated?IT(l):CT(l)),i.property==="style"&&typeof l=="string"&&(l=KT(l)),i.space&&i.property?e[Ha.call(ld,i.property)?ld[i.property]:i.property]=l:i.attribute&&(e[i.attribute]=l))}function KT(e){const t={};try{WT(e,n)}catch{}return t;function n(r,i){const l=r.slice(0,4)==="-ms-"?`ms-${r.slice(4)}`:r;t[l.replace(/-([a-z])/g,XT)]=i}}function XT(e,t){return t.toUpperCase()}function YT(e){return[e.start.line,":",e.start.column,"-",e.end.line,":",e.end.column].map(String).join("")}const cd={}.hasOwnProperty,qT="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",yl={plugins:{to:"plugins",id:"change-plugins-to-remarkplugins"},renderers:{to:"components",id:"change-renderers-to-components"},astPlugins:{id:"remove-buggy-html-in-markdown-parser"},allowDangerousHtml:{id:"remove-buggy-html-in-markdown-parser"},escapeHtml:{id:"remove-buggy-html-in-markdown-parser"},source:{to:"children",id:"change-source-to-children"},allowNode:{to:"allowElement",id:"replace-allownode-allowedtypes-and-disallowedtypes"},allowedTypes:{to:"allowedElements",id:"replace-allownode-allowedtypes-and-disallowedtypes"},disallowedTypes:{to:"disallowedElements",id:"replace-allownode-allowedtypes-and-disallowedtypes"},includeNodeIndex:{to:"includeElementIndex",id:"change-includenodeindex-to-includeelementindex"}};function Vs(e){for(const l in yl)if(cd.call(yl,l)&&cd.call(e,l)){const o=yl[l];console.warn(`[react-markdown] Warning: please ${o.to?`use \`${o.to}\` instead of`:"remove"} \`${l}\` (see <${qT}#${o.id}> for more info)`),delete yl[l]}const t=y0().use(gE).use(e.remarkPlugins||[]).use(rT,{...e.remarkRehypeOptions,allowDangerousHtml:!0}).use(e.rehypePlugins||[]).use(xT,e),n=new Xp;typeof e.children=="string"?n.value=e.children:e.children!==void 0&&e.children!==null&&console.warn(`[react-markdown] Warning: please pass a string as \`children\` (not: \`${e.children}\`)`);const r=t.runSync(t.parse(n),n);if(r.type!=="root")throw new TypeError("Expected a `root` node");let i=Cn.createElement(Cn.Fragment,{},D_({options:e,schema:ET,listDepth:0},r));return e.className&&(i=Cn.createElement("div",{className:e.className},i)),i}Vs.defaultProps={transformLinkUri:l0};Vs.propTypes={children:oe.string,className:oe.string,allowElement:oe.func,allowedElements:oe.arrayOf(oe.string),disallowedElements:oe.arrayOf(oe.string),unwrapDisallowed:oe.bool,remarkPlugins:oe.arrayOf(oe.oneOfType([oe.object,oe.func,oe.arrayOf(oe.oneOfType([oe.bool,oe.string,oe.object,oe.func,oe.arrayOf(oe.any)]))])),rehypePlugins:oe.arrayOf(oe.oneOfType([oe.object,oe.func,oe.arrayOf(oe.oneOfType([oe.bool,oe.string,oe.object,oe.func,oe.arrayOf(oe.any)]))])),sourcePos:oe.bool,rawSourcePos:oe.bool,skipHtml:oe.bool,includeElementIndex:oe.bool,transformLinkUri:oe.oneOfType([oe.func,oe.bool]),linkTarget:oe.oneOfType([oe.func,oe.string]),transformImageUri:oe.func,components:oe.object};const ZT={tokenize:rx,partial:!0},O_={tokenize:ix,partial:!0},M_={tokenize:lx,partial:!0},Fr={tokenize:ux,partial:!0},F_={tokenize:ox,partial:!0},z_={tokenize:tx,previous:B_},b_={tokenize:nx,previous:Qs},En={tokenize:ex,previous:U_},ln={},JT={text:ln};let Qn=48;for(;Qn<123;)ln[Qn]=En,Qn++,Qn===58?Qn=65:Qn===91&&(Qn=97);ln[43]=En;ln[45]=En;ln[46]=En;ln[95]=En;ln[72]=[En,b_];ln[104]=[En,b_];ln[87]=[En,z_];ln[119]=[En,z_];function ex(e,t,n){const r=this;let i,l;return o;function o(h){return!fd(h)||!U_(r.previous)||Ks(r.events)?n(h):(e.enter("literalAutolink"),e.enter("literalAutolinkEmail"),u(h))}function u(h){return fd(h)?(e.consume(h),u):h===64?(e.consume(h),a):n(h)}function a(h){return h===46?e.check(Fr,f,s)(h):h===45||h===95?e.check(Fr,n,c)(h):ft(h)?(!l&&uo(h)&&(l=!0),e.consume(h),a):f(h)}function s(h){return e.consume(h),i=!0,l=void 0,a}function c(h){return e.consume(h),d}function d(h){return h===46?e.check(Fr,n,s)(h):a(h)}function f(h){return i&&!l?(e.exit("literalAutolinkEmail"),e.exit("literalAutolink"),t(h)):n(h)}}function tx(e,t,n){const r=this;return i;function i(o){return o!==87&&o!==119||!B_(r.previous)||Ks(r.events)?n(o):(e.enter("literalAutolink"),e.enter("literalAutolinkWww"),e.check(ZT,e.attempt(O_,e.attempt(M_,l),n),n)(o))}function l(o){return e.exit("literalAutolinkWww"),e.exit("literalAutolink"),t(o)}}function nx(e,t,n){const r=this;return i;function i(p){return p!==72&&p!==104||!Qs(r.previous)||Ks(r.events)?n(p):(e.enter("literalAutolink"),e.enter("literalAutolinkHttp"),e.consume(p),l)}function l(p){return p===84||p===116?(e.consume(p),o):n(p)}function o(p){return p===84||p===116?(e.consume(p),u):n(p)}function u(p){return p===80||p===112?(e.consume(p),a):n(p)}function a(p){return p===83||p===115?(e.consume(p),s):s(p)}function s(p){return p===58?(e.consume(p),c):n(p)}function c(p){return p===47?(e.consume(p),d):n(p)}function d(p){return p===47?(e.consume(p),f):n(p)}function f(p){return p===null||$i(p)||Po(p)||No(p)?n(p):e.attempt(O_,e.attempt(M_,h),n)(p)}function h(p){return e.exit("literalAutolinkHttp"),e.exit("literalAutolink"),t(p)}}function rx(e,t,n){return r;function r(a){return e.consume(a),i}function i(a){return a===87||a===119?(e.consume(a),l):n(a)}function l(a){return a===87||a===119?(e.consume(a),o):n(a)}function o(a){return a===46?(e.consume(a),u):n(a)}function u(a){return a===null||ie(a)?n(a):t(a)}}function ix(e,t,n){let r,i;return l;function l(a){return a===38?e.check(F_,u,o)(a):a===46||a===95?e.check(Fr,u,o)(a):a===null||$i(a)||Po(a)||a!==45&&No(a)?u(a):(e.consume(a),l)}function o(a){return a===46?(i=r,r=void 0,e.consume(a),l):(a===95&&(r=!0),e.consume(a),l)}function u(a){return!i&&!r?t(a):n(a)}}function lx(e,t){let n=0;return r;function r(o){return o===38?e.check(F_,t,i)(o):(o===40&&n++,o===41?e.check(Fr,l,i)(o):Gs(o)?t(o):H_(o)?e.check(Fr,t,i)(o):(e.consume(o),r))}function i(o){return e.consume(o),r}function l(o){return n--,n<0?t(o):i(o)}}function ox(e,t,n){return r;function r(o){return e.consume(o),i}function i(o){return Nt(o)?(e.consume(o),i):o===59?(e.consume(o),l):n(o)}function l(o){return Gs(o)?t(o):n(o)}}function ux(e,t,n){return r;function r(l){return e.consume(l),i}function i(l){return H_(l)?(e.consume(l),i):Gs(l)?t(l):n(l)}}function H_(e){return e===33||e===34||e===39||e===41||e===42||e===44||e===46||e===58||e===59||e===60||e===63||e===95||e===126}function Gs(e){return e===null||e===60||Ve(e)}function fd(e){return e===43||e===45||e===46||e===95||ft(e)}function B_(e){return e===null||e===40||e===42||e===95||e===126||Ve(e)}function Qs(e){return e===null||!Nt(e)}function U_(e){return e!==47&&Qs(e)}function Ks(e){let t=e.length,n=!1;for(;t--;){const r=e[t][1];if((r.type==="labelLink"||r.type==="labelImage")&&!r._balanced){n=!0;break}if(r._gfmAutolinkLiteralWalkedInto){n=!1;break}}return e.length>0&&!n&&(e[e.length-1][1]._gfmAutolinkLiteralWalkedInto=!0),n}const ax={tokenize:mx,partial:!0};function sx(){return{document:{[91]:{tokenize:hx,continuation:{tokenize:px},exit:_x}},text:{[91]:{tokenize:dx},[93]:{add:"after",tokenize:cx,resolveTo:fx}}}}function cx(e,t,n){const r=this;let i=r.events.length;const l=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]);let o;for(;i--;){const a=r.events[i][1];if(a.type==="labelImage"){o=a;break}if(a.type==="gfmFootnoteCall"||a.type==="labelLink"||a.type==="label"||a.type==="image"||a.type==="link")break}return u;function u(a){if(!o||!o._balanced)return n(a);const s=Qt(r.sliceSerialize({start:o.end,end:r.now()}));return s.charCodeAt(0)!==94||!l.includes(s.slice(1))?n(a):(e.enter("gfmFootnoteCallLabelMarker"),e.consume(a),e.exit("gfmFootnoteCallLabelMarker"),t(a))}}function fx(e,t){let n=e.length;for(;n--;)if(e[n][1].type==="labelImage"&&e[n][0]==="enter"){e[n][1];break}e[n+1][1].type="data",e[n+3][1].type="gfmFootnoteCallLabelMarker";const r={type:"gfmFootnoteCall",start:Object.assign({},e[n+3][1].start),end:Object.assign({},e[e.length-1][1].end)},i={type:"gfmFootnoteCallMarker",start:Object.assign({},e[n+3][1].end),end:Object.assign({},e[n+3][1].end)};i.end.column++,i.end.offset++,i.end._bufferIndex++;const l={type:"gfmFootnoteCallString",start:Object.assign({},i.end),end:Object.assign({},e[e.length-1][1].start)},o={type:"chunkString",contentType:"string",start:Object.assign({},l.start),end:Object.assign({},l.end)},u=[e[n+1],e[n+2],["enter",r,t],e[n+3],e[n+4],["enter",i,t],["exit",i,t],["enter",l,t],["enter",o,t],["exit",o,t],["exit",l,t],e[e.length-2],e[e.length-1],["exit",r,t]];return e.splice(n,e.length-n+1,...u),e}function dx(e,t,n){const r=this,i=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]);let l=0,o;return u;function u(f){return e.enter("gfmFootnoteCall"),e.enter("gfmFootnoteCallLabelMarker"),e.consume(f),e.exit("gfmFootnoteCallLabelMarker"),a}function a(f){return f!==94?n(f):(e.enter("gfmFootnoteCallMarker"),e.consume(f),e.exit("gfmFootnoteCallMarker"),e.enter("gfmFootnoteCallString"),e.enter("chunkString").contentType="string",s)}function s(f){let h;return f===null||f===91||l++>999?n(f):f===93?o?(e.exit("chunkString"),h=e.exit("gfmFootnoteCallString"),i.includes(Qt(r.sliceSerialize(h)))?d(f):n(f)):n(f):(e.consume(f),Ve(f)||(o=!0),f===92?c:s)}function c(f){return f===91||f===92||f===93?(e.consume(f),l++,s):s(f)}function d(f){return e.enter("gfmFootnoteCallLabelMarker"),e.consume(f),e.exit("gfmFootnoteCallLabelMarker"),e.exit("gfmFootnoteCall"),t}}function hx(e,t,n){const r=this,i=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]);let l,o=0,u;return a;function a(m){return e.enter("gfmFootnoteDefinition")._container=!0,e.enter("gfmFootnoteDefinitionLabel"),e.enter("gfmFootnoteDefinitionLabelMarker"),e.consume(m),e.exit("gfmFootnoteDefinitionLabelMarker"),s}function s(m){return m===94?(e.enter("gfmFootnoteDefinitionMarker"),e.consume(m),e.exit("gfmFootnoteDefinitionMarker"),e.enter("gfmFootnoteDefinitionLabelString"),c):n(m)}function c(m){let L;return m===null||m===91||o>999?n(m):m===93?u?(L=e.exit("gfmFootnoteDefinitionLabelString"),l=Qt(r.sliceSerialize(L)),e.enter("gfmFootnoteDefinitionLabelMarker"),e.consume(m),e.exit("gfmFootnoteDefinitionLabelMarker"),e.exit("gfmFootnoteDefinitionLabel"),h):n(m):ie(m)?(e.enter("lineEnding"),e.consume(m),e.exit("lineEnding"),o++,c):(e.enter("chunkString").contentType="string",d(m))}function d(m){return m===null||ie(m)||m===91||m===93||o>999?(e.exit("chunkString"),c(m)):(Ve(m)||(u=!0),o++,e.consume(m),m===92?f:d)}function f(m){return m===91||m===92||m===93?(e.consume(m),o++,d):d(m)}function h(m){return m===58?(e.enter("definitionMarker"),e.consume(m),e.exit("definitionMarker"),ve(e,p,"gfmFootnoteDefinitionWhitespace")):n(m)}function p(m){return i.includes(l)||i.push(l),t(m)}}function px(e,t,n){return e.check(Zi,t,e.attempt(ax,t,n))}function _x(e){e.exit("gfmFootnoteDefinition")}function mx(e,t,n){const r=this;return ve(e,i,"gfmFootnoteDefinitionIndent",4+1);function i(l){const o=r.events[r.events.length-1];return o&&o[1].type==="gfmFootnoteDefinitionIndent"&&o[2].sliceSerialize(o[1],!0).length===4?t(l):n(l)}}function gx(e={}){let t=e.singleTilde;const n={tokenize:i,resolveAll:r};return t==null&&(t=!0),{text:{[126]:n},insideSpan:{null:[n]},attentionMarkers:{null:[126]}};function r(l,o){let u=-1;for(;++u<l.length;)if(l[u][0]==="enter"&&l[u][1].type==="strikethroughSequenceTemporary"&&l[u][1]._close){let a=u;for(;a--;)if(l[a][0]==="exit"&&l[a][1].type==="strikethroughSequenceTemporary"&&l[a][1]._open&&l[u][1].end.offset-l[u][1].start.offset===l[a][1].end.offset-l[a][1].start.offset){l[u][1].type="strikethroughSequence",l[a][1].type="strikethroughSequence";const s={type:"strikethrough",start:Object.assign({},l[a][1].start),end:Object.assign({},l[u][1].end)},c={type:"strikethroughText",start:Object.assign({},l[a][1].end),end:Object.assign({},l[u][1].start)},d=[["enter",s,o],["enter",l[a][1],o],["exit",l[a][1],o],["enter",c,o]];wt(d,d.length,0,Do(o.parser.constructs.insideSpan.null,l.slice(a+1,u),o)),wt(d,d.length,0,[["exit",c,o],["enter",l[u][1],o],["exit",l[u][1],o],["exit",s,o]]),wt(l,a-1,u-a+3,d),u=a+d.length-2;break}}for(u=-1;++u<l.length;)l[u][1].type==="strikethroughSequenceTemporary"&&(l[u][1].type="data");return l}function i(l,o,u){const a=this.previous,s=this.events;let c=0;return d;function d(h){return a===126&&s[s.length-1][1].type!=="characterEscape"?u(h):(l.enter("strikethroughSequenceTemporary"),f(h))}function f(h){const p=ao(a);if(h===126)return c>1?u(h):(l.consume(h),c++,f);if(c<2&&!t)return u(h);const m=l.exit("strikethroughSequenceTemporary"),L=ao(h);return m._open=!L||L===2&&Boolean(p),m._close=!p||p===2&&Boolean(L),o(h)}}}const yx={flow:{null:{tokenize:Ex,resolve:vx}}},dd={tokenize:Tx,partial:!0};function vx(e,t){let n=-1,r,i,l,o,u,a,s;for(;++n<e.length;){const c=e[n][1];if(l&&(c.type==="temporaryTableCellContent"&&(o=o||n,u=n),(c.type==="tableCellDivider"||c.type==="tableRow")&&u)){const d={type:"tableContent",start:e[o][1].start,end:e[u][1].end},f={type:"chunkText",start:d.start,end:d.end,contentType:"text"};e.splice(o,u-o+1,["enter",d,t],["enter",f,t],["exit",f,t],["exit",d,t]),n-=u-o-3,o=void 0,u=void 0}if(e[n][0]==="exit"&&a!==void 0&&a+(s?0:1)<n&&(c.type==="tableCellDivider"||c.type==="tableRow"&&(a+3<n||e[a][1].type!=="whitespace"))){const d={type:i?"tableDelimiter":r?"tableHeader":"tableData",start:e[a][1].start,end:e[n][1].end};e.splice(n+(c.type==="tableCellDivider"?1:0),0,["exit",d,t]),e.splice(a,0,["enter",d,t]),n+=2,a=n+1,s=!0}c.type==="tableRow"&&(l=e[n][0]==="enter",l&&(a=n+1,s=!1)),c.type==="tableDelimiterRow"&&(i=e[n][0]==="enter",i&&(a=n+1,s=!1)),c.type==="tableHead"&&(r=e[n][0]==="enter")}return e}function Ex(e,t,n){const r=this,i=[];let l=0,o,u;return a;function a(R){return e.enter("table")._align=i,e.enter("tableHead"),e.enter("tableRow"),R===124?s(R):(l++,e.enter("temporaryTableCellContent"),f(R))}function s(R){return e.enter("tableCellDivider"),e.consume(R),e.exit("tableCellDivider"),o=!0,c}function c(R){return R===null||ie(R)?p(R):Ae(R)?(e.enter("whitespace"),e.consume(R),d):(o&&(o=void 0,l++),R===124?s(R):(e.enter("temporaryTableCellContent"),f(R)))}function d(R){return Ae(R)?(e.consume(R),d):(e.exit("whitespace"),c(R))}function f(R){return R===null||R===124||Ve(R)?(e.exit("temporaryTableCellContent"),c(R)):(e.consume(R),R===92?h:f)}function h(R){return R===92||R===124?(e.consume(R),f):f(R)}function p(R){if(R===null)return n(R);e.exit("tableRow"),e.exit("tableHead");const De=r.interrupt;return r.interrupt=!0,e.attempt({tokenize:Ce,partial:!0},function(z){return r.interrupt=De,e.enter("tableDelimiterRow"),m(z)},function(z){return r.interrupt=De,n(z)})(R)}function m(R){return R===null||ie(R)?k(R):Ae(R)?(e.enter("whitespace"),e.consume(R),L):R===45?(e.enter("tableDelimiterFiller"),e.consume(R),u=!0,i.push("none"),_):R===58?(e.enter("tableDelimiterAlignment"),e.consume(R),e.exit("tableDelimiterAlignment"),i.push("left"),g):R===124?(e.enter("tableCellDivider"),e.consume(R),e.exit("tableCellDivider"),m):n(R)}function L(R){return Ae(R)?(e.consume(R),L):(e.exit("whitespace"),m(R))}function _(R){return R===45?(e.consume(R),_):(e.exit("tableDelimiterFiller"),R===58?(e.enter("tableDelimiterAlignment"),e.consume(R),e.exit("tableDelimiterAlignment"),i[i.length-1]=i[i.length-1]==="left"?"center":"right",y):m(R))}function g(R){return R===45?(e.enter("tableDelimiterFiller"),e.consume(R),u=!0,_):n(R)}function y(R){return R===null||ie(R)?k(R):Ae(R)?(e.enter("whitespace"),e.consume(R),L):R===124?(e.enter("tableCellDivider"),e.consume(R),e.exit("tableCellDivider"),m):n(R)}function k(R){return e.exit("tableDelimiterRow"),!u||l!==i.length?n(R):R===null?P(R):e.check(dd,P,e.attempt({tokenize:Ce,partial:!0},ve(e,x,"linePrefix",4),P))(R)}function P(R){return e.exit("table"),t(R)}function x(R){return e.enter("tableBody"),N(R)}function N(R){return e.enter("tableRow"),R===124?H(R):(e.enter("temporaryTableCellContent"),V(R))}function H(R){return e.enter("tableCellDivider"),e.consume(R),e.exit("tableCellDivider"),X}function X(R){return R===null||ie(R)?re(R):Ae(R)?(e.enter("whitespace"),e.consume(R),Y):R===124?H(R):(e.enter("temporaryTableCellContent"),V(R))}function Y(R){return Ae(R)?(e.consume(R),Y):(e.exit("whitespace"),X(R))}function V(R){return R===null||R===124||Ve(R)?(e.exit("temporaryTableCellContent"),X(R)):(e.consume(R),R===92?ee:V)}function ee(R){return R===92||R===124?(e.consume(R),V):V(R)}function re(R){return e.exit("tableRow"),R===null?ue(R):e.check(dd,ue,e.attempt({tokenize:Ce,partial:!0},ve(e,N,"linePrefix",4),ue))(R)}function ue(R){return e.exit("tableBody"),P(R)}function Ce(R,De,z){return q;function q(v){return R.enter("lineEnding"),R.consume(v),R.exit("lineEnding"),ve(R,J,"linePrefix")}function J(v){if(r.parser.lazy[r.now().line]||v===null||ie(v))return z(v);const T=r.events[r.events.length-1];return!r.parser.constructs.disable.null.includes("codeIndented")&&T&&T[1].type==="linePrefix"&&T[2].sliceSerialize(T[1],!0).length>=4?z(v):(r._gfmTableDynamicInterruptHack=!0,R.check(r.parser.constructs.flow,function(A){return r._gfmTableDynamicInterruptHack=!1,z(A)},function(A){return r._gfmTableDynamicInterruptHack=!1,De(A)})(v))}}}function Tx(e,t,n){let r=0;return i;function i(o){return e.enter("check"),e.consume(o),l}function l(o){return o===-1||o===32?(e.consume(o),r++,r===4?t:l):o===null||Ve(o)?t(o):n(o)}}const xx={tokenize:kx},Lx={text:{[91]:xx}};function kx(e,t,n){const r=this;return i;function i(u){return r.previous!==null||!r._gfmTasklistFirstContentOfListItem?n(u):(e.enter("taskListCheck"),e.enter("taskListCheckMarker"),e.consume(u),e.exit("taskListCheckMarker"),l)}function l(u){return Ve(u)?(e.enter("taskListCheckValueUnchecked"),e.consume(u),e.exit("taskListCheckValueUnchecked"),o):u===88||u===120?(e.enter("taskListCheckValueChecked"),e.consume(u),e.exit("taskListCheckValueChecked"),o):n(u)}function o(u){return u===93?(e.enter("taskListCheckMarker"),e.consume(u),e.exit("taskListCheckMarker"),e.exit("taskListCheck"),e.check({tokenize:wx},t,n)):n(u)}}function wx(e,t,n){const r=this;return ve(e,i,"whitespace");function i(l){const o=r.events[r.events.length-1];return(o&&o[1].type==="whitespace"||ie(l))&&l!==null?t(l):n(l)}}function Sx(e){return e_([JT,sx(),gx(e),yx,Lx])}function hd(e,t){const n=String(e);if(typeof t!="string")throw new TypeError("Expected character");let r=0,i=n.indexOf(t);for(;i!==-1;)r++,i=n.indexOf(t,i+t.length);return r}function Ax(e){if(typeof e!="string")throw new TypeError("Expected a string");return e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}const Cx={}.hasOwnProperty,Ix=function(e,t,n,r){let i,l;typeof t=="string"||t instanceof RegExp?(l=[[t,n]],i=r):(l=t,i=n),i||(i={});const o=Bs(i.ignore||[]),u=Rx(l);let a=-1;for(;++a<u.length;)p_(e,"text",s);return e;function s(d,f){let h=-1,p;for(;++h<f.length;){const m=f[h];if(o(m,p?p.children.indexOf(m):void 0,p))return;p=m}if(p)return c(d,f)}function c(d,f){const h=f[f.length-1],p=u[a][0],m=u[a][1];let L=0;const _=h.children.indexOf(d);let g=!1,y=[],k;p.lastIndex=0;let P=p.exec(d.value);for(;P;){k=P.index;const x={index:P.index,input:P.input,stack:[...f,d]};let N=m(...P,x);if(typeof N=="string"&&(N=N.length>0?{type:"text",value:N}:void 0),N!==!1&&(L!==k&&y.push({type:"text",value:d.value.slice(L,k)}),Array.isArray(N)?y.push(...N):N&&y.push(N),L=k+P[0].length,g=!0),!p.global)break;P=p.exec(d.value)}return g?(L<d.value.length&&y.push({type:"text",value:d.value.slice(L)}),h.children.splice(_,1,...y)):y=[d],_+y.length}};function Rx(e){const t=[];if(typeof e!="object")throw new TypeError("Expected array or object as schema");if(Array.isArray(e)){let n=-1;for(;++n<e.length;)t.push([pd(e[n][0]),_d(e[n][1])])}else{let n;for(n in e)Cx.call(e,n)&&t.push([pd(n),_d(e[n])])}return t}function pd(e){return typeof e=="string"?new RegExp(Ax(e),"g"):e}function _d(e){return typeof e=="function"?e:()=>e}const Ru="phrasing",Pu=["autolink","link","image","label"],Px={transforms:[bx],enter:{literalAutolink:Dx,literalAutolinkEmail:Nu,literalAutolinkHttp:Nu,literalAutolinkWww:Nu},exit:{literalAutolink:zx,literalAutolinkEmail:Fx,literalAutolinkHttp:Ox,literalAutolinkWww:Mx}},Nx={unsafe:[{character:"@",before:"[+\\-.\\w]",after:"[\\-.\\w]",inConstruct:Ru,notInConstruct:Pu},{character:".",before:"[Ww]",after:"[\\-.\\w]",inConstruct:Ru,notInConstruct:Pu},{character:":",before:"[ps]",after:"\\/",inConstruct:Ru,notInConstruct:Pu}]};function Dx(e){this.enter({type:"link",title:null,url:"",children:[]},e)}function Nu(e){this.config.enter.autolinkProtocol.call(this,e)}function Ox(e){this.config.exit.autolinkProtocol.call(this,e)}function Mx(e){this.config.exit.data.call(this,e);const t=this.stack[this.stack.length-1];t.url="http://"+this.sliceSerialize(e)}function Fx(e){this.config.exit.autolinkEmail.call(this,e)}function zx(e){this.exit(e)}function bx(e){Ix(e,[[/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi,Hx],[/([-.\w+]+)@([-\w]+(?:\.[-\w]+)+)/g,Bx]],{ignore:["link","linkReference"]})}function Hx(e,t,n,r,i){let l="";if(!j_(i)||(/^w/i.test(t)&&(n=t+n,t="",l="http://"),!Ux(n)))return!1;const o=jx(n+r);if(!o[0])return!1;const u={type:"link",title:null,url:l+t+o[0],children:[{type:"text",value:t+o[0]}]};return o[1]?[u,{type:"text",value:o[1]}]:u}function Bx(e,t,n,r){return!j_(r,!0)||/[_-\d]$/.test(n)?!1:{type:"link",title:null,url:"mailto:"+t+"@"+n,children:[{type:"text",value:t+"@"+n}]}}function Ux(e){const t=e.split(".");return!(t.length<2||t[t.length-1]&&(/_/.test(t[t.length-1])||!/[a-zA-Z\d]/.test(t[t.length-1]))||t[t.length-2]&&(/_/.test(t[t.length-2])||!/[a-zA-Z\d]/.test(t[t.length-2])))}function jx(e){const t=/[!"&'),.:;<>?\]}]+$/.exec(e);let n,r,i,l;if(t)for(e=e.slice(0,t.index),l=t[0],n=l.indexOf(")"),r=hd(e,"("),i=hd(e,")");n!==-1&&r>i;)e+=l.slice(0,n+1),l=l.slice(n+1),n=l.indexOf(")"),i++;return[e,l]}function j_(e,t){const n=e.input.charCodeAt(e.index-1);return(e.index===0||Po(n)||No(n))&&(!t||n!==47)}function md(e){return e.label||!e.identifier?e.label||"":f_(e.identifier)}function Bn(e){const t=e||{},n=t.now||{};let r=t.lineShift||0,i=n.line||1,l=n.column||1;return{move:a,current:o,shift:u};function o(){return{now:{line:i,column:l},lineShift:r}}function u(s){r+=s}function a(s=""){const c=s.split(/\r?\n|\r/g),d=c[c.length-1];return i+=c.length-1,l=c.length===1?l+d.length:1+d.length+r,s}}function W_(e,t,n){const r=t.indexStack,i=e.children||[],l=Bn(n),o=[];let u=-1;for(r.push(-1);++u<i.length;){const s=i[u];r[r.length-1]=u,o.push(l.move(t.handle(s,e,t,{before:`
`,after:`
`,...l.current()}))),s.type!=="list"&&(t.bulletLastUsed=void 0),u<i.length-1&&o.push(l.move(a(s,i[u+1])))}return r.pop(),o.join("");function a(s,c){let d=t.join.length;for(;d--;){const f=t.join[d](s,c,e,t);if(f===!0||f===1)break;if(typeof f=="number")return`
`.repeat(1+f);if(f===!1)return`

<!---->

`}return`

`}}const Wx=/\r?\n|\r/g;function $_(e,t){const n=[];let r=0,i=0,l;for(;l=Wx.exec(e);)o(e.slice(r,l.index)),n.push(l[0]),r=l.index+l[0].length,i++;return o(e.slice(r)),n.join("");function o(u){n.push(t(u,i,!u))}}function V_(e){if(!e._compiled){const t=(e.atBreak?"[\\r\\n][\\t ]*":"")+(e.before?"(?:"+e.before+")":"");e._compiled=new RegExp((t?"("+t+")":"")+(/[|\\{}()[\]^$+*?.-]/.test(e.character)?"\\":"")+e.character+(e.after?"(?:"+e.after+")":""),"g")}return e._compiled}function $x(e,t){return gd(e,t.inConstruct,!0)&&!gd(e,t.notInConstruct,!1)}function gd(e,t,n){if(!t)return n;typeof t=="string"&&(t=[t]);let r=-1;for(;++r<t.length;)if(e.includes(t[r]))return!0;return!1}function yd(e,t,n){const r=(n.before||"")+(t||"")+(n.after||""),i=[],l=[],o={};let u=-1;for(;++u<e.unsafe.length;){const c=e.unsafe[u];if(!$x(e.stack,c))continue;const d=V_(c);let f;for(;f=d.exec(r);){const h="before"in c||Boolean(c.atBreak),p="after"in c,m=f.index+(h?f[1].length:0);i.includes(m)?(o[m].before&&!h&&(o[m].before=!1),o[m].after&&!p&&(o[m].after=!1)):(i.push(m),o[m]={before:h,after:p})}}i.sort(Vx);let a=n.before?n.before.length:0;const s=r.length-(n.after?n.after.length:0);for(u=-1;++u<i.length;){const c=i[u];c<a||c>=s||c+1<s&&i[u+1]===c+1&&o[c].after&&!o[c+1].before&&!o[c+1].after||i[u-1]===c-1&&o[c].before&&!o[c-1].before&&!o[c-1].after||(a!==c&&l.push(vd(r.slice(a,c),"\\")),a=c,/[!-/:-@[-`{-~]/.test(r.charAt(c))&&(!n.encode||!n.encode.includes(r.charAt(c)))?l.push("\\"):(l.push("&#x"+r.charCodeAt(c).toString(16).toUpperCase()+";"),a++))}return l.push(vd(r.slice(a,s),n.after)),l.join("")}function Vx(e,t){return e-t}function vd(e,t){const n=/\\(?=[!-/:-@[-`{-~])/g,r=[],i=[],l=e+t;let o=-1,u=0,a;for(;a=n.exec(l);)r.push(a.index);for(;++o<r.length;)u!==r[o]&&i.push(e.slice(u,r[o])),i.push("\\"),u=r[o];return i.push(e.slice(u)),i.join("")}function Gx(){return{enter:{gfmFootnoteDefinition:e,gfmFootnoteDefinitionLabelString:t,gfmFootnoteCall:i,gfmFootnoteCallString:l},exit:{gfmFootnoteDefinition:r,gfmFootnoteDefinitionLabelString:n,gfmFootnoteCall:u,gfmFootnoteCallString:o}};function e(a){this.enter({type:"footnoteDefinition",identifier:"",label:"",children:[]},a)}function t(){this.buffer()}function n(a){const s=this.resume(),c=this.stack[this.stack.length-1];c.label=s,c.identifier=Qt(this.sliceSerialize(a)).toLowerCase()}function r(a){this.exit(a)}function i(a){this.enter({type:"footnoteReference",identifier:"",label:""},a)}function l(){this.buffer()}function o(a){const s=this.resume(),c=this.stack[this.stack.length-1];c.label=s,c.identifier=Qt(this.sliceSerialize(a)).toLowerCase()}function u(a){this.exit(a)}}function Qx(){return e.peek=t,{unsafe:[{character:"[",inConstruct:["phrasing","label","reference"]}],handlers:{footnoteDefinition:n,footnoteReference:e}};function e(r,i,l,o){const u=Bn(o);let a=u.move("[^");const s=l.enter("footnoteReference"),c=l.enter("reference");return a+=u.move(yd(l,md(r),{...u.current(),before:a,after:"]"})),c(),s(),a+=u.move("]"),a}function t(){return"["}function n(r,i,l,o){const u=Bn(o);let a=u.move("[^");const s=l.enter("footnoteDefinition"),c=l.enter("label");return a+=u.move(yd(l,md(r),{...u.current(),before:a,after:"]"})),c(),a+=u.move("]:"+(r.children&&r.children.length>0?" ":"")),u.shift(4),a+=u.move($_(W_(r,l,u.current()),d)),s(),a;function d(f,h,p){return h?(p?"":"    ")+f:f}}}function G_(e,t,n){const r=t.indexStack,i=e.children||[],l=[];let o=-1,u=n.before;r.push(-1);let a=Bn(n);for(;++o<i.length;){const s=i[o];let c;if(r[r.length-1]=o,o+1<i.length){let d=t.handle.handlers[i[o+1].type];d&&d.peek&&(d=d.peek),c=d?d(i[o+1],e,t,{before:"",after:"",...a.current()}).charAt(0):""}else c=n.after;l.length>0&&(u==="\r"||u===`
`)&&s.type==="html"&&(l[l.length-1]=l[l.length-1].replace(/(\r?\n|\r)$/," "),u=" ",a=Bn(n),a.move(l.join(""))),l.push(a.move(t.handle(s,e,t,{...a.current(),before:u,after:c}))),u=l[l.length-1].slice(-1)}return r.pop(),l.join("")}const Kx={canContainEols:["delete"],enter:{strikethrough:qx},exit:{strikethrough:Zx}},Xx=["autolink","destinationLiteral","destinationRaw","reference","titleQuote","titleApostrophe"],Yx={unsafe:[{character:"~",inConstruct:"phrasing",notInConstruct:Xx}],handlers:{delete:Q_}};Q_.peek=Jx;function qx(e){this.enter({type:"delete",children:[]},e)}function Zx(e){this.exit(e)}function Q_(e,t,n,r){const i=Bn(r),l=n.enter("emphasis");let o=i.move("~~");return o+=G_(e,n,{...i.current(),before:o,after:"~"}),o+=i.move("~~"),l(),o}function Jx(){return"~"}K_.peek=eL;function K_(e,t,n){let r=e.value||"",i="`",l=-1;for(;new RegExp("(^|[^`])"+i+"([^`]|$)").test(r);)i+="`";for(/[^ \r\n]/.test(r)&&(/^[ \r\n]/.test(r)&&/[ \r\n]$/.test(r)||/^`|`$/.test(r))&&(r=" "+r+" ");++l<n.unsafe.length;){const o=n.unsafe[l],u=V_(o);let a;if(o.atBreak)for(;a=u.exec(r);){let s=a.index;r.charCodeAt(s)===10&&r.charCodeAt(s-1)===13&&s--,r=r.slice(0,s)+" "+r.slice(a.index+1)}}return i+r+i}function eL(){return"`"}function tL(e,t={}){const n=(t.align||[]).concat(),r=t.stringLength||rL,i=[],l=[],o=[],u=[];let a=0,s=-1;for(;++s<e.length;){const p=[],m=[];let L=-1;for(e[s].length>a&&(a=e[s].length);++L<e[s].length;){const _=nL(e[s][L]);if(t.alignDelimiters!==!1){const g=r(_);m[L]=g,(u[L]===void 0||g>u[L])&&(u[L]=g)}p.push(_)}l[s]=p,o[s]=m}let c=-1;if(typeof n=="object"&&"length"in n)for(;++c<a;)i[c]=Ed(n[c]);else{const p=Ed(n);for(;++c<a;)i[c]=p}c=-1;const d=[],f=[];for(;++c<a;){const p=i[c];let m="",L="";p===99?(m=":",L=":"):p===108?m=":":p===114&&(L=":");let _=t.alignDelimiters===!1?1:Math.max(1,u[c]-m.length-L.length);const g=m+"-".repeat(_)+L;t.alignDelimiters!==!1&&(_=m.length+_+L.length,_>u[c]&&(u[c]=_),f[c]=_),d[c]=g}l.splice(1,0,d),o.splice(1,0,f),s=-1;const h=[];for(;++s<l.length;){const p=l[s],m=o[s];c=-1;const L=[];for(;++c<a;){const _=p[c]||"";let g="",y="";if(t.alignDelimiters!==!1){const k=u[c]-(m[c]||0),P=i[c];P===114?g=" ".repeat(k):P===99?k%2?(g=" ".repeat(k/2+.5),y=" ".repeat(k/2-.5)):(g=" ".repeat(k/2),y=g):y=" ".repeat(k)}t.delimiterStart!==!1&&!c&&L.push("|"),t.padding!==!1&&!(t.alignDelimiters===!1&&_==="")&&(t.delimiterStart!==!1||c)&&L.push(" "),t.alignDelimiters!==!1&&L.push(g),L.push(_),t.alignDelimiters!==!1&&L.push(y),t.padding!==!1&&L.push(" "),(t.delimiterEnd!==!1||c!==a-1)&&L.push("|")}h.push(t.delimiterEnd===!1?L.join("").replace(/ +$/,""):L.join(""))}return h.join(`
`)}function nL(e){return e==null?"":String(e)}function rL(e){return e.length}function Ed(e){const t=typeof e=="string"?e.codePointAt(0):0;return t===67||t===99?99:t===76||t===108?108:t===82||t===114?114:0}const iL={enter:{table:lL,tableData:Td,tableHeader:Td,tableRow:uL},exit:{codeText:aL,table:oL,tableData:Du,tableHeader:Du,tableRow:Du}};function lL(e){const t=e._align;this.enter({type:"table",align:t.map(n=>n==="none"?null:n),children:[]},e),this.setData("inTable",!0)}function oL(e){this.exit(e),this.setData("inTable")}function uL(e){this.enter({type:"tableRow",children:[]},e)}function Du(e){this.exit(e)}function Td(e){this.enter({type:"tableCell",children:[]},e)}function aL(e){let t=this.resume();this.getData("inTable")&&(t=t.replace(/\\([\\|])/g,sL));const n=this.stack[this.stack.length-1];n.value=t,this.exit(e)}function sL(e,t){return t==="|"?t:e}function cL(e){const t=e||{},n=t.tableCellPadding,r=t.tablePipeAlign,i=t.stringLength,l=n?" ":"|";return{unsafe:[{character:"\r",inConstruct:"tableCell"},{character:`
`,inConstruct:"tableCell"},{atBreak:!0,character:"|",after:"[	 :-]"},{character:"|",inConstruct:"tableCell"},{atBreak:!0,character:":",after:"-"},{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{table:o,tableRow:u,tableCell:a,inlineCode:f}};function o(h,p,m,L){return s(c(h,m,L),h.align)}function u(h,p,m,L){const _=d(h,m,L),g=s([_]);return g.slice(0,g.indexOf(`
`))}function a(h,p,m,L){const _=m.enter("tableCell"),g=m.enter("phrasing"),y=G_(h,m,{...L,before:l,after:l});return g(),_(),y}function s(h,p){return tL(h,{align:p,alignDelimiters:r,padding:n,stringLength:i})}function c(h,p,m){const L=h.children;let _=-1;const g=[],y=p.enter("table");for(;++_<L.length;)g[_]=d(L[_],p,m);return y(),g}function d(h,p,m){const L=h.children;let _=-1;const g=[],y=p.enter("tableRow");for(;++_<L.length;)g[_]=a(L[_],h,p,m);return y(),g}function f(h,p,m){let L=K_(h,p,m);return m.stack.includes("tableCell")&&(L=L.replace(/\|/g,"\\$&")),L}}function fL(e){const t=e.options.bullet||"*";if(t!=="*"&&t!=="+"&&t!=="-")throw new Error("Cannot serialize items with `"+t+"` for `options.bullet`, expected `*`, `+`, or `-`");return t}function dL(e){const t=e.options.listItemIndent||"tab";if(t===1||t==="1")return"one";if(t!=="tab"&&t!=="one"&&t!=="mixed")throw new Error("Cannot serialize items with `"+t+"` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");return t}function hL(e,t,n,r){const i=dL(n);let l=n.bulletCurrent||fL(n);t&&t.type==="list"&&t.ordered&&(l=(typeof t.start=="number"&&t.start>-1?t.start:1)+(n.options.incrementListMarker===!1?0:t.children.indexOf(e))+l);let o=l.length+1;(i==="tab"||i==="mixed"&&(t&&t.type==="list"&&t.spread||e.spread))&&(o=Math.ceil(o/4)*4);const u=Bn(r);u.move(l+" ".repeat(o-l.length)),u.shift(o);const a=n.enter("listItem"),s=$_(W_(e,n,u.current()),c);return a(),s;function c(d,f,h){return f?(h?"":" ".repeat(o))+d:(h?l:l+" ".repeat(o-l.length))+d}}const pL={exit:{taskListCheckValueChecked:xd,taskListCheckValueUnchecked:xd,paragraph:mL}},_L={unsafe:[{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{listItem:gL}};function xd(e){const t=this.stack[this.stack.length-2];t.checked=e.type==="taskListCheckValueChecked"}function mL(e){const t=this.stack[this.stack.length-2],n=this.stack[this.stack.length-1],r=t.children,i=n.children[0];let l=-1,o;if(t&&t.type==="listItem"&&typeof t.checked=="boolean"&&i&&i.type==="text"){for(;++l<r.length;){const u=r[l];if(u.type==="paragraph"){o=u;break}}o===n&&(i.value=i.value.slice(1),i.value.length===0?n.children.shift():n.position&&i.position&&typeof i.position.start.offset=="number"&&(i.position.start.column++,i.position.start.offset++,n.position.start=Object.assign({},i.position.start)))}this.exit(e)}function gL(e,t,n,r){const i=e.children[0],l=typeof e.checked=="boolean"&&i&&i.type==="paragraph",o="["+(e.checked?"x":" ")+"] ",u=Bn(r);l&&u.move(o);let a=hL(e,t,n,{...r,...u.current()});return l&&(a=a.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/,s)),a;function s(c){return c+o}}function yL(){return[Px,Gx(),Kx,iL,pL]}function vL(e){return{extensions:[Nx,Qx(),Yx,cL(e),_L]}}function EL(e={}){const t=this.data();n("micromarkExtensions",Sx(e)),n("fromMarkdownExtensions",yL()),n("toMarkdownExtensions",vL(e));function n(r,i){(t[r]?t[r]:t[r]=[]).push(i)}}function TL(e){return In("div",{className:"flex text-white",children:[le("div",{className:"text-green-600",children:" Guest@portfolio:~$"}),le("div",{className:"px-2",children:e.value})]})}function xL(e){return le(Vs,{className:"text-white",children:e.value,remarkPlugins:[EL]})}function LL(){const[e,t]=Q.useState([]),[n,r]=Q.useState("");function i(l){l.preventDefault();const o=n.toLowerCase().trim();switch(o){case"clear":e.splice(0,e.length);break;case"exit":window.location.href="/";break;case"cat readme":e.push([o,kf.about]);break;default:e.push([o,kf[o]])}t(e),r("")}return Q.useEffect(()=>{console.log("scrolling in function",e);const l=document.querySelector("#screen");l&&(l.scrollTop=l.scrollHeight)},[e.length]),In("div",{className:"bg-black h-screen overflow-auto text-lg",id:"screen",children:[le("div",{children:e==null?void 0:e.map((l,o)=>In("div",{children:[le(TL,{value:l[0]}),le(xL,{value:l[1]})]},o))}),In("form",{className:"flex text-green-600",onSubmit:i,children:["Guest@portfolio:~$",le("input",{autoFocus:!0,className:"bg-black outline-none px-2 text-white",onChange:l=>{r(l.target.value)},type:"text",value:n,onBlur:({target:l})=>l.focus()})]})]})}var Ba={},kL={get exports(){return Ba},set exports(e){Ba=e}};(function(e){var t=t||function(){var n=0,r=1,i=2,l=3,o={},u={font:"Standard",fontPath:"./fonts"};function a(A,I){var E={},w,C,D,G,B=[[16384,"vLayout",i],[8192,"vLayout",r],[4096,"vRule5",!0],[2048,"vRule4",!0],[1024,"vRule3",!0],[512,"vRule2",!0],[256,"vRule1",!0],[128,"hLayout",i],[64,"hLayout",r],[32,"hRule6",!0],[16,"hRule5",!0],[8,"hRule4",!0],[4,"hRule3",!0],[2,"hRule2",!0],[1,"hRule1",!0]];for(w=I!==null?I:A,C=0,D=B.length;C<D;)G=B[C],w>=G[0]?(w=w-G[0],E[G[1]]=typeof E[G[1]]>"u"?G[2]:E[G[1]]):G[1]!=="vLayout"&&G[1]!=="hLayout"&&(E[G[1]]=!1),C++;return typeof E.hLayout>"u"?A===0?E.hLayout=r:A===-1?E.hLayout=n:E.hRule1||E.hRule2||E.hRule3||E.hRule4||E.hRule5||E.hRule6?E.hLayout=l:E.hLayout=i:E.hLayout===i&&(E.hRule1||E.hRule2||E.hRule3||E.hRule4||E.hRule5||E.hRule6)&&(E.hLayout=l),typeof E.vLayout>"u"?E.vRule1||E.vRule2||E.vRule3||E.vRule4||E.vRule5?E.vLayout=l:E.vLayout=n:E.vLayout===i&&(E.vRule1||E.vRule2||E.vRule3||E.vRule4||E.vRule5)&&(E.vLayout=l),E}function s(A,I,E){return A===I&&A!==E?A:!1}function c(A,I){var E="|/\\[]{}()<>";if(A==="_"){if(E.indexOf(I)!==-1)return I}else if(I==="_"&&E.indexOf(A)!==-1)return A;return!1}function d(A,I){var E="| /\\ [] {} () <>",w=E.indexOf(A),C=E.indexOf(I);return w!==-1&&C!==-1&&w!==C&&Math.abs(w-C)!==1?E.substr(Math.max(w,C),1):!1}function f(A,I){var E="[] {} ()",w=E.indexOf(A),C=E.indexOf(I);return w!==-1&&C!==-1&&Math.abs(w-C)<=1?"|":!1}function h(A,I){var E="/\\ \\/ ><",w={0:"|",3:"Y",6:"X"},C=E.indexOf(A),D=E.indexOf(I);return C!==-1&&D!==-1&&D-C===1?w[C]:!1}function p(A,I,E){return A===E&&I===E?E:!1}function m(A,I){return A===I?A:!1}function L(A,I){var E="|/\\[]{}()<>";if(A==="_"){if(E.indexOf(I)!==-1)return I}else if(I==="_"&&E.indexOf(A)!==-1)return A;return!1}function _(A,I){var E="| /\\ [] {} () <>",w=E.indexOf(A),C=E.indexOf(I);return w!==-1&&C!==-1&&w!==C&&Math.abs(w-C)!==1?E.substr(Math.max(w,C),1):!1}function g(A,I){return A==="-"&&I==="_"||A==="_"&&I==="-"?"=":!1}function y(A,I){return A==="|"&&I==="|"?"|":!1}function k(A,I,E){return I===" "||I===""||I===E&&A!==" "?A:I}function P(A,I,E){if(E.fittingRules.vLayout===n)return"invalid";var w,C=Math.min(A.length,I.length),D,G,B=!1,j;if(C===0)return"invalid";for(w=0;w<C;w++)if(D=A.substr(w,1),G=I.substr(w,1),D!==" "&&G!==" "){if(E.fittingRules.vLayout===r)return"invalid";if(E.fittingRules.vLayout===i)return"end";if(y(D,G)){B=B||!1;continue}if(j=!1,j=E.fittingRules.vRule1?m(D,G):j,j=!j&&E.fittingRules.vRule2?L(D,G):j,j=!j&&E.fittingRules.vRule3?_(D,G):j,j=!j&&E.fittingRules.vRule4?g(D,G):j,B=!0,!j)return"invalid"}return B?"end":"valid"}function x(A,I,E){var w=A.length,C=A.length;I.length;for(var D,G,B,j=1,te,Te,ge;j<=w;){for(D=A.slice(Math.max(0,C-j),C),G=I.slice(0,Math.min(w,j)),B=G.length,ge="",te=0;te<B;te++)if(Te=P(D[te],G[te],E),Te==="end")ge=Te;else if(Te==="invalid"){ge=Te;break}else ge===""&&(ge="valid");if(ge==="invalid"){j--;break}if(ge==="end")break;ge==="valid"&&j++}return Math.min(w,j)}function N(A,I,E){var w,C=Math.min(A.length,I.length),D,G,B="",j;for(w=0;w<C;w++)D=A.substr(w,1),G=I.substr(w,1),D!==" "&&G!==" "?E.fittingRules.vLayout===r||E.fittingRules.vLayout===i?B+=k(D,G):(j=!1,j=E.fittingRules.vRule5?y(D,G):j,j=!j&&E.fittingRules.vRule1?m(D,G):j,j=!j&&E.fittingRules.vRule2?L(D,G):j,j=!j&&E.fittingRules.vRule3?_(D,G):j,j=!j&&E.fittingRules.vRule4?g(D,G):j,B+=j):B+=k(D,G);return B}function H(A,I,E,w){var C=A.length,D=I.length,G=A.slice(0,Math.max(0,C-E)),B=A.slice(Math.max(0,C-E),C),j=I.slice(0,Math.min(E,D)),te,Te,ge,Ee=[],xe,rt=[];for(Te=B.length,te=0;te<Te;te++)te>=D?ge=B[te]:ge=N(B[te],j[te],w),Ee.push(ge);return xe=I.slice(Math.min(E,D),D),rt.concat(G,Ee,xe)}function X(A,I){var E,w=A.length,C="";for(E=0;E<I;E++)C+=" ";for(E=0;E<w;E++)A[E]+=C}function Y(A,I,E){var w=A[0].length,C=I[0].length,D;return w>C?X(I,w-C):C>w&&X(A,C-w),D=x(A,I,E),H(A,I,D,E)}function V(A,I,E){if(E.fittingRules.hLayout===n)return 0;var w,C=A.length,D=I.length,G=C,B=1,j=!1,te=!1,Te,ge,Ee,xe;if(C===0)return 0;e:for(;B<=G;){for(Te=A.substr(C-B,B),ge=I.substr(0,Math.min(B,D)),w=0;w<Math.min(B,D);w++)if(Ee=Te.substr(w,1),xe=ge.substr(w,1),Ee!==" "&&xe!==" "){if(E.fittingRules.hLayout===r){B=B-1;break e}else if(E.fittingRules.hLayout===i){(Ee===E.hardBlank||xe===E.hardBlank)&&(B=B-1);break e}else if(j=!0,te=!1,te=E.fittingRules.hRule1?s(Ee,xe,E.hardBlank):te,te=!te&&E.fittingRules.hRule2?c(Ee,xe,E.hardBlank):te,te=!te&&E.fittingRules.hRule3?d(Ee,xe,E.hardBlank):te,te=!te&&E.fittingRules.hRule4?f(Ee,xe,E.hardBlank):te,te=!te&&E.fittingRules.hRule5?h(Ee,xe,E.hardBlank):te,te=!te&&E.fittingRules.hRule6?p(Ee,xe,E.hardBlank):te,!te){B=B-1;break e}}if(j)break;B++}return Math.min(G,B)}function ee(A,I,E,w){var C,D,G=[],B,j,te,Te,ge,Ee,xe,rt;for(C=0;C<w.height;C++){xe=A[C],rt=I[C],ge=xe.length,Ee=rt.length,B=ge-E,j=xe.substr(0,Math.max(0,B)),te="";var O=xe.substr(Math.max(0,ge-E),E),M=rt.substr(0,Math.min(E,Ee));for(D=0;D<E;D++){var b=D<ge?O.substr(D,1):" ",K=D<Ee?M.substr(D,1):" ";if(b!==" "&&K!==" ")if(w.fittingRules.hLayout===r)te+=k(b,K,w.hardBlank);else if(w.fittingRules.hLayout===i)te+=k(b,K,w.hardBlank);else{var $="";$=!$&&w.fittingRules.hRule1?s(b,K,w.hardBlank):$,$=!$&&w.fittingRules.hRule2?c(b,K,w.hardBlank):$,$=!$&&w.fittingRules.hRule3?d(b,K,w.hardBlank):$,$=!$&&w.fittingRules.hRule4?f(b,K,w.hardBlank):$,$=!$&&w.fittingRules.hRule5?h(b,K,w.hardBlank):$,$=!$&&w.fittingRules.hRule6?p(b,K,w.hardBlank):$,$=$||k(b,K,w.hardBlank),te+=$}else te+=k(b,K,w.hardBlank)}E>=Ee?Te="":Te=rt.substr(E,Math.max(0,Ee-E)),G[C]=j+te+Te}return G}function re(A){var I=[],E;for(E=0;E<A;E++)I[E]="";return I}function ue(A,I,E){return A.reduce(function(w,C){return ee(w,C.fig,C.overlap,E)},re(I))}function Ce(A,I,E){for(var w={},C=A.length;--C;){var D=ue(A.slice(0,C),I,E);if(q(D)<=E.width){w.outputFigText=D,C<A.length?w.chars=A.slice(C):w.chars=[];break}}return w}function R(A,I,E){var w,C,D=0,G,B,j,te=E.height,Te=[],ge,Ee,xe=[],rt,O,M,b,K;for(B=re(te),E.width>0&&E.whitespaceBreak&&(Ee={chars:[],overlap:D}),E.printDirection===1&&(A=A.split("").reverse().join("")),j=A.length,w=0;w<j;w++)if(rt=A.substr(w,1),O=rt.match(/\s/),C=I[rt.charCodeAt(0)],b=null,C){if(E.fittingRules.hLayout!==n){for(D=1e4,G=0;G<E.height;G++)D=Math.min(D,V(B[G],C[G],E));D=D===1e4?0:D}if(E.width>0&&(E.whitespaceBreak?(M=ue(Ee.chars.concat([{fig:C,overlap:D}]),te,E),b=ue(xe.concat([{fig:M,overlap:Ee.overlap}]),te,E),ge=q(b)):(b=ee(B,C,D,E),ge=q(b)),ge>=E.width&&w>0&&(E.whitespaceBreak?(B=ue(xe.slice(0,-1),te,E),xe.length>1&&(Te.push(B),B=re(te)),xe=[]):(Te.push(B),B=re(te)))),E.width>0&&E.whitespaceBreak&&((!O||w===j-1)&&Ee.chars.push({fig:C,overlap:D}),O||w===j-1)){for(K=null;b=ue(Ee.chars,te,E),ge=q(b),ge>=E.width;)K=Ce(Ee.chars,te,E),Ee={chars:K.chars},Te.push(K.outputFigText);ge>0&&(K?xe.push({fig:b,overlap:1}):xe.push({fig:b,overlap:Ee.overlap})),O&&(xe.push({fig:C,overlap:D}),B=re(te)),w===j-1&&(B=ue(xe,te,E)),Ee={chars:[],overlap:D};continue}B=ee(B,C,D,E)}return q(B)>0&&Te.push(B),E.showHardBlanks!==!0&&Te.forEach(function($){for(j=$.length,G=0;G<j;G++)$[G]=$[G].replace(new RegExp("\\"+E.hardBlank,"g")," ")}),Te}var De=function(A,I){var E=["hLayout","hRule1","hRule2","hRule3","hRule4","hRule5","hRule6"],w={},C;if(A==="default")for(C=0;C<E.length;C++)w[E[C]]=I.fittingRules[E[C]];else if(A==="full")w={hLayout:n,hRule1:!1,hRule2:!1,hRule3:!1,hRule4:!1,hRule5:!1,hRule6:!1};else if(A==="fitted")w={hLayout:r,hRule1:!1,hRule2:!1,hRule3:!1,hRule4:!1,hRule5:!1,hRule6:!1};else if(A==="controlled smushing")w={hLayout:l,hRule1:!0,hRule2:!0,hRule3:!0,hRule4:!0,hRule5:!0,hRule6:!0};else if(A==="universal smushing")w={hLayout:i,hRule1:!1,hRule2:!1,hRule3:!1,hRule4:!1,hRule5:!1,hRule6:!1};else return;return w},z=function(A,I){var E=["vLayout","vRule1","vRule2","vRule3","vRule4","vRule5"],w={},C;if(A==="default")for(C=0;C<E.length;C++)w[E[C]]=I.fittingRules[E[C]];else if(A==="full")w={vLayout:n,vRule1:!1,vRule2:!1,vRule3:!1,vRule4:!1,vRule5:!1};else if(A==="fitted")w={vLayout:r,vRule1:!1,vRule2:!1,vRule3:!1,vRule4:!1,vRule5:!1};else if(A==="controlled smushing")w={vLayout:l,vRule1:!0,vRule2:!0,vRule3:!0,vRule4:!0,vRule5:!0};else if(A==="universal smushing")w={vLayout:i,vRule1:!1,vRule2:!1,vRule3:!1,vRule4:!1,vRule5:!1};else return;return w},q=function(A){return Math.max.apply(Math,A.map(function(I,E){return I.length}))},J=function(A,I,E){E=E.replace(/\r\n/g,`
`).replace(/\r/g,`
`);var w=E.split(`
`),C=[],D,G,B;for(G=w.length,D=0;D<G;D++)C=C.concat(R(w[D],o[A],I));for(G=C.length,B=C[0],D=1;D<G;D++)B=Y(B,C[D],I);return B?B.join(`
`):""},v=function(A,I,E){v.text(A,I,E)};v.text=function(A,I,E){var w="";A=A+"",typeof arguments[1]=="function"&&(E=I,I={},I.font=u.font),typeof I=="string"?(w=I,I={}):(I=I||{},w=I.font||u.font),v.loadFont(w,function(C,D){if(C)return E(C);E(null,J(w,T(D,I),A))})},v.textSync=function(A,I){var E="";A=A+"",typeof I=="string"?(E=I,I={}):(I=I||{},E=I.font||u.font);var w=T(v.loadFontSync(E),I);return J(E,w,A)};function T(A,I){var E=JSON.parse(JSON.stringify(A)),w,C;if(typeof I.horizontalLayout<"u"){w=De(I.horizontalLayout,A);for(C in w)w.hasOwnProperty(C)&&(E.fittingRules[C]=w[C])}if(typeof I.verticalLayout<"u"){w=z(I.verticalLayout,A);for(C in w)w.hasOwnProperty(C)&&(E.fittingRules[C]=w[C])}return E.printDirection=typeof I.printDirection<"u"?I.printDirection:A.printDirection,E.showHardBlanks=I.showHardBlanks||!1,E.width=I.width||-1,E.whitespaceBreak=I.whitespaceBreak||!1,E}return v.metadata=function(A,I){A=A+"",v.loadFont(A,function(E,w){if(E){I(E);return}I(null,w,o[A].comment)})},v.defaults=function(A){if(typeof A=="object"&&A!==null)for(var I in A)A.hasOwnProperty(I)&&(u[I]=A[I]);return JSON.parse(JSON.stringify(u))},v.parseFont=function(A,I){I=I.replace(/\r\n/g,`
`).replace(/\r/g,`
`),o[A]={};var E=I.split(`
`),w=E.splice(0,1)[0].split(" "),C=o[A],D={};if(D.hardBlank=w[0].substr(5,1),D.height=parseInt(w[1],10),D.baseline=parseInt(w[2],10),D.maxLength=parseInt(w[3],10),D.oldLayout=parseInt(w[4],10),D.numCommentLines=parseInt(w[5],10),D.printDirection=w.length>=6?parseInt(w[6],10):0,D.fullLayout=w.length>=7?parseInt(w[7],10):null,D.codeTagCount=w.length>=8?parseInt(w[8],10):null,D.fittingRules=a(D.oldLayout,D.fullLayout),C.options=D,D.hardBlank.length!==1||isNaN(D.height)||isNaN(D.baseline)||isNaN(D.maxLength)||isNaN(D.oldLayout)||isNaN(D.numCommentLines))throw new Error("FIGlet header contains invalid values.");var G=[],B;for(B=32;B<=126;B++)G.push(B);if(G=G.concat(196,214,220,228,246,252,223),E.length<D.numCommentLines+D.height*G.length)throw new Error("FIGlet file is missing data.");var j,te,Te=!1;for(C.comment=E.splice(0,D.numCommentLines).join(`
`),C.numChars=0;E.length>0&&C.numChars<G.length;){for(j=G[C.numChars],C[j]=E.splice(0,D.height),B=0;B<D.height;B++)typeof C[j][B]>"u"?C[j][B]="":(te=new RegExp("\\"+C[j][B].substr(C[j][B].length-1,1)+"+$"),C[j][B]=C[j][B].replace(te,""));C.numChars++}for(;E.length>0;){if(j=E.splice(0,1)[0].split(" ")[0],/^0[xX][0-9a-fA-F]+$/.test(j))j=parseInt(j,16);else if(/^0[0-7]+$/.test(j))j=parseInt(j,8);else if(/^[0-9]+$/.test(j))j=parseInt(j,10);else if(/^-0[xX][0-9a-fA-F]+$/.test(j))j=parseInt(j,16);else{if(j==="")break;console.log("Invalid data:"+j),Te=!0;break}for(C[j]=E.splice(0,D.height),B=0;B<D.height;B++)typeof C[j][B]>"u"?C[j][B]="":(te=new RegExp("\\"+C[j][B].substr(C[j][B].length-1,1)+"+$"),C[j][B]=C[j][B].replace(te,""));C.numChars++}if(Te===!0)throw new Error("Error parsing data.");return D},v.loadFont=function(A,I){if(o[A]){I(null,o[A].options);return}if(typeof fetch!="function")throw console.error("figlet.js requires the fetch API or a fetch polyfill such as https://cdnjs.com/libraries/fetch"),new Error("fetch is required for figlet.js to work.");fetch(u.fontPath+"/"+A+".flf").then(function(E){if(E.ok)return E.text();throw console.log("Unexpected response",E),new Error("Network response was not ok.")}).then(function(E){I(null,v.parseFont(A,E))}).catch(I)},v.loadFontSync=function(A){if(o[A])return o[A].options;throw new Error("synchronous font loading is not implemented for the browser")},v.preloadFonts=function(A,I){var E=[];A.reduce(function(w,C){return w.then(function(){return fetch(u.fontPath+"/"+C+".flf").then(D=>D.text()).then(function(D){E.push(D)})})},Promise.resolve()).then(function(w){for(var C in A)A.hasOwnProperty(C)&&v.parseFont(A[C],E[C]);I&&I()})},v.figFonts=o,v}();e.exports=t})(kL);const X_=Ba,wL=`flf2a$ 6 5 16 15 13 0 24463 229
Standard by Glenn Chappell & Ian Chai 3/93 -- based on Frank's .sig
Includes ISO Latin-1
figlet release 2.1 -- 12 Aug 1994
Modified for figlet 2.2 by John Cowan <cowan@ccil.org>
  to add Latin-{2,3,4,5} support (Unicode U+0100-017F).
Permission is hereby given to modify this font, as long as the
modifier's name is placed on a comment line.

Modified by Paul Burton <solution@earthlink.net> 12/96 to include new parameter
supported by FIGlet and FIGWin.  May also be slightly modified for better use
of new full-width/kern/smush alternatives, but default output is NOT changed.

Font modified May 20, 2012 by patorjk to add the 0xCA0 character
 $@
 $@
 $@
 $@
 $@
 $@@
  _ @
 | |@
 | |@
 |_|@
 (_)@
    @@
  _ _ @
 ( | )@
  V V @
   $  @
   $  @
      @@
    _  _   @
  _| || |_ @
 |_  ..  _|@
 |_      _|@
   |_||_|  @
           @@
   _  @
  | | @
 / __)@
 \\__ \\@
 (   /@
  |_| @@
  _  __@
 (_)/ /@
   / / @
  / /_ @
 /_/(_)@
       @@
   ___   @
  ( _ )  @
  / _ \\/\\@
 | (_>  <@
  \\___/\\/@
         @@
  _ @
 ( )@
 |/ @
  $ @
  $ @
    @@
   __@
  / /@
 | | @
 | | @
 | | @
  \\_\\@@
 __  @
 \\ \\ @
  | |@
  | |@
  | |@
 /_/ @@
       @
 __/\\__@
 \\    /@
 /_  _\\@
   \\/  @
       @@
        @
    _   @
  _| |_ @
 |_   _|@
   |_|  @
        @@
    @
    @
    @
  _ @
 ( )@
 |/ @@
        @
        @
  _____ @
 |_____|@
    $   @
        @@
    @
    @
    @
  _ @
 (_)@
    @@
     __@
    / /@
   / / @
  / /  @
 /_/   @
       @@
   ___  @
  / _ \\ @
 | | | |@
 | |_| |@
  \\___/ @
        @@
  _ @
 / |@
 | |@
 | |@
 |_|@
    @@
  ____  @
 |___ \\ @
   __) |@
  / __/ @
 |_____|@
        @@
  _____ @
 |___ / @
   |_ \\ @
  ___) |@
 |____/ @
        @@
  _  _   @
 | || |  @
 | || |_ @
 |__   _|@
    |_|  @
         @@
  ____  @
 | ___| @
 |___ \\ @
  ___) |@
 |____/ @
        @@
   __   @
  / /_  @
 | '_ \\ @
 | (_) |@
  \\___/ @
        @@
  _____ @
 |___  |@
    / / @
   / /  @
  /_/   @
        @@
   ___  @
  ( _ ) @
  / _ \\ @
 | (_) |@
  \\___/ @
        @@
   ___  @
  / _ \\ @
 | (_) |@
  \\__, |@
    /_/ @
        @@
    @
  _ @
 (_)@
  _ @
 (_)@
    @@
    @
  _ @
 (_)@
  _ @
 ( )@
 |/ @@
   __@
  / /@
 / / @
 \\ \\ @
  \\_\\@
     @@
        @
  _____ @
 |_____|@
 |_____|@
    $   @
        @@
 __  @
 \\ \\ @
  \\ \\@
  / /@
 /_/ @
     @@
  ___ @
 |__ \\@
   / /@
  |_| @
  (_) @
      @@
    ____  @
   / __ \\ @
  / / _\` |@
 | | (_| |@
  \\ \\__,_|@
   \\____/ @@
     _    @
    / \\   @
   / _ \\  @
  / ___ \\ @
 /_/   \\_\\@
          @@
  ____  @
 | __ ) @
 |  _ \\ @
 | |_) |@
 |____/ @
        @@
   ____ @
  / ___|@
 | |    @
 | |___ @
  \\____|@
        @@
  ____  @
 |  _ \\ @
 | | | |@
 | |_| |@
 |____/ @
        @@
  _____ @
 | ____|@
 |  _|  @
 | |___ @
 |_____|@
        @@
  _____ @
 |  ___|@
 | |_   @
 |  _|  @
 |_|    @
        @@
   ____ @
  / ___|@
 | |  _ @
 | |_| |@
  \\____|@
        @@
  _   _ @
 | | | |@
 | |_| |@
 |  _  |@
 |_| |_|@
        @@
  ___ @
 |_ _|@
  | | @
  | | @
 |___|@
      @@
      _ @
     | |@
  _  | |@
 | |_| |@
  \\___/ @
        @@
  _  __@
 | |/ /@
 | ' / @
 | . \\ @
 |_|\\_\\@
       @@
  _     @
 | |    @
 | |    @
 | |___ @
 |_____|@
        @@
  __  __ @
 |  \\/  |@
 | |\\/| |@
 | |  | |@
 |_|  |_|@
         @@
  _   _ @
 | \\ | |@
 |  \\| |@
 | |\\  |@
 |_| \\_|@
        @@
   ___  @
  / _ \\ @
 | | | |@
 | |_| |@
  \\___/ @
        @@
  ____  @
 |  _ \\ @
 | |_) |@
 |  __/ @
 |_|    @
        @@
   ___  @
  / _ \\ @
 | | | |@
 | |_| |@
  \\__\\_\\@
        @@
  ____  @
 |  _ \\ @
 | |_) |@
 |  _ < @
 |_| \\_\\@
        @@
  ____  @
 / ___| @
 \\___ \\ @
  ___) |@
 |____/ @
        @@
  _____ @
 |_   _|@
   | |  @
   | |  @
   |_|  @
        @@
  _   _ @
 | | | |@
 | | | |@
 | |_| |@
  \\___/ @
        @@
 __     __@
 \\ \\   / /@
  \\ \\ / / @
   \\ V /  @
    \\_/   @
          @@
 __        __@
 \\ \\      / /@
  \\ \\ /\\ / / @
   \\ V  V /  @
    \\_/\\_/   @
             @@
 __  __@
 \\ \\/ /@
  \\  / @
  /  \\ @
 /_/\\_\\@
       @@
 __   __@
 \\ \\ / /@
  \\ V / @
   | |  @
   |_|  @
        @@
  _____@
 |__  /@
   / / @
  / /_ @
 /____|@
       @@
  __ @
 | _|@
 | | @
 | | @
 | | @
 |__|@@
 __    @
 \\ \\   @
  \\ \\  @
   \\ \\ @
    \\_\\@
       @@
  __ @
 |_ |@
  | |@
  | |@
  | |@
 |__|@@
  /\\ @
 |/\\|@
   $ @
   $ @
   $ @
     @@
        @
        @
        @
        @
  _____ @
 |_____|@@
  _ @
 ( )@
  \\|@
  $ @
  $ @
    @@
        @
   __ _ @
  / _\` |@
 | (_| |@
  \\__,_|@
        @@
  _     @
 | |__  @
 | '_ \\ @
 | |_) |@
 |_.__/ @
        @@
       @
   ___ @
  / __|@
 | (__ @
  \\___|@
       @@
      _ @
   __| |@
  / _\` |@
 | (_| |@
  \\__,_|@
        @@
       @
   ___ @
  / _ \\@
 |  __/@
  \\___|@
       @@
   __ @
  / _|@
 | |_ @
 |  _|@
 |_|  @
      @@
        @
   __ _ @
  / _\` |@
 | (_| |@
  \\__, |@
  |___/ @@
  _     @
 | |__  @
 | '_ \\ @
 | | | |@
 |_| |_|@
        @@
  _ @
 (_)@
 | |@
 | |@
 |_|@
    @@
    _ @
   (_)@
   | |@
   | |@
  _/ |@
 |__/ @@
  _    @
 | | __@
 | |/ /@
 |   < @
 |_|\\_\\@
       @@
  _ @
 | |@
 | |@
 | |@
 |_|@
    @@
            @
  _ __ ___  @
 | '_ \` _ \\ @
 | | | | | |@
 |_| |_| |_|@
            @@
        @
  _ __  @
 | '_ \\ @
 | | | |@
 |_| |_|@
        @@
        @
   ___  @
  / _ \\ @
 | (_) |@
  \\___/ @
        @@
        @
  _ __  @
 | '_ \\ @
 | |_) |@
 | .__/ @
 |_|    @@
        @
   __ _ @
  / _\` |@
 | (_| |@
  \\__, |@
     |_|@@
       @
  _ __ @
 | '__|@
 | |   @
 |_|   @
       @@
      @
  ___ @
 / __|@
 \\__ \\@
 |___/@
      @@
  _   @
 | |_ @
 | __|@
 | |_ @
  \\__|@
      @@
        @
  _   _ @
 | | | |@
 | |_| |@
  \\__,_|@
        @@
        @
 __   __@
 \\ \\ / /@
  \\ V / @
   \\_/  @
        @@
           @
 __      __@
 \\ \\ /\\ / /@
  \\ V  V / @
   \\_/\\_/  @
           @@
       @
 __  __@
 \\ \\/ /@
  >  < @
 /_/\\_\\@
       @@
        @
  _   _ @
 | | | |@
 | |_| |@
  \\__, |@
  |___/ @@
      @
  ____@
 |_  /@
  / / @
 /___|@
      @@
    __@
   / /@
  | | @
 < <  @
  | | @
   \\_\\@@
  _ @
 | |@
 | |@
 | |@
 | |@
 |_|@@
 __   @
 \\ \\  @
  | | @
   > >@
  | | @
 /_/  @@
  /\\/|@
 |/\\/ @
   $  @
   $  @
   $  @
      @@
  _   _ @
 (_)_(_)@
   /_\\  @
  / _ \\ @
 /_/ \\_\\@
        @@
  _   _ @
 (_)_(_)@
  / _ \\ @
 | |_| |@
  \\___/ @
        @@
  _   _ @
 (_) (_)@
 | | | |@
 | |_| |@
  \\___/ @
        @@
  _   _ @
 (_)_(_)@
  / _\` |@
 | (_| |@
  \\__,_|@
        @@
  _   _ @
 (_)_(_)@
  / _ \\ @
 | (_) |@
  \\___/ @
        @@
  _   _ @
 (_) (_)@
 | | | |@
 | |_| |@
  \\__,_|@
        @@
   ___ @
  / _ \\@
 | |/ /@
 | |\\ \\@
 | ||_/@
 |_|   @@
160  NO-BREAK SPACE
 $@
 $@
 $@
 $@
 $@
 $@@
161  INVERTED EXCLAMATION MARK
  _ @
 (_)@
 | |@
 | |@
 |_|@
    @@
162  CENT SIGN
    _  @
   | | @
  / __)@
 | (__ @
  \\   )@
   |_| @@
163  POUND SIGN
    ___  @
   / ,_\\ @
 _| |_   @
  | |___ @
 (_,____|@
         @@
164  CURRENCY SIGN
 /\\___/\\@
 \\  _  /@
 | (_) |@
 / ___ \\@
 \\/   \\/@
        @@
165  YEN SIGN
  __ __ @
  \\ V / @
 |__ __|@
 |__ __|@
   |_|  @
        @@
166  BROKEN BAR
  _ @
 | |@
 |_|@
  _ @
 | |@
 |_|@@
167  SECTION SIGN
    __ @
  _/ _)@
 / \\ \\ @
 \\ \\\\ \\@
  \\ \\_/@
 (__/  @@
168  DIAERESIS
  _   _ @
 (_) (_)@
  $   $ @
  $   $ @
  $   $ @
        @@
169  COPYRIGHT SIGN
    _____   @
   / ___ \\  @
  / / __| \\ @
 | | (__   |@
  \\ \\___| / @
   \\_____/  @@
170  FEMININE ORDINAL INDICATOR
  __ _ @
 / _\` |@
 \\__,_|@
 |____|@
    $  @
       @@
171  LEFT-POINTING DOUBLE ANGLE QUOTATION MARK
   ____@
  / / /@
 / / / @
 \\ \\ \\ @
  \\_\\_\\@
       @@
172  NOT SIGN
        @
  _____ @
 |___  |@
     |_|@
    $   @
        @@
173  SOFT HYPHEN
       @
       @
  ____ @
 |____|@
    $  @
       @@
174  REGISTERED SIGN
    _____   @
   / ___ \\  @
  / | _ \\ \\ @
 |  |   /  |@
  \\ |_|_\\ / @
   \\_____/  @@
175  MACRON
  _____ @
 |_____|@
    $   @
    $   @
    $   @
        @@
176  DEGREE SIGN
   __  @
  /  \\ @
 | () |@
  \\__/ @
    $  @
       @@
177  PLUS-MINUS SIGN
    _   @
  _| |_ @
 |_   _|@
  _|_|_ @
 |_____|@
        @@
178  SUPERSCRIPT TWO
  ___ @
 |_  )@
  / / @
 /___|@
   $  @
      @@
179  SUPERSCRIPT THREE
  ____@
 |__ /@
  |_ \\@
 |___/@
   $  @
      @@
180  ACUTE ACCENT
  __@
 /_/@
  $ @
  $ @
  $ @
    @@
181  MICRO SIGN
        @
  _   _ @
 | | | |@
 | |_| |@
 | ._,_|@
 |_|    @@
182  PILCROW SIGN
   _____ @
  /     |@
 | (| | |@
  \\__ | |@
    |_|_|@
         @@
183  MIDDLE DOT
    @
  _ @
 (_)@
  $ @
  $ @
    @@
184  CEDILLA
    @
    @
    @
    @
  _ @
 )_)@@
185  SUPERSCRIPT ONE
  _ @
 / |@
 | |@
 |_|@
  $ @
    @@
186  MASCULINE ORDINAL INDICATOR
  ___ @
 / _ \\@
 \\___/@
 |___|@
   $  @
      @@
187  RIGHT-POINTING DOUBLE ANGLE QUOTATION MARK
 ____  @
 \\ \\ \\ @
  \\ \\ \\@
  / / /@
 /_/_/ @
       @@
188  VULGAR FRACTION ONE QUARTER
  _   __    @
 / | / / _  @
 | |/ / | | @
 |_/ /|_  _|@
  /_/   |_| @
            @@
189  VULGAR FRACTION ONE HALF
  _   __   @
 / | / /__ @
 | |/ /_  )@
 |_/ / / / @
  /_/ /___|@
           @@
190  VULGAR FRACTION THREE QUARTERS
  ____  __    @
 |__ / / / _  @
  |_ \\/ / | | @
 |___/ /|_  _|@
    /_/   |_| @
              @@
191  INVERTED QUESTION MARK
   _  @
  (_) @
  | | @
 / /_ @
 \\___|@
      @@
192  LATIN CAPITAL LETTER A WITH GRAVE
   __   @
   \\_\\  @
   /_\\  @
  / _ \\ @
 /_/ \\_\\@
        @@
193  LATIN CAPITAL LETTER A WITH ACUTE
    __  @
   /_/  @
   /_\\  @
  / _ \\ @
 /_/ \\_\\@
        @@
194  LATIN CAPITAL LETTER A WITH CIRCUMFLEX
   //\\  @
  |/_\\| @
   /_\\  @
  / _ \\ @
 /_/ \\_\\@
        @@
195  LATIN CAPITAL LETTER A WITH TILDE
   /\\/| @
  |/\\/  @
   /_\\  @
  / _ \\ @
 /_/ \\_\\@
        @@
196  LATIN CAPITAL LETTER A WITH DIAERESIS
  _   _ @
 (_)_(_)@
   /_\\  @
  / _ \\ @
 /_/ \\_\\@
        @@
197  LATIN CAPITAL LETTER A WITH RING ABOVE
    _   @
   (o)  @
   /_\\  @
  / _ \\ @
 /_/ \\_\\@
        @@
198  LATIN CAPITAL LETTER AE
     ______ @
    /  ____|@
   / _  _|  @
  / __ |___ @
 /_/ |_____|@
            @@
199  LATIN CAPITAL LETTER C WITH CEDILLA
   ____ @
  / ___|@
 | |    @
 | |___ @
  \\____|@
    )_) @@
200  LATIN CAPITAL LETTER E WITH GRAVE
   __   @
  _\\_\\_ @
 | ____|@
 |  _|_ @
 |_____|@
        @@
201  LATIN CAPITAL LETTER E WITH ACUTE
    __  @
  _/_/_ @
 | ____|@
 |  _|_ @
 |_____|@
        @@
202  LATIN CAPITAL LETTER E WITH CIRCUMFLEX
   //\\  @
  |/_\\| @
 | ____|@
 |  _|_ @
 |_____|@
        @@
203  LATIN CAPITAL LETTER E WITH DIAERESIS
  _   _ @
 (_)_(_)@
 | ____|@
 |  _|_ @
 |_____|@
        @@
204  LATIN CAPITAL LETTER I WITH GRAVE
  __  @
  \\_\\ @
 |_ _|@
  | | @
 |___|@
      @@
205  LATIN CAPITAL LETTER I WITH ACUTE
   __ @
  /_/ @
 |_ _|@
  | | @
 |___|@
      @@
206  LATIN CAPITAL LETTER I WITH CIRCUMFLEX
  //\\ @
 |/_\\|@
 |_ _|@
  | | @
 |___|@
      @@
207  LATIN CAPITAL LETTER I WITH DIAERESIS
  _   _ @
 (_)_(_)@
  |_ _| @
   | |  @
  |___| @
        @@
208  LATIN CAPITAL LETTER ETH
    ____  @
   |  _ \\ @
  _| |_| |@
 |__ __| |@
   |____/ @
          @@
209  LATIN CAPITAL LETTER N WITH TILDE
   /\\/|@
  |/\\/ @
 | \\| |@
 | .\` |@
 |_|\\_|@
       @@
210  LATIN CAPITAL LETTER O WITH GRAVE
   __   @
   \\_\\  @
  / _ \\ @
 | |_| |@
  \\___/ @
        @@
211  LATIN CAPITAL LETTER O WITH ACUTE
    __  @
   /_/  @
  / _ \\ @
 | |_| |@
  \\___/ @
        @@
212  LATIN CAPITAL LETTER O WITH CIRCUMFLEX
   //\\  @
  |/_\\| @
  / _ \\ @
 | |_| |@
  \\___/ @
        @@
213  LATIN CAPITAL LETTER O WITH TILDE
   /\\/| @
  |/\\/  @
  / _ \\ @
 | |_| |@
  \\___/ @
        @@
214  LATIN CAPITAL LETTER O WITH DIAERESIS
  _   _ @
 (_)_(_)@
  / _ \\ @
 | |_| |@
  \\___/ @
        @@
215  MULTIPLICATION SIGN
     @
     @
 /\\/\\@
 >  <@
 \\/\\/@
     @@
216  LATIN CAPITAL LETTER O WITH STROKE
   ____ @
  / _// @
 | |// |@
 | //| |@
  //__/ @
        @@
217  LATIN CAPITAL LETTER U WITH GRAVE
   __   @
  _\\_\\_ @
 | | | |@
 | |_| |@
  \\___/ @
        @@
218  LATIN CAPITAL LETTER U WITH ACUTE
    __  @
  _/_/_ @
 | | | |@
 | |_| |@
  \\___/ @
        @@
219  LATIN CAPITAL LETTER U WITH CIRCUMFLEX
   //\\  @
  |/ \\| @
 | | | |@
 | |_| |@
  \\___/ @
        @@
220  LATIN CAPITAL LETTER U WITH DIAERESIS
  _   _ @
 (_) (_)@
 | | | |@
 | |_| |@
  \\___/ @
        @@
221  LATIN CAPITAL LETTER Y WITH ACUTE
    __  @
 __/_/__@
 \\ \\ / /@
  \\ V / @
   |_|  @
        @@
222  LATIN CAPITAL LETTER THORN
  _     @
 | |___ @
 |  __ \\@
 |  ___/@
 |_|    @
        @@
223  LATIN SMALL LETTER SHARP S
   ___ @
  / _ \\@
 | |/ /@
 | |\\ \\@
 | ||_/@
 |_|   @@
224  LATIN SMALL LETTER A WITH GRAVE
   __   @
   \\_\\_ @
  / _\` |@
 | (_| |@
  \\__,_|@
        @@
225  LATIN SMALL LETTER A WITH ACUTE
    __  @
   /_/_ @
  / _\` |@
 | (_| |@
  \\__,_|@
        @@
226  LATIN SMALL LETTER A WITH CIRCUMFLEX
   //\\  @
  |/_\\| @
  / _\` |@
 | (_| |@
  \\__,_|@
        @@
227  LATIN SMALL LETTER A WITH TILDE
   /\\/| @
  |/\\/_ @
  / _\` |@
 | (_| |@
  \\__,_|@
        @@
228  LATIN SMALL LETTER A WITH DIAERESIS
  _   _ @
 (_)_(_)@
  / _\` |@
 | (_| |@
  \\__,_|@
        @@
229  LATIN SMALL LETTER A WITH RING ABOVE
    __  @
   (()) @
  / _ '|@
 | (_| |@
  \\__,_|@
        @@
230  LATIN SMALL LETTER AE
           @
   __ ____ @
  / _\`  _ \\@
 | (_|  __/@
  \\__,____|@
           @@
231  LATIN SMALL LETTER C WITH CEDILLA
       @
   ___ @
  / __|@
 | (__ @
  \\___|@
   )_) @@
232  LATIN SMALL LETTER E WITH GRAVE
   __  @
   \\_\\ @
  / _ \\@
 |  __/@
  \\___|@
       @@
233  LATIN SMALL LETTER E WITH ACUTE
    __ @
   /_/ @
  / _ \\@
 |  __/@
  \\___|@
       @@
234  LATIN SMALL LETTER E WITH CIRCUMFLEX
   //\\ @
  |/_\\|@
  / _ \\@
 |  __/@
  \\___|@
       @@
235  LATIN SMALL LETTER E WITH DIAERESIS
  _   _ @
 (_)_(_)@
  / _ \\ @
 |  __/ @
  \\___| @
        @@
236  LATIN SMALL LETTER I WITH GRAVE
 __ @
 \\_\\@
 | |@
 | |@
 |_|@
    @@
237  LATIN SMALL LETTER I WITH ACUTE
  __@
 /_/@
 | |@
 | |@
 |_|@
    @@
238  LATIN SMALL LETTER I WITH CIRCUMFLEX
  //\\ @
 |/_\\|@
  | | @
  | | @
  |_| @
      @@
239  LATIN SMALL LETTER I WITH DIAERESIS
  _   _ @
 (_)_(_)@
   | |  @
   | |  @
   |_|  @
        @@
240  LATIN SMALL LETTER ETH
   /\\/\\ @
   >  < @
  _\\/\\ |@
 / __\` |@
 \\____/ @
        @@
241  LATIN SMALL LETTER N WITH TILDE
   /\\/| @
  |/\\/  @
 | '_ \\ @
 | | | |@
 |_| |_|@
        @@
242  LATIN SMALL LETTER O WITH GRAVE
   __   @
   \\_\\  @
  / _ \\ @
 | (_) |@
  \\___/ @
        @@
243  LATIN SMALL LETTER O WITH ACUTE
    __  @
   /_/  @
  / _ \\ @
 | (_) |@
  \\___/ @
        @@
244  LATIN SMALL LETTER O WITH CIRCUMFLEX
   //\\  @
  |/_\\| @
  / _ \\ @
 | (_) |@
  \\___/ @
        @@
245  LATIN SMALL LETTER O WITH TILDE
   /\\/| @
  |/\\/  @
  / _ \\ @
 | (_) |@
  \\___/ @
        @@
246  LATIN SMALL LETTER O WITH DIAERESIS
  _   _ @
 (_)_(_)@
  / _ \\ @
 | (_) |@
  \\___/ @
        @@
247  DIVISION SIGN
        @
    _   @
  _(_)_ @
 |_____|@
   (_)  @
        @@
248  LATIN SMALL LETTER O WITH STROKE
         @
   ____  @
  / _//\\ @
 | (//) |@
  \\//__/ @
         @@
249  LATIN SMALL LETTER U WITH GRAVE
   __   @
  _\\_\\_ @
 | | | |@
 | |_| |@
  \\__,_|@
        @@
250  LATIN SMALL LETTER U WITH ACUTE
    __  @
  _/_/_ @
 | | | |@
 | |_| |@
  \\__,_|@
        @@
251  LATIN SMALL LETTER U WITH CIRCUMFLEX
   //\\  @
  |/ \\| @
 | | | |@
 | |_| |@
  \\__,_|@
        @@
252  LATIN SMALL LETTER U WITH DIAERESIS
  _   _ @
 (_) (_)@
 | | | |@
 | |_| |@
  \\__,_|@
        @@
253  LATIN SMALL LETTER Y WITH ACUTE
    __  @
  _/_/_ @
 | | | |@
 | |_| |@
  \\__, |@
  |___/ @@
254  LATIN SMALL LETTER THORN
  _     @
 | |__  @
 | '_ \\ @
 | |_) |@
 | .__/ @
 |_|    @@
255  LATIN SMALL LETTER Y WITH DIAERESIS
  _   _ @
 (_) (_)@
 | | | |@
 | |_| |@
  \\__, |@
  |___/ @@
0x0100  LATIN CAPITAL LETTER A WITH MACRON
   ____ @
  /___/ @
   /_\\  @
  / _ \\ @
 /_/ \\_\\@
        @@
0x0101  LATIN SMALL LETTER A WITH MACRON
    ___ @
   /_ _/@
  / _\` |@
 | (_| |@
  \\__,_|@
        @@
0x0102  LATIN CAPITAL LETTER A WITH BREVE
  _   _ @
  \\\\_// @
   /_\\  @
  / _ \\ @
 /_/ \\_\\@
        @@
0x0103  LATIN SMALL LETTER A WITH BREVE
   \\_/  @
   ___  @
  / _\` |@
 | (_| |@
  \\__,_|@
        @@
0x0104  LATIN CAPITAL LETTER A WITH OGONEK
        @
    _   @
   /_\\  @
  / _ \\ @
 /_/ \\_\\@
     (_(@@
0x0105  LATIN SMALL LETTER A WITH OGONEK
        @
   __ _ @
  / _\` |@
 | (_| |@
  \\__,_|@
     (_(@@
0x0106  LATIN CAPITAL LETTER C WITH ACUTE
     __ @
   _/_/ @
  / ___|@
 | |___ @
  \\____|@
        @@
0x0107  LATIN SMALL LETTER C WITH ACUTE
    __ @
   /__/@
  / __|@
 | (__ @
  \\___|@
       @@
0x0108  LATIN CAPITAL LETTER C WITH CIRCUMFLEX
     /\\ @
   _//\\\\@
  / ___|@
 | |___ @
  \\____|@
        @@
0x0109  LATIN SMALL LETTER C WITH CIRCUMFLEX
    /\\ @
   /_\\ @
  / __|@
 | (__ @
  \\___|@
       @@
0x010A  LATIN CAPITAL LETTER C WITH DOT ABOVE
    []  @
   ____ @
  / ___|@
 | |___ @
  \\____|@
        @@
0x010B  LATIN SMALL LETTER C WITH DOT ABOVE
   []  @
   ___ @
  / __|@
 | (__ @
  \\___|@
       @@
0x010C  LATIN CAPITAL LETTER C WITH CARON
   \\\\// @
   _\\/_ @
  / ___|@
 | |___ @
  \\____|@
        @@
0x010D  LATIN SMALL LETTER C WITH CARON
   \\\\//@
   _\\/ @
  / __|@
 | (__ @
  \\___|@
       @@
0x010E  LATIN CAPITAL LETTER D WITH CARON
   \\\\// @
  __\\/  @
 |  _ \\ @
 | |_| |@
 |____/ @
        @@
0x010F  LATIN SMALL LETTER D WITH CARON
  \\/  _ @
   __| |@
  / _\` |@
 | (_| |@
  \\__,_|@
        @@
0x0110  LATIN CAPITAL LETTER D WITH STROKE
   ____   @
  |_ __ \\ @
 /| |/ | |@
 /|_|/_| |@
  |_____/ @
          @@
0x0111  LATIN SMALL LETTER D WITH STROKE
    ---|@
   __| |@
  / _\` |@
 | (_| |@
  \\__,_|@
        @@
0x0112  LATIN CAPITAL LETTER E WITH MACRON
   ____ @
  /___/ @
 | ____|@
 |  _|_ @
 |_____|@
        @@
0x0113  LATIN SMALL LETTER E WITH MACRON
    ____@
   /_ _/@
  / _ \\ @
 |  __/ @
  \\___| @
        @@
0x0114  LATIN CAPITAL LETTER E WITH BREVE
  _   _ @
  \\\\_// @
 | ____|@
 |  _|_ @
 |_____|@
        @@
0x0115  LATIN SMALL LETTER E WITH BREVE
  \\\\  //@
    --  @
  / _ \\ @
 |  __/ @
  \\___| @
        @@
0x0116  LATIN CAPITAL LETTER E WITH DOT ABOVE
    []  @
  _____ @
 | ____|@
 |  _|_ @
 |_____|@
        @@
0x0117  LATIN SMALL LETTER E WITH DOT ABOVE
    [] @
    __ @
  / _ \\@
 |  __/@
  \\___|@
       @@
0x0118  LATIN CAPITAL LETTER E WITH OGONEK
        @
  _____ @
 | ____|@
 |  _|_ @
 |_____|@
    (__(@@
0x0119  LATIN SMALL LETTER E WITH OGONEK
       @
   ___ @
  / _ \\@
 |  __/@
  \\___|@
    (_(@@
0x011A  LATIN CAPITAL LETTER E WITH CARON
   \\\\// @
  __\\/_ @
 | ____|@
 |  _|_ @
 |_____|@
        @@
0x011B  LATIN SMALL LETTER E WITH CARON
   \\\\//@
    \\/ @
  / _ \\@
 |  __/@
  \\___|@
       @@
0x011C  LATIN CAPITAL LETTER G WITH CIRCUMFLEX
   _/\\_ @
  / ___|@
 | |  _ @
 | |_| |@
  \\____|@
        @@
0x011D  LATIN SMALL LETTER G WITH CIRCUMFLEX
     /\\ @
   _/_ \\@
  / _\` |@
 | (_| |@
  \\__, |@
  |___/ @@
0x011E  LATIN CAPITAL LETTER G WITH BREVE
   _\\/_ @
  / ___|@
 | |  _ @
 | |_| |@
  \\____|@
        @@
0x011F  LATIN SMALL LETTER G WITH BREVE
  \\___/ @
   __ _ @
  / _\` |@
 | (_| |@
  \\__, |@
  |___/ @@
0x0120  LATIN CAPITAL LETTER G WITH DOT ABOVE
   _[]_ @
  / ___|@
 | |  _ @
 | |_| |@
  \\____|@
        @@
0x0121  LATIN SMALL LETTER G WITH DOT ABOVE
   []   @
   __ _ @
  / _\` |@
 | (_| |@
  \\__, |@
  |___/ @@
0x0122  LATIN CAPITAL LETTER G WITH CEDILLA
   ____ @
  / ___|@
 | |  _ @
 | |_| |@
  \\____|@
   )__) @@
0x0123  LATIN SMALL LETTER G WITH CEDILLA
        @
   __ _ @
  / _\` |@
 | (_| |@
  \\__, |@
  |_))))@@
0x0124  LATIN CAPITAL LETTER H WITH CIRCUMFLEX
  _/ \\_ @
 | / \\ |@
 | |_| |@
 |  _  |@
 |_| |_|@
        @@
0x0125  LATIN SMALL LETTER H WITH CIRCUMFLEX
  _  /\\ @
 | |//\\ @
 | '_ \\ @
 | | | |@
 |_| |_|@
        @@
0x0126  LATIN CAPITAL LETTER H WITH STROKE
  _   _ @
 | |=| |@
 | |_| |@
 |  _  |@
 |_| |_|@
        @@
0x0127  LATIN SMALL LETTER H WITH STROKE
  _     @
 |=|__  @
 | '_ \\ @
 | | | |@
 |_| |_|@
        @@
0x0128  LATIN CAPITAL LETTER I WITH TILDE
  /\\//@
 |_ _|@
  | | @
  | | @
 |___|@
      @@
0x0129  LATIN SMALL LETTER I WITH TILDE
    @
 /\\/@
 | |@
 | |@
 |_|@
    @@
0x012A  LATIN CAPITAL LETTER I WITH MACRON
 /___/@
 |_ _|@
  | | @
  | | @
 |___|@
      @@
0x012B  LATIN SMALL LETTER I WITH MACRON
  ____@
 /___/@
  | | @
  | | @
  |_| @
      @@
0x012C  LATIN CAPITAL LETTER I WITH BREVE
  \\__/@
 |_ _|@
  | | @
  | | @
 |___|@
      @@
0x012D  LATIN SMALL LETTER I WITH BREVE
    @
 \\_/@
 | |@
 | |@
 |_|@
    @@
0x012E  LATIN CAPITAL LETTER I WITH OGONEK
  ___ @
 |_ _|@
  | | @
  | | @
 |___|@
  (__(@@
0x012F  LATIN SMALL LETTER I WITH OGONEK
  _  @
 (_) @
 | | @
 | | @
 |_|_@
  (_(@@
0x0130  LATIN CAPITAL LETTER I WITH DOT ABOVE
  _[] @
 |_ _|@
  | | @
  | | @
 |___|@
      @@
0x0131  LATIN SMALL LETTER DOTLESS I
    @
  _ @
 | |@
 | |@
 |_|@
    @@
0x0132  LATIN CAPITAL LIGATURE IJ
  ___  _ @
 |_ _|| |@
  | | | |@
  | |_| |@
 |__|__/ @
         @@
0x0133  LATIN SMALL LIGATURE IJ
  _   _ @
 (_) (_)@
 | | | |@
 | | | |@
 |_|_/ |@
   |__/ @@
0x0134  LATIN CAPITAL LETTER J WITH CIRCUMFLEX
      /\\ @
     /_\\|@
  _  | | @
 | |_| | @
  \\___/  @
         @@
0x0135  LATIN SMALL LETTER J WITH CIRCUMFLEX
    /\\@
   /_\\@
   | |@
   | |@
  _/ |@
 |__/ @@
0x0136  LATIN CAPITAL LETTER K WITH CEDILLA
  _  _  @
 | |/ / @
 | ' /  @
 | . \\  @
 |_|\\_\\ @
    )__)@@
0x0137  LATIN SMALL LETTER K WITH CEDILLA
  _    @
 | | __@
 | |/ /@
 |   < @
 |_|\\_\\@
    )_)@@
0x0138  LATIN SMALL LETTER KRA
       @
  _ __ @
 | |/ \\@
 |   < @
 |_|\\_\\@
       @@
0x0139  LATIN CAPITAL LETTER L WITH ACUTE
  _   //@
 | | // @
 | |    @
 | |___ @
 |_____|@
        @@
0x013A  LATIN SMALL LETTER L WITH ACUTE
  //@
 | |@
 | |@
 | |@
 |_|@
    @@
0x013B  LATIN CAPITAL LETTER L WITH CEDILLA
  _     @
 | |    @
 | |    @
 | |___ @
 |_____|@
    )__)@@
0x013C  LATIN SMALL LETTER L WITH CEDILLA
  _   @
 | |  @
 | |  @
 | |  @
 |_|  @
   )_)@@
0x013D  LATIN CAPITAL LETTER L WITH CARON
  _ \\\\//@
 | | \\/ @
 | |    @
 | |___ @
 |_____|@
        @@
0x013E  LATIN SMALL LETTER L WITH CARON
  _ \\\\//@
 | | \\/ @
 | |    @
 | |    @
 |_|    @
        @@
0x013F  LATIN CAPITAL LETTER L WITH MIDDLE DOT
  _     @
 | |    @
 | | [] @
 | |___ @
 |_____|@
        @@
0x0140  LATIN SMALL LETTER L WITH MIDDLE DOT
  _    @
 | |   @
 | | []@
 | |   @
 |_|   @
       @@
0x0141  LATIN CAPITAL LETTER L WITH STROKE
  __    @
 | //   @
 |//|   @
 // |__ @
 |_____|@
        @@
0x0142  LATIN SMALL LETTER L WITH STROKE
  _ @
 | |@
 |//@
 //|@
 |_|@
    @@
0x0143  LATIN CAPITAL LETTER N WITH ACUTE
  _/ /_ @
 | \\ | |@
 |  \\| |@
 | |\\  |@
 |_| \\_|@
        @@
0x0144  LATIN SMALL LETTER N WITH ACUTE
     _  @
  _ /_/ @
 | '_ \\ @
 | | | |@
 |_| |_|@
        @@
0x0145  LATIN CAPITAL LETTER N WITH CEDILLA
  _   _ @
 | \\ | |@
 |  \\| |@
 | |\\  |@
 |_| \\_|@
 )_)    @@
0x0146  LATIN SMALL LETTER N WITH CEDILLA
        @
  _ __  @
 | '_ \\ @
 | | | |@
 |_| |_|@
 )_)    @@
0x0147  LATIN CAPITAL LETTER N WITH CARON
  _\\/ _ @
 | \\ | |@
 |  \\| |@
 | |\\  |@
 |_| \\_|@
        @@
0x0148  LATIN SMALL LETTER N WITH CARON
  \\\\//  @
  _\\/_  @
 | '_ \\ @
 | | | |@
 |_| |_|@
        @@
0x0149  LATIN SMALL LETTER N PRECEDED BY APOSTROPHE
          @
  _  __   @
 ( )| '_\\ @
 |/| | | |@
   |_| |_|@
          @@
0x014A  LATIN CAPITAL LETTER ENG
  _   _ @
 | \\ | |@
 |  \\| |@
 | |\\  |@
 |_| \\ |@
     )_)@@
0x014B  LATIN SMALL LETTER ENG
  _ __  @
 | '_ \\ @
 | | | |@
 |_| | |@
     | |@
    |__ @@
0x014C  LATIN CAPITAL LETTER O WITH MACRON
   ____ @
  /_ _/ @
  / _ \\ @
 | (_) |@
  \\___/ @
        @@
0x014D  LATIN SMALL LETTER O WITH MACRON
   ____ @
  /_ _/ @
  / _ \\ @
 | (_) |@
  \\___/ @
        @@
0x014E  LATIN CAPITAL LETTER O WITH BREVE
  \\   / @
   _-_  @
  / _ \\ @
 | |_| |@
  \\___/ @
        @@
0x014F  LATIN SMALL LETTER O WITH BREVE
  \\   / @
   _-_  @
  / _ \\ @
 | |_| |@
  \\___/ @
        @@
0x0150  LATIN CAPITAL LETTER O WITH DOUBLE ACUTE
    ___ @
   /_/_/@
  / _ \\ @
 | |_| |@
  \\___/ @
        @@
0x0151  LATIN SMALL LETTER O WITH DOUBLE ACUTE
    ___ @
   /_/_/@
  / _ \\ @
 | |_| |@
  \\___/ @
        @@
0x0152  LATIN CAPITAL LIGATURE OE
   ___  ___ @
  / _ \\| __|@
 | | | |  | @
 | |_| | |__@
  \\___/|____@
            @@
0x0153  LATIN SMALL LIGATURE OE
             @
   ___   ___ @
  / _ \\ / _ \\@
 | (_) |  __/@
  \\___/ \\___|@
             @@
0x0154  LATIN CAPITAL LETTER R WITH ACUTE
  _/_/  @
 |  _ \\ @
 | |_) |@
 |  _ < @
 |_| \\_\\@
        @@
0x0155  LATIN SMALL LETTER R WITH ACUTE
     __@
  _ /_/@
 | '__|@
 | |   @
 |_|   @
       @@
0x0156  LATIN CAPITAL LETTER R WITH CEDILLA
  ____  @
 |  _ \\ @
 | |_) |@
 |  _ < @
 |_| \\_\\@
 )_)    @@
0x0157  LATIN SMALL LETTER R WITH CEDILLA
       @
  _ __ @
 | '__|@
 | |   @
 |_|   @
   )_) @@
0x0158  LATIN CAPITAL LETTER R WITH CARON
  _\\_/  @
 |  _ \\ @
 | |_) |@
 |  _ < @
 |_| \\_\\@
        @@
0x0159  LATIN SMALL LETTER R WITH CARON
  \\\\// @
  _\\/_ @
 | '__|@
 | |   @
 |_|   @
       @@
0x015A  LATIN CAPITAL LETTER S WITH ACUTE
  _/_/  @
 / ___| @
 \\___ \\ @
  ___) |@
 |____/ @
        @@
0x015B  LATIN SMALL LETTER S WITH ACUTE
    __@
  _/_/@
 / __|@
 \\__ \\@
 |___/@
      @@
0x015C  LATIN CAPITAL LETTER S WITH CIRCUMFLEX
  _/\\_  @
 / ___| @
 \\___ \\ @
  ___) |@
 |____/ @
        @@
0x015D  LATIN SMALL LETTER S WITH CIRCUMFLEX
      @
  /_\\_@
 / __|@
 \\__ \\@
 |___/@
      @@
0x015E  LATIN CAPITAL LETTER S WITH CEDILLA
  ____  @
 / ___| @
 \\___ \\ @
  ___) |@
 |____/ @
    )__)@@
0x015F  LATIN SMALL LETTER S WITH CEDILLA
      @
  ___ @
 / __|@
 \\__ \\@
 |___/@
   )_)@@
0x0160  LATIN CAPITAL LETTER S WITH CARON
  _\\_/  @
 / ___| @
 \\___ \\ @
  ___) |@
 |____/ @
        @@
0x0161  LATIN SMALL LETTER S WITH CARON
  \\\\//@
  _\\/ @
 / __|@
 \\__ \\@
 |___/@
      @@
0x0162  LATIN CAPITAL LETTER T WITH CEDILLA
  _____ @
 |_   _|@
   | |  @
   | |  @
   |_|  @
    )__)@@
0x0163  LATIN SMALL LETTER T WITH CEDILLA
  _   @
 | |_ @
 | __|@
 | |_ @
  \\__|@
   )_)@@
0x0164  LATIN CAPITAL LETTER T WITH CARON
  _____ @
 |_   _|@
   | |  @
   | |  @
   |_|  @
        @@
0x0165  LATIN SMALL LETTER T WITH CARON
  \\/  @
 | |_ @
 | __|@
 | |_ @
  \\__|@
      @@
0x0166  LATIN CAPITAL LETTER T WITH STROKE
  _____ @
 |_   _|@
   | |  @
  -|-|- @
   |_|  @
        @@
0x0167  LATIN SMALL LETTER T WITH STROKE
  _   @
 | |_ @
 | __|@
 |-|_ @
  \\__|@
      @@
0x0168  LATIN CAPITAL LETTER U WITH TILDE
        @
  _/\\/_ @
 | | | |@
 | |_| |@
  \\___/ @
        @@
0x0169  LATIN SMALL LETTER U WITH TILDE
        @
  _/\\/_ @
 | | | |@
 | |_| |@
  \\__,_|@
        @@
0x016A  LATIN CAPITAL LETTER U WITH MACRON
   ____ @
  /__ _/@
 | | | |@
 | |_| |@
  \\___/ @
        @@
0x016B  LATIN SMALL LETTER U WITH MACRON
   ____ @
  / _  /@
 | | | |@
 | |_| |@
  \\__,_|@
        @@
0x016C  LATIN CAPITAL LETTER U WITH BREVE
        @
   \\_/_ @
 | | | |@
 | |_| |@
  \\____|@
        @@
0x016D  LATIN SMALL LETTER U WITH BREVE
        @
   \\_/_ @
 | | | |@
 | |_| |@
  \\__,_|@
        @@
0x016E  LATIN CAPITAL LETTER U WITH RING ABOVE
    O   @
  __  _ @
 | | | |@
 | |_| |@
  \\___/ @
        @@
0x016F  LATIN SMALL LETTER U WITH RING ABOVE
    O   @
  __ __ @
 | | | |@
 | |_| |@
  \\__,_|@
        @@
0x0170  LATIN CAPITAL LETTER U WITH DOUBLE ACUTE
   -- --@
  /_//_/@
 | | | |@
 | |_| |@
  \\___/ @
        @@
0x0171  LATIN SMALL LETTER U WITH DOUBLE ACUTE
    ____@
  _/_/_/@
 | | | |@
 | |_| |@
  \\__,_|@
        @@
0x0172  LATIN CAPITAL LETTER U WITH OGONEK
  _   _ @
 | | | |@
 | | | |@
 | |_| |@
  \\___/ @
    (__(@@
0x0173  LATIN SMALL LETTER U WITH OGONEK
        @
  _   _ @
 | | | |@
 | |_| |@
  \\__,_|@
     (_(@@
0x0174  LATIN CAPITAL LETTER W WITH CIRCUMFLEX
 __    /\\  __@
 \\ \\  //\\\\/ /@
  \\ \\ /\\ / / @
   \\ V  V /  @
    \\_/\\_/   @
             @@
0x0175  LATIN SMALL LETTER W WITH CIRCUMFLEX
      /\\   @
 __  //\\\\__@
 \\ \\ /\\ / /@
  \\ V  V / @
   \\_/\\_/  @
           @@
0x0176  LATIN CAPITAL LETTER Y WITH CIRCUMFLEX
    /\\  @
 __//\\\\ @
 \\ \\ / /@
  \\ V / @
   |_|  @
        @@
0x0177  LATIN SMALL LETTER Y WITH CIRCUMFLEX
    /\\  @
   //\\\\ @
 | | | |@
 | |_| |@
  \\__, |@
  |___/ @@
0x0178  LATIN CAPITAL LETTER Y WITH DIAERESIS
  []  []@
 __    _@
 \\ \\ / /@
  \\ V / @
   |_|  @
        @@
0x0179  LATIN CAPITAL LETTER Z WITH ACUTE
  __/_/@
 |__  /@
   / / @
  / /_ @
 /____|@
       @@
0x017A  LATIN SMALL LETTER Z WITH ACUTE
    _ @
  _/_/@
 |_  /@
  / / @
 /___|@
      @@
0x017B  LATIN CAPITAL LETTER Z WITH DOT ABOVE
  __[]_@
 |__  /@
   / / @
  / /_ @
 /____|@
       @@
0x017C  LATIN SMALL LETTER Z WITH DOT ABOVE
   [] @
  ____@
 |_  /@
  / / @
 /___|@
      @@
0x017D  LATIN CAPITAL LETTER Z WITH CARON
  _\\_/_@
 |__  /@
   / / @
  / /_ @
 /____|@
       @@
0x017E  LATIN SMALL LETTER Z WITH CARON
  \\\\//@
  _\\/_@
 |_  /@
  / / @
 /___|@
      @@
0x017F  LATIN SMALL LETTER LONG S
     __ @
    / _|@
 |-| |  @
 |-| |  @
   |_|  @
        @@
0x02C7  CARON
 \\\\//@
  \\/ @
    $@
    $@
    $@
    $@@
0x02D8  BREVE
 \\\\_//@
  \\_/ @
     $@
     $@
     $@
     $@@
0x02D9  DOT ABOVE
 []@
  $@
  $@
  $@
  $@
  $@@
0x02DB  OGONEK
    $@
    $@
    $@
    $@
    $@
 )_) @@
0x02DD  DOUBLE ACUTE ACCENT
  _ _ @
 /_/_/@
     $@
     $@
     $@
     $@@
0xCA0  KANNADA LETTER TTHA
   _____)@
  /_ ___/@
  / _ \\  @
 | (_) | @
 $\\___/$ @
         @@
         `;X_.parseFont("Standard",wL);function SL(){let e="404 Not Found";return X_.text(e,{font:"Standard"},function(t,n){e=n}),le("div",{className:"bg-black h-screen grid m-auto place-content-center py-1/2 text-green-700 w-full",children:le("pre",{className:" py-1/2 text-green-700 w-11/12",children:e})})}function AL(){return le("div",{className:"absolute  bottom-0 flex justify-center p-3 text-base w-full ",children:"Designed and Built by Aaron & Patrick 2022"})}function CL(){function e(){document.documentElement.classList.contains("dark")?document.documentElement.classList.remove("dark"):document.documentElement.classList.add("dark")}return In("div",{className:"flex justify-between sticky w-full items-center p-2",children:[le("div",{className:"w-8 h-8",children:le(Gn,{className:"",to:"/",children:le("img",{className:"w-full h-full",src:"https://i.pinimg.com/originals/93/d3/e3/93d3e31639a4d07613de9dccdc8bd5e8.png"})})}),le("nav",{children:In("ul",{className:"m-0 p-0 list-none flex gap-2 items-center",children:[le("li",{children:le(Gn,{className:"nav-link",to:"/",children:"Home"})}),le("li",{children:le(Gn,{className:"nav-link",to:"/About",children:"About"})}),le("li",{children:le(Gn,{className:"nav-link",to:"/Projects",children:"Projects"})}),le("li",{children:le(Gn,{className:"nav-link",to:"/CV",children:"CV"})}),le("li",{children:le(Gn,{className:"nav-link",to:"/Contacts",children:"Contact Me"})}),le("li",{children:le(Gn,{className:"nav-link",to:"/shell",children:"Terminal"})}),le("li",{children:le("button",{className:"nav-link",onClick:e,children:"Dark Mode"})})]})})]})}function IL(){return Q.useEffect(()=>{localStorage.getItem("theme")==="dark"||!localStorage.getItem("theme")&&window.matchMedia("(prefers-color-scheme: dark)").matches?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")}),In("div",{children:[le(CL,{}),le(W1,{}),le(AL,{})]})}const RL=q1([{path:"/",element:le(IL,{}),errorElement:le(SL,{}),children:[{path:"/",element:le(t0,{})},{path:"/about",element:le(Qp,{})},{path:"/projects",element:le(r0,{})},{path:"/contacts",element:le(n0,{})},{path:"/cv",element:le(i0,{})}]},{path:"/shell",element:le(LL,{})}]);Mu.createRoot(document.getElementById("root")).render(le(Cn.StrictMode,{children:le(j1,{router:RL})}));
