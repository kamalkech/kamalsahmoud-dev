var qe=Object.defineProperty;var ze=(r,e,n)=>e in r?qe(r,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):r[e]=n;var ce=(r,e,n)=>(ze(r,typeof e!="symbol"?e+"":e,n),n);import{S as Be,i as Ke,s as Je,a as We,e as j,c as He,b as V,g as H,t as N,d as F,f as C,h as D,j as Fe,k as Ge,o as pe,l as Ye,m as Me,n as Xe,p as le,q as K,r as Ze,u as Qe,v as xe,w as q,x as Z,y as z,z as B,A as Le}from"./chunks/index-cb480fde.js";import{w as me}from"./chunks/index-7eb8000d.js";class ee{constructor(e,n){ce(this,"name","HttpError");ce(this,"stack");this.status=e,this.message=n!=null?n:`Error: ${e}`}toString(){return this.message}}class Ue{constructor(e,n){this.status=e,this.location=n}}function et(r,e){return r==="/"||e==="ignore"?r:e==="never"?r.endsWith("/")?r.slice(0,-1):r:e==="always"&&!r.endsWith("/")?r+"/":r}function tt(r){for(const e in r)r[e]=r[e].replace(/%23/g,"#").replace(/%3[Bb]/g,";").replace(/%2[Cc]/g,",").replace(/%2[Ff]/g,"/").replace(/%3[Ff]/g,"?").replace(/%3[Aa]/g,":").replace(/%40/g,"@").replace(/%26/g,"&").replace(/%3[Dd]/g,"=").replace(/%2[Bb]/g,"+").replace(/%24/g,"$");return r}class nt extends URL{get hash(){throw new Error("url.hash is inaccessible from load. Consider accessing hash from the page store within the script tag of your component.")}}let Ae="",De="";function rt(r){Ae=r.base,De=r.assets||Ae}function Oe(r){let e=r.baseURI;if(!e){const n=r.getElementsByTagName("base");e=n.length?n[0].href:r.URL}return e}function he(){return{x:pageXOffset,y:pageYOffset}}function Pe(r){return r.composedPath().find(n=>n instanceof Node&&n.nodeName.toUpperCase()==="A")}function je(r){return r instanceof SVGAElement?new URL(r.href.baseVal,document.baseURI):new URL(r.href)}function Ne(r){const e=me(r);let n=!0;function s(){n=!0,e.update(t=>t)}function a(t){n=!1,e.set(t)}function f(t){let i;return e.subscribe(l=>{(i===void 0||n&&l!==i)&&t(i=l)})}return{notify:s,set:a,subscribe:f}}function at(){const{set:r,subscribe:e}=me(!1);let n;async function s(){clearTimeout(n);const a=await fetch(`${De}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(a.ok){const{version:f}=await a.json(),t=f!=="1662638555235";return t&&(r(!0),clearTimeout(n)),t}else throw new Error(`Version check failed: ${a.status}`)}return{subscribe:e,check:s}}function st(r){let e=5381,n=r.length;if(typeof r=="string")for(;n;)e=e*33^r.charCodeAt(--n);else for(;n;)e=e*33^r[--n];return(e>>>0).toString(36)}const _e=window.fetch;function it(r,e){let s=`script[sveltekit\\:data-type="data"][sveltekit\\:data-url=${JSON.stringify(typeof r=="string"?r:r.url)}]`;e&&typeof e.body=="string"&&(s+=`[sveltekit\\:data-body="${st(e.body)}"]`);const a=document.querySelector(s);if(a&&a.textContent){const{body:f,...t}=JSON.parse(a.textContent);return Promise.resolve(new Response(f,t))}return _e(r,e)}const ot=/^(\.\.\.)?(\w+)(?:=(\w+))?$/;function ct(r){const e=[],n=[];let s=!0;return{pattern:r===""?/^\/$/:new RegExp(`^${decodeURIComponent(r).split(/(?:@[a-zA-Z0-9_-]+)?(?:\/|$)/).map((f,t,i)=>{const l=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(f);if(l)return e.push(l[1]),n.push(l[2]),"(?:/(.*))?";const h=t===i.length-1;return f&&"/"+f.split(/\[(.+?)\]/).map((m,L)=>{if(L%2){const A=ot.exec(m);if(!A)throw new Error(`Invalid param: ${m}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,E,J,O]=A;return e.push(J),n.push(O),E?"(.*?)":"([^/]+?)"}return h&&m.includes(".")&&(s=!1),m.normalize().replace(/%5[Bb]/g,"[").replace(/%5[Dd]/g,"]").replace(/#/g,"%23").replace(/\?/g,"%3F").replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}).join("")}).join("")}${s?"/?":""}$`),names:e,types:n}}function lt(r,e,n,s){const a={};for(let f=0;f<e.length;f+=1){const t=e[f],i=n[f],l=r[f+1]||"";if(i){const h=s[i];if(!h)throw new Error(`Missing "${i}" param matcher`);if(!h(l))return}a[t]=l}return a}function ft(r,e,n){return Object.entries(e).map(([s,[a,f,t,i]])=>{const{pattern:l,names:h,types:m}=ct(s),L={id:s,exec:A=>{const E=l.exec(A);if(E)return lt(E,h,m,n)},errors:a.map(A=>r[A]),layouts:f.map(A=>r[A]),leaf:r[t],uses_server_data:!!i};return L.errors.length=L.layouts.length=Math.max(L.errors.length,L.layouts.length),L})}function ut(r,e){return new ee(r,e)}function dt(r){let e,n,s;var a=r[0][0];function f(t){return{props:{data:t[1],errors:t[4]}}}return a&&(e=new a(f(r))),{c(){e&&q(e.$$.fragment),n=j()},l(t){e&&Z(e.$$.fragment,t),n=j()},m(t,i){e&&z(e,t,i),V(t,n,i),s=!0},p(t,i){const l={};if(i&2&&(l.data=t[1]),i&16&&(l.errors=t[4]),a!==(a=t[0][0])){if(e){H();const h=e;N(h.$$.fragment,1,0,()=>{B(h,1)}),F()}a?(e=new a(f(t)),q(e.$$.fragment),C(e.$$.fragment,1),z(e,n.parentNode,n)):e=null}else a&&e.$set(l)},i(t){s||(e&&C(e.$$.fragment,t),s=!0)},o(t){e&&N(e.$$.fragment,t),s=!1},d(t){t&&D(n),e&&B(e,t)}}}function pt(r){let e,n,s;var a=r[0][0];function f(t){return{props:{data:t[1],$$slots:{default:[gt]},$$scope:{ctx:t}}}}return a&&(e=new a(f(r))),{c(){e&&q(e.$$.fragment),n=j()},l(t){e&&Z(e.$$.fragment,t),n=j()},m(t,i){e&&z(e,t,i),V(t,n,i),s=!0},p(t,i){const l={};if(i&2&&(l.data=t[1]),i&1053&&(l.$$scope={dirty:i,ctx:t}),a!==(a=t[0][0])){if(e){H();const h=e;N(h.$$.fragment,1,0,()=>{B(h,1)}),F()}a?(e=new a(f(t)),q(e.$$.fragment),C(e.$$.fragment,1),z(e,n.parentNode,n)):e=null}else a&&e.$set(l)},i(t){s||(e&&C(e.$$.fragment,t),s=!0)},o(t){e&&N(e.$$.fragment,t),s=!1},d(t){t&&D(n),e&&B(e,t)}}}function ht(r){let e,n,s;var a=r[0][1];function f(t){return{props:{data:t[2],errors:t[4]}}}return a&&(e=new a(f(r))),{c(){e&&q(e.$$.fragment),n=j()},l(t){e&&Z(e.$$.fragment,t),n=j()},m(t,i){e&&z(e,t,i),V(t,n,i),s=!0},p(t,i){const l={};if(i&4&&(l.data=t[2]),i&16&&(l.errors=t[4]),a!==(a=t[0][1])){if(e){H();const h=e;N(h.$$.fragment,1,0,()=>{B(h,1)}),F()}a?(e=new a(f(t)),q(e.$$.fragment),C(e.$$.fragment,1),z(e,n.parentNode,n)):e=null}else a&&e.$set(l)},i(t){s||(e&&C(e.$$.fragment,t),s=!0)},o(t){e&&N(e.$$.fragment,t),s=!1},d(t){t&&D(n),e&&B(e,t)}}}function _t(r){let e,n,s;var a=r[0][1];function f(t){return{props:{data:t[2],$$slots:{default:[mt]},$$scope:{ctx:t}}}}return a&&(e=new a(f(r))),{c(){e&&q(e.$$.fragment),n=j()},l(t){e&&Z(e.$$.fragment,t),n=j()},m(t,i){e&&z(e,t,i),V(t,n,i),s=!0},p(t,i){const l={};if(i&4&&(l.data=t[2]),i&1033&&(l.$$scope={dirty:i,ctx:t}),a!==(a=t[0][1])){if(e){H();const h=e;N(h.$$.fragment,1,0,()=>{B(h,1)}),F()}a?(e=new a(f(t)),q(e.$$.fragment),C(e.$$.fragment,1),z(e,n.parentNode,n)):e=null}else a&&e.$set(l)},i(t){s||(e&&C(e.$$.fragment,t),s=!0)},o(t){e&&N(e.$$.fragment,t),s=!1},d(t){t&&D(n),e&&B(e,t)}}}function mt(r){let e,n,s;var a=r[0][2];function f(t){return{props:{data:t[3]}}}return a&&(e=new a(f(r))),{c(){e&&q(e.$$.fragment),n=j()},l(t){e&&Z(e.$$.fragment,t),n=j()},m(t,i){e&&z(e,t,i),V(t,n,i),s=!0},p(t,i){const l={};if(i&8&&(l.data=t[3]),a!==(a=t[0][2])){if(e){H();const h=e;N(h.$$.fragment,1,0,()=>{B(h,1)}),F()}a?(e=new a(f(t)),q(e.$$.fragment),C(e.$$.fragment,1),z(e,n.parentNode,n)):e=null}else a&&e.$set(l)},i(t){s||(e&&C(e.$$.fragment,t),s=!0)},o(t){e&&N(e.$$.fragment,t),s=!1},d(t){t&&D(n),e&&B(e,t)}}}function gt(r){let e,n,s,a;const f=[_t,ht],t=[];function i(l,h){return l[0][2]?0:1}return e=i(r),n=t[e]=f[e](r),{c(){n.c(),s=j()},l(l){n.l(l),s=j()},m(l,h){t[e].m(l,h),V(l,s,h),a=!0},p(l,h){let m=e;e=i(l),e===m?t[e].p(l,h):(H(),N(t[m],1,1,()=>{t[m]=null}),F(),n=t[e],n?n.p(l,h):(n=t[e]=f[e](l),n.c()),C(n,1),n.m(s.parentNode,s))},i(l){a||(C(n),a=!0)},o(l){N(n),a=!1},d(l){t[e].d(l),l&&D(s)}}}function Ce(r){let e,n=r[6]&&Ie(r);return{c(){e=Ye("div"),n&&n.c(),this.h()},l(s){e=Me(s,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var a=Xe(e);n&&n.l(a),a.forEach(D),this.h()},h(){le(e,"id","svelte-announcer"),le(e,"aria-live","assertive"),le(e,"aria-atomic","true"),K(e,"position","absolute"),K(e,"left","0"),K(e,"top","0"),K(e,"clip","rect(0 0 0 0)"),K(e,"clip-path","inset(50%)"),K(e,"overflow","hidden"),K(e,"white-space","nowrap"),K(e,"width","1px"),K(e,"height","1px")},m(s,a){V(s,e,a),n&&n.m(e,null)},p(s,a){s[6]?n?n.p(s,a):(n=Ie(s),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(s){s&&D(e),n&&n.d()}}}function Ie(r){let e;return{c(){e=Ze(r[7])},l(n){e=Qe(n,r[7])},m(n,s){V(n,e,s)},p(n,s){s&128&&xe(e,n[7])},d(n){n&&D(e)}}}function wt(r){let e,n,s,a,f;const t=[pt,dt],i=[];function l(m,L){return m[0][1]?0:1}e=l(r),n=i[e]=t[e](r);let h=r[5]&&Ce(r);return{c(){n.c(),s=We(),h&&h.c(),a=j()},l(m){n.l(m),s=He(m),h&&h.l(m),a=j()},m(m,L){i[e].m(m,L),V(m,s,L),h&&h.m(m,L),V(m,a,L),f=!0},p(m,[L]){let A=e;e=l(m),e===A?i[e].p(m,L):(H(),N(i[A],1,1,()=>{i[A]=null}),F(),n=i[e],n?n.p(m,L):(n=i[e]=t[e](m),n.c()),C(n,1),n.m(s.parentNode,s)),m[5]?h?h.p(m,L):(h=Ce(m),h.c(),h.m(a.parentNode,a)):h&&(h.d(1),h=null)},i(m){f||(C(n),f=!0)},o(m){N(n),f=!1},d(m){i[e].d(m),m&&D(s),h&&h.d(m),m&&D(a)}}}function bt(r,e,n){let{stores:s}=e,{page:a}=e,{components:f}=e,{data_0:t=null}=e,{data_1:i=null}=e,{data_2:l=null}=e,{errors:h}=e;Fe("__svelte__",s),Ge(s.page.notify);let m=!1,L=!1,A=null;return pe(()=>{const E=s.page.subscribe(()=>{m&&(n(6,L=!0),n(7,A=document.title||"untitled page"))});return n(5,m=!0),E}),r.$$set=E=>{"stores"in E&&n(8,s=E.stores),"page"in E&&n(9,a=E.page),"components"in E&&n(0,f=E.components),"data_0"in E&&n(1,t=E.data_0),"data_1"in E&&n(2,i=E.data_1),"data_2"in E&&n(3,l=E.data_2),"errors"in E&&n(4,h=E.errors)},r.$$.update=()=>{r.$$.dirty&768&&s.page.set(a)},[f,t,i,l,h,m,L,A,s,a]}class vt extends Be{constructor(e){super(),Ke(this,e,bt,wt,Je,{stores:8,page:9,components:0,data_0:1,data_1:2,data_2:3,errors:4})}}const yt=function(){const e=document.createElement("link").relList;return e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}(),kt=function(r,e){return new URL(r,e).href},Te={},fe=function(e,n,s){return!n||n.length===0?e():Promise.all(n.map(a=>{if(a=kt(a,s),a in Te)return;Te[a]=!0;const f=a.endsWith(".css"),t=f?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${t}`))return;const i=document.createElement("link");if(i.rel=f?"stylesheet":yt,f||(i.as="script",i.crossOrigin=""),i.href=a,document.head.appendChild(i),f)return new Promise((l,h)=>{i.addEventListener("load",l),i.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${a}`)))})})).then(()=>e())},$t={},te=[()=>fe(()=>import("./chunks/0-72999e93.js"),["chunks/0-72999e93.js","components/pages/_layout.svelte-e70d5c90.js","assets/+layout-4cad905f.css","chunks/index-cb480fde.js"],import.meta.url),()=>fe(()=>import("./chunks/1-36b4c007.js"),["chunks/1-36b4c007.js","components/error.svelte-3a365bc6.js","chunks/index-cb480fde.js"],import.meta.url),()=>fe(()=>import("./chunks/2-8d1aa962.js"),["chunks/2-8d1aa962.js","components/pages/_page.svelte-46efb570.js","assets/+page-f1b5804a.css","chunks/index-cb480fde.js","chunks/index-7eb8000d.js"],import.meta.url)],Et={"":[[1],[0],2]},Ve="sveltekit:scroll",W="sveltekit:index",ue=ft(te,Et,$t),Rt=te[0](),St=te[1]();let X={};try{X=JSON.parse(sessionStorage[Ve])}catch{}function de(r){X[r]=he()}function Lt({target:r,base:e,trailing_slash:n}){var Ee;const s=[],a={url:Ne({}),page:Ne({}),navigating:me(null),updated:at()},f={id:null,promise:null},t={before_navigate:[],after_navigate:[]};let i={branch:[],error:null,session_id:0,url:null},l=!1,h=!0,m=!1,L=1,A=null,E,J=!0,O=(Ee=history.state)==null?void 0:Ee[W];O||(O=Date.now(),history.replaceState({...history.state,[W]:O},"",location.href));const ne=X[O];ne&&(history.scrollRestoration="manual",scrollTo(ne.x,ne.y));let re=!1,ae,ge;async function we(o,{noscroll:p=!1,replaceState:g=!1,keepfocus:c=!1,state:u={}},k){if(typeof o=="string"&&(o=new URL(o,Oe(document))),J)return ie({url:o,scroll:p?he():null,keepfocus:c,redirect_chain:k,details:{state:u,replaceState:g},accepted:()=>{},blocked:()=>{}});await Y(o)}async function be(o){const p=$e(o);if(!p)throw new Error("Attempted to prefetch a URL that does not belong to this app");return f.promise=ke(p),f.id=p.id,f.promise}async function ve(o,p,g,c){var b,U,R;const u=$e(o),k=ge={};let _=u&&await ke(u);if(!_&&o.origin===location.origin&&o.pathname===location.pathname&&(_=await x({status:404,error:new Error(`Not found: ${o.pathname}`),url:o,routeId:null})),!_)return await Y(o),!1;if(o=(u==null?void 0:u.url)||o,ge!==k)return!1;if(s.length=0,_.type==="redirect")if(p.length>10||p.includes(o.pathname))_=await x({status:500,error:new Error("Redirect loop"),url:o,routeId:null});else return J?we(new URL(_.location,o).href,{},[...p,o.pathname]):await Y(new URL(_.location,location.href)),!1;else((U=(b=_.props)==null?void 0:b.page)==null?void 0:U.status)>=400&&await a.updated.check()&&await Y(o);if(m=!0,g&&g.details){const{details:S}=g,y=S.replaceState?0:1;S.state[W]=O+=y,history[S.replaceState?"replaceState":"pushState"](S.state,"",o)}if(l?(i=_.state,_.props.page&&(_.props.page.url=o),E.$set(_.props)):ye(_),g){const{scroll:S,keepfocus:y}=g;if(!y){const w=document.body,d=w.getAttribute("tabindex");w.tabIndex=-1,w.focus({preventScroll:!0}),setTimeout(()=>{var v;(v=getSelection())==null||v.removeAllRanges()}),d!==null?w.setAttribute("tabindex",d):w.removeAttribute("tabindex")}if(await Le(),h){const w=o.hash&&document.getElementById(o.hash.slice(1));S?scrollTo(S.x,S.y):w?w.scrollIntoView():scrollTo(0,0)}}else await Le();f.promise=null,f.id=null,h=!0,_.props.page&&(ae=_.props.page);const $=_.state.branch[_.state.branch.length-1];J=((R=$==null?void 0:$.node.shared)==null?void 0:R.router)!==!1,c&&c(),m=!1}function ye(o){i=o.state;const p=document.querySelector("style[data-sveltekit]");if(p&&p.remove(),ae=o.props.page,E=new vt({target:r,props:{...o.props,stores:a},hydrate:!0}),J){const g={from:null,to:new URL(location.href)};t.after_navigate.forEach(c=>c(g))}l=!0}async function Q({url:o,params:p,branch:g,status:c,error:u,routeId:k,validation_errors:_}){const $=g.filter(Boolean),b={type:"loaded",state:{url:o,params:p,branch:g,error:u,session_id:L},props:{components:$.map(y=>y.node.component),errors:_}};let U={},R=!1;for(let y=0;y<$.length;y+=1)U={...U,...$[y].data},(R||!i.branch.some(w=>w===$[y]))&&(b.props[`data_${y}`]=U,R=!0);if(!i.url||o.href!==i.url.href||i.error!==u||R){b.props.page={error:u,params:p,routeId:k,status:c,url:o,data:U};const y=(w,d)=>{Object.defineProperty(b.props.page,w,{get:()=>{throw new Error(`$page.${w} has been replaced by $page.url.${d}`)}})};y("origin","origin"),y("path","pathname"),y("query","searchParams")}return b}async function se({node:o,parent:p,url:g,params:c,routeId:u,server_data:k}){var S,y;const _={params:new Set,url:!1,dependencies:new Set,parent:!1};function $(...w){for(const d of w){const{href:v}=new URL(d,g);_.dependencies.add(v)}}let b=null;o.server&&(_.dependencies.add(g.href),_.url=!0);const U={};for(const w in c)Object.defineProperty(U,w,{get(){return _.params.add(w),c[w]},enumerable:!0});const R=new nt(g);if((S=o.shared)!=null&&S.load){const w={routeId:u,params:U,data:k,get url(){return _.url=!0,R},async fetch(d,v){let P;typeof d=="string"?P=d:(P=d.url,v={body:d.method==="GET"||d.method==="HEAD"?void 0:await d.blob(),cache:d.cache,credentials:d.credentials,headers:d.headers,integrity:d.integrity,keepalive:d.keepalive,method:d.method,mode:d.mode,redirect:d.redirect,referrer:d.referrer,referrerPolicy:d.referrerPolicy,signal:d.signal,...v});const I=new URL(P,g).href;return $(I),l?_e(I,v):it(P,v)},setHeaders:()=>{},depends:$,get parent(){return _.parent=!0,p},get props(){throw new Error("@migration task: Replace `props` with `data` stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},get session(){throw new Error("session is no longer available. See https://github.com/sveltejs/kit/discussions/5883")},get stuff(){throw new Error("@migration task: Remove stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")}};b=(y=await o.shared.load.call(null,w))!=null?y:null}return{node:o,data:b||k,uses:_}}async function ke({id:o,url:p,params:g,route:c}){if(f.id===o&&f.promise)return f.promise;const{errors:u,layouts:k,leaf:_}=c,$=i.url&&{url:o!==i.url.pathname+i.url.search,params:Object.keys(g).filter(d=>i.params[d]!==g[d])};[...u,...k,_].forEach(d=>d==null?void 0:d().catch(()=>{}));const b=[...k,_],U=[];for(let d=0;d<b.length;d++)if(!b[d])U.push(!1);else{const v=i.branch[d],P=!v||$.url&&v.uses.url||$.params.some(I=>v.uses.params.has(I))||Array.from(v.uses.dependencies).some(I=>s.some(M=>M(I)))||v.uses.parent&&U.includes(!0);U.push(P)}let R=null;if(c.uses_server_data){try{const d=await _e(`${p.pathname}${p.pathname.endsWith("/")?"":"/"}__data.json${p.search}`);if(R=await d.json(),!d.ok)throw R}catch{throw new Error("TODO render fallback error page")}if(R.type==="redirect")return R}const S=R==null?void 0:R.nodes,y=b.map(async(d,v)=>Promise.resolve().then(async()=>{var G;if(!d)return;const P=await d(),I=i.branch[v];if(U[v]||!I||P!==I.node){const T=S==null?void 0:S[v];if(T!=null&&T.status)throw ut(T.status,T.message);if(T!=null&&T.error)throw T.error;return await se({node:P,url:p,params:g,routeId:c.id,parent:async()=>{var Se;const Re={};for(let oe=0;oe<v;oe+=1)Object.assign(Re,(Se=await y[oe])==null?void 0:Se.data);return Re},server_data:(G=T==null?void 0:T.data)!=null?G:null})}else return I}));for(const d of y)d.catch(()=>{});const w=[];for(let d=0;d<b.length;d+=1)if(b[d])try{w.push(await y[d])}catch(v){const P=v;if(P instanceof Ue)return{type:"redirect",location:P.location};const I=v instanceof ee?v.status:500;for(;d--;)if(u[d]){let M,G=d;for(;!w[G];)G-=1;try{return M={node:await u[d](),data:{},uses:{params:new Set,url:!1,dependencies:new Set,parent:!1}},await Q({url:p,params:g,branch:w.slice(0,G+1).concat(M),status:I,error:P,routeId:c.id})}catch{continue}}return await x({status:I,error:P,url:p,routeId:c.id})}else w.push(void 0);return await Q({url:p,params:g,branch:w,status:200,error:null,routeId:c.id})}async function x({status:o,error:p,url:g,routeId:c}){const u={},k=await se({node:await Rt,url:g,params:u,routeId:c,parent:()=>Promise.resolve({}),server_data:null}),_={node:await St,data:null,uses:{params:new Set,url:!1,dependencies:new Set,parent:!1}};return await Q({url:g,params:u,branch:[k,_],status:o,error:p,routeId:c})}function $e(o){if(o.origin!==location.origin||!o.pathname.startsWith(e))return;const p=decodeURI(o.pathname.slice(e.length)||"/");for(const g of ue){const c=g.exec(p);if(c){const u=new URL(o.origin+et(o.pathname,n)+o.search+o.hash);return{id:u.pathname+u.search,route:g,params:tt(c),url:u}}}}async function ie({url:o,scroll:p,keepfocus:g,redirect_chain:c,details:u,accepted:k,blocked:_}){const $=i.url;let b=!1;const U={from:$,to:o,cancel:()=>b=!0};if(t.before_navigate.forEach(R=>R(U)),b){_();return}de(O),k(),l&&a.navigating.set({from:i.url,to:o}),await ve(o,c,{scroll:p,keepfocus:g,details:u},()=>{const R={from:$,to:o};t.after_navigate.forEach(S=>S(R)),a.navigating.set(null)})}function Y(o){return location.href=o.href,new Promise(()=>{})}return{after_navigate:o=>{pe(()=>(t.after_navigate.push(o),()=>{const p=t.after_navigate.indexOf(o);t.after_navigate.splice(p,1)}))},before_navigate:o=>{pe(()=>(t.before_navigate.push(o),()=>{const p=t.before_navigate.indexOf(o);t.before_navigate.splice(p,1)}))},disable_scroll_handling:()=>{(m||!l)&&(h=!1)},goto:(o,p={})=>we(o,p,[]),invalidate:o=>{if(o===void 0){for(const p of i.branch)p==null||p.uses.dependencies.add("");s.push(()=>!0)}else if(typeof o=="function")s.push(o);else{const{href:p}=new URL(o,location.href);s.push(g=>g===p)}return A||(A=Promise.resolve().then(async()=>{await ve(new URL(location.href),[]),A=null})),A},prefetch:async o=>{const p=new URL(o,Oe(document));await be(p)},prefetch_routes:async o=>{const g=(o?ue.filter(c=>o.some(u=>c.exec(u))):ue).map(c=>Promise.all([...c.layouts,c.leaf].map(u=>u==null?void 0:u())));await Promise.all(g)},_start_router:()=>{history.scrollRestoration="manual",addEventListener("beforeunload",c=>{let u=!1;const k={from:i.url,to:null,cancel:()=>u=!0};t.before_navigate.forEach(_=>_(k)),u?(c.preventDefault(),c.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){de(O);try{sessionStorage[Ve]=JSON.stringify(X)}catch{}}});const o=c=>{const u=Pe(c);u&&u.href&&u.hasAttribute("sveltekit:prefetch")&&be(je(u))};let p;const g=c=>{clearTimeout(p),p=setTimeout(()=>{var u;(u=c.target)==null||u.dispatchEvent(new CustomEvent("sveltekit:trigger_prefetch",{bubbles:!0}))},20)};addEventListener("touchstart",o),addEventListener("mousemove",g),addEventListener("sveltekit:trigger_prefetch",o),addEventListener("click",c=>{if(!J||c.button||c.which!==1||c.metaKey||c.ctrlKey||c.shiftKey||c.altKey||c.defaultPrevented)return;const u=Pe(c);if(!u||!u.href)return;const k=u instanceof SVGAElement,_=je(u);if(!k&&!(_.protocol==="https:"||_.protocol==="http:"))return;const $=(u.getAttribute("rel")||"").split(/\s+/);if(u.hasAttribute("download")||$.includes("external")||u.hasAttribute("sveltekit:reload")||(k?u.target.baseVal:u.target))return;const[b,U]=_.href.split("#");if(U!==void 0&&b===location.href.split("#")[0]){re=!0,de(O),a.page.set({...ae,url:_}),a.page.notify();return}ie({url:_,scroll:u.hasAttribute("sveltekit:noscroll")?he():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:_.href===location.href},accepted:()=>c.preventDefault(),blocked:()=>c.preventDefault()})}),addEventListener("popstate",c=>{if(c.state&&J){if(c.state[W]===O)return;ie({url:new URL(location.href),scroll:X[c.state[W]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{O=c.state[W]},blocked:()=>{const u=O-c.state[W];history.go(u)}})}}),addEventListener("hashchange",()=>{re&&(re=!1,history.replaceState({...history.state,[W]:++O},"",location.href))});for(const c of document.querySelectorAll("link"))c.rel==="icon"&&(c.href=c.href);addEventListener("pageshow",c=>{c.persisted&&a.navigating.set(null)})},_hydrate:async({status:o,error:p,node_ids:g,params:c,routeId:u})=>{const k=new URL(location.href);let _;try{const $=(S,y)=>{const w=document.querySelector(`script[sveltekit\\:data-type="${S}"]`);return w!=null&&w.textContent?JSON.parse(w.textContent):y},b=$("server_data",[]),U=$("validation_errors",void 0),R=g.map(async(S,y)=>{var w;return se({node:await te[S](),url:k,params:c,routeId:u,parent:async()=>{const d={};for(let v=0;v<y;v+=1)Object.assign(d,(await R[v]).data);return d},server_data:(w=b[y])!=null?w:null})});_=await Q({url:k,params:c,branch:await Promise.all(R),status:o,error:p!=null&&p.__is_http_error?new ee(p.status,p.message):p,validation_errors:U,routeId:u})}catch($){const b=$;if(b instanceof Ue){await Y(new URL($.location,location.href));return}_=await x({status:b instanceof ee?b.status:500,error:b,url:k,routeId:u})}ye(_)}}}function Ut(r){r.client}function jt(r){}async function Nt({paths:r,target:e,route:n,spa:s,trailing_slash:a,hydrate:f}){const t=Lt({target:e,base:r.base,trailing_slash:a});Ut({client:t}),rt(r),f&&await t._hydrate(f),n&&(s&&t.goto(location.href,{replaceState:!0}),t._start_router()),dispatchEvent(new CustomEvent("sveltekit:start"))}export{jt as set_public_env,Nt as start};
