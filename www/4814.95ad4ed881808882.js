"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4814],{6230:(p,u,e)=>{e.d(u,{$:()=>P});var a=e(538),d=e(655),t=e(8256),c=e(5657),r=e(4556);let g=(()=>{class o{constructor(n,s,h){this.router=n,this.cookieService=s,this.alertController=h}canActivate(n,s){return!!this.hasToken()||(this.presentAlert(),this.router.navigate(["home"]),!1)}hasToken(){return!!this.cookieService.get("token")}presentAlert(){return(0,d.mG)(this,void 0,void 0,function*(){yield(yield this.alertController.create({header:"Alert",subHeader:"You do not have permittions",message:"You must be logged to be here",buttons:["OK"]})).present()})}}return o.\u0275fac=function(n){return new(n||o)(t.LFG(a.F0),t.LFG(c.N),t.LFG(r.Br))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var i=e(6895);function m(o,l){if(1&o&&(t.TgZ(0,"div")(1,"ion-item",8),t._UZ(2,"ion-icon",9),t.TgZ(3,"ion-label"),t._uU(4),t.qZA()()()),2&o){const n=l.$implicit;t.xp6(1),t.s9C("routerLink",n.url),t.xp6(1),t.Q6J("ios",n.icon+"-outline")("md",n.icon+"-sharp"),t.xp6(2),t.Oqu(n.path)}}const v=[{path:"",component:(()=>{class o{constructor(n,s,h){this.alertController=n,this.router=s,this.cookieService=h,this.exit=!1,this.pages=[{path:"Welcome",url:"welcome",icon:"home"},{path:"category",url:"category",icon:"reorder-four"}]}ngOnInit(){}presentAlert(){return(0,d.mG)(this,void 0,void 0,function*(){yield(yield this.alertController.create({header:"Are you sure to want to exit?",buttons:[{text:"Cancel",role:"cancel",handler:()=>{}},{text:"Exit",role:"confirm",handler:()=>{this.cookieService.deleteAll("token"),this.router.navigate(["home"])}}]})).present()})}logout(){return(0,d.mG)(this,void 0,void 0,function*(){return yield this.presentAlert(),this.exit?console.log("saliendo"):console.log("aqui")})}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(r.Br),t.Y36(a.F0),t.Y36(c.N))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-dashboard"]],decls:18,vars:1,consts:[["contentId","main-content","auto-hide","false"],["contentId","main-content",1,"ion-padding"],[4,"ngFor","ngForOf"],["color","danger","fill","outline","expand","block",3,"click"],["slot","start","name","log-out"],[1,"ion-page"],["slot","start"],["id","main-content"],["lines","none","routerLinkActive","active",3,"routerLink"],["color","primary","aria-hidden","true","slot","start",3,"ios","md"]],template:function(n,s){1&n&&(t.TgZ(0,"ion-menu",0)(1,"ion-header")(2,"ion-toolbar")(3,"ion-title"),t._uU(4,"Main menu"),t.qZA()()(),t.TgZ(5,"ion-content",1),t.YNc(6,m,5,4,"div",2),t.TgZ(7,"ion-button",3),t.NdJ("click",function(){return s.logout()}),t._UZ(8,"ion-icon",4),t._uU(9," Logout "),t.qZA()()(),t.TgZ(10,"div",5)(11,"ion-header")(12,"ion-toolbar")(13,"ion-buttons",6),t._UZ(14,"ion-menu-button"),t.qZA(),t.TgZ(15,"ion-title"),t._uU(16,"Lends administration App"),t.qZA()()(),t._UZ(17,"ion-router-outlet",7),t.qZA()),2&n&&(t.xp6(6),t.Q6J("ngForOf",s.pages))},dependencies:[i.sg,r.YG,r.Sm,r.W2,r.Gu,r.gu,r.Ie,r.Q$,r.z0,r.fG,r.wd,r.sr,r.jP,r.YI,a.rH,a.Od]}),o})(),canActivate:[g],children:[{path:"category",loadChildren:()=>e.e(4598).then(e.bind(e,4598)).then(o=>o.CategoryPageModule)},{path:"welcome",loadChildren:()=>e.e(8465).then(e.bind(e,8465)).then(o=>o.WelcomePageModule)},{path:"",redirectTo:"welcome",pathMatch:"full"}]}];let P=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[a.Bz.forChild(v),a.Bz]}),o})()},4814:(p,u,e)=>{e.r(u),e.d(u,{DashboardPageModule:()=>g});var a=e(6895),d=e(433),t=e(4556),c=e(6230),r=e(8256);let g=(()=>{class i{}return i.\u0275fac=function(f){return new(f||i)},i.\u0275mod=r.oAB({type:i}),i.\u0275inj=r.cJS({imports:[a.ez,d.u5,t.Pc,c.$]}),i})()}}]);