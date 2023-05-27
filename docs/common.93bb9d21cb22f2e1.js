"use strict";(self.webpackChunkrick_and_morty=self.webpackChunkrick_and_morty||[]).push([[592],{8220:(m,l,n)=>{n.d(l,{A:()=>r});var c=n(4755),a=n(2504);let r=(()=>{class u{constructor(){this._bgImageUrl="",this.width=""}set bgImageUrl(d){this._bgImageUrl=`url('${d}') 0/auto 100%`}get bgImageUrl(){return this._bgImageUrl}get hostWidth(){return this.width=this.width||"100%"}get hostBackground(){return this._bgImageUrl}}return u.\u0275fac=function(d){return new(d||u)},u.\u0275cmp=a.Xpm({type:u,selectors:[["app-planet"]],hostVars:4,hostBindings:function(d,i){2&d&&a.Udp("--d",i.hostWidth)("background",i.hostBackground)},inputs:{bgImageUrl:"bgImageUrl",width:"width"},standalone:!0,features:[a.jDz],decls:1,vars:2,consts:[[1,"planet"]],template:function(d,i){1&d&&a._UZ(0,"div",0),2&d&&a.Udp("background",i.bgImageUrl)},dependencies:[c.ez],styles:["[_nghost-%COMP%]{display:inline-block;margin:5px;border-radius:50%;box-shadow:-20px -20px 50px 2px #000 inset,0 0 20px 2px #000;animation:_ngcontent-%COMP%_spin 5s linear infinite;transform:rotate(-10deg)}@keyframes _ngcontent-%COMP%_spin{to{background-position:200% 0}}"]}),u})()},1637:(m,l,n)=>{n.d(l,{v:()=>r});var c=n(4128),a=n(4004);function r(i,f){if(function h(i){return"residents"in i}(i))return u(i,"residents",f);if(function d(i){return"characters"in i}(i))return u(i,"characters",f);throw new Error("Unknown entity type")}function u(i,f,E){const _=i[f].map(v=>E.get(v));return(0,c.D)(_).pipe((0,a.U)(v=>({...i,[f]:v})))}},2857:(m,l,n)=>{function c(a){return a.every(r=>"object"==typeof r&&"id"in r&&"name"in r&&"status"in r&&"species"in r&&"type"in r&&"gender"in r&&"origin"in r&&"location"in r&&"image"in r&&"episode"in r&&"url"in r&&"created"in r)}n.d(l,{b:()=>c})},1360:(m,l,n)=>{function c(a){return a.length>0&&a.every(r=>"string"==typeof r)}n.d(l,{G:()=>c})},6301:(m,l,n)=>{function c(a){return Math.floor(Math.random()*a)+1}n.d(l,{M:()=>c})},6985:(m,l,n)=>{n.d(l,{N:()=>c});const c={production:!1,baseURL:"https://rickandmortyapi.com/api/",character:"character/",episode:"episode/",location:"location/",random:"random"}},4128:(m,l,n)=>{n.d(l,{D:()=>f});var c=n(9751),a=n(4742),r=n(8421),u=n(3269),h=n(5403),d=n(3268),i=n(1810);function f(...E){const _=(0,u.jO)(E),{args:v,keys:A}=(0,a.D)(E),D=new c.y(I=>{const{length:y}=v;if(!y)return void I.complete();const M=new Array(y);let C=y,U=y;for(let P=0;P<y;P++){let O=!1;(0,r.Xf)(v[P]).subscribe((0,h.x)(I,x=>{O||(O=!0,U--),M[P]=x},()=>C--,void 0,()=>{(!C||!O)&&(U||I.next(A?(0,i.n)(A,M):M),I.complete())}))}});return _?D.pipe((0,d.Z)(_)):D}},2099:(m,l,n)=>{n.d(l,{g:()=>B});var c=n(727);class a extends c.w0{constructor(t,e){super()}schedule(t,e=0){return this}}const r={setInterval(o,t,...e){const{delegate:s}=r;return s?.setInterval?s.setInterval(o,t,...e):setInterval(o,t,...e)},clearInterval(o){const{delegate:t}=r;return(t?.clearInterval||clearInterval)(o)},delegate:void 0};var u=n(8737);const d={now:()=>(d.delegate||Date).now(),delegate:void 0};class i{constructor(t,e=i.now){this.schedulerActionCtor=t,this.now=e}schedule(t,e=0,s){return new this.schedulerActionCtor(this,t).schedule(s,e)}}i.now=d.now;const E=new class f extends i{constructor(t,e=i.now){super(t,e),this.actions=[],this._active=!1}flush(t){const{actions:e}=this;if(this._active)return void e.push(t);let s;this._active=!0;do{if(s=t.execute(t.state,t.delay))break}while(t=e.shift());if(this._active=!1,s){for(;t=e.shift();)t.unsubscribe();throw s}}}(class h extends a{constructor(t,e){super(t,e),this.scheduler=t,this.work=e,this.pending=!1}schedule(t,e=0){var s;if(this.closed)return this;this.state=t;const g=this.id,p=this.scheduler;return null!=g&&(this.id=this.recycleAsyncId(p,g,e)),this.pending=!0,this.delay=e,this.id=null!==(s=this.id)&&void 0!==s?s:this.requestAsyncId(p,this.id,e),this}requestAsyncId(t,e,s=0){return r.setInterval(t.flush.bind(t,this),s)}recycleAsyncId(t,e,s=0){if(null!=s&&this.delay===s&&!1===this.pending)return e;null!=e&&r.clearInterval(e)}execute(t,e){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;const s=this._execute(t,e);if(s)return s;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(t,e){let g,s=!1;try{this.work(t)}catch(p){s=!0,g=p||new Error("Scheduled action threw falsy error")}if(s)return this.unsubscribe(),g}unsubscribe(){if(!this.closed){const{id:t,scheduler:e}=this,{actions:s}=e;this.work=this.state=this.scheduler=null,this.pending=!1,(0,u.P)(s,this),null!=t&&(this.id=this.recycleAsyncId(e,t,null)),this.delay=null,super.unsubscribe()}}}),_=E;var v=n(7272),A=n(5698),D=n(4482),I=n(5403),y=n(5032),C=n(9718),U=n(5577),P=n(8421);function O(o,t){return t?e=>(0,v.z)(t.pipe((0,A.q)(1),function M(){return(0,D.e)((o,t)=>{o.subscribe((0,I.x)(t,y.Z))})}()),e.pipe(O(o))):(0,U.z)((e,s)=>(0,P.Xf)(o(e,s)).pipe((0,A.q)(1),(0,C.h)(e)))}var x=n(9751),b=n(3532);function B(o,t=E){const e=function R(o=0,t,e=_){let s=-1;return null!=t&&((0,b.K)(t)?e=t:s=t),new x.y(g=>{let p=function w(o){return o instanceof Date&&!isNaN(o)}(o)?+o-e.now():o;p<0&&(p=0);let W=0;return e.schedule(function(){g.closed||(g.next(W++),0<=s?this.schedule(void 0,s):g.complete())},p)})}(o,t);return O(()=>e)}}}]);