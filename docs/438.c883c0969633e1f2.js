"use strict";(self.webpackChunkrick_and_morty=self.webpackChunkrick_and_morty||[]).push([[438],{4438:(M,d,a)=>{a.r(d),a.d(d,{CharacterComponent:()=>_});var c=a(4755),g=a(6985),m=a(6301),h=a(4004),x=a(8505),l=a(8746),t=a(2504),f=a(3144),C=a(7905);let s=(()=>{class e{constructor(n,i){this.httpClient=n,this.loaderSvc=i}getRandomCharacter(){return this.loaderSvc.isLoading=!0,this.httpClient.get(g.N.baseURL+g.N.character+(0,m.M)(826)).pipe((0,h.U)(n=>this.loaderSvc.isLoading?null:n),(0,x.b)(n=>{if(n){const i=JSON.parse(sessionStorage.getItem("character")||"[]");i.push(n),sessionStorage.setItem("character",JSON.stringify(i))}}),(0,l.x)(()=>{this.loaderSvc.isLoading=!1}))}}return e.\u0275fac=function(n){return new(n||e)(t.LFG(f.eN),t.LFG(C.D))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();function b(e,r){if(1&e){const n=t.EpF();t.TgZ(0,"div",5),t._UZ(1,"img",6),t.TgZ(2,"div",7)(3,"div",8)(4,"h3",9),t._uU(5),t.qZA(),t.TgZ(6,"ul")(7,"li",10)(8,"p",11),t._uU(9," Status: "),t.TgZ(10,"span",12),t._uU(11),t.qZA()()(),t.TgZ(12,"li",10)(13,"p",11),t._uU(14," Species: "),t.TgZ(15,"span",12),t._uU(16),t.qZA()()(),t.TgZ(17,"li",10)(18,"p",11),t._uU(19," Type: "),t.TgZ(20,"span",12),t._uU(21),t.qZA()()(),t.TgZ(22,"li",10)(23,"p",11),t._uU(24," Gender: "),t.TgZ(25,"span",12),t._uU(26),t.qZA()()(),t.TgZ(27,"li",10)(28,"p",11),t._uU(29," Origin: "),t.TgZ(30,"span",12),t._uU(31),t.qZA()()()()(),t.TgZ(32,"button",13),t.NdJ("click",function(o){const O=t.CHM(n).ngIf,w=t.oxw(2);return t.KtG(w.addToFavorite(O,o))}),t._uU(33,"add to favorite"),t.qZA()(),t._UZ(34,"img",14),t.qZA()}if(2&e){const n=r.ngIf;t.xp6(1),t.Q6J("src",n.image,t.LSH),t.xp6(4),t.Oqu(n.name),t.xp6(6),t.Oqu(n.status),t.xp6(5),t.Oqu(n.species),t.xp6(5),t.Oqu(n.type),t.xp6(5),t.Oqu(n.gender),t.xp6(5),t.Oqu(n.origin.name)}}function u(e,r){if(1&e){const n=t.EpF();t.TgZ(0,"section",1)(1,"button",2),t.NdJ("click",function(){t.CHM(n);const o=t.oxw();return t.KtG(o.generateCharacter())}),t._uU(2," Teleport "),t.qZA(),t.YNc(3,b,35,7,"div",3),t.ALo(4,"async"),t.TgZ(5,"button",4),t.NdJ("click",function(){t.CHM(n);const o=t.oxw();return t.KtG(o.generateCharacter())}),t._uU(6,"\nTeleport "),t.qZA()()}if(2&e){const n=t.oxw();t.xp6(3),t.Q6J("ngIf",t.lcZ(4,1,n.randomCharacter$))}}let _=(()=>{class e{constructor(n,i){this.characterSvc=n,this.renderer=i,this.randomCharacter$=this.characterSvc.getRandomCharacter()}generateCharacter(){this.randomCharacter$=this.characterSvc.getRandomCharacter()}addToFavorite(n,i){this.renderer.setAttribute(i.target,"disabled","true");const o=JSON.parse(localStorage.getItem("character")||"[]");o.some(p=>p&&p.id===n.id)||(o.push(n),localStorage.setItem("character",JSON.stringify(o)))}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(s),t.Y36(t.Qsj))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-character"]],standalone:!0,features:[t._Bn([s]),t.jDz],decls:2,vars:3,consts:[["class","random-character",4,"ngIf"],[1,"random-character"],["type","button",1,"generate-btn","main-btn",3,"click"],["class","card",4,"ngIf"],["type","button",1,"generate-btn","mob-btn",3,"click"],[1,"card"],["alt","pesson image",1,"card_image",3,"src"],[1,"wrap"],[1,"card-info"],[1,"card_name"],[1,"info-item"],[1,"info-title"],[1,"info-text"],["type","button",1,"character-btn",3,"click"],["ngSrc","./assets/planet-character.png","alt","planet","height","345","width","345",1,"planet-img"]],template:function(n,i){1&n&&(t.YNc(0,u,7,3,"section",0),t.ALo(1,"async")),2&n&&t.Q6J("ngIf",t.lcZ(1,1,i.randomCharacter$))},dependencies:[c.ez,c.O5,c.Ov,c.Zd],styles:['.random-character[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr;justify-items:center;padding:80px 0 60px}@media (min-width: 768px){.random-character[_ngcontent-%COMP%]{padding:40px 0 60px}}@media (min-width: 1200px){.random-character[_ngcontent-%COMP%]{padding:50px 0 80px}}.generate-btn[_ngcontent-%COMP%]{width:180px;height:55px;padding:4px;border:2px solid #11b0c8;background-color:#11b0c84d;box-shadow:0 2px 56px 17px #11b0c8;color:#fff;font-size:16px;border-radius:32px;cursor:pointer;transition:.25s linear}.generate-btn[_ngcontent-%COMP%]:hover{transform:translateY(5%);border-color:#87f54e;background-color:#87f54e4d;box-shadow:0 2px 55px 27px #87f54e}@media (min-width: 768px){.generate-btn[_ngcontent-%COMP%]{width:210px;height:60px;font-size:18px;margin-bottom:60px}}@media (min-width: 1200px){.generate-btn[_ngcontent-%COMP%]{width:230px;height:70px;font-size:20px;margin-bottom:80px}}.main-btn[_ngcontent-%COMP%]{display:none}@media (min-width: 768px){.main-btn[_ngcontent-%COMP%]{display:block}}.mob-btn[_ngcontent-%COMP%]{display:block}@media (min-width: 768px){.mob-btn[_ngcontent-%COMP%]{display:none}}.card[_ngcontent-%COMP%]{width:340px;height:650px;padding:90px 10px 10px;background-image:linear-gradient(rgba(135,245,78,.5) 0%,rgba(135,245,78,.25) 50%,rgba(135,245,78,.02) 100%);box-shadow:0 -30px 90px 40px #87f54e4d;border-radius:40px;position:relative;margin-bottom:60px}@media (min-width: 768px){.card[_ngcontent-%COMP%]{width:600px;height:360px;padding:25px;display:flex;margin-bottom:0}}@media (min-width: 1200px){.card[_ngcontent-%COMP%]{width:800px;height:450px;padding:30px}}.planet-img[_ngcontent-%COMP%]{position:absolute;width:170px;top:-80px;right:25%;animation:_ngcontent-%COMP%_rotate 20s linear infinite}@media (min-width: 768px){.planet-img[_ngcontent-%COMP%]{width:170px;top:-22%;right:-12%}}@media (min-width: 1200px){.planet-img[_ngcontent-%COMP%]{width:250px;top:-25%;right:-15%}}@keyframes _ngcontent-%COMP%_rotate{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.card_image[_ngcontent-%COMP%]{width:320px;height:250px;border-radius:28px;border:2px solid #160b03;margin-bottom:10px}@media (min-width: 768px){.card_image[_ngcontent-%COMP%]{width:300px;height:310px;margin-right:20px;margin-bottom:0}}@media (min-width: 1200px){.card_image[_ngcontent-%COMP%]{width:400px;height:390px;margin-right:30px}}.wrap[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:space-between;height:285px}@media (min-width: 768px){.wrap[_ngcontent-%COMP%]{height:auto}}.card-info[_ngcontent-%COMP%]{width:320px;padding:20px;background-color:#87f54e;border-radius:28px;border:1px solid #160b03}@media (min-width: 768px){.card-info[_ngcontent-%COMP%]{width:230px;padding:10px 20px 10px 15px}}@media (min-width: 1200px){.card-info[_ngcontent-%COMP%]{width:310px;padding:20px 40px 20px 30px}}.card_name[_ngcontent-%COMP%]{font-weight:500;font-size:20px;line-height:1.2;letter-spacing:.15px;text-align:center;color:#160b03;padding-bottom:8px;margin-bottom:8px;position:relative}@media (min-width: 768px){.card_name[_ngcontent-%COMP%]{font-size:24px;padding-bottom:12px;margin-bottom:12px;text-align:left}}@media (min-width: 1200px){.card_name[_ngcontent-%COMP%]{font-size:30px;padding-bottom:20px;margin-bottom:20px}}.card_name[_ngcontent-%COMP%]:after{content:"";display:block;width:150px;height:2px;background-color:#160b03;border-radius:8px;position:absolute;bottom:0;left:65px}@media (min-width: 768px){.card_name[_ngcontent-%COMP%]:after{width:120px;left:0}}@media (min-width: 1200px){.card_name[_ngcontent-%COMP%]:after{height:3px;width:150px}}.info-item[_ngcontent-%COMP%]:not(:last-child){margin-bottom:4px}@media (min-width: 768px){.info-item[_ngcontent-%COMP%]:not(:last-child){margin-bottom:3px}}@media (min-width: 1200px){.info-item[_ngcontent-%COMP%]:not(:last-child){margin-bottom:4px}}.info-title[_ngcontent-%COMP%]{font-weight:500;font-size:14px;color:#160b03}@media (min-width: 1200px){.info-title[_ngcontent-%COMP%]{font-size:16px}}.info-text[_ngcontent-%COMP%]{font-weight:400;font-size:14px;color:#160b03}@media (min-width: 1200px){.info-text[_ngcontent-%COMP%]{font-size:16px}}.character-btn[_ngcontent-%COMP%]{width:160px;height:40px;margin:0 auto;border:1px solid #87f54e;border-radius:32px;background-color:transparent;cursor:pointer;font-size:14px;transition:.25s linear;color:#fff}.character-btn[_ngcontent-%COMP%]:hover{transform:translateY(5%);box-shadow:inset 0 0 58px 2px #87f54e80}@media (min-width: 768px){.character-btn[_ngcontent-%COMP%]{width:180px;height:40px}}@media (min-width: 1200px){.character-btn[_ngcontent-%COMP%]{width:200px;height:40px;font-size:16px}}'],changeDetection:0}),e})()}}]);