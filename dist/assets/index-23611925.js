(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pc=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?t[e++]=i:i<2048?(t[e++]=i>>6|192,t[e++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=i>>18|240,t[e++]=i>>12&63|128,t[e++]=i>>6&63|128,t[e++]=i&63|128):(t[e++]=i>>12|224,t[e++]=i>>6&63|128,t[e++]=i&63|128)}return t},$h=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const i=n[e++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[e++];t[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[e++],o=n[e++],a=n[e++],c=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(c&1023))}else{const s=n[e++],o=n[e++];t[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return t.join("")},Sc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],o=i+1<n.length,a=o?n[i+1]:0,c=i+2<n.length,u=c?n[i+2]:0,l=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,p=u&63;c||(p=64,o||(d=64)),r.push(e[l],e[h],e[d],e[p])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(Pc(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):$h(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=e[n.charAt(i++)],a=i<n.length?e[n.charAt(i)]:0;++i;const u=i<n.length?e[n.charAt(i)]:64;++i;const h=i<n.length?e[n.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw new jh;const d=s<<2|a>>4;if(r.push(d),u!==64){const p=a<<4&240|u>>2;if(r.push(p),h!==64){const I=u<<6&192|h;r.push(I)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class jh extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Hh=function(n){const t=Pc(n);return Sc.encodeByteArray(t,!0)},Ar=function(n){return Hh(n).replace(/\./g,"")},Cc=function(n){try{return Sc.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zh(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wh=()=>zh().__FIREBASE_DEFAULTS__,Kh=()=>{if(typeof process>"u"||typeof process.env>"u")return;const n={}.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Gh=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&Cc(n[1]);return t&&JSON.parse(t)},Vs=()=>{try{return Wh()||Kh()||Gh()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},kc=n=>{var t,e;return(e=(t=Vs())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},Qh=n=>{const t=kc(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},bc=()=>{var n;return(n=Vs())===null||n===void 0?void 0:n.config},Dc=n=>{var t;return(t=Vs())===null||t===void 0?void 0:t[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jh{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xh(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",i=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n),a="";return[Ar(JSON.stringify(e)),Ar(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function at(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Yh(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(at())}function Zh(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function td(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ed(){const n=at();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function nd(){try{return typeof indexedDB=="object"}catch{return!1}}function rd(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{e=!1},i.onerror=()=>{var s;t(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(e){t(e)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const id="FirebaseError";class xt extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=id,Object.setPrototypeOf(this,xt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,xn.prototype.create)}}class xn{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},i=`${this.service}/${t}`,s=this.errors[t],o=s?sd(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new xt(i,a,r)}}function sd(n,t){return n.replace(od,(e,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const od=/\{\$([^}]+)}/g;function ad(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}function Rr(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const i of e){if(!r.includes(i))return!1;const s=n[i],o=t[i];if(ta(s)&&ta(o)){if(!Rr(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!e.includes(i))return!1;return!0}function ta(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fn(n){const t=[];for(const[e,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(e)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(e)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function on(n){const t={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");t[decodeURIComponent(i)]=decodeURIComponent(s)}}),t}function an(n){const t=n.indexOf("?");if(!t)return"";const e=n.indexOf("#",t);return n.substring(t,e>0?e:void 0)}function cd(n,t){const e=new ud(n,t);return e.subscribe.bind(e)}class ud{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(e=>{e.next(t)})}error(t){this.forEachObserver(e=>{e.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,e,r){let i;if(t===void 0&&e===void 0&&r===void 0)throw new Error("Missing Observer.");ld(t,["next","error","complete"])?i=t:i={next:t,error:e,complete:r},i.next===void 0&&(i.next=Di),i.error===void 0&&(i.error=Di),i.complete===void 0&&(i.complete=Di);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{e(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ld(n,t){if(typeof n!="object"||n===null)return!1;for(const e of t)if(e in n&&typeof n[e]=="function")return!0;return!1}function Di(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z(n){return n&&n._delegate?n._delegate:n}class le{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ne="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hd{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new Jh;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:e});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(fd(t))try{this.getOrInitializeService({instanceIdentifier:ne})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(e);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(t=ne){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=ne){return this.instances.has(t)}getOptions(t=ne){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(t,e){var r;const i=this.normalizeInstanceIdentifier(e),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(t),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&t(o,i),()=>{s.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const i of r)try{i(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:dd(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=ne){return this.component?this.component.multipleInstances?t:ne:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function dd(n){return n===ne?void 0:n}function fd(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pd{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new hd(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var b;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(b||(b={}));const md={debug:b.DEBUG,verbose:b.VERBOSE,info:b.INFO,warn:b.WARN,error:b.ERROR,silent:b.SILENT},gd=b.INFO,_d={[b.DEBUG]:"log",[b.VERBOSE]:"log",[b.INFO]:"info",[b.WARN]:"warn",[b.ERROR]:"error"},yd=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),i=_d[t];if(i)console[i](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Ns{constructor(t){this.name=t,this._logLevel=gd,this._logHandler=yd,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in b))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?md[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,b.DEBUG,...t),this._logHandler(this,b.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,b.VERBOSE,...t),this._logHandler(this,b.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,b.INFO,...t),this._logHandler(this,b.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,b.WARN,...t),this._logHandler(this,b.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,b.ERROR,...t),this._logHandler(this,b.ERROR,...t)}}const Ed=(n,t)=>t.some(e=>n instanceof e);let ea,na;function vd(){return ea||(ea=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Id(){return na||(na=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Vc=new WeakMap,Yi=new WeakMap,Nc=new WeakMap,Vi=new WeakMap,Os=new WeakMap;function Td(n){const t=new Promise((e,r)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",o)},s=()=>{e(jt(n.result)),i()},o=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",o)});return t.then(e=>{e instanceof IDBCursor&&Vc.set(e,n)}).catch(()=>{}),Os.set(t,n),t}function wd(n){if(Yi.has(n))return;const t=new Promise((e,r)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",o),n.removeEventListener("abort",o)},s=()=>{e(),i()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",o),n.addEventListener("abort",o)});Yi.set(n,t)}let Zi={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return Yi.get(n);if(t==="objectStoreNames")return n.objectStoreNames||Nc.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return jt(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function Ad(n){Zi=n(Zi)}function Rd(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(Ni(this),t,...e);return Nc.set(r,t.sort?t.sort():[t]),jt(r)}:Id().includes(n)?function(...t){return n.apply(Ni(this),t),jt(Vc.get(this))}:function(...t){return jt(n.apply(Ni(this),t))}}function Pd(n){return typeof n=="function"?Rd(n):(n instanceof IDBTransaction&&wd(n),Ed(n,vd())?new Proxy(n,Zi):n)}function jt(n){if(n instanceof IDBRequest)return Td(n);if(Vi.has(n))return Vi.get(n);const t=Pd(n);return t!==n&&(Vi.set(n,t),Os.set(t,n)),t}const Ni=n=>Os.get(n);function Sd(n,t,{blocked:e,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(n,t),a=jt(o);return r&&o.addEventListener("upgradeneeded",c=>{r(jt(o.result),c.oldVersion,c.newVersion,jt(o.transaction),c)}),e&&o.addEventListener("blocked",c=>e(c.oldVersion,c.newVersion,c)),a.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const Cd=["get","getKey","getAll","getAllKeys","count"],kd=["put","add","delete","clear"],Oi=new Map;function ra(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(Oi.get(t))return Oi.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,i=kd.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Cd.includes(e)))return;const s=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[e](...a),i&&c.done]))[0]};return Oi.set(t,s),s}Ad(n=>({...n,get:(t,e,r)=>ra(t,e)||n.get(t,e,r),has:(t,e)=>!!ra(t,e)||n.has(t,e)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bd{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(Dd(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function Dd(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const ts="@firebase/app",ia="0.9.15";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const he=new Ns("@firebase/app"),Vd="@firebase/app-compat",Nd="@firebase/analytics-compat",Od="@firebase/analytics",Md="@firebase/app-check-compat",Ld="@firebase/app-check",xd="@firebase/auth",Fd="@firebase/auth-compat",Ud="@firebase/database",Bd="@firebase/database-compat",qd="@firebase/functions",$d="@firebase/functions-compat",jd="@firebase/installations",Hd="@firebase/installations-compat",zd="@firebase/messaging",Wd="@firebase/messaging-compat",Kd="@firebase/performance",Gd="@firebase/performance-compat",Qd="@firebase/remote-config",Jd="@firebase/remote-config-compat",Xd="@firebase/storage",Yd="@firebase/storage-compat",Zd="@firebase/firestore",tf="@firebase/firestore-compat",ef="firebase",nf="10.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const es="[DEFAULT]",rf={[ts]:"fire-core",[Vd]:"fire-core-compat",[Od]:"fire-analytics",[Nd]:"fire-analytics-compat",[Ld]:"fire-app-check",[Md]:"fire-app-check-compat",[xd]:"fire-auth",[Fd]:"fire-auth-compat",[Ud]:"fire-rtdb",[Bd]:"fire-rtdb-compat",[qd]:"fire-fn",[$d]:"fire-fn-compat",[jd]:"fire-iid",[Hd]:"fire-iid-compat",[zd]:"fire-fcm",[Wd]:"fire-fcm-compat",[Kd]:"fire-perf",[Gd]:"fire-perf-compat",[Qd]:"fire-rc",[Jd]:"fire-rc-compat",[Xd]:"fire-gcs",[Yd]:"fire-gcs-compat",[Zd]:"fire-fst",[tf]:"fire-fst-compat","fire-js":"fire-js",[ef]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pr=new Map,ns=new Map;function sf(n,t){try{n.container.addComponent(t)}catch(e){he.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function Oe(n){const t=n.name;if(ns.has(t))return he.debug(`There were multiple attempts to register component ${t}.`),!1;ns.set(t,n);for(const e of Pr.values())sf(e,n);return!0}function Ms(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const of={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Ht=new xn("app","Firebase",of);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class af{constructor(t,e,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new le("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Ht.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const He=nf;function Oc(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r=Object.assign({name:es,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw Ht.create("bad-app-name",{appName:String(i)});if(e||(e=bc()),!e)throw Ht.create("no-options");const s=Pr.get(i);if(s){if(Rr(e,s.options)&&Rr(r,s.config))return s;throw Ht.create("duplicate-app",{appName:i})}const o=new pd(i);for(const c of ns.values())o.addComponent(c);const a=new af(e,r,o);return Pr.set(i,a),a}function Mc(n=es){const t=Pr.get(n);if(!t&&n===es&&bc())return Oc();if(!t)throw Ht.create("no-app",{appName:n});return t}function zt(n,t,e){var r;let i=(r=rf[n])!==null&&r!==void 0?r:n;e&&(i+=`-${e}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${t}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),he.warn(a.join(" "));return}Oe(new le(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cf="firebase-heartbeat-database",uf=1,yn="firebase-heartbeat-store";let Mi=null;function Lc(){return Mi||(Mi=Sd(cf,uf,{upgrade:(n,t)=>{switch(t){case 0:n.createObjectStore(yn)}}}).catch(n=>{throw Ht.create("idb-open",{originalErrorMessage:n.message})})),Mi}async function lf(n){try{return await(await Lc()).transaction(yn).objectStore(yn).get(xc(n))}catch(t){if(t instanceof xt)he.warn(t.message);else{const e=Ht.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});he.warn(e.message)}}}async function sa(n,t){try{const r=(await Lc()).transaction(yn,"readwrite");await r.objectStore(yn).put(t,xc(n)),await r.done}catch(e){if(e instanceof xt)he.warn(e.message);else{const r=Ht.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});he.warn(r.message)}}}function xc(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hf=1024,df=30*24*60*60*1e3;class ff{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new mf(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=oa();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=df}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=oa(),{heartbeatsToSend:e,unsentEntries:r}=pf(this._heartbeatsCache.heartbeats),i=Ar(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function oa(){return new Date().toISOString().substring(0,10)}function pf(n,t=hf){const e=[];let r=n.slice();for(const i of n){const s=e.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),aa(e)>t){s.dates.pop();break}}else if(e.push({agent:i.agent,dates:[i.date]}),aa(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class mf{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return nd()?rd().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await lf(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const i=await this.read();return sa(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const i=await this.read();return sa(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function aa(n){return Ar(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gf(n){Oe(new le("platform-logger",t=>new bd(t),"PRIVATE")),Oe(new le("heartbeat",t=>new ff(t),"PRIVATE")),zt(ts,ia,n),zt(ts,ia,"esm2017"),zt("fire-js","")}gf("");var _f="firebase",yf="10.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */zt(_f,yf,"app");function Ls(n,t){var e={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&t.indexOf(r)<0&&(e[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(e[r[i]]=n[r[i]]);return e}function Fc(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Ef=Fc,Uc=new xn("auth","Firebase",Fc());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sr=new Ns("@firebase/auth");function vf(n,...t){Sr.logLevel<=b.WARN&&Sr.warn(`Auth (${He}): ${n}`,...t)}function gr(n,...t){Sr.logLevel<=b.ERROR&&Sr.error(`Auth (${He}): ${n}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gt(n,...t){throw xs(n,...t)}function wt(n,...t){return xs(n,...t)}function Bc(n,t,e){const r=Object.assign(Object.assign({},Ef()),{[t]:e});return new xn("auth","Firebase",r).create(t,{appName:n.name})}function If(n,t,e){const r=e;if(!(t instanceof r))throw r.name!==t.constructor.name&&gt(n,"argument-error"),Bc(n,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function xs(n,...t){if(typeof n!="string"){const e=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(e,...r)}return Uc.create(n,...t)}function w(n,t,...e){if(!n)throw xs(t,...e)}function kt(n){const t="INTERNAL ASSERTION FAILED: "+n;throw gr(t),new Error(t)}function Vt(n,t){n||kt(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rs(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Tf(){return ca()==="http:"||ca()==="https:"}function ca(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wf(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Tf()||Zh()||"connection"in navigator)?navigator.onLine:!0}function Af(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un{constructor(t,e){this.shortDelay=t,this.longDelay=e,Vt(e>t,"Short delay should be less than long delay!"),this.isMobile=Yh()||td()}get(){return wf()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fs(n,t){Vt(n.emulator,"Emulator should always be set here");const{url:e}=n.emulator;return t?`${e}${t.startsWith("/")?t.slice(1):t}`:e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qc{static initialize(t,e,r){this.fetchImpl=t,e&&(this.headersImpl=e),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;kt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;kt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;kt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rf={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pf=new Un(3e4,6e4);function ze(n,t){return n.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:n.tenantId}):t}async function We(n,t,e,r,i={}){return $c(n,i,async()=>{let s={},o={};r&&(t==="GET"?o=r:s={body:JSON.stringify(r)});const a=Fn(Object.assign({key:n.config.apiKey},o)).slice(1),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode),qc.fetch()(jc(n,n.config.apiHost,e,a),Object.assign({method:t,headers:c,referrerPolicy:"no-referrer"},s))})}async function $c(n,t,e){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},Rf),t);try{const i=new Sf(n),s=await Promise.race([e(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw or(n,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw or(n,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw or(n,"email-already-in-use",o);if(c==="USER_DISABLED")throw or(n,"user-disabled",o);const l=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Bc(n,l,u);gt(n,l)}}catch(i){if(i instanceof xt)throw i;gt(n,"network-request-failed",{message:String(i)})}}async function Bn(n,t,e,r,i={}){const s=await We(n,t,e,r,i);return"mfaPendingCredential"in s&&gt(n,"multi-factor-auth-required",{_serverResponse:s}),s}function jc(n,t,e,r){const i=`${t}${e}?${r}`;return n.config.emulator?Fs(n.config,i):`${n.config.apiScheme}://${i}`}class Sf{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((e,r)=>{this.timer=setTimeout(()=>r(wt(this.auth,"network-request-failed")),Pf.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function or(n,t,e){const r={appName:n.name};e.email&&(r.email=e.email),e.phoneNumber&&(r.phoneNumber=e.phoneNumber);const i=wt(n,t,r);return i.customData._tokenResponse=e,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cf(n,t){return We(n,"POST","/v1/accounts:delete",t)}async function kf(n,t){return We(n,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fn(n){if(n)try{const t=new Date(Number(n));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function bf(n,t=!1){const e=z(n),r=await e.getIdToken(t),i=Us(r);w(i&&i.exp&&i.auth_time&&i.iat,e.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:fn(Li(i.auth_time)),issuedAtTime:fn(Li(i.iat)),expirationTime:fn(Li(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Li(n){return Number(n)*1e3}function Us(n){const[t,e,r]=n.split(".");if(t===void 0||e===void 0||r===void 0)return gr("JWT malformed, contained fewer than 3 sections"),null;try{const i=Cc(e);return i?JSON.parse(i):(gr("Failed to decode base64 JWT payload"),null)}catch(i){return gr("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Df(n){const t=Us(n);return w(t,"internal-error"),w(typeof t.exp<"u","internal-error"),w(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function En(n,t,e=!1){if(e)return t;try{return await t}catch(r){throw r instanceof xt&&Vf(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function Vf({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nf{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var e;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((e=this.user.stsTokenManager.expirationTime)!==null&&e!==void 0?e:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hc{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=fn(this.lastLoginAt),this.creationTime=fn(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cr(n){var t;const e=n.auth,r=await n.getIdToken(),i=await En(n,kf(e,{idToken:r}));w(i==null?void 0:i.users.length,e,"internal-error");const s=i.users[0];n._notifyReloadListener(s);const o=!((t=s.providerUserInfo)===null||t===void 0)&&t.length?Lf(s.providerUserInfo):[],a=Mf(n.providerData,o),c=n.isAnonymous,u=!(n.email&&s.passwordHash)&&!(a!=null&&a.length),l=c?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Hc(s.createdAt,s.lastLoginAt),isAnonymous:l};Object.assign(n,h)}async function Of(n){const t=z(n);await Cr(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function Mf(n,t){return[...n.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function Lf(n){return n.map(t=>{var{providerId:e}=t,r=Ls(t,["providerId"]);return{providerId:e,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xf(n,t){const e=await $c(n,{},async()=>{const r=Fn({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,o=jc(n,i,"/v1/token",`key=${s}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",qc.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:e.access_token,expiresIn:e.expires_in,refreshToken:e.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){w(t.idToken,"internal-error"),w(typeof t.idToken<"u","internal-error"),w(typeof t.refreshToken<"u","internal-error");const e="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):Df(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}async getToken(t,e=!1){return w(!this.accessToken||this.refreshToken,t,"user-token-expired"),!e&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:r,refreshToken:i,expiresIn:s}=await xf(t,e);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(t,e,r){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,e){const{refreshToken:r,accessToken:i,expirationTime:s}=e,o=new vn;return r&&(w(typeof r=="string","internal-error",{appName:t}),o.refreshToken=r),i&&(w(typeof i=="string","internal-error",{appName:t}),o.accessToken=i),s&&(w(typeof s=="number","internal-error",{appName:t}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new vn,this.toJSON())}_performRefresh(){return kt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ft(n,t){w(typeof n=="string"||typeof n>"u","internal-error",{appName:t})}class ae{constructor(t){var{uid:e,auth:r,stsTokenManager:i}=t,s=Ls(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Nf(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Hc(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(t){const e=await En(this,this.stsTokenManager.getToken(this.auth,t));return w(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return bf(this,t)}reload(){return Of(this)}_assign(t){this!==t&&(w(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(e=>Object.assign({},e)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const e=new ae(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return e.metadata._copy(this.metadata),e}_onReload(t){w(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),e&&await Cr(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await En(this,Cf(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){var r,i,s,o,a,c,u,l;const h=(r=e.displayName)!==null&&r!==void 0?r:void 0,d=(i=e.email)!==null&&i!==void 0?i:void 0,p=(s=e.phoneNumber)!==null&&s!==void 0?s:void 0,I=(o=e.photoURL)!==null&&o!==void 0?o:void 0,T=(a=e.tenantId)!==null&&a!==void 0?a:void 0,E=(c=e._redirectEventId)!==null&&c!==void 0?c:void 0,D=(u=e.createdAt)!==null&&u!==void 0?u:void 0,F=(l=e.lastLoginAt)!==null&&l!==void 0?l:void 0,{uid:B,emailVerified:Z,isAnonymous:pt,providerData:Q,stsTokenManager:en}=e;w(B&&en,t,"internal-error");const Zo=vn.fromJSON(this.name,en);w(typeof B=="string",t,"internal-error"),Ft(h,t.name),Ft(d,t.name),w(typeof Z=="boolean",t,"internal-error"),w(typeof pt=="boolean",t,"internal-error"),Ft(p,t.name),Ft(I,t.name),Ft(T,t.name),Ft(E,t.name),Ft(D,t.name),Ft(F,t.name);const nn=new ae({uid:B,auth:t,email:d,emailVerified:Z,displayName:h,isAnonymous:pt,photoURL:I,phoneNumber:p,tenantId:T,stsTokenManager:Zo,createdAt:D,lastLoginAt:F});return Q&&Array.isArray(Q)&&(nn.providerData=Q.map(sr=>Object.assign({},sr))),E&&(nn._redirectEventId=E),nn}static async _fromIdTokenResponse(t,e,r=!1){const i=new vn;i.updateFromServerResponse(e);const s=new ae({uid:e.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await Cr(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ua=new Map;function bt(n){Vt(n instanceof Function,"Expected a class definition");let t=ua.get(n);return t?(Vt(t instanceof n,"Instance stored in cache mismatched with class"),t):(t=new n,ua.set(n,t),t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zc{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return e===void 0?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}zc.type="NONE";const la=zc;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _r(n,t,e){return`firebase:${n}:${t}:${e}`}class Se{constructor(t,e,r){this.persistence=t,this.auth=e,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=_r(this.userKey,i.apiKey,s),this.fullPersistenceKey=_r("persistence",i.apiKey,s),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?ae._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,e)return this.setCurrentUser(e)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,r="authUser"){if(!e.length)return new Se(bt(la),t,r);const i=(await Promise.all(e.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||bt(la);const o=_r(r,t.config.apiKey,t.name);let a=null;for(const u of e)try{const l=await u._get(o);if(l){const h=ae._fromJSON(t,l);u!==s&&(a=h),s=u;break}}catch{}const c=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new Se(s,t,r):(s=c[0],a&&await s._set(o,a.toJSON()),await Promise.all(e.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Se(s,t,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ha(n){const t=n.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Gc(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Wc(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Jc(t))return"Blackberry";if(Xc(t))return"Webos";if(Bs(t))return"Safari";if((t.includes("chrome/")||Kc(t))&&!t.includes("edge/"))return"Chrome";if(Qc(t))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(e);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Wc(n=at()){return/firefox\//i.test(n)}function Bs(n=at()){const t=n.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Kc(n=at()){return/crios\//i.test(n)}function Gc(n=at()){return/iemobile/i.test(n)}function Qc(n=at()){return/android/i.test(n)}function Jc(n=at()){return/blackberry/i.test(n)}function Xc(n=at()){return/webos/i.test(n)}function Wr(n=at()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Ff(n=at()){var t;return Wr(n)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function Uf(){return ed()&&document.documentMode===10}function Yc(n=at()){return Wr(n)||Qc(n)||Xc(n)||Jc(n)||/windows phone/i.test(n)||Gc(n)}function Bf(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zc(n,t=[]){let e;switch(n){case"Browser":e=ha(at());break;case"Worker":e=`${ha(at())}-${n}`;break;default:e=n}const r=t.length?t.join(","):"FirebaseCore-web";return`${e}/JsCore/${He}/${r}`}async function tu(n,t){return We(n,"GET","/v2/recaptchaConfig",ze(n,t))}function da(n){return n!==void 0&&n.enterprise!==void 0}class eu{constructor(t){if(this.siteKey="",this.emailPasswordEnabled=!1,t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.emailPasswordEnabled=t.recaptchaEnforcementState.some(e=>e.provider==="EMAIL_PASSWORD_PROVIDER"&&e.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qf(){var n,t;return(t=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&t!==void 0?t:document}function nu(n){return new Promise((t,e)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=t,r.onerror=i=>{const s=wt("internal-error");s.customData=i,e(s)},r.type="text/javascript",r.charset="UTF-8",qf().appendChild(r)})}function $f(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const jf="https://www.google.com/recaptcha/enterprise.js?render=",Hf="recaptcha-enterprise",zf="NO_RECAPTCHA";class ru{constructor(t){this.type=Hf,this.auth=_e(t)}async verify(t="verify",e=!1){async function r(s){if(!e){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{tu(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new eu(c);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(c=>{a(c)})})}function i(s,o,a){const c=window.grecaptcha;da(c)?c.enterprise.ready(()=>{c.enterprise.execute(s,{action:t}).then(u=>{o(u)}).catch(()=>{o(zf)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!e&&da(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}nu(jf+a).then(()=>{i(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function kr(n,t,e,r=!1){const i=new ru(n);let s;try{s=await i.verify(e)}catch{s=await i.verify(e,!0)}const o=Object.assign({},t);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wf{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,e){const r=s=>new Promise((o,a)=>{try{const c=t(s);o(c)}catch(c){a(c)}});r.onAbort=e,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const e=[];try{for(const r of this.queue)await r(t),r.onAbort&&e.push(r.onAbort)}catch(r){e.reverse();for(const i of e)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kf{constructor(t,e,r,i){this.app=t,this.heartbeatServiceProvider=e,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new fa(this),this.idTokenSubscription=new fa(this),this.beforeStateQueue=new Wf(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Uc,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=bt(e)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Se.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(e),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUser(t){var e;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(e=this.redirectUser)===null||e===void 0?void 0:e._redirectEventId,a=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(t);(!o||o===a)&&(c!=null&&c.user)&&(i=c.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return w(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await Cr(t)}catch(e){if((e==null?void 0:e.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=Af()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const e=t?z(t):null;return e&&w(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t,e=!1){if(!this._deleted)return t&&w(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),e||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(bt(t))})}async initializeRecaptchaConfig(){const t=await tu(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),e=new eu(t);this.tenantId==null?this._agentRecaptchaConfig=e:this._tenantRecaptchaConfigs[this.tenantId]=e,e.emailPasswordEnabled&&new ru(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new xn("auth","Firebase",t())}onAuthStateChanged(t,e,r){return this.registerStateListener(this.authStateSubscription,t,e,r)}beforeAuthStateChanged(t,e){return this.beforeStateQueue.pushCallback(t,e)}onIdTokenChanged(t,e,r){return this.registerStateListener(this.idTokenSubscription,t,e,r)}authStateReady(){return new Promise((t,e)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},e)}})}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,e){const r=await this.getOrInitRedirectPersistenceManager(e);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&bt(t)||this._popupRedirectResolver;w(e,this,"argument-error"),this.redirectPersistenceManager=await Se.create(this,[bt(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,r;return this._isInitialized&&await this.queue(async()=>{}),((e=this._currentUser)===null||e===void 0?void 0:e._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(e=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&e!==void 0?e:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,r,i){if(this._deleted)return()=>{};const s=typeof e=="function"?e:e.next.bind(e),o=this._isInitialized?Promise.resolve():this._initializationPromise;return w(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof e=="function"?t.addObserver(e,r,i):t.addObserver(e)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return w(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Zc(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(e["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(e["X-Firebase-AppCheck"]=i),e}async _getAppCheckToken(){var t;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return e!=null&&e.error&&vf(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function _e(n){return z(n)}class fa{constructor(t){this.auth=t,this.observer=null,this.addObserver=cd(e=>this.observer=e)}get next(){return w(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gf(n,t){const e=Ms(n,"auth");if(e.isInitialized()){const i=e.getImmediate(),s=e.getOptions();if(Rr(s,t??{}))return i;gt(i,"already-initialized")}return e.initialize({options:t})}function Qf(n,t){const e=(t==null?void 0:t.persistence)||[],r=(Array.isArray(e)?e:[e]).map(bt);t!=null&&t.errorMap&&n._updateErrorMap(t.errorMap),n._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function Jf(n,t,e){const r=_e(n);w(r._canInitEmulator,r,"emulator-config-failed"),w(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(e!=null&&e.disableWarnings),s=iu(t),{host:o,port:a}=Xf(t),c=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Yf()}function iu(n){const t=n.indexOf(":");return t<0?"":n.substr(0,t+1)}function Xf(n){const t=iu(n),e=/(\/\/)?([^?#/]+)/.exec(n.substr(t.length));if(!e)return{host:"",port:null};const r=e[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:pa(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:pa(o)}}}function pa(n){if(!n)return null;const t=Number(n);return isNaN(t)?null:t}function Yf(){function n(){const t=document.createElement("p"),e=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",e.position="fixed",e.width="100%",e.backgroundColor="#ffffff",e.border=".1em solid #000000",e.color="#b50000",e.bottom="0px",e.left="0px",e.margin="0px",e.zIndex="10000",e.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qs{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return kt("not implemented")}_getIdTokenResponse(t){return kt("not implemented")}_linkToIdToken(t,e){return kt("not implemented")}_getReauthenticationResolver(t){return kt("not implemented")}}async function Zf(n,t){return We(n,"POST","/v1/accounts:update",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xi(n,t){return Bn(n,"POST","/v1/accounts:signInWithPassword",ze(n,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tp(n,t){return Bn(n,"POST","/v1/accounts:signInWithEmailLink",ze(n,t))}async function ep(n,t){return Bn(n,"POST","/v1/accounts:signInWithEmailLink",ze(n,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In extends qs{constructor(t,e,r,i=null){super("password",r),this._email=t,this._password=e,this._tenantId=i}static _fromEmailAndPassword(t,e){return new In(t,e,"password")}static _fromEmailAndCode(t,e,r=null){return new In(t,e,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const e=typeof t=="string"?JSON.parse(t):t;if(e!=null&&e.email&&(e!=null&&e.password)){if(e.signInMethod==="password")return this._fromEmailAndPassword(e.email,e.password);if(e.signInMethod==="emailLink")return this._fromEmailAndCode(e.email,e.password,e.tenantId)}return null}async _getIdTokenResponse(t){var e;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((e=t._getRecaptchaConfig())===null||e===void 0)&&e.emailPasswordEnabled){const i=await kr(t,r,"signInWithPassword");return xi(t,i)}else return xi(t,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const s=await kr(t,r,"signInWithPassword");return xi(t,s)}else return Promise.reject(i)});case"emailLink":return tp(t,{email:this._email,oobCode:this._password});default:gt(t,"internal-error")}}async _linkToIdToken(t,e){switch(this.signInMethod){case"password":return Zf(t,{idToken:e,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return ep(t,{idToken:e,email:this._email,oobCode:this._password});default:gt(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ce(n,t){return Bn(n,"POST","/v1/accounts:signInWithIdp",ze(n,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const np="http://localhost";class de extends qs{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new de(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):gt("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=e,s=Ls(e,["providerId","signInMethod"]);if(!r||!i)return null;const o=new de(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(t){const e=this.buildRequest();return Ce(t,e)}_linkToIdToken(t,e){const r=this.buildRequest();return r.idToken=e,Ce(t,r)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,Ce(t,e)}buildRequest(){const t={requestUri:np,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e.id_token=this.idToken),this.accessToken&&(e.access_token=this.accessToken),this.secret&&(e.oauth_token_secret=this.secret),e.providerId=this.providerId,this.nonce&&!this.pendingToken&&(e.nonce=this.nonce),t.postBody=Fn(e)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rp(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function ip(n){const t=on(an(n)).link,e=t?on(an(t)).deep_link_id:null,r=on(an(n)).deep_link_id;return(r?on(an(r)).link:null)||r||e||t||n}class $s{constructor(t){var e,r,i,s,o,a;const c=on(an(t)),u=(e=c.apiKey)!==null&&e!==void 0?e:null,l=(r=c.oobCode)!==null&&r!==void 0?r:null,h=rp((i=c.mode)!==null&&i!==void 0?i:null);w(u&&l&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=l,this.continueUrl=(s=c.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(t){const e=ip(t);try{return new $s(e)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(){this.providerId=Ke.PROVIDER_ID}static credential(t,e){return In._fromEmailAndPassword(t,e)}static credentialWithLink(t,e){const r=$s.parseLink(e);return w(r,"argument-error"),In._fromEmailAndCode(t,r.code,r.tenantId)}}Ke.PROVIDER_ID="password";Ke.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ke.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn extends js{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut extends qn{constructor(){super("facebook.com")}static credential(t){return de._fromParams({providerId:Ut.PROVIDER_ID,signInMethod:Ut.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Ut.credentialFromTaggedObject(t)}static credentialFromError(t){return Ut.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Ut.credential(t.oauthAccessToken)}catch{return null}}}Ut.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ut.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct extends qn{constructor(){super("google.com"),this.addScope("profile")}static credential(t,e){return de._fromParams({providerId:Ct.PROVIDER_ID,signInMethod:Ct.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return Ct.credentialFromTaggedObject(t)}static credentialFromError(t){return Ct.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:r}=t;if(!e&&!r)return null;try{return Ct.credential(e,r)}catch{return null}}}Ct.GOOGLE_SIGN_IN_METHOD="google.com";Ct.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt extends qn{constructor(){super("github.com")}static credential(t){return de._fromParams({providerId:Bt.PROVIDER_ID,signInMethod:Bt.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Bt.credentialFromTaggedObject(t)}static credentialFromError(t){return Bt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Bt.credential(t.oauthAccessToken)}catch{return null}}}Bt.GITHUB_SIGN_IN_METHOD="github.com";Bt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt extends qn{constructor(){super("twitter.com")}static credential(t,e){return de._fromParams({providerId:qt.PROVIDER_ID,signInMethod:qt.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return qt.credentialFromTaggedObject(t)}static credentialFromError(t){return qt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:r}=t;if(!e||!r)return null;try{return qt.credential(e,r)}catch{return null}}}qt.TWITTER_SIGN_IN_METHOD="twitter.com";qt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fi(n,t){return Bn(n,"POST","/v1/accounts:signUp",ze(n,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,r,i=!1){const s=await ae._fromIdTokenResponse(t,r,i),o=ma(r);return new fe({user:s,providerId:o,_tokenResponse:r,operationType:e})}static async _forOperation(t,e,r){await t._updateTokensIfNecessary(r,!0);const i=ma(r);return new fe({user:t,providerId:i,_tokenResponse:r,operationType:e})}}function ma(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br extends xt{constructor(t,e,r,i){var s;super(e.code,e.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,br.prototype),this.customData={appName:t.name,tenantId:(s=t.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:e.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,e,r,i){return new br(t,e,r,i)}}function su(n,t,e,r){return(t==="reauthenticate"?e._getReauthenticationResolver(n):e._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?br._fromErrorAndOperation(n,s,t,r):s})}async function sp(n,t,e=!1){const r=await En(n,t._linkToIdToken(n.auth,await n.getIdToken()),e);return fe._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function op(n,t,e=!1){const{auth:r}=n,i="reauthenticate";try{const s=await En(n,su(r,i,t,n),e);w(s.idToken,r,"internal-error");const o=Us(s.idToken);w(o,r,"internal-error");const{sub:a}=o;return w(n.uid===a,r,"user-mismatch"),fe._forOperation(n,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&gt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ou(n,t,e=!1){const r="signIn",i=await su(n,r,t),s=await fe._fromIdTokenResponse(n,r,i);return e||await n._updateCurrentUser(s.user),s}async function ap(n,t){return ou(_e(n),t)}async function cp(n,t,e){var r;const i=_e(n),s={returnSecureToken:!0,email:t,password:e,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const u=await kr(i,s,"signUpPassword");o=Fi(i,u)}else o=Fi(i,s).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const l=await kr(i,s,"signUpPassword");return Fi(i,l)}else return Promise.reject(u)});const a=await o.catch(u=>Promise.reject(u)),c=await fe._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(c.user),c}function up(n,t,e){return ap(z(n),Ke.credential(t,e))}function lp(n,t,e,r){return z(n).onIdTokenChanged(t,e,r)}function hp(n,t,e){return z(n).beforeAuthStateChanged(t,e)}function dp(n,t,e,r){return z(n).onAuthStateChanged(t,e,r)}function fp(n){return z(n).signOut()}const Dr="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class au{constructor(t,e){this.storageRetriever=t,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem(Dr,"1"),this.storage.removeItem(Dr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pp(){const n=at();return Bs(n)||Wr(n)}const mp=1e3,gp=10;class cu extends au{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=pp()&&Bf(),this.fallbackToPolling=Yc(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const r=this.storage.getItem(e),i=this.localCache[e];r!==i&&t(e,i,r)}}onStorageEvent(t,e=!1){if(!t.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=t.key;if(e?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(t.newValue!==o)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!e)return}const i=()=>{const o=this.storage.getItem(r);!e&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);Uf()&&s!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,gp):i()}notifyListeners(t,e){this.localCache[t]=e;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(e&&JSON.parse(e))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,e,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:r}),!0)})},mp)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}cu.type="LOCAL";const _p=cu;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uu extends au{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,e){}_removeListener(t,e){}}uu.type="SESSION";const lu=uu;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yp(n){return Promise.all(n.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(e){return{fulfilled:!1,reason:e}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find(i=>i.isListeningto(t));if(e)return e;const r=new Kr(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:r,eventType:i,data:s}=e.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;e.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(e.origin,s)),c=await yp(a);e.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(t,e){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),(!e||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Kr.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hs(n="",t=10){let e="";for(let r=0;r<t;r++)e+=Math.floor(Math.random()*10);return n+e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ep{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,c)=>{const u=Hs("",20);i.port1.start();const l=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(l),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(l),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:u,data:e},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function At(){return window}function vp(n){At().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hu(){return typeof At().WorkerGlobalScope<"u"&&typeof At().importScripts=="function"}async function Ip(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Tp(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function wp(){return hu()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const du="firebaseLocalStorageDb",Ap=1,Vr="firebaseLocalStorage",fu="fbase_key";class $n{constructor(t){this.request=t}toPromise(){return new Promise((t,e)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{e(this.request.error)})})}}function Gr(n,t){return n.transaction([Vr],t?"readwrite":"readonly").objectStore(Vr)}function Rp(){const n=indexedDB.deleteDatabase(du);return new $n(n).toPromise()}function is(){const n=indexedDB.open(du,Ap);return new Promise((t,e)=>{n.addEventListener("error",()=>{e(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Vr,{keyPath:fu})}catch(i){e(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Vr)?t(r):(r.close(),await Rp(),t(await is()))})})}async function ga(n,t,e){const r=Gr(n,!0).put({[fu]:t,value:e});return new $n(r).toPromise()}async function Pp(n,t){const e=Gr(n,!1).get(t),r=await new $n(e).toPromise();return r===void 0?null:r.value}function _a(n,t){const e=Gr(n,!0).delete(t);return new $n(e).toPromise()}const Sp=800,Cp=3;class pu{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await is(),this.db)}async _withRetries(t){let e=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(e++>Cp)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return hu()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Kr._getInstance(wp()),this.receiver._subscribe("keyChanged",async(t,e)=>({keyProcessed:(await this._poll()).includes(e.key)})),this.receiver._subscribe("ping",async(t,e)=>["keyChanged"])}async initializeSender(){var t,e;if(this.activeServiceWorker=await Ip(),!this.activeServiceWorker)return;this.sender=new Ep(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((e=r[0])===null||e===void 0)&&e.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||Tp()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await is();return await ga(t,Dr,"1"),await _a(t,Dr),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite(async()=>(await this._withRetries(r=>ga(r,t,e)),this.localCache[t]=e,this.notifyServiceWorker(t)))}async _get(t){const e=await this._withRetries(r=>Pp(r,t));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(e=>_a(e,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const s=Gr(i,!1).getAll();return new $n(s).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const e=[],r=new Set;for(const{fbase_key:i,value:s}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),e.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),e.push(i));return e}notifyListeners(t,e){this.localCache[t]=e;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Sp)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}pu.type="LOCAL";const kp=pu;new Un(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mu(n,t){return t?bt(t):(w(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zs extends qs{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Ce(t,this._buildIdpRequest())}_linkToIdToken(t,e){return Ce(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return Ce(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function bp(n){return ou(n.auth,new zs(n),n.bypassAuthState)}function Dp(n){const{auth:t,user:e}=n;return w(e,t,"internal-error"),op(e,new zs(n),n.bypassAuthState)}async function Vp(n){const{auth:t,user:e}=n;return w(e,t,"internal-error"),sp(e,new zs(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gu{constructor(t,e,r,i,s=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise(async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:e,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=t;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:e,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return bp;case"linkViaPopup":case"linkViaRedirect":return Vp;case"reauthViaPopup":case"reauthViaRedirect":return Dp;default:gt(this.auth,"internal-error")}}resolve(t){Vt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Vt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Np=new Un(2e3,1e4);async function Op(n,t,e){const r=_e(n);If(n,t,js);const i=mu(r,e);return new re(r,"signInViaPopup",t,i).executeNotNull()}class re extends gu{constructor(t,e,r,i,s){super(t,e,i,s),this.provider=r,this.authWindow=null,this.pollId=null,re.currentPopupAction&&re.currentPopupAction.cancel(),re.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return w(t,this.auth,"internal-error"),t}async onExecution(){Vt(this.filter.length===1,"Popup operations only handle one event");const t=Hs();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(wt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(wt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,re.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,r;if(!((r=(e=this.authWindow)===null||e===void 0?void 0:e.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(wt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,Np.get())};t()}}re.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mp="pendingRedirect",yr=new Map;class Lp extends gu{constructor(t,e,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,r),this.eventId=null}async execute(){let t=yr.get(this.auth._key());if(!t){try{const r=await xp(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(e){t=()=>Promise.reject(e)}yr.set(this.auth._key(),t)}return this.bypassAuthState||yr.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function xp(n,t){const e=Bp(t),r=Up(n);if(!await r._isAvailable())return!1;const i=await r._get(e)==="true";return await r._remove(e),i}function Fp(n,t){yr.set(n._key(),t)}function Up(n){return bt(n._redirectPersistence)}function Bp(n){return _r(Mp,n.config.apiKey,n.name)}async function qp(n,t,e=!1){const r=_e(n),i=mu(r,t),o=await new Lp(r,i,e).execute();return o&&!e&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $p=10*60*1e3;class jp{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(e=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!Hp(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var r;if(t.error&&!_u(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";e.onError(wt(this.auth,i))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const r=e.eventId===null||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=$p&&this.cachedEventUids.clear(),this.cachedEventUids.has(ya(t))}saveEventToCache(t){this.cachedEventUids.add(ya(t)),this.lastProcessedEventTime=Date.now()}}function ya(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(t=>t).join("-")}function _u({type:n,error:t}){return n==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function Hp(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return _u(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zp(n,t={}){return We(n,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wp=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Kp=/^https?/;async function Gp(n){if(n.config.emulator)return;const{authorizedDomains:t}=await zp(n);for(const e of t)try{if(Qp(e))return}catch{}gt(n,"unauthorized-domain")}function Qp(n){const t=rs(),{protocol:e,hostname:r}=new URL(t);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?e==="chrome-extension:"&&n.replace("chrome-extension://","")===t.replace("chrome-extension://",""):e==="chrome-extension:"&&o.hostname===r}if(!Kp.test(e))return!1;if(Wp.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jp=new Un(3e4,6e4);function Ea(){const n=At().___jsl;if(n!=null&&n.H){for(const t of Object.keys(n.H))if(n.H[t].r=n.H[t].r||[],n.H[t].L=n.H[t].L||[],n.H[t].r=[...n.H[t].L],n.CP)for(let e=0;e<n.CP.length;e++)n.CP[e]=null}}function Xp(n){return new Promise((t,e)=>{var r,i,s;function o(){Ea(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Ea(),e(wt(n,"network-request-failed"))},timeout:Jp.get()})}if(!((i=(r=At().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((s=At().gapi)===null||s===void 0)&&s.load)o();else{const a=$f("iframefcb");return At()[a]=()=>{gapi.load?o():e(wt(n,"network-request-failed"))},nu(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>e(c))}}).catch(t=>{throw Er=null,t})}let Er=null;function Yp(n){return Er=Er||Xp(n),Er}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zp=new Un(5e3,15e3),tm="__/auth/iframe",em="emulator/auth/iframe",nm={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},rm=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function im(n){const t=n.config;w(t.authDomain,n,"auth-domain-config-required");const e=t.emulator?Fs(t,em):`https://${n.config.authDomain}/${tm}`,r={apiKey:t.apiKey,appName:n.name,v:He},i=rm.get(n.config.apiHost);i&&(r.eid=i);const s=n._getFrameworks();return s.length&&(r.fw=s.join(",")),`${e}?${Fn(r).slice(1)}`}async function sm(n){const t=await Yp(n),e=At().gapi;return w(e,n,"internal-error"),t.open({where:document.body,url:im(n),messageHandlersFilter:e.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:nm,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=wt(n,"network-request-failed"),a=At().setTimeout(()=>{s(o)},Zp.get());function c(){At().clearTimeout(a),i(r)}r.ping(c).then(c,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const om={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},am=500,cm=600,um="_blank",lm="http://localhost";class va{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function hm(n,t,e,r=am,i=cm){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},om),{width:r.toString(),height:i.toString(),top:s,left:o}),u=at().toLowerCase();e&&(a=Kc(u)?um:e),Wc(u)&&(t=t||lm,c.scrollbars="yes");const l=Object.entries(c).reduce((d,[p,I])=>`${d}${p}=${I},`,"");if(Ff(u)&&a!=="_self")return dm(t||"",a),new va(null);const h=window.open(t||"",a,l);w(h,n,"popup-blocked");try{h.focus()}catch{}return new va(h)}function dm(n,t){const e=document.createElement("a");e.href=n,e.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),e.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fm="__/auth/handler",pm="emulator/auth/handler",mm=encodeURIComponent("fac");async function Ia(n,t,e,r,i,s){w(n.config.authDomain,n,"auth-domain-config-required"),w(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:e,redirectUrl:r,v:He,eventId:i};if(t instanceof js){t.setDefaultLanguage(n.languageCode),o.providerId=t.providerId||"",ad(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[l,h]of Object.entries(s||{}))o[l]=h}if(t instanceof qn){const l=t.getScopes().filter(h=>h!=="");l.length>0&&(o.scopes=l.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];const c=await n._getAppCheckToken(),u=c?`#${mm}=${encodeURIComponent(c)}`:"";return`${gm(n)}?${Fn(a).slice(1)}${u}`}function gm({config:n}){return n.emulator?Fs(n,pm):`https://${n.authDomain}/${fm}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ui="webStorageSupport";class _m{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=lu,this._completeRedirectFn=qp,this._overrideRedirectResult=Fp}async _openPopup(t,e,r,i){var s;Vt((s=this.eventManagers[t._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Ia(t,e,r,rs(),i);return hm(t,o,Hs())}async _openRedirect(t,e,r,i){await this._originValidation(t);const s=await Ia(t,e,r,rs(),i);return vp(s),new Promise(()=>{})}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:i,promise:s}=this.eventManagers[e];return i?Promise.resolve(i):(Vt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(t);return this.eventManagers[e]={promise:r},r.catch(()=>{delete this.eventManagers[e]}),r}async initAndGetManager(t){const e=await sm(t),r=new jp(t);return e.register("authEvent",i=>(w(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=e,r}_isIframeWebStorageSupported(t,e){this.iframes[t._key()].send(Ui,{type:Ui},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Ui];o!==void 0&&e(!!o),gt(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=Gp(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return Yc()||Bs()||Wr()}}const ym=_m;var Ta="@firebase/auth",wa="1.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Em{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){w(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vm(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Im(n){Oe(new le("auth",(t,{options:e})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),s=t.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;w(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Zc(n)},u=new Kf(r,i,s,c);return Qf(u,e),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,r)=>{t.getProvider("auth-internal").initialize()})),Oe(new le("auth-internal",t=>{const e=_e(t.getProvider("auth").getImmediate());return(r=>new Em(r))(e)},"PRIVATE").setInstantiationMode("EXPLICIT")),zt(Ta,wa,vm(n)),zt(Ta,wa,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tm=5*60,wm=Dc("authIdTokenMaxAge")||Tm;let Aa=null;const Am=n=>async t=>{const e=t&&await t.getIdTokenResult(),r=e&&(new Date().getTime()-Date.parse(e.issuedAtTime))/1e3;if(r&&r>wm)return;const i=e==null?void 0:e.token;Aa!==i&&(Aa=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Rm(n=Mc()){const t=Ms(n,"auth");if(t.isInitialized())return t.getImmediate();const e=Gf(n,{popupRedirectResolver:ym,persistence:[kp,_p,lu]}),r=Dc("authTokenSyncURL");if(r){const s=Am(r);hp(e,s,()=>s(e.currentUser)),lp(e,o=>s(o))}const i=kc("auth");return i&&Jf(e,`http://${i}`),e}Im("Browser");var Pm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},g,Ws=Ws||{},R=Pm||self;function Qr(n){var t=typeof n;return t=t!="object"?t:n?Array.isArray(n)?"array":t:"null",t=="array"||t=="object"&&typeof n.length=="number"}function jn(n){var t=typeof n;return t=="object"&&n!=null||t=="function"}function Sm(n){return Object.prototype.hasOwnProperty.call(n,Bi)&&n[Bi]||(n[Bi]=++Cm)}var Bi="closure_uid_"+(1e9*Math.random()>>>0),Cm=0;function km(n,t,e){return n.call.apply(n.bind,arguments)}function bm(n,t,e){if(!n)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),n.apply(t,i)}}return function(){return n.apply(t,arguments)}}function it(n,t,e){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?it=km:it=bm,it.apply(null,arguments)}function ar(n,t){var e=Array.prototype.slice.call(arguments,1);return function(){var r=e.slice();return r.push.apply(r,arguments),n.apply(this,r)}}function G(n,t){function e(){}e.prototype=t.prototype,n.$=t.prototype,n.prototype=new e,n.prototype.constructor=n,n.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[i].apply(r,o)}}function Xt(){this.s=this.s,this.o=this.o}var Dm=0;Xt.prototype.s=!1;Xt.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),Dm!=0)&&Sm(this)};Xt.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const yu=Array.prototype.indexOf?function(n,t){return Array.prototype.indexOf.call(n,t,void 0)}:function(n,t){if(typeof n=="string")return typeof t!="string"||t.length!=1?-1:n.indexOf(t,0);for(let e=0;e<n.length;e++)if(e in n&&n[e]===t)return e;return-1};function Ks(n){const t=n.length;if(0<t){const e=Array(t);for(let r=0;r<t;r++)e[r]=n[r];return e}return[]}function Ra(n,t){for(let e=1;e<arguments.length;e++){const r=arguments[e];if(Qr(r)){const i=n.length||0,s=r.length||0;n.length=i+s;for(let o=0;o<s;o++)n[i+o]=r[o]}else n.push(r)}}function st(n,t){this.type=n,this.g=this.target=t,this.defaultPrevented=!1}st.prototype.h=function(){this.defaultPrevented=!0};var Vm=function(){if(!R.addEventListener||!Object.defineProperty)return!1;var n=!1,t=Object.defineProperty({},"passive",{get:function(){n=!0}});try{R.addEventListener("test",()=>{},t),R.removeEventListener("test",()=>{},t)}catch{}return n}();function Tn(n){return/^[\s\xa0]*$/.test(n)}function Jr(){var n=R.navigator;return n&&(n=n.userAgent)?n:""}function vt(n){return Jr().indexOf(n)!=-1}function Gs(n){return Gs[" "](n),n}Gs[" "]=function(){};function Nm(n,t){var e=Rg;return Object.prototype.hasOwnProperty.call(e,n)?e[n]:e[n]=t(n)}var Om=vt("Opera"),Me=vt("Trident")||vt("MSIE"),Eu=vt("Edge"),ss=Eu||Me,vu=vt("Gecko")&&!(Jr().toLowerCase().indexOf("webkit")!=-1&&!vt("Edge"))&&!(vt("Trident")||vt("MSIE"))&&!vt("Edge"),Mm=Jr().toLowerCase().indexOf("webkit")!=-1&&!vt("Edge");function Iu(){var n=R.document;return n?n.documentMode:void 0}var os;t:{var qi="",$i=function(){var n=Jr();if(vu)return/rv:([^\);]+)(\)|;)/.exec(n);if(Eu)return/Edge\/([\d\.]+)/.exec(n);if(Me)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(n);if(Mm)return/WebKit\/(\S+)/.exec(n);if(Om)return/(?:Version)[ \/]?(\S+)/.exec(n)}();if($i&&(qi=$i?$i[1]:""),Me){var ji=Iu();if(ji!=null&&ji>parseFloat(qi)){os=String(ji);break t}}os=qi}var as;if(R.document&&Me){var Pa=Iu();as=Pa||parseInt(os,10)||void 0}else as=void 0;var Lm=as;function wn(n,t){if(st.call(this,n?n.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,n){var e=this.type=n.type,r=n.changedTouches&&n.changedTouches.length?n.changedTouches[0]:null;if(this.target=n.target||n.srcElement,this.g=t,t=n.relatedTarget){if(vu){t:{try{Gs(t.nodeName);var i=!0;break t}catch{}i=!1}i||(t=null)}}else e=="mouseover"?t=n.fromElement:e=="mouseout"&&(t=n.toElement);this.relatedTarget=t,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=n.clientX!==void 0?n.clientX:n.pageX,this.clientY=n.clientY!==void 0?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0),this.button=n.button,this.key=n.key||"",this.ctrlKey=n.ctrlKey,this.altKey=n.altKey,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.pointerId=n.pointerId||0,this.pointerType=typeof n.pointerType=="string"?n.pointerType:xm[n.pointerType]||"",this.state=n.state,this.i=n,n.defaultPrevented&&wn.$.h.call(this)}}G(wn,st);var xm={2:"touch",3:"pen",4:"mouse"};wn.prototype.h=function(){wn.$.h.call(this);var n=this.i;n.preventDefault?n.preventDefault():n.returnValue=!1};var Hn="closure_listenable_"+(1e6*Math.random()|0),Fm=0;function Um(n,t,e,r,i){this.listener=n,this.proxy=null,this.src=t,this.type=e,this.capture=!!r,this.la=i,this.key=++Fm,this.fa=this.ia=!1}function Xr(n){n.fa=!0,n.listener=null,n.proxy=null,n.src=null,n.la=null}function Qs(n,t,e){for(const r in n)t.call(e,n[r],r,n)}function Bm(n,t){for(const e in n)t.call(void 0,n[e],e,n)}function Tu(n){const t={};for(const e in n)t[e]=n[e];return t}const Sa="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function wu(n,t){let e,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(e in r)n[e]=r[e];for(let s=0;s<Sa.length;s++)e=Sa[s],Object.prototype.hasOwnProperty.call(r,e)&&(n[e]=r[e])}}function Yr(n){this.src=n,this.g={},this.h=0}Yr.prototype.add=function(n,t,e,r,i){var s=n.toString();n=this.g[s],n||(n=this.g[s]=[],this.h++);var o=us(n,t,r,i);return-1<o?(t=n[o],e||(t.ia=!1)):(t=new Um(t,this.src,s,!!r,i),t.ia=e,n.push(t)),t};function cs(n,t){var e=t.type;if(e in n.g){var r=n.g[e],i=yu(r,t),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Xr(t),n.g[e].length==0&&(delete n.g[e],n.h--))}}function us(n,t,e,r){for(var i=0;i<n.length;++i){var s=n[i];if(!s.fa&&s.listener==t&&s.capture==!!e&&s.la==r)return i}return-1}var Js="closure_lm_"+(1e6*Math.random()|0),Hi={};function Au(n,t,e,r,i){if(r&&r.once)return Pu(n,t,e,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)Au(n,t[s],e,r,i);return null}return e=Zs(e),n&&n[Hn]?n.O(t,e,jn(r)?!!r.capture:!!r,i):Ru(n,t,e,!1,r,i)}function Ru(n,t,e,r,i,s){if(!t)throw Error("Invalid event type");var o=jn(i)?!!i.capture:!!i,a=Ys(n);if(a||(n[Js]=a=new Yr(n)),e=a.add(t,e,r,o,s),e.proxy)return e;if(r=qm(),e.proxy=r,r.src=n,r.listener=e,n.addEventListener)Vm||(i=o),i===void 0&&(i=!1),n.addEventListener(t.toString(),r,i);else if(n.attachEvent)n.attachEvent(Cu(t.toString()),r);else if(n.addListener&&n.removeListener)n.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return e}function qm(){function n(e){return t.call(n.src,n.listener,e)}const t=$m;return n}function Pu(n,t,e,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)Pu(n,t[s],e,r,i);return null}return e=Zs(e),n&&n[Hn]?n.P(t,e,jn(r)?!!r.capture:!!r,i):Ru(n,t,e,!0,r,i)}function Su(n,t,e,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)Su(n,t[s],e,r,i);else r=jn(r)?!!r.capture:!!r,e=Zs(e),n&&n[Hn]?(n=n.i,t=String(t).toString(),t in n.g&&(s=n.g[t],e=us(s,e,r,i),-1<e&&(Xr(s[e]),Array.prototype.splice.call(s,e,1),s.length==0&&(delete n.g[t],n.h--)))):n&&(n=Ys(n))&&(t=n.g[t.toString()],n=-1,t&&(n=us(t,e,r,i)),(e=-1<n?t[n]:null)&&Xs(e))}function Xs(n){if(typeof n!="number"&&n&&!n.fa){var t=n.src;if(t&&t[Hn])cs(t.i,n);else{var e=n.type,r=n.proxy;t.removeEventListener?t.removeEventListener(e,r,n.capture):t.detachEvent?t.detachEvent(Cu(e),r):t.addListener&&t.removeListener&&t.removeListener(r),(e=Ys(t))?(cs(e,n),e.h==0&&(e.src=null,t[Js]=null)):Xr(n)}}}function Cu(n){return n in Hi?Hi[n]:Hi[n]="on"+n}function $m(n,t){if(n.fa)n=!0;else{t=new wn(t,this);var e=n.listener,r=n.la||n.src;n.ia&&Xs(n),n=e.call(r,t)}return n}function Ys(n){return n=n[Js],n instanceof Yr?n:null}var zi="__closure_events_fn_"+(1e9*Math.random()>>>0);function Zs(n){return typeof n=="function"?n:(n[zi]||(n[zi]=function(t){return n.handleEvent(t)}),n[zi])}function K(){Xt.call(this),this.i=new Yr(this),this.S=this,this.J=null}G(K,Xt);K.prototype[Hn]=!0;K.prototype.removeEventListener=function(n,t,e,r){Su(this,n,t,e,r)};function Y(n,t){var e,r=n.J;if(r)for(e=[];r;r=r.J)e.push(r);if(n=n.S,r=t.type||t,typeof t=="string")t=new st(t,n);else if(t instanceof st)t.target=t.target||n;else{var i=t;t=new st(r,n),wu(t,i)}if(i=!0,e)for(var s=e.length-1;0<=s;s--){var o=t.g=e[s];i=cr(o,r,!0,t)&&i}if(o=t.g=n,i=cr(o,r,!0,t)&&i,i=cr(o,r,!1,t)&&i,e)for(s=0;s<e.length;s++)o=t.g=e[s],i=cr(o,r,!1,t)&&i}K.prototype.N=function(){if(K.$.N.call(this),this.i){var n=this.i,t;for(t in n.g){for(var e=n.g[t],r=0;r<e.length;r++)Xr(e[r]);delete n.g[t],n.h--}}this.J=null};K.prototype.O=function(n,t,e,r){return this.i.add(String(n),t,!1,e,r)};K.prototype.P=function(n,t,e,r){return this.i.add(String(n),t,!0,e,r)};function cr(n,t,e,r){if(t=n.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.fa&&o.capture==e){var a=o.listener,c=o.la||o.src;o.ia&&cs(n.i,o),i=a.call(c,r)!==!1&&i}}return i&&!r.defaultPrevented}var to=R.JSON.stringify;class jm{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function Hm(){var n=eo;let t=null;return n.g&&(t=n.g,n.g=n.g.next,n.g||(n.h=null),t.next=null),t}class zm{constructor(){this.h=this.g=null}add(t,e){const r=ku.get();r.set(t,e),this.h?this.h.next=r:this.g=r,this.h=r}}var ku=new jm(()=>new Wm,n=>n.reset());class Wm{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function Km(n){var t=1;n=n.split(":");const e=[];for(;0<t&&n.length;)e.push(n.shift()),t--;return n.length&&e.push(n.join(":")),e}function Gm(n){R.setTimeout(()=>{throw n},0)}let An,Rn=!1,eo=new zm,bu=()=>{const n=R.Promise.resolve(void 0);An=()=>{n.then(Qm)}};var Qm=()=>{for(var n;n=Hm();){try{n.h.call(n.g)}catch(e){Gm(e)}var t=ku;t.j(n),100>t.h&&(t.h++,n.next=t.g,t.g=n)}Rn=!1};function Zr(n,t){K.call(this),this.h=n||1,this.g=t||R,this.j=it(this.qb,this),this.l=Date.now()}G(Zr,K);g=Zr.prototype;g.ga=!1;g.T=null;g.qb=function(){if(this.ga){var n=Date.now()-this.l;0<n&&n<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-n):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Y(this,"tick"),this.ga&&(no(this),this.start()))}};g.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function no(n){n.ga=!1,n.T&&(n.g.clearTimeout(n.T),n.T=null)}g.N=function(){Zr.$.N.call(this),no(this),delete this.g};function ro(n,t,e){if(typeof n=="function")e&&(n=it(n,e));else if(n&&typeof n.handleEvent=="function")n=it(n.handleEvent,n);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:R.setTimeout(n,t||0)}function Du(n){n.g=ro(()=>{n.g=null,n.i&&(n.i=!1,Du(n))},n.j);const t=n.h;n.h=null,n.m.apply(null,t)}class Jm extends Xt{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Du(this)}N(){super.N(),this.g&&(R.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Pn(n){Xt.call(this),this.h=n,this.g={}}G(Pn,Xt);var Ca=[];function Vu(n,t,e,r){Array.isArray(e)||(e&&(Ca[0]=e.toString()),e=Ca);for(var i=0;i<e.length;i++){var s=Au(t,e[i],r||n.handleEvent,!1,n.h||n);if(!s)break;n.g[s.key]=s}}function Nu(n){Qs(n.g,function(t,e){this.g.hasOwnProperty(e)&&Xs(t)},n),n.g={}}Pn.prototype.N=function(){Pn.$.N.call(this),Nu(this)};Pn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function ti(){this.g=!0}ti.prototype.Ea=function(){this.g=!1};function Xm(n,t,e,r,i,s){n.info(function(){if(n.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+u+"&"):o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+`
`+e+`
`+o})}function Ym(n,t,e,r,i,s,o){n.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+`
`+e+`
`+s+" "+o})}function Pe(n,t,e,r){n.info(function(){return"XMLHTTP TEXT ("+t+"): "+tg(n,e)+(r?" "+r:"")})}function Zm(n,t){n.info(function(){return"TIMEOUT: "+t})}ti.prototype.info=function(){};function tg(n,t){if(!n.g)return t;if(!t)return null;try{var e=JSON.parse(t);if(e){for(n=0;n<e.length;n++)if(Array.isArray(e[n])){var r=e[n];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return to(e)}catch{return t}}var ye={},ka=null;function ei(){return ka=ka||new K}ye.Ta="serverreachability";function Ou(n){st.call(this,ye.Ta,n)}G(Ou,st);function Sn(n){const t=ei();Y(t,new Ou(t))}ye.STAT_EVENT="statevent";function Mu(n,t){st.call(this,ye.STAT_EVENT,n),this.stat=t}G(Mu,st);function ut(n){const t=ei();Y(t,new Mu(t,n))}ye.Ua="timingevent";function Lu(n,t){st.call(this,ye.Ua,n),this.size=t}G(Lu,st);function zn(n,t){if(typeof n!="function")throw Error("Fn must not be null and must be a function");return R.setTimeout(function(){n()},t)}var ni={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},xu={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function io(){}io.prototype.h=null;function ba(n){return n.h||(n.h=n.i())}function Fu(){}var Wn={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function so(){st.call(this,"d")}G(so,st);function oo(){st.call(this,"c")}G(oo,st);var ls;function ri(){}G(ri,io);ri.prototype.g=function(){return new XMLHttpRequest};ri.prototype.i=function(){return{}};ls=new ri;function Kn(n,t,e,r){this.l=n,this.j=t,this.m=e,this.W=r||1,this.U=new Pn(this),this.P=eg,n=ss?125:void 0,this.V=new Zr(n),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Uu}function Uu(){this.i=null,this.g="",this.h=!1}var eg=45e3,hs={},Nr={};g=Kn.prototype;g.setTimeout=function(n){this.P=n};function ds(n,t,e){n.L=1,n.v=si(Nt(t)),n.s=e,n.S=!0,Bu(n,null)}function Bu(n,t){n.G=Date.now(),Gn(n),n.A=Nt(n.v);var e=n.A,r=n.W;Array.isArray(r)||(r=[String(r)]),Gu(e.i,"t",r),n.C=0,e=n.l.J,n.h=new Uu,n.g=ml(n.l,e?t:null,!n.s),0<n.O&&(n.M=new Jm(it(n.Pa,n,n.g),n.O)),Vu(n.U,n.g,"readystatechange",n.nb),t=n.I?Tu(n.I):{},n.s?(n.u||(n.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",n.g.ha(n.A,n.u,n.s,t)):(n.u="GET",n.g.ha(n.A,n.u,null,t)),Sn(),Xm(n.j,n.u,n.A,n.m,n.W,n.s)}g.nb=function(n){n=n.target;const t=this.M;t&&It(n)==3?t.l():this.Pa(n)};g.Pa=function(n){try{if(n==this.g)t:{const l=It(this.g);var t=this.g.Ia();const h=this.g.da();if(!(3>l)&&(l!=3||ss||this.g&&(this.h.h||this.g.ja()||Oa(this.g)))){this.J||l!=4||t==7||(t==8||0>=h?Sn(3):Sn(2)),ii(this);var e=this.g.da();this.ca=e;e:if(qu(this)){var r=Oa(this.g);n="";var i=r.length,s=It(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ie(this),pn(this);var o="";break e}this.h.i=new R.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,n+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.splice(0,i),this.h.g+=n,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=e==200,Ym(this.j,this.u,this.A,this.m,this.W,l,e),this.i){if(this.aa&&!this.K){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Tn(a)){var u=a;break e}}u=null}if(e=u)Pe(this.j,this.m,e,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,fs(this,e);else{this.i=!1,this.o=3,ut(12),ie(this),pn(this);break t}}this.S?($u(this,l,o),ss&&this.i&&l==3&&(Vu(this.U,this.V,"tick",this.mb),this.V.start())):(Pe(this.j,this.m,o,null),fs(this,o)),l==4&&ie(this),this.i&&!this.J&&(l==4?hl(this.l,this):(this.i=!1,Gn(this)))}else Tg(this.g),e==400&&0<o.indexOf("Unknown SID")?(this.o=3,ut(12)):(this.o=0,ut(13)),ie(this),pn(this)}}}catch{}finally{}};function qu(n){return n.g?n.u=="GET"&&n.L!=2&&n.l.Ha:!1}function $u(n,t,e){let r=!0,i;for(;!n.J&&n.C<e.length;)if(i=ng(n,e),i==Nr){t==4&&(n.o=4,ut(14),r=!1),Pe(n.j,n.m,null,"[Incomplete Response]");break}else if(i==hs){n.o=4,ut(15),Pe(n.j,n.m,e,"[Invalid Chunk]"),r=!1;break}else Pe(n.j,n.m,i,null),fs(n,i);qu(n)&&i!=Nr&&i!=hs&&(n.h.g="",n.C=0),t!=4||e.length!=0||n.h.h||(n.o=1,ut(16),r=!1),n.i=n.i&&r,r?0<e.length&&!n.ba&&(n.ba=!0,t=n.l,t.g==n&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+e.length),fo(t),t.M=!0,ut(11))):(Pe(n.j,n.m,e,"[Invalid Chunked Response]"),ie(n),pn(n))}g.mb=function(){if(this.g){var n=It(this.g),t=this.g.ja();this.C<t.length&&(ii(this),$u(this,n,t),this.i&&n!=4&&Gn(this))}};function ng(n,t){var e=n.C,r=t.indexOf(`
`,e);return r==-1?Nr:(e=Number(t.substring(e,r)),isNaN(e)?hs:(r+=1,r+e>t.length?Nr:(t=t.slice(r,r+e),n.C=r+e,t)))}g.cancel=function(){this.J=!0,ie(this)};function Gn(n){n.Y=Date.now()+n.P,ju(n,n.P)}function ju(n,t){if(n.B!=null)throw Error("WatchDog timer not null");n.B=zn(it(n.lb,n),t)}function ii(n){n.B&&(R.clearTimeout(n.B),n.B=null)}g.lb=function(){this.B=null;const n=Date.now();0<=n-this.Y?(Zm(this.j,this.A),this.L!=2&&(Sn(),ut(17)),ie(this),this.o=2,pn(this)):ju(this,this.Y-n)};function pn(n){n.l.H==0||n.J||hl(n.l,n)}function ie(n){ii(n);var t=n.M;t&&typeof t.sa=="function"&&t.sa(),n.M=null,no(n.V),Nu(n.U),n.g&&(t=n.g,n.g=null,t.abort(),t.sa())}function fs(n,t){try{var e=n.l;if(e.H!=0&&(e.g==n||ps(e.i,n))){if(!n.K&&ps(e.i,n)&&e.H==3){try{var r=e.Ja.g.parse(t)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){t:if(!e.u){if(e.g)if(e.g.G+3e3<n.G)Lr(e),ci(e);else break t;ho(e),ut(18)}}else e.Fa=i[1],0<e.Fa-e.V&&37500>i[2]&&e.G&&e.A==0&&!e.v&&(e.v=zn(it(e.ib,e),6e3));if(1>=Xu(e.i)&&e.oa){try{e.oa()}catch{}e.oa=void 0}}else se(e,11)}else if((n.K||e.g==n)&&Lr(e),!Tn(t))for(i=e.Ja.g.parse(t),t=0;t<i.length;t++){let u=i[t];if(e.V=u[0],u=u[1],e.H==2)if(u[0]=="c"){e.K=u[1],e.pa=u[2];const l=u[3];l!=null&&(e.ra=l,e.l.info("VER="+e.ra));const h=u[4];h!=null&&(e.Ga=h,e.l.info("SVER="+e.Ga));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,e.L=r,e.l.info("backChannelRequestTimeoutMs_="+r)),r=e;const p=n.g;if(p){const I=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(I){var s=r.i;s.g||I.indexOf("spdy")==-1&&I.indexOf("quic")==-1&&I.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(ao(s,s.h),s.h=null))}if(r.F){const T=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;T&&(r.Da=T,O(r.I,r.F,T))}}e.H=3,e.h&&e.h.Ba(),e.ca&&(e.S=Date.now()-n.G,e.l.info("Handshake RTT: "+e.S+"ms")),r=e;var o=n;if(r.wa=pl(r,r.J?r.pa:null,r.Y),o.K){Yu(r.i,o);var a=o,c=r.L;c&&a.setTimeout(c),a.B&&(ii(a),Gn(a)),r.g=o}else ul(r);0<e.j.length&&ui(e)}else u[0]!="stop"&&u[0]!="close"||se(e,7);else e.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?se(e,7):lo(e):u[0]!="noop"&&e.h&&e.h.Aa(u),e.A=0)}}Sn(4)}catch{}}function rg(n){if(n.Z&&typeof n.Z=="function")return n.Z();if(typeof Map<"u"&&n instanceof Map||typeof Set<"u"&&n instanceof Set)return Array.from(n.values());if(typeof n=="string")return n.split("");if(Qr(n)){for(var t=[],e=n.length,r=0;r<e;r++)t.push(n[r]);return t}t=[],e=0;for(r in n)t[e++]=n[r];return t}function ig(n){if(n.ta&&typeof n.ta=="function")return n.ta();if(!n.Z||typeof n.Z!="function"){if(typeof Map<"u"&&n instanceof Map)return Array.from(n.keys());if(!(typeof Set<"u"&&n instanceof Set)){if(Qr(n)||typeof n=="string"){var t=[];n=n.length;for(var e=0;e<n;e++)t.push(e);return t}t=[],e=0;for(const r in n)t[e++]=r;return t}}}function Hu(n,t){if(n.forEach&&typeof n.forEach=="function")n.forEach(t,void 0);else if(Qr(n)||typeof n=="string")Array.prototype.forEach.call(n,t,void 0);else for(var e=ig(n),r=rg(n),i=r.length,s=0;s<i;s++)t.call(void 0,r[s],e&&e[s],n)}var zu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function sg(n,t){if(n){n=n.split("&");for(var e=0;e<n.length;e++){var r=n[e].indexOf("="),i=null;if(0<=r){var s=n[e].substring(0,r);i=n[e].substring(r+1)}else s=n[e];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function ce(n){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,n instanceof ce){this.h=n.h,Or(this,n.j),this.s=n.s,this.g=n.g,Mr(this,n.m),this.l=n.l;var t=n.i,e=new Cn;e.i=t.i,t.g&&(e.g=new Map(t.g),e.h=t.h),Da(this,e),this.o=n.o}else n&&(t=String(n).match(zu))?(this.h=!1,Or(this,t[1]||"",!0),this.s=cn(t[2]||""),this.g=cn(t[3]||"",!0),Mr(this,t[4]),this.l=cn(t[5]||"",!0),Da(this,t[6]||"",!0),this.o=cn(t[7]||"")):(this.h=!1,this.i=new Cn(null,this.h))}ce.prototype.toString=function(){var n=[],t=this.j;t&&n.push(un(t,Va,!0),":");var e=this.g;return(e||t=="file")&&(n.push("//"),(t=this.s)&&n.push(un(t,Va,!0),"@"),n.push(encodeURIComponent(String(e)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e=this.m,e!=null&&n.push(":",String(e))),(e=this.l)&&(this.g&&e.charAt(0)!="/"&&n.push("/"),n.push(un(e,e.charAt(0)=="/"?cg:ag,!0))),(e=this.i.toString())&&n.push("?",e),(e=this.o)&&n.push("#",un(e,lg)),n.join("")};function Nt(n){return new ce(n)}function Or(n,t,e){n.j=e?cn(t,!0):t,n.j&&(n.j=n.j.replace(/:$/,""))}function Mr(n,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);n.m=t}else n.m=null}function Da(n,t,e){t instanceof Cn?(n.i=t,hg(n.i,n.h)):(e||(t=un(t,ug)),n.i=new Cn(t,n.h))}function O(n,t,e){n.i.set(t,e)}function si(n){return O(n,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),n}function cn(n,t){return n?t?decodeURI(n.replace(/%25/g,"%2525")):decodeURIComponent(n):""}function un(n,t,e){return typeof n=="string"?(n=encodeURI(n).replace(t,og),e&&(n=n.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n):null}function og(n){return n=n.charCodeAt(0),"%"+(n>>4&15).toString(16)+(n&15).toString(16)}var Va=/[#\/\?@]/g,ag=/[#\?:]/g,cg=/[#\?]/g,ug=/[#\?@]/g,lg=/#/g;function Cn(n,t){this.h=this.g=null,this.i=n||null,this.j=!!t}function Yt(n){n.g||(n.g=new Map,n.h=0,n.i&&sg(n.i,function(t,e){n.add(decodeURIComponent(t.replace(/\+/g," ")),e)}))}g=Cn.prototype;g.add=function(n,t){Yt(this),this.i=null,n=Ge(this,n);var e=this.g.get(n);return e||this.g.set(n,e=[]),e.push(t),this.h+=1,this};function Wu(n,t){Yt(n),t=Ge(n,t),n.g.has(t)&&(n.i=null,n.h-=n.g.get(t).length,n.g.delete(t))}function Ku(n,t){return Yt(n),t=Ge(n,t),n.g.has(t)}g.forEach=function(n,t){Yt(this),this.g.forEach(function(e,r){e.forEach(function(i){n.call(t,i,r,this)},this)},this)};g.ta=function(){Yt(this);const n=Array.from(this.g.values()),t=Array.from(this.g.keys()),e=[];for(let r=0;r<t.length;r++){const i=n[r];for(let s=0;s<i.length;s++)e.push(t[r])}return e};g.Z=function(n){Yt(this);let t=[];if(typeof n=="string")Ku(this,n)&&(t=t.concat(this.g.get(Ge(this,n))));else{n=Array.from(this.g.values());for(let e=0;e<n.length;e++)t=t.concat(n[e])}return t};g.set=function(n,t){return Yt(this),this.i=null,n=Ge(this,n),Ku(this,n)&&(this.h-=this.g.get(n).length),this.g.set(n,[t]),this.h+=1,this};g.get=function(n,t){return n?(n=this.Z(n),0<n.length?String(n[0]):t):t};function Gu(n,t,e){Wu(n,t),0<e.length&&(n.i=null,n.g.set(Ge(n,t),Ks(e)),n.h+=e.length)}g.toString=function(){if(this.i)return this.i;if(!this.g)return"";const n=[],t=Array.from(this.g.keys());for(var e=0;e<t.length;e++){var r=t[e];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),n.push(i)}}return this.i=n.join("&")};function Ge(n,t){return t=String(t),n.j&&(t=t.toLowerCase()),t}function hg(n,t){t&&!n.j&&(Yt(n),n.i=null,n.g.forEach(function(e,r){var i=r.toLowerCase();r!=i&&(Wu(this,r),Gu(this,i,e))},n)),n.j=t}var dg=class{constructor(n,t){this.g=n,this.map=t}};function Qu(n){this.l=n||fg,R.PerformanceNavigationTiming?(n=R.performance.getEntriesByType("navigation"),n=0<n.length&&(n[0].nextHopProtocol=="hq"||n[0].nextHopProtocol=="h2")):n=!!(R.g&&R.g.Ka&&R.g.Ka()&&R.g.Ka().ec),this.j=n?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var fg=10;function Ju(n){return n.h?!0:n.g?n.g.size>=n.j:!1}function Xu(n){return n.h?1:n.g?n.g.size:0}function ps(n,t){return n.h?n.h==t:n.g?n.g.has(t):!1}function ao(n,t){n.g?n.g.add(t):n.h=t}function Yu(n,t){n.h&&n.h==t?n.h=null:n.g&&n.g.has(t)&&n.g.delete(t)}Qu.prototype.cancel=function(){if(this.i=Zu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const n of this.g.values())n.cancel();this.g.clear()}};function Zu(n){if(n.h!=null)return n.i.concat(n.h.F);if(n.g!=null&&n.g.size!==0){let t=n.i;for(const e of n.g.values())t=t.concat(e.F);return t}return Ks(n.i)}var pg=class{stringify(n){return R.JSON.stringify(n,void 0)}parse(n){return R.JSON.parse(n,void 0)}};function mg(){this.g=new pg}function gg(n,t,e){const r=e||"";try{Hu(n,function(i,s){let o=i;jn(i)&&(o=to(i)),t.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function _g(n,t){const e=new ti;if(R.Image){const r=new Image;r.onload=ar(ur,e,r,"TestLoadImage: loaded",!0,t),r.onerror=ar(ur,e,r,"TestLoadImage: error",!1,t),r.onabort=ar(ur,e,r,"TestLoadImage: abort",!1,t),r.ontimeout=ar(ur,e,r,"TestLoadImage: timeout",!1,t),R.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=n}else t(!1)}function ur(n,t,e,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch{}}function Qn(n){this.l=n.fc||null,this.j=n.ob||!1}G(Qn,io);Qn.prototype.g=function(){return new oi(this.l,this.j)};Qn.prototype.i=function(n){return function(){return n}}({});function oi(n,t){K.call(this),this.F=n,this.u=t,this.m=void 0,this.readyState=co,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}G(oi,K);var co=0;g=oi.prototype;g.open=function(n,t){if(this.readyState!=co)throw this.abort(),Error("Error reopening a connection");this.C=n,this.B=t,this.readyState=1,kn(this)};g.send=function(n){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};n&&(t.body=n),(this.F||R).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))};g.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Jn(this)),this.readyState=co};g.$a=function(n){if(this.g&&(this.l=n,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=n.headers,this.readyState=2,kn(this)),this.g&&(this.readyState=3,kn(this),this.g)))if(this.responseType==="arraybuffer")n.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof R.ReadableStream<"u"&&"body"in n){if(this.j=n.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;tl(this)}else n.text().then(this.Za.bind(this),this.ka.bind(this))};function tl(n){n.j.read().then(n.Xa.bind(n)).catch(n.ka.bind(n))}g.Xa=function(n){if(this.g){if(this.u&&n.value)this.response.push(n.value);else if(!this.u){var t=n.value?n.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!n.done}))&&(this.response=this.responseText+=t)}n.done?Jn(this):kn(this),this.readyState==3&&tl(this)}};g.Za=function(n){this.g&&(this.response=this.responseText=n,Jn(this))};g.Ya=function(n){this.g&&(this.response=n,Jn(this))};g.ka=function(){this.g&&Jn(this)};function Jn(n){n.readyState=4,n.l=null,n.j=null,n.A=null,kn(n)}g.setRequestHeader=function(n,t){this.v.append(n,t)};g.getResponseHeader=function(n){return this.h&&this.h.get(n.toLowerCase())||""};g.getAllResponseHeaders=function(){if(!this.h)return"";const n=[],t=this.h.entries();for(var e=t.next();!e.done;)e=e.value,n.push(e[0]+": "+e[1]),e=t.next();return n.join(`\r
`)};function kn(n){n.onreadystatechange&&n.onreadystatechange.call(n)}Object.defineProperty(oi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(n){this.m=n?"include":"same-origin"}});var yg=R.JSON.parse;function U(n){K.call(this),this.headers=new Map,this.u=n||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=el,this.L=this.M=!1}G(U,K);var el="",Eg=/^https?$/i,vg=["POST","PUT"];g=U.prototype;g.Oa=function(n){this.M=n};g.ha=function(n,t,e,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+n);t=t?t.toUpperCase():"GET",this.I=n,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():ls.g(),this.C=this.u?ba(this.u):ba(ls),this.g.onreadystatechange=it(this.La,this);try{this.G=!0,this.g.open(t,String(n),!0),this.G=!1}catch(s){Na(this,s);return}if(n=e||"",e=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)e.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())e.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(e.keys()).find(s=>s.toLowerCase()=="content-type"),i=R.FormData&&n instanceof R.FormData,!(0<=yu(vg,t))||r||i||e.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of e)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{il(this),0<this.B&&((this.L=Ig(this.g))?(this.g.timeout=this.B,this.g.ontimeout=it(this.ua,this)):this.A=ro(this.ua,this.B,this)),this.v=!0,this.g.send(n),this.v=!1}catch(s){Na(this,s)}};function Ig(n){return Me&&typeof n.timeout=="number"&&n.ontimeout!==void 0}g.ua=function(){typeof Ws<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Y(this,"timeout"),this.abort(8))};function Na(n,t){n.h=!1,n.g&&(n.l=!0,n.g.abort(),n.l=!1),n.j=t,n.m=5,nl(n),ai(n)}function nl(n){n.F||(n.F=!0,Y(n,"complete"),Y(n,"error"))}g.abort=function(n){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=n||7,Y(this,"complete"),Y(this,"abort"),ai(this))};g.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ai(this,!0)),U.$.N.call(this)};g.La=function(){this.s||(this.G||this.v||this.l?rl(this):this.kb())};g.kb=function(){rl(this)};function rl(n){if(n.h&&typeof Ws<"u"&&(!n.C[1]||It(n)!=4||n.da()!=2)){if(n.v&&It(n)==4)ro(n.La,0,n);else if(Y(n,"readystatechange"),It(n)==4){n.h=!1;try{const o=n.da();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var e;if(!(e=t)){var r;if(r=o===0){var i=String(n.I).match(zu)[1]||null;!i&&R.self&&R.self.location&&(i=R.self.location.protocol.slice(0,-1)),r=!Eg.test(i?i.toLowerCase():"")}e=r}if(e)Y(n,"complete"),Y(n,"success");else{n.m=6;try{var s=2<It(n)?n.g.statusText:""}catch{s=""}n.j=s+" ["+n.da()+"]",nl(n)}}finally{ai(n)}}}}function ai(n,t){if(n.g){il(n);const e=n.g,r=n.C[0]?()=>{}:null;n.g=null,n.C=null,t||Y(n,"ready");try{e.onreadystatechange=r}catch{}}}function il(n){n.g&&n.L&&(n.g.ontimeout=null),n.A&&(R.clearTimeout(n.A),n.A=null)}g.isActive=function(){return!!this.g};function It(n){return n.g?n.g.readyState:0}g.da=function(){try{return 2<It(this)?this.g.status:-1}catch{return-1}};g.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};g.Wa=function(n){if(this.g){var t=this.g.responseText;return n&&t.indexOf(n)==0&&(t=t.substring(n.length)),yg(t)}};function Oa(n){try{if(!n.g)return null;if("response"in n.g)return n.g.response;switch(n.K){case el:case"text":return n.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in n.g)return n.g.mozResponseArrayBuffer}return null}catch{return null}}function Tg(n){const t={};n=(n.g&&2<=It(n)&&n.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<n.length;r++){if(Tn(n[r]))continue;var e=Km(n[r]);const i=e[0];if(e=e[1],typeof e!="string")continue;e=e.trim();const s=t[i]||[];t[i]=s,s.push(e)}Bm(t,function(r){return r.join(", ")})}g.Ia=function(){return this.m};g.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function sl(n){let t="";return Qs(n,function(e,r){t+=r,t+=":",t+=e,t+=`\r
`}),t}function uo(n,t,e){t:{for(r in e){var r=!1;break t}r=!0}r||(e=sl(e),typeof n=="string"?e!=null&&encodeURIComponent(String(e)):O(n,t,e))}function rn(n,t,e){return e&&e.internalChannelParams&&e.internalChannelParams[n]||t}function ol(n){this.Ga=0,this.j=[],this.l=new ti,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=rn("failFast",!1,n),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=rn("baseRetryDelayMs",5e3,n),this.hb=rn("retryDelaySeedMs",1e4,n),this.eb=rn("forwardChannelMaxRetries",2,n),this.xa=rn("forwardChannelRequestTimeoutMs",2e4,n),this.va=n&&n.xmlHttpFactory||void 0,this.Ha=n&&n.dc||!1,this.L=void 0,this.J=n&&n.supportsCrossDomainXhr||!1,this.K="",this.i=new Qu(n&&n.concurrentRequestLimit),this.Ja=new mg,this.P=n&&n.fastHandshake||!1,this.O=n&&n.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=n&&n.bc||!1,n&&n.Ea&&this.l.Ea(),n&&n.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&n&&n.detectBufferingProxy||!1,this.qa=void 0,n&&n.longPollingTimeout&&0<n.longPollingTimeout&&(this.qa=n.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}g=ol.prototype;g.ra=8;g.H=1;function lo(n){if(al(n),n.H==3){var t=n.W++,e=Nt(n.I);if(O(e,"SID",n.K),O(e,"RID",t),O(e,"TYPE","terminate"),Xn(n,e),t=new Kn(n,n.l,t),t.L=2,t.v=si(Nt(e)),e=!1,R.navigator&&R.navigator.sendBeacon)try{e=R.navigator.sendBeacon(t.v.toString(),"")}catch{}!e&&R.Image&&(new Image().src=t.v,e=!0),e||(t.g=ml(t.l,null),t.g.ha(t.v)),t.G=Date.now(),Gn(t)}fl(n)}function ci(n){n.g&&(fo(n),n.g.cancel(),n.g=null)}function al(n){ci(n),n.u&&(R.clearTimeout(n.u),n.u=null),Lr(n),n.i.cancel(),n.m&&(typeof n.m=="number"&&R.clearTimeout(n.m),n.m=null)}function ui(n){if(!Ju(n.i)&&!n.m){n.m=!0;var t=n.Na;An||bu(),Rn||(An(),Rn=!0),eo.add(t,n),n.C=0}}function wg(n,t){return Xu(n.i)>=n.i.j-(n.m?1:0)?!1:n.m?(n.j=t.F.concat(n.j),!0):n.H==1||n.H==2||n.C>=(n.cb?0:n.eb)?!1:(n.m=zn(it(n.Na,n,t),dl(n,n.C)),n.C++,!0)}g.Na=function(n){if(this.m)if(this.m=null,this.H==1){if(!n){this.W=Math.floor(1e5*Math.random()),n=this.W++;const i=new Kn(this,this.l,n);let s=this.s;if(this.U&&(s?(s=Tu(s),wu(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)t:{for(var t=0,e=0;e<this.j.length;e++){e:{var r=this.j[e];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break e}r=void 0}if(r===void 0)break;if(t+=r,4096<t){t=e;break t}if(t===4096||e===this.j.length-1){t=e+1;break t}}t=1e3}else t=1e3;t=cl(this,i,t),e=Nt(this.I),O(e,"RID",n),O(e,"CVER",22),this.F&&O(e,"X-HTTP-Session-Id",this.F),Xn(this,e),s&&(this.O?t="headers="+encodeURIComponent(String(sl(s)))+"&"+t:this.o&&uo(e,this.o,s)),ao(this.i,i),this.bb&&O(e,"TYPE","init"),this.P?(O(e,"$req",t),O(e,"SID","null"),i.aa=!0,ds(i,e,null)):ds(i,e,t),this.H=2}}else this.H==3&&(n?Ma(this,n):this.j.length==0||Ju(this.i)||Ma(this))};function Ma(n,t){var e;t?e=t.m:e=n.W++;const r=Nt(n.I);O(r,"SID",n.K),O(r,"RID",e),O(r,"AID",n.V),Xn(n,r),n.o&&n.s&&uo(r,n.o,n.s),e=new Kn(n,n.l,e,n.C+1),n.o===null&&(e.I=n.s),t&&(n.j=t.F.concat(n.j)),t=cl(n,e,1e3),e.setTimeout(Math.round(.5*n.xa)+Math.round(.5*n.xa*Math.random())),ao(n.i,e),ds(e,r,t)}function Xn(n,t){n.na&&Qs(n.na,function(e,r){O(t,r,e)}),n.h&&Hu({},function(e,r){O(t,r,e)})}function cl(n,t,e){e=Math.min(n.j.length,e);var r=n.h?it(n.h.Va,n.h,n):null;t:{var i=n.j;let s=-1;for(;;){const o=["count="+e];s==-1?0<e?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let c=0;c<e;c++){let u=i[c].g;const l=i[c].map;if(u-=s,0>u)s=Math.max(0,i[c].g-100),a=!1;else try{gg(l,o,"req"+u+"_")}catch{r&&r(l)}}if(a){r=o.join("&");break t}}}return n=n.j.splice(0,e),t.F=n,r}function ul(n){if(!n.g&&!n.u){n.ba=1;var t=n.Ma;An||bu(),Rn||(An(),Rn=!0),eo.add(t,n),n.A=0}}function ho(n){return n.g||n.u||3<=n.A?!1:(n.ba++,n.u=zn(it(n.Ma,n),dl(n,n.A)),n.A++,!0)}g.Ma=function(){if(this.u=null,ll(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var n=2*this.S;this.l.info("BP detection timer enabled: "+n),this.B=zn(it(this.jb,this),n)}};g.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,ut(10),ci(this),ll(this))};function fo(n){n.B!=null&&(R.clearTimeout(n.B),n.B=null)}function ll(n){n.g=new Kn(n,n.l,"rpc",n.ba),n.o===null&&(n.g.I=n.s),n.g.O=0;var t=Nt(n.wa);O(t,"RID","rpc"),O(t,"SID",n.K),O(t,"AID",n.V),O(t,"CI",n.G?"0":"1"),!n.G&&n.qa&&O(t,"TO",n.qa),O(t,"TYPE","xmlhttp"),Xn(n,t),n.o&&n.s&&uo(t,n.o,n.s),n.L&&n.g.setTimeout(n.L);var e=n.g;n=n.pa,e.L=1,e.v=si(Nt(t)),e.s=null,e.S=!0,Bu(e,n)}g.ib=function(){this.v!=null&&(this.v=null,ci(this),ho(this),ut(19))};function Lr(n){n.v!=null&&(R.clearTimeout(n.v),n.v=null)}function hl(n,t){var e=null;if(n.g==t){Lr(n),fo(n),n.g=null;var r=2}else if(ps(n.i,t))e=t.F,Yu(n.i,t),r=1;else return;if(n.H!=0){if(t.i)if(r==1){e=t.s?t.s.length:0,t=Date.now()-t.G;var i=n.C;r=ei(),Y(r,new Lu(r,e)),ui(n)}else ul(n);else if(i=t.o,i==3||i==0&&0<t.ca||!(r==1&&wg(n,t)||r==2&&ho(n)))switch(e&&0<e.length&&(t=n.i,t.i=t.i.concat(e)),i){case 1:se(n,5);break;case 4:se(n,10);break;case 3:se(n,6);break;default:se(n,2)}}}function dl(n,t){let e=n.ab+Math.floor(Math.random()*n.hb);return n.isActive()||(e*=2),e*t}function se(n,t){if(n.l.info("Error code "+t),t==2){var e=null;n.h&&(e=null);var r=it(n.pb,n);e||(e=new ce("//www.google.com/images/cleardot.gif"),R.location&&R.location.protocol=="http"||Or(e,"https"),si(e)),_g(e.toString(),r)}else ut(2);n.H=0,n.h&&n.h.za(t),fl(n),al(n)}g.pb=function(n){n?(this.l.info("Successfully pinged google.com"),ut(2)):(this.l.info("Failed to ping google.com"),ut(1))};function fl(n){if(n.H=0,n.ma=[],n.h){const t=Zu(n.i);(t.length!=0||n.j.length!=0)&&(Ra(n.ma,t),Ra(n.ma,n.j),n.i.i.length=0,Ks(n.j),n.j.length=0),n.h.ya()}}function pl(n,t,e){var r=e instanceof ce?Nt(e):new ce(e);if(r.g!="")t&&(r.g=t+"."+r.g),Mr(r,r.m);else{var i=R.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new ce(null);r&&Or(s,r),t&&(s.g=t),i&&Mr(s,i),e&&(s.l=e),r=s}return e=n.F,t=n.Da,e&&t&&O(r,e,t),O(r,"VER",n.ra),Xn(n,r),r}function ml(n,t,e){if(t&&!n.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=e&&n.Ha&&!n.va?new U(new Qn({ob:!0})):new U(n.va),t.Oa(n.J),t}g.isActive=function(){return!!this.h&&this.h.isActive(this)};function gl(){}g=gl.prototype;g.Ba=function(){};g.Aa=function(){};g.za=function(){};g.ya=function(){};g.isActive=function(){return!0};g.Va=function(){};function xr(){if(Me&&!(10<=Number(Lm)))throw Error("Environmental error: no available transport.")}xr.prototype.g=function(n,t){return new ft(n,t)};function ft(n,t){K.call(this),this.g=new ol(t),this.l=n,this.h=t&&t.messageUrlParams||null,n=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(n?n["X-Client-Protocol"]="webchannel":n={"X-Client-Protocol":"webchannel"}),this.g.s=n,n=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(n?n["X-WebChannel-Content-Type"]=t.messageContentType:n={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(n?n["X-WebChannel-Client-Profile"]=t.Ca:n={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=n,(n=t&&t.cc)&&!Tn(n)&&(this.g.o=n),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!Tn(t)&&(this.g.F=t,n=this.h,n!==null&&t in n&&(n=this.h,t in n&&delete n[t])),this.j=new Qe(this)}G(ft,K);ft.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var n=this.g,t=this.l,e=this.h||void 0;ut(0),n.Y=t,n.na=e||{},n.G=n.aa,n.I=pl(n,null,n.Y),ui(n)};ft.prototype.close=function(){lo(this.g)};ft.prototype.u=function(n){var t=this.g;if(typeof n=="string"){var e={};e.__data__=n,n=e}else this.v&&(e={},e.__data__=to(n),n=e);t.j.push(new dg(t.fb++,n)),t.H==3&&ui(t)};ft.prototype.N=function(){this.g.h=null,delete this.j,lo(this.g),delete this.g,ft.$.N.call(this)};function _l(n){so.call(this),n.__headers__&&(this.headers=n.__headers__,this.statusCode=n.__status__,delete n.__headers__,delete n.__status__);var t=n.__sm__;if(t){t:{for(const e in t){n=e;break t}n=void 0}(this.i=n)&&(n=this.i,t=t!==null&&n in t?t[n]:void 0),this.data=t}else this.data=n}G(_l,so);function yl(){oo.call(this),this.status=1}G(yl,oo);function Qe(n){this.g=n}G(Qe,gl);Qe.prototype.Ba=function(){Y(this.g,"a")};Qe.prototype.Aa=function(n){Y(this.g,new _l(n))};Qe.prototype.za=function(n){Y(this.g,new yl)};Qe.prototype.ya=function(){Y(this.g,"b")};function Ag(){this.blockSize=-1}function yt(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}G(yt,Ag);yt.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Wi(n,t,e){e||(e=0);var r=Array(16);if(typeof t=="string")for(var i=0;16>i;++i)r[i]=t.charCodeAt(e++)|t.charCodeAt(e++)<<8|t.charCodeAt(e++)<<16|t.charCodeAt(e++)<<24;else for(i=0;16>i;++i)r[i]=t[e++]|t[e++]<<8|t[e++]<<16|t[e++]<<24;t=n.g[0],e=n.g[1],i=n.g[2];var s=n.g[3],o=t+(s^e&(i^s))+r[0]+3614090360&4294967295;t=e+(o<<7&4294967295|o>>>25),o=s+(i^t&(e^i))+r[1]+3905402710&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(e^s&(t^e))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=e+(t^i&(s^t))+r[3]+3250441966&4294967295,e=i+(o<<22&4294967295|o>>>10),o=t+(s^e&(i^s))+r[4]+4118548399&4294967295,t=e+(o<<7&4294967295|o>>>25),o=s+(i^t&(e^i))+r[5]+1200080426&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(e^s&(t^e))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=e+(t^i&(s^t))+r[7]+4249261313&4294967295,e=i+(o<<22&4294967295|o>>>10),o=t+(s^e&(i^s))+r[8]+1770035416&4294967295,t=e+(o<<7&4294967295|o>>>25),o=s+(i^t&(e^i))+r[9]+2336552879&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(e^s&(t^e))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=e+(t^i&(s^t))+r[11]+2304563134&4294967295,e=i+(o<<22&4294967295|o>>>10),o=t+(s^e&(i^s))+r[12]+1804603682&4294967295,t=e+(o<<7&4294967295|o>>>25),o=s+(i^t&(e^i))+r[13]+4254626195&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(e^s&(t^e))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=e+(t^i&(s^t))+r[15]+1236535329&4294967295,e=i+(o<<22&4294967295|o>>>10),o=t+(i^s&(e^i))+r[1]+4129170786&4294967295,t=e+(o<<5&4294967295|o>>>27),o=s+(e^i&(t^e))+r[6]+3225465664&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^e&(s^t))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=e+(s^t&(i^s))+r[0]+3921069994&4294967295,e=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(e^i))+r[5]+3593408605&4294967295,t=e+(o<<5&4294967295|o>>>27),o=s+(e^i&(t^e))+r[10]+38016083&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^e&(s^t))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=e+(s^t&(i^s))+r[4]+3889429448&4294967295,e=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(e^i))+r[9]+568446438&4294967295,t=e+(o<<5&4294967295|o>>>27),o=s+(e^i&(t^e))+r[14]+3275163606&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^e&(s^t))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=e+(s^t&(i^s))+r[8]+1163531501&4294967295,e=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(e^i))+r[13]+2850285829&4294967295,t=e+(o<<5&4294967295|o>>>27),o=s+(e^i&(t^e))+r[2]+4243563512&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^e&(s^t))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=e+(s^t&(i^s))+r[12]+2368359562&4294967295,e=i+(o<<20&4294967295|o>>>12),o=t+(e^i^s)+r[5]+4294588738&4294967295,t=e+(o<<4&4294967295|o>>>28),o=s+(t^e^i)+r[8]+2272392833&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^e)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=e+(i^s^t)+r[14]+4259657740&4294967295,e=i+(o<<23&4294967295|o>>>9),o=t+(e^i^s)+r[1]+2763975236&4294967295,t=e+(o<<4&4294967295|o>>>28),o=s+(t^e^i)+r[4]+1272893353&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^e)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=e+(i^s^t)+r[10]+3200236656&4294967295,e=i+(o<<23&4294967295|o>>>9),o=t+(e^i^s)+r[13]+681279174&4294967295,t=e+(o<<4&4294967295|o>>>28),o=s+(t^e^i)+r[0]+3936430074&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^e)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=e+(i^s^t)+r[6]+76029189&4294967295,e=i+(o<<23&4294967295|o>>>9),o=t+(e^i^s)+r[9]+3654602809&4294967295,t=e+(o<<4&4294967295|o>>>28),o=s+(t^e^i)+r[12]+3873151461&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^e)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=e+(i^s^t)+r[2]+3299628645&4294967295,e=i+(o<<23&4294967295|o>>>9),o=t+(i^(e|~s))+r[0]+4096336452&4294967295,t=e+(o<<6&4294967295|o>>>26),o=s+(e^(t|~i))+r[7]+1126891415&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~e))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=e+(s^(i|~t))+r[5]+4237533241&4294967295,e=i+(o<<21&4294967295|o>>>11),o=t+(i^(e|~s))+r[12]+1700485571&4294967295,t=e+(o<<6&4294967295|o>>>26),o=s+(e^(t|~i))+r[3]+2399980690&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~e))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=e+(s^(i|~t))+r[1]+2240044497&4294967295,e=i+(o<<21&4294967295|o>>>11),o=t+(i^(e|~s))+r[8]+1873313359&4294967295,t=e+(o<<6&4294967295|o>>>26),o=s+(e^(t|~i))+r[15]+4264355552&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~e))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=e+(s^(i|~t))+r[13]+1309151649&4294967295,e=i+(o<<21&4294967295|o>>>11),o=t+(i^(e|~s))+r[4]+4149444226&4294967295,t=e+(o<<6&4294967295|o>>>26),o=s+(e^(t|~i))+r[11]+3174756917&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~e))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=e+(s^(i|~t))+r[9]+3951481745&4294967295,n.g[0]=n.g[0]+t&4294967295,n.g[1]=n.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,n.g[2]=n.g[2]+i&4294967295,n.g[3]=n.g[3]+s&4294967295}yt.prototype.j=function(n,t){t===void 0&&(t=n.length);for(var e=t-this.blockSize,r=this.m,i=this.h,s=0;s<t;){if(i==0)for(;s<=e;)Wi(this,n,s),s+=this.blockSize;if(typeof n=="string"){for(;s<t;)if(r[i++]=n.charCodeAt(s++),i==this.blockSize){Wi(this,r),i=0;break}}else for(;s<t;)if(r[i++]=n[s++],i==this.blockSize){Wi(this,r),i=0;break}}this.h=i,this.i+=t};yt.prototype.l=function(){var n=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);n[0]=128;for(var t=1;t<n.length-8;++t)n[t]=0;var e=8*this.i;for(t=n.length-8;t<n.length;++t)n[t]=e&255,e/=256;for(this.j(n),n=Array(16),t=e=0;4>t;++t)for(var r=0;32>r;r+=8)n[e++]=this.g[t]>>>r&255;return n};function N(n,t){this.h=t;for(var e=[],r=!0,i=n.length-1;0<=i;i--){var s=n[i]|0;r&&s==t||(e[i]=s,r=!1)}this.g=e}var Rg={};function po(n){return-128<=n&&128>n?Nm(n,function(t){return new N([t|0],0>t?-1:0)}):new N([n|0],0>n?-1:0)}function Tt(n){if(isNaN(n)||!isFinite(n))return ke;if(0>n)return X(Tt(-n));for(var t=[],e=1,r=0;n>=e;r++)t[r]=n/e|0,e*=ms;return new N(t,0)}function El(n,t){if(n.length==0)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(n.charAt(0)=="-")return X(El(n.substring(1),t));if(0<=n.indexOf("-"))throw Error('number format error: interior "-" character');for(var e=Tt(Math.pow(t,8)),r=ke,i=0;i<n.length;i+=8){var s=Math.min(8,n.length-i),o=parseInt(n.substring(i,i+s),t);8>s?(s=Tt(Math.pow(t,s)),r=r.R(s).add(Tt(o))):(r=r.R(e),r=r.add(Tt(o)))}return r}var ms=4294967296,ke=po(0),gs=po(1),La=po(16777216);g=N.prototype;g.ea=function(){if(mt(this))return-X(this).ea();for(var n=0,t=1,e=0;e<this.g.length;e++){var r=this.D(e);n+=(0<=r?r:ms+r)*t,t*=ms}return n};g.toString=function(n){if(n=n||10,2>n||36<n)throw Error("radix out of range: "+n);if(Dt(this))return"0";if(mt(this))return"-"+X(this).toString(n);for(var t=Tt(Math.pow(n,6)),e=this,r="";;){var i=Ur(e,t).g;e=Fr(e,i.R(t));var s=((0<e.g.length?e.g[0]:e.h)>>>0).toString(n);if(e=i,Dt(e))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};g.D=function(n){return 0>n?0:n<this.g.length?this.g[n]:this.h};function Dt(n){if(n.h!=0)return!1;for(var t=0;t<n.g.length;t++)if(n.g[t]!=0)return!1;return!0}function mt(n){return n.h==-1}g.X=function(n){return n=Fr(this,n),mt(n)?-1:Dt(n)?0:1};function X(n){for(var t=n.g.length,e=[],r=0;r<t;r++)e[r]=~n.g[r];return new N(e,~n.h).add(gs)}g.abs=function(){return mt(this)?X(this):this};g.add=function(n){for(var t=Math.max(this.g.length,n.g.length),e=[],r=0,i=0;i<=t;i++){var s=r+(this.D(i)&65535)+(n.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(n.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,e[i]=o<<16|s}return new N(e,e[e.length-1]&-2147483648?-1:0)};function Fr(n,t){return n.add(X(t))}g.R=function(n){if(Dt(this)||Dt(n))return ke;if(mt(this))return mt(n)?X(this).R(X(n)):X(X(this).R(n));if(mt(n))return X(this.R(X(n)));if(0>this.X(La)&&0>n.X(La))return Tt(this.ea()*n.ea());for(var t=this.g.length+n.g.length,e=[],r=0;r<2*t;r++)e[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<n.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=n.D(i)>>>16,c=n.D(i)&65535;e[2*r+2*i]+=o*c,lr(e,2*r+2*i),e[2*r+2*i+1]+=s*c,lr(e,2*r+2*i+1),e[2*r+2*i+1]+=o*a,lr(e,2*r+2*i+1),e[2*r+2*i+2]+=s*a,lr(e,2*r+2*i+2)}for(r=0;r<t;r++)e[r]=e[2*r+1]<<16|e[2*r];for(r=t;r<2*t;r++)e[r]=0;return new N(e,0)};function lr(n,t){for(;(n[t]&65535)!=n[t];)n[t+1]+=n[t]>>>16,n[t]&=65535,t++}function sn(n,t){this.g=n,this.h=t}function Ur(n,t){if(Dt(t))throw Error("division by zero");if(Dt(n))return new sn(ke,ke);if(mt(n))return t=Ur(X(n),t),new sn(X(t.g),X(t.h));if(mt(t))return t=Ur(n,X(t)),new sn(X(t.g),t.h);if(30<n.g.length){if(mt(n)||mt(t))throw Error("slowDivide_ only works with positive integers.");for(var e=gs,r=t;0>=r.X(n);)e=xa(e),r=xa(r);var i=we(e,1),s=we(r,1);for(r=we(r,2),e=we(e,2);!Dt(r);){var o=s.add(r);0>=o.X(n)&&(i=i.add(e),s=o),r=we(r,1),e=we(e,1)}return t=Fr(n,i.R(t)),new sn(i,t)}for(i=ke;0<=n.X(t);){for(e=Math.max(1,Math.floor(n.ea()/t.ea())),r=Math.ceil(Math.log(e)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=Tt(e),o=s.R(t);mt(o)||0<o.X(n);)e-=r,s=Tt(e),o=s.R(t);Dt(s)&&(s=gs),i=i.add(s),n=Fr(n,o)}return new sn(i,n)}g.gb=function(n){return Ur(this,n).h};g.and=function(n){for(var t=Math.max(this.g.length,n.g.length),e=[],r=0;r<t;r++)e[r]=this.D(r)&n.D(r);return new N(e,this.h&n.h)};g.or=function(n){for(var t=Math.max(this.g.length,n.g.length),e=[],r=0;r<t;r++)e[r]=this.D(r)|n.D(r);return new N(e,this.h|n.h)};g.xor=function(n){for(var t=Math.max(this.g.length,n.g.length),e=[],r=0;r<t;r++)e[r]=this.D(r)^n.D(r);return new N(e,this.h^n.h)};function xa(n){for(var t=n.g.length+1,e=[],r=0;r<t;r++)e[r]=n.D(r)<<1|n.D(r-1)>>>31;return new N(e,n.h)}function we(n,t){var e=t>>5;t%=32;for(var r=n.g.length-e,i=[],s=0;s<r;s++)i[s]=0<t?n.D(s+e)>>>t|n.D(s+e+1)<<32-t:n.D(s+e);return new N(i,n.h)}xr.prototype.createWebChannel=xr.prototype.g;ft.prototype.send=ft.prototype.u;ft.prototype.open=ft.prototype.m;ft.prototype.close=ft.prototype.close;ni.NO_ERROR=0;ni.TIMEOUT=8;ni.HTTP_ERROR=6;xu.COMPLETE="complete";Fu.EventType=Wn;Wn.OPEN="a";Wn.CLOSE="b";Wn.ERROR="c";Wn.MESSAGE="d";K.prototype.listen=K.prototype.O;U.prototype.listenOnce=U.prototype.P;U.prototype.getLastError=U.prototype.Sa;U.prototype.getLastErrorCode=U.prototype.Ia;U.prototype.getStatus=U.prototype.da;U.prototype.getResponseJson=U.prototype.Wa;U.prototype.getResponseText=U.prototype.ja;U.prototype.send=U.prototype.ha;U.prototype.setWithCredentials=U.prototype.Oa;yt.prototype.digest=yt.prototype.l;yt.prototype.reset=yt.prototype.reset;yt.prototype.update=yt.prototype.j;N.prototype.add=N.prototype.add;N.prototype.multiply=N.prototype.R;N.prototype.modulo=N.prototype.gb;N.prototype.compare=N.prototype.X;N.prototype.toNumber=N.prototype.ea;N.prototype.toString=N.prototype.toString;N.prototype.getBits=N.prototype.D;N.fromNumber=Tt;N.fromString=El;var Pg=function(){return new xr},Sg=function(){return ei()},Ki=ni,Cg=xu,kg=ye,Fa={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},bg=Qn,hr=Fu,Dg=U,Vg=yt,be=N;const Ua="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}et.UNAUTHENTICATED=new et(null),et.GOOGLE_CREDENTIALS=new et("google-credentials-uid"),et.FIRST_PARTY=new et("first-party-uid"),et.MOCK_USER=new et("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Je="10.1.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pe=new Ns("@firebase/firestore");function Ba(){return pe.logLevel}function y(n,...t){if(pe.logLevel<=b.DEBUG){const e=t.map(mo);pe.debug(`Firestore (${Je}): ${n}`,...e)}}function Ot(n,...t){if(pe.logLevel<=b.ERROR){const e=t.map(mo);pe.error(`Firestore (${Je}): ${n}`,...e)}}function Le(n,...t){if(pe.logLevel<=b.WARN){const e=t.map(mo);pe.warn(`Firestore (${Je}): ${n}`,...e)}}function mo(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(e){return JSON.stringify(e)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A(n="Unexpected state"){const t=`FIRESTORE (${Je}) INTERNAL ASSERTION FAILED: `+n;throw Ot(t),new Error(t)}function L(n,t){n||A()}function S(n,t){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class _ extends xt{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vl{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Ng{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(et.UNAUTHENTICATED))}shutdown(){}}class Og{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class Mg{constructor(t){this.t=t,this.currentUser=et.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let r=this.i;const i=c=>this.i!==r?(r=this.i,e(c)):Promise.resolve();let s=new ue;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new ue,t.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=s;t.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},a=c=>{y("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(y("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new ue)}},0),o()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(r=>this.i!==t?(y("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(L(typeof r.accessToken=="string"),new vl(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return L(t===null||typeof t=="string"),new et(t)}}class Lg{constructor(t,e,r){this.l=t,this.h=e,this.P=r,this.type="FirstParty",this.user=et.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class xg{constructor(t,e,r){this.l=t,this.h=e,this.P=r}getToken(){return Promise.resolve(new Lg(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(et.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Fg{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Ug{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){const r=s=>{s.error!=null&&y("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,y("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?e(s.token):Promise.resolve()};this.o=s=>{t.enqueueRetryable(()=>r(s))};const i=s=>{y("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):y("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(L(typeof e.token=="string"),this.R=e.token,new Fg(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bg(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Il{static V(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const i=Bg(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<e&&(r+=t.charAt(i[s]%t.length))}return r}}function V(n,t){return n<t?-1:n>t?1:0}function xe(n,t,e){return n.length===t.length&&n.every((r,i)=>e(r,t[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new _(f.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new _(f.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new _(f.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new _(f.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return H.fromMillis(Date.now())}static fromDate(t){return H.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*e));return new H(e,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?V(this.nanoseconds,t.nanoseconds):V(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{constructor(t){this.timestamp=t}static fromTimestamp(t){return new P(t)}static min(){return new P(new H(0,0))}static max(){return new P(new H(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn{constructor(t,e,r){e===void 0?e=0:e>t.length&&A(),r===void 0?r=t.length-e:r>t.length-e&&A(),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return bn.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof bn?t.forEach(r=>{e.push(r)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let i=0;i<r;i++){const s=t.get(i),o=e.get(i);if(s<o)return-1;if(s>o)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class M extends bn{construct(t,e,r){return new M(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new _(f.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter(i=>i.length>0))}return new M(e)}static emptyPath(){return new M([])}}const qg=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class rt extends bn{construct(t,e,r){return new rt(t,e,r)}static isValidIdentifier(t){return qg.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),rt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new rt(["__name__"])}static fromServerFormat(t){const e=[];let r="",i=0;const s=()=>{if(r.length===0)throw new _(f.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let o=!1;for(;i<t.length;){const a=t[i];if(a==="\\"){if(i+1===t.length)throw new _(f.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const c=t[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new _(f.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new _(f.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new rt(e)}static emptyPath(){return new rt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v{constructor(t){this.path=t}static fromPath(t){return new v(M.fromString(t))}static fromName(t){return new v(M.fromString(t).popFirst(5))}static empty(){return new v(M.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&M.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return M.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new v(new M(t.slice()))}}function $g(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=P.fromTimestamp(r===1e9?new H(e+1,0):new H(e,r));return new Gt(i,v.empty(),t)}function jg(n){return new Gt(n.readTime,n.key,-1)}class Gt{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new Gt(P.min(),v.empty(),-1)}static max(){return new Gt(P.max(),v.empty(),-1)}}function Hg(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=v.comparator(n.documentKey,t.documentKey),e!==0?e:V(n.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zg="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Wg{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yn(n){if(n.code!==f.FAILED_PRECONDITION||n.message!==zg)throw n;y("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&A(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new m((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(t,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(e,s).next(r,i)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof m?e:m.resolve(e)}catch(e){return m.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):m.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):m.reject(e)}static resolve(t){return new m((e,r)=>{e(t)})}static reject(t){return new m((e,r)=>{r(t)})}static waitFor(t){return new m((e,r)=>{let i=0,s=0,o=!1;t.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&e()},c=>r(c))}),o=!0,s===i&&e()})}static or(t){let e=m.resolve(!1);for(const r of t)e=e.next(i=>i?m.resolve(i):r());return e}static forEach(t,e){const r=[];return t.forEach((i,s)=>{r.push(e.call(this,i,s))}),this.waitFor(r)}static mapArray(t,e){return new m((r,i)=>{const s=t.length,o=new Array(s);let a=0;for(let c=0;c<s;c++){const u=c;e(t[u]).next(l=>{o[u]=l,++a,a===s&&r(o)},l=>i(l))}})}static doWhile(t,e){return new m((r,i)=>{const s=()=>{t()===!0?e().next(()=>{s()},i):r()};s()})}}function Zn(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.oe(r),this._e=r=>e.writeSequenceNumber(r))}oe(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this._e&&this._e(t),t}}go.ae=-1;function li(n){return n==null}function Br(n){return n===0&&1/n==-1/0}function Kg(n){return typeof n=="number"&&Number.isInteger(n)&&!Br(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qa(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function Ee(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function Tl(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x{constructor(t,e){this.comparator=t,this.root=e||J.EMPTY}insert(t,e){return new x(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,J.BLACK,null,null))}remove(t){return new x(this.comparator,this.root.remove(t,this.comparator).copy(null,null,J.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(t,r.key);if(i===0)return e+r.left.size;i<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,r)=>(t(e,r),!1))}toString(){const t=[];return this.inorderTraversal((e,r)=>(t.push(`${e}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new dr(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new dr(this.root,t,this.comparator,!1)}getReverseIterator(){return new dr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new dr(this.root,t,this.comparator,!0)}}class dr{constructor(t,e,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=e?r(t.key,e):1,e&&i&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(s===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class J{constructor(t,e,r,i,s){this.key=t,this.value=e,this.color=r??J.RED,this.left=i??J.EMPTY,this.right=s??J.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,i,s){return new J(t??this.key,e??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let i=this;const s=r(t,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(t,e,r),null):s===0?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return J.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),e(t,i.key)===0){if(i.right.isEmpty())return J.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,J.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,J.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw A();const t=this.left.check();if(t!==this.right.check())throw A();return t+(this.isRed()?0:1)}}J.EMPTY=null,J.RED=!0,J.BLACK=!1;J.EMPTY=new class{constructor(){this.size=0}get key(){throw A()}get value(){throw A()}get color(){throw A()}get left(){throw A()}get right(){throw A()}copy(t,e,r,i,s){return this}insert(t,e,r){return new J(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(t){this.comparator=t,this.data=new x(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,r)=>(t(e),!1))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new $a(this.data.getIterator())}getIteratorFrom(t){return new $a(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(r=>{e=e.add(r)}),e}isEqual(t){if(!(t instanceof ot)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const i=e.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new ot(this.comparator);return e.data=t,e}}class $a{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(t){this.fields=t,t.sort(rt.comparator)}static empty(){return new dt([])}unionWith(t){let e=new ot(rt.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new dt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return xe(this.fields,t.fields,(e,r)=>e.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wl extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new wl("Invalid base64 string: "+s):s}}(t);return new ct(e)}static fromUint8Array(t){const e=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(t);return new ct(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const r=new Uint8Array(e.length);for(let i=0;i<e.length;i++)r[i]=e.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return V(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}ct.EMPTY_BYTE_STRING=new ct("");const Gg=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Qt(n){if(L(!!n),typeof n=="string"){let t=0;const e=Gg.exec(n);if(L(!!e),e[1]){let i=e[1];i=(i+"000000000").substr(0,9),t=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:$(n.seconds),nanos:$(n.nanos)}}function $(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function me(n){return typeof n=="string"?ct.fromBase64String(n):ct.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _o(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function yo(n){const t=n.mapValue.fields.__previous_value__;return _o(t)?yo(t):t}function Dn(n){const t=Qt(n.mapValue.fields.__local_write_time__.timestampValue);return new H(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qg{constructor(t,e,r,i,s,o,a,c,u){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=u}}class Vn{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new Vn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Vn&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fr={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ge(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?_o(n)?4:Jg(n)?9007199254740991:10:A()}function St(n,t){if(n===t)return!0;const e=ge(n);if(e!==ge(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return Dn(n).isEqual(Dn(t));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Qt(i.timestampValue),a=Qt(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(i,s){return me(i.bytesValue).isEqual(me(s.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(i,s){return $(i.geoPointValue.latitude)===$(s.geoPointValue.latitude)&&$(i.geoPointValue.longitude)===$(s.geoPointValue.longitude)}(n,t);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return $(i.integerValue)===$(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=$(i.doubleValue),a=$(s.doubleValue);return o===a?Br(o)===Br(a):isNaN(o)&&isNaN(a)}return!1}(n,t);case 9:return xe(n.arrayValue.values||[],t.arrayValue.values||[],St);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(qa(o)!==qa(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!St(o[c],a[c])))return!1;return!0}(n,t);default:return A()}}function Nn(n,t){return(n.values||[]).find(e=>St(e,t))!==void 0}function Fe(n,t){if(n===t)return 0;const e=ge(n),r=ge(t);if(e!==r)return V(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return V(n.booleanValue,t.booleanValue);case 2:return function(s,o){const a=$(s.integerValue||s.doubleValue),c=$(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(n,t);case 3:return ja(n.timestampValue,t.timestampValue);case 4:return ja(Dn(n),Dn(t));case 5:return V(n.stringValue,t.stringValue);case 6:return function(s,o){const a=me(s),c=me(o);return a.compareTo(c)}(n.bytesValue,t.bytesValue);case 7:return function(s,o){const a=s.split("/"),c=o.split("/");for(let u=0;u<a.length&&u<c.length;u++){const l=V(a[u],c[u]);if(l!==0)return l}return V(a.length,c.length)}(n.referenceValue,t.referenceValue);case 8:return function(s,o){const a=V($(s.latitude),$(o.latitude));return a!==0?a:V($(s.longitude),$(o.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return function(s,o){const a=s.values||[],c=o.values||[];for(let u=0;u<a.length&&u<c.length;++u){const l=Fe(a[u],c[u]);if(l)return l}return V(a.length,c.length)}(n.arrayValue,t.arrayValue);case 10:return function(s,o){if(s===fr.mapValue&&o===fr.mapValue)return 0;if(s===fr.mapValue)return 1;if(o===fr.mapValue)return-1;const a=s.fields||{},c=Object.keys(a),u=o.fields||{},l=Object.keys(u);c.sort(),l.sort();for(let h=0;h<c.length&&h<l.length;++h){const d=V(c[h],l[h]);if(d!==0)return d;const p=Fe(a[c[h]],u[l[h]]);if(p!==0)return p}return V(c.length,l.length)}(n.mapValue,t.mapValue);default:throw A()}}function ja(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return V(n,t);const e=Qt(n),r=Qt(t),i=V(e.seconds,r.seconds);return i!==0?i:V(e.nanos,r.nanos)}function Ue(n){return _s(n)}function _s(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const r=Qt(e);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return me(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return v.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let r="[",i=!0;for(const s of e.values||[])i?i=!1:r+=",",r+=_s(s);return r+"]"}(n.arrayValue):"mapValue"in n?function(e){const r=Object.keys(e.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${_s(e.fields[o])}`;return i+"}"}(n.mapValue):A()}function Ha(n,t){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${t.path.canonicalString()}`}}function ys(n){return!!n&&"integerValue"in n}function Eo(n){return!!n&&"arrayValue"in n}function za(n){return!!n&&"nullValue"in n}function Wa(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function vr(n){return!!n&&"mapValue"in n}function mn(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return Ee(n.mapValue.fields,(e,r)=>t.mapValue.fields[e]=mn(r)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=mn(n.arrayValue.values[e]);return t}return Object.assign({},n)}function Jg(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(t){this.value=t}static empty(){return new lt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!vr(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=mn(e)}setAll(t){let e=rt.emptyPath(),r={},i=[];t.forEach((o,a)=>{if(!e.isImmediateParentOf(a)){const c=this.getFieldsMap(e);this.applyChanges(c,r,i),r={},i=[],e=a.popLast()}o?r[a.lastSegment()]=mn(o):i.push(a.lastSegment())});const s=this.getFieldsMap(e);this.applyChanges(s,r,i)}delete(t){const e=this.field(t.popLast());vr(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return St(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let i=e.mapValue.fields[t.get(r)];vr(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,r){Ee(e,(i,s)=>t[i]=s);for(const i of r)delete t[i]}clone(){return new lt(mn(this.value))}}function Al(n){const t=[];return Ee(n.fields,(e,r)=>{const i=new rt([e]);if(vr(r)){const s=Al(r.mapValue).fields;if(s.length===0)t.push(i);else for(const o of s)t.push(i.child(o))}else t.push(i)}),new dt(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(t,e,r,i,s,o,a){this.key=t,this.documentType=e,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(t){return new nt(t,0,P.min(),P.min(),P.min(),lt.empty(),0)}static newFoundDocument(t,e,r,i){return new nt(t,1,e,P.min(),r,i,0)}static newNoDocument(t,e){return new nt(t,2,e,P.min(),P.min(),lt.empty(),0)}static newUnknownDocument(t,e){return new nt(t,3,e,P.min(),P.min(),lt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(P.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=lt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=lt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=P.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof nt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new nt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(t,e){this.position=t,this.inclusive=e}}function Ka(n,t,e){let r=0;for(let i=0;i<n.position.length;i++){const s=t[i],o=n.position[i];if(s.field.isKeyField()?r=v.comparator(v.fromName(o.referenceValue),e.key):r=Fe(o,e.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Ga(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!St(n.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(t,e="asc"){this.field=t,this.dir=e}}function Xg(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl{}class j extends Rl{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new Zg(t,e,r):e==="array-contains"?new n_(t,r):e==="in"?new r_(t,r):e==="not-in"?new i_(t,r):e==="array-contains-any"?new s_(t,r):new j(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new t_(t,r):new e_(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(Fe(e,this.value)):e!==null&&ge(this.value)===ge(e)&&this.matchesComparison(Fe(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return A()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Et extends Rl{constructor(t,e){super(),this.filters=t,this.op=e,this.ce=null}static create(t,e){return new Et(t,e)}matches(t){return Pl(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const t=this.le(e=>e.isInequality());return t!==null?t.field:null}le(t){for(const e of this.getFlattenedFilters())if(t(e))return e;return null}}function Pl(n){return n.op==="and"}function Sl(n){return Yg(n)&&Pl(n)}function Yg(n){for(const t of n.filters)if(t instanceof Et)return!1;return!0}function Es(n){if(n instanceof j)return n.field.canonicalString()+n.op.toString()+Ue(n.value);if(Sl(n))return n.filters.map(t=>Es(t)).join(",");{const t=n.filters.map(e=>Es(e)).join(",");return`${n.op}(${t})`}}function Cl(n,t){return n instanceof j?function(r,i){return i instanceof j&&r.op===i.op&&r.field.isEqual(i.field)&&St(r.value,i.value)}(n,t):n instanceof Et?function(r,i){return i instanceof Et&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&Cl(o,i.filters[a]),!0):!1}(n,t):void A()}function kl(n){return n instanceof j?function(e){return`${e.field.canonicalString()} ${e.op} ${Ue(e.value)}`}(n):n instanceof Et?function(e){return e.op.toString()+" {"+e.getFilters().map(kl).join(" ,")+"}"}(n):"Filter"}class Zg extends j{constructor(t,e,r){super(t,e,r),this.key=v.fromName(r.referenceValue)}matches(t){const e=v.comparator(t.key,this.key);return this.matchesComparison(e)}}class t_ extends j{constructor(t,e){super(t,"in",e),this.keys=bl("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class e_ extends j{constructor(t,e){super(t,"not-in",e),this.keys=bl("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function bl(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(r=>v.fromName(r.referenceValue))}class n_ extends j{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Eo(e)&&Nn(e.arrayValue,this.value)}}class r_ extends j{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&Nn(this.value.arrayValue,e)}}class i_ extends j{constructor(t,e){super(t,"not-in",e)}matches(t){if(Nn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!Nn(this.value.arrayValue,e)}}class s_ extends j{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Eo(e)||!e.arrayValue.values)&&e.arrayValue.values.some(r=>Nn(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o_{constructor(t,e=null,r=[],i=[],s=null,o=null,a=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.he=null}}function Qa(n,t=null,e=[],r=[],i=null,s=null,o=null){return new o_(n,t,e,r,i,s,o)}function vo(n){const t=S(n);if(t.he===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(r=>Es(r)).join(","),e+="|ob:",e+=t.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),li(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(r=>Ue(r)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(r=>Ue(r)).join(",")),t.he=e}return t.he}function Io(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!Xg(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!Cl(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!Ga(n.startAt,t.startAt)&&Ga(n.endAt,t.endAt)}function vs(n){return v.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(t,e=null,r=[],i=[],s=null,o="F",a=null,c=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=c,this.Pe=null,this.Ie=null,this.startAt,this.endAt}}function a_(n,t,e,r,i,s,o,a){return new Xe(n,t,e,r,i,s,o,a)}function To(n){return new Xe(n)}function Ja(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function wo(n){return n.explicitOrderBy.length>0?n.explicitOrderBy[0].field:null}function hi(n){for(const t of n.filters){const e=t.getFirstInequalityField();if(e!==null)return e}return null}function Dl(n){return n.collectionGroup!==null}function Ve(n){const t=S(n);if(t.Pe===null){t.Pe=[];const e=hi(t),r=wo(t);if(e!==null&&r===null)e.isKeyField()||t.Pe.push(new De(e)),t.Pe.push(new De(rt.keyField(),"asc"));else{let i=!1;for(const s of t.explicitOrderBy)t.Pe.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.Pe.push(new De(rt.keyField(),s))}}}return t.Pe}function Mt(n){const t=S(n);if(!t.Ie)if(t.limitType==="F")t.Ie=Qa(t.path,t.collectionGroup,Ve(t),t.filters,t.limit,t.startAt,t.endAt);else{const e=[];for(const s of Ve(t)){const o=s.dir==="desc"?"asc":"desc";e.push(new De(s.field,o))}const r=t.endAt?new qr(t.endAt.position,t.endAt.inclusive):null,i=t.startAt?new qr(t.startAt.position,t.startAt.inclusive):null;t.Ie=Qa(t.path,t.collectionGroup,e,t.filters,t.limit,r,i)}return t.Ie}function Is(n,t){t.getFirstInequalityField(),hi(n);const e=n.filters.concat([t]);return new Xe(n.path,n.collectionGroup,n.explicitOrderBy.slice(),e,n.limit,n.limitType,n.startAt,n.endAt)}function Ts(n,t,e){return new Xe(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function di(n,t){return Io(Mt(n),Mt(t))&&n.limitType===t.limitType}function Vl(n){return`${vo(Mt(n))}|lt:${n.limitType}`}function ws(n){return`Query(target=${function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map(i=>kl(i)).join(", ")}]`),li(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(i=>Ue(i)).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(i=>Ue(i)).join(",")),`Target(${r})`}(Mt(n))}; limitType=${n.limitType})`}function fi(n,t){return t.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):v.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(n,t)&&function(r,i){for(const s of Ve(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(n,t)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(n,t)&&function(r,i){return!(r.startAt&&!function(o,a,c){const u=Ka(o,a,c);return o.inclusive?u<=0:u<0}(r.startAt,Ve(r),i)||r.endAt&&!function(o,a,c){const u=Ka(o,a,c);return o.inclusive?u>=0:u>0}(r.endAt,Ve(r),i))}(n,t)}function c_(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Nl(n){return(t,e)=>{let r=!1;for(const i of Ve(n)){const s=u_(i,t,e);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function u_(n,t,e){const r=n.field.isKeyField()?v.comparator(t.key,e.key):function(s,o,a){const c=o.data.field(s),u=a.data.field(s);return c!==null&&u!==null?Fe(c,u):A()}(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return A()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,t))return s}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),i=this.inner[r];if(i===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],t))return void(i[s]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return r.length===1?delete this.inner[e]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(t){Ee(this.inner,(e,r)=>{for(const[i,s]of r)t(i,s)})}isEmpty(){return Tl(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l_=new x(v.comparator);function Lt(){return l_}const Ol=new x(v.comparator);function ln(...n){let t=Ol;for(const e of n)t=t.insert(e.key,e);return t}function Ml(n){let t=Ol;return n.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function oe(){return gn()}function Ll(){return gn()}function gn(){return new Ye(n=>n.toString(),(n,t)=>n.isEqual(t))}const h_=new x(v.comparator),d_=new ot(v.comparator);function C(...n){let t=d_;for(const e of n)t=t.add(e);return t}const f_=new ot(V);function p_(){return f_}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xl(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Br(t)?"-0":t}}function Fl(n){return{integerValue:""+n}}function m_(n,t){return Kg(t)?Fl(t):xl(n,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(){this._=void 0}}function g_(n,t,e){return n instanceof On?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&_o(s)&&(s=yo(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(e,t):n instanceof Mn?Bl(n,t):n instanceof Ln?ql(n,t):function(i,s){const o=Ul(i,s),a=Xa(o)+Xa(i.Te);return ys(o)&&ys(i.Te)?Fl(a):xl(i.serializer,a)}(n,t)}function __(n,t,e){return n instanceof Mn?Bl(n,t):n instanceof Ln?ql(n,t):e}function Ul(n,t){return n instanceof $r?function(r){return ys(r)||function(s){return!!s&&"doubleValue"in s}(r)}(t)?t:{integerValue:0}:null}class On extends pi{}class Mn extends pi{constructor(t){super(),this.elements=t}}function Bl(n,t){const e=$l(t);for(const r of n.elements)e.some(i=>St(i,r))||e.push(r);return{arrayValue:{values:e}}}class Ln extends pi{constructor(t){super(),this.elements=t}}function ql(n,t){let e=$l(t);for(const r of n.elements)e=e.filter(i=>!St(i,r));return{arrayValue:{values:e}}}class $r extends pi{constructor(t,e){super(),this.serializer=t,this.Te=e}}function Xa(n){return $(n.integerValue||n.doubleValue)}function $l(n){return Eo(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y_{constructor(t,e){this.field=t,this.transform=e}}function E_(n,t){return n.field.isEqual(t.field)&&function(r,i){return r instanceof Mn&&i instanceof Mn||r instanceof Ln&&i instanceof Ln?xe(r.elements,i.elements,St):r instanceof $r&&i instanceof $r?St(r.Te,i.Te):r instanceof On&&i instanceof On}(n.transform,t.transform)}class v_{constructor(t,e){this.version=t,this.transformResults=e}}class _t{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new _t}static exists(t){return new _t(void 0,t)}static updateTime(t){return new _t(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Ir(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class mi{}function jl(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new Ao(n.key,_t.none()):new tr(n.key,n.data,_t.none());{const e=n.data,r=lt.empty();let i=new ot(rt.comparator);for(let s of t.fields)if(!i.has(s)){let o=e.field(s);o===null&&s.length>1&&(s=s.popLast(),o=e.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Zt(n.key,r,new dt(i.toArray()),_t.none())}}function I_(n,t,e){n instanceof tr?function(i,s,o){const a=i.value.clone(),c=Za(i.fieldTransforms,s,o.transformResults);a.setAll(c),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(n,t,e):n instanceof Zt?function(i,s,o){if(!Ir(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=Za(i.fieldTransforms,s,o.transformResults),c=s.data;c.setAll(Hl(i)),c.setAll(a),s.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(n,t,e):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,t,e)}function _n(n,t,e,r){return n instanceof tr?function(s,o,a,c){if(!Ir(s.precondition,o))return a;const u=s.value.clone(),l=tc(s.fieldTransforms,c,o);return u.setAll(l),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(n,t,e,r):n instanceof Zt?function(s,o,a,c){if(!Ir(s.precondition,o))return a;const u=tc(s.fieldTransforms,c,o),l=o.data;return l.setAll(Hl(s)),l.setAll(u),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(h=>h.field))}(n,t,e,r):function(s,o,a){return Ir(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(n,t,e)}function T_(n,t){let e=null;for(const r of n.fieldTransforms){const i=t.data.field(r.field),s=Ul(r.transform,i||null);s!=null&&(e===null&&(e=lt.empty()),e.set(r.field,s))}return e||null}function Ya(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&xe(r,i,(s,o)=>E_(s,o))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class tr extends mi{constructor(t,e,r,i=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Zt extends mi{constructor(t,e,r,i,s=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Hl(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}}),t}function Za(n,t,e){const r=new Map;L(n.length===e.length);for(let i=0;i<e.length;i++){const s=n[i],o=s.transform,a=t.data.field(s.field);r.set(s.field,__(o,a,e[i]))}return r}function tc(n,t,e){const r=new Map;for(const i of n){const s=i.transform,o=e.data.field(i.field);r.set(i.field,g_(s,o,t))}return r}class Ao extends mi{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class w_ extends mi{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A_{constructor(t,e,r,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(t.key)&&I_(s,t,r[i])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=_n(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=_n(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=Ll();return this.mutations.forEach(i=>{const s=t.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=e.has(i.key)?null:a;const c=jl(o,a);c!==null&&r.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(P.min())}),r}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),C())}isEqual(t){return this.batchId===t.batchId&&xe(this.mutations,t.mutations,(e,r)=>Ya(e,r))&&xe(this.baseMutations,t.baseMutations,(e,r)=>Ya(e,r))}}class Ro{constructor(t,e,r,i){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=i}static from(t,e,r){L(t.mutations.length===r.length);let i=function(){return h_}();const s=t.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Ro(t,e,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R_{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P_{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var q,k;function S_(n){switch(n){default:return A();case f.CANCELLED:case f.UNKNOWN:case f.DEADLINE_EXCEEDED:case f.RESOURCE_EXHAUSTED:case f.INTERNAL:case f.UNAVAILABLE:case f.UNAUTHENTICATED:return!1;case f.INVALID_ARGUMENT:case f.NOT_FOUND:case f.ALREADY_EXISTS:case f.PERMISSION_DENIED:case f.FAILED_PRECONDITION:case f.ABORTED:case f.OUT_OF_RANGE:case f.UNIMPLEMENTED:case f.DATA_LOSS:return!0}}function zl(n){if(n===void 0)return Ot("GRPC error has no .code"),f.UNKNOWN;switch(n){case q.OK:return f.OK;case q.CANCELLED:return f.CANCELLED;case q.UNKNOWN:return f.UNKNOWN;case q.DEADLINE_EXCEEDED:return f.DEADLINE_EXCEEDED;case q.RESOURCE_EXHAUSTED:return f.RESOURCE_EXHAUSTED;case q.INTERNAL:return f.INTERNAL;case q.UNAVAILABLE:return f.UNAVAILABLE;case q.UNAUTHENTICATED:return f.UNAUTHENTICATED;case q.INVALID_ARGUMENT:return f.INVALID_ARGUMENT;case q.NOT_FOUND:return f.NOT_FOUND;case q.ALREADY_EXISTS:return f.ALREADY_EXISTS;case q.PERMISSION_DENIED:return f.PERMISSION_DENIED;case q.FAILED_PRECONDITION:return f.FAILED_PRECONDITION;case q.ABORTED:return f.ABORTED;case q.OUT_OF_RANGE:return f.OUT_OF_RANGE;case q.UNIMPLEMENTED:return f.UNIMPLEMENTED;case q.DATA_LOSS:return f.DATA_LOSS;default:return A()}}(k=q||(q={}))[k.OK=0]="OK",k[k.CANCELLED=1]="CANCELLED",k[k.UNKNOWN=2]="UNKNOWN",k[k.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",k[k.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",k[k.NOT_FOUND=5]="NOT_FOUND",k[k.ALREADY_EXISTS=6]="ALREADY_EXISTS",k[k.PERMISSION_DENIED=7]="PERMISSION_DENIED",k[k.UNAUTHENTICATED=16]="UNAUTHENTICATED",k[k.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",k[k.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",k[k.ABORTED=10]="ABORTED",k[k.OUT_OF_RANGE=11]="OUT_OF_RANGE",k[k.UNIMPLEMENTED=12]="UNIMPLEMENTED",k[k.INTERNAL=13]="INTERNAL",k[k.UNAVAILABLE=14]="UNAVAILABLE",k[k.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return pr}static getOrCreateInstance(){return pr===null&&(pr=new Po),pr}onExistenceFilterMismatch(t){const e=Symbol();return this.onExistenceFilterMismatchCallbacks.set(e,t),()=>this.onExistenceFilterMismatchCallbacks.delete(e)}notifyOnExistenceFilterMismatch(t){this.onExistenceFilterMismatchCallbacks.forEach(e=>e(t))}}let pr=null;/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C_(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k_=new be([4294967295,4294967295],0);function ec(n){const t=C_().encode(n),e=new Vg;return e.update(t),new Uint8Array(e.digest())}function nc(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new be([e,r],0),new be([i,s],0)]}class So{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new hn(`Invalid padding: ${e}`);if(r<0)throw new hn(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new hn(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new hn(`Invalid padding when bitmap length is 0: ${e}`);this.de=8*t.length-e,this.Ae=be.fromNumber(this.de)}Re(t,e,r){let i=t.add(e.multiply(be.fromNumber(r)));return i.compare(k_)===1&&(i=new be([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ae).toNumber()}Ve(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.de===0)return!1;const e=ec(t),[r,i]=nc(e);for(let s=0;s<this.hashCount;s++){const o=this.Re(r,i,s);if(!this.Ve(o))return!1}return!0}static create(t,e,r){const i=t%8==0?0:8-t%8,s=new Uint8Array(Math.ceil(t/8)),o=new So(s,i,e);return r.forEach(a=>o.insert(a)),o}insert(t){if(this.de===0)return;const e=ec(t),[r,i]=nc(e);for(let s=0;s<this.hashCount;s++){const o=this.Re(r,i,s);this.me(o)}}me(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class hn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{constructor(t,e,r,i,s){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const i=new Map;return i.set(t,er.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new gi(P.min(),i,new x(V),Lt(),C())}}class er{constructor(t,e,r,i,s){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new er(r,e,C(),C(),C())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr{constructor(t,e,r,i){this.fe=t,this.removedTargetIds=e,this.key=r,this.ge=i}}class Wl{constructor(t,e){this.targetId=t,this.pe=e}}class Kl{constructor(t,e,r=ct.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=i}}class rc{constructor(){this.ye=0,this.we=sc(),this.Se=ct.EMPTY_BYTE_STRING,this.be=!1,this.De=!0}get current(){return this.be}get resumeToken(){return this.Se}get ve(){return this.ye!==0}get Ce(){return this.De}Fe(t){t.approximateByteSize()>0&&(this.De=!0,this.Se=t)}Me(){let t=C(),e=C(),r=C();return this.we.forEach((i,s)=>{switch(s){case 0:t=t.add(i);break;case 2:e=e.add(i);break;case 1:r=r.add(i);break;default:A()}}),new er(this.Se,this.be,t,e,r)}xe(){this.De=!1,this.we=sc()}Oe(t,e){this.De=!0,this.we=this.we.insert(t,e)}Ne(t){this.De=!0,this.we=this.we.remove(t)}Be(){this.ye+=1}Le(){this.ye-=1}ke(){this.De=!0,this.be=!0}}class b_{constructor(t){this.qe=t,this.Qe=new Map,this.Ke=Lt(),this.$e=ic(),this.Ue=new x(V)}We(t){for(const e of t.fe)t.ge&&t.ge.isFoundDocument()?this.Ge(e,t.ge):this.ze(e,t.key,t.ge);for(const e of t.removedTargetIds)this.ze(e,t.key,t.ge)}je(t){this.forEachTarget(t,e=>{const r=this.He(e);switch(t.state){case 0:this.Je(e)&&r.Fe(t.resumeToken);break;case 1:r.Le(),r.ve||r.xe(),r.Fe(t.resumeToken);break;case 2:r.Le(),r.ve||this.removeTarget(e);break;case 3:this.Je(e)&&(r.ke(),r.Fe(t.resumeToken));break;case 4:this.Je(e)&&(this.Ye(e),r.Fe(t.resumeToken));break;default:A()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Qe.forEach((r,i)=>{this.Je(i)&&e(i)})}Ze(t){var e,r;const i=t.targetId,s=t.pe.count,o=this.Xe(i);if(o){const a=o.target;if(vs(a))if(s===0){const c=new v(a.path);this.ze(i,c,nt.newNoDocument(c,P.min()))}else L(s===1);else{const c=this.et(i);if(c!==s){const u=this.tt(t,c);if(u.status!==0){this.Ye(i);const l=u.status===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ue=this.Ue.insert(i,l)}(e=Po.instance)===null||e===void 0||e.notifyOnExistenceFilterMismatch(function(h,d,p,I){var T,E,D,F,B,Z;const pt={localCacheCount:p,existenceFilterCount:I.count},Q=I.unchangedNames;return Q&&(pt.bloomFilter={applied:h===0,hashCount:(T=Q==null?void 0:Q.hashCount)!==null&&T!==void 0?T:0,bitmapLength:(F=(D=(E=Q==null?void 0:Q.bits)===null||E===void 0?void 0:E.bitmap)===null||D===void 0?void 0:D.length)!==null&&F!==void 0?F:0,padding:(Z=(B=Q==null?void 0:Q.bits)===null||B===void 0?void 0:B.padding)!==null&&Z!==void 0?Z:0},d&&(pt.bloomFilter.mightContain=d)),pt}(u.status,(r=u.nt)!==null&&r!==void 0?r:null,c,t.pe))}}}}tt(t,e){const{unchangedNames:r,count:i}=t.pe;if(!r||!r.bits)return{status:1};const{bits:{bitmap:s="",padding:o=0},hashCount:a=0}=r;let c,u;try{c=me(s).toUint8Array()}catch(h){if(h instanceof wl)return Le("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),{status:1};throw h}try{u=new So(c,o,a)}catch(h){return Le(h instanceof hn?"BloomFilter error: ":"Applying bloom filter failed: ",h),{status:1}}const l=h=>{const d=this.qe.rt();return u.mightContain(`projects/${d.projectId}/databases/${d.database}/documents/${h}`)};return u.de===0?{status:1}:{status:i===e-this.it(t.targetId,l)?0:2,nt:l}}it(t,e){const r=this.qe.getRemoteKeysForTarget(t);let i=0;return r.forEach(s=>{e(s.path.canonicalString())||(this.ze(t,s,null),i++)}),i}st(t){const e=new Map;this.Qe.forEach((s,o)=>{const a=this.Xe(o);if(a){if(s.current&&vs(a.target)){const c=new v(a.target.path);this.Ke.get(c)!==null||this.ot(o,c)||this.ze(o,c,nt.newNoDocument(c,t))}s.Ce&&(e.set(o,s.Me()),s.xe())}});let r=C();this.$e.forEach((s,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.Xe(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.Ke.forEach((s,o)=>o.setReadTime(t));const i=new gi(t,e,this.Ue,this.Ke,r);return this.Ke=Lt(),this.$e=ic(),this.Ue=new x(V),i}Ge(t,e){if(!this.Je(t))return;const r=this.ot(t,e.key)?2:0;this.He(t).Oe(e.key,r),this.Ke=this.Ke.insert(e.key,e),this.$e=this.$e.insert(e.key,this._t(e.key).add(t))}ze(t,e,r){if(!this.Je(t))return;const i=this.He(t);this.ot(t,e)?i.Oe(e,1):i.Ne(e),this.$e=this.$e.insert(e,this._t(e).delete(t)),r&&(this.Ke=this.Ke.insert(e,r))}removeTarget(t){this.Qe.delete(t)}et(t){const e=this.He(t).Me();return this.qe.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Be(t){this.He(t).Be()}He(t){let e=this.Qe.get(t);return e||(e=new rc,this.Qe.set(t,e)),e}_t(t){let e=this.$e.get(t);return e||(e=new ot(V),this.$e=this.$e.insert(t,e)),e}Je(t){const e=this.Xe(t)!==null;return e||y("WatchChangeAggregator","Detected inactive target",t),e}Xe(t){const e=this.Qe.get(t);return e&&e.ve?null:this.qe.ut(t)}Ye(t){this.Qe.set(t,new rc),this.qe.getRemoteKeysForTarget(t).forEach(e=>{this.ze(t,e,null)})}ot(t,e){return this.qe.getRemoteKeysForTarget(t).has(e)}}function ic(){return new x(v.comparator)}function sc(){return new x(v.comparator)}const D_=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),V_=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),N_=(()=>({and:"AND",or:"OR"}))();class O_{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function As(n,t){return n.useProto3Json||li(t)?t:{value:t}}function jr(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Gl(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function M_(n,t){return jr(n,t.toTimestamp())}function Rt(n){return L(!!n),P.fromTimestamp(function(e){const r=Qt(e);return new H(r.seconds,r.nanos)}(n))}function Co(n,t){return function(r){return new M(["projects",r.projectId,"databases",r.database])}(n).child("documents").child(t).canonicalString()}function Ql(n){const t=M.fromString(n);return L(Zl(t)),t}function Rs(n,t){return Co(n.databaseId,t.path)}function Gi(n,t){const e=Ql(t);if(e.get(1)!==n.databaseId.projectId)throw new _(f.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new _(f.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new v(Jl(e))}function Ps(n,t){return Co(n.databaseId,t)}function L_(n){const t=Ql(n);return t.length===4?M.emptyPath():Jl(t)}function Ss(n){return new M(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Jl(n){return L(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function oc(n,t,e){return{name:Rs(n,t),fields:e.value.mapValue.fields}}function x_(n,t){let e;if("targetChange"in t){t.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:A()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],s=function(u,l){return u.useProto3Json?(L(l===void 0||typeof l=="string"),ct.fromBase64String(l||"")):(L(l===void 0||l instanceof Uint8Array),ct.fromUint8Array(l||new Uint8Array))}(n,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(u){const l=u.code===void 0?f.UNKNOWN:zl(u.code);return new _(l,u.message||"")}(o);e=new Kl(r,i,s,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=Gi(n,r.document.name),s=Rt(r.document.updateTime),o=r.document.createTime?Rt(r.document.createTime):P.min(),a=new lt({mapValue:{fields:r.document.fields}}),c=nt.newFoundDocument(i,s,o,a),u=r.targetIds||[],l=r.removedTargetIds||[];e=new Tr(u,l,c.key,c)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=Gi(n,r.document),s=r.readTime?Rt(r.readTime):P.min(),o=nt.newNoDocument(i,s),a=r.removedTargetIds||[];e=new Tr([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=Gi(n,r.document),s=r.removedTargetIds||[];e=new Tr([],s,i,null)}else{if(!("filter"in t))return A();{t.filter;const r=t.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new P_(i,s),a=r.targetId;e=new Wl(a,o)}}return e}function F_(n,t){let e;if(t instanceof tr)e={update:oc(n,t.key,t.value)};else if(t instanceof Ao)e={delete:Rs(n,t.key)};else if(t instanceof Zt)e={update:oc(n,t.key,t.data),updateMask:K_(t.fieldMask)};else{if(!(t instanceof w_))return A();e={verify:Rs(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof On)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Mn)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Ln)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof $r)return{fieldPath:o.field.canonicalString(),increment:a.Te};throw A()}(0,r))),t.precondition.isNone||(e.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:M_(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:A()}(n,t.precondition)),e}function U_(n,t){return n&&n.length>0?(L(t!==void 0),n.map(e=>function(i,s){let o=i.updateTime?Rt(i.updateTime):Rt(s);return o.isEqual(P.min())&&(o=Rt(s)),new v_(o,i.transformResults||[])}(e,t))):[]}function B_(n,t){return{documents:[Ps(n,t.path)]}}function q_(n,t){const e={structuredQuery:{}},r=t.path;t.collectionGroup!==null?(e.parent=Ps(n,r),e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(e.parent=Ps(n,r.popLast()),e.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(c){if(c.length!==0)return Yl(Et.create(c,"and"))}(t.filters);i&&(e.structuredQuery.where=i);const s=function(c){if(c.length!==0)return c.map(u=>function(h){return{field:Ae(h.field),direction:H_(h.dir)}}(u))}(t.orderBy);s&&(e.structuredQuery.orderBy=s);const o=As(n,t.limit);return o!==null&&(e.structuredQuery.limit=o),t.startAt&&(e.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(t.endAt)),e}function $_(n){let t=L_(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let i=null;if(r>0){L(r===1);const l=e.from[0];l.allDescendants?i=l.collectionId:t=t.child(l.collectionId)}let s=[];e.where&&(s=function(h){const d=Xl(h);return d instanceof Et&&Sl(d)?d.getFilters():[d]}(e.where));let o=[];e.orderBy&&(o=function(h){return h.map(d=>function(I){return new De(Re(I.field),function(E){switch(E){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(I.direction))}(d))}(e.orderBy));let a=null;e.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,li(d)?null:d}(e.limit));let c=null;e.startAt&&(c=function(h){const d=!!h.before,p=h.values||[];return new qr(p,d)}(e.startAt));let u=null;return e.endAt&&(u=function(h){const d=!h.before,p=h.values||[];return new qr(p,d)}(e.endAt)),a_(t,i,o,s,a,"F",c,u)}function j_(n,t){const e=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return A()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function Xl(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=Re(e.unaryFilter.field);return j.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Re(e.unaryFilter.field);return j.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Re(e.unaryFilter.field);return j.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Re(e.unaryFilter.field);return j.create(o,"!=",{nullValue:"NULL_VALUE"});default:return A()}}(n):n.fieldFilter!==void 0?function(e){return j.create(Re(e.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return A()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return Et.create(e.compositeFilter.filters.map(r=>Xl(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return A()}}(e.compositeFilter.op))}(n):A()}function H_(n){return D_[n]}function z_(n){return V_[n]}function W_(n){return N_[n]}function Ae(n){return{fieldPath:n.canonicalString()}}function Re(n){return rt.fromServerFormat(n.fieldPath)}function Yl(n){return n instanceof j?function(e){if(e.op==="=="){if(Wa(e.value))return{unaryFilter:{field:Ae(e.field),op:"IS_NAN"}};if(za(e.value))return{unaryFilter:{field:Ae(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Wa(e.value))return{unaryFilter:{field:Ae(e.field),op:"IS_NOT_NAN"}};if(za(e.value))return{unaryFilter:{field:Ae(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ae(e.field),op:z_(e.op),value:e.value}}}(n):n instanceof Et?function(e){const r=e.getFilters().map(i=>Yl(i));return r.length===1?r[0]:{compositeFilter:{op:W_(e.op),filters:r}}}(n):A()}function K_(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function Zl(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(t,e,r,i,s=P.min(),o=P.min(),a=ct.EMPTY_BYTE_STRING,c=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(t){return new $t(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new $t(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new $t(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new $t(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G_{constructor(t){this.ct=t}}function Q_(n){const t=$_({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Ts(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J_{constructor(){this.sn=new X_}addToCollectionParentIndex(t,e){return this.sn.add(e),m.resolve()}getCollectionParents(t,e){return m.resolve(this.sn.getEntries(e))}addFieldIndex(t,e){return m.resolve()}deleteFieldIndex(t,e){return m.resolve()}getDocumentsMatchingTarget(t,e){return m.resolve(null)}getIndexType(t,e){return m.resolve(0)}getFieldIndexes(t,e){return m.resolve([])}getNextCollectionGroupToUpdate(t){return m.resolve(null)}getMinOffset(t,e){return m.resolve(Gt.min())}getMinOffsetFromCollectionGroup(t,e){return m.resolve(Gt.min())}updateCollectionGroup(t,e,r){return m.resolve()}updateIndexEntries(t,e){return m.resolve()}}class X_{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e]||new ot(M.comparator),s=!i.has(r);return this.index[e]=i.add(r),s}has(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e];return i&&i.has(r)}getEntries(t){return(this.index[t]||new ot(M.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(t){this.Mn=t}next(){return this.Mn+=2,this.Mn}static xn(){return new Be(0)}static On(){return new Be(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y_{constructor(){this.changes=new Ye(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,nt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?m.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z_{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ty{constructor(t,e,r,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=i}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next(i=>(r=i,this.remoteDocumentCache.getEntry(t,e))).next(i=>(r!==null&&_n(r.mutation,i,dt.empty(),H.now()),i))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.getLocalViewOfDocuments(t,r,C()).next(()=>r))}getLocalViewOfDocuments(t,e,r=C()){const i=oe();return this.populateOverlays(t,i,e).next(()=>this.computeViews(t,e,i,r).next(s=>{let o=ln();return s.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(t,e){const r=oe();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,C()))}populateOverlays(t,e,r){const i=[];return r.forEach(s=>{e.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(t,i).next(s=>{s.forEach((o,a)=>{e.set(o,a)})})}computeViews(t,e,r,i){let s=Lt();const o=gn(),a=function(){return gn()}();return e.forEach((c,u)=>{const l=r.get(u.key);i.has(u.key)&&(l===void 0||l.mutation instanceof Zt)?s=s.insert(u.key,u):l!==void 0?(o.set(u.key,l.mutation.getFieldMask()),_n(l.mutation,u,l.mutation.getFieldMask(),H.now())):o.set(u.key,dt.empty())}),this.recalculateAndSaveOverlays(t,s).next(c=>(c.forEach((u,l)=>o.set(u,l)),e.forEach((u,l)=>{var h;return a.set(u,new Z_(l,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(t,e){const r=gn();let i=new x((o,a)=>o-a),s=C();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=e.get(c);if(u===null)return;let l=r.get(c)||dt.empty();l=a.applyToLocalView(u,l),r.set(c,l);const h=(i.get(a.batchId)||C()).add(c);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,l=c.value,h=Ll();l.forEach(d=>{if(!s.has(d)){const p=jl(e.get(d),r.get(d));p!==null&&h.set(d,p),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(t,u,h))}return m.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,e,r){return function(s){return v.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Dl(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r):this.getDocumentsMatchingCollectionQuery(t,e,r)}getNextDocuments(t,e,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,i-s.size):m.resolve(oe());let a=-1,c=s;return o.next(u=>m.forEach(u,(l,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(l)?m.resolve():this.remoteDocumentCache.getEntry(t,l).next(d=>{c=c.insert(l,d)}))).next(()=>this.populateOverlays(t,u,s)).next(()=>this.computeViews(t,c,u,C())).next(l=>({batchId:a,changes:Ml(l)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new v(e)).next(r=>{let i=ln();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(t,e,r){const i=e.collectionGroup;let s=ln();return this.indexManager.getCollectionParents(t,i).next(o=>m.forEach(o,a=>{const c=function(l,h){return new Xe(h,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(e,a.child(i));return this.getDocumentsMatchingCollectionQuery(t,c,r).next(u=>{u.forEach((l,h)=>{s=s.insert(l,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(t,e,r){let i;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,i))).next(s=>{i.forEach((a,c)=>{const u=c.getKey();s.get(u)===null&&(s=s.insert(u,nt.newInvalidDocument(u)))});let o=ln();return s.forEach((a,c)=>{const u=i.get(a);u!==void 0&&_n(u.mutation,c,dt.empty(),H.now()),fi(e,c)&&(o=o.insert(a,c))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ey{constructor(t){this.serializer=t,this.ar=new Map,this.ur=new Map}getBundleMetadata(t,e){return m.resolve(this.ar.get(e))}saveBundleMetadata(t,e){return this.ar.set(e.id,function(i){return{id:i.id,version:i.version,createTime:Rt(i.createTime)}}(e)),m.resolve()}getNamedQuery(t,e){return m.resolve(this.ur.get(e))}saveNamedQuery(t,e){return this.ur.set(e.name,function(i){return{name:i.name,query:Q_(i.bundledQuery),readTime:Rt(i.readTime)}}(e)),m.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ny{constructor(){this.overlays=new x(v.comparator),this.cr=new Map}getOverlay(t,e){return m.resolve(this.overlays.get(e))}getOverlays(t,e){const r=oe();return m.forEach(e,i=>this.getOverlay(t,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(t,e,r){return r.forEach((i,s)=>{this.ht(t,e,s)}),m.resolve()}removeOverlaysForBatchId(t,e,r){const i=this.cr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.cr.delete(r)),m.resolve()}getOverlaysForCollection(t,e,r){const i=oe(),s=e.length+1,o=new v(e.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!e.isPrefixOf(u.path))break;u.path.length===s&&c.largestBatchId>r&&i.set(c.getKey(),c)}return m.resolve(i)}getOverlaysForCollectionGroup(t,e,r,i){let s=new x((u,l)=>u-l);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===e&&u.largestBatchId>r){let l=s.get(u.largestBatchId);l===null&&(l=oe(),s=s.insert(u.largestBatchId,l)),l.set(u.getKey(),u)}}const a=oe(),c=s.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,l)=>a.set(u,l)),!(a.size()>=i)););return m.resolve(a)}ht(t,e,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.cr.get(i.largestBatchId).delete(r.key);this.cr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new R_(e,r));let s=this.cr.get(e);s===void 0&&(s=C(),this.cr.set(e,s)),this.cr.set(e,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko{constructor(){this.lr=new ot(W.hr),this.Pr=new ot(W.Ir)}isEmpty(){return this.lr.isEmpty()}addReference(t,e){const r=new W(t,e);this.lr=this.lr.add(r),this.Pr=this.Pr.add(r)}Tr(t,e){t.forEach(r=>this.addReference(r,e))}removeReference(t,e){this.Er(new W(t,e))}dr(t,e){t.forEach(r=>this.removeReference(r,e))}Ar(t){const e=new v(new M([])),r=new W(e,t),i=new W(e,t+1),s=[];return this.Pr.forEachInRange([r,i],o=>{this.Er(o),s.push(o.key)}),s}Rr(){this.lr.forEach(t=>this.Er(t))}Er(t){this.lr=this.lr.delete(t),this.Pr=this.Pr.delete(t)}Vr(t){const e=new v(new M([])),r=new W(e,t),i=new W(e,t+1);let s=C();return this.Pr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(t){const e=new W(t,0),r=this.lr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class W{constructor(t,e){this.key=t,this.mr=e}static hr(t,e){return v.comparator(t.key,e.key)||V(t.mr,e.mr)}static Ir(t,e){return V(t.mr,e.mr)||v.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ry{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.gr=1,this.pr=new ot(W.hr)}checkEmpty(t){return m.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,i){const s=this.gr;this.gr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new A_(s,e,r,i);this.mutationQueue.push(o);for(const a of i)this.pr=this.pr.add(new W(a.key,s)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return m.resolve(o)}lookupMutationBatch(t,e){return m.resolve(this.yr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,i=this.wr(r),s=i<0?0:i;return m.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return m.resolve(this.mutationQueue.length===0?-1:this.gr-1)}getAllMutationBatches(t){return m.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new W(e,0),i=new W(e,Number.POSITIVE_INFINITY),s=[];return this.pr.forEachInRange([r,i],o=>{const a=this.yr(o.mr);s.push(a)}),m.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new ot(V);return e.forEach(i=>{const s=new W(i,0),o=new W(i,Number.POSITIVE_INFINITY);this.pr.forEachInRange([s,o],a=>{r=r.add(a.mr)})}),m.resolve(this.Sr(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,i=r.length+1;let s=r;v.isDocumentKey(s)||(s=s.child(""));const o=new W(new v(s),0);let a=new ot(V);return this.pr.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(c.mr)),!0)},o),m.resolve(this.Sr(a))}Sr(t){const e=[];return t.forEach(r=>{const i=this.yr(r);i!==null&&e.push(i)}),e}removeMutationBatch(t,e){L(this.br(e.batchId,"removed")===0),this.mutationQueue.shift();let r=this.pr;return m.forEach(e.mutations,i=>{const s=new W(i.key,e.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.pr=r})}Cn(t){}containsKey(t,e){const r=new W(e,0),i=this.pr.firstAfterOrEqual(r);return m.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,m.resolve()}br(t,e){return this.wr(t)}wr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}yr(t){const e=this.wr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iy{constructor(t){this.Dr=t,this.docs=function(){return new x(v.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,i=this.docs.get(r),s=i?i.size:0,o=this.Dr(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return m.resolve(r?r.document.mutableCopy():nt.newInvalidDocument(e))}getEntries(t,e){let r=Lt();return e.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():nt.newInvalidDocument(i))}),m.resolve(r)}getDocumentsMatchingQuery(t,e,r,i){let s=Lt();const o=e.path,a=new v(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:u,value:{document:l}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||Hg(jg(l),r)<=0||(i.has(l.key)||fi(e,l))&&(s=s.insert(l.key,l.mutableCopy()))}return m.resolve(s)}getAllFromCollectionGroup(t,e,r,i){A()}vr(t,e){return m.forEach(this.docs,r=>e(r))}newChangeBuffer(t){return new sy(this)}getSize(t){return m.resolve(this.size)}}class sy extends Y_{constructor(t){super(),this.sr=t}applyChanges(t){const e=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?e.push(this.sr.addEntry(t,i)):this.sr.removeEntry(r)}),m.waitFor(e)}getFromCache(t,e){return this.sr.getEntry(t,e)}getAllFromCache(t,e){return this.sr.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oy{constructor(t){this.persistence=t,this.Cr=new Ye(e=>vo(e),Io),this.lastRemoteSnapshotVersion=P.min(),this.highestTargetId=0,this.Fr=0,this.Mr=new ko,this.targetCount=0,this.Or=Be.xn()}forEachTarget(t,e){return this.Cr.forEach((r,i)=>e(i)),m.resolve()}getLastRemoteSnapshotVersion(t){return m.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return m.resolve(this.Fr)}allocateTargetId(t){return this.highestTargetId=this.Or.next(),m.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.Fr&&(this.Fr=e),m.resolve()}Ln(t){this.Cr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Or=new Be(e),this.highestTargetId=e),t.sequenceNumber>this.Fr&&(this.Fr=t.sequenceNumber)}addTargetData(t,e){return this.Ln(e),this.targetCount+=1,m.resolve()}updateTargetData(t,e){return this.Ln(e),m.resolve()}removeTargetData(t,e){return this.Cr.delete(e.target),this.Mr.Ar(e.targetId),this.targetCount-=1,m.resolve()}removeTargets(t,e,r){let i=0;const s=[];return this.Cr.forEach((o,a)=>{a.sequenceNumber<=e&&r.get(a.targetId)===null&&(this.Cr.delete(o),s.push(this.removeMatchingKeysForTargetId(t,a.targetId)),i++)}),m.waitFor(s).next(()=>i)}getTargetCount(t){return m.resolve(this.targetCount)}getTargetData(t,e){const r=this.Cr.get(e)||null;return m.resolve(r)}addMatchingKeys(t,e,r){return this.Mr.Tr(e,r),m.resolve()}removeMatchingKeys(t,e,r){this.Mr.dr(e,r);const i=this.persistence.referenceDelegate,s=[];return i&&e.forEach(o=>{s.push(i.markPotentiallyOrphaned(t,o))}),m.waitFor(s)}removeMatchingKeysForTargetId(t,e){return this.Mr.Ar(e),m.resolve()}getMatchingKeysForTargetId(t,e){const r=this.Mr.Vr(e);return m.resolve(r)}containsKey(t,e){return m.resolve(this.Mr.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ay{constructor(t,e){this.Nr={},this.overlays={},this.Br=new go(0),this.Lr=!1,this.Lr=!0,this.referenceDelegate=t(this),this.kr=new oy(this),this.indexManager=new J_,this.remoteDocumentCache=function(i){return new iy(i)}(r=>this.referenceDelegate.qr(r)),this.serializer=new G_(e),this.Qr=new ey(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Lr=!1,Promise.resolve()}get started(){return this.Lr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new ny,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.Nr[t.toKey()];return r||(r=new ry(e,this.referenceDelegate),this.Nr[t.toKey()]=r),r}getTargetCache(){return this.kr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Qr}runTransaction(t,e,r){y("MemoryPersistence","Starting transaction:",t);const i=new cy(this.Br.next());return this.referenceDelegate.Kr(),r(i).next(s=>this.referenceDelegate.$r(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ur(t,e){return m.or(Object.values(this.Nr).map(r=>()=>r.containsKey(t,e)))}}class cy extends Wg{constructor(t){super(),this.currentSequenceNumber=t}}class bo{constructor(t){this.persistence=t,this.Wr=new ko,this.Gr=null}static zr(t){return new bo(t)}get jr(){if(this.Gr)return this.Gr;throw A()}addReference(t,e,r){return this.Wr.addReference(r,e),this.jr.delete(r.toString()),m.resolve()}removeReference(t,e,r){return this.Wr.removeReference(r,e),this.jr.add(r.toString()),m.resolve()}markPotentiallyOrphaned(t,e){return this.jr.add(e.toString()),m.resolve()}removeTarget(t,e){this.Wr.Ar(e.targetId).forEach(i=>this.jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next(i=>{i.forEach(s=>this.jr.add(s.toString()))}).next(()=>r.removeTargetData(t,e))}Kr(){this.Gr=new Set}$r(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return m.forEach(this.jr,r=>{const i=v.fromPath(r);return this.Hr(t,i).next(s=>{s||e.removeEntry(i,P.min())})}).next(()=>(this.Gr=null,e.apply(t)))}updateLimboDocument(t,e){return this.Hr(t,e).next(r=>{r?this.jr.delete(e.toString()):this.jr.add(e.toString())})}qr(t){return 0}Hr(t,e){return m.or([()=>m.resolve(this.Wr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ur(t,e)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Do{constructor(t,e,r,i){this.targetId=t,this.fromCache=e,this.Li=r,this.ki=i}static qi(t,e){let r=C(),i=C();for(const s of e.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Do(t,e.fromCache,r,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uy{constructor(){this.Qi=!1}initialize(t,e){this.Ki=t,this.indexManager=e,this.Qi=!0}getDocumentsMatchingQuery(t,e,r,i){return this.$i(t,e).next(s=>s||this.Ui(t,e,i,r)).next(s=>s||this.Wi(t,e))}$i(t,e){if(Ja(e))return m.resolve(null);let r=Mt(e);return this.indexManager.getIndexType(t,r).next(i=>i===0?null:(e.limit!==null&&i===1&&(e=Ts(e,null,"F"),r=Mt(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next(s=>{const o=C(...s);return this.Ki.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,r).next(c=>{const u=this.Gi(e,a);return this.zi(e,u,o,c.readTime)?this.$i(t,Ts(e,null,"F")):this.ji(t,u,e,c)}))})))}Ui(t,e,r,i){return Ja(e)||i.isEqual(P.min())?this.Wi(t,e):this.Ki.getDocuments(t,r).next(s=>{const o=this.Gi(e,s);return this.zi(e,o,r,i)?this.Wi(t,e):(Ba()<=b.DEBUG&&y("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),ws(e)),this.ji(t,o,e,$g(i,-1)))})}Gi(t,e){let r=new ot(Nl(t));return e.forEach((i,s)=>{fi(t,s)&&(r=r.add(s))}),r}zi(t,e,r,i){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const s=t.limitType==="F"?e.last():e.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Wi(t,e){return Ba()<=b.DEBUG&&y("QueryEngine","Using full collection scan to execute query:",ws(e)),this.Ki.getDocumentsMatchingQuery(t,e,Gt.min())}ji(t,e,r,i){return this.Ki.getDocumentsMatchingQuery(t,r,i).next(s=>(e.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ly{constructor(t,e,r,i){this.persistence=t,this.Hi=e,this.serializer=i,this.Ji=new x(V),this.Yi=new Ye(s=>vo(s),Io),this.Zi=new Map,this.Xi=t.getRemoteDocumentCache(),this.kr=t.getTargetCache(),this.Qr=t.getBundleCache(),this.es(r)}es(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new ty(this.Xi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Xi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.Ji))}}function hy(n,t,e,r){return new ly(n,t,e,r)}async function th(n,t){const e=S(n);return await e.persistence.runTransaction("Handle user change","readonly",r=>{let i;return e.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,e.es(t),e.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let c=C();for(const u of i){o.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}for(const u of s){a.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}return e.localDocuments.getDocuments(r,c).next(u=>({ts:u,removedBatchIds:o,addedBatchIds:a}))})})}function dy(n,t){const e=S(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=t.batch.keys(),s=e.Xi.newChangeBuffer({trackRemovals:!0});return function(a,c,u,l){const h=u.batch,d=h.keys();let p=m.resolve();return d.forEach(I=>{p=p.next(()=>l.getEntry(c,I)).next(T=>{const E=u.docVersions.get(I);L(E!==null),T.version.compareTo(E)<0&&(h.applyToRemoteDocument(T,u),T.isValidDocument()&&(T.setReadTime(u.commitVersion),l.addEntry(T)))})}),p.next(()=>a.mutationQueue.removeMutationBatch(c,h))}(e,r,t,s).next(()=>s.apply(r)).next(()=>e.mutationQueue.performConsistencyCheck(r)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(r,i,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let c=C();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(c=c.add(a.batch.mutations[u].key));return c}(t))).next(()=>e.localDocuments.getDocuments(r,i))})}function eh(n){const t=S(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.kr.getLastRemoteSnapshotVersion(e))}function fy(n,t){const e=S(n),r=t.snapshotVersion;let i=e.Ji;return e.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=e.Xi.newChangeBuffer({trackRemovals:!0});i=e.Ji;const a=[];t.targetChanges.forEach((l,h)=>{const d=i.get(h);if(!d)return;a.push(e.kr.removeMatchingKeys(s,l.removedDocuments,h).next(()=>e.kr.addMatchingKeys(s,l.addedDocuments,h)));let p=d.withSequenceNumber(s.currentSequenceNumber);t.targetMismatches.get(h)!==null?p=p.withResumeToken(ct.EMPTY_BYTE_STRING,P.min()).withLastLimboFreeSnapshotVersion(P.min()):l.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(l.resumeToken,r)),i=i.insert(h,p),function(T,E,D){return T.resumeToken.approximateByteSize()===0||E.snapshotVersion.toMicroseconds()-T.snapshotVersion.toMicroseconds()>=3e8?!0:D.addedDocuments.size+D.modifiedDocuments.size+D.removedDocuments.size>0}(d,p,l)&&a.push(e.kr.updateTargetData(s,p))});let c=Lt(),u=C();if(t.documentUpdates.forEach(l=>{t.resolvedLimboDocuments.has(l)&&a.push(e.persistence.referenceDelegate.updateLimboDocument(s,l))}),a.push(py(s,o,t.documentUpdates).next(l=>{c=l.ns,u=l.rs})),!r.isEqual(P.min())){const l=e.kr.getLastRemoteSnapshotVersion(s).next(h=>e.kr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(l)}return m.waitFor(a).next(()=>o.apply(s)).next(()=>e.localDocuments.getLocalViewOfDocuments(s,c,u)).next(()=>c)}).then(s=>(e.Ji=i,s))}function py(n,t,e){let r=C(),i=C();return e.forEach(s=>r=r.add(s)),t.getEntries(n,r).next(s=>{let o=Lt();return e.forEach((a,c)=>{const u=s.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),c.isNoDocument()&&c.version.isEqual(P.min())?(t.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(t.addEntry(c),o=o.insert(a,c)):y("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{ns:o,rs:i}})}function my(n,t){const e=S(n);return e.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function gy(n,t){const e=S(n);return e.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return e.kr.getTargetData(r,t).next(s=>s?(i=s,m.resolve(i)):e.kr.allocateTargetId(r).next(o=>(i=new $t(t,o,"TargetPurposeListen",r.currentSequenceNumber),e.kr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=e.Ji.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(e.Ji=e.Ji.insert(r.targetId,r),e.Yi.set(t,r.targetId)),r})}async function Cs(n,t,e){const r=S(n),i=r.Ji.get(t),s=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Zn(o))throw o;y("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}r.Ji=r.Ji.remove(t),r.Yi.delete(i.target)}function ac(n,t,e){const r=S(n);let i=P.min(),s=C();return r.persistence.runTransaction("Execute query","readonly",o=>function(c,u,l){const h=S(c),d=h.Yi.get(l);return d!==void 0?m.resolve(h.Ji.get(d)):h.kr.getTargetData(u,l)}(r,o,Mt(t)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.kr.getMatchingKeysForTargetId(o,a.targetId).next(c=>{s=c})}).next(()=>r.Hi.getDocumentsMatchingQuery(o,t,e?i:P.min(),e?s:C())).next(a=>(_y(r,c_(t),a),{documents:a,ss:s})))}function _y(n,t,e){let r=n.Zi.get(t)||P.min();e.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),n.Zi.set(t,r)}class cc{constructor(){this.activeTargetIds=p_()}hs(t){this.activeTargetIds=this.activeTargetIds.add(t)}Ps(t){this.activeTargetIds=this.activeTargetIds.delete(t)}ls(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class yy{constructor(){this.Hs=new cc,this.Js={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t){return this.Hs.hs(t),this.Js[t]||"not-current"}updateQueryState(t,e,r){this.Js[t]=e}removeLocalQueryTarget(t){this.Hs.Ps(t)}isLocalQueryTarget(t){return this.Hs.activeTargetIds.has(t)}clearQueryState(t){delete this.Js[t]}getAllActiveQueryTargets(){return this.Hs.activeTargetIds}isActiveQueryTarget(t){return this.Hs.activeTargetIds.has(t)}start(){return this.Hs=new cc,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ey{Ys(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uc{constructor(){this.Zs=()=>this.Xs(),this.eo=()=>this.no(),this.ro=[],this.io()}Ys(t){this.ro.push(t)}shutdown(){window.removeEventListener("online",this.Zs),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Zs),window.addEventListener("offline",this.eo)}Xs(){y("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ro)t(0)}no(){y("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ro)t(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let mr=null;function Qi(){return mr===null?mr=function(){return 268435456+Math.round(2147483648*Math.random())}():mr++,"0x"+mr.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vy={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iy{constructor(t){this.so=t.so,this.oo=t.oo}_o(t){this.ao=t}uo(t){this.co=t}onMessage(t){this.lo=t}close(){this.oo()}send(t){this.so(t)}ho(){this.ao()}Po(t){this.co(t)}Io(t){this.lo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tt="WebChannelConnection";class Ty extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const r=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.To=r+"://"+e.host,this.Eo=`projects/${i}/databases/${s}`,this.Ao=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Ro(){return!1}Vo(e,r,i,s,o){const a=Qi(),c=this.mo(e,r);y("RestConnection",`Sending RPC '${e}' ${a}:`,c,i);const u={"google-cloud-resource-prefix":this.Eo,"x-goog-request-params":this.Ao};return this.fo(u,s,o),this.po(e,c,u,i).then(l=>(y("RestConnection",`Received RPC '${e}' ${a}: `,l),l),l=>{throw Le("RestConnection",`RPC '${e}' ${a} failed with error: `,l,"url: ",c,"request:",i),l})}yo(e,r,i,s,o,a){return this.Vo(e,r,i,s,o)}fo(e,r,i){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Je}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>e[o]=s),i&&i.headers.forEach((s,o)=>e[o]=s)}mo(e,r){const i=vy[e];return`${this.To}/v1/${r}:${i}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}po(t,e,r,i){const s=Qi();return new Promise((o,a)=>{const c=new Dg;c.setWithCredentials(!0),c.listenOnce(Cg.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Ki.NO_ERROR:const l=c.getResponseJson();y(tt,`XHR for RPC '${t}' ${s} received:`,JSON.stringify(l)),o(l);break;case Ki.TIMEOUT:y(tt,`RPC '${t}' ${s} timed out`),a(new _(f.DEADLINE_EXCEEDED,"Request time out"));break;case Ki.HTTP_ERROR:const h=c.getStatus();if(y(tt,`RPC '${t}' ${s} failed with status:`,h,"response text:",c.getResponseText()),h>0){let d=c.getResponseJson();Array.isArray(d)&&(d=d[0]);const p=d==null?void 0:d.error;if(p&&p.status&&p.message){const I=function(E){const D=E.toLowerCase().replace(/_/g,"-");return Object.values(f).indexOf(D)>=0?D:f.UNKNOWN}(p.status);a(new _(I,p.message))}else a(new _(f.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new _(f.UNAVAILABLE,"Connection failed."));break;default:A()}}finally{y(tt,`RPC '${t}' ${s} completed.`)}});const u=JSON.stringify(i);y(tt,`RPC '${t}' ${s} sending request:`,i),c.send(e,"POST",u,r,15)})}wo(t,e,r){const i=Qi(),s=[this.To,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=Pg(),a=Sg(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.xmlHttpFactory=new bg({})),this.fo(c.initMessageHeaders,e,r),c.encodeInitMessageHeaders=!0;const l=s.join("");y(tt,`Creating RPC '${t}' stream ${i}: ${l}`,c);const h=o.createWebChannel(l,c);let d=!1,p=!1;const I=new Iy({so:E=>{p?y(tt,`Not sending because RPC '${t}' stream ${i} is closed:`,E):(d||(y(tt,`Opening RPC '${t}' stream ${i} transport.`),h.open(),d=!0),y(tt,`RPC '${t}' stream ${i} sending:`,E),h.send(E))},oo:()=>h.close()}),T=(E,D,F)=>{E.listen(D,B=>{try{F(B)}catch(Z){setTimeout(()=>{throw Z},0)}})};return T(h,hr.EventType.OPEN,()=>{p||y(tt,`RPC '${t}' stream ${i} transport opened.`)}),T(h,hr.EventType.CLOSE,()=>{p||(p=!0,y(tt,`RPC '${t}' stream ${i} transport closed`),I.Po())}),T(h,hr.EventType.ERROR,E=>{p||(p=!0,Le(tt,`RPC '${t}' stream ${i} transport errored:`,E),I.Po(new _(f.UNAVAILABLE,"The operation could not be completed")))}),T(h,hr.EventType.MESSAGE,E=>{var D;if(!p){const F=E.data[0];L(!!F);const B=F,Z=B.error||((D=B[0])===null||D===void 0?void 0:D.error);if(Z){y(tt,`RPC '${t}' stream ${i} received error:`,Z);const pt=Z.status;let Q=function(nn){const sr=q[nn];if(sr!==void 0)return zl(sr)}(pt),en=Z.message;Q===void 0&&(Q=f.INTERNAL,en="Unknown error status: "+pt+" with message "+Z.message),p=!0,I.Po(new _(Q,en)),h.close()}else y(tt,`RPC '${t}' stream ${i} received:`,F),I.Io(F)}}),T(a,kg.STAT_EVENT,E=>{E.stat===Fa.PROXY?y(tt,`RPC '${t}' stream ${i} detected buffering proxy`):E.stat===Fa.NOPROXY&&y(tt,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{I.ho()},0),I}}function Ji(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _i(n){return new O_(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nh{constructor(t,e,r=1e3,i=1.5,s=6e4){this.ii=t,this.timerId=e,this.So=r,this.bo=i,this.Do=s,this.vo=0,this.Co=null,this.Fo=Date.now(),this.reset()}reset(){this.vo=0}Mo(){this.vo=this.Do}xo(t){this.cancel();const e=Math.floor(this.vo+this.Oo()),r=Math.max(0,Date.now()-this.Fo),i=Math.max(0,e-r);i>0&&y("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.vo} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.Co=this.ii.enqueueAfterDelay(this.timerId,i,()=>(this.Fo=Date.now(),t())),this.vo*=this.bo,this.vo<this.So&&(this.vo=this.So),this.vo>this.Do&&(this.vo=this.Do)}No(){this.Co!==null&&(this.Co.skipDelay(),this.Co=null)}cancel(){this.Co!==null&&(this.Co.cancel(),this.Co=null)}Oo(){return(Math.random()-.5)*this.vo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rh{constructor(t,e,r,i,s,o,a,c){this.ii=t,this.Bo=r,this.Lo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.ko=0,this.qo=null,this.Qo=null,this.stream=null,this.Ko=new nh(t,e)}$o(){return this.state===1||this.state===5||this.Uo()}Uo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Wo()}async stop(){this.$o()&&await this.close(0)}Go(){this.state=0,this.Ko.reset()}zo(){this.Uo()&&this.qo===null&&(this.qo=this.ii.enqueueAfterDelay(this.Bo,6e4,()=>this.jo()))}Ho(t){this.Jo(),this.stream.send(t)}async jo(){if(this.Uo())return this.close(0)}Jo(){this.qo&&(this.qo.cancel(),this.qo=null)}Yo(){this.Qo&&(this.Qo.cancel(),this.Qo=null)}async close(t,e){this.Jo(),this.Yo(),this.Ko.cancel(),this.ko++,t!==4?this.Ko.reset():e&&e.code===f.RESOURCE_EXHAUSTED?(Ot(e.toString()),Ot("Using maximum backoff delay to prevent overloading the backend."),this.Ko.Mo()):e&&e.code===f.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Zo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.uo(e)}Zo(){}auth(){this.state=1;const t=this.Xo(this.ko),e=this.ko;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.ko===e&&this.e_(r,i)},r=>{t(()=>{const i=new _(f.UNKNOWN,"Fetching auth token failed: "+r.message);return this.t_(i)})})}e_(t,e){const r=this.Xo(this.ko);this.stream=this.n_(t,e),this.stream._o(()=>{r(()=>(this.state=2,this.Qo=this.ii.enqueueAfterDelay(this.Lo,1e4,()=>(this.Uo()&&(this.state=3),Promise.resolve())),this.listener._o()))}),this.stream.uo(i=>{r(()=>this.t_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Wo(){this.state=5,this.Ko.xo(async()=>{this.state=0,this.start()})}t_(t){return y("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Xo(t){return e=>{this.ii.enqueueAndForget(()=>this.ko===t?e():(y("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class wy extends rh{constructor(t,e,r,i,s,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,i,o),this.serializer=s}n_(t,e){return this.connection.wo("Listen",t,e)}onMessage(t){this.Ko.reset();const e=x_(this.serializer,t),r=function(s){if(!("targetChange"in s))return P.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?P.min():o.readTime?Rt(o.readTime):P.min()}(t);return this.listener.r_(e,r)}i_(t){const e={};e.database=Ss(this.serializer),e.addTarget=function(s,o){let a;const c=o.target;if(a=vs(c)?{documents:B_(s,c)}:{query:q_(s,c)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=Gl(s,o.resumeToken);const u=As(s,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(P.min())>0){a.readTime=jr(s,o.snapshotVersion.toTimestamp());const u=As(s,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,t);const r=j_(this.serializer,t);r&&(e.labels=r),this.Ho(e)}s_(t){const e={};e.database=Ss(this.serializer),e.removeTarget=t,this.Ho(e)}}class Ay extends rh{constructor(t,e,r,i,s,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,i,o),this.serializer=s,this.o_=!1}get __(){return this.o_}start(){this.o_=!1,this.lastStreamToken=void 0,super.start()}Zo(){this.o_&&this.a_([])}n_(t,e){return this.connection.wo("Write",t,e)}onMessage(t){if(L(!!t.streamToken),this.lastStreamToken=t.streamToken,this.o_){this.Ko.reset();const e=U_(t.writeResults,t.commitTime),r=Rt(t.commitTime);return this.listener.u_(r,e)}return L(!t.writeResults||t.writeResults.length===0),this.o_=!0,this.listener.c_()}l_(){const t={};t.database=Ss(this.serializer),this.Ho(t)}a_(t){const e={streamToken:this.lastStreamToken,writes:t.map(r=>F_(this.serializer,r))};this.Ho(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ry extends class{}{constructor(t,e,r,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=i,this.h_=!1}P_(){if(this.h_)throw new _(f.FAILED_PRECONDITION,"The client has already been terminated.")}Vo(t,e,r){return this.P_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.Vo(t,e,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===f.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new _(f.UNKNOWN,i.toString())})}yo(t,e,r,i){return this.P_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.yo(t,e,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===f.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new _(f.UNKNOWN,s.toString())})}terminate(){this.h_=!0}}class Py{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.T_=0,this.E_=null,this.d_=!0}A_(){this.T_===0&&(this.R_("Unknown"),this.E_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.E_=null,this.V_("Backend didn't respond within 10 seconds."),this.R_("Offline"),Promise.resolve())))}m_(t){this.state==="Online"?this.R_("Unknown"):(this.T_++,this.T_>=1&&(this.f_(),this.V_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.R_("Offline")))}set(t){this.f_(),this.T_=0,t==="Online"&&(this.d_=!1),this.R_(t)}R_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}V_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.d_?(Ot(e),this.d_=!1):y("OnlineStateTracker",e)}f_(){this.E_!==null&&(this.E_.cancel(),this.E_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sy{constructor(t,e,r,i,s){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.g_=[],this.p_=new Map,this.y_=new Set,this.w_=[],this.S_=s,this.S_.Ys(o=>{r.enqueueAndForget(async()=>{ve(this)&&(y("RemoteStore","Restarting streams for network reachability change."),await async function(c){const u=S(c);u.y_.add(4),await nr(u),u.b_.set("Unknown"),u.y_.delete(4),await yi(u)}(this))})}),this.b_=new Py(r,i)}}async function yi(n){if(ve(n))for(const t of n.w_)await t(!0)}async function nr(n){for(const t of n.w_)await t(!1)}function ih(n,t){const e=S(n);e.p_.has(t.targetId)||(e.p_.set(t.targetId,t),Oo(e)?No(e):Ze(e).Uo()&&Vo(e,t))}function sh(n,t){const e=S(n),r=Ze(e);e.p_.delete(t),r.Uo()&&oh(e,t),e.p_.size===0&&(r.Uo()?r.zo():ve(e)&&e.b_.set("Unknown"))}function Vo(n,t){if(n.D_.Be(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(P.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}Ze(n).i_(t)}function oh(n,t){n.D_.Be(t),Ze(n).s_(t)}function No(n){n.D_=new b_({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),ut:t=>n.p_.get(t)||null,rt:()=>n.datastore.serializer.databaseId}),Ze(n).start(),n.b_.A_()}function Oo(n){return ve(n)&&!Ze(n).$o()&&n.p_.size>0}function ve(n){return S(n).y_.size===0}function ah(n){n.D_=void 0}async function Cy(n){n.p_.forEach((t,e)=>{Vo(n,t)})}async function ky(n,t){ah(n),Oo(n)?(n.b_.m_(t),No(n)):n.b_.set("Unknown")}async function by(n,t,e){if(n.b_.set("Online"),t instanceof Kl&&t.state===2&&t.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.p_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.p_.delete(a),i.D_.removeTarget(a))}(n,t)}catch(r){y("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await Hr(n,r)}else if(t instanceof Tr?n.D_.We(t):t instanceof Wl?n.D_.Ze(t):n.D_.je(t),!e.isEqual(P.min()))try{const r=await eh(n.localStore);e.compareTo(r)>=0&&await function(s,o){const a=s.D_.st(o);return a.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const l=s.p_.get(u);l&&s.p_.set(u,l.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,u)=>{const l=s.p_.get(c);if(!l)return;s.p_.set(c,l.withResumeToken(ct.EMPTY_BYTE_STRING,l.snapshotVersion)),oh(s,c);const h=new $t(l.target,c,u,l.sequenceNumber);Vo(s,h)}),s.remoteSyncer.applyRemoteEvent(a)}(n,e)}catch(r){y("RemoteStore","Failed to raise snapshot:",r),await Hr(n,r)}}async function Hr(n,t,e){if(!Zn(t))throw t;n.y_.add(1),await nr(n),n.b_.set("Offline"),e||(e=()=>eh(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{y("RemoteStore","Retrying IndexedDB access"),await e(),n.y_.delete(1),await yi(n)})}function ch(n,t){return t().catch(e=>Hr(n,e,t))}async function Ei(n){const t=S(n),e=Jt(t);let r=t.g_.length>0?t.g_[t.g_.length-1].batchId:-1;for(;Dy(t);)try{const i=await my(t.localStore,r);if(i===null){t.g_.length===0&&e.zo();break}r=i.batchId,Vy(t,i)}catch(i){await Hr(t,i)}uh(t)&&lh(t)}function Dy(n){return ve(n)&&n.g_.length<10}function Vy(n,t){n.g_.push(t);const e=Jt(n);e.Uo()&&e.__&&e.a_(t.mutations)}function uh(n){return ve(n)&&!Jt(n).$o()&&n.g_.length>0}function lh(n){Jt(n).start()}async function Ny(n){Jt(n).l_()}async function Oy(n){const t=Jt(n);for(const e of n.g_)t.a_(e.mutations)}async function My(n,t,e){const r=n.g_.shift(),i=Ro.from(r,t,e);await ch(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await Ei(n)}async function Ly(n,t){t&&Jt(n).__&&await async function(r,i){if(function(o){return S_(o)&&o!==f.ABORTED}(i.code)){const s=r.g_.shift();Jt(r).Go(),await ch(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Ei(r)}}(n,t),uh(n)&&lh(n)}async function lc(n,t){const e=S(n);e.asyncQueue.verifyOperationInProgress(),y("RemoteStore","RemoteStore received new credentials");const r=ve(e);e.y_.add(3),await nr(e),r&&e.b_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.y_.delete(3),await yi(e)}async function xy(n,t){const e=S(n);t?(e.y_.delete(2),await yi(e)):t||(e.y_.add(2),await nr(e),e.b_.set("Unknown"))}function Ze(n){return n.v_||(n.v_=function(e,r,i){const s=S(e);return s.P_(),new wy(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{_o:Cy.bind(null,n),uo:ky.bind(null,n),r_:by.bind(null,n)}),n.w_.push(async t=>{t?(n.v_.Go(),Oo(n)?No(n):n.b_.set("Unknown")):(await n.v_.stop(),ah(n))})),n.v_}function Jt(n){return n.C_||(n.C_=function(e,r,i){const s=S(e);return s.P_(),new Ay(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{_o:Ny.bind(null,n),uo:Ly.bind(null,n),c_:Oy.bind(null,n),u_:My.bind(null,n)}),n.w_.push(async t=>{t?(n.C_.Go(),await Ei(n)):(await n.C_.stop(),n.g_.length>0&&(y("RemoteStore",`Stopping write stream with ${n.g_.length} pending writes`),n.g_=[]))})),n.C_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo{constructor(t,e,r,i,s){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new ue,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(t,e,r,i,s){const o=Date.now()+r,a=new Mo(t,e,o,i,s);return a.start(r),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new _(f.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Lo(n,t){if(Ot("AsyncQueue",`${t}: ${n}`),Zn(n))return new _(f.UNAVAILABLE,`${t}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(t){this.comparator=t?(e,r)=>t(e,r)||v.comparator(e.key,r.key):(e,r)=>v.comparator(e.key,r.key),this.keyedMap=ln(),this.sortedSet=new x(this.comparator)}static emptySet(t){return new Ne(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,r)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Ne)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const i=e.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const r=new Ne;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=e,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hc{constructor(){this.F_=new x(v.comparator)}track(t){const e=t.doc.key,r=this.F_.get(e);r?t.type!==0&&r.type===3?this.F_=this.F_.insert(e,t):t.type===3&&r.type!==1?this.F_=this.F_.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.F_=this.F_.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.F_=this.F_.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.F_=this.F_.remove(e):t.type===1&&r.type===2?this.F_=this.F_.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.F_=this.F_.insert(e,{type:2,doc:t.doc}):A():this.F_=this.F_.insert(e,t)}M_(){const t=[];return this.F_.inorderTraversal((e,r)=>{t.push(r)}),t}}class qe{constructor(t,e,r,i,s,o,a,c,u){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(t,e,r,i,s){const o=[];return e.forEach(a=>{o.push({type:0,doc:a})}),new qe(t,e,Ne.emptySet(e),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&di(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let i=0;i<e.length;i++)if(e[i].type!==r[i].type||!e[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fy{constructor(){this.x_=void 0,this.listeners=[]}}class Uy{constructor(){this.queries=new Ye(t=>Vl(t),di),this.onlineState="Unknown",this.O_=new Set}}async function By(n,t){const e=S(n),r=t.query;let i=!1,s=e.queries.get(r);if(s||(i=!0,s=new Fy),i)try{s.x_=await e.onListen(r)}catch(o){const a=Lo(o,`Initialization of query '${ws(t.query)}' failed`);return void t.onError(a)}e.queries.set(r,s),s.listeners.push(t),t.N_(e.onlineState),s.x_&&t.B_(s.x_)&&xo(e)}async function qy(n,t){const e=S(n),r=t.query;let i=!1;const s=e.queries.get(r);if(s){const o=s.listeners.indexOf(t);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return e.queries.delete(r),e.onUnlisten(r)}function $y(n,t){const e=S(n);let r=!1;for(const i of t){const s=i.query,o=e.queries.get(s);if(o){for(const a of o.listeners)a.B_(i)&&(r=!0);o.x_=i}}r&&xo(e)}function jy(n,t,e){const r=S(n),i=r.queries.get(t);if(i)for(const s of i.listeners)s.onError(e);r.queries.delete(t)}function xo(n){n.O_.forEach(t=>{t.next()})}class Hy{constructor(t,e,r){this.query=t,this.L_=e,this.k_=!1,this.q_=null,this.onlineState="Unknown",this.options=r||{}}B_(t){if(!this.options.includeMetadataChanges){const r=[];for(const i of t.docChanges)i.type!==3&&r.push(i);t=new qe(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.k_?this.Q_(t)&&(this.L_.next(t),e=!0):this.K_(t,this.onlineState)&&(this.U_(t),e=!0),this.q_=t,e}onError(t){this.L_.error(t)}N_(t){this.onlineState=t;let e=!1;return this.q_&&!this.k_&&this.K_(this.q_,t)&&(this.U_(this.q_),e=!0),e}K_(t,e){if(!t.fromCache)return!0;const r=e!=="Offline";return(!this.options.W_||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}Q_(t){if(t.docChanges.length>0)return!0;const e=this.q_&&this.q_.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}U_(t){t=qe.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.k_=!0,this.L_.next(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hh{constructor(t){this.key=t}}class dh{constructor(t){this.key=t}}class zy{constructor(t,e){this.query=t,this.X_=e,this.ea=null,this.hasCachedResults=!1,this.current=!1,this.ta=C(),this.mutatedKeys=C(),this.na=Nl(t),this.ra=new Ne(this.na)}get ia(){return this.X_}sa(t,e){const r=e?e.oa:new hc,i=e?e.ra:this.ra;let s=e?e.mutatedKeys:this.mutatedKeys,o=i,a=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((l,h)=>{const d=i.get(l),p=fi(this.query,h)?h:null,I=!!d&&this.mutatedKeys.has(d.key),T=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let E=!1;d&&p?d.data.isEqual(p.data)?I!==T&&(r.track({type:3,doc:p}),E=!0):this._a(d,p)||(r.track({type:2,doc:p}),E=!0,(c&&this.na(p,c)>0||u&&this.na(p,u)<0)&&(a=!0)):!d&&p?(r.track({type:0,doc:p}),E=!0):d&&!p&&(r.track({type:1,doc:d}),E=!0,(c||u)&&(a=!0)),E&&(p?(o=o.add(p),s=T?s.add(l):s.delete(l)):(o=o.delete(l),s=s.delete(l)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),s=s.delete(l.key),r.track({type:1,doc:l})}return{ra:o,oa:r,zi:a,mutatedKeys:s}}_a(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r){const i=this.ra;this.ra=t.ra,this.mutatedKeys=t.mutatedKeys;const s=t.oa.M_();s.sort((u,l)=>function(d,p){const I=T=>{switch(T){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return A()}};return I(d)-I(p)}(u.type,l.type)||this.na(u.doc,l.doc)),this.aa(r);const o=e?this.ua():[],a=this.ta.size===0&&this.current?1:0,c=a!==this.ea;return this.ea=a,s.length!==0||c?{snapshot:new qe(this.query,t.ra,i,s,t.mutatedKeys,a===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),ca:o}:{ca:o}}N_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({ra:this.ra,oa:new hc,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{ca:[]}}la(t){return!this.X_.has(t)&&!!this.ra.has(t)&&!this.ra.get(t).hasLocalMutations}aa(t){t&&(t.addedDocuments.forEach(e=>this.X_=this.X_.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.X_=this.X_.delete(e)),this.current=t.current)}ua(){if(!this.current)return[];const t=this.ta;this.ta=C(),this.ra.forEach(r=>{this.la(r.key)&&(this.ta=this.ta.add(r.key))});const e=[];return t.forEach(r=>{this.ta.has(r)||e.push(new dh(r))}),this.ta.forEach(r=>{t.has(r)||e.push(new hh(r))}),e}ha(t){this.X_=t.ss,this.ta=C();const e=this.sa(t.documents);return this.applyChanges(e,!0)}Pa(){return qe.fromInitialDocuments(this.query,this.ra,this.mutatedKeys,this.ea===0,this.hasCachedResults)}}class Wy{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class Ky{constructor(t){this.key=t,this.Ia=!1}}class Gy{constructor(t,e,r,i,s,o){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ta={},this.Ea=new Ye(a=>Vl(a),di),this.da=new Map,this.Aa=new Set,this.Ra=new x(v.comparator),this.Va=new Map,this.ma=new ko,this.fa={},this.ga=new Map,this.pa=Be.On(),this.onlineState="Unknown",this.ya=void 0}get isPrimaryClient(){return this.ya===!0}}async function Qy(n,t){const e=sE(n);let r,i;const s=e.Ea.get(t);if(s)r=s.targetId,e.sharedClientState.addLocalQueryTarget(r),i=s.view.Pa();else{const o=await gy(e.localStore,Mt(t)),a=e.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await Jy(e,t,r,a==="current",o.resumeToken),e.isPrimaryClient&&ih(e.remoteStore,o)}return i}async function Jy(n,t,e,r,i){n.wa=(h,d,p)=>async function(T,E,D,F){let B=E.view.sa(D);B.zi&&(B=await ac(T.localStore,E.query,!1).then(({documents:Q})=>E.view.sa(Q,B)));const Z=F&&F.targetChanges.get(E.targetId),pt=E.view.applyChanges(B,T.isPrimaryClient,Z);return fc(T,E.targetId,pt.ca),pt.snapshot}(n,h,d,p);const s=await ac(n.localStore,t,!0),o=new zy(t,s.ss),a=o.sa(s.documents),c=er.createSynthesizedTargetChangeForCurrentChange(e,r&&n.onlineState!=="Offline",i),u=o.applyChanges(a,n.isPrimaryClient,c);fc(n,e,u.ca);const l=new Wy(t,e,o);return n.Ea.set(t,l),n.da.has(e)?n.da.get(e).push(t):n.da.set(e,[t]),u.snapshot}async function Xy(n,t){const e=S(n),r=e.Ea.get(t),i=e.da.get(r.targetId);if(i.length>1)return e.da.set(r.targetId,i.filter(s=>!di(s,t))),void e.Ea.delete(t);e.isPrimaryClient?(e.sharedClientState.removeLocalQueryTarget(r.targetId),e.sharedClientState.isActiveQueryTarget(r.targetId)||await Cs(e.localStore,r.targetId,!1).then(()=>{e.sharedClientState.clearQueryState(r.targetId),sh(e.remoteStore,r.targetId),ks(e,r.targetId)}).catch(Yn)):(ks(e,r.targetId),await Cs(e.localStore,r.targetId,!0))}async function Yy(n,t,e){const r=oE(n);try{const i=await function(o,a){const c=S(o),u=H.now(),l=a.reduce((p,I)=>p.add(I.key),C());let h,d;return c.persistence.runTransaction("Locally write mutations","readwrite",p=>{let I=Lt(),T=C();return c.Xi.getEntries(p,l).next(E=>{I=E,I.forEach((D,F)=>{F.isValidDocument()||(T=T.add(D))})}).next(()=>c.localDocuments.getOverlayedDocuments(p,I)).next(E=>{h=E;const D=[];for(const F of a){const B=T_(F,h.get(F.key).overlayedDocument);B!=null&&D.push(new Zt(F.key,B,Al(B.value.mapValue),_t.exists(!0)))}return c.mutationQueue.addMutationBatch(p,u,D,a)}).next(E=>{d=E;const D=E.applyToLocalDocumentSet(h,T);return c.documentOverlayCache.saveOverlays(p,E.batchId,D)})}).then(()=>({batchId:d.batchId,changes:Ml(h)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,c){let u=o.fa[o.currentUser.toKey()];u||(u=new x(V)),u=u.insert(a,c),o.fa[o.currentUser.toKey()]=u}(r,i.batchId,e),await rr(r,i.changes),await Ei(r.remoteStore)}catch(i){const s=Lo(i,"Failed to persist write");e.reject(s)}}async function fh(n,t){const e=S(n);try{const r=await fy(e.localStore,t);t.targetChanges.forEach((i,s)=>{const o=e.Va.get(s);o&&(L(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Ia=!0:i.modifiedDocuments.size>0?L(o.Ia):i.removedDocuments.size>0&&(L(o.Ia),o.Ia=!1))}),await rr(e,r,t)}catch(r){await Yn(r)}}function dc(n,t,e){const r=S(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const i=[];r.Ea.forEach((s,o)=>{const a=o.view.N_(t);a.snapshot&&i.push(a.snapshot)}),function(o,a){const c=S(o);c.onlineState=a;let u=!1;c.queries.forEach((l,h)=>{for(const d of h.listeners)d.N_(a)&&(u=!0)}),u&&xo(c)}(r.eventManager,t),i.length&&r.Ta.r_(i),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Zy(n,t,e){const r=S(n);r.sharedClientState.updateQueryState(t,"rejected",e);const i=r.Va.get(t),s=i&&i.key;if(s){let o=new x(v.comparator);o=o.insert(s,nt.newNoDocument(s,P.min()));const a=C().add(s),c=new gi(P.min(),new Map,new x(V),o,a);await fh(r,c),r.Ra=r.Ra.remove(s),r.Va.delete(t),Fo(r)}else await Cs(r.localStore,t,!1).then(()=>ks(r,t,e)).catch(Yn)}async function tE(n,t){const e=S(n),r=t.batch.batchId;try{const i=await dy(e.localStore,t);mh(e,r,null),ph(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await rr(e,i)}catch(i){await Yn(i)}}async function eE(n,t,e){const r=S(n);try{const i=await function(o,a){const c=S(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let l;return c.mutationQueue.lookupMutationBatch(u,a).next(h=>(L(h!==null),l=h.keys(),c.mutationQueue.removeMutationBatch(u,h))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,l,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,l)).next(()=>c.localDocuments.getDocuments(u,l))})}(r.localStore,t);mh(r,t,e),ph(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),await rr(r,i)}catch(i){await Yn(i)}}function ph(n,t){(n.ga.get(t)||[]).forEach(e=>{e.resolve()}),n.ga.delete(t)}function mh(n,t,e){const r=S(n);let i=r.fa[r.currentUser.toKey()];if(i){const s=i.get(t);s&&(e?s.reject(e):s.resolve(),i=i.remove(t)),r.fa[r.currentUser.toKey()]=i}}function ks(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const r of n.da.get(t))n.Ea.delete(r),e&&n.Ta.Sa(r,e);n.da.delete(t),n.isPrimaryClient&&n.ma.Ar(t).forEach(r=>{n.ma.containsKey(r)||gh(n,r)})}function gh(n,t){n.Aa.delete(t.path.canonicalString());const e=n.Ra.get(t);e!==null&&(sh(n.remoteStore,e),n.Ra=n.Ra.remove(t),n.Va.delete(e),Fo(n))}function fc(n,t,e){for(const r of e)r instanceof hh?(n.ma.addReference(r.key,t),nE(n,r)):r instanceof dh?(y("SyncEngine","Document no longer in limbo: "+r.key),n.ma.removeReference(r.key,t),n.ma.containsKey(r.key)||gh(n,r.key)):A()}function nE(n,t){const e=t.key,r=e.path.canonicalString();n.Ra.get(e)||n.Aa.has(r)||(y("SyncEngine","New document in limbo: "+e),n.Aa.add(r),Fo(n))}function Fo(n){for(;n.Aa.size>0&&n.Ra.size<n.maxConcurrentLimboResolutions;){const t=n.Aa.values().next().value;n.Aa.delete(t);const e=new v(M.fromString(t)),r=n.pa.next();n.Va.set(r,new Ky(e)),n.Ra=n.Ra.insert(e,r),ih(n.remoteStore,new $t(Mt(To(e.path)),r,"TargetPurposeLimboResolution",go.ae))}}async function rr(n,t,e){const r=S(n),i=[],s=[],o=[];r.Ea.isEmpty()||(r.Ea.forEach((a,c)=>{o.push(r.wa(c,t,e).then(u=>{if((u||e)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const l=Do.qi(c.targetId,u);s.push(l)}}))}),await Promise.all(o),r.Ta.r_(i),await async function(c,u){const l=S(c);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>m.forEach(u,d=>m.forEach(d.Li,p=>l.persistence.referenceDelegate.addReference(h,d.targetId,p)).next(()=>m.forEach(d.ki,p=>l.persistence.referenceDelegate.removeReference(h,d.targetId,p)))))}catch(h){if(!Zn(h))throw h;y("LocalStore","Failed to update sequence numbers: "+h)}for(const h of u){const d=h.targetId;if(!h.fromCache){const p=l.Ji.get(d),I=p.snapshotVersion,T=p.withLastLimboFreeSnapshotVersion(I);l.Ji=l.Ji.insert(d,T)}}}(r.localStore,s))}async function rE(n,t){const e=S(n);if(!e.currentUser.isEqual(t)){y("SyncEngine","User change. New user:",t.toKey());const r=await th(e.localStore,t);e.currentUser=t,function(s,o){s.ga.forEach(a=>{a.forEach(c=>{c.reject(new _(f.CANCELLED,o))})}),s.ga.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await rr(e,r.ts)}}function iE(n,t){const e=S(n),r=e.Va.get(t);if(r&&r.Ia)return C().add(r.key);{let i=C();const s=e.da.get(t);if(!s)return i;for(const o of s){const a=e.Ea.get(o);i=i.unionWith(a.view.ia)}return i}}function sE(n){const t=S(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=fh.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=iE.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Zy.bind(null,t),t.Ta.r_=$y.bind(null,t.eventManager),t.Ta.Sa=jy.bind(null,t.eventManager),t}function oE(n){const t=S(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=tE.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=eE.bind(null,t),t}class pc{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=_i(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,e){return null}createIndexBackfillerScheduler(t,e){return null}createLocalStore(t){return hy(this.persistence,new uy,t.initialUser,this.serializer)}createPersistence(t){return new ay(bo.zr,this.serializer)}createSharedClientState(t){return new yy}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class aE{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>dc(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=rE.bind(null,this.syncEngine),await xy(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new Uy}()}createDatastore(t){const e=_i(t.databaseInfo.databaseId),r=function(s){return new Ty(s)}(t.databaseInfo);return function(s,o,a,c){return new Ry(s,o,a,c)}(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return function(r,i,s,o,a){return new Sy(r,i,s,o,a)}(this.localStore,this.datastore,t.asyncQueue,e=>dc(this.syncEngine,e,0),function(){return uc.v()?new uc:new Ey}())}createSyncEngine(t,e){return function(i,s,o,a,c,u,l){const h=new Gy(i,s,o,a,c,u);return l&&(h.ya=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(e){const r=S(e);y("RemoteStore","RemoteStore shutting down."),r.y_.add(5),await nr(r),r.S_.shutdown(),r.b_.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cE{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.va(this.observer.next,t)}error(t){this.observer.error?this.va(this.observer.error,t):Ot("Uncaught Error in snapshot listener:",t.toString())}Ca(){this.muted=!0}va(t,e){this.muted||setTimeout(()=>{this.muted||t(e)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uE{constructor(t,e,r,i){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=i,this.user=et.UNAUTHENTICATED,this.clientId=Il.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{y("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(y("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new _(f.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new ue;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=Lo(e,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function Xi(n,t){n.asyncQueue.verifyOperationInProgress(),y("FirestoreClient","Initializing OfflineComponentProvider");const e=await n.getConfiguration();await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await th(t.localStore,i),r=i)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function mc(n,t){n.asyncQueue.verifyOperationInProgress();const e=await hE(n);y("FirestoreClient","Initializing OnlineComponentProvider");const r=await n.getConfiguration();await t.initialize(e,r),n.setCredentialChangeListener(i=>lc(t.remoteStore,i)),n.setAppCheckTokenChangeListener((i,s)=>lc(t.remoteStore,s)),n._onlineComponents=t}function lE(n){return n.name==="FirebaseError"?n.code===f.FAILED_PRECONDITION||n.code===f.UNIMPLEMENTED:!(typeof DOMException<"u"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function hE(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){y("FirestoreClient","Using user provided OfflineComponentProvider");try{await Xi(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!lE(e))throw e;Le("Error using user provided cache. Falling back to memory cache: "+e),await Xi(n,new pc)}}else y("FirestoreClient","Using default OfflineComponentProvider"),await Xi(n,new pc);return n._offlineComponents}async function _h(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(y("FirestoreClient","Using user provided OnlineComponentProvider"),await mc(n,n._uninitializedComponentsProvider._online)):(y("FirestoreClient","Using default OnlineComponentProvider"),await mc(n,new aE))),n._onlineComponents}function dE(n){return _h(n).then(t=>t.syncEngine)}async function gc(n){const t=await _h(n),e=t.eventManager;return e.onListen=Qy.bind(null,t.syncEngine),e.onUnlisten=Xy.bind(null,t.syncEngine),e}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yh(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _c=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eh(n,t,e){if(!e)throw new _(f.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function fE(n,t,e,r){if(t===!0&&r===!0)throw new _(f.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function yc(n){if(!v.isDocumentKey(n))throw new _(f.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Ec(n){if(v.isDocumentKey(n))throw new _(f.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function vi(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":A()}function Wt(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new _(f.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=vi(n);throw new _(f.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vc{constructor(t){var e,r;if(t.host===void 0){if(t.ssl!==void 0)throw new _(f.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new _(f.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}fE("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=yh((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new _(f.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new _(f.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new _(f.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Ii{constructor(t,e,r,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new vc({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new _(f.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new _(f.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new vc(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Ng;switch(r.type){case"firstParty":return new xg(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new _(f.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const r=_c.get(e);r&&(y("ComponentProvider","Removing Datastore"),_c.delete(e),r.terminate())}(this),Promise.resolve()}}function pE(n,t,e,r={}){var i;const s=(n=Wt(n,Ii))._getSettings(),o=`${t}:${e}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Le("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,c;if(typeof r.mockUserToken=="string")a=r.mockUserToken,c=et.MOCK_USER;else{a=Xh(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new _(f.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new et(u)}n._authCredentials=new Og(new vl(a,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new Ie(this.firestore,t,this._query)}}class ht{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Kt(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new ht(this.firestore,t,this._key)}}class Kt extends Ie{constructor(t,e,r){super(t,e,To(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new ht(this.firestore,null,new v(t))}withConverter(t){return new Kt(this.firestore,t,this._path)}}function tn(n,t,...e){if(n=z(n),Eh("collection","path",t),n instanceof Ii){const r=M.fromString(t,...e);return Ec(r),new Kt(n,null,r)}{if(!(n instanceof ht||n instanceof Kt))throw new _(f.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(M.fromString(t,...e));return Ec(r),new Kt(n.firestore,null,r)}}function Uo(n,t,...e){if(n=z(n),arguments.length===1&&(t=Il.V()),Eh("doc","path",t),n instanceof Ii){const r=M.fromString(t,...e);return yc(r),new ht(n,null,new v(r))}{if(!(n instanceof ht||n instanceof Kt))throw new _(f.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(M.fromString(t,...e));return yc(r),new ht(n.firestore,n instanceof Kt?n.converter:null,new v(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mE{constructor(){this.Wa=Promise.resolve(),this.Ga=[],this.za=!1,this.ja=[],this.Ha=null,this.Ja=!1,this.Ya=!1,this.Za=[],this.Ko=new nh(this,"async_queue_retry"),this.Xa=()=>{const e=Ji();e&&y("AsyncQueue","Visibility state changed to "+e.visibilityState),this.Ko.No()};const t=Ji();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Xa)}get isShuttingDown(){return this.za}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.eu(),this.tu(t)}enterRestrictedMode(t){if(!this.za){this.za=!0,this.Ya=t||!1;const e=Ji();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.Xa)}}enqueue(t){if(this.eu(),this.za)return new Promise(()=>{});const e=new ue;return this.tu(()=>this.za&&this.Ya?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Ga.push(t),this.nu()))}async nu(){if(this.Ga.length!==0){try{await this.Ga[0](),this.Ga.shift(),this.Ko.reset()}catch(t){if(!Zn(t))throw t;y("AsyncQueue","Operation failed with retryable error: "+t)}this.Ga.length>0&&this.Ko.xo(()=>this.nu())}}tu(t){const e=this.Wa.then(()=>(this.Ja=!0,t().catch(r=>{this.Ha=r,this.Ja=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Ot("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Ja=!1,r))));return this.Wa=e,e}enqueueAfterDelay(t,e,r){this.eu(),this.Za.indexOf(t)>-1&&(e=0);const i=Mo.createAndSchedule(this,t,e,r,s=>this.ru(s));return this.ja.push(i),i}eu(){this.Ha&&A()}verifyOperationInProgress(){}async iu(){let t;do t=this.Wa,await t;while(t!==this.Wa)}su(t){for(const e of this.ja)if(e.timerId===t)return!0;return!1}ou(t){return this.iu().then(()=>{this.ja.sort((e,r)=>e.targetTimeMs-r.targetTimeMs);for(const e of this.ja)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.iu()})}_u(t){this.Za.push(t)}ru(t){const e=this.ja.indexOf(t);this.ja.splice(e,1)}}function Ic(n){return function(e,r){if(typeof e!="object"||e===null)return!1;const i=e;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(n,["next","error","complete"])}class $e extends Ii{constructor(t,e,r,i){super(t,e,r,i),this.type="firestore",this._queue=function(){return new mE}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Ih(this),this._firestoreClient.terminate()}}function gE(n,t){const e=typeof n=="object"?n:Mc(),r=typeof n=="string"?n:t||"(default)",i=Ms(e,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=Qh("firestore");s&&pE(i,...s)}return i}function vh(n){return n._firestoreClient||Ih(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function Ih(n){var t,e,r;const i=n._freezeSettings(),s=function(a,c,u,l){return new Qg(a,c,u,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,yh(l.experimentalLongPollingOptions),l.useFetchStreams)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,i);n._firestoreClient=new uE(n._authCredentials,n._appCheckCredentials,n._queue,s),!((e=i.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(t){this._byteString=t}static fromBase64String(t){try{return new je(ct.fromBase64String(t))}catch(e){throw new _(f.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new je(ct.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new _(f.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new rt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bo{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new _(f.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new _(f.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return V(this._lat,t._lat)||V(this._long,t._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _E=/^__.*__$/;class yE{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new Zt(t,this.data,this.fieldMask,e,this.fieldTransforms):new tr(t,this.data,e,this.fieldTransforms)}}class Th{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return new Zt(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function wh(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw A()}}class qo{constructor(t,e,r,i,s,o){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.au(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get uu(){return this.settings.uu}cu(t){return new qo(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}lu(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.cu({path:r,hu:!1});return i.Pu(t),i}Iu(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.cu({path:r,hu:!1});return i.au(),i}Tu(t){return this.cu({path:void 0,hu:!0})}Eu(t){return zr(t,this.settings.methodName,this.settings.du||!1,this.path,this.settings.Au)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}au(){if(this.path)for(let t=0;t<this.path.length;t++)this.Pu(this.path.get(t))}Pu(t){if(t.length===0)throw this.Eu("Document fields must not be empty");if(wh(this.uu)&&_E.test(t))throw this.Eu('Document fields cannot begin and end with "__"')}}class EE{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||_i(t)}Ru(t,e,r,i=!1){return new qo({uu:t,methodName:e,Au:r,path:rt.emptyPath(),hu:!1,du:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function $o(n){const t=n._freezeSettings(),e=_i(n._databaseId);return new EE(n._databaseId,!!t.ignoreUndefinedProperties,e)}function vE(n,t,e,r,i,s={}){const o=n.Ru(s.merge||s.mergeFields?2:0,t,e,i);Ho("Data must be an object, but it was:",o,r);const a=Ah(r,o);let c,u;if(s.merge)c=new dt(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const l=[];for(const h of s.mergeFields){const d=bs(t,h,e);if(!o.contains(d))throw new _(f.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);Ph(l,d)||l.push(d)}c=new dt(l),u=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,u=o.fieldTransforms;return new yE(new lt(a),c,u)}class Ai extends wi{_toFieldTransform(t){if(t.uu!==2)throw t.uu===1?t.Eu(`${this._methodName}() can only appear at the top level of your update data`):t.Eu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Ai}}class jo extends wi{_toFieldTransform(t){return new y_(t.path,new On)}isEqual(t){return t instanceof jo}}function IE(n,t,e,r){const i=n.Ru(1,t,e);Ho("Data must be an object, but it was:",i,r);const s=[],o=lt.empty();Ee(r,(c,u)=>{const l=zo(t,c,e);u=z(u);const h=i.Iu(l);if(u instanceof Ai)s.push(l);else{const d=ir(u,h);d!=null&&(s.push(l),o.set(l,d))}});const a=new dt(s);return new Th(o,a,i.fieldTransforms)}function TE(n,t,e,r,i,s){const o=n.Ru(1,t,e),a=[bs(t,r,e)],c=[i];if(s.length%2!=0)throw new _(f.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(bs(t,s[d])),c.push(s[d+1]);const u=[],l=lt.empty();for(let d=a.length-1;d>=0;--d)if(!Ph(u,a[d])){const p=a[d];let I=c[d];I=z(I);const T=o.Iu(p);if(I instanceof Ai)u.push(p);else{const E=ir(I,T);E!=null&&(u.push(p),l.set(p,E))}}const h=new dt(u);return new Th(l,h,o.fieldTransforms)}function wE(n,t,e,r=!1){return ir(e,n.Ru(r?4:3,t))}function ir(n,t){if(Rh(n=z(n)))return Ho("Unsupported field value:",t,n),Ah(n,t);if(n instanceof wi)return function(r,i){if(!wh(i.uu))throw i.Eu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Eu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.hu&&t.uu!==4)throw t.Eu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let c=ir(a,i.Tu(o));c==null&&(c={nullValue:"NULL_VALUE"}),s.push(c),o++}return{arrayValue:{values:s}}}(n,t)}return function(r,i){if((r=z(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return m_(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=H.fromDate(r);return{timestampValue:jr(i.serializer,s)}}if(r instanceof H){const s=new H(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:jr(i.serializer,s)}}if(r instanceof Bo)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof je)return{bytesValue:Gl(i.serializer,r._byteString)};if(r instanceof ht){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Eu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Co(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Eu(`Unsupported field value: ${vi(r)}`)}(n,t)}function Ah(n,t){const e={};return Tl(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Ee(n,(r,i)=>{const s=ir(i,t.lu(r));s!=null&&(e[r]=s)}),{mapValue:{fields:e}}}function Rh(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof H||n instanceof Bo||n instanceof je||n instanceof ht||n instanceof wi)}function Ho(n,t,e){if(!Rh(e)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(e)){const r=vi(e);throw r==="an object"?t.Eu(n+" a custom object"):t.Eu(n+" "+r)}}function bs(n,t,e){if((t=z(t))instanceof Ti)return t._internalPath;if(typeof t=="string")return zo(n,t);throw zr("Field path arguments must be of type string or ",n,!1,void 0,e)}const AE=new RegExp("[~\\*/\\[\\]]");function zo(n,t,e){if(t.search(AE)>=0)throw zr(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new Ti(...t.split("."))._internalPath}catch{throw zr(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function zr(n,t,e,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${t}() called with invalid data`;e&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new _(f.INVALID_ARGUMENT,a+n+c)}function Ph(n,t){return n.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sh{constructor(t,e,r,i,s){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new ht(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new RE(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Ri("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class RE extends Sh{data(){return super.data()}}function Ri(n,t){return typeof t=="string"?zo(n,t):t instanceof Ti?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PE(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new _(f.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Wo{}class Ch extends Wo{}function Pi(n,t,...e){let r=[];t instanceof Wo&&r.push(t),r=r.concat(e),function(s){const o=s.filter(c=>c instanceof Ko).length,a=s.filter(c=>c instanceof Si).length;if(o>1||o>0&&a>0)throw new _(f.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)n=i._apply(n);return n}class Si extends Ch{constructor(t,e,r){super(),this._field=t,this._op=e,this._value=r,this.type="where"}static _create(t,e,r){return new Si(t,e,r)}_apply(t){const e=this._parse(t);return kh(t._query,e),new Ie(t.firestore,t.converter,Is(t._query,e))}_parse(t){const e=$o(t.firestore);return function(s,o,a,c,u,l,h){let d;if(u.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new _(f.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){wc(h,l);const p=[];for(const I of h)p.push(Tc(c,s,I));d={arrayValue:{values:p}}}else d=Tc(c,s,h)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||wc(h,l),d=wE(a,o,h,l==="in"||l==="not-in");return j.create(u,l,d)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}function Pt(n,t,e){const r=t,i=Ri("where",n);return Si._create(i,r,e)}class Ko extends Wo{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new Ko(t,e)}_parse(t){const e=this._queryConstraints.map(r=>r._parse(t)).filter(r=>r.getFilters().length>0);return e.length===1?e[0]:Et.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const c of a)kh(o,c),o=Is(o,c)}(t._query,e),new Ie(t.firestore,t.converter,Is(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Go extends Ch{constructor(t,e){super(),this._field=t,this._direction=e,this.type="orderBy"}static _create(t,e){return new Go(t,e)}_apply(t){const e=function(i,s,o){if(i.startAt!==null)throw new _(f.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new _(f.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const a=new De(s,o);return function(u,l){if(wo(u)===null){const h=hi(u);h!==null&&bh(u,h,l.field)}}(i,a),a}(t._query,this._field,this._direction);return new Ie(t.firestore,t.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new Xe(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(t._query,e))}}function Ci(n,t="asc"){const e=t,r=Ri("orderBy",n);return Go._create(r,e)}function Tc(n,t,e){if(typeof(e=z(e))=="string"){if(e==="")throw new _(f.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Dl(t)&&e.indexOf("/")!==-1)throw new _(f.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const r=t.path.child(M.fromString(e));if(!v.isDocumentKey(r))throw new _(f.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Ha(n,new v(r))}if(e instanceof ht)return Ha(n,e._key);throw new _(f.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${vi(e)}.`)}function wc(n,t){if(!Array.isArray(n)||n.length===0)throw new _(f.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function kh(n,t){if(t.isInequality()){const r=hi(n),i=t.field;if(r!==null&&!r.isEqual(i))throw new _(f.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${i.toString()}'`);const s=wo(n);s!==null&&bh(n,i,s)}const e=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(n.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(e!==null)throw e===t.op?new _(f.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new _(f.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}function bh(n,t,e){if(!e.isEqual(t))throw new _(f.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${e.toString()}' instead.`)}class SE{convertValue(t,e="none"){switch(ge(t)){case 0:return null;case 1:return t.booleanValue;case 2:return $(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(me(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw A()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return Ee(t,(i,s)=>{r[i]=this.convertValue(s,e)}),r}convertGeoPoint(t){return new Bo($(t.latitude),$(t.longitude))}convertArray(t,e){return(t.values||[]).map(r=>this.convertValue(r,e))}convertServerTimestamp(t,e){switch(e){case"previous":const r=yo(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(Dn(t));default:return null}}convertTimestamp(t){const e=Qt(t);return new H(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=M.fromString(t);L(Zl(r));const i=new Vn(r.get(1),r.get(3)),s=new v(r.popFirst(5));return i.isEqual(e)||Ot(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CE(n,t,e){let r;return r=n?e&&(e.merge||e.mergeFields)?n.toFirestore(t,e):n.toFirestore(t):t,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Dh extends Sh{constructor(t,e,r,i,s,o){super(t,e,r,i,o),this._firestore=t,this._firestoreImpl=t,this.metadata=s}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new wr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(Ri("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}}class wr extends Dh{data(t={}){return super.data(t)}}class kE{constructor(t,e,r,i){this._firestore=t,this._userDataWriter=e,this._snapshot=i,this.metadata=new dn(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(r=>{t.call(e,new wr(this._firestore,this._userDataWriter,r.key,r,new dn(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new _(f.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const c=new wr(i._firestore,i._userDataWriter,a.doc.key,a.doc,new dn(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const c=new wr(i._firestore,i._userDataWriter,a.doc.key,a.doc,new dn(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,l=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),l=o.indexOf(a.doc.key)),{type:bE(a.type),doc:c,oldIndex:u,newIndex:l}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function bE(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return A()}}class Vh extends SE{constructor(t){super(),this.firestore=t}convertBytes(t){return new je(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new ht(this.firestore,null,e)}}function DE(n,t,e,...r){n=Wt(n,ht);const i=Wt(n.firestore,$e),s=$o(i);let o;return o=typeof(t=z(t))=="string"||t instanceof Ti?TE(s,"updateDoc",n._key,t,e,r):IE(s,"updateDoc",n._key,t),Qo(i,[o.toMutation(n._key,_t.exists(!0))])}function VE(n){return Qo(Wt(n.firestore,$e),[new Ao(n._key,_t.none())])}function NE(n,t){const e=Wt(n.firestore,$e),r=Uo(n),i=CE(n.converter,t);return Qo(e,[vE($o(n.firestore),"addDoc",r._key,i,n.converter!==null,{}).toMutation(r._key,_t.exists(!1))]).then(()=>r)}function OE(n,...t){var e,r,i;n=z(n);let s={includeMetadataChanges:!1},o=0;typeof t[o]!="object"||Ic(t[o])||(s=t[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(Ic(t[o])){const h=t[o];t[o]=(e=h.next)===null||e===void 0?void 0:e.bind(h),t[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),t[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let c,u,l;if(n instanceof ht)u=Wt(n.firestore,$e),l=To(n._key.path),c={next:h=>{t[o]&&t[o](ME(u,n,h))},error:t[o+1],complete:t[o+2]};else{const h=Wt(n,Ie);u=Wt(h.firestore,$e),l=h._query;const d=new Vh(u);c={next:p=>{t[o]&&t[o](new kE(u,d,h,p))},error:t[o+1],complete:t[o+2]},PE(n._query)}return function(d,p,I,T){const E=new cE(T),D=new Hy(p,E,I);return d.asyncQueue.enqueueAndForget(async()=>By(await gc(d),D)),()=>{E.Ca(),d.asyncQueue.enqueueAndForget(async()=>qy(await gc(d),D))}}(vh(u),l,a,c)}function Qo(n,t){return function(r,i){const s=new ue;return r.asyncQueue.enqueueAndForget(async()=>Yy(await dE(r),i,s)),s.promise}(vh(n),t)}function ME(n,t,e){const r=e.docs.get(t._key),i=new Vh(n);return new Dh(n,i,t._key,r,new dn(e.hasPendingWrites,e.fromCache),t.converter)}function LE(){return new jo("serverTimestamp")}(function(t,e=!0){(function(i){Je=i})(He),Oe(new le("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new $e(new Mg(r.getProvider("auth-internal")),new Ug(r.getProvider("app-check-internal")),function(u,l){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new _(f.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Vn(u.options.projectId,l)}(o,i),o);return s=Object.assign({useFetchStreams:e},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),zt(Ua,"4.1.0",t),zt(Ua,"4.1.0","esm2017")})();const xE={apiKey:"AIzaSyB313xFH3zkk4wKfyCgvmwihBlQrcwx_GA",authDomain:"moody-2c94c.firebaseapp.com",projectId:"moody-2c94c",storageBucket:"moody-2c94c.appspot.com",messagingSenderId:"529485044406",appId:"1:529485044406:web:3e9a8785af61c5e9346417"},Nh=Oc(xE),Te=Rm(Nh),FE=new Ct,te=gE(Nh),Oh=document.getElementById("logged-out-view"),Mh=document.getElementById("logged-in-view"),UE=document.getElementById("sign-in-with-google-btn"),Jo=document.getElementById("email-input"),Xo=document.getElementById("password-input"),BE=document.getElementById("sign-in-btn"),qE=document.getElementById("create-account-btn"),$E=document.getElementById("sign-out-btn"),jE=document.getElementById("user-profile-picture"),HE=document.getElementById("user-greeting"),Yo=document.getElementsByClassName("mood-emoji-btn"),Ac=document.getElementById("post-input"),zE=document.getElementById("post-btn"),WE=document.getElementById("all-filter-btn"),Lh=document.getElementsByClassName("filter-btn"),Rc=document.getElementById("posts");UE.addEventListener("click",KE);BE.addEventListener("click",GE);qE.addEventListener("click",QE);$E.addEventListener("click",JE);for(let n of Yo)n.addEventListener("click",_v);for(let n of Lh)n.addEventListener("click",wv);zE.addEventListener("click",lv);let ki=0;const ee="posts";dp(Te,n=>{n?(fv(),pv(jE,n),mv(HE,n),qh(WE),xh(n)):dv()});function KE(){Op(Te,FE).then(n=>{console.log("Signed in with Google")}).catch(n=>{console.error(n.message)})}function GE(){const n=Jo.value,t=Xo.value;up(Te,n,t).then(e=>{Bh()}).catch(e=>{console.error(e.message)})}function QE(){const n=Jo.value,t=Xo.value;cp(Te,n,t).then(e=>{Bh()}).catch(e=>{console.error(e.message)})}function JE(){fp(Te).then(()=>{}).catch(n=>{console.error(n.message)})}async function XE(n,t){try{const e=await NE(tn(te,ee),{body:n,uid:t.uid,createdAt:LE(),mood:ki})}catch(e){console.error(e.message)}}async function YE(n,t){const e=Uo(te,ee,n);await DE(e,{body:t})}async function ZE(n){await VE(Uo(te,ee,n))}function bi(n,t){tn(te,ee),OE(n,e=>{hv(Rc),e.forEach(r=>{cv(Rc,r)})})}function tv(n){const t=new Date;t.setHours(0,0,0,0);const e=new Date;e.setHours(23,59,59,999);const r=tn(te,ee),i=Pi(r,Pt("uid","==",n.uid),Pt("createdAt",">=",t),Pt("createdAt","<=",e),Ci("createdAt","desc"));bi(i)}function ev(n){const t=new Date;t.setHours(0,0,0,0),t.getDay()===0?t.setDate(t.getDate()-6):t.setDate(t.getDate()-t.getDay()+1);const e=new Date;e.setHours(23,59,59,999);const r=tn(te,ee),i=Pi(r,Pt("uid","==",n.uid),Pt("createdAt",">=",t),Pt("createdAt","<=",e),Ci("createdAt","desc"));bi(i)}function nv(n){const t=new Date;t.setHours(0,0,0,0),t.setDate(1);const e=new Date;e.setHours(23,59,59,999);const r=tn(te,ee),i=Pi(r,Pt("uid","==",n.uid),Pt("createdAt",">=",t),Pt("createdAt","<=",e),Ci("createdAt","desc"));bi(i)}function xh(n){const t=tn(te,ee),e=Pi(t,Pt("uid","==",n.uid),Ci("createdAt","desc"));bi(e)}function rv(n){const t=document.createElement("div");t.className="header";const e=document.createElement("h3");e.textContent=gv(n.createdAt),t.appendChild(e);const r=document.createElement("img");return r.src=`assets/emojis/${n.mood}.png`,t.appendChild(r),t}function iv(n){const t=document.createElement("p");return t.innerHTML=uv(n.body),t}function sv(n){const t=n.id,e=n.data(),r=document.createElement("button");return r.textContent="Edit",r.classList.add("edit-color"),r.addEventListener("click",function(){const i=prompt("Edit the post",e.body);i&&YE(t,i)}),r}function ov(n){const t=n.id,e=document.createElement("button");return e.textContent="Delete",e.classList.add("delete-color"),e.addEventListener("click",function(){ZE(t)}),e}function av(n){const t=document.createElement("div");return t.className="footer",t.appendChild(sv(n)),t.appendChild(ov(n)),t}function cv(n,t){const e=t.data(),r=document.createElement("div");r.className="post",r.appendChild(rv(e)),r.appendChild(iv(e)),r.appendChild(av(t)),n.appendChild(r)}function uv(n){return n.replaceAll(`
`,"<br>")}function lv(){const n=Ac.value,t=Te.currentUser;n&&ki&&(XE(n,t),Ds(Ac),Ev(Yo))}function hv(n){n.innerHTML=""}function dv(){Uh(Mh),Fh(Oh)}function fv(){Uh(Oh),Fh(Mh)}function Fh(n){n.style.display="flex"}function Uh(n){n.style.display="none"}function Ds(n){n.value=""}function Bh(){Ds(Jo),Ds(Xo)}function pv(n,t){const e=t.photoURL;e?n.src=e:n.src="assets/images/default-profile-picture.jpeg"}function mv(n,t){const e=t.displayName;if(e){const r=e.split(" ")[0];n.textContent=`Hey ${r}, how are you?`}else n.textContent="Hey friend, how are you?"}function gv(n){if(!n)return"Date processing";const t=n.toDate(),e=t.getDate(),r=t.getFullYear(),s=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][t.getMonth()];let o=t.getHours(),a=t.getMinutes();return o=o<10?"0"+o:o,a=a<10?"0"+a:a,`${e} ${s} ${r} - ${o}:${a}`}function _v(n){const t=n.currentTarget.id;yv(t),ki=vv(t)}function yv(n,t){for(let e of Yo)n===e.id?(e.classList.remove("unselected-emoji"),e.classList.add("selected-emoji")):(e.classList.remove("selected-emoji"),e.classList.add("unselected-emoji"))}function Ev(n){for(let t of n)t.classList.remove("selected-emoji"),t.classList.remove("unselected-emoji");ki=0}function vv(n){return Number(n.slice(5))}function Iv(n){for(let t of n)t.classList.remove("selected-filter")}function qh(n){n.classList.add("selected-filter")}function Tv(n,t){n==="today"?tv(t):n==="week"?ev(t):n==="month"?nv(t):xh(t)}function wv(n){const t=Te.currentUser,e=n.target.id,r=e.split("-")[0],i=document.getElementById(e);Iv(Lh),qh(i),Tv(r,t)}
