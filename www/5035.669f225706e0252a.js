"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5035],{5035:(P,u,r)=>{r.r(u),r.d(u,{SectionsPageModule:()=>v});var p=r(6895),s=r(433),i=r(4556),d=r(538),e=r(8256),m=r(2340),h=r(529);let _=(()=>{class o{constructor(n){this.http=n}getSections(n=0){return this.http.get(`${m.N.section_url}/?$skip=${n}`)}createSection(n){return this.http.post(m.N.section_url,n)}}return o.\u0275fac=function(n){return new(n||o)(e.LFG(h.eN))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var Z=r(2115),S=r(5698);function C(o,c){if(1&o){const n=e.EpF();e.TgZ(0,"tr")(1,"th"),e._uU(2),e.qZA(),e.TgZ(3,"th"),e._UZ(4,"ion-img",21),e.qZA(),e.TgZ(5,"th")(6,"ion-button",22),e.NdJ("click",function(){const a=e.CHM(n).$implicit,g=e.oxw();return e.KtG(g.updateSection(a._id,a.title,a.url))}),e._UZ(7,"ion-icon",23),e.qZA(),e.TgZ(8,"ion-button",3),e._UZ(9,"ion-icon",24),e.qZA()()()}if(2&o){const n=c.$implicit;e.xp6(2),e.Oqu(n.title),e.xp6(2),e.s9C("src",n.url),e.s9C("alt",n.title)}}let b=(()=>{class o{constructor(n){this.sectionService=n,this.image="",this.isHidden=!0,this.section={_id:"",title:"",url:""},this.sections=[]}ngOnInit(){this.getSection()}imagePreview(n){this.image=n,console.log(this.image)}closeUpdate(){this.isHidden=!0,this.section={_id:"",title:"",url:""}}openUpdate(){this.isHidden=!1}getSection(){this.sectionService.getSections().pipe((0,S.q)(1)).subscribe(n=>{const{data:t}=n;this.sections=[...t],console.log(this.sections)},n=>console.log(n))}updateSection(n,t,l){this.section={_id:n,title:t,url:l},this.openUpdate(),this.image=this.section.url,console.log(this.section)}}return o.\u0275fac=function(n){return new(n||o)(e.Y36(_))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-table-section"]],decls:37,vars:9,consts:[[1,"control-table"],["color","secondary"],["name","remove"],["color","danger"],["name","add"],[1,"th","r1"],[1,"th","r2"],[1,"th","r3"],[4,"ngFor","ngForOf"],[3,"hidden"],[1,"title"],["slot","end","size","large","fill","clear",3,"click"],["name","close-circle","size","large"],[1,"form-update"],[3,"submit"],["sectionUpdate","ngForm"],["type","hidden","name","_id",3,"value","ngModel","ngModelChange"],["position","floating","color","primary"],["type","text","name","name",3,"value","ngModel","ngModelChange"],["type","text","name","url",3,"value","ngModel","ngModelChange","keyup"],["id","image-preview-update","ionError","Image not found",3,"src"],["id","image-section",3,"src","alt"],["id","button-icon",3,"click"],["name","create"],["name","close-circle"]],template:function(n,t){1&n&&(e.TgZ(0,"div",0)(1,"ion-button",1),e._UZ(2,"ion-icon",2),e.qZA(),e.TgZ(3,"p"),e._uU(4,"1"),e.qZA(),e.TgZ(5,"ion-button",3),e._UZ(6,"ion-icon",4),e.qZA()(),e.TgZ(7,"table")(8,"thead")(9,"tr")(10,"th",5),e._uU(11,"Name"),e.qZA(),e.TgZ(12,"th",6),e._uU(13,"Image"),e.qZA(),e.TgZ(14,"th",7),e._uU(15,"Operations"),e.qZA()()(),e.TgZ(16,"tbody"),e.YNc(17,C,10,3,"tr",8),e.qZA()(),e.TgZ(18,"section",9)(19,"div",10)(20,"h2"),e._uU(21,"Update"),e.qZA(),e.TgZ(22,"ion-button",11),e.NdJ("click",function(){return t.closeUpdate()}),e._UZ(23,"ion-icon",12),e.qZA()(),e.TgZ(24,"div",13)(25,"form",14,15),e.NdJ("submit",function(){return t.updateSection(t.section._id,t.section.title,t.section.url)}),e.TgZ(27,"input",16),e.NdJ("ngModelChange",function(a){return t.section._id=a}),e.qZA(),e.TgZ(28,"ion-item")(29,"ion-label",17),e._uU(30,"Section name"),e.qZA(),e.TgZ(31,"ion-input",18),e.NdJ("ngModelChange",function(a){return t.section.title=a}),e.qZA()(),e.TgZ(32,"ion-item")(33,"ion-label",17),e._uU(34,"Section url image"),e.qZA(),e.TgZ(35,"ion-input",19),e.NdJ("ngModelChange",function(a){return t.section.url=a})("keyup",function(){return t.imagePreview(t.section.url)}),e.qZA()(),e._UZ(36,"ion-img",20),e.qZA()()()),2&n&&(e.xp6(17),e.Q6J("ngForOf",t.sections),e.xp6(1),e.Q6J("hidden",t.isHidden),e.xp6(9),e.s9C("value",t.section._id),e.Q6J("ngModel",t.section._id),e.xp6(4),e.s9C("value",t.section.title),e.Q6J("ngModel",t.section.title),e.xp6(4),e.s9C("value",t.image),e.Q6J("ngModel",t.section.url),e.xp6(1),e.Q6J("src",t.image))},dependencies:[p.sg,s._Y,s.Fj,s.JJ,s.JL,s.On,s.F,i.YG,i.gu,i.Xz,i.pK,i.Ie,i.Q$,i.j9],styles:["table[_ngcontent-%COMP%]{margin:20px auto;width:100%}section[_ngcontent-%COMP%]{margin-bottom:20px;border:1px hsla(212,100%,87%,.5) solid;box-shadow:3px 3px 3px 3px #c9c9c9}tr[_ngcontent-%COMP%], th[_ngcontent-%COMP%]{border:hsla(212,100%,87%,.5) solid 1px;height:35px}.r1[_ngcontent-%COMP%]{background-color:rgba(189,220,255,.5)}.r2[_ngcontent-%COMP%]{background-color:rgba(163,255,174,.5)}.r3[_ngcontent-%COMP%]{background-color:rgba(255,133,133,.5)}.control-table[_ngcontent-%COMP%]{margin-top:20px;display:flex;justify-content:space-between}.title[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.form-update[_ngcontent-%COMP%]{width:80%;margin:auto}#image-section[_ngcontent-%COMP%]{width:100px;height:100px;margin:10px auto}#button-icon[_ngcontent-%COMP%]{margin-right:20px}#image-preview-update[_ngcontent-%COMP%]{margin:20px auto}"]}),o})();const M=[{path:"",component:(()=>{class o{constructor(n,t){this.sectionService=n,this.alert=t,this.image="",this.section={_id:"",title:"",url:""}}ngOnInit(){}cleanForm(n){return n.reset()}addSection(n){this.sectionService.createSection(n.value).subscribe(t=>{this.cleanForm(n),this.alert.createSection()},t=>{console.error(t)})}updateSection(){}showImage(n){this.image=n}}return o.\u0275fac=function(n){return new(n||o)(e.Y36(_),e.Y36(Z.m))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-sections"]],decls:25,vars:3,consts:[[1,"container"],[1,"sub-container"],[3,"ngSubmit"],["sectionForm","ngForm"],["position","floating","color","primary"],["type","text","name","name",3,"ngModel","ngModelChange"],["type","text","name","url",3,"ngModel","ngModelChange","keyup"],["id","image-preview","ionError","Image not found",3,"src"],["type","submit","expand","full","id","save-button"],[1,"table-section"]],template:function(n,t){if(1&n){const l=e.EpF();e.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-title"),e._uU(3,"sections"),e.qZA()()(),e.TgZ(4,"ion-content")(5,"main")(6,"div",0)(7,"h2"),e._uU(8,"Sections"),e.qZA(),e.TgZ(9,"section",1)(10,"form",2,3),e.NdJ("ngSubmit",function(){e.CHM(l);const g=e.MAs(11);return e.KtG(t.addSection(g))}),e.TgZ(12,"ion-item")(13,"ion-label",4),e._uU(14,"Section name"),e.qZA(),e.TgZ(15,"ion-input",5),e.NdJ("ngModelChange",function(g){return t.section.title=g}),e.qZA()(),e.TgZ(16,"ion-item")(17,"ion-label",4),e._uU(18,"Section url image"),e.qZA(),e.TgZ(19,"ion-input",6),e.NdJ("ngModelChange",function(g){return t.section.url=g})("keyup",function(){return t.showImage(t.section.url)}),e.qZA()(),e._UZ(20,"ion-img",7),e.TgZ(21,"ion-button",8),e._uU(22,"Save"),e.qZA()()()()(),e.TgZ(23,"section",9),e._UZ(24,"app-table-section"),e.qZA()()}2&n&&(e.xp6(15),e.Q6J("ngModel",t.section.title),e.xp6(4),e.Q6J("ngModel",t.section.url),e.xp6(1),e.Q6J("src",t.image))},dependencies:[s._Y,s.JJ,s.JL,s.On,s.F,i.YG,i.W2,i.Gu,i.Xz,i.pK,i.Ie,i.Q$,i.wd,i.sr,i.j9,b],styles:["main[_ngcontent-%COMP%]{width:90%;margin:auto}h2[_ngcontent-%COMP%]{margin-bottom:30px}.container[_ngcontent-%COMP%]{box-shadow:3px 3px 3px 3px #c9c9c9;padding-bottom:15px}.sub-container[_ngcontent-%COMP%]{width:85%;margin:auto}.table-section[_ngcontent-%COMP%]{margin:auto;width:90%}#save-button[_ngcontent-%COMP%]{margin-top:20px}#image-preview[_ngcontent-%COMP%]{width:50%;margin:15px auto}"]}),o})()}];let T=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[d.Bz.forChild(M),d.Bz]}),o})();var f=r(9558);let v=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({providers:[{provide:h.TP,useClass:f.B,multi:!0}],imports:[p.ez,s.u5,i.Pc,T,s.u5,s.UX]}),o})()}}]);