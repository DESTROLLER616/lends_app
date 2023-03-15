"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9673],{9673:(w,h,g)=>{g.r(h),g.d(h,{CategoryPageModule:()=>Z});var p=g(6895),s=g(433),i=g(4556),m=g(538),d=g(655),C=g(5698),e=g(8256),y=g(529);let u=(()=>{class n{constructor(t){this.http=t,this.URL_BASE="https://lends-backend.onrender.com/categories"}getCategories(t=0){return this.http.get(`${this.URL_BASE}/?$skip=${t}`)}createCategory(t){return this.http.post(this.URL_BASE,t)}deleteCategory(t){return this.http.delete(`${this.URL_BASE}/${t}`)}patchCategory(t){return this.http.patch(`${this.URL_BASE}/${t._id}`,{name:t.name,description:t.description})}pagination(t){return this.http.get(`${this.URL_BASE}/?$skip=${t}`)}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(y.eN))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})(),_=(()=>{class n{constructor(t,o){this.alertController=t,this.categoriesService=o}create(t){throw new Error("Method not implemented.")}deleteCategory(t,o){return(0,d.mG)(this,void 0,void 0,function*(){yield(yield this.alertController.create({cssClass:"alert-prompt",header:"Prompt!",inputs:[{name:"name1",type:"text",placeholder:"Placeholder 1"},{name:"name2",type:"text",id:"name2-id",value:"hello",placeholder:"Placeholder 2"},{name:"paragraph",id:"paragraph",type:"textarea",placeholder:"Placeholder 3"},{name:"name3",value:"http://ionicframework.com",type:"url",placeholder:"Favorite site ever"},{name:"name4",type:"date",min:"2017-03-01",max:"2018-01-12"},{name:"name5",type:"date"},{name:"name6",type:"number",min:-5,max:10},{name:"name7",type:"number"},{name:"name8",type:"password",placeholder:"Advanced Attributes",cssClass:"specialClass",attributes:{maxlength:4,inputmode:"decimal"}}],buttons:[{text:"Cancel",role:"cancel",cssClass:"secondary",handler:()=>{console.log("Confirm Cancel")}},{text:"Ok",handler:()=>{console.log("Confirm Ok")}}]})).present()})}updateCategory(){return(0,d.mG)(this,void 0,void 0,function*(){yield(yield this.alertController.create({header:"Updated",subHeader:"Updated Category",message:"Category has been updated successfully!",buttons:["OK"]})).present()})}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(i.Br),e.LFG(u))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();function b(n,c){if(1&n){const t=e.EpF();e.TgZ(0,"tr")(1,"th"),e._uU(2),e.qZA(),e.TgZ(3,"th"),e._uU(4),e.qZA(),e.TgZ(5,"th")(6,"ion-button",9),e.NdJ("click",function(){const a=e.CHM(t).$implicit,l=e.oxw();return e.KtG(l.editCategory(a._id,a.name,a.description))}),e._UZ(7,"ion-icon",10),e.qZA(),e.TgZ(8,"ion-button",11),e.NdJ("click",function(){const a=e.CHM(t).$implicit,l=e.oxw();return e.KtG(l.deleteCategory(a._id,a.name))}),e._UZ(9,"ion-icon",12),e.qZA()()()}if(2&n){const t=c.$implicit;e.xp6(2),e.Oqu(t.name),e.xp6(2),e.Oqu(t.description)}}function x(n,c){if(1&n){const t=e.EpF();e.TgZ(0,"div",13)(1,"div",14)(2,"h3"),e._uU(3,"Update"),e.qZA(),e.TgZ(4,"button",15),e.NdJ("click",function(){e.CHM(t);const r=e.oxw();return e.KtG(r.closeUpdate())}),e._uU(5,"X"),e.qZA()(),e.TgZ(6,"div",16)(7,"form",17,18),e.NdJ("ngSubmit",function(){e.CHM(t);const r=e.MAs(8),a=e.oxw();return e.KtG(a.updateCategory(r))}),e.TgZ(9,"input",19),e.NdJ("ngModelChange",function(r){e.CHM(t);const a=e.oxw();return e.KtG(a.category._id=r)}),e.qZA(),e.TgZ(10,"ion-item",20)(11,"ion-label",21),e._uU(12,"Category name"),e.qZA(),e.TgZ(13,"ion-input",22),e.NdJ("ngModelChange",function(r){e.CHM(t);const a=e.oxw();return e.KtG(a.category.name=r)}),e.qZA()(),e.TgZ(14,"ion-item")(15,"ion-textarea",23),e.NdJ("ngModelChange",function(r){e.CHM(t);const a=e.oxw();return e.KtG(a.category.description=r)}),e.qZA()(),e.TgZ(16,"button",24),e._uU(17,"Update"),e.qZA()()()()}if(2&n){const t=e.oxw();e.xp6(9),e.Q6J("ngModel",t.category._id),e.xp6(4),e.Q6J("ngModel",t.category.name),e.xp6(2),e.Q6J("ngModel",t.category.description)}}let f=(()=>{class n{constructor(t,o,r){this.categoryService=t,this.categoryAlerts=o,this.alertController=r,this.page=0,this.max=0,this.isAddActivate=!1,this.isMinusActivate=!0,this.isHidden=!1,this.category={_id:"",name:"",description:""},this.categories=[]}ngOnInit(){this.getCategories(),this.isHidden=!1}numPage(t){let o=this.page+=t;return o<0&&(console.log("minus"),this.page=0,this.getCategories(o),this.isMinusActivate=!0),o>=this.max&&(this.page=this.max,this.isAddActivate=!0,this.getCategories(this.page)),this.isAddActivate=!1,this.isMinusActivate=!1,this.getCategories(o)}getCategories(t=0){this.categoryService.getCategories(t).pipe((0,C.q)(1)).subscribe(o=>{const{data:r,total:a}=o;this.categories=[...r],a>10&&(this.max=a-10),this.isHidden=!1},o=>console.log("error"))}deleteCategory(t,o){return(0,d.mG)(this,void 0,void 0,function*(){yield(yield this.alertController.create({header:`Are you sure want to delete ${o} category`,buttons:[{text:"Cancel",role:"cancel",handler:()=>{}},{text:"OK",role:"confirm",handler:()=>{this.categoryService.deleteCategory(t).subscribe(a=>{this.getCategories()},a=>{console.log(`error: ${a}`)}),this.getCategories()}}]})).present(),this.isHidden=!1})}editCategory(t,o,r){return(0,d.mG)(this,void 0,void 0,function*(){this.isHidden=!0,this.category={_id:t,name:o,description:r}})}updateCategory(t){this.categoryService.patchCategory(t.value).subscribe(o=>{this.getCategories(),this.isHidden=!1,this.categoryAlerts.updateCategory()},o=>{console.log("error")})}closeUpdate(){this.isHidden=!1,this.category={_id:"",name:"",description:""}}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(u),e.Y36(_),e.Y36(i.Br))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-table-category"]],decls:19,vars:5,consts:[["color","secondary",3,"disabled","click"],["slot","icon-only","name","remove"],["color","danger",3,"disabled","click"],["slot","icon-only","name","add"],[1,"r1"],[1,"r2"],[1,"r3"],[4,"ngFor","ngForOf"],["class","update-box",4,"ngIf"],["color","secondary",1,"btn-op","create",3,"click"],["color","dark","size","large","slot","icon-only","name","create"],["color","danger",1,"btn-op","delete",3,"click"],["color","dark","size","large","slot","icon-only","name","close-circle"],[1,"update-box"],[1,"title"],[1,"close-button",3,"click"],[1,"sub-box"],[3,"ngSubmit"],["categoryForm","ngForm"],["type","hidden","name","_id",3,"ngModel","ngModelChange"],[1,"form-part"],["color","primary","position","floating"],["type","text","color","primary","placeholder","Enter category name","name","name","require","","minlength","4",3,"ngModel","ngModelChange"],["color","primary","placeholder","Category description","name","description",3,"ngModel","ngModelChange"],[1,"save-button"]],template:function(t,o){1&t&&(e.TgZ(0,"article")(1,"ion-button",0),e.NdJ("click",function(){return o.numPage(-1)}),e._UZ(2,"ion-icon",1),e.qZA(),e.TgZ(3,"p"),e._uU(4),e.qZA(),e.TgZ(5,"ion-button",2),e.NdJ("click",function(){return o.numPage(1)}),e._UZ(6,"ion-icon",3),e.qZA()(),e.TgZ(7,"table")(8,"thead")(9,"tr")(10,"th",4),e._uU(11,"Name"),e.qZA(),e.TgZ(12,"th",5),e._uU(13,"Description"),e.qZA(),e.TgZ(14,"th",6),e._uU(15,"Operations"),e.qZA()()(),e.TgZ(16,"tbody"),e.YNc(17,b,10,2,"tr",7),e.qZA()(),e.YNc(18,x,18,3,"div",8)),2&t&&(e.xp6(1),e.Q6J("disabled",o.isMinusActivate),e.xp6(3),e.Oqu(o.page),e.xp6(1),e.Q6J("disabled",o.isAddActivate),e.xp6(12),e.Q6J("ngForOf",o.categories),e.xp6(1),e.Q6J("ngIf",o.isHidden))},dependencies:[p.sg,p.O5,s._Y,s.Fj,s.JJ,s.JL,s.wO,s.On,s.F,i.YG,i.gu,i.pK,i.Ie,i.Q$,i.g2,i.j9],styles:["article[_ngcontent-%COMP%]{display:flex;justify-content:space-between;margin:40px 0 15px}table[_ngcontent-%COMP%]{width:100%;margin-top:20px;box-shadow:3px 3px 3px 3px rgba(186,186,186,.25);margin-bottom:30px}tr[_ngcontent-%COMP%], th[_ngcontent-%COMP%]{border:hsla(212,100%,87%,.5) solid 1px;height:35px}.addButton[_ngcontent-%COMP%], .minusButton[_ngcontent-%COMP%]{width:40px;height:30px}.r1[_ngcontent-%COMP%]{background-color:rgba(189,220,255,.5)}.r2[_ngcontent-%COMP%]{background-color:rgba(163,255,174,.5)}.r3[_ngcontent-%COMP%]{background-color:rgba(255,133,133,.5)}.btn-op[_ngcontent-%COMP%]{width:40%}.update-box[_ngcontent-%COMP%]{margin-top:30px;margin-bottom:40px;box-shadow:3px 3px 3px 3px rgba(186,186,186,.25)}.save-button[_ngcontent-%COMP%]{margin:20px auto;width:100%;height:30px;background-color:#0080ff;font-weight:700}.save-button[_ngcontent-%COMP%]:hover{background-color:#0090ff}.sub-box[_ngcontent-%COMP%]{width:90%;margin:auto}.close-button[_ngcontent-%COMP%]{margin:5px 5px 0 0;background-color:red;width:50px;height:30px;border-radius:5px}.close-button[_ngcontent-%COMP%]:hover{background-color:#a50000}.title[_ngcontent-%COMP%]{display:flex;justify-content:space-between}thead[_ngcontent-%COMP%]{height:20px}h3[_ngcontent-%COMP%]{font-weight:700}@media only screen and (min-width: 800px){table[_ngcontent-%COMP%]{width:70%;margin:auto auto 30px}article[_ngcontent-%COMP%]{margin:30px auto;width:50%;border-radius:5px}.btn-op[_ngcontent-%COMP%]{width:60px}.delete[_ngcontent-%COMP%]{margin-left:15px}}"]}),n})();const M=[{path:"",component:(()=>{class n{constructor(t,o,r){this.categoryService=t,this.fb=o,this.alertController=r,this.categories=[],this.page=0,this.max=0,this.isAddActivate=!1,this.isMinusActivate=!0,this.category={_id:"",name:"",description:""}}ngOnInit(){this.getCategories()}presentAlert(){return(0,d.mG)(this,void 0,void 0,function*(){yield(yield this.alertController.create({header:"Category",subHeader:"Added",message:"Category added succesfuly",buttons:["OK"]})).present()})}cleanForm(t){return t.reset()}addCategory(t){this.categoryService.createCategory(t.value).subscribe(o=>{this.getCategories(),this.cleanForm(t),this.presentAlert()},o=>console.log(this.category._id))}numPage(t){let o=this.page+=t;return o<0&&(console.log("minus"),this.page=0,this.getCategories(o),this.isMinusActivate=!0),o>=this.max&&(console.log("max"),this.page=this.max,this.isAddActivate=!0,this.getCategories(this.page)),this.isAddActivate=!1,this.isMinusActivate=!1,this.getCategories(o)}getCategories(t=0){this.categoryService.getCategories(t).pipe((0,C.q)(1)).subscribe(o=>{console.log(o);const{data:r,total:a}=o;this.categories=[...r],console.log(a),a>10&&(this.max=a-10),console.log(this.max)},o=>console.log("error"))}deleteCategory(t,o){return(0,d.mG)(this,void 0,void 0,function*(){yield(yield this.alertController.create({header:`Are you sure want to delete ${o} category`,buttons:[{text:"Cancel",role:"cancel",handler:()=>{}},{text:"OK",role:"confirm",handler:()=>{this.categoryService.deleteCategory(t),this.getCategories()}}]})).present()})}editCategory(t,o,r){}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(u),e.Y36(s.qu),e.Y36(i.Br))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-category"]],decls:21,vars:2,consts:[[1,"container"],[1,"sub-container"],[3,"ngSubmit"],["categoryForm","ngForm"],[1,"form-part"],["color","primary","position","floating"],["type","text","color","primary","placeholder","Enter category name","name","name","require","","minlength","4",3,"ngModel","ngModelChange"],["color","primary","placeholder","Category description","name","description",3,"ngModel","ngModelChange"],[1,"save-button"]],template:function(t,o){if(1&t){const r=e.EpF();e.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-title"),e._uU(3,"test"),e.qZA()()(),e.TgZ(4,"ion-content")(5,"div",0)(6,"h2"),e._uU(7,"Categories"),e.qZA(),e.TgZ(8,"div",1)(9,"form",2,3),e.NdJ("ngSubmit",function(){e.CHM(r);const l=e.MAs(10);return e.KtG(o.addCategory(l))}),e.TgZ(11,"ion-item",4)(12,"ion-label",5),e._uU(13,"Category name"),e.qZA(),e.TgZ(14,"ion-input",6),e.NdJ("ngModelChange",function(l){return o.category.name=l}),e.qZA()(),e.TgZ(15,"ion-item")(16,"ion-textarea",7),e.NdJ("ngModelChange",function(l){return o.category.description=l}),e.qZA()(),e.TgZ(17,"button",8),e._uU(18,"Save"),e.qZA()()()(),e.TgZ(19,"section"),e._UZ(20,"app-table-category"),e.qZA()()}2&t&&(e.xp6(14),e.Q6J("ngModel",o.category.name),e.xp6(2),e.Q6J("ngModel",o.category.description))},dependencies:[s._Y,s.JJ,s.JL,s.wO,s.On,s.F,i.W2,i.Gu,i.pK,i.Ie,i.Q$,i.g2,i.wd,i.sr,i.j9,f],styles:[".container[_ngcontent-%COMP%]{width:90%;max-width:500px;border:#f7f7f7 solid 1px;margin:20px auto 0;padding-bottom:20px;box-shadow:3px 3px 3px rgba(186,186,186,.25)}.container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{text-align:left;font-weight:800}.sub-container[_ngcontent-%COMP%]{width:85%;margin:auto}.forma-part[_ngcontent-%COMP%]{margin-top:10px}.save-button[_ngcontent-%COMP%]{margin:20px auto 0;width:100%;height:30px;background-color:#0080ff;font-weight:700}.save-button[_ngcontent-%COMP%]:hover{background-color:#0090ff}form[_ngcontent-%COMP%]{margin-top:30px}section[_ngcontent-%COMP%]{width:90%;margin:auto}article[_ngcontent-%COMP%]{display:flex;justify-content:space-between;margin:40px 0 15px}table[_ngcontent-%COMP%]{width:100%;margin-top:20px;box-shadow:3px 3px 3px 3px rgba(186,186,186,.25);margin-bottom:30px}tr[_ngcontent-%COMP%], th[_ngcontent-%COMP%]{border:hsla(212,100%,87%,.5) solid 1px;height:35px}.addButton[_ngcontent-%COMP%], .minusButton[_ngcontent-%COMP%]{width:40px;height:30px}.r1[_ngcontent-%COMP%]{background-color:rgba(189,220,255,.5)}.r2[_ngcontent-%COMP%]{background-color:rgba(163,255,174,.5)}.r3[_ngcontent-%COMP%]{background-color:rgba(255,133,133,.5)}.btn-op[_ngcontent-%COMP%]{width:40%}thead[_ngcontent-%COMP%]{height:20px}@media only screen and (min-width: 800px){table[_ngcontent-%COMP%]{width:70%;margin:auto auto 30px}article[_ngcontent-%COMP%]{margin:30px auto;width:50%;border-radius:5px}.btn-op[_ngcontent-%COMP%]{width:60px}.delete[_ngcontent-%COMP%]{margin-left:15px}}"]}),n})()}];let v=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[m.Bz.forChild(M),m.Bz]}),n})();var P=g(6230),A=g(4814),O=g(9558),T=g(5657);let Z=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({providers:[{provide:y.TP,useClass:O.B,multi:!0},T.N],imports:[p.ez,s.u5,i.Pc,v,P.$,A.DashboardPageModule,s.u5,s.UX]}),n})()}}]);