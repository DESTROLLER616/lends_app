"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4598],{4598:(A,p,r)=>{r.r(p),r.d(p,{CategoryPageModule:()=>O});var d=r(6895),g=r(433),a=r(4556),u=r(538),y=r(655),h=r(5698),t=r(8256),m=r(529);let C=(()=>{class o{constructor(e){this.http=e,this.URL_BASE="https://lends-backend.onrender.com/categories"}getCategories(e=0){return this.http.get(`${this.URL_BASE}/?$skip=${e}`)}createCategory(e){return this.http.post(this.URL_BASE,e)}pagination(e){return this.http.get(`${this.URL_BASE}/?$skip=${e}`)}}return o.\u0275fac=function(e){return new(e||o)(t.LFG(m.eN))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();function b(o,i){if(1&o&&(t.TgZ(0,"tr")(1,"th"),t._uU(2),t.qZA(),t.TgZ(3,"th"),t._uU(4),t.qZA(),t.TgZ(5,"th")(6,"ion-button",8),t._UZ(7,"ion-icon",9),t.qZA(),t.TgZ(8,"ion-button",10),t._UZ(9,"ion-icon",11),t.qZA()()()),2&o){const e=i.$implicit;t.xp6(2),t.Oqu(e.name),t.xp6(2),t.Oqu(e.description)}}let f=(()=>{class o{constructor(e){this.categoryService=e,this.page=0,this.max=0,this.categories=[]}ngOnInit(){this.getCategories()}numPage(e){let n=this.page+=e;return n<0&&(this.page=n,this.getCategories(n)),n>this.max&&(this.page=this.max,this.getCategories(n)),this.getCategories(n)}getCategories(e=0){this.categoryService.getCategories(e).pipe((0,h.q)(1)).subscribe(n=>{console.log(n);const{data:s,total:c}=n;this.categories=[...s],console.log(c),this.max=c-10},n=>console.log("error"))}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(C))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-table-category"]],decls:18,vars:2,consts:[["color","secondary",3,"click"],["slot","icon-only","name","remove"],["color","danger",3,"click"],["slot","icon-only","name","add"],[1,"r1"],[1,"r2"],[1,"r3"],[4,"ngFor","ngForOf"],["color","secondary",1,"btn-op"],["color","dark","size","large","slot","icon-only","name","create"],["color","danger",1,"btn-op"],["color","dark","size","large","slot","icon-only","name","close-circle"]],template:function(e,n){1&e&&(t.TgZ(0,"article")(1,"ion-button",0),t.NdJ("click",function(){return n.numPage(-1)}),t._UZ(2,"ion-icon",1),t.qZA(),t.TgZ(3,"p"),t._uU(4),t.qZA(),t.TgZ(5,"ion-button",2),t.NdJ("click",function(){return n.numPage(1)}),t._UZ(6,"ion-icon",3),t.qZA()(),t.TgZ(7,"table")(8,"thead")(9,"tr")(10,"th",4),t._uU(11,"Name"),t.qZA(),t.TgZ(12,"th",5),t._uU(13,"Description"),t.qZA(),t.TgZ(14,"th",6),t._uU(15,"Operations"),t.qZA()()(),t.TgZ(16,"tbody"),t.YNc(17,b,10,2,"tr",7),t.qZA()()),2&e&&(t.xp6(4),t.Oqu(n.page),t.xp6(13),t.Q6J("ngForOf",n.categories))},dependencies:[d.sg,a.YG,a.gu],styles:["article[_ngcontent-%COMP%]{display:flex;justify-content:space-between;margin:40px 0 15px}table[_ngcontent-%COMP%]{width:100%;margin-top:20px;box-shadow:3px 3px 3px 3px rgba(186,186,186,.25);margin-bottom:30px}tr[_ngcontent-%COMP%], th[_ngcontent-%COMP%]{border:hsla(212,100%,87%,.5) solid 1px;height:35px}.addButton[_ngcontent-%COMP%], .minusButton[_ngcontent-%COMP%]{width:40px;height:30px}.r1[_ngcontent-%COMP%]{background-color:rgba(189,220,255,.5)}.r2[_ngcontent-%COMP%]{background-color:rgba(163,255,174,.5)}.r3[_ngcontent-%COMP%]{background-color:rgba(255,133,133,.5)}.btn-op[_ngcontent-%COMP%]{width:40%}thead[_ngcontent-%COMP%]{height:20px}"]}),o})();const Z=[{path:"",component:(()=>{class o{constructor(e,n,s){this.categoryService=e,this.fb=n,this.alertController=s,this.categories=[],this.category={_id:"",name:"",description:""}}ngOnInit(){}presentAlert(){return(0,y.mG)(this,void 0,void 0,function*(){yield(yield this.alertController.create({header:"Category",subHeader:"Added",message:"Category added succesfuly",buttons:["OK"]})).present()})}getCategories(){this.categoryService.getCategories().pipe((0,h.q)(1)).subscribe(e=>{console.log(e);const{data:n,total:s}=e;this.categories=[...n],console.log(s)},e=>console.log("error"))}cleanForm(e){return e.reset()}addCategory(e){this.categoryService.createCategory(e.value).subscribe(n=>{this.getCategories(),this.cleanForm(e),this.presentAlert()},n=>console.log(n))}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(C),t.Y36(g.qu),t.Y36(a.Br))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-category"]],decls:21,vars:2,consts:[[1,"container"],[1,"sub-container"],[3,"ngSubmit"],["categoryForm","ngForm"],[1,"form-part"],["color","primary","position","floating"],["type","text","color","primary","placeholder","Enter category name","name","name","require","","minlength","4",3,"ngModel","ngModelChange"],["color","primary","placeholder","Category description","name","description",3,"ngModel","ngModelChange"],[1,"save-button"]],template:function(e,n){if(1&e){const s=t.EpF();t.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-title"),t._uU(3,"test"),t.qZA()()(),t.TgZ(4,"ion-content")(5,"div",0)(6,"h2"),t._uU(7,"Categories"),t.qZA(),t.TgZ(8,"div",1)(9,"form",2,3),t.NdJ("ngSubmit",function(){t.CHM(s);const l=t.MAs(10);return t.KtG(n.addCategory(l))}),t.TgZ(11,"ion-item",4)(12,"ion-label",5),t._uU(13,"Category name"),t.qZA(),t.TgZ(14,"ion-input",6),t.NdJ("ngModelChange",function(l){return n.category.name=l}),t.qZA()(),t.TgZ(15,"ion-item")(16,"ion-textarea",7),t.NdJ("ngModelChange",function(l){return n.category.description=l}),t.qZA()(),t.TgZ(17,"button",8),t._uU(18,"Save"),t.qZA()()()(),t.TgZ(19,"section"),t._UZ(20,"app-table-category"),t.qZA()()}2&e&&(t.xp6(14),t.Q6J("ngModel",n.category.name),t.xp6(2),t.Q6J("ngModel",n.category.description))},dependencies:[g._Y,g.JJ,g.JL,g.wO,g.On,g.F,a.W2,a.Gu,a.pK,a.Ie,a.Q$,a.g2,a.wd,a.sr,a.j9,f],styles:[".container[_ngcontent-%COMP%]{width:90%;border:#f7f7f7 solid 1px;margin:20px auto 0;padding-bottom:20px;box-shadow:3px 3px 3px rgba(186,186,186,.25)}.container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{text-align:left;font-weight:800}.sub-container[_ngcontent-%COMP%]{width:85%;margin:auto}.forma-part[_ngcontent-%COMP%]{margin-top:10px}.save-button[_ngcontent-%COMP%]{margin:20px auto 0;width:100%;height:30px;background-color:#0080ff;font-weight:700}.save-button[_ngcontent-%COMP%]:hover{background-color:#0090ff}form[_ngcontent-%COMP%]{margin-top:30px}section[_ngcontent-%COMP%]{width:90%;margin:auto}"]}),o})()}];let P=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[u.Bz.forChild(Z),u.Bz]}),o})();var M=r(6230),v=r(4814),T=r(9558),x=r(5657);let O=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({providers:[{provide:m.TP,useClass:T.B,multi:!0},x.N],imports:[d.ez,g.u5,a.Pc,P,M.$,v.DashboardPageModule,g.u5,g.UX]}),o})()}}]);