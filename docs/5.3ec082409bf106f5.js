"use strict";(self.webpackChunkrick_and_morty=self.webpackChunkrick_and_morty||[]).push([[5],{2005:(I,d,o)=>{o.r(d),o.d(d,{EpisodeComponent:()=>A});var p=o(4755),c=o(6985),m=o(6301),h=o(3900),x=o(9646),l=o(4004),f=o(5527),u=o(8505),C=o(8746),w=o(1360),O=o(1637),t=o(2504),b=o(3144),M=o(2962);let g=(()=>{class n{constructor(e,i){this.httpClient=e,this.loaderSvc=i}getRandomEpisode(){return this.loaderSvc.isLoading=!0,this.httpClient.get(c.N.baseURL+c.N.episode+(0,m.M)(51)).pipe((0,h.w)(e=>e&&(0,w.G)(e.characters)?(0,O.v)(e,this.httpClient):(0,x.of)(e)),(0,l.U)(e=>this.loaderSvc.isLoading?null:e),(0,f.g)(1e3),(0,u.b)(e=>{if(e){const i=JSON.parse(sessionStorage.getItem("episode")||"[]");i.push(e),sessionStorage.setItem("episode",JSON.stringify(i))}}),(0,C.x)(()=>{this.loaderSvc.isLoading=!1}))}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(b.eN),t.LFG(M.D))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var v=o(2857),P=o(8220),_=o(2680);function y(n,r){if(1&n&&(t.TgZ(0,"li",18),t._UZ(1,"img",19),t.TgZ(2,"p",20),t._uU(3),t.qZA()()),2&n){const e=r.$implicit;t.xp6(1),t.Q6J("src",e.image,t.LSH),t.xp6(2),t.Oqu(e.name)}}function Z(n,r){if(1&n){const e=t.EpF();t.TgZ(0,"button",21),t.NdJ("click",function(){t.CHM(e);const a=t.oxw(2).ngIf,s=t.oxw();return t.KtG(s.showMore(a.characters))}),t._uU(1,"Show More"),t.qZA()}}function E(n,r){if(1&n&&(t.TgZ(0,"div",13)(1,"h3",14),t._uU(2),t.qZA(),t.TgZ(3,"ul",15),t.YNc(4,y,4,2,"li",16),t.ALo(5,"slice"),t.qZA(),t.YNc(6,Z,2,0,"button",17),t.qZA()),2&n){const e=t.oxw().ngIf,i=t.oxw();t.xp6(2),t.hij("Characters ",i.displayLimit,""),t.xp6(2),t.Q6J("ngForOf",t.Dn7(5,4,e.characters,0,i.displayLimit))("ngForTrackBy",i.trackByFunction),t.xp6(2),t.Q6J("ngIf",i.displayLimit<e.characters.length)}}function T(n,r){if(1&n){const e=t.EpF();t.TgZ(0,"section",1)(1,"div",2)(2,"div",3)(3,"button",4),t.NdJ("click",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.generateEpisode())}),t._uU(4,"Teleport"),t.qZA(),t.TgZ(5,"div",5)(6,"ul",6)(7,"li",7)(8,"p",8),t._uU(9,"Name:"),t.qZA(),t.TgZ(10,"p",9),t._uU(11),t.qZA()(),t.TgZ(12,"li",7)(13,"p",8),t._uU(14,"Date:"),t.qZA(),t.TgZ(15,"p",9),t._uU(16),t.qZA()(),t.TgZ(17,"li",7)(18,"p",8),t._uU(19,"Episode:"),t.qZA(),t.TgZ(20,"p",9),t._uU(21),t.qZA()()(),t.TgZ(22,"button",10),t.NdJ("click",function(a){const S=t.CHM(e).ngIf,L=t.oxw();return t.KtG(L.addToFavorite(S,a))}),t._uU(23,"add to favorite"),t.qZA()(),t._UZ(24,"app-planet",11),t.qZA(),t.YNc(25,E,7,8,"div",12),t.qZA()()}if(2&n){const e=r.ngIf,i=t.oxw();t.xp6(11),t.Oqu(e.name),t.xp6(5),t.Oqu(e.air_date),t.xp6(5),t.Oqu(e.episode),t.xp6(3),t.Q6J("bgImageUrl","./assets/sun.webp"),t.xp6(1),t.Q6J("ngIf",i.isCharacterArray(e.characters))}}let A=(()=>{class n{constructor(e,i,a,s){this.episodeSVC=e,this.renderer=i,this.breakpointObserver=a,this.cdRef=s,this.randomEpisode$=this.episodeSVC.getRandomEpisode(),this.isCharacterArray=v.b,this.displayLimit=0}ngOnInit(){this.subscription=this.breakpointObserver.observe(["(min-width: 768px)","(min-width: 1200px)"]).subscribe(e=>{e.matches?(e.breakpoints["(min-width: 768px)"]&&this.updateLimit(4),e.breakpoints["(min-width: 1200px)"]&&this.updateLimit(2)):this.updateLimit(2)})}trackByFunction(e,i){return i.id}generateEpisode(){this.randomEpisode$=this.episodeSVC.getRandomEpisode()}addToFavorite(e,i){this.renderer.setAttribute(i.target,"disabled","true");const a=JSON.parse(localStorage.getItem("episode")||"[]");a.some(s=>s&&s.id===e.id)||(a.push(e),localStorage.setItem("episode",JSON.stringify(a)))}showMore(e){this.updateLimit(e.length)}updateLimit(e){this.displayLimit=e,this.cdRef.detectChanges()}ngOnDestroy(){this.subscription?.unsubscribe()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(g),t.Y36(t.Qsj),t.Y36(_.Yg),t.Y36(t.sBO))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-episode"]],standalone:!0,features:[t._Bn([g]),t.jDz],decls:2,vars:3,consts:[["class","section",4,"ngIf"],[1,"section"],[1,"container"],[1,"wrap"],["type","button",1,"generate-btn",3,"click"],[1,"episode-wrap"],[1,"episode-list"],[1,"episode-item"],[1,"episode-title"],[1,"episode-text"],["type","button",1,"episode-btn",3,"click"],[1,"episode-img",3,"bgImageUrl"],["class","character-wrap",4,"ngIf"],[1,"character-wrap"],[1,"character-title"],[1,"character-list"],["class","character-item",4,"ngFor","ngForOf","ngForTrackBy"],["class","generate-btn show-more",3,"click",4,"ngIf"],[1,"character-item"],["alt","character",1,"character-img",3,"src"],[1,"character-name"],[1,"generate-btn","show-more",3,"click"]],template:function(e,i){1&e&&(t.YNc(0,T,26,5,"section",0),t.ALo(1,"async")),2&e&&t.Q6J("ngIf",t.lcZ(1,1,i.randomEpisode$))},dependencies:[p.ez,p.sg,p.O5,p.Ov,p.OU,P.A],styles:[".section[_ngcontent-%COMP%]{padding:90px 0 30px;position:relative}@media (min-width: 768px){.section[_ngcontent-%COMP%]{padding:40px 0}}@media (min-width: 1200px){.section[_ngcontent-%COMP%]{padding:60px 0}}.container[_ngcontent-%COMP%]{width:100%;margin:0 auto;padding:0 16px}@media (min-width: 375px){.container[_ngcontent-%COMP%]{width:375px}}@media (min-width: 768px){.container[_ngcontent-%COMP%]{padding:0 32px;width:768px}}@media (min-width: 1200px){.container[_ngcontent-%COMP%]{padding:0 40px;width:1200px}}.wrap[_ngcontent-%COMP%]{display:flex}@media (max-width: 767px){.wrap[_ngcontent-%COMP%]{flex-direction:column-reverse}}@media (min-width: 768px){.wrap[_ngcontent-%COMP%]{width:640px;justify-content:space-between;margin:0 auto}}@media (min-width: 1200px){.wrap[_ngcontent-%COMP%]{align-items:center;width:750px;margin-left:100px}}.generate-btn[_ngcontent-%COMP%]{width:180px;height:55px;padding:4px;border:2px solid #87f54e;background-color:#87f54e4d;box-shadow:0 2px 55px 27px #87f54e;color:#fff;font-size:16px;border-radius:32px;cursor:pointer;transition:.25s linear;margin:0 auto}@media (min-width: 768px){.generate-btn[_ngcontent-%COMP%]{margin:250px 0 0;width:210px;height:70px;font-size:20px}}@media (min-width: 1200px){.generate-btn[_ngcontent-%COMP%]{margin:0;width:230px}}.generate-btn[_ngcontent-%COMP%]:hover{transform:translateY(5%);border:2px solid #ec01a5;background-color:#ec01a54d;box-shadow:0 2px 56px 17px #ec01a5}.episode-wrap[_ngcontent-%COMP%]{width:340px;padding:30px;margin-bottom:70px;border-radius:40px;background-image:linear-gradient(rgba(236,1,165,.5) 0%,rgba(236,1,165,.25) 50%,rgba(236,1,165,.02) 100%);box-shadow:0 -30px 90px 40px #ec01a54d}@media (min-width: 768px){.episode-wrap[_ngcontent-%COMP%]{width:380px;margin:0}}@media (min-width: 1200px){.episode-wrap[_ngcontent-%COMP%]{width:400px}}.episode-img[_ngcontent-%COMP%]{position:absolute;width:180px;height:180px}@media (max-width: 767px){.episode-img[_ngcontent-%COMP%]{top:-30px;right:-40px}}@media (min-width: 768px) and (max-width: 1199px){.episode-img[_ngcontent-%COMP%]{width:240px;height:240px;top:10px;left:0}}@media (min-width: 1200px){.episode-img[_ngcontent-%COMP%]{width:360px;height:360px;top:0;right:0}}.episode-list[_ngcontent-%COMP%]{margin-bottom:40px}@media (min-width: 768px){.episode-list[_ngcontent-%COMP%]{margin-bottom:30px}}.episode-item[_ngcontent-%COMP%]:not(:last-child){margin-bottom:8px}@media (min-width: 768px){.episode-item[_ngcontent-%COMP%]:not(:last-child){margin-bottom:10px}}.episode-title[_ngcontent-%COMP%]{font-size:20px;font-weight:600;color:#fff;margin-bottom:4px}@media (min-width: 768px){.episode-title[_ngcontent-%COMP%]{font-size:26px}}.episode-text[_ngcontent-%COMP%]{font-size:20px;color:#fff;margin-left:30px}@media (min-width: 768px){.episode-text[_ngcontent-%COMP%]{font-size:26px}}.episode-btn[_ngcontent-%COMP%]{width:160px;height:40px;display:block;margin:0 auto;border:1px solid white;border-radius:32px;background-color:transparent;cursor:pointer;font-size:14px;transition:.25s linear;color:#fff}.episode-btn[_ngcontent-%COMP%]:hover{transform:translateY(5%);box-shadow:inset 0 0 58px 2px #ec01a580}@media (min-width: 768px){.episode-btn[_ngcontent-%COMP%]{font-size:16px}}.character-wrap[_ngcontent-%COMP%]{margin-top:70px}.character-title[_ngcontent-%COMP%]{font-size:22px;font-weight:600;color:#fff;text-align:center;margin-bottom:30px}@media (min-width: 768px){.character-title[_ngcontent-%COMP%]{font-size:28px}}.character-list[_ngcontent-%COMP%]{width:320px;display:grid;grid-template-columns:repeat(2,1fr);gap:20px;margin:0 auto}@media (min-width: 768px){.character-list[_ngcontent-%COMP%]{width:680px;grid-template-columns:repeat(4,1fr)}}@media (min-width: 1200px){.character-list[_ngcontent-%COMP%]{width:830px;grid-template-columns:repeat(5,1fr)}}.character-item[_ngcontent-%COMP%]{width:150px;background-color:#87f54e80;box-shadow:0 0 20px 5px #87f54e80;border-radius:28px;overflow:hidden;cursor:pointer;transition:.25s linear}.character-item[_ngcontent-%COMP%]:hover{transform:scale(1.1)}.character-img[_ngcontent-%COMP%]{width:150px;height:130px}.character-name[_ngcontent-%COMP%]{font-size:14px;text-align:center;padding:10px;color:#fff}@media (min-width: 768px){.character-name[_ngcontent-%COMP%]{font-size:16px}}.show-more[_ngcontent-%COMP%]{display:block;margin:40px auto 0}"],changeDetection:0}),n})()}}]);