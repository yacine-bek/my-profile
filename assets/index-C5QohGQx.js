(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))l(u);new MutationObserver(u=>{for(const d of u)if(d.type==="childList")for(const f of d.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&l(f)}).observe(document,{childList:!0,subtree:!0});function o(u){const d={};return u.integrity&&(d.integrity=u.integrity),u.referrerPolicy&&(d.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?d.credentials="include":u.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function l(u){if(u.ep)return;u.ep=!0;const d=o(u);fetch(u.href,d)}})();function qv(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var wc={exports:{}},Br={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var C0;function t5(){if(C0)return Br;C0=1;var n=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function o(l,u,d){var f=null;if(d!==void 0&&(f=""+d),u.key!==void 0&&(f=""+u.key),"key"in u){d={};for(var h in u)h!=="key"&&(d[h]=u[h])}else d=u;return u=d.ref,{$$typeof:n,type:l,key:f,ref:u!==void 0?u:null,props:d}}return Br.Fragment=i,Br.jsx=o,Br.jsxs=o,Br}var k0;function e5(){return k0||(k0=1,wc.exports=t5()),wc.exports}var U=e5(),Mc={exports:{}},ut={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var R0;function n5(){if(R0)return ut;R0=1;var n=Symbol.for("react.transitional.element"),i=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),l=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),d=Symbol.for("react.consumer"),f=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),y=Symbol.iterator;function x(T){return T===null||typeof T!="object"?null:(T=y&&T[y]||T["@@iterator"],typeof T=="function"?T:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},R=Object.assign,E={};function j(T,B,F){this.props=T,this.context=B,this.refs=E,this.updater=F||M}j.prototype.isReactComponent={},j.prototype.setState=function(T,B){if(typeof T!="object"&&typeof T!="function"&&T!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,T,B,"setState")},j.prototype.forceUpdate=function(T){this.updater.enqueueForceUpdate(this,T,"forceUpdate")};function V(){}V.prototype=j.prototype;function q(T,B,F){this.props=T,this.context=B,this.refs=E,this.updater=F||M}var L=q.prototype=new V;L.constructor=q,R(L,j.prototype),L.isPureReactComponent=!0;var Q=Array.isArray,H={H:null,A:null,T:null,S:null,V:null},I=Object.prototype.hasOwnProperty;function lt(T,B,F,X,nt,yt){return F=yt.ref,{$$typeof:n,type:T,key:B,ref:F!==void 0?F:null,props:yt}}function K(T,B){return lt(T.type,B,void 0,void 0,void 0,T.props)}function ct(T){return typeof T=="object"&&T!==null&&T.$$typeof===n}function Xt(T){var B={"=":"=0",":":"=2"};return"$"+T.replace(/[=:]/g,function(F){return B[F]})}var re=/\/+/g;function Ft(T,B){return typeof T=="object"&&T!==null&&T.key!=null?Xt(""+T.key):B.toString(36)}function dn(){}function We(T){switch(T.status){case"fulfilled":return T.value;case"rejected":throw T.reason;default:switch(typeof T.status=="string"?T.then(dn,dn):(T.status="pending",T.then(function(B){T.status==="pending"&&(T.status="fulfilled",T.value=B)},function(B){T.status==="pending"&&(T.status="rejected",T.reason=B)})),T.status){case"fulfilled":return T.value;case"rejected":throw T.reason}}throw T}function Kt(T,B,F,X,nt){var yt=typeof T;(yt==="undefined"||yt==="boolean")&&(T=null);var st=!1;if(T===null)st=!0;else switch(yt){case"bigint":case"string":case"number":st=!0;break;case"object":switch(T.$$typeof){case n:case i:st=!0;break;case v:return st=T._init,Kt(st(T._payload),B,F,X,nt)}}if(st)return nt=nt(T),st=X===""?"."+Ft(T,0):X,Q(nt)?(F="",st!=null&&(F=st.replace(re,"$&/")+"/"),Kt(nt,B,F,"",function(jn){return jn})):nt!=null&&(ct(nt)&&(nt=K(nt,F+(nt.key==null||T&&T.key===nt.key?"":(""+nt.key).replace(re,"$&/")+"/")+st)),B.push(nt)),1;st=0;var xe=X===""?".":X+":";if(Q(T))for(var kt=0;kt<T.length;kt++)X=T[kt],yt=xe+Ft(X,kt),st+=Kt(X,B,F,yt,nt);else if(kt=x(T),typeof kt=="function")for(T=kt.call(T),kt=0;!(X=T.next()).done;)X=X.value,yt=xe+Ft(X,kt++),st+=Kt(X,B,F,yt,nt);else if(yt==="object"){if(typeof T.then=="function")return Kt(We(T),B,F,X,nt);throw B=String(T),Error("Objects are not valid as a React child (found: "+(B==="[object Object]"?"object with keys {"+Object.keys(T).join(", ")+"}":B)+"). If you meant to render a collection of children, use an array instead.")}return st}function z(T,B,F){if(T==null)return T;var X=[],nt=0;return Kt(T,X,"","",function(yt){return B.call(F,yt,nt++)}),X}function G(T){if(T._status===-1){var B=T._result;B=B(),B.then(function(F){(T._status===0||T._status===-1)&&(T._status=1,T._result=F)},function(F){(T._status===0||T._status===-1)&&(T._status=2,T._result=F)}),T._status===-1&&(T._status=0,T._result=B)}if(T._status===1)return T._result.default;throw T._result}var $=typeof reportError=="function"?reportError:function(T){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var B=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof T=="object"&&T!==null&&typeof T.message=="string"?String(T.message):String(T),error:T});if(!window.dispatchEvent(B))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",T);return}console.error(T)};function gt(){}return ut.Children={map:z,forEach:function(T,B,F){z(T,function(){B.apply(this,arguments)},F)},count:function(T){var B=0;return z(T,function(){B++}),B},toArray:function(T){return z(T,function(B){return B})||[]},only:function(T){if(!ct(T))throw Error("React.Children.only expected to receive a single React element child.");return T}},ut.Component=j,ut.Fragment=o,ut.Profiler=u,ut.PureComponent=q,ut.StrictMode=l,ut.Suspense=m,ut.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=H,ut.__COMPILER_RUNTIME={__proto__:null,c:function(T){return H.H.useMemoCache(T)}},ut.cache=function(T){return function(){return T.apply(null,arguments)}},ut.cloneElement=function(T,B,F){if(T==null)throw Error("The argument must be a React element, but you passed "+T+".");var X=R({},T.props),nt=T.key,yt=void 0;if(B!=null)for(st in B.ref!==void 0&&(yt=void 0),B.key!==void 0&&(nt=""+B.key),B)!I.call(B,st)||st==="key"||st==="__self"||st==="__source"||st==="ref"&&B.ref===void 0||(X[st]=B[st]);var st=arguments.length-2;if(st===1)X.children=F;else if(1<st){for(var xe=Array(st),kt=0;kt<st;kt++)xe[kt]=arguments[kt+2];X.children=xe}return lt(T.type,nt,void 0,void 0,yt,X)},ut.createContext=function(T){return T={$$typeof:f,_currentValue:T,_currentValue2:T,_threadCount:0,Provider:null,Consumer:null},T.Provider=T,T.Consumer={$$typeof:d,_context:T},T},ut.createElement=function(T,B,F){var X,nt={},yt=null;if(B!=null)for(X in B.key!==void 0&&(yt=""+B.key),B)I.call(B,X)&&X!=="key"&&X!=="__self"&&X!=="__source"&&(nt[X]=B[X]);var st=arguments.length-2;if(st===1)nt.children=F;else if(1<st){for(var xe=Array(st),kt=0;kt<st;kt++)xe[kt]=arguments[kt+2];nt.children=xe}if(T&&T.defaultProps)for(X in st=T.defaultProps,st)nt[X]===void 0&&(nt[X]=st[X]);return lt(T,yt,void 0,void 0,null,nt)},ut.createRef=function(){return{current:null}},ut.forwardRef=function(T){return{$$typeof:h,render:T}},ut.isValidElement=ct,ut.lazy=function(T){return{$$typeof:v,_payload:{_status:-1,_result:T},_init:G}},ut.memo=function(T,B){return{$$typeof:p,type:T,compare:B===void 0?null:B}},ut.startTransition=function(T){var B=H.T,F={};H.T=F;try{var X=T(),nt=H.S;nt!==null&&nt(F,X),typeof X=="object"&&X!==null&&typeof X.then=="function"&&X.then(gt,$)}catch(yt){$(yt)}finally{H.T=B}},ut.unstable_useCacheRefresh=function(){return H.H.useCacheRefresh()},ut.use=function(T){return H.H.use(T)},ut.useActionState=function(T,B,F){return H.H.useActionState(T,B,F)},ut.useCallback=function(T,B){return H.H.useCallback(T,B)},ut.useContext=function(T){return H.H.useContext(T)},ut.useDebugValue=function(){},ut.useDeferredValue=function(T,B){return H.H.useDeferredValue(T,B)},ut.useEffect=function(T,B,F){var X=H.H;if(typeof F=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return X.useEffect(T,B)},ut.useId=function(){return H.H.useId()},ut.useImperativeHandle=function(T,B,F){return H.H.useImperativeHandle(T,B,F)},ut.useInsertionEffect=function(T,B){return H.H.useInsertionEffect(T,B)},ut.useLayoutEffect=function(T,B){return H.H.useLayoutEffect(T,B)},ut.useMemo=function(T,B){return H.H.useMemo(T,B)},ut.useOptimistic=function(T,B){return H.H.useOptimistic(T,B)},ut.useReducer=function(T,B,F){return H.H.useReducer(T,B,F)},ut.useRef=function(T){return H.H.useRef(T)},ut.useState=function(T){return H.H.useState(T)},ut.useSyncExternalStore=function(T,B,F){return H.H.useSyncExternalStore(T,B,F)},ut.useTransition=function(){return H.H.useTransition()},ut.version="19.1.0",ut}var _0;function Ff(){return _0||(_0=1,Mc.exports=n5()),Mc.exports}var et=Ff();const de=qv(et);var Dc={exports:{}},Hr={},Cc={exports:{}},kc={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var z0;function a5(){return z0||(z0=1,function(n){function i(z,G){var $=z.length;z.push(G);t:for(;0<$;){var gt=$-1>>>1,T=z[gt];if(0<u(T,G))z[gt]=G,z[$]=T,$=gt;else break t}}function o(z){return z.length===0?null:z[0]}function l(z){if(z.length===0)return null;var G=z[0],$=z.pop();if($!==G){z[0]=$;t:for(var gt=0,T=z.length,B=T>>>1;gt<B;){var F=2*(gt+1)-1,X=z[F],nt=F+1,yt=z[nt];if(0>u(X,$))nt<T&&0>u(yt,X)?(z[gt]=yt,z[nt]=$,gt=nt):(z[gt]=X,z[F]=$,gt=F);else if(nt<T&&0>u(yt,$))z[gt]=yt,z[nt]=$,gt=nt;else break t}}return G}function u(z,G){var $=z.sortIndex-G.sortIndex;return $!==0?$:z.id-G.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var d=performance;n.unstable_now=function(){return d.now()}}else{var f=Date,h=f.now();n.unstable_now=function(){return f.now()-h}}var m=[],p=[],v=1,y=null,x=3,M=!1,R=!1,E=!1,j=!1,V=typeof setTimeout=="function"?setTimeout:null,q=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function Q(z){for(var G=o(p);G!==null;){if(G.callback===null)l(p);else if(G.startTime<=z)l(p),G.sortIndex=G.expirationTime,i(m,G);else break;G=o(p)}}function H(z){if(E=!1,Q(z),!R)if(o(m)!==null)R=!0,I||(I=!0,Ft());else{var G=o(p);G!==null&&Kt(H,G.startTime-z)}}var I=!1,lt=-1,K=5,ct=-1;function Xt(){return j?!0:!(n.unstable_now()-ct<K)}function re(){if(j=!1,I){var z=n.unstable_now();ct=z;var G=!0;try{t:{R=!1,E&&(E=!1,q(lt),lt=-1),M=!0;var $=x;try{e:{for(Q(z),y=o(m);y!==null&&!(y.expirationTime>z&&Xt());){var gt=y.callback;if(typeof gt=="function"){y.callback=null,x=y.priorityLevel;var T=gt(y.expirationTime<=z);if(z=n.unstable_now(),typeof T=="function"){y.callback=T,Q(z),G=!0;break e}y===o(m)&&l(m),Q(z)}else l(m);y=o(m)}if(y!==null)G=!0;else{var B=o(p);B!==null&&Kt(H,B.startTime-z),G=!1}}break t}finally{y=null,x=$,M=!1}G=void 0}}finally{G?Ft():I=!1}}}var Ft;if(typeof L=="function")Ft=function(){L(re)};else if(typeof MessageChannel<"u"){var dn=new MessageChannel,We=dn.port2;dn.port1.onmessage=re,Ft=function(){We.postMessage(null)}}else Ft=function(){V(re,0)};function Kt(z,G){lt=V(function(){z(n.unstable_now())},G)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(z){z.callback=null},n.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):K=0<z?Math.floor(1e3/z):5},n.unstable_getCurrentPriorityLevel=function(){return x},n.unstable_next=function(z){switch(x){case 1:case 2:case 3:var G=3;break;default:G=x}var $=x;x=G;try{return z()}finally{x=$}},n.unstable_requestPaint=function(){j=!0},n.unstable_runWithPriority=function(z,G){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var $=x;x=z;try{return G()}finally{x=$}},n.unstable_scheduleCallback=function(z,G,$){var gt=n.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?gt+$:gt):$=gt,z){case 1:var T=-1;break;case 2:T=250;break;case 5:T=1073741823;break;case 4:T=1e4;break;default:T=5e3}return T=$+T,z={id:v++,callback:G,priorityLevel:z,startTime:$,expirationTime:T,sortIndex:-1},$>gt?(z.sortIndex=$,i(p,z),o(m)===null&&z===o(p)&&(E?(q(lt),lt=-1):E=!0,Kt(H,$-gt))):(z.sortIndex=T,i(m,z),R||M||(R=!0,I||(I=!0,Ft()))),z},n.unstable_shouldYield=Xt,n.unstable_wrapCallback=function(z){var G=x;return function(){var $=x;x=G;try{return z.apply(this,arguments)}finally{x=$}}}}(kc)),kc}var j0;function i5(){return j0||(j0=1,Cc.exports=a5()),Cc.exports}var Rc={exports:{}},se={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var N0;function r5(){if(N0)return se;N0=1;var n=Ff();function i(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)p+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(){}var l={d:{f:o,r:function(){throw Error(i(522))},D:o,C:o,L:o,m:o,X:o,S:o,M:o},p:0,findDOMNode:null},u=Symbol.for("react.portal");function d(m,p,v){var y=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:u,key:y==null?null:""+y,children:m,containerInfo:p,implementation:v}}var f=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return se.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=l,se.createPortal=function(m,p){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(i(299));return d(m,p,null,v)},se.flushSync=function(m){var p=f.T,v=l.p;try{if(f.T=null,l.p=2,m)return m()}finally{f.T=p,l.p=v,l.d.f()}},se.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,l.d.C(m,p))},se.prefetchDNS=function(m){typeof m=="string"&&l.d.D(m)},se.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var v=p.as,y=h(v,p.crossOrigin),x=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;v==="style"?l.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:y,integrity:x,fetchPriority:M}):v==="script"&&l.d.X(m,{crossOrigin:y,integrity:x,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},se.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var v=h(p.as,p.crossOrigin);l.d.M(m,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&l.d.M(m)},se.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var v=p.as,y=h(v,p.crossOrigin);l.d.L(m,v,{crossOrigin:y,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},se.preloadModule=function(m,p){if(typeof m=="string")if(p){var v=h(p.as,p.crossOrigin);l.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else l.d.m(m)},se.requestFormReset=function(m){l.d.r(m)},se.unstable_batchedUpdates=function(m,p){return m(p)},se.useFormState=function(m,p,v){return f.H.useFormState(m,p,v)},se.useFormStatus=function(){return f.H.useHostTransitionStatus()},se.version="19.1.0",se}var P0;function o5(){if(P0)return Rc.exports;P0=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(i){console.error(i)}}return n(),Rc.exports=r5(),Rc.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var V0;function l5(){if(V0)return Hr;V0=1;var n=i5(),i=Ff(),o=o5();function l(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)e+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function d(t){var e=t,a=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(a=e.return),t=e.return;while(t)}return e.tag===3?a:null}function f(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function h(t){if(d(t)!==t)throw Error(l(188))}function m(t){var e=t.alternate;if(!e){if(e=d(t),e===null)throw Error(l(188));return e!==t?null:t}for(var a=t,r=e;;){var s=a.return;if(s===null)break;var c=s.alternate;if(c===null){if(r=s.return,r!==null){a=r;continue}break}if(s.child===c.child){for(c=s.child;c;){if(c===a)return h(s),t;if(c===r)return h(s),e;c=c.sibling}throw Error(l(188))}if(a.return!==r.return)a=s,r=c;else{for(var g=!1,b=s.child;b;){if(b===a){g=!0,a=s,r=c;break}if(b===r){g=!0,r=s,a=c;break}b=b.sibling}if(!g){for(b=c.child;b;){if(b===a){g=!0,a=c,r=s;break}if(b===r){g=!0,r=c,a=s;break}b=b.sibling}if(!g)throw Error(l(189))}}if(a.alternate!==r)throw Error(l(190))}if(a.tag!==3)throw Error(l(188));return a.stateNode.current===a?t:e}function p(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=p(t),e!==null)return e;t=t.sibling}return null}var v=Object.assign,y=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),M=Symbol.for("react.portal"),R=Symbol.for("react.fragment"),E=Symbol.for("react.strict_mode"),j=Symbol.for("react.profiler"),V=Symbol.for("react.provider"),q=Symbol.for("react.consumer"),L=Symbol.for("react.context"),Q=Symbol.for("react.forward_ref"),H=Symbol.for("react.suspense"),I=Symbol.for("react.suspense_list"),lt=Symbol.for("react.memo"),K=Symbol.for("react.lazy"),ct=Symbol.for("react.activity"),Xt=Symbol.for("react.memo_cache_sentinel"),re=Symbol.iterator;function Ft(t){return t===null||typeof t!="object"?null:(t=re&&t[re]||t["@@iterator"],typeof t=="function"?t:null)}var dn=Symbol.for("react.client.reference");function We(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===dn?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case R:return"Fragment";case j:return"Profiler";case E:return"StrictMode";case H:return"Suspense";case I:return"SuspenseList";case ct:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case M:return"Portal";case L:return(t.displayName||"Context")+".Provider";case q:return(t._context.displayName||"Context")+".Consumer";case Q:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case lt:return e=t.displayName||null,e!==null?e:We(t.type)||"Memo";case K:e=t._payload,t=t._init;try{return We(t(e))}catch{}}return null}var Kt=Array.isArray,z=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G=o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,$={pending:!1,data:null,method:null,action:null},gt=[],T=-1;function B(t){return{current:t}}function F(t){0>T||(t.current=gt[T],gt[T]=null,T--)}function X(t,e){T++,gt[T]=t.current,t.current=e}var nt=B(null),yt=B(null),st=B(null),xe=B(null);function kt(t,e){switch(X(st,e),X(yt,t),X(nt,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?a0(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=a0(e),t=i0(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}F(nt),X(nt,t)}function jn(){F(nt),F(yt),F(st)}function fs(t){t.memoizedState!==null&&X(xe,t);var e=nt.current,a=i0(e,t.type);e!==a&&(X(yt,t),X(nt,a))}function po(t){yt.current===t&&(F(nt),F(yt)),xe.current===t&&(F(xe),Nr._currentValue=$)}var ds=Object.prototype.hasOwnProperty,hs=n.unstable_scheduleCallback,ms=n.unstable_cancelCallback,_1=n.unstable_shouldYield,z1=n.unstable_requestPaint,Ie=n.unstable_now,j1=n.unstable_getCurrentPriorityLevel,Vd=n.unstable_ImmediatePriority,Ud=n.unstable_UserBlockingPriority,go=n.unstable_NormalPriority,N1=n.unstable_LowPriority,Ld=n.unstable_IdlePriority,P1=n.log,V1=n.unstable_setDisableYieldValue,Yi=null,Se=null;function Nn(t){if(typeof P1=="function"&&V1(t),Se&&typeof Se.setStrictMode=="function")try{Se.setStrictMode(Yi,t)}catch{}}var Te=Math.clz32?Math.clz32:B1,U1=Math.log,L1=Math.LN2;function B1(t){return t>>>=0,t===0?32:31-(U1(t)/L1|0)|0}var vo=256,bo=4194304;function ma(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function yo(t,e,a){var r=t.pendingLanes;if(r===0)return 0;var s=0,c=t.suspendedLanes,g=t.pingedLanes;t=t.warmLanes;var b=r&134217727;return b!==0?(r=b&~c,r!==0?s=ma(r):(g&=b,g!==0?s=ma(g):a||(a=b&~t,a!==0&&(s=ma(a))))):(b=r&~c,b!==0?s=ma(b):g!==0?s=ma(g):a||(a=r&~t,a!==0&&(s=ma(a)))),s===0?0:e!==0&&e!==s&&(e&c)===0&&(c=s&-s,a=e&-e,c>=a||c===32&&(a&4194048)!==0)?e:s}function Gi(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function H1(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Bd(){var t=vo;return vo<<=1,(vo&4194048)===0&&(vo=256),t}function Hd(){var t=bo;return bo<<=1,(bo&62914560)===0&&(bo=4194304),t}function ps(t){for(var e=[],a=0;31>a;a++)e.push(t);return e}function Xi(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function q1(t,e,a,r,s,c){var g=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var b=t.entanglements,S=t.expirationTimes,D=t.hiddenUpdates;for(a=g&~a;0<a;){var _=31-Te(a),P=1<<_;b[_]=0,S[_]=-1;var C=D[_];if(C!==null)for(D[_]=null,_=0;_<C.length;_++){var k=C[_];k!==null&&(k.lane&=-536870913)}a&=~P}r!==0&&qd(t,r,0),c!==0&&s===0&&t.tag!==0&&(t.suspendedLanes|=c&~(g&~e))}function qd(t,e,a){t.pendingLanes|=e,t.suspendedLanes&=~e;var r=31-Te(e);t.entangledLanes|=e,t.entanglements[r]=t.entanglements[r]|1073741824|a&4194090}function Yd(t,e){var a=t.entangledLanes|=e;for(t=t.entanglements;a;){var r=31-Te(a),s=1<<r;s&e|t[r]&e&&(t[r]|=e),a&=~s}}function gs(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function vs(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Gd(){var t=G.p;return t!==0?t:(t=window.event,t===void 0?32:A0(t.type))}function Y1(t,e){var a=G.p;try{return G.p=t,e()}finally{G.p=a}}var Pn=Math.random().toString(36).slice(2),oe="__reactFiber$"+Pn,me="__reactProps$"+Pn,Ha="__reactContainer$"+Pn,bs="__reactEvents$"+Pn,G1="__reactListeners$"+Pn,X1="__reactHandles$"+Pn,Xd="__reactResources$"+Pn,Fi="__reactMarker$"+Pn;function ys(t){delete t[oe],delete t[me],delete t[bs],delete t[G1],delete t[X1]}function qa(t){var e=t[oe];if(e)return e;for(var a=t.parentNode;a;){if(e=a[Ha]||a[oe]){if(a=e.alternate,e.child!==null||a!==null&&a.child!==null)for(t=s0(t);t!==null;){if(a=t[oe])return a;t=s0(t)}return e}t=a,a=t.parentNode}return null}function Ya(t){if(t=t[oe]||t[Ha]){var e=t.tag;if(e===5||e===6||e===13||e===26||e===27||e===3)return t}return null}function Ki(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(l(33))}function Ga(t){var e=t[Xd];return e||(e=t[Xd]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function Jt(t){t[Fi]=!0}var Fd=new Set,Kd={};function pa(t,e){Xa(t,e),Xa(t+"Capture",e)}function Xa(t,e){for(Kd[t]=e,t=0;t<e.length;t++)Fd.add(e[t])}var F1=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Zd={},Qd={};function K1(t){return ds.call(Qd,t)?!0:ds.call(Zd,t)?!1:F1.test(t)?Qd[t]=!0:(Zd[t]=!0,!1)}function xo(t,e,a){if(K1(e))if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var r=e.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+a)}}function So(t,e,a){if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+a)}}function hn(t,e,a,r){if(r===null)t.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(e,a,""+r)}}var xs,$d;function Fa(t){if(xs===void 0)try{throw Error()}catch(a){var e=a.stack.trim().match(/\n( *(at )?)/);xs=e&&e[1]||"",$d=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+xs+t+$d}var Ss=!1;function Ts(t,e){if(!t||Ss)return"";Ss=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(e){var P=function(){throw Error()};if(Object.defineProperty(P.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(P,[])}catch(k){var C=k}Reflect.construct(t,[],P)}else{try{P.call()}catch(k){C=k}t.call(P.prototype)}}else{try{throw Error()}catch(k){C=k}(P=t())&&typeof P.catch=="function"&&P.catch(function(){})}}catch(k){if(k&&C&&typeof k.stack=="string")return[k.stack,C.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var s=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");s&&s.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var c=r.DetermineComponentFrameRoot(),g=c[0],b=c[1];if(g&&b){var S=g.split(`
`),D=b.split(`
`);for(s=r=0;r<S.length&&!S[r].includes("DetermineComponentFrameRoot");)r++;for(;s<D.length&&!D[s].includes("DetermineComponentFrameRoot");)s++;if(r===S.length||s===D.length)for(r=S.length-1,s=D.length-1;1<=r&&0<=s&&S[r]!==D[s];)s--;for(;1<=r&&0<=s;r--,s--)if(S[r]!==D[s]){if(r!==1||s!==1)do if(r--,s--,0>s||S[r]!==D[s]){var _=`
`+S[r].replace(" at new "," at ");return t.displayName&&_.includes("<anonymous>")&&(_=_.replace("<anonymous>",t.displayName)),_}while(1<=r&&0<=s);break}}}finally{Ss=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Fa(a):""}function Z1(t){switch(t.tag){case 26:case 27:case 5:return Fa(t.type);case 16:return Fa("Lazy");case 13:return Fa("Suspense");case 19:return Fa("SuspenseList");case 0:case 15:return Ts(t.type,!1);case 11:return Ts(t.type.render,!1);case 1:return Ts(t.type,!0);case 31:return Fa("Activity");default:return""}}function Jd(t){try{var e="";do e+=Z1(t),t=t.return;while(t);return e}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function _e(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Wd(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Q1(t){var e=Wd(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var s=a.get,c=a.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(g){r=""+g,c.call(this,g)}}),Object.defineProperty(t,e,{enumerable:a.enumerable}),{getValue:function(){return r},setValue:function(g){r=""+g},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function To(t){t._valueTracker||(t._valueTracker=Q1(t))}function Id(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var a=e.getValue(),r="";return t&&(r=Wd(t)?t.checked?"true":"false":t.value),t=r,t!==a?(e.setValue(t),!0):!1}function Ao(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var $1=/[\n"\\]/g;function ze(t){return t.replace($1,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function As(t,e,a,r,s,c,g,b){t.name="",g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?t.type=g:t.removeAttribute("type"),e!=null?g==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+_e(e)):t.value!==""+_e(e)&&(t.value=""+_e(e)):g!=="submit"&&g!=="reset"||t.removeAttribute("value"),e!=null?Os(t,g,_e(e)):a!=null?Os(t,g,_e(a)):r!=null&&t.removeAttribute("value"),s==null&&c!=null&&(t.defaultChecked=!!c),s!=null&&(t.checked=s&&typeof s!="function"&&typeof s!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?t.name=""+_e(b):t.removeAttribute("name")}function th(t,e,a,r,s,c,g,b){if(c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(t.type=c),e!=null||a!=null){if(!(c!=="submit"&&c!=="reset"||e!=null))return;a=a!=null?""+_e(a):"",e=e!=null?""+_e(e):a,b||e===t.value||(t.value=e),t.defaultValue=e}r=r??s,r=typeof r!="function"&&typeof r!="symbol"&&!!r,t.checked=b?t.checked:!!r,t.defaultChecked=!!r,g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(t.name=g)}function Os(t,e,a){e==="number"&&Ao(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function Ka(t,e,a,r){if(t=t.options,e){e={};for(var s=0;s<a.length;s++)e["$"+a[s]]=!0;for(a=0;a<t.length;a++)s=e.hasOwnProperty("$"+t[a].value),t[a].selected!==s&&(t[a].selected=s),s&&r&&(t[a].defaultSelected=!0)}else{for(a=""+_e(a),e=null,s=0;s<t.length;s++){if(t[s].value===a){t[s].selected=!0,r&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function eh(t,e,a){if(e!=null&&(e=""+_e(e),e!==t.value&&(t.value=e),a==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=a!=null?""+_e(a):""}function nh(t,e,a,r){if(e==null){if(r!=null){if(a!=null)throw Error(l(92));if(Kt(r)){if(1<r.length)throw Error(l(93));r=r[0]}a=r}a==null&&(a=""),e=a}a=_e(e),t.defaultValue=a,r=t.textContent,r===a&&r!==""&&r!==null&&(t.value=r)}function Za(t,e){if(e){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=e;return}}t.textContent=e}var J1=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function ah(t,e,a){var r=e.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":r?t.setProperty(e,a):typeof a!="number"||a===0||J1.has(e)?e==="float"?t.cssFloat=a:t[e]=(""+a).trim():t[e]=a+"px"}function ih(t,e,a){if(e!=null&&typeof e!="object")throw Error(l(62));if(t=t.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||e!=null&&e.hasOwnProperty(r)||(r.indexOf("--")===0?t.setProperty(r,""):r==="float"?t.cssFloat="":t[r]="");for(var s in e)r=e[s],e.hasOwnProperty(s)&&a[s]!==r&&ah(t,s,r)}else for(var c in e)e.hasOwnProperty(c)&&ah(t,c,e[c])}function Es(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var W1=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),I1=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Oo(t){return I1.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var ws=null;function Ms(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Qa=null,$a=null;function rh(t){var e=Ya(t);if(e&&(t=e.stateNode)){var a=t[me]||null;t:switch(t=e.stateNode,e.type){case"input":if(As(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),e=a.name,a.type==="radio"&&e!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+ze(""+e)+'"][type="radio"]'),e=0;e<a.length;e++){var r=a[e];if(r!==t&&r.form===t.form){var s=r[me]||null;if(!s)throw Error(l(90));As(r,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name)}}for(e=0;e<a.length;e++)r=a[e],r.form===t.form&&Id(r)}break t;case"textarea":eh(t,a.value,a.defaultValue);break t;case"select":e=a.value,e!=null&&Ka(t,!!a.multiple,e,!1)}}}var Ds=!1;function oh(t,e,a){if(Ds)return t(e,a);Ds=!0;try{var r=t(e);return r}finally{if(Ds=!1,(Qa!==null||$a!==null)&&(ul(),Qa&&(e=Qa,t=$a,$a=Qa=null,rh(e),t)))for(e=0;e<t.length;e++)rh(t[e])}}function Zi(t,e){var a=t.stateNode;if(a===null)return null;var r=a[me]||null;if(r===null)return null;a=r[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(l(231,e,typeof a));return a}var mn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Cs=!1;if(mn)try{var Qi={};Object.defineProperty(Qi,"passive",{get:function(){Cs=!0}}),window.addEventListener("test",Qi,Qi),window.removeEventListener("test",Qi,Qi)}catch{Cs=!1}var Vn=null,ks=null,Eo=null;function lh(){if(Eo)return Eo;var t,e=ks,a=e.length,r,s="value"in Vn?Vn.value:Vn.textContent,c=s.length;for(t=0;t<a&&e[t]===s[t];t++);var g=a-t;for(r=1;r<=g&&e[a-r]===s[c-r];r++);return Eo=s.slice(t,1<r?1-r:void 0)}function wo(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Mo(){return!0}function sh(){return!1}function pe(t){function e(a,r,s,c,g){this._reactName=a,this._targetInst=s,this.type=r,this.nativeEvent=c,this.target=g,this.currentTarget=null;for(var b in t)t.hasOwnProperty(b)&&(a=t[b],this[b]=a?a(c):c[b]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?Mo:sh,this.isPropagationStopped=sh,this}return v(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Mo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Mo)},persist:function(){},isPersistent:Mo}),e}var ga={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Do=pe(ga),$i=v({},ga,{view:0,detail:0}),t2=pe($i),Rs,_s,Ji,Co=v({},$i,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:js,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ji&&(Ji&&t.type==="mousemove"?(Rs=t.screenX-Ji.screenX,_s=t.screenY-Ji.screenY):_s=Rs=0,Ji=t),Rs)},movementY:function(t){return"movementY"in t?t.movementY:_s}}),uh=pe(Co),e2=v({},Co,{dataTransfer:0}),n2=pe(e2),a2=v({},$i,{relatedTarget:0}),zs=pe(a2),i2=v({},ga,{animationName:0,elapsedTime:0,pseudoElement:0}),r2=pe(i2),o2=v({},ga,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),l2=pe(o2),s2=v({},ga,{data:0}),ch=pe(s2),u2={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},c2={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},f2={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function d2(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=f2[t])?!!e[t]:!1}function js(){return d2}var h2=v({},$i,{key:function(t){if(t.key){var e=u2[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=wo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?c2[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:js,charCode:function(t){return t.type==="keypress"?wo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?wo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),m2=pe(h2),p2=v({},Co,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),fh=pe(p2),g2=v({},$i,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:js}),v2=pe(g2),b2=v({},ga,{propertyName:0,elapsedTime:0,pseudoElement:0}),y2=pe(b2),x2=v({},Co,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),S2=pe(x2),T2=v({},ga,{newState:0,oldState:0}),A2=pe(T2),O2=[9,13,27,32],Ns=mn&&"CompositionEvent"in window,Wi=null;mn&&"documentMode"in document&&(Wi=document.documentMode);var E2=mn&&"TextEvent"in window&&!Wi,dh=mn&&(!Ns||Wi&&8<Wi&&11>=Wi),hh=" ",mh=!1;function ph(t,e){switch(t){case"keyup":return O2.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function gh(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ja=!1;function w2(t,e){switch(t){case"compositionend":return gh(e);case"keypress":return e.which!==32?null:(mh=!0,hh);case"textInput":return t=e.data,t===hh&&mh?null:t;default:return null}}function M2(t,e){if(Ja)return t==="compositionend"||!Ns&&ph(t,e)?(t=lh(),Eo=ks=Vn=null,Ja=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return dh&&e.locale!=="ko"?null:e.data;default:return null}}var D2={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function vh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!D2[t.type]:e==="textarea"}function bh(t,e,a,r){Qa?$a?$a.push(r):$a=[r]:Qa=r,e=pl(e,"onChange"),0<e.length&&(a=new Do("onChange","change",null,a,r),t.push({event:a,listeners:e}))}var Ii=null,tr=null;function C2(t){Wp(t,0)}function ko(t){var e=Ki(t);if(Id(e))return t}function yh(t,e){if(t==="change")return e}var xh=!1;if(mn){var Ps;if(mn){var Vs="oninput"in document;if(!Vs){var Sh=document.createElement("div");Sh.setAttribute("oninput","return;"),Vs=typeof Sh.oninput=="function"}Ps=Vs}else Ps=!1;xh=Ps&&(!document.documentMode||9<document.documentMode)}function Th(){Ii&&(Ii.detachEvent("onpropertychange",Ah),tr=Ii=null)}function Ah(t){if(t.propertyName==="value"&&ko(tr)){var e=[];bh(e,tr,t,Ms(t)),oh(C2,e)}}function k2(t,e,a){t==="focusin"?(Th(),Ii=e,tr=a,Ii.attachEvent("onpropertychange",Ah)):t==="focusout"&&Th()}function R2(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ko(tr)}function _2(t,e){if(t==="click")return ko(e)}function z2(t,e){if(t==="input"||t==="change")return ko(e)}function j2(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Ae=typeof Object.is=="function"?Object.is:j2;function er(t,e){if(Ae(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var a=Object.keys(t),r=Object.keys(e);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var s=a[r];if(!ds.call(e,s)||!Ae(t[s],e[s]))return!1}return!0}function Oh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Eh(t,e){var a=Oh(t);t=0;for(var r;a;){if(a.nodeType===3){if(r=t+a.textContent.length,t<=e&&r>=e)return{node:a,offset:e-t};t=r}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Oh(a)}}function wh(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?wh(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Mh(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=Ao(t.document);e instanceof t.HTMLIFrameElement;){try{var a=typeof e.contentWindow.location.href=="string"}catch{a=!1}if(a)t=e.contentWindow;else break;e=Ao(t.document)}return e}function Us(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var N2=mn&&"documentMode"in document&&11>=document.documentMode,Wa=null,Ls=null,nr=null,Bs=!1;function Dh(t,e,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Bs||Wa==null||Wa!==Ao(r)||(r=Wa,"selectionStart"in r&&Us(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),nr&&er(nr,r)||(nr=r,r=pl(Ls,"onSelect"),0<r.length&&(e=new Do("onSelect","select",null,e,a),t.push({event:e,listeners:r}),e.target=Wa)))}function va(t,e){var a={};return a[t.toLowerCase()]=e.toLowerCase(),a["Webkit"+t]="webkit"+e,a["Moz"+t]="moz"+e,a}var Ia={animationend:va("Animation","AnimationEnd"),animationiteration:va("Animation","AnimationIteration"),animationstart:va("Animation","AnimationStart"),transitionrun:va("Transition","TransitionRun"),transitionstart:va("Transition","TransitionStart"),transitioncancel:va("Transition","TransitionCancel"),transitionend:va("Transition","TransitionEnd")},Hs={},Ch={};mn&&(Ch=document.createElement("div").style,"AnimationEvent"in window||(delete Ia.animationend.animation,delete Ia.animationiteration.animation,delete Ia.animationstart.animation),"TransitionEvent"in window||delete Ia.transitionend.transition);function ba(t){if(Hs[t])return Hs[t];if(!Ia[t])return t;var e=Ia[t],a;for(a in e)if(e.hasOwnProperty(a)&&a in Ch)return Hs[t]=e[a];return t}var kh=ba("animationend"),Rh=ba("animationiteration"),_h=ba("animationstart"),P2=ba("transitionrun"),V2=ba("transitionstart"),U2=ba("transitioncancel"),zh=ba("transitionend"),jh=new Map,qs="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");qs.push("scrollEnd");function Ge(t,e){jh.set(t,e),pa(e,[t])}var Nh=new WeakMap;function je(t,e){if(typeof t=="object"&&t!==null){var a=Nh.get(t);return a!==void 0?a:(e={value:t,source:e,stack:Jd(e)},Nh.set(t,e),e)}return{value:t,source:e,stack:Jd(e)}}var Ne=[],ti=0,Ys=0;function Ro(){for(var t=ti,e=Ys=ti=0;e<t;){var a=Ne[e];Ne[e++]=null;var r=Ne[e];Ne[e++]=null;var s=Ne[e];Ne[e++]=null;var c=Ne[e];if(Ne[e++]=null,r!==null&&s!==null){var g=r.pending;g===null?s.next=s:(s.next=g.next,g.next=s),r.pending=s}c!==0&&Ph(a,s,c)}}function _o(t,e,a,r){Ne[ti++]=t,Ne[ti++]=e,Ne[ti++]=a,Ne[ti++]=r,Ys|=r,t.lanes|=r,t=t.alternate,t!==null&&(t.lanes|=r)}function Gs(t,e,a,r){return _o(t,e,a,r),zo(t)}function ei(t,e){return _o(t,null,null,e),zo(t)}function Ph(t,e,a){t.lanes|=a;var r=t.alternate;r!==null&&(r.lanes|=a);for(var s=!1,c=t.return;c!==null;)c.childLanes|=a,r=c.alternate,r!==null&&(r.childLanes|=a),c.tag===22&&(t=c.stateNode,t===null||t._visibility&1||(s=!0)),t=c,c=c.return;return t.tag===3?(c=t.stateNode,s&&e!==null&&(s=31-Te(a),t=c.hiddenUpdates,r=t[s],r===null?t[s]=[e]:r.push(e),e.lane=a|536870912),c):null}function zo(t){if(50<Mr)throw Mr=0,$u=null,Error(l(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var ni={};function L2(t,e,a,r){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Oe(t,e,a,r){return new L2(t,e,a,r)}function Xs(t){return t=t.prototype,!(!t||!t.isReactComponent)}function pn(t,e){var a=t.alternate;return a===null?(a=Oe(t.tag,e,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=e,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,e=t.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Vh(t,e){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,e=a.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function jo(t,e,a,r,s,c){var g=0;if(r=t,typeof t=="function")Xs(t)&&(g=1);else if(typeof t=="string")g=Hx(t,a,nt.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case ct:return t=Oe(31,a,e,s),t.elementType=ct,t.lanes=c,t;case R:return ya(a.children,s,c,e);case E:g=8,s|=24;break;case j:return t=Oe(12,a,e,s|2),t.elementType=j,t.lanes=c,t;case H:return t=Oe(13,a,e,s),t.elementType=H,t.lanes=c,t;case I:return t=Oe(19,a,e,s),t.elementType=I,t.lanes=c,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case V:case L:g=10;break t;case q:g=9;break t;case Q:g=11;break t;case lt:g=14;break t;case K:g=16,r=null;break t}g=29,a=Error(l(130,t===null?"null":typeof t,"")),r=null}return e=Oe(g,a,e,s),e.elementType=t,e.type=r,e.lanes=c,e}function ya(t,e,a,r){return t=Oe(7,t,r,e),t.lanes=a,t}function Fs(t,e,a){return t=Oe(6,t,null,e),t.lanes=a,t}function Ks(t,e,a){return e=Oe(4,t.children!==null?t.children:[],t.key,e),e.lanes=a,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var ai=[],ii=0,No=null,Po=0,Pe=[],Ve=0,xa=null,gn=1,vn="";function Sa(t,e){ai[ii++]=Po,ai[ii++]=No,No=t,Po=e}function Uh(t,e,a){Pe[Ve++]=gn,Pe[Ve++]=vn,Pe[Ve++]=xa,xa=t;var r=gn;t=vn;var s=32-Te(r)-1;r&=~(1<<s),a+=1;var c=32-Te(e)+s;if(30<c){var g=s-s%5;c=(r&(1<<g)-1).toString(32),r>>=g,s-=g,gn=1<<32-Te(e)+s|a<<s|r,vn=c+t}else gn=1<<c|a<<s|r,vn=t}function Zs(t){t.return!==null&&(Sa(t,1),Uh(t,1,0))}function Qs(t){for(;t===No;)No=ai[--ii],ai[ii]=null,Po=ai[--ii],ai[ii]=null;for(;t===xa;)xa=Pe[--Ve],Pe[Ve]=null,vn=Pe[--Ve],Pe[Ve]=null,gn=Pe[--Ve],Pe[Ve]=null}var fe=null,Pt=null,St=!1,Ta=null,tn=!1,$s=Error(l(519));function Aa(t){var e=Error(l(418,""));throw rr(je(e,t)),$s}function Lh(t){var e=t.stateNode,a=t.type,r=t.memoizedProps;switch(e[oe]=t,e[me]=r,a){case"dialog":pt("cancel",e),pt("close",e);break;case"iframe":case"object":case"embed":pt("load",e);break;case"video":case"audio":for(a=0;a<Cr.length;a++)pt(Cr[a],e);break;case"source":pt("error",e);break;case"img":case"image":case"link":pt("error",e),pt("load",e);break;case"details":pt("toggle",e);break;case"input":pt("invalid",e),th(e,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0),To(e);break;case"select":pt("invalid",e);break;case"textarea":pt("invalid",e),nh(e,r.value,r.defaultValue,r.children),To(e)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||e.textContent===""+a||r.suppressHydrationWarning===!0||n0(e.textContent,a)?(r.popover!=null&&(pt("beforetoggle",e),pt("toggle",e)),r.onScroll!=null&&pt("scroll",e),r.onScrollEnd!=null&&pt("scrollend",e),r.onClick!=null&&(e.onclick=gl),e=!0):e=!1,e||Aa(t)}function Bh(t){for(fe=t.return;fe;)switch(fe.tag){case 5:case 13:tn=!1;return;case 27:case 3:tn=!0;return;default:fe=fe.return}}function ar(t){if(t!==fe)return!1;if(!St)return Bh(t),St=!0,!1;var e=t.tag,a;if((a=e!==3&&e!==27)&&((a=e===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||dc(t.type,t.memoizedProps)),a=!a),a&&Pt&&Aa(t),Bh(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(l(317));t:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8)if(a=t.data,a==="/$"){if(e===0){Pt=Fe(t.nextSibling);break t}e--}else a!=="$"&&a!=="$!"&&a!=="$?"||e++;t=t.nextSibling}Pt=null}}else e===27?(e=Pt,In(t.type)?(t=gc,gc=null,Pt=t):Pt=e):Pt=fe?Fe(t.stateNode.nextSibling):null;return!0}function ir(){Pt=fe=null,St=!1}function Hh(){var t=Ta;return t!==null&&(be===null?be=t:be.push.apply(be,t),Ta=null),t}function rr(t){Ta===null?Ta=[t]:Ta.push(t)}var Js=B(null),Oa=null,bn=null;function Un(t,e,a){X(Js,e._currentValue),e._currentValue=a}function yn(t){t._currentValue=Js.current,F(Js)}function Ws(t,e,a){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===a)break;t=t.return}}function Is(t,e,a,r){var s=t.child;for(s!==null&&(s.return=t);s!==null;){var c=s.dependencies;if(c!==null){var g=s.child;c=c.firstContext;t:for(;c!==null;){var b=c;c=s;for(var S=0;S<e.length;S++)if(b.context===e[S]){c.lanes|=a,b=c.alternate,b!==null&&(b.lanes|=a),Ws(c.return,a,t),r||(g=null);break t}c=b.next}}else if(s.tag===18){if(g=s.return,g===null)throw Error(l(341));g.lanes|=a,c=g.alternate,c!==null&&(c.lanes|=a),Ws(g,a,t),g=null}else g=s.child;if(g!==null)g.return=s;else for(g=s;g!==null;){if(g===t){g=null;break}if(s=g.sibling,s!==null){s.return=g.return,g=s;break}g=g.return}s=g}}function or(t,e,a,r){t=null;for(var s=e,c=!1;s!==null;){if(!c){if((s.flags&524288)!==0)c=!0;else if((s.flags&262144)!==0)break}if(s.tag===10){var g=s.alternate;if(g===null)throw Error(l(387));if(g=g.memoizedProps,g!==null){var b=s.type;Ae(s.pendingProps.value,g.value)||(t!==null?t.push(b):t=[b])}}else if(s===xe.current){if(g=s.alternate,g===null)throw Error(l(387));g.memoizedState.memoizedState!==s.memoizedState.memoizedState&&(t!==null?t.push(Nr):t=[Nr])}s=s.return}t!==null&&Is(e,t,a,r),e.flags|=262144}function Vo(t){for(t=t.firstContext;t!==null;){if(!Ae(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Ea(t){Oa=t,bn=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function le(t){return qh(Oa,t)}function Uo(t,e){return Oa===null&&Ea(t),qh(t,e)}function qh(t,e){var a=e._currentValue;if(e={context:e,memoizedValue:a,next:null},bn===null){if(t===null)throw Error(l(308));bn=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else bn=bn.next=e;return a}var B2=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(a,r){t.push(r)}};this.abort=function(){e.aborted=!0,t.forEach(function(a){return a()})}},H2=n.unstable_scheduleCallback,q2=n.unstable_NormalPriority,Zt={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function tu(){return{controller:new B2,data:new Map,refCount:0}}function lr(t){t.refCount--,t.refCount===0&&H2(q2,function(){t.controller.abort()})}var sr=null,eu=0,ri=0,oi=null;function Y2(t,e){if(sr===null){var a=sr=[];eu=0,ri=ac(),oi={status:"pending",value:void 0,then:function(r){a.push(r)}}}return eu++,e.then(Yh,Yh),e}function Yh(){if(--eu===0&&sr!==null){oi!==null&&(oi.status="fulfilled");var t=sr;sr=null,ri=0,oi=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function G2(t,e){var a=[],r={status:"pending",value:null,reason:null,then:function(s){a.push(s)}};return t.then(function(){r.status="fulfilled",r.value=e;for(var s=0;s<a.length;s++)(0,a[s])(e)},function(s){for(r.status="rejected",r.reason=s,s=0;s<a.length;s++)(0,a[s])(void 0)}),r}var Gh=z.S;z.S=function(t,e){typeof e=="object"&&e!==null&&typeof e.then=="function"&&Y2(t,e),Gh!==null&&Gh(t,e)};var wa=B(null);function nu(){var t=wa.current;return t!==null?t:Dt.pooledCache}function Lo(t,e){e===null?X(wa,wa.current):X(wa,e.pool)}function Xh(){var t=nu();return t===null?null:{parent:Zt._currentValue,pool:t}}var ur=Error(l(460)),Fh=Error(l(474)),Bo=Error(l(542)),au={then:function(){}};function Kh(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Ho(){}function Zh(t,e,a){switch(a=t[a],a===void 0?t.push(e):a!==e&&(e.then(Ho,Ho),e=a),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,$h(t),t;default:if(typeof e.status=="string")e.then(Ho,Ho);else{if(t=Dt,t!==null&&100<t.shellSuspendCounter)throw Error(l(482));t=e,t.status="pending",t.then(function(r){if(e.status==="pending"){var s=e;s.status="fulfilled",s.value=r}},function(r){if(e.status==="pending"){var s=e;s.status="rejected",s.reason=r}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,$h(t),t}throw cr=e,ur}}var cr=null;function Qh(){if(cr===null)throw Error(l(459));var t=cr;return cr=null,t}function $h(t){if(t===ur||t===Bo)throw Error(l(483))}var Ln=!1;function iu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ru(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Bn(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Hn(t,e,a){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(Tt&2)!==0){var s=r.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),r.pending=e,e=zo(t),Ph(t,null,a),e}return _o(t,r,e,a),zo(t)}function fr(t,e,a){if(e=e.updateQueue,e!==null&&(e=e.shared,(a&4194048)!==0)){var r=e.lanes;r&=t.pendingLanes,a|=r,e.lanes=a,Yd(t,a)}}function ou(t,e){var a=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var s=null,c=null;if(a=a.firstBaseUpdate,a!==null){do{var g={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};c===null?s=c=g:c=c.next=g,a=a.next}while(a!==null);c===null?s=c=e:c=c.next=e}else s=c=e;a={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:c,shared:r.shared,callbacks:r.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=e:t.next=e,a.lastBaseUpdate=e}var lu=!1;function dr(){if(lu){var t=oi;if(t!==null)throw t}}function hr(t,e,a,r){lu=!1;var s=t.updateQueue;Ln=!1;var c=s.firstBaseUpdate,g=s.lastBaseUpdate,b=s.shared.pending;if(b!==null){s.shared.pending=null;var S=b,D=S.next;S.next=null,g===null?c=D:g.next=D,g=S;var _=t.alternate;_!==null&&(_=_.updateQueue,b=_.lastBaseUpdate,b!==g&&(b===null?_.firstBaseUpdate=D:b.next=D,_.lastBaseUpdate=S))}if(c!==null){var P=s.baseState;g=0,_=D=S=null,b=c;do{var C=b.lane&-536870913,k=C!==b.lane;if(k?(bt&C)===C:(r&C)===C){C!==0&&C===ri&&(lu=!0),_!==null&&(_=_.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});t:{var rt=t,at=b;C=e;var wt=a;switch(at.tag){case 1:if(rt=at.payload,typeof rt=="function"){P=rt.call(wt,P,C);break t}P=rt;break t;case 3:rt.flags=rt.flags&-65537|128;case 0:if(rt=at.payload,C=typeof rt=="function"?rt.call(wt,P,C):rt,C==null)break t;P=v({},P,C);break t;case 2:Ln=!0}}C=b.callback,C!==null&&(t.flags|=64,k&&(t.flags|=8192),k=s.callbacks,k===null?s.callbacks=[C]:k.push(C))}else k={lane:C,tag:b.tag,payload:b.payload,callback:b.callback,next:null},_===null?(D=_=k,S=P):_=_.next=k,g|=C;if(b=b.next,b===null){if(b=s.shared.pending,b===null)break;k=b,b=k.next,k.next=null,s.lastBaseUpdate=k,s.shared.pending=null}}while(!0);_===null&&(S=P),s.baseState=S,s.firstBaseUpdate=D,s.lastBaseUpdate=_,c===null&&(s.shared.lanes=0),Qn|=g,t.lanes=g,t.memoizedState=P}}function Jh(t,e){if(typeof t!="function")throw Error(l(191,t));t.call(e)}function Wh(t,e){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Jh(a[t],e)}var li=B(null),qo=B(0);function Ih(t,e){t=wn,X(qo,t),X(li,e),wn=t|e.baseLanes}function su(){X(qo,wn),X(li,li.current)}function uu(){wn=qo.current,F(li),F(qo)}var qn=0,ft=null,Ot=null,qt=null,Yo=!1,si=!1,Ma=!1,Go=0,mr=0,ui=null,X2=0;function Lt(){throw Error(l(321))}function cu(t,e){if(e===null)return!1;for(var a=0;a<e.length&&a<t.length;a++)if(!Ae(t[a],e[a]))return!1;return!0}function fu(t,e,a,r,s,c){return qn=c,ft=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,z.H=t===null||t.memoizedState===null?Pm:Vm,Ma=!1,c=a(r,s),Ma=!1,si&&(c=em(e,a,r,s)),tm(t),c}function tm(t){z.H=$o;var e=Ot!==null&&Ot.next!==null;if(qn=0,qt=Ot=ft=null,Yo=!1,mr=0,ui=null,e)throw Error(l(300));t===null||Wt||(t=t.dependencies,t!==null&&Vo(t)&&(Wt=!0))}function em(t,e,a,r){ft=t;var s=0;do{if(si&&(ui=null),mr=0,si=!1,25<=s)throw Error(l(301));if(s+=1,qt=Ot=null,t.updateQueue!=null){var c=t.updateQueue;c.lastEffect=null,c.events=null,c.stores=null,c.memoCache!=null&&(c.memoCache.index=0)}z.H=W2,c=e(a,r)}while(si);return c}function F2(){var t=z.H,e=t.useState()[0];return e=typeof e.then=="function"?pr(e):e,t=t.useState()[0],(Ot!==null?Ot.memoizedState:null)!==t&&(ft.flags|=1024),e}function du(){var t=Go!==0;return Go=0,t}function hu(t,e,a){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~a}function mu(t){if(Yo){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}Yo=!1}qn=0,qt=Ot=ft=null,si=!1,mr=Go=0,ui=null}function ge(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return qt===null?ft.memoizedState=qt=t:qt=qt.next=t,qt}function Yt(){if(Ot===null){var t=ft.alternate;t=t!==null?t.memoizedState:null}else t=Ot.next;var e=qt===null?ft.memoizedState:qt.next;if(e!==null)qt=e,Ot=t;else{if(t===null)throw ft.alternate===null?Error(l(467)):Error(l(310));Ot=t,t={memoizedState:Ot.memoizedState,baseState:Ot.baseState,baseQueue:Ot.baseQueue,queue:Ot.queue,next:null},qt===null?ft.memoizedState=qt=t:qt=qt.next=t}return qt}function pu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function pr(t){var e=mr;return mr+=1,ui===null&&(ui=[]),t=Zh(ui,t,e),e=ft,(qt===null?e.memoizedState:qt.next)===null&&(e=e.alternate,z.H=e===null||e.memoizedState===null?Pm:Vm),t}function Xo(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return pr(t);if(t.$$typeof===L)return le(t)}throw Error(l(438,String(t)))}function gu(t){var e=null,a=ft.updateQueue;if(a!==null&&(e=a.memoCache),e==null){var r=ft.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(e={data:r.data.map(function(s){return s.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),a===null&&(a=pu(),ft.updateQueue=a),a.memoCache=e,a=e.data[e.index],a===void 0)for(a=e.data[e.index]=Array(t),r=0;r<t;r++)a[r]=Xt;return e.index++,a}function xn(t,e){return typeof e=="function"?e(t):e}function Fo(t){var e=Yt();return vu(e,Ot,t)}function vu(t,e,a){var r=t.queue;if(r===null)throw Error(l(311));r.lastRenderedReducer=a;var s=t.baseQueue,c=r.pending;if(c!==null){if(s!==null){var g=s.next;s.next=c.next,c.next=g}e.baseQueue=s=c,r.pending=null}if(c=t.baseState,s===null)t.memoizedState=c;else{e=s.next;var b=g=null,S=null,D=e,_=!1;do{var P=D.lane&-536870913;if(P!==D.lane?(bt&P)===P:(qn&P)===P){var C=D.revertLane;if(C===0)S!==null&&(S=S.next={lane:0,revertLane:0,action:D.action,hasEagerState:D.hasEagerState,eagerState:D.eagerState,next:null}),P===ri&&(_=!0);else if((qn&C)===C){D=D.next,C===ri&&(_=!0);continue}else P={lane:0,revertLane:D.revertLane,action:D.action,hasEagerState:D.hasEagerState,eagerState:D.eagerState,next:null},S===null?(b=S=P,g=c):S=S.next=P,ft.lanes|=C,Qn|=C;P=D.action,Ma&&a(c,P),c=D.hasEagerState?D.eagerState:a(c,P)}else C={lane:P,revertLane:D.revertLane,action:D.action,hasEagerState:D.hasEagerState,eagerState:D.eagerState,next:null},S===null?(b=S=C,g=c):S=S.next=C,ft.lanes|=P,Qn|=P;D=D.next}while(D!==null&&D!==e);if(S===null?g=c:S.next=b,!Ae(c,t.memoizedState)&&(Wt=!0,_&&(a=oi,a!==null)))throw a;t.memoizedState=c,t.baseState=g,t.baseQueue=S,r.lastRenderedState=c}return s===null&&(r.lanes=0),[t.memoizedState,r.dispatch]}function bu(t){var e=Yt(),a=e.queue;if(a===null)throw Error(l(311));a.lastRenderedReducer=t;var r=a.dispatch,s=a.pending,c=e.memoizedState;if(s!==null){a.pending=null;var g=s=s.next;do c=t(c,g.action),g=g.next;while(g!==s);Ae(c,e.memoizedState)||(Wt=!0),e.memoizedState=c,e.baseQueue===null&&(e.baseState=c),a.lastRenderedState=c}return[c,r]}function nm(t,e,a){var r=ft,s=Yt(),c=St;if(c){if(a===void 0)throw Error(l(407));a=a()}else a=e();var g=!Ae((Ot||s).memoizedState,a);g&&(s.memoizedState=a,Wt=!0),s=s.queue;var b=rm.bind(null,r,s,t);if(gr(2048,8,b,[t]),s.getSnapshot!==e||g||qt!==null&&qt.memoizedState.tag&1){if(r.flags|=2048,ci(9,Ko(),im.bind(null,r,s,a,e),null),Dt===null)throw Error(l(349));c||(qn&124)!==0||am(r,e,a)}return a}function am(t,e,a){t.flags|=16384,t={getSnapshot:e,value:a},e=ft.updateQueue,e===null?(e=pu(),ft.updateQueue=e,e.stores=[t]):(a=e.stores,a===null?e.stores=[t]:a.push(t))}function im(t,e,a,r){e.value=a,e.getSnapshot=r,om(e)&&lm(t)}function rm(t,e,a){return a(function(){om(e)&&lm(t)})}function om(t){var e=t.getSnapshot;t=t.value;try{var a=e();return!Ae(t,a)}catch{return!0}}function lm(t){var e=ei(t,2);e!==null&&Ce(e,t,2)}function yu(t){var e=ge();if(typeof t=="function"){var a=t;if(t=a(),Ma){Nn(!0);try{a()}finally{Nn(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:xn,lastRenderedState:t},e}function sm(t,e,a,r){return t.baseState=a,vu(t,Ot,typeof r=="function"?r:xn)}function K2(t,e,a,r,s){if(Qo(t))throw Error(l(485));if(t=e.action,t!==null){var c={payload:s,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(g){c.listeners.push(g)}};z.T!==null?a(!0):c.isTransition=!1,r(c),a=e.pending,a===null?(c.next=e.pending=c,um(e,c)):(c.next=a.next,e.pending=a.next=c)}}function um(t,e){var a=e.action,r=e.payload,s=t.state;if(e.isTransition){var c=z.T,g={};z.T=g;try{var b=a(s,r),S=z.S;S!==null&&S(g,b),cm(t,e,b)}catch(D){xu(t,e,D)}finally{z.T=c}}else try{c=a(s,r),cm(t,e,c)}catch(D){xu(t,e,D)}}function cm(t,e,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){fm(t,e,r)},function(r){return xu(t,e,r)}):fm(t,e,a)}function fm(t,e,a){e.status="fulfilled",e.value=a,dm(e),t.state=a,e=t.pending,e!==null&&(a=e.next,a===e?t.pending=null:(a=a.next,e.next=a,um(t,a)))}function xu(t,e,a){var r=t.pending;if(t.pending=null,r!==null){r=r.next;do e.status="rejected",e.reason=a,dm(e),e=e.next;while(e!==r)}t.action=null}function dm(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function hm(t,e){return e}function mm(t,e){if(St){var a=Dt.formState;if(a!==null){t:{var r=ft;if(St){if(Pt){e:{for(var s=Pt,c=tn;s.nodeType!==8;){if(!c){s=null;break e}if(s=Fe(s.nextSibling),s===null){s=null;break e}}c=s.data,s=c==="F!"||c==="F"?s:null}if(s){Pt=Fe(s.nextSibling),r=s.data==="F!";break t}}Aa(r)}r=!1}r&&(e=a[0])}}return a=ge(),a.memoizedState=a.baseState=e,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:hm,lastRenderedState:e},a.queue=r,a=zm.bind(null,ft,r),r.dispatch=a,r=yu(!1),c=Eu.bind(null,ft,!1,r.queue),r=ge(),s={state:e,dispatch:null,action:t,pending:null},r.queue=s,a=K2.bind(null,ft,s,c,a),s.dispatch=a,r.memoizedState=t,[e,a,!1]}function pm(t){var e=Yt();return gm(e,Ot,t)}function gm(t,e,a){if(e=vu(t,e,hm)[0],t=Fo(xn)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var r=pr(e)}catch(g){throw g===ur?Bo:g}else r=e;e=Yt();var s=e.queue,c=s.dispatch;return a!==e.memoizedState&&(ft.flags|=2048,ci(9,Ko(),Z2.bind(null,s,a),null)),[r,c,t]}function Z2(t,e){t.action=e}function vm(t){var e=Yt(),a=Ot;if(a!==null)return gm(e,a,t);Yt(),e=e.memoizedState,a=Yt();var r=a.queue.dispatch;return a.memoizedState=t,[e,r,!1]}function ci(t,e,a,r){return t={tag:t,create:a,deps:r,inst:e,next:null},e=ft.updateQueue,e===null&&(e=pu(),ft.updateQueue=e),a=e.lastEffect,a===null?e.lastEffect=t.next=t:(r=a.next,a.next=t,t.next=r,e.lastEffect=t),t}function Ko(){return{destroy:void 0,resource:void 0}}function bm(){return Yt().memoizedState}function Zo(t,e,a,r){var s=ge();r=r===void 0?null:r,ft.flags|=t,s.memoizedState=ci(1|e,Ko(),a,r)}function gr(t,e,a,r){var s=Yt();r=r===void 0?null:r;var c=s.memoizedState.inst;Ot!==null&&r!==null&&cu(r,Ot.memoizedState.deps)?s.memoizedState=ci(e,c,a,r):(ft.flags|=t,s.memoizedState=ci(1|e,c,a,r))}function ym(t,e){Zo(8390656,8,t,e)}function xm(t,e){gr(2048,8,t,e)}function Sm(t,e){return gr(4,2,t,e)}function Tm(t,e){return gr(4,4,t,e)}function Am(t,e){if(typeof e=="function"){t=t();var a=e(t);return function(){typeof a=="function"?a():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Om(t,e,a){a=a!=null?a.concat([t]):null,gr(4,4,Am.bind(null,e,t),a)}function Su(){}function Em(t,e){var a=Yt();e=e===void 0?null:e;var r=a.memoizedState;return e!==null&&cu(e,r[1])?r[0]:(a.memoizedState=[t,e],t)}function wm(t,e){var a=Yt();e=e===void 0?null:e;var r=a.memoizedState;if(e!==null&&cu(e,r[1]))return r[0];if(r=t(),Ma){Nn(!0);try{t()}finally{Nn(!1)}}return a.memoizedState=[r,e],r}function Tu(t,e,a){return a===void 0||(qn&1073741824)!==0?t.memoizedState=e:(t.memoizedState=a,t=Cp(),ft.lanes|=t,Qn|=t,a)}function Mm(t,e,a,r){return Ae(a,e)?a:li.current!==null?(t=Tu(t,a,r),Ae(t,e)||(Wt=!0),t):(qn&42)===0?(Wt=!0,t.memoizedState=a):(t=Cp(),ft.lanes|=t,Qn|=t,e)}function Dm(t,e,a,r,s){var c=G.p;G.p=c!==0&&8>c?c:8;var g=z.T,b={};z.T=b,Eu(t,!1,e,a);try{var S=s(),D=z.S;if(D!==null&&D(b,S),S!==null&&typeof S=="object"&&typeof S.then=="function"){var _=G2(S,r);vr(t,e,_,De(t))}else vr(t,e,r,De(t))}catch(P){vr(t,e,{then:function(){},status:"rejected",reason:P},De())}finally{G.p=c,z.T=g}}function Q2(){}function Au(t,e,a,r){if(t.tag!==5)throw Error(l(476));var s=Cm(t).queue;Dm(t,s,e,$,a===null?Q2:function(){return km(t),a(r)})}function Cm(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:$,baseState:$,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:xn,lastRenderedState:$},next:null};var a={};return e.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:xn,lastRenderedState:a},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function km(t){var e=Cm(t).next.queue;vr(t,e,{},De())}function Ou(){return le(Nr)}function Rm(){return Yt().memoizedState}function _m(){return Yt().memoizedState}function $2(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var a=De();t=Bn(a);var r=Hn(e,t,a);r!==null&&(Ce(r,e,a),fr(r,e,a)),e={cache:tu()},t.payload=e;return}e=e.return}}function J2(t,e,a){var r=De();a={lane:r,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Qo(t)?jm(e,a):(a=Gs(t,e,a,r),a!==null&&(Ce(a,t,r),Nm(a,e,r)))}function zm(t,e,a){var r=De();vr(t,e,a,r)}function vr(t,e,a,r){var s={lane:r,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Qo(t))jm(e,s);else{var c=t.alternate;if(t.lanes===0&&(c===null||c.lanes===0)&&(c=e.lastRenderedReducer,c!==null))try{var g=e.lastRenderedState,b=c(g,a);if(s.hasEagerState=!0,s.eagerState=b,Ae(b,g))return _o(t,e,s,0),Dt===null&&Ro(),!1}catch{}finally{}if(a=Gs(t,e,s,r),a!==null)return Ce(a,t,r),Nm(a,e,r),!0}return!1}function Eu(t,e,a,r){if(r={lane:2,revertLane:ac(),action:r,hasEagerState:!1,eagerState:null,next:null},Qo(t)){if(e)throw Error(l(479))}else e=Gs(t,a,r,2),e!==null&&Ce(e,t,2)}function Qo(t){var e=t.alternate;return t===ft||e!==null&&e===ft}function jm(t,e){si=Yo=!0;var a=t.pending;a===null?e.next=e:(e.next=a.next,a.next=e),t.pending=e}function Nm(t,e,a){if((a&4194048)!==0){var r=e.lanes;r&=t.pendingLanes,a|=r,e.lanes=a,Yd(t,a)}}var $o={readContext:le,use:Xo,useCallback:Lt,useContext:Lt,useEffect:Lt,useImperativeHandle:Lt,useLayoutEffect:Lt,useInsertionEffect:Lt,useMemo:Lt,useReducer:Lt,useRef:Lt,useState:Lt,useDebugValue:Lt,useDeferredValue:Lt,useTransition:Lt,useSyncExternalStore:Lt,useId:Lt,useHostTransitionStatus:Lt,useFormState:Lt,useActionState:Lt,useOptimistic:Lt,useMemoCache:Lt,useCacheRefresh:Lt},Pm={readContext:le,use:Xo,useCallback:function(t,e){return ge().memoizedState=[t,e===void 0?null:e],t},useContext:le,useEffect:ym,useImperativeHandle:function(t,e,a){a=a!=null?a.concat([t]):null,Zo(4194308,4,Am.bind(null,e,t),a)},useLayoutEffect:function(t,e){return Zo(4194308,4,t,e)},useInsertionEffect:function(t,e){Zo(4,2,t,e)},useMemo:function(t,e){var a=ge();e=e===void 0?null:e;var r=t();if(Ma){Nn(!0);try{t()}finally{Nn(!1)}}return a.memoizedState=[r,e],r},useReducer:function(t,e,a){var r=ge();if(a!==void 0){var s=a(e);if(Ma){Nn(!0);try{a(e)}finally{Nn(!1)}}}else s=e;return r.memoizedState=r.baseState=s,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:s},r.queue=t,t=t.dispatch=J2.bind(null,ft,t),[r.memoizedState,t]},useRef:function(t){var e=ge();return t={current:t},e.memoizedState=t},useState:function(t){t=yu(t);var e=t.queue,a=zm.bind(null,ft,e);return e.dispatch=a,[t.memoizedState,a]},useDebugValue:Su,useDeferredValue:function(t,e){var a=ge();return Tu(a,t,e)},useTransition:function(){var t=yu(!1);return t=Dm.bind(null,ft,t.queue,!0,!1),ge().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,a){var r=ft,s=ge();if(St){if(a===void 0)throw Error(l(407));a=a()}else{if(a=e(),Dt===null)throw Error(l(349));(bt&124)!==0||am(r,e,a)}s.memoizedState=a;var c={value:a,getSnapshot:e};return s.queue=c,ym(rm.bind(null,r,c,t),[t]),r.flags|=2048,ci(9,Ko(),im.bind(null,r,c,a,e),null),a},useId:function(){var t=ge(),e=Dt.identifierPrefix;if(St){var a=vn,r=gn;a=(r&~(1<<32-Te(r)-1)).toString(32)+a,e="«"+e+"R"+a,a=Go++,0<a&&(e+="H"+a.toString(32)),e+="»"}else a=X2++,e="«"+e+"r"+a.toString(32)+"»";return t.memoizedState=e},useHostTransitionStatus:Ou,useFormState:mm,useActionState:mm,useOptimistic:function(t){var e=ge();e.memoizedState=e.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=a,e=Eu.bind(null,ft,!0,a),a.dispatch=e,[t,e]},useMemoCache:gu,useCacheRefresh:function(){return ge().memoizedState=$2.bind(null,ft)}},Vm={readContext:le,use:Xo,useCallback:Em,useContext:le,useEffect:xm,useImperativeHandle:Om,useInsertionEffect:Sm,useLayoutEffect:Tm,useMemo:wm,useReducer:Fo,useRef:bm,useState:function(){return Fo(xn)},useDebugValue:Su,useDeferredValue:function(t,e){var a=Yt();return Mm(a,Ot.memoizedState,t,e)},useTransition:function(){var t=Fo(xn)[0],e=Yt().memoizedState;return[typeof t=="boolean"?t:pr(t),e]},useSyncExternalStore:nm,useId:Rm,useHostTransitionStatus:Ou,useFormState:pm,useActionState:pm,useOptimistic:function(t,e){var a=Yt();return sm(a,Ot,t,e)},useMemoCache:gu,useCacheRefresh:_m},W2={readContext:le,use:Xo,useCallback:Em,useContext:le,useEffect:xm,useImperativeHandle:Om,useInsertionEffect:Sm,useLayoutEffect:Tm,useMemo:wm,useReducer:bu,useRef:bm,useState:function(){return bu(xn)},useDebugValue:Su,useDeferredValue:function(t,e){var a=Yt();return Ot===null?Tu(a,t,e):Mm(a,Ot.memoizedState,t,e)},useTransition:function(){var t=bu(xn)[0],e=Yt().memoizedState;return[typeof t=="boolean"?t:pr(t),e]},useSyncExternalStore:nm,useId:Rm,useHostTransitionStatus:Ou,useFormState:vm,useActionState:vm,useOptimistic:function(t,e){var a=Yt();return Ot!==null?sm(a,Ot,t,e):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:gu,useCacheRefresh:_m},fi=null,br=0;function Jo(t){var e=br;return br+=1,fi===null&&(fi=[]),Zh(fi,t,e)}function yr(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function Wo(t,e){throw e.$$typeof===y?Error(l(525)):(t=Object.prototype.toString.call(e),Error(l(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function Um(t){var e=t._init;return e(t._payload)}function Lm(t){function e(O,A){if(t){var w=O.deletions;w===null?(O.deletions=[A],O.flags|=16):w.push(A)}}function a(O,A){if(!t)return null;for(;A!==null;)e(O,A),A=A.sibling;return null}function r(O){for(var A=new Map;O!==null;)O.key!==null?A.set(O.key,O):A.set(O.index,O),O=O.sibling;return A}function s(O,A){return O=pn(O,A),O.index=0,O.sibling=null,O}function c(O,A,w){return O.index=w,t?(w=O.alternate,w!==null?(w=w.index,w<A?(O.flags|=67108866,A):w):(O.flags|=67108866,A)):(O.flags|=1048576,A)}function g(O){return t&&O.alternate===null&&(O.flags|=67108866),O}function b(O,A,w,N){return A===null||A.tag!==6?(A=Fs(w,O.mode,N),A.return=O,A):(A=s(A,w),A.return=O,A)}function S(O,A,w,N){var Z=w.type;return Z===R?_(O,A,w.props.children,N,w.key):A!==null&&(A.elementType===Z||typeof Z=="object"&&Z!==null&&Z.$$typeof===K&&Um(Z)===A.type)?(A=s(A,w.props),yr(A,w),A.return=O,A):(A=jo(w.type,w.key,w.props,null,O.mode,N),yr(A,w),A.return=O,A)}function D(O,A,w,N){return A===null||A.tag!==4||A.stateNode.containerInfo!==w.containerInfo||A.stateNode.implementation!==w.implementation?(A=Ks(w,O.mode,N),A.return=O,A):(A=s(A,w.children||[]),A.return=O,A)}function _(O,A,w,N,Z){return A===null||A.tag!==7?(A=ya(w,O.mode,N,Z),A.return=O,A):(A=s(A,w),A.return=O,A)}function P(O,A,w){if(typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint")return A=Fs(""+A,O.mode,w),A.return=O,A;if(typeof A=="object"&&A!==null){switch(A.$$typeof){case x:return w=jo(A.type,A.key,A.props,null,O.mode,w),yr(w,A),w.return=O,w;case M:return A=Ks(A,O.mode,w),A.return=O,A;case K:var N=A._init;return A=N(A._payload),P(O,A,w)}if(Kt(A)||Ft(A))return A=ya(A,O.mode,w,null),A.return=O,A;if(typeof A.then=="function")return P(O,Jo(A),w);if(A.$$typeof===L)return P(O,Uo(O,A),w);Wo(O,A)}return null}function C(O,A,w,N){var Z=A!==null?A.key:null;if(typeof w=="string"&&w!==""||typeof w=="number"||typeof w=="bigint")return Z!==null?null:b(O,A,""+w,N);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case x:return w.key===Z?S(O,A,w,N):null;case M:return w.key===Z?D(O,A,w,N):null;case K:return Z=w._init,w=Z(w._payload),C(O,A,w,N)}if(Kt(w)||Ft(w))return Z!==null?null:_(O,A,w,N,null);if(typeof w.then=="function")return C(O,A,Jo(w),N);if(w.$$typeof===L)return C(O,A,Uo(O,w),N);Wo(O,w)}return null}function k(O,A,w,N,Z){if(typeof N=="string"&&N!==""||typeof N=="number"||typeof N=="bigint")return O=O.get(w)||null,b(A,O,""+N,Z);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case x:return O=O.get(N.key===null?w:N.key)||null,S(A,O,N,Z);case M:return O=O.get(N.key===null?w:N.key)||null,D(A,O,N,Z);case K:var ht=N._init;return N=ht(N._payload),k(O,A,w,N,Z)}if(Kt(N)||Ft(N))return O=O.get(w)||null,_(A,O,N,Z,null);if(typeof N.then=="function")return k(O,A,w,Jo(N),Z);if(N.$$typeof===L)return k(O,A,w,Uo(A,N),Z);Wo(A,N)}return null}function rt(O,A,w,N){for(var Z=null,ht=null,J=A,it=A=0,te=null;J!==null&&it<w.length;it++){J.index>it?(te=J,J=null):te=J.sibling;var xt=C(O,J,w[it],N);if(xt===null){J===null&&(J=te);break}t&&J&&xt.alternate===null&&e(O,J),A=c(xt,A,it),ht===null?Z=xt:ht.sibling=xt,ht=xt,J=te}if(it===w.length)return a(O,J),St&&Sa(O,it),Z;if(J===null){for(;it<w.length;it++)J=P(O,w[it],N),J!==null&&(A=c(J,A,it),ht===null?Z=J:ht.sibling=J,ht=J);return St&&Sa(O,it),Z}for(J=r(J);it<w.length;it++)te=k(J,O,it,w[it],N),te!==null&&(t&&te.alternate!==null&&J.delete(te.key===null?it:te.key),A=c(te,A,it),ht===null?Z=te:ht.sibling=te,ht=te);return t&&J.forEach(function(ia){return e(O,ia)}),St&&Sa(O,it),Z}function at(O,A,w,N){if(w==null)throw Error(l(151));for(var Z=null,ht=null,J=A,it=A=0,te=null,xt=w.next();J!==null&&!xt.done;it++,xt=w.next()){J.index>it?(te=J,J=null):te=J.sibling;var ia=C(O,J,xt.value,N);if(ia===null){J===null&&(J=te);break}t&&J&&ia.alternate===null&&e(O,J),A=c(ia,A,it),ht===null?Z=ia:ht.sibling=ia,ht=ia,J=te}if(xt.done)return a(O,J),St&&Sa(O,it),Z;if(J===null){for(;!xt.done;it++,xt=w.next())xt=P(O,xt.value,N),xt!==null&&(A=c(xt,A,it),ht===null?Z=xt:ht.sibling=xt,ht=xt);return St&&Sa(O,it),Z}for(J=r(J);!xt.done;it++,xt=w.next())xt=k(J,O,it,xt.value,N),xt!==null&&(t&&xt.alternate!==null&&J.delete(xt.key===null?it:xt.key),A=c(xt,A,it),ht===null?Z=xt:ht.sibling=xt,ht=xt);return t&&J.forEach(function(Ix){return e(O,Ix)}),St&&Sa(O,it),Z}function wt(O,A,w,N){if(typeof w=="object"&&w!==null&&w.type===R&&w.key===null&&(w=w.props.children),typeof w=="object"&&w!==null){switch(w.$$typeof){case x:t:{for(var Z=w.key;A!==null;){if(A.key===Z){if(Z=w.type,Z===R){if(A.tag===7){a(O,A.sibling),N=s(A,w.props.children),N.return=O,O=N;break t}}else if(A.elementType===Z||typeof Z=="object"&&Z!==null&&Z.$$typeof===K&&Um(Z)===A.type){a(O,A.sibling),N=s(A,w.props),yr(N,w),N.return=O,O=N;break t}a(O,A);break}else e(O,A);A=A.sibling}w.type===R?(N=ya(w.props.children,O.mode,N,w.key),N.return=O,O=N):(N=jo(w.type,w.key,w.props,null,O.mode,N),yr(N,w),N.return=O,O=N)}return g(O);case M:t:{for(Z=w.key;A!==null;){if(A.key===Z)if(A.tag===4&&A.stateNode.containerInfo===w.containerInfo&&A.stateNode.implementation===w.implementation){a(O,A.sibling),N=s(A,w.children||[]),N.return=O,O=N;break t}else{a(O,A);break}else e(O,A);A=A.sibling}N=Ks(w,O.mode,N),N.return=O,O=N}return g(O);case K:return Z=w._init,w=Z(w._payload),wt(O,A,w,N)}if(Kt(w))return rt(O,A,w,N);if(Ft(w)){if(Z=Ft(w),typeof Z!="function")throw Error(l(150));return w=Z.call(w),at(O,A,w,N)}if(typeof w.then=="function")return wt(O,A,Jo(w),N);if(w.$$typeof===L)return wt(O,A,Uo(O,w),N);Wo(O,w)}return typeof w=="string"&&w!==""||typeof w=="number"||typeof w=="bigint"?(w=""+w,A!==null&&A.tag===6?(a(O,A.sibling),N=s(A,w),N.return=O,O=N):(a(O,A),N=Fs(w,O.mode,N),N.return=O,O=N),g(O)):a(O,A)}return function(O,A,w,N){try{br=0;var Z=wt(O,A,w,N);return fi=null,Z}catch(J){if(J===ur||J===Bo)throw J;var ht=Oe(29,J,null,O.mode);return ht.lanes=N,ht.return=O,ht}finally{}}}var di=Lm(!0),Bm=Lm(!1),Ue=B(null),en=null;function Yn(t){var e=t.alternate;X(Qt,Qt.current&1),X(Ue,t),en===null&&(e===null||li.current!==null||e.memoizedState!==null)&&(en=t)}function Hm(t){if(t.tag===22){if(X(Qt,Qt.current),X(Ue,t),en===null){var e=t.alternate;e!==null&&e.memoizedState!==null&&(en=t)}}else Gn()}function Gn(){X(Qt,Qt.current),X(Ue,Ue.current)}function Sn(t){F(Ue),en===t&&(en=null),F(Qt)}var Qt=B(0);function Io(t){for(var e=t;e!==null;){if(e.tag===13){var a=e.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||pc(a)))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}function wu(t,e,a,r){e=t.memoizedState,a=a(r,e),a=a==null?e:v({},e,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Mu={enqueueSetState:function(t,e,a){t=t._reactInternals;var r=De(),s=Bn(r);s.payload=e,a!=null&&(s.callback=a),e=Hn(t,s,r),e!==null&&(Ce(e,t,r),fr(e,t,r))},enqueueReplaceState:function(t,e,a){t=t._reactInternals;var r=De(),s=Bn(r);s.tag=1,s.payload=e,a!=null&&(s.callback=a),e=Hn(t,s,r),e!==null&&(Ce(e,t,r),fr(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var a=De(),r=Bn(a);r.tag=2,e!=null&&(r.callback=e),e=Hn(t,r,a),e!==null&&(Ce(e,t,a),fr(e,t,a))}};function qm(t,e,a,r,s,c,g){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,c,g):e.prototype&&e.prototype.isPureReactComponent?!er(a,r)||!er(s,c):!0}function Ym(t,e,a,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(a,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(a,r),e.state!==t&&Mu.enqueueReplaceState(e,e.state,null)}function Da(t,e){var a=e;if("ref"in e){a={};for(var r in e)r!=="ref"&&(a[r]=e[r])}if(t=t.defaultProps){a===e&&(a=v({},a));for(var s in t)a[s]===void 0&&(a[s]=t[s])}return a}var tl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function Gm(t){tl(t)}function Xm(t){console.error(t)}function Fm(t){tl(t)}function el(t,e){try{var a=t.onUncaughtError;a(e.value,{componentStack:e.stack})}catch(r){setTimeout(function(){throw r})}}function Km(t,e,a){try{var r=t.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(s){setTimeout(function(){throw s})}}function Du(t,e,a){return a=Bn(a),a.tag=3,a.payload={element:null},a.callback=function(){el(t,e)},a}function Zm(t){return t=Bn(t),t.tag=3,t}function Qm(t,e,a,r){var s=a.type.getDerivedStateFromError;if(typeof s=="function"){var c=r.value;t.payload=function(){return s(c)},t.callback=function(){Km(e,a,r)}}var g=a.stateNode;g!==null&&typeof g.componentDidCatch=="function"&&(t.callback=function(){Km(e,a,r),typeof s!="function"&&($n===null?$n=new Set([this]):$n.add(this));var b=r.stack;this.componentDidCatch(r.value,{componentStack:b!==null?b:""})})}function I2(t,e,a,r,s){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(e=a.alternate,e!==null&&or(e,a,s,!0),a=Ue.current,a!==null){switch(a.tag){case 13:return en===null?Wu():a.alternate===null&&Vt===0&&(Vt=3),a.flags&=-257,a.flags|=65536,a.lanes=s,r===au?a.flags|=16384:(e=a.updateQueue,e===null?a.updateQueue=new Set([r]):e.add(r),tc(t,r,s)),!1;case 22:return a.flags|=65536,r===au?a.flags|=16384:(e=a.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=e):(a=e.retryQueue,a===null?e.retryQueue=new Set([r]):a.add(r)),tc(t,r,s)),!1}throw Error(l(435,a.tag))}return tc(t,r,s),Wu(),!1}if(St)return e=Ue.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=s,r!==$s&&(t=Error(l(422),{cause:r}),rr(je(t,a)))):(r!==$s&&(e=Error(l(423),{cause:r}),rr(je(e,a))),t=t.current.alternate,t.flags|=65536,s&=-s,t.lanes|=s,r=je(r,a),s=Du(t.stateNode,r,s),ou(t,s),Vt!==4&&(Vt=2)),!1;var c=Error(l(520),{cause:r});if(c=je(c,a),wr===null?wr=[c]:wr.push(c),Vt!==4&&(Vt=2),e===null)return!0;r=je(r,a),a=e;do{switch(a.tag){case 3:return a.flags|=65536,t=s&-s,a.lanes|=t,t=Du(a.stateNode,r,t),ou(a,t),!1;case 1:if(e=a.type,c=a.stateNode,(a.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&($n===null||!$n.has(c))))return a.flags|=65536,s&=-s,a.lanes|=s,s=Zm(s),Qm(s,t,a,r),ou(a,s),!1}a=a.return}while(a!==null);return!1}var $m=Error(l(461)),Wt=!1;function ee(t,e,a,r){e.child=t===null?Bm(e,null,a,r):di(e,t.child,a,r)}function Jm(t,e,a,r,s){a=a.render;var c=e.ref;if("ref"in r){var g={};for(var b in r)b!=="ref"&&(g[b]=r[b])}else g=r;return Ea(e),r=fu(t,e,a,g,c,s),b=du(),t!==null&&!Wt?(hu(t,e,s),Tn(t,e,s)):(St&&b&&Zs(e),e.flags|=1,ee(t,e,r,s),e.child)}function Wm(t,e,a,r,s){if(t===null){var c=a.type;return typeof c=="function"&&!Xs(c)&&c.defaultProps===void 0&&a.compare===null?(e.tag=15,e.type=c,Im(t,e,c,r,s)):(t=jo(a.type,null,r,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(c=t.child,!Pu(t,s)){var g=c.memoizedProps;if(a=a.compare,a=a!==null?a:er,a(g,r)&&t.ref===e.ref)return Tn(t,e,s)}return e.flags|=1,t=pn(c,r),t.ref=e.ref,t.return=e,e.child=t}function Im(t,e,a,r,s){if(t!==null){var c=t.memoizedProps;if(er(c,r)&&t.ref===e.ref)if(Wt=!1,e.pendingProps=r=c,Pu(t,s))(t.flags&131072)!==0&&(Wt=!0);else return e.lanes=t.lanes,Tn(t,e,s)}return Cu(t,e,a,r,s)}function tp(t,e,a){var r=e.pendingProps,s=r.children,c=t!==null?t.memoizedState:null;if(r.mode==="hidden"){if((e.flags&128)!==0){if(r=c!==null?c.baseLanes|a:a,t!==null){for(s=e.child=t.child,c=0;s!==null;)c=c|s.lanes|s.childLanes,s=s.sibling;e.childLanes=c&~r}else e.childLanes=0,e.child=null;return ep(t,e,r,a)}if((a&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&Lo(e,c!==null?c.cachePool:null),c!==null?Ih(e,c):su(),Hm(e);else return e.lanes=e.childLanes=536870912,ep(t,e,c!==null?c.baseLanes|a:a,a)}else c!==null?(Lo(e,c.cachePool),Ih(e,c),Gn(),e.memoizedState=null):(t!==null&&Lo(e,null),su(),Gn());return ee(t,e,s,a),e.child}function ep(t,e,a,r){var s=nu();return s=s===null?null:{parent:Zt._currentValue,pool:s},e.memoizedState={baseLanes:a,cachePool:s},t!==null&&Lo(e,null),su(),Hm(e),t!==null&&or(t,e,r,!0),null}function nl(t,e){var a=e.ref;if(a===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(l(284));(t===null||t.ref!==a)&&(e.flags|=4194816)}}function Cu(t,e,a,r,s){return Ea(e),a=fu(t,e,a,r,void 0,s),r=du(),t!==null&&!Wt?(hu(t,e,s),Tn(t,e,s)):(St&&r&&Zs(e),e.flags|=1,ee(t,e,a,s),e.child)}function np(t,e,a,r,s,c){return Ea(e),e.updateQueue=null,a=em(e,r,a,s),tm(t),r=du(),t!==null&&!Wt?(hu(t,e,c),Tn(t,e,c)):(St&&r&&Zs(e),e.flags|=1,ee(t,e,a,c),e.child)}function ap(t,e,a,r,s){if(Ea(e),e.stateNode===null){var c=ni,g=a.contextType;typeof g=="object"&&g!==null&&(c=le(g)),c=new a(r,c),e.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,c.updater=Mu,e.stateNode=c,c._reactInternals=e,c=e.stateNode,c.props=r,c.state=e.memoizedState,c.refs={},iu(e),g=a.contextType,c.context=typeof g=="object"&&g!==null?le(g):ni,c.state=e.memoizedState,g=a.getDerivedStateFromProps,typeof g=="function"&&(wu(e,a,g,r),c.state=e.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(g=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),g!==c.state&&Mu.enqueueReplaceState(c,c.state,null),hr(e,r,c,s),dr(),c.state=e.memoizedState),typeof c.componentDidMount=="function"&&(e.flags|=4194308),r=!0}else if(t===null){c=e.stateNode;var b=e.memoizedProps,S=Da(a,b);c.props=S;var D=c.context,_=a.contextType;g=ni,typeof _=="object"&&_!==null&&(g=le(_));var P=a.getDerivedStateFromProps;_=typeof P=="function"||typeof c.getSnapshotBeforeUpdate=="function",b=e.pendingProps!==b,_||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(b||D!==g)&&Ym(e,c,r,g),Ln=!1;var C=e.memoizedState;c.state=C,hr(e,r,c,s),dr(),D=e.memoizedState,b||C!==D||Ln?(typeof P=="function"&&(wu(e,a,P,r),D=e.memoizedState),(S=Ln||qm(e,a,S,r,C,D,g))?(_||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(e.flags|=4194308)):(typeof c.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=D),c.props=r,c.state=D,c.context=g,r=S):(typeof c.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{c=e.stateNode,ru(t,e),g=e.memoizedProps,_=Da(a,g),c.props=_,P=e.pendingProps,C=c.context,D=a.contextType,S=ni,typeof D=="object"&&D!==null&&(S=le(D)),b=a.getDerivedStateFromProps,(D=typeof b=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(g!==P||C!==S)&&Ym(e,c,r,S),Ln=!1,C=e.memoizedState,c.state=C,hr(e,r,c,s),dr();var k=e.memoizedState;g!==P||C!==k||Ln||t!==null&&t.dependencies!==null&&Vo(t.dependencies)?(typeof b=="function"&&(wu(e,a,b,r),k=e.memoizedState),(_=Ln||qm(e,a,_,r,C,k,S)||t!==null&&t.dependencies!==null&&Vo(t.dependencies))?(D||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(r,k,S),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(r,k,S)),typeof c.componentDidUpdate=="function"&&(e.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof c.componentDidUpdate!="function"||g===t.memoizedProps&&C===t.memoizedState||(e.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||g===t.memoizedProps&&C===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=k),c.props=r,c.state=k,c.context=S,r=_):(typeof c.componentDidUpdate!="function"||g===t.memoizedProps&&C===t.memoizedState||(e.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||g===t.memoizedProps&&C===t.memoizedState||(e.flags|=1024),r=!1)}return c=r,nl(t,e),r=(e.flags&128)!==0,c||r?(c=e.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:c.render(),e.flags|=1,t!==null&&r?(e.child=di(e,t.child,null,s),e.child=di(e,null,a,s)):ee(t,e,a,s),e.memoizedState=c.state,t=e.child):t=Tn(t,e,s),t}function ip(t,e,a,r){return ir(),e.flags|=256,ee(t,e,a,r),e.child}var ku={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ru(t){return{baseLanes:t,cachePool:Xh()}}function _u(t,e,a){return t=t!==null?t.childLanes&~a:0,e&&(t|=Le),t}function rp(t,e,a){var r=e.pendingProps,s=!1,c=(e.flags&128)!==0,g;if((g=c)||(g=t!==null&&t.memoizedState===null?!1:(Qt.current&2)!==0),g&&(s=!0,e.flags&=-129),g=(e.flags&32)!==0,e.flags&=-33,t===null){if(St){if(s?Yn(e):Gn(),St){var b=Pt,S;if(S=b){t:{for(S=b,b=tn;S.nodeType!==8;){if(!b){b=null;break t}if(S=Fe(S.nextSibling),S===null){b=null;break t}}b=S}b!==null?(e.memoizedState={dehydrated:b,treeContext:xa!==null?{id:gn,overflow:vn}:null,retryLane:536870912,hydrationErrors:null},S=Oe(18,null,null,0),S.stateNode=b,S.return=e,e.child=S,fe=e,Pt=null,S=!0):S=!1}S||Aa(e)}if(b=e.memoizedState,b!==null&&(b=b.dehydrated,b!==null))return pc(b)?e.lanes=32:e.lanes=536870912,null;Sn(e)}return b=r.children,r=r.fallback,s?(Gn(),s=e.mode,b=al({mode:"hidden",children:b},s),r=ya(r,s,a,null),b.return=e,r.return=e,b.sibling=r,e.child=b,s=e.child,s.memoizedState=Ru(a),s.childLanes=_u(t,g,a),e.memoizedState=ku,r):(Yn(e),zu(e,b))}if(S=t.memoizedState,S!==null&&(b=S.dehydrated,b!==null)){if(c)e.flags&256?(Yn(e),e.flags&=-257,e=ju(t,e,a)):e.memoizedState!==null?(Gn(),e.child=t.child,e.flags|=128,e=null):(Gn(),s=r.fallback,b=e.mode,r=al({mode:"visible",children:r.children},b),s=ya(s,b,a,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,di(e,t.child,null,a),r=e.child,r.memoizedState=Ru(a),r.childLanes=_u(t,g,a),e.memoizedState=ku,e=s);else if(Yn(e),pc(b)){if(g=b.nextSibling&&b.nextSibling.dataset,g)var D=g.dgst;g=D,r=Error(l(419)),r.stack="",r.digest=g,rr({value:r,source:null,stack:null}),e=ju(t,e,a)}else if(Wt||or(t,e,a,!1),g=(a&t.childLanes)!==0,Wt||g){if(g=Dt,g!==null&&(r=a&-a,r=(r&42)!==0?1:gs(r),r=(r&(g.suspendedLanes|a))!==0?0:r,r!==0&&r!==S.retryLane))throw S.retryLane=r,ei(t,r),Ce(g,t,r),$m;b.data==="$?"||Wu(),e=ju(t,e,a)}else b.data==="$?"?(e.flags|=192,e.child=t.child,e=null):(t=S.treeContext,Pt=Fe(b.nextSibling),fe=e,St=!0,Ta=null,tn=!1,t!==null&&(Pe[Ve++]=gn,Pe[Ve++]=vn,Pe[Ve++]=xa,gn=t.id,vn=t.overflow,xa=e),e=zu(e,r.children),e.flags|=4096);return e}return s?(Gn(),s=r.fallback,b=e.mode,S=t.child,D=S.sibling,r=pn(S,{mode:"hidden",children:r.children}),r.subtreeFlags=S.subtreeFlags&65011712,D!==null?s=pn(D,s):(s=ya(s,b,a,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,b=t.child.memoizedState,b===null?b=Ru(a):(S=b.cachePool,S!==null?(D=Zt._currentValue,S=S.parent!==D?{parent:D,pool:D}:S):S=Xh(),b={baseLanes:b.baseLanes|a,cachePool:S}),s.memoizedState=b,s.childLanes=_u(t,g,a),e.memoizedState=ku,r):(Yn(e),a=t.child,t=a.sibling,a=pn(a,{mode:"visible",children:r.children}),a.return=e,a.sibling=null,t!==null&&(g=e.deletions,g===null?(e.deletions=[t],e.flags|=16):g.push(t)),e.child=a,e.memoizedState=null,a)}function zu(t,e){return e=al({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function al(t,e){return t=Oe(22,t,null,e),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function ju(t,e,a){return di(e,t.child,null,a),t=zu(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function op(t,e,a){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Ws(t.return,e,a)}function Nu(t,e,a,r,s){var c=t.memoizedState;c===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:s}:(c.isBackwards=e,c.rendering=null,c.renderingStartTime=0,c.last=r,c.tail=a,c.tailMode=s)}function lp(t,e,a){var r=e.pendingProps,s=r.revealOrder,c=r.tail;if(ee(t,e,r.children,a),r=Qt.current,(r&2)!==0)r=r&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&op(t,a,e);else if(t.tag===19)op(t,a,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}switch(X(Qt,r),s){case"forwards":for(a=e.child,s=null;a!==null;)t=a.alternate,t!==null&&Io(t)===null&&(s=a),a=a.sibling;a=s,a===null?(s=e.child,e.child=null):(s=a.sibling,a.sibling=null),Nu(e,!1,s,a,c);break;case"backwards":for(a=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&Io(t)===null){e.child=s;break}t=s.sibling,s.sibling=a,a=s,s=t}Nu(e,!0,a,null,c);break;case"together":Nu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Tn(t,e,a){if(t!==null&&(e.dependencies=t.dependencies),Qn|=e.lanes,(a&e.childLanes)===0)if(t!==null){if(or(t,e,a,!1),(a&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(l(153));if(e.child!==null){for(t=e.child,a=pn(t,t.pendingProps),e.child=a,a.return=e;t.sibling!==null;)t=t.sibling,a=a.sibling=pn(t,t.pendingProps),a.return=e;a.sibling=null}return e.child}function Pu(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&Vo(t)))}function tx(t,e,a){switch(e.tag){case 3:kt(e,e.stateNode.containerInfo),Un(e,Zt,t.memoizedState.cache),ir();break;case 27:case 5:fs(e);break;case 4:kt(e,e.stateNode.containerInfo);break;case 10:Un(e,e.type,e.memoizedProps.value);break;case 13:var r=e.memoizedState;if(r!==null)return r.dehydrated!==null?(Yn(e),e.flags|=128,null):(a&e.child.childLanes)!==0?rp(t,e,a):(Yn(e),t=Tn(t,e,a),t!==null?t.sibling:null);Yn(e);break;case 19:var s=(t.flags&128)!==0;if(r=(a&e.childLanes)!==0,r||(or(t,e,a,!1),r=(a&e.childLanes)!==0),s){if(r)return lp(t,e,a);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),X(Qt,Qt.current),r)break;return null;case 22:case 23:return e.lanes=0,tp(t,e,a);case 24:Un(e,Zt,t.memoizedState.cache)}return Tn(t,e,a)}function sp(t,e,a){if(t!==null)if(t.memoizedProps!==e.pendingProps)Wt=!0;else{if(!Pu(t,a)&&(e.flags&128)===0)return Wt=!1,tx(t,e,a);Wt=(t.flags&131072)!==0}else Wt=!1,St&&(e.flags&1048576)!==0&&Uh(e,Po,e.index);switch(e.lanes=0,e.tag){case 16:t:{t=e.pendingProps;var r=e.elementType,s=r._init;if(r=s(r._payload),e.type=r,typeof r=="function")Xs(r)?(t=Da(r,t),e.tag=1,e=ap(null,e,r,t,a)):(e.tag=0,e=Cu(null,e,r,t,a));else{if(r!=null){if(s=r.$$typeof,s===Q){e.tag=11,e=Jm(null,e,r,t,a);break t}else if(s===lt){e.tag=14,e=Wm(null,e,r,t,a);break t}}throw e=We(r)||r,Error(l(306,e,""))}}return e;case 0:return Cu(t,e,e.type,e.pendingProps,a);case 1:return r=e.type,s=Da(r,e.pendingProps),ap(t,e,r,s,a);case 3:t:{if(kt(e,e.stateNode.containerInfo),t===null)throw Error(l(387));r=e.pendingProps;var c=e.memoizedState;s=c.element,ru(t,e),hr(e,r,null,a);var g=e.memoizedState;if(r=g.cache,Un(e,Zt,r),r!==c.cache&&Is(e,[Zt],a,!0),dr(),r=g.element,c.isDehydrated)if(c={element:r,isDehydrated:!1,cache:g.cache},e.updateQueue.baseState=c,e.memoizedState=c,e.flags&256){e=ip(t,e,r,a);break t}else if(r!==s){s=je(Error(l(424)),e),rr(s),e=ip(t,e,r,a);break t}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Pt=Fe(t.firstChild),fe=e,St=!0,Ta=null,tn=!0,a=Bm(e,null,r,a),e.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(ir(),r===s){e=Tn(t,e,a);break t}ee(t,e,r,a)}e=e.child}return e;case 26:return nl(t,e),t===null?(a=d0(e.type,null,e.pendingProps,null))?e.memoizedState=a:St||(a=e.type,t=e.pendingProps,r=vl(st.current).createElement(a),r[oe]=e,r[me]=t,ae(r,a,t),Jt(r),e.stateNode=r):e.memoizedState=d0(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return fs(e),t===null&&St&&(r=e.stateNode=u0(e.type,e.pendingProps,st.current),fe=e,tn=!0,s=Pt,In(e.type)?(gc=s,Pt=Fe(r.firstChild)):Pt=s),ee(t,e,e.pendingProps.children,a),nl(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&St&&((s=r=Pt)&&(r=Dx(r,e.type,e.pendingProps,tn),r!==null?(e.stateNode=r,fe=e,Pt=Fe(r.firstChild),tn=!1,s=!0):s=!1),s||Aa(e)),fs(e),s=e.type,c=e.pendingProps,g=t!==null?t.memoizedProps:null,r=c.children,dc(s,c)?r=null:g!==null&&dc(s,g)&&(e.flags|=32),e.memoizedState!==null&&(s=fu(t,e,F2,null,null,a),Nr._currentValue=s),nl(t,e),ee(t,e,r,a),e.child;case 6:return t===null&&St&&((t=a=Pt)&&(a=Cx(a,e.pendingProps,tn),a!==null?(e.stateNode=a,fe=e,Pt=null,t=!0):t=!1),t||Aa(e)),null;case 13:return rp(t,e,a);case 4:return kt(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=di(e,null,r,a):ee(t,e,r,a),e.child;case 11:return Jm(t,e,e.type,e.pendingProps,a);case 7:return ee(t,e,e.pendingProps,a),e.child;case 8:return ee(t,e,e.pendingProps.children,a),e.child;case 12:return ee(t,e,e.pendingProps.children,a),e.child;case 10:return r=e.pendingProps,Un(e,e.type,r.value),ee(t,e,r.children,a),e.child;case 9:return s=e.type._context,r=e.pendingProps.children,Ea(e),s=le(s),r=r(s),e.flags|=1,ee(t,e,r,a),e.child;case 14:return Wm(t,e,e.type,e.pendingProps,a);case 15:return Im(t,e,e.type,e.pendingProps,a);case 19:return lp(t,e,a);case 31:return r=e.pendingProps,a=e.mode,r={mode:r.mode,children:r.children},t===null?(a=al(r,a),a.ref=e.ref,e.child=a,a.return=e,e=a):(a=pn(t.child,r),a.ref=e.ref,e.child=a,a.return=e,e=a),e;case 22:return tp(t,e,a);case 24:return Ea(e),r=le(Zt),t===null?(s=nu(),s===null&&(s=Dt,c=tu(),s.pooledCache=c,c.refCount++,c!==null&&(s.pooledCacheLanes|=a),s=c),e.memoizedState={parent:r,cache:s},iu(e),Un(e,Zt,s)):((t.lanes&a)!==0&&(ru(t,e),hr(e,null,null,a),dr()),s=t.memoizedState,c=e.memoizedState,s.parent!==r?(s={parent:r,cache:r},e.memoizedState=s,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=s),Un(e,Zt,r)):(r=c.cache,Un(e,Zt,r),r!==s.cache&&Is(e,[Zt],a,!0))),ee(t,e,e.pendingProps.children,a),e.child;case 29:throw e.pendingProps}throw Error(l(156,e.tag))}function An(t){t.flags|=4}function up(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!v0(e)){if(e=Ue.current,e!==null&&((bt&4194048)===bt?en!==null:(bt&62914560)!==bt&&(bt&536870912)===0||e!==en))throw cr=au,Fh;t.flags|=8192}}function il(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?Hd():536870912,t.lanes|=e,gi|=e)}function xr(t,e){if(!St)switch(t.tailMode){case"hidden":e=t.tail;for(var a=null;e!==null;)e.alternate!==null&&(a=e),e=e.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function jt(t){var e=t.alternate!==null&&t.alternate.child===t.child,a=0,r=0;if(e)for(var s=t.child;s!==null;)a|=s.lanes|s.childLanes,r|=s.subtreeFlags&65011712,r|=s.flags&65011712,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)a|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=r,t.childLanes=a,e}function ex(t,e,a){var r=e.pendingProps;switch(Qs(e),e.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return jt(e),null;case 1:return jt(e),null;case 3:return a=e.stateNode,r=null,t!==null&&(r=t.memoizedState.cache),e.memoizedState.cache!==r&&(e.flags|=2048),yn(Zt),jn(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(ar(e)?An(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Hh())),jt(e),null;case 26:return a=e.memoizedState,t===null?(An(e),a!==null?(jt(e),up(e,a)):(jt(e),e.flags&=-16777217)):a?a!==t.memoizedState?(An(e),jt(e),up(e,a)):(jt(e),e.flags&=-16777217):(t.memoizedProps!==r&&An(e),jt(e),e.flags&=-16777217),null;case 27:po(e),a=st.current;var s=e.type;if(t!==null&&e.stateNode!=null)t.memoizedProps!==r&&An(e);else{if(!r){if(e.stateNode===null)throw Error(l(166));return jt(e),null}t=nt.current,ar(e)?Lh(e):(t=u0(s,r,a),e.stateNode=t,An(e))}return jt(e),null;case 5:if(po(e),a=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==r&&An(e);else{if(!r){if(e.stateNode===null)throw Error(l(166));return jt(e),null}if(t=nt.current,ar(e))Lh(e);else{switch(s=vl(st.current),t){case 1:t=s.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:t=s.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":t=s.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":t=s.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof r.is=="string"?s.createElement("select",{is:r.is}):s.createElement("select"),r.multiple?t.multiple=!0:r.size&&(t.size=r.size);break;default:t=typeof r.is=="string"?s.createElement(a,{is:r.is}):s.createElement(a)}}t[oe]=e,t[me]=r;t:for(s=e.child;s!==null;){if(s.tag===5||s.tag===6)t.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===e)break t;for(;s.sibling===null;){if(s.return===null||s.return===e)break t;s=s.return}s.sibling.return=s.return,s=s.sibling}e.stateNode=t;t:switch(ae(t,a,r),a){case"button":case"input":case"select":case"textarea":t=!!r.autoFocus;break t;case"img":t=!0;break t;default:t=!1}t&&An(e)}}return jt(e),e.flags&=-16777217,null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==r&&An(e);else{if(typeof r!="string"&&e.stateNode===null)throw Error(l(166));if(t=st.current,ar(e)){if(t=e.stateNode,a=e.memoizedProps,r=null,s=fe,s!==null)switch(s.tag){case 27:case 5:r=s.memoizedProps}t[oe]=e,t=!!(t.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||n0(t.nodeValue,a)),t||Aa(e)}else t=vl(t).createTextNode(r),t[oe]=e,e.stateNode=t}return jt(e),null;case 13:if(r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(s=ar(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(l(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(l(317));s[oe]=e}else ir(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;jt(e),s=!1}else s=Hh(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=s),s=!0;if(!s)return e.flags&256?(Sn(e),e):(Sn(e),null)}if(Sn(e),(e.flags&128)!==0)return e.lanes=a,e;if(a=r!==null,t=t!==null&&t.memoizedState!==null,a){r=e.child,s=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(s=r.alternate.memoizedState.cachePool.pool);var c=null;r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(c=r.memoizedState.cachePool.pool),c!==s&&(r.flags|=2048)}return a!==t&&a&&(e.child.flags|=8192),il(e,e.updateQueue),jt(e),null;case 4:return jn(),t===null&&lc(e.stateNode.containerInfo),jt(e),null;case 10:return yn(e.type),jt(e),null;case 19:if(F(Qt),s=e.memoizedState,s===null)return jt(e),null;if(r=(e.flags&128)!==0,c=s.rendering,c===null)if(r)xr(s,!1);else{if(Vt!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(c=Io(t),c!==null){for(e.flags|=128,xr(s,!1),t=c.updateQueue,e.updateQueue=t,il(e,t),e.subtreeFlags=0,t=a,a=e.child;a!==null;)Vh(a,t),a=a.sibling;return X(Qt,Qt.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ie()>ll&&(e.flags|=128,r=!0,xr(s,!1),e.lanes=4194304)}else{if(!r)if(t=Io(c),t!==null){if(e.flags|=128,r=!0,t=t.updateQueue,e.updateQueue=t,il(e,t),xr(s,!0),s.tail===null&&s.tailMode==="hidden"&&!c.alternate&&!St)return jt(e),null}else 2*Ie()-s.renderingStartTime>ll&&a!==536870912&&(e.flags|=128,r=!0,xr(s,!1),e.lanes=4194304);s.isBackwards?(c.sibling=e.child,e.child=c):(t=s.last,t!==null?t.sibling=c:e.child=c,s.last=c)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ie(),e.sibling=null,t=Qt.current,X(Qt,r?t&1|2:t&1),e):(jt(e),null);case 22:case 23:return Sn(e),uu(),r=e.memoizedState!==null,t!==null?t.memoizedState!==null!==r&&(e.flags|=8192):r&&(e.flags|=8192),r?(a&536870912)!==0&&(e.flags&128)===0&&(jt(e),e.subtreeFlags&6&&(e.flags|=8192)):jt(e),a=e.updateQueue,a!==null&&il(e,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),r=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),r!==a&&(e.flags|=2048),t!==null&&F(wa),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),e.memoizedState.cache!==a&&(e.flags|=2048),yn(Zt),jt(e),null;case 25:return null;case 30:return null}throw Error(l(156,e.tag))}function nx(t,e){switch(Qs(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return yn(Zt),jn(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return po(e),null;case 13:if(Sn(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(l(340));ir()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return F(Qt),null;case 4:return jn(),null;case 10:return yn(e.type),null;case 22:case 23:return Sn(e),uu(),t!==null&&F(wa),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return yn(Zt),null;case 25:return null;default:return null}}function cp(t,e){switch(Qs(e),e.tag){case 3:yn(Zt),jn();break;case 26:case 27:case 5:po(e);break;case 4:jn();break;case 13:Sn(e);break;case 19:F(Qt);break;case 10:yn(e.type);break;case 22:case 23:Sn(e),uu(),t!==null&&F(wa);break;case 24:yn(Zt)}}function Sr(t,e){try{var a=e.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var s=r.next;a=s;do{if((a.tag&t)===t){r=void 0;var c=a.create,g=a.inst;r=c(),g.destroy=r}a=a.next}while(a!==s)}}catch(b){Mt(e,e.return,b)}}function Xn(t,e,a){try{var r=e.updateQueue,s=r!==null?r.lastEffect:null;if(s!==null){var c=s.next;r=c;do{if((r.tag&t)===t){var g=r.inst,b=g.destroy;if(b!==void 0){g.destroy=void 0,s=e;var S=a,D=b;try{D()}catch(_){Mt(s,S,_)}}}r=r.next}while(r!==c)}}catch(_){Mt(e,e.return,_)}}function fp(t){var e=t.updateQueue;if(e!==null){var a=t.stateNode;try{Wh(e,a)}catch(r){Mt(t,t.return,r)}}}function dp(t,e,a){a.props=Da(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(r){Mt(t,e,r)}}function Tr(t,e){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var r=t.stateNode;break;case 30:r=t.stateNode;break;default:r=t.stateNode}typeof a=="function"?t.refCleanup=a(r):a.current=r}}catch(s){Mt(t,e,s)}}function nn(t,e){var a=t.ref,r=t.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(s){Mt(t,e,s)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(s){Mt(t,e,s)}else a.current=null}function hp(t){var e=t.type,a=t.memoizedProps,r=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break t;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(s){Mt(t,t.return,s)}}function Vu(t,e,a){try{var r=t.stateNode;Ax(r,t.type,a,e),r[me]=e}catch(s){Mt(t,t.return,s)}}function mp(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&In(t.type)||t.tag===4}function Uu(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||mp(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&In(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Lu(t,e,a){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,e):(e=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,e.appendChild(t),a=a._reactRootContainer,a!=null||e.onclick!==null||(e.onclick=gl));else if(r!==4&&(r===27&&In(t.type)&&(a=t.stateNode,e=null),t=t.child,t!==null))for(Lu(t,e,a),t=t.sibling;t!==null;)Lu(t,e,a),t=t.sibling}function rl(t,e,a){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?a.insertBefore(t,e):a.appendChild(t);else if(r!==4&&(r===27&&In(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(rl(t,e,a),t=t.sibling;t!==null;)rl(t,e,a),t=t.sibling}function pp(t){var e=t.stateNode,a=t.memoizedProps;try{for(var r=t.type,s=e.attributes;s.length;)e.removeAttributeNode(s[0]);ae(e,r,a),e[oe]=t,e[me]=a}catch(c){Mt(t,t.return,c)}}var On=!1,Bt=!1,Bu=!1,gp=typeof WeakSet=="function"?WeakSet:Set,It=null;function ax(t,e){if(t=t.containerInfo,cc=Al,t=Mh(t),Us(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var r=a.getSelection&&a.getSelection();if(r&&r.rangeCount!==0){a=r.anchorNode;var s=r.anchorOffset,c=r.focusNode;r=r.focusOffset;try{a.nodeType,c.nodeType}catch{a=null;break t}var g=0,b=-1,S=-1,D=0,_=0,P=t,C=null;e:for(;;){for(var k;P!==a||s!==0&&P.nodeType!==3||(b=g+s),P!==c||r!==0&&P.nodeType!==3||(S=g+r),P.nodeType===3&&(g+=P.nodeValue.length),(k=P.firstChild)!==null;)C=P,P=k;for(;;){if(P===t)break e;if(C===a&&++D===s&&(b=g),C===c&&++_===r&&(S=g),(k=P.nextSibling)!==null)break;P=C,C=P.parentNode}P=k}a=b===-1||S===-1?null:{start:b,end:S}}else a=null}a=a||{start:0,end:0}}else a=null;for(fc={focusedElem:t,selectionRange:a},Al=!1,It=e;It!==null;)if(e=It,t=e.child,(e.subtreeFlags&1024)!==0&&t!==null)t.return=e,It=t;else for(;It!==null;){switch(e=It,c=e.alternate,t=e.flags,e.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&c!==null){t=void 0,a=e,s=c.memoizedProps,c=c.memoizedState,r=a.stateNode;try{var rt=Da(a.type,s,a.elementType===a.type);t=r.getSnapshotBeforeUpdate(rt,c),r.__reactInternalSnapshotBeforeUpdate=t}catch(at){Mt(a,a.return,at)}}break;case 3:if((t&1024)!==0){if(t=e.stateNode.containerInfo,a=t.nodeType,a===9)mc(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":mc(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(l(163))}if(t=e.sibling,t!==null){t.return=e.return,It=t;break}It=e.return}}function vp(t,e,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:Fn(t,a),r&4&&Sr(5,a);break;case 1:if(Fn(t,a),r&4)if(t=a.stateNode,e===null)try{t.componentDidMount()}catch(g){Mt(a,a.return,g)}else{var s=Da(a.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(s,e,t.__reactInternalSnapshotBeforeUpdate)}catch(g){Mt(a,a.return,g)}}r&64&&fp(a),r&512&&Tr(a,a.return);break;case 3:if(Fn(t,a),r&64&&(t=a.updateQueue,t!==null)){if(e=null,a.child!==null)switch(a.child.tag){case 27:case 5:e=a.child.stateNode;break;case 1:e=a.child.stateNode}try{Wh(t,e)}catch(g){Mt(a,a.return,g)}}break;case 27:e===null&&r&4&&pp(a);case 26:case 5:Fn(t,a),e===null&&r&4&&hp(a),r&512&&Tr(a,a.return);break;case 12:Fn(t,a);break;case 13:Fn(t,a),r&4&&xp(t,a),r&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=dx.bind(null,a),kx(t,a))));break;case 22:if(r=a.memoizedState!==null||On,!r){e=e!==null&&e.memoizedState!==null||Bt,s=On;var c=Bt;On=r,(Bt=e)&&!c?Kn(t,a,(a.subtreeFlags&8772)!==0):Fn(t,a),On=s,Bt=c}break;case 30:break;default:Fn(t,a)}}function bp(t){var e=t.alternate;e!==null&&(t.alternate=null,bp(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&ys(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Rt=null,ve=!1;function En(t,e,a){for(a=a.child;a!==null;)yp(t,e,a),a=a.sibling}function yp(t,e,a){if(Se&&typeof Se.onCommitFiberUnmount=="function")try{Se.onCommitFiberUnmount(Yi,a)}catch{}switch(a.tag){case 26:Bt||nn(a,e),En(t,e,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Bt||nn(a,e);var r=Rt,s=ve;In(a.type)&&(Rt=a.stateNode,ve=!1),En(t,e,a),Rr(a.stateNode),Rt=r,ve=s;break;case 5:Bt||nn(a,e);case 6:if(r=Rt,s=ve,Rt=null,En(t,e,a),Rt=r,ve=s,Rt!==null)if(ve)try{(Rt.nodeType===9?Rt.body:Rt.nodeName==="HTML"?Rt.ownerDocument.body:Rt).removeChild(a.stateNode)}catch(c){Mt(a,e,c)}else try{Rt.removeChild(a.stateNode)}catch(c){Mt(a,e,c)}break;case 18:Rt!==null&&(ve?(t=Rt,l0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Lr(t)):l0(Rt,a.stateNode));break;case 4:r=Rt,s=ve,Rt=a.stateNode.containerInfo,ve=!0,En(t,e,a),Rt=r,ve=s;break;case 0:case 11:case 14:case 15:Bt||Xn(2,a,e),Bt||Xn(4,a,e),En(t,e,a);break;case 1:Bt||(nn(a,e),r=a.stateNode,typeof r.componentWillUnmount=="function"&&dp(a,e,r)),En(t,e,a);break;case 21:En(t,e,a);break;case 22:Bt=(r=Bt)||a.memoizedState!==null,En(t,e,a),Bt=r;break;default:En(t,e,a)}}function xp(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Lr(t)}catch(a){Mt(e,e.return,a)}}function ix(t){switch(t.tag){case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new gp),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new gp),e;default:throw Error(l(435,t.tag))}}function Hu(t,e){var a=ix(t);e.forEach(function(r){var s=hx.bind(null,t,r);a.has(r)||(a.add(r),r.then(s,s))})}function Ee(t,e){var a=e.deletions;if(a!==null)for(var r=0;r<a.length;r++){var s=a[r],c=t,g=e,b=g;t:for(;b!==null;){switch(b.tag){case 27:if(In(b.type)){Rt=b.stateNode,ve=!1;break t}break;case 5:Rt=b.stateNode,ve=!1;break t;case 3:case 4:Rt=b.stateNode.containerInfo,ve=!0;break t}b=b.return}if(Rt===null)throw Error(l(160));yp(c,g,s),Rt=null,ve=!1,c=s.alternate,c!==null&&(c.return=null),s.return=null}if(e.subtreeFlags&13878)for(e=e.child;e!==null;)Sp(e,t),e=e.sibling}var Xe=null;function Sp(t,e){var a=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Ee(e,t),we(t),r&4&&(Xn(3,t,t.return),Sr(3,t),Xn(5,t,t.return));break;case 1:Ee(e,t),we(t),r&512&&(Bt||a===null||nn(a,a.return)),r&64&&On&&(t=t.updateQueue,t!==null&&(r=t.callbacks,r!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?r:a.concat(r))));break;case 26:var s=Xe;if(Ee(e,t),we(t),r&512&&(Bt||a===null||nn(a,a.return)),r&4){var c=a!==null?a.memoizedState:null;if(r=t.memoizedState,a===null)if(r===null)if(t.stateNode===null){t:{r=t.type,a=t.memoizedProps,s=s.ownerDocument||s;e:switch(r){case"title":c=s.getElementsByTagName("title")[0],(!c||c[Fi]||c[oe]||c.namespaceURI==="http://www.w3.org/2000/svg"||c.hasAttribute("itemprop"))&&(c=s.createElement(r),s.head.insertBefore(c,s.querySelector("head > title"))),ae(c,r,a),c[oe]=t,Jt(c),r=c;break t;case"link":var g=p0("link","href",s).get(r+(a.href||""));if(g){for(var b=0;b<g.length;b++)if(c=g[b],c.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&c.getAttribute("rel")===(a.rel==null?null:a.rel)&&c.getAttribute("title")===(a.title==null?null:a.title)&&c.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){g.splice(b,1);break e}}c=s.createElement(r),ae(c,r,a),s.head.appendChild(c);break;case"meta":if(g=p0("meta","content",s).get(r+(a.content||""))){for(b=0;b<g.length;b++)if(c=g[b],c.getAttribute("content")===(a.content==null?null:""+a.content)&&c.getAttribute("name")===(a.name==null?null:a.name)&&c.getAttribute("property")===(a.property==null?null:a.property)&&c.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&c.getAttribute("charset")===(a.charSet==null?null:a.charSet)){g.splice(b,1);break e}}c=s.createElement(r),ae(c,r,a),s.head.appendChild(c);break;default:throw Error(l(468,r))}c[oe]=t,Jt(c),r=c}t.stateNode=r}else g0(s,t.type,t.stateNode);else t.stateNode=m0(s,r,t.memoizedProps);else c!==r?(c===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):c.count--,r===null?g0(s,t.type,t.stateNode):m0(s,r,t.memoizedProps)):r===null&&t.stateNode!==null&&Vu(t,t.memoizedProps,a.memoizedProps)}break;case 27:Ee(e,t),we(t),r&512&&(Bt||a===null||nn(a,a.return)),a!==null&&r&4&&Vu(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Ee(e,t),we(t),r&512&&(Bt||a===null||nn(a,a.return)),t.flags&32){s=t.stateNode;try{Za(s,"")}catch(k){Mt(t,t.return,k)}}r&4&&t.stateNode!=null&&(s=t.memoizedProps,Vu(t,s,a!==null?a.memoizedProps:s)),r&1024&&(Bu=!0);break;case 6:if(Ee(e,t),we(t),r&4){if(t.stateNode===null)throw Error(l(162));r=t.memoizedProps,a=t.stateNode;try{a.nodeValue=r}catch(k){Mt(t,t.return,k)}}break;case 3:if(xl=null,s=Xe,Xe=bl(e.containerInfo),Ee(e,t),Xe=s,we(t),r&4&&a!==null&&a.memoizedState.isDehydrated)try{Lr(e.containerInfo)}catch(k){Mt(t,t.return,k)}Bu&&(Bu=!1,Tp(t));break;case 4:r=Xe,Xe=bl(t.stateNode.containerInfo),Ee(e,t),we(t),Xe=r;break;case 12:Ee(e,t),we(t);break;case 13:Ee(e,t),we(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Ku=Ie()),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,Hu(t,r)));break;case 22:s=t.memoizedState!==null;var S=a!==null&&a.memoizedState!==null,D=On,_=Bt;if(On=D||s,Bt=_||S,Ee(e,t),Bt=_,On=D,we(t),r&8192)t:for(e=t.stateNode,e._visibility=s?e._visibility&-2:e._visibility|1,s&&(a===null||S||On||Bt||Ca(t)),a=null,e=t;;){if(e.tag===5||e.tag===26){if(a===null){S=a=e;try{if(c=S.stateNode,s)g=c.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none";else{b=S.stateNode;var P=S.memoizedProps.style,C=P!=null&&P.hasOwnProperty("display")?P.display:null;b.style.display=C==null||typeof C=="boolean"?"":(""+C).trim()}}catch(k){Mt(S,S.return,k)}}}else if(e.tag===6){if(a===null){S=e;try{S.stateNode.nodeValue=s?"":S.memoizedProps}catch(k){Mt(S,S.return,k)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;a===e&&(a=null),e=e.return}a===e&&(a=null),e.sibling.return=e.return,e=e.sibling}r&4&&(r=t.updateQueue,r!==null&&(a=r.retryQueue,a!==null&&(r.retryQueue=null,Hu(t,a))));break;case 19:Ee(e,t),we(t),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,Hu(t,r)));break;case 30:break;case 21:break;default:Ee(e,t),we(t)}}function we(t){var e=t.flags;if(e&2){try{for(var a,r=t.return;r!==null;){if(mp(r)){a=r;break}r=r.return}if(a==null)throw Error(l(160));switch(a.tag){case 27:var s=a.stateNode,c=Uu(t);rl(t,c,s);break;case 5:var g=a.stateNode;a.flags&32&&(Za(g,""),a.flags&=-33);var b=Uu(t);rl(t,b,g);break;case 3:case 4:var S=a.stateNode.containerInfo,D=Uu(t);Lu(t,D,S);break;default:throw Error(l(161))}}catch(_){Mt(t,t.return,_)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Tp(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;Tp(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function Fn(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)vp(t,e.alternate,e),e=e.sibling}function Ca(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:Xn(4,e,e.return),Ca(e);break;case 1:nn(e,e.return);var a=e.stateNode;typeof a.componentWillUnmount=="function"&&dp(e,e.return,a),Ca(e);break;case 27:Rr(e.stateNode);case 26:case 5:nn(e,e.return),Ca(e);break;case 22:e.memoizedState===null&&Ca(e);break;case 30:Ca(e);break;default:Ca(e)}t=t.sibling}}function Kn(t,e,a){for(a=a&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var r=e.alternate,s=t,c=e,g=c.flags;switch(c.tag){case 0:case 11:case 15:Kn(s,c,a),Sr(4,c);break;case 1:if(Kn(s,c,a),r=c,s=r.stateNode,typeof s.componentDidMount=="function")try{s.componentDidMount()}catch(D){Mt(r,r.return,D)}if(r=c,s=r.updateQueue,s!==null){var b=r.stateNode;try{var S=s.shared.hiddenCallbacks;if(S!==null)for(s.shared.hiddenCallbacks=null,s=0;s<S.length;s++)Jh(S[s],b)}catch(D){Mt(r,r.return,D)}}a&&g&64&&fp(c),Tr(c,c.return);break;case 27:pp(c);case 26:case 5:Kn(s,c,a),a&&r===null&&g&4&&hp(c),Tr(c,c.return);break;case 12:Kn(s,c,a);break;case 13:Kn(s,c,a),a&&g&4&&xp(s,c);break;case 22:c.memoizedState===null&&Kn(s,c,a),Tr(c,c.return);break;case 30:break;default:Kn(s,c,a)}e=e.sibling}}function qu(t,e){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&lr(a))}function Yu(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&lr(t))}function an(t,e,a,r){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Ap(t,e,a,r),e=e.sibling}function Ap(t,e,a,r){var s=e.flags;switch(e.tag){case 0:case 11:case 15:an(t,e,a,r),s&2048&&Sr(9,e);break;case 1:an(t,e,a,r);break;case 3:an(t,e,a,r),s&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&lr(t)));break;case 12:if(s&2048){an(t,e,a,r),t=e.stateNode;try{var c=e.memoizedProps,g=c.id,b=c.onPostCommit;typeof b=="function"&&b(g,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(S){Mt(e,e.return,S)}}else an(t,e,a,r);break;case 13:an(t,e,a,r);break;case 23:break;case 22:c=e.stateNode,g=e.alternate,e.memoizedState!==null?c._visibility&2?an(t,e,a,r):Ar(t,e):c._visibility&2?an(t,e,a,r):(c._visibility|=2,hi(t,e,a,r,(e.subtreeFlags&10256)!==0)),s&2048&&qu(g,e);break;case 24:an(t,e,a,r),s&2048&&Yu(e.alternate,e);break;default:an(t,e,a,r)}}function hi(t,e,a,r,s){for(s=s&&(e.subtreeFlags&10256)!==0,e=e.child;e!==null;){var c=t,g=e,b=a,S=r,D=g.flags;switch(g.tag){case 0:case 11:case 15:hi(c,g,b,S,s),Sr(8,g);break;case 23:break;case 22:var _=g.stateNode;g.memoizedState!==null?_._visibility&2?hi(c,g,b,S,s):Ar(c,g):(_._visibility|=2,hi(c,g,b,S,s)),s&&D&2048&&qu(g.alternate,g);break;case 24:hi(c,g,b,S,s),s&&D&2048&&Yu(g.alternate,g);break;default:hi(c,g,b,S,s)}e=e.sibling}}function Ar(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var a=t,r=e,s=r.flags;switch(r.tag){case 22:Ar(a,r),s&2048&&qu(r.alternate,r);break;case 24:Ar(a,r),s&2048&&Yu(r.alternate,r);break;default:Ar(a,r)}e=e.sibling}}var Or=8192;function mi(t){if(t.subtreeFlags&Or)for(t=t.child;t!==null;)Op(t),t=t.sibling}function Op(t){switch(t.tag){case 26:mi(t),t.flags&Or&&t.memoizedState!==null&&Yx(Xe,t.memoizedState,t.memoizedProps);break;case 5:mi(t);break;case 3:case 4:var e=Xe;Xe=bl(t.stateNode.containerInfo),mi(t),Xe=e;break;case 22:t.memoizedState===null&&(e=t.alternate,e!==null&&e.memoizedState!==null?(e=Or,Or=16777216,mi(t),Or=e):mi(t));break;default:mi(t)}}function Ep(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function Er(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var a=0;a<e.length;a++){var r=e[a];It=r,Mp(r,t)}Ep(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)wp(t),t=t.sibling}function wp(t){switch(t.tag){case 0:case 11:case 15:Er(t),t.flags&2048&&Xn(9,t,t.return);break;case 3:Er(t);break;case 12:Er(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,ol(t)):Er(t);break;default:Er(t)}}function ol(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var a=0;a<e.length;a++){var r=e[a];It=r,Mp(r,t)}Ep(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:Xn(8,e,e.return),ol(e);break;case 22:a=e.stateNode,a._visibility&2&&(a._visibility&=-3,ol(e));break;default:ol(e)}t=t.sibling}}function Mp(t,e){for(;It!==null;){var a=It;switch(a.tag){case 0:case 11:case 15:Xn(8,a,e);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:lr(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,It=r;else t:for(a=t;It!==null;){r=It;var s=r.sibling,c=r.return;if(bp(r),r===a){It=null;break t}if(s!==null){s.return=c,It=s;break t}It=c}}}var rx={getCacheForType:function(t){var e=le(Zt),a=e.data.get(t);return a===void 0&&(a=t(),e.data.set(t,a)),a}},ox=typeof WeakMap=="function"?WeakMap:Map,Tt=0,Dt=null,mt=null,bt=0,At=0,Me=null,Zn=!1,pi=!1,Gu=!1,wn=0,Vt=0,Qn=0,ka=0,Xu=0,Le=0,gi=0,wr=null,be=null,Fu=!1,Ku=0,ll=1/0,sl=null,$n=null,ne=0,Jn=null,vi=null,bi=0,Zu=0,Qu=null,Dp=null,Mr=0,$u=null;function De(){if((Tt&2)!==0&&bt!==0)return bt&-bt;if(z.T!==null){var t=ri;return t!==0?t:ac()}return Gd()}function Cp(){Le===0&&(Le=(bt&536870912)===0||St?Bd():536870912);var t=Ue.current;return t!==null&&(t.flags|=32),Le}function Ce(t,e,a){(t===Dt&&(At===2||At===9)||t.cancelPendingCommit!==null)&&(yi(t,0),Wn(t,bt,Le,!1)),Xi(t,a),((Tt&2)===0||t!==Dt)&&(t===Dt&&((Tt&2)===0&&(ka|=a),Vt===4&&Wn(t,bt,Le,!1)),rn(t))}function kp(t,e,a){if((Tt&6)!==0)throw Error(l(327));var r=!a&&(e&124)===0&&(e&t.expiredLanes)===0||Gi(t,e),s=r?ux(t,e):Iu(t,e,!0),c=r;do{if(s===0){pi&&!r&&Wn(t,e,0,!1);break}else{if(a=t.current.alternate,c&&!lx(a)){s=Iu(t,e,!1),c=!1;continue}if(s===2){if(c=e,t.errorRecoveryDisabledLanes&c)var g=0;else g=t.pendingLanes&-536870913,g=g!==0?g:g&536870912?536870912:0;if(g!==0){e=g;t:{var b=t;s=wr;var S=b.current.memoizedState.isDehydrated;if(S&&(yi(b,g).flags|=256),g=Iu(b,g,!1),g!==2){if(Gu&&!S){b.errorRecoveryDisabledLanes|=c,ka|=c,s=4;break t}c=be,be=s,c!==null&&(be===null?be=c:be.push.apply(be,c))}s=g}if(c=!1,s!==2)continue}}if(s===1){yi(t,0),Wn(t,e,0,!0);break}t:{switch(r=t,c=s,c){case 0:case 1:throw Error(l(345));case 4:if((e&4194048)!==e)break;case 6:Wn(r,e,Le,!Zn);break t;case 2:be=null;break;case 3:case 5:break;default:throw Error(l(329))}if((e&62914560)===e&&(s=Ku+300-Ie(),10<s)){if(Wn(r,e,Le,!Zn),yo(r,0,!0)!==0)break t;r.timeoutHandle=r0(Rp.bind(null,r,a,be,sl,Fu,e,Le,ka,gi,Zn,c,2,-0,0),s);break t}Rp(r,a,be,sl,Fu,e,Le,ka,gi,Zn,c,0,-0,0)}}break}while(!0);rn(t)}function Rp(t,e,a,r,s,c,g,b,S,D,_,P,C,k){if(t.timeoutHandle=-1,P=e.subtreeFlags,(P&8192||(P&16785408)===16785408)&&(jr={stylesheets:null,count:0,unsuspend:qx},Op(e),P=Gx(),P!==null)){t.cancelPendingCommit=P(Up.bind(null,t,e,c,a,r,s,g,b,S,_,1,C,k)),Wn(t,c,g,!D);return}Up(t,e,c,a,r,s,g,b,S)}function lx(t){for(var e=t;;){var a=e.tag;if((a===0||a===11||a===15)&&e.flags&16384&&(a=e.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var s=a[r],c=s.getSnapshot;s=s.value;try{if(!Ae(c(),s))return!1}catch{return!1}}if(a=e.child,e.subtreeFlags&16384&&a!==null)a.return=e,e=a;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Wn(t,e,a,r){e&=~Xu,e&=~ka,t.suspendedLanes|=e,t.pingedLanes&=~e,r&&(t.warmLanes|=e),r=t.expirationTimes;for(var s=e;0<s;){var c=31-Te(s),g=1<<c;r[c]=-1,s&=~g}a!==0&&qd(t,a,e)}function ul(){return(Tt&6)===0?(Dr(0),!1):!0}function Ju(){if(mt!==null){if(At===0)var t=mt.return;else t=mt,bn=Oa=null,mu(t),fi=null,br=0,t=mt;for(;t!==null;)cp(t.alternate,t),t=t.return;mt=null}}function yi(t,e){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,Ex(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Ju(),Dt=t,mt=a=pn(t.current,null),bt=e,At=0,Me=null,Zn=!1,pi=Gi(t,e),Gu=!1,gi=Le=Xu=ka=Qn=Vt=0,be=wr=null,Fu=!1,(e&8)!==0&&(e|=e&32);var r=t.entangledLanes;if(r!==0)for(t=t.entanglements,r&=e;0<r;){var s=31-Te(r),c=1<<s;e|=t[s],r&=~c}return wn=e,Ro(),a}function _p(t,e){ft=null,z.H=$o,e===ur||e===Bo?(e=Qh(),At=3):e===Fh?(e=Qh(),At=4):At=e===$m?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,Me=e,mt===null&&(Vt=1,el(t,je(e,t.current)))}function zp(){var t=z.H;return z.H=$o,t===null?$o:t}function jp(){var t=z.A;return z.A=rx,t}function Wu(){Vt=4,Zn||(bt&4194048)!==bt&&Ue.current!==null||(pi=!0),(Qn&134217727)===0&&(ka&134217727)===0||Dt===null||Wn(Dt,bt,Le,!1)}function Iu(t,e,a){var r=Tt;Tt|=2;var s=zp(),c=jp();(Dt!==t||bt!==e)&&(sl=null,yi(t,e)),e=!1;var g=Vt;t:do try{if(At!==0&&mt!==null){var b=mt,S=Me;switch(At){case 8:Ju(),g=6;break t;case 3:case 2:case 9:case 6:Ue.current===null&&(e=!0);var D=At;if(At=0,Me=null,xi(t,b,S,D),a&&pi){g=0;break t}break;default:D=At,At=0,Me=null,xi(t,b,S,D)}}sx(),g=Vt;break}catch(_){_p(t,_)}while(!0);return e&&t.shellSuspendCounter++,bn=Oa=null,Tt=r,z.H=s,z.A=c,mt===null&&(Dt=null,bt=0,Ro()),g}function sx(){for(;mt!==null;)Np(mt)}function ux(t,e){var a=Tt;Tt|=2;var r=zp(),s=jp();Dt!==t||bt!==e?(sl=null,ll=Ie()+500,yi(t,e)):pi=Gi(t,e);t:do try{if(At!==0&&mt!==null){e=mt;var c=Me;e:switch(At){case 1:At=0,Me=null,xi(t,e,c,1);break;case 2:case 9:if(Kh(c)){At=0,Me=null,Pp(e);break}e=function(){At!==2&&At!==9||Dt!==t||(At=7),rn(t)},c.then(e,e);break t;case 3:At=7;break t;case 4:At=5;break t;case 7:Kh(c)?(At=0,Me=null,Pp(e)):(At=0,Me=null,xi(t,e,c,7));break;case 5:var g=null;switch(mt.tag){case 26:g=mt.memoizedState;case 5:case 27:var b=mt;if(!g||v0(g)){At=0,Me=null;var S=b.sibling;if(S!==null)mt=S;else{var D=b.return;D!==null?(mt=D,cl(D)):mt=null}break e}}At=0,Me=null,xi(t,e,c,5);break;case 6:At=0,Me=null,xi(t,e,c,6);break;case 8:Ju(),Vt=6;break t;default:throw Error(l(462))}}cx();break}catch(_){_p(t,_)}while(!0);return bn=Oa=null,z.H=r,z.A=s,Tt=a,mt!==null?0:(Dt=null,bt=0,Ro(),Vt)}function cx(){for(;mt!==null&&!_1();)Np(mt)}function Np(t){var e=sp(t.alternate,t,wn);t.memoizedProps=t.pendingProps,e===null?cl(t):mt=e}function Pp(t){var e=t,a=e.alternate;switch(e.tag){case 15:case 0:e=np(a,e,e.pendingProps,e.type,void 0,bt);break;case 11:e=np(a,e,e.pendingProps,e.type.render,e.ref,bt);break;case 5:mu(e);default:cp(a,e),e=mt=Vh(e,wn),e=sp(a,e,wn)}t.memoizedProps=t.pendingProps,e===null?cl(t):mt=e}function xi(t,e,a,r){bn=Oa=null,mu(e),fi=null,br=0;var s=e.return;try{if(I2(t,s,e,a,bt)){Vt=1,el(t,je(a,t.current)),mt=null;return}}catch(c){if(s!==null)throw mt=s,c;Vt=1,el(t,je(a,t.current)),mt=null;return}e.flags&32768?(St||r===1?t=!0:pi||(bt&536870912)!==0?t=!1:(Zn=t=!0,(r===2||r===9||r===3||r===6)&&(r=Ue.current,r!==null&&r.tag===13&&(r.flags|=16384))),Vp(e,t)):cl(e)}function cl(t){var e=t;do{if((e.flags&32768)!==0){Vp(e,Zn);return}t=e.return;var a=ex(e.alternate,e,wn);if(a!==null){mt=a;return}if(e=e.sibling,e!==null){mt=e;return}mt=e=t}while(e!==null);Vt===0&&(Vt=5)}function Vp(t,e){do{var a=nx(t.alternate,t);if(a!==null){a.flags&=32767,mt=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!e&&(t=t.sibling,t!==null)){mt=t;return}mt=t=a}while(t!==null);Vt=6,mt=null}function Up(t,e,a,r,s,c,g,b,S){t.cancelPendingCommit=null;do fl();while(ne!==0);if((Tt&6)!==0)throw Error(l(327));if(e!==null){if(e===t.current)throw Error(l(177));if(c=e.lanes|e.childLanes,c|=Ys,q1(t,a,c,g,b,S),t===Dt&&(mt=Dt=null,bt=0),vi=e,Jn=t,bi=a,Zu=c,Qu=s,Dp=r,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,mx(go,function(){return Yp(),null})):(t.callbackNode=null,t.callbackPriority=0),r=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||r){r=z.T,z.T=null,s=G.p,G.p=2,g=Tt,Tt|=4;try{ax(t,e,a)}finally{Tt=g,G.p=s,z.T=r}}ne=1,Lp(),Bp(),Hp()}}function Lp(){if(ne===1){ne=0;var t=Jn,e=vi,a=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||a){a=z.T,z.T=null;var r=G.p;G.p=2;var s=Tt;Tt|=4;try{Sp(e,t);var c=fc,g=Mh(t.containerInfo),b=c.focusedElem,S=c.selectionRange;if(g!==b&&b&&b.ownerDocument&&wh(b.ownerDocument.documentElement,b)){if(S!==null&&Us(b)){var D=S.start,_=S.end;if(_===void 0&&(_=D),"selectionStart"in b)b.selectionStart=D,b.selectionEnd=Math.min(_,b.value.length);else{var P=b.ownerDocument||document,C=P&&P.defaultView||window;if(C.getSelection){var k=C.getSelection(),rt=b.textContent.length,at=Math.min(S.start,rt),wt=S.end===void 0?at:Math.min(S.end,rt);!k.extend&&at>wt&&(g=wt,wt=at,at=g);var O=Eh(b,at),A=Eh(b,wt);if(O&&A&&(k.rangeCount!==1||k.anchorNode!==O.node||k.anchorOffset!==O.offset||k.focusNode!==A.node||k.focusOffset!==A.offset)){var w=P.createRange();w.setStart(O.node,O.offset),k.removeAllRanges(),at>wt?(k.addRange(w),k.extend(A.node,A.offset)):(w.setEnd(A.node,A.offset),k.addRange(w))}}}}for(P=[],k=b;k=k.parentNode;)k.nodeType===1&&P.push({element:k,left:k.scrollLeft,top:k.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<P.length;b++){var N=P[b];N.element.scrollLeft=N.left,N.element.scrollTop=N.top}}Al=!!cc,fc=cc=null}finally{Tt=s,G.p=r,z.T=a}}t.current=e,ne=2}}function Bp(){if(ne===2){ne=0;var t=Jn,e=vi,a=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||a){a=z.T,z.T=null;var r=G.p;G.p=2;var s=Tt;Tt|=4;try{vp(t,e.alternate,e)}finally{Tt=s,G.p=r,z.T=a}}ne=3}}function Hp(){if(ne===4||ne===3){ne=0,z1();var t=Jn,e=vi,a=bi,r=Dp;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?ne=5:(ne=0,vi=Jn=null,qp(t,t.pendingLanes));var s=t.pendingLanes;if(s===0&&($n=null),vs(a),e=e.stateNode,Se&&typeof Se.onCommitFiberRoot=="function")try{Se.onCommitFiberRoot(Yi,e,void 0,(e.current.flags&128)===128)}catch{}if(r!==null){e=z.T,s=G.p,G.p=2,z.T=null;try{for(var c=t.onRecoverableError,g=0;g<r.length;g++){var b=r[g];c(b.value,{componentStack:b.stack})}}finally{z.T=e,G.p=s}}(bi&3)!==0&&fl(),rn(t),s=t.pendingLanes,(a&4194090)!==0&&(s&42)!==0?t===$u?Mr++:(Mr=0,$u=t):Mr=0,Dr(0)}}function qp(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,lr(e)))}function fl(t){return Lp(),Bp(),Hp(),Yp()}function Yp(){if(ne!==5)return!1;var t=Jn,e=Zu;Zu=0;var a=vs(bi),r=z.T,s=G.p;try{G.p=32>a?32:a,z.T=null,a=Qu,Qu=null;var c=Jn,g=bi;if(ne=0,vi=Jn=null,bi=0,(Tt&6)!==0)throw Error(l(331));var b=Tt;if(Tt|=4,wp(c.current),Ap(c,c.current,g,a),Tt=b,Dr(0,!1),Se&&typeof Se.onPostCommitFiberRoot=="function")try{Se.onPostCommitFiberRoot(Yi,c)}catch{}return!0}finally{G.p=s,z.T=r,qp(t,e)}}function Gp(t,e,a){e=je(a,e),e=Du(t.stateNode,e,2),t=Hn(t,e,2),t!==null&&(Xi(t,2),rn(t))}function Mt(t,e,a){if(t.tag===3)Gp(t,t,a);else for(;e!==null;){if(e.tag===3){Gp(e,t,a);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&($n===null||!$n.has(r))){t=je(a,t),a=Zm(2),r=Hn(e,a,2),r!==null&&(Qm(a,r,e,t),Xi(r,2),rn(r));break}}e=e.return}}function tc(t,e,a){var r=t.pingCache;if(r===null){r=t.pingCache=new ox;var s=new Set;r.set(e,s)}else s=r.get(e),s===void 0&&(s=new Set,r.set(e,s));s.has(a)||(Gu=!0,s.add(a),t=fx.bind(null,t,e,a),e.then(t,t))}function fx(t,e,a){var r=t.pingCache;r!==null&&r.delete(e),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Dt===t&&(bt&a)===a&&(Vt===4||Vt===3&&(bt&62914560)===bt&&300>Ie()-Ku?(Tt&2)===0&&yi(t,0):Xu|=a,gi===bt&&(gi=0)),rn(t)}function Xp(t,e){e===0&&(e=Hd()),t=ei(t,e),t!==null&&(Xi(t,e),rn(t))}function dx(t){var e=t.memoizedState,a=0;e!==null&&(a=e.retryLane),Xp(t,a)}function hx(t,e){var a=0;switch(t.tag){case 13:var r=t.stateNode,s=t.memoizedState;s!==null&&(a=s.retryLane);break;case 19:r=t.stateNode;break;case 22:r=t.stateNode._retryCache;break;default:throw Error(l(314))}r!==null&&r.delete(e),Xp(t,a)}function mx(t,e){return hs(t,e)}var dl=null,Si=null,ec=!1,hl=!1,nc=!1,Ra=0;function rn(t){t!==Si&&t.next===null&&(Si===null?dl=Si=t:Si=Si.next=t),hl=!0,ec||(ec=!0,gx())}function Dr(t,e){if(!nc&&hl){nc=!0;do for(var a=!1,r=dl;r!==null;){if(t!==0){var s=r.pendingLanes;if(s===0)var c=0;else{var g=r.suspendedLanes,b=r.pingedLanes;c=(1<<31-Te(42|t)+1)-1,c&=s&~(g&~b),c=c&201326741?c&201326741|1:c?c|2:0}c!==0&&(a=!0,Qp(r,c))}else c=bt,c=yo(r,r===Dt?c:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(c&3)===0||Gi(r,c)||(a=!0,Qp(r,c));r=r.next}while(a);nc=!1}}function px(){Fp()}function Fp(){hl=ec=!1;var t=0;Ra!==0&&(Ox()&&(t=Ra),Ra=0);for(var e=Ie(),a=null,r=dl;r!==null;){var s=r.next,c=Kp(r,e);c===0?(r.next=null,a===null?dl=s:a.next=s,s===null&&(Si=a)):(a=r,(t!==0||(c&3)!==0)&&(hl=!0)),r=s}Dr(t)}function Kp(t,e){for(var a=t.suspendedLanes,r=t.pingedLanes,s=t.expirationTimes,c=t.pendingLanes&-62914561;0<c;){var g=31-Te(c),b=1<<g,S=s[g];S===-1?((b&a)===0||(b&r)!==0)&&(s[g]=H1(b,e)):S<=e&&(t.expiredLanes|=b),c&=~b}if(e=Dt,a=bt,a=yo(t,t===e?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r=t.callbackNode,a===0||t===e&&(At===2||At===9)||t.cancelPendingCommit!==null)return r!==null&&r!==null&&ms(r),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Gi(t,a)){if(e=a&-a,e===t.callbackPriority)return e;switch(r!==null&&ms(r),vs(a)){case 2:case 8:a=Ud;break;case 32:a=go;break;case 268435456:a=Ld;break;default:a=go}return r=Zp.bind(null,t),a=hs(a,r),t.callbackPriority=e,t.callbackNode=a,e}return r!==null&&r!==null&&ms(r),t.callbackPriority=2,t.callbackNode=null,2}function Zp(t,e){if(ne!==0&&ne!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(fl()&&t.callbackNode!==a)return null;var r=bt;return r=yo(t,t===Dt?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r===0?null:(kp(t,r,e),Kp(t,Ie()),t.callbackNode!=null&&t.callbackNode===a?Zp.bind(null,t):null)}function Qp(t,e){if(fl())return null;kp(t,e,!0)}function gx(){wx(function(){(Tt&6)!==0?hs(Vd,px):Fp()})}function ac(){return Ra===0&&(Ra=Bd()),Ra}function $p(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Oo(""+t)}function Jp(t,e){var a=e.ownerDocument.createElement("input");return a.name=e.name,a.value=e.value,t.id&&a.setAttribute("form",t.id),e.parentNode.insertBefore(a,e),t=new FormData(t),a.parentNode.removeChild(a),t}function vx(t,e,a,r,s){if(e==="submit"&&a&&a.stateNode===s){var c=$p((s[me]||null).action),g=r.submitter;g&&(e=(e=g[me]||null)?$p(e.formAction):g.getAttribute("formAction"),e!==null&&(c=e,g=null));var b=new Do("action","action",null,r,s);t.push({event:b,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Ra!==0){var S=g?Jp(s,g):new FormData(s);Au(a,{pending:!0,data:S,method:s.method,action:c},null,S)}}else typeof c=="function"&&(b.preventDefault(),S=g?Jp(s,g):new FormData(s),Au(a,{pending:!0,data:S,method:s.method,action:c},c,S))},currentTarget:s}]})}}for(var ic=0;ic<qs.length;ic++){var rc=qs[ic],bx=rc.toLowerCase(),yx=rc[0].toUpperCase()+rc.slice(1);Ge(bx,"on"+yx)}Ge(kh,"onAnimationEnd"),Ge(Rh,"onAnimationIteration"),Ge(_h,"onAnimationStart"),Ge("dblclick","onDoubleClick"),Ge("focusin","onFocus"),Ge("focusout","onBlur"),Ge(P2,"onTransitionRun"),Ge(V2,"onTransitionStart"),Ge(U2,"onTransitionCancel"),Ge(zh,"onTransitionEnd"),Xa("onMouseEnter",["mouseout","mouseover"]),Xa("onMouseLeave",["mouseout","mouseover"]),Xa("onPointerEnter",["pointerout","pointerover"]),Xa("onPointerLeave",["pointerout","pointerover"]),pa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),pa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),pa("onBeforeInput",["compositionend","keypress","textInput","paste"]),pa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),pa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),pa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Cr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),xx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Cr));function Wp(t,e){e=(e&4)!==0;for(var a=0;a<t.length;a++){var r=t[a],s=r.event;r=r.listeners;t:{var c=void 0;if(e)for(var g=r.length-1;0<=g;g--){var b=r[g],S=b.instance,D=b.currentTarget;if(b=b.listener,S!==c&&s.isPropagationStopped())break t;c=b,s.currentTarget=D;try{c(s)}catch(_){tl(_)}s.currentTarget=null,c=S}else for(g=0;g<r.length;g++){if(b=r[g],S=b.instance,D=b.currentTarget,b=b.listener,S!==c&&s.isPropagationStopped())break t;c=b,s.currentTarget=D;try{c(s)}catch(_){tl(_)}s.currentTarget=null,c=S}}}}function pt(t,e){var a=e[bs];a===void 0&&(a=e[bs]=new Set);var r=t+"__bubble";a.has(r)||(Ip(e,t,2,!1),a.add(r))}function oc(t,e,a){var r=0;e&&(r|=4),Ip(a,t,r,e)}var ml="_reactListening"+Math.random().toString(36).slice(2);function lc(t){if(!t[ml]){t[ml]=!0,Fd.forEach(function(a){a!=="selectionchange"&&(xx.has(a)||oc(a,!1,t),oc(a,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ml]||(e[ml]=!0,oc("selectionchange",!1,e))}}function Ip(t,e,a,r){switch(A0(e)){case 2:var s=Kx;break;case 8:s=Zx;break;default:s=Sc}a=s.bind(null,e,a,t),s=void 0,!Cs||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),r?s!==void 0?t.addEventListener(e,a,{capture:!0,passive:s}):t.addEventListener(e,a,!0):s!==void 0?t.addEventListener(e,a,{passive:s}):t.addEventListener(e,a,!1)}function sc(t,e,a,r,s){var c=r;if((e&1)===0&&(e&2)===0&&r!==null)t:for(;;){if(r===null)return;var g=r.tag;if(g===3||g===4){var b=r.stateNode.containerInfo;if(b===s)break;if(g===4)for(g=r.return;g!==null;){var S=g.tag;if((S===3||S===4)&&g.stateNode.containerInfo===s)return;g=g.return}for(;b!==null;){if(g=qa(b),g===null)return;if(S=g.tag,S===5||S===6||S===26||S===27){r=c=g;continue t}b=b.parentNode}}r=r.return}oh(function(){var D=c,_=Ms(a),P=[];t:{var C=jh.get(t);if(C!==void 0){var k=Do,rt=t;switch(t){case"keypress":if(wo(a)===0)break t;case"keydown":case"keyup":k=m2;break;case"focusin":rt="focus",k=zs;break;case"focusout":rt="blur",k=zs;break;case"beforeblur":case"afterblur":k=zs;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":k=uh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":k=n2;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":k=v2;break;case kh:case Rh:case _h:k=r2;break;case zh:k=y2;break;case"scroll":case"scrollend":k=t2;break;case"wheel":k=S2;break;case"copy":case"cut":case"paste":k=l2;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":k=fh;break;case"toggle":case"beforetoggle":k=A2}var at=(e&4)!==0,wt=!at&&(t==="scroll"||t==="scrollend"),O=at?C!==null?C+"Capture":null:C;at=[];for(var A=D,w;A!==null;){var N=A;if(w=N.stateNode,N=N.tag,N!==5&&N!==26&&N!==27||w===null||O===null||(N=Zi(A,O),N!=null&&at.push(kr(A,N,w))),wt)break;A=A.return}0<at.length&&(C=new k(C,rt,null,a,_),P.push({event:C,listeners:at}))}}if((e&7)===0){t:{if(C=t==="mouseover"||t==="pointerover",k=t==="mouseout"||t==="pointerout",C&&a!==ws&&(rt=a.relatedTarget||a.fromElement)&&(qa(rt)||rt[Ha]))break t;if((k||C)&&(C=_.window===_?_:(C=_.ownerDocument)?C.defaultView||C.parentWindow:window,k?(rt=a.relatedTarget||a.toElement,k=D,rt=rt?qa(rt):null,rt!==null&&(wt=d(rt),at=rt.tag,rt!==wt||at!==5&&at!==27&&at!==6)&&(rt=null)):(k=null,rt=D),k!==rt)){if(at=uh,N="onMouseLeave",O="onMouseEnter",A="mouse",(t==="pointerout"||t==="pointerover")&&(at=fh,N="onPointerLeave",O="onPointerEnter",A="pointer"),wt=k==null?C:Ki(k),w=rt==null?C:Ki(rt),C=new at(N,A+"leave",k,a,_),C.target=wt,C.relatedTarget=w,N=null,qa(_)===D&&(at=new at(O,A+"enter",rt,a,_),at.target=w,at.relatedTarget=wt,N=at),wt=N,k&&rt)e:{for(at=k,O=rt,A=0,w=at;w;w=Ti(w))A++;for(w=0,N=O;N;N=Ti(N))w++;for(;0<A-w;)at=Ti(at),A--;for(;0<w-A;)O=Ti(O),w--;for(;A--;){if(at===O||O!==null&&at===O.alternate)break e;at=Ti(at),O=Ti(O)}at=null}else at=null;k!==null&&t0(P,C,k,at,!1),rt!==null&&wt!==null&&t0(P,wt,rt,at,!0)}}t:{if(C=D?Ki(D):window,k=C.nodeName&&C.nodeName.toLowerCase(),k==="select"||k==="input"&&C.type==="file")var Z=yh;else if(vh(C))if(xh)Z=z2;else{Z=R2;var ht=k2}else k=C.nodeName,!k||k.toLowerCase()!=="input"||C.type!=="checkbox"&&C.type!=="radio"?D&&Es(D.elementType)&&(Z=yh):Z=_2;if(Z&&(Z=Z(t,D))){bh(P,Z,a,_);break t}ht&&ht(t,C,D),t==="focusout"&&D&&C.type==="number"&&D.memoizedProps.value!=null&&Os(C,"number",C.value)}switch(ht=D?Ki(D):window,t){case"focusin":(vh(ht)||ht.contentEditable==="true")&&(Wa=ht,Ls=D,nr=null);break;case"focusout":nr=Ls=Wa=null;break;case"mousedown":Bs=!0;break;case"contextmenu":case"mouseup":case"dragend":Bs=!1,Dh(P,a,_);break;case"selectionchange":if(N2)break;case"keydown":case"keyup":Dh(P,a,_)}var J;if(Ns)t:{switch(t){case"compositionstart":var it="onCompositionStart";break t;case"compositionend":it="onCompositionEnd";break t;case"compositionupdate":it="onCompositionUpdate";break t}it=void 0}else Ja?ph(t,a)&&(it="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(it="onCompositionStart");it&&(dh&&a.locale!=="ko"&&(Ja||it!=="onCompositionStart"?it==="onCompositionEnd"&&Ja&&(J=lh()):(Vn=_,ks="value"in Vn?Vn.value:Vn.textContent,Ja=!0)),ht=pl(D,it),0<ht.length&&(it=new ch(it,t,null,a,_),P.push({event:it,listeners:ht}),J?it.data=J:(J=gh(a),J!==null&&(it.data=J)))),(J=E2?w2(t,a):M2(t,a))&&(it=pl(D,"onBeforeInput"),0<it.length&&(ht=new ch("onBeforeInput","beforeinput",null,a,_),P.push({event:ht,listeners:it}),ht.data=J)),vx(P,t,D,a,_)}Wp(P,e)})}function kr(t,e,a){return{instance:t,listener:e,currentTarget:a}}function pl(t,e){for(var a=e+"Capture",r=[];t!==null;){var s=t,c=s.stateNode;if(s=s.tag,s!==5&&s!==26&&s!==27||c===null||(s=Zi(t,a),s!=null&&r.unshift(kr(t,s,c)),s=Zi(t,e),s!=null&&r.push(kr(t,s,c))),t.tag===3)return r;t=t.return}return[]}function Ti(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function t0(t,e,a,r,s){for(var c=e._reactName,g=[];a!==null&&a!==r;){var b=a,S=b.alternate,D=b.stateNode;if(b=b.tag,S!==null&&S===r)break;b!==5&&b!==26&&b!==27||D===null||(S=D,s?(D=Zi(a,c),D!=null&&g.unshift(kr(a,D,S))):s||(D=Zi(a,c),D!=null&&g.push(kr(a,D,S)))),a=a.return}g.length!==0&&t.push({event:e,listeners:g})}var Sx=/\r\n?/g,Tx=/\u0000|\uFFFD/g;function e0(t){return(typeof t=="string"?t:""+t).replace(Sx,`
`).replace(Tx,"")}function n0(t,e){return e=e0(e),e0(t)===e}function gl(){}function Et(t,e,a,r,s,c){switch(a){case"children":typeof r=="string"?e==="body"||e==="textarea"&&r===""||Za(t,r):(typeof r=="number"||typeof r=="bigint")&&e!=="body"&&Za(t,""+r);break;case"className":So(t,"class",r);break;case"tabIndex":So(t,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":So(t,a,r);break;case"style":ih(t,r,c);break;case"data":if(e!=="object"){So(t,"data",r);break}case"src":case"href":if(r===""&&(e!=="a"||a!=="href")){t.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=Oo(""+r),t.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof c=="function"&&(a==="formAction"?(e!=="input"&&Et(t,e,"name",s.name,s,null),Et(t,e,"formEncType",s.formEncType,s,null),Et(t,e,"formMethod",s.formMethod,s,null),Et(t,e,"formTarget",s.formTarget,s,null)):(Et(t,e,"encType",s.encType,s,null),Et(t,e,"method",s.method,s,null),Et(t,e,"target",s.target,s,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=Oo(""+r),t.setAttribute(a,r);break;case"onClick":r!=null&&(t.onclick=gl);break;case"onScroll":r!=null&&pt("scroll",t);break;case"onScrollEnd":r!=null&&pt("scrollend",t);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(l(61));if(a=r.__html,a!=null){if(s.children!=null)throw Error(l(60));t.innerHTML=a}}break;case"multiple":t.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":t.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){t.removeAttribute("xlink:href");break}a=Oo(""+r),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,""+r):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":r===!0?t.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,r):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?t.setAttribute(a,r):t.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?t.removeAttribute(a):t.setAttribute(a,r);break;case"popover":pt("beforetoggle",t),pt("toggle",t),xo(t,"popover",r);break;case"xlinkActuate":hn(t,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":hn(t,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":hn(t,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":hn(t,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":hn(t,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":hn(t,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":hn(t,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":hn(t,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":hn(t,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":xo(t,"is",r);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=W1.get(a)||a,xo(t,a,r))}}function uc(t,e,a,r,s,c){switch(a){case"style":ih(t,r,c);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(l(61));if(a=r.__html,a!=null){if(s.children!=null)throw Error(l(60));t.innerHTML=a}}break;case"children":typeof r=="string"?Za(t,r):(typeof r=="number"||typeof r=="bigint")&&Za(t,""+r);break;case"onScroll":r!=null&&pt("scroll",t);break;case"onScrollEnd":r!=null&&pt("scrollend",t);break;case"onClick":r!=null&&(t.onclick=gl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Kd.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(s=a.endsWith("Capture"),e=a.slice(2,s?a.length-7:void 0),c=t[me]||null,c=c!=null?c[a]:null,typeof c=="function"&&t.removeEventListener(e,c,s),typeof r=="function")){typeof c!="function"&&c!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(e,r,s);break t}a in t?t[a]=r:r===!0?t.setAttribute(a,""):xo(t,a,r)}}}function ae(t,e,a){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":pt("error",t),pt("load",t);var r=!1,s=!1,c;for(c in a)if(a.hasOwnProperty(c)){var g=a[c];if(g!=null)switch(c){case"src":r=!0;break;case"srcSet":s=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(l(137,e));default:Et(t,e,c,g,a,null)}}s&&Et(t,e,"srcSet",a.srcSet,a,null),r&&Et(t,e,"src",a.src,a,null);return;case"input":pt("invalid",t);var b=c=g=s=null,S=null,D=null;for(r in a)if(a.hasOwnProperty(r)){var _=a[r];if(_!=null)switch(r){case"name":s=_;break;case"type":g=_;break;case"checked":S=_;break;case"defaultChecked":D=_;break;case"value":c=_;break;case"defaultValue":b=_;break;case"children":case"dangerouslySetInnerHTML":if(_!=null)throw Error(l(137,e));break;default:Et(t,e,r,_,a,null)}}th(t,c,b,S,D,g,s,!1),To(t);return;case"select":pt("invalid",t),r=g=c=null;for(s in a)if(a.hasOwnProperty(s)&&(b=a[s],b!=null))switch(s){case"value":c=b;break;case"defaultValue":g=b;break;case"multiple":r=b;default:Et(t,e,s,b,a,null)}e=c,a=g,t.multiple=!!r,e!=null?Ka(t,!!r,e,!1):a!=null&&Ka(t,!!r,a,!0);return;case"textarea":pt("invalid",t),c=s=r=null;for(g in a)if(a.hasOwnProperty(g)&&(b=a[g],b!=null))switch(g){case"value":r=b;break;case"defaultValue":s=b;break;case"children":c=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(l(91));break;default:Et(t,e,g,b,a,null)}nh(t,r,s,c),To(t);return;case"option":for(S in a)if(a.hasOwnProperty(S)&&(r=a[S],r!=null))switch(S){case"selected":t.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:Et(t,e,S,r,a,null)}return;case"dialog":pt("beforetoggle",t),pt("toggle",t),pt("cancel",t),pt("close",t);break;case"iframe":case"object":pt("load",t);break;case"video":case"audio":for(r=0;r<Cr.length;r++)pt(Cr[r],t);break;case"image":pt("error",t),pt("load",t);break;case"details":pt("toggle",t);break;case"embed":case"source":case"link":pt("error",t),pt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(D in a)if(a.hasOwnProperty(D)&&(r=a[D],r!=null))switch(D){case"children":case"dangerouslySetInnerHTML":throw Error(l(137,e));default:Et(t,e,D,r,a,null)}return;default:if(Es(e)){for(_ in a)a.hasOwnProperty(_)&&(r=a[_],r!==void 0&&uc(t,e,_,r,a,void 0));return}}for(b in a)a.hasOwnProperty(b)&&(r=a[b],r!=null&&Et(t,e,b,r,a,null))}function Ax(t,e,a,r){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var s=null,c=null,g=null,b=null,S=null,D=null,_=null;for(k in a){var P=a[k];if(a.hasOwnProperty(k)&&P!=null)switch(k){case"checked":break;case"value":break;case"defaultValue":S=P;default:r.hasOwnProperty(k)||Et(t,e,k,null,r,P)}}for(var C in r){var k=r[C];if(P=a[C],r.hasOwnProperty(C)&&(k!=null||P!=null))switch(C){case"type":c=k;break;case"name":s=k;break;case"checked":D=k;break;case"defaultChecked":_=k;break;case"value":g=k;break;case"defaultValue":b=k;break;case"children":case"dangerouslySetInnerHTML":if(k!=null)throw Error(l(137,e));break;default:k!==P&&Et(t,e,C,k,r,P)}}As(t,g,b,S,D,_,c,s);return;case"select":k=g=b=C=null;for(c in a)if(S=a[c],a.hasOwnProperty(c)&&S!=null)switch(c){case"value":break;case"multiple":k=S;default:r.hasOwnProperty(c)||Et(t,e,c,null,r,S)}for(s in r)if(c=r[s],S=a[s],r.hasOwnProperty(s)&&(c!=null||S!=null))switch(s){case"value":C=c;break;case"defaultValue":b=c;break;case"multiple":g=c;default:c!==S&&Et(t,e,s,c,r,S)}e=b,a=g,r=k,C!=null?Ka(t,!!a,C,!1):!!r!=!!a&&(e!=null?Ka(t,!!a,e,!0):Ka(t,!!a,a?[]:"",!1));return;case"textarea":k=C=null;for(b in a)if(s=a[b],a.hasOwnProperty(b)&&s!=null&&!r.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:Et(t,e,b,null,r,s)}for(g in r)if(s=r[g],c=a[g],r.hasOwnProperty(g)&&(s!=null||c!=null))switch(g){case"value":C=s;break;case"defaultValue":k=s;break;case"children":break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(l(91));break;default:s!==c&&Et(t,e,g,s,r,c)}eh(t,C,k);return;case"option":for(var rt in a)if(C=a[rt],a.hasOwnProperty(rt)&&C!=null&&!r.hasOwnProperty(rt))switch(rt){case"selected":t.selected=!1;break;default:Et(t,e,rt,null,r,C)}for(S in r)if(C=r[S],k=a[S],r.hasOwnProperty(S)&&C!==k&&(C!=null||k!=null))switch(S){case"selected":t.selected=C&&typeof C!="function"&&typeof C!="symbol";break;default:Et(t,e,S,C,r,k)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var at in a)C=a[at],a.hasOwnProperty(at)&&C!=null&&!r.hasOwnProperty(at)&&Et(t,e,at,null,r,C);for(D in r)if(C=r[D],k=a[D],r.hasOwnProperty(D)&&C!==k&&(C!=null||k!=null))switch(D){case"children":case"dangerouslySetInnerHTML":if(C!=null)throw Error(l(137,e));break;default:Et(t,e,D,C,r,k)}return;default:if(Es(e)){for(var wt in a)C=a[wt],a.hasOwnProperty(wt)&&C!==void 0&&!r.hasOwnProperty(wt)&&uc(t,e,wt,void 0,r,C);for(_ in r)C=r[_],k=a[_],!r.hasOwnProperty(_)||C===k||C===void 0&&k===void 0||uc(t,e,_,C,r,k);return}}for(var O in a)C=a[O],a.hasOwnProperty(O)&&C!=null&&!r.hasOwnProperty(O)&&Et(t,e,O,null,r,C);for(P in r)C=r[P],k=a[P],!r.hasOwnProperty(P)||C===k||C==null&&k==null||Et(t,e,P,C,r,k)}var cc=null,fc=null;function vl(t){return t.nodeType===9?t:t.ownerDocument}function a0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function i0(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function dc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var hc=null;function Ox(){var t=window.event;return t&&t.type==="popstate"?t===hc?!1:(hc=t,!0):(hc=null,!1)}var r0=typeof setTimeout=="function"?setTimeout:void 0,Ex=typeof clearTimeout=="function"?clearTimeout:void 0,o0=typeof Promise=="function"?Promise:void 0,wx=typeof queueMicrotask=="function"?queueMicrotask:typeof o0<"u"?function(t){return o0.resolve(null).then(t).catch(Mx)}:r0;function Mx(t){setTimeout(function(){throw t})}function In(t){return t==="head"}function l0(t,e){var a=e,r=0,s=0;do{var c=a.nextSibling;if(t.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"){if(0<r&&8>r){a=r;var g=t.ownerDocument;if(a&1&&Rr(g.documentElement),a&2&&Rr(g.body),a&4)for(a=g.head,Rr(a),g=a.firstChild;g;){var b=g.nextSibling,S=g.nodeName;g[Fi]||S==="SCRIPT"||S==="STYLE"||S==="LINK"&&g.rel.toLowerCase()==="stylesheet"||a.removeChild(g),g=b}}if(s===0){t.removeChild(c),Lr(e);return}s--}else a==="$"||a==="$?"||a==="$!"?s++:r=a.charCodeAt(0)-48;else r=0;a=c}while(a);Lr(e)}function mc(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var a=e;switch(e=e.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":mc(a),ys(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function Dx(t,e,a,r){for(;t.nodeType===1;){var s=a;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!r&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(r){if(!t[Fi])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(c=t.getAttribute("rel"),c==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(c!==s.rel||t.getAttribute("href")!==(s.href==null||s.href===""?null:s.href)||t.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin)||t.getAttribute("title")!==(s.title==null?null:s.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(c=t.getAttribute("src"),(c!==(s.src==null?null:s.src)||t.getAttribute("type")!==(s.type==null?null:s.type)||t.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin))&&c&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var c=s.name==null?null:""+s.name;if(s.type==="hidden"&&t.getAttribute("name")===c)return t}else return t;if(t=Fe(t.nextSibling),t===null)break}return null}function Cx(t,e,a){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=Fe(t.nextSibling),t===null))return null;return t}function pc(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function kx(t,e){var a=t.ownerDocument;if(t.data!=="$?"||a.readyState==="complete")e();else{var r=function(){e(),a.removeEventListener("DOMContentLoaded",r)};a.addEventListener("DOMContentLoaded",r),t._reactRetry=r}}function Fe(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="F!"||e==="F")break;if(e==="/$")return null}}return t}var gc=null;function s0(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(e===0)return t;e--}else a==="/$"&&e++}t=t.previousSibling}return null}function u0(t,e,a){switch(e=vl(a),t){case"html":if(t=e.documentElement,!t)throw Error(l(452));return t;case"head":if(t=e.head,!t)throw Error(l(453));return t;case"body":if(t=e.body,!t)throw Error(l(454));return t;default:throw Error(l(451))}}function Rr(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);ys(t)}var Be=new Map,c0=new Set;function bl(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Mn=G.d;G.d={f:Rx,r:_x,D:zx,C:jx,L:Nx,m:Px,X:Ux,S:Vx,M:Lx};function Rx(){var t=Mn.f(),e=ul();return t||e}function _x(t){var e=Ya(t);e!==null&&e.tag===5&&e.type==="form"?km(e):Mn.r(t)}var Ai=typeof document>"u"?null:document;function f0(t,e,a){var r=Ai;if(r&&typeof e=="string"&&e){var s=ze(e);s='link[rel="'+t+'"][href="'+s+'"]',typeof a=="string"&&(s+='[crossorigin="'+a+'"]'),c0.has(s)||(c0.add(s),t={rel:t,crossOrigin:a,href:e},r.querySelector(s)===null&&(e=r.createElement("link"),ae(e,"link",t),Jt(e),r.head.appendChild(e)))}}function zx(t){Mn.D(t),f0("dns-prefetch",t,null)}function jx(t,e){Mn.C(t,e),f0("preconnect",t,e)}function Nx(t,e,a){Mn.L(t,e,a);var r=Ai;if(r&&t&&e){var s='link[rel="preload"][as="'+ze(e)+'"]';e==="image"&&a&&a.imageSrcSet?(s+='[imagesrcset="'+ze(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(s+='[imagesizes="'+ze(a.imageSizes)+'"]')):s+='[href="'+ze(t)+'"]';var c=s;switch(e){case"style":c=Oi(t);break;case"script":c=Ei(t)}Be.has(c)||(t=v({rel:"preload",href:e==="image"&&a&&a.imageSrcSet?void 0:t,as:e},a),Be.set(c,t),r.querySelector(s)!==null||e==="style"&&r.querySelector(_r(c))||e==="script"&&r.querySelector(zr(c))||(e=r.createElement("link"),ae(e,"link",t),Jt(e),r.head.appendChild(e)))}}function Px(t,e){Mn.m(t,e);var a=Ai;if(a&&t){var r=e&&typeof e.as=="string"?e.as:"script",s='link[rel="modulepreload"][as="'+ze(r)+'"][href="'+ze(t)+'"]',c=s;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":c=Ei(t)}if(!Be.has(c)&&(t=v({rel:"modulepreload",href:t},e),Be.set(c,t),a.querySelector(s)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(zr(c)))return}r=a.createElement("link"),ae(r,"link",t),Jt(r),a.head.appendChild(r)}}}function Vx(t,e,a){Mn.S(t,e,a);var r=Ai;if(r&&t){var s=Ga(r).hoistableStyles,c=Oi(t);e=e||"default";var g=s.get(c);if(!g){var b={loading:0,preload:null};if(g=r.querySelector(_r(c)))b.loading=5;else{t=v({rel:"stylesheet",href:t,"data-precedence":e},a),(a=Be.get(c))&&vc(t,a);var S=g=r.createElement("link");Jt(S),ae(S,"link",t),S._p=new Promise(function(D,_){S.onload=D,S.onerror=_}),S.addEventListener("load",function(){b.loading|=1}),S.addEventListener("error",function(){b.loading|=2}),b.loading|=4,yl(g,e,r)}g={type:"stylesheet",instance:g,count:1,state:b},s.set(c,g)}}}function Ux(t,e){Mn.X(t,e);var a=Ai;if(a&&t){var r=Ga(a).hoistableScripts,s=Ei(t),c=r.get(s);c||(c=a.querySelector(zr(s)),c||(t=v({src:t,async:!0},e),(e=Be.get(s))&&bc(t,e),c=a.createElement("script"),Jt(c),ae(c,"link",t),a.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},r.set(s,c))}}function Lx(t,e){Mn.M(t,e);var a=Ai;if(a&&t){var r=Ga(a).hoistableScripts,s=Ei(t),c=r.get(s);c||(c=a.querySelector(zr(s)),c||(t=v({src:t,async:!0,type:"module"},e),(e=Be.get(s))&&bc(t,e),c=a.createElement("script"),Jt(c),ae(c,"link",t),a.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},r.set(s,c))}}function d0(t,e,a,r){var s=(s=st.current)?bl(s):null;if(!s)throw Error(l(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(e=Oi(a.href),a=Ga(s).hoistableStyles,r=a.get(e),r||(r={type:"style",instance:null,count:0,state:null},a.set(e,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Oi(a.href);var c=Ga(s).hoistableStyles,g=c.get(t);if(g||(s=s.ownerDocument||s,g={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},c.set(t,g),(c=s.querySelector(_r(t)))&&!c._p&&(g.instance=c,g.state.loading=5),Be.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Be.set(t,a),c||Bx(s,t,a,g.state))),e&&r===null)throw Error(l(528,""));return g}if(e&&r!==null)throw Error(l(529,""));return null;case"script":return e=a.async,a=a.src,typeof a=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=Ei(a),a=Ga(s).hoistableScripts,r=a.get(e),r||(r={type:"script",instance:null,count:0,state:null},a.set(e,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(l(444,t))}}function Oi(t){return'href="'+ze(t)+'"'}function _r(t){return'link[rel="stylesheet"]['+t+"]"}function h0(t){return v({},t,{"data-precedence":t.precedence,precedence:null})}function Bx(t,e,a,r){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?r.loading=1:(e=t.createElement("link"),r.preload=e,e.addEventListener("load",function(){return r.loading|=1}),e.addEventListener("error",function(){return r.loading|=2}),ae(e,"link",a),Jt(e),t.head.appendChild(e))}function Ei(t){return'[src="'+ze(t)+'"]'}function zr(t){return"script[async]"+t}function m0(t,e,a){if(e.count++,e.instance===null)switch(e.type){case"style":var r=t.querySelector('style[data-href~="'+ze(a.href)+'"]');if(r)return e.instance=r,Jt(r),r;var s=v({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(t.ownerDocument||t).createElement("style"),Jt(r),ae(r,"style",s),yl(r,a.precedence,t),e.instance=r;case"stylesheet":s=Oi(a.href);var c=t.querySelector(_r(s));if(c)return e.state.loading|=4,e.instance=c,Jt(c),c;r=h0(a),(s=Be.get(s))&&vc(r,s),c=(t.ownerDocument||t).createElement("link"),Jt(c);var g=c;return g._p=new Promise(function(b,S){g.onload=b,g.onerror=S}),ae(c,"link",r),e.state.loading|=4,yl(c,a.precedence,t),e.instance=c;case"script":return c=Ei(a.src),(s=t.querySelector(zr(c)))?(e.instance=s,Jt(s),s):(r=a,(s=Be.get(c))&&(r=v({},a),bc(r,s)),t=t.ownerDocument||t,s=t.createElement("script"),Jt(s),ae(s,"link",r),t.head.appendChild(s),e.instance=s);case"void":return null;default:throw Error(l(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(r=e.instance,e.state.loading|=4,yl(r,a.precedence,t));return e.instance}function yl(t,e,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),s=r.length?r[r.length-1]:null,c=s,g=0;g<r.length;g++){var b=r[g];if(b.dataset.precedence===e)c=b;else if(c!==s)break}c?c.parentNode.insertBefore(t,c.nextSibling):(e=a.nodeType===9?a.head:a,e.insertBefore(t,e.firstChild))}function vc(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function bc(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var xl=null;function p0(t,e,a){if(xl===null){var r=new Map,s=xl=new Map;s.set(a,r)}else s=xl,r=s.get(a),r||(r=new Map,s.set(a,r));if(r.has(t))return r;for(r.set(t,null),a=a.getElementsByTagName(t),s=0;s<a.length;s++){var c=a[s];if(!(c[Fi]||c[oe]||t==="link"&&c.getAttribute("rel")==="stylesheet")&&c.namespaceURI!=="http://www.w3.org/2000/svg"){var g=c.getAttribute(e)||"";g=t+g;var b=r.get(g);b?b.push(c):r.set(g,[c])}}return r}function g0(t,e,a){t=t.ownerDocument||t,t.head.insertBefore(a,e==="title"?t.querySelector("head > title"):null)}function Hx(t,e,a){if(a===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function v0(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var jr=null;function qx(){}function Yx(t,e,a){if(jr===null)throw Error(l(475));var r=jr;if(e.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(e.state.loading&4)===0){if(e.instance===null){var s=Oi(a.href),c=t.querySelector(_r(s));if(c){t=c._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(r.count++,r=Sl.bind(r),t.then(r,r)),e.state.loading|=4,e.instance=c,Jt(c);return}c=t.ownerDocument||t,a=h0(a),(s=Be.get(s))&&vc(a,s),c=c.createElement("link"),Jt(c);var g=c;g._p=new Promise(function(b,S){g.onload=b,g.onerror=S}),ae(c,"link",a),e.instance=c}r.stylesheets===null&&(r.stylesheets=new Map),r.stylesheets.set(e,t),(t=e.state.preload)&&(e.state.loading&3)===0&&(r.count++,e=Sl.bind(r),t.addEventListener("load",e),t.addEventListener("error",e))}}function Gx(){if(jr===null)throw Error(l(475));var t=jr;return t.stylesheets&&t.count===0&&yc(t,t.stylesheets),0<t.count?function(e){var a=setTimeout(function(){if(t.stylesheets&&yc(t,t.stylesheets),t.unsuspend){var r=t.unsuspend;t.unsuspend=null,r()}},6e4);return t.unsuspend=e,function(){t.unsuspend=null,clearTimeout(a)}}:null}function Sl(){if(this.count--,this.count===0){if(this.stylesheets)yc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Tl=null;function yc(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Tl=new Map,e.forEach(Xx,t),Tl=null,Sl.call(t))}function Xx(t,e){if(!(e.state.loading&4)){var a=Tl.get(t);if(a)var r=a.get(null);else{a=new Map,Tl.set(t,a);for(var s=t.querySelectorAll("link[data-precedence],style[data-precedence]"),c=0;c<s.length;c++){var g=s[c];(g.nodeName==="LINK"||g.getAttribute("media")!=="not all")&&(a.set(g.dataset.precedence,g),r=g)}r&&a.set(null,r)}s=e.instance,g=s.getAttribute("data-precedence"),c=a.get(g)||r,c===r&&a.set(null,s),a.set(g,s),this.count++,r=Sl.bind(this),s.addEventListener("load",r),s.addEventListener("error",r),c?c.parentNode.insertBefore(s,c.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(s,t.firstChild)),e.state.loading|=4}}var Nr={$$typeof:L,Provider:null,Consumer:null,_currentValue:$,_currentValue2:$,_threadCount:0};function Fx(t,e,a,r,s,c,g,b){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ps(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ps(0),this.hiddenUpdates=ps(null),this.identifierPrefix=r,this.onUncaughtError=s,this.onCaughtError=c,this.onRecoverableError=g,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=b,this.incompleteTransitions=new Map}function b0(t,e,a,r,s,c,g,b,S,D,_,P){return t=new Fx(t,e,a,g,b,S,D,P),e=1,c===!0&&(e|=24),c=Oe(3,null,null,e),t.current=c,c.stateNode=t,e=tu(),e.refCount++,t.pooledCache=e,e.refCount++,c.memoizedState={element:r,isDehydrated:a,cache:e},iu(c),t}function y0(t){return t?(t=ni,t):ni}function x0(t,e,a,r,s,c){s=y0(s),r.context===null?r.context=s:r.pendingContext=s,r=Bn(e),r.payload={element:a},c=c===void 0?null:c,c!==null&&(r.callback=c),a=Hn(t,r,e),a!==null&&(Ce(a,t,e),fr(a,t,e))}function S0(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<e?a:e}}function xc(t,e){S0(t,e),(t=t.alternate)&&S0(t,e)}function T0(t){if(t.tag===13){var e=ei(t,67108864);e!==null&&Ce(e,t,67108864),xc(t,67108864)}}var Al=!0;function Kx(t,e,a,r){var s=z.T;z.T=null;var c=G.p;try{G.p=2,Sc(t,e,a,r)}finally{G.p=c,z.T=s}}function Zx(t,e,a,r){var s=z.T;z.T=null;var c=G.p;try{G.p=8,Sc(t,e,a,r)}finally{G.p=c,z.T=s}}function Sc(t,e,a,r){if(Al){var s=Tc(r);if(s===null)sc(t,e,r,Ol,a),O0(t,r);else if($x(s,t,e,a,r))r.stopPropagation();else if(O0(t,r),e&4&&-1<Qx.indexOf(t)){for(;s!==null;){var c=Ya(s);if(c!==null)switch(c.tag){case 3:if(c=c.stateNode,c.current.memoizedState.isDehydrated){var g=ma(c.pendingLanes);if(g!==0){var b=c;for(b.pendingLanes|=2,b.entangledLanes|=2;g;){var S=1<<31-Te(g);b.entanglements[1]|=S,g&=~S}rn(c),(Tt&6)===0&&(ll=Ie()+500,Dr(0))}}break;case 13:b=ei(c,2),b!==null&&Ce(b,c,2),ul(),xc(c,2)}if(c=Tc(r),c===null&&sc(t,e,r,Ol,a),c===s)break;s=c}s!==null&&r.stopPropagation()}else sc(t,e,r,null,a)}}function Tc(t){return t=Ms(t),Ac(t)}var Ol=null;function Ac(t){if(Ol=null,t=qa(t),t!==null){var e=d(t);if(e===null)t=null;else{var a=e.tag;if(a===13){if(t=f(e),t!==null)return t;t=null}else if(a===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return Ol=t,null}function A0(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(j1()){case Vd:return 2;case Ud:return 8;case go:case N1:return 32;case Ld:return 268435456;default:return 32}default:return 32}}var Oc=!1,ta=null,ea=null,na=null,Pr=new Map,Vr=new Map,aa=[],Qx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function O0(t,e){switch(t){case"focusin":case"focusout":ta=null;break;case"dragenter":case"dragleave":ea=null;break;case"mouseover":case"mouseout":na=null;break;case"pointerover":case"pointerout":Pr.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Vr.delete(e.pointerId)}}function Ur(t,e,a,r,s,c){return t===null||t.nativeEvent!==c?(t={blockedOn:e,domEventName:a,eventSystemFlags:r,nativeEvent:c,targetContainers:[s]},e!==null&&(e=Ya(e),e!==null&&T0(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function $x(t,e,a,r,s){switch(e){case"focusin":return ta=Ur(ta,t,e,a,r,s),!0;case"dragenter":return ea=Ur(ea,t,e,a,r,s),!0;case"mouseover":return na=Ur(na,t,e,a,r,s),!0;case"pointerover":var c=s.pointerId;return Pr.set(c,Ur(Pr.get(c)||null,t,e,a,r,s)),!0;case"gotpointercapture":return c=s.pointerId,Vr.set(c,Ur(Vr.get(c)||null,t,e,a,r,s)),!0}return!1}function E0(t){var e=qa(t.target);if(e!==null){var a=d(e);if(a!==null){if(e=a.tag,e===13){if(e=f(a),e!==null){t.blockedOn=e,Y1(t.priority,function(){if(a.tag===13){var r=De();r=gs(r);var s=ei(a,r);s!==null&&Ce(s,a,r),xc(a,r)}});return}}else if(e===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function El(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var a=Tc(t.nativeEvent);if(a===null){a=t.nativeEvent;var r=new a.constructor(a.type,a);ws=r,a.target.dispatchEvent(r),ws=null}else return e=Ya(a),e!==null&&T0(e),t.blockedOn=a,!1;e.shift()}return!0}function w0(t,e,a){El(t)&&a.delete(e)}function Jx(){Oc=!1,ta!==null&&El(ta)&&(ta=null),ea!==null&&El(ea)&&(ea=null),na!==null&&El(na)&&(na=null),Pr.forEach(w0),Vr.forEach(w0)}function wl(t,e){t.blockedOn===e&&(t.blockedOn=null,Oc||(Oc=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,Jx)))}var Ml=null;function M0(t){Ml!==t&&(Ml=t,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){Ml===t&&(Ml=null);for(var e=0;e<t.length;e+=3){var a=t[e],r=t[e+1],s=t[e+2];if(typeof r!="function"){if(Ac(r||a)===null)continue;break}var c=Ya(a);c!==null&&(t.splice(e,3),e-=3,Au(c,{pending:!0,data:s,method:a.method,action:r},r,s))}}))}function Lr(t){function e(S){return wl(S,t)}ta!==null&&wl(ta,t),ea!==null&&wl(ea,t),na!==null&&wl(na,t),Pr.forEach(e),Vr.forEach(e);for(var a=0;a<aa.length;a++){var r=aa[a];r.blockedOn===t&&(r.blockedOn=null)}for(;0<aa.length&&(a=aa[0],a.blockedOn===null);)E0(a),a.blockedOn===null&&aa.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var s=a[r],c=a[r+1],g=s[me]||null;if(typeof c=="function")g||M0(a);else if(g){var b=null;if(c&&c.hasAttribute("formAction")){if(s=c,g=c[me]||null)b=g.formAction;else if(Ac(s)!==null)continue}else b=g.action;typeof b=="function"?a[r+1]=b:(a.splice(r,3),r-=3),M0(a)}}}function Ec(t){this._internalRoot=t}Dl.prototype.render=Ec.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(l(409));var a=e.current,r=De();x0(a,r,t,e,null,null)},Dl.prototype.unmount=Ec.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;x0(t.current,2,null,t,null,null),ul(),e[Ha]=null}};function Dl(t){this._internalRoot=t}Dl.prototype.unstable_scheduleHydration=function(t){if(t){var e=Gd();t={blockedOn:null,target:t,priority:e};for(var a=0;a<aa.length&&e!==0&&e<aa[a].priority;a++);aa.splice(a,0,t),a===0&&E0(t)}};var D0=i.version;if(D0!=="19.1.0")throw Error(l(527,D0,"19.1.0"));G.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(l(188)):(t=Object.keys(t).join(","),Error(l(268,t)));return t=m(e),t=t!==null?p(t):null,t=t===null?null:t.stateNode,t};var Wx={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Cl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Cl.isDisabled&&Cl.supportsFiber)try{Yi=Cl.inject(Wx),Se=Cl}catch{}}return Hr.createRoot=function(t,e){if(!u(t))throw Error(l(299));var a=!1,r="",s=Gm,c=Xm,g=Fm,b=null;return e!=null&&(e.unstable_strictMode===!0&&(a=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onUncaughtError!==void 0&&(s=e.onUncaughtError),e.onCaughtError!==void 0&&(c=e.onCaughtError),e.onRecoverableError!==void 0&&(g=e.onRecoverableError),e.unstable_transitionCallbacks!==void 0&&(b=e.unstable_transitionCallbacks)),e=b0(t,1,!1,null,null,a,r,s,c,g,b,null),t[Ha]=e.current,lc(t),new Ec(e)},Hr.hydrateRoot=function(t,e,a){if(!u(t))throw Error(l(299));var r=!1,s="",c=Gm,g=Xm,b=Fm,S=null,D=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(s=a.identifierPrefix),a.onUncaughtError!==void 0&&(c=a.onUncaughtError),a.onCaughtError!==void 0&&(g=a.onCaughtError),a.onRecoverableError!==void 0&&(b=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(S=a.unstable_transitionCallbacks),a.formState!==void 0&&(D=a.formState)),e=b0(t,1,!0,e,a??null,r,s,c,g,b,S,D),e.context=y0(null),a=e.current,r=De(),r=gs(r),s=Bn(r),s.callback=null,Hn(a,s,r),a=r,e.current.lanes=a,Xi(e,a),rn(e),t[Ha]=e.current,lc(t),new Dl(e)},Hr.version="19.1.0",Hr}var U0;function s5(){if(U0)return Dc.exports;U0=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(i){console.error(i)}}return n(),Dc.exports=l5(),Dc.exports}var u5=s5();function $t(n,i){i===void 0&&(i={});var o=i.insertAt;if(n&&typeof document<"u"){var l=document.head||document.getElementsByTagName("head")[0],u=document.createElement("style");u.type="text/css",o==="top"&&l.firstChild?l.insertBefore(u,l.firstChild):l.appendChild(u),u.styleSheet?u.styleSheet.cssText=n:u.appendChild(document.createTextNode(n))}}$t(`.react-loading-indicator-normalize,
[class$=rli-bounding-box] {
  font-size: 1rem;
  display: inline-block;
  box-sizing: border-box;
  text-align: unset;
  isolation: isolate;
}

.rli-d-i-b {
  display: inline-block;
}

.rli-text-format {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 600;
  width: 90%;
  text-transform: uppercase;
  text-align: center;
  font-size: 0.7em;
  letter-spacing: 0.5px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Avenir Next", "Avenir", "Segoe UI", "Lucida Grande", "Helvetica Neue", "Helvetica", "Fira Sans", "Roboto", "Noto", "Droid Sans", "Cantarell", "Oxygen", "Ubuntu", "Franklin Gothic Medium", "Century Gothic", "Liberation Sans", sans-serif;
}`);var ln=function(){return ln=Object.assign||function(n){for(var i,o=1,l=arguments.length;o<l;o++)for(var u in i=arguments[o])Object.prototype.hasOwnProperty.call(i,u)&&(n[u]=i[u]);return n},ln.apply(this,arguments)};function Gl(n){return Gl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},Gl(n)}var c5=/^\s+/,f5=/\s+$/;function W(n,i){if(i=i||{},(n=n||"")instanceof W)return n;if(!(this instanceof W))return new W(n,i);var o=function(l){var u={r:0,g:0,b:0},d=1,f=null,h=null,m=null,p=!1,v=!1;typeof l=="string"&&(l=function(R){R=R.replace(c5,"").replace(f5,"").toLowerCase();var E,j=!1;if(of[R])R=of[R],j=!0;else if(R=="transparent")return{r:0,g:0,b:0,a:0,format:"name"};return(E=Ke.rgb.exec(R))?{r:E[1],g:E[2],b:E[3]}:(E=Ke.rgba.exec(R))?{r:E[1],g:E[2],b:E[3],a:E[4]}:(E=Ke.hsl.exec(R))?{h:E[1],s:E[2],l:E[3]}:(E=Ke.hsla.exec(R))?{h:E[1],s:E[2],l:E[3],a:E[4]}:(E=Ke.hsv.exec(R))?{h:E[1],s:E[2],v:E[3]}:(E=Ke.hsva.exec(R))?{h:E[1],s:E[2],v:E[3],a:E[4]}:(E=Ke.hex8.exec(R))?{r:ke(E[1]),g:ke(E[2]),b:ke(E[3]),a:G0(E[4]),format:j?"name":"hex8"}:(E=Ke.hex6.exec(R))?{r:ke(E[1]),g:ke(E[2]),b:ke(E[3]),format:j?"name":"hex"}:(E=Ke.hex4.exec(R))?{r:ke(E[1]+""+E[1]),g:ke(E[2]+""+E[2]),b:ke(E[3]+""+E[3]),a:G0(E[4]+""+E[4]),format:j?"name":"hex8"}:(E=Ke.hex3.exec(R))?{r:ke(E[1]+""+E[1]),g:ke(E[2]+""+E[2]),b:ke(E[3]+""+E[3]),format:j?"name":"hex"}:!1}(l)),Gl(l)=="object"&&(Dn(l.r)&&Dn(l.g)&&Dn(l.b)?(y=l.r,x=l.g,M=l.b,u={r:255*_t(y,255),g:255*_t(x,255),b:255*_t(M,255)},p=!0,v=String(l.r).substr(-1)==="%"?"prgb":"rgb"):Dn(l.h)&&Dn(l.s)&&Dn(l.v)?(f=Yr(l.s),h=Yr(l.v),u=function(R,E,j){R=6*_t(R,360),E=_t(E,100),j=_t(j,100);var V=Math.floor(R),q=R-V,L=j*(1-E),Q=j*(1-q*E),H=j*(1-(1-q)*E),I=V%6,lt=[j,Q,L,L,H,j][I],K=[H,j,j,Q,L,L][I],ct=[L,L,H,j,j,Q][I];return{r:255*lt,g:255*K,b:255*ct}}(l.h,f,h),p=!0,v="hsv"):Dn(l.h)&&Dn(l.s)&&Dn(l.l)&&(f=Yr(l.s),m=Yr(l.l),u=function(R,E,j){var V,q,L;function Q(lt,K,ct){return ct<0&&(ct+=1),ct>1&&(ct-=1),ct<1/6?lt+6*(K-lt)*ct:ct<.5?K:ct<2/3?lt+(K-lt)*(2/3-ct)*6:lt}if(R=_t(R,360),E=_t(E,100),j=_t(j,100),E===0)V=q=L=j;else{var H=j<.5?j*(1+E):j+E-j*E,I=2*j-H;V=Q(I,H,R+1/3),q=Q(I,H,R),L=Q(I,H,R-1/3)}return{r:255*V,g:255*q,b:255*L}}(l.h,f,m),p=!0,v="hsl"),l.hasOwnProperty("a")&&(d=l.a));var y,x,M;return d=Yv(d),{ok:p,format:l.format||v,r:Math.min(255,Math.max(u.r,0)),g:Math.min(255,Math.max(u.g,0)),b:Math.min(255,Math.max(u.b,0)),a:d}}(n);this._originalInput=n,this._r=o.r,this._g=o.g,this._b=o.b,this._a=o.a,this._roundA=Math.round(100*this._a)/100,this._format=i.format||o.format,this._gradientType=i.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=o.ok}function L0(n,i,o){n=_t(n,255),i=_t(i,255),o=_t(o,255);var l,u,d=Math.max(n,i,o),f=Math.min(n,i,o),h=(d+f)/2;if(d==f)l=u=0;else{var m=d-f;switch(u=h>.5?m/(2-d-f):m/(d+f),d){case n:l=(i-o)/m+(i<o?6:0);break;case i:l=(o-n)/m+2;break;case o:l=(n-i)/m+4}l/=6}return{h:l,s:u,l:h}}function B0(n,i,o){n=_t(n,255),i=_t(i,255),o=_t(o,255);var l,u,d=Math.max(n,i,o),f=Math.min(n,i,o),h=d,m=d-f;if(u=d===0?0:m/d,d==f)l=0;else{switch(d){case n:l=(i-o)/m+(i<o?6:0);break;case i:l=(o-n)/m+2;break;case o:l=(n-i)/m+4}l/=6}return{h:l,s:u,v:h}}function H0(n,i,o,l){var u=[Qe(Math.round(n).toString(16)),Qe(Math.round(i).toString(16)),Qe(Math.round(o).toString(16))];return l&&u[0].charAt(0)==u[0].charAt(1)&&u[1].charAt(0)==u[1].charAt(1)&&u[2].charAt(0)==u[2].charAt(1)?u[0].charAt(0)+u[1].charAt(0)+u[2].charAt(0):u.join("")}function q0(n,i,o,l){return[Qe(Gv(l)),Qe(Math.round(n).toString(16)),Qe(Math.round(i).toString(16)),Qe(Math.round(o).toString(16))].join("")}function d5(n,i){i=i===0?0:i||10;var o=W(n).toHsl();return o.s-=i/100,o.s=ns(o.s),W(o)}function h5(n,i){i=i===0?0:i||10;var o=W(n).toHsl();return o.s+=i/100,o.s=ns(o.s),W(o)}function m5(n){return W(n).desaturate(100)}function p5(n,i){i=i===0?0:i||10;var o=W(n).toHsl();return o.l+=i/100,o.l=ns(o.l),W(o)}function g5(n,i){i=i===0?0:i||10;var o=W(n).toRgb();return o.r=Math.max(0,Math.min(255,o.r-Math.round(-i/100*255))),o.g=Math.max(0,Math.min(255,o.g-Math.round(-i/100*255))),o.b=Math.max(0,Math.min(255,o.b-Math.round(-i/100*255))),W(o)}function v5(n,i){i=i===0?0:i||10;var o=W(n).toHsl();return o.l-=i/100,o.l=ns(o.l),W(o)}function b5(n,i){var o=W(n).toHsl(),l=(o.h+i)%360;return o.h=l<0?360+l:l,W(o)}function y5(n){var i=W(n).toHsl();return i.h=(i.h+180)%360,W(i)}function Y0(n,i){if(isNaN(i)||i<=0)throw new Error("Argument to polyad must be a positive number");for(var o=W(n).toHsl(),l=[W(n)],u=360/i,d=1;d<i;d++)l.push(W({h:(o.h+d*u)%360,s:o.s,l:o.l}));return l}function x5(n){var i=W(n).toHsl(),o=i.h;return[W(n),W({h:(o+72)%360,s:i.s,l:i.l}),W({h:(o+216)%360,s:i.s,l:i.l})]}function S5(n,i,o){i=i||6,o=o||30;var l=W(n).toHsl(),u=360/o,d=[W(n)];for(l.h=(l.h-(u*i>>1)+720)%360;--i;)l.h=(l.h+u)%360,d.push(W(l));return d}function T5(n,i){i=i||6;for(var o=W(n).toHsv(),l=o.h,u=o.s,d=o.v,f=[],h=1/i;i--;)f.push(W({h:l,s:u,v:d})),d=(d+h)%1;return f}W.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var n=this.toRgb();return(299*n.r+587*n.g+114*n.b)/1e3},getLuminance:function(){var n,i,o,l=this.toRgb();return n=l.r/255,i=l.g/255,o=l.b/255,.2126*(n<=.03928?n/12.92:Math.pow((n+.055)/1.055,2.4))+.7152*(i<=.03928?i/12.92:Math.pow((i+.055)/1.055,2.4))+.0722*(o<=.03928?o/12.92:Math.pow((o+.055)/1.055,2.4))},setAlpha:function(n){return this._a=Yv(n),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var n=B0(this._r,this._g,this._b);return{h:360*n.h,s:n.s,v:n.v,a:this._a}},toHsvString:function(){var n=B0(this._r,this._g,this._b),i=Math.round(360*n.h),o=Math.round(100*n.s),l=Math.round(100*n.v);return this._a==1?"hsv("+i+", "+o+"%, "+l+"%)":"hsva("+i+", "+o+"%, "+l+"%, "+this._roundA+")"},toHsl:function(){var n=L0(this._r,this._g,this._b);return{h:360*n.h,s:n.s,l:n.l,a:this._a}},toHslString:function(){var n=L0(this._r,this._g,this._b),i=Math.round(360*n.h),o=Math.round(100*n.s),l=Math.round(100*n.l);return this._a==1?"hsl("+i+", "+o+"%, "+l+"%)":"hsla("+i+", "+o+"%, "+l+"%, "+this._roundA+")"},toHex:function(n){return H0(this._r,this._g,this._b,n)},toHexString:function(n){return"#"+this.toHex(n)},toHex8:function(n){return function(i,o,l,u,d){var f=[Qe(Math.round(i).toString(16)),Qe(Math.round(o).toString(16)),Qe(Math.round(l).toString(16)),Qe(Gv(u))];return d&&f[0].charAt(0)==f[0].charAt(1)&&f[1].charAt(0)==f[1].charAt(1)&&f[2].charAt(0)==f[2].charAt(1)&&f[3].charAt(0)==f[3].charAt(1)?f[0].charAt(0)+f[1].charAt(0)+f[2].charAt(0)+f[3].charAt(0):f.join("")}(this._r,this._g,this._b,this._a,n)},toHex8String:function(n){return"#"+this.toHex8(n)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return this._a==1?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(100*_t(this._r,255))+"%",g:Math.round(100*_t(this._g,255))+"%",b:Math.round(100*_t(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return this._a==1?"rgb("+Math.round(100*_t(this._r,255))+"%, "+Math.round(100*_t(this._g,255))+"%, "+Math.round(100*_t(this._b,255))+"%)":"rgba("+Math.round(100*_t(this._r,255))+"%, "+Math.round(100*_t(this._g,255))+"%, "+Math.round(100*_t(this._b,255))+"%, "+this._roundA+")"},toName:function(){return this._a===0?"transparent":!(this._a<1)&&(A5[H0(this._r,this._g,this._b,!0)]||!1)},toFilter:function(n){var i="#"+q0(this._r,this._g,this._b,this._a),o=i,l=this._gradientType?"GradientType = 1, ":"";if(n){var u=W(n);o="#"+q0(u._r,u._g,u._b,u._a)}return"progid:DXImageTransform.Microsoft.gradient("+l+"startColorstr="+i+",endColorstr="+o+")"},toString:function(n){var i=!!n;n=n||this._format;var o=!1,l=this._a<1&&this._a>=0;return i||!l||n!=="hex"&&n!=="hex6"&&n!=="hex3"&&n!=="hex4"&&n!=="hex8"&&n!=="name"?(n==="rgb"&&(o=this.toRgbString()),n==="prgb"&&(o=this.toPercentageRgbString()),n!=="hex"&&n!=="hex6"||(o=this.toHexString()),n==="hex3"&&(o=this.toHexString(!0)),n==="hex4"&&(o=this.toHex8String(!0)),n==="hex8"&&(o=this.toHex8String()),n==="name"&&(o=this.toName()),n==="hsl"&&(o=this.toHslString()),n==="hsv"&&(o=this.toHsvString()),o||this.toHexString()):n==="name"&&this._a===0?this.toName():this.toRgbString()},clone:function(){return W(this.toString())},_applyModification:function(n,i){var o=n.apply(null,[this].concat([].slice.call(i)));return this._r=o._r,this._g=o._g,this._b=o._b,this.setAlpha(o._a),this},lighten:function(){return this._applyModification(p5,arguments)},brighten:function(){return this._applyModification(g5,arguments)},darken:function(){return this._applyModification(v5,arguments)},desaturate:function(){return this._applyModification(d5,arguments)},saturate:function(){return this._applyModification(h5,arguments)},greyscale:function(){return this._applyModification(m5,arguments)},spin:function(){return this._applyModification(b5,arguments)},_applyCombination:function(n,i){return n.apply(null,[this].concat([].slice.call(i)))},analogous:function(){return this._applyCombination(S5,arguments)},complement:function(){return this._applyCombination(y5,arguments)},monochromatic:function(){return this._applyCombination(T5,arguments)},splitcomplement:function(){return this._applyCombination(x5,arguments)},triad:function(){return this._applyCombination(Y0,[3])},tetrad:function(){return this._applyCombination(Y0,[4])}},W.fromRatio=function(n,i){if(Gl(n)=="object"){var o={};for(var l in n)n.hasOwnProperty(l)&&(o[l]=l==="a"?n[l]:Yr(n[l]));n=o}return W(n,i)},W.equals=function(n,i){return!(!n||!i)&&W(n).toRgbString()==W(i).toRgbString()},W.random=function(){return W.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})},W.mix=function(n,i,o){o=o===0?0:o||50;var l=W(n).toRgb(),u=W(i).toRgb(),d=o/100;return W({r:(u.r-l.r)*d+l.r,g:(u.g-l.g)*d+l.g,b:(u.b-l.b)*d+l.b,a:(u.a-l.a)*d+l.a})},W.readability=function(n,i){var o=W(n),l=W(i);return(Math.max(o.getLuminance(),l.getLuminance())+.05)/(Math.min(o.getLuminance(),l.getLuminance())+.05)},W.isReadable=function(n,i,o){var l,u,d=W.readability(n,i);switch(u=!1,(l=function(f){var h,m;return h=((f=f||{level:"AA",size:"small"}).level||"AA").toUpperCase(),m=(f.size||"small").toLowerCase(),h!=="AA"&&h!=="AAA"&&(h="AA"),m!=="small"&&m!=="large"&&(m="small"),{level:h,size:m}}(o)).level+l.size){case"AAsmall":case"AAAlarge":u=d>=4.5;break;case"AAlarge":u=d>=3;break;case"AAAsmall":u=d>=7}return u},W.mostReadable=function(n,i,o){var l,u,d,f,h=null,m=0;u=(o=o||{}).includeFallbackColors,d=o.level,f=o.size;for(var p=0;p<i.length;p++)(l=W.readability(n,i[p]))>m&&(m=l,h=W(i[p]));return W.isReadable(n,h,{level:d,size:f})||!u?h:(o.includeFallbackColors=!1,W.mostReadable(n,["#fff","#000"],o))};var of=W.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},A5=W.hexNames=function(n){var i={};for(var o in n)n.hasOwnProperty(o)&&(i[n[o]]=o);return i}(of);function Yv(n){return n=parseFloat(n),(isNaN(n)||n<0||n>1)&&(n=1),n}function _t(n,i){(function(l){return typeof l=="string"&&l.indexOf(".")!=-1&&parseFloat(l)===1})(n)&&(n="100%");var o=function(l){return typeof l=="string"&&l.indexOf("%")!=-1}(n);return n=Math.min(i,Math.max(0,parseFloat(n))),o&&(n=parseInt(n*i,10)/100),Math.abs(n-i)<1e-6?1:n%i/parseFloat(i)}function ns(n){return Math.min(1,Math.max(0,n))}function ke(n){return parseInt(n,16)}function Qe(n){return n.length==1?"0"+n:""+n}function Yr(n){return n<=1&&(n=100*n+"%"),n}function Gv(n){return Math.round(255*parseFloat(n)).toString(16)}function G0(n){return ke(n)/255}var ra,kl,Rl,Ke=(kl="[\\s|\\(]+("+(ra="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)")+")[,|\\s]+("+ra+")[,|\\s]+("+ra+")\\s*\\)?",Rl="[\\s|\\(]+("+ra+")[,|\\s]+("+ra+")[,|\\s]+("+ra+")[,|\\s]+("+ra+")\\s*\\)?",{CSS_UNIT:new RegExp(ra),rgb:new RegExp("rgb"+kl),rgba:new RegExp("rgba"+Rl),hsl:new RegExp("hsl"+kl),hsla:new RegExp("hsla"+Rl),hsv:new RegExp("hsv"+kl),hsva:new RegExp("hsva"+Rl),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/});function Dn(n){return!!Ke.CSS_UNIT.exec(n)}var O5=function(n,i){var o=(typeof n=="string"?parseInt(n):n)||0;if(o>=-5&&o<=5){var l=o,u=parseFloat(i),d=u+l*(u/5)*-1;return(d==0||d<=Number.EPSILON)&&(d=.1),{animationPeriod:d+"s"}}return{animationPeriod:i}},E5=function(n,i){var o=n||{},l="";switch(i){case"small":l="12px";break;case"medium":l="16px";break;case"large":l="20px";break;default:l=void 0}var u={};if(o.fontSize){var d=o.fontSize;u=function(f,h){var m={};for(var p in f)Object.prototype.hasOwnProperty.call(f,p)&&h.indexOf(p)<0&&(m[p]=f[p]);if(f!=null&&typeof Object.getOwnPropertySymbols=="function"){var v=0;for(p=Object.getOwnPropertySymbols(f);v<p.length;v++)h.indexOf(p[v])<0&&Object.prototype.propertyIsEnumerable.call(f,p[v])&&(m[p[v]]=f[p[v]])}return m}(o,["fontSize"]),l=d}return{fontSize:l,styles:u}},w5={color:"currentColor",mixBlendMode:"difference",width:"unset",display:"block",paddingTop:"2px"},M5=function(n){var i=n.className,o=n.text,l=n.textColor,u=n.staticText,d=n.style;return o?de.createElement("span",{className:"rli-d-i-b rli-text-format ".concat(i||"").trim(),style:ln(ln(ln({},u&&w5),l&&{color:l,mixBlendMode:"unset"}),d&&d)},typeof o=="string"&&o.length?o:"loading"):null},Xv="rgb(50, 205, 50)";function D5(n,i){if(i===void 0&&(i=0),n.length===0)throw new Error("Input array cannot be empty!");var o=[];return function l(u,d){return d===void 0&&(d=0),o.push.apply(o,u),o.length<d&&l(o,d),o.slice(0,d)}(n,i)}$t(`.atom-rli-bounding-box {
  --atom-phase1-rgb: 50, 205, 50;
  color: rgba(var(--atom-phase1-rgb), 1);
  font-size: 16px;
  position: relative;
  text-align: unset;
  isolation: isolate;
}
.atom-rli-bounding-box .atom-indicator {
  width: 6em;
  height: 6em;
  position: relative;
  perspective: 6em;
  overflow: hidden;
  color: rgba(var(--atom-phase1-rgb), 1);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7gg;
}
.atom-rli-bounding-box .atom-indicator::after, .atom-rli-bounding-box .atom-indicator::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 0.48em;
  height: 0.48em;
  margin: auto;
  border-radius: 50%;
  background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7eg;
}
.atom-rli-bounding-box .atom-indicator::before {
  filter: drop-shadow(0px 0px 0.0625em currentColor);
}
.atom-rli-bounding-box .atom-indicator .electron-orbit {
  color: rgba(var(--atom-phase1-rgb), 0.85);
  border: 0;
  border-left: 0.4em solid currentColor;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  width: 4.8em;
  height: 4.8em;
  background-color: transparent;
  border-radius: 50%;
  transform-style: preserve-3d;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite uxlv7fj, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7gy;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: 50%;
  color: rgba(var(--atom-phase1-rgb), 0.18);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7hv;
  border: 0.125em solid currentColor;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit::before {
  content: "";
  width: 0.192em;
  height: 0.192em;
  position: absolute;
  border-radius: 50%;
  top: -0.096em;
  right: 0;
  bottom: 0;
  left: 0;
  margin: 0 auto;
  color: rgba(var(--atom-phase1-rgb), 1);
  box-shadow: 0px 0px 0.0625em 0.0625em currentColor, 0px 0px 0.0625em 0.125em currentColor;
  background-color: currentColor;
  transform: rotateY(-70deg);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite uxlv7ew, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7gg;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(1) {
  --orbit-vector-factor: -1;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(2) {
  --orbit-vector-factor: 1;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(3) {
  --orbit-vector-factor: 0;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
  animation-delay: calc(var(--rli-animation-duration, 1s) * 0.5 * -1), calc(var(--rli-animation-duration, 1s) * 4 * -1);
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(3)::before {
  animation-delay: calc(var(--rli-animation-duration, 1s) * 0.5 * -1), calc(var(--rli-animation-duration, 1s) * 4 * -1);
}
.atom-rli-bounding-box .atom-text {
  color: currentColor;
  mix-blend-mode: difference;
  width: unset;
  display: block;
}

@property --atom-phase1-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase2-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase3-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase4-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7fj {
  from {
    transform: rotateY(70deg) rotateX(calc(54deg * var(--orbit-vector-factor))) rotateZ(0deg);
  }
  to {
    transform: rotateY(70deg) rotateX(calc(54deg * var(--orbit-vector-factor))) rotateZ(360deg);
  }
}
@keyframes uxlv7ew {
  from {
    transform: rotateY(-70deg) rotateX(0deg);
  }
  to {
    transform: rotateY(-70deg) rotateX(-360deg);
  }
}
@keyframes uxlv7eg {
  100%, 0% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  }
  20% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  }
  25% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  45% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  50% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  70% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  75% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  95% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
}
@keyframes uxlv7gg {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 1);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 1);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1);
  }
}
@keyframes uxlv7gy {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 0.85);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 0.85);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.85);
  }
}
@keyframes uxlv7hv {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 0.18);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 0.18);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.18);
  }
}`);W(Xv).toRgb();Array.from({length:4},function(n,i){return"--atom-phase".concat(i+1,"-rgb")});$t(`.commet-rli-bounding-box {
  --commet-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  width: 6.85em;
  height: 6.85em;
  overflow: hidden;
  display: inline-block;
  box-sizing: border-box;
  position: relative;
  isolation: isolate;
}
.commet-rli-bounding-box .commet-indicator {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  box-sizing: border-box;
  width: 6em;
  height: 6em;
  color: var(--commet-phase1-color);
  display: inline-block;
  isolation: isolate;
  position: absolute;
  z-index: 0;
  animation: calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, cubic-bezier(0.08, 0.03, 0.91, 0.93)) infinite uxlv7cp;
}
.commet-rli-bounding-box .commet-indicator .commet-box {
  position: absolute;
  display: inline-block;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  animation: uxlv7bx var(--rli-animation-duration, 1.2s) var(--rli-animation-function, cubic-bezier(0.08, 0.03, 0.91, 0.93)) infinite;
}
.commet-rli-bounding-box .commet-indicator .commet-box:nth-of-type(1) {
  width: 100%;
  height: 100%;
  animation-direction: normal;
}
.commet-rli-bounding-box .commet-indicator .commet-box:nth-of-type(2) {
  width: 70%;
  height: 70%;
  animation-direction: reverse;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commetball-box {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  display: inline-block;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commetball-box::before {
  content: "";
  width: 0.5em;
  height: 0.5em;
  border-radius: 50%;
  background-color: currentColor;
  position: absolute;
  top: -0.125em;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0 0 0.2em 0em currentColor, 0 0 0.6em 0em currentColor;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  border-radius: 50%;
  box-sizing: border-box;
  border-style: solid;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail.trail1 {
  border-color: currentColor transparent transparent currentColor;
  border-width: 0.25em 0.25em 0 0;
  transform: rotateZ(-45deg);
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail.trail2 {
  border-color: currentColor currentColor transparent transparent;
  border-width: 0.25em 0 0 0.25em;
  transform: rotateZ(45deg);
}
.commet-rli-bounding-box .commet-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--commet-phase1-color);
}

@property --commet-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7bx {
  to {
    transform: rotate(1turn);
  }
}
@keyframes uxlv7cp {
  100%, 0% {
    color: var(--commet-phase1-color);
  }
  20% {
    color: var(--commet-phase1-color);
  }
  25% {
    color: var(--commet-phase2-color, var(--commet-phase1-color));
  }
  45% {
    color: var(--commet-phase2-color, var(--commet-phase1-color));
  }
  50% {
    color: var(--commet-phase3-color, var(--commet-phase1-color));
  }
  70% {
    color: var(--commet-phase3-color, var(--commet-phase1-color));
  }
  75% {
    color: var(--commet-phase4-color, var(--commet-phase1-color));
  }
  95% {
    color: var(--commet-phase4-color, var(--commet-phase1-color));
  }
}`);Array.from({length:4},function(n,i){return"--commet-phase".concat(i+1,"-color")});$t(`.OP-annulus-rli-bounding-box {
  --OP-annulus-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-annulus-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator .whirl {
  animation: uxlv7n7 calc(var(--rli-animation-duration, 1.5s) * 1.33) linear infinite;
  height: 100%;
  transform-origin: center center;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator .path {
  stroke-dasharray: 1, 125;
  stroke-dashoffset: 0;
  animation: var(--rli-animation-duration, 1.5s) var(--rli-animation-function, ease-in-out) infinite uxlv7oa, calc(var(--rli-animation-duration, 1.5s) * 4) var(--rli-animation-function, ease-in-out) infinite uxlv7p5;
  stroke-linecap: round;
}
.OP-annulus-rli-bounding-box .OP-annulus-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.5s;
}
@keyframes uxlv7n7 {
  100% {
    transform: rotate(360deg);
  }
}
@keyframes uxlv7oa {
  0% {
    stroke-dasharray: 1, 125;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 98, 125;
    stroke-dashoffset: -35px;
  }
  100% {
    stroke-dasharray: 98, 125;
    stroke-dashoffset: -124px;
  }
}
@keyframes uxlv7p5 {
  100%, 0% {
    stroke: var(--OP-annulus-phase1-color);
  }
  22% {
    stroke: var(--OP-annulus-phase1-color);
  }
  25% {
    stroke: var(--OP-annulus-phase2-color, var(--OP-annulus-phase1-color));
  }
  42% {
    stroke: var(--OP-annulus-phase2-color, var(--OP-annulus-phase1-color));
  }
  50% {
    stroke: var(--OP-annulus-phase3-color, var(--OP-annulus-phase1-color));
  }
  72% {
    stroke: var(--OP-annulus-phase3-color, var(--OP-annulus-phase1-color));
  }
  75% {
    stroke: var(--OP-annulus-phase4-color, var(--OP-annulus-phase1-color));
  }
  97% {
    stroke: var(--OP-annulus-phase4-color, var(--OP-annulus-phase1-color));
  }
}`);Array.from({length:4},function(n,i){return"--OP-annulus-phase".concat(i+1,"-color")});function _c(n){return n&&n.Math===Math&&n}$t(`.OP-dotted-rli-bounding-box {
  --OP-dotted-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  display: inline-block;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-dotted-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .OP-dotted-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder .dot {
  display: block;
  margin: 0 auto;
  width: 15%;
  height: 15%;
  background-color: currentColor;
  border-radius: 50%;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) infinite uxlv7nu, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) infinite uxlv7ol;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(1) {
  transform: rotate(0deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(1) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 12 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(2) {
  transform: rotate(30deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(2) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 11 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(3) {
  transform: rotate(60deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(3) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 10 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(4) {
  transform: rotate(90deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(4) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 9 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(5) {
  transform: rotate(120deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(5) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 8 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(6) {
  transform: rotate(150deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(6) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 7 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(7) {
  transform: rotate(180deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(7) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 6 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(8) {
  transform: rotate(210deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(8) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 5 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(9) {
  transform: rotate(240deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(9) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 4 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(10) {
  transform: rotate(270deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(10) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 3 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(11) {
  transform: rotate(300deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(11) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 2 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(12) {
  transform: rotate(330deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(12) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 1 * -1);
}

@property --OP-dotted-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7nu {
  0%, 39%, 100% {
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
}
@keyframes uxlv7ol {
  100%, 0% {
    background-color: var(--OP-dotted-phase1-color);
  }
  22% {
    background-color: var(--OP-dotted-phase1-color);
  }
  25% {
    background-color: var(--OP-dotted-phase2-color, var(--OP-dotted-phase1-color));
  }
  47% {
    background-color: var(--OP-dotted-phase2-color, var(--OP-dotted-phase1-color));
  }
  50% {
    background-color: var(--OP-dotted-phase3-color, var(--OP-dotted-phase1-color));
  }
  72% {
    background-color: var(--OP-dotted-phase3-color, var(--OP-dotted-phase1-color));
  }
  75% {
    background-color: var(--OP-dotted-phase4-color, var(--OP-dotted-phase1-color));
  }
  97% {
    background-color: var(--OP-dotted-phase4-color, var(--OP-dotted-phase1-color));
  }
}`);_c(typeof window=="object"&&window)||_c(typeof self=="object"&&self)||_c(typeof global=="object"&&global)||function(){return this}()||Function("return this")();Array.from({length:4},function(n,i){return"--OP-dotted-phase".concat(i+1,"-color")});$t(`.OP-spokes-rli-bounding-box {
  --OP-spokes-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  position: relative;
  color: var(--OP-spokes-phase1-color);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator {
  width: 4.8em;
  height: 4.8em;
  display: block;
  position: relative;
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke {
  position: absolute;
  height: 1.2em;
  width: 0.4em;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto auto auto 50%;
  background-color: var(--OP-spokes-phase1-color);
  border-radius: 0.24em;
  opacity: 0;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) backwards infinite uxlv7pw, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) infinite uxlv7qn;
  transform-origin: left center;
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(1) {
  transform: rotate(calc(0 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(11 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(2) {
  transform: rotate(calc(1 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(10 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(3) {
  transform: rotate(calc(2 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(9 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(4) {
  transform: rotate(calc(3 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(8 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(5) {
  transform: rotate(calc(4 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(7 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(6) {
  transform: rotate(calc(5 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(6 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(7) {
  transform: rotate(calc(6 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(5 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(8) {
  transform: rotate(calc(7 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(4 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(9) {
  transform: rotate(calc(8 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(3 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(10) {
  transform: rotate(calc(9 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(2 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(11) {
  transform: rotate(calc(10 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(1 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(12) {
  transform: rotate(calc(11 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(0 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--OP-spokes-phase1-color);
  z-index: -2;
}

@property --OP-spokes-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7pw {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes uxlv7qn {
  100%, 0% {
    background-color: var(--OP-spokes-phase1-color);
  }
  22% {
    background-color: var(--OP-spokes-phase1-color);
  }
  25% {
    background-color: var(--OP-spokes-phase2-color, var(--OP-spokes-phase1-color));
  }
  42% {
    background-color: var(--OP-spokes-phase2-color, var(--OP-spokes-phase1-color));
  }
  50% {
    background-color: var(--OP-spokes-phase3-color, var(--OP-spokes-phase1-color));
  }
  72% {
    background-color: var(--OP-spokes-phase3-color, var(--OP-spokes-phase1-color));
  }
  75% {
    background-color: var(--OP-spokes-phase4-color, var(--OP-spokes-phase1-color));
  }
  97% {
    background-color: var(--OP-spokes-phase4-color, var(--OP-spokes-phase1-color));
  }
}`);Array.from({length:4},function(n,i){return"--OP-spokes-phase".concat(i+1,"-color")});$t(`.OP-annulus-dual-sectors-rli-bounding-box {
  --OP-annulus-dual-sectors-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  display: inline-block;
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator {
  width: 5em;
  height: 5em;
  display: inline-block;
  position: relative;
  z-index: 0;
  color: var(--OP-annulus-dual-sectors-phase1-color);
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator .annulus-sectors {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border-width: 0.34em;
  border-style: solid;
  border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent var(--OP-annulus-dual-sectors-phase1-color) transparent;
  background-color: transparent;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, linear) infinite uxlv7ra, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, linear) infinite uxlv7sv;
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator .OP-annulus-dual-sectors-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-dual-sectors-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7ra {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes uxlv7sv {
  100%, 0% {
    border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent;
  }
  20% {
    border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent;
  }
  25% {
    border-color: var(--OP-annulus-dual-sectors-phase2-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  45% {
    border-color: var(--OP-annulus-dual-sectors-phase2-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  50% {
    border-color: var(--OP-annulus-dual-sectors-phase3-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  70% {
    border-color: var(--OP-annulus-dual-sectors-phase3-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  75% {
    border-color: var(--OP-annulus-dual-sectors-phase4-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  95% {
    border-color: var(--OP-annulus-dual-sectors-phase4-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
}`);Array.from({length:4},function(n,i){return"--OP-annulus-dual-sectors-phase".concat(i+1,"-color")});$t(`.OP-annulus-sector-track-rli-bounding-box {
  --OP-annulus-track-phase1-color: rgba(50, 205, 50, 0.22);
  --OP-annulus-sector-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-annulus-sector-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator .annulus-track-ring {
  width: 100%;
  height: 100%;
  border-width: 0.34em;
  border-style: solid;
  border-radius: 50%;
  box-sizing: border-box;
  border-color: var(--OP-annulus-track-phase1-color);
  border-top-color: var(--OP-annulus-sector-phase1-color);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite uxlv7rl, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7tf;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator .OP-annulus-sector-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-track-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-sector-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7rl {
  to {
    transform: rotate(1turn);
  }
}
@keyframes uxlv7tf {
  100%, 0% {
    border-color: var(--OP-annulus-track-phase1-color);
    border-top-color: var(--OP-annulus-sector-phase1-color);
  }
  18% {
    border-color: var(--OP-annulus-track-phase1-color);
    border-top-color: var(--OP-annulus-sector-phase1-color);
  }
  25% {
    border-color: var(--OP-annulus-track-phase2-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase2-color, var(--OP-annulus-sector-phase1-color));
  }
  43% {
    border-color: var(--OP-annulus-track-phase2-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase2-color, var(--OP-annulus-sector-phase1-color));
  }
  50% {
    border-color: var(--OP-annulus-track-phase3-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase3-color, var(--OP-annulus-sector-phase1-color));
  }
  68% {
    border-color: var(--OP-annulus-track-phase3-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase3-color, var(--OP-annulus-sector-phase1-color));
  }
  75% {
    border-color: var(--OP-annulus-track-phase4-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase4-color, var(--OP-annulus-sector-phase1-color));
  }
  93% {
    border-color: var(--OP-annulus-track-phase4-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase4-color, var(--OP-annulus-sector-phase1-color));
  }
}`);Array.from({length:4},function(n,i){return["--OP-annulus-track-phase".concat(i+1,"-color"),"--OP-annulus-sector-phase".concat(i+1,"-color")]});$t(`.foursquare-rli-bounding-box {
  --four-square-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  color: var(--four-square-phase1-color);
  display: inline-block;
  overflow: hidden;
}
.foursquare-rli-bounding-box .foursquare-indicator {
  height: 5.3033008589em;
  width: 5.3033008589em;
  position: relative;
  display: block;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container {
  position: absolute;
  z-index: 0;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  height: 2.5em;
  width: 2.5em;
  color: inherit;
  will-change: color, width, height;
  transform: rotate(45deg);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) infinite uxlv7dk, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) infinite uxlv7es;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square {
  position: absolute;
  width: 1.25em;
  height: 1.25em;
  border-radius: 0.1875em;
  background-color: currentColor;
  animation: uxlv7dd var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) both infinite;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square1 {
  top: 0;
  left: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square2 {
  top: 0;
  right: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square3 {
  bottom: 0;
  left: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square4 {
  bottom: 0;
  right: 0;
}

@property --four-square-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7dk {
  0% {
    width: 2.5em;
    height: 2.5em;
  }
  10% {
    width: 2.5em;
    height: 2.5em;
  }
  50% {
    width: 3.75em;
    height: 3.75em;
  }
  90% {
    width: 2.5em;
    height: 2.5em;
  }
  100% {
    width: 2.5em;
    height: 2.5em;
  }
}
@keyframes uxlv7dd {
  0% {
    transform: rotateZ(0deg);
  }
  10% {
    transform: rotateZ(0deg);
  }
  50% {
    transform: rotateZ(90deg);
  }
  90% {
    transform: rotateZ(90deg);
  }
  100% {
    transform: rotateZ(90deg);
  }
}
@keyframes uxlv7es {
  100%, 0% {
    color: var(--four-square-phase1-color);
  }
  20% {
    color: var(--four-square-phase1-color);
  }
  25% {
    color: var(--four-square-phase2-color, var(--four-square-phase1-color));
  }
  45% {
    color: var(--four-square-phase2-color, var(--four-square-phase1-color));
  }
  50% {
    color: var(--four-square-phase3-color, var(--four-square-phase1-color));
  }
  70% {
    color: var(--four-square-phase3-color, var(--four-square-phase1-color));
  }
  75% {
    color: var(--four-square-phase4-color, var(--four-square-phase1-color));
  }
  95% {
    color: var(--four-square-phase4-color, var(--four-square-phase1-color));
  }
}`);Array.from({length:4},function(n,i){return"--four-square-phase".concat(i+1,"-color")});$t(`.mosaic-rli-bounding-box {
  --mosaic-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  color: var(--mosaic-phase1-color);
}
.mosaic-rli-bounding-box .mosaic-indicator {
  width: 5em;
  height: 5em;
  color: currentColor;
  display: grid;
  gap: 0.125em;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas: "a b c" "d e f" "g h i";
  position: relative;
  z-index: 0;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 105%;
  left: 50%;
  transform: translateX(-50%);
  z-index: -2;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube {
  background-color: var(--mosaic-phase1-color);
  animation-name: uxlv7i4, uxlv7is;
  animation-duration: var(--rli-animation-duration, 1.5s), calc(var(--rli-animation-duration, 1.5s) * 4);
  animation-timing-function: var(--rli-animation-function, ease-in-out);
  animation-iteration-count: infinite;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube1 {
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
  grid-area: a;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube2 {
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 3);
  grid-area: b;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube3 {
  grid-area: c;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 4);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube4 {
  grid-area: d;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 1);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube5 {
  grid-area: e;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube6 {
  grid-area: f;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 3);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube7 {
  grid-area: g;
  animation-delay: 0s;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube8 {
  grid-area: h;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 1);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube9 {
  grid-area: i;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
}

@property --mosaic-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.5s;
}
@keyframes uxlv7i4 {
  0%, 60%, 100% {
    transform: scale3D(1, 1, 1);
  }
  30% {
    transform: scale3D(0, 0, 1);
  }
}
@keyframes uxlv7is {
  100%, 0% {
    background-color: var(--mosaic-phase1-color);
  }
  25% {
    background-color: var(--mosaic-phase2-color, var(--mosaic-phase1-color));
  }
  50% {
    background-color: var(--mosaic-phase3-color, var(--mosaic-phase1-color));
  }
  75% {
    background-color: var(--mosaic-phase4-color, var(--mosaic-phase1-color));
  }
}`);Array.from({length:4},function(n,i){return"--mosaic-phase".concat(i+1,"-color")});$t(`.riple-rli-bounding-box {
  --riple-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--riple-phase1-color);
}
.riple-rli-bounding-box .riple-indicator {
  display: inline-block;
  width: 5em;
  height: 5em;
  position: relative;
  z-index: 0;
}
.riple-rli-bounding-box .riple-indicator .riple-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}
.riple-rli-bounding-box .riple-indicator .riple {
  --border-width: 0.25em;
  position: absolute;
  border: var(--border-width) solid var(--riple-phase1-color);
  opacity: 1;
  border-radius: 50%;
  will-change: top, right, left, bottom, border-color;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0, 0.2, 0.8, 1)) infinite uxlv7i1, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, cubic-bezier(0, 0.2, 0.8, 1)) infinite uxlv7io;
}
.riple-rli-bounding-box .riple-indicator .riple:nth-of-type(2) {
  animation-delay: calc(var(--rli-animation-duration, 1s) / 2 * -1);
}

@property --riple-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7i1 {
  0% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 0;
  }
  4.9% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 0;
  }
  5% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 1;
  }
  100% {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
  }
}
@keyframes uxlv7io {
  100%, 0% {
    border-color: var(--riple-phase1-color);
  }
  24.9% {
    border-color: var(--riple-phase1-color);
  }
  25% {
    border-color: var(--riple-phase2-color, var(--riple-phase1-color));
  }
  49.9% {
    border-color: var(--riple-phase2-color, var(--riple-phase1-color));
  }
  50% {
    border-color: var(--riple-phase3-color, var(--riple-phase1-color));
  }
  74.9% {
    border-color: var(--riple-phase3-color, var(--riple-phase1-color));
  }
  75% {
    border-color: var(--riple-phase4-color, var(--riple-phase1-color));
  }
  99.9% {
    border-color: var(--riple-phase4-color, var(--riple-phase1-color));
  }
}`);var wi=Array.from({length:4},function(n,i){return"--riple-phase".concat(i+1,"-color")}),C5=function(n){var i,o=E5(n?.style,n?.size),l=o.styles,u=o.fontSize,d=n?.easing,f=O5(n?.speedPlus,"1s").animationPeriod,h=function(m){var p={};if(m instanceof Array){for(var v=D5(m,wi.length),y=0;y<v.length&&!(y>=4);y++)p[wi[y]]=v[y];return p}try{if(typeof m!="string")throw new Error("Color String expected");for(var x=0;x<wi.length;x++)p[wi[x]]=m}catch(M){for(M instanceof Error?console.warn("[".concat(M.message,']: Received "').concat(typeof m,'" instead with value, ').concat(JSON.stringify(m))):console.warn("".concat(JSON.stringify(m)," received in <Riple /> indicator cannot be processed. Using default instead!")),x=0;x<wi.length;x++)p[wi[x]]=Xv}return p}((i=n?.color)!==null&&i!==void 0?i:"");return de.createElement("span",{className:"rli-d-i-b riple-rli-bounding-box",style:ln(ln(ln(ln(ln({},u&&{fontSize:u}),f&&{"--rli-animation-duration":f}),d&&{"--rli-animation-function":d}),h),l),role:"status","aria-live":"polite","aria-label":"Loading"},de.createElement("span",{className:"rli-d-i-b riple-indicator"},de.createElement("span",{className:"rli-d-i-b riple"}),de.createElement("span",{className:"rli-d-i-b riple"}),de.createElement(M5,{className:"riple-text",text:n?.text,textColor:n?.textColor})))};$t(`.pulsate-rli-bounding-box {
  --TD-pulsate-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
  box-sizing: border-box;
  color: var(--TD-pulsate-phase1-color);
}
.pulsate-rli-bounding-box .pulsate-indicator {
  width: 4.4em;
  height: 1.1em;
  text-align: center;
  position: relative;
  z-index: 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  align-items: center;
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot {
  width: 1.1em;
  height: 1.1em;
  border-radius: 50%;
  background-color: var(--TD-pulsate-phase1-color);
  transform: scale(0);
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) var(--delay) infinite uxlv7s0, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) var(--delay) infinite uxlv7to;
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(1) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.15 * -1);
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(2) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0);
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(3) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.15);
}
.pulsate-rli-bounding-box .pulsate-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 80%;
  text-transform: uppercase;
  text-align: center;
  font-size: 0.6em;
  letter-spacing: 0.5px;
  font-family: sans-serif;
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --TD-pulsate-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7s0 {
  0%, 90%, 100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
}
@keyframes uxlv7to {
  0%, 100% {
    background-color: var(--TD-pulsate-phase1-color);
  }
  24.9% {
    background-color: var(--TD-pulsate-phase1-color);
  }
  25% {
    background-color: var(--TD-pulsate-phase2-color, var(--TD-pulsate-phase1-color));
  }
  49.9% {
    background-color: var(--TD-pulsate-phase2-color, var(--TD-pulsate-phase1-color));
  }
  50% {
    background-color: var(--TD-pulsate-phase3-color, var(--TD-pulsate-phase1-color));
  }
  74.9% {
    background-color: var(--TD-pulsate-phase3-color, var(--TD-pulsate-phase1-color));
  }
  75% {
    background-color: var(--TD-pulsate-phase4-color, var(--TD-pulsate-phase1-color));
  }
  99.9% {
    background-color: var(--TD-pulsate-phase4-color, var(--TD-pulsate-phase1-color));
  }
}`);Array.from({length:4},function(n,i){return"--TD-pulsate-phase".concat(i+1,"-color")});$t(`.brick-stack-rli-bounding-box {
  --TD-brick-stack-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--TD-brick-stack-phase1-color);
}
.brick-stack-rli-bounding-box .brick-stack-indicator {
  width: 2.8em;
  height: 2.8em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.brick-stack-rli-bounding-box .brick-stack {
  width: 100%;
  height: 100%;
  background: radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 0 0/40% 40% no-repeat, radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 0 100%/40% 40% no-repeat, radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 100% 100%/40% 40% no-repeat;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, ease-out) infinite uxlv7tu, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, ease-out) infinite uxlv7us;
}

@property --TD-brick-stack-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7tu {
  0% {
    background-position: 0 0, 0 100%, 100% 100%;
  }
  25% {
    background-position: 100% 0, 0 100%, 100% 100%;
  }
  50% {
    background-position: 100% 0, 0 0, 100% 100%;
  }
  75% {
    background-position: 100% 0, 0 0, 0 100%;
  }
  100% {
    background-position: 100% 100%, 0 0, 0 100%;
  }
}
@keyframes uxlv7us {
  100%, 0% {
    color: var(--TD-brick-stack-phase1-color);
  }
  20% {
    color: var(--TD-brick-stack-phase1-color);
  }
  25% {
    color: var(--TD-brick-stack-phase2-color, var(--TD-brick-stack-phase1-color));
  }
  45% {
    color: var(--TD-brick-stack-phase2-color, var(--TD-brick-stack-phase1-color));
  }
  50% {
    color: var(--TD-brick-stack-phase3-color, var(--TD-brick-stack-phase1-color));
  }
  70% {
    color: var(--TD-brick-stack-phase3-color, var(--TD-brick-stack-phase1-color));
  }
  75% {
    color: var(--TD-brick-stack-phase4-color, var(--TD-brick-stack-phase1-color));
  }
  95% {
    color: var(--TD-brick-stack-phase4-color, var(--TD-brick-stack-phase1-color));
  }
}`);Array.from({length:4},function(n,i){return"--TD-brick-stack-phase".concat(i+1,"-color")});$t(`.bob-rli-bounding-box {
  --TD-bob-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--TD-bob-phase1-color);
}
.bob-rli-bounding-box .bob-indicator {
  width: 4.4em;
  height: 2.2em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.bob-rli-bounding-box .bob-indicator .bobbing,
.bob-rli-bounding-box .bob-indicator .bobbing::before,
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  width: 1.1em;
  height: 100%;
  display: grid;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, linear) var(--delay) infinite uxlv7u0, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, linear) var(--delay) infinite uxlv7vq;
}
.bob-rli-bounding-box .bob-indicator .bobbing::before,
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  content: "";
  grid-area: 1/1;
}
.bob-rli-bounding-box .bob-indicator .bobbing {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.12 * -1);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}
.bob-rli-bounding-box .bob-indicator .bobbing::before {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0);
  transform: translateX(150%);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.12);
  transform: translateX(300%);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}

@property --TD-bob-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7u0 {
  100%, 0% {
    background-position: 50% 50%;
  }
  15% {
    background-position: 50% 10%;
  }
  30% {
    background-position: 50% 100%;
  }
  40% {
    background-position: 50% 0%;
  }
  50% {
    background-position: 50% 90%;
  }
  70% {
    background-position: 50% 10%;
  }
  98% {
    background-position: 50% 50%;
  }
}
@keyframes uxlv7vq {
  100%, 0% {
    color: var(--TD-bob-phase1-color);
  }
  22% {
    color: var(--TD-bob-phase1-color);
  }
  25% {
    color: var(--TD-bob-phase2-color, var(--TD-bob-phase1-color));
  }
  47% {
    color: var(--TD-bob-phase2-color, var(--TD-bob-phase1-color));
  }
  50% {
    color: var(--TD-bob-phase3-color, var(--TD-bob-phase1-color));
  }
  72% {
    color: var(--TD-bob-phase3-color, var(--TD-bob-phase1-color));
  }
  75% {
    color: var(--TD-bob-phase4-color, var(--TD-bob-phase1-color));
  }
  97% {
    color: var(--TD-bob-phase4-color, var(--TD-bob-phase1-color));
  }
}`);Array.from({length:4},function(n,i){return"--TD-bob-phase".concat(i+1,"-color")});$t(`.bounce-rli-bounding-box {
  --TD-bounce-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--TD-bounce-phase1-color);
  display: inline-block;
  padding-bottom: 0.25125em;
}
.bounce-rli-bounding-box .wrapper {
  --dot1-delay: 0s;
  --dot1-x-offset: 0.55em;
  --dot2-delay: calc((var(--rli-animation-duration, 0.5s) + var(--rli-animation-duration, 0.5s) * 0.75) * -1);
  --dot2-x-offset: 2.2em;
  --dot3-delay: calc((var(--rli-animation-duration, 0.5s) + var(--rli-animation-duration, 0.5s) * 0.5) * -1);
  --dot3-x-offset: 3.85em;
  width: 5.5em;
  height: 3.125em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.bounce-rli-bounding-box .wrapper .group {
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.bounce-rli-bounding-box .wrapper .group .dot {
  width: 1.1em;
  height: 1.1em;
  position: absolute;
  border-radius: 50%;
  background-color: var(--TD-bounce-phase1-color);
  transform-origin: 50%;
  animation: var(--rli-animation-duration, 0.5s) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) alternate infinite uxlv7wc, calc(var(--rli-animation-duration, 0.5s) * 4) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) infinite uxlv7x6;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(1) {
  left: var(--dot1-x-offset);
  animation-delay: var(--dot1-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(2) {
  left: var(--dot2-x-offset);
  animation-delay: var(--dot2-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(3) {
  left: var(--dot3-x-offset);
  animation-delay: var(--dot3-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .shadow {
  width: 1.1em;
  height: 0.22em;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 101%;
  transform-origin: 50%;
  z-index: -1;
  filter: blur(1px);
  animation: var(--rli-animation-duration, 0.5s) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) alternate infinite uxlv7ww;
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(1) {
  left: var(--dot1-x-offset);
  animation-delay: var(--dot1-delay);
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(2) {
  left: var(--dot2-x-offset);
  animation-delay: var(--dot2-delay);
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(3) {
  left: var(--dot3-x-offset);
  animation-delay: var(--dot3-delay);
}

@property --TD-bounce-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 0.5s;
}
@keyframes uxlv7wc {
  0% {
    top: 0%;
  }
  60% {
    height: 1.25em;
    border-radius: 50%;
    transform: scaleX(1);
  }
  100% {
    top: 100%;
    height: 0.22em;
    transform: scaleX(1.5);
    filter: blur(0.4px);
  }
}
@keyframes uxlv7ww {
  0% {
    transform: scaleX(0.2);
    opacity: 0.2;
  }
  60% {
    opacity: 0.4;
  }
  100% {
    transform: scaleX(1.5);
    opacity: 0.6;
  }
}
@keyframes uxlv7x6 {
  0%, 100% {
    background-color: var(--TD-bounce-phase1-color);
  }
  20% {
    background-color: var(--TD-bounce-phase1-color);
  }
  25% {
    background-color: var(--TD-bounce-phase2-color, var(--TD-bounce-phase1-color));
  }
  45% {
    background-color: var(--TD-bounce-phase2-color, var(--TD-bounce-phase1-color));
  }
  50% {
    background-color: var(--TD-bounce-phase3-color, var(--TD-bounce-phase1-color));
  }
  70% {
    background-color: var(--TD-bounce-phase3-color, var(--TD-bounce-phase1-color));
  }
  75% {
    background-color: var(--TD-bounce-phase4-color, var(--TD-bounce-phase1-color));
  }
  95% {
    background-color: var(--TD-bounce-phase4-color, var(--TD-bounce-phase1-color));
  }
}`);Array.from({length:4},function(n,i){return"--TD-bounce-phase".concat(i+1,"-color")});$t(`.blink-blur-rli-bounding-box {
  --shape-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--shape-phase1-color);
}
.blink-blur-rli-bounding-box .blink-blur-indicator {
  isolation: isolate;
  display: flex;
  flex-direction: row;
  -moz-column-gap: 0.4em;
       column-gap: 0.4em;
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape {
  --x-deg: -20deg;
  width: 1.8em;
  height: 2.25em;
  border-radius: 0.25em;
  color: inherit;
  transform: skewX(var(--x-deg));
  background-color: var(--shape-phase1-color);
  animation-name: uxlv7id, uxlv7jl;
  animation-duration: var(--rli-animation-duration, 1.2s), calc(var(--rli-animation-duration, 1.2s) * 4);
  animation-timing-function: var(--rli-animation-function, ease-in);
  animation-iteration-count: infinite;
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape1 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.5 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape2 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.4 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape3 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.3 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape4 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.2 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape5 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.1 * -1);
}

@property --shape-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7id {
  100%, 0% {
    opacity: 0.3;
    filter: blur(0.0675em) drop-shadow(0 0 0.0625em);
    transform: skewX(var(--x-deg)) scale(1.2, 1.45);
  }
  39% {
    opacity: 0.8;
  }
  40%, 41%, 42% {
    opacity: 0;
  }
  43% {
    opacity: 0.8;
  }
  50% {
    opacity: 1;
    filter: blur(0em) drop-shadow(0 0 0em);
    transform: skewX(var(--x-deg)) scale(1, 1);
  }
}
@keyframes uxlv7jl {
  100%, 0% {
    color: var(--shape-phase1-color);
    background-color: var(--shape-phase1-color);
  }
  25% {
    color: var(--shape-phase2-color, var(--shape-phase1-color));
    background-color: var(--shape-phase2-color, var(--shape-phase1-color));
  }
  50% {
    color: var(--shape-phase3-color, var(--shape-phase1-color));
    background-color: var(--shape-phase3-color, var(--shape-phase1-color));
  }
  75% {
    color: var(--shape-phase4-color, var(--shape-phase1-color));
    background-color: var(--shape-phase4-color, var(--shape-phase1-color));
  }
}`);Array.from({length:4},function(n,i){return"--shape-phase".concat(i+1,"-color")});$t(`.trophy-spin-rli-bounding-box {
  --trophySpin-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  position: relative;
  isolation: isolate;
  color: var(--trophySpin-phase1-color);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator {
  width: 4em;
  perspective: 1000px;
  transform-style: preserve-3d;
  display: block;
  margin: 0 auto;
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade {
  display: block;
  width: 4em;
  height: 0.5em;
  background: var(--trophySpin-phase1-color);
  animation: uxlv7ki var(--rli-animation-duration, 2.5s) var(--rli-animation-function, linear) infinite, uxlv7l2 calc(var(--rli-animation-duration, 2.5s) * 0.5) var(--rli-animation-function, linear) infinite, uxlv7ly calc(var(--rli-animation-duration, 2.5s) * 4) var(--rli-animation-function, linear) infinite;
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(8) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 0 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(7) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 1 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(6) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 2 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(5) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 3 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(4) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 4 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(3) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 5 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(2) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 6 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(1) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 7 * -1);
}

@property --trophySpin-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 2.5s;
}
@keyframes uxlv7ki {
  to {
    transform: rotateY(1turn) rotateX(-25deg);
  }
}
@keyframes uxlv7l2 {
  100%, 0% {
    filter: brightness(1);
    opacity: 1;
  }
  15% {
    filter: brightness(1);
  }
  25% {
    opacity: 0.96;
  }
  30% {
    filter: brightness(0.92);
  }
  50% {
    filter: brightness(0.7);
    opacity: 1;
  }
  75% {
    filter: brightness(0.92);
    opacity: 0.96;
  }
  90% {
    filter: brightness(1);
  }
}
@keyframes uxlv7ly {
  100%, 0% {
    background-color: var(--trophySpin-phase1-color);
  }
  18% {
    background-color: var(--trophySpin-phase1-color);
  }
  25% {
    background-color: var(--trophySpin-phase2-color, var(--trophySpin-phase1-color));
  }
  43% {
    background-color: var(--trophySpin-phase2-color, var(--trophySpin-phase1-color));
  }
  50% {
    background-color: var(--trophySpin-phase3-color, var(--trophySpin-phase1-color));
  }
  68% {
    background-color: var(--trophySpin-phase3-color, var(--trophySpin-phase1-color));
  }
  75% {
    background-color: var(--trophySpin-phase4-color, var(--trophySpin-phase1-color));
  }
  93% {
    background-color: var(--trophySpin-phase4-color, var(--trophySpin-phase1-color));
  }
}`);Array.from({length:4},function(n,i){return"--trophySpin-phase".concat(i+1,"-color")});$t(`.slab-rli-bounding-box {
  --slab-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--slab-phase1-color);
  position: relative;
}
.slab-rli-bounding-box .slab-indicator {
  position: relative;
  display: block;
  width: 7em;
  height: 4em;
  margin: 0 auto;
  overflow: hidden;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper {
  width: 4em;
  height: 4em;
  transform: perspective(15em) rotateX(66deg) rotateZ(-25deg);
  transform-style: preserve-3d;
  transform-origin: 50% 100%;
  display: block;
  position: absolute;
  bottom: 0;
  right: 0;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--slab-phase1-color);
  opacity: 0;
  box-shadow: -0.08em 0.15em 0 rgba(0, 0, 0, 0.45);
  transform-origin: 0% 0%;
  animation: calc(var(--rli-animation-duration-unitless, 3) * 1s) var(--rli-animation-function, linear) infinite uxlv7md, calc(var(--rli-animation-duration-unitless, 3) * 4s) var(--rli-animation-function, linear) infinite uxlv7n0;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(1) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * 3 * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(2) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * 2 * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(3) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(4) {
  animation-delay: 0s;
}

@property --slab-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration-unitless {
  syntax: "<number>";
  inherits: true;
  initial-value: 3;
}
@keyframes uxlv7md {
  0% {
    transform: translateY(0) rotateX(30deg);
    opacity: 0;
  }
  10% {
    transform: translateY(-40%) rotateX(0deg);
    opacity: 1;
  }
  25% {
    opacity: 1;
  }
  100% {
    transform: translateY(-400%) rotateX(0deg);
    opacity: 0;
  }
}
@keyframes uxlv7n0 {
  100%, 0% {
    background-color: var(--slab-phase1-color);
  }
  24.9% {
    background-color: var(--slab-phase1-color);
  }
  25% {
    background-color: var(--slab-phase2-color, var(--slab-phase1-color));
  }
  49.9% {
    background-color: var(--slab-phase2-color, var(--slab-phase1-color));
  }
  50% {
    background-color: var(--slab-phase3-color, var(--slab-phase1-color));
  }
  74.9% {
    background-color: var(--slab-phase3-color, var(--slab-phase1-color));
  }
  75% {
    background-color: var(--slab-phase4-color, var(--slab-phase1-color));
  }
  99.9% {
    background-color: var(--slab-phase4-color, var(--slab-phase1-color));
  }
}`);Array.from({length:4},function(n,i){return"--slab-phase".concat(i+1,"-color")});$t(`.lifeline-rli-bounding-box {
  --life-line-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  isolation: isolate;
  color: var(--life-line-phase1-color);
}
.lifeline-rli-bounding-box .lifeline-indicator {
  position: relative;
  text-align: center;
}
.lifeline-rli-bounding-box .lifeline-indicator path.rli-lifeline {
  stroke-dasharray: 474.7616760254 30.3039367676;
  animation: var(--rli-animation-duration, 2s) var(--rli-animation-function, linear) infinite uxlv7k3, calc(var(--rli-animation-duration, 2s) * 4) var(--rli-animation-function, linear) infinite uxlv7kg;
}
.lifeline-rli-bounding-box .lifeline-text {
  color: currentColor;
  mix-blend-mode: difference;
  width: unset;
  display: block;
}

@property --life-line-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 2s;
}
@keyframes uxlv7k3 {
  to {
    stroke-dashoffset: -1010.1312255859;
  }
}
@keyframes uxlv7kg {
  100%, 0% {
    color: var(--life-line-phase1-color);
  }
  20% {
    color: var(--life-line-phase1-color);
  }
  25% {
    color: var(--life-line-phase2-color, var(--life-line-phase1-color));
  }
  45% {
    color: var(--life-line-phase2-color, var(--life-line-phase1-color));
  }
  50% {
    color: var(--life-line-phase3-color, var(--life-line-phase1-color));
  }
  70% {
    color: var(--life-line-phase3-color, var(--life-line-phase1-color));
  }
  75% {
    color: var(--life-line-phase4-color, var(--life-line-phase1-color));
  }
  95% {
    color: var(--life-line-phase4-color, var(--life-line-phase1-color));
  }
}`);Array.from({length:4},function(n,i){return"--life-line-phase".concat(i+1,"-color")});var Fv={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},X0=de.createContext&&de.createContext(Fv),k5=["attr","size","title"];function R5(n,i){if(n==null)return{};var o=_5(n,i),l,u;if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(n);for(u=0;u<d.length;u++)l=d[u],!(i.indexOf(l)>=0)&&Object.prototype.propertyIsEnumerable.call(n,l)&&(o[l]=n[l])}return o}function _5(n,i){if(n==null)return{};var o={};for(var l in n)if(Object.prototype.hasOwnProperty.call(n,l)){if(i.indexOf(l)>=0)continue;o[l]=n[l]}return o}function Xl(){return Xl=Object.assign?Object.assign.bind():function(n){for(var i=1;i<arguments.length;i++){var o=arguments[i];for(var l in o)Object.prototype.hasOwnProperty.call(o,l)&&(n[l]=o[l])}return n},Xl.apply(this,arguments)}function F0(n,i){var o=Object.keys(n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);i&&(l=l.filter(function(u){return Object.getOwnPropertyDescriptor(n,u).enumerable})),o.push.apply(o,l)}return o}function Fl(n){for(var i=1;i<arguments.length;i++){var o=arguments[i]!=null?arguments[i]:{};i%2?F0(Object(o),!0).forEach(function(l){z5(n,l,o[l])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(o)):F0(Object(o)).forEach(function(l){Object.defineProperty(n,l,Object.getOwnPropertyDescriptor(o,l))})}return n}function z5(n,i,o){return i=j5(i),i in n?Object.defineProperty(n,i,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[i]=o,n}function j5(n){var i=N5(n,"string");return typeof i=="symbol"?i:i+""}function N5(n,i){if(typeof n!="object"||!n)return n;var o=n[Symbol.toPrimitive];if(o!==void 0){var l=o.call(n,i);if(typeof l!="object")return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return(i==="string"?String:Number)(n)}function Kv(n){return n&&n.map((i,o)=>de.createElement(i.tag,Fl({key:o},i.attr),Kv(i.child)))}function Kf(n){return i=>de.createElement(P5,Xl({attr:Fl({},n.attr)},i),Kv(n.child))}function P5(n){var i=o=>{var{attr:l,size:u,title:d}=n,f=R5(n,k5),h=u||o.size||"1em",m;return o.className&&(m=o.className),n.className&&(m=(m?m+" ":"")+n.className),de.createElement("svg",Xl({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},o.attr,l,f,{className:m,style:Fl(Fl({color:n.color||o.color},o.style),n.style),height:h,width:h,xmlns:"http://www.w3.org/2000/svg"}),d&&de.createElement("title",null,d),n.children)};return X0!==void 0?de.createElement(X0.Consumer,null,o=>i(o)):i(Fv)}function Zv(n){return Kf({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"},child:[]}]})(n)}function Qv(n){return Kf({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"},child:[]}]})(n)}function V5(n){return Kf({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M413.1 222.5l22.2 22.2c9.4 9.4 9.4 24.6 0 33.9L241 473c-9.4 9.4-24.6 9.4-33.9 0L12.7 278.6c-9.4-9.4-9.4-24.6 0-33.9l22.2-22.2c9.5-9.5 25-9.3 34.3.4L184 343.4V56c0-13.3 10.7-24 24-24h32c13.3 0 24 10.7 24 24v287.4l114.8-120.5c9.3-9.8 24.8-10 34.3-.4z"},child:[]}]})(n)}const $v=et.createContext({});function U5(n){const i=et.useRef(null);return i.current===null&&(i.current=n()),i.current}const Zf=typeof window<"u",L5=Zf?et.useLayoutEffect:et.useEffect,Qf=et.createContext(null);function $f(n,i){n.indexOf(i)===-1&&n.push(i)}function Jf(n,i){const o=n.indexOf(i);o>-1&&n.splice(o,1)}const Cn=(n,i,o)=>o>i?i:o<n?n:o;let Wf=()=>{};const kn={},Jv=n=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n);function Wv(n){return typeof n=="object"&&n!==null}const Iv=n=>/^0[^.\s]+$/u.test(n);function If(n){let i;return()=>(i===void 0&&(i=n()),i)}const Ye=n=>n,B5=(n,i)=>o=>i(n(o)),lo=(...n)=>n.reduce(B5),to=(n,i,o)=>{const l=i-n;return l===0?1:(o-n)/l};class td{constructor(){this.subscriptions=[]}add(i){return $f(this.subscriptions,i),()=>Jf(this.subscriptions,i)}notify(i,o,l){const u=this.subscriptions.length;if(u)if(u===1)this.subscriptions[0](i,o,l);else for(let d=0;d<u;d++){const f=this.subscriptions[d];f&&f(i,o,l)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const un=n=>n*1e3,cn=n=>n/1e3;function tb(n,i){return i?n*(1e3/i):0}const eb=(n,i,o)=>(((1-3*o+3*i)*n+(3*o-6*i))*n+3*i)*n,H5=1e-7,q5=12;function Y5(n,i,o,l,u){let d,f,h=0;do f=i+(o-i)/2,d=eb(f,l,u)-n,d>0?o=f:i=f;while(Math.abs(d)>H5&&++h<q5);return f}function so(n,i,o,l){if(n===i&&o===l)return Ye;const u=d=>Y5(d,0,1,n,o);return d=>d===0||d===1?d:eb(u(d),i,l)}const nb=n=>i=>i<=.5?n(2*i)/2:(2-n(2*(1-i)))/2,ab=n=>i=>1-n(1-i),ib=so(.33,1.53,.69,.99),ed=ab(ib),rb=nb(ed),ob=n=>(n*=2)<1?.5*ed(n):.5*(2-Math.pow(2,-10*(n-1))),nd=n=>1-Math.sin(Math.acos(n)),lb=ab(nd),sb=nb(nd),G5=so(.42,0,1,1),X5=so(0,0,.58,1),ub=so(.42,0,.58,1),F5=n=>Array.isArray(n)&&typeof n[0]!="number",cb=n=>Array.isArray(n)&&typeof n[0]=="number",K5={linear:Ye,easeIn:G5,easeInOut:ub,easeOut:X5,circIn:nd,circInOut:sb,circOut:lb,backIn:ed,backInOut:rb,backOut:ib,anticipate:ob},Z5=n=>typeof n=="string",K0=n=>{if(cb(n)){Wf(n.length===4);const[i,o,l,u]=n;return so(i,o,l,u)}else if(Z5(n))return K5[n];return n},_l=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function Q5(n,i){let o=new Set,l=new Set,u=!1,d=!1;const f=new WeakSet;let h={delta:0,timestamp:0,isProcessing:!1};function m(v){f.has(v)&&(p.schedule(v),n()),v(h)}const p={schedule:(v,y=!1,x=!1)=>{const R=x&&u?o:l;return y&&f.add(v),R.has(v)||R.add(v),v},cancel:v=>{l.delete(v),f.delete(v)},process:v=>{if(h=v,u){d=!0;return}u=!0,[o,l]=[l,o],o.forEach(m),o.clear(),u=!1,d&&(d=!1,p.process(v))}};return p}const $5=40;function fb(n,i){let o=!1,l=!0;const u={delta:0,timestamp:0,isProcessing:!1},d=()=>o=!0,f=_l.reduce((L,Q)=>(L[Q]=Q5(d),L),{}),{setup:h,read:m,resolveKeyframes:p,preUpdate:v,update:y,preRender:x,render:M,postRender:R}=f,E=()=>{const L=kn.useManualTiming?u.timestamp:performance.now();o=!1,kn.useManualTiming||(u.delta=l?1e3/60:Math.max(Math.min(L-u.timestamp,$5),1)),u.timestamp=L,u.isProcessing=!0,h.process(u),m.process(u),p.process(u),v.process(u),y.process(u),x.process(u),M.process(u),R.process(u),u.isProcessing=!1,o&&i&&(l=!1,n(E))},j=()=>{o=!0,l=!0,u.isProcessing||n(E)};return{schedule:_l.reduce((L,Q)=>{const H=f[Q];return L[Q]=(I,lt=!1,K=!1)=>(o||j(),H.schedule(I,lt,K)),L},{}),cancel:L=>{for(let Q=0;Q<_l.length;Q++)f[_l[Q]].cancel(L)},state:u,steps:f}}const{schedule:zt,cancel:sa,state:ie,steps:zc}=fb(typeof requestAnimationFrame<"u"?requestAnimationFrame:Ye,!0);let Vl;function J5(){Vl=void 0}const ye={now:()=>(Vl===void 0&&ye.set(ie.isProcessing||kn.useManualTiming?ie.timestamp:performance.now()),Vl),set:n=>{Vl=n,queueMicrotask(J5)}},db=n=>i=>typeof i=="string"&&i.startsWith(n),ad=db("--"),W5=db("var(--"),id=n=>W5(n)?I5.test(n.split("/*")[0].trim()):!1,I5=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,Li={test:n=>typeof n=="number",parse:parseFloat,transform:n=>n},eo={...Li,transform:n=>Cn(0,1,n)},zl={...Li,default:1},Fr=n=>Math.round(n*1e5)/1e5,rd=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function tS(n){return n==null}const eS=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,od=(n,i)=>o=>!!(typeof o=="string"&&eS.test(o)&&o.startsWith(n)||i&&!tS(o)&&Object.prototype.hasOwnProperty.call(o,i)),hb=(n,i,o)=>l=>{if(typeof l!="string")return l;const[u,d,f,h]=l.match(rd);return{[n]:parseFloat(u),[i]:parseFloat(d),[o]:parseFloat(f),alpha:h!==void 0?parseFloat(h):1}},nS=n=>Cn(0,255,n),jc={...Li,transform:n=>Math.round(nS(n))},ja={test:od("rgb","red"),parse:hb("red","green","blue"),transform:({red:n,green:i,blue:o,alpha:l=1})=>"rgba("+jc.transform(n)+", "+jc.transform(i)+", "+jc.transform(o)+", "+Fr(eo.transform(l))+")"};function aS(n){let i="",o="",l="",u="";return n.length>5?(i=n.substring(1,3),o=n.substring(3,5),l=n.substring(5,7),u=n.substring(7,9)):(i=n.substring(1,2),o=n.substring(2,3),l=n.substring(3,4),u=n.substring(4,5),i+=i,o+=o,l+=l,u+=u),{red:parseInt(i,16),green:parseInt(o,16),blue:parseInt(l,16),alpha:u?parseInt(u,16)/255:1}}const lf={test:od("#"),parse:aS,transform:ja.transform},uo=n=>({test:i=>typeof i=="string"&&i.endsWith(n)&&i.split(" ").length===1,parse:parseFloat,transform:i=>`${i}${n}`}),oa=uo("deg"),fn=uo("%"),ot=uo("px"),iS=uo("vh"),rS=uo("vw"),Z0={...fn,parse:n=>fn.parse(n)/100,transform:n=>fn.transform(n*100)},Di={test:od("hsl","hue"),parse:hb("hue","saturation","lightness"),transform:({hue:n,saturation:i,lightness:o,alpha:l=1})=>"hsla("+Math.round(n)+", "+fn.transform(Fr(i))+", "+fn.transform(Fr(o))+", "+Fr(eo.transform(l))+")"},Gt={test:n=>ja.test(n)||lf.test(n)||Di.test(n),parse:n=>ja.test(n)?ja.parse(n):Di.test(n)?Di.parse(n):lf.parse(n),transform:n=>typeof n=="string"?n:n.hasOwnProperty("red")?ja.transform(n):Di.transform(n),getAnimatableNone:n=>{const i=Gt.parse(n);return i.alpha=0,Gt.transform(i)}},oS=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function lS(n){return isNaN(n)&&typeof n=="string"&&(n.match(rd)?.length||0)+(n.match(oS)?.length||0)>0}const mb="number",pb="color",sS="var",uS="var(",Q0="${}",cS=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function no(n){const i=n.toString(),o=[],l={color:[],number:[],var:[]},u=[];let d=0;const h=i.replace(cS,m=>(Gt.test(m)?(l.color.push(d),u.push(pb),o.push(Gt.parse(m))):m.startsWith(uS)?(l.var.push(d),u.push(sS),o.push(m)):(l.number.push(d),u.push(mb),o.push(parseFloat(m))),++d,Q0)).split(Q0);return{values:o,split:h,indexes:l,types:u}}function gb(n){return no(n).values}function vb(n){const{split:i,types:o}=no(n),l=i.length;return u=>{let d="";for(let f=0;f<l;f++)if(d+=i[f],u[f]!==void 0){const h=o[f];h===mb?d+=Fr(u[f]):h===pb?d+=Gt.transform(u[f]):d+=u[f]}return d}}const fS=n=>typeof n=="number"?0:Gt.test(n)?Gt.getAnimatableNone(n):n;function dS(n){const i=gb(n);return vb(n)(i.map(fS))}const ua={test:lS,parse:gb,createTransformer:vb,getAnimatableNone:dS};function Nc(n,i,o){return o<0&&(o+=1),o>1&&(o-=1),o<1/6?n+(i-n)*6*o:o<1/2?i:o<2/3?n+(i-n)*(2/3-o)*6:n}function hS({hue:n,saturation:i,lightness:o,alpha:l}){n/=360,i/=100,o/=100;let u=0,d=0,f=0;if(!i)u=d=f=o;else{const h=o<.5?o*(1+i):o+i-o*i,m=2*o-h;u=Nc(m,h,n+1/3),d=Nc(m,h,n),f=Nc(m,h,n-1/3)}return{red:Math.round(u*255),green:Math.round(d*255),blue:Math.round(f*255),alpha:l}}function Kl(n,i){return o=>o>0?i:n}const Nt=(n,i,o)=>n+(i-n)*o,Pc=(n,i,o)=>{const l=n*n,u=o*(i*i-l)+l;return u<0?0:Math.sqrt(u)},mS=[lf,ja,Di],pS=n=>mS.find(i=>i.test(n));function $0(n){const i=pS(n);if(!i)return!1;let o=i.parse(n);return i===Di&&(o=hS(o)),o}const J0=(n,i)=>{const o=$0(n),l=$0(i);if(!o||!l)return Kl(n,i);const u={...o};return d=>(u.red=Pc(o.red,l.red,d),u.green=Pc(o.green,l.green,d),u.blue=Pc(o.blue,l.blue,d),u.alpha=Nt(o.alpha,l.alpha,d),ja.transform(u))},sf=new Set(["none","hidden"]);function gS(n,i){return sf.has(n)?o=>o<=0?n:i:o=>o>=1?i:n}function vS(n,i){return o=>Nt(n,i,o)}function ld(n){return typeof n=="number"?vS:typeof n=="string"?id(n)?Kl:Gt.test(n)?J0:xS:Array.isArray(n)?bb:typeof n=="object"?Gt.test(n)?J0:bS:Kl}function bb(n,i){const o=[...n],l=o.length,u=n.map((d,f)=>ld(d)(d,i[f]));return d=>{for(let f=0;f<l;f++)o[f]=u[f](d);return o}}function bS(n,i){const o={...n,...i},l={};for(const u in o)n[u]!==void 0&&i[u]!==void 0&&(l[u]=ld(n[u])(n[u],i[u]));return u=>{for(const d in l)o[d]=l[d](u);return o}}function yS(n,i){const o=[],l={color:0,var:0,number:0};for(let u=0;u<i.values.length;u++){const d=i.types[u],f=n.indexes[d][l[d]],h=n.values[f]??0;o[u]=h,l[d]++}return o}const xS=(n,i)=>{const o=ua.createTransformer(i),l=no(n),u=no(i);return l.indexes.var.length===u.indexes.var.length&&l.indexes.color.length===u.indexes.color.length&&l.indexes.number.length>=u.indexes.number.length?sf.has(n)&&!u.values.length||sf.has(i)&&!l.values.length?gS(n,i):lo(bb(yS(l,u),u.values),o):Kl(n,i)};function yb(n,i,o){return typeof n=="number"&&typeof i=="number"&&typeof o=="number"?Nt(n,i,o):ld(n)(n,i)}const SS=n=>{const i=({timestamp:o})=>n(o);return{start:(o=!0)=>zt.update(i,o),stop:()=>sa(i),now:()=>ie.isProcessing?ie.timestamp:ye.now()}},xb=(n,i,o=10)=>{let l="";const u=Math.max(Math.round(i/o),2);for(let d=0;d<u;d++)l+=Math.round(n(d/(u-1))*1e4)/1e4+", ";return`linear(${l.substring(0,l.length-2)})`},Zl=2e4;function sd(n){let i=0;const o=50;let l=n.next(i);for(;!l.done&&i<Zl;)i+=o,l=n.next(i);return i>=Zl?1/0:i}function TS(n,i=100,o){const l=o({...n,keyframes:[0,i]}),u=Math.min(sd(l),Zl);return{type:"keyframes",ease:d=>l.next(u*d).value/i,duration:cn(u)}}const AS=5;function Sb(n,i,o){const l=Math.max(i-AS,0);return tb(o-n(l),i-l)}const Ut={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},Vc=.001;function OS({duration:n=Ut.duration,bounce:i=Ut.bounce,velocity:o=Ut.velocity,mass:l=Ut.mass}){let u,d,f=1-i;f=Cn(Ut.minDamping,Ut.maxDamping,f),n=Cn(Ut.minDuration,Ut.maxDuration,cn(n)),f<1?(u=p=>{const v=p*f,y=v*n,x=v-o,M=uf(p,f),R=Math.exp(-y);return Vc-x/M*R},d=p=>{const y=p*f*n,x=y*o+o,M=Math.pow(f,2)*Math.pow(p,2)*n,R=Math.exp(-y),E=uf(Math.pow(p,2),f);return(-u(p)+Vc>0?-1:1)*((x-M)*R)/E}):(u=p=>{const v=Math.exp(-p*n),y=(p-o)*n+1;return-Vc+v*y},d=p=>{const v=Math.exp(-p*n),y=(o-p)*(n*n);return v*y});const h=5/n,m=wS(u,d,h);if(n=un(n),isNaN(m))return{stiffness:Ut.stiffness,damping:Ut.damping,duration:n};{const p=Math.pow(m,2)*l;return{stiffness:p,damping:f*2*Math.sqrt(l*p),duration:n}}}const ES=12;function wS(n,i,o){let l=o;for(let u=1;u<ES;u++)l=l-n(l)/i(l);return l}function uf(n,i){return n*Math.sqrt(1-i*i)}const MS=["duration","bounce"],DS=["stiffness","damping","mass"];function W0(n,i){return i.some(o=>n[o]!==void 0)}function CS(n){let i={velocity:Ut.velocity,stiffness:Ut.stiffness,damping:Ut.damping,mass:Ut.mass,isResolvedFromDuration:!1,...n};if(!W0(n,DS)&&W0(n,MS))if(n.visualDuration){const o=n.visualDuration,l=2*Math.PI/(o*1.2),u=l*l,d=2*Cn(.05,1,1-(n.bounce||0))*Math.sqrt(u);i={...i,mass:Ut.mass,stiffness:u,damping:d}}else{const o=OS(n);i={...i,...o,mass:Ut.mass},i.isResolvedFromDuration=!0}return i}function Ql(n=Ut.visualDuration,i=Ut.bounce){const o=typeof n!="object"?{visualDuration:n,keyframes:[0,1],bounce:i}:n;let{restSpeed:l,restDelta:u}=o;const d=o.keyframes[0],f=o.keyframes[o.keyframes.length-1],h={done:!1,value:d},{stiffness:m,damping:p,mass:v,duration:y,velocity:x,isResolvedFromDuration:M}=CS({...o,velocity:-cn(o.velocity||0)}),R=x||0,E=p/(2*Math.sqrt(m*v)),j=f-d,V=cn(Math.sqrt(m/v)),q=Math.abs(j)<5;l||(l=q?Ut.restSpeed.granular:Ut.restSpeed.default),u||(u=q?Ut.restDelta.granular:Ut.restDelta.default);let L;if(E<1){const H=uf(V,E);L=I=>{const lt=Math.exp(-E*V*I);return f-lt*((R+E*V*j)/H*Math.sin(H*I)+j*Math.cos(H*I))}}else if(E===1)L=H=>f-Math.exp(-V*H)*(j+(R+V*j)*H);else{const H=V*Math.sqrt(E*E-1);L=I=>{const lt=Math.exp(-E*V*I),K=Math.min(H*I,300);return f-lt*((R+E*V*j)*Math.sinh(K)+H*j*Math.cosh(K))/H}}const Q={calculatedDuration:M&&y||null,next:H=>{const I=L(H);if(M)h.done=H>=y;else{let lt=H===0?R:0;E<1&&(lt=H===0?un(R):Sb(L,H,I));const K=Math.abs(lt)<=l,ct=Math.abs(f-I)<=u;h.done=K&&ct}return h.value=h.done?f:I,h},toString:()=>{const H=Math.min(sd(Q),Zl),I=xb(lt=>Q.next(H*lt).value,H,30);return H+"ms "+I},toTransition:()=>{}};return Q}Ql.applyToOptions=n=>{const i=TS(n,100,Ql);return n.ease=i.ease,n.duration=un(i.duration),n.type="keyframes",n};function cf({keyframes:n,velocity:i=0,power:o=.8,timeConstant:l=325,bounceDamping:u=10,bounceStiffness:d=500,modifyTarget:f,min:h,max:m,restDelta:p=.5,restSpeed:v}){const y=n[0],x={done:!1,value:y},M=K=>h!==void 0&&K<h||m!==void 0&&K>m,R=K=>h===void 0?m:m===void 0||Math.abs(h-K)<Math.abs(m-K)?h:m;let E=o*i;const j=y+E,V=f===void 0?j:f(j);V!==j&&(E=V-y);const q=K=>-E*Math.exp(-K/l),L=K=>V+q(K),Q=K=>{const ct=q(K),Xt=L(K);x.done=Math.abs(ct)<=p,x.value=x.done?V:Xt};let H,I;const lt=K=>{M(x.value)&&(H=K,I=Ql({keyframes:[x.value,R(x.value)],velocity:Sb(L,K,x.value),damping:u,stiffness:d,restDelta:p,restSpeed:v}))};return lt(0),{calculatedDuration:null,next:K=>{let ct=!1;return!I&&H===void 0&&(ct=!0,Q(K),lt(K)),H!==void 0&&K>=H?I.next(K-H):(!ct&&Q(K),x)}}}function kS(n,i,o){const l=[],u=o||kn.mix||yb,d=n.length-1;for(let f=0;f<d;f++){let h=u(n[f],n[f+1]);if(i){const m=Array.isArray(i)?i[f]||Ye:i;h=lo(m,h)}l.push(h)}return l}function RS(n,i,{clamp:o=!0,ease:l,mixer:u}={}){const d=n.length;if(Wf(d===i.length),d===1)return()=>i[0];if(d===2&&i[0]===i[1])return()=>i[1];const f=n[0]===n[1];n[0]>n[d-1]&&(n=[...n].reverse(),i=[...i].reverse());const h=kS(i,l,u),m=h.length,p=v=>{if(f&&v<n[0])return i[0];let y=0;if(m>1)for(;y<n.length-2&&!(v<n[y+1]);y++);const x=to(n[y],n[y+1],v);return h[y](x)};return o?v=>p(Cn(n[0],n[d-1],v)):p}function _S(n,i){const o=n[n.length-1];for(let l=1;l<=i;l++){const u=to(0,i,l);n.push(Nt(o,1,u))}}function zS(n){const i=[0];return _S(i,n.length-1),i}function jS(n,i){return n.map(o=>o*i)}function NS(n,i){return n.map(()=>i||ub).splice(0,n.length-1)}function Kr({duration:n=300,keyframes:i,times:o,ease:l="easeInOut"}){const u=F5(l)?l.map(K0):K0(l),d={done:!1,value:i[0]},f=jS(o&&o.length===i.length?o:zS(i),n),h=RS(f,i,{ease:Array.isArray(u)?u:NS(i,u)});return{calculatedDuration:n,next:m=>(d.value=h(m),d.done=m>=n,d)}}const PS=n=>n!==null;function ud(n,{repeat:i,repeatType:o="loop"},l,u=1){const d=n.filter(PS),h=u<0||i&&o!=="loop"&&i%2===1?0:d.length-1;return!h||l===void 0?d[h]:l}const VS={decay:cf,inertia:cf,tween:Kr,keyframes:Kr,spring:Ql};function Tb(n){typeof n.type=="string"&&(n.type=VS[n.type])}class cd{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(i=>{this.resolve=i})}notifyFinished(){this.resolve()}then(i,o){return this.finished.then(i,o)}}const US=n=>n/100;class fd extends cd{constructor(i){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{const{motionValue:o}=this.options;o&&o.updatedAt!==ye.now()&&this.tick(ye.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),this.options.onStop?.())},this.options=i,this.initAnimation(),this.play(),i.autoplay===!1&&this.pause()}initAnimation(){const{options:i}=this;Tb(i);const{type:o=Kr,repeat:l=0,repeatDelay:u=0,repeatType:d,velocity:f=0}=i;let{keyframes:h}=i;const m=o||Kr;m!==Kr&&typeof h[0]!="number"&&(this.mixKeyframes=lo(US,yb(h[0],h[1])),h=[0,100]);const p=m({...i,keyframes:h});d==="mirror"&&(this.mirroredGenerator=m({...i,keyframes:[...h].reverse(),velocity:-f})),p.calculatedDuration===null&&(p.calculatedDuration=sd(p));const{calculatedDuration:v}=p;this.calculatedDuration=v,this.resolvedDuration=v+u,this.totalDuration=this.resolvedDuration*(l+1)-u,this.generator=p}updateTime(i){const o=Math.round(i-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=o}tick(i,o=!1){const{generator:l,totalDuration:u,mixKeyframes:d,mirroredGenerator:f,resolvedDuration:h,calculatedDuration:m}=this;if(this.startTime===null)return l.next(0);const{delay:p=0,keyframes:v,repeat:y,repeatType:x,repeatDelay:M,type:R,onUpdate:E,finalKeyframe:j}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,i):this.speed<0&&(this.startTime=Math.min(i-u/this.speed,this.startTime)),o?this.currentTime=i:this.updateTime(i);const V=this.currentTime-p*(this.playbackSpeed>=0?1:-1),q=this.playbackSpeed>=0?V<0:V>u;this.currentTime=Math.max(V,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=u);let L=this.currentTime,Q=l;if(y){const K=Math.min(this.currentTime,u)/h;let ct=Math.floor(K),Xt=K%1;!Xt&&K>=1&&(Xt=1),Xt===1&&ct--,ct=Math.min(ct,y+1),!!(ct%2)&&(x==="reverse"?(Xt=1-Xt,M&&(Xt-=M/h)):x==="mirror"&&(Q=f)),L=Cn(0,1,Xt)*h}const H=q?{done:!1,value:v[0]}:Q.next(L);d&&(H.value=d(H.value));let{done:I}=H;!q&&m!==null&&(I=this.playbackSpeed>=0?this.currentTime>=u:this.currentTime<=0);const lt=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&I);return lt&&R!==cf&&(H.value=ud(v,this.options,j,this.speed)),E&&E(H.value),lt&&this.finish(),H}then(i,o){return this.finished.then(i,o)}get duration(){return cn(this.calculatedDuration)}get time(){return cn(this.currentTime)}set time(i){i=un(i),this.currentTime=i,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=i:this.driver&&(this.startTime=this.driver.now()-i/this.playbackSpeed),this.driver?.start(!1)}get speed(){return this.playbackSpeed}set speed(i){this.updateTime(ye.now());const o=this.playbackSpeed!==i;this.playbackSpeed=i,o&&(this.time=cn(this.currentTime))}play(){if(this.isStopped)return;const{driver:i=SS,startTime:o}=this.options;this.driver||(this.driver=i(u=>this.tick(u))),this.options.onPlay?.();const l=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=l):this.holdTime!==null?this.startTime=l-this.holdTime:this.startTime||(this.startTime=o??l),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(ye.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){this.notifyFinished(),this.teardown(),this.state="finished",this.options.onComplete?.()}cancel(){this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),this.options.onCancel?.()}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(i){return this.startTime=0,this.tick(i,!0)}attachTimeline(i){return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),this.driver?.stop(),i.observe(this)}}function LS(n){for(let i=1;i<n.length;i++)n[i]??(n[i]=n[i-1])}const Na=n=>n*180/Math.PI,ff=n=>{const i=Na(Math.atan2(n[1],n[0]));return df(i)},BS={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:n=>(Math.abs(n[0])+Math.abs(n[3]))/2,rotate:ff,rotateZ:ff,skewX:n=>Na(Math.atan(n[1])),skewY:n=>Na(Math.atan(n[2])),skew:n=>(Math.abs(n[1])+Math.abs(n[2]))/2},df=n=>(n=n%360,n<0&&(n+=360),n),I0=ff,tg=n=>Math.sqrt(n[0]*n[0]+n[1]*n[1]),eg=n=>Math.sqrt(n[4]*n[4]+n[5]*n[5]),HS={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:tg,scaleY:eg,scale:n=>(tg(n)+eg(n))/2,rotateX:n=>df(Na(Math.atan2(n[6],n[5]))),rotateY:n=>df(Na(Math.atan2(-n[2],n[0]))),rotateZ:I0,rotate:I0,skewX:n=>Na(Math.atan(n[4])),skewY:n=>Na(Math.atan(n[1])),skew:n=>(Math.abs(n[1])+Math.abs(n[4]))/2};function hf(n){return n.includes("scale")?1:0}function mf(n,i){if(!n||n==="none")return hf(i);const o=n.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let l,u;if(o)l=HS,u=o;else{const h=n.match(/^matrix\(([-\d.e\s,]+)\)$/u);l=BS,u=h}if(!u)return hf(i);const d=l[i],f=u[1].split(",").map(YS);return typeof d=="function"?d(f):f[d]}const qS=(n,i)=>{const{transform:o="none"}=getComputedStyle(n);return mf(o,i)};function YS(n){return parseFloat(n.trim())}const Bi=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Hi=new Set(Bi),ng=n=>n===Li||n===ot,GS=new Set(["x","y","z"]),XS=Bi.filter(n=>!GS.has(n));function FS(n){const i=[];return XS.forEach(o=>{const l=n.getValue(o);l!==void 0&&(i.push([o,l.get()]),l.set(o.startsWith("scale")?1:0))}),i}const Va={width:({x:n},{paddingLeft:i="0",paddingRight:o="0"})=>n.max-n.min-parseFloat(i)-parseFloat(o),height:({y:n},{paddingTop:i="0",paddingBottom:o="0"})=>n.max-n.min-parseFloat(i)-parseFloat(o),top:(n,{top:i})=>parseFloat(i),left:(n,{left:i})=>parseFloat(i),bottom:({y:n},{top:i})=>parseFloat(i)+(n.max-n.min),right:({x:n},{left:i})=>parseFloat(i)+(n.max-n.min),x:(n,{transform:i})=>mf(i,"x"),y:(n,{transform:i})=>mf(i,"y")};Va.translateX=Va.x;Va.translateY=Va.y;const Ua=new Set;let pf=!1,gf=!1,vf=!1;function Ab(){if(gf){const n=Array.from(Ua).filter(l=>l.needsMeasurement),i=new Set(n.map(l=>l.element)),o=new Map;i.forEach(l=>{const u=FS(l);u.length&&(o.set(l,u),l.render())}),n.forEach(l=>l.measureInitialState()),i.forEach(l=>{l.render();const u=o.get(l);u&&u.forEach(([d,f])=>{l.getValue(d)?.set(f)})}),n.forEach(l=>l.measureEndState()),n.forEach(l=>{l.suspendedScrollY!==void 0&&window.scrollTo(0,l.suspendedScrollY)})}gf=!1,pf=!1,Ua.forEach(n=>n.complete(vf)),Ua.clear()}function Ob(){Ua.forEach(n=>{n.readKeyframes(),n.needsMeasurement&&(gf=!0)})}function KS(){vf=!0,Ob(),Ab(),vf=!1}class dd{constructor(i,o,l,u,d,f=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...i],this.onComplete=o,this.name=l,this.motionValue=u,this.element=d,this.isAsync=f}scheduleResolve(){this.state="scheduled",this.isAsync?(Ua.add(this),pf||(pf=!0,zt.read(Ob),zt.resolveKeyframes(Ab))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:i,name:o,element:l,motionValue:u}=this;if(i[0]===null){const d=u?.get(),f=i[i.length-1];if(d!==void 0)i[0]=d;else if(l&&o){const h=l.readValue(o,f);h!=null&&(i[0]=h)}i[0]===void 0&&(i[0]=f),u&&d===void 0&&u.set(i[0])}LS(i)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(i=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,i),Ua.delete(this)}cancel(){this.state==="scheduled"&&(Ua.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const ZS=n=>n.startsWith("--");function QS(n,i,o){ZS(i)?n.style.setProperty(i,o):n.style[i]=o}const $S=If(()=>window.ScrollTimeline!==void 0),JS={};function WS(n,i){const o=If(n);return()=>JS[i]??o()}const Eb=WS(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Gr=([n,i,o,l])=>`cubic-bezier(${n}, ${i}, ${o}, ${l})`,ag={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Gr([0,.65,.55,1]),circOut:Gr([.55,0,1,.45]),backIn:Gr([.31,.01,.66,-.59]),backOut:Gr([.33,1.53,.69,.99])};function wb(n,i){if(n)return typeof n=="function"?Eb()?xb(n,i):"ease-out":cb(n)?Gr(n):Array.isArray(n)?n.map(o=>wb(o,i)||ag.easeOut):ag[n]}function IS(n,i,o,{delay:l=0,duration:u=300,repeat:d=0,repeatType:f="loop",ease:h="easeOut",times:m}={},p=void 0){const v={[i]:o};m&&(v.offset=m);const y=wb(h,u);Array.isArray(y)&&(v.easing=y);const x={delay:l,duration:u,easing:Array.isArray(y)?"linear":y,fill:"both",iterations:d+1,direction:f==="reverse"?"alternate":"normal"};return p&&(x.pseudoElement=p),n.animate(v,x)}function Mb(n){return typeof n=="function"&&"applyToOptions"in n}function t3({type:n,...i}){return Mb(n)&&Eb()?n.applyToOptions(i):(i.duration??(i.duration=300),i.ease??(i.ease="easeOut"),i)}class e3 extends cd{constructor(i){if(super(),this.finishedTime=null,this.isStopped=!1,!i)return;const{element:o,name:l,keyframes:u,pseudoElement:d,allowFlatten:f=!1,finalKeyframe:h,onComplete:m}=i;this.isPseudoElement=!!d,this.allowFlatten=f,this.options=i,Wf(typeof i.type!="string");const p=t3(i);this.animation=IS(o,l,u,p,d),p.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!d){const v=ud(u,this.options,h,this.speed);this.updateMotionValue?this.updateMotionValue(v):QS(o,l,v),this.animation.cancel()}m?.(),this.notifyFinished()}}play(){this.isStopped||(this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){this.animation.finish?.()}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:i}=this;i==="idle"||i==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){this.isPseudoElement||this.animation.commitStyles?.()}get duration(){const i=this.animation.effect?.getComputedTiming?.().duration||0;return cn(Number(i))}get time(){return cn(Number(this.animation.currentTime)||0)}set time(i){this.finishedTime=null,this.animation.currentTime=un(i)}get speed(){return this.animation.playbackRate}set speed(i){i<0&&(this.finishedTime=null),this.animation.playbackRate=i}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return Number(this.animation.startTime)}set startTime(i){this.animation.startTime=i}attachTimeline({timeline:i,observe:o}){return this.allowFlatten&&this.animation.effect?.updateTiming({easing:"linear"}),this.animation.onfinish=null,i&&$S()?(this.animation.timeline=i,Ye):o(this)}}const Db={anticipate:ob,backInOut:rb,circInOut:sb};function n3(n){return n in Db}function a3(n){typeof n.ease=="string"&&n3(n.ease)&&(n.ease=Db[n.ease])}const ig=10;class i3 extends e3{constructor(i){a3(i),Tb(i),super(i),i.startTime&&(this.startTime=i.startTime),this.options=i}updateMotionValue(i){const{motionValue:o,onUpdate:l,onComplete:u,element:d,...f}=this.options;if(!o)return;if(i!==void 0){o.set(i);return}const h=new fd({...f,autoplay:!1}),m=un(this.finishedTime??this.time);o.setWithVelocity(h.sample(m-ig).value,h.sample(m).value,ig),h.stop()}}const rg=(n,i)=>i==="zIndex"?!1:!!(typeof n=="number"||Array.isArray(n)||typeof n=="string"&&(ua.test(n)||n==="0")&&!n.startsWith("url("));function r3(n){const i=n[0];if(n.length===1)return!0;for(let o=0;o<n.length;o++)if(n[o]!==i)return!0}function o3(n,i,o,l){const u=n[0];if(u===null)return!1;if(i==="display"||i==="visibility")return!0;const d=n[n.length-1],f=rg(u,i),h=rg(d,i);return!f||!h?!1:r3(n)||(o==="spring"||Mb(o))&&l}function bf(n){n.duration=0,n.type}const l3=new Set(["opacity","clipPath","filter","transform"]),s3=If(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function u3(n){const{motionValue:i,name:o,repeatDelay:l,repeatType:u,damping:d,type:f}=n;if(!(i?.owner?.current instanceof HTMLElement))return!1;const{onUpdate:m,transformTemplate:p}=i.owner.getProps();return s3()&&o&&l3.has(o)&&(o!=="transform"||!p)&&!m&&!l&&u!=="mirror"&&d!==0&&f!=="inertia"}const c3=40;class f3 extends cd{constructor({autoplay:i=!0,delay:o=0,type:l="keyframes",repeat:u=0,repeatDelay:d=0,repeatType:f="loop",keyframes:h,name:m,motionValue:p,element:v,...y}){super(),this.stop=()=>{this._animation&&(this._animation.stop(),this.stopTimeline?.()),this.keyframeResolver?.cancel()},this.createdAt=ye.now();const x={autoplay:i,delay:o,type:l,repeat:u,repeatDelay:d,repeatType:f,name:m,motionValue:p,element:v,...y},M=v?.KeyframeResolver||dd;this.keyframeResolver=new M(h,(R,E,j)=>this.onKeyframesResolved(R,E,x,!j),m,p,v),this.keyframeResolver?.scheduleResolve()}onKeyframesResolved(i,o,l,u){this.keyframeResolver=void 0;const{name:d,type:f,velocity:h,delay:m,isHandoff:p,onUpdate:v}=l;this.resolvedAt=ye.now(),o3(i,d,f,h)||((kn.instantAnimations||!m)&&v?.(ud(i,l,o)),i[0]=i[i.length-1],bf(l),l.repeat=0);const x={startTime:u?this.resolvedAt?this.resolvedAt-this.createdAt>c3?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:o,...l,keyframes:i},M=!p&&u3(x)?new i3({...x,element:x.motionValue.owner.current}):new fd(x);M.finished.then(()=>this.notifyFinished()).catch(Ye),this.pendingTimeline&&(this.stopTimeline=M.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=M}get finished(){return this._animation?this.animation.finished:this._finished}then(i,o){return this.finished.finally(i).then(()=>{})}get animation(){return this._animation||(this.keyframeResolver?.resume(),KS()),this._animation}get duration(){return this.animation.duration}get time(){return this.animation.time}set time(i){this.animation.time=i}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(i){this.animation.speed=i}get startTime(){return this.animation.startTime}attachTimeline(i){return this._animation?this.stopTimeline=this.animation.attachTimeline(i):this.pendingTimeline=i,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){this._animation&&this.animation.cancel(),this.keyframeResolver?.cancel()}}const d3=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function h3(n){const i=d3.exec(n);if(!i)return[,];const[,o,l,u]=i;return[`--${o??l}`,u]}function Cb(n,i,o=1){const[l,u]=h3(n);if(!l)return;const d=window.getComputedStyle(i).getPropertyValue(l);if(d){const f=d.trim();return Jv(f)?parseFloat(f):f}return id(u)?Cb(u,i,o+1):u}function hd(n,i){return n?.[i]??n?.default??n}const kb=new Set(["width","height","top","left","right","bottom",...Bi]),m3={test:n=>n==="auto",parse:n=>n},Rb=n=>i=>i.test(n),_b=[Li,ot,fn,oa,rS,iS,m3],og=n=>_b.find(Rb(n));function p3(n){return typeof n=="number"?n===0:n!==null?n==="none"||n==="0"||Iv(n):!0}const g3=new Set(["brightness","contrast","saturate","opacity"]);function v3(n){const[i,o]=n.slice(0,-1).split("(");if(i==="drop-shadow")return n;const[l]=o.match(rd)||[];if(!l)return n;const u=o.replace(l,"");let d=g3.has(i)?1:0;return l!==o&&(d*=100),i+"("+d+u+")"}const b3=/\b([a-z-]*)\(.*?\)/gu,yf={...ua,getAnimatableNone:n=>{const i=n.match(b3);return i?i.map(v3).join(" "):n}},lg={...Li,transform:Math.round},y3={rotate:oa,rotateX:oa,rotateY:oa,rotateZ:oa,scale:zl,scaleX:zl,scaleY:zl,scaleZ:zl,skew:oa,skewX:oa,skewY:oa,distance:ot,translateX:ot,translateY:ot,translateZ:ot,x:ot,y:ot,z:ot,perspective:ot,transformPerspective:ot,opacity:eo,originX:Z0,originY:Z0,originZ:ot},md={borderWidth:ot,borderTopWidth:ot,borderRightWidth:ot,borderBottomWidth:ot,borderLeftWidth:ot,borderRadius:ot,radius:ot,borderTopLeftRadius:ot,borderTopRightRadius:ot,borderBottomRightRadius:ot,borderBottomLeftRadius:ot,width:ot,maxWidth:ot,height:ot,maxHeight:ot,top:ot,right:ot,bottom:ot,left:ot,padding:ot,paddingTop:ot,paddingRight:ot,paddingBottom:ot,paddingLeft:ot,margin:ot,marginTop:ot,marginRight:ot,marginBottom:ot,marginLeft:ot,backgroundPositionX:ot,backgroundPositionY:ot,...y3,zIndex:lg,fillOpacity:eo,strokeOpacity:eo,numOctaves:lg},x3={...md,color:Gt,backgroundColor:Gt,outlineColor:Gt,fill:Gt,stroke:Gt,borderColor:Gt,borderTopColor:Gt,borderRightColor:Gt,borderBottomColor:Gt,borderLeftColor:Gt,filter:yf,WebkitFilter:yf},zb=n=>x3[n];function jb(n,i){let o=zb(n);return o!==yf&&(o=ua),o.getAnimatableNone?o.getAnimatableNone(i):void 0}const S3=new Set(["auto","none","0"]);function T3(n,i,o){let l=0,u;for(;l<n.length&&!u;){const d=n[l];typeof d=="string"&&!S3.has(d)&&no(d).values.length&&(u=n[l]),l++}if(u&&o)for(const d of i)n[d]=jb(o,u)}class A3 extends dd{constructor(i,o,l,u,d){super(i,o,l,u,d,!0)}readKeyframes(){const{unresolvedKeyframes:i,element:o,name:l}=this;if(!o||!o.current)return;super.readKeyframes();for(let m=0;m<i.length;m++){let p=i[m];if(typeof p=="string"&&(p=p.trim(),id(p))){const v=Cb(p,o.current);v!==void 0&&(i[m]=v),m===i.length-1&&(this.finalKeyframe=p)}}if(this.resolveNoneKeyframes(),!kb.has(l)||i.length!==2)return;const[u,d]=i,f=og(u),h=og(d);if(f!==h)if(ng(f)&&ng(h))for(let m=0;m<i.length;m++){const p=i[m];typeof p=="string"&&(i[m]=parseFloat(p))}else Va[l]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:i,name:o}=this,l=[];for(let u=0;u<i.length;u++)(i[u]===null||p3(i[u]))&&l.push(u);l.length&&T3(i,l,o)}measureInitialState(){const{element:i,unresolvedKeyframes:o,name:l}=this;if(!i||!i.current)return;l==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Va[l](i.measureViewportBox(),window.getComputedStyle(i.current)),o[0]=this.measuredOrigin;const u=o[o.length-1];u!==void 0&&i.getValue(l,u).jump(u,!1)}measureEndState(){const{element:i,name:o,unresolvedKeyframes:l}=this;if(!i||!i.current)return;const u=i.getValue(o);u&&u.jump(this.measuredOrigin,!1);const d=l.length-1,f=l[d];l[d]=Va[o](i.measureViewportBox(),window.getComputedStyle(i.current)),f!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=f),this.removedTransforms?.length&&this.removedTransforms.forEach(([h,m])=>{i.getValue(h).set(m)}),this.resolveNoneKeyframes()}}function O3(n,i,o){if(n instanceof EventTarget)return[n];if(typeof n=="string"){let l=document;const u=o?.[n]??l.querySelectorAll(n);return u?Array.from(u):[]}return Array.from(n)}const Nb=(n,i)=>i&&typeof n=="number"?i.transform(n):n;function E3(n){return Wv(n)&&"offsetHeight"in n}const sg=30,w3=n=>!isNaN(parseFloat(n));class M3{constructor(i,o={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=l=>{const u=ye.now();if(this.updatedAt!==u&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(l),this.current!==this.prev&&(this.events.change?.notify(this.current),this.dependents))for(const d of this.dependents)d.dirty()},this.hasAnimated=!1,this.setCurrent(i),this.owner=o.owner}setCurrent(i){this.current=i,this.updatedAt=ye.now(),this.canTrackVelocity===null&&i!==void 0&&(this.canTrackVelocity=w3(this.current))}setPrevFrameValue(i=this.current){this.prevFrameValue=i,this.prevUpdatedAt=this.updatedAt}onChange(i){return this.on("change",i)}on(i,o){this.events[i]||(this.events[i]=new td);const l=this.events[i].add(o);return i==="change"?()=>{l(),zt.read(()=>{this.events.change.getSize()||this.stop()})}:l}clearListeners(){for(const i in this.events)this.events[i].clear()}attach(i,o){this.passiveEffect=i,this.stopPassiveEffect=o}set(i){this.passiveEffect?this.passiveEffect(i,this.updateAndNotify):this.updateAndNotify(i)}setWithVelocity(i,o,l){this.set(o),this.prev=void 0,this.prevFrameValue=i,this.prevUpdatedAt=this.updatedAt-l}jump(i,o=!0){this.updateAndNotify(i),this.prev=i,this.prevUpdatedAt=this.prevFrameValue=void 0,o&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){this.events.change?.notify(this.current)}addDependent(i){this.dependents||(this.dependents=new Set),this.dependents.add(i)}removeDependent(i){this.dependents&&this.dependents.delete(i)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const i=ye.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||i-this.updatedAt>sg)return 0;const o=Math.min(this.updatedAt-this.prevUpdatedAt,sg);return tb(parseFloat(this.current)-parseFloat(this.prevFrameValue),o)}start(i){return this.stop(),new Promise(o=>{this.hasAnimated=!0,this.animation=i(o),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.dependents?.clear(),this.events.destroy?.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Pi(n,i){return new M3(n,i)}const{schedule:pd}=fb(queueMicrotask,!1),Ze={x:!1,y:!1};function Pb(){return Ze.x||Ze.y}function D3(n){return n==="x"||n==="y"?Ze[n]?null:(Ze[n]=!0,()=>{Ze[n]=!1}):Ze.x||Ze.y?null:(Ze.x=Ze.y=!0,()=>{Ze.x=Ze.y=!1})}function Vb(n,i){const o=O3(n),l=new AbortController,u={passive:!0,...i,signal:l.signal};return[o,u,()=>l.abort()]}function ug(n){return!(n.pointerType==="touch"||Pb())}function C3(n,i,o={}){const[l,u,d]=Vb(n,o),f=h=>{if(!ug(h))return;const{target:m}=h,p=i(m,h);if(typeof p!="function"||!m)return;const v=y=>{ug(y)&&(p(y),m.removeEventListener("pointerleave",v))};m.addEventListener("pointerleave",v,u)};return l.forEach(h=>{h.addEventListener("pointerenter",f,u)}),d}const Ub=(n,i)=>i?n===i?!0:Ub(n,i.parentElement):!1,gd=n=>n.pointerType==="mouse"?typeof n.button!="number"||n.button<=0:n.isPrimary!==!1,k3=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function R3(n){return k3.has(n.tagName)||n.tabIndex!==-1}const Ul=new WeakSet;function cg(n){return i=>{i.key==="Enter"&&n(i)}}function Uc(n,i){n.dispatchEvent(new PointerEvent("pointer"+i,{isPrimary:!0,bubbles:!0}))}const _3=(n,i)=>{const o=n.currentTarget;if(!o)return;const l=cg(()=>{if(Ul.has(o))return;Uc(o,"down");const u=cg(()=>{Uc(o,"up")}),d=()=>Uc(o,"cancel");o.addEventListener("keyup",u,i),o.addEventListener("blur",d,i)});o.addEventListener("keydown",l,i),o.addEventListener("blur",()=>o.removeEventListener("keydown",l),i)};function fg(n){return gd(n)&&!Pb()}function z3(n,i,o={}){const[l,u,d]=Vb(n,o),f=h=>{const m=h.currentTarget;if(!fg(h))return;Ul.add(m);const p=i(m,h),v=(M,R)=>{window.removeEventListener("pointerup",y),window.removeEventListener("pointercancel",x),Ul.has(m)&&Ul.delete(m),fg(M)&&typeof p=="function"&&p(M,{success:R})},y=M=>{v(M,m===window||m===document||o.useGlobalTarget||Ub(m,M.target))},x=M=>{v(M,!1)};window.addEventListener("pointerup",y,u),window.addEventListener("pointercancel",x,u)};return l.forEach(h=>{(o.useGlobalTarget?window:h).addEventListener("pointerdown",f,u),E3(h)&&(h.addEventListener("focus",p=>_3(p,u)),!R3(h)&&!h.hasAttribute("tabindex")&&(h.tabIndex=0))}),d}function Lb(n){return Wv(n)&&"ownerSVGElement"in n}function j3(n){return Lb(n)&&n.tagName==="svg"}const ue=n=>!!(n&&n.getVelocity),N3=[..._b,Gt,ua],P3=n=>N3.find(Rb(n)),Bb=et.createContext({transformPagePoint:n=>n,isStatic:!1,reducedMotion:"never"});function V3(n=!0){const i=et.useContext(Qf);if(i===null)return[!0,null];const{isPresent:o,onExitComplete:l,register:u}=i,d=et.useId();et.useEffect(()=>{if(n)return u(d)},[n]);const f=et.useCallback(()=>n&&l&&l(d),[d,l,n]);return!o&&l?[!1,f]:[!0]}const Hb=et.createContext({strict:!1}),dg={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Vi={};for(const n in dg)Vi[n]={isEnabled:i=>dg[n].some(o=>!!i[o])};function U3(n){for(const i in n)Vi[i]={...Vi[i],...n[i]}}const L3=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function $l(n){return n.startsWith("while")||n.startsWith("drag")&&n!=="draggable"||n.startsWith("layout")||n.startsWith("onTap")||n.startsWith("onPan")||n.startsWith("onLayout")||L3.has(n)}let qb=n=>!$l(n);function B3(n){typeof n=="function"&&(qb=i=>i.startsWith("on")?!$l(i):n(i))}try{B3(require("@emotion/is-prop-valid").default)}catch{}function H3(n,i,o){const l={};for(const u in n)u==="values"&&typeof n.values=="object"||(qb(u)||o===!0&&$l(u)||!i&&!$l(u)||n.draggable&&u.startsWith("onDrag"))&&(l[u]=n[u]);return l}const as=et.createContext({});function is(n){return n!==null&&typeof n=="object"&&typeof n.start=="function"}function ao(n){return typeof n=="string"||Array.isArray(n)}const vd=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],bd=["initial",...vd];function rs(n){return is(n.animate)||bd.some(i=>ao(n[i]))}function Yb(n){return!!(rs(n)||n.variants)}function q3(n,i){if(rs(n)){const{initial:o,animate:l}=n;return{initial:o===!1||ao(o)?o:void 0,animate:ao(l)?l:void 0}}return n.inherit!==!1?i:{}}function Y3(n){const{initial:i,animate:o}=q3(n,et.useContext(as));return et.useMemo(()=>({initial:i,animate:o}),[hg(i),hg(o)])}function hg(n){return Array.isArray(n)?n.join(" "):n}const io={};function G3(n){for(const i in n)io[i]=n[i],ad(i)&&(io[i].isCSSVariable=!0)}function Gb(n,{layout:i,layoutId:o}){return Hi.has(n)||n.startsWith("origin")||(i||o!==void 0)&&(!!io[n]||n==="opacity")}const X3={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},F3=Bi.length;function K3(n,i,o){let l="",u=!0;for(let d=0;d<F3;d++){const f=Bi[d],h=n[f];if(h===void 0)continue;let m=!0;if(typeof h=="number"?m=h===(f.startsWith("scale")?1:0):m=parseFloat(h)===0,!m||o){const p=Nb(h,md[f]);if(!m){u=!1;const v=X3[f]||f;l+=`${v}(${p}) `}o&&(i[f]=p)}}return l=l.trim(),o?l=o(i,u?"":l):u&&(l="none"),l}function yd(n,i,o){const{style:l,vars:u,transformOrigin:d}=n;let f=!1,h=!1;for(const m in i){const p=i[m];if(Hi.has(m)){f=!0;continue}else if(ad(m)){u[m]=p;continue}else{const v=Nb(p,md[m]);m.startsWith("origin")?(h=!0,d[m]=v):l[m]=v}}if(i.transform||(f||o?l.transform=K3(i,n.transform,o):l.transform&&(l.transform="none")),h){const{originX:m="50%",originY:p="50%",originZ:v=0}=d;l.transformOrigin=`${m} ${p} ${v}`}}const xd=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function Xb(n,i,o){for(const l in i)!ue(i[l])&&!Gb(l,o)&&(n[l]=i[l])}function Z3({transformTemplate:n},i){return et.useMemo(()=>{const o=xd();return yd(o,i,n),Object.assign({},o.vars,o.style)},[i])}function Q3(n,i){const o=n.style||{},l={};return Xb(l,o,n),Object.assign(l,Z3(n,i)),l}function $3(n,i){const o={},l=Q3(n,i);return n.drag&&n.dragListener!==!1&&(o.draggable=!1,l.userSelect=l.WebkitUserSelect=l.WebkitTouchCallout="none",l.touchAction=n.drag===!0?"none":`pan-${n.drag==="x"?"y":"x"}`),n.tabIndex===void 0&&(n.onTap||n.onTapStart||n.whileTap)&&(o.tabIndex=0),o.style=l,o}const J3={offset:"stroke-dashoffset",array:"stroke-dasharray"},W3={offset:"strokeDashoffset",array:"strokeDasharray"};function I3(n,i,o=1,l=0,u=!0){n.pathLength=1;const d=u?J3:W3;n[d.offset]=ot.transform(-l);const f=ot.transform(i),h=ot.transform(o);n[d.array]=`${f} ${h}`}function Fb(n,{attrX:i,attrY:o,attrScale:l,pathLength:u,pathSpacing:d=1,pathOffset:f=0,...h},m,p,v){if(yd(n,h,p),m){n.style.viewBox&&(n.attrs.viewBox=n.style.viewBox);return}n.attrs=n.style,n.style={};const{attrs:y,style:x}=n;y.transform&&(x.transform=y.transform,delete y.transform),(x.transform||y.transformOrigin)&&(x.transformOrigin=y.transformOrigin??"50% 50%",delete y.transformOrigin),x.transform&&(x.transformBox=v?.transformBox??"fill-box",delete y.transformBox),i!==void 0&&(y.x=i),o!==void 0&&(y.y=o),l!==void 0&&(y.scale=l),u!==void 0&&I3(y,u,d,f,!1)}const Kb=()=>({...xd(),attrs:{}}),Zb=n=>typeof n=="string"&&n.toLowerCase()==="svg";function t4(n,i,o,l){const u=et.useMemo(()=>{const d=Kb();return Fb(d,i,Zb(l),n.transformTemplate,n.style),{...d.attrs,style:{...d.style}}},[i]);if(n.style){const d={};Xb(d,n.style,n),u.style={...d,...u.style}}return u}const e4=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Sd(n){return typeof n!="string"||n.includes("-")?!1:!!(e4.indexOf(n)>-1||/[A-Z]/u.test(n))}function n4(n,i,o,{latestValues:l},u,d=!1){const h=(Sd(n)?t4:$3)(i,l,u,n),m=H3(i,typeof n=="string",d),p=n!==et.Fragment?{...m,...h,ref:o}:{},{children:v}=i,y=et.useMemo(()=>ue(v)?v.get():v,[v]);return et.createElement(n,{...p,children:y})}function mg(n){const i=[{},{}];return n?.values.forEach((o,l)=>{i[0][l]=o.get(),i[1][l]=o.getVelocity()}),i}function Td(n,i,o,l){if(typeof i=="function"){const[u,d]=mg(l);i=i(o!==void 0?o:n.custom,u,d)}if(typeof i=="string"&&(i=n.variants&&n.variants[i]),typeof i=="function"){const[u,d]=mg(l);i=i(o!==void 0?o:n.custom,u,d)}return i}function Ll(n){return ue(n)?n.get():n}function a4({scrapeMotionValuesFromProps:n,createRenderState:i},o,l,u){return{latestValues:i4(o,l,u,n),renderState:i()}}function i4(n,i,o,l){const u={},d=l(n,{});for(const x in d)u[x]=Ll(d[x]);let{initial:f,animate:h}=n;const m=rs(n),p=Yb(n);i&&p&&!m&&n.inherit!==!1&&(f===void 0&&(f=i.initial),h===void 0&&(h=i.animate));let v=o?o.initial===!1:!1;v=v||f===!1;const y=v?h:f;if(y&&typeof y!="boolean"&&!is(y)){const x=Array.isArray(y)?y:[y];for(let M=0;M<x.length;M++){const R=Td(n,x[M]);if(R){const{transitionEnd:E,transition:j,...V}=R;for(const q in V){let L=V[q];if(Array.isArray(L)){const Q=v?L.length-1:0;L=L[Q]}L!==null&&(u[q]=L)}for(const q in E)u[q]=E[q]}}}return u}const Qb=n=>(i,o)=>{const l=et.useContext(as),u=et.useContext(Qf),d=()=>a4(n,i,l,u);return o?d():U5(d)};function Ad(n,i,o){const{style:l}=n,u={};for(const d in l)(ue(l[d])||i.style&&ue(i.style[d])||Gb(d,n)||o?.getValue(d)?.liveStyle!==void 0)&&(u[d]=l[d]);return u}const r4=Qb({scrapeMotionValuesFromProps:Ad,createRenderState:xd});function $b(n,i,o){const l=Ad(n,i,o);for(const u in n)if(ue(n[u])||ue(i[u])){const d=Bi.indexOf(u)!==-1?"attr"+u.charAt(0).toUpperCase()+u.substring(1):u;l[d]=n[u]}return l}const o4=Qb({scrapeMotionValuesFromProps:$b,createRenderState:Kb}),l4=Symbol.for("motionComponentSymbol");function Ci(n){return n&&typeof n=="object"&&Object.prototype.hasOwnProperty.call(n,"current")}function s4(n,i,o){return et.useCallback(l=>{l&&n.onMount&&n.onMount(l),i&&(l?i.mount(l):i.unmount()),o&&(typeof o=="function"?o(l):Ci(o)&&(o.current=l))},[i])}const Od=n=>n.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),u4="framerAppearId",Jb="data-"+Od(u4),Wb=et.createContext({});function c4(n,i,o,l,u){const{visualElement:d}=et.useContext(as),f=et.useContext(Hb),h=et.useContext(Qf),m=et.useContext(Bb).reducedMotion,p=et.useRef(null);l=l||f.renderer,!p.current&&l&&(p.current=l(n,{visualState:i,parent:d,props:o,presenceContext:h,blockInitialAnimation:h?h.initial===!1:!1,reducedMotionConfig:m}));const v=p.current,y=et.useContext(Wb);v&&!v.projection&&u&&(v.type==="html"||v.type==="svg")&&f4(p.current,o,u,y);const x=et.useRef(!1);et.useInsertionEffect(()=>{v&&x.current&&v.update(o,h)});const M=o[Jb],R=et.useRef(!!M&&!window.MotionHandoffIsComplete?.(M)&&window.MotionHasOptimisedAnimation?.(M));return L5(()=>{v&&(x.current=!0,window.MotionIsMounted=!0,v.updateFeatures(),v.scheduleRenderMicrotask(),R.current&&v.animationState&&v.animationState.animateChanges())}),et.useEffect(()=>{v&&(!R.current&&v.animationState&&v.animationState.animateChanges(),R.current&&(queueMicrotask(()=>{window.MotionHandoffMarkAsComplete?.(M)}),R.current=!1),v.enteringChildren=void 0)}),v}function f4(n,i,o,l){const{layoutId:u,layout:d,drag:f,dragConstraints:h,layoutScroll:m,layoutRoot:p,layoutCrossfade:v}=i;n.projection=new o(n.latestValues,i["data-framer-portal-id"]?void 0:Ib(n.parent)),n.projection.setOptions({layoutId:u,layout:d,alwaysMeasureLayout:!!f||h&&Ci(h),visualElement:n,animationType:typeof d=="string"?d:"both",initialPromotionConfig:l,crossfade:v,layoutScroll:m,layoutRoot:p})}function Ib(n){if(n)return n.options.allowProjection!==!1?n.projection:Ib(n.parent)}function Lc(n,{forwardMotionProps:i=!1}={},o,l){o&&U3(o);const u=Sd(n)?o4:r4;function d(h,m){let p;const v={...et.useContext(Bb),...h,layoutId:d4(h)},{isStatic:y}=v,x=Y3(h),M=u(h,y);if(!y&&Zf){h4();const R=m4(v);p=R.MeasureLayout,x.visualElement=c4(n,M,v,l,R.ProjectionNode)}return U.jsxs(as.Provider,{value:x,children:[p&&x.visualElement?U.jsx(p,{visualElement:x.visualElement,...v}):null,n4(n,h,s4(M,x.visualElement,m),M,y,i)]})}d.displayName=`motion.${typeof n=="string"?n:`create(${n.displayName??n.name??""})`}`;const f=et.forwardRef(d);return f[l4]=n,f}function d4({layoutId:n}){const i=et.useContext($v).id;return i&&n!==void 0?i+"-"+n:n}function h4(n,i){et.useContext(Hb).strict}function m4(n){const{drag:i,layout:o}=Vi;if(!i&&!o)return{};const l={...i,...o};return{MeasureLayout:i?.isEnabled(n)||o?.isEnabled(n)?l.MeasureLayout:void 0,ProjectionNode:l.ProjectionNode}}function p4(n,i){if(typeof Proxy>"u")return Lc;const o=new Map,l=(d,f)=>Lc(d,f,n,i),u=(d,f)=>l(d,f);return new Proxy(u,{get:(d,f)=>f==="create"?l:(o.has(f)||o.set(f,Lc(f,void 0,n,i)),o.get(f))})}function ty({top:n,left:i,right:o,bottom:l}){return{x:{min:i,max:o},y:{min:n,max:l}}}function g4({x:n,y:i}){return{top:i.min,right:n.max,bottom:i.max,left:n.min}}function v4(n,i){if(!i)return n;const o=i({x:n.left,y:n.top}),l=i({x:n.right,y:n.bottom});return{top:o.y,left:o.x,bottom:l.y,right:l.x}}function Bc(n){return n===void 0||n===1}function xf({scale:n,scaleX:i,scaleY:o}){return!Bc(n)||!Bc(i)||!Bc(o)}function za(n){return xf(n)||ey(n)||n.z||n.rotate||n.rotateX||n.rotateY||n.skewX||n.skewY}function ey(n){return pg(n.x)||pg(n.y)}function pg(n){return n&&n!=="0%"}function Jl(n,i,o){const l=n-o,u=i*l;return o+u}function gg(n,i,o,l,u){return u!==void 0&&(n=Jl(n,u,l)),Jl(n,o,l)+i}function Sf(n,i=0,o=1,l,u){n.min=gg(n.min,i,o,l,u),n.max=gg(n.max,i,o,l,u)}function ny(n,{x:i,y:o}){Sf(n.x,i.translate,i.scale,i.originPoint),Sf(n.y,o.translate,o.scale,o.originPoint)}const vg=.999999999999,bg=1.0000000000001;function b4(n,i,o,l=!1){const u=o.length;if(!u)return;i.x=i.y=1;let d,f;for(let h=0;h<u;h++){d=o[h],f=d.projectionDelta;const{visualElement:m}=d.options;m&&m.props.style&&m.props.style.display==="contents"||(l&&d.options.layoutScroll&&d.scroll&&d!==d.root&&Ri(n,{x:-d.scroll.offset.x,y:-d.scroll.offset.y}),f&&(i.x*=f.x.scale,i.y*=f.y.scale,ny(n,f)),l&&za(d.latestValues)&&Ri(n,d.latestValues))}i.x<bg&&i.x>vg&&(i.x=1),i.y<bg&&i.y>vg&&(i.y=1)}function ki(n,i){n.min=n.min+i,n.max=n.max+i}function yg(n,i,o,l,u=.5){const d=Nt(n.min,n.max,u);Sf(n,i,o,d,l)}function Ri(n,i){yg(n.x,i.x,i.scaleX,i.scale,i.originX),yg(n.y,i.y,i.scaleY,i.scale,i.originY)}function ay(n,i){return ty(v4(n.getBoundingClientRect(),i))}function y4(n,i,o){const l=ay(n,o),{scroll:u}=i;return u&&(ki(l.x,u.offset.x),ki(l.y,u.offset.y)),l}const xg=()=>({translate:0,scale:1,origin:0,originPoint:0}),_i=()=>({x:xg(),y:xg()}),Sg=()=>({min:0,max:0}),Ht=()=>({x:Sg(),y:Sg()}),Tf={current:null},iy={current:!1};function x4(){if(iy.current=!0,!!Zf)if(window.matchMedia){const n=window.matchMedia("(prefers-reduced-motion)"),i=()=>Tf.current=n.matches;n.addEventListener("change",i),i()}else Tf.current=!1}const S4=new WeakMap;function T4(n,i,o){for(const l in i){const u=i[l],d=o[l];if(ue(u))n.addValue(l,u);else if(ue(d))n.addValue(l,Pi(u,{owner:n}));else if(d!==u)if(n.hasValue(l)){const f=n.getValue(l);f.liveStyle===!0?f.jump(u):f.hasAnimated||f.set(u)}else{const f=n.getStaticValue(l);n.addValue(l,Pi(f!==void 0?f:u,{owner:n}))}}for(const l in o)i[l]===void 0&&n.removeValue(l);return i}const Tg=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class A4{scrapeMotionValuesFromProps(i,o,l){return{}}constructor({parent:i,props:o,presenceContext:l,reducedMotionConfig:u,blockInitialAnimation:d,visualState:f},h={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=dd,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const x=ye.now();this.renderScheduledAt<x&&(this.renderScheduledAt=x,zt.render(this.render,!1,!0))};const{latestValues:m,renderState:p}=f;this.latestValues=m,this.baseTarget={...m},this.initialValues=o.initial?{...m}:{},this.renderState=p,this.parent=i,this.props=o,this.presenceContext=l,this.depth=i?i.depth+1:0,this.reducedMotionConfig=u,this.options=h,this.blockInitialAnimation=!!d,this.isControllingVariants=rs(o),this.isVariantNode=Yb(o),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(i&&i.current);const{willChange:v,...y}=this.scrapeMotionValuesFromProps(o,{},this);for(const x in y){const M=y[x];m[x]!==void 0&&ue(M)&&M.set(m[x])}}mount(i){this.current=i,S4.set(i,this),this.projection&&!this.projection.instance&&this.projection.mount(i),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((o,l)=>this.bindToMotionValue(l,o)),iy.current||x4(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Tf.current,this.parent?.addChild(this),this.update(this.props,this.presenceContext)}unmount(){this.projection&&this.projection.unmount(),sa(this.notifyUpdate),sa(this.render),this.valueSubscriptions.forEach(i=>i()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent?.removeChild(this);for(const i in this.events)this.events[i].clear();for(const i in this.features){const o=this.features[i];o&&(o.unmount(),o.isMounted=!1)}this.current=null}addChild(i){this.children.add(i),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(i)}removeChild(i){this.children.delete(i),this.enteringChildren&&this.enteringChildren.delete(i)}bindToMotionValue(i,o){this.valueSubscriptions.has(i)&&this.valueSubscriptions.get(i)();const l=Hi.has(i);l&&this.onBindTransform&&this.onBindTransform();const u=o.on("change",f=>{this.latestValues[i]=f,this.props.onUpdate&&zt.preRender(this.notifyUpdate),l&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let d;window.MotionCheckAppearSync&&(d=window.MotionCheckAppearSync(this,i,o)),this.valueSubscriptions.set(i,()=>{u(),d&&d(),o.owner&&o.stop()})}sortNodePosition(i){return!this.current||!this.sortInstanceNodePosition||this.type!==i.type?0:this.sortInstanceNodePosition(this.current,i.current)}updateFeatures(){let i="animation";for(i in Vi){const o=Vi[i];if(!o)continue;const{isEnabled:l,Feature:u}=o;if(!this.features[i]&&u&&l(this.props)&&(this.features[i]=new u(this)),this.features[i]){const d=this.features[i];d.isMounted?d.update():(d.mount(),d.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Ht()}getStaticValue(i){return this.latestValues[i]}setStaticValue(i,o){this.latestValues[i]=o}update(i,o){(i.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=i,this.prevPresenceContext=this.presenceContext,this.presenceContext=o;for(let l=0;l<Tg.length;l++){const u=Tg[l];this.propEventSubscriptions[u]&&(this.propEventSubscriptions[u](),delete this.propEventSubscriptions[u]);const d="on"+u,f=i[d];f&&(this.propEventSubscriptions[u]=this.on(u,f))}this.prevMotionValues=T4(this,this.scrapeMotionValuesFromProps(i,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(i){return this.props.variants?this.props.variants[i]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(i){const o=this.getClosestVariantNode();if(o)return o.variantChildren&&o.variantChildren.add(i),()=>o.variantChildren.delete(i)}addValue(i,o){const l=this.values.get(i);o!==l&&(l&&this.removeValue(i),this.bindToMotionValue(i,o),this.values.set(i,o),this.latestValues[i]=o.get())}removeValue(i){this.values.delete(i);const o=this.valueSubscriptions.get(i);o&&(o(),this.valueSubscriptions.delete(i)),delete this.latestValues[i],this.removeValueFromRenderState(i,this.renderState)}hasValue(i){return this.values.has(i)}getValue(i,o){if(this.props.values&&this.props.values[i])return this.props.values[i];let l=this.values.get(i);return l===void 0&&o!==void 0&&(l=Pi(o===null?void 0:o,{owner:this}),this.addValue(i,l)),l}readValue(i,o){let l=this.latestValues[i]!==void 0||!this.current?this.latestValues[i]:this.getBaseTargetFromProps(this.props,i)??this.readValueFromInstance(this.current,i,this.options);return l!=null&&(typeof l=="string"&&(Jv(l)||Iv(l))?l=parseFloat(l):!P3(l)&&ua.test(o)&&(l=jb(i,o)),this.setBaseTarget(i,ue(l)?l.get():l)),ue(l)?l.get():l}setBaseTarget(i,o){this.baseTarget[i]=o}getBaseTarget(i){const{initial:o}=this.props;let l;if(typeof o=="string"||typeof o=="object"){const d=Td(this.props,o,this.presenceContext?.custom);d&&(l=d[i])}if(o&&l!==void 0)return l;const u=this.getBaseTargetFromProps(this.props,i);return u!==void 0&&!ue(u)?u:this.initialValues[i]!==void 0&&l===void 0?void 0:this.baseTarget[i]}on(i,o){return this.events[i]||(this.events[i]=new td),this.events[i].add(o)}notify(i,...o){this.events[i]&&this.events[i].notify(...o)}scheduleRenderMicrotask(){pd.render(this.render)}}class ry extends A4{constructor(){super(...arguments),this.KeyframeResolver=A3}sortInstanceNodePosition(i,o){return i.compareDocumentPosition(o)&2?1:-1}getBaseTargetFromProps(i,o){return i.style?i.style[o]:void 0}removeValueFromRenderState(i,{vars:o,style:l}){delete o[i],delete l[i]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:i}=this.props;ue(i)&&(this.childSubscription=i.on("change",o=>{this.current&&(this.current.textContent=`${o}`)}))}}function oy(n,{style:i,vars:o},l,u){const d=n.style;let f;for(f in i)d[f]=i[f];u?.applyProjectionStyles(d,l);for(f in o)d.setProperty(f,o[f])}function O4(n){return window.getComputedStyle(n)}class E4 extends ry{constructor(){super(...arguments),this.type="html",this.renderInstance=oy}readValueFromInstance(i,o){if(Hi.has(o))return this.projection?.isProjecting?hf(o):qS(i,o);{const l=O4(i),u=(ad(o)?l.getPropertyValue(o):l[o])||0;return typeof u=="string"?u.trim():u}}measureInstanceViewportBox(i,{transformPagePoint:o}){return ay(i,o)}build(i,o,l){yd(i,o,l.transformTemplate)}scrapeMotionValuesFromProps(i,o,l){return Ad(i,o,l)}}const ly=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function w4(n,i,o,l){oy(n,i,void 0,l);for(const u in i.attrs)n.setAttribute(ly.has(u)?u:Od(u),i.attrs[u])}class M4 extends ry{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Ht}getBaseTargetFromProps(i,o){return i[o]}readValueFromInstance(i,o){if(Hi.has(o)){const l=zb(o);return l&&l.default||0}return o=ly.has(o)?o:Od(o),i.getAttribute(o)}scrapeMotionValuesFromProps(i,o,l){return $b(i,o,l)}build(i,o,l){Fb(i,o,this.isSVGTag,l.transformTemplate,l.style)}renderInstance(i,o,l,u){w4(i,o,l,u)}mount(i){this.isSVGTag=Zb(i.tagName),super.mount(i)}}const D4=(n,i)=>Sd(n)?new M4(i):new E4(i,{allowProjection:n!==et.Fragment});function ji(n,i,o){const l=n.getProps();return Td(l,i,o!==void 0?o:l.custom,n)}const Af=n=>Array.isArray(n);function C4(n,i,o){n.hasValue(i)?n.getValue(i).set(o):n.addValue(i,Pi(o))}function k4(n){return Af(n)?n[n.length-1]||0:n}function R4(n,i){const o=ji(n,i);let{transitionEnd:l={},transition:u={},...d}=o||{};d={...d,...l};for(const f in d){const h=k4(d[f]);C4(n,f,h)}}function _4(n){return!!(ue(n)&&n.add)}function Of(n,i){const o=n.getValue("willChange");if(_4(o))return o.add(i);if(!o&&kn.WillChange){const l=new kn.WillChange("auto");n.addValue("willChange",l),l.add(i)}}function sy(n){return n.props[Jb]}const z4=n=>n!==null;function j4(n,{repeat:i,repeatType:o="loop"},l){const u=n.filter(z4),d=i&&o!=="loop"&&i%2===1?0:u.length-1;return u[d]}const N4={type:"spring",stiffness:500,damping:25,restSpeed:10},P4=n=>({type:"spring",stiffness:550,damping:n===0?2*Math.sqrt(550):30,restSpeed:10}),V4={type:"keyframes",duration:.8},U4={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},L4=(n,{keyframes:i})=>i.length>2?V4:Hi.has(n)?n.startsWith("scale")?P4(i[1]):N4:U4;function B4({when:n,delay:i,delayChildren:o,staggerChildren:l,staggerDirection:u,repeat:d,repeatType:f,repeatDelay:h,from:m,elapsed:p,...v}){return!!Object.keys(v).length}const Ed=(n,i,o,l={},u,d)=>f=>{const h=hd(l,n)||{},m=h.delay||l.delay||0;let{elapsed:p=0}=l;p=p-un(m);const v={keyframes:Array.isArray(o)?o:[null,o],ease:"easeOut",velocity:i.getVelocity(),...h,delay:-p,onUpdate:x=>{i.set(x),h.onUpdate&&h.onUpdate(x)},onComplete:()=>{f(),h.onComplete&&h.onComplete()},name:n,motionValue:i,element:d?void 0:u};B4(h)||Object.assign(v,L4(n,v)),v.duration&&(v.duration=un(v.duration)),v.repeatDelay&&(v.repeatDelay=un(v.repeatDelay)),v.from!==void 0&&(v.keyframes[0]=v.from);let y=!1;if((v.type===!1||v.duration===0&&!v.repeatDelay)&&(bf(v),v.delay===0&&(y=!0)),(kn.instantAnimations||kn.skipAnimations)&&(y=!0,bf(v),v.delay=0),v.allowFlatten=!h.type&&!h.ease,y&&!d&&i.get()!==void 0){const x=j4(v.keyframes,h);if(x!==void 0){zt.update(()=>{v.onUpdate(x),v.onComplete()});return}}return h.isSync?new fd(v):new f3(v)};function H4({protectedKeys:n,needsAnimating:i},o){const l=n.hasOwnProperty(o)&&i[o]!==!0;return i[o]=!1,l}function uy(n,i,{delay:o=0,transitionOverride:l,type:u}={}){let{transition:d=n.getDefaultTransition(),transitionEnd:f,...h}=i;l&&(d=l);const m=[],p=u&&n.animationState&&n.animationState.getState()[u];for(const v in h){const y=n.getValue(v,n.latestValues[v]??null),x=h[v];if(x===void 0||p&&H4(p,v))continue;const M={delay:o,...hd(d||{},v)},R=y.get();if(R!==void 0&&!y.isAnimating&&!Array.isArray(x)&&x===R&&!M.velocity)continue;let E=!1;if(window.MotionHandoffAnimation){const V=sy(n);if(V){const q=window.MotionHandoffAnimation(V,v,zt);q!==null&&(M.startTime=q,E=!0)}}Of(n,v),y.start(Ed(v,y,x,n.shouldReduceMotion&&kb.has(v)?{type:!1}:M,n,E));const j=y.animation;j&&m.push(j)}return f&&Promise.all(m).then(()=>{zt.update(()=>{f&&R4(n,f)})}),m}function cy(n,i,o,l=0,u=1){const d=Array.from(n).sort((p,v)=>p.sortNodePosition(v)).indexOf(i),f=n.size,h=(f-1)*l;return typeof o=="function"?o(d,f):u===1?d*l:h-d*l}function Ef(n,i,o={}){const l=ji(n,i,o.type==="exit"?n.presenceContext?.custom:void 0);let{transition:u=n.getDefaultTransition()||{}}=l||{};o.transitionOverride&&(u=o.transitionOverride);const d=l?()=>Promise.all(uy(n,l,o)):()=>Promise.resolve(),f=n.variantChildren&&n.variantChildren.size?(m=0)=>{const{delayChildren:p=0,staggerChildren:v,staggerDirection:y}=u;return q4(n,i,m,p,v,y,o)}:()=>Promise.resolve(),{when:h}=u;if(h){const[m,p]=h==="beforeChildren"?[d,f]:[f,d];return m().then(()=>p())}else return Promise.all([d(),f(o.delay)])}function q4(n,i,o=0,l=0,u=0,d=1,f){const h=[];for(const m of n.variantChildren)m.notify("AnimationStart",i),h.push(Ef(m,i,{...f,delay:o+(typeof l=="function"?0:l)+cy(n.variantChildren,m,l,u,d)}).then(()=>m.notify("AnimationComplete",i)));return Promise.all(h)}function Y4(n,i,o={}){n.notify("AnimationStart",i);let l;if(Array.isArray(i)){const u=i.map(d=>Ef(n,d,o));l=Promise.all(u)}else if(typeof i=="string")l=Ef(n,i,o);else{const u=typeof i=="function"?ji(n,i,o.custom):i;l=Promise.all(uy(n,u,o))}return l.then(()=>{n.notify("AnimationComplete",i)})}function fy(n,i){if(!Array.isArray(i))return!1;const o=i.length;if(o!==n.length)return!1;for(let l=0;l<o;l++)if(i[l]!==n[l])return!1;return!0}const G4=bd.length;function dy(n){if(!n)return;if(!n.isControllingVariants){const o=n.parent?dy(n.parent)||{}:{};return n.props.initial!==void 0&&(o.initial=n.props.initial),o}const i={};for(let o=0;o<G4;o++){const l=bd[o],u=n.props[l];(ao(u)||u===!1)&&(i[l]=u)}return i}const X4=[...vd].reverse(),F4=vd.length;function K4(n){return i=>Promise.all(i.map(({animation:o,options:l})=>Y4(n,o,l)))}function Z4(n){let i=K4(n),o=Ag(),l=!0;const u=m=>(p,v)=>{const y=ji(n,v,m==="exit"?n.presenceContext?.custom:void 0);if(y){const{transition:x,transitionEnd:M,...R}=y;p={...p,...R,...M}}return p};function d(m){i=m(n)}function f(m){const{props:p}=n,v=dy(n.parent)||{},y=[],x=new Set;let M={},R=1/0;for(let j=0;j<F4;j++){const V=X4[j],q=o[V],L=p[V]!==void 0?p[V]:v[V],Q=ao(L),H=V===m?q.isActive:null;H===!1&&(R=j);let I=L===v[V]&&L!==p[V]&&Q;if(I&&l&&n.manuallyAnimateOnMount&&(I=!1),q.protectedKeys={...M},!q.isActive&&H===null||!L&&!q.prevProp||is(L)||typeof L=="boolean")continue;const lt=Q4(q.prevProp,L);let K=lt||V===m&&q.isActive&&!I&&Q||j>R&&Q,ct=!1;const Xt=Array.isArray(L)?L:[L];let re=Xt.reduce(u(V),{});H===!1&&(re={});const{prevResolvedValues:Ft={}}=q,dn={...Ft,...re},We=G=>{K=!0,x.has(G)&&(ct=!0,x.delete(G)),q.needsAnimating[G]=!0;const $=n.getValue(G);$&&($.liveStyle=!1)};for(const G in dn){const $=re[G],gt=Ft[G];if(M.hasOwnProperty(G))continue;let T=!1;Af($)&&Af(gt)?T=!fy($,gt):T=$!==gt,T?$!=null?We(G):x.add(G):$!==void 0&&x.has(G)?We(G):q.protectedKeys[G]=!0}q.prevProp=L,q.prevResolvedValues=re,q.isActive&&(M={...M,...re}),l&&n.blockInitialAnimation&&(K=!1);const Kt=I&&lt;K&&(!Kt||ct)&&y.push(...Xt.map(G=>{const $={type:V};if(typeof G=="string"&&l&&!Kt&&n.manuallyAnimateOnMount&&n.parent){const{parent:gt}=n,T=ji(gt,G);if(gt.enteringChildren&&T){const{delayChildren:B}=T.transition||{};$.delay=cy(gt.enteringChildren,n,B)}}return{animation:G,options:$}}))}if(x.size){const j={};if(typeof p.initial!="boolean"){const V=ji(n,Array.isArray(p.initial)?p.initial[0]:p.initial);V&&V.transition&&(j.transition=V.transition)}x.forEach(V=>{const q=n.getBaseTarget(V),L=n.getValue(V);L&&(L.liveStyle=!0),j[V]=q??null}),y.push({animation:j})}let E=!!y.length;return l&&(p.initial===!1||p.initial===p.animate)&&!n.manuallyAnimateOnMount&&(E=!1),l=!1,E?i(y):Promise.resolve()}function h(m,p){if(o[m].isActive===p)return Promise.resolve();n.variantChildren?.forEach(y=>y.animationState?.setActive(m,p)),o[m].isActive=p;const v=f(m);for(const y in o)o[y].protectedKeys={};return v}return{animateChanges:f,setActive:h,setAnimateFunction:d,getState:()=>o,reset:()=>{o=Ag(),l=!0}}}function Q4(n,i){return typeof i=="string"?i!==n:Array.isArray(i)?!fy(i,n):!1}function _a(n=!1){return{isActive:n,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Ag(){return{animate:_a(!0),whileInView:_a(),whileHover:_a(),whileTap:_a(),whileDrag:_a(),whileFocus:_a(),exit:_a()}}class ha{constructor(i){this.isMounted=!1,this.node=i}update(){}}class $4 extends ha{constructor(i){super(i),i.animationState||(i.animationState=Z4(i))}updateAnimationControlsSubscription(){const{animate:i}=this.node.getProps();is(i)&&(this.unmountControls=i.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:i}=this.node.getProps(),{animate:o}=this.node.prevProps||{};i!==o&&this.updateAnimationControlsSubscription()}unmount(){this.node.animationState.reset(),this.unmountControls?.()}}let J4=0;class W4 extends ha{constructor(){super(...arguments),this.id=J4++}update(){if(!this.node.presenceContext)return;const{isPresent:i,onExitComplete:o}=this.node.presenceContext,{isPresent:l}=this.node.prevPresenceContext||{};if(!this.node.animationState||i===l)return;const u=this.node.animationState.setActive("exit",!i);o&&!i&&u.then(()=>{o(this.id)})}mount(){const{register:i,onExitComplete:o}=this.node.presenceContext||{};o&&o(this.id),i&&(this.unmount=i(this.id))}unmount(){}}const I4={animation:{Feature:$4},exit:{Feature:W4}};function ro(n,i,o,l={passive:!0}){return n.addEventListener(i,o,l),()=>n.removeEventListener(i,o)}function co(n){return{point:{x:n.pageX,y:n.pageY}}}const tT=n=>i=>gd(i)&&n(i,co(i));function Zr(n,i,o,l){return ro(n,i,tT(o),l)}const hy=1e-4,eT=1-hy,nT=1+hy,my=.01,aT=0-my,iT=0+my;function he(n){return n.max-n.min}function rT(n,i,o){return Math.abs(n-i)<=o}function Og(n,i,o,l=.5){n.origin=l,n.originPoint=Nt(i.min,i.max,n.origin),n.scale=he(o)/he(i),n.translate=Nt(o.min,o.max,n.origin)-n.originPoint,(n.scale>=eT&&n.scale<=nT||isNaN(n.scale))&&(n.scale=1),(n.translate>=aT&&n.translate<=iT||isNaN(n.translate))&&(n.translate=0)}function Qr(n,i,o,l){Og(n.x,i.x,o.x,l?l.originX:void 0),Og(n.y,i.y,o.y,l?l.originY:void 0)}function Eg(n,i,o){n.min=o.min+i.min,n.max=n.min+he(i)}function oT(n,i,o){Eg(n.x,i.x,o.x),Eg(n.y,i.y,o.y)}function wg(n,i,o){n.min=i.min-o.min,n.max=n.min+he(i)}function $r(n,i,o){wg(n.x,i.x,o.x),wg(n.y,i.y,o.y)}function qe(n){return[n("x"),n("y")]}const py=({current:n})=>n?n.ownerDocument.defaultView:null,Mg=(n,i)=>Math.abs(n-i);function lT(n,i){const o=Mg(n.x,i.x),l=Mg(n.y,i.y);return Math.sqrt(o**2+l**2)}class gy{constructor(i,o,{transformPagePoint:l,contextWindow:u=window,dragSnapToOrigin:d=!1,distanceThreshold:f=3}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const x=qc(this.lastMoveEventInfo,this.history),M=this.startEvent!==null,R=lT(x.offset,{x:0,y:0})>=this.distanceThreshold;if(!M&&!R)return;const{point:E}=x,{timestamp:j}=ie;this.history.push({...E,timestamp:j});const{onStart:V,onMove:q}=this.handlers;M||(V&&V(this.lastMoveEvent,x),this.startEvent=this.lastMoveEvent),q&&q(this.lastMoveEvent,x)},this.handlePointerMove=(x,M)=>{this.lastMoveEvent=x,this.lastMoveEventInfo=Hc(M,this.transformPagePoint),zt.update(this.updatePoint,!0)},this.handlePointerUp=(x,M)=>{this.end();const{onEnd:R,onSessionEnd:E,resumeAnimation:j}=this.handlers;if(this.dragSnapToOrigin&&j&&j(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const V=qc(x.type==="pointercancel"?this.lastMoveEventInfo:Hc(M,this.transformPagePoint),this.history);this.startEvent&&R&&R(x,V),E&&E(x,V)},!gd(i))return;this.dragSnapToOrigin=d,this.handlers=o,this.transformPagePoint=l,this.distanceThreshold=f,this.contextWindow=u||window;const h=co(i),m=Hc(h,this.transformPagePoint),{point:p}=m,{timestamp:v}=ie;this.history=[{...p,timestamp:v}];const{onSessionStart:y}=o;y&&y(i,qc(m,this.history)),this.removeListeners=lo(Zr(this.contextWindow,"pointermove",this.handlePointerMove),Zr(this.contextWindow,"pointerup",this.handlePointerUp),Zr(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(i){this.handlers=i}end(){this.removeListeners&&this.removeListeners(),sa(this.updatePoint)}}function Hc(n,i){return i?{point:i(n.point)}:n}function Dg(n,i){return{x:n.x-i.x,y:n.y-i.y}}function qc({point:n},i){return{point:n,delta:Dg(n,vy(i)),offset:Dg(n,sT(i)),velocity:uT(i,.1)}}function sT(n){return n[0]}function vy(n){return n[n.length-1]}function uT(n,i){if(n.length<2)return{x:0,y:0};let o=n.length-1,l=null;const u=vy(n);for(;o>=0&&(l=n[o],!(u.timestamp-l.timestamp>un(i)));)o--;if(!l)return{x:0,y:0};const d=cn(u.timestamp-l.timestamp);if(d===0)return{x:0,y:0};const f={x:(u.x-l.x)/d,y:(u.y-l.y)/d};return f.x===1/0&&(f.x=0),f.y===1/0&&(f.y=0),f}function cT(n,{min:i,max:o},l){return i!==void 0&&n<i?n=l?Nt(i,n,l.min):Math.max(n,i):o!==void 0&&n>o&&(n=l?Nt(o,n,l.max):Math.min(n,o)),n}function Cg(n,i,o){return{min:i!==void 0?n.min+i:void 0,max:o!==void 0?n.max+o-(n.max-n.min):void 0}}function fT(n,{top:i,left:o,bottom:l,right:u}){return{x:Cg(n.x,o,u),y:Cg(n.y,i,l)}}function kg(n,i){let o=i.min-n.min,l=i.max-n.max;return i.max-i.min<n.max-n.min&&([o,l]=[l,o]),{min:o,max:l}}function dT(n,i){return{x:kg(n.x,i.x),y:kg(n.y,i.y)}}function hT(n,i){let o=.5;const l=he(n),u=he(i);return u>l?o=to(i.min,i.max-l,n.min):l>u&&(o=to(n.min,n.max-u,i.min)),Cn(0,1,o)}function mT(n,i){const o={};return i.min!==void 0&&(o.min=i.min-n.min),i.max!==void 0&&(o.max=i.max-n.min),o}const wf=.35;function pT(n=wf){return n===!1?n=0:n===!0&&(n=wf),{x:Rg(n,"left","right"),y:Rg(n,"top","bottom")}}function Rg(n,i,o){return{min:_g(n,i),max:_g(n,o)}}function _g(n,i){return typeof n=="number"?n:n[i]||0}const gT=new WeakMap;class vT{constructor(i){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Ht(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=i}start(i,{snapToCursor:o=!1,distanceThreshold:l}={}){const{presenceContext:u}=this.visualElement;if(u&&u.isPresent===!1)return;const d=y=>{const{dragSnapToOrigin:x}=this.getProps();x?this.pauseAnimation():this.stopAnimation(),o&&this.snapToCursor(co(y).point)},f=(y,x)=>{const{drag:M,dragPropagation:R,onDragStart:E}=this.getProps();if(M&&!R&&(this.openDragLock&&this.openDragLock(),this.openDragLock=D3(M),!this.openDragLock))return;this.latestPointerEvent=y,this.latestPanInfo=x,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),qe(V=>{let q=this.getAxisMotionValue(V).get()||0;if(fn.test(q)){const{projection:L}=this.visualElement;if(L&&L.layout){const Q=L.layout.layoutBox[V];Q&&(q=he(Q)*(parseFloat(q)/100))}}this.originPoint[V]=q}),E&&zt.postRender(()=>E(y,x)),Of(this.visualElement,"transform");const{animationState:j}=this.visualElement;j&&j.setActive("whileDrag",!0)},h=(y,x)=>{this.latestPointerEvent=y,this.latestPanInfo=x;const{dragPropagation:M,dragDirectionLock:R,onDirectionLock:E,onDrag:j}=this.getProps();if(!M&&!this.openDragLock)return;const{offset:V}=x;if(R&&this.currentDirection===null){this.currentDirection=bT(V),this.currentDirection!==null&&E&&E(this.currentDirection);return}this.updateAxis("x",x.point,V),this.updateAxis("y",x.point,V),this.visualElement.render(),j&&j(y,x)},m=(y,x)=>{this.latestPointerEvent=y,this.latestPanInfo=x,this.stop(y,x),this.latestPointerEvent=null,this.latestPanInfo=null},p=()=>qe(y=>this.getAnimationState(y)==="paused"&&this.getAxisMotionValue(y).animation?.play()),{dragSnapToOrigin:v}=this.getProps();this.panSession=new gy(i,{onSessionStart:d,onStart:f,onMove:h,onSessionEnd:m,resumeAnimation:p},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:v,distanceThreshold:l,contextWindow:py(this.visualElement)})}stop(i,o){const l=i||this.latestPointerEvent,u=o||this.latestPanInfo,d=this.isDragging;if(this.cancel(),!d||!u||!l)return;const{velocity:f}=u;this.startAnimation(f);const{onDragEnd:h}=this.getProps();h&&zt.postRender(()=>h(l,u))}cancel(){this.isDragging=!1;const{projection:i,animationState:o}=this.visualElement;i&&(i.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:l}=this.getProps();!l&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),o&&o.setActive("whileDrag",!1)}updateAxis(i,o,l){const{drag:u}=this.getProps();if(!l||!jl(i,u,this.currentDirection))return;const d=this.getAxisMotionValue(i);let f=this.originPoint[i]+l[i];this.constraints&&this.constraints[i]&&(f=cT(f,this.constraints[i],this.elastic[i])),d.set(f)}resolveConstraints(){const{dragConstraints:i,dragElastic:o}=this.getProps(),l=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):this.visualElement.projection?.layout,u=this.constraints;i&&Ci(i)?this.constraints||(this.constraints=this.resolveRefConstraints()):i&&l?this.constraints=fT(l.layoutBox,i):this.constraints=!1,this.elastic=pT(o),u!==this.constraints&&l&&this.constraints&&!this.hasMutatedConstraints&&qe(d=>{this.constraints!==!1&&this.getAxisMotionValue(d)&&(this.constraints[d]=mT(l.layoutBox[d],this.constraints[d]))})}resolveRefConstraints(){const{dragConstraints:i,onMeasureDragConstraints:o}=this.getProps();if(!i||!Ci(i))return!1;const l=i.current,{projection:u}=this.visualElement;if(!u||!u.layout)return!1;const d=y4(l,u.root,this.visualElement.getTransformPagePoint());let f=dT(u.layout.layoutBox,d);if(o){const h=o(g4(f));this.hasMutatedConstraints=!!h,h&&(f=ty(h))}return f}startAnimation(i){const{drag:o,dragMomentum:l,dragElastic:u,dragTransition:d,dragSnapToOrigin:f,onDragTransitionEnd:h}=this.getProps(),m=this.constraints||{},p=qe(v=>{if(!jl(v,o,this.currentDirection))return;let y=m&&m[v]||{};f&&(y={min:0,max:0});const x=u?200:1e6,M=u?40:1e7,R={type:"inertia",velocity:l?i[v]:0,bounceStiffness:x,bounceDamping:M,timeConstant:750,restDelta:1,restSpeed:10,...d,...y};return this.startAxisValueAnimation(v,R)});return Promise.all(p).then(h)}startAxisValueAnimation(i,o){const l=this.getAxisMotionValue(i);return Of(this.visualElement,i),l.start(Ed(i,l,0,o,this.visualElement,!1))}stopAnimation(){qe(i=>this.getAxisMotionValue(i).stop())}pauseAnimation(){qe(i=>this.getAxisMotionValue(i).animation?.pause())}getAnimationState(i){return this.getAxisMotionValue(i).animation?.state}getAxisMotionValue(i){const o=`_drag${i.toUpperCase()}`,l=this.visualElement.getProps(),u=l[o];return u||this.visualElement.getValue(i,(l.initial?l.initial[i]:void 0)||0)}snapToCursor(i){qe(o=>{const{drag:l}=this.getProps();if(!jl(o,l,this.currentDirection))return;const{projection:u}=this.visualElement,d=this.getAxisMotionValue(o);if(u&&u.layout){const{min:f,max:h}=u.layout.layoutBox[o];d.set(i[o]-Nt(f,h,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:i,dragConstraints:o}=this.getProps(),{projection:l}=this.visualElement;if(!Ci(o)||!l||!this.constraints)return;this.stopAnimation();const u={x:0,y:0};qe(f=>{const h=this.getAxisMotionValue(f);if(h&&this.constraints!==!1){const m=h.get();u[f]=hT({min:m,max:m},this.constraints[f])}});const{transformTemplate:d}=this.visualElement.getProps();this.visualElement.current.style.transform=d?d({},""):"none",l.root&&l.root.updateScroll(),l.updateLayout(),this.resolveConstraints(),qe(f=>{if(!jl(f,i,null))return;const h=this.getAxisMotionValue(f),{min:m,max:p}=this.constraints[f];h.set(Nt(m,p,u[f]))})}addListeners(){if(!this.visualElement.current)return;gT.set(this.visualElement,this);const i=this.visualElement.current,o=Zr(i,"pointerdown",m=>{const{drag:p,dragListener:v=!0}=this.getProps();p&&v&&this.start(m)}),l=()=>{const{dragConstraints:m}=this.getProps();Ci(m)&&m.current&&(this.constraints=this.resolveRefConstraints())},{projection:u}=this.visualElement,d=u.addEventListener("measure",l);u&&!u.layout&&(u.root&&u.root.updateScroll(),u.updateLayout()),zt.read(l);const f=ro(window,"resize",()=>this.scalePositionWithinConstraints()),h=u.addEventListener("didUpdate",({delta:m,hasLayoutChanged:p})=>{this.isDragging&&p&&(qe(v=>{const y=this.getAxisMotionValue(v);y&&(this.originPoint[v]+=m[v].translate,y.set(y.get()+m[v].translate))}),this.visualElement.render())});return()=>{f(),o(),d(),h&&h()}}getProps(){const i=this.visualElement.getProps(),{drag:o=!1,dragDirectionLock:l=!1,dragPropagation:u=!1,dragConstraints:d=!1,dragElastic:f=wf,dragMomentum:h=!0}=i;return{...i,drag:o,dragDirectionLock:l,dragPropagation:u,dragConstraints:d,dragElastic:f,dragMomentum:h}}}function jl(n,i,o){return(i===!0||i===n)&&(o===null||o===n)}function bT(n,i=10){let o=null;return Math.abs(n.y)>i?o="y":Math.abs(n.x)>i&&(o="x"),o}class yT extends ha{constructor(i){super(i),this.removeGroupControls=Ye,this.removeListeners=Ye,this.controls=new vT(i)}mount(){const{dragControls:i}=this.node.getProps();i&&(this.removeGroupControls=i.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Ye}unmount(){this.removeGroupControls(),this.removeListeners()}}const zg=n=>(i,o)=>{n&&zt.postRender(()=>n(i,o))};class xT extends ha{constructor(){super(...arguments),this.removePointerDownListener=Ye}onPointerDown(i){this.session=new gy(i,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:py(this.node)})}createPanHandlers(){const{onPanSessionStart:i,onPanStart:o,onPan:l,onPanEnd:u}=this.node.getProps();return{onSessionStart:zg(i),onStart:zg(o),onMove:l,onEnd:(d,f)=>{delete this.session,u&&zt.postRender(()=>u(d,f))}}}mount(){this.removePointerDownListener=Zr(this.node.current,"pointerdown",i=>this.onPointerDown(i))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const Bl={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function jg(n,i){return i.max===i.min?0:n/(i.max-i.min)*100}const qr={correct:(n,i)=>{if(!i.target)return n;if(typeof n=="string")if(ot.test(n))n=parseFloat(n);else return n;const o=jg(n,i.target.x),l=jg(n,i.target.y);return`${o}% ${l}%`}},ST={correct:(n,{treeScale:i,projectionDelta:o})=>{const l=n,u=ua.parse(n);if(u.length>5)return l;const d=ua.createTransformer(n),f=typeof u[0]!="number"?1:0,h=o.x.scale*i.x,m=o.y.scale*i.y;u[0+f]/=h,u[1+f]/=m;const p=Nt(h,m,.5);return typeof u[2+f]=="number"&&(u[2+f]/=p),typeof u[3+f]=="number"&&(u[3+f]/=p),d(u)}};let Yc=!1;class TT extends et.Component{componentDidMount(){const{visualElement:i,layoutGroup:o,switchLayoutGroup:l,layoutId:u}=this.props,{projection:d}=i;G3(AT),d&&(o.group&&o.group.add(d),l&&l.register&&u&&l.register(d),Yc&&d.root.didUpdate(),d.addEventListener("animationComplete",()=>{this.safeToRemove()}),d.setOptions({...d.options,onExitComplete:()=>this.safeToRemove()})),Bl.hasEverUpdated=!0}getSnapshotBeforeUpdate(i){const{layoutDependency:o,visualElement:l,drag:u,isPresent:d}=this.props,{projection:f}=l;return f&&(f.isPresent=d,Yc=!0,u||i.layoutDependency!==o||o===void 0||i.isPresent!==d?f.willUpdate():this.safeToRemove(),i.isPresent!==d&&(d?f.promote():f.relegate()||zt.postRender(()=>{const h=f.getStack();(!h||!h.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:i}=this.props.visualElement;i&&(i.root.didUpdate(),pd.postRender(()=>{!i.currentAnimation&&i.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:i,layoutGroup:o,switchLayoutGroup:l}=this.props,{projection:u}=i;Yc=!0,u&&(u.scheduleCheckAfterUnmount(),o&&o.group&&o.group.remove(u),l&&l.deregister&&l.deregister(u))}safeToRemove(){const{safeToRemove:i}=this.props;i&&i()}render(){return null}}function by(n){const[i,o]=V3(),l=et.useContext($v);return U.jsx(TT,{...n,layoutGroup:l,switchLayoutGroup:et.useContext(Wb),isPresent:i,safeToRemove:o})}const AT={borderRadius:{...qr,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:qr,borderTopRightRadius:qr,borderBottomLeftRadius:qr,borderBottomRightRadius:qr,boxShadow:ST};function OT(n,i,o){const l=ue(n)?n:Pi(n);return l.start(Ed("",l,i,o)),l.animation}const ET=(n,i)=>n.depth-i.depth;class wT{constructor(){this.children=[],this.isDirty=!1}add(i){$f(this.children,i),this.isDirty=!0}remove(i){Jf(this.children,i),this.isDirty=!0}forEach(i){this.isDirty&&this.children.sort(ET),this.isDirty=!1,this.children.forEach(i)}}function MT(n,i){const o=ye.now(),l=({timestamp:u})=>{const d=u-o;d>=i&&(sa(l),n(d-i))};return zt.setup(l,!0),()=>sa(l)}const yy=["TopLeft","TopRight","BottomLeft","BottomRight"],DT=yy.length,Ng=n=>typeof n=="string"?parseFloat(n):n,Pg=n=>typeof n=="number"||ot.test(n);function CT(n,i,o,l,u,d){u?(n.opacity=Nt(0,o.opacity??1,kT(l)),n.opacityExit=Nt(i.opacity??1,0,RT(l))):d&&(n.opacity=Nt(i.opacity??1,o.opacity??1,l));for(let f=0;f<DT;f++){const h=`border${yy[f]}Radius`;let m=Vg(i,h),p=Vg(o,h);if(m===void 0&&p===void 0)continue;m||(m=0),p||(p=0),m===0||p===0||Pg(m)===Pg(p)?(n[h]=Math.max(Nt(Ng(m),Ng(p),l),0),(fn.test(p)||fn.test(m))&&(n[h]+="%")):n[h]=p}(i.rotate||o.rotate)&&(n.rotate=Nt(i.rotate||0,o.rotate||0,l))}function Vg(n,i){return n[i]!==void 0?n[i]:n.borderRadius}const kT=xy(0,.5,lb),RT=xy(.5,.95,Ye);function xy(n,i,o){return l=>l<n?0:l>i?1:o(to(n,i,l))}function Ug(n,i){n.min=i.min,n.max=i.max}function He(n,i){Ug(n.x,i.x),Ug(n.y,i.y)}function Lg(n,i){n.translate=i.translate,n.scale=i.scale,n.originPoint=i.originPoint,n.origin=i.origin}function Bg(n,i,o,l,u){return n-=i,n=Jl(n,1/o,l),u!==void 0&&(n=Jl(n,1/u,l)),n}function _T(n,i=0,o=1,l=.5,u,d=n,f=n){if(fn.test(i)&&(i=parseFloat(i),i=Nt(f.min,f.max,i/100)-f.min),typeof i!="number")return;let h=Nt(d.min,d.max,l);n===d&&(h-=i),n.min=Bg(n.min,i,o,h,u),n.max=Bg(n.max,i,o,h,u)}function Hg(n,i,[o,l,u],d,f){_T(n,i[o],i[l],i[u],i.scale,d,f)}const zT=["x","scaleX","originX"],jT=["y","scaleY","originY"];function qg(n,i,o,l){Hg(n.x,i,zT,o?o.x:void 0,l?l.x:void 0),Hg(n.y,i,jT,o?o.y:void 0,l?l.y:void 0)}function Yg(n){return n.translate===0&&n.scale===1}function Sy(n){return Yg(n.x)&&Yg(n.y)}function Gg(n,i){return n.min===i.min&&n.max===i.max}function NT(n,i){return Gg(n.x,i.x)&&Gg(n.y,i.y)}function Xg(n,i){return Math.round(n.min)===Math.round(i.min)&&Math.round(n.max)===Math.round(i.max)}function Ty(n,i){return Xg(n.x,i.x)&&Xg(n.y,i.y)}function Fg(n){return he(n.x)/he(n.y)}function Kg(n,i){return n.translate===i.translate&&n.scale===i.scale&&n.originPoint===i.originPoint}class PT{constructor(){this.members=[]}add(i){$f(this.members,i),i.scheduleRender()}remove(i){if(Jf(this.members,i),i===this.prevLead&&(this.prevLead=void 0),i===this.lead){const o=this.members[this.members.length-1];o&&this.promote(o)}}relegate(i){const o=this.members.findIndex(u=>i===u);if(o===0)return!1;let l;for(let u=o;u>=0;u--){const d=this.members[u];if(d.isPresent!==!1){l=d;break}}return l?(this.promote(l),!0):!1}promote(i,o){const l=this.lead;if(i!==l&&(this.prevLead=l,this.lead=i,i.show(),l)){l.instance&&l.scheduleRender(),i.scheduleRender(),i.resumeFrom=l,o&&(i.resumeFrom.preserveOpacity=!0),l.snapshot&&(i.snapshot=l.snapshot,i.snapshot.latestValues=l.animationValues||l.latestValues),i.root&&i.root.isUpdating&&(i.isLayoutDirty=!0);const{crossfade:u}=i.options;u===!1&&l.hide()}}exitAnimationComplete(){this.members.forEach(i=>{const{options:o,resumingFrom:l}=i;o.onExitComplete&&o.onExitComplete(),l&&l.options.onExitComplete&&l.options.onExitComplete()})}scheduleRender(){this.members.forEach(i=>{i.instance&&i.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function VT(n,i,o){let l="";const u=n.x.translate/i.x,d=n.y.translate/i.y,f=o?.z||0;if((u||d||f)&&(l=`translate3d(${u}px, ${d}px, ${f}px) `),(i.x!==1||i.y!==1)&&(l+=`scale(${1/i.x}, ${1/i.y}) `),o){const{transformPerspective:p,rotate:v,rotateX:y,rotateY:x,skewX:M,skewY:R}=o;p&&(l=`perspective(${p}px) ${l}`),v&&(l+=`rotate(${v}deg) `),y&&(l+=`rotateX(${y}deg) `),x&&(l+=`rotateY(${x}deg) `),M&&(l+=`skewX(${M}deg) `),R&&(l+=`skewY(${R}deg) `)}const h=n.x.scale*i.x,m=n.y.scale*i.y;return(h!==1||m!==1)&&(l+=`scale(${h}, ${m})`),l||"none"}const Gc=["","X","Y","Z"],UT=1e3;let LT=0;function Xc(n,i,o,l){const{latestValues:u}=i;u[n]&&(o[n]=u[n],i.setStaticValue(n,0),l&&(l[n]=0))}function Ay(n){if(n.hasCheckedOptimisedAppear=!0,n.root===n)return;const{visualElement:i}=n.options;if(!i)return;const o=sy(i);if(window.MotionHasOptimisedAnimation(o,"transform")){const{layout:u,layoutId:d}=n.options;window.MotionCancelOptimisedAnimation(o,"transform",zt,!(u||d))}const{parent:l}=n;l&&!l.hasCheckedOptimisedAppear&&Ay(l)}function Oy({attachResizeListener:n,defaultParent:i,measureScroll:o,checkIsScrollRoot:l,resetTransform:u}){return class{constructor(f={},h=i?.()){this.id=LT++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(qT),this.nodes.forEach(FT),this.nodes.forEach(KT),this.nodes.forEach(YT)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=f,this.root=h?h.root||h:this,this.path=h?[...h.path,h]:[],this.parent=h,this.depth=h?h.depth+1:0;for(let m=0;m<this.path.length;m++)this.path[m].shouldResetTransform=!0;this.root===this&&(this.nodes=new wT)}addEventListener(f,h){return this.eventHandlers.has(f)||this.eventHandlers.set(f,new td),this.eventHandlers.get(f).add(h)}notifyListeners(f,...h){const m=this.eventHandlers.get(f);m&&m.notify(...h)}hasListeners(f){return this.eventHandlers.has(f)}mount(f){if(this.instance)return;this.isSVG=Lb(f)&&!j3(f),this.instance=f;const{layoutId:h,layout:m,visualElement:p}=this.options;if(p&&!p.current&&p.mount(f),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(m||h)&&(this.isLayoutDirty=!0),n){let v,y=0;const x=()=>this.root.updateBlockedByResize=!1;zt.read(()=>{y=window.innerWidth}),n(f,()=>{const M=window.innerWidth;M!==y&&(y=M,this.root.updateBlockedByResize=!0,v&&v(),v=MT(x,250),Bl.hasAnimatedSinceResize&&(Bl.hasAnimatedSinceResize=!1,this.nodes.forEach($g)))})}h&&this.root.registerSharedNode(h,this),this.options.animate!==!1&&p&&(h||m)&&this.addEventListener("didUpdate",({delta:v,hasLayoutChanged:y,hasRelativeLayoutChanged:x,layout:M})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const R=this.options.transition||p.getDefaultTransition()||WT,{onLayoutAnimationStart:E,onLayoutAnimationComplete:j}=p.getProps(),V=!this.targetLayout||!Ty(this.targetLayout,M),q=!y&&x;if(this.options.layoutRoot||this.resumeFrom||q||y&&(V||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const L={...hd(R,"layout"),onPlay:E,onComplete:j};(p.shouldReduceMotion||this.options.layoutRoot)&&(L.delay=0,L.type=!1),this.startAnimation(L),this.setAnimationOrigin(v,q)}else y||$g(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=M})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const f=this.getStack();f&&f.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),sa(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(ZT),this.animationId++)}getTransformTemplate(){const{visualElement:f}=this.options;return f&&f.getProps().transformTemplate}willUpdate(f=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&Ay(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let v=0;v<this.path.length;v++){const y=this.path[v];y.shouldResetTransform=!0,y.updateScroll("snapshot"),y.options.layoutRoot&&y.willUpdate(!1)}const{layoutId:h,layout:m}=this.options;if(h===void 0&&!m)return;const p=this.getTransformTemplate();this.prevTransformTemplateValue=p?p(this.latestValues,""):void 0,this.updateSnapshot(),f&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Zg);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(Qg);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(XT),this.nodes.forEach(BT),this.nodes.forEach(HT)):this.nodes.forEach(Qg),this.clearAllSnapshots();const h=ye.now();ie.delta=Cn(0,1e3/60,h-ie.timestamp),ie.timestamp=h,ie.isProcessing=!0,zc.update.process(ie),zc.preRender.process(ie),zc.render.process(ie),ie.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,pd.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(GT),this.sharedNodes.forEach(QT)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,zt.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){zt.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!he(this.snapshot.measuredBox.x)&&!he(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let m=0;m<this.path.length;m++)this.path[m].updateScroll();const f=this.layout;this.layout=this.measure(!1),this.layoutCorrected=Ht(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:h}=this.options;h&&h.notify("LayoutMeasure",this.layout.layoutBox,f?f.layoutBox:void 0)}updateScroll(f="measure"){let h=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===f&&(h=!1),h&&this.instance){const m=l(this.instance);this.scroll={animationId:this.root.animationId,phase:f,isRoot:m,offset:o(this.instance),wasRoot:this.scroll?this.scroll.isRoot:m}}}resetTransform(){if(!u)return;const f=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,h=this.projectionDelta&&!Sy(this.projectionDelta),m=this.getTransformTemplate(),p=m?m(this.latestValues,""):void 0,v=p!==this.prevTransformTemplateValue;f&&this.instance&&(h||za(this.latestValues)||v)&&(u(this.instance,p),this.shouldResetTransform=!1,this.scheduleRender())}measure(f=!0){const h=this.measurePageBox();let m=this.removeElementScroll(h);return f&&(m=this.removeTransform(m)),IT(m),{animationId:this.root.animationId,measuredBox:h,layoutBox:m,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:f}=this.options;if(!f)return Ht();const h=f.measureViewportBox();if(!(this.scroll?.wasRoot||this.path.some(tA))){const{scroll:p}=this.root;p&&(ki(h.x,p.offset.x),ki(h.y,p.offset.y))}return h}removeElementScroll(f){const h=Ht();if(He(h,f),this.scroll?.wasRoot)return h;for(let m=0;m<this.path.length;m++){const p=this.path[m],{scroll:v,options:y}=p;p!==this.root&&v&&y.layoutScroll&&(v.wasRoot&&He(h,f),ki(h.x,v.offset.x),ki(h.y,v.offset.y))}return h}applyTransform(f,h=!1){const m=Ht();He(m,f);for(let p=0;p<this.path.length;p++){const v=this.path[p];!h&&v.options.layoutScroll&&v.scroll&&v!==v.root&&Ri(m,{x:-v.scroll.offset.x,y:-v.scroll.offset.y}),za(v.latestValues)&&Ri(m,v.latestValues)}return za(this.latestValues)&&Ri(m,this.latestValues),m}removeTransform(f){const h=Ht();He(h,f);for(let m=0;m<this.path.length;m++){const p=this.path[m];if(!p.instance||!za(p.latestValues))continue;xf(p.latestValues)&&p.updateSnapshot();const v=Ht(),y=p.measurePageBox();He(v,y),qg(h,p.latestValues,p.snapshot?p.snapshot.layoutBox:void 0,v)}return za(this.latestValues)&&qg(h,this.latestValues),h}setTargetDelta(f){this.targetDelta=f,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(f){this.options={...this.options,...f,crossfade:f.crossfade!==void 0?f.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==ie.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(f=!1){const h=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=h.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=h.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=h.isSharedProjectionDirty);const m=!!this.resumingFrom||this!==h;if(!(f||m&&this.isSharedProjectionDirty||this.isProjectionDirty||this.parent?.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:v,layoutId:y}=this.options;if(!(!this.layout||!(v||y))){if(this.resolvedRelativeTargetAt=ie.timestamp,!this.targetDelta&&!this.relativeTarget){const x=this.getClosestProjectingParent();x&&x.layout&&this.animationProgress!==1?(this.relativeParent=x,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Ht(),this.relativeTargetOrigin=Ht(),$r(this.relativeTargetOrigin,this.layout.layoutBox,x.layout.layoutBox),He(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=Ht(),this.targetWithTransforms=Ht()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),oT(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):He(this.target,this.layout.layoutBox),ny(this.target,this.targetDelta)):He(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget)){this.attemptToResolveRelativeTarget=!1;const x=this.getClosestProjectingParent();x&&!!x.resumingFrom==!!this.resumingFrom&&!x.options.layoutScroll&&x.target&&this.animationProgress!==1?(this.relativeParent=x,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Ht(),this.relativeTargetOrigin=Ht(),$r(this.relativeTargetOrigin,this.target,x.target),He(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}}}getClosestProjectingParent(){if(!(!this.parent||xf(this.parent.latestValues)||ey(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){const f=this.getLead(),h=!!this.resumingFrom||this!==f;let m=!0;if((this.isProjectionDirty||this.parent?.isProjectionDirty)&&(m=!1),h&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(m=!1),this.resolvedRelativeTargetAt===ie.timestamp&&(m=!1),m)return;const{layout:p,layoutId:v}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(p||v))return;He(this.layoutCorrected,this.layout.layoutBox);const y=this.treeScale.x,x=this.treeScale.y;b4(this.layoutCorrected,this.treeScale,this.path,h),f.layout&&!f.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(f.target=f.layout.layoutBox,f.targetWithTransforms=Ht());const{target:M}=f;if(!M){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(Lg(this.prevProjectionDelta.x,this.projectionDelta.x),Lg(this.prevProjectionDelta.y,this.projectionDelta.y)),Qr(this.projectionDelta,this.layoutCorrected,M,this.latestValues),(this.treeScale.x!==y||this.treeScale.y!==x||!Kg(this.projectionDelta.x,this.prevProjectionDelta.x)||!Kg(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",M))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(f=!0){if(this.options.visualElement?.scheduleRender(),f){const h=this.getStack();h&&h.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=_i(),this.projectionDelta=_i(),this.projectionDeltaWithTransform=_i()}setAnimationOrigin(f,h=!1){const m=this.snapshot,p=m?m.latestValues:{},v={...this.latestValues},y=_i();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!h;const x=Ht(),M=m?m.source:void 0,R=this.layout?this.layout.source:void 0,E=M!==R,j=this.getStack(),V=!j||j.members.length<=1,q=!!(E&&!V&&this.options.crossfade===!0&&!this.path.some(JT));this.animationProgress=0;let L;this.mixTargetDelta=Q=>{const H=Q/1e3;Jg(y.x,f.x,H),Jg(y.y,f.y,H),this.setTargetDelta(y),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&($r(x,this.layout.layoutBox,this.relativeParent.layout.layoutBox),$T(this.relativeTarget,this.relativeTargetOrigin,x,H),L&&NT(this.relativeTarget,L)&&(this.isProjectionDirty=!1),L||(L=Ht()),He(L,this.relativeTarget)),E&&(this.animationValues=v,CT(v,p,this.latestValues,H,q,V)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=H},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(f){this.notifyListeners("animationStart"),this.currentAnimation?.stop(),this.resumingFrom?.currentAnimation?.stop(),this.pendingAnimation&&(sa(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=zt.update(()=>{Bl.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=Pi(0)),this.currentAnimation=OT(this.motionValue,[0,1e3],{...f,velocity:0,isSync:!0,onUpdate:h=>{this.mixTargetDelta(h),f.onUpdate&&f.onUpdate(h)},onStop:()=>{},onComplete:()=>{f.onComplete&&f.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const f=this.getStack();f&&f.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(UT),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const f=this.getLead();let{targetWithTransforms:h,target:m,layout:p,latestValues:v}=f;if(!(!h||!m||!p)){if(this!==f&&this.layout&&p&&Ey(this.options.animationType,this.layout.layoutBox,p.layoutBox)){m=this.target||Ht();const y=he(this.layout.layoutBox.x);m.x.min=f.target.x.min,m.x.max=m.x.min+y;const x=he(this.layout.layoutBox.y);m.y.min=f.target.y.min,m.y.max=m.y.min+x}He(h,m),Ri(h,v),Qr(this.projectionDeltaWithTransform,this.layoutCorrected,h,v)}}registerSharedNode(f,h){this.sharedNodes.has(f)||this.sharedNodes.set(f,new PT),this.sharedNodes.get(f).add(h);const p=h.options.initialPromotionConfig;h.promote({transition:p?p.transition:void 0,preserveFollowOpacity:p&&p.shouldPreserveFollowOpacity?p.shouldPreserveFollowOpacity(h):void 0})}isLead(){const f=this.getStack();return f?f.lead===this:!0}getLead(){const{layoutId:f}=this.options;return f?this.getStack()?.lead||this:this}getPrevLead(){const{layoutId:f}=this.options;return f?this.getStack()?.prevLead:void 0}getStack(){const{layoutId:f}=this.options;if(f)return this.root.sharedNodes.get(f)}promote({needsReset:f,transition:h,preserveFollowOpacity:m}={}){const p=this.getStack();p&&p.promote(this,m),f&&(this.projectionDelta=void 0,this.needsReset=!0),h&&this.setOptions({transition:h})}relegate(){const f=this.getStack();return f?f.relegate(this):!1}resetSkewAndRotation(){const{visualElement:f}=this.options;if(!f)return;let h=!1;const{latestValues:m}=f;if((m.z||m.rotate||m.rotateX||m.rotateY||m.rotateZ||m.skewX||m.skewY)&&(h=!0),!h)return;const p={};m.z&&Xc("z",f,p,this.animationValues);for(let v=0;v<Gc.length;v++)Xc(`rotate${Gc[v]}`,f,p,this.animationValues),Xc(`skew${Gc[v]}`,f,p,this.animationValues);f.render();for(const v in p)f.setStaticValue(v,p[v]),this.animationValues&&(this.animationValues[v]=p[v]);f.scheduleRender()}applyProjectionStyles(f,h){if(!this.instance||this.isSVG)return;if(!this.isVisible){f.visibility="hidden";return}const m=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,f.visibility="",f.opacity="",f.pointerEvents=Ll(h?.pointerEvents)||"",f.transform=m?m(this.latestValues,""):"none";return}const p=this.getLead();if(!this.projectionDelta||!this.layout||!p.target){this.options.layoutId&&(f.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,f.pointerEvents=Ll(h?.pointerEvents)||""),this.hasProjected&&!za(this.latestValues)&&(f.transform=m?m({},""):"none",this.hasProjected=!1);return}f.visibility="";const v=p.animationValues||p.latestValues;this.applyTransformsToTarget();let y=VT(this.projectionDeltaWithTransform,this.treeScale,v);m&&(y=m(v,y)),f.transform=y;const{x,y:M}=this.projectionDelta;f.transformOrigin=`${x.origin*100}% ${M.origin*100}% 0`,p.animationValues?f.opacity=p===this?v.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:v.opacityExit:f.opacity=p===this?v.opacity!==void 0?v.opacity:"":v.opacityExit!==void 0?v.opacityExit:0;for(const R in io){if(v[R]===void 0)continue;const{correct:E,applyTo:j,isCSSVariable:V}=io[R],q=y==="none"?v[R]:E(v[R],p);if(j){const L=j.length;for(let Q=0;Q<L;Q++)f[j[Q]]=q}else V?this.options.visualElement.renderState.vars[R]=q:f[R]=q}this.options.layoutId&&(f.pointerEvents=p===this?Ll(h?.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(f=>f.currentAnimation?.stop()),this.root.nodes.forEach(Zg),this.root.sharedNodes.clear()}}}function BT(n){n.updateLayout()}function HT(n){const i=n.resumeFrom?.snapshot||n.snapshot;if(n.isLead()&&n.layout&&i&&n.hasListeners("didUpdate")){const{layoutBox:o,measuredBox:l}=n.layout,{animationType:u}=n.options,d=i.source!==n.layout.source;u==="size"?qe(v=>{const y=d?i.measuredBox[v]:i.layoutBox[v],x=he(y);y.min=o[v].min,y.max=y.min+x}):Ey(u,i.layoutBox,o)&&qe(v=>{const y=d?i.measuredBox[v]:i.layoutBox[v],x=he(o[v]);y.max=y.min+x,n.relativeTarget&&!n.currentAnimation&&(n.isProjectionDirty=!0,n.relativeTarget[v].max=n.relativeTarget[v].min+x)});const f=_i();Qr(f,o,i.layoutBox);const h=_i();d?Qr(h,n.applyTransform(l,!0),i.measuredBox):Qr(h,o,i.layoutBox);const m=!Sy(f);let p=!1;if(!n.resumeFrom){const v=n.getClosestProjectingParent();if(v&&!v.resumeFrom){const{snapshot:y,layout:x}=v;if(y&&x){const M=Ht();$r(M,i.layoutBox,y.layoutBox);const R=Ht();$r(R,o,x.layoutBox),Ty(M,R)||(p=!0),v.options.layoutRoot&&(n.relativeTarget=R,n.relativeTargetOrigin=M,n.relativeParent=v)}}}n.notifyListeners("didUpdate",{layout:o,snapshot:i,delta:h,layoutDelta:f,hasLayoutChanged:m,hasRelativeLayoutChanged:p})}else if(n.isLead()){const{onExitComplete:o}=n.options;o&&o()}n.options.transition=void 0}function qT(n){n.parent&&(n.isProjecting()||(n.isProjectionDirty=n.parent.isProjectionDirty),n.isSharedProjectionDirty||(n.isSharedProjectionDirty=!!(n.isProjectionDirty||n.parent.isProjectionDirty||n.parent.isSharedProjectionDirty)),n.isTransformDirty||(n.isTransformDirty=n.parent.isTransformDirty))}function YT(n){n.isProjectionDirty=n.isSharedProjectionDirty=n.isTransformDirty=!1}function GT(n){n.clearSnapshot()}function Zg(n){n.clearMeasurements()}function Qg(n){n.isLayoutDirty=!1}function XT(n){const{visualElement:i}=n.options;i&&i.getProps().onBeforeLayoutMeasure&&i.notify("BeforeLayoutMeasure"),n.resetTransform()}function $g(n){n.finishAnimation(),n.targetDelta=n.relativeTarget=n.target=void 0,n.isProjectionDirty=!0}function FT(n){n.resolveTargetDelta()}function KT(n){n.calcProjection()}function ZT(n){n.resetSkewAndRotation()}function QT(n){n.removeLeadSnapshot()}function Jg(n,i,o){n.translate=Nt(i.translate,0,o),n.scale=Nt(i.scale,1,o),n.origin=i.origin,n.originPoint=i.originPoint}function Wg(n,i,o,l){n.min=Nt(i.min,o.min,l),n.max=Nt(i.max,o.max,l)}function $T(n,i,o,l){Wg(n.x,i.x,o.x,l),Wg(n.y,i.y,o.y,l)}function JT(n){return n.animationValues&&n.animationValues.opacityExit!==void 0}const WT={duration:.45,ease:[.4,0,.1,1]},Ig=n=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(n),tv=Ig("applewebkit/")&&!Ig("chrome/")?Math.round:Ye;function ev(n){n.min=tv(n.min),n.max=tv(n.max)}function IT(n){ev(n.x),ev(n.y)}function Ey(n,i,o){return n==="position"||n==="preserve-aspect"&&!rT(Fg(i),Fg(o),.2)}function tA(n){return n!==n.root&&n.scroll?.wasRoot}const eA=Oy({attachResizeListener:(n,i)=>ro(n,"resize",i),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Fc={current:void 0},wy=Oy({measureScroll:n=>({x:n.scrollLeft,y:n.scrollTop}),defaultParent:()=>{if(!Fc.current){const n=new eA({});n.mount(window),n.setOptions({layoutScroll:!0}),Fc.current=n}return Fc.current},resetTransform:(n,i)=>{n.style.transform=i!==void 0?i:"none"},checkIsScrollRoot:n=>window.getComputedStyle(n).position==="fixed"}),nA={pan:{Feature:xT},drag:{Feature:yT,ProjectionNode:wy,MeasureLayout:by}};function nv(n,i,o){const{props:l}=n;n.animationState&&l.whileHover&&n.animationState.setActive("whileHover",o==="Start");const u="onHover"+o,d=l[u];d&&zt.postRender(()=>d(i,co(i)))}class aA extends ha{mount(){const{current:i}=this.node;i&&(this.unmount=C3(i,(o,l)=>(nv(this.node,l,"Start"),u=>nv(this.node,u,"End"))))}unmount(){}}class iA extends ha{constructor(){super(...arguments),this.isActive=!1}onFocus(){let i=!1;try{i=this.node.current.matches(":focus-visible")}catch{i=!0}!i||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=lo(ro(this.node.current,"focus",()=>this.onFocus()),ro(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function av(n,i,o){const{props:l}=n;if(n.current instanceof HTMLButtonElement&&n.current.disabled)return;n.animationState&&l.whileTap&&n.animationState.setActive("whileTap",o==="Start");const u="onTap"+(o==="End"?"":o),d=l[u];d&&zt.postRender(()=>d(i,co(i)))}class rA extends ha{mount(){const{current:i}=this.node;i&&(this.unmount=z3(i,(o,l)=>(av(this.node,l,"Start"),(u,{success:d})=>av(this.node,u,d?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const Mf=new WeakMap,Kc=new WeakMap,oA=n=>{const i=Mf.get(n.target);i&&i(n)},lA=n=>{n.forEach(oA)};function sA({root:n,...i}){const o=n||document;Kc.has(o)||Kc.set(o,{});const l=Kc.get(o),u=JSON.stringify(i);return l[u]||(l[u]=new IntersectionObserver(lA,{root:n,...i})),l[u]}function uA(n,i,o){const l=sA(i);return Mf.set(n,o),l.observe(n),()=>{Mf.delete(n),l.unobserve(n)}}const cA={some:0,all:1};class fA extends ha{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:i={}}=this.node.getProps(),{root:o,margin:l,amount:u="some",once:d}=i,f={root:o?o.current:void 0,rootMargin:l,threshold:typeof u=="number"?u:cA[u]},h=m=>{const{isIntersecting:p}=m;if(this.isInView===p||(this.isInView=p,d&&!p&&this.hasEnteredView))return;p&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",p);const{onViewportEnter:v,onViewportLeave:y}=this.node.getProps(),x=p?v:y;x&&x(m)};return uA(this.node.current,f,h)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:i,prevProps:o}=this.node;["amount","margin","root"].some(dA(i,o))&&this.startObserver()}unmount(){}}function dA({viewport:n={}},{viewport:i={}}={}){return o=>n[o]!==i[o]}const hA={inView:{Feature:fA},tap:{Feature:rA},focus:{Feature:iA},hover:{Feature:aA}},mA={layout:{ProjectionNode:wy,MeasureLayout:by}},pA={...I4,...hA,...nA,...mA},gA=p4(pA,D4);function vA(n){return U.jsx(gA.div,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.5},style:{textAlign:"center",padding:"2rem 0"},children:n.things})}function bA(){return U.jsxs("div",{className:"first-page",children:[U.jsxs("div",{className:"top-logos",children:[U.jsx("a",{href:"https://github.com/yacine-bek",target:"_blank",children:U.jsx(Qv,{size:36})}),U.jsx("a",{href:"https://discord.gg/6C8e3HBVJt",target:"_blank",children:U.jsx(Zv,{size:36})})]}),U.jsx(vA,{things:U.jsxs("div",{className:"content",children:[U.jsx("h1",{children:"Hi 👋, I'm Yacine"}),U.jsx("h3",{children:"Computer Science Student and Open-Source Developer"})]})}),U.jsx("div",{className:"triangle-section"}),U.jsx("a",{href:"#secound-page",children:U.jsx("div",{className:"bottom-arrow-div",children:U.jsx(V5,{className:"bottom-arrow",size:32})})})]})}/*!
 * Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2025 Fonticons, Inc.
 */function Df(n,i){(i==null||i>n.length)&&(i=n.length);for(var o=0,l=Array(i);o<i;o++)l[o]=n[o];return l}function yA(n){if(Array.isArray(n))return n}function xA(n){if(Array.isArray(n))return Df(n)}function SA(n,i){if(!(n instanceof i))throw new TypeError("Cannot call a class as a function")}function TA(n,i){for(var o=0;o<i.length;o++){var l=i[o];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(n,My(l.key),l)}}function AA(n,i,o){return i&&TA(n.prototype,i),Object.defineProperty(n,"prototype",{writable:!1}),n}function Hl(n,i){var o=typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(!o){if(Array.isArray(n)||(o=wd(n))||i){o&&(n=o);var l=0,u=function(){};return{s:u,n:function(){return l>=n.length?{done:!0}:{done:!1,value:n[l++]}},e:function(m){throw m},f:u}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var d,f=!0,h=!1;return{s:function(){o=o.call(n)},n:function(){var m=o.next();return f=m.done,m},e:function(m){h=!0,d=m},f:function(){try{f||o.return==null||o.return()}finally{if(h)throw d}}}}function vt(n,i,o){return(i=My(i))in n?Object.defineProperty(n,i,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[i]=o,n}function OA(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function EA(n,i){var o=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(o!=null){var l,u,d,f,h=[],m=!0,p=!1;try{if(d=(o=o.call(n)).next,i===0){if(Object(o)!==o)return;m=!1}else for(;!(m=(l=d.call(o)).done)&&(h.push(l.value),h.length!==i);m=!0);}catch(v){p=!0,u=v}finally{try{if(!m&&o.return!=null&&(f=o.return(),Object(f)!==f))return}finally{if(p)throw u}}return h}}function wA(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function MA(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function iv(n,i){var o=Object.keys(n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);i&&(l=l.filter(function(u){return Object.getOwnPropertyDescriptor(n,u).enumerable})),o.push.apply(o,l)}return o}function Y(n){for(var i=1;i<arguments.length;i++){var o=arguments[i]!=null?arguments[i]:{};i%2?iv(Object(o),!0).forEach(function(l){vt(n,l,o[l])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(o)):iv(Object(o)).forEach(function(l){Object.defineProperty(n,l,Object.getOwnPropertyDescriptor(o,l))})}return n}function os(n,i){return yA(n)||EA(n,i)||wd(n,i)||wA()}function Je(n){return xA(n)||OA(n)||wd(n)||MA()}function DA(n,i){if(typeof n!="object"||!n)return n;var o=n[Symbol.toPrimitive];if(o!==void 0){var l=o.call(n,i);if(typeof l!="object")return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return(i==="string"?String:Number)(n)}function My(n){var i=DA(n,"string");return typeof i=="symbol"?i:i+""}function Wl(n){"@babel/helpers - typeof";return Wl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},Wl(n)}function wd(n,i){if(n){if(typeof n=="string")return Df(n,i);var o={}.toString.call(n).slice(8,-1);return o==="Object"&&n.constructor&&(o=n.constructor.name),o==="Map"||o==="Set"?Array.from(n):o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?Df(n,i):void 0}}var rv=function(){},Md={},Dy={},Cy=null,ky={mark:rv,measure:rv};try{typeof window<"u"&&(Md=window),typeof document<"u"&&(Dy=document),typeof MutationObserver<"u"&&(Cy=MutationObserver),typeof performance<"u"&&(ky=performance)}catch{}var CA=Md.navigator||{},ov=CA.userAgent,lv=ov===void 0?"":ov,ca=Md,Ct=Dy,sv=Cy,Nl=ky;ca.document;var zn=!!Ct.documentElement&&!!Ct.head&&typeof Ct.addEventListener=="function"&&typeof Ct.createElement=="function",Ry=~lv.indexOf("MSIE")||~lv.indexOf("Trident/"),Zc,kA=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|jr|jfr|jdr|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,RA=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Slab Press|Slab|Whiteboard)?.*/i,_y={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"},slab:{"fa-regular":"regular",faslr:"regular"},"slab-press":{"fa-regular":"regular",faslpr:"regular"},thumbprint:{"fa-light":"light",fatl:"light"},whiteboard:{"fa-semibold":"semibold",fawsb:"semibold"},notdog:{"fa-solid":"solid",fans:"solid"},"notdog-duo":{"fa-solid":"solid",fands:"solid"},etch:{"fa-solid":"solid",faes:"solid"},jelly:{"fa-regular":"regular",fajr:"regular"},"jelly-fill":{"fa-regular":"regular",fajfr:"regular"},"jelly-duo":{"fa-regular":"regular",fajdr:"regular"},chisel:{"fa-regular":"regular",facr:"regular"}},_A={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},zy=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press"],ce="classic",fo="duotone",jy="sharp",Ny="sharp-duotone",Py="chisel",Vy="etch",Uy="jelly",Ly="jelly-duo",By="jelly-fill",Hy="notdog",qy="notdog-duo",Yy="slab",Gy="slab-press",Xy="thumbprint",Fy="whiteboard",zA="Classic",jA="Duotone",NA="Sharp",PA="Sharp Duotone",VA="Chisel",UA="Etch",LA="Jelly",BA="Jelly Duo",HA="Jelly Fill",qA="Notdog",YA="Notdog Duo",GA="Slab",XA="Slab Press",FA="Thumbprint",KA="Whiteboard",Ky=[ce,fo,jy,Ny,Py,Vy,Uy,Ly,By,Hy,qy,Yy,Gy,Xy,Fy];Zc={},vt(vt(vt(vt(vt(vt(vt(vt(vt(vt(Zc,ce,zA),fo,jA),jy,NA),Ny,PA),Py,VA),Vy,UA),Uy,LA),Ly,BA),By,HA),Hy,qA),vt(vt(vt(vt(vt(Zc,qy,YA),Yy,GA),Gy,XA),Xy,FA),Fy,KA);var ZA={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"},slab:{400:"faslr"},"slab-press":{400:"faslpr"},whiteboard:{600:"fawsb"},thumbprint:{300:"fatl"},notdog:{900:"fans"},"notdog-duo":{900:"fands"},etch:{900:"faes"},chisel:{400:"facr"},jelly:{400:"fajr"},"jelly-fill":{400:"fajfr"},"jelly-duo":{400:"fajdr"}},QA={"Font Awesome 7 Free":{900:"fas",400:"far"},"Font Awesome 7 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 7 Brands":{400:"fab",normal:"fab"},"Font Awesome 7 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 7 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 7 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"},"Font Awesome 7 Jelly":{400:"fajr",normal:"fajr"},"Font Awesome 7 Jelly Fill":{400:"fajfr",normal:"fajfr"},"Font Awesome 7 Jelly Duo":{400:"fajdr",normal:"fajdr"},"Font Awesome 7 Slab":{400:"faslr",normal:"faslr"},"Font Awesome 7 Slab Press":{400:"faslpr",normal:"faslpr"},"Font Awesome 7 Thumbprint":{300:"fatl",normal:"fatl"},"Font Awesome 7 Notdog":{900:"fans",normal:"fans"},"Font Awesome 7 Notdog Duo":{900:"fands",normal:"fands"},"Font Awesome 7 Etch":{900:"faes",normal:"faes"},"Font Awesome 7 Chisel":{400:"facr",normal:"facr"},"Font Awesome 7 Whiteboard":{600:"fawsb",normal:"fawsb"}},$A=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["chisel",{defaultShortPrefixId:"facr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["etch",{defaultShortPrefixId:"faes",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["jelly",{defaultShortPrefixId:"fajr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-duo",{defaultShortPrefixId:"fajdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-fill",{defaultShortPrefixId:"fajfr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["notdog",{defaultShortPrefixId:"fans",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog-duo",{defaultShortPrefixId:"fands",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["slab",{defaultShortPrefixId:"faslr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press",{defaultShortPrefixId:"faslpr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["thumbprint",{defaultShortPrefixId:"fatl",defaultStyleId:"light",styleIds:["light"],futureStyleIds:[],defaultFontWeight:300}],["whiteboard",{defaultShortPrefixId:"fawsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}]]),JA={chisel:{regular:"facr"},classic:{brands:"fab",light:"fal",regular:"far",solid:"fas",thin:"fat"},duotone:{light:"fadl",regular:"fadr",solid:"fad",thin:"fadt"},etch:{solid:"faes"},jelly:{regular:"fajr"},"jelly-duo":{regular:"fajdr"},"jelly-fill":{regular:"fajfr"},notdog:{solid:"fans"},"notdog-duo":{solid:"fands"},sharp:{light:"fasl",regular:"fasr",solid:"fass",thin:"fast"},"sharp-duotone":{light:"fasdl",regular:"fasdr",solid:"fasds",thin:"fasdt"},slab:{regular:"faslr"},"slab-press":{regular:"faslpr"},thumbprint:{light:"fatl"},whiteboard:{semibold:"fawsb"}},Zy=["fak","fa-kit","fakd","fa-kit-duotone"],uv={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},WA=["kit"],IA="kit",t6="kit-duotone",e6="Kit",n6="Kit Duotone";vt(vt({},IA,e6),t6,n6);var a6={kit:{"fa-kit":"fak"}},i6={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},r6={kit:{fak:"fa-kit"}},cv={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},Qc,Pl={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},o6=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press"],l6="classic",s6="duotone",u6="sharp",c6="sharp-duotone",f6="chisel",d6="etch",h6="jelly",m6="jelly-duo",p6="jelly-fill",g6="notdog",v6="notdog-duo",b6="slab",y6="slab-press",x6="thumbprint",S6="whiteboard",T6="Classic",A6="Duotone",O6="Sharp",E6="Sharp Duotone",w6="Chisel",M6="Etch",D6="Jelly",C6="Jelly Duo",k6="Jelly Fill",R6="Notdog",_6="Notdog Duo",z6="Slab",j6="Slab Press",N6="Thumbprint",P6="Whiteboard";Qc={},vt(vt(vt(vt(vt(vt(vt(vt(vt(vt(Qc,l6,T6),s6,A6),u6,O6),c6,E6),f6,w6),d6,M6),h6,D6),m6,C6),p6,k6),g6,R6),vt(vt(vt(vt(vt(Qc,v6,_6),b6,z6),y6,j6),x6,N6),S6,P6);var V6="kit",U6="kit-duotone",L6="Kit",B6="Kit Duotone";vt(vt({},V6,L6),U6,B6);var H6={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"},slab:{"fa-regular":"faslr"},"slab-press":{"fa-regular":"faslpr"},whiteboard:{"fa-semibold":"fawsb"},thumbprint:{"fa-light":"fatl"},notdog:{"fa-solid":"fans"},"notdog-duo":{"fa-solid":"fands"},etch:{"fa-solid":"faes"},jelly:{"fa-regular":"fajr"},"jelly-fill":{"fa-regular":"fajfr"},"jelly-duo":{"fa-regular":"fajdr"},chisel:{"fa-regular":"facr"}},q6={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"],slab:["faslr"],"slab-press":["faslpr"],whiteboard:["fawsb"],thumbprint:["fatl"],notdog:["fans"],"notdog-duo":["fands"],etch:["faes"],jelly:["fajr"],"jelly-fill":["fajfr"],"jelly-duo":["fajdr"],chisel:["facr"]},Cf={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"},slab:{faslr:"fa-regular"},"slab-press":{faslpr:"fa-regular"},whiteboard:{fawsb:"fa-semibold"},thumbprint:{fatl:"fa-light"},notdog:{fans:"fa-solid"},"notdog-duo":{fands:"fa-solid"},etch:{faes:"fa-solid"},jelly:{fajr:"fa-regular"},"jelly-fill":{fajfr:"fa-regular"},"jelly-duo":{fajdr:"fa-regular"},chisel:{facr:"fa-regular"}},Y6=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands","fa-semibold"],Qy=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt","faslr","faslpr","fawsb","fatl","fans","fands","faes","fajr","fajfr","fajdr","facr"].concat(o6,Y6),G6=["solid","regular","light","thin","duotone","brands","semibold"],$y=[1,2,3,4,5,6,7,8,9,10],X6=$y.concat([11,12,13,14,15,16,17,18,19,20]),F6=["aw","fw","pull-left","pull-right"],K6=[].concat(Je(Object.keys(q6)),G6,F6,["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","inverse","layers","layers-bottom-left","layers-bottom-right","layers-counter","layers-text","layers-top-left","layers-top-right","li","pull-end","pull-start","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul","width-auto","width-fixed",Pl.GROUP,Pl.SWAP_OPACITY,Pl.PRIMARY,Pl.SECONDARY]).concat($y.map(function(n){return"".concat(n,"x")})).concat(X6.map(function(n){return"w-".concat(n)})),Z6={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},Rn="___FONT_AWESOME___",kf=16,Jy="fa",Wy="svg-inline--fa",La="data-fa-i2svg",Rf="data-fa-pseudo-element",Q6="data-fa-pseudo-element-pending",Dd="data-prefix",Cd="data-icon",fv="fontawesome-i2svg",$6="async",J6=["HTML","HEAD","STYLE","SCRIPT"],Iy=["::before","::after",":before",":after"],t1=function(){try{return!0}catch{return!1}}();function ho(n){return new Proxy(n,{get:function(o,l){return l in o?o[l]:o[ce]}})}var e1=Y({},_y);e1[ce]=Y(Y(Y(Y({},{"fa-duotone":"duotone"}),_y[ce]),uv.kit),uv["kit-duotone"]);var W6=ho(e1),_f=Y({},JA);_f[ce]=Y(Y(Y(Y({},{duotone:"fad"}),_f[ce]),cv.kit),cv["kit-duotone"]);var dv=ho(_f),zf=Y({},Cf);zf[ce]=Y(Y({},zf[ce]),r6.kit);var n1=ho(zf),jf=Y({},H6);jf[ce]=Y(Y({},jf[ce]),a6.kit);ho(jf);var I6=kA,a1="fa-layers-text",tO=RA,eO=Y({},ZA);ho(eO);var nO=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],$c=_A,aO=[].concat(Je(WA),Je(K6)),Jr=ca.FontAwesomeConfig||{};function iO(n){var i=Ct.querySelector("script["+n+"]");if(i)return i.getAttribute(n)}function rO(n){return n===""?!0:n==="false"?!1:n==="true"?!0:n}if(Ct&&typeof Ct.querySelector=="function"){var oO=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-search-pseudo-elements","searchPseudoElements"],["data-search-pseudo-elements-warnings","searchPseudoElementsWarnings"],["data-search-pseudo-elements-full-scan","searchPseudoElementsFullScan"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];oO.forEach(function(n){var i=os(n,2),o=i[0],l=i[1],u=rO(iO(o));u!=null&&(Jr[l]=u)})}var i1={styleDefault:"solid",familyDefault:ce,cssPrefix:Jy,replacementClass:Wy,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Jr.familyPrefix&&(Jr.cssPrefix=Jr.familyPrefix);var Ui=Y(Y({},i1),Jr);Ui.autoReplaceSvg||(Ui.observeMutations=!1);var tt={};Object.keys(i1).forEach(function(n){Object.defineProperty(tt,n,{enumerable:!0,set:function(o){Ui[n]=o,Wr.forEach(function(l){return l(tt)})},get:function(){return Ui[n]}})});Object.defineProperty(tt,"familyPrefix",{enumerable:!0,set:function(i){Ui.cssPrefix=i,Wr.forEach(function(o){return o(tt)})},get:function(){return Ui.cssPrefix}});ca.FontAwesomeConfig=tt;var Wr=[];function lO(n){return Wr.push(n),function(){Wr.splice(Wr.indexOf(n),1)}}var Mi=kf,sn={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function sO(n){if(!(!n||!zn)){var i=Ct.createElement("style");i.setAttribute("type","text/css"),i.innerHTML=n;for(var o=Ct.head.childNodes,l=null,u=o.length-1;u>-1;u--){var d=o[u],f=(d.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(f)>-1&&(l=d)}return Ct.head.insertBefore(i,l),n}}var uO="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function hv(){for(var n=12,i="";n-- >0;)i+=uO[Math.random()*62|0];return i}function qi(n){for(var i=[],o=(n||[]).length>>>0;o--;)i[o]=n[o];return i}function kd(n){return n.classList?qi(n.classList):(n.getAttribute("class")||"").split(" ").filter(function(i){return i})}function r1(n){return"".concat(n).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function cO(n){return Object.keys(n||{}).reduce(function(i,o){return i+"".concat(o,'="').concat(r1(n[o]),'" ')},"").trim()}function ls(n){return Object.keys(n||{}).reduce(function(i,o){return i+"".concat(o,": ").concat(n[o].trim(),";")},"")}function Rd(n){return n.size!==sn.size||n.x!==sn.x||n.y!==sn.y||n.rotate!==sn.rotate||n.flipX||n.flipY}function fO(n){var i=n.transform,o=n.containerWidth,l=n.iconWidth,u={transform:"translate(".concat(o/2," 256)")},d="translate(".concat(i.x*32,", ").concat(i.y*32,") "),f="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),h="rotate(".concat(i.rotate," 0 0)"),m={transform:"".concat(d," ").concat(f," ").concat(h)},p={transform:"translate(".concat(l/2*-1," -256)")};return{outer:u,inner:m,path:p}}function dO(n){var i=n.transform,o=n.width,l=o===void 0?kf:o,u=n.height,d=u===void 0?kf:u,f="";return Ry?f+="translate(".concat(i.x/Mi-l/2,"em, ").concat(i.y/Mi-d/2,"em) "):f+="translate(calc(-50% + ".concat(i.x/Mi,"em), calc(-50% + ").concat(i.y/Mi,"em)) "),f+="scale(".concat(i.size/Mi*(i.flipX?-1:1),", ").concat(i.size/Mi*(i.flipY?-1:1),") "),f+="rotate(".concat(i.rotate,"deg) "),f}var hO=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 7 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 7 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 7 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 7 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 7 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 7 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-slab-regular: normal 400 1em/1 "Font Awesome 7 Slab";
  --fa-font-slab-press-regular: normal 400 1em/1 "Font Awesome 7 Slab Press";
  --fa-font-whiteboard-semibold: normal 600 1em/1 "Font Awesome 7 Whiteboard";
  --fa-font-thumbprint-light: normal 300 1em/1 "Font Awesome 7 Thumbprint";
  --fa-font-notdog-solid: normal 900 1em/1 "Font Awesome 7 Notdog";
  --fa-font-notdog-duo-solid: normal 900 1em/1 "Font Awesome 7 Notdog Duo";
  --fa-font-etch-solid: normal 900 1em/1 "Font Awesome 7 Etch";
  --fa-font-jelly-regular: normal 400 1em/1 "Font Awesome 7 Jelly";
  --fa-font-jelly-fill-regular: normal 400 1em/1 "Font Awesome 7 Jelly Fill";
  --fa-font-jelly-duo-regular: normal 400 1em/1 "Font Awesome 7 Jelly Duo";
  --fa-font-chisel-regular: normal 400 1em/1 "Font Awesome 7 Chisel";
}

.svg-inline--fa {
  box-sizing: content-box;
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285714em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left,
.svg-inline--fa .fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-pull-right,
.svg-inline--fa .fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.fa-layers .svg-inline--fa {
  inset: 0;
  margin: auto;
  position: absolute;
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xs {
  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-sm {
  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-lg {
  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xl {
  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-2xl {
  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-width-auto {
  --fa-width: auto;
}

.fa-fw,
.fa-width-fixed {
  --fa-width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-inline-start: var(--fa-li-margin, 2.5em);
  padding-inline-start: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

/* Heads Up: Bordered Icons will not be supported in the future!
  - This feature will be deprecated in the next major release of Font Awesome (v8)!
  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.
*/
/* Notes:
* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)
* --@{v.$css-prefix}-border-padding =
  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)
  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)
*/
.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.0625em);
  box-sizing: var(--fa-border-box-sizing, content-box);
  padding: var(--fa-border-padding, 0.1875em 0.25em);
}

.fa-pull-left,
.fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right,
.fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
  .fa-bounce,
  .fa-fade,
  .fa-beat-fade,
  .fa-flip,
  .fa-pulse,
  .fa-shake,
  .fa-spin,
  .fa-spin-pulse {
    animation: none !important;
    transition: none !important;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.svg-inline--fa.fa-inverse {
  fill: var(--fa-inverse, #fff);
}

.fa-stack {
  display: inline-block;
  height: 2em;
  line-height: 2em;
  position: relative;
  vertical-align: middle;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}`;function o1(){var n=Jy,i=Wy,o=tt.cssPrefix,l=tt.replacementClass,u=hO;if(o!==n||l!==i){var d=new RegExp("\\.".concat(n,"\\-"),"g"),f=new RegExp("\\--".concat(n,"\\-"),"g"),h=new RegExp("\\.".concat(i),"g");u=u.replace(d,".".concat(o,"-")).replace(f,"--".concat(o,"-")).replace(h,".".concat(l))}return u}var mv=!1;function Jc(){tt.autoAddCss&&!mv&&(sO(o1()),mv=!0)}var mO={mixout:function(){return{dom:{css:o1,insertCss:Jc}}},hooks:function(){return{beforeDOMElementCreation:function(){Jc()},beforeI2svg:function(){Jc()}}}},_n=ca||{};_n[Rn]||(_n[Rn]={});_n[Rn].styles||(_n[Rn].styles={});_n[Rn].hooks||(_n[Rn].hooks={});_n[Rn].shims||(_n[Rn].shims=[]);var $e=_n[Rn],l1=[],s1=function(){Ct.removeEventListener("DOMContentLoaded",s1),Il=1,l1.map(function(i){return i()})},Il=!1;zn&&(Il=(Ct.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Ct.readyState),Il||Ct.addEventListener("DOMContentLoaded",s1));function pO(n){zn&&(Il?setTimeout(n,0):l1.push(n))}function mo(n){var i=n.tag,o=n.attributes,l=o===void 0?{}:o,u=n.children,d=u===void 0?[]:u;return typeof n=="string"?r1(n):"<".concat(i," ").concat(cO(l),">").concat(d.map(mo).join(""),"</").concat(i,">")}function pv(n,i,o){if(n&&n[i]&&n[i][o])return{prefix:i,iconName:o,icon:n[i][o]}}var Wc=function(i,o,l,u){var d=Object.keys(i),f=d.length,h=o,m,p,v;for(l===void 0?(m=1,v=i[d[0]]):(m=0,v=l);m<f;m++)p=d[m],v=h(v,i[p],p,i);return v};function u1(n){return Je(n).length!==1?null:n.codePointAt(0).toString(16)}function gv(n){return Object.keys(n).reduce(function(i,o){var l=n[o],u=!!l.icon;return u?i[l.iconName]=l.icon:i[o]=l,i},{})}function c1(n,i){var o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},l=o.skipHooks,u=l===void 0?!1:l,d=gv(i);typeof $e.hooks.addPack=="function"&&!u?$e.hooks.addPack(n,gv(i)):$e.styles[n]=Y(Y({},$e.styles[n]||{}),d),n==="fas"&&c1("fa",i)}var oo=$e.styles,gO=$e.shims,f1=Object.keys(n1),vO=f1.reduce(function(n,i){return n[i]=Object.keys(n1[i]),n},{}),_d=null,d1={},h1={},m1={},p1={},g1={};function bO(n){return~aO.indexOf(n)}function yO(n,i){var o=i.split("-"),l=o[0],u=o.slice(1).join("-");return l===n&&u!==""&&!bO(u)?u:null}var v1=function(){var i=function(d){return Wc(oo,function(f,h,m){return f[m]=Wc(h,d,{}),f},{})};d1=i(function(u,d,f){if(d[3]&&(u[d[3]]=f),d[2]){var h=d[2].filter(function(m){return typeof m=="number"});h.forEach(function(m){u[m.toString(16)]=f})}return u}),h1=i(function(u,d,f){if(u[f]=f,d[2]){var h=d[2].filter(function(m){return typeof m=="string"});h.forEach(function(m){u[m]=f})}return u}),g1=i(function(u,d,f){var h=d[2];return u[f]=f,h.forEach(function(m){u[m]=f}),u});var o="far"in oo||tt.autoFetchSvg,l=Wc(gO,function(u,d){var f=d[0],h=d[1],m=d[2];return h==="far"&&!o&&(h="fas"),typeof f=="string"&&(u.names[f]={prefix:h,iconName:m}),typeof f=="number"&&(u.unicodes[f.toString(16)]={prefix:h,iconName:m}),u},{names:{},unicodes:{}});m1=l.names,p1=l.unicodes,_d=ss(tt.styleDefault,{family:tt.familyDefault})};lO(function(n){_d=ss(n.styleDefault,{family:tt.familyDefault})});v1();function zd(n,i){return(d1[n]||{})[i]}function xO(n,i){return(h1[n]||{})[i]}function Pa(n,i){return(g1[n]||{})[i]}function b1(n){return m1[n]||{prefix:null,iconName:null}}function SO(n){var i=p1[n],o=zd("fas",n);return i||(o?{prefix:"fas",iconName:o}:null)||{prefix:null,iconName:null}}function fa(){return _d}var y1=function(){return{prefix:null,iconName:null,rest:[]}};function TO(n){var i=ce,o=f1.reduce(function(l,u){return l[u]="".concat(tt.cssPrefix,"-").concat(u),l},{});return Ky.forEach(function(l){(n.includes(o[l])||n.some(function(u){return vO[l].includes(u)}))&&(i=l)}),i}function ss(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=i.family,l=o===void 0?ce:o,u=W6[l][n];if(l===fo&&!n)return"fad";var d=dv[l][n]||dv[l][u],f=n in $e.styles?n:null,h=d||f||null;return h}function AO(n){var i=[],o=null;return n.forEach(function(l){var u=yO(tt.cssPrefix,l);u?o=u:l&&i.push(l)}),{iconName:o,rest:i}}function vv(n){return n.sort().filter(function(i,o,l){return l.indexOf(i)===o})}var bv=Qy.concat(Zy);function us(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=i.skipLookups,l=o===void 0?!1:o,u=null,d=vv(n.filter(function(M){return bv.includes(M)})),f=vv(n.filter(function(M){return!bv.includes(M)})),h=d.filter(function(M){return u=M,!zy.includes(M)}),m=os(h,1),p=m[0],v=p===void 0?null:p,y=TO(d),x=Y(Y({},AO(f)),{},{prefix:ss(v,{family:y})});return Y(Y(Y({},x),MO({values:n,family:y,styles:oo,config:tt,canonical:x,givenPrefix:u})),OO(l,u,x))}function OO(n,i,o){var l=o.prefix,u=o.iconName;if(n||!l||!u)return{prefix:l,iconName:u};var d=i==="fa"?b1(u):{},f=Pa(l,u);return u=d.iconName||f||u,l=d.prefix||l,l==="far"&&!oo.far&&oo.fas&&!tt.autoFetchSvg&&(l="fas"),{prefix:l,iconName:u}}var EO=Ky.filter(function(n){return n!==ce||n!==fo}),wO=Object.keys(Cf).filter(function(n){return n!==ce}).map(function(n){return Object.keys(Cf[n])}).flat();function MO(n){var i=n.values,o=n.family,l=n.canonical,u=n.givenPrefix,d=u===void 0?"":u,f=n.styles,h=f===void 0?{}:f,m=n.config,p=m===void 0?{}:m,v=o===fo,y=i.includes("fa-duotone")||i.includes("fad"),x=p.familyDefault==="duotone",M=l.prefix==="fad"||l.prefix==="fa-duotone";if(!v&&(y||x||M)&&(l.prefix="fad"),(i.includes("fa-brands")||i.includes("fab"))&&(l.prefix="fab"),!l.prefix&&EO.includes(o)){var R=Object.keys(h).find(function(j){return wO.includes(j)});if(R||p.autoFetchSvg){var E=$A.get(o).defaultShortPrefixId;l.prefix=E,l.iconName=Pa(l.prefix,l.iconName)||l.iconName}}return(l.prefix==="fa"||d==="fa")&&(l.prefix=fa()||"fas"),l}var DO=function(){function n(){SA(this,n),this.definitions={}}return AA(n,[{key:"add",value:function(){for(var o=this,l=arguments.length,u=new Array(l),d=0;d<l;d++)u[d]=arguments[d];var f=u.reduce(this._pullDefinitions,{});Object.keys(f).forEach(function(h){o.definitions[h]=Y(Y({},o.definitions[h]||{}),f[h]),c1(h,f[h]),v1()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(o,l){var u=l.prefix&&l.iconName&&l.icon?{0:l}:l;return Object.keys(u).map(function(d){var f=u[d],h=f.prefix,m=f.iconName,p=f.icon,v=p[2];o[h]||(o[h]={}),v.length>0&&v.forEach(function(y){typeof y=="string"&&(o[h][y]=p)}),o[h][m]=p}),o}}])}(),yv=[],zi={},Ni={},CO=Object.keys(Ni);function kO(n,i){var o=i.mixoutsTo;return yv=n,zi={},Object.keys(Ni).forEach(function(l){CO.indexOf(l)===-1&&delete Ni[l]}),yv.forEach(function(l){var u=l.mixout?l.mixout():{};if(Object.keys(u).forEach(function(f){typeof u[f]=="function"&&(o[f]=u[f]),Wl(u[f])==="object"&&Object.keys(u[f]).forEach(function(h){o[f]||(o[f]={}),o[f][h]=u[f][h]})}),l.hooks){var d=l.hooks();Object.keys(d).forEach(function(f){zi[f]||(zi[f]=[]),zi[f].push(d[f])})}l.provides&&l.provides(Ni)}),o}function Nf(n,i){for(var o=arguments.length,l=new Array(o>2?o-2:0),u=2;u<o;u++)l[u-2]=arguments[u];var d=zi[n]||[];return d.forEach(function(f){i=f.apply(null,[i].concat(l))}),i}function Ba(n){for(var i=arguments.length,o=new Array(i>1?i-1:0),l=1;l<i;l++)o[l-1]=arguments[l];var u=zi[n]||[];u.forEach(function(d){d.apply(null,o)})}function da(){var n=arguments[0],i=Array.prototype.slice.call(arguments,1);return Ni[n]?Ni[n].apply(null,i):void 0}function Pf(n){n.prefix==="fa"&&(n.prefix="fas");var i=n.iconName,o=n.prefix||fa();if(i)return i=Pa(o,i)||i,pv(x1.definitions,o,i)||pv($e.styles,o,i)}var x1=new DO,RO=function(){tt.autoReplaceSvg=!1,tt.observeMutations=!1,Ba("noAuto")},_O={i2svg:function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return zn?(Ba("beforeI2svg",i),da("pseudoElements2svg",i),da("i2svg",i)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},o=i.autoReplaceSvgRoot;tt.autoReplaceSvg===!1&&(tt.autoReplaceSvg=!0),tt.observeMutations=!0,pO(function(){jO({autoReplaceSvgRoot:o}),Ba("watch",i)})}},zO={icon:function(i){if(i===null)return null;if(Wl(i)==="object"&&i.prefix&&i.iconName)return{prefix:i.prefix,iconName:Pa(i.prefix,i.iconName)||i.iconName};if(Array.isArray(i)&&i.length===2){var o=i[1].indexOf("fa-")===0?i[1].slice(3):i[1],l=ss(i[0]);return{prefix:l,iconName:Pa(l,o)||o}}if(typeof i=="string"&&(i.indexOf("".concat(tt.cssPrefix,"-"))>-1||i.match(I6))){var u=us(i.split(" "),{skipLookups:!0});return{prefix:u.prefix||fa(),iconName:Pa(u.prefix,u.iconName)||u.iconName}}if(typeof i=="string"){var d=fa();return{prefix:d,iconName:Pa(d,i)||i}}}},Re={noAuto:RO,config:tt,dom:_O,parse:zO,library:x1,findIconDefinition:Pf,toHtml:mo},jO=function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},o=i.autoReplaceSvgRoot,l=o===void 0?Ct:o;(Object.keys($e.styles).length>0||tt.autoFetchSvg)&&zn&&tt.autoReplaceSvg&&Re.dom.i2svg({node:l})};function cs(n,i){return Object.defineProperty(n,"abstract",{get:i}),Object.defineProperty(n,"html",{get:function(){return n.abstract.map(function(l){return mo(l)})}}),Object.defineProperty(n,"node",{get:function(){if(zn){var l=Ct.createElement("div");return l.innerHTML=n.html,l.children}}}),n}function NO(n){var i=n.children,o=n.main,l=n.mask,u=n.attributes,d=n.styles,f=n.transform;if(Rd(f)&&o.found&&!l.found){var h=o.width,m=o.height,p={x:h/m/2,y:.5};u.style=ls(Y(Y({},d),{},{"transform-origin":"".concat(p.x+f.x/16,"em ").concat(p.y+f.y/16,"em")}))}return[{tag:"svg",attributes:u,children:i}]}function PO(n){var i=n.prefix,o=n.iconName,l=n.children,u=n.attributes,d=n.symbol,f=d===!0?"".concat(i,"-").concat(tt.cssPrefix,"-").concat(o):d;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:Y(Y({},u),{},{id:f}),children:l}]}]}function VO(n){var i=["aria-label","aria-labelledby","title","role"];return i.some(function(o){return o in n})}function jd(n){var i=n.icons,o=i.main,l=i.mask,u=n.prefix,d=n.iconName,f=n.transform,h=n.symbol,m=n.maskId,p=n.extra,v=n.watchable,y=v===void 0?!1:v,x=l.found?l:o,M=x.width,R=x.height,E=[tt.replacementClass,d?"".concat(tt.cssPrefix,"-").concat(d):""].filter(function(H){return p.classes.indexOf(H)===-1}).filter(function(H){return H!==""||!!H}).concat(p.classes).join(" "),j={children:[],attributes:Y(Y({},p.attributes),{},{"data-prefix":u,"data-icon":d,class:E,role:p.attributes.role||"img",viewBox:"0 0 ".concat(M," ").concat(R)})};!VO(p.attributes)&&!p.attributes["aria-hidden"]&&(j.attributes["aria-hidden"]="true"),y&&(j.attributes[La]="");var V=Y(Y({},j),{},{prefix:u,iconName:d,main:o,mask:l,maskId:m,transform:f,symbol:h,styles:Y({},p.styles)}),q=l.found&&o.found?da("generateAbstractMask",V)||{children:[],attributes:{}}:da("generateAbstractIcon",V)||{children:[],attributes:{}},L=q.children,Q=q.attributes;return V.children=L,V.attributes=Q,h?PO(V):NO(V)}function xv(n){var i=n.content,o=n.width,l=n.height,u=n.transform,d=n.extra,f=n.watchable,h=f===void 0?!1:f,m=Y(Y({},d.attributes),{},{class:d.classes.join(" ")});h&&(m[La]="");var p=Y({},d.styles);Rd(u)&&(p.transform=dO({transform:u,width:o,height:l}),p["-webkit-transform"]=p.transform);var v=ls(p);v.length>0&&(m.style=v);var y=[];return y.push({tag:"span",attributes:m,children:[i]}),y}function UO(n){var i=n.content,o=n.extra,l=Y(Y({},o.attributes),{},{class:o.classes.join(" ")}),u=ls(o.styles);u.length>0&&(l.style=u);var d=[];return d.push({tag:"span",attributes:l,children:[i]}),d}var Ic=$e.styles;function Vf(n){var i=n[0],o=n[1],l=n.slice(4),u=os(l,1),d=u[0],f=null;return Array.isArray(d)?f={tag:"g",attributes:{class:"".concat(tt.cssPrefix,"-").concat($c.GROUP)},children:[{tag:"path",attributes:{class:"".concat(tt.cssPrefix,"-").concat($c.SECONDARY),fill:"currentColor",d:d[0]}},{tag:"path",attributes:{class:"".concat(tt.cssPrefix,"-").concat($c.PRIMARY),fill:"currentColor",d:d[1]}}]}:f={tag:"path",attributes:{fill:"currentColor",d}},{found:!0,width:i,height:o,icon:f}}var LO={found:!1,width:512,height:512};function BO(n,i){!t1&&!tt.showMissingIcons&&n&&console.error('Icon with name "'.concat(n,'" and prefix "').concat(i,'" is missing.'))}function Uf(n,i){var o=i;return i==="fa"&&tt.styleDefault!==null&&(i=fa()),new Promise(function(l,u){if(o==="fa"){var d=b1(n)||{};n=d.iconName||n,i=d.prefix||i}if(n&&i&&Ic[i]&&Ic[i][n]){var f=Ic[i][n];return l(Vf(f))}BO(n,i),l(Y(Y({},LO),{},{icon:tt.showMissingIcons&&n?da("missingIconAbstract")||{}:{}}))})}var Sv=function(){},Lf=tt.measurePerformance&&Nl&&Nl.mark&&Nl.measure?Nl:{mark:Sv,measure:Sv},Xr='FA "7.0.0"',HO=function(i){return Lf.mark("".concat(Xr," ").concat(i," begins")),function(){return S1(i)}},S1=function(i){Lf.mark("".concat(Xr," ").concat(i," ends")),Lf.measure("".concat(Xr," ").concat(i),"".concat(Xr," ").concat(i," begins"),"".concat(Xr," ").concat(i," ends"))},Nd={begin:HO,end:S1},ql=function(){};function Tv(n){var i=n.getAttribute?n.getAttribute(La):null;return typeof i=="string"}function qO(n){var i=n.getAttribute?n.getAttribute(Dd):null,o=n.getAttribute?n.getAttribute(Cd):null;return i&&o}function YO(n){return n&&n.classList&&n.classList.contains&&n.classList.contains(tt.replacementClass)}function GO(){if(tt.autoReplaceSvg===!0)return Yl.replace;var n=Yl[tt.autoReplaceSvg];return n||Yl.replace}function XO(n){return Ct.createElementNS("http://www.w3.org/2000/svg",n)}function FO(n){return Ct.createElement(n)}function T1(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=i.ceFn,l=o===void 0?n.tag==="svg"?XO:FO:o;if(typeof n=="string")return Ct.createTextNode(n);var u=l(n.tag);Object.keys(n.attributes||[]).forEach(function(f){u.setAttribute(f,n.attributes[f])});var d=n.children||[];return d.forEach(function(f){u.appendChild(T1(f,{ceFn:l}))}),u}function KO(n){var i=" ".concat(n.outerHTML," ");return i="".concat(i,"Font Awesome fontawesome.com "),i}var Yl={replace:function(i){var o=i[0];if(o.parentNode)if(i[1].forEach(function(u){o.parentNode.insertBefore(T1(u),o)}),o.getAttribute(La)===null&&tt.keepOriginalSource){var l=Ct.createComment(KO(o));o.parentNode.replaceChild(l,o)}else o.remove()},nest:function(i){var o=i[0],l=i[1];if(~kd(o).indexOf(tt.replacementClass))return Yl.replace(i);var u=new RegExp("".concat(tt.cssPrefix,"-.*"));if(delete l[0].attributes.id,l[0].attributes.class){var d=l[0].attributes.class.split(" ").reduce(function(h,m){return m===tt.replacementClass||m.match(u)?h.toSvg.push(m):h.toNode.push(m),h},{toNode:[],toSvg:[]});l[0].attributes.class=d.toSvg.join(" "),d.toNode.length===0?o.removeAttribute("class"):o.setAttribute("class",d.toNode.join(" "))}var f=l.map(function(h){return mo(h)}).join(`
`);o.setAttribute(La,""),o.innerHTML=f}};function Av(n){n()}function A1(n,i){var o=typeof i=="function"?i:ql;if(n.length===0)o();else{var l=Av;tt.mutateApproach===$6&&(l=ca.requestAnimationFrame||Av),l(function(){var u=GO(),d=Nd.begin("mutate");n.map(u),d(),o()})}}var Pd=!1;function O1(){Pd=!0}function Bf(){Pd=!1}var ts=null;function Ov(n){if(sv&&tt.observeMutations){var i=n.treeCallback,o=i===void 0?ql:i,l=n.nodeCallback,u=l===void 0?ql:l,d=n.pseudoElementsCallback,f=d===void 0?ql:d,h=n.observeMutationsRoot,m=h===void 0?Ct:h;ts=new sv(function(p){if(!Pd){var v=fa();qi(p).forEach(function(y){if(y.type==="childList"&&y.addedNodes.length>0&&!Tv(y.addedNodes[0])&&(tt.searchPseudoElements&&f(y.target),o(y.target)),y.type==="attributes"&&y.target.parentNode&&tt.searchPseudoElements&&f([y.target],!0),y.type==="attributes"&&Tv(y.target)&&~nO.indexOf(y.attributeName))if(y.attributeName==="class"&&qO(y.target)){var x=us(kd(y.target)),M=x.prefix,R=x.iconName;y.target.setAttribute(Dd,M||v),R&&y.target.setAttribute(Cd,R)}else YO(y.target)&&u(y.target)})}}),zn&&ts.observe(m,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function ZO(){ts&&ts.disconnect()}function QO(n){var i=n.getAttribute("style"),o=[];return i&&(o=i.split(";").reduce(function(l,u){var d=u.split(":"),f=d[0],h=d.slice(1);return f&&h.length>0&&(l[f]=h.join(":").trim()),l},{})),o}function $O(n){var i=n.getAttribute("data-prefix"),o=n.getAttribute("data-icon"),l=n.innerText!==void 0?n.innerText.trim():"",u=us(kd(n));return u.prefix||(u.prefix=fa()),i&&o&&(u.prefix=i,u.iconName=o),u.iconName&&u.prefix||(u.prefix&&l.length>0&&(u.iconName=xO(u.prefix,n.innerText)||zd(u.prefix,u1(n.innerText))),!u.iconName&&tt.autoFetchSvg&&n.firstChild&&n.firstChild.nodeType===Node.TEXT_NODE&&(u.iconName=n.firstChild.data)),u}function JO(n){var i=qi(n.attributes).reduce(function(o,l){return o.name!=="class"&&o.name!=="style"&&(o[l.name]=l.value),o},{});return i}function WO(){return{iconName:null,prefix:null,transform:sn,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Ev(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},o=$O(n),l=o.iconName,u=o.prefix,d=o.rest,f=JO(n),h=Nf("parseNodeAttributes",{},n),m=i.styleParser?QO(n):[];return Y({iconName:l,prefix:u,transform:sn,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:d,styles:m,attributes:f}},h)}var IO=$e.styles;function E1(n){var i=tt.autoReplaceSvg==="nest"?Ev(n,{styleParser:!1}):Ev(n);return~i.extra.classes.indexOf(a1)?da("generateLayersText",n,i):da("generateSvgReplacementMutation",n,i)}function tE(){return[].concat(Je(Zy),Je(Qy))}function wv(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!zn)return Promise.resolve();var o=Ct.documentElement.classList,l=function(y){return o.add("".concat(fv,"-").concat(y))},u=function(y){return o.remove("".concat(fv,"-").concat(y))},d=tt.autoFetchSvg?tE():zy.concat(Object.keys(IO));d.includes("fa")||d.push("fa");var f=[".".concat(a1,":not([").concat(La,"])")].concat(d.map(function(v){return".".concat(v,":not([").concat(La,"])")})).join(", ");if(f.length===0)return Promise.resolve();var h=[];try{h=qi(n.querySelectorAll(f))}catch{}if(h.length>0)l("pending"),u("complete");else return Promise.resolve();var m=Nd.begin("onTree"),p=h.reduce(function(v,y){try{var x=E1(y);x&&v.push(x)}catch(M){t1||M.name==="MissingIcon"&&console.error(M)}return v},[]);return new Promise(function(v,y){Promise.all(p).then(function(x){A1(x,function(){l("active"),l("complete"),u("pending"),typeof i=="function"&&i(),m(),v()})}).catch(function(x){m(),y(x)})})}function eE(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;E1(n).then(function(o){o&&A1([o],i)})}function nE(n){return function(i){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},l=(i||{}).icon?i:Pf(i||{}),u=o.mask;return u&&(u=(u||{}).icon?u:Pf(u||{})),n(l,Y(Y({},o),{},{mask:u}))}}var aE=function(i){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},l=o.transform,u=l===void 0?sn:l,d=o.symbol,f=d===void 0?!1:d,h=o.mask,m=h===void 0?null:h,p=o.maskId,v=p===void 0?null:p,y=o.classes,x=y===void 0?[]:y,M=o.attributes,R=M===void 0?{}:M,E=o.styles,j=E===void 0?{}:E;if(i){var V=i.prefix,q=i.iconName,L=i.icon;return cs(Y({type:"icon"},i),function(){return Ba("beforeDOMElementCreation",{iconDefinition:i,params:o}),jd({icons:{main:Vf(L),mask:m?Vf(m.icon):{found:!1,width:null,height:null,icon:{}}},prefix:V,iconName:q,transform:Y(Y({},sn),u),symbol:f,maskId:v,extra:{attributes:R,styles:j,classes:x}})})}},iE={mixout:function(){return{icon:nE(aE)}},hooks:function(){return{mutationObserverCallbacks:function(o){return o.treeCallback=wv,o.nodeCallback=eE,o}}},provides:function(i){i.i2svg=function(o){var l=o.node,u=l===void 0?Ct:l,d=o.callback,f=d===void 0?function(){}:d;return wv(u,f)},i.generateSvgReplacementMutation=function(o,l){var u=l.iconName,d=l.prefix,f=l.transform,h=l.symbol,m=l.mask,p=l.maskId,v=l.extra;return new Promise(function(y,x){Promise.all([Uf(u,d),m.iconName?Uf(m.iconName,m.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(M){var R=os(M,2),E=R[0],j=R[1];y([o,jd({icons:{main:E,mask:j},prefix:d,iconName:u,transform:f,symbol:h,maskId:p,extra:v,watchable:!0})])}).catch(x)})},i.generateAbstractIcon=function(o){var l=o.children,u=o.attributes,d=o.main,f=o.transform,h=o.styles,m=ls(h);m.length>0&&(u.style=m);var p;return Rd(f)&&(p=da("generateAbstractTransformGrouping",{main:d,transform:f,containerWidth:d.width,iconWidth:d.width})),l.push(p||d.icon),{children:l,attributes:u}}}},rE={mixout:function(){return{layer:function(o){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},u=l.classes,d=u===void 0?[]:u;return cs({type:"layer"},function(){Ba("beforeDOMElementCreation",{assembler:o,params:l});var f=[];return o(function(h){Array.isArray(h)?h.map(function(m){f=f.concat(m.abstract)}):f=f.concat(h.abstract)}),[{tag:"span",attributes:{class:["".concat(tt.cssPrefix,"-layers")].concat(Je(d)).join(" ")},children:f}]})}}}},oE={mixout:function(){return{counter:function(o){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};l.title;var u=l.classes,d=u===void 0?[]:u,f=l.attributes,h=f===void 0?{}:f,m=l.styles,p=m===void 0?{}:m;return cs({type:"counter",content:o},function(){return Ba("beforeDOMElementCreation",{content:o,params:l}),UO({content:o.toString(),extra:{attributes:h,styles:p,classes:["".concat(tt.cssPrefix,"-layers-counter")].concat(Je(d))}})})}}}},lE={mixout:function(){return{text:function(o){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},u=l.transform,d=u===void 0?sn:u,f=l.classes,h=f===void 0?[]:f,m=l.attributes,p=m===void 0?{}:m,v=l.styles,y=v===void 0?{}:v;return cs({type:"text",content:o},function(){return Ba("beforeDOMElementCreation",{content:o,params:l}),xv({content:o,transform:Y(Y({},sn),d),extra:{attributes:p,styles:y,classes:["".concat(tt.cssPrefix,"-layers-text")].concat(Je(h))}})})}}},provides:function(i){i.generateLayersText=function(o,l){var u=l.transform,d=l.extra,f=null,h=null;if(Ry){var m=parseInt(getComputedStyle(o).fontSize,10),p=o.getBoundingClientRect();f=p.width/m,h=p.height/m}return Promise.resolve([o,xv({content:o.innerHTML,width:f,height:h,transform:u,extra:d,watchable:!0})])}}},w1=new RegExp('"',"ug"),Mv=[1105920,1112319],Dv=Y(Y(Y(Y({},{FontAwesome:{normal:"fas",400:"fas"}}),QA),Z6),i6),Hf=Object.keys(Dv).reduce(function(n,i){return n[i.toLowerCase()]=Dv[i],n},{}),sE=Object.keys(Hf).reduce(function(n,i){var o=Hf[i];return n[i]=o[900]||Je(Object.entries(o))[0][1],n},{});function uE(n){var i=n.replace(w1,"");return u1(Je(i)[0]||"")}function cE(n){var i=n.getPropertyValue("font-feature-settings").includes("ss01"),o=n.getPropertyValue("content"),l=o.replace(w1,""),u=l.codePointAt(0),d=u>=Mv[0]&&u<=Mv[1],f=l.length===2?l[0]===l[1]:!1;return d||f||i}function fE(n,i){var o=n.replace(/^['"]|['"]$/g,"").toLowerCase(),l=parseInt(i),u=isNaN(l)?"normal":l;return(Hf[o]||{})[u]||sE[o]}function Cv(n,i){var o="".concat(Q6).concat(i.replace(":","-"));return new Promise(function(l,u){if(n.getAttribute(o)!==null)return l();var d=qi(n.children),f=d.filter(function(I){return I.getAttribute(Rf)===i})[0],h=ca.getComputedStyle(n,i),m=h.getPropertyValue("font-family"),p=m.match(tO),v=h.getPropertyValue("font-weight"),y=h.getPropertyValue("content");if(f&&!p)return n.removeChild(f),l();if(p&&y!=="none"&&y!==""){var x=h.getPropertyValue("content"),M=fE(m,v),R=uE(x),E=p[0].startsWith("FontAwesome"),j=cE(h),V=zd(M,R),q=V;if(E){var L=SO(R);L.iconName&&L.prefix&&(V=L.iconName,M=L.prefix)}if(V&&!j&&(!f||f.getAttribute(Dd)!==M||f.getAttribute(Cd)!==q)){n.setAttribute(o,q),f&&n.removeChild(f);var Q=WO(),H=Q.extra;H.attributes[Rf]=i,Uf(V,M).then(function(I){var lt=jd(Y(Y({},Q),{},{icons:{main:I,mask:y1()},prefix:M,iconName:q,extra:H,watchable:!0})),K=Ct.createElementNS("http://www.w3.org/2000/svg","svg");i==="::before"?n.insertBefore(K,n.firstChild):n.appendChild(K),K.outerHTML=lt.map(function(ct){return mo(ct)}).join(`
`),n.removeAttribute(o),l()}).catch(u)}else l()}else l()})}function dE(n){return Promise.all([Cv(n,"::before"),Cv(n,"::after")])}function hE(n){return n.parentNode!==document.head&&!~J6.indexOf(n.tagName.toUpperCase())&&!n.getAttribute(Rf)&&(!n.parentNode||n.parentNode.tagName!=="svg")}var mE=function(i){return!!i&&Iy.some(function(o){return i.includes(o)})},pE=function(i){if(!i)return[];for(var o=new Set,l=[i],u=[/(?=\s:)/,new RegExp("(?<=\\)\\)?[^,]*,)")],d=function(){var M=h[f];l=l.flatMap(function(R){return R.split(M).map(function(E){return E.replace(/,\s*$/,"").trim()})})},f=0,h=u;f<h.length;f++)d();l=l.flatMap(function(x){return x.includes("(")?x:x.split(",").map(function(M){return M.trim()})});var m=Hl(l),p;try{for(m.s();!(p=m.n()).done;){var v=p.value;if(mE(v)){var y=Iy.reduce(function(x,M){return x.replace(M,"")},v);y!==""&&y!=="*"&&o.add(y)}}}catch(x){m.e(x)}finally{m.f()}return o};function kv(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(zn){var o;if(i)o=n;else if(tt.searchPseudoElementsFullScan)o=n.querySelectorAll("*");else{var l=new Set,u=Hl(document.styleSheets),d;try{for(u.s();!(d=u.n()).done;){var f=d.value;try{var h=Hl(f.cssRules),m;try{for(h.s();!(m=h.n()).done;){var p=m.value,v=pE(p.selectorText),y=Hl(v),x;try{for(y.s();!(x=y.n()).done;){var M=x.value;l.add(M)}}catch(E){y.e(E)}finally{y.f()}}}catch(E){h.e(E)}finally{h.f()}}catch(E){tt.searchPseudoElementsWarnings&&console.warn("Font Awesome: cannot parse stylesheet: ".concat(f.href," (").concat(E.message,`)
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`))}}}catch(E){u.e(E)}finally{u.f()}if(!l.size)return;var R=Array.from(l).join(", ");try{o=n.querySelectorAll(R)}catch{}}return new Promise(function(E,j){var V=qi(o).filter(hE).map(dE),q=Nd.begin("searchPseudoElements");O1(),Promise.all(V).then(function(){q(),Bf(),E()}).catch(function(){q(),Bf(),j()})})}}var gE={hooks:function(){return{mutationObserverCallbacks:function(o){return o.pseudoElementsCallback=kv,o}}},provides:function(i){i.pseudoElements2svg=function(o){var l=o.node,u=l===void 0?Ct:l;tt.searchPseudoElements&&kv(u)}}},Rv=!1,vE={mixout:function(){return{dom:{unwatch:function(){O1(),Rv=!0}}}},hooks:function(){return{bootstrap:function(){Ov(Nf("mutationObserverCallbacks",{}))},noAuto:function(){ZO()},watch:function(o){var l=o.observeMutationsRoot;Rv?Bf():Ov(Nf("mutationObserverCallbacks",{observeMutationsRoot:l}))}}}},_v=function(i){var o={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return i.toLowerCase().split(" ").reduce(function(l,u){var d=u.toLowerCase().split("-"),f=d[0],h=d.slice(1).join("-");if(f&&h==="h")return l.flipX=!0,l;if(f&&h==="v")return l.flipY=!0,l;if(h=parseFloat(h),isNaN(h))return l;switch(f){case"grow":l.size=l.size+h;break;case"shrink":l.size=l.size-h;break;case"left":l.x=l.x-h;break;case"right":l.x=l.x+h;break;case"up":l.y=l.y-h;break;case"down":l.y=l.y+h;break;case"rotate":l.rotate=l.rotate+h;break}return l},o)},bE={mixout:function(){return{parse:{transform:function(o){return _v(o)}}}},hooks:function(){return{parseNodeAttributes:function(o,l){var u=l.getAttribute("data-fa-transform");return u&&(o.transform=_v(u)),o}}},provides:function(i){i.generateAbstractTransformGrouping=function(o){var l=o.main,u=o.transform,d=o.containerWidth,f=o.iconWidth,h={transform:"translate(".concat(d/2," 256)")},m="translate(".concat(u.x*32,", ").concat(u.y*32,") "),p="scale(".concat(u.size/16*(u.flipX?-1:1),", ").concat(u.size/16*(u.flipY?-1:1),") "),v="rotate(".concat(u.rotate," 0 0)"),y={transform:"".concat(m," ").concat(p," ").concat(v)},x={transform:"translate(".concat(f/2*-1," -256)")},M={outer:h,inner:y,path:x};return{tag:"g",attributes:Y({},M.outer),children:[{tag:"g",attributes:Y({},M.inner),children:[{tag:l.icon.tag,children:l.icon.children,attributes:Y(Y({},l.icon.attributes),M.path)}]}]}}}},tf={x:0,y:0,width:"100%",height:"100%"};function zv(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return n.attributes&&(n.attributes.fill||i)&&(n.attributes.fill="black"),n}function yE(n){return n.tag==="g"?n.children:[n]}var xE={hooks:function(){return{parseNodeAttributes:function(o,l){var u=l.getAttribute("data-fa-mask"),d=u?us(u.split(" ").map(function(f){return f.trim()})):y1();return d.prefix||(d.prefix=fa()),o.mask=d,o.maskId=l.getAttribute("data-fa-mask-id"),o}}},provides:function(i){i.generateAbstractMask=function(o){var l=o.children,u=o.attributes,d=o.main,f=o.mask,h=o.maskId,m=o.transform,p=d.width,v=d.icon,y=f.width,x=f.icon,M=fO({transform:m,containerWidth:y,iconWidth:p}),R={tag:"rect",attributes:Y(Y({},tf),{},{fill:"white"})},E=v.children?{children:v.children.map(zv)}:{},j={tag:"g",attributes:Y({},M.inner),children:[zv(Y({tag:v.tag,attributes:Y(Y({},v.attributes),M.path)},E))]},V={tag:"g",attributes:Y({},M.outer),children:[j]},q="mask-".concat(h||hv()),L="clip-".concat(h||hv()),Q={tag:"mask",attributes:Y(Y({},tf),{},{id:q,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[R,V]},H={tag:"defs",children:[{tag:"clipPath",attributes:{id:L},children:yE(x)},Q]};return l.push(H,{tag:"rect",attributes:Y({fill:"currentColor","clip-path":"url(#".concat(L,")"),mask:"url(#".concat(q,")")},tf)}),{children:l,attributes:u}}}},SE={provides:function(i){var o=!1;ca.matchMedia&&(o=ca.matchMedia("(prefers-reduced-motion: reduce)").matches),i.missingIconAbstract=function(){var l=[],u={fill:"currentColor"},d={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};l.push({tag:"path",attributes:Y(Y({},u),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var f=Y(Y({},d),{},{attributeName:"opacity"}),h={tag:"circle",attributes:Y(Y({},u),{},{cx:"256",cy:"364",r:"28"}),children:[]};return o||h.children.push({tag:"animate",attributes:Y(Y({},d),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:Y(Y({},f),{},{values:"1;0;1;1;0;1;"})}),l.push(h),l.push({tag:"path",attributes:Y(Y({},u),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:o?[]:[{tag:"animate",attributes:Y(Y({},f),{},{values:"1;0;0;0;0;1;"})}]}),o||l.push({tag:"path",attributes:Y(Y({},u),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:Y(Y({},f),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:l}}}},TE={hooks:function(){return{parseNodeAttributes:function(o,l){var u=l.getAttribute("data-fa-symbol"),d=u===null?!1:u===""?!0:u;return o.symbol=d,o}}}},AE=[mO,iE,rE,oE,lE,gE,vE,bE,xE,SE,TE];kO(AE,{mixoutsTo:Re});Re.noAuto;Re.config;Re.library;Re.dom;var qf=Re.parse;Re.findIconDefinition;Re.toHtml;var OE=Re.icon;Re.layer;Re.text;Re.counter;var ef={exports:{}},nf,jv;function EE(){if(jv)return nf;jv=1;var n="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return nf=n,nf}var af,Nv;function wE(){if(Nv)return af;Nv=1;var n=EE();function i(){}function o(){}return o.resetWarningCache=i,af=function(){function l(f,h,m,p,v,y){if(y!==n){var x=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw x.name="Invariant Violation",x}}l.isRequired=l;function u(){return l}var d={array:l,bigint:l,bool:l,func:l,number:l,object:l,string:l,symbol:l,any:l,arrayOf:u,element:l,elementType:l,instanceOf:u,node:l,objectOf:u,oneOf:u,oneOfType:u,shape:u,exact:u,checkPropTypes:o,resetWarningCache:i};return d.PropTypes=d,d},af}var Pv;function ME(){return Pv||(Pv=1,ef.exports=wE()()),ef.exports}var DE=ME();const dt=qv(DE);var CE={};function Yf(n,i){(i==null||i>n.length)&&(i=n.length);for(var o=0,l=Array(i);o<i;o++)l[o]=n[o];return l}function kE(n){if(Array.isArray(n))return n}function RE(n){if(Array.isArray(n))return Yf(n)}function la(n,i,o){return(i=LE(i))in n?Object.defineProperty(n,i,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[i]=o,n}function _E(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function zE(n,i){var o=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(o!=null){var l,u,d,f,h=[],m=!0,p=!1;try{if(d=(o=o.call(n)).next,i!==0)for(;!(m=(l=d.call(o)).done)&&(h.push(l.value),h.length!==i);m=!0);}catch(v){p=!0,u=v}finally{try{if(!m&&o.return!=null&&(f=o.return(),Object(f)!==f))return}finally{if(p)throw u}}return h}}function jE(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function NE(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Vv(n,i){var o=Object.keys(n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);i&&(l=l.filter(function(u){return Object.getOwnPropertyDescriptor(n,u).enumerable})),o.push.apply(o,l)}return o}function on(n){for(var i=1;i<arguments.length;i++){var o=arguments[i]!=null?arguments[i]:{};i%2?Vv(Object(o),!0).forEach(function(l){la(n,l,o[l])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(o)):Vv(Object(o)).forEach(function(l){Object.defineProperty(n,l,Object.getOwnPropertyDescriptor(o,l))})}return n}function PE(n,i){if(n==null)return{};var o,l,u=VE(n,i);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(n);for(l=0;l<d.length;l++)o=d[l],i.indexOf(o)===-1&&{}.propertyIsEnumerable.call(n,o)&&(u[o]=n[o])}return u}function VE(n,i){if(n==null)return{};var o={};for(var l in n)if({}.hasOwnProperty.call(n,l)){if(i.indexOf(l)!==-1)continue;o[l]=n[l]}return o}function Uv(n,i){return kE(n)||zE(n,i)||M1(n,i)||jE()}function Gf(n){return RE(n)||_E(n)||M1(n)||NE()}function UE(n,i){if(typeof n!="object"||!n)return n;var o=n[Symbol.toPrimitive];if(o!==void 0){var l=o.call(n,i);if(typeof l!="object")return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return(i==="string"?String:Number)(n)}function LE(n){var i=UE(n,"string");return typeof i=="symbol"?i:i+""}function es(n){"@babel/helpers - typeof";return es=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},es(n)}function M1(n,i){if(n){if(typeof n=="string")return Yf(n,i);var o={}.toString.call(n).slice(8,-1);return o==="Object"&&n.constructor&&(o=n.constructor.name),o==="Map"||o==="Set"?Array.from(n):o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?Yf(n,i):void 0}}var BE="7.0.0-alpha1",Xf;try{var HE=require("@fortawesome/fontawesome-svg-core/package.json");Xf=HE.version}catch{Xf=CE.FA_VERSION||"7.0.0-alpha8"}function qE(n){var i=n.beat,o=n.fade,l=n.beatFade,u=n.bounce,d=n.shake,f=n.flash,h=n.spin,m=n.spinPulse,p=n.spinReverse,v=n.pulse,y=n.fixedWidth,x=n.inverse,M=n.border,R=n.listItem,E=n.flip,j=n.size,V=n.rotation,q=n.pull,L=n.swapOpacity,Q=n.rotateBy,H=n.widthAuto,I=YE(Xf,BE),lt=la(la(la(la(la(la({"fa-beat":i,"fa-fade":o,"fa-beat-fade":l,"fa-bounce":u,"fa-shake":d,"fa-flash":f,"fa-spin":h,"fa-spin-reverse":p,"fa-spin-pulse":m,"fa-pulse":v,"fa-fw":y,"fa-inverse":x,"fa-border":M,"fa-li":R,"fa-flip":E===!0,"fa-flip-horizontal":E==="horizontal"||E==="both","fa-flip-vertical":E==="vertical"||E==="both"},"fa-".concat(j),typeof j<"u"&&j!==null),"fa-rotate-".concat(V),typeof V<"u"&&V!==null&&V!==0),"fa-pull-".concat(q),typeof q<"u"&&q!==null),"fa-swap-opacity",L),"fa-rotate-by",I&&Q),"fa-width-auto",I&&H);return Object.keys(lt).map(function(K){return lt[K]?K:null}).filter(function(K){return K})}function YE(n,i){for(var o=n.split("-"),l=Uv(o,2),u=l[0],d=l[1],f=i.split("-"),h=Uv(f,2),m=h[0],p=h[1],v=u.split("."),y=m.split("."),x=0;x<Math.max(v.length,y.length);x++){var M=v[x]||"0",R=y[x]||"0",E=parseInt(M,10),j=parseInt(R,10);if(E!==j)return E>j}for(var V=0;V<Math.max(v.length,y.length);V++){var q=v[V]||"0",L=y[V]||"0";if(q!==L&&q.length!==L.length)return q.length<L.length}return!(d&&!p)}function GE(n){return n=n-0,n===n}function D1(n){return GE(n)?n:(n=n.replace(/[\-_\s]+(.)?/g,function(i,o){return o?o.toUpperCase():""}),n.substr(0,1).toLowerCase()+n.substr(1))}var XE=["style"];function FE(n){return n.charAt(0).toUpperCase()+n.slice(1)}function KE(n){return n.split(";").map(function(i){return i.trim()}).filter(function(i){return i}).reduce(function(i,o){var l=o.indexOf(":"),u=D1(o.slice(0,l)),d=o.slice(l+1).trim();return u.startsWith("webkit")?i[FE(u)]=d:i[u]=d,i},{})}function C1(n,i){var o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof i=="string")return i;var l=(i.children||[]).map(function(m){return C1(n,m)}),u=Object.keys(i.attributes||{}).reduce(function(m,p){var v=i.attributes[p];switch(p){case"class":m.attrs.className=v,delete i.attributes.class;break;case"style":m.attrs.style=KE(v);break;default:p.indexOf("aria-")===0||p.indexOf("data-")===0?m.attrs[p.toLowerCase()]=v:m.attrs[D1(p)]=v}return m},{attrs:{}}),d=o.style,f=d===void 0?{}:d,h=PE(o,XE);return u.attrs.style=on(on({},u.attrs.style),f),n.apply(void 0,[i.tag,on(on({},u.attrs),h)].concat(Gf(l)))}var k1=!1;try{k1=!0}catch{}function ZE(){if(!k1&&console&&typeof console.error=="function"){var n;(n=console).error.apply(n,arguments)}}function Lv(n){if(n&&es(n)==="object"&&n.prefix&&n.iconName&&n.icon)return n;if(qf.icon)return qf.icon(n);if(n===null)return null;if(n&&es(n)==="object"&&n.prefix&&n.iconName)return n;if(Array.isArray(n)&&n.length===2)return{prefix:n[0],iconName:n[1]};if(typeof n=="string")return{prefix:"fas",iconName:n}}function rf(n,i){return Array.isArray(i)&&i.length>0||!Array.isArray(i)&&i?la({},n,i):{}}var Bv={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,rotateBy:!1,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1,widthAuto:!1},Ir=de.forwardRef(function(n,i){var o=on(on({},Bv),n),l=o.icon,u=o.mask,d=o.symbol,f=o.className,h=o.title,m=o.titleId,p=o.maskId,v=Lv(l),y=rf("classes",[].concat(Gf(qE(o)),Gf((f||"").split(" ")))),x=rf("transform",typeof o.transform=="string"?qf.transform(o.transform):o.transform),M=rf("mask",Lv(u)),R=OE(v,on(on(on(on({},y),x),M),{},{symbol:d,title:h,titleId:m,maskId:p}));if(!R)return ZE("Could not find icon",v),null;var E=R.abstract,j={ref:i};return Object.keys(o).forEach(function(V){Bv.hasOwnProperty(V)||(j[V]=o[V])}),QE(E[0],j)});Ir.displayName="FontAwesomeIcon";Ir.propTypes={beat:dt.bool,border:dt.bool,beatFade:dt.bool,bounce:dt.bool,className:dt.string,fade:dt.bool,flash:dt.bool,mask:dt.oneOfType([dt.object,dt.array,dt.string]),maskId:dt.string,fixedWidth:dt.bool,inverse:dt.bool,flip:dt.oneOf([!0,!1,"horizontal","vertical","both"]),icon:dt.oneOfType([dt.object,dt.array,dt.string]),listItem:dt.bool,pull:dt.oneOf(["right","left"]),pulse:dt.bool,rotation:dt.oneOf([0,90,180,270]),rotateBy:dt.bool,shake:dt.bool,size:dt.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:dt.bool,spinPulse:dt.bool,spinReverse:dt.bool,symbol:dt.oneOfType([dt.bool,dt.string]),title:dt.string,titleId:dt.string,transform:dt.oneOfType([dt.string,dt.object]),swapOpacity:dt.bool,widthAuto:dt.bool};var QE=C1.bind(null,de.createElement);/*!
 * Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2025 Fonticons, Inc.
 */var $E={prefix:"fas",iconName:"code",icon:[576,512,[],"f121","M360.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm64.6 136.1c-12.5 12.5-12.5 32.8 0 45.3l73.4 73.4-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l96-96c12.5-12.5 12.5-32.8 0-45.3l-96-96c-12.5-12.5-32.8-12.5-45.3 0zm-274.7 0c-12.5-12.5-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3l96 96c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 150.6 182.6c12.5-12.5 12.5-32.8 0-45.3z"]},JE={prefix:"fas",iconName:"box-archive",icon:[512,512,["archive"],"f187","M0 64C0 46.3 14.3 32 32 32l448 0c17.7 0 32 14.3 32 32l0 32c0 17.7-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96L0 64zM32 176l448 0 0 240c0 35.3-28.7 64-64 64L96 480c-35.3 0-64-28.7-64-64l0-240zm152 64c-13.3 0-24 10.7-24 24s10.7 24 24 24l144 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-144 0z"]};/*!
 * Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2025 Fonticons, Inc.
 */var WE={prefix:"far",iconName:"star",icon:[576,512,[11088,61446],"f005","M288.1-32c9 0 17.3 5.1 21.4 13.1L383 125.3 542.9 150.7c8.9 1.4 16.3 7.7 19.1 16.3s.5 18-5.8 24.4L441.7 305.9 467 465.8c1.4 8.9-2.3 17.9-9.6 23.2s-17 6.1-25 2L288.1 417.6 143.8 491c-8 4.1-17.7 3.3-25-2s-11-14.2-9.6-23.2L134.4 305.9 20 191.4c-6.4-6.4-8.6-15.8-5.8-24.4s10.1-14.9 19.1-16.3l159.9-25.4 73.6-144.2c4.1-8 12.4-13.1 21.4-13.1zm0 76.8L230.3 158c-3.5 6.8-10 11.6-17.6 12.8l-125.5 20 89.8 89.9c5.4 5.4 7.9 13.1 6.7 20.7l-19.8 125.5 113.3-57.6c6.8-3.5 14.9-3.5 21.8 0l113.3 57.6-19.8-125.5c-1.2-7.6 1.3-15.3 6.7-20.7l89.8-89.9-125.5-20c-7.6-1.2-14.1-6-17.6-12.8L288.1 44.8z"]};function IE(n){switch(n){case"Python":return"#3572A5";case"JavaScript":return"#F1E05A";case"TypeScript":return"#2B7489";case"Java":return"#B07219";case"C":return"#555555";case"C++":return"#F34B7D";case"C#":return"#178600";case"Ruby":return"#701516";case"Go":return"#00ADD8";case"Rust":return"#DEA584";case"PHP":return"#4F5D95";case"Swift":return"#FFAC45";case"Kotlin":return"#A97BFF";case"Dart":return"#00B4AB";case"HTML":return"#E34C26";case"CSS":return"#563D7C";case"Shell":case"Bash":return"#89E051";case"R":return"#198CE7";case"Scala":return"#C22D40";case"Haskell":return"#5E5086";default:return"white"}}function t7(n){return U.jsxs("a",{href:n.link,className:"project-tile",children:[U.jsxs("div",{children:[U.jsxs("div",{className:"title",children:[U.jsx(Ir,{style:{color:"white",fontSize:"26px"},icon:JE}),U.jsx("h4",{children:n.name})]}),U.jsx("p",{children:n.discription})]}),U.jsxs("div",{className:"data",children:[U.jsxs("div",{children:[U.jsx(Ir,{icon:WE,style:{color:"#ffc107",fontSize:"24px"}})," "+n.stars]}),U.jsxs("div",{style:{color:IE(n.lang)},children:[U.jsx(Ir,{icon:$E,style:{color:"white",fontSize:"24px"}})," "+n.lang]})]})]})}function e7({repos:n}){const i=Object.entries(n),o=et.useRef(null);return et.useEffect(()=>{const l=new IntersectionObserver(u=>{u.forEach(d=>{d.isIntersecting?d.target.classList.add("show"):d.target.classList.remove("show")})});return o.current&&l.observe(o.current),()=>{o.current&&l.unobserve(o.current)}},[]),U.jsx("div",{id:"secound-page",children:U.jsxs("div",{className:"content",children:[U.jsx("h1",{children:"Projects"}),U.jsx("div",{className:"projects",children:i.map(([l,u],d)=>U.jsx("div",{className:"line",children:U.jsx(t7,{name:l,discription:u.description||"No description provided",stars:u.stars,lang:u.language||"Unknown",link:u.url})},d))}),U.jsx("div",{className:"parent-and-more",children:U.jsx("a",{href:"https://github.com/yacine-bek?tab=repositories",target:"_blank",rel:"noopener noreferrer",children:U.jsx("div",{className:"and-more fade-in",ref:o,children:"And More!"})})})]})})}/**
 * @license lucide-react v0.526.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n7=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),a7=n=>n.replace(/^([A-Z])|[\s-_]+(\w)/g,(i,o,l)=>l?l.toUpperCase():o.toLowerCase()),Hv=n=>{const i=a7(n);return i.charAt(0).toUpperCase()+i.slice(1)},R1=(...n)=>n.filter((i,o,l)=>!!i&&i.trim()!==""&&l.indexOf(i)===o).join(" ").trim(),i7=n=>{for(const i in n)if(i.startsWith("aria-")||i==="role"||i==="title")return!0};/**
 * @license lucide-react v0.526.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var r7={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.526.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o7=et.forwardRef(({color:n="currentColor",size:i=24,strokeWidth:o=2,absoluteStrokeWidth:l,className:u="",children:d,iconNode:f,...h},m)=>et.createElement("svg",{ref:m,...r7,width:i,height:i,stroke:n,strokeWidth:l?Number(o)*24/Number(i):o,className:R1("lucide",u),...!d&&!i7(h)&&{"aria-hidden":"true"},...h},[...f.map(([p,v])=>et.createElement(p,v)),...Array.isArray(d)?d:[d]]));/**
 * @license lucide-react v0.526.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l7=(n,i)=>{const o=et.forwardRef(({className:l,...u},d)=>et.createElement(o7,{ref:d,iconNode:i,className:R1(`lucide-${n7(Hv(n))}`,`lucide-${n}`,l),...u}));return o.displayName=Hv(n),o};/**
 * @license lucide-react v0.526.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s7=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],u7=l7("eye",s7);function c7({user:n}){return U.jsxs("div",{className:"git-hub-card",children:[U.jsx("img",{title:n.bio,src:n.avatar,width:110,height:110,alt:n.name,className:"rounded-md"}),U.jsx("div",{className:"profile-data",children:U.jsxs("p",{children:[n.followers," Followers ",U.jsx("br",{})," ",n.repoCount," Repositories"]})})]})}function f7(){return U.jsx("div",{children:U.jsxs("div",{className:"programming-lang",children:[U.jsx("h4",{children:"💻 Languages I Speak"}),U.jsx("p",{children:"C# - Java - Python - Dart - JavaScript - HTML - CSS - SQL - Kotlin - C"}),U.jsx("h4",{children:"🛠️ Frameworks & Libraries"}),U.jsx("p",{children:"Flutter - React - Django - .Net - JavaFX - PyQt"}),U.jsx("h4",{children:"🧠 What I've Built"}),U.jsxs("ul",{children:[U.jsx("li",{children:"WebSites (React - Django)"}),U.jsx("li",{children:"Cross-platform Apps (Flutter)"}),U.jsx("li",{children:"DeskTop (.Net - JavaFX - PyQT)"}),U.jsx("li",{children:"Bots (Discord - Telegram)"}),U.jsx("li",{children:"automation (n8n)"}),U.jsx("li",{children:"Game Plugins: Kotlin + Spigot for Minecraft"})]}),U.jsx("h4",{children:"🖥️ Infrastructure & Hosting"}),U.jsx("p",{children:"I manage my own Linux server (self-hosted projects, bots, and web services)"})]})})}function d7(n){return U.jsxs("div",{className:"third-page",children:[U.jsx("div",{className:"triangle-section-2"}),U.jsxs("div",{className:"about-me",children:[U.jsxs("div",{className:"preview",children:[U.jsx(u7,{size:30,color:"white"}),U.jsx("h5",{children:"Preview"})]}),U.jsxs("div",{className:"row",children:[U.jsxs("div",{className:"my-data",children:[U.jsx("h4",{children:"Who is this guy?"}),U.jsx("p",{children:"I'm Yacine Bekheddouma, 20 years old, live in Algiers."}),U.jsx("p",{children:"Currently in my third year of Computer Science at USTHB."}),U.jsx("p",{children:"I have a strong interest in programming, problem-solving, and learning new technologies quickly."}),U.jsx("p",{children:"My focus is on building a solid foundation in software development and continuously improving my skill set."}),U.jsx("p",{children:"I'm open to learning, collaborating, and contributing to meaningful, challenging projects."}),U.jsx("div",{children:U.jsx("a",{href:"https://github.com/yacine-bek",target:"_blank",children:U.jsx("div",{className:"git-profile",children:n.user?U.jsx(c7,{user:n.user}):U.jsx("p",{className:"text-white",children:"Loading..."})})})})]}),U.jsx("div",{className:"skills",children:U.jsx(f7,{})})]})]})]})}function h7(){const n=["https://img.shields.io/badge/c-%2300599C.svg?style=for-the-badge&logo=c&logoColor=white","https://img.shields.io/badge/c%23-%23239120.svg?style=for-the-badge&logo=csharp&logoColor=white","https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white","https://img.shields.io/badge/dart-%230175C2.svg?style=for-the-badge&logo=dart&logoColor=white","https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white","https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white","https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E","https://img.shields.io/badge/kotlin-%237F52FF.svg?style=for-the-badge&logo=kotlin&logoColor=white","https://img.shields.io/badge/php-%23777BB4.svg?style=for-the-badge&logo=php&logoColor=white","https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54"],i=["https://img.shields.io/badge/.NET-5C2D91?style=for-the-badge&logo=.net&logoColor=white","https://img.shields.io/badge/django-%23092E20.svg?style=for-the-badge&logo=django&logoColor=white","https://img.shields.io/badge/flask-%23000.svg?style=for-the-badge&logo=flask&logoColor=white","https://img.shields.io/badge/Flutter-%2302569B.svg?style=for-the-badge&logo=Flutter&logoColor=white","https://img.shields.io/badge/javafx-%23FF0000.svg?style=for-the-badge&logo=javafx&logoColor=white","https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white","https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white","https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB","https://img.shields.io/badge/Socket.io-black?style=for-the-badge&logo=socket.io&badgeColor=010101","https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white"],o=["https://img.shields.io/badge/Microsoft-0078D4?style=for-the-badge&logo=microsoft&logoColor=white","https://img.shields.io/badge/Android-3DDC84?style=for-the-badge&logo=android&logoColor=white","https://img.shields.io/badge/Debian-D70A53?style=for-the-badge&logo=debian&logoColor=white","https://img.shields.io/badge/Fedora-294172?style=for-the-badge&logo=fedora&logoColor=white","https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black","https://img.shields.io/badge/Windows-0078D6?style=for-the-badge&logo=windows&logoColor=white","https://img.shields.io/badge/Notion-%23000000.svg?style=for-the-badge&logo=notion&logoColor=white","https://img.shields.io/badge/Discord-%235865F2.svg?style=for-the-badge&logo=discord&logoColor=white","https://img.shields.io/badge/Telegram-2CA5E0?style=for-the-badge&logo=telegram&logoColor=white","https://img.shields.io/badge/X-%23000000.svg?style=for-the-badge&logo=X&logoColor=white","https://img.shields.io/badge/Apple-%23000000.svg?style=for-the-badge&logo=apple&logoColor=white","https://img.shields.io/badge/Brave-FB542B?style=for-the-badge&logo=Brave&logoColor=white","https://img.shields.io/badge/chatGPT-74aa9c?style=for-the-badge&logo=openai&logoColor=white","https://img.shields.io/badge/Google%20Chrome-4285F4?style=for-the-badge&logo=GoogleChrome&logoColor=white","https://img.shields.io/badge/Canva-%2300C4CC.svg?style=for-the-badge&logo=Canva&logoColor=white","https://img.shields.io/badge/blender-%23F5792A.svg?style=for-the-badge&logo=blender&logoColor=white","https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white","https://img.shields.io/badge/AMD-%23000000.svg?style=for-the-badge&logo=amd&logoColor=white","https://img.shields.io/badge/epicgames-%23313131.svg?style=for-the-badge&logo=epicgames&logoColor=white","https://img.shields.io/badge/intel-%230068B5%20.svg?style=for-the-badge&logo=intel&logoColor=white","https://img.shields.io/badge/nVIDIA-%2376B900.svg?style=for-the-badge&logo=nVIDIA&logoColor=white","https://img.shields.io/badge/steam-%23000000.svg?style=for-the-badge&logo=steam&logoColor=white"],l=["https://img.shields.io/badge/android%20studio-346ac1?style=for-the-badge&logo=android%20studio&logoColor=white","https://img.shields.io/badge/Eclipse-FE7A16.svg?style=for-the-badge&logo=Eclipse&logoColor=white","https://img.shields.io/badge/IntelliJIDEA-000000.svg?style=for-the-badge&logo=intellij-idea&logoColor=white","https://img.shields.io/badge/VIM-%2311AB00.svg?style=for-the-badge&logo=vim&logoColor=white","https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white","https://img.shields.io/badge/Visual%20Studio-5C2D91.svg?style=for-the-badge&logo=visual-studio&logoColor=white","https://img.shields.io/badge/firebase-a08021?style=for-the-badge&logo=firebase&logoColor=ffcd34","https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white","https://img.shields.io/badge/mysql-4479A1.svg?style=for-the-badge&logo=mysql&logoColor=white","https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white","https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white","https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white","https://img.shields.io/badge/Reddit-%23FF4500.svg?style=for-the-badge&logo=Reddit&logoColor=white","https://img.shields.io/badge/-Stackoverflow-FE7A16?style=for-the-badge&logo=stack-overflow&logoColor=white","https://img.shields.io/badge/LeetCode-000000?style=for-the-badge&logo=LeetCode&logoColor=#d16c06","https://img.shields.io/badge/Udemy-A435F0?style=for-the-badge&logo=Udemy&logoColor=white"],u=[...n,...i,...l,...o];return U.jsxs("div",{children:[U.jsx("h3",{children:"Me In Badge"}),U.jsx("div",{className:"badges",children:u.map((d,f)=>U.jsx("img",{src:d,alt:"badge"},f))})]})}function m7(){return U.jsxs("div",{className:"forth-page",children:[U.jsx("img",{src:"https://nirzak-streak-stats.vercel.app/?user=yacine-bek&theme=dark&hide_border=false",alt:"",style:{width:"100%",maxWidth:600}}),U.jsx("img",{src:"https://github-readme-stats.vercel.app/api/top-langs/?username=yacine-bek&layout=compact&theme=dark",alt:"Top Languages",style:{width:"100%",maxWidth:400}}),U.jsx(h7,{})]})}function p7(){return U.jsxs("div",{className:"fifth-page",children:[U.jsxs("div",{className:"git-section",children:[U.jsx("p",{children:"Like my work?"}),U.jsxs("a",{href:"https://github.com/yacine-bek",target:"_blank",children:[U.jsx("p",{children:"Follow me on"}),U.jsx(Qv,{size:36,color:"hsl(0, 0%, 80%)"})]})]}),U.jsx("div",{className:"devider"}),U.jsxs("a",{className:"discord-section",href:"https://discord.gg/6C8e3HBVJt",target:"_blank",children:[U.jsx(Zv,{size:36}),"Join us on Discord"]}),U.jsx("p",{className:"powered",children:"Made & Powered by ME"})]})}async function g7(n){const o=await(await fetch(`https://api.github.com/users/${n}`)).json(),u=await(await fetch(`https://api.github.com/users/${n}/repos`)).json(),d=["Calculator","achievement-folia","Agence-Immobiliere","JavaFx-Game","Nike-App","WampServer"],f=u.filter(h=>d.includes(h.name)).reduce((h,m)=>(h[m.name]={description:m.description,url:m.html_url,language:m.language,stars:m.stargazers_count},h),{});return{name:o.name,bio:o.bio,avatar:o.avatar_url,followers:o.followers,repoCount:o.public_repos,repos:f}}function v7(){const[n,i]=et.useState(null);return et.useEffect(()=>{g7("yacine-bek").then(i)},[]),U.jsxs(U.Fragment,{children:[U.jsx(bA,{}),n?U.jsx(e7,{repos:n.repos}):U.jsxs("div",{className:"loading-screen",children:[U.jsx("h3",{children:"Projects Loading.."}),U.jsx(C5,{color:"#f5ecdc",size:"medium",text:"",textColor:""})]}),U.jsx(d7,{user:n}),U.jsx(m7,{}),U.jsx(p7,{})]})}u5.createRoot(document.getElementById("root")).render(U.jsx(et.StrictMode,{children:U.jsx(v7,{})}));
