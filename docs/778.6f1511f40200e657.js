"use strict";(self.webpackChunkrick_and_morty=self.webpackChunkrick_and_morty||[]).push([[778],{7778:(Nn,ot,l)=>{l.r(ot),l.d(ot,{LocationComponent:()=>En});var p=l(4755),rt=l(6985),de=l(3900),he=l(9646),it=l(4004),pe=l(5527),fe=l(8505),ge=l(8746),me=l(1360),_e=l(6301),ye=l(1637),o=l(2504),ve=l(3144),Ce=l(2962);let st=(()=>{class n{constructor(t,r){this.httpClient=t,this.loaderSvc=r}getRandomLocation(){return this.loaderSvc.isLoading=!0,this.httpClient.get(rt.N.baseURL+rt.N.location+(0,_e.M)(126)).pipe((0,de.w)(t=>t&&(0,me.G)(t.residents)?(0,ye.v)(t,this.httpClient):(0,he.of)(t)),(0,it.U)(t=>this.loaderSvc.isLoading?null:t),(0,pe.g)(1e3),(0,fe.b)(t=>{if(t){const r=JSON.parse(sessionStorage.getItem("location")||"[]");r.push(t),sessionStorage.setItem("location",JSON.stringify(r))}}),(0,ge.x)(()=>{this.loaderSvc.isLoading=!1}))}}return n.\u0275fac=function(t){return new(t||n)(o.LFG(ve.eN),o.LFG(Ce.D))},n.\u0275prov=o.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();l(2076),l(4128);const C=new o.OlP("CallSetDisabledState",{providedIn:"root",factory:()=>E}),E="always";let Zt=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({}),n})(),Cn=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[Zt]}),n})(),bn=(()=>{class n{static withConfig(t){return{ngModule:n,providers:[{provide:C,useValue:t.callSetDisabledState??E}]}}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[Cn]}),n})();var Mn=l(2857),An=l(2680);function Dn(n,e){if(1&n){const t=o.EpF();o.TgZ(0,"li",19),o._UZ(1,"img",20),o.TgZ(2,"div",21)(3,"ul",22)(4,"li",23)(5,"p",24),o._uU(6,"Name:"),o.qZA(),o.TgZ(7,"p",25),o._uU(8),o.qZA()(),o.TgZ(9,"li",23)(10,"p",24),o._uU(11,"Status:"),o.qZA(),o.TgZ(12,"p",25),o._uU(13),o.qZA()()(),o.TgZ(14,"button",26),o.NdJ("click",function(i){const a=o.CHM(t).$implicit,d=o.oxw(3);return o.KtG(d.addToFavoriteResident(a,i))}),o._uU(15,"add to favorite"),o.qZA()()()}if(2&n){const t=e.$implicit;o.xp6(1),o.Q6J("src",t.image,o.LSH),o.xp6(7),o.Oqu(t.name),o.xp6(5),o.Oqu(t.status)}}function On(n,e){if(1&n){const t=o.EpF();o.TgZ(0,"button",27),o.NdJ("click",function(){o.CHM(t);const i=o.oxw(2).ngIf,s=o.oxw();return o.KtG(s.showMore(i.residents))}),o._uU(1,"Show More"),o.qZA()}}function xn(n,e){if(1&n&&(o.TgZ(0,"div",14)(1,"p",15),o._uU(2,"Residents"),o.qZA(),o.TgZ(3,"ul",16),o.YNc(4,Dn,16,3,"li",17),o.ALo(5,"slice"),o.qZA(),o.YNc(6,On,2,0,"button",18),o.qZA()),2&n){const t=o.oxw().ngIf,r=o.oxw();o.xp6(4),o.Q6J("ngForOf",o.Dn7(5,3,t.residents,0,r.displayLimit))("ngForTrackBy",r.trackByFunction),o.xp6(2),o.Q6J("ngIf",r.displayLimit<t.residents.length)}}function wn(n,e){1&n&&(o.TgZ(0,"div",28)(1,"p",29),o._uU(2,"No residents"),o.qZA()())}function Fn(n,e){if(1&n){const t=o.EpF();o.TgZ(0,"section",1)(1,"div",2),o._UZ(2,"img",3)(3,"img",4),o.TgZ(4,"div",5)(5,"div",6)(6,"div",7)(7,"p",8),o._uU(8,"Planet:"),o.qZA(),o.TgZ(9,"p",9),o._uU(10),o.qZA()(),o.TgZ(11,"div",7)(12,"p",8),o._uU(13,"Type:"),o.qZA(),o.TgZ(14,"p",9),o._uU(15),o.qZA()(),o.TgZ(16,"div",7)(17,"p",8),o._uU(18,"Dimension:"),o.qZA(),o.TgZ(19,"p",9),o._uU(20),o.qZA()(),o.TgZ(21,"button",10),o.NdJ("click",function(i){const a=o.CHM(t).ngIf,d=o.oxw();return o.KtG(d.addToFavorite(a,i))}),o._uU(22,"add to favorite"),o.qZA()(),o.TgZ(23,"button",11),o.NdJ("click",function(){o.CHM(t);const i=o.oxw();return o.KtG(i.generateLocation())}),o._uU(24,"Teleport"),o.qZA()(),o.YNc(25,xn,7,7,"div",12),o.YNc(26,wn,3,0,"ng-template",null,13,o.W1O),o.qZA()()}if(2&n){const t=e.ngIf,r=o.MAs(27),i=o.oxw();o.xp6(10),o.Oqu(t.name),o.xp6(5),o.Oqu(t.type),o.xp6(5),o.Oqu(t.dimension),o.xp6(5),o.Q6J("ngIf",t.residents.length&&i.isCharacterArray(t.residents))("ngIfElse",r)}}let En=(()=>{class n{constructor(t,r,i,s){this.locationSVC=t,this.renderer=r,this.breakpointObserver=i,this.cdRef=s,this.randomLocation$=this.locationSVC.getRandomLocation(),this.isCharacterArray=Mn.b,this.displayLimit=0,this.subscription=this.breakpointObserver.observe(["(min-width: 768px)"]).subscribe(a=>{a.matches?a.breakpoints["(min-width: 768px)"]&&this.updateLimit(3):this.updateLimit(1)})}trackByFunction(t,r){return r.id}generateLocation(){this.randomLocation$=this.locationSVC.getRandomLocation()}addToFavorite(t,r){this.renderer.setAttribute(r.target,"disabled","true");const i=JSON.parse(localStorage.getItem("location")||"[]");i.some(s=>s&&s.id===t.id)||(i.push(t),localStorage.setItem("location",JSON.stringify(i)))}addToFavoriteResident(t,r){this.renderer.setAttribute(r.target,"disabled","true");const i=JSON.parse(localStorage.getItem("character")||"[]");i.some(s=>s&&s.id===t.id)||(i.push(t),localStorage.setItem("character",JSON.stringify(i)))}updateLimit(t){this.displayLimit=t,this.cdRef.detectChanges()}showMore(t){this.displayLimit=t.length}}return n.\u0275fac=function(t){return new(t||n)(o.Y36(st),o.Y36(o.Qsj),o.Y36(An.Yg),o.Y36(o.sBO))},n.\u0275cmp=o.Xpm({type:n,selectors:[["app-location"]],standalone:!0,features:[o._Bn([st]),o.jDz],decls:2,vars:3,consts:[["class","location",4,"ngIf"],[1,"location"],[1,"location__container"],["ngSrc","./assets/planet.png","alt","planet","height","708","width","564",1,"location__img"],["ngSrc","./assets/planet-location-mob.png","alt","planet","height","200","width","200",1,"location__img--mob"],[1,"location__card-container"],[1,"location__card"],[1,"location-item"],[1,"location__card-title"],[1,"location__card-text"],["type","button",1,"location__card-btn",3,"click"],["type","button",1,"location__action-btn",3,"click"],["class","location__resident-cards",4,"ngIf","ngIfElse"],["hasNoResident",""],[1,"location__resident-cards"],[1,"location__resident-cards-title"],[1,"location__residents-list"],["class","location__resident-card",4,"ngFor","ngForOf","ngForTrackBy"],["class","location__action-btn show-more",3,"click",4,"ngIf"],[1,"location__resident-card"],["alt","resident",1,"location__resident-card-img",3,"src"],[1,"location__resident-card-info"],[1,"info-list"],[1,"info-item"],[1,"location__resident-card-info-title"],[1,"location__resident-card-info-text"],["type","button",1,"location__resident-btn",3,"click"],[1,"location__action-btn","show-more",3,"click"],[1,"residents-wrap"],[1,"residents-title"]],template:function(t,r){1&t&&(o.YNc(0,Fn,28,5,"section",0),o.ALo(1,"async")),2&t&&o.Q6J("ngIf",o.lcZ(1,1,r.randomLocation$))},dependencies:[p.ez,p.sg,p.O5,p.Ov,p.OU,bn,p.Zd],styles:[".location[_ngcontent-%COMP%]{padding:90px 0 30px;position:relative}@media (min-width: 768px){.location[_ngcontent-%COMP%]{padding:40px 0}}@media (min-width: 1200px){.location[_ngcontent-%COMP%]{padding:60px 0}}.location__container[_ngcontent-%COMP%]{width:100%;margin:0 auto;padding:0 16px}@media (min-width: 375px){.location__container[_ngcontent-%COMP%]{width:375px}}@media (min-width: 768px){.location__container[_ngcontent-%COMP%]{padding:0 32px;width:768px}}@media (min-width: 1200px){.location__container[_ngcontent-%COMP%]{padding:0 40px;width:1200px}}@media (min-width: 768px){.location__card-container[_ngcontent-%COMP%]{width:630px;display:flex;justify-content:space-between}}@media (min-width: 1200px){.location__card-container[_ngcontent-%COMP%]{align-items:center;justify-content:space-between;width:700px;margin-left:330px}}.location__img[_ngcontent-%COMP%]{display:none}@media (min-width: 1200px){.location__img[_ngcontent-%COMP%]{display:block;position:absolute;width:300px;left:0;top:50px}}.location__img--mob[_ngcontent-%COMP%]{width:200px;position:absolute;top:10px;right:-80px;animation:_ngcontent-%COMP%_rotate 40s linear infinite}@media (min-width: 768px){.location__img--mob[_ngcontent-%COMP%]{width:250px;top:40px;right:-70px}}@media (min-width: 1200px){.location__img--mob[_ngcontent-%COMP%]{display:none}}@keyframes _ngcontent-%COMP%_rotate{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.location__card[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:8px;width:340px;padding:30px;border-radius:40px;background-image:linear-gradient(rgba(17,176,200,.5) 0%,rgba(17,176,200,.25) 50%,rgba(17,176,200,.02) 100%);box-shadow:0 -30px 90px 40px #11b0c84d;margin-bottom:50px}@media (min-width: 768px){.location__card[_ngcontent-%COMP%]{width:380px;margin:0;gap:10px}}@media (min-width: 1200px){.location__card[_ngcontent-%COMP%]{width:400px}}.location__card-btn[_ngcontent-%COMP%], .location__resident-btn[_ngcontent-%COMP%]{width:160px;height:40px;display:block;margin:40px auto 0;border:1px solid white;border-radius:32px;background-color:transparent;cursor:pointer;font-size:14px;transition:.25s linear;color:#fff}.location__card-btn[_ngcontent-%COMP%]:hover, .location__resident-btn[_ngcontent-%COMP%]:hover{transform:translateY(5%);box-shadow:inset 0 0 58px 2px #0000004d}@media (min-width: 768px){.location__card-btn[_ngcontent-%COMP%], .location__resident-btn[_ngcontent-%COMP%]{font-size:20px;margin-top:50px}}.location__card-title[_ngcontent-%COMP%], .location__card-text[_ngcontent-%COMP%]{font-size:20px;color:#fff;margin-left:30px}@media (min-width: 768px){.location__card-title[_ngcontent-%COMP%], .location__card-text[_ngcontent-%COMP%]{font-size:26px}}.location__action-btn[_ngcontent-%COMP%]{display:block;width:180px;height:55px;padding:4px;margin:0 auto;border:2px solid #11b0c8;background-color:#11b0c84d;box-shadow:0 2px 56px 17px #11b0c8;color:#fff;font-size:20px;border-radius:32px;cursor:pointer;transition:.25s linear}@media (min-width: 768px){.location__action-btn[_ngcontent-%COMP%]{margin:250px 0 0;width:210px;height:70px;font-size:20px}}@media (min-width: 1200px){.location__action-btn[_ngcontent-%COMP%]{margin:0;width:230px}}.location__action-btn[_ngcontent-%COMP%]:hover{transform:translateY(5%);border-color:#87f54e;background-color:#87f54e4d;box-shadow:0 2px 55px 27px #87f54e}.location__action-btn.show-more[_ngcontent-%COMP%]{display:block;margin:40px auto 0}.location__resident-btn[_ngcontent-%COMP%]{border:1px solid #160b03;color:#160b03}@media (min-width: 768px){.location__residents-list[_ngcontent-%COMP%]{width:680px;display:grid;grid-template-columns:repeat(3,1fr);gap:15px;margin:0 auto}}@media (min-width: 1200px){.location__residents-list[_ngcontent-%COMP%]{width:780px;gap:20px}}.location__resident-card[_ngcontent-%COMP%]{width:240px;border-radius:28px;margin:0 auto 15px;background-color:#87f54e;overflow:hidden;box-shadow:0 0 20px 5px #87f54e80;transition:.25s linear;cursor:pointer}.location__resident-card[_ngcontent-%COMP%]:hover{transform:scale(1.1)}@media (min-width: 768px){.location__resident-card[_ngcontent-%COMP%]{margin:0;width:215px}}.location__resident-card-img[_ngcontent-%COMP%]{width:240px;height:210px}@media (min-width: 768px){.location__resident-card-img[_ngcontent-%COMP%]{width:215px;height:190px}}.location__resident-card-info[_ngcontent-%COMP%]{min-height:200px;display:flex;flex-grow:1;flex-direction:column;justify-content:space-between;padding:16px}.location__resident-card-info-title[_ngcontent-%COMP%], .location__resident-card-info-text[_ngcontent-%COMP%]{font-size:20px;color:#160b03}@media (min-width: 768px){.location__resident-card-info-title[_ngcontent-%COMP%]{font-size:26px}}.location__resident-cards[_ngcontent-%COMP%]{margin-top:70px}.location__resident-cards-title[_ngcontent-%COMP%]{font-size:22px;font-weight:600;color:#fff;text-align:center;margin-bottom:30px}@media (min-width: 768px){.location__resident-cards-title[_ngcontent-%COMP%]{font-size:28px}}"],changeDetection:0}),n})()}}]);