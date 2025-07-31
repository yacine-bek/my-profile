(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))u(f);new MutationObserver(f=>{for(const h of f)if(h.type==="childList")for(const m of h.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&u(m)}).observe(document,{childList:!0,subtree:!0});function c(f){const h={};return f.integrity&&(h.integrity=f.integrity),f.referrerPolicy&&(h.referrerPolicy=f.referrerPolicy),f.crossOrigin==="use-credentials"?h.credentials="include":f.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function u(f){if(f.ep)return;f.ep=!0;const h=c(f);fetch(f.href,h)}})();function I0(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var uc={exports:{}},Il={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fh;function jv(){if(Fh)return Il;Fh=1;var r=Symbol.for("react.transitional.element"),o=Symbol.for("react.fragment");function c(u,f,h){var m=null;if(h!==void 0&&(m=""+h),f.key!==void 0&&(m=""+f.key),"key"in f){h={};for(var x in f)x!=="key"&&(h[x]=f[x])}else h=f;return f=h.ref,{$$typeof:r,type:u,key:m,ref:f!==void 0?f:null,props:h}}return Il.Fragment=o,Il.jsx=c,Il.jsxs=c,Il}var Wh;function Rv(){return Wh||(Wh=1,uc.exports=jv()),uc.exports}var C=Rv(),cc={exports:{}},et={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ih;function Uv(){if(Ih)return et;Ih=1;var r=Symbol.for("react.transitional.element"),o=Symbol.for("react.portal"),c=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),h=Symbol.for("react.consumer"),m=Symbol.for("react.context"),x=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),v=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),N=Symbol.iterator;function R(p){return p===null||typeof p!="object"?null:(p=N&&p[N]||p["@@iterator"],typeof p=="function"?p:null)}var B={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},H=Object.assign,D={};function L(p,j,X){this.props=p,this.context=j,this.refs=D,this.updater=X||B}L.prototype.isReactComponent={},L.prototype.setState=function(p,j){if(typeof p!="object"&&typeof p!="function"&&p!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,p,j,"setState")},L.prototype.forceUpdate=function(p){this.updater.enqueueForceUpdate(this,p,"forceUpdate")};function I(){}I.prototype=L.prototype;function nt(p,j,X){this.props=p,this.context=j,this.refs=D,this.updater=X||B}var tt=nt.prototype=new I;tt.constructor=nt,H(tt,L.prototype),tt.isPureReactComponent=!0;var gt=Array.isArray,P={H:null,A:null,T:null,S:null,V:null},vt=Object.prototype.hasOwnProperty;function Tt(p,j,X,q,K,ft){return X=ft.ref,{$$typeof:r,type:p,key:j,ref:X!==void 0?X:null,props:ft}}function pt(p,j){return Tt(p.type,j,void 0,void 0,void 0,p.props)}function zt(p){return typeof p=="object"&&p!==null&&p.$$typeof===r}function fn(p){var j={"=":"=0",":":"=2"};return"$"+p.replace(/[=:]/g,function(X){return j[X]})}var Qa=/\/+/g;function $t(p,j){return typeof p=="object"&&p!==null&&p.key!=null?fn(""+p.key):j.toString(36)}function Le(){}function Xe(p){switch(p.status){case"fulfilled":return p.value;case"rejected":throw p.reason;default:switch(typeof p.status=="string"?p.then(Le,Le):(p.status="pending",p.then(function(j){p.status==="pending"&&(p.status="fulfilled",p.value=j)},function(j){p.status==="pending"&&(p.status="rejected",p.reason=j)})),p.status){case"fulfilled":return p.value;case"rejected":throw p.reason}}throw p}function Jt(p,j,X,q,K){var ft=typeof p;(ft==="undefined"||ft==="boolean")&&(p=null);var at=!1;if(p===null)at=!0;else switch(ft){case"bigint":case"string":case"number":at=!0;break;case"object":switch(p.$$typeof){case r:case o:at=!0;break;case _:return at=p._init,Jt(at(p._payload),j,X,q,K)}}if(at)return K=K(p),at=q===""?"."+$t(p,0):q,gt(K)?(X="",at!=null&&(X=at.replace(Qa,"$&/")+"/"),Jt(K,j,X,"",function(fe){return fe})):K!=null&&(zt(K)&&(K=pt(K,X+(K.key==null||p&&p.key===K.key?"":(""+K.key).replace(Qa,"$&/")+"/")+at)),j.push(K)),1;at=0;var oa=q===""?".":q+":";if(gt(p))for(var kt=0;kt<p.length;kt++)q=p[kt],ft=oa+$t(q,kt),at+=Jt(q,j,X,ft,K);else if(kt=R(p),typeof kt=="function")for(p=kt.call(p),kt=0;!(q=p.next()).done;)q=q.value,ft=oa+$t(q,kt++),at+=Jt(q,j,X,ft,K);else if(ft==="object"){if(typeof p.then=="function")return Jt(Xe(p),j,X,q,K);throw j=String(p),Error("Objects are not valid as a React child (found: "+(j==="[object Object]"?"object with keys {"+Object.keys(p).join(", ")+"}":j)+"). If you meant to render a collection of children, use an array instead.")}return at}function k(p,j,X){if(p==null)return p;var q=[],K=0;return Jt(p,q,"","",function(ft){return j.call(X,ft,K++)}),q}function Y(p){if(p._status===-1){var j=p._result;j=j(),j.then(function(X){(p._status===0||p._status===-1)&&(p._status=1,p._result=X)},function(X){(p._status===0||p._status===-1)&&(p._status=2,p._result=X)}),p._status===-1&&(p._status=0,p._result=j)}if(p._status===1)return p._result.default;throw p._result}var F=typeof reportError=="function"?reportError:function(p){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var j=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof p=="object"&&p!==null&&typeof p.message=="string"?String(p.message):String(p),error:p});if(!window.dispatchEvent(j))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",p);return}console.error(p)};function Ot(){}return et.Children={map:k,forEach:function(p,j,X){k(p,function(){j.apply(this,arguments)},X)},count:function(p){var j=0;return k(p,function(){j++}),j},toArray:function(p){return k(p,function(j){return j})||[]},only:function(p){if(!zt(p))throw Error("React.Children.only expected to receive a single React element child.");return p}},et.Component=L,et.Fragment=c,et.Profiler=f,et.PureComponent=nt,et.StrictMode=u,et.Suspense=g,et.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P,et.__COMPILER_RUNTIME={__proto__:null,c:function(p){return P.H.useMemoCache(p)}},et.cache=function(p){return function(){return p.apply(null,arguments)}},et.cloneElement=function(p,j,X){if(p==null)throw Error("The argument must be a React element, but you passed "+p+".");var q=H({},p.props),K=p.key,ft=void 0;if(j!=null)for(at in j.ref!==void 0&&(ft=void 0),j.key!==void 0&&(K=""+j.key),j)!vt.call(j,at)||at==="key"||at==="__self"||at==="__source"||at==="ref"&&j.ref===void 0||(q[at]=j[at]);var at=arguments.length-2;if(at===1)q.children=X;else if(1<at){for(var oa=Array(at),kt=0;kt<at;kt++)oa[kt]=arguments[kt+2];q.children=oa}return Tt(p.type,K,void 0,void 0,ft,q)},et.createContext=function(p){return p={$$typeof:m,_currentValue:p,_currentValue2:p,_threadCount:0,Provider:null,Consumer:null},p.Provider=p,p.Consumer={$$typeof:h,_context:p},p},et.createElement=function(p,j,X){var q,K={},ft=null;if(j!=null)for(q in j.key!==void 0&&(ft=""+j.key),j)vt.call(j,q)&&q!=="key"&&q!=="__self"&&q!=="__source"&&(K[q]=j[q]);var at=arguments.length-2;if(at===1)K.children=X;else if(1<at){for(var oa=Array(at),kt=0;kt<at;kt++)oa[kt]=arguments[kt+2];K.children=oa}if(p&&p.defaultProps)for(q in at=p.defaultProps,at)K[q]===void 0&&(K[q]=at[q]);return Tt(p,ft,void 0,void 0,null,K)},et.createRef=function(){return{current:null}},et.forwardRef=function(p){return{$$typeof:x,render:p}},et.isValidElement=zt,et.lazy=function(p){return{$$typeof:_,_payload:{_status:-1,_result:p},_init:Y}},et.memo=function(p,j){return{$$typeof:v,type:p,compare:j===void 0?null:j}},et.startTransition=function(p){var j=P.T,X={};P.T=X;try{var q=p(),K=P.S;K!==null&&K(X,q),typeof q=="object"&&q!==null&&typeof q.then=="function"&&q.then(Ot,F)}catch(ft){F(ft)}finally{P.T=j}},et.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()},et.use=function(p){return P.H.use(p)},et.useActionState=function(p,j,X){return P.H.useActionState(p,j,X)},et.useCallback=function(p,j){return P.H.useCallback(p,j)},et.useContext=function(p){return P.H.useContext(p)},et.useDebugValue=function(){},et.useDeferredValue=function(p,j){return P.H.useDeferredValue(p,j)},et.useEffect=function(p,j,X){var q=P.H;if(typeof X=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return q.useEffect(p,j)},et.useId=function(){return P.H.useId()},et.useImperativeHandle=function(p,j,X){return P.H.useImperativeHandle(p,j,X)},et.useInsertionEffect=function(p,j){return P.H.useInsertionEffect(p,j)},et.useLayoutEffect=function(p,j){return P.H.useLayoutEffect(p,j)},et.useMemo=function(p,j){return P.H.useMemo(p,j)},et.useOptimistic=function(p,j){return P.H.useOptimistic(p,j)},et.useReducer=function(p,j,X){return P.H.useReducer(p,j,X)},et.useRef=function(p){return P.H.useRef(p)},et.useState=function(p){return P.H.useState(p)},et.useSyncExternalStore=function(p,j,X){return P.H.useSyncExternalStore(p,j,X)},et.useTransition=function(){return P.H.useTransition()},et.version="19.1.0",et}var t0;function Zc(){return t0||(t0=1,cc.exports=Uv()),cc.exports}var oe=Zc();const Zt=I0(oe);var sc={exports:{}},tr={},fc={exports:{}},dc={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a0;function Hv(){return a0||(a0=1,function(r){function o(k,Y){var F=k.length;k.push(Y);t:for(;0<F;){var Ot=F-1>>>1,p=k[Ot];if(0<f(p,Y))k[Ot]=Y,k[F]=p,F=Ot;else break t}}function c(k){return k.length===0?null:k[0]}function u(k){if(k.length===0)return null;var Y=k[0],F=k.pop();if(F!==Y){k[0]=F;t:for(var Ot=0,p=k.length,j=p>>>1;Ot<j;){var X=2*(Ot+1)-1,q=k[X],K=X+1,ft=k[K];if(0>f(q,F))K<p&&0>f(ft,q)?(k[Ot]=ft,k[K]=F,Ot=K):(k[Ot]=q,k[X]=F,Ot=X);else if(K<p&&0>f(ft,F))k[Ot]=ft,k[K]=F,Ot=K;else break t}}return Y}function f(k,Y){var F=k.sortIndex-Y.sortIndex;return F!==0?F:k.id-Y.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var h=performance;r.unstable_now=function(){return h.now()}}else{var m=Date,x=m.now();r.unstable_now=function(){return m.now()-x}}var g=[],v=[],_=1,N=null,R=3,B=!1,H=!1,D=!1,L=!1,I=typeof setTimeout=="function"?setTimeout:null,nt=typeof clearTimeout=="function"?clearTimeout:null,tt=typeof setImmediate<"u"?setImmediate:null;function gt(k){for(var Y=c(v);Y!==null;){if(Y.callback===null)u(v);else if(Y.startTime<=k)u(v),Y.sortIndex=Y.expirationTime,o(g,Y);else break;Y=c(v)}}function P(k){if(D=!1,gt(k),!H)if(c(g)!==null)H=!0,vt||(vt=!0,$t());else{var Y=c(v);Y!==null&&Jt(P,Y.startTime-k)}}var vt=!1,Tt=-1,pt=5,zt=-1;function fn(){return L?!0:!(r.unstable_now()-zt<pt)}function Qa(){if(L=!1,vt){var k=r.unstable_now();zt=k;var Y=!0;try{t:{H=!1,D&&(D=!1,nt(Tt),Tt=-1),B=!0;var F=R;try{a:{for(gt(k),N=c(g);N!==null&&!(N.expirationTime>k&&fn());){var Ot=N.callback;if(typeof Ot=="function"){N.callback=null,R=N.priorityLevel;var p=Ot(N.expirationTime<=k);if(k=r.unstable_now(),typeof p=="function"){N.callback=p,gt(k),Y=!0;break a}N===c(g)&&u(g),gt(k)}else u(g);N=c(g)}if(N!==null)Y=!0;else{var j=c(v);j!==null&&Jt(P,j.startTime-k),Y=!1}}break t}finally{N=null,R=F,B=!1}Y=void 0}}finally{Y?$t():vt=!1}}}var $t;if(typeof tt=="function")$t=function(){tt(Qa)};else if(typeof MessageChannel<"u"){var Le=new MessageChannel,Xe=Le.port2;Le.port1.onmessage=Qa,$t=function(){Xe.postMessage(null)}}else $t=function(){I(Qa,0)};function Jt(k,Y){Tt=I(function(){k(r.unstable_now())},Y)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(k){k.callback=null},r.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):pt=0<k?Math.floor(1e3/k):5},r.unstable_getCurrentPriorityLevel=function(){return R},r.unstable_next=function(k){switch(R){case 1:case 2:case 3:var Y=3;break;default:Y=R}var F=R;R=Y;try{return k()}finally{R=F}},r.unstable_requestPaint=function(){L=!0},r.unstable_runWithPriority=function(k,Y){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var F=R;R=k;try{return Y()}finally{R=F}},r.unstable_scheduleCallback=function(k,Y,F){var Ot=r.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?Ot+F:Ot):F=Ot,k){case 1:var p=-1;break;case 2:p=250;break;case 5:p=1073741823;break;case 4:p=1e4;break;default:p=5e3}return p=F+p,k={id:_++,callback:Y,priorityLevel:k,startTime:F,expirationTime:p,sortIndex:-1},F>Ot?(k.sortIndex=F,o(v,k),c(g)===null&&k===c(v)&&(D?(nt(Tt),Tt=-1):D=!0,Jt(P,F-Ot))):(k.sortIndex=p,o(g,k),H||B||(H=!0,vt||(vt=!0,$t()))),k},r.unstable_shouldYield=fn,r.unstable_wrapCallback=function(k){var Y=R;return function(){var F=R;R=Y;try{return k.apply(this,arguments)}finally{R=F}}}}(dc)),dc}var e0;function qv(){return e0||(e0=1,fc.exports=Hv()),fc.exports}var hc={exports:{}},It={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n0;function Yv(){if(n0)return It;n0=1;var r=Zc();function o(g){var v="https://react.dev/errors/"+g;if(1<arguments.length){v+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)v+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+g+"; visit "+v+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(){}var u={d:{f:c,r:function(){throw Error(o(522))},D:c,C:c,L:c,m:c,X:c,S:c,M:c},p:0,findDOMNode:null},f=Symbol.for("react.portal");function h(g,v,_){var N=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:f,key:N==null?null:""+N,children:g,containerInfo:v,implementation:_}}var m=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function x(g,v){if(g==="font")return"";if(typeof v=="string")return v==="use-credentials"?v:""}return It.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=u,It.createPortal=function(g,v){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!v||v.nodeType!==1&&v.nodeType!==9&&v.nodeType!==11)throw Error(o(299));return h(g,v,null,_)},It.flushSync=function(g){var v=m.T,_=u.p;try{if(m.T=null,u.p=2,g)return g()}finally{m.T=v,u.p=_,u.d.f()}},It.preconnect=function(g,v){typeof g=="string"&&(v?(v=v.crossOrigin,v=typeof v=="string"?v==="use-credentials"?v:"":void 0):v=null,u.d.C(g,v))},It.prefetchDNS=function(g){typeof g=="string"&&u.d.D(g)},It.preinit=function(g,v){if(typeof g=="string"&&v&&typeof v.as=="string"){var _=v.as,N=x(_,v.crossOrigin),R=typeof v.integrity=="string"?v.integrity:void 0,B=typeof v.fetchPriority=="string"?v.fetchPriority:void 0;_==="style"?u.d.S(g,typeof v.precedence=="string"?v.precedence:void 0,{crossOrigin:N,integrity:R,fetchPriority:B}):_==="script"&&u.d.X(g,{crossOrigin:N,integrity:R,fetchPriority:B,nonce:typeof v.nonce=="string"?v.nonce:void 0})}},It.preinitModule=function(g,v){if(typeof g=="string")if(typeof v=="object"&&v!==null){if(v.as==null||v.as==="script"){var _=x(v.as,v.crossOrigin);u.d.M(g,{crossOrigin:_,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0})}}else v==null&&u.d.M(g)},It.preload=function(g,v){if(typeof g=="string"&&typeof v=="object"&&v!==null&&typeof v.as=="string"){var _=v.as,N=x(_,v.crossOrigin);u.d.L(g,_,{crossOrigin:N,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0,type:typeof v.type=="string"?v.type:void 0,fetchPriority:typeof v.fetchPriority=="string"?v.fetchPriority:void 0,referrerPolicy:typeof v.referrerPolicy=="string"?v.referrerPolicy:void 0,imageSrcSet:typeof v.imageSrcSet=="string"?v.imageSrcSet:void 0,imageSizes:typeof v.imageSizes=="string"?v.imageSizes:void 0,media:typeof v.media=="string"?v.media:void 0})}},It.preloadModule=function(g,v){if(typeof g=="string")if(v){var _=x(v.as,v.crossOrigin);u.d.m(g,{as:typeof v.as=="string"&&v.as!=="script"?v.as:void 0,crossOrigin:_,integrity:typeof v.integrity=="string"?v.integrity:void 0})}else u.d.m(g)},It.requestFormReset=function(g){u.d.r(g)},It.unstable_batchedUpdates=function(g,v){return g(v)},It.useFormState=function(g,v,_){return m.H.useFormState(g,v,_)},It.useFormStatus=function(){return m.H.useHostTransitionStatus()},It.version="19.1.0",It}var l0;function Bv(){if(l0)return hc.exports;l0=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(o){console.error(o)}}return r(),hc.exports=Yv(),hc.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r0;function Lv(){if(r0)return tr;r0=1;var r=qv(),o=Zc(),c=Bv();function u(t){var a="https://react.dev/errors/"+t;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var e=2;e<arguments.length;e++)a+="&args[]="+encodeURIComponent(arguments[e])}return"Minified React error #"+t+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function h(t){var a=t,e=t;if(t.alternate)for(;a.return;)a=a.return;else{t=a;do a=t,(a.flags&4098)!==0&&(e=a.return),t=a.return;while(t)}return a.tag===3?e:null}function m(t){if(t.tag===13){var a=t.memoizedState;if(a===null&&(t=t.alternate,t!==null&&(a=t.memoizedState)),a!==null)return a.dehydrated}return null}function x(t){if(h(t)!==t)throw Error(u(188))}function g(t){var a=t.alternate;if(!a){if(a=h(t),a===null)throw Error(u(188));return a!==t?null:t}for(var e=t,n=a;;){var l=e.return;if(l===null)break;var i=l.alternate;if(i===null){if(n=l.return,n!==null){e=n;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===e)return x(l),t;if(i===n)return x(l),a;i=i.sibling}throw Error(u(188))}if(e.return!==n.return)e=l,n=i;else{for(var s=!1,d=l.child;d;){if(d===e){s=!0,e=l,n=i;break}if(d===n){s=!0,n=l,e=i;break}d=d.sibling}if(!s){for(d=i.child;d;){if(d===e){s=!0,e=i,n=l;break}if(d===n){s=!0,n=i,e=l;break}d=d.sibling}if(!s)throw Error(u(189))}}if(e.alternate!==n)throw Error(u(190))}if(e.tag!==3)throw Error(u(188));return e.stateNode.current===e?t:a}function v(t){var a=t.tag;if(a===5||a===26||a===27||a===6)return t;for(t=t.child;t!==null;){if(a=v(t),a!==null)return a;t=t.sibling}return null}var _=Object.assign,N=Symbol.for("react.element"),R=Symbol.for("react.transitional.element"),B=Symbol.for("react.portal"),H=Symbol.for("react.fragment"),D=Symbol.for("react.strict_mode"),L=Symbol.for("react.profiler"),I=Symbol.for("react.provider"),nt=Symbol.for("react.consumer"),tt=Symbol.for("react.context"),gt=Symbol.for("react.forward_ref"),P=Symbol.for("react.suspense"),vt=Symbol.for("react.suspense_list"),Tt=Symbol.for("react.memo"),pt=Symbol.for("react.lazy"),zt=Symbol.for("react.activity"),fn=Symbol.for("react.memo_cache_sentinel"),Qa=Symbol.iterator;function $t(t){return t===null||typeof t!="object"?null:(t=Qa&&t[Qa]||t["@@iterator"],typeof t=="function"?t:null)}var Le=Symbol.for("react.client.reference");function Xe(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===Le?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case H:return"Fragment";case L:return"Profiler";case D:return"StrictMode";case P:return"Suspense";case vt:return"SuspenseList";case zt:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case B:return"Portal";case tt:return(t.displayName||"Context")+".Provider";case nt:return(t._context.displayName||"Context")+".Consumer";case gt:var a=t.render;return t=t.displayName,t||(t=a.displayName||a.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Tt:return a=t.displayName||null,a!==null?a:Xe(t.type)||"Memo";case pt:a=t._payload,t=t._init;try{return Xe(t(a))}catch{}}return null}var Jt=Array.isArray,k=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y=c.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F={pending:!1,data:null,method:null,action:null},Ot=[],p=-1;function j(t){return{current:t}}function X(t){0>p||(t.current=Ot[p],Ot[p]=null,p--)}function q(t,a){p++,Ot[p]=t.current,t.current=a}var K=j(null),ft=j(null),at=j(null),oa=j(null);function kt(t,a){switch(q(at,a),q(ft,t),q(K,null),a.nodeType){case 9:case 11:t=(t=a.documentElement)&&(t=t.namespaceURI)?Eh(t):0;break;default:if(t=a.tagName,a=a.namespaceURI)a=Eh(a),t=_h(a,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}X(K),q(K,t)}function fe(){X(K),X(ft),X(at)}function Vi(t){t.memoizedState!==null&&q(oa,t);var a=K.current,e=_h(a,t.type);a!==e&&(q(ft,t),q(K,e))}function sr(t){ft.current===t&&(X(K),X(ft)),oa.current===t&&(X(oa),Kl._currentValue=F)}var Pi=Object.prototype.hasOwnProperty,Ki=r.unstable_scheduleCallback,$i=r.unstable_cancelCallback,db=r.unstable_shouldYield,hb=r.unstable_requestPaint,Ra=r.unstable_now,mb=r.unstable_getCurrentPriorityLevel,ls=r.unstable_ImmediatePriority,rs=r.unstable_UserBlockingPriority,fr=r.unstable_NormalPriority,bb=r.unstable_LowPriority,is=r.unstable_IdlePriority,gb=r.log,vb=r.unstable_setDisableYieldValue,el=null,ua=null;function de(t){if(typeof gb=="function"&&vb(t),ua&&typeof ua.setStrictMode=="function")try{ua.setStrictMode(el,t)}catch{}}var ca=Math.clz32?Math.clz32:xb,pb=Math.log,yb=Math.LN2;function xb(t){return t>>>=0,t===0?32:31-(pb(t)/yb|0)|0}var dr=256,hr=4194304;function Ge(t){var a=t&42;if(a!==0)return a;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function mr(t,a,e){var n=t.pendingLanes;if(n===0)return 0;var l=0,i=t.suspendedLanes,s=t.pingedLanes;t=t.warmLanes;var d=n&134217727;return d!==0?(n=d&~i,n!==0?l=Ge(n):(s&=d,s!==0?l=Ge(s):e||(e=d&~t,e!==0&&(l=Ge(e))))):(d=n&~i,d!==0?l=Ge(d):s!==0?l=Ge(s):e||(e=n&~t,e!==0&&(l=Ge(e)))),l===0?0:a!==0&&a!==l&&(a&i)===0&&(i=l&-l,e=a&-a,i>=e||i===32&&(e&4194048)!==0)?a:l}function nl(t,a){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&a)===0}function Sb(t,a){switch(t){case 1:case 2:case 4:case 8:case 64:return a+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function os(){var t=dr;return dr<<=1,(dr&4194048)===0&&(dr=256),t}function us(){var t=hr;return hr<<=1,(hr&62914560)===0&&(hr=4194304),t}function Ji(t){for(var a=[],e=0;31>e;e++)a.push(t);return a}function ll(t,a){t.pendingLanes|=a,a!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Ob(t,a,e,n,l,i){var s=t.pendingLanes;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=e,t.entangledLanes&=e,t.errorRecoveryDisabledLanes&=e,t.shellSuspendCounter=0;var d=t.entanglements,b=t.expirationTimes,A=t.hiddenUpdates;for(e=s&~e;0<e;){var z=31-ca(e),w=1<<z;d[z]=0,b[z]=-1;var T=A[z];if(T!==null)for(A[z]=null,z=0;z<T.length;z++){var E=T[z];E!==null&&(E.lane&=-536870913)}e&=~w}n!==0&&cs(t,n,0),i!==0&&l===0&&t.tag!==0&&(t.suspendedLanes|=i&~(s&~a))}function cs(t,a,e){t.pendingLanes|=a,t.suspendedLanes&=~a;var n=31-ca(a);t.entangledLanes|=a,t.entanglements[n]=t.entanglements[n]|1073741824|e&4194090}function ss(t,a){var e=t.entangledLanes|=a;for(t=t.entanglements;e;){var n=31-ca(e),l=1<<n;l&a|t[n]&a&&(t[n]|=a),e&=~l}}function Fi(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Wi(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function fs(){var t=Y.p;return t!==0?t:(t=window.event,t===void 0?32:Zh(t.type))}function Ab(t,a){var e=Y.p;try{return Y.p=t,a()}finally{Y.p=e}}var he=Math.random().toString(36).slice(2),Ft="__reactFiber$"+he,ea="__reactProps$"+he,dn="__reactContainer$"+he,Ii="__reactEvents$"+he,Tb="__reactListeners$"+he,Eb="__reactHandles$"+he,ds="__reactResources$"+he,rl="__reactMarker$"+he;function to(t){delete t[Ft],delete t[ea],delete t[Ii],delete t[Tb],delete t[Eb]}function hn(t){var a=t[Ft];if(a)return a;for(var e=t.parentNode;e;){if(a=e[dn]||e[Ft]){if(e=a.alternate,a.child!==null||e!==null&&e.child!==null)for(t=Dh(t);t!==null;){if(e=t[Ft])return e;t=Dh(t)}return a}t=e,e=t.parentNode}return null}function mn(t){if(t=t[Ft]||t[dn]){var a=t.tag;if(a===5||a===6||a===13||a===26||a===27||a===3)return t}return null}function il(t){var a=t.tag;if(a===5||a===26||a===27||a===6)return t.stateNode;throw Error(u(33))}function bn(t){var a=t[ds];return a||(a=t[ds]={hoistableStyles:new Map,hoistableScripts:new Map}),a}function Lt(t){t[rl]=!0}var hs=new Set,ms={};function Qe(t,a){gn(t,a),gn(t+"Capture",a)}function gn(t,a){for(ms[t]=a,t=0;t<a.length;t++)hs.add(a[t])}var _b=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),bs={},gs={};function zb(t){return Pi.call(gs,t)?!0:Pi.call(bs,t)?!1:_b.test(t)?gs[t]=!0:(bs[t]=!0,!1)}function br(t,a,e){if(zb(a))if(e===null)t.removeAttribute(a);else{switch(typeof e){case"undefined":case"function":case"symbol":t.removeAttribute(a);return;case"boolean":var n=a.toLowerCase().slice(0,5);if(n!=="data-"&&n!=="aria-"){t.removeAttribute(a);return}}t.setAttribute(a,""+e)}}function gr(t,a,e){if(e===null)t.removeAttribute(a);else{switch(typeof e){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttribute(a,""+e)}}function Za(t,a,e,n){if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttributeNS(a,e,""+n)}}var ao,vs;function vn(t){if(ao===void 0)try{throw Error()}catch(e){var a=e.stack.trim().match(/\n( *(at )?)/);ao=a&&a[1]||"",vs=-1<e.stack.indexOf(`
    at`)?" (<anonymous>)":-1<e.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ao+t+vs}var eo=!1;function no(t,a){if(!t||eo)return"";eo=!0;var e=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(a){var w=function(){throw Error()};if(Object.defineProperty(w.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(w,[])}catch(E){var T=E}Reflect.construct(t,[],w)}else{try{w.call()}catch(E){T=E}t.call(w.prototype)}}else{try{throw Error()}catch(E){T=E}(w=t())&&typeof w.catch=="function"&&w.catch(function(){})}}catch(E){if(E&&T&&typeof E.stack=="string")return[E.stack,T.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=n.DetermineComponentFrameRoot(),s=i[0],d=i[1];if(s&&d){var b=s.split(`
`),A=d.split(`
`);for(l=n=0;n<b.length&&!b[n].includes("DetermineComponentFrameRoot");)n++;for(;l<A.length&&!A[l].includes("DetermineComponentFrameRoot");)l++;if(n===b.length||l===A.length)for(n=b.length-1,l=A.length-1;1<=n&&0<=l&&b[n]!==A[l];)l--;for(;1<=n&&0<=l;n--,l--)if(b[n]!==A[l]){if(n!==1||l!==1)do if(n--,l--,0>l||b[n]!==A[l]){var z=`
`+b[n].replace(" at new "," at ");return t.displayName&&z.includes("<anonymous>")&&(z=z.replace("<anonymous>",t.displayName)),z}while(1<=n&&0<=l);break}}}finally{eo=!1,Error.prepareStackTrace=e}return(e=t?t.displayName||t.name:"")?vn(e):""}function kb(t){switch(t.tag){case 26:case 27:case 5:return vn(t.type);case 16:return vn("Lazy");case 13:return vn("Suspense");case 19:return vn("SuspenseList");case 0:case 15:return no(t.type,!1);case 11:return no(t.type.render,!1);case 1:return no(t.type,!0);case 31:return vn("Activity");default:return""}}function ps(t){try{var a="";do a+=kb(t),t=t.return;while(t);return a}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}function ya(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ys(t){var a=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function Mb(t){var a=ys(t)?"checked":"value",e=Object.getOwnPropertyDescriptor(t.constructor.prototype,a),n=""+t[a];if(!t.hasOwnProperty(a)&&typeof e<"u"&&typeof e.get=="function"&&typeof e.set=="function"){var l=e.get,i=e.set;return Object.defineProperty(t,a,{configurable:!0,get:function(){return l.call(this)},set:function(s){n=""+s,i.call(this,s)}}),Object.defineProperty(t,a,{enumerable:e.enumerable}),{getValue:function(){return n},setValue:function(s){n=""+s},stopTracking:function(){t._valueTracker=null,delete t[a]}}}}function vr(t){t._valueTracker||(t._valueTracker=Mb(t))}function xs(t){if(!t)return!1;var a=t._valueTracker;if(!a)return!0;var e=a.getValue(),n="";return t&&(n=ys(t)?t.checked?"true":"false":t.value),t=n,t!==e?(a.setValue(t),!0):!1}function pr(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Db=/[\n"\\]/g;function xa(t){return t.replace(Db,function(a){return"\\"+a.charCodeAt(0).toString(16)+" "})}function lo(t,a,e,n,l,i,s,d){t.name="",s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?t.type=s:t.removeAttribute("type"),a!=null?s==="number"?(a===0&&t.value===""||t.value!=a)&&(t.value=""+ya(a)):t.value!==""+ya(a)&&(t.value=""+ya(a)):s!=="submit"&&s!=="reset"||t.removeAttribute("value"),a!=null?ro(t,s,ya(a)):e!=null?ro(t,s,ya(e)):n!=null&&t.removeAttribute("value"),l==null&&i!=null&&(t.defaultChecked=!!i),l!=null&&(t.checked=l&&typeof l!="function"&&typeof l!="symbol"),d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"?t.name=""+ya(d):t.removeAttribute("name")}function Ss(t,a,e,n,l,i,s,d){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(t.type=i),a!=null||e!=null){if(!(i!=="submit"&&i!=="reset"||a!=null))return;e=e!=null?""+ya(e):"",a=a!=null?""+ya(a):e,d||a===t.value||(t.value=a),t.defaultValue=a}n=n??l,n=typeof n!="function"&&typeof n!="symbol"&&!!n,t.checked=d?t.checked:!!n,t.defaultChecked=!!n,s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(t.name=s)}function ro(t,a,e){a==="number"&&pr(t.ownerDocument)===t||t.defaultValue===""+e||(t.defaultValue=""+e)}function pn(t,a,e,n){if(t=t.options,a){a={};for(var l=0;l<e.length;l++)a["$"+e[l]]=!0;for(e=0;e<t.length;e++)l=a.hasOwnProperty("$"+t[e].value),t[e].selected!==l&&(t[e].selected=l),l&&n&&(t[e].defaultSelected=!0)}else{for(e=""+ya(e),a=null,l=0;l<t.length;l++){if(t[l].value===e){t[l].selected=!0,n&&(t[l].defaultSelected=!0);return}a!==null||t[l].disabled||(a=t[l])}a!==null&&(a.selected=!0)}}function Os(t,a,e){if(a!=null&&(a=""+ya(a),a!==t.value&&(t.value=a),e==null)){t.defaultValue!==a&&(t.defaultValue=a);return}t.defaultValue=e!=null?""+ya(e):""}function As(t,a,e,n){if(a==null){if(n!=null){if(e!=null)throw Error(u(92));if(Jt(n)){if(1<n.length)throw Error(u(93));n=n[0]}e=n}e==null&&(e=""),a=e}e=ya(a),t.defaultValue=e,n=t.textContent,n===e&&n!==""&&n!==null&&(t.value=n)}function yn(t,a){if(a){var e=t.firstChild;if(e&&e===t.lastChild&&e.nodeType===3){e.nodeValue=a;return}}t.textContent=a}var wb=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ts(t,a,e){var n=a.indexOf("--")===0;e==null||typeof e=="boolean"||e===""?n?t.setProperty(a,""):a==="float"?t.cssFloat="":t[a]="":n?t.setProperty(a,e):typeof e!="number"||e===0||wb.has(a)?a==="float"?t.cssFloat=e:t[a]=(""+e).trim():t[a]=e+"px"}function Es(t,a,e){if(a!=null&&typeof a!="object")throw Error(u(62));if(t=t.style,e!=null){for(var n in e)!e.hasOwnProperty(n)||a!=null&&a.hasOwnProperty(n)||(n.indexOf("--")===0?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="");for(var l in a)n=a[l],a.hasOwnProperty(l)&&e[l]!==n&&Ts(t,l,n)}else for(var i in a)a.hasOwnProperty(i)&&Ts(t,i,a[i])}function io(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Nb=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Cb=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function yr(t){return Cb.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var oo=null;function uo(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var xn=null,Sn=null;function _s(t){var a=mn(t);if(a&&(t=a.stateNode)){var e=t[ea]||null;t:switch(t=a.stateNode,a.type){case"input":if(lo(t,e.value,e.defaultValue,e.defaultValue,e.checked,e.defaultChecked,e.type,e.name),a=e.name,e.type==="radio"&&a!=null){for(e=t;e.parentNode;)e=e.parentNode;for(e=e.querySelectorAll('input[name="'+xa(""+a)+'"][type="radio"]'),a=0;a<e.length;a++){var n=e[a];if(n!==t&&n.form===t.form){var l=n[ea]||null;if(!l)throw Error(u(90));lo(n,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(a=0;a<e.length;a++)n=e[a],n.form===t.form&&xs(n)}break t;case"textarea":Os(t,e.value,e.defaultValue);break t;case"select":a=e.value,a!=null&&pn(t,!!e.multiple,a,!1)}}}var co=!1;function zs(t,a,e){if(co)return t(a,e);co=!0;try{var n=t(a);return n}finally{if(co=!1,(xn!==null||Sn!==null)&&(li(),xn&&(a=xn,t=Sn,Sn=xn=null,_s(a),t)))for(a=0;a<t.length;a++)_s(t[a])}}function ol(t,a){var e=t.stateNode;if(e===null)return null;var n=e[ea]||null;if(n===null)return null;e=n[a];t:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(t=t.type,n=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!n;break t;default:t=!1}if(t)return null;if(e&&typeof e!="function")throw Error(u(231,a,typeof e));return e}var Va=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),so=!1;if(Va)try{var ul={};Object.defineProperty(ul,"passive",{get:function(){so=!0}}),window.addEventListener("test",ul,ul),window.removeEventListener("test",ul,ul)}catch{so=!1}var me=null,fo=null,xr=null;function ks(){if(xr)return xr;var t,a=fo,e=a.length,n,l="value"in me?me.value:me.textContent,i=l.length;for(t=0;t<e&&a[t]===l[t];t++);var s=e-t;for(n=1;n<=s&&a[e-n]===l[i-n];n++);return xr=l.slice(t,1<n?1-n:void 0)}function Sr(t){var a=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&a===13&&(t=13)):t=a,t===10&&(t=13),32<=t||t===13?t:0}function Or(){return!0}function Ms(){return!1}function na(t){function a(e,n,l,i,s){this._reactName=e,this._targetInst=l,this.type=n,this.nativeEvent=i,this.target=s,this.currentTarget=null;for(var d in t)t.hasOwnProperty(d)&&(e=t[d],this[d]=e?e(i):i[d]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Or:Ms,this.isPropagationStopped=Ms,this}return _(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!="unknown"&&(e.returnValue=!1),this.isDefaultPrevented=Or)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!="unknown"&&(e.cancelBubble=!0),this.isPropagationStopped=Or)},persist:function(){},isPersistent:Or}),a}var Ze={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ar=na(Ze),cl=_({},Ze,{view:0,detail:0}),jb=na(cl),ho,mo,sl,Tr=_({},cl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:go,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==sl&&(sl&&t.type==="mousemove"?(ho=t.screenX-sl.screenX,mo=t.screenY-sl.screenY):mo=ho=0,sl=t),ho)},movementY:function(t){return"movementY"in t?t.movementY:mo}}),Ds=na(Tr),Rb=_({},Tr,{dataTransfer:0}),Ub=na(Rb),Hb=_({},cl,{relatedTarget:0}),bo=na(Hb),qb=_({},Ze,{animationName:0,elapsedTime:0,pseudoElement:0}),Yb=na(qb),Bb=_({},Ze,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Lb=na(Bb),Xb=_({},Ze,{data:0}),ws=na(Xb),Gb={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Qb={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Zb={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Vb(t){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(t):(t=Zb[t])?!!a[t]:!1}function go(){return Vb}var Pb=_({},cl,{key:function(t){if(t.key){var a=Gb[t.key]||t.key;if(a!=="Unidentified")return a}return t.type==="keypress"?(t=Sr(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Qb[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:go,charCode:function(t){return t.type==="keypress"?Sr(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Sr(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Kb=na(Pb),$b=_({},Tr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ns=na($b),Jb=_({},cl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:go}),Fb=na(Jb),Wb=_({},Ze,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ib=na(Wb),tg=_({},Tr,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),ag=na(tg),eg=_({},Ze,{newState:0,oldState:0}),ng=na(eg),lg=[9,13,27,32],vo=Va&&"CompositionEvent"in window,fl=null;Va&&"documentMode"in document&&(fl=document.documentMode);var rg=Va&&"TextEvent"in window&&!fl,Cs=Va&&(!vo||fl&&8<fl&&11>=fl),js=" ",Rs=!1;function Us(t,a){switch(t){case"keyup":return lg.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Hs(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var On=!1;function ig(t,a){switch(t){case"compositionend":return Hs(a);case"keypress":return a.which!==32?null:(Rs=!0,js);case"textInput":return t=a.data,t===js&&Rs?null:t;default:return null}}function og(t,a){if(On)return t==="compositionend"||!vo&&Us(t,a)?(t=ks(),xr=fo=me=null,On=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return Cs&&a.locale!=="ko"?null:a.data;default:return null}}var ug={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function qs(t){var a=t&&t.nodeName&&t.nodeName.toLowerCase();return a==="input"?!!ug[t.type]:a==="textarea"}function Ys(t,a,e,n){xn?Sn?Sn.push(n):Sn=[n]:xn=n,a=si(a,"onChange"),0<a.length&&(e=new Ar("onChange","change",null,e,n),t.push({event:e,listeners:a}))}var dl=null,hl=null;function cg(t){xh(t,0)}function Er(t){var a=il(t);if(xs(a))return t}function Bs(t,a){if(t==="change")return a}var Ls=!1;if(Va){var po;if(Va){var yo="oninput"in document;if(!yo){var Xs=document.createElement("div");Xs.setAttribute("oninput","return;"),yo=typeof Xs.oninput=="function"}po=yo}else po=!1;Ls=po&&(!document.documentMode||9<document.documentMode)}function Gs(){dl&&(dl.detachEvent("onpropertychange",Qs),hl=dl=null)}function Qs(t){if(t.propertyName==="value"&&Er(hl)){var a=[];Ys(a,hl,t,uo(t)),zs(cg,a)}}function sg(t,a,e){t==="focusin"?(Gs(),dl=a,hl=e,dl.attachEvent("onpropertychange",Qs)):t==="focusout"&&Gs()}function fg(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Er(hl)}function dg(t,a){if(t==="click")return Er(a)}function hg(t,a){if(t==="input"||t==="change")return Er(a)}function mg(t,a){return t===a&&(t!==0||1/t===1/a)||t!==t&&a!==a}var sa=typeof Object.is=="function"?Object.is:mg;function ml(t,a){if(sa(t,a))return!0;if(typeof t!="object"||t===null||typeof a!="object"||a===null)return!1;var e=Object.keys(t),n=Object.keys(a);if(e.length!==n.length)return!1;for(n=0;n<e.length;n++){var l=e[n];if(!Pi.call(a,l)||!sa(t[l],a[l]))return!1}return!0}function Zs(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Vs(t,a){var e=Zs(t);t=0;for(var n;e;){if(e.nodeType===3){if(n=t+e.textContent.length,t<=a&&n>=a)return{node:e,offset:a-t};t=n}t:{for(;e;){if(e.nextSibling){e=e.nextSibling;break t}e=e.parentNode}e=void 0}e=Zs(e)}}function Ps(t,a){return t&&a?t===a?!0:t&&t.nodeType===3?!1:a&&a.nodeType===3?Ps(t,a.parentNode):"contains"in t?t.contains(a):t.compareDocumentPosition?!!(t.compareDocumentPosition(a)&16):!1:!1}function Ks(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var a=pr(t.document);a instanceof t.HTMLIFrameElement;){try{var e=typeof a.contentWindow.location.href=="string"}catch{e=!1}if(e)t=a.contentWindow;else break;a=pr(t.document)}return a}function xo(t){var a=t&&t.nodeName&&t.nodeName.toLowerCase();return a&&(a==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||a==="textarea"||t.contentEditable==="true")}var bg=Va&&"documentMode"in document&&11>=document.documentMode,An=null,So=null,bl=null,Oo=!1;function $s(t,a,e){var n=e.window===e?e.document:e.nodeType===9?e:e.ownerDocument;Oo||An==null||An!==pr(n)||(n=An,"selectionStart"in n&&xo(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),bl&&ml(bl,n)||(bl=n,n=si(So,"onSelect"),0<n.length&&(a=new Ar("onSelect","select",null,a,e),t.push({event:a,listeners:n}),a.target=An)))}function Ve(t,a){var e={};return e[t.toLowerCase()]=a.toLowerCase(),e["Webkit"+t]="webkit"+a,e["Moz"+t]="moz"+a,e}var Tn={animationend:Ve("Animation","AnimationEnd"),animationiteration:Ve("Animation","AnimationIteration"),animationstart:Ve("Animation","AnimationStart"),transitionrun:Ve("Transition","TransitionRun"),transitionstart:Ve("Transition","TransitionStart"),transitioncancel:Ve("Transition","TransitionCancel"),transitionend:Ve("Transition","TransitionEnd")},Ao={},Js={};Va&&(Js=document.createElement("div").style,"AnimationEvent"in window||(delete Tn.animationend.animation,delete Tn.animationiteration.animation,delete Tn.animationstart.animation),"TransitionEvent"in window||delete Tn.transitionend.transition);function Pe(t){if(Ao[t])return Ao[t];if(!Tn[t])return t;var a=Tn[t],e;for(e in a)if(a.hasOwnProperty(e)&&e in Js)return Ao[t]=a[e];return t}var Fs=Pe("animationend"),Ws=Pe("animationiteration"),Is=Pe("animationstart"),gg=Pe("transitionrun"),vg=Pe("transitionstart"),pg=Pe("transitioncancel"),tf=Pe("transitionend"),af=new Map,To="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");To.push("scrollEnd");function ka(t,a){af.set(t,a),Qe(a,[t])}var ef=new WeakMap;function Sa(t,a){if(typeof t=="object"&&t!==null){var e=ef.get(t);return e!==void 0?e:(a={value:t,source:a,stack:ps(a)},ef.set(t,a),a)}return{value:t,source:a,stack:ps(a)}}var Oa=[],En=0,Eo=0;function _r(){for(var t=En,a=Eo=En=0;a<t;){var e=Oa[a];Oa[a++]=null;var n=Oa[a];Oa[a++]=null;var l=Oa[a];Oa[a++]=null;var i=Oa[a];if(Oa[a++]=null,n!==null&&l!==null){var s=n.pending;s===null?l.next=l:(l.next=s.next,s.next=l),n.pending=l}i!==0&&nf(e,l,i)}}function zr(t,a,e,n){Oa[En++]=t,Oa[En++]=a,Oa[En++]=e,Oa[En++]=n,Eo|=n,t.lanes|=n,t=t.alternate,t!==null&&(t.lanes|=n)}function _o(t,a,e,n){return zr(t,a,e,n),kr(t)}function _n(t,a){return zr(t,null,null,a),kr(t)}function nf(t,a,e){t.lanes|=e;var n=t.alternate;n!==null&&(n.lanes|=e);for(var l=!1,i=t.return;i!==null;)i.childLanes|=e,n=i.alternate,n!==null&&(n.childLanes|=e),i.tag===22&&(t=i.stateNode,t===null||t._visibility&1||(l=!0)),t=i,i=i.return;return t.tag===3?(i=t.stateNode,l&&a!==null&&(l=31-ca(e),t=i.hiddenUpdates,n=t[l],n===null?t[l]=[a]:n.push(a),a.lane=e|536870912),i):null}function kr(t){if(50<Bl)throw Bl=0,Nu=null,Error(u(185));for(var a=t.return;a!==null;)t=a,a=t.return;return t.tag===3?t.stateNode:null}var zn={};function yg(t,a,e,n){this.tag=t,this.key=e,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function fa(t,a,e,n){return new yg(t,a,e,n)}function zo(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Pa(t,a){var e=t.alternate;return e===null?(e=fa(t.tag,a,t.key,t.mode),e.elementType=t.elementType,e.type=t.type,e.stateNode=t.stateNode,e.alternate=t,t.alternate=e):(e.pendingProps=a,e.type=t.type,e.flags=0,e.subtreeFlags=0,e.deletions=null),e.flags=t.flags&65011712,e.childLanes=t.childLanes,e.lanes=t.lanes,e.child=t.child,e.memoizedProps=t.memoizedProps,e.memoizedState=t.memoizedState,e.updateQueue=t.updateQueue,a=t.dependencies,e.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},e.sibling=t.sibling,e.index=t.index,e.ref=t.ref,e.refCleanup=t.refCleanup,e}function lf(t,a){t.flags&=65011714;var e=t.alternate;return e===null?(t.childLanes=0,t.lanes=a,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,t.type=e.type,a=e.dependencies,t.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext}),t}function Mr(t,a,e,n,l,i){var s=0;if(n=t,typeof t=="function")zo(t)&&(s=1);else if(typeof t=="string")s=Sv(t,e,K.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case zt:return t=fa(31,e,a,l),t.elementType=zt,t.lanes=i,t;case H:return Ke(e.children,l,i,a);case D:s=8,l|=24;break;case L:return t=fa(12,e,a,l|2),t.elementType=L,t.lanes=i,t;case P:return t=fa(13,e,a,l),t.elementType=P,t.lanes=i,t;case vt:return t=fa(19,e,a,l),t.elementType=vt,t.lanes=i,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case I:case tt:s=10;break t;case nt:s=9;break t;case gt:s=11;break t;case Tt:s=14;break t;case pt:s=16,n=null;break t}s=29,e=Error(u(130,t===null?"null":typeof t,"")),n=null}return a=fa(s,e,a,l),a.elementType=t,a.type=n,a.lanes=i,a}function Ke(t,a,e,n){return t=fa(7,t,n,a),t.lanes=e,t}function ko(t,a,e){return t=fa(6,t,null,a),t.lanes=e,t}function Mo(t,a,e){return a=fa(4,t.children!==null?t.children:[],t.key,a),a.lanes=e,a.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},a}var kn=[],Mn=0,Dr=null,wr=0,Aa=[],Ta=0,$e=null,Ka=1,$a="";function Je(t,a){kn[Mn++]=wr,kn[Mn++]=Dr,Dr=t,wr=a}function rf(t,a,e){Aa[Ta++]=Ka,Aa[Ta++]=$a,Aa[Ta++]=$e,$e=t;var n=Ka;t=$a;var l=32-ca(n)-1;n&=~(1<<l),e+=1;var i=32-ca(a)+l;if(30<i){var s=l-l%5;i=(n&(1<<s)-1).toString(32),n>>=s,l-=s,Ka=1<<32-ca(a)+l|e<<l|n,$a=i+t}else Ka=1<<i|e<<l|n,$a=t}function Do(t){t.return!==null&&(Je(t,1),rf(t,1,0))}function wo(t){for(;t===Dr;)Dr=kn[--Mn],kn[Mn]=null,wr=kn[--Mn],kn[Mn]=null;for(;t===$e;)$e=Aa[--Ta],Aa[Ta]=null,$a=Aa[--Ta],Aa[Ta]=null,Ka=Aa[--Ta],Aa[Ta]=null}var aa=null,Nt=null,ht=!1,Fe=null,Ua=!1,No=Error(u(519));function We(t){var a=Error(u(418,""));throw pl(Sa(a,t)),No}function of(t){var a=t.stateNode,e=t.type,n=t.memoizedProps;switch(a[Ft]=t,a[ea]=n,e){case"dialog":ut("cancel",a),ut("close",a);break;case"iframe":case"object":case"embed":ut("load",a);break;case"video":case"audio":for(e=0;e<Xl.length;e++)ut(Xl[e],a);break;case"source":ut("error",a);break;case"img":case"image":case"link":ut("error",a),ut("load",a);break;case"details":ut("toggle",a);break;case"input":ut("invalid",a),Ss(a,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0),vr(a);break;case"select":ut("invalid",a);break;case"textarea":ut("invalid",a),As(a,n.value,n.defaultValue,n.children),vr(a)}e=n.children,typeof e!="string"&&typeof e!="number"&&typeof e!="bigint"||a.textContent===""+e||n.suppressHydrationWarning===!0||Th(a.textContent,e)?(n.popover!=null&&(ut("beforetoggle",a),ut("toggle",a)),n.onScroll!=null&&ut("scroll",a),n.onScrollEnd!=null&&ut("scrollend",a),n.onClick!=null&&(a.onclick=fi),a=!0):a=!1,a||We(t)}function uf(t){for(aa=t.return;aa;)switch(aa.tag){case 5:case 13:Ua=!1;return;case 27:case 3:Ua=!0;return;default:aa=aa.return}}function gl(t){if(t!==aa)return!1;if(!ht)return uf(t),ht=!0,!1;var a=t.tag,e;if((e=a!==3&&a!==27)&&((e=a===5)&&(e=t.type,e=!(e!=="form"&&e!=="button")||Ku(t.type,t.memoizedProps)),e=!e),e&&Nt&&We(t),uf(t),a===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(u(317));t:{for(t=t.nextSibling,a=0;t;){if(t.nodeType===8)if(e=t.data,e==="/$"){if(a===0){Nt=Da(t.nextSibling);break t}a--}else e!=="$"&&e!=="$!"&&e!=="$?"||a++;t=t.nextSibling}Nt=null}}else a===27?(a=Nt,De(t.type)?(t=Wu,Wu=null,Nt=t):Nt=a):Nt=aa?Da(t.stateNode.nextSibling):null;return!0}function vl(){Nt=aa=null,ht=!1}function cf(){var t=Fe;return t!==null&&(ia===null?ia=t:ia.push.apply(ia,t),Fe=null),t}function pl(t){Fe===null?Fe=[t]:Fe.push(t)}var Co=j(null),Ie=null,Ja=null;function be(t,a,e){q(Co,a._currentValue),a._currentValue=e}function Fa(t){t._currentValue=Co.current,X(Co)}function jo(t,a,e){for(;t!==null;){var n=t.alternate;if((t.childLanes&a)!==a?(t.childLanes|=a,n!==null&&(n.childLanes|=a)):n!==null&&(n.childLanes&a)!==a&&(n.childLanes|=a),t===e)break;t=t.return}}function Ro(t,a,e,n){var l=t.child;for(l!==null&&(l.return=t);l!==null;){var i=l.dependencies;if(i!==null){var s=l.child;i=i.firstContext;t:for(;i!==null;){var d=i;i=l;for(var b=0;b<a.length;b++)if(d.context===a[b]){i.lanes|=e,d=i.alternate,d!==null&&(d.lanes|=e),jo(i.return,e,t),n||(s=null);break t}i=d.next}}else if(l.tag===18){if(s=l.return,s===null)throw Error(u(341));s.lanes|=e,i=s.alternate,i!==null&&(i.lanes|=e),jo(s,e,t),s=null}else s=l.child;if(s!==null)s.return=l;else for(s=l;s!==null;){if(s===t){s=null;break}if(l=s.sibling,l!==null){l.return=s.return,s=l;break}s=s.return}l=s}}function yl(t,a,e,n){t=null;for(var l=a,i=!1;l!==null;){if(!i){if((l.flags&524288)!==0)i=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var s=l.alternate;if(s===null)throw Error(u(387));if(s=s.memoizedProps,s!==null){var d=l.type;sa(l.pendingProps.value,s.value)||(t!==null?t.push(d):t=[d])}}else if(l===oa.current){if(s=l.alternate,s===null)throw Error(u(387));s.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(t!==null?t.push(Kl):t=[Kl])}l=l.return}t!==null&&Ro(a,t,e,n),a.flags|=262144}function Nr(t){for(t=t.firstContext;t!==null;){if(!sa(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function tn(t){Ie=t,Ja=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Wt(t){return sf(Ie,t)}function Cr(t,a){return Ie===null&&tn(t),sf(t,a)}function sf(t,a){var e=a._currentValue;if(a={context:a,memoizedValue:e,next:null},Ja===null){if(t===null)throw Error(u(308));Ja=a,t.dependencies={lanes:0,firstContext:a},t.flags|=524288}else Ja=Ja.next=a;return e}var xg=typeof AbortController<"u"?AbortController:function(){var t=[],a=this.signal={aborted:!1,addEventListener:function(e,n){t.push(n)}};this.abort=function(){a.aborted=!0,t.forEach(function(e){return e()})}},Sg=r.unstable_scheduleCallback,Og=r.unstable_NormalPriority,qt={$$typeof:tt,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Uo(){return{controller:new xg,data:new Map,refCount:0}}function xl(t){t.refCount--,t.refCount===0&&Sg(Og,function(){t.controller.abort()})}var Sl=null,Ho=0,Dn=0,wn=null;function Ag(t,a){if(Sl===null){var e=Sl=[];Ho=0,Dn=Yu(),wn={status:"pending",value:void 0,then:function(n){e.push(n)}}}return Ho++,a.then(ff,ff),a}function ff(){if(--Ho===0&&Sl!==null){wn!==null&&(wn.status="fulfilled");var t=Sl;Sl=null,Dn=0,wn=null;for(var a=0;a<t.length;a++)(0,t[a])()}}function Tg(t,a){var e=[],n={status:"pending",value:null,reason:null,then:function(l){e.push(l)}};return t.then(function(){n.status="fulfilled",n.value=a;for(var l=0;l<e.length;l++)(0,e[l])(a)},function(l){for(n.status="rejected",n.reason=l,l=0;l<e.length;l++)(0,e[l])(void 0)}),n}var df=k.S;k.S=function(t,a){typeof a=="object"&&a!==null&&typeof a.then=="function"&&Ag(t,a),df!==null&&df(t,a)};var an=j(null);function qo(){var t=an.current;return t!==null?t:Et.pooledCache}function jr(t,a){a===null?q(an,an.current):q(an,a.pool)}function hf(){var t=qo();return t===null?null:{parent:qt._currentValue,pool:t}}var Ol=Error(u(460)),mf=Error(u(474)),Rr=Error(u(542)),Yo={then:function(){}};function bf(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Ur(){}function gf(t,a,e){switch(e=t[e],e===void 0?t.push(a):e!==a&&(a.then(Ur,Ur),a=e),a.status){case"fulfilled":return a.value;case"rejected":throw t=a.reason,pf(t),t;default:if(typeof a.status=="string")a.then(Ur,Ur);else{if(t=Et,t!==null&&100<t.shellSuspendCounter)throw Error(u(482));t=a,t.status="pending",t.then(function(n){if(a.status==="pending"){var l=a;l.status="fulfilled",l.value=n}},function(n){if(a.status==="pending"){var l=a;l.status="rejected",l.reason=n}})}switch(a.status){case"fulfilled":return a.value;case"rejected":throw t=a.reason,pf(t),t}throw Al=a,Ol}}var Al=null;function vf(){if(Al===null)throw Error(u(459));var t=Al;return Al=null,t}function pf(t){if(t===Ol||t===Rr)throw Error(u(483))}var ge=!1;function Bo(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Lo(t,a){t=t.updateQueue,a.updateQueue===t&&(a.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function ve(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function pe(t,a,e){var n=t.updateQueue;if(n===null)return null;if(n=n.shared,(mt&2)!==0){var l=n.pending;return l===null?a.next=a:(a.next=l.next,l.next=a),n.pending=a,a=kr(t),nf(t,null,e),a}return zr(t,n,a,e),kr(t)}function Tl(t,a,e){if(a=a.updateQueue,a!==null&&(a=a.shared,(e&4194048)!==0)){var n=a.lanes;n&=t.pendingLanes,e|=n,a.lanes=e,ss(t,e)}}function Xo(t,a){var e=t.updateQueue,n=t.alternate;if(n!==null&&(n=n.updateQueue,e===n)){var l=null,i=null;if(e=e.firstBaseUpdate,e!==null){do{var s={lane:e.lane,tag:e.tag,payload:e.payload,callback:null,next:null};i===null?l=i=s:i=i.next=s,e=e.next}while(e!==null);i===null?l=i=a:i=i.next=a}else l=i=a;e={baseState:n.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:n.shared,callbacks:n.callbacks},t.updateQueue=e;return}t=e.lastBaseUpdate,t===null?e.firstBaseUpdate=a:t.next=a,e.lastBaseUpdate=a}var Go=!1;function El(){if(Go){var t=wn;if(t!==null)throw t}}function _l(t,a,e,n){Go=!1;var l=t.updateQueue;ge=!1;var i=l.firstBaseUpdate,s=l.lastBaseUpdate,d=l.shared.pending;if(d!==null){l.shared.pending=null;var b=d,A=b.next;b.next=null,s===null?i=A:s.next=A,s=b;var z=t.alternate;z!==null&&(z=z.updateQueue,d=z.lastBaseUpdate,d!==s&&(d===null?z.firstBaseUpdate=A:d.next=A,z.lastBaseUpdate=b))}if(i!==null){var w=l.baseState;s=0,z=A=b=null,d=i;do{var T=d.lane&-536870913,E=T!==d.lane;if(E?(st&T)===T:(n&T)===T){T!==0&&T===Dn&&(Go=!0),z!==null&&(z=z.next={lane:0,tag:d.tag,payload:d.payload,callback:null,next:null});t:{var W=t,$=d;T=a;var St=e;switch($.tag){case 1:if(W=$.payload,typeof W=="function"){w=W.call(St,w,T);break t}w=W;break t;case 3:W.flags=W.flags&-65537|128;case 0:if(W=$.payload,T=typeof W=="function"?W.call(St,w,T):W,T==null)break t;w=_({},w,T);break t;case 2:ge=!0}}T=d.callback,T!==null&&(t.flags|=64,E&&(t.flags|=8192),E=l.callbacks,E===null?l.callbacks=[T]:E.push(T))}else E={lane:T,tag:d.tag,payload:d.payload,callback:d.callback,next:null},z===null?(A=z=E,b=w):z=z.next=E,s|=T;if(d=d.next,d===null){if(d=l.shared.pending,d===null)break;E=d,d=E.next,E.next=null,l.lastBaseUpdate=E,l.shared.pending=null}}while(!0);z===null&&(b=w),l.baseState=b,l.firstBaseUpdate=A,l.lastBaseUpdate=z,i===null&&(l.shared.lanes=0),_e|=s,t.lanes=s,t.memoizedState=w}}function yf(t,a){if(typeof t!="function")throw Error(u(191,t));t.call(a)}function xf(t,a){var e=t.callbacks;if(e!==null)for(t.callbacks=null,t=0;t<e.length;t++)yf(e[t],a)}var Nn=j(null),Hr=j(0);function Sf(t,a){t=le,q(Hr,t),q(Nn,a),le=t|a.baseLanes}function Qo(){q(Hr,le),q(Nn,Nn.current)}function Zo(){le=Hr.current,X(Nn),X(Hr)}var ye=0,lt=null,yt=null,Ut=null,qr=!1,Cn=!1,en=!1,Yr=0,zl=0,jn=null,Eg=0;function jt(){throw Error(u(321))}function Vo(t,a){if(a===null)return!1;for(var e=0;e<a.length&&e<t.length;e++)if(!sa(t[e],a[e]))return!1;return!0}function Po(t,a,e,n,l,i){return ye=i,lt=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,k.H=t===null||t.memoizedState===null?ld:rd,en=!1,i=e(n,l),en=!1,Cn&&(i=Af(a,e,n,l)),Of(t),i}function Of(t){k.H=Zr;var a=yt!==null&&yt.next!==null;if(ye=0,Ut=yt=lt=null,qr=!1,zl=0,jn=null,a)throw Error(u(300));t===null||Xt||(t=t.dependencies,t!==null&&Nr(t)&&(Xt=!0))}function Af(t,a,e,n){lt=t;var l=0;do{if(Cn&&(jn=null),zl=0,Cn=!1,25<=l)throw Error(u(301));if(l+=1,Ut=yt=null,t.updateQueue!=null){var i=t.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}k.H=Ng,i=a(e,n)}while(Cn);return i}function _g(){var t=k.H,a=t.useState()[0];return a=typeof a.then=="function"?kl(a):a,t=t.useState()[0],(yt!==null?yt.memoizedState:null)!==t&&(lt.flags|=1024),a}function Ko(){var t=Yr!==0;return Yr=0,t}function $o(t,a,e){a.updateQueue=t.updateQueue,a.flags&=-2053,t.lanes&=~e}function Jo(t){if(qr){for(t=t.memoizedState;t!==null;){var a=t.queue;a!==null&&(a.pending=null),t=t.next}qr=!1}ye=0,Ut=yt=lt=null,Cn=!1,zl=Yr=0,jn=null}function la(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ut===null?lt.memoizedState=Ut=t:Ut=Ut.next=t,Ut}function Ht(){if(yt===null){var t=lt.alternate;t=t!==null?t.memoizedState:null}else t=yt.next;var a=Ut===null?lt.memoizedState:Ut.next;if(a!==null)Ut=a,yt=t;else{if(t===null)throw lt.alternate===null?Error(u(467)):Error(u(310));yt=t,t={memoizedState:yt.memoizedState,baseState:yt.baseState,baseQueue:yt.baseQueue,queue:yt.queue,next:null},Ut===null?lt.memoizedState=Ut=t:Ut=Ut.next=t}return Ut}function Fo(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function kl(t){var a=zl;return zl+=1,jn===null&&(jn=[]),t=gf(jn,t,a),a=lt,(Ut===null?a.memoizedState:Ut.next)===null&&(a=a.alternate,k.H=a===null||a.memoizedState===null?ld:rd),t}function Br(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return kl(t);if(t.$$typeof===tt)return Wt(t)}throw Error(u(438,String(t)))}function Wo(t){var a=null,e=lt.updateQueue;if(e!==null&&(a=e.memoCache),a==null){var n=lt.alternate;n!==null&&(n=n.updateQueue,n!==null&&(n=n.memoCache,n!=null&&(a={data:n.data.map(function(l){return l.slice()}),index:0})))}if(a==null&&(a={data:[],index:0}),e===null&&(e=Fo(),lt.updateQueue=e),e.memoCache=a,e=a.data[a.index],e===void 0)for(e=a.data[a.index]=Array(t),n=0;n<t;n++)e[n]=fn;return a.index++,e}function Wa(t,a){return typeof a=="function"?a(t):a}function Lr(t){var a=Ht();return Io(a,yt,t)}function Io(t,a,e){var n=t.queue;if(n===null)throw Error(u(311));n.lastRenderedReducer=e;var l=t.baseQueue,i=n.pending;if(i!==null){if(l!==null){var s=l.next;l.next=i.next,i.next=s}a.baseQueue=l=i,n.pending=null}if(i=t.baseState,l===null)t.memoizedState=i;else{a=l.next;var d=s=null,b=null,A=a,z=!1;do{var w=A.lane&-536870913;if(w!==A.lane?(st&w)===w:(ye&w)===w){var T=A.revertLane;if(T===0)b!==null&&(b=b.next={lane:0,revertLane:0,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null}),w===Dn&&(z=!0);else if((ye&T)===T){A=A.next,T===Dn&&(z=!0);continue}else w={lane:0,revertLane:A.revertLane,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null},b===null?(d=b=w,s=i):b=b.next=w,lt.lanes|=T,_e|=T;w=A.action,en&&e(i,w),i=A.hasEagerState?A.eagerState:e(i,w)}else T={lane:w,revertLane:A.revertLane,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null},b===null?(d=b=T,s=i):b=b.next=T,lt.lanes|=w,_e|=w;A=A.next}while(A!==null&&A!==a);if(b===null?s=i:b.next=d,!sa(i,t.memoizedState)&&(Xt=!0,z&&(e=wn,e!==null)))throw e;t.memoizedState=i,t.baseState=s,t.baseQueue=b,n.lastRenderedState=i}return l===null&&(n.lanes=0),[t.memoizedState,n.dispatch]}function tu(t){var a=Ht(),e=a.queue;if(e===null)throw Error(u(311));e.lastRenderedReducer=t;var n=e.dispatch,l=e.pending,i=a.memoizedState;if(l!==null){e.pending=null;var s=l=l.next;do i=t(i,s.action),s=s.next;while(s!==l);sa(i,a.memoizedState)||(Xt=!0),a.memoizedState=i,a.baseQueue===null&&(a.baseState=i),e.lastRenderedState=i}return[i,n]}function Tf(t,a,e){var n=lt,l=Ht(),i=ht;if(i){if(e===void 0)throw Error(u(407));e=e()}else e=a();var s=!sa((yt||l).memoizedState,e);s&&(l.memoizedState=e,Xt=!0),l=l.queue;var d=zf.bind(null,n,l,t);if(Ml(2048,8,d,[t]),l.getSnapshot!==a||s||Ut!==null&&Ut.memoizedState.tag&1){if(n.flags|=2048,Rn(9,Xr(),_f.bind(null,n,l,e,a),null),Et===null)throw Error(u(349));i||(ye&124)!==0||Ef(n,a,e)}return e}function Ef(t,a,e){t.flags|=16384,t={getSnapshot:a,value:e},a=lt.updateQueue,a===null?(a=Fo(),lt.updateQueue=a,a.stores=[t]):(e=a.stores,e===null?a.stores=[t]:e.push(t))}function _f(t,a,e,n){a.value=e,a.getSnapshot=n,kf(a)&&Mf(t)}function zf(t,a,e){return e(function(){kf(a)&&Mf(t)})}function kf(t){var a=t.getSnapshot;t=t.value;try{var e=a();return!sa(t,e)}catch{return!0}}function Mf(t){var a=_n(t,2);a!==null&&ga(a,t,2)}function au(t){var a=la();if(typeof t=="function"){var e=t;if(t=e(),en){de(!0);try{e()}finally{de(!1)}}}return a.memoizedState=a.baseState=t,a.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wa,lastRenderedState:t},a}function Df(t,a,e,n){return t.baseState=e,Io(t,yt,typeof n=="function"?n:Wa)}function zg(t,a,e,n,l){if(Qr(t))throw Error(u(485));if(t=a.action,t!==null){var i={payload:l,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(s){i.listeners.push(s)}};k.T!==null?e(!0):i.isTransition=!1,n(i),e=a.pending,e===null?(i.next=a.pending=i,wf(a,i)):(i.next=e.next,a.pending=e.next=i)}}function wf(t,a){var e=a.action,n=a.payload,l=t.state;if(a.isTransition){var i=k.T,s={};k.T=s;try{var d=e(l,n),b=k.S;b!==null&&b(s,d),Nf(t,a,d)}catch(A){eu(t,a,A)}finally{k.T=i}}else try{i=e(l,n),Nf(t,a,i)}catch(A){eu(t,a,A)}}function Nf(t,a,e){e!==null&&typeof e=="object"&&typeof e.then=="function"?e.then(function(n){Cf(t,a,n)},function(n){return eu(t,a,n)}):Cf(t,a,e)}function Cf(t,a,e){a.status="fulfilled",a.value=e,jf(a),t.state=e,a=t.pending,a!==null&&(e=a.next,e===a?t.pending=null:(e=e.next,a.next=e,wf(t,e)))}function eu(t,a,e){var n=t.pending;if(t.pending=null,n!==null){n=n.next;do a.status="rejected",a.reason=e,jf(a),a=a.next;while(a!==n)}t.action=null}function jf(t){t=t.listeners;for(var a=0;a<t.length;a++)(0,t[a])()}function Rf(t,a){return a}function Uf(t,a){if(ht){var e=Et.formState;if(e!==null){t:{var n=lt;if(ht){if(Nt){a:{for(var l=Nt,i=Ua;l.nodeType!==8;){if(!i){l=null;break a}if(l=Da(l.nextSibling),l===null){l=null;break a}}i=l.data,l=i==="F!"||i==="F"?l:null}if(l){Nt=Da(l.nextSibling),n=l.data==="F!";break t}}We(n)}n=!1}n&&(a=e[0])}}return e=la(),e.memoizedState=e.baseState=a,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Rf,lastRenderedState:a},e.queue=n,e=ad.bind(null,lt,n),n.dispatch=e,n=au(!1),i=ou.bind(null,lt,!1,n.queue),n=la(),l={state:a,dispatch:null,action:t,pending:null},n.queue=l,e=zg.bind(null,lt,l,i,e),l.dispatch=e,n.memoizedState=t,[a,e,!1]}function Hf(t){var a=Ht();return qf(a,yt,t)}function qf(t,a,e){if(a=Io(t,a,Rf)[0],t=Lr(Wa)[0],typeof a=="object"&&a!==null&&typeof a.then=="function")try{var n=kl(a)}catch(s){throw s===Ol?Rr:s}else n=a;a=Ht();var l=a.queue,i=l.dispatch;return e!==a.memoizedState&&(lt.flags|=2048,Rn(9,Xr(),kg.bind(null,l,e),null)),[n,i,t]}function kg(t,a){t.action=a}function Yf(t){var a=Ht(),e=yt;if(e!==null)return qf(a,e,t);Ht(),a=a.memoizedState,e=Ht();var n=e.queue.dispatch;return e.memoizedState=t,[a,n,!1]}function Rn(t,a,e,n){return t={tag:t,create:e,deps:n,inst:a,next:null},a=lt.updateQueue,a===null&&(a=Fo(),lt.updateQueue=a),e=a.lastEffect,e===null?a.lastEffect=t.next=t:(n=e.next,e.next=t,t.next=n,a.lastEffect=t),t}function Xr(){return{destroy:void 0,resource:void 0}}function Bf(){return Ht().memoizedState}function Gr(t,a,e,n){var l=la();n=n===void 0?null:n,lt.flags|=t,l.memoizedState=Rn(1|a,Xr(),e,n)}function Ml(t,a,e,n){var l=Ht();n=n===void 0?null:n;var i=l.memoizedState.inst;yt!==null&&n!==null&&Vo(n,yt.memoizedState.deps)?l.memoizedState=Rn(a,i,e,n):(lt.flags|=t,l.memoizedState=Rn(1|a,i,e,n))}function Lf(t,a){Gr(8390656,8,t,a)}function Xf(t,a){Ml(2048,8,t,a)}function Gf(t,a){return Ml(4,2,t,a)}function Qf(t,a){return Ml(4,4,t,a)}function Zf(t,a){if(typeof a=="function"){t=t();var e=a(t);return function(){typeof e=="function"?e():a(null)}}if(a!=null)return t=t(),a.current=t,function(){a.current=null}}function Vf(t,a,e){e=e!=null?e.concat([t]):null,Ml(4,4,Zf.bind(null,a,t),e)}function nu(){}function Pf(t,a){var e=Ht();a=a===void 0?null:a;var n=e.memoizedState;return a!==null&&Vo(a,n[1])?n[0]:(e.memoizedState=[t,a],t)}function Kf(t,a){var e=Ht();a=a===void 0?null:a;var n=e.memoizedState;if(a!==null&&Vo(a,n[1]))return n[0];if(n=t(),en){de(!0);try{t()}finally{de(!1)}}return e.memoizedState=[n,a],n}function lu(t,a,e){return e===void 0||(ye&1073741824)!==0?t.memoizedState=a:(t.memoizedState=e,t=Fd(),lt.lanes|=t,_e|=t,e)}function $f(t,a,e,n){return sa(e,a)?e:Nn.current!==null?(t=lu(t,e,n),sa(t,a)||(Xt=!0),t):(ye&42)===0?(Xt=!0,t.memoizedState=e):(t=Fd(),lt.lanes|=t,_e|=t,a)}function Jf(t,a,e,n,l){var i=Y.p;Y.p=i!==0&&8>i?i:8;var s=k.T,d={};k.T=d,ou(t,!1,a,e);try{var b=l(),A=k.S;if(A!==null&&A(d,b),b!==null&&typeof b=="object"&&typeof b.then=="function"){var z=Tg(b,n);Dl(t,a,z,ba(t))}else Dl(t,a,n,ba(t))}catch(w){Dl(t,a,{then:function(){},status:"rejected",reason:w},ba())}finally{Y.p=i,k.T=s}}function Mg(){}function ru(t,a,e,n){if(t.tag!==5)throw Error(u(476));var l=Ff(t).queue;Jf(t,l,a,F,e===null?Mg:function(){return Wf(t),e(n)})}function Ff(t){var a=t.memoizedState;if(a!==null)return a;a={memoizedState:F,baseState:F,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wa,lastRenderedState:F},next:null};var e={};return a.next={memoizedState:e,baseState:e,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wa,lastRenderedState:e},next:null},t.memoizedState=a,t=t.alternate,t!==null&&(t.memoizedState=a),a}function Wf(t){var a=Ff(t).next.queue;Dl(t,a,{},ba())}function iu(){return Wt(Kl)}function If(){return Ht().memoizedState}function td(){return Ht().memoizedState}function Dg(t){for(var a=t.return;a!==null;){switch(a.tag){case 24:case 3:var e=ba();t=ve(e);var n=pe(a,t,e);n!==null&&(ga(n,a,e),Tl(n,a,e)),a={cache:Uo()},t.payload=a;return}a=a.return}}function wg(t,a,e){var n=ba();e={lane:n,revertLane:0,action:e,hasEagerState:!1,eagerState:null,next:null},Qr(t)?ed(a,e):(e=_o(t,a,e,n),e!==null&&(ga(e,t,n),nd(e,a,n)))}function ad(t,a,e){var n=ba();Dl(t,a,e,n)}function Dl(t,a,e,n){var l={lane:n,revertLane:0,action:e,hasEagerState:!1,eagerState:null,next:null};if(Qr(t))ed(a,l);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=a.lastRenderedReducer,i!==null))try{var s=a.lastRenderedState,d=i(s,e);if(l.hasEagerState=!0,l.eagerState=d,sa(d,s))return zr(t,a,l,0),Et===null&&_r(),!1}catch{}finally{}if(e=_o(t,a,l,n),e!==null)return ga(e,t,n),nd(e,a,n),!0}return!1}function ou(t,a,e,n){if(n={lane:2,revertLane:Yu(),action:n,hasEagerState:!1,eagerState:null,next:null},Qr(t)){if(a)throw Error(u(479))}else a=_o(t,e,n,2),a!==null&&ga(a,t,2)}function Qr(t){var a=t.alternate;return t===lt||a!==null&&a===lt}function ed(t,a){Cn=qr=!0;var e=t.pending;e===null?a.next=a:(a.next=e.next,e.next=a),t.pending=a}function nd(t,a,e){if((e&4194048)!==0){var n=a.lanes;n&=t.pendingLanes,e|=n,a.lanes=e,ss(t,e)}}var Zr={readContext:Wt,use:Br,useCallback:jt,useContext:jt,useEffect:jt,useImperativeHandle:jt,useLayoutEffect:jt,useInsertionEffect:jt,useMemo:jt,useReducer:jt,useRef:jt,useState:jt,useDebugValue:jt,useDeferredValue:jt,useTransition:jt,useSyncExternalStore:jt,useId:jt,useHostTransitionStatus:jt,useFormState:jt,useActionState:jt,useOptimistic:jt,useMemoCache:jt,useCacheRefresh:jt},ld={readContext:Wt,use:Br,useCallback:function(t,a){return la().memoizedState=[t,a===void 0?null:a],t},useContext:Wt,useEffect:Lf,useImperativeHandle:function(t,a,e){e=e!=null?e.concat([t]):null,Gr(4194308,4,Zf.bind(null,a,t),e)},useLayoutEffect:function(t,a){return Gr(4194308,4,t,a)},useInsertionEffect:function(t,a){Gr(4,2,t,a)},useMemo:function(t,a){var e=la();a=a===void 0?null:a;var n=t();if(en){de(!0);try{t()}finally{de(!1)}}return e.memoizedState=[n,a],n},useReducer:function(t,a,e){var n=la();if(e!==void 0){var l=e(a);if(en){de(!0);try{e(a)}finally{de(!1)}}}else l=a;return n.memoizedState=n.baseState=l,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:l},n.queue=t,t=t.dispatch=wg.bind(null,lt,t),[n.memoizedState,t]},useRef:function(t){var a=la();return t={current:t},a.memoizedState=t},useState:function(t){t=au(t);var a=t.queue,e=ad.bind(null,lt,a);return a.dispatch=e,[t.memoizedState,e]},useDebugValue:nu,useDeferredValue:function(t,a){var e=la();return lu(e,t,a)},useTransition:function(){var t=au(!1);return t=Jf.bind(null,lt,t.queue,!0,!1),la().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,a,e){var n=lt,l=la();if(ht){if(e===void 0)throw Error(u(407));e=e()}else{if(e=a(),Et===null)throw Error(u(349));(st&124)!==0||Ef(n,a,e)}l.memoizedState=e;var i={value:e,getSnapshot:a};return l.queue=i,Lf(zf.bind(null,n,i,t),[t]),n.flags|=2048,Rn(9,Xr(),_f.bind(null,n,i,e,a),null),e},useId:function(){var t=la(),a=Et.identifierPrefix;if(ht){var e=$a,n=Ka;e=(n&~(1<<32-ca(n)-1)).toString(32)+e,a="«"+a+"R"+e,e=Yr++,0<e&&(a+="H"+e.toString(32)),a+="»"}else e=Eg++,a="«"+a+"r"+e.toString(32)+"»";return t.memoizedState=a},useHostTransitionStatus:iu,useFormState:Uf,useActionState:Uf,useOptimistic:function(t){var a=la();a.memoizedState=a.baseState=t;var e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return a.queue=e,a=ou.bind(null,lt,!0,e),e.dispatch=a,[t,a]},useMemoCache:Wo,useCacheRefresh:function(){return la().memoizedState=Dg.bind(null,lt)}},rd={readContext:Wt,use:Br,useCallback:Pf,useContext:Wt,useEffect:Xf,useImperativeHandle:Vf,useInsertionEffect:Gf,useLayoutEffect:Qf,useMemo:Kf,useReducer:Lr,useRef:Bf,useState:function(){return Lr(Wa)},useDebugValue:nu,useDeferredValue:function(t,a){var e=Ht();return $f(e,yt.memoizedState,t,a)},useTransition:function(){var t=Lr(Wa)[0],a=Ht().memoizedState;return[typeof t=="boolean"?t:kl(t),a]},useSyncExternalStore:Tf,useId:If,useHostTransitionStatus:iu,useFormState:Hf,useActionState:Hf,useOptimistic:function(t,a){var e=Ht();return Df(e,yt,t,a)},useMemoCache:Wo,useCacheRefresh:td},Ng={readContext:Wt,use:Br,useCallback:Pf,useContext:Wt,useEffect:Xf,useImperativeHandle:Vf,useInsertionEffect:Gf,useLayoutEffect:Qf,useMemo:Kf,useReducer:tu,useRef:Bf,useState:function(){return tu(Wa)},useDebugValue:nu,useDeferredValue:function(t,a){var e=Ht();return yt===null?lu(e,t,a):$f(e,yt.memoizedState,t,a)},useTransition:function(){var t=tu(Wa)[0],a=Ht().memoizedState;return[typeof t=="boolean"?t:kl(t),a]},useSyncExternalStore:Tf,useId:If,useHostTransitionStatus:iu,useFormState:Yf,useActionState:Yf,useOptimistic:function(t,a){var e=Ht();return yt!==null?Df(e,yt,t,a):(e.baseState=t,[t,e.queue.dispatch])},useMemoCache:Wo,useCacheRefresh:td},Un=null,wl=0;function Vr(t){var a=wl;return wl+=1,Un===null&&(Un=[]),gf(Un,t,a)}function Nl(t,a){a=a.props.ref,t.ref=a!==void 0?a:null}function Pr(t,a){throw a.$$typeof===N?Error(u(525)):(t=Object.prototype.toString.call(a),Error(u(31,t==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":t)))}function id(t){var a=t._init;return a(t._payload)}function od(t){function a(S,y){if(t){var O=S.deletions;O===null?(S.deletions=[y],S.flags|=16):O.push(y)}}function e(S,y){if(!t)return null;for(;y!==null;)a(S,y),y=y.sibling;return null}function n(S){for(var y=new Map;S!==null;)S.key!==null?y.set(S.key,S):y.set(S.index,S),S=S.sibling;return y}function l(S,y){return S=Pa(S,y),S.index=0,S.sibling=null,S}function i(S,y,O){return S.index=O,t?(O=S.alternate,O!==null?(O=O.index,O<y?(S.flags|=67108866,y):O):(S.flags|=67108866,y)):(S.flags|=1048576,y)}function s(S){return t&&S.alternate===null&&(S.flags|=67108866),S}function d(S,y,O,M){return y===null||y.tag!==6?(y=ko(O,S.mode,M),y.return=S,y):(y=l(y,O),y.return=S,y)}function b(S,y,O,M){var G=O.type;return G===H?z(S,y,O.props.children,M,O.key):y!==null&&(y.elementType===G||typeof G=="object"&&G!==null&&G.$$typeof===pt&&id(G)===y.type)?(y=l(y,O.props),Nl(y,O),y.return=S,y):(y=Mr(O.type,O.key,O.props,null,S.mode,M),Nl(y,O),y.return=S,y)}function A(S,y,O,M){return y===null||y.tag!==4||y.stateNode.containerInfo!==O.containerInfo||y.stateNode.implementation!==O.implementation?(y=Mo(O,S.mode,M),y.return=S,y):(y=l(y,O.children||[]),y.return=S,y)}function z(S,y,O,M,G){return y===null||y.tag!==7?(y=Ke(O,S.mode,M,G),y.return=S,y):(y=l(y,O),y.return=S,y)}function w(S,y,O){if(typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint")return y=ko(""+y,S.mode,O),y.return=S,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case R:return O=Mr(y.type,y.key,y.props,null,S.mode,O),Nl(O,y),O.return=S,O;case B:return y=Mo(y,S.mode,O),y.return=S,y;case pt:var M=y._init;return y=M(y._payload),w(S,y,O)}if(Jt(y)||$t(y))return y=Ke(y,S.mode,O,null),y.return=S,y;if(typeof y.then=="function")return w(S,Vr(y),O);if(y.$$typeof===tt)return w(S,Cr(S,y),O);Pr(S,y)}return null}function T(S,y,O,M){var G=y!==null?y.key:null;if(typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint")return G!==null?null:d(S,y,""+O,M);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case R:return O.key===G?b(S,y,O,M):null;case B:return O.key===G?A(S,y,O,M):null;case pt:return G=O._init,O=G(O._payload),T(S,y,O,M)}if(Jt(O)||$t(O))return G!==null?null:z(S,y,O,M,null);if(typeof O.then=="function")return T(S,y,Vr(O),M);if(O.$$typeof===tt)return T(S,y,Cr(S,O),M);Pr(S,O)}return null}function E(S,y,O,M,G){if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return S=S.get(O)||null,d(y,S,""+M,G);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case R:return S=S.get(M.key===null?O:M.key)||null,b(y,S,M,G);case B:return S=S.get(M.key===null?O:M.key)||null,A(y,S,M,G);case pt:var it=M._init;return M=it(M._payload),E(S,y,O,M,G)}if(Jt(M)||$t(M))return S=S.get(O)||null,z(y,S,M,G,null);if(typeof M.then=="function")return E(S,y,O,Vr(M),G);if(M.$$typeof===tt)return E(S,y,O,Cr(y,M),G);Pr(y,M)}return null}function W(S,y,O,M){for(var G=null,it=null,Q=y,J=y=0,Qt=null;Q!==null&&J<O.length;J++){Q.index>J?(Qt=Q,Q=null):Qt=Q.sibling;var dt=T(S,Q,O[J],M);if(dt===null){Q===null&&(Q=Qt);break}t&&Q&&dt.alternate===null&&a(S,Q),y=i(dt,y,J),it===null?G=dt:it.sibling=dt,it=dt,Q=Qt}if(J===O.length)return e(S,Q),ht&&Je(S,J),G;if(Q===null){for(;J<O.length;J++)Q=w(S,O[J],M),Q!==null&&(y=i(Q,y,J),it===null?G=Q:it.sibling=Q,it=Q);return ht&&Je(S,J),G}for(Q=n(Q);J<O.length;J++)Qt=E(Q,S,J,O[J],M),Qt!==null&&(t&&Qt.alternate!==null&&Q.delete(Qt.key===null?J:Qt.key),y=i(Qt,y,J),it===null?G=Qt:it.sibling=Qt,it=Qt);return t&&Q.forEach(function(Re){return a(S,Re)}),ht&&Je(S,J),G}function $(S,y,O,M){if(O==null)throw Error(u(151));for(var G=null,it=null,Q=y,J=y=0,Qt=null,dt=O.next();Q!==null&&!dt.done;J++,dt=O.next()){Q.index>J?(Qt=Q,Q=null):Qt=Q.sibling;var Re=T(S,Q,dt.value,M);if(Re===null){Q===null&&(Q=Qt);break}t&&Q&&Re.alternate===null&&a(S,Q),y=i(Re,y,J),it===null?G=Re:it.sibling=Re,it=Re,Q=Qt}if(dt.done)return e(S,Q),ht&&Je(S,J),G;if(Q===null){for(;!dt.done;J++,dt=O.next())dt=w(S,dt.value,M),dt!==null&&(y=i(dt,y,J),it===null?G=dt:it.sibling=dt,it=dt);return ht&&Je(S,J),G}for(Q=n(Q);!dt.done;J++,dt=O.next())dt=E(Q,S,J,dt.value,M),dt!==null&&(t&&dt.alternate!==null&&Q.delete(dt.key===null?J:dt.key),y=i(dt,y,J),it===null?G=dt:it.sibling=dt,it=dt);return t&&Q.forEach(function(Cv){return a(S,Cv)}),ht&&Je(S,J),G}function St(S,y,O,M){if(typeof O=="object"&&O!==null&&O.type===H&&O.key===null&&(O=O.props.children),typeof O=="object"&&O!==null){switch(O.$$typeof){case R:t:{for(var G=O.key;y!==null;){if(y.key===G){if(G=O.type,G===H){if(y.tag===7){e(S,y.sibling),M=l(y,O.props.children),M.return=S,S=M;break t}}else if(y.elementType===G||typeof G=="object"&&G!==null&&G.$$typeof===pt&&id(G)===y.type){e(S,y.sibling),M=l(y,O.props),Nl(M,O),M.return=S,S=M;break t}e(S,y);break}else a(S,y);y=y.sibling}O.type===H?(M=Ke(O.props.children,S.mode,M,O.key),M.return=S,S=M):(M=Mr(O.type,O.key,O.props,null,S.mode,M),Nl(M,O),M.return=S,S=M)}return s(S);case B:t:{for(G=O.key;y!==null;){if(y.key===G)if(y.tag===4&&y.stateNode.containerInfo===O.containerInfo&&y.stateNode.implementation===O.implementation){e(S,y.sibling),M=l(y,O.children||[]),M.return=S,S=M;break t}else{e(S,y);break}else a(S,y);y=y.sibling}M=Mo(O,S.mode,M),M.return=S,S=M}return s(S);case pt:return G=O._init,O=G(O._payload),St(S,y,O,M)}if(Jt(O))return W(S,y,O,M);if($t(O)){if(G=$t(O),typeof G!="function")throw Error(u(150));return O=G.call(O),$(S,y,O,M)}if(typeof O.then=="function")return St(S,y,Vr(O),M);if(O.$$typeof===tt)return St(S,y,Cr(S,O),M);Pr(S,O)}return typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint"?(O=""+O,y!==null&&y.tag===6?(e(S,y.sibling),M=l(y,O),M.return=S,S=M):(e(S,y),M=ko(O,S.mode,M),M.return=S,S=M),s(S)):e(S,y)}return function(S,y,O,M){try{wl=0;var G=St(S,y,O,M);return Un=null,G}catch(Q){if(Q===Ol||Q===Rr)throw Q;var it=fa(29,Q,null,S.mode);return it.lanes=M,it.return=S,it}finally{}}}var Hn=od(!0),ud=od(!1),Ea=j(null),Ha=null;function xe(t){var a=t.alternate;q(Yt,Yt.current&1),q(Ea,t),Ha===null&&(a===null||Nn.current!==null||a.memoizedState!==null)&&(Ha=t)}function cd(t){if(t.tag===22){if(q(Yt,Yt.current),q(Ea,t),Ha===null){var a=t.alternate;a!==null&&a.memoizedState!==null&&(Ha=t)}}else Se()}function Se(){q(Yt,Yt.current),q(Ea,Ea.current)}function Ia(t){X(Ea),Ha===t&&(Ha=null),X(Yt)}var Yt=j(0);function Kr(t){for(var a=t;a!==null;){if(a.tag===13){var e=a.memoizedState;if(e!==null&&(e=e.dehydrated,e===null||e.data==="$?"||Fu(e)))return a}else if(a.tag===19&&a.memoizedProps.revealOrder!==void 0){if((a.flags&128)!==0)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===t)break;for(;a.sibling===null;){if(a.return===null||a.return===t)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}function uu(t,a,e,n){a=t.memoizedState,e=e(n,a),e=e==null?a:_({},a,e),t.memoizedState=e,t.lanes===0&&(t.updateQueue.baseState=e)}var cu={enqueueSetState:function(t,a,e){t=t._reactInternals;var n=ba(),l=ve(n);l.payload=a,e!=null&&(l.callback=e),a=pe(t,l,n),a!==null&&(ga(a,t,n),Tl(a,t,n))},enqueueReplaceState:function(t,a,e){t=t._reactInternals;var n=ba(),l=ve(n);l.tag=1,l.payload=a,e!=null&&(l.callback=e),a=pe(t,l,n),a!==null&&(ga(a,t,n),Tl(a,t,n))},enqueueForceUpdate:function(t,a){t=t._reactInternals;var e=ba(),n=ve(e);n.tag=2,a!=null&&(n.callback=a),a=pe(t,n,e),a!==null&&(ga(a,t,e),Tl(a,t,e))}};function sd(t,a,e,n,l,i,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(n,i,s):a.prototype&&a.prototype.isPureReactComponent?!ml(e,n)||!ml(l,i):!0}function fd(t,a,e,n){t=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(e,n),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(e,n),a.state!==t&&cu.enqueueReplaceState(a,a.state,null)}function nn(t,a){var e=a;if("ref"in a){e={};for(var n in a)n!=="ref"&&(e[n]=a[n])}if(t=t.defaultProps){e===a&&(e=_({},e));for(var l in t)e[l]===void 0&&(e[l]=t[l])}return e}var $r=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(a))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function dd(t){$r(t)}function hd(t){console.error(t)}function md(t){$r(t)}function Jr(t,a){try{var e=t.onUncaughtError;e(a.value,{componentStack:a.stack})}catch(n){setTimeout(function(){throw n})}}function bd(t,a,e){try{var n=t.onCaughtError;n(e.value,{componentStack:e.stack,errorBoundary:a.tag===1?a.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function su(t,a,e){return e=ve(e),e.tag=3,e.payload={element:null},e.callback=function(){Jr(t,a)},e}function gd(t){return t=ve(t),t.tag=3,t}function vd(t,a,e,n){var l=e.type.getDerivedStateFromError;if(typeof l=="function"){var i=n.value;t.payload=function(){return l(i)},t.callback=function(){bd(a,e,n)}}var s=e.stateNode;s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){bd(a,e,n),typeof l!="function"&&(ze===null?ze=new Set([this]):ze.add(this));var d=n.stack;this.componentDidCatch(n.value,{componentStack:d!==null?d:""})})}function Cg(t,a,e,n,l){if(e.flags|=32768,n!==null&&typeof n=="object"&&typeof n.then=="function"){if(a=e.alternate,a!==null&&yl(a,e,l,!0),e=Ea.current,e!==null){switch(e.tag){case 13:return Ha===null?ju():e.alternate===null&&Ct===0&&(Ct=3),e.flags&=-257,e.flags|=65536,e.lanes=l,n===Yo?e.flags|=16384:(a=e.updateQueue,a===null?e.updateQueue=new Set([n]):a.add(n),Uu(t,n,l)),!1;case 22:return e.flags|=65536,n===Yo?e.flags|=16384:(a=e.updateQueue,a===null?(a={transitions:null,markerInstances:null,retryQueue:new Set([n])},e.updateQueue=a):(e=a.retryQueue,e===null?a.retryQueue=new Set([n]):e.add(n)),Uu(t,n,l)),!1}throw Error(u(435,e.tag))}return Uu(t,n,l),ju(),!1}if(ht)return a=Ea.current,a!==null?((a.flags&65536)===0&&(a.flags|=256),a.flags|=65536,a.lanes=l,n!==No&&(t=Error(u(422),{cause:n}),pl(Sa(t,e)))):(n!==No&&(a=Error(u(423),{cause:n}),pl(Sa(a,e))),t=t.current.alternate,t.flags|=65536,l&=-l,t.lanes|=l,n=Sa(n,e),l=su(t.stateNode,n,l),Xo(t,l),Ct!==4&&(Ct=2)),!1;var i=Error(u(520),{cause:n});if(i=Sa(i,e),Yl===null?Yl=[i]:Yl.push(i),Ct!==4&&(Ct=2),a===null)return!0;n=Sa(n,e),e=a;do{switch(e.tag){case 3:return e.flags|=65536,t=l&-l,e.lanes|=t,t=su(e.stateNode,n,t),Xo(e,t),!1;case 1:if(a=e.type,i=e.stateNode,(e.flags&128)===0&&(typeof a.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(ze===null||!ze.has(i))))return e.flags|=65536,l&=-l,e.lanes|=l,l=gd(l),vd(l,t,e,n),Xo(e,l),!1}e=e.return}while(e!==null);return!1}var pd=Error(u(461)),Xt=!1;function Vt(t,a,e,n){a.child=t===null?ud(a,null,e,n):Hn(a,t.child,e,n)}function yd(t,a,e,n,l){e=e.render;var i=a.ref;if("ref"in n){var s={};for(var d in n)d!=="ref"&&(s[d]=n[d])}else s=n;return tn(a),n=Po(t,a,e,s,i,l),d=Ko(),t!==null&&!Xt?($o(t,a,l),te(t,a,l)):(ht&&d&&Do(a),a.flags|=1,Vt(t,a,n,l),a.child)}function xd(t,a,e,n,l){if(t===null){var i=e.type;return typeof i=="function"&&!zo(i)&&i.defaultProps===void 0&&e.compare===null?(a.tag=15,a.type=i,Sd(t,a,i,n,l)):(t=Mr(e.type,null,n,a,a.mode,l),t.ref=a.ref,t.return=a,a.child=t)}if(i=t.child,!pu(t,l)){var s=i.memoizedProps;if(e=e.compare,e=e!==null?e:ml,e(s,n)&&t.ref===a.ref)return te(t,a,l)}return a.flags|=1,t=Pa(i,n),t.ref=a.ref,t.return=a,a.child=t}function Sd(t,a,e,n,l){if(t!==null){var i=t.memoizedProps;if(ml(i,n)&&t.ref===a.ref)if(Xt=!1,a.pendingProps=n=i,pu(t,l))(t.flags&131072)!==0&&(Xt=!0);else return a.lanes=t.lanes,te(t,a,l)}return fu(t,a,e,n,l)}function Od(t,a,e){var n=a.pendingProps,l=n.children,i=t!==null?t.memoizedState:null;if(n.mode==="hidden"){if((a.flags&128)!==0){if(n=i!==null?i.baseLanes|e:e,t!==null){for(l=a.child=t.child,i=0;l!==null;)i=i|l.lanes|l.childLanes,l=l.sibling;a.childLanes=i&~n}else a.childLanes=0,a.child=null;return Ad(t,a,n,e)}if((e&536870912)!==0)a.memoizedState={baseLanes:0,cachePool:null},t!==null&&jr(a,i!==null?i.cachePool:null),i!==null?Sf(a,i):Qo(),cd(a);else return a.lanes=a.childLanes=536870912,Ad(t,a,i!==null?i.baseLanes|e:e,e)}else i!==null?(jr(a,i.cachePool),Sf(a,i),Se(),a.memoizedState=null):(t!==null&&jr(a,null),Qo(),Se());return Vt(t,a,l,e),a.child}function Ad(t,a,e,n){var l=qo();return l=l===null?null:{parent:qt._currentValue,pool:l},a.memoizedState={baseLanes:e,cachePool:l},t!==null&&jr(a,null),Qo(),cd(a),t!==null&&yl(t,a,n,!0),null}function Fr(t,a){var e=a.ref;if(e===null)t!==null&&t.ref!==null&&(a.flags|=4194816);else{if(typeof e!="function"&&typeof e!="object")throw Error(u(284));(t===null||t.ref!==e)&&(a.flags|=4194816)}}function fu(t,a,e,n,l){return tn(a),e=Po(t,a,e,n,void 0,l),n=Ko(),t!==null&&!Xt?($o(t,a,l),te(t,a,l)):(ht&&n&&Do(a),a.flags|=1,Vt(t,a,e,l),a.child)}function Td(t,a,e,n,l,i){return tn(a),a.updateQueue=null,e=Af(a,n,e,l),Of(t),n=Ko(),t!==null&&!Xt?($o(t,a,i),te(t,a,i)):(ht&&n&&Do(a),a.flags|=1,Vt(t,a,e,i),a.child)}function Ed(t,a,e,n,l){if(tn(a),a.stateNode===null){var i=zn,s=e.contextType;typeof s=="object"&&s!==null&&(i=Wt(s)),i=new e(n,i),a.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=cu,a.stateNode=i,i._reactInternals=a,i=a.stateNode,i.props=n,i.state=a.memoizedState,i.refs={},Bo(a),s=e.contextType,i.context=typeof s=="object"&&s!==null?Wt(s):zn,i.state=a.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(uu(a,e,s,n),i.state=a.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(s=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),s!==i.state&&cu.enqueueReplaceState(i,i.state,null),_l(a,n,i,l),El(),i.state=a.memoizedState),typeof i.componentDidMount=="function"&&(a.flags|=4194308),n=!0}else if(t===null){i=a.stateNode;var d=a.memoizedProps,b=nn(e,d);i.props=b;var A=i.context,z=e.contextType;s=zn,typeof z=="object"&&z!==null&&(s=Wt(z));var w=e.getDerivedStateFromProps;z=typeof w=="function"||typeof i.getSnapshotBeforeUpdate=="function",d=a.pendingProps!==d,z||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(d||A!==s)&&fd(a,i,n,s),ge=!1;var T=a.memoizedState;i.state=T,_l(a,n,i,l),El(),A=a.memoizedState,d||T!==A||ge?(typeof w=="function"&&(uu(a,e,w,n),A=a.memoizedState),(b=ge||sd(a,e,b,n,T,A,s))?(z||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(a.flags|=4194308)):(typeof i.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=n,a.memoizedState=A),i.props=n,i.state=A,i.context=s,n=b):(typeof i.componentDidMount=="function"&&(a.flags|=4194308),n=!1)}else{i=a.stateNode,Lo(t,a),s=a.memoizedProps,z=nn(e,s),i.props=z,w=a.pendingProps,T=i.context,A=e.contextType,b=zn,typeof A=="object"&&A!==null&&(b=Wt(A)),d=e.getDerivedStateFromProps,(A=typeof d=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==w||T!==b)&&fd(a,i,n,b),ge=!1,T=a.memoizedState,i.state=T,_l(a,n,i,l),El();var E=a.memoizedState;s!==w||T!==E||ge||t!==null&&t.dependencies!==null&&Nr(t.dependencies)?(typeof d=="function"&&(uu(a,e,d,n),E=a.memoizedState),(z=ge||sd(a,e,z,n,T,E,b)||t!==null&&t.dependencies!==null&&Nr(t.dependencies))?(A||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(n,E,b),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(n,E,b)),typeof i.componentDidUpdate=="function"&&(a.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof i.componentDidUpdate!="function"||s===t.memoizedProps&&T===t.memoizedState||(a.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===t.memoizedProps&&T===t.memoizedState||(a.flags|=1024),a.memoizedProps=n,a.memoizedState=E),i.props=n,i.state=E,i.context=b,n=z):(typeof i.componentDidUpdate!="function"||s===t.memoizedProps&&T===t.memoizedState||(a.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===t.memoizedProps&&T===t.memoizedState||(a.flags|=1024),n=!1)}return i=n,Fr(t,a),n=(a.flags&128)!==0,i||n?(i=a.stateNode,e=n&&typeof e.getDerivedStateFromError!="function"?null:i.render(),a.flags|=1,t!==null&&n?(a.child=Hn(a,t.child,null,l),a.child=Hn(a,null,e,l)):Vt(t,a,e,l),a.memoizedState=i.state,t=a.child):t=te(t,a,l),t}function _d(t,a,e,n){return vl(),a.flags|=256,Vt(t,a,e,n),a.child}var du={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function hu(t){return{baseLanes:t,cachePool:hf()}}function mu(t,a,e){return t=t!==null?t.childLanes&~e:0,a&&(t|=_a),t}function zd(t,a,e){var n=a.pendingProps,l=!1,i=(a.flags&128)!==0,s;if((s=i)||(s=t!==null&&t.memoizedState===null?!1:(Yt.current&2)!==0),s&&(l=!0,a.flags&=-129),s=(a.flags&32)!==0,a.flags&=-33,t===null){if(ht){if(l?xe(a):Se(),ht){var d=Nt,b;if(b=d){t:{for(b=d,d=Ua;b.nodeType!==8;){if(!d){d=null;break t}if(b=Da(b.nextSibling),b===null){d=null;break t}}d=b}d!==null?(a.memoizedState={dehydrated:d,treeContext:$e!==null?{id:Ka,overflow:$a}:null,retryLane:536870912,hydrationErrors:null},b=fa(18,null,null,0),b.stateNode=d,b.return=a,a.child=b,aa=a,Nt=null,b=!0):b=!1}b||We(a)}if(d=a.memoizedState,d!==null&&(d=d.dehydrated,d!==null))return Fu(d)?a.lanes=32:a.lanes=536870912,null;Ia(a)}return d=n.children,n=n.fallback,l?(Se(),l=a.mode,d=Wr({mode:"hidden",children:d},l),n=Ke(n,l,e,null),d.return=a,n.return=a,d.sibling=n,a.child=d,l=a.child,l.memoizedState=hu(e),l.childLanes=mu(t,s,e),a.memoizedState=du,n):(xe(a),bu(a,d))}if(b=t.memoizedState,b!==null&&(d=b.dehydrated,d!==null)){if(i)a.flags&256?(xe(a),a.flags&=-257,a=gu(t,a,e)):a.memoizedState!==null?(Se(),a.child=t.child,a.flags|=128,a=null):(Se(),l=n.fallback,d=a.mode,n=Wr({mode:"visible",children:n.children},d),l=Ke(l,d,e,null),l.flags|=2,n.return=a,l.return=a,n.sibling=l,a.child=n,Hn(a,t.child,null,e),n=a.child,n.memoizedState=hu(e),n.childLanes=mu(t,s,e),a.memoizedState=du,a=l);else if(xe(a),Fu(d)){if(s=d.nextSibling&&d.nextSibling.dataset,s)var A=s.dgst;s=A,n=Error(u(419)),n.stack="",n.digest=s,pl({value:n,source:null,stack:null}),a=gu(t,a,e)}else if(Xt||yl(t,a,e,!1),s=(e&t.childLanes)!==0,Xt||s){if(s=Et,s!==null&&(n=e&-e,n=(n&42)!==0?1:Fi(n),n=(n&(s.suspendedLanes|e))!==0?0:n,n!==0&&n!==b.retryLane))throw b.retryLane=n,_n(t,n),ga(s,t,n),pd;d.data==="$?"||ju(),a=gu(t,a,e)}else d.data==="$?"?(a.flags|=192,a.child=t.child,a=null):(t=b.treeContext,Nt=Da(d.nextSibling),aa=a,ht=!0,Fe=null,Ua=!1,t!==null&&(Aa[Ta++]=Ka,Aa[Ta++]=$a,Aa[Ta++]=$e,Ka=t.id,$a=t.overflow,$e=a),a=bu(a,n.children),a.flags|=4096);return a}return l?(Se(),l=n.fallback,d=a.mode,b=t.child,A=b.sibling,n=Pa(b,{mode:"hidden",children:n.children}),n.subtreeFlags=b.subtreeFlags&65011712,A!==null?l=Pa(A,l):(l=Ke(l,d,e,null),l.flags|=2),l.return=a,n.return=a,n.sibling=l,a.child=n,n=l,l=a.child,d=t.child.memoizedState,d===null?d=hu(e):(b=d.cachePool,b!==null?(A=qt._currentValue,b=b.parent!==A?{parent:A,pool:A}:b):b=hf(),d={baseLanes:d.baseLanes|e,cachePool:b}),l.memoizedState=d,l.childLanes=mu(t,s,e),a.memoizedState=du,n):(xe(a),e=t.child,t=e.sibling,e=Pa(e,{mode:"visible",children:n.children}),e.return=a,e.sibling=null,t!==null&&(s=a.deletions,s===null?(a.deletions=[t],a.flags|=16):s.push(t)),a.child=e,a.memoizedState=null,e)}function bu(t,a){return a=Wr({mode:"visible",children:a},t.mode),a.return=t,t.child=a}function Wr(t,a){return t=fa(22,t,null,a),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function gu(t,a,e){return Hn(a,t.child,null,e),t=bu(a,a.pendingProps.children),t.flags|=2,a.memoizedState=null,t}function kd(t,a,e){t.lanes|=a;var n=t.alternate;n!==null&&(n.lanes|=a),jo(t.return,a,e)}function vu(t,a,e,n,l){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:n,tail:e,tailMode:l}:(i.isBackwards=a,i.rendering=null,i.renderingStartTime=0,i.last=n,i.tail=e,i.tailMode=l)}function Md(t,a,e){var n=a.pendingProps,l=n.revealOrder,i=n.tail;if(Vt(t,a,n.children,e),n=Yt.current,(n&2)!==0)n=n&1|2,a.flags|=128;else{if(t!==null&&(t.flags&128)!==0)t:for(t=a.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&kd(t,e,a);else if(t.tag===19)kd(t,e,a);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===a)break t;for(;t.sibling===null;){if(t.return===null||t.return===a)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}n&=1}switch(q(Yt,n),l){case"forwards":for(e=a.child,l=null;e!==null;)t=e.alternate,t!==null&&Kr(t)===null&&(l=e),e=e.sibling;e=l,e===null?(l=a.child,a.child=null):(l=e.sibling,e.sibling=null),vu(a,!1,l,e,i);break;case"backwards":for(e=null,l=a.child,a.child=null;l!==null;){if(t=l.alternate,t!==null&&Kr(t)===null){a.child=l;break}t=l.sibling,l.sibling=e,e=l,l=t}vu(a,!0,e,null,i);break;case"together":vu(a,!1,null,null,void 0);break;default:a.memoizedState=null}return a.child}function te(t,a,e){if(t!==null&&(a.dependencies=t.dependencies),_e|=a.lanes,(e&a.childLanes)===0)if(t!==null){if(yl(t,a,e,!1),(e&a.childLanes)===0)return null}else return null;if(t!==null&&a.child!==t.child)throw Error(u(153));if(a.child!==null){for(t=a.child,e=Pa(t,t.pendingProps),a.child=e,e.return=a;t.sibling!==null;)t=t.sibling,e=e.sibling=Pa(t,t.pendingProps),e.return=a;e.sibling=null}return a.child}function pu(t,a){return(t.lanes&a)!==0?!0:(t=t.dependencies,!!(t!==null&&Nr(t)))}function jg(t,a,e){switch(a.tag){case 3:kt(a,a.stateNode.containerInfo),be(a,qt,t.memoizedState.cache),vl();break;case 27:case 5:Vi(a);break;case 4:kt(a,a.stateNode.containerInfo);break;case 10:be(a,a.type,a.memoizedProps.value);break;case 13:var n=a.memoizedState;if(n!==null)return n.dehydrated!==null?(xe(a),a.flags|=128,null):(e&a.child.childLanes)!==0?zd(t,a,e):(xe(a),t=te(t,a,e),t!==null?t.sibling:null);xe(a);break;case 19:var l=(t.flags&128)!==0;if(n=(e&a.childLanes)!==0,n||(yl(t,a,e,!1),n=(e&a.childLanes)!==0),l){if(n)return Md(t,a,e);a.flags|=128}if(l=a.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),q(Yt,Yt.current),n)break;return null;case 22:case 23:return a.lanes=0,Od(t,a,e);case 24:be(a,qt,t.memoizedState.cache)}return te(t,a,e)}function Dd(t,a,e){if(t!==null)if(t.memoizedProps!==a.pendingProps)Xt=!0;else{if(!pu(t,e)&&(a.flags&128)===0)return Xt=!1,jg(t,a,e);Xt=(t.flags&131072)!==0}else Xt=!1,ht&&(a.flags&1048576)!==0&&rf(a,wr,a.index);switch(a.lanes=0,a.tag){case 16:t:{t=a.pendingProps;var n=a.elementType,l=n._init;if(n=l(n._payload),a.type=n,typeof n=="function")zo(n)?(t=nn(n,t),a.tag=1,a=Ed(null,a,n,t,e)):(a.tag=0,a=fu(null,a,n,t,e));else{if(n!=null){if(l=n.$$typeof,l===gt){a.tag=11,a=yd(null,a,n,t,e);break t}else if(l===Tt){a.tag=14,a=xd(null,a,n,t,e);break t}}throw a=Xe(n)||n,Error(u(306,a,""))}}return a;case 0:return fu(t,a,a.type,a.pendingProps,e);case 1:return n=a.type,l=nn(n,a.pendingProps),Ed(t,a,n,l,e);case 3:t:{if(kt(a,a.stateNode.containerInfo),t===null)throw Error(u(387));n=a.pendingProps;var i=a.memoizedState;l=i.element,Lo(t,a),_l(a,n,null,e);var s=a.memoizedState;if(n=s.cache,be(a,qt,n),n!==i.cache&&Ro(a,[qt],e,!0),El(),n=s.element,i.isDehydrated)if(i={element:n,isDehydrated:!1,cache:s.cache},a.updateQueue.baseState=i,a.memoizedState=i,a.flags&256){a=_d(t,a,n,e);break t}else if(n!==l){l=Sa(Error(u(424)),a),pl(l),a=_d(t,a,n,e);break t}else{switch(t=a.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Nt=Da(t.firstChild),aa=a,ht=!0,Fe=null,Ua=!0,e=ud(a,null,n,e),a.child=e;e;)e.flags=e.flags&-3|4096,e=e.sibling}else{if(vl(),n===l){a=te(t,a,e);break t}Vt(t,a,n,e)}a=a.child}return a;case 26:return Fr(t,a),t===null?(e=jh(a.type,null,a.pendingProps,null))?a.memoizedState=e:ht||(e=a.type,t=a.pendingProps,n=di(at.current).createElement(e),n[Ft]=a,n[ea]=t,Kt(n,e,t),Lt(n),a.stateNode=n):a.memoizedState=jh(a.type,t.memoizedProps,a.pendingProps,t.memoizedState),null;case 27:return Vi(a),t===null&&ht&&(n=a.stateNode=wh(a.type,a.pendingProps,at.current),aa=a,Ua=!0,l=Nt,De(a.type)?(Wu=l,Nt=Da(n.firstChild)):Nt=l),Vt(t,a,a.pendingProps.children,e),Fr(t,a),t===null&&(a.flags|=4194304),a.child;case 5:return t===null&&ht&&((l=n=Nt)&&(n=uv(n,a.type,a.pendingProps,Ua),n!==null?(a.stateNode=n,aa=a,Nt=Da(n.firstChild),Ua=!1,l=!0):l=!1),l||We(a)),Vi(a),l=a.type,i=a.pendingProps,s=t!==null?t.memoizedProps:null,n=i.children,Ku(l,i)?n=null:s!==null&&Ku(l,s)&&(a.flags|=32),a.memoizedState!==null&&(l=Po(t,a,_g,null,null,e),Kl._currentValue=l),Fr(t,a),Vt(t,a,n,e),a.child;case 6:return t===null&&ht&&((t=e=Nt)&&(e=cv(e,a.pendingProps,Ua),e!==null?(a.stateNode=e,aa=a,Nt=null,t=!0):t=!1),t||We(a)),null;case 13:return zd(t,a,e);case 4:return kt(a,a.stateNode.containerInfo),n=a.pendingProps,t===null?a.child=Hn(a,null,n,e):Vt(t,a,n,e),a.child;case 11:return yd(t,a,a.type,a.pendingProps,e);case 7:return Vt(t,a,a.pendingProps,e),a.child;case 8:return Vt(t,a,a.pendingProps.children,e),a.child;case 12:return Vt(t,a,a.pendingProps.children,e),a.child;case 10:return n=a.pendingProps,be(a,a.type,n.value),Vt(t,a,n.children,e),a.child;case 9:return l=a.type._context,n=a.pendingProps.children,tn(a),l=Wt(l),n=n(l),a.flags|=1,Vt(t,a,n,e),a.child;case 14:return xd(t,a,a.type,a.pendingProps,e);case 15:return Sd(t,a,a.type,a.pendingProps,e);case 19:return Md(t,a,e);case 31:return n=a.pendingProps,e=a.mode,n={mode:n.mode,children:n.children},t===null?(e=Wr(n,e),e.ref=a.ref,a.child=e,e.return=a,a=e):(e=Pa(t.child,n),e.ref=a.ref,a.child=e,e.return=a,a=e),a;case 22:return Od(t,a,e);case 24:return tn(a),n=Wt(qt),t===null?(l=qo(),l===null&&(l=Et,i=Uo(),l.pooledCache=i,i.refCount++,i!==null&&(l.pooledCacheLanes|=e),l=i),a.memoizedState={parent:n,cache:l},Bo(a),be(a,qt,l)):((t.lanes&e)!==0&&(Lo(t,a),_l(a,null,null,e),El()),l=t.memoizedState,i=a.memoizedState,l.parent!==n?(l={parent:n,cache:n},a.memoizedState=l,a.lanes===0&&(a.memoizedState=a.updateQueue.baseState=l),be(a,qt,n)):(n=i.cache,be(a,qt,n),n!==l.cache&&Ro(a,[qt],e,!0))),Vt(t,a,a.pendingProps.children,e),a.child;case 29:throw a.pendingProps}throw Error(u(156,a.tag))}function ae(t){t.flags|=4}function wd(t,a){if(a.type!=="stylesheet"||(a.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Yh(a)){if(a=Ea.current,a!==null&&((st&4194048)===st?Ha!==null:(st&62914560)!==st&&(st&536870912)===0||a!==Ha))throw Al=Yo,mf;t.flags|=8192}}function Ir(t,a){a!==null&&(t.flags|=4),t.flags&16384&&(a=t.tag!==22?us():536870912,t.lanes|=a,Ln|=a)}function Cl(t,a){if(!ht)switch(t.tailMode){case"hidden":a=t.tail;for(var e=null;a!==null;)a.alternate!==null&&(e=a),a=a.sibling;e===null?t.tail=null:e.sibling=null;break;case"collapsed":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?a||t.tail===null?t.tail=null:t.tail.sibling=null:n.sibling=null}}function wt(t){var a=t.alternate!==null&&t.alternate.child===t.child,e=0,n=0;if(a)for(var l=t.child;l!==null;)e|=l.lanes|l.childLanes,n|=l.subtreeFlags&65011712,n|=l.flags&65011712,l.return=t,l=l.sibling;else for(l=t.child;l!==null;)e|=l.lanes|l.childLanes,n|=l.subtreeFlags,n|=l.flags,l.return=t,l=l.sibling;return t.subtreeFlags|=n,t.childLanes=e,a}function Rg(t,a,e){var n=a.pendingProps;switch(wo(a),a.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return wt(a),null;case 1:return wt(a),null;case 3:return e=a.stateNode,n=null,t!==null&&(n=t.memoizedState.cache),a.memoizedState.cache!==n&&(a.flags|=2048),Fa(qt),fe(),e.pendingContext&&(e.context=e.pendingContext,e.pendingContext=null),(t===null||t.child===null)&&(gl(a)?ae(a):t===null||t.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,cf())),wt(a),null;case 26:return e=a.memoizedState,t===null?(ae(a),e!==null?(wt(a),wd(a,e)):(wt(a),a.flags&=-16777217)):e?e!==t.memoizedState?(ae(a),wt(a),wd(a,e)):(wt(a),a.flags&=-16777217):(t.memoizedProps!==n&&ae(a),wt(a),a.flags&=-16777217),null;case 27:sr(a),e=at.current;var l=a.type;if(t!==null&&a.stateNode!=null)t.memoizedProps!==n&&ae(a);else{if(!n){if(a.stateNode===null)throw Error(u(166));return wt(a),null}t=K.current,gl(a)?of(a):(t=wh(l,n,e),a.stateNode=t,ae(a))}return wt(a),null;case 5:if(sr(a),e=a.type,t!==null&&a.stateNode!=null)t.memoizedProps!==n&&ae(a);else{if(!n){if(a.stateNode===null)throw Error(u(166));return wt(a),null}if(t=K.current,gl(a))of(a);else{switch(l=di(at.current),t){case 1:t=l.createElementNS("http://www.w3.org/2000/svg",e);break;case 2:t=l.createElementNS("http://www.w3.org/1998/Math/MathML",e);break;default:switch(e){case"svg":t=l.createElementNS("http://www.w3.org/2000/svg",e);break;case"math":t=l.createElementNS("http://www.w3.org/1998/Math/MathML",e);break;case"script":t=l.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof n.is=="string"?l.createElement("select",{is:n.is}):l.createElement("select"),n.multiple?t.multiple=!0:n.size&&(t.size=n.size);break;default:t=typeof n.is=="string"?l.createElement(e,{is:n.is}):l.createElement(e)}}t[Ft]=a,t[ea]=n;t:for(l=a.child;l!==null;){if(l.tag===5||l.tag===6)t.appendChild(l.stateNode);else if(l.tag!==4&&l.tag!==27&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===a)break t;for(;l.sibling===null;){if(l.return===null||l.return===a)break t;l=l.return}l.sibling.return=l.return,l=l.sibling}a.stateNode=t;t:switch(Kt(t,e,n),e){case"button":case"input":case"select":case"textarea":t=!!n.autoFocus;break t;case"img":t=!0;break t;default:t=!1}t&&ae(a)}}return wt(a),a.flags&=-16777217,null;case 6:if(t&&a.stateNode!=null)t.memoizedProps!==n&&ae(a);else{if(typeof n!="string"&&a.stateNode===null)throw Error(u(166));if(t=at.current,gl(a)){if(t=a.stateNode,e=a.memoizedProps,n=null,l=aa,l!==null)switch(l.tag){case 27:case 5:n=l.memoizedProps}t[Ft]=a,t=!!(t.nodeValue===e||n!==null&&n.suppressHydrationWarning===!0||Th(t.nodeValue,e)),t||We(a)}else t=di(t).createTextNode(n),t[Ft]=a,a.stateNode=t}return wt(a),null;case 13:if(n=a.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(l=gl(a),n!==null&&n.dehydrated!==null){if(t===null){if(!l)throw Error(u(318));if(l=a.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(u(317));l[Ft]=a}else vl(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;wt(a),l=!1}else l=cf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=l),l=!0;if(!l)return a.flags&256?(Ia(a),a):(Ia(a),null)}if(Ia(a),(a.flags&128)!==0)return a.lanes=e,a;if(e=n!==null,t=t!==null&&t.memoizedState!==null,e){n=a.child,l=null,n.alternate!==null&&n.alternate.memoizedState!==null&&n.alternate.memoizedState.cachePool!==null&&(l=n.alternate.memoizedState.cachePool.pool);var i=null;n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(i=n.memoizedState.cachePool.pool),i!==l&&(n.flags|=2048)}return e!==t&&e&&(a.child.flags|=8192),Ir(a,a.updateQueue),wt(a),null;case 4:return fe(),t===null&&Gu(a.stateNode.containerInfo),wt(a),null;case 10:return Fa(a.type),wt(a),null;case 19:if(X(Yt),l=a.memoizedState,l===null)return wt(a),null;if(n=(a.flags&128)!==0,i=l.rendering,i===null)if(n)Cl(l,!1);else{if(Ct!==0||t!==null&&(t.flags&128)!==0)for(t=a.child;t!==null;){if(i=Kr(t),i!==null){for(a.flags|=128,Cl(l,!1),t=i.updateQueue,a.updateQueue=t,Ir(a,t),a.subtreeFlags=0,t=e,e=a.child;e!==null;)lf(e,t),e=e.sibling;return q(Yt,Yt.current&1|2),a.child}t=t.sibling}l.tail!==null&&Ra()>ei&&(a.flags|=128,n=!0,Cl(l,!1),a.lanes=4194304)}else{if(!n)if(t=Kr(i),t!==null){if(a.flags|=128,n=!0,t=t.updateQueue,a.updateQueue=t,Ir(a,t),Cl(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!ht)return wt(a),null}else 2*Ra()-l.renderingStartTime>ei&&e!==536870912&&(a.flags|=128,n=!0,Cl(l,!1),a.lanes=4194304);l.isBackwards?(i.sibling=a.child,a.child=i):(t=l.last,t!==null?t.sibling=i:a.child=i,l.last=i)}return l.tail!==null?(a=l.tail,l.rendering=a,l.tail=a.sibling,l.renderingStartTime=Ra(),a.sibling=null,t=Yt.current,q(Yt,n?t&1|2:t&1),a):(wt(a),null);case 22:case 23:return Ia(a),Zo(),n=a.memoizedState!==null,t!==null?t.memoizedState!==null!==n&&(a.flags|=8192):n&&(a.flags|=8192),n?(e&536870912)!==0&&(a.flags&128)===0&&(wt(a),a.subtreeFlags&6&&(a.flags|=8192)):wt(a),e=a.updateQueue,e!==null&&Ir(a,e.retryQueue),e=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),n=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(n=a.memoizedState.cachePool.pool),n!==e&&(a.flags|=2048),t!==null&&X(an),null;case 24:return e=null,t!==null&&(e=t.memoizedState.cache),a.memoizedState.cache!==e&&(a.flags|=2048),Fa(qt),wt(a),null;case 25:return null;case 30:return null}throw Error(u(156,a.tag))}function Ug(t,a){switch(wo(a),a.tag){case 1:return t=a.flags,t&65536?(a.flags=t&-65537|128,a):null;case 3:return Fa(qt),fe(),t=a.flags,(t&65536)!==0&&(t&128)===0?(a.flags=t&-65537|128,a):null;case 26:case 27:case 5:return sr(a),null;case 13:if(Ia(a),t=a.memoizedState,t!==null&&t.dehydrated!==null){if(a.alternate===null)throw Error(u(340));vl()}return t=a.flags,t&65536?(a.flags=t&-65537|128,a):null;case 19:return X(Yt),null;case 4:return fe(),null;case 10:return Fa(a.type),null;case 22:case 23:return Ia(a),Zo(),t!==null&&X(an),t=a.flags,t&65536?(a.flags=t&-65537|128,a):null;case 24:return Fa(qt),null;case 25:return null;default:return null}}function Nd(t,a){switch(wo(a),a.tag){case 3:Fa(qt),fe();break;case 26:case 27:case 5:sr(a);break;case 4:fe();break;case 13:Ia(a);break;case 19:X(Yt);break;case 10:Fa(a.type);break;case 22:case 23:Ia(a),Zo(),t!==null&&X(an);break;case 24:Fa(qt)}}function jl(t,a){try{var e=a.updateQueue,n=e!==null?e.lastEffect:null;if(n!==null){var l=n.next;e=l;do{if((e.tag&t)===t){n=void 0;var i=e.create,s=e.inst;n=i(),s.destroy=n}e=e.next}while(e!==l)}}catch(d){At(a,a.return,d)}}function Oe(t,a,e){try{var n=a.updateQueue,l=n!==null?n.lastEffect:null;if(l!==null){var i=l.next;n=i;do{if((n.tag&t)===t){var s=n.inst,d=s.destroy;if(d!==void 0){s.destroy=void 0,l=a;var b=e,A=d;try{A()}catch(z){At(l,b,z)}}}n=n.next}while(n!==i)}}catch(z){At(a,a.return,z)}}function Cd(t){var a=t.updateQueue;if(a!==null){var e=t.stateNode;try{xf(a,e)}catch(n){At(t,t.return,n)}}}function jd(t,a,e){e.props=nn(t.type,t.memoizedProps),e.state=t.memoizedState;try{e.componentWillUnmount()}catch(n){At(t,a,n)}}function Rl(t,a){try{var e=t.ref;if(e!==null){switch(t.tag){case 26:case 27:case 5:var n=t.stateNode;break;case 30:n=t.stateNode;break;default:n=t.stateNode}typeof e=="function"?t.refCleanup=e(n):e.current=n}}catch(l){At(t,a,l)}}function qa(t,a){var e=t.ref,n=t.refCleanup;if(e!==null)if(typeof n=="function")try{n()}catch(l){At(t,a,l)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof e=="function")try{e(null)}catch(l){At(t,a,l)}else e.current=null}function Rd(t){var a=t.type,e=t.memoizedProps,n=t.stateNode;try{t:switch(a){case"button":case"input":case"select":case"textarea":e.autoFocus&&n.focus();break t;case"img":e.src?n.src=e.src:e.srcSet&&(n.srcset=e.srcSet)}}catch(l){At(t,t.return,l)}}function yu(t,a,e){try{var n=t.stateNode;nv(n,t.type,e,a),n[ea]=a}catch(l){At(t,t.return,l)}}function Ud(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&De(t.type)||t.tag===4}function xu(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Ud(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&De(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Su(t,a,e){var n=t.tag;if(n===5||n===6)t=t.stateNode,a?(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e).insertBefore(t,a):(a=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.appendChild(t),e=e._reactRootContainer,e!=null||a.onclick!==null||(a.onclick=fi));else if(n!==4&&(n===27&&De(t.type)&&(e=t.stateNode,a=null),t=t.child,t!==null))for(Su(t,a,e),t=t.sibling;t!==null;)Su(t,a,e),t=t.sibling}function ti(t,a,e){var n=t.tag;if(n===5||n===6)t=t.stateNode,a?e.insertBefore(t,a):e.appendChild(t);else if(n!==4&&(n===27&&De(t.type)&&(e=t.stateNode),t=t.child,t!==null))for(ti(t,a,e),t=t.sibling;t!==null;)ti(t,a,e),t=t.sibling}function Hd(t){var a=t.stateNode,e=t.memoizedProps;try{for(var n=t.type,l=a.attributes;l.length;)a.removeAttributeNode(l[0]);Kt(a,n,e),a[Ft]=t,a[ea]=e}catch(i){At(t,t.return,i)}}var ee=!1,Rt=!1,Ou=!1,qd=typeof WeakSet=="function"?WeakSet:Set,Gt=null;function Hg(t,a){if(t=t.containerInfo,Vu=pi,t=Ks(t),xo(t)){if("selectionStart"in t)var e={start:t.selectionStart,end:t.selectionEnd};else t:{e=(e=t.ownerDocument)&&e.defaultView||window;var n=e.getSelection&&e.getSelection();if(n&&n.rangeCount!==0){e=n.anchorNode;var l=n.anchorOffset,i=n.focusNode;n=n.focusOffset;try{e.nodeType,i.nodeType}catch{e=null;break t}var s=0,d=-1,b=-1,A=0,z=0,w=t,T=null;a:for(;;){for(var E;w!==e||l!==0&&w.nodeType!==3||(d=s+l),w!==i||n!==0&&w.nodeType!==3||(b=s+n),w.nodeType===3&&(s+=w.nodeValue.length),(E=w.firstChild)!==null;)T=w,w=E;for(;;){if(w===t)break a;if(T===e&&++A===l&&(d=s),T===i&&++z===n&&(b=s),(E=w.nextSibling)!==null)break;w=T,T=w.parentNode}w=E}e=d===-1||b===-1?null:{start:d,end:b}}else e=null}e=e||{start:0,end:0}}else e=null;for(Pu={focusedElem:t,selectionRange:e},pi=!1,Gt=a;Gt!==null;)if(a=Gt,t=a.child,(a.subtreeFlags&1024)!==0&&t!==null)t.return=a,Gt=t;else for(;Gt!==null;){switch(a=Gt,i=a.alternate,t=a.flags,a.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&i!==null){t=void 0,e=a,l=i.memoizedProps,i=i.memoizedState,n=e.stateNode;try{var W=nn(e.type,l,e.elementType===e.type);t=n.getSnapshotBeforeUpdate(W,i),n.__reactInternalSnapshotBeforeUpdate=t}catch($){At(e,e.return,$)}}break;case 3:if((t&1024)!==0){if(t=a.stateNode.containerInfo,e=t.nodeType,e===9)Ju(t);else if(e===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Ju(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(u(163))}if(t=a.sibling,t!==null){t.return=a.return,Gt=t;break}Gt=a.return}}function Yd(t,a,e){var n=e.flags;switch(e.tag){case 0:case 11:case 15:Ae(t,e),n&4&&jl(5,e);break;case 1:if(Ae(t,e),n&4)if(t=e.stateNode,a===null)try{t.componentDidMount()}catch(s){At(e,e.return,s)}else{var l=nn(e.type,a.memoizedProps);a=a.memoizedState;try{t.componentDidUpdate(l,a,t.__reactInternalSnapshotBeforeUpdate)}catch(s){At(e,e.return,s)}}n&64&&Cd(e),n&512&&Rl(e,e.return);break;case 3:if(Ae(t,e),n&64&&(t=e.updateQueue,t!==null)){if(a=null,e.child!==null)switch(e.child.tag){case 27:case 5:a=e.child.stateNode;break;case 1:a=e.child.stateNode}try{xf(t,a)}catch(s){At(e,e.return,s)}}break;case 27:a===null&&n&4&&Hd(e);case 26:case 5:Ae(t,e),a===null&&n&4&&Rd(e),n&512&&Rl(e,e.return);break;case 12:Ae(t,e);break;case 13:Ae(t,e),n&4&&Xd(t,e),n&64&&(t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(e=Vg.bind(null,e),sv(t,e))));break;case 22:if(n=e.memoizedState!==null||ee,!n){a=a!==null&&a.memoizedState!==null||Rt,l=ee;var i=Rt;ee=n,(Rt=a)&&!i?Te(t,e,(e.subtreeFlags&8772)!==0):Ae(t,e),ee=l,Rt=i}break;case 30:break;default:Ae(t,e)}}function Bd(t){var a=t.alternate;a!==null&&(t.alternate=null,Bd(a)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(a=t.stateNode,a!==null&&to(a)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Mt=null,ra=!1;function ne(t,a,e){for(e=e.child;e!==null;)Ld(t,a,e),e=e.sibling}function Ld(t,a,e){if(ua&&typeof ua.onCommitFiberUnmount=="function")try{ua.onCommitFiberUnmount(el,e)}catch{}switch(e.tag){case 26:Rt||qa(e,a),ne(t,a,e),e.memoizedState?e.memoizedState.count--:e.stateNode&&(e=e.stateNode,e.parentNode.removeChild(e));break;case 27:Rt||qa(e,a);var n=Mt,l=ra;De(e.type)&&(Mt=e.stateNode,ra=!1),ne(t,a,e),Ql(e.stateNode),Mt=n,ra=l;break;case 5:Rt||qa(e,a);case 6:if(n=Mt,l=ra,Mt=null,ne(t,a,e),Mt=n,ra=l,Mt!==null)if(ra)try{(Mt.nodeType===9?Mt.body:Mt.nodeName==="HTML"?Mt.ownerDocument.body:Mt).removeChild(e.stateNode)}catch(i){At(e,a,i)}else try{Mt.removeChild(e.stateNode)}catch(i){At(e,a,i)}break;case 18:Mt!==null&&(ra?(t=Mt,Mh(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,e.stateNode),Wl(t)):Mh(Mt,e.stateNode));break;case 4:n=Mt,l=ra,Mt=e.stateNode.containerInfo,ra=!0,ne(t,a,e),Mt=n,ra=l;break;case 0:case 11:case 14:case 15:Rt||Oe(2,e,a),Rt||Oe(4,e,a),ne(t,a,e);break;case 1:Rt||(qa(e,a),n=e.stateNode,typeof n.componentWillUnmount=="function"&&jd(e,a,n)),ne(t,a,e);break;case 21:ne(t,a,e);break;case 22:Rt=(n=Rt)||e.memoizedState!==null,ne(t,a,e),Rt=n;break;default:ne(t,a,e)}}function Xd(t,a){if(a.memoizedState===null&&(t=a.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Wl(t)}catch(e){At(a,a.return,e)}}function qg(t){switch(t.tag){case 13:case 19:var a=t.stateNode;return a===null&&(a=t.stateNode=new qd),a;case 22:return t=t.stateNode,a=t._retryCache,a===null&&(a=t._retryCache=new qd),a;default:throw Error(u(435,t.tag))}}function Au(t,a){var e=qg(t);a.forEach(function(n){var l=Pg.bind(null,t,n);e.has(n)||(e.add(n),n.then(l,l))})}function da(t,a){var e=a.deletions;if(e!==null)for(var n=0;n<e.length;n++){var l=e[n],i=t,s=a,d=s;t:for(;d!==null;){switch(d.tag){case 27:if(De(d.type)){Mt=d.stateNode,ra=!1;break t}break;case 5:Mt=d.stateNode,ra=!1;break t;case 3:case 4:Mt=d.stateNode.containerInfo,ra=!0;break t}d=d.return}if(Mt===null)throw Error(u(160));Ld(i,s,l),Mt=null,ra=!1,i=l.alternate,i!==null&&(i.return=null),l.return=null}if(a.subtreeFlags&13878)for(a=a.child;a!==null;)Gd(a,t),a=a.sibling}var Ma=null;function Gd(t,a){var e=t.alternate,n=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:da(a,t),ha(t),n&4&&(Oe(3,t,t.return),jl(3,t),Oe(5,t,t.return));break;case 1:da(a,t),ha(t),n&512&&(Rt||e===null||qa(e,e.return)),n&64&&ee&&(t=t.updateQueue,t!==null&&(n=t.callbacks,n!==null&&(e=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=e===null?n:e.concat(n))));break;case 26:var l=Ma;if(da(a,t),ha(t),n&512&&(Rt||e===null||qa(e,e.return)),n&4){var i=e!==null?e.memoizedState:null;if(n=t.memoizedState,e===null)if(n===null)if(t.stateNode===null){t:{n=t.type,e=t.memoizedProps,l=l.ownerDocument||l;a:switch(n){case"title":i=l.getElementsByTagName("title")[0],(!i||i[rl]||i[Ft]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=l.createElement(n),l.head.insertBefore(i,l.querySelector("head > title"))),Kt(i,n,e),i[Ft]=t,Lt(i),n=i;break t;case"link":var s=Hh("link","href",l).get(n+(e.href||""));if(s){for(var d=0;d<s.length;d++)if(i=s[d],i.getAttribute("href")===(e.href==null||e.href===""?null:e.href)&&i.getAttribute("rel")===(e.rel==null?null:e.rel)&&i.getAttribute("title")===(e.title==null?null:e.title)&&i.getAttribute("crossorigin")===(e.crossOrigin==null?null:e.crossOrigin)){s.splice(d,1);break a}}i=l.createElement(n),Kt(i,n,e),l.head.appendChild(i);break;case"meta":if(s=Hh("meta","content",l).get(n+(e.content||""))){for(d=0;d<s.length;d++)if(i=s[d],i.getAttribute("content")===(e.content==null?null:""+e.content)&&i.getAttribute("name")===(e.name==null?null:e.name)&&i.getAttribute("property")===(e.property==null?null:e.property)&&i.getAttribute("http-equiv")===(e.httpEquiv==null?null:e.httpEquiv)&&i.getAttribute("charset")===(e.charSet==null?null:e.charSet)){s.splice(d,1);break a}}i=l.createElement(n),Kt(i,n,e),l.head.appendChild(i);break;default:throw Error(u(468,n))}i[Ft]=t,Lt(i),n=i}t.stateNode=n}else qh(l,t.type,t.stateNode);else t.stateNode=Uh(l,n,t.memoizedProps);else i!==n?(i===null?e.stateNode!==null&&(e=e.stateNode,e.parentNode.removeChild(e)):i.count--,n===null?qh(l,t.type,t.stateNode):Uh(l,n,t.memoizedProps)):n===null&&t.stateNode!==null&&yu(t,t.memoizedProps,e.memoizedProps)}break;case 27:da(a,t),ha(t),n&512&&(Rt||e===null||qa(e,e.return)),e!==null&&n&4&&yu(t,t.memoizedProps,e.memoizedProps);break;case 5:if(da(a,t),ha(t),n&512&&(Rt||e===null||qa(e,e.return)),t.flags&32){l=t.stateNode;try{yn(l,"")}catch(E){At(t,t.return,E)}}n&4&&t.stateNode!=null&&(l=t.memoizedProps,yu(t,l,e!==null?e.memoizedProps:l)),n&1024&&(Ou=!0);break;case 6:if(da(a,t),ha(t),n&4){if(t.stateNode===null)throw Error(u(162));n=t.memoizedProps,e=t.stateNode;try{e.nodeValue=n}catch(E){At(t,t.return,E)}}break;case 3:if(bi=null,l=Ma,Ma=hi(a.containerInfo),da(a,t),Ma=l,ha(t),n&4&&e!==null&&e.memoizedState.isDehydrated)try{Wl(a.containerInfo)}catch(E){At(t,t.return,E)}Ou&&(Ou=!1,Qd(t));break;case 4:n=Ma,Ma=hi(t.stateNode.containerInfo),da(a,t),ha(t),Ma=n;break;case 12:da(a,t),ha(t);break;case 13:da(a,t),ha(t),t.child.flags&8192&&t.memoizedState!==null!=(e!==null&&e.memoizedState!==null)&&(Mu=Ra()),n&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Au(t,n)));break;case 22:l=t.memoizedState!==null;var b=e!==null&&e.memoizedState!==null,A=ee,z=Rt;if(ee=A||l,Rt=z||b,da(a,t),Rt=z,ee=A,ha(t),n&8192)t:for(a=t.stateNode,a._visibility=l?a._visibility&-2:a._visibility|1,l&&(e===null||b||ee||Rt||ln(t)),e=null,a=t;;){if(a.tag===5||a.tag===26){if(e===null){b=e=a;try{if(i=b.stateNode,l)s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none";else{d=b.stateNode;var w=b.memoizedProps.style,T=w!=null&&w.hasOwnProperty("display")?w.display:null;d.style.display=T==null||typeof T=="boolean"?"":(""+T).trim()}}catch(E){At(b,b.return,E)}}}else if(a.tag===6){if(e===null){b=a;try{b.stateNode.nodeValue=l?"":b.memoizedProps}catch(E){At(b,b.return,E)}}}else if((a.tag!==22&&a.tag!==23||a.memoizedState===null||a===t)&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===t)break t;for(;a.sibling===null;){if(a.return===null||a.return===t)break t;e===a&&(e=null),a=a.return}e===a&&(e=null),a.sibling.return=a.return,a=a.sibling}n&4&&(n=t.updateQueue,n!==null&&(e=n.retryQueue,e!==null&&(n.retryQueue=null,Au(t,e))));break;case 19:da(a,t),ha(t),n&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Au(t,n)));break;case 30:break;case 21:break;default:da(a,t),ha(t)}}function ha(t){var a=t.flags;if(a&2){try{for(var e,n=t.return;n!==null;){if(Ud(n)){e=n;break}n=n.return}if(e==null)throw Error(u(160));switch(e.tag){case 27:var l=e.stateNode,i=xu(t);ti(t,i,l);break;case 5:var s=e.stateNode;e.flags&32&&(yn(s,""),e.flags&=-33);var d=xu(t);ti(t,d,s);break;case 3:case 4:var b=e.stateNode.containerInfo,A=xu(t);Su(t,A,b);break;default:throw Error(u(161))}}catch(z){At(t,t.return,z)}t.flags&=-3}a&4096&&(t.flags&=-4097)}function Qd(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var a=t;Qd(a),a.tag===5&&a.flags&1024&&a.stateNode.reset(),t=t.sibling}}function Ae(t,a){if(a.subtreeFlags&8772)for(a=a.child;a!==null;)Yd(t,a.alternate,a),a=a.sibling}function ln(t){for(t=t.child;t!==null;){var a=t;switch(a.tag){case 0:case 11:case 14:case 15:Oe(4,a,a.return),ln(a);break;case 1:qa(a,a.return);var e=a.stateNode;typeof e.componentWillUnmount=="function"&&jd(a,a.return,e),ln(a);break;case 27:Ql(a.stateNode);case 26:case 5:qa(a,a.return),ln(a);break;case 22:a.memoizedState===null&&ln(a);break;case 30:ln(a);break;default:ln(a)}t=t.sibling}}function Te(t,a,e){for(e=e&&(a.subtreeFlags&8772)!==0,a=a.child;a!==null;){var n=a.alternate,l=t,i=a,s=i.flags;switch(i.tag){case 0:case 11:case 15:Te(l,i,e),jl(4,i);break;case 1:if(Te(l,i,e),n=i,l=n.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(A){At(n,n.return,A)}if(n=i,l=n.updateQueue,l!==null){var d=n.stateNode;try{var b=l.shared.hiddenCallbacks;if(b!==null)for(l.shared.hiddenCallbacks=null,l=0;l<b.length;l++)yf(b[l],d)}catch(A){At(n,n.return,A)}}e&&s&64&&Cd(i),Rl(i,i.return);break;case 27:Hd(i);case 26:case 5:Te(l,i,e),e&&n===null&&s&4&&Rd(i),Rl(i,i.return);break;case 12:Te(l,i,e);break;case 13:Te(l,i,e),e&&s&4&&Xd(l,i);break;case 22:i.memoizedState===null&&Te(l,i,e),Rl(i,i.return);break;case 30:break;default:Te(l,i,e)}a=a.sibling}}function Tu(t,a){var e=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),t=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(t=a.memoizedState.cachePool.pool),t!==e&&(t!=null&&t.refCount++,e!=null&&xl(e))}function Eu(t,a){t=null,a.alternate!==null&&(t=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==t&&(a.refCount++,t!=null&&xl(t))}function Ya(t,a,e,n){if(a.subtreeFlags&10256)for(a=a.child;a!==null;)Zd(t,a,e,n),a=a.sibling}function Zd(t,a,e,n){var l=a.flags;switch(a.tag){case 0:case 11:case 15:Ya(t,a,e,n),l&2048&&jl(9,a);break;case 1:Ya(t,a,e,n);break;case 3:Ya(t,a,e,n),l&2048&&(t=null,a.alternate!==null&&(t=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==t&&(a.refCount++,t!=null&&xl(t)));break;case 12:if(l&2048){Ya(t,a,e,n),t=a.stateNode;try{var i=a.memoizedProps,s=i.id,d=i.onPostCommit;typeof d=="function"&&d(s,a.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(b){At(a,a.return,b)}}else Ya(t,a,e,n);break;case 13:Ya(t,a,e,n);break;case 23:break;case 22:i=a.stateNode,s=a.alternate,a.memoizedState!==null?i._visibility&2?Ya(t,a,e,n):Ul(t,a):i._visibility&2?Ya(t,a,e,n):(i._visibility|=2,qn(t,a,e,n,(a.subtreeFlags&10256)!==0)),l&2048&&Tu(s,a);break;case 24:Ya(t,a,e,n),l&2048&&Eu(a.alternate,a);break;default:Ya(t,a,e,n)}}function qn(t,a,e,n,l){for(l=l&&(a.subtreeFlags&10256)!==0,a=a.child;a!==null;){var i=t,s=a,d=e,b=n,A=s.flags;switch(s.tag){case 0:case 11:case 15:qn(i,s,d,b,l),jl(8,s);break;case 23:break;case 22:var z=s.stateNode;s.memoizedState!==null?z._visibility&2?qn(i,s,d,b,l):Ul(i,s):(z._visibility|=2,qn(i,s,d,b,l)),l&&A&2048&&Tu(s.alternate,s);break;case 24:qn(i,s,d,b,l),l&&A&2048&&Eu(s.alternate,s);break;default:qn(i,s,d,b,l)}a=a.sibling}}function Ul(t,a){if(a.subtreeFlags&10256)for(a=a.child;a!==null;){var e=t,n=a,l=n.flags;switch(n.tag){case 22:Ul(e,n),l&2048&&Tu(n.alternate,n);break;case 24:Ul(e,n),l&2048&&Eu(n.alternate,n);break;default:Ul(e,n)}a=a.sibling}}var Hl=8192;function Yn(t){if(t.subtreeFlags&Hl)for(t=t.child;t!==null;)Vd(t),t=t.sibling}function Vd(t){switch(t.tag){case 26:Yn(t),t.flags&Hl&&t.memoizedState!==null&&Av(Ma,t.memoizedState,t.memoizedProps);break;case 5:Yn(t);break;case 3:case 4:var a=Ma;Ma=hi(t.stateNode.containerInfo),Yn(t),Ma=a;break;case 22:t.memoizedState===null&&(a=t.alternate,a!==null&&a.memoizedState!==null?(a=Hl,Hl=16777216,Yn(t),Hl=a):Yn(t));break;default:Yn(t)}}function Pd(t){var a=t.alternate;if(a!==null&&(t=a.child,t!==null)){a.child=null;do a=t.sibling,t.sibling=null,t=a;while(t!==null)}}function ql(t){var a=t.deletions;if((t.flags&16)!==0){if(a!==null)for(var e=0;e<a.length;e++){var n=a[e];Gt=n,$d(n,t)}Pd(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Kd(t),t=t.sibling}function Kd(t){switch(t.tag){case 0:case 11:case 15:ql(t),t.flags&2048&&Oe(9,t,t.return);break;case 3:ql(t);break;case 12:ql(t);break;case 22:var a=t.stateNode;t.memoizedState!==null&&a._visibility&2&&(t.return===null||t.return.tag!==13)?(a._visibility&=-3,ai(t)):ql(t);break;default:ql(t)}}function ai(t){var a=t.deletions;if((t.flags&16)!==0){if(a!==null)for(var e=0;e<a.length;e++){var n=a[e];Gt=n,$d(n,t)}Pd(t)}for(t=t.child;t!==null;){switch(a=t,a.tag){case 0:case 11:case 15:Oe(8,a,a.return),ai(a);break;case 22:e=a.stateNode,e._visibility&2&&(e._visibility&=-3,ai(a));break;default:ai(a)}t=t.sibling}}function $d(t,a){for(;Gt!==null;){var e=Gt;switch(e.tag){case 0:case 11:case 15:Oe(8,e,a);break;case 23:case 22:if(e.memoizedState!==null&&e.memoizedState.cachePool!==null){var n=e.memoizedState.cachePool.pool;n!=null&&n.refCount++}break;case 24:xl(e.memoizedState.cache)}if(n=e.child,n!==null)n.return=e,Gt=n;else t:for(e=t;Gt!==null;){n=Gt;var l=n.sibling,i=n.return;if(Bd(n),n===e){Gt=null;break t}if(l!==null){l.return=i,Gt=l;break t}Gt=i}}}var Yg={getCacheForType:function(t){var a=Wt(qt),e=a.data.get(t);return e===void 0&&(e=t(),a.data.set(t,e)),e}},Bg=typeof WeakMap=="function"?WeakMap:Map,mt=0,Et=null,ot=null,st=0,bt=0,ma=null,Ee=!1,Bn=!1,_u=!1,le=0,Ct=0,_e=0,rn=0,zu=0,_a=0,Ln=0,Yl=null,ia=null,ku=!1,Mu=0,ei=1/0,ni=null,ze=null,Pt=0,ke=null,Xn=null,Gn=0,Du=0,wu=null,Jd=null,Bl=0,Nu=null;function ba(){if((mt&2)!==0&&st!==0)return st&-st;if(k.T!==null){var t=Dn;return t!==0?t:Yu()}return fs()}function Fd(){_a===0&&(_a=(st&536870912)===0||ht?os():536870912);var t=Ea.current;return t!==null&&(t.flags|=32),_a}function ga(t,a,e){(t===Et&&(bt===2||bt===9)||t.cancelPendingCommit!==null)&&(Qn(t,0),Me(t,st,_a,!1)),ll(t,e),((mt&2)===0||t!==Et)&&(t===Et&&((mt&2)===0&&(rn|=e),Ct===4&&Me(t,st,_a,!1)),Ba(t))}function Wd(t,a,e){if((mt&6)!==0)throw Error(u(327));var n=!e&&(a&124)===0&&(a&t.expiredLanes)===0||nl(t,a),l=n?Gg(t,a):Ru(t,a,!0),i=n;do{if(l===0){Bn&&!n&&Me(t,a,0,!1);break}else{if(e=t.current.alternate,i&&!Lg(e)){l=Ru(t,a,!1),i=!1;continue}if(l===2){if(i=a,t.errorRecoveryDisabledLanes&i)var s=0;else s=t.pendingLanes&-536870913,s=s!==0?s:s&536870912?536870912:0;if(s!==0){a=s;t:{var d=t;l=Yl;var b=d.current.memoizedState.isDehydrated;if(b&&(Qn(d,s).flags|=256),s=Ru(d,s,!1),s!==2){if(_u&&!b){d.errorRecoveryDisabledLanes|=i,rn|=i,l=4;break t}i=ia,ia=l,i!==null&&(ia===null?ia=i:ia.push.apply(ia,i))}l=s}if(i=!1,l!==2)continue}}if(l===1){Qn(t,0),Me(t,a,0,!0);break}t:{switch(n=t,i=l,i){case 0:case 1:throw Error(u(345));case 4:if((a&4194048)!==a)break;case 6:Me(n,a,_a,!Ee);break t;case 2:ia=null;break;case 3:case 5:break;default:throw Error(u(329))}if((a&62914560)===a&&(l=Mu+300-Ra(),10<l)){if(Me(n,a,_a,!Ee),mr(n,0,!0)!==0)break t;n.timeoutHandle=zh(Id.bind(null,n,e,ia,ni,ku,a,_a,rn,Ln,Ee,i,2,-0,0),l);break t}Id(n,e,ia,ni,ku,a,_a,rn,Ln,Ee,i,0,-0,0)}}break}while(!0);Ba(t)}function Id(t,a,e,n,l,i,s,d,b,A,z,w,T,E){if(t.timeoutHandle=-1,w=a.subtreeFlags,(w&8192||(w&16785408)===16785408)&&(Pl={stylesheets:null,count:0,unsuspend:Ov},Vd(a),w=Tv(),w!==null)){t.cancelPendingCommit=w(ih.bind(null,t,a,i,e,n,l,s,d,b,z,1,T,E)),Me(t,i,s,!A);return}ih(t,a,i,e,n,l,s,d,b)}function Lg(t){for(var a=t;;){var e=a.tag;if((e===0||e===11||e===15)&&a.flags&16384&&(e=a.updateQueue,e!==null&&(e=e.stores,e!==null)))for(var n=0;n<e.length;n++){var l=e[n],i=l.getSnapshot;l=l.value;try{if(!sa(i(),l))return!1}catch{return!1}}if(e=a.child,a.subtreeFlags&16384&&e!==null)e.return=a,a=e;else{if(a===t)break;for(;a.sibling===null;){if(a.return===null||a.return===t)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function Me(t,a,e,n){a&=~zu,a&=~rn,t.suspendedLanes|=a,t.pingedLanes&=~a,n&&(t.warmLanes|=a),n=t.expirationTimes;for(var l=a;0<l;){var i=31-ca(l),s=1<<i;n[i]=-1,l&=~s}e!==0&&cs(t,e,a)}function li(){return(mt&6)===0?(Ll(0),!1):!0}function Cu(){if(ot!==null){if(bt===0)var t=ot.return;else t=ot,Ja=Ie=null,Jo(t),Un=null,wl=0,t=ot;for(;t!==null;)Nd(t.alternate,t),t=t.return;ot=null}}function Qn(t,a){var e=t.timeoutHandle;e!==-1&&(t.timeoutHandle=-1,rv(e)),e=t.cancelPendingCommit,e!==null&&(t.cancelPendingCommit=null,e()),Cu(),Et=t,ot=e=Pa(t.current,null),st=a,bt=0,ma=null,Ee=!1,Bn=nl(t,a),_u=!1,Ln=_a=zu=rn=_e=Ct=0,ia=Yl=null,ku=!1,(a&8)!==0&&(a|=a&32);var n=t.entangledLanes;if(n!==0)for(t=t.entanglements,n&=a;0<n;){var l=31-ca(n),i=1<<l;a|=t[l],n&=~i}return le=a,_r(),e}function th(t,a){lt=null,k.H=Zr,a===Ol||a===Rr?(a=vf(),bt=3):a===mf?(a=vf(),bt=4):bt=a===pd?8:a!==null&&typeof a=="object"&&typeof a.then=="function"?6:1,ma=a,ot===null&&(Ct=1,Jr(t,Sa(a,t.current)))}function ah(){var t=k.H;return k.H=Zr,t===null?Zr:t}function eh(){var t=k.A;return k.A=Yg,t}function ju(){Ct=4,Ee||(st&4194048)!==st&&Ea.current!==null||(Bn=!0),(_e&134217727)===0&&(rn&134217727)===0||Et===null||Me(Et,st,_a,!1)}function Ru(t,a,e){var n=mt;mt|=2;var l=ah(),i=eh();(Et!==t||st!==a)&&(ni=null,Qn(t,a)),a=!1;var s=Ct;t:do try{if(bt!==0&&ot!==null){var d=ot,b=ma;switch(bt){case 8:Cu(),s=6;break t;case 3:case 2:case 9:case 6:Ea.current===null&&(a=!0);var A=bt;if(bt=0,ma=null,Zn(t,d,b,A),e&&Bn){s=0;break t}break;default:A=bt,bt=0,ma=null,Zn(t,d,b,A)}}Xg(),s=Ct;break}catch(z){th(t,z)}while(!0);return a&&t.shellSuspendCounter++,Ja=Ie=null,mt=n,k.H=l,k.A=i,ot===null&&(Et=null,st=0,_r()),s}function Xg(){for(;ot!==null;)nh(ot)}function Gg(t,a){var e=mt;mt|=2;var n=ah(),l=eh();Et!==t||st!==a?(ni=null,ei=Ra()+500,Qn(t,a)):Bn=nl(t,a);t:do try{if(bt!==0&&ot!==null){a=ot;var i=ma;a:switch(bt){case 1:bt=0,ma=null,Zn(t,a,i,1);break;case 2:case 9:if(bf(i)){bt=0,ma=null,lh(a);break}a=function(){bt!==2&&bt!==9||Et!==t||(bt=7),Ba(t)},i.then(a,a);break t;case 3:bt=7;break t;case 4:bt=5;break t;case 7:bf(i)?(bt=0,ma=null,lh(a)):(bt=0,ma=null,Zn(t,a,i,7));break;case 5:var s=null;switch(ot.tag){case 26:s=ot.memoizedState;case 5:case 27:var d=ot;if(!s||Yh(s)){bt=0,ma=null;var b=d.sibling;if(b!==null)ot=b;else{var A=d.return;A!==null?(ot=A,ri(A)):ot=null}break a}}bt=0,ma=null,Zn(t,a,i,5);break;case 6:bt=0,ma=null,Zn(t,a,i,6);break;case 8:Cu(),Ct=6;break t;default:throw Error(u(462))}}Qg();break}catch(z){th(t,z)}while(!0);return Ja=Ie=null,k.H=n,k.A=l,mt=e,ot!==null?0:(Et=null,st=0,_r(),Ct)}function Qg(){for(;ot!==null&&!db();)nh(ot)}function nh(t){var a=Dd(t.alternate,t,le);t.memoizedProps=t.pendingProps,a===null?ri(t):ot=a}function lh(t){var a=t,e=a.alternate;switch(a.tag){case 15:case 0:a=Td(e,a,a.pendingProps,a.type,void 0,st);break;case 11:a=Td(e,a,a.pendingProps,a.type.render,a.ref,st);break;case 5:Jo(a);default:Nd(e,a),a=ot=lf(a,le),a=Dd(e,a,le)}t.memoizedProps=t.pendingProps,a===null?ri(t):ot=a}function Zn(t,a,e,n){Ja=Ie=null,Jo(a),Un=null,wl=0;var l=a.return;try{if(Cg(t,l,a,e,st)){Ct=1,Jr(t,Sa(e,t.current)),ot=null;return}}catch(i){if(l!==null)throw ot=l,i;Ct=1,Jr(t,Sa(e,t.current)),ot=null;return}a.flags&32768?(ht||n===1?t=!0:Bn||(st&536870912)!==0?t=!1:(Ee=t=!0,(n===2||n===9||n===3||n===6)&&(n=Ea.current,n!==null&&n.tag===13&&(n.flags|=16384))),rh(a,t)):ri(a)}function ri(t){var a=t;do{if((a.flags&32768)!==0){rh(a,Ee);return}t=a.return;var e=Rg(a.alternate,a,le);if(e!==null){ot=e;return}if(a=a.sibling,a!==null){ot=a;return}ot=a=t}while(a!==null);Ct===0&&(Ct=5)}function rh(t,a){do{var e=Ug(t.alternate,t);if(e!==null){e.flags&=32767,ot=e;return}if(e=t.return,e!==null&&(e.flags|=32768,e.subtreeFlags=0,e.deletions=null),!a&&(t=t.sibling,t!==null)){ot=t;return}ot=t=e}while(t!==null);Ct=6,ot=null}function ih(t,a,e,n,l,i,s,d,b){t.cancelPendingCommit=null;do ii();while(Pt!==0);if((mt&6)!==0)throw Error(u(327));if(a!==null){if(a===t.current)throw Error(u(177));if(i=a.lanes|a.childLanes,i|=Eo,Ob(t,e,i,s,d,b),t===Et&&(ot=Et=null,st=0),Xn=a,ke=t,Gn=e,Du=i,wu=l,Jd=n,(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Kg(fr,function(){return fh(),null})):(t.callbackNode=null,t.callbackPriority=0),n=(a.flags&13878)!==0,(a.subtreeFlags&13878)!==0||n){n=k.T,k.T=null,l=Y.p,Y.p=2,s=mt,mt|=4;try{Hg(t,a,e)}finally{mt=s,Y.p=l,k.T=n}}Pt=1,oh(),uh(),ch()}}function oh(){if(Pt===1){Pt=0;var t=ke,a=Xn,e=(a.flags&13878)!==0;if((a.subtreeFlags&13878)!==0||e){e=k.T,k.T=null;var n=Y.p;Y.p=2;var l=mt;mt|=4;try{Gd(a,t);var i=Pu,s=Ks(t.containerInfo),d=i.focusedElem,b=i.selectionRange;if(s!==d&&d&&d.ownerDocument&&Ps(d.ownerDocument.documentElement,d)){if(b!==null&&xo(d)){var A=b.start,z=b.end;if(z===void 0&&(z=A),"selectionStart"in d)d.selectionStart=A,d.selectionEnd=Math.min(z,d.value.length);else{var w=d.ownerDocument||document,T=w&&w.defaultView||window;if(T.getSelection){var E=T.getSelection(),W=d.textContent.length,$=Math.min(b.start,W),St=b.end===void 0?$:Math.min(b.end,W);!E.extend&&$>St&&(s=St,St=$,$=s);var S=Vs(d,$),y=Vs(d,St);if(S&&y&&(E.rangeCount!==1||E.anchorNode!==S.node||E.anchorOffset!==S.offset||E.focusNode!==y.node||E.focusOffset!==y.offset)){var O=w.createRange();O.setStart(S.node,S.offset),E.removeAllRanges(),$>St?(E.addRange(O),E.extend(y.node,y.offset)):(O.setEnd(y.node,y.offset),E.addRange(O))}}}}for(w=[],E=d;E=E.parentNode;)E.nodeType===1&&w.push({element:E,left:E.scrollLeft,top:E.scrollTop});for(typeof d.focus=="function"&&d.focus(),d=0;d<w.length;d++){var M=w[d];M.element.scrollLeft=M.left,M.element.scrollTop=M.top}}pi=!!Vu,Pu=Vu=null}finally{mt=l,Y.p=n,k.T=e}}t.current=a,Pt=2}}function uh(){if(Pt===2){Pt=0;var t=ke,a=Xn,e=(a.flags&8772)!==0;if((a.subtreeFlags&8772)!==0||e){e=k.T,k.T=null;var n=Y.p;Y.p=2;var l=mt;mt|=4;try{Yd(t,a.alternate,a)}finally{mt=l,Y.p=n,k.T=e}}Pt=3}}function ch(){if(Pt===4||Pt===3){Pt=0,hb();var t=ke,a=Xn,e=Gn,n=Jd;(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?Pt=5:(Pt=0,Xn=ke=null,sh(t,t.pendingLanes));var l=t.pendingLanes;if(l===0&&(ze=null),Wi(e),a=a.stateNode,ua&&typeof ua.onCommitFiberRoot=="function")try{ua.onCommitFiberRoot(el,a,void 0,(a.current.flags&128)===128)}catch{}if(n!==null){a=k.T,l=Y.p,Y.p=2,k.T=null;try{for(var i=t.onRecoverableError,s=0;s<n.length;s++){var d=n[s];i(d.value,{componentStack:d.stack})}}finally{k.T=a,Y.p=l}}(Gn&3)!==0&&ii(),Ba(t),l=t.pendingLanes,(e&4194090)!==0&&(l&42)!==0?t===Nu?Bl++:(Bl=0,Nu=t):Bl=0,Ll(0)}}function sh(t,a){(t.pooledCacheLanes&=a)===0&&(a=t.pooledCache,a!=null&&(t.pooledCache=null,xl(a)))}function ii(t){return oh(),uh(),ch(),fh()}function fh(){if(Pt!==5)return!1;var t=ke,a=Du;Du=0;var e=Wi(Gn),n=k.T,l=Y.p;try{Y.p=32>e?32:e,k.T=null,e=wu,wu=null;var i=ke,s=Gn;if(Pt=0,Xn=ke=null,Gn=0,(mt&6)!==0)throw Error(u(331));var d=mt;if(mt|=4,Kd(i.current),Zd(i,i.current,s,e),mt=d,Ll(0,!1),ua&&typeof ua.onPostCommitFiberRoot=="function")try{ua.onPostCommitFiberRoot(el,i)}catch{}return!0}finally{Y.p=l,k.T=n,sh(t,a)}}function dh(t,a,e){a=Sa(e,a),a=su(t.stateNode,a,2),t=pe(t,a,2),t!==null&&(ll(t,2),Ba(t))}function At(t,a,e){if(t.tag===3)dh(t,t,e);else for(;a!==null;){if(a.tag===3){dh(a,t,e);break}else if(a.tag===1){var n=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(ze===null||!ze.has(n))){t=Sa(e,t),e=gd(2),n=pe(a,e,2),n!==null&&(vd(e,n,a,t),ll(n,2),Ba(n));break}}a=a.return}}function Uu(t,a,e){var n=t.pingCache;if(n===null){n=t.pingCache=new Bg;var l=new Set;n.set(a,l)}else l=n.get(a),l===void 0&&(l=new Set,n.set(a,l));l.has(e)||(_u=!0,l.add(e),t=Zg.bind(null,t,a,e),a.then(t,t))}function Zg(t,a,e){var n=t.pingCache;n!==null&&n.delete(a),t.pingedLanes|=t.suspendedLanes&e,t.warmLanes&=~e,Et===t&&(st&e)===e&&(Ct===4||Ct===3&&(st&62914560)===st&&300>Ra()-Mu?(mt&2)===0&&Qn(t,0):zu|=e,Ln===st&&(Ln=0)),Ba(t)}function hh(t,a){a===0&&(a=us()),t=_n(t,a),t!==null&&(ll(t,a),Ba(t))}function Vg(t){var a=t.memoizedState,e=0;a!==null&&(e=a.retryLane),hh(t,e)}function Pg(t,a){var e=0;switch(t.tag){case 13:var n=t.stateNode,l=t.memoizedState;l!==null&&(e=l.retryLane);break;case 19:n=t.stateNode;break;case 22:n=t.stateNode._retryCache;break;default:throw Error(u(314))}n!==null&&n.delete(a),hh(t,e)}function Kg(t,a){return Ki(t,a)}var oi=null,Vn=null,Hu=!1,ui=!1,qu=!1,on=0;function Ba(t){t!==Vn&&t.next===null&&(Vn===null?oi=Vn=t:Vn=Vn.next=t),ui=!0,Hu||(Hu=!0,Jg())}function Ll(t,a){if(!qu&&ui){qu=!0;do for(var e=!1,n=oi;n!==null;){if(t!==0){var l=n.pendingLanes;if(l===0)var i=0;else{var s=n.suspendedLanes,d=n.pingedLanes;i=(1<<31-ca(42|t)+1)-1,i&=l&~(s&~d),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(e=!0,vh(n,i))}else i=st,i=mr(n,n===Et?i:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),(i&3)===0||nl(n,i)||(e=!0,vh(n,i));n=n.next}while(e);qu=!1}}function $g(){mh()}function mh(){ui=Hu=!1;var t=0;on!==0&&(lv()&&(t=on),on=0);for(var a=Ra(),e=null,n=oi;n!==null;){var l=n.next,i=bh(n,a);i===0?(n.next=null,e===null?oi=l:e.next=l,l===null&&(Vn=e)):(e=n,(t!==0||(i&3)!==0)&&(ui=!0)),n=l}Ll(t)}function bh(t,a){for(var e=t.suspendedLanes,n=t.pingedLanes,l=t.expirationTimes,i=t.pendingLanes&-62914561;0<i;){var s=31-ca(i),d=1<<s,b=l[s];b===-1?((d&e)===0||(d&n)!==0)&&(l[s]=Sb(d,a)):b<=a&&(t.expiredLanes|=d),i&=~d}if(a=Et,e=st,e=mr(t,t===a?e:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),n=t.callbackNode,e===0||t===a&&(bt===2||bt===9)||t.cancelPendingCommit!==null)return n!==null&&n!==null&&$i(n),t.callbackNode=null,t.callbackPriority=0;if((e&3)===0||nl(t,e)){if(a=e&-e,a===t.callbackPriority)return a;switch(n!==null&&$i(n),Wi(e)){case 2:case 8:e=rs;break;case 32:e=fr;break;case 268435456:e=is;break;default:e=fr}return n=gh.bind(null,t),e=Ki(e,n),t.callbackPriority=a,t.callbackNode=e,a}return n!==null&&n!==null&&$i(n),t.callbackPriority=2,t.callbackNode=null,2}function gh(t,a){if(Pt!==0&&Pt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var e=t.callbackNode;if(ii()&&t.callbackNode!==e)return null;var n=st;return n=mr(t,t===Et?n:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),n===0?null:(Wd(t,n,a),bh(t,Ra()),t.callbackNode!=null&&t.callbackNode===e?gh.bind(null,t):null)}function vh(t,a){if(ii())return null;Wd(t,a,!0)}function Jg(){iv(function(){(mt&6)!==0?Ki(ls,$g):mh()})}function Yu(){return on===0&&(on=os()),on}function ph(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:yr(""+t)}function yh(t,a){var e=a.ownerDocument.createElement("input");return e.name=a.name,e.value=a.value,t.id&&e.setAttribute("form",t.id),a.parentNode.insertBefore(e,a),t=new FormData(t),e.parentNode.removeChild(e),t}function Fg(t,a,e,n,l){if(a==="submit"&&e&&e.stateNode===l){var i=ph((l[ea]||null).action),s=n.submitter;s&&(a=(a=s[ea]||null)?ph(a.formAction):s.getAttribute("formAction"),a!==null&&(i=a,s=null));var d=new Ar("action","action",null,n,l);t.push({event:d,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(on!==0){var b=s?yh(l,s):new FormData(l);ru(e,{pending:!0,data:b,method:l.method,action:i},null,b)}}else typeof i=="function"&&(d.preventDefault(),b=s?yh(l,s):new FormData(l),ru(e,{pending:!0,data:b,method:l.method,action:i},i,b))},currentTarget:l}]})}}for(var Bu=0;Bu<To.length;Bu++){var Lu=To[Bu],Wg=Lu.toLowerCase(),Ig=Lu[0].toUpperCase()+Lu.slice(1);ka(Wg,"on"+Ig)}ka(Fs,"onAnimationEnd"),ka(Ws,"onAnimationIteration"),ka(Is,"onAnimationStart"),ka("dblclick","onDoubleClick"),ka("focusin","onFocus"),ka("focusout","onBlur"),ka(gg,"onTransitionRun"),ka(vg,"onTransitionStart"),ka(pg,"onTransitionCancel"),ka(tf,"onTransitionEnd"),gn("onMouseEnter",["mouseout","mouseover"]),gn("onMouseLeave",["mouseout","mouseover"]),gn("onPointerEnter",["pointerout","pointerover"]),gn("onPointerLeave",["pointerout","pointerover"]),Qe("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Qe("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Qe("onBeforeInput",["compositionend","keypress","textInput","paste"]),Qe("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Qe("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Qe("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Xl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),tv=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Xl));function xh(t,a){a=(a&4)!==0;for(var e=0;e<t.length;e++){var n=t[e],l=n.event;n=n.listeners;t:{var i=void 0;if(a)for(var s=n.length-1;0<=s;s--){var d=n[s],b=d.instance,A=d.currentTarget;if(d=d.listener,b!==i&&l.isPropagationStopped())break t;i=d,l.currentTarget=A;try{i(l)}catch(z){$r(z)}l.currentTarget=null,i=b}else for(s=0;s<n.length;s++){if(d=n[s],b=d.instance,A=d.currentTarget,d=d.listener,b!==i&&l.isPropagationStopped())break t;i=d,l.currentTarget=A;try{i(l)}catch(z){$r(z)}l.currentTarget=null,i=b}}}}function ut(t,a){var e=a[Ii];e===void 0&&(e=a[Ii]=new Set);var n=t+"__bubble";e.has(n)||(Sh(a,t,2,!1),e.add(n))}function Xu(t,a,e){var n=0;a&&(n|=4),Sh(e,t,n,a)}var ci="_reactListening"+Math.random().toString(36).slice(2);function Gu(t){if(!t[ci]){t[ci]=!0,hs.forEach(function(e){e!=="selectionchange"&&(tv.has(e)||Xu(e,!1,t),Xu(e,!0,t))});var a=t.nodeType===9?t:t.ownerDocument;a===null||a[ci]||(a[ci]=!0,Xu("selectionchange",!1,a))}}function Sh(t,a,e,n){switch(Zh(a)){case 2:var l=zv;break;case 8:l=kv;break;default:l=nc}e=l.bind(null,a,e,t),l=void 0,!so||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(l=!0),n?l!==void 0?t.addEventListener(a,e,{capture:!0,passive:l}):t.addEventListener(a,e,!0):l!==void 0?t.addEventListener(a,e,{passive:l}):t.addEventListener(a,e,!1)}function Qu(t,a,e,n,l){var i=n;if((a&1)===0&&(a&2)===0&&n!==null)t:for(;;){if(n===null)return;var s=n.tag;if(s===3||s===4){var d=n.stateNode.containerInfo;if(d===l)break;if(s===4)for(s=n.return;s!==null;){var b=s.tag;if((b===3||b===4)&&s.stateNode.containerInfo===l)return;s=s.return}for(;d!==null;){if(s=hn(d),s===null)return;if(b=s.tag,b===5||b===6||b===26||b===27){n=i=s;continue t}d=d.parentNode}}n=n.return}zs(function(){var A=i,z=uo(e),w=[];t:{var T=af.get(t);if(T!==void 0){var E=Ar,W=t;switch(t){case"keypress":if(Sr(e)===0)break t;case"keydown":case"keyup":E=Kb;break;case"focusin":W="focus",E=bo;break;case"focusout":W="blur",E=bo;break;case"beforeblur":case"afterblur":E=bo;break;case"click":if(e.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":E=Ds;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":E=Ub;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":E=Fb;break;case Fs:case Ws:case Is:E=Yb;break;case tf:E=Ib;break;case"scroll":case"scrollend":E=jb;break;case"wheel":E=ag;break;case"copy":case"cut":case"paste":E=Lb;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":E=Ns;break;case"toggle":case"beforetoggle":E=ng}var $=(a&4)!==0,St=!$&&(t==="scroll"||t==="scrollend"),S=$?T!==null?T+"Capture":null:T;$=[];for(var y=A,O;y!==null;){var M=y;if(O=M.stateNode,M=M.tag,M!==5&&M!==26&&M!==27||O===null||S===null||(M=ol(y,S),M!=null&&$.push(Gl(y,M,O))),St)break;y=y.return}0<$.length&&(T=new E(T,W,null,e,z),w.push({event:T,listeners:$}))}}if((a&7)===0){t:{if(T=t==="mouseover"||t==="pointerover",E=t==="mouseout"||t==="pointerout",T&&e!==oo&&(W=e.relatedTarget||e.fromElement)&&(hn(W)||W[dn]))break t;if((E||T)&&(T=z.window===z?z:(T=z.ownerDocument)?T.defaultView||T.parentWindow:window,E?(W=e.relatedTarget||e.toElement,E=A,W=W?hn(W):null,W!==null&&(St=h(W),$=W.tag,W!==St||$!==5&&$!==27&&$!==6)&&(W=null)):(E=null,W=A),E!==W)){if($=Ds,M="onMouseLeave",S="onMouseEnter",y="mouse",(t==="pointerout"||t==="pointerover")&&($=Ns,M="onPointerLeave",S="onPointerEnter",y="pointer"),St=E==null?T:il(E),O=W==null?T:il(W),T=new $(M,y+"leave",E,e,z),T.target=St,T.relatedTarget=O,M=null,hn(z)===A&&($=new $(S,y+"enter",W,e,z),$.target=O,$.relatedTarget=St,M=$),St=M,E&&W)a:{for($=E,S=W,y=0,O=$;O;O=Pn(O))y++;for(O=0,M=S;M;M=Pn(M))O++;for(;0<y-O;)$=Pn($),y--;for(;0<O-y;)S=Pn(S),O--;for(;y--;){if($===S||S!==null&&$===S.alternate)break a;$=Pn($),S=Pn(S)}$=null}else $=null;E!==null&&Oh(w,T,E,$,!1),W!==null&&St!==null&&Oh(w,St,W,$,!0)}}t:{if(T=A?il(A):window,E=T.nodeName&&T.nodeName.toLowerCase(),E==="select"||E==="input"&&T.type==="file")var G=Bs;else if(qs(T))if(Ls)G=hg;else{G=fg;var it=sg}else E=T.nodeName,!E||E.toLowerCase()!=="input"||T.type!=="checkbox"&&T.type!=="radio"?A&&io(A.elementType)&&(G=Bs):G=dg;if(G&&(G=G(t,A))){Ys(w,G,e,z);break t}it&&it(t,T,A),t==="focusout"&&A&&T.type==="number"&&A.memoizedProps.value!=null&&ro(T,"number",T.value)}switch(it=A?il(A):window,t){case"focusin":(qs(it)||it.contentEditable==="true")&&(An=it,So=A,bl=null);break;case"focusout":bl=So=An=null;break;case"mousedown":Oo=!0;break;case"contextmenu":case"mouseup":case"dragend":Oo=!1,$s(w,e,z);break;case"selectionchange":if(bg)break;case"keydown":case"keyup":$s(w,e,z)}var Q;if(vo)t:{switch(t){case"compositionstart":var J="onCompositionStart";break t;case"compositionend":J="onCompositionEnd";break t;case"compositionupdate":J="onCompositionUpdate";break t}J=void 0}else On?Us(t,e)&&(J="onCompositionEnd"):t==="keydown"&&e.keyCode===229&&(J="onCompositionStart");J&&(Cs&&e.locale!=="ko"&&(On||J!=="onCompositionStart"?J==="onCompositionEnd"&&On&&(Q=ks()):(me=z,fo="value"in me?me.value:me.textContent,On=!0)),it=si(A,J),0<it.length&&(J=new ws(J,t,null,e,z),w.push({event:J,listeners:it}),Q?J.data=Q:(Q=Hs(e),Q!==null&&(J.data=Q)))),(Q=rg?ig(t,e):og(t,e))&&(J=si(A,"onBeforeInput"),0<J.length&&(it=new ws("onBeforeInput","beforeinput",null,e,z),w.push({event:it,listeners:J}),it.data=Q)),Fg(w,t,A,e,z)}xh(w,a)})}function Gl(t,a,e){return{instance:t,listener:a,currentTarget:e}}function si(t,a){for(var e=a+"Capture",n=[];t!==null;){var l=t,i=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||i===null||(l=ol(t,e),l!=null&&n.unshift(Gl(t,l,i)),l=ol(t,a),l!=null&&n.push(Gl(t,l,i))),t.tag===3)return n;t=t.return}return[]}function Pn(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Oh(t,a,e,n,l){for(var i=a._reactName,s=[];e!==null&&e!==n;){var d=e,b=d.alternate,A=d.stateNode;if(d=d.tag,b!==null&&b===n)break;d!==5&&d!==26&&d!==27||A===null||(b=A,l?(A=ol(e,i),A!=null&&s.unshift(Gl(e,A,b))):l||(A=ol(e,i),A!=null&&s.push(Gl(e,A,b)))),e=e.return}s.length!==0&&t.push({event:a,listeners:s})}var av=/\r\n?/g,ev=/\u0000|\uFFFD/g;function Ah(t){return(typeof t=="string"?t:""+t).replace(av,`
`).replace(ev,"")}function Th(t,a){return a=Ah(a),Ah(t)===a}function fi(){}function xt(t,a,e,n,l,i){switch(e){case"children":typeof n=="string"?a==="body"||a==="textarea"&&n===""||yn(t,n):(typeof n=="number"||typeof n=="bigint")&&a!=="body"&&yn(t,""+n);break;case"className":gr(t,"class",n);break;case"tabIndex":gr(t,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":gr(t,e,n);break;case"style":Es(t,n,i);break;case"data":if(a!=="object"){gr(t,"data",n);break}case"src":case"href":if(n===""&&(a!=="a"||e!=="href")){t.removeAttribute(e);break}if(n==null||typeof n=="function"||typeof n=="symbol"||typeof n=="boolean"){t.removeAttribute(e);break}n=yr(""+n),t.setAttribute(e,n);break;case"action":case"formAction":if(typeof n=="function"){t.setAttribute(e,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(e==="formAction"?(a!=="input"&&xt(t,a,"name",l.name,l,null),xt(t,a,"formEncType",l.formEncType,l,null),xt(t,a,"formMethod",l.formMethod,l,null),xt(t,a,"formTarget",l.formTarget,l,null)):(xt(t,a,"encType",l.encType,l,null),xt(t,a,"method",l.method,l,null),xt(t,a,"target",l.target,l,null)));if(n==null||typeof n=="symbol"||typeof n=="boolean"){t.removeAttribute(e);break}n=yr(""+n),t.setAttribute(e,n);break;case"onClick":n!=null&&(t.onclick=fi);break;case"onScroll":n!=null&&ut("scroll",t);break;case"onScrollEnd":n!=null&&ut("scrollend",t);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(u(61));if(e=n.__html,e!=null){if(l.children!=null)throw Error(u(60));t.innerHTML=e}}break;case"multiple":t.multiple=n&&typeof n!="function"&&typeof n!="symbol";break;case"muted":t.muted=n&&typeof n!="function"&&typeof n!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(n==null||typeof n=="function"||typeof n=="boolean"||typeof n=="symbol"){t.removeAttribute("xlink:href");break}e=yr(""+n),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",e);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":n!=null&&typeof n!="function"&&typeof n!="symbol"?t.setAttribute(e,""+n):t.removeAttribute(e);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&typeof n!="function"&&typeof n!="symbol"?t.setAttribute(e,""):t.removeAttribute(e);break;case"capture":case"download":n===!0?t.setAttribute(e,""):n!==!1&&n!=null&&typeof n!="function"&&typeof n!="symbol"?t.setAttribute(e,n):t.removeAttribute(e);break;case"cols":case"rows":case"size":case"span":n!=null&&typeof n!="function"&&typeof n!="symbol"&&!isNaN(n)&&1<=n?t.setAttribute(e,n):t.removeAttribute(e);break;case"rowSpan":case"start":n==null||typeof n=="function"||typeof n=="symbol"||isNaN(n)?t.removeAttribute(e):t.setAttribute(e,n);break;case"popover":ut("beforetoggle",t),ut("toggle",t),br(t,"popover",n);break;case"xlinkActuate":Za(t,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":Za(t,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":Za(t,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":Za(t,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":Za(t,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":Za(t,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":Za(t,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":Za(t,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":Za(t,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":br(t,"is",n);break;case"innerText":case"textContent":break;default:(!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(e=Nb.get(e)||e,br(t,e,n))}}function Zu(t,a,e,n,l,i){switch(e){case"style":Es(t,n,i);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(u(61));if(e=n.__html,e!=null){if(l.children!=null)throw Error(u(60));t.innerHTML=e}}break;case"children":typeof n=="string"?yn(t,n):(typeof n=="number"||typeof n=="bigint")&&yn(t,""+n);break;case"onScroll":n!=null&&ut("scroll",t);break;case"onScrollEnd":n!=null&&ut("scrollend",t);break;case"onClick":n!=null&&(t.onclick=fi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ms.hasOwnProperty(e))t:{if(e[0]==="o"&&e[1]==="n"&&(l=e.endsWith("Capture"),a=e.slice(2,l?e.length-7:void 0),i=t[ea]||null,i=i!=null?i[e]:null,typeof i=="function"&&t.removeEventListener(a,i,l),typeof n=="function")){typeof i!="function"&&i!==null&&(e in t?t[e]=null:t.hasAttribute(e)&&t.removeAttribute(e)),t.addEventListener(a,n,l);break t}e in t?t[e]=n:n===!0?t.setAttribute(e,""):br(t,e,n)}}}function Kt(t,a,e){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ut("error",t),ut("load",t);var n=!1,l=!1,i;for(i in e)if(e.hasOwnProperty(i)){var s=e[i];if(s!=null)switch(i){case"src":n=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(u(137,a));default:xt(t,a,i,s,e,null)}}l&&xt(t,a,"srcSet",e.srcSet,e,null),n&&xt(t,a,"src",e.src,e,null);return;case"input":ut("invalid",t);var d=i=s=l=null,b=null,A=null;for(n in e)if(e.hasOwnProperty(n)){var z=e[n];if(z!=null)switch(n){case"name":l=z;break;case"type":s=z;break;case"checked":b=z;break;case"defaultChecked":A=z;break;case"value":i=z;break;case"defaultValue":d=z;break;case"children":case"dangerouslySetInnerHTML":if(z!=null)throw Error(u(137,a));break;default:xt(t,a,n,z,e,null)}}Ss(t,i,d,b,A,s,l,!1),vr(t);return;case"select":ut("invalid",t),n=s=i=null;for(l in e)if(e.hasOwnProperty(l)&&(d=e[l],d!=null))switch(l){case"value":i=d;break;case"defaultValue":s=d;break;case"multiple":n=d;default:xt(t,a,l,d,e,null)}a=i,e=s,t.multiple=!!n,a!=null?pn(t,!!n,a,!1):e!=null&&pn(t,!!n,e,!0);return;case"textarea":ut("invalid",t),i=l=n=null;for(s in e)if(e.hasOwnProperty(s)&&(d=e[s],d!=null))switch(s){case"value":n=d;break;case"defaultValue":l=d;break;case"children":i=d;break;case"dangerouslySetInnerHTML":if(d!=null)throw Error(u(91));break;default:xt(t,a,s,d,e,null)}As(t,n,l,i),vr(t);return;case"option":for(b in e)if(e.hasOwnProperty(b)&&(n=e[b],n!=null))switch(b){case"selected":t.selected=n&&typeof n!="function"&&typeof n!="symbol";break;default:xt(t,a,b,n,e,null)}return;case"dialog":ut("beforetoggle",t),ut("toggle",t),ut("cancel",t),ut("close",t);break;case"iframe":case"object":ut("load",t);break;case"video":case"audio":for(n=0;n<Xl.length;n++)ut(Xl[n],t);break;case"image":ut("error",t),ut("load",t);break;case"details":ut("toggle",t);break;case"embed":case"source":case"link":ut("error",t),ut("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(A in e)if(e.hasOwnProperty(A)&&(n=e[A],n!=null))switch(A){case"children":case"dangerouslySetInnerHTML":throw Error(u(137,a));default:xt(t,a,A,n,e,null)}return;default:if(io(a)){for(z in e)e.hasOwnProperty(z)&&(n=e[z],n!==void 0&&Zu(t,a,z,n,e,void 0));return}}for(d in e)e.hasOwnProperty(d)&&(n=e[d],n!=null&&xt(t,a,d,n,e,null))}function nv(t,a,e,n){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,i=null,s=null,d=null,b=null,A=null,z=null;for(E in e){var w=e[E];if(e.hasOwnProperty(E)&&w!=null)switch(E){case"checked":break;case"value":break;case"defaultValue":b=w;default:n.hasOwnProperty(E)||xt(t,a,E,null,n,w)}}for(var T in n){var E=n[T];if(w=e[T],n.hasOwnProperty(T)&&(E!=null||w!=null))switch(T){case"type":i=E;break;case"name":l=E;break;case"checked":A=E;break;case"defaultChecked":z=E;break;case"value":s=E;break;case"defaultValue":d=E;break;case"children":case"dangerouslySetInnerHTML":if(E!=null)throw Error(u(137,a));break;default:E!==w&&xt(t,a,T,E,n,w)}}lo(t,s,d,b,A,z,i,l);return;case"select":E=s=d=T=null;for(i in e)if(b=e[i],e.hasOwnProperty(i)&&b!=null)switch(i){case"value":break;case"multiple":E=b;default:n.hasOwnProperty(i)||xt(t,a,i,null,n,b)}for(l in n)if(i=n[l],b=e[l],n.hasOwnProperty(l)&&(i!=null||b!=null))switch(l){case"value":T=i;break;case"defaultValue":d=i;break;case"multiple":s=i;default:i!==b&&xt(t,a,l,i,n,b)}a=d,e=s,n=E,T!=null?pn(t,!!e,T,!1):!!n!=!!e&&(a!=null?pn(t,!!e,a,!0):pn(t,!!e,e?[]:"",!1));return;case"textarea":E=T=null;for(d in e)if(l=e[d],e.hasOwnProperty(d)&&l!=null&&!n.hasOwnProperty(d))switch(d){case"value":break;case"children":break;default:xt(t,a,d,null,n,l)}for(s in n)if(l=n[s],i=e[s],n.hasOwnProperty(s)&&(l!=null||i!=null))switch(s){case"value":T=l;break;case"defaultValue":E=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(u(91));break;default:l!==i&&xt(t,a,s,l,n,i)}Os(t,T,E);return;case"option":for(var W in e)if(T=e[W],e.hasOwnProperty(W)&&T!=null&&!n.hasOwnProperty(W))switch(W){case"selected":t.selected=!1;break;default:xt(t,a,W,null,n,T)}for(b in n)if(T=n[b],E=e[b],n.hasOwnProperty(b)&&T!==E&&(T!=null||E!=null))switch(b){case"selected":t.selected=T&&typeof T!="function"&&typeof T!="symbol";break;default:xt(t,a,b,T,n,E)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var $ in e)T=e[$],e.hasOwnProperty($)&&T!=null&&!n.hasOwnProperty($)&&xt(t,a,$,null,n,T);for(A in n)if(T=n[A],E=e[A],n.hasOwnProperty(A)&&T!==E&&(T!=null||E!=null))switch(A){case"children":case"dangerouslySetInnerHTML":if(T!=null)throw Error(u(137,a));break;default:xt(t,a,A,T,n,E)}return;default:if(io(a)){for(var St in e)T=e[St],e.hasOwnProperty(St)&&T!==void 0&&!n.hasOwnProperty(St)&&Zu(t,a,St,void 0,n,T);for(z in n)T=n[z],E=e[z],!n.hasOwnProperty(z)||T===E||T===void 0&&E===void 0||Zu(t,a,z,T,n,E);return}}for(var S in e)T=e[S],e.hasOwnProperty(S)&&T!=null&&!n.hasOwnProperty(S)&&xt(t,a,S,null,n,T);for(w in n)T=n[w],E=e[w],!n.hasOwnProperty(w)||T===E||T==null&&E==null||xt(t,a,w,T,n,E)}var Vu=null,Pu=null;function di(t){return t.nodeType===9?t:t.ownerDocument}function Eh(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function _h(t,a){if(t===0)switch(a){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&a==="foreignObject"?0:t}function Ku(t,a){return t==="textarea"||t==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.children=="bigint"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var $u=null;function lv(){var t=window.event;return t&&t.type==="popstate"?t===$u?!1:($u=t,!0):($u=null,!1)}var zh=typeof setTimeout=="function"?setTimeout:void 0,rv=typeof clearTimeout=="function"?clearTimeout:void 0,kh=typeof Promise=="function"?Promise:void 0,iv=typeof queueMicrotask=="function"?queueMicrotask:typeof kh<"u"?function(t){return kh.resolve(null).then(t).catch(ov)}:zh;function ov(t){setTimeout(function(){throw t})}function De(t){return t==="head"}function Mh(t,a){var e=a,n=0,l=0;do{var i=e.nextSibling;if(t.removeChild(e),i&&i.nodeType===8)if(e=i.data,e==="/$"){if(0<n&&8>n){e=n;var s=t.ownerDocument;if(e&1&&Ql(s.documentElement),e&2&&Ql(s.body),e&4)for(e=s.head,Ql(e),s=e.firstChild;s;){var d=s.nextSibling,b=s.nodeName;s[rl]||b==="SCRIPT"||b==="STYLE"||b==="LINK"&&s.rel.toLowerCase()==="stylesheet"||e.removeChild(s),s=d}}if(l===0){t.removeChild(i),Wl(a);return}l--}else e==="$"||e==="$?"||e==="$!"?l++:n=e.charCodeAt(0)-48;else n=0;e=i}while(e);Wl(a)}function Ju(t){var a=t.firstChild;for(a&&a.nodeType===10&&(a=a.nextSibling);a;){var e=a;switch(a=a.nextSibling,e.nodeName){case"HTML":case"HEAD":case"BODY":Ju(e),to(e);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(e.rel.toLowerCase()==="stylesheet")continue}t.removeChild(e)}}function uv(t,a,e,n){for(;t.nodeType===1;){var l=e;if(t.nodeName.toLowerCase()!==a.toLowerCase()){if(!n&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(n){if(!t[rl])switch(a){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(i=t.getAttribute("rel"),i==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(i!==l.rel||t.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||t.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||t.getAttribute("title")!==(l.title==null?null:l.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(i=t.getAttribute("src"),(i!==(l.src==null?null:l.src)||t.getAttribute("type")!==(l.type==null?null:l.type)||t.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&i&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(a==="input"&&t.type==="hidden"){var i=l.name==null?null:""+l.name;if(l.type==="hidden"&&t.getAttribute("name")===i)return t}else return t;if(t=Da(t.nextSibling),t===null)break}return null}function cv(t,a,e){if(a==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=Da(t.nextSibling),t===null))return null;return t}function Fu(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function sv(t,a){var e=t.ownerDocument;if(t.data!=="$?"||e.readyState==="complete")a();else{var n=function(){a(),e.removeEventListener("DOMContentLoaded",n)};e.addEventListener("DOMContentLoaded",n),t._reactRetry=n}}function Da(t){for(;t!=null;t=t.nextSibling){var a=t.nodeType;if(a===1||a===3)break;if(a===8){if(a=t.data,a==="$"||a==="$!"||a==="$?"||a==="F!"||a==="F")break;if(a==="/$")return null}}return t}var Wu=null;function Dh(t){t=t.previousSibling;for(var a=0;t;){if(t.nodeType===8){var e=t.data;if(e==="$"||e==="$!"||e==="$?"){if(a===0)return t;a--}else e==="/$"&&a++}t=t.previousSibling}return null}function wh(t,a,e){switch(a=di(e),t){case"html":if(t=a.documentElement,!t)throw Error(u(452));return t;case"head":if(t=a.head,!t)throw Error(u(453));return t;case"body":if(t=a.body,!t)throw Error(u(454));return t;default:throw Error(u(451))}}function Ql(t){for(var a=t.attributes;a.length;)t.removeAttributeNode(a[0]);to(t)}var za=new Map,Nh=new Set;function hi(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var re=Y.d;Y.d={f:fv,r:dv,D:hv,C:mv,L:bv,m:gv,X:pv,S:vv,M:yv};function fv(){var t=re.f(),a=li();return t||a}function dv(t){var a=mn(t);a!==null&&a.tag===5&&a.type==="form"?Wf(a):re.r(t)}var Kn=typeof document>"u"?null:document;function Ch(t,a,e){var n=Kn;if(n&&typeof a=="string"&&a){var l=xa(a);l='link[rel="'+t+'"][href="'+l+'"]',typeof e=="string"&&(l+='[crossorigin="'+e+'"]'),Nh.has(l)||(Nh.add(l),t={rel:t,crossOrigin:e,href:a},n.querySelector(l)===null&&(a=n.createElement("link"),Kt(a,"link",t),Lt(a),n.head.appendChild(a)))}}function hv(t){re.D(t),Ch("dns-prefetch",t,null)}function mv(t,a){re.C(t,a),Ch("preconnect",t,a)}function bv(t,a,e){re.L(t,a,e);var n=Kn;if(n&&t&&a){var l='link[rel="preload"][as="'+xa(a)+'"]';a==="image"&&e&&e.imageSrcSet?(l+='[imagesrcset="'+xa(e.imageSrcSet)+'"]',typeof e.imageSizes=="string"&&(l+='[imagesizes="'+xa(e.imageSizes)+'"]')):l+='[href="'+xa(t)+'"]';var i=l;switch(a){case"style":i=$n(t);break;case"script":i=Jn(t)}za.has(i)||(t=_({rel:"preload",href:a==="image"&&e&&e.imageSrcSet?void 0:t,as:a},e),za.set(i,t),n.querySelector(l)!==null||a==="style"&&n.querySelector(Zl(i))||a==="script"&&n.querySelector(Vl(i))||(a=n.createElement("link"),Kt(a,"link",t),Lt(a),n.head.appendChild(a)))}}function gv(t,a){re.m(t,a);var e=Kn;if(e&&t){var n=a&&typeof a.as=="string"?a.as:"script",l='link[rel="modulepreload"][as="'+xa(n)+'"][href="'+xa(t)+'"]',i=l;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Jn(t)}if(!za.has(i)&&(t=_({rel:"modulepreload",href:t},a),za.set(i,t),e.querySelector(l)===null)){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(e.querySelector(Vl(i)))return}n=e.createElement("link"),Kt(n,"link",t),Lt(n),e.head.appendChild(n)}}}function vv(t,a,e){re.S(t,a,e);var n=Kn;if(n&&t){var l=bn(n).hoistableStyles,i=$n(t);a=a||"default";var s=l.get(i);if(!s){var d={loading:0,preload:null};if(s=n.querySelector(Zl(i)))d.loading=5;else{t=_({rel:"stylesheet",href:t,"data-precedence":a},e),(e=za.get(i))&&Iu(t,e);var b=s=n.createElement("link");Lt(b),Kt(b,"link",t),b._p=new Promise(function(A,z){b.onload=A,b.onerror=z}),b.addEventListener("load",function(){d.loading|=1}),b.addEventListener("error",function(){d.loading|=2}),d.loading|=4,mi(s,a,n)}s={type:"stylesheet",instance:s,count:1,state:d},l.set(i,s)}}}function pv(t,a){re.X(t,a);var e=Kn;if(e&&t){var n=bn(e).hoistableScripts,l=Jn(t),i=n.get(l);i||(i=e.querySelector(Vl(l)),i||(t=_({src:t,async:!0},a),(a=za.get(l))&&tc(t,a),i=e.createElement("script"),Lt(i),Kt(i,"link",t),e.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},n.set(l,i))}}function yv(t,a){re.M(t,a);var e=Kn;if(e&&t){var n=bn(e).hoistableScripts,l=Jn(t),i=n.get(l);i||(i=e.querySelector(Vl(l)),i||(t=_({src:t,async:!0,type:"module"},a),(a=za.get(l))&&tc(t,a),i=e.createElement("script"),Lt(i),Kt(i,"link",t),e.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},n.set(l,i))}}function jh(t,a,e,n){var l=(l=at.current)?hi(l):null;if(!l)throw Error(u(446));switch(t){case"meta":case"title":return null;case"style":return typeof e.precedence=="string"&&typeof e.href=="string"?(a=$n(e.href),e=bn(l).hoistableStyles,n=e.get(a),n||(n={type:"style",instance:null,count:0,state:null},e.set(a,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if(e.rel==="stylesheet"&&typeof e.href=="string"&&typeof e.precedence=="string"){t=$n(e.href);var i=bn(l).hoistableStyles,s=i.get(t);if(s||(l=l.ownerDocument||l,s={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(t,s),(i=l.querySelector(Zl(t)))&&!i._p&&(s.instance=i,s.state.loading=5),za.has(t)||(e={rel:"preload",as:"style",href:e.href,crossOrigin:e.crossOrigin,integrity:e.integrity,media:e.media,hrefLang:e.hrefLang,referrerPolicy:e.referrerPolicy},za.set(t,e),i||xv(l,t,e,s.state))),a&&n===null)throw Error(u(528,""));return s}if(a&&n!==null)throw Error(u(529,""));return null;case"script":return a=e.async,e=e.src,typeof e=="string"&&a&&typeof a!="function"&&typeof a!="symbol"?(a=Jn(e),e=bn(l).hoistableScripts,n=e.get(a),n||(n={type:"script",instance:null,count:0,state:null},e.set(a,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(u(444,t))}}function $n(t){return'href="'+xa(t)+'"'}function Zl(t){return'link[rel="stylesheet"]['+t+"]"}function Rh(t){return _({},t,{"data-precedence":t.precedence,precedence:null})}function xv(t,a,e,n){t.querySelector('link[rel="preload"][as="style"]['+a+"]")?n.loading=1:(a=t.createElement("link"),n.preload=a,a.addEventListener("load",function(){return n.loading|=1}),a.addEventListener("error",function(){return n.loading|=2}),Kt(a,"link",e),Lt(a),t.head.appendChild(a))}function Jn(t){return'[src="'+xa(t)+'"]'}function Vl(t){return"script[async]"+t}function Uh(t,a,e){if(a.count++,a.instance===null)switch(a.type){case"style":var n=t.querySelector('style[data-href~="'+xa(e.href)+'"]');if(n)return a.instance=n,Lt(n),n;var l=_({},e,{"data-href":e.href,"data-precedence":e.precedence,href:null,precedence:null});return n=(t.ownerDocument||t).createElement("style"),Lt(n),Kt(n,"style",l),mi(n,e.precedence,t),a.instance=n;case"stylesheet":l=$n(e.href);var i=t.querySelector(Zl(l));if(i)return a.state.loading|=4,a.instance=i,Lt(i),i;n=Rh(e),(l=za.get(l))&&Iu(n,l),i=(t.ownerDocument||t).createElement("link"),Lt(i);var s=i;return s._p=new Promise(function(d,b){s.onload=d,s.onerror=b}),Kt(i,"link",n),a.state.loading|=4,mi(i,e.precedence,t),a.instance=i;case"script":return i=Jn(e.src),(l=t.querySelector(Vl(i)))?(a.instance=l,Lt(l),l):(n=e,(l=za.get(i))&&(n=_({},e),tc(n,l)),t=t.ownerDocument||t,l=t.createElement("script"),Lt(l),Kt(l,"link",n),t.head.appendChild(l),a.instance=l);case"void":return null;default:throw Error(u(443,a.type))}else a.type==="stylesheet"&&(a.state.loading&4)===0&&(n=a.instance,a.state.loading|=4,mi(n,e.precedence,t));return a.instance}function mi(t,a,e){for(var n=e.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=n.length?n[n.length-1]:null,i=l,s=0;s<n.length;s++){var d=n[s];if(d.dataset.precedence===a)i=d;else if(i!==l)break}i?i.parentNode.insertBefore(t,i.nextSibling):(a=e.nodeType===9?e.head:e,a.insertBefore(t,a.firstChild))}function Iu(t,a){t.crossOrigin==null&&(t.crossOrigin=a.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=a.referrerPolicy),t.title==null&&(t.title=a.title)}function tc(t,a){t.crossOrigin==null&&(t.crossOrigin=a.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=a.referrerPolicy),t.integrity==null&&(t.integrity=a.integrity)}var bi=null;function Hh(t,a,e){if(bi===null){var n=new Map,l=bi=new Map;l.set(e,n)}else l=bi,n=l.get(e),n||(n=new Map,l.set(e,n));if(n.has(t))return n;for(n.set(t,null),e=e.getElementsByTagName(t),l=0;l<e.length;l++){var i=e[l];if(!(i[rl]||i[Ft]||t==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var s=i.getAttribute(a)||"";s=t+s;var d=n.get(s);d?d.push(i):n.set(s,[i])}}return n}function qh(t,a,e){t=t.ownerDocument||t,t.head.insertBefore(e,a==="title"?t.querySelector("head > title"):null)}function Sv(t,a,e){if(e===1||a.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof a.precedence!="string"||typeof a.href!="string"||a.href==="")break;return!0;case"link":if(typeof a.rel!="string"||typeof a.href!="string"||a.href===""||a.onLoad||a.onError)break;switch(a.rel){case"stylesheet":return t=a.disabled,typeof a.precedence=="string"&&t==null;default:return!0}case"script":if(a.async&&typeof a.async!="function"&&typeof a.async!="symbol"&&!a.onLoad&&!a.onError&&a.src&&typeof a.src=="string")return!0}return!1}function Yh(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var Pl=null;function Ov(){}function Av(t,a,e){if(Pl===null)throw Error(u(475));var n=Pl;if(a.type==="stylesheet"&&(typeof e.media!="string"||matchMedia(e.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var l=$n(e.href),i=t.querySelector(Zl(l));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(n.count++,n=gi.bind(n),t.then(n,n)),a.state.loading|=4,a.instance=i,Lt(i);return}i=t.ownerDocument||t,e=Rh(e),(l=za.get(l))&&Iu(e,l),i=i.createElement("link"),Lt(i);var s=i;s._p=new Promise(function(d,b){s.onload=d,s.onerror=b}),Kt(i,"link",e),a.instance=i}n.stylesheets===null&&(n.stylesheets=new Map),n.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(n.count++,a=gi.bind(n),t.addEventListener("load",a),t.addEventListener("error",a))}}function Tv(){if(Pl===null)throw Error(u(475));var t=Pl;return t.stylesheets&&t.count===0&&ac(t,t.stylesheets),0<t.count?function(a){var e=setTimeout(function(){if(t.stylesheets&&ac(t,t.stylesheets),t.unsuspend){var n=t.unsuspend;t.unsuspend=null,n()}},6e4);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(e)}}:null}function gi(){if(this.count--,this.count===0){if(this.stylesheets)ac(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var vi=null;function ac(t,a){t.stylesheets=null,t.unsuspend!==null&&(t.count++,vi=new Map,a.forEach(Ev,t),vi=null,gi.call(t))}function Ev(t,a){if(!(a.state.loading&4)){var e=vi.get(t);if(e)var n=e.get(null);else{e=new Map,vi.set(t,e);for(var l=t.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<l.length;i++){var s=l[i];(s.nodeName==="LINK"||s.getAttribute("media")!=="not all")&&(e.set(s.dataset.precedence,s),n=s)}n&&e.set(null,n)}l=a.instance,s=l.getAttribute("data-precedence"),i=e.get(s)||n,i===n&&e.set(null,l),e.set(s,l),this.count++,n=gi.bind(this),l.addEventListener("load",n),l.addEventListener("error",n),i?i.parentNode.insertBefore(l,i.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(l,t.firstChild)),a.state.loading|=4}}var Kl={$$typeof:tt,Provider:null,Consumer:null,_currentValue:F,_currentValue2:F,_threadCount:0};function _v(t,a,e,n,l,i,s,d){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ji(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ji(0),this.hiddenUpdates=Ji(null),this.identifierPrefix=n,this.onUncaughtError=l,this.onCaughtError=i,this.onRecoverableError=s,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=d,this.incompleteTransitions=new Map}function Bh(t,a,e,n,l,i,s,d,b,A,z,w){return t=new _v(t,a,e,s,d,b,A,w),a=1,i===!0&&(a|=24),i=fa(3,null,null,a),t.current=i,i.stateNode=t,a=Uo(),a.refCount++,t.pooledCache=a,a.refCount++,i.memoizedState={element:n,isDehydrated:e,cache:a},Bo(i),t}function Lh(t){return t?(t=zn,t):zn}function Xh(t,a,e,n,l,i){l=Lh(l),n.context===null?n.context=l:n.pendingContext=l,n=ve(a),n.payload={element:e},i=i===void 0?null:i,i!==null&&(n.callback=i),e=pe(t,n,a),e!==null&&(ga(e,t,a),Tl(e,t,a))}function Gh(t,a){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var e=t.retryLane;t.retryLane=e!==0&&e<a?e:a}}function ec(t,a){Gh(t,a),(t=t.alternate)&&Gh(t,a)}function Qh(t){if(t.tag===13){var a=_n(t,67108864);a!==null&&ga(a,t,67108864),ec(t,67108864)}}var pi=!0;function zv(t,a,e,n){var l=k.T;k.T=null;var i=Y.p;try{Y.p=2,nc(t,a,e,n)}finally{Y.p=i,k.T=l}}function kv(t,a,e,n){var l=k.T;k.T=null;var i=Y.p;try{Y.p=8,nc(t,a,e,n)}finally{Y.p=i,k.T=l}}function nc(t,a,e,n){if(pi){var l=lc(n);if(l===null)Qu(t,a,n,yi,e),Vh(t,n);else if(Dv(l,t,a,e,n))n.stopPropagation();else if(Vh(t,n),a&4&&-1<Mv.indexOf(t)){for(;l!==null;){var i=mn(l);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var s=Ge(i.pendingLanes);if(s!==0){var d=i;for(d.pendingLanes|=2,d.entangledLanes|=2;s;){var b=1<<31-ca(s);d.entanglements[1]|=b,s&=~b}Ba(i),(mt&6)===0&&(ei=Ra()+500,Ll(0))}}break;case 13:d=_n(i,2),d!==null&&ga(d,i,2),li(),ec(i,2)}if(i=lc(n),i===null&&Qu(t,a,n,yi,e),i===l)break;l=i}l!==null&&n.stopPropagation()}else Qu(t,a,n,null,e)}}function lc(t){return t=uo(t),rc(t)}var yi=null;function rc(t){if(yi=null,t=hn(t),t!==null){var a=h(t);if(a===null)t=null;else{var e=a.tag;if(e===13){if(t=m(a),t!==null)return t;t=null}else if(e===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;t=null}else a!==t&&(t=null)}}return yi=t,null}function Zh(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(mb()){case ls:return 2;case rs:return 8;case fr:case bb:return 32;case is:return 268435456;default:return 32}default:return 32}}var ic=!1,we=null,Ne=null,Ce=null,$l=new Map,Jl=new Map,je=[],Mv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Vh(t,a){switch(t){case"focusin":case"focusout":we=null;break;case"dragenter":case"dragleave":Ne=null;break;case"mouseover":case"mouseout":Ce=null;break;case"pointerover":case"pointerout":$l.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":Jl.delete(a.pointerId)}}function Fl(t,a,e,n,l,i){return t===null||t.nativeEvent!==i?(t={blockedOn:a,domEventName:e,eventSystemFlags:n,nativeEvent:i,targetContainers:[l]},a!==null&&(a=mn(a),a!==null&&Qh(a)),t):(t.eventSystemFlags|=n,a=t.targetContainers,l!==null&&a.indexOf(l)===-1&&a.push(l),t)}function Dv(t,a,e,n,l){switch(a){case"focusin":return we=Fl(we,t,a,e,n,l),!0;case"dragenter":return Ne=Fl(Ne,t,a,e,n,l),!0;case"mouseover":return Ce=Fl(Ce,t,a,e,n,l),!0;case"pointerover":var i=l.pointerId;return $l.set(i,Fl($l.get(i)||null,t,a,e,n,l)),!0;case"gotpointercapture":return i=l.pointerId,Jl.set(i,Fl(Jl.get(i)||null,t,a,e,n,l)),!0}return!1}function Ph(t){var a=hn(t.target);if(a!==null){var e=h(a);if(e!==null){if(a=e.tag,a===13){if(a=m(e),a!==null){t.blockedOn=a,Ab(t.priority,function(){if(e.tag===13){var n=ba();n=Fi(n);var l=_n(e,n);l!==null&&ga(l,e,n),ec(e,n)}});return}}else if(a===3&&e.stateNode.current.memoizedState.isDehydrated){t.blockedOn=e.tag===3?e.stateNode.containerInfo:null;return}}}t.blockedOn=null}function xi(t){if(t.blockedOn!==null)return!1;for(var a=t.targetContainers;0<a.length;){var e=lc(t.nativeEvent);if(e===null){e=t.nativeEvent;var n=new e.constructor(e.type,e);oo=n,e.target.dispatchEvent(n),oo=null}else return a=mn(e),a!==null&&Qh(a),t.blockedOn=e,!1;a.shift()}return!0}function Kh(t,a,e){xi(t)&&e.delete(a)}function wv(){ic=!1,we!==null&&xi(we)&&(we=null),Ne!==null&&xi(Ne)&&(Ne=null),Ce!==null&&xi(Ce)&&(Ce=null),$l.forEach(Kh),Jl.forEach(Kh)}function Si(t,a){t.blockedOn===a&&(t.blockedOn=null,ic||(ic=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,wv)))}var Oi=null;function $h(t){Oi!==t&&(Oi=t,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Oi===t&&(Oi=null);for(var a=0;a<t.length;a+=3){var e=t[a],n=t[a+1],l=t[a+2];if(typeof n!="function"){if(rc(n||e)===null)continue;break}var i=mn(e);i!==null&&(t.splice(a,3),a-=3,ru(i,{pending:!0,data:l,method:e.method,action:n},n,l))}}))}function Wl(t){function a(b){return Si(b,t)}we!==null&&Si(we,t),Ne!==null&&Si(Ne,t),Ce!==null&&Si(Ce,t),$l.forEach(a),Jl.forEach(a);for(var e=0;e<je.length;e++){var n=je[e];n.blockedOn===t&&(n.blockedOn=null)}for(;0<je.length&&(e=je[0],e.blockedOn===null);)Ph(e),e.blockedOn===null&&je.shift();if(e=(t.ownerDocument||t).$$reactFormReplay,e!=null)for(n=0;n<e.length;n+=3){var l=e[n],i=e[n+1],s=l[ea]||null;if(typeof i=="function")s||$h(e);else if(s){var d=null;if(i&&i.hasAttribute("formAction")){if(l=i,s=i[ea]||null)d=s.formAction;else if(rc(l)!==null)continue}else d=s.action;typeof d=="function"?e[n+1]=d:(e.splice(n,3),n-=3),$h(e)}}}function oc(t){this._internalRoot=t}Ai.prototype.render=oc.prototype.render=function(t){var a=this._internalRoot;if(a===null)throw Error(u(409));var e=a.current,n=ba();Xh(e,n,t,a,null,null)},Ai.prototype.unmount=oc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var a=t.containerInfo;Xh(t.current,2,null,t,null,null),li(),a[dn]=null}};function Ai(t){this._internalRoot=t}Ai.prototype.unstable_scheduleHydration=function(t){if(t){var a=fs();t={blockedOn:null,target:t,priority:a};for(var e=0;e<je.length&&a!==0&&a<je[e].priority;e++);je.splice(e,0,t),e===0&&Ph(t)}};var Jh=o.version;if(Jh!=="19.1.0")throw Error(u(527,Jh,"19.1.0"));Y.findDOMNode=function(t){var a=t._reactInternals;if(a===void 0)throw typeof t.render=="function"?Error(u(188)):(t=Object.keys(t).join(","),Error(u(268,t)));return t=g(a),t=t!==null?v(t):null,t=t===null?null:t.stateNode,t};var Nv={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:k,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ti=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ti.isDisabled&&Ti.supportsFiber)try{el=Ti.inject(Nv),ua=Ti}catch{}}return tr.createRoot=function(t,a){if(!f(t))throw Error(u(299));var e=!1,n="",l=dd,i=hd,s=md,d=null;return a!=null&&(a.unstable_strictMode===!0&&(e=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(l=a.onUncaughtError),a.onCaughtError!==void 0&&(i=a.onCaughtError),a.onRecoverableError!==void 0&&(s=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(d=a.unstable_transitionCallbacks)),a=Bh(t,1,!1,null,null,e,n,l,i,s,d,null),t[dn]=a.current,Gu(t),new oc(a)},tr.hydrateRoot=function(t,a,e){if(!f(t))throw Error(u(299));var n=!1,l="",i=dd,s=hd,d=md,b=null,A=null;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(l=e.identifierPrefix),e.onUncaughtError!==void 0&&(i=e.onUncaughtError),e.onCaughtError!==void 0&&(s=e.onCaughtError),e.onRecoverableError!==void 0&&(d=e.onRecoverableError),e.unstable_transitionCallbacks!==void 0&&(b=e.unstable_transitionCallbacks),e.formState!==void 0&&(A=e.formState)),a=Bh(t,1,!0,a,e??null,n,l,i,s,d,b,A),a.context=Lh(null),e=a.current,n=ba(),n=Fi(n),l=ve(n),l.callback=null,pe(e,l,n),e=n,a.current.lanes=e,ll(a,e),Ba(a),t[dn]=a.current,Gu(t),new Ai(a)},tr.version="19.1.0",tr}var i0;function Xv(){if(i0)return sc.exports;i0=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(o){console.error(o)}}return r(),sc.exports=Lv(),sc.exports}var Gv=Xv(),tm={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o0=Zt.createContext&&Zt.createContext(tm),Qv=["attr","size","title"];function Zv(r,o){if(r==null)return{};var c=Vv(r,o),u,f;if(Object.getOwnPropertySymbols){var h=Object.getOwnPropertySymbols(r);for(f=0;f<h.length;f++)u=h[f],!(o.indexOf(u)>=0)&&Object.prototype.propertyIsEnumerable.call(r,u)&&(c[u]=r[u])}return c}function Vv(r,o){if(r==null)return{};var c={};for(var u in r)if(Object.prototype.hasOwnProperty.call(r,u)){if(o.indexOf(u)>=0)continue;c[u]=r[u]}return c}function Ci(){return Ci=Object.assign?Object.assign.bind():function(r){for(var o=1;o<arguments.length;o++){var c=arguments[o];for(var u in c)Object.prototype.hasOwnProperty.call(c,u)&&(r[u]=c[u])}return r},Ci.apply(this,arguments)}function u0(r,o){var c=Object.keys(r);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(r);o&&(u=u.filter(function(f){return Object.getOwnPropertyDescriptor(r,f).enumerable})),c.push.apply(c,u)}return c}function ji(r){for(var o=1;o<arguments.length;o++){var c=arguments[o]!=null?arguments[o]:{};o%2?u0(Object(c),!0).forEach(function(u){Pv(r,u,c[u])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(c)):u0(Object(c)).forEach(function(u){Object.defineProperty(r,u,Object.getOwnPropertyDescriptor(c,u))})}return r}function Pv(r,o,c){return o=Kv(o),o in r?Object.defineProperty(r,o,{value:c,enumerable:!0,configurable:!0,writable:!0}):r[o]=c,r}function Kv(r){var o=$v(r,"string");return typeof o=="symbol"?o:o+""}function $v(r,o){if(typeof r!="object"||!r)return r;var c=r[Symbol.toPrimitive];if(c!==void 0){var u=c.call(r,o);if(typeof u!="object")return u;throw new TypeError("@@toPrimitive must return a primitive value.")}return(o==="string"?String:Number)(r)}function am(r){return r&&r.map((o,c)=>Zt.createElement(o.tag,ji({key:c},o.attr),am(o.child)))}function Vc(r){return o=>Zt.createElement(Jv,Ci({attr:ji({},r.attr)},o),am(r.child))}function Jv(r){var o=c=>{var{attr:u,size:f,title:h}=r,m=Zv(r,Qv),x=f||c.size||"1em",g;return c.className&&(g=c.className),r.className&&(g=(g?g+" ":"")+r.className),Zt.createElement("svg",Ci({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},c.attr,u,m,{className:g,style:ji(ji({color:r.color||c.color},c.style),r.style),height:x,width:x,xmlns:"http://www.w3.org/2000/svg"}),h&&Zt.createElement("title",null,h),r.children)};return o0!==void 0?Zt.createElement(o0.Consumer,null,c=>o(c)):o(tm)}function em(r){return Vc({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"},child:[]}]})(r)}function nm(r){return Vc({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"},child:[]}]})(r)}function Fv(r){return Vc({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M413.1 222.5l22.2 22.2c9.4 9.4 9.4 24.6 0 33.9L241 473c-9.4 9.4-24.6 9.4-33.9 0L12.7 278.6c-9.4-9.4-9.4-24.6 0-33.9l22.2-22.2c9.5-9.5 25-9.3 34.3.4L184 343.4V56c0-13.3 10.7-24 24-24h32c13.3 0 24 10.7 24 24v287.4l114.8-120.5c9.3-9.8 24.8-10 34.3-.4z"},child:[]}]})(r)}function Wv(){return C.jsxs("div",{className:"first-page",children:[C.jsxs("div",{className:"top-logos",children:[C.jsx("a",{href:"https://github.com/yacine-bek",target:"_blank",children:C.jsx(nm,{size:36})}),C.jsx("a",{href:"https://discord.gg/6C8e3HBVJt",target:"_blank",children:C.jsx(em,{size:36})})]}),C.jsxs("div",{className:"content",children:[C.jsx("h1",{children:"Hi 👋, I'm Yacine"}),C.jsx("h3",{children:"Computer Science Student and Open-Source Developer"})]}),C.jsx("div",{className:"triangle-section"}),C.jsx("a",{href:"#secound-page",children:C.jsx("div",{className:"bottom-arrow-div",children:C.jsx(Fv,{className:"bottom-arrow",size:32})})})]})}/*!
 * Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2025 Fonticons, Inc.
 */function _c(r,o){(o==null||o>r.length)&&(o=r.length);for(var c=0,u=Array(o);c<o;c++)u[c]=r[c];return u}function Iv(r){if(Array.isArray(r))return r}function t1(r){if(Array.isArray(r))return _c(r)}function a1(r,o){if(!(r instanceof o))throw new TypeError("Cannot call a class as a function")}function e1(r,o){for(var c=0;c<o.length;c++){var u=o[c];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(r,lm(u.key),u)}}function n1(r,o,c){return o&&e1(r.prototype,o),Object.defineProperty(r,"prototype",{writable:!1}),r}function Di(r,o){var c=typeof Symbol<"u"&&r[Symbol.iterator]||r["@@iterator"];if(!c){if(Array.isArray(r)||(c=Pc(r))||o){c&&(r=c);var u=0,f=function(){};return{s:f,n:function(){return u>=r.length?{done:!0}:{done:!1,value:r[u++]}},e:function(g){throw g},f}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var h,m=!0,x=!1;return{s:function(){c=c.call(r)},n:function(){var g=c.next();return m=g.done,g},e:function(g){x=!0,h=g},f:function(){try{m||c.return==null||c.return()}finally{if(x)throw h}}}}function ct(r,o,c){return(o=lm(o))in r?Object.defineProperty(r,o,{value:c,enumerable:!0,configurable:!0,writable:!0}):r[o]=c,r}function l1(r){if(typeof Symbol<"u"&&r[Symbol.iterator]!=null||r["@@iterator"]!=null)return Array.from(r)}function r1(r,o){var c=r==null?null:typeof Symbol<"u"&&r[Symbol.iterator]||r["@@iterator"];if(c!=null){var u,f,h,m,x=[],g=!0,v=!1;try{if(h=(c=c.call(r)).next,o===0){if(Object(c)!==c)return;g=!1}else for(;!(g=(u=h.call(c)).done)&&(x.push(u.value),x.length!==o);g=!0);}catch(_){v=!0,f=_}finally{try{if(!g&&c.return!=null&&(m=c.return(),Object(m)!==m))return}finally{if(v)throw f}}return x}}function i1(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function o1(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function c0(r,o){var c=Object.keys(r);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(r);o&&(u=u.filter(function(f){return Object.getOwnPropertyDescriptor(r,f).enumerable})),c.push.apply(c,u)}return c}function U(r){for(var o=1;o<arguments.length;o++){var c=arguments[o]!=null?arguments[o]:{};o%2?c0(Object(c),!0).forEach(function(u){ct(r,u,c[u])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(c)):c0(Object(c)).forEach(function(u){Object.defineProperty(r,u,Object.getOwnPropertyDescriptor(c,u))})}return r}function Bi(r,o){return Iv(r)||r1(r,o)||Pc(r,o)||i1()}function ja(r){return t1(r)||l1(r)||Pc(r)||o1()}function u1(r,o){if(typeof r!="object"||!r)return r;var c=r[Symbol.toPrimitive];if(c!==void 0){var u=c.call(r,o);if(typeof u!="object")return u;throw new TypeError("@@toPrimitive must return a primitive value.")}return(o==="string"?String:Number)(r)}function lm(r){var o=u1(r,"string");return typeof o=="symbol"?o:o+""}function Ri(r){"@babel/helpers - typeof";return Ri=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(o){return typeof o}:function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},Ri(r)}function Pc(r,o){if(r){if(typeof r=="string")return _c(r,o);var c={}.toString.call(r).slice(8,-1);return c==="Object"&&r.constructor&&(c=r.constructor.name),c==="Map"||c==="Set"?Array.from(r):c==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)?_c(r,o):void 0}}var s0=function(){},Kc={},rm={},im=null,om={mark:s0,measure:s0};try{typeof window<"u"&&(Kc=window),typeof document<"u"&&(rm=document),typeof MutationObserver<"u"&&(im=MutationObserver),typeof performance<"u"&&(om=performance)}catch{}var c1=Kc.navigator||{},f0=c1.userAgent,d0=f0===void 0?"":f0,qe=Kc,_t=rm,h0=im,Ei=om;qe.document;var se=!!_t.documentElement&&!!_t.head&&typeof _t.addEventListener=="function"&&typeof _t.createElement=="function",um=~d0.indexOf("MSIE")||~d0.indexOf("Trident/"),mc,s1=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|jr|jfr|jdr|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,f1=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Slab Press|Slab|Whiteboard)?.*/i,cm={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"},slab:{"fa-regular":"regular",faslr:"regular"},"slab-press":{"fa-regular":"regular",faslpr:"regular"},thumbprint:{"fa-light":"light",fatl:"light"},whiteboard:{"fa-semibold":"semibold",fawsb:"semibold"},notdog:{"fa-solid":"solid",fans:"solid"},"notdog-duo":{"fa-solid":"solid",fands:"solid"},etch:{"fa-solid":"solid",faes:"solid"},jelly:{"fa-regular":"regular",fajr:"regular"},"jelly-fill":{"fa-regular":"regular",fajfr:"regular"},"jelly-duo":{"fa-regular":"regular",fajdr:"regular"},chisel:{"fa-regular":"regular",facr:"regular"}},d1={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},sm=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press"],ta="classic",or="duotone",fm="sharp",dm="sharp-duotone",hm="chisel",mm="etch",bm="jelly",gm="jelly-duo",vm="jelly-fill",pm="notdog",ym="notdog-duo",xm="slab",Sm="slab-press",Om="thumbprint",Am="whiteboard",h1="Classic",m1="Duotone",b1="Sharp",g1="Sharp Duotone",v1="Chisel",p1="Etch",y1="Jelly",x1="Jelly Duo",S1="Jelly Fill",O1="Notdog",A1="Notdog Duo",T1="Slab",E1="Slab Press",_1="Thumbprint",z1="Whiteboard",Tm=[ta,or,fm,dm,hm,mm,bm,gm,vm,pm,ym,xm,Sm,Om,Am];mc={},ct(ct(ct(ct(ct(ct(ct(ct(ct(ct(mc,ta,h1),or,m1),fm,b1),dm,g1),hm,v1),mm,p1),bm,y1),gm,x1),vm,S1),pm,O1),ct(ct(ct(ct(ct(mc,ym,A1),xm,T1),Sm,E1),Om,_1),Am,z1);var k1={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"},slab:{400:"faslr"},"slab-press":{400:"faslpr"},whiteboard:{600:"fawsb"},thumbprint:{300:"fatl"},notdog:{900:"fans"},"notdog-duo":{900:"fands"},etch:{900:"faes"},chisel:{400:"facr"},jelly:{400:"fajr"},"jelly-fill":{400:"fajfr"},"jelly-duo":{400:"fajdr"}},M1={"Font Awesome 7 Free":{900:"fas",400:"far"},"Font Awesome 7 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 7 Brands":{400:"fab",normal:"fab"},"Font Awesome 7 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 7 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 7 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"},"Font Awesome 7 Jelly":{400:"fajr",normal:"fajr"},"Font Awesome 7 Jelly Fill":{400:"fajfr",normal:"fajfr"},"Font Awesome 7 Jelly Duo":{400:"fajdr",normal:"fajdr"},"Font Awesome 7 Slab":{400:"faslr",normal:"faslr"},"Font Awesome 7 Slab Press":{400:"faslpr",normal:"faslpr"},"Font Awesome 7 Thumbprint":{300:"fatl",normal:"fatl"},"Font Awesome 7 Notdog":{900:"fans",normal:"fans"},"Font Awesome 7 Notdog Duo":{900:"fands",normal:"fands"},"Font Awesome 7 Etch":{900:"faes",normal:"faes"},"Font Awesome 7 Chisel":{400:"facr",normal:"facr"},"Font Awesome 7 Whiteboard":{600:"fawsb",normal:"fawsb"}},D1=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["chisel",{defaultShortPrefixId:"facr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["etch",{defaultShortPrefixId:"faes",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["jelly",{defaultShortPrefixId:"fajr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-duo",{defaultShortPrefixId:"fajdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-fill",{defaultShortPrefixId:"fajfr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["notdog",{defaultShortPrefixId:"fans",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog-duo",{defaultShortPrefixId:"fands",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["slab",{defaultShortPrefixId:"faslr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press",{defaultShortPrefixId:"faslpr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["thumbprint",{defaultShortPrefixId:"fatl",defaultStyleId:"light",styleIds:["light"],futureStyleIds:[],defaultFontWeight:300}],["whiteboard",{defaultShortPrefixId:"fawsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}]]),w1={chisel:{regular:"facr"},classic:{brands:"fab",light:"fal",regular:"far",solid:"fas",thin:"fat"},duotone:{light:"fadl",regular:"fadr",solid:"fad",thin:"fadt"},etch:{solid:"faes"},jelly:{regular:"fajr"},"jelly-duo":{regular:"fajdr"},"jelly-fill":{regular:"fajfr"},notdog:{solid:"fans"},"notdog-duo":{solid:"fands"},sharp:{light:"fasl",regular:"fasr",solid:"fass",thin:"fast"},"sharp-duotone":{light:"fasdl",regular:"fasdr",solid:"fasds",thin:"fasdt"},slab:{regular:"faslr"},"slab-press":{regular:"faslpr"},thumbprint:{light:"fatl"},whiteboard:{semibold:"fawsb"}},Em=["fak","fa-kit","fakd","fa-kit-duotone"],m0={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},N1=["kit"],C1="kit",j1="kit-duotone",R1="Kit",U1="Kit Duotone";ct(ct({},C1,R1),j1,U1);var H1={kit:{"fa-kit":"fak"}},q1={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},Y1={kit:{fak:"fa-kit"}},b0={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},bc,_i={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},B1=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press"],L1="classic",X1="duotone",G1="sharp",Q1="sharp-duotone",Z1="chisel",V1="etch",P1="jelly",K1="jelly-duo",$1="jelly-fill",J1="notdog",F1="notdog-duo",W1="slab",I1="slab-press",tp="thumbprint",ap="whiteboard",ep="Classic",np="Duotone",lp="Sharp",rp="Sharp Duotone",ip="Chisel",op="Etch",up="Jelly",cp="Jelly Duo",sp="Jelly Fill",fp="Notdog",dp="Notdog Duo",hp="Slab",mp="Slab Press",bp="Thumbprint",gp="Whiteboard";bc={},ct(ct(ct(ct(ct(ct(ct(ct(ct(ct(bc,L1,ep),X1,np),G1,lp),Q1,rp),Z1,ip),V1,op),P1,up),K1,cp),$1,sp),J1,fp),ct(ct(ct(ct(ct(bc,F1,dp),W1,hp),I1,mp),tp,bp),ap,gp);var vp="kit",pp="kit-duotone",yp="Kit",xp="Kit Duotone";ct(ct({},vp,yp),pp,xp);var Sp={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"},slab:{"fa-regular":"faslr"},"slab-press":{"fa-regular":"faslpr"},whiteboard:{"fa-semibold":"fawsb"},thumbprint:{"fa-light":"fatl"},notdog:{"fa-solid":"fans"},"notdog-duo":{"fa-solid":"fands"},etch:{"fa-solid":"faes"},jelly:{"fa-regular":"fajr"},"jelly-fill":{"fa-regular":"fajfr"},"jelly-duo":{"fa-regular":"fajdr"},chisel:{"fa-regular":"facr"}},Op={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"],slab:["faslr"],"slab-press":["faslpr"],whiteboard:["fawsb"],thumbprint:["fatl"],notdog:["fans"],"notdog-duo":["fands"],etch:["faes"],jelly:["fajr"],"jelly-fill":["fajfr"],"jelly-duo":["fajdr"],chisel:["facr"]},zc={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"},slab:{faslr:"fa-regular"},"slab-press":{faslpr:"fa-regular"},whiteboard:{fawsb:"fa-semibold"},thumbprint:{fatl:"fa-light"},notdog:{fans:"fa-solid"},"notdog-duo":{fands:"fa-solid"},etch:{faes:"fa-solid"},jelly:{fajr:"fa-regular"},"jelly-fill":{fajfr:"fa-regular"},"jelly-duo":{fajdr:"fa-regular"},chisel:{facr:"fa-regular"}},Ap=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands","fa-semibold"],_m=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt","faslr","faslpr","fawsb","fatl","fans","fands","faes","fajr","fajfr","fajdr","facr"].concat(B1,Ap),Tp=["solid","regular","light","thin","duotone","brands","semibold"],zm=[1,2,3,4,5,6,7,8,9,10],Ep=zm.concat([11,12,13,14,15,16,17,18,19,20]),_p=["aw","fw","pull-left","pull-right"],zp=[].concat(ja(Object.keys(Op)),Tp,_p,["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","inverse","layers","layers-bottom-left","layers-bottom-right","layers-counter","layers-text","layers-top-left","layers-top-right","li","pull-end","pull-start","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul","width-auto","width-fixed",_i.GROUP,_i.SWAP_OPACITY,_i.PRIMARY,_i.SECONDARY]).concat(zm.map(function(r){return"".concat(r,"x")})).concat(Ep.map(function(r){return"w-".concat(r)})),kp={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},ue="___FONT_AWESOME___",kc=16,km="fa",Mm="svg-inline--fa",cn="data-fa-i2svg",Mc="data-fa-pseudo-element",Mp="data-fa-pseudo-element-pending",$c="data-prefix",Jc="data-icon",g0="fontawesome-i2svg",Dp="async",wp=["HTML","HEAD","STYLE","SCRIPT"],Dm=["::before","::after",":before",":after"],wm=function(){try{return!0}catch{return!1}}();function ur(r){return new Proxy(r,{get:function(c,u){return u in c?c[u]:c[ta]}})}var Nm=U({},cm);Nm[ta]=U(U(U(U({},{"fa-duotone":"duotone"}),cm[ta]),m0.kit),m0["kit-duotone"]);var Np=ur(Nm),Dc=U({},w1);Dc[ta]=U(U(U(U({},{duotone:"fad"}),Dc[ta]),b0.kit),b0["kit-duotone"]);var v0=ur(Dc),wc=U({},zc);wc[ta]=U(U({},wc[ta]),Y1.kit);var Cm=ur(wc),Nc=U({},Sp);Nc[ta]=U(U({},Nc[ta]),H1.kit);ur(Nc);var Cp=s1,jm="fa-layers-text",jp=f1,Rp=U({},k1);ur(Rp);var Up=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],gc=d1,Hp=[].concat(ja(N1),ja(zp)),nr=qe.FontAwesomeConfig||{};function qp(r){var o=_t.querySelector("script["+r+"]");if(o)return o.getAttribute(r)}function Yp(r){return r===""?!0:r==="false"?!1:r==="true"?!0:r}if(_t&&typeof _t.querySelector=="function"){var Bp=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-search-pseudo-elements","searchPseudoElements"],["data-search-pseudo-elements-warnings","searchPseudoElementsWarnings"],["data-search-pseudo-elements-full-scan","searchPseudoElementsFullScan"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Bp.forEach(function(r){var o=Bi(r,2),c=o[0],u=o[1],f=Yp(qp(c));f!=null&&(nr[u]=f)})}var Rm={styleDefault:"solid",familyDefault:ta,cssPrefix:km,replacementClass:Mm,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};nr.familyPrefix&&(nr.cssPrefix=nr.familyPrefix);var tl=U(U({},Rm),nr);tl.autoReplaceSvg||(tl.observeMutations=!1);var V={};Object.keys(Rm).forEach(function(r){Object.defineProperty(V,r,{enumerable:!0,set:function(c){tl[r]=c,lr.forEach(function(u){return u(V)})},get:function(){return tl[r]}})});Object.defineProperty(V,"familyPrefix",{enumerable:!0,set:function(o){tl.cssPrefix=o,lr.forEach(function(c){return c(V)})},get:function(){return tl.cssPrefix}});qe.FontAwesomeConfig=V;var lr=[];function Lp(r){return lr.push(r),function(){lr.splice(lr.indexOf(r),1)}}var Fn=kc,Ga={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Xp(r){if(!(!r||!se)){var o=_t.createElement("style");o.setAttribute("type","text/css"),o.innerHTML=r;for(var c=_t.head.childNodes,u=null,f=c.length-1;f>-1;f--){var h=c[f],m=(h.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(m)>-1&&(u=h)}return _t.head.insertBefore(o,u),r}}var Gp="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function p0(){for(var r=12,o="";r-- >0;)o+=Gp[Math.random()*62|0];return o}function al(r){for(var o=[],c=(r||[]).length>>>0;c--;)o[c]=r[c];return o}function Fc(r){return r.classList?al(r.classList):(r.getAttribute("class")||"").split(" ").filter(function(o){return o})}function Um(r){return"".concat(r).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Qp(r){return Object.keys(r||{}).reduce(function(o,c){return o+"".concat(c,'="').concat(Um(r[c]),'" ')},"").trim()}function Li(r){return Object.keys(r||{}).reduce(function(o,c){return o+"".concat(c,": ").concat(r[c].trim(),";")},"")}function Wc(r){return r.size!==Ga.size||r.x!==Ga.x||r.y!==Ga.y||r.rotate!==Ga.rotate||r.flipX||r.flipY}function Zp(r){var o=r.transform,c=r.containerWidth,u=r.iconWidth,f={transform:"translate(".concat(c/2," 256)")},h="translate(".concat(o.x*32,", ").concat(o.y*32,") "),m="scale(".concat(o.size/16*(o.flipX?-1:1),", ").concat(o.size/16*(o.flipY?-1:1),") "),x="rotate(".concat(o.rotate," 0 0)"),g={transform:"".concat(h," ").concat(m," ").concat(x)},v={transform:"translate(".concat(u/2*-1," -256)")};return{outer:f,inner:g,path:v}}function Vp(r){var o=r.transform,c=r.width,u=c===void 0?kc:c,f=r.height,h=f===void 0?kc:f,m="";return um?m+="translate(".concat(o.x/Fn-u/2,"em, ").concat(o.y/Fn-h/2,"em) "):m+="translate(calc(-50% + ".concat(o.x/Fn,"em), calc(-50% + ").concat(o.y/Fn,"em)) "),m+="scale(".concat(o.size/Fn*(o.flipX?-1:1),", ").concat(o.size/Fn*(o.flipY?-1:1),") "),m+="rotate(".concat(o.rotate,"deg) "),m}var Pp=`:root, :host {
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
}`;function Hm(){var r=km,o=Mm,c=V.cssPrefix,u=V.replacementClass,f=Pp;if(c!==r||u!==o){var h=new RegExp("\\.".concat(r,"\\-"),"g"),m=new RegExp("\\--".concat(r,"\\-"),"g"),x=new RegExp("\\.".concat(o),"g");f=f.replace(h,".".concat(c,"-")).replace(m,"--".concat(c,"-")).replace(x,".".concat(u))}return f}var y0=!1;function vc(){V.autoAddCss&&!y0&&(Xp(Hm()),y0=!0)}var Kp={mixout:function(){return{dom:{css:Hm,insertCss:vc}}},hooks:function(){return{beforeDOMElementCreation:function(){vc()},beforeI2svg:function(){vc()}}}},ce=qe||{};ce[ue]||(ce[ue]={});ce[ue].styles||(ce[ue].styles={});ce[ue].hooks||(ce[ue].hooks={});ce[ue].shims||(ce[ue].shims=[]);var Na=ce[ue],qm=[],Ym=function(){_t.removeEventListener("DOMContentLoaded",Ym),Ui=1,qm.map(function(o){return o()})},Ui=!1;se&&(Ui=(_t.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(_t.readyState),Ui||_t.addEventListener("DOMContentLoaded",Ym));function $p(r){se&&(Ui?setTimeout(r,0):qm.push(r))}function cr(r){var o=r.tag,c=r.attributes,u=c===void 0?{}:c,f=r.children,h=f===void 0?[]:f;return typeof r=="string"?Um(r):"<".concat(o," ").concat(Qp(u),">").concat(h.map(cr).join(""),"</").concat(o,">")}function x0(r,o,c){if(r&&r[o]&&r[o][c])return{prefix:o,iconName:c,icon:r[o][c]}}var pc=function(o,c,u,f){var h=Object.keys(o),m=h.length,x=c,g,v,_;for(u===void 0?(g=1,_=o[h[0]]):(g=0,_=u);g<m;g++)v=h[g],_=x(_,o[v],v,o);return _};function Bm(r){return ja(r).length!==1?null:r.codePointAt(0).toString(16)}function S0(r){return Object.keys(r).reduce(function(o,c){var u=r[c],f=!!u.icon;return f?o[u.iconName]=u.icon:o[c]=u,o},{})}function Lm(r,o){var c=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},u=c.skipHooks,f=u===void 0?!1:u,h=S0(o);typeof Na.hooks.addPack=="function"&&!f?Na.hooks.addPack(r,S0(o)):Na.styles[r]=U(U({},Na.styles[r]||{}),h),r==="fas"&&Lm("fa",o)}var ir=Na.styles,Jp=Na.shims,Xm=Object.keys(Cm),Fp=Xm.reduce(function(r,o){return r[o]=Object.keys(Cm[o]),r},{}),Ic=null,Gm={},Qm={},Zm={},Vm={},Pm={};function Wp(r){return~Hp.indexOf(r)}function Ip(r,o){var c=o.split("-"),u=c[0],f=c.slice(1).join("-");return u===r&&f!==""&&!Wp(f)?f:null}var Km=function(){var o=function(h){return pc(ir,function(m,x,g){return m[g]=pc(x,h,{}),m},{})};Gm=o(function(f,h,m){if(h[3]&&(f[h[3]]=m),h[2]){var x=h[2].filter(function(g){return typeof g=="number"});x.forEach(function(g){f[g.toString(16)]=m})}return f}),Qm=o(function(f,h,m){if(f[m]=m,h[2]){var x=h[2].filter(function(g){return typeof g=="string"});x.forEach(function(g){f[g]=m})}return f}),Pm=o(function(f,h,m){var x=h[2];return f[m]=m,x.forEach(function(g){f[g]=m}),f});var c="far"in ir||V.autoFetchSvg,u=pc(Jp,function(f,h){var m=h[0],x=h[1],g=h[2];return x==="far"&&!c&&(x="fas"),typeof m=="string"&&(f.names[m]={prefix:x,iconName:g}),typeof m=="number"&&(f.unicodes[m.toString(16)]={prefix:x,iconName:g}),f},{names:{},unicodes:{}});Zm=u.names,Vm=u.unicodes,Ic=Xi(V.styleDefault,{family:V.familyDefault})};Lp(function(r){Ic=Xi(r.styleDefault,{family:V.familyDefault})});Km();function ts(r,o){return(Gm[r]||{})[o]}function ty(r,o){return(Qm[r]||{})[o]}function un(r,o){return(Pm[r]||{})[o]}function $m(r){return Zm[r]||{prefix:null,iconName:null}}function ay(r){var o=Vm[r],c=ts("fas",r);return o||(c?{prefix:"fas",iconName:c}:null)||{prefix:null,iconName:null}}function Ye(){return Ic}var Jm=function(){return{prefix:null,iconName:null,rest:[]}};function ey(r){var o=ta,c=Xm.reduce(function(u,f){return u[f]="".concat(V.cssPrefix,"-").concat(f),u},{});return Tm.forEach(function(u){(r.includes(c[u])||r.some(function(f){return Fp[u].includes(f)}))&&(o=u)}),o}function Xi(r){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},c=o.family,u=c===void 0?ta:c,f=Np[u][r];if(u===or&&!r)return"fad";var h=v0[u][r]||v0[u][f],m=r in Na.styles?r:null,x=h||m||null;return x}function ny(r){var o=[],c=null;return r.forEach(function(u){var f=Ip(V.cssPrefix,u);f?c=f:u&&o.push(u)}),{iconName:c,rest:o}}function O0(r){return r.sort().filter(function(o,c,u){return u.indexOf(o)===c})}var A0=_m.concat(Em);function Gi(r){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},c=o.skipLookups,u=c===void 0?!1:c,f=null,h=O0(r.filter(function(B){return A0.includes(B)})),m=O0(r.filter(function(B){return!A0.includes(B)})),x=h.filter(function(B){return f=B,!sm.includes(B)}),g=Bi(x,1),v=g[0],_=v===void 0?null:v,N=ey(h),R=U(U({},ny(m)),{},{prefix:Xi(_,{family:N})});return U(U(U({},R),oy({values:r,family:N,styles:ir,config:V,canonical:R,givenPrefix:f})),ly(u,f,R))}function ly(r,o,c){var u=c.prefix,f=c.iconName;if(r||!u||!f)return{prefix:u,iconName:f};var h=o==="fa"?$m(f):{},m=un(u,f);return f=h.iconName||m||f,u=h.prefix||u,u==="far"&&!ir.far&&ir.fas&&!V.autoFetchSvg&&(u="fas"),{prefix:u,iconName:f}}var ry=Tm.filter(function(r){return r!==ta||r!==or}),iy=Object.keys(zc).filter(function(r){return r!==ta}).map(function(r){return Object.keys(zc[r])}).flat();function oy(r){var o=r.values,c=r.family,u=r.canonical,f=r.givenPrefix,h=f===void 0?"":f,m=r.styles,x=m===void 0?{}:m,g=r.config,v=g===void 0?{}:g,_=c===or,N=o.includes("fa-duotone")||o.includes("fad"),R=v.familyDefault==="duotone",B=u.prefix==="fad"||u.prefix==="fa-duotone";if(!_&&(N||R||B)&&(u.prefix="fad"),(o.includes("fa-brands")||o.includes("fab"))&&(u.prefix="fab"),!u.prefix&&ry.includes(c)){var H=Object.keys(x).find(function(L){return iy.includes(L)});if(H||v.autoFetchSvg){var D=D1.get(c).defaultShortPrefixId;u.prefix=D,u.iconName=un(u.prefix,u.iconName)||u.iconName}}return(u.prefix==="fa"||h==="fa")&&(u.prefix=Ye()||"fas"),u}var uy=function(){function r(){a1(this,r),this.definitions={}}return n1(r,[{key:"add",value:function(){for(var c=this,u=arguments.length,f=new Array(u),h=0;h<u;h++)f[h]=arguments[h];var m=f.reduce(this._pullDefinitions,{});Object.keys(m).forEach(function(x){c.definitions[x]=U(U({},c.definitions[x]||{}),m[x]),Lm(x,m[x]),Km()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(c,u){var f=u.prefix&&u.iconName&&u.icon?{0:u}:u;return Object.keys(f).map(function(h){var m=f[h],x=m.prefix,g=m.iconName,v=m.icon,_=v[2];c[x]||(c[x]={}),_.length>0&&_.forEach(function(N){typeof N=="string"&&(c[x][N]=v)}),c[x][g]=v}),c}}])}(),T0=[],Wn={},In={},cy=Object.keys(In);function sy(r,o){var c=o.mixoutsTo;return T0=r,Wn={},Object.keys(In).forEach(function(u){cy.indexOf(u)===-1&&delete In[u]}),T0.forEach(function(u){var f=u.mixout?u.mixout():{};if(Object.keys(f).forEach(function(m){typeof f[m]=="function"&&(c[m]=f[m]),Ri(f[m])==="object"&&Object.keys(f[m]).forEach(function(x){c[m]||(c[m]={}),c[m][x]=f[m][x]})}),u.hooks){var h=u.hooks();Object.keys(h).forEach(function(m){Wn[m]||(Wn[m]=[]),Wn[m].push(h[m])})}u.provides&&u.provides(In)}),c}function Cc(r,o){for(var c=arguments.length,u=new Array(c>2?c-2:0),f=2;f<c;f++)u[f-2]=arguments[f];var h=Wn[r]||[];return h.forEach(function(m){o=m.apply(null,[o].concat(u))}),o}function sn(r){for(var o=arguments.length,c=new Array(o>1?o-1:0),u=1;u<o;u++)c[u-1]=arguments[u];var f=Wn[r]||[];f.forEach(function(h){h.apply(null,c)})}function Be(){var r=arguments[0],o=Array.prototype.slice.call(arguments,1);return In[r]?In[r].apply(null,o):void 0}function jc(r){r.prefix==="fa"&&(r.prefix="fas");var o=r.iconName,c=r.prefix||Ye();if(o)return o=un(c,o)||o,x0(Fm.definitions,c,o)||x0(Na.styles,c,o)}var Fm=new uy,fy=function(){V.autoReplaceSvg=!1,V.observeMutations=!1,sn("noAuto")},dy={i2svg:function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return se?(sn("beforeI2svg",o),Be("pseudoElements2svg",o),Be("i2svg",o)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},c=o.autoReplaceSvgRoot;V.autoReplaceSvg===!1&&(V.autoReplaceSvg=!0),V.observeMutations=!0,$p(function(){my({autoReplaceSvgRoot:c}),sn("watch",o)})}},hy={icon:function(o){if(o===null)return null;if(Ri(o)==="object"&&o.prefix&&o.iconName)return{prefix:o.prefix,iconName:un(o.prefix,o.iconName)||o.iconName};if(Array.isArray(o)&&o.length===2){var c=o[1].indexOf("fa-")===0?o[1].slice(3):o[1],u=Xi(o[0]);return{prefix:u,iconName:un(u,c)||c}}if(typeof o=="string"&&(o.indexOf("".concat(V.cssPrefix,"-"))>-1||o.match(Cp))){var f=Gi(o.split(" "),{skipLookups:!0});return{prefix:f.prefix||Ye(),iconName:un(f.prefix,f.iconName)||f.iconName}}if(typeof o=="string"){var h=Ye();return{prefix:h,iconName:un(h,o)||o}}}},pa={noAuto:fy,config:V,dom:dy,parse:hy,library:Fm,findIconDefinition:jc,toHtml:cr},my=function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},c=o.autoReplaceSvgRoot,u=c===void 0?_t:c;(Object.keys(Na.styles).length>0||V.autoFetchSvg)&&se&&V.autoReplaceSvg&&pa.dom.i2svg({node:u})};function Qi(r,o){return Object.defineProperty(r,"abstract",{get:o}),Object.defineProperty(r,"html",{get:function(){return r.abstract.map(function(u){return cr(u)})}}),Object.defineProperty(r,"node",{get:function(){if(se){var u=_t.createElement("div");return u.innerHTML=r.html,u.children}}}),r}function by(r){var o=r.children,c=r.main,u=r.mask,f=r.attributes,h=r.styles,m=r.transform;if(Wc(m)&&c.found&&!u.found){var x=c.width,g=c.height,v={x:x/g/2,y:.5};f.style=Li(U(U({},h),{},{"transform-origin":"".concat(v.x+m.x/16,"em ").concat(v.y+m.y/16,"em")}))}return[{tag:"svg",attributes:f,children:o}]}function gy(r){var o=r.prefix,c=r.iconName,u=r.children,f=r.attributes,h=r.symbol,m=h===!0?"".concat(o,"-").concat(V.cssPrefix,"-").concat(c):h;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:U(U({},f),{},{id:m}),children:u}]}]}function vy(r){var o=["aria-label","aria-labelledby","title","role"];return o.some(function(c){return c in r})}function as(r){var o=r.icons,c=o.main,u=o.mask,f=r.prefix,h=r.iconName,m=r.transform,x=r.symbol,g=r.maskId,v=r.extra,_=r.watchable,N=_===void 0?!1:_,R=u.found?u:c,B=R.width,H=R.height,D=[V.replacementClass,h?"".concat(V.cssPrefix,"-").concat(h):""].filter(function(P){return v.classes.indexOf(P)===-1}).filter(function(P){return P!==""||!!P}).concat(v.classes).join(" "),L={children:[],attributes:U(U({},v.attributes),{},{"data-prefix":f,"data-icon":h,class:D,role:v.attributes.role||"img",viewBox:"0 0 ".concat(B," ").concat(H)})};!vy(v.attributes)&&!v.attributes["aria-hidden"]&&(L.attributes["aria-hidden"]="true"),N&&(L.attributes[cn]="");var I=U(U({},L),{},{prefix:f,iconName:h,main:c,mask:u,maskId:g,transform:m,symbol:x,styles:U({},v.styles)}),nt=u.found&&c.found?Be("generateAbstractMask",I)||{children:[],attributes:{}}:Be("generateAbstractIcon",I)||{children:[],attributes:{}},tt=nt.children,gt=nt.attributes;return I.children=tt,I.attributes=gt,x?gy(I):by(I)}function E0(r){var o=r.content,c=r.width,u=r.height,f=r.transform,h=r.extra,m=r.watchable,x=m===void 0?!1:m,g=U(U({},h.attributes),{},{class:h.classes.join(" ")});x&&(g[cn]="");var v=U({},h.styles);Wc(f)&&(v.transform=Vp({transform:f,width:c,height:u}),v["-webkit-transform"]=v.transform);var _=Li(v);_.length>0&&(g.style=_);var N=[];return N.push({tag:"span",attributes:g,children:[o]}),N}function py(r){var o=r.content,c=r.extra,u=U(U({},c.attributes),{},{class:c.classes.join(" ")}),f=Li(c.styles);f.length>0&&(u.style=f);var h=[];return h.push({tag:"span",attributes:u,children:[o]}),h}var yc=Na.styles;function Rc(r){var o=r[0],c=r[1],u=r.slice(4),f=Bi(u,1),h=f[0],m=null;return Array.isArray(h)?m={tag:"g",attributes:{class:"".concat(V.cssPrefix,"-").concat(gc.GROUP)},children:[{tag:"path",attributes:{class:"".concat(V.cssPrefix,"-").concat(gc.SECONDARY),fill:"currentColor",d:h[0]}},{tag:"path",attributes:{class:"".concat(V.cssPrefix,"-").concat(gc.PRIMARY),fill:"currentColor",d:h[1]}}]}:m={tag:"path",attributes:{fill:"currentColor",d:h}},{found:!0,width:o,height:c,icon:m}}var yy={found:!1,width:512,height:512};function xy(r,o){!wm&&!V.showMissingIcons&&r&&console.error('Icon with name "'.concat(r,'" and prefix "').concat(o,'" is missing.'))}function Uc(r,o){var c=o;return o==="fa"&&V.styleDefault!==null&&(o=Ye()),new Promise(function(u,f){if(c==="fa"){var h=$m(r)||{};r=h.iconName||r,o=h.prefix||o}if(r&&o&&yc[o]&&yc[o][r]){var m=yc[o][r];return u(Rc(m))}xy(r,o),u(U(U({},yy),{},{icon:V.showMissingIcons&&r?Be("missingIconAbstract")||{}:{}}))})}var _0=function(){},Hc=V.measurePerformance&&Ei&&Ei.mark&&Ei.measure?Ei:{mark:_0,measure:_0},ar='FA "7.0.0"',Sy=function(o){return Hc.mark("".concat(ar," ").concat(o," begins")),function(){return Wm(o)}},Wm=function(o){Hc.mark("".concat(ar," ").concat(o," ends")),Hc.measure("".concat(ar," ").concat(o),"".concat(ar," ").concat(o," begins"),"".concat(ar," ").concat(o," ends"))},es={begin:Sy,end:Wm},wi=function(){};function z0(r){var o=r.getAttribute?r.getAttribute(cn):null;return typeof o=="string"}function Oy(r){var o=r.getAttribute?r.getAttribute($c):null,c=r.getAttribute?r.getAttribute(Jc):null;return o&&c}function Ay(r){return r&&r.classList&&r.classList.contains&&r.classList.contains(V.replacementClass)}function Ty(){if(V.autoReplaceSvg===!0)return Ni.replace;var r=Ni[V.autoReplaceSvg];return r||Ni.replace}function Ey(r){return _t.createElementNS("http://www.w3.org/2000/svg",r)}function _y(r){return _t.createElement(r)}function Im(r){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},c=o.ceFn,u=c===void 0?r.tag==="svg"?Ey:_y:c;if(typeof r=="string")return _t.createTextNode(r);var f=u(r.tag);Object.keys(r.attributes||[]).forEach(function(m){f.setAttribute(m,r.attributes[m])});var h=r.children||[];return h.forEach(function(m){f.appendChild(Im(m,{ceFn:u}))}),f}function zy(r){var o=" ".concat(r.outerHTML," ");return o="".concat(o,"Font Awesome fontawesome.com "),o}var Ni={replace:function(o){var c=o[0];if(c.parentNode)if(o[1].forEach(function(f){c.parentNode.insertBefore(Im(f),c)}),c.getAttribute(cn)===null&&V.keepOriginalSource){var u=_t.createComment(zy(c));c.parentNode.replaceChild(u,c)}else c.remove()},nest:function(o){var c=o[0],u=o[1];if(~Fc(c).indexOf(V.replacementClass))return Ni.replace(o);var f=new RegExp("".concat(V.cssPrefix,"-.*"));if(delete u[0].attributes.id,u[0].attributes.class){var h=u[0].attributes.class.split(" ").reduce(function(x,g){return g===V.replacementClass||g.match(f)?x.toSvg.push(g):x.toNode.push(g),x},{toNode:[],toSvg:[]});u[0].attributes.class=h.toSvg.join(" "),h.toNode.length===0?c.removeAttribute("class"):c.setAttribute("class",h.toNode.join(" "))}var m=u.map(function(x){return cr(x)}).join(`
`);c.setAttribute(cn,""),c.innerHTML=m}};function k0(r){r()}function tb(r,o){var c=typeof o=="function"?o:wi;if(r.length===0)c();else{var u=k0;V.mutateApproach===Dp&&(u=qe.requestAnimationFrame||k0),u(function(){var f=Ty(),h=es.begin("mutate");r.map(f),h(),c()})}}var ns=!1;function ab(){ns=!0}function qc(){ns=!1}var Hi=null;function M0(r){if(h0&&V.observeMutations){var o=r.treeCallback,c=o===void 0?wi:o,u=r.nodeCallback,f=u===void 0?wi:u,h=r.pseudoElementsCallback,m=h===void 0?wi:h,x=r.observeMutationsRoot,g=x===void 0?_t:x;Hi=new h0(function(v){if(!ns){var _=Ye();al(v).forEach(function(N){if(N.type==="childList"&&N.addedNodes.length>0&&!z0(N.addedNodes[0])&&(V.searchPseudoElements&&m(N.target),c(N.target)),N.type==="attributes"&&N.target.parentNode&&V.searchPseudoElements&&m([N.target],!0),N.type==="attributes"&&z0(N.target)&&~Up.indexOf(N.attributeName))if(N.attributeName==="class"&&Oy(N.target)){var R=Gi(Fc(N.target)),B=R.prefix,H=R.iconName;N.target.setAttribute($c,B||_),H&&N.target.setAttribute(Jc,H)}else Ay(N.target)&&f(N.target)})}}),se&&Hi.observe(g,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function ky(){Hi&&Hi.disconnect()}function My(r){var o=r.getAttribute("style"),c=[];return o&&(c=o.split(";").reduce(function(u,f){var h=f.split(":"),m=h[0],x=h.slice(1);return m&&x.length>0&&(u[m]=x.join(":").trim()),u},{})),c}function Dy(r){var o=r.getAttribute("data-prefix"),c=r.getAttribute("data-icon"),u=r.innerText!==void 0?r.innerText.trim():"",f=Gi(Fc(r));return f.prefix||(f.prefix=Ye()),o&&c&&(f.prefix=o,f.iconName=c),f.iconName&&f.prefix||(f.prefix&&u.length>0&&(f.iconName=ty(f.prefix,r.innerText)||ts(f.prefix,Bm(r.innerText))),!f.iconName&&V.autoFetchSvg&&r.firstChild&&r.firstChild.nodeType===Node.TEXT_NODE&&(f.iconName=r.firstChild.data)),f}function wy(r){var o=al(r.attributes).reduce(function(c,u){return c.name!=="class"&&c.name!=="style"&&(c[u.name]=u.value),c},{});return o}function Ny(){return{iconName:null,prefix:null,transform:Ga,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function D0(r){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},c=Dy(r),u=c.iconName,f=c.prefix,h=c.rest,m=wy(r),x=Cc("parseNodeAttributes",{},r),g=o.styleParser?My(r):[];return U({iconName:u,prefix:f,transform:Ga,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:h,styles:g,attributes:m}},x)}var Cy=Na.styles;function eb(r){var o=V.autoReplaceSvg==="nest"?D0(r,{styleParser:!1}):D0(r);return~o.extra.classes.indexOf(jm)?Be("generateLayersText",r,o):Be("generateSvgReplacementMutation",r,o)}function jy(){return[].concat(ja(Em),ja(_m))}function w0(r){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!se)return Promise.resolve();var c=_t.documentElement.classList,u=function(N){return c.add("".concat(g0,"-").concat(N))},f=function(N){return c.remove("".concat(g0,"-").concat(N))},h=V.autoFetchSvg?jy():sm.concat(Object.keys(Cy));h.includes("fa")||h.push("fa");var m=[".".concat(jm,":not([").concat(cn,"])")].concat(h.map(function(_){return".".concat(_,":not([").concat(cn,"])")})).join(", ");if(m.length===0)return Promise.resolve();var x=[];try{x=al(r.querySelectorAll(m))}catch{}if(x.length>0)u("pending"),f("complete");else return Promise.resolve();var g=es.begin("onTree"),v=x.reduce(function(_,N){try{var R=eb(N);R&&_.push(R)}catch(B){wm||B.name==="MissingIcon"&&console.error(B)}return _},[]);return new Promise(function(_,N){Promise.all(v).then(function(R){tb(R,function(){u("active"),u("complete"),f("pending"),typeof o=="function"&&o(),g(),_()})}).catch(function(R){g(),N(R)})})}function Ry(r){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;eb(r).then(function(c){c&&tb([c],o)})}function Uy(r){return function(o){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},u=(o||{}).icon?o:jc(o||{}),f=c.mask;return f&&(f=(f||{}).icon?f:jc(f||{})),r(u,U(U({},c),{},{mask:f}))}}var Hy=function(o){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},u=c.transform,f=u===void 0?Ga:u,h=c.symbol,m=h===void 0?!1:h,x=c.mask,g=x===void 0?null:x,v=c.maskId,_=v===void 0?null:v,N=c.classes,R=N===void 0?[]:N,B=c.attributes,H=B===void 0?{}:B,D=c.styles,L=D===void 0?{}:D;if(o){var I=o.prefix,nt=o.iconName,tt=o.icon;return Qi(U({type:"icon"},o),function(){return sn("beforeDOMElementCreation",{iconDefinition:o,params:c}),as({icons:{main:Rc(tt),mask:g?Rc(g.icon):{found:!1,width:null,height:null,icon:{}}},prefix:I,iconName:nt,transform:U(U({},Ga),f),symbol:m,maskId:_,extra:{attributes:H,styles:L,classes:R}})})}},qy={mixout:function(){return{icon:Uy(Hy)}},hooks:function(){return{mutationObserverCallbacks:function(c){return c.treeCallback=w0,c.nodeCallback=Ry,c}}},provides:function(o){o.i2svg=function(c){var u=c.node,f=u===void 0?_t:u,h=c.callback,m=h===void 0?function(){}:h;return w0(f,m)},o.generateSvgReplacementMutation=function(c,u){var f=u.iconName,h=u.prefix,m=u.transform,x=u.symbol,g=u.mask,v=u.maskId,_=u.extra;return new Promise(function(N,R){Promise.all([Uc(f,h),g.iconName?Uc(g.iconName,g.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(B){var H=Bi(B,2),D=H[0],L=H[1];N([c,as({icons:{main:D,mask:L},prefix:h,iconName:f,transform:m,symbol:x,maskId:v,extra:_,watchable:!0})])}).catch(R)})},o.generateAbstractIcon=function(c){var u=c.children,f=c.attributes,h=c.main,m=c.transform,x=c.styles,g=Li(x);g.length>0&&(f.style=g);var v;return Wc(m)&&(v=Be("generateAbstractTransformGrouping",{main:h,transform:m,containerWidth:h.width,iconWidth:h.width})),u.push(v||h.icon),{children:u,attributes:f}}}},Yy={mixout:function(){return{layer:function(c){var u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},f=u.classes,h=f===void 0?[]:f;return Qi({type:"layer"},function(){sn("beforeDOMElementCreation",{assembler:c,params:u});var m=[];return c(function(x){Array.isArray(x)?x.map(function(g){m=m.concat(g.abstract)}):m=m.concat(x.abstract)}),[{tag:"span",attributes:{class:["".concat(V.cssPrefix,"-layers")].concat(ja(h)).join(" ")},children:m}]})}}}},By={mixout:function(){return{counter:function(c){var u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};u.title;var f=u.classes,h=f===void 0?[]:f,m=u.attributes,x=m===void 0?{}:m,g=u.styles,v=g===void 0?{}:g;return Qi({type:"counter",content:c},function(){return sn("beforeDOMElementCreation",{content:c,params:u}),py({content:c.toString(),extra:{attributes:x,styles:v,classes:["".concat(V.cssPrefix,"-layers-counter")].concat(ja(h))}})})}}}},Ly={mixout:function(){return{text:function(c){var u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},f=u.transform,h=f===void 0?Ga:f,m=u.classes,x=m===void 0?[]:m,g=u.attributes,v=g===void 0?{}:g,_=u.styles,N=_===void 0?{}:_;return Qi({type:"text",content:c},function(){return sn("beforeDOMElementCreation",{content:c,params:u}),E0({content:c,transform:U(U({},Ga),h),extra:{attributes:v,styles:N,classes:["".concat(V.cssPrefix,"-layers-text")].concat(ja(x))}})})}}},provides:function(o){o.generateLayersText=function(c,u){var f=u.transform,h=u.extra,m=null,x=null;if(um){var g=parseInt(getComputedStyle(c).fontSize,10),v=c.getBoundingClientRect();m=v.width/g,x=v.height/g}return Promise.resolve([c,E0({content:c.innerHTML,width:m,height:x,transform:f,extra:h,watchable:!0})])}}},nb=new RegExp('"',"ug"),N0=[1105920,1112319],C0=U(U(U(U({},{FontAwesome:{normal:"fas",400:"fas"}}),M1),kp),q1),Yc=Object.keys(C0).reduce(function(r,o){return r[o.toLowerCase()]=C0[o],r},{}),Xy=Object.keys(Yc).reduce(function(r,o){var c=Yc[o];return r[o]=c[900]||ja(Object.entries(c))[0][1],r},{});function Gy(r){var o=r.replace(nb,"");return Bm(ja(o)[0]||"")}function Qy(r){var o=r.getPropertyValue("font-feature-settings").includes("ss01"),c=r.getPropertyValue("content"),u=c.replace(nb,""),f=u.codePointAt(0),h=f>=N0[0]&&f<=N0[1],m=u.length===2?u[0]===u[1]:!1;return h||m||o}function Zy(r,o){var c=r.replace(/^['"]|['"]$/g,"").toLowerCase(),u=parseInt(o),f=isNaN(u)?"normal":u;return(Yc[c]||{})[f]||Xy[c]}function j0(r,o){var c="".concat(Mp).concat(o.replace(":","-"));return new Promise(function(u,f){if(r.getAttribute(c)!==null)return u();var h=al(r.children),m=h.filter(function(vt){return vt.getAttribute(Mc)===o})[0],x=qe.getComputedStyle(r,o),g=x.getPropertyValue("font-family"),v=g.match(jp),_=x.getPropertyValue("font-weight"),N=x.getPropertyValue("content");if(m&&!v)return r.removeChild(m),u();if(v&&N!=="none"&&N!==""){var R=x.getPropertyValue("content"),B=Zy(g,_),H=Gy(R),D=v[0].startsWith("FontAwesome"),L=Qy(x),I=ts(B,H),nt=I;if(D){var tt=ay(H);tt.iconName&&tt.prefix&&(I=tt.iconName,B=tt.prefix)}if(I&&!L&&(!m||m.getAttribute($c)!==B||m.getAttribute(Jc)!==nt)){r.setAttribute(c,nt),m&&r.removeChild(m);var gt=Ny(),P=gt.extra;P.attributes[Mc]=o,Uc(I,B).then(function(vt){var Tt=as(U(U({},gt),{},{icons:{main:vt,mask:Jm()},prefix:B,iconName:nt,extra:P,watchable:!0})),pt=_t.createElementNS("http://www.w3.org/2000/svg","svg");o==="::before"?r.insertBefore(pt,r.firstChild):r.appendChild(pt),pt.outerHTML=Tt.map(function(zt){return cr(zt)}).join(`
`),r.removeAttribute(c),u()}).catch(f)}else u()}else u()})}function Vy(r){return Promise.all([j0(r,"::before"),j0(r,"::after")])}function Py(r){return r.parentNode!==document.head&&!~wp.indexOf(r.tagName.toUpperCase())&&!r.getAttribute(Mc)&&(!r.parentNode||r.parentNode.tagName!=="svg")}var Ky=function(o){return!!o&&Dm.some(function(c){return o.includes(c)})},$y=function(o){if(!o)return[];for(var c=new Set,u=[o],f=[/(?=\s:)/,new RegExp("(?<=\\)\\)?[^,]*,)")],h=function(){var B=x[m];u=u.flatMap(function(H){return H.split(B).map(function(D){return D.replace(/,\s*$/,"").trim()})})},m=0,x=f;m<x.length;m++)h();u=u.flatMap(function(R){return R.includes("(")?R:R.split(",").map(function(B){return B.trim()})});var g=Di(u),v;try{for(g.s();!(v=g.n()).done;){var _=v.value;if(Ky(_)){var N=Dm.reduce(function(R,B){return R.replace(B,"")},_);N!==""&&N!=="*"&&c.add(N)}}}catch(R){g.e(R)}finally{g.f()}return c};function R0(r){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(se){var c;if(o)c=r;else if(V.searchPseudoElementsFullScan)c=r.querySelectorAll("*");else{var u=new Set,f=Di(document.styleSheets),h;try{for(f.s();!(h=f.n()).done;){var m=h.value;try{var x=Di(m.cssRules),g;try{for(x.s();!(g=x.n()).done;){var v=g.value,_=$y(v.selectorText),N=Di(_),R;try{for(N.s();!(R=N.n()).done;){var B=R.value;u.add(B)}}catch(D){N.e(D)}finally{N.f()}}}catch(D){x.e(D)}finally{x.f()}}catch(D){V.searchPseudoElementsWarnings&&console.warn("Font Awesome: cannot parse stylesheet: ".concat(m.href," (").concat(D.message,`)
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`))}}}catch(D){f.e(D)}finally{f.f()}if(!u.size)return;var H=Array.from(u).join(", ");try{c=r.querySelectorAll(H)}catch{}}return new Promise(function(D,L){var I=al(c).filter(Py).map(Vy),nt=es.begin("searchPseudoElements");ab(),Promise.all(I).then(function(){nt(),qc(),D()}).catch(function(){nt(),qc(),L()})})}}var Jy={hooks:function(){return{mutationObserverCallbacks:function(c){return c.pseudoElementsCallback=R0,c}}},provides:function(o){o.pseudoElements2svg=function(c){var u=c.node,f=u===void 0?_t:u;V.searchPseudoElements&&R0(f)}}},U0=!1,Fy={mixout:function(){return{dom:{unwatch:function(){ab(),U0=!0}}}},hooks:function(){return{bootstrap:function(){M0(Cc("mutationObserverCallbacks",{}))},noAuto:function(){ky()},watch:function(c){var u=c.observeMutationsRoot;U0?qc():M0(Cc("mutationObserverCallbacks",{observeMutationsRoot:u}))}}}},H0=function(o){var c={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return o.toLowerCase().split(" ").reduce(function(u,f){var h=f.toLowerCase().split("-"),m=h[0],x=h.slice(1).join("-");if(m&&x==="h")return u.flipX=!0,u;if(m&&x==="v")return u.flipY=!0,u;if(x=parseFloat(x),isNaN(x))return u;switch(m){case"grow":u.size=u.size+x;break;case"shrink":u.size=u.size-x;break;case"left":u.x=u.x-x;break;case"right":u.x=u.x+x;break;case"up":u.y=u.y-x;break;case"down":u.y=u.y+x;break;case"rotate":u.rotate=u.rotate+x;break}return u},c)},Wy={mixout:function(){return{parse:{transform:function(c){return H0(c)}}}},hooks:function(){return{parseNodeAttributes:function(c,u){var f=u.getAttribute("data-fa-transform");return f&&(c.transform=H0(f)),c}}},provides:function(o){o.generateAbstractTransformGrouping=function(c){var u=c.main,f=c.transform,h=c.containerWidth,m=c.iconWidth,x={transform:"translate(".concat(h/2," 256)")},g="translate(".concat(f.x*32,", ").concat(f.y*32,") "),v="scale(".concat(f.size/16*(f.flipX?-1:1),", ").concat(f.size/16*(f.flipY?-1:1),") "),_="rotate(".concat(f.rotate," 0 0)"),N={transform:"".concat(g," ").concat(v," ").concat(_)},R={transform:"translate(".concat(m/2*-1," -256)")},B={outer:x,inner:N,path:R};return{tag:"g",attributes:U({},B.outer),children:[{tag:"g",attributes:U({},B.inner),children:[{tag:u.icon.tag,children:u.icon.children,attributes:U(U({},u.icon.attributes),B.path)}]}]}}}},xc={x:0,y:0,width:"100%",height:"100%"};function q0(r){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return r.attributes&&(r.attributes.fill||o)&&(r.attributes.fill="black"),r}function Iy(r){return r.tag==="g"?r.children:[r]}var t2={hooks:function(){return{parseNodeAttributes:function(c,u){var f=u.getAttribute("data-fa-mask"),h=f?Gi(f.split(" ").map(function(m){return m.trim()})):Jm();return h.prefix||(h.prefix=Ye()),c.mask=h,c.maskId=u.getAttribute("data-fa-mask-id"),c}}},provides:function(o){o.generateAbstractMask=function(c){var u=c.children,f=c.attributes,h=c.main,m=c.mask,x=c.maskId,g=c.transform,v=h.width,_=h.icon,N=m.width,R=m.icon,B=Zp({transform:g,containerWidth:N,iconWidth:v}),H={tag:"rect",attributes:U(U({},xc),{},{fill:"white"})},D=_.children?{children:_.children.map(q0)}:{},L={tag:"g",attributes:U({},B.inner),children:[q0(U({tag:_.tag,attributes:U(U({},_.attributes),B.path)},D))]},I={tag:"g",attributes:U({},B.outer),children:[L]},nt="mask-".concat(x||p0()),tt="clip-".concat(x||p0()),gt={tag:"mask",attributes:U(U({},xc),{},{id:nt,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[H,I]},P={tag:"defs",children:[{tag:"clipPath",attributes:{id:tt},children:Iy(R)},gt]};return u.push(P,{tag:"rect",attributes:U({fill:"currentColor","clip-path":"url(#".concat(tt,")"),mask:"url(#".concat(nt,")")},xc)}),{children:u,attributes:f}}}},a2={provides:function(o){var c=!1;qe.matchMedia&&(c=qe.matchMedia("(prefers-reduced-motion: reduce)").matches),o.missingIconAbstract=function(){var u=[],f={fill:"currentColor"},h={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};u.push({tag:"path",attributes:U(U({},f),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var m=U(U({},h),{},{attributeName:"opacity"}),x={tag:"circle",attributes:U(U({},f),{},{cx:"256",cy:"364",r:"28"}),children:[]};return c||x.children.push({tag:"animate",attributes:U(U({},h),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:U(U({},m),{},{values:"1;0;1;1;0;1;"})}),u.push(x),u.push({tag:"path",attributes:U(U({},f),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:c?[]:[{tag:"animate",attributes:U(U({},m),{},{values:"1;0;0;0;0;1;"})}]}),c||u.push({tag:"path",attributes:U(U({},f),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:U(U({},m),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:u}}}},e2={hooks:function(){return{parseNodeAttributes:function(c,u){var f=u.getAttribute("data-fa-symbol"),h=f===null?!1:f===""?!0:f;return c.symbol=h,c}}}},n2=[Kp,qy,Yy,By,Ly,Jy,Fy,Wy,t2,a2,e2];sy(n2,{mixoutsTo:pa});pa.noAuto;pa.config;pa.library;pa.dom;var Bc=pa.parse;pa.findIconDefinition;pa.toHtml;var l2=pa.icon;pa.layer;pa.text;pa.counter;var Sc={exports:{}},Oc,Y0;function r2(){if(Y0)return Oc;Y0=1;var r="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return Oc=r,Oc}var Ac,B0;function i2(){if(B0)return Ac;B0=1;var r=r2();function o(){}function c(){}return c.resetWarningCache=o,Ac=function(){function u(m,x,g,v,_,N){if(N!==r){var R=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw R.name="Invariant Violation",R}}u.isRequired=u;function f(){return u}var h={array:u,bigint:u,bool:u,func:u,number:u,object:u,string:u,symbol:u,any:u,arrayOf:f,element:u,elementType:u,instanceOf:f,node:u,objectOf:f,oneOf:f,oneOfType:f,shape:f,exact:f,checkPropTypes:c,resetWarningCache:o};return h.PropTypes=h,h},Ac}var L0;function o2(){return L0||(L0=1,Sc.exports=i2()()),Sc.exports}var u2=o2();const rt=I0(u2);var c2={};function Lc(r,o){(o==null||o>r.length)&&(o=r.length);for(var c=0,u=Array(o);c<o;c++)u[c]=r[c];return u}function s2(r){if(Array.isArray(r))return r}function f2(r){if(Array.isArray(r))return Lc(r)}function He(r,o,c){return(o=y2(o))in r?Object.defineProperty(r,o,{value:c,enumerable:!0,configurable:!0,writable:!0}):r[o]=c,r}function d2(r){if(typeof Symbol<"u"&&r[Symbol.iterator]!=null||r["@@iterator"]!=null)return Array.from(r)}function h2(r,o){var c=r==null?null:typeof Symbol<"u"&&r[Symbol.iterator]||r["@@iterator"];if(c!=null){var u,f,h,m,x=[],g=!0,v=!1;try{if(h=(c=c.call(r)).next,o!==0)for(;!(g=(u=h.call(c)).done)&&(x.push(u.value),x.length!==o);g=!0);}catch(_){v=!0,f=_}finally{try{if(!g&&c.return!=null&&(m=c.return(),Object(m)!==m))return}finally{if(v)throw f}}return x}}function m2(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function b2(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function X0(r,o){var c=Object.keys(r);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(r);o&&(u=u.filter(function(f){return Object.getOwnPropertyDescriptor(r,f).enumerable})),c.push.apply(c,u)}return c}function La(r){for(var o=1;o<arguments.length;o++){var c=arguments[o]!=null?arguments[o]:{};o%2?X0(Object(c),!0).forEach(function(u){He(r,u,c[u])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(c)):X0(Object(c)).forEach(function(u){Object.defineProperty(r,u,Object.getOwnPropertyDescriptor(c,u))})}return r}function g2(r,o){if(r==null)return{};var c,u,f=v2(r,o);if(Object.getOwnPropertySymbols){var h=Object.getOwnPropertySymbols(r);for(u=0;u<h.length;u++)c=h[u],o.indexOf(c)===-1&&{}.propertyIsEnumerable.call(r,c)&&(f[c]=r[c])}return f}function v2(r,o){if(r==null)return{};var c={};for(var u in r)if({}.hasOwnProperty.call(r,u)){if(o.indexOf(u)!==-1)continue;c[u]=r[u]}return c}function G0(r,o){return s2(r)||h2(r,o)||lb(r,o)||m2()}function Xc(r){return f2(r)||d2(r)||lb(r)||b2()}function p2(r,o){if(typeof r!="object"||!r)return r;var c=r[Symbol.toPrimitive];if(c!==void 0){var u=c.call(r,o);if(typeof u!="object")return u;throw new TypeError("@@toPrimitive must return a primitive value.")}return(o==="string"?String:Number)(r)}function y2(r){var o=p2(r,"string");return typeof o=="symbol"?o:o+""}function qi(r){"@babel/helpers - typeof";return qi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(o){return typeof o}:function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},qi(r)}function lb(r,o){if(r){if(typeof r=="string")return Lc(r,o);var c={}.toString.call(r).slice(8,-1);return c==="Object"&&r.constructor&&(c=r.constructor.name),c==="Map"||c==="Set"?Array.from(r):c==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)?Lc(r,o):void 0}}var x2="7.0.0-alpha1",Gc;try{var S2=require("@fortawesome/fontawesome-svg-core/package.json");Gc=S2.version}catch{Gc=c2.FA_VERSION||"7.0.0-alpha8"}function O2(r){var o=r.beat,c=r.fade,u=r.beatFade,f=r.bounce,h=r.shake,m=r.flash,x=r.spin,g=r.spinPulse,v=r.spinReverse,_=r.pulse,N=r.fixedWidth,R=r.inverse,B=r.border,H=r.listItem,D=r.flip,L=r.size,I=r.rotation,nt=r.pull,tt=r.swapOpacity,gt=r.rotateBy,P=r.widthAuto,vt=A2(Gc,x2),Tt=He(He(He(He(He(He({"fa-beat":o,"fa-fade":c,"fa-beat-fade":u,"fa-bounce":f,"fa-shake":h,"fa-flash":m,"fa-spin":x,"fa-spin-reverse":v,"fa-spin-pulse":g,"fa-pulse":_,"fa-fw":N,"fa-inverse":R,"fa-border":B,"fa-li":H,"fa-flip":D===!0,"fa-flip-horizontal":D==="horizontal"||D==="both","fa-flip-vertical":D==="vertical"||D==="both"},"fa-".concat(L),typeof L<"u"&&L!==null),"fa-rotate-".concat(I),typeof I<"u"&&I!==null&&I!==0),"fa-pull-".concat(nt),typeof nt<"u"&&nt!==null),"fa-swap-opacity",tt),"fa-rotate-by",vt&&gt),"fa-width-auto",vt&&P);return Object.keys(Tt).map(function(pt){return Tt[pt]?pt:null}).filter(function(pt){return pt})}function A2(r,o){for(var c=r.split("-"),u=G0(c,2),f=u[0],h=u[1],m=o.split("-"),x=G0(m,2),g=x[0],v=x[1],_=f.split("."),N=g.split("."),R=0;R<Math.max(_.length,N.length);R++){var B=_[R]||"0",H=N[R]||"0",D=parseInt(B,10),L=parseInt(H,10);if(D!==L)return D>L}for(var I=0;I<Math.max(_.length,N.length);I++){var nt=_[I]||"0",tt=N[I]||"0";if(nt!==tt&&nt.length!==tt.length)return nt.length<tt.length}return!(h&&!v)}function T2(r){return r=r-0,r===r}function rb(r){return T2(r)?r:(r=r.replace(/[\-_\s]+(.)?/g,function(o,c){return c?c.toUpperCase():""}),r.substr(0,1).toLowerCase()+r.substr(1))}var E2=["style"];function _2(r){return r.charAt(0).toUpperCase()+r.slice(1)}function z2(r){return r.split(";").map(function(o){return o.trim()}).filter(function(o){return o}).reduce(function(o,c){var u=c.indexOf(":"),f=rb(c.slice(0,u)),h=c.slice(u+1).trim();return f.startsWith("webkit")?o[_2(f)]=h:o[f]=h,o},{})}function ib(r,o){var c=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof o=="string")return o;var u=(o.children||[]).map(function(g){return ib(r,g)}),f=Object.keys(o.attributes||{}).reduce(function(g,v){var _=o.attributes[v];switch(v){case"class":g.attrs.className=_,delete o.attributes.class;break;case"style":g.attrs.style=z2(_);break;default:v.indexOf("aria-")===0||v.indexOf("data-")===0?g.attrs[v.toLowerCase()]=_:g.attrs[rb(v)]=_}return g},{attrs:{}}),h=c.style,m=h===void 0?{}:h,x=g2(c,E2);return f.attrs.style=La(La({},f.attrs.style),m),r.apply(void 0,[o.tag,La(La({},f.attrs),x)].concat(Xc(u)))}var ob=!1;try{ob=!0}catch{}function k2(){if(!ob&&console&&typeof console.error=="function"){var r;(r=console).error.apply(r,arguments)}}function Q0(r){if(r&&qi(r)==="object"&&r.prefix&&r.iconName&&r.icon)return r;if(Bc.icon)return Bc.icon(r);if(r===null)return null;if(r&&qi(r)==="object"&&r.prefix&&r.iconName)return r;if(Array.isArray(r)&&r.length===2)return{prefix:r[0],iconName:r[1]};if(typeof r=="string")return{prefix:"fas",iconName:r}}function Tc(r,o){return Array.isArray(o)&&o.length>0||!Array.isArray(o)&&o?He({},r,o):{}}var Z0={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,rotateBy:!1,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1,widthAuto:!1},rr=Zt.forwardRef(function(r,o){var c=La(La({},Z0),r),u=c.icon,f=c.mask,h=c.symbol,m=c.className,x=c.title,g=c.titleId,v=c.maskId,_=Q0(u),N=Tc("classes",[].concat(Xc(O2(c)),Xc((m||"").split(" ")))),R=Tc("transform",typeof c.transform=="string"?Bc.transform(c.transform):c.transform),B=Tc("mask",Q0(f)),H=l2(_,La(La(La(La({},N),R),B),{},{symbol:h,title:x,titleId:g,maskId:v}));if(!H)return k2("Could not find icon",_),null;var D=H.abstract,L={ref:o};return Object.keys(c).forEach(function(I){Z0.hasOwnProperty(I)||(L[I]=c[I])}),M2(D[0],L)});rr.displayName="FontAwesomeIcon";rr.propTypes={beat:rt.bool,border:rt.bool,beatFade:rt.bool,bounce:rt.bool,className:rt.string,fade:rt.bool,flash:rt.bool,mask:rt.oneOfType([rt.object,rt.array,rt.string]),maskId:rt.string,fixedWidth:rt.bool,inverse:rt.bool,flip:rt.oneOf([!0,!1,"horizontal","vertical","both"]),icon:rt.oneOfType([rt.object,rt.array,rt.string]),listItem:rt.bool,pull:rt.oneOf(["right","left"]),pulse:rt.bool,rotation:rt.oneOf([0,90,180,270]),rotateBy:rt.bool,shake:rt.bool,size:rt.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:rt.bool,spinPulse:rt.bool,spinReverse:rt.bool,symbol:rt.oneOfType([rt.bool,rt.string]),title:rt.string,titleId:rt.string,transform:rt.oneOfType([rt.string,rt.object]),swapOpacity:rt.bool,widthAuto:rt.bool};var M2=ib.bind(null,Zt.createElement);/*!
 * Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2025 Fonticons, Inc.
 */var D2={prefix:"fas",iconName:"code",icon:[576,512,[],"f121","M360.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm64.6 136.1c-12.5 12.5-12.5 32.8 0 45.3l73.4 73.4-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l96-96c12.5-12.5 12.5-32.8 0-45.3l-96-96c-12.5-12.5-32.8-12.5-45.3 0zm-274.7 0c-12.5-12.5-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3l96 96c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 150.6 182.6c12.5-12.5 12.5-32.8 0-45.3z"]},w2={prefix:"fas",iconName:"box-archive",icon:[512,512,["archive"],"f187","M0 64C0 46.3 14.3 32 32 32l448 0c17.7 0 32 14.3 32 32l0 32c0 17.7-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96L0 64zM32 176l448 0 0 240c0 35.3-28.7 64-64 64L96 480c-35.3 0-64-28.7-64-64l0-240zm152 64c-13.3 0-24 10.7-24 24s10.7 24 24 24l144 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-144 0z"]};/*!
 * Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2025 Fonticons, Inc.
 */var N2={prefix:"far",iconName:"star",icon:[576,512,[11088,61446],"f005","M288.1-32c9 0 17.3 5.1 21.4 13.1L383 125.3 542.9 150.7c8.9 1.4 16.3 7.7 19.1 16.3s.5 18-5.8 24.4L441.7 305.9 467 465.8c1.4 8.9-2.3 17.9-9.6 23.2s-17 6.1-25 2L288.1 417.6 143.8 491c-8 4.1-17.7 3.3-25-2s-11-14.2-9.6-23.2L134.4 305.9 20 191.4c-6.4-6.4-8.6-15.8-5.8-24.4s10.1-14.9 19.1-16.3l159.9-25.4 73.6-144.2c4.1-8 12.4-13.1 21.4-13.1zm0 76.8L230.3 158c-3.5 6.8-10 11.6-17.6 12.8l-125.5 20 89.8 89.9c5.4 5.4 7.9 13.1 6.7 20.7l-19.8 125.5 113.3-57.6c6.8-3.5 14.9-3.5 21.8 0l113.3 57.6-19.8-125.5c-1.2-7.6 1.3-15.3 6.7-20.7l89.8-89.9-125.5-20c-7.6-1.2-14.1-6-17.6-12.8L288.1 44.8z"]};function C2(r){return C.jsxs("a",{href:r.link,className:"project-tile",children:[C.jsxs("div",{children:[C.jsxs("div",{className:"title",children:[C.jsx(rr,{style:{color:"white",fontSize:"26px"},icon:w2}),C.jsx("h4",{children:r.name})]}),C.jsx("p",{children:r.discription})]}),C.jsxs("div",{className:"data",children:[C.jsxs("div",{children:[C.jsx(rr,{icon:N2,style:{color:"#ffc107",fontSize:"24px"}})," "+r.stars]}),C.jsxs("div",{children:[" ",C.jsx(rr,{icon:D2,style:{color:"white",fontSize:"24px"}})," "+r.lang]})]})]})}function j2({repos:r}){const o=Object.entries(r);return C.jsx("div",{id:"secound-page",children:C.jsxs("div",{className:"content",children:[C.jsx("h1",{children:"Projects"}),C.jsx("div",{className:"projects",children:o.map(([c,u],f)=>C.jsx("div",{className:"line",children:C.jsx(C2,{name:c,discription:u.description||"No description provided",stars:u.stars,lang:u.language||"Unknown",link:u.url})},f))}),C.jsx("div",{className:"parent-and-more",children:C.jsx("a",{href:"https://github.com/yacine-bek?tab=repositories",target:"_blank",rel:"noopener noreferrer",children:C.jsx("div",{className:"and-more",children:"And More!"})})})]})})}/**
 * @license lucide-react v0.526.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R2=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),U2=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(o,c,u)=>u?u.toUpperCase():c.toLowerCase()),V0=r=>{const o=U2(r);return o.charAt(0).toUpperCase()+o.slice(1)},ub=(...r)=>r.filter((o,c,u)=>!!o&&o.trim()!==""&&u.indexOf(o)===c).join(" ").trim(),H2=r=>{for(const o in r)if(o.startsWith("aria-")||o==="role"||o==="title")return!0};/**
 * @license lucide-react v0.526.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var q2={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.526.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y2=oe.forwardRef(({color:r="currentColor",size:o=24,strokeWidth:c=2,absoluteStrokeWidth:u,className:f="",children:h,iconNode:m,...x},g)=>oe.createElement("svg",{ref:g,...q2,width:o,height:o,stroke:r,strokeWidth:u?Number(c)*24/Number(o):c,className:ub("lucide",f),...!h&&!H2(x)&&{"aria-hidden":"true"},...x},[...m.map(([v,_])=>oe.createElement(v,_)),...Array.isArray(h)?h:[h]]));/**
 * @license lucide-react v0.526.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B2=(r,o)=>{const c=oe.forwardRef(({className:u,...f},h)=>oe.createElement(Y2,{ref:h,iconNode:o,className:ub(`lucide-${R2(V0(r))}`,`lucide-${r}`,u),...f}));return c.displayName=V0(r),c};/**
 * @license lucide-react v0.526.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L2=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],X2=B2("eye",L2);function G2({user:r}){return C.jsxs("div",{className:"git-hub-card",children:[C.jsx("img",{title:r.bio,src:r.avatar,width:110,height:110,alt:r.name,className:"rounded-md"}),C.jsx("div",{className:"profile-data",children:C.jsxs("p",{children:[r.followers," Followers ",C.jsx("br",{})," ",r.repoCount," Repositories"]})})]})}function Q2(){return C.jsx("div",{children:C.jsxs("div",{className:"programming-lang",children:[C.jsx("h4",{children:"💻 Languages I Speak"}),C.jsx("p",{children:"C# - Java - Python - Dart - JavaScript - HTML - CSS - SQL - Kotlin - C"}),C.jsx("h4",{children:"🛠️ Frameworks & Libraries"}),C.jsx("p",{children:"Flutter - React - Django - .Net - JavaFX - PyQt"}),C.jsx("h4",{children:"🧠 What I've Built"}),C.jsxs("ul",{children:[C.jsx("li",{children:"WebSites (React - Django)"}),C.jsx("li",{children:"Cross-platform Apps (Flutter)"}),C.jsx("li",{children:"DeskTop (.Net - JavaFX - PyQT)"}),C.jsx("li",{children:"Bots (Discord - Telegram)"}),C.jsx("li",{children:"automation (n8n)"}),C.jsx("li",{children:"Game Plugins: Kotlin + Spigot for Minecraft"})]}),C.jsx("h4",{children:"🖥️ Infrastructure & Hosting"}),C.jsx("p",{children:"I manage my own Linux server (self-hosted projects, bots, and web services)"})]})})}function Z2(r){return C.jsxs("div",{className:"third-page",children:[C.jsx("div",{className:"triangle-section-2"}),C.jsxs("div",{className:"about-me",children:[C.jsxs("div",{className:"preview",children:[C.jsx(X2,{size:30,color:"white"}),C.jsx("h5",{children:"Preview"})]}),C.jsxs("div",{className:"row",children:[C.jsxs("div",{className:"my-data",children:[C.jsx("h4",{children:"Who is this guy?"}),C.jsx("p",{children:"I'm Yacine Bekheddouma, 20 years old, live in Algiers."}),C.jsx("p",{children:"Currently in my third year of Computer Science at USTHB."}),C.jsx("p",{children:"I have a strong interest in programming, problem-solving, and learning new technologies quickly."}),C.jsx("p",{children:"My focus is on building a solid foundation in software development and continuously improving my skill set."}),C.jsx("p",{children:"I'm open to learning, collaborating, and contributing to meaningful, challenging projects."}),C.jsx("div",{children:C.jsx("a",{href:"https://github.com/yacine-bek",target:"_blank",children:C.jsx("div",{className:"git-profile",children:r.user?C.jsx(G2,{user:r.user}):C.jsx("p",{className:"text-white",children:"Loading..."})})})})]}),C.jsx("div",{className:"skills",children:C.jsx(Q2,{})})]})]})]})}function V2(){const r=["https://img.shields.io/badge/c-%2300599C.svg?style=for-the-badge&logo=c&logoColor=white","https://img.shields.io/badge/c%23-%23239120.svg?style=for-the-badge&logo=csharp&logoColor=white","https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white","https://img.shields.io/badge/dart-%230175C2.svg?style=for-the-badge&logo=dart&logoColor=white","https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white","https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white","https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E","https://img.shields.io/badge/kotlin-%237F52FF.svg?style=for-the-badge&logo=kotlin&logoColor=white","https://img.shields.io/badge/php-%23777BB4.svg?style=for-the-badge&logo=php&logoColor=white","https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54"],o=["https://img.shields.io/badge/.NET-5C2D91?style=for-the-badge&logo=.net&logoColor=white","https://img.shields.io/badge/django-%23092E20.svg?style=for-the-badge&logo=django&logoColor=white","https://img.shields.io/badge/flask-%23000.svg?style=for-the-badge&logo=flask&logoColor=white","https://img.shields.io/badge/Flutter-%2302569B.svg?style=for-the-badge&logo=Flutter&logoColor=white","https://img.shields.io/badge/javafx-%23FF0000.svg?style=for-the-badge&logo=javafx&logoColor=white","https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white","https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white","https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB","https://img.shields.io/badge/Socket.io-black?style=for-the-badge&logo=socket.io&badgeColor=010101","https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white"],c=["https://img.shields.io/badge/Microsoft-0078D4?style=for-the-badge&logo=microsoft&logoColor=white","https://img.shields.io/badge/Android-3DDC84?style=for-the-badge&logo=android&logoColor=white","https://img.shields.io/badge/Debian-D70A53?style=for-the-badge&logo=debian&logoColor=white","https://img.shields.io/badge/Fedora-294172?style=for-the-badge&logo=fedora&logoColor=white","https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black","https://img.shields.io/badge/Windows-0078D6?style=for-the-badge&logo=windows&logoColor=white","https://img.shields.io/badge/Notion-%23000000.svg?style=for-the-badge&logo=notion&logoColor=white","https://img.shields.io/badge/Discord-%235865F2.svg?style=for-the-badge&logo=discord&logoColor=white","https://img.shields.io/badge/Telegram-2CA5E0?style=for-the-badge&logo=telegram&logoColor=white","https://img.shields.io/badge/X-%23000000.svg?style=for-the-badge&logo=X&logoColor=white","https://img.shields.io/badge/Apple-%23000000.svg?style=for-the-badge&logo=apple&logoColor=white","https://img.shields.io/badge/Brave-FB542B?style=for-the-badge&logo=Brave&logoColor=white","https://img.shields.io/badge/chatGPT-74aa9c?style=for-the-badge&logo=openai&logoColor=white","https://img.shields.io/badge/Google%20Chrome-4285F4?style=for-the-badge&logo=GoogleChrome&logoColor=white","https://img.shields.io/badge/Canva-%2300C4CC.svg?style=for-the-badge&logo=Canva&logoColor=white","https://img.shields.io/badge/blender-%23F5792A.svg?style=for-the-badge&logo=blender&logoColor=white","https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white","https://img.shields.io/badge/AMD-%23000000.svg?style=for-the-badge&logo=amd&logoColor=white","https://img.shields.io/badge/epicgames-%23313131.svg?style=for-the-badge&logo=epicgames&logoColor=white","https://img.shields.io/badge/intel-%230068B5%20.svg?style=for-the-badge&logo=intel&logoColor=white","https://img.shields.io/badge/nVIDIA-%2376B900.svg?style=for-the-badge&logo=nVIDIA&logoColor=white","https://img.shields.io/badge/steam-%23000000.svg?style=for-the-badge&logo=steam&logoColor=white"],u=["https://img.shields.io/badge/android%20studio-346ac1?style=for-the-badge&logo=android%20studio&logoColor=white","https://img.shields.io/badge/Eclipse-FE7A16.svg?style=for-the-badge&logo=Eclipse&logoColor=white","https://img.shields.io/badge/IntelliJIDEA-000000.svg?style=for-the-badge&logo=intellij-idea&logoColor=white","https://img.shields.io/badge/VIM-%2311AB00.svg?style=for-the-badge&logo=vim&logoColor=white","https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white","https://img.shields.io/badge/Visual%20Studio-5C2D91.svg?style=for-the-badge&logo=visual-studio&logoColor=white","https://img.shields.io/badge/firebase-a08021?style=for-the-badge&logo=firebase&logoColor=ffcd34","https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white","https://img.shields.io/badge/mysql-4479A1.svg?style=for-the-badge&logo=mysql&logoColor=white","https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white","https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white","https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white","https://img.shields.io/badge/Reddit-%23FF4500.svg?style=for-the-badge&logo=Reddit&logoColor=white","https://img.shields.io/badge/-Stackoverflow-FE7A16?style=for-the-badge&logo=stack-overflow&logoColor=white","https://img.shields.io/badge/LeetCode-000000?style=for-the-badge&logo=LeetCode&logoColor=#d16c06","https://img.shields.io/badge/Udemy-A435F0?style=for-the-badge&logo=Udemy&logoColor=white"],f=[...r,...o,...u,...c];return C.jsxs("div",{children:[C.jsx("h3",{children:"Me In Badge"}),C.jsx("div",{className:"badges",children:f.map((h,m)=>C.jsx("img",{src:h,alt:"badge"},m))})]})}function P2(){return C.jsxs("div",{className:"forth-page",children:[C.jsx("img",{src:"https://nirzak-streak-stats.vercel.app/?user=yacine-bek&theme=dark&hide_border=false",alt:"",style:{width:"100%",maxWidth:600}}),C.jsx("img",{src:"https://github-readme-stats.vercel.app/api/top-langs/?username=yacine-bek&layout=compact&theme=dark",alt:"Top Languages",style:{width:"100%",maxWidth:400}}),C.jsx(V2,{})]})}function K2(){return C.jsxs("div",{className:"fifth-page",children:[C.jsxs("div",{className:"git-section",children:[C.jsx("p",{children:"Like my work?"}),C.jsxs("a",{href:"https://github.com/yacine-bek",target:"_blank",children:[C.jsx("p",{children:"Follow me on"}),C.jsx(nm,{size:36,color:"hsl(0, 0%, 80%)"})]})]}),C.jsx("div",{className:"devider"}),C.jsxs("a",{className:"discord-section",href:"https://discord.gg/6C8e3HBVJt",target:"_blank",children:[C.jsx(em,{size:36}),"Join us on Discord"]}),C.jsx("p",{className:"powered",children:"Made & Powered by ME"})]})}async function $2(r){const c=await(await fetch(`https://api.github.com/users/${r}`)).json(),f=await(await fetch(`https://api.github.com/users/${r}/repos`)).json(),h=["Calculator","achievement-folia","Agence-Immobiliere","JavaFx-Game","Nike-App","WampServer"],m=f.filter(x=>h.includes(x.name)).reduce((x,g)=>(x[g.name]={description:g.description,url:g.html_url,language:g.language,stars:g.stargazers_count},x),{});return{name:c.name,bio:c.bio,avatar:c.avatar_url,followers:c.followers,repoCount:c.public_repos,repos:m}}function Bt(r,o){o===void 0&&(o={});var c=o.insertAt;if(r&&typeof document<"u"){var u=document.head||document.getElementsByTagName("head")[0],f=document.createElement("style");f.type="text/css",c==="top"&&u.firstChild?u.insertBefore(f,u.firstChild):u.appendChild(f),f.styleSheet?f.styleSheet.cssText=r:f.appendChild(document.createTextNode(r))}}Bt(`.react-loading-indicator-normalize,
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
}`);var Xa=function(){return Xa=Object.assign||function(r){for(var o,c=1,u=arguments.length;c<u;c++)for(var f in o=arguments[c])Object.prototype.hasOwnProperty.call(o,f)&&(r[f]=o[f]);return r},Xa.apply(this,arguments)};function Yi(r){return Yi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(o){return typeof o}:function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},Yi(r)}var J2=/^\s+/,F2=/\s+$/;function Z(r,o){if(o=o||{},(r=r||"")instanceof Z)return r;if(!(this instanceof Z))return new Z(r,o);var c=function(u){var f={r:0,g:0,b:0},h=1,m=null,x=null,g=null,v=!1,_=!1;typeof u=="string"&&(u=function(H){H=H.replace(J2,"").replace(F2,"").toLowerCase();var D,L=!1;if(Qc[H])H=Qc[H],L=!0;else if(H=="transparent")return{r:0,g:0,b:0,a:0,format:"name"};return(D=wa.rgb.exec(H))?{r:D[1],g:D[2],b:D[3]}:(D=wa.rgba.exec(H))?{r:D[1],g:D[2],b:D[3],a:D[4]}:(D=wa.hsl.exec(H))?{h:D[1],s:D[2],l:D[3]}:(D=wa.hsla.exec(H))?{h:D[1],s:D[2],l:D[3],a:D[4]}:(D=wa.hsv.exec(H))?{h:D[1],s:D[2],v:D[3]}:(D=wa.hsva.exec(H))?{h:D[1],s:D[2],v:D[3],a:D[4]}:(D=wa.hex8.exec(H))?{r:va(D[1]),g:va(D[2]),b:va(D[3]),a:W0(D[4]),format:L?"name":"hex8"}:(D=wa.hex6.exec(H))?{r:va(D[1]),g:va(D[2]),b:va(D[3]),format:L?"name":"hex"}:(D=wa.hex4.exec(H))?{r:va(D[1]+""+D[1]),g:va(D[2]+""+D[2]),b:va(D[3]+""+D[3]),a:W0(D[4]+""+D[4]),format:L?"name":"hex8"}:(D=wa.hex3.exec(H))?{r:va(D[1]+""+D[1]),g:va(D[2]+""+D[2]),b:va(D[3]+""+D[3]),format:L?"name":"hex"}:!1}(u)),Yi(u)=="object"&&(ie(u.r)&&ie(u.g)&&ie(u.b)?(N=u.r,R=u.g,B=u.b,f={r:255*Dt(N,255),g:255*Dt(R,255),b:255*Dt(B,255)},v=!0,_=String(u.r).substr(-1)==="%"?"prgb":"rgb"):ie(u.h)&&ie(u.s)&&ie(u.v)?(m=er(u.s),x=er(u.v),f=function(H,D,L){H=6*Dt(H,360),D=Dt(D,100),L=Dt(L,100);var I=Math.floor(H),nt=H-I,tt=L*(1-D),gt=L*(1-nt*D),P=L*(1-(1-nt)*D),vt=I%6,Tt=[L,gt,tt,tt,P,L][vt],pt=[P,L,L,gt,tt,tt][vt],zt=[tt,tt,P,L,L,gt][vt];return{r:255*Tt,g:255*pt,b:255*zt}}(u.h,m,x),v=!0,_="hsv"):ie(u.h)&&ie(u.s)&&ie(u.l)&&(m=er(u.s),g=er(u.l),f=function(H,D,L){var I,nt,tt;function gt(Tt,pt,zt){return zt<0&&(zt+=1),zt>1&&(zt-=1),zt<1/6?Tt+6*(pt-Tt)*zt:zt<.5?pt:zt<2/3?Tt+(pt-Tt)*(2/3-zt)*6:Tt}if(H=Dt(H,360),D=Dt(D,100),L=Dt(L,100),D===0)I=nt=tt=L;else{var P=L<.5?L*(1+D):L+D-L*D,vt=2*L-P;I=gt(vt,P,H+1/3),nt=gt(vt,P,H),tt=gt(vt,P,H-1/3)}return{r:255*I,g:255*nt,b:255*tt}}(u.h,m,g),v=!0,_="hsl"),u.hasOwnProperty("a")&&(h=u.a));var N,R,B;return h=cb(h),{ok:v,format:u.format||_,r:Math.min(255,Math.max(f.r,0)),g:Math.min(255,Math.max(f.g,0)),b:Math.min(255,Math.max(f.b,0)),a:h}}(r);this._originalInput=r,this._r=c.r,this._g=c.g,this._b=c.b,this._a=c.a,this._roundA=Math.round(100*this._a)/100,this._format=o.format||c.format,this._gradientType=o.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=c.ok}function P0(r,o,c){r=Dt(r,255),o=Dt(o,255),c=Dt(c,255);var u,f,h=Math.max(r,o,c),m=Math.min(r,o,c),x=(h+m)/2;if(h==m)u=f=0;else{var g=h-m;switch(f=x>.5?g/(2-h-m):g/(h+m),h){case r:u=(o-c)/g+(o<c?6:0);break;case o:u=(c-r)/g+2;break;case c:u=(r-o)/g+4}u/=6}return{h:u,s:f,l:x}}function K0(r,o,c){r=Dt(r,255),o=Dt(o,255),c=Dt(c,255);var u,f,h=Math.max(r,o,c),m=Math.min(r,o,c),x=h,g=h-m;if(f=h===0?0:g/h,h==m)u=0;else{switch(h){case r:u=(o-c)/g+(o<c?6:0);break;case o:u=(c-r)/g+2;break;case c:u=(r-o)/g+4}u/=6}return{h:u,s:f,v:x}}function $0(r,o,c,u){var f=[Ca(Math.round(r).toString(16)),Ca(Math.round(o).toString(16)),Ca(Math.round(c).toString(16))];return u&&f[0].charAt(0)==f[0].charAt(1)&&f[1].charAt(0)==f[1].charAt(1)&&f[2].charAt(0)==f[2].charAt(1)?f[0].charAt(0)+f[1].charAt(0)+f[2].charAt(0):f.join("")}function J0(r,o,c,u){return[Ca(sb(u)),Ca(Math.round(r).toString(16)),Ca(Math.round(o).toString(16)),Ca(Math.round(c).toString(16))].join("")}function W2(r,o){o=o===0?0:o||10;var c=Z(r).toHsl();return c.s-=o/100,c.s=Zi(c.s),Z(c)}function I2(r,o){o=o===0?0:o||10;var c=Z(r).toHsl();return c.s+=o/100,c.s=Zi(c.s),Z(c)}function t5(r){return Z(r).desaturate(100)}function a5(r,o){o=o===0?0:o||10;var c=Z(r).toHsl();return c.l+=o/100,c.l=Zi(c.l),Z(c)}function e5(r,o){o=o===0?0:o||10;var c=Z(r).toRgb();return c.r=Math.max(0,Math.min(255,c.r-Math.round(-o/100*255))),c.g=Math.max(0,Math.min(255,c.g-Math.round(-o/100*255))),c.b=Math.max(0,Math.min(255,c.b-Math.round(-o/100*255))),Z(c)}function n5(r,o){o=o===0?0:o||10;var c=Z(r).toHsl();return c.l-=o/100,c.l=Zi(c.l),Z(c)}function l5(r,o){var c=Z(r).toHsl(),u=(c.h+o)%360;return c.h=u<0?360+u:u,Z(c)}function r5(r){var o=Z(r).toHsl();return o.h=(o.h+180)%360,Z(o)}function F0(r,o){if(isNaN(o)||o<=0)throw new Error("Argument to polyad must be a positive number");for(var c=Z(r).toHsl(),u=[Z(r)],f=360/o,h=1;h<o;h++)u.push(Z({h:(c.h+h*f)%360,s:c.s,l:c.l}));return u}function i5(r){var o=Z(r).toHsl(),c=o.h;return[Z(r),Z({h:(c+72)%360,s:o.s,l:o.l}),Z({h:(c+216)%360,s:o.s,l:o.l})]}function o5(r,o,c){o=o||6,c=c||30;var u=Z(r).toHsl(),f=360/c,h=[Z(r)];for(u.h=(u.h-(f*o>>1)+720)%360;--o;)u.h=(u.h+f)%360,h.push(Z(u));return h}function u5(r,o){o=o||6;for(var c=Z(r).toHsv(),u=c.h,f=c.s,h=c.v,m=[],x=1/o;o--;)m.push(Z({h:u,s:f,v:h})),h=(h+x)%1;return m}Z.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var r=this.toRgb();return(299*r.r+587*r.g+114*r.b)/1e3},getLuminance:function(){var r,o,c,u=this.toRgb();return r=u.r/255,o=u.g/255,c=u.b/255,.2126*(r<=.03928?r/12.92:Math.pow((r+.055)/1.055,2.4))+.7152*(o<=.03928?o/12.92:Math.pow((o+.055)/1.055,2.4))+.0722*(c<=.03928?c/12.92:Math.pow((c+.055)/1.055,2.4))},setAlpha:function(r){return this._a=cb(r),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var r=K0(this._r,this._g,this._b);return{h:360*r.h,s:r.s,v:r.v,a:this._a}},toHsvString:function(){var r=K0(this._r,this._g,this._b),o=Math.round(360*r.h),c=Math.round(100*r.s),u=Math.round(100*r.v);return this._a==1?"hsv("+o+", "+c+"%, "+u+"%)":"hsva("+o+", "+c+"%, "+u+"%, "+this._roundA+")"},toHsl:function(){var r=P0(this._r,this._g,this._b);return{h:360*r.h,s:r.s,l:r.l,a:this._a}},toHslString:function(){var r=P0(this._r,this._g,this._b),o=Math.round(360*r.h),c=Math.round(100*r.s),u=Math.round(100*r.l);return this._a==1?"hsl("+o+", "+c+"%, "+u+"%)":"hsla("+o+", "+c+"%, "+u+"%, "+this._roundA+")"},toHex:function(r){return $0(this._r,this._g,this._b,r)},toHexString:function(r){return"#"+this.toHex(r)},toHex8:function(r){return function(o,c,u,f,h){var m=[Ca(Math.round(o).toString(16)),Ca(Math.round(c).toString(16)),Ca(Math.round(u).toString(16)),Ca(sb(f))];return h&&m[0].charAt(0)==m[0].charAt(1)&&m[1].charAt(0)==m[1].charAt(1)&&m[2].charAt(0)==m[2].charAt(1)&&m[3].charAt(0)==m[3].charAt(1)?m[0].charAt(0)+m[1].charAt(0)+m[2].charAt(0)+m[3].charAt(0):m.join("")}(this._r,this._g,this._b,this._a,r)},toHex8String:function(r){return"#"+this.toHex8(r)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return this._a==1?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(100*Dt(this._r,255))+"%",g:Math.round(100*Dt(this._g,255))+"%",b:Math.round(100*Dt(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return this._a==1?"rgb("+Math.round(100*Dt(this._r,255))+"%, "+Math.round(100*Dt(this._g,255))+"%, "+Math.round(100*Dt(this._b,255))+"%)":"rgba("+Math.round(100*Dt(this._r,255))+"%, "+Math.round(100*Dt(this._g,255))+"%, "+Math.round(100*Dt(this._b,255))+"%, "+this._roundA+")"},toName:function(){return this._a===0?"transparent":!(this._a<1)&&(c5[$0(this._r,this._g,this._b,!0)]||!1)},toFilter:function(r){var o="#"+J0(this._r,this._g,this._b,this._a),c=o,u=this._gradientType?"GradientType = 1, ":"";if(r){var f=Z(r);c="#"+J0(f._r,f._g,f._b,f._a)}return"progid:DXImageTransform.Microsoft.gradient("+u+"startColorstr="+o+",endColorstr="+c+")"},toString:function(r){var o=!!r;r=r||this._format;var c=!1,u=this._a<1&&this._a>=0;return o||!u||r!=="hex"&&r!=="hex6"&&r!=="hex3"&&r!=="hex4"&&r!=="hex8"&&r!=="name"?(r==="rgb"&&(c=this.toRgbString()),r==="prgb"&&(c=this.toPercentageRgbString()),r!=="hex"&&r!=="hex6"||(c=this.toHexString()),r==="hex3"&&(c=this.toHexString(!0)),r==="hex4"&&(c=this.toHex8String(!0)),r==="hex8"&&(c=this.toHex8String()),r==="name"&&(c=this.toName()),r==="hsl"&&(c=this.toHslString()),r==="hsv"&&(c=this.toHsvString()),c||this.toHexString()):r==="name"&&this._a===0?this.toName():this.toRgbString()},clone:function(){return Z(this.toString())},_applyModification:function(r,o){var c=r.apply(null,[this].concat([].slice.call(o)));return this._r=c._r,this._g=c._g,this._b=c._b,this.setAlpha(c._a),this},lighten:function(){return this._applyModification(a5,arguments)},brighten:function(){return this._applyModification(e5,arguments)},darken:function(){return this._applyModification(n5,arguments)},desaturate:function(){return this._applyModification(W2,arguments)},saturate:function(){return this._applyModification(I2,arguments)},greyscale:function(){return this._applyModification(t5,arguments)},spin:function(){return this._applyModification(l5,arguments)},_applyCombination:function(r,o){return r.apply(null,[this].concat([].slice.call(o)))},analogous:function(){return this._applyCombination(o5,arguments)},complement:function(){return this._applyCombination(r5,arguments)},monochromatic:function(){return this._applyCombination(u5,arguments)},splitcomplement:function(){return this._applyCombination(i5,arguments)},triad:function(){return this._applyCombination(F0,[3])},tetrad:function(){return this._applyCombination(F0,[4])}},Z.fromRatio=function(r,o){if(Yi(r)=="object"){var c={};for(var u in r)r.hasOwnProperty(u)&&(c[u]=u==="a"?r[u]:er(r[u]));r=c}return Z(r,o)},Z.equals=function(r,o){return!(!r||!o)&&Z(r).toRgbString()==Z(o).toRgbString()},Z.random=function(){return Z.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})},Z.mix=function(r,o,c){c=c===0?0:c||50;var u=Z(r).toRgb(),f=Z(o).toRgb(),h=c/100;return Z({r:(f.r-u.r)*h+u.r,g:(f.g-u.g)*h+u.g,b:(f.b-u.b)*h+u.b,a:(f.a-u.a)*h+u.a})},Z.readability=function(r,o){var c=Z(r),u=Z(o);return(Math.max(c.getLuminance(),u.getLuminance())+.05)/(Math.min(c.getLuminance(),u.getLuminance())+.05)},Z.isReadable=function(r,o,c){var u,f,h=Z.readability(r,o);switch(f=!1,(u=function(m){var x,g;return x=((m=m||{level:"AA",size:"small"}).level||"AA").toUpperCase(),g=(m.size||"small").toLowerCase(),x!=="AA"&&x!=="AAA"&&(x="AA"),g!=="small"&&g!=="large"&&(g="small"),{level:x,size:g}}(c)).level+u.size){case"AAsmall":case"AAAlarge":f=h>=4.5;break;case"AAlarge":f=h>=3;break;case"AAAsmall":f=h>=7}return f},Z.mostReadable=function(r,o,c){var u,f,h,m,x=null,g=0;f=(c=c||{}).includeFallbackColors,h=c.level,m=c.size;for(var v=0;v<o.length;v++)(u=Z.readability(r,o[v]))>g&&(g=u,x=Z(o[v]));return Z.isReadable(r,x,{level:h,size:m})||!f?x:(c.includeFallbackColors=!1,Z.mostReadable(r,["#fff","#000"],c))};var Qc=Z.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},c5=Z.hexNames=function(r){var o={};for(var c in r)r.hasOwnProperty(c)&&(o[r[c]]=c);return o}(Qc);function cb(r){return r=parseFloat(r),(isNaN(r)||r<0||r>1)&&(r=1),r}function Dt(r,o){(function(u){return typeof u=="string"&&u.indexOf(".")!=-1&&parseFloat(u)===1})(r)&&(r="100%");var c=function(u){return typeof u=="string"&&u.indexOf("%")!=-1}(r);return r=Math.min(o,Math.max(0,parseFloat(r))),c&&(r=parseInt(r*o,10)/100),Math.abs(r-o)<1e-6?1:r%o/parseFloat(o)}function Zi(r){return Math.min(1,Math.max(0,r))}function va(r){return parseInt(r,16)}function Ca(r){return r.length==1?"0"+r:""+r}function er(r){return r<=1&&(r=100*r+"%"),r}function sb(r){return Math.round(255*parseFloat(r)).toString(16)}function W0(r){return va(r)/255}var Ue,zi,ki,wa=(zi="[\\s|\\(]+("+(Ue="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)")+")[,|\\s]+("+Ue+")[,|\\s]+("+Ue+")\\s*\\)?",ki="[\\s|\\(]+("+Ue+")[,|\\s]+("+Ue+")[,|\\s]+("+Ue+")[,|\\s]+("+Ue+")\\s*\\)?",{CSS_UNIT:new RegExp(Ue),rgb:new RegExp("rgb"+zi),rgba:new RegExp("rgba"+ki),hsl:new RegExp("hsl"+zi),hsla:new RegExp("hsla"+ki),hsv:new RegExp("hsv"+zi),hsva:new RegExp("hsva"+ki),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/});function ie(r){return!!wa.CSS_UNIT.exec(r)}var s5=function(r,o){var c=(typeof r=="string"?parseInt(r):r)||0;if(c>=-5&&c<=5){var u=c,f=parseFloat(o),h=f+u*(f/5)*-1;return(h==0||h<=Number.EPSILON)&&(h=.1),{animationPeriod:h+"s"}}return{animationPeriod:o}},f5=function(r,o){var c=r||{},u="";switch(o){case"small":u="12px";break;case"medium":u="16px";break;case"large":u="20px";break;default:u=void 0}var f={};if(c.fontSize){var h=c.fontSize;f=function(m,x){var g={};for(var v in m)Object.prototype.hasOwnProperty.call(m,v)&&x.indexOf(v)<0&&(g[v]=m[v]);if(m!=null&&typeof Object.getOwnPropertySymbols=="function"){var _=0;for(v=Object.getOwnPropertySymbols(m);_<v.length;_++)x.indexOf(v[_])<0&&Object.prototype.propertyIsEnumerable.call(m,v[_])&&(g[v[_]]=m[v[_]])}return g}(c,["fontSize"]),u=h}return{fontSize:u,styles:f}},d5={color:"currentColor",mixBlendMode:"difference",width:"unset",display:"block",paddingTop:"2px"},h5=function(r){var o=r.className,c=r.text,u=r.textColor,f=r.staticText,h=r.style;return c?Zt.createElement("span",{className:"rli-d-i-b rli-text-format ".concat(o||"").trim(),style:Xa(Xa(Xa({},f&&d5),u&&{color:u,mixBlendMode:"unset"}),h&&h)},typeof c=="string"&&c.length?c:"loading"):null},fb="rgb(50, 205, 50)";function m5(r,o){if(o===void 0&&(o=0),r.length===0)throw new Error("Input array cannot be empty!");var c=[];return function u(f,h){return h===void 0&&(h=0),c.push.apply(c,f),c.length<h&&u(c,h),c.slice(0,h)}(r,o)}Bt(`.atom-rli-bounding-box {
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
}`);Z(fb).toRgb();Array.from({length:4},function(r,o){return"--atom-phase".concat(o+1,"-rgb")});Bt(`.commet-rli-bounding-box {
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
}`);Array.from({length:4},function(r,o){return"--commet-phase".concat(o+1,"-color")});Bt(`.OP-annulus-rli-bounding-box {
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
}`);Array.from({length:4},function(r,o){return"--OP-annulus-phase".concat(o+1,"-color")});function Ec(r){return r&&r.Math===Math&&r}Bt(`.OP-dotted-rli-bounding-box {
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
}`);Ec(typeof window=="object"&&window)||Ec(typeof self=="object"&&self)||Ec(typeof global=="object"&&global)||function(){return this}()||Function("return this")();Array.from({length:4},function(r,o){return"--OP-dotted-phase".concat(o+1,"-color")});Bt(`.OP-spokes-rli-bounding-box {
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
}`);Array.from({length:4},function(r,o){return"--OP-spokes-phase".concat(o+1,"-color")});Bt(`.OP-annulus-dual-sectors-rli-bounding-box {
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
}`);Array.from({length:4},function(r,o){return"--OP-annulus-dual-sectors-phase".concat(o+1,"-color")});Bt(`.OP-annulus-sector-track-rli-bounding-box {
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
}`);Array.from({length:4},function(r,o){return["--OP-annulus-track-phase".concat(o+1,"-color"),"--OP-annulus-sector-phase".concat(o+1,"-color")]});Bt(`.foursquare-rli-bounding-box {
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
}`);Array.from({length:4},function(r,o){return"--four-square-phase".concat(o+1,"-color")});Bt(`.mosaic-rli-bounding-box {
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
}`);Array.from({length:4},function(r,o){return"--mosaic-phase".concat(o+1,"-color")});Bt(`.riple-rli-bounding-box {
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
}`);Array.from({length:4},function(r,o){return"--riple-phase".concat(o+1,"-color")});Bt(`.pulsate-rli-bounding-box {
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
}`);Array.from({length:4},function(r,o){return"--TD-pulsate-phase".concat(o+1,"-color")});Bt(`.brick-stack-rli-bounding-box {
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
}`);Array.from({length:4},function(r,o){return"--TD-brick-stack-phase".concat(o+1,"-color")});Bt(`.bob-rli-bounding-box {
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
}`);Array.from({length:4},function(r,o){return"--TD-bob-phase".concat(o+1,"-color")});Bt(`.bounce-rli-bounding-box {
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
}`);Array.from({length:4},function(r,o){return"--TD-bounce-phase".concat(o+1,"-color")});Bt(`.blink-blur-rli-bounding-box {
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
}`);var Mi=Array.from({length:4},function(r,o){return"--shape-phase".concat(o+1,"-color")}),b5=function(r){var o,c=f5(r?.style,r?.size),u=c.styles,f=c.fontSize,h=r?.easing,m=s5(r?.speedPlus,"1.2s").animationPeriod,x=function(g){var v={},_=Mi.length;if(Array.isArray(g)&&g.length>0){for(var N=m5(g,_),R=0;R<N.length&&!(R>_-1);R++){var B=N[R];v[Mi[R]]=B}return v}try{if(typeof g!="string")throw new Error("Color String expected");for(R=0;R<_;R++)v[Mi[R]]=g}catch(H){for(H instanceof Error?console.warn("[".concat(H.message,']: Received "').concat(typeof g,'" instead with value, ').concat(JSON.stringify(g))):console.warn("".concat(JSON.stringify(g)," received in <BlinkBlur /> indicator cannot be processed. Using default instead!")),R=0;R<_;R++)v[Mi[R]]=fb}return v}((o=r?.color)!==null&&o!==void 0?o:"");return Zt.createElement("span",{className:"rli-d-i-b blink-blur-rli-bounding-box",style:Xa(Xa(Xa(Xa(Xa({},f&&{fontSize:f}),m&&{"--rli-animation-duration":m}),h&&{"--rli-animation-function":h}),x),u),role:"status","aria-live":"polite","aria-label":"Loading"},Zt.createElement("span",{className:"rli-d-i-b blink-blur-indicator"},Zt.createElement("span",{className:"blink-blur-shape blink-blur-shape1"}),Zt.createElement("span",{className:"blink-blur-shape blink-blur-shape2"}),Zt.createElement("span",{className:"blink-blur-shape blink-blur-shape3"}),Zt.createElement("span",{className:"blink-blur-shape blink-blur-shape4"}),Zt.createElement("span",{className:"blink-blur-shape blink-blur-shape5"})),Zt.createElement(h5,{staticText:!0,text:r?.text,textColor:r?.textColor,style:{marginTop:"0.8em"}}))};Bt(`.trophy-spin-rli-bounding-box {
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
}`);Array.from({length:4},function(r,o){return"--trophySpin-phase".concat(o+1,"-color")});Bt(`.slab-rli-bounding-box {
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
}`);Array.from({length:4},function(r,o){return"--slab-phase".concat(o+1,"-color")});Bt(`.lifeline-rli-bounding-box {
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
}`);Array.from({length:4},function(r,o){return"--life-line-phase".concat(o+1,"-color")});function g5(){const[r,o]=oe.useState(null);return oe.useEffect(()=>{$2("yacine-bek").then(o)},[]),r?C.jsxs(C.Fragment,{children:[C.jsx(Wv,{}),C.jsx(j2,{repos:r.repos}),C.jsx(Z2,{user:r}),C.jsx(P2,{}),C.jsx(K2,{})]}):C.jsx("div",{className:"loading-screen",children:C.jsx(b5,{color:"#f5ecdc",size:"medium",text:"",textColor:""})})}Gv.createRoot(document.getElementById("root")).render(C.jsx(oe.StrictMode,{children:C.jsx(g5,{})}));
