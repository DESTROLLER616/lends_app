"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[739],{739:(S,g,a)=>{a.r(g),a.d(g,{HomePageModule:()=>Z});var u=a(6895),l=a(4556),i=a(433),c=a(538),e=a(8256),m=a(529);let d=(()=>{class o{constructor(t){this.http=t,this.URL_LOGIN="https://lends-backend.onrender.com/authentication"}authenticated(t){return this.http.post(this.URL_LOGIN,t)}}return o.\u0275fac=function(t){return new(t||o)(e.LFG(m.eN))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var p=a(5657);function f(o,r){1&o&&(e.TgZ(0,"ion-note",12),e._uU(1,"Type a valid email"),e.qZA())}function h(o,r){1&o&&(e.TgZ(0,"ion-note",13),e._uU(1,"Invalid email"),e.qZA())}function v(o,r){1&o&&(e.TgZ(0,"ion-note",13),e._uU(1,"Require min 8 characteres"),e.qZA())}const P=[{path:"",component:(()=>{class o{constructor(t,n,s,U){this.fb=t,this.loginService=n,this.router=s,this.cookieService=U,this.formUser=this.fb.group({email:["",[i.kI.email,i.kI.required]],password:["",[i.kI.minLength(8)]],strategy:["local"]})}ngOnInit(){this.isAuthenticated()&&this.router.navigate(["dashboard"])}get email(){return this.formUser.get("email")}get password(){return this.formUser.get("password")}get strategy(){return this.formUser.get("strategy")}login(){this.loginService.authenticated(this.formUser.value).subscribe(t=>{const{user:n,accessToken:s}=t;console.log(n),console.log(s),this.cookieService.set("token",s),this.cookieService.set("id",n._id),this.cookieService.set("name",n.fullname),this.cookieService.set("email",n.email),this.cookieService.set("telephone",n.telephone),console.log("logged"),this.router.navigate(["dashboard"])},t=>{console.log(t)})}isAuthenticated(){return!!this.cookieService.get("token")}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(i.qu),e.Y36(d),e.Y36(c.F0),e.Y36(p.N))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-home"]],decls:19,vars:7,consts:[[3,"fullscreen"],["id","container"],["id","login-container"],["src","../../assets/Logo.png","id","image","alt","Lends image"],[3,"formGroup","ngSubmit"],["position","floating"],["placeholder","Enter text","formControlName","email",1,"custom"],[3,"hidden"],["color","success",4,"ngIf"],["color","danger",4,"ngIf"],["type","password","placeholder","Enter text","formControlName","password",1,"custom"],["id","button-login",3,"disabled"],["color","success"],["color","danger"]],template:function(t,n){1&t&&(e.TgZ(0,"ion-content",0)(1,"div",1)(2,"main",2),e._UZ(3,"ion-img",3),e.TgZ(4,"form",4),e.NdJ("ngSubmit",function(){return n.login()}),e.TgZ(5,"ion-item")(6,"ion-label",5),e._uU(7,"Email"),e.qZA(),e._UZ(8,"ion-input",6),e.TgZ(9,"div",7),e.YNc(10,f,2,0,"ion-note",8),e.YNc(11,h,2,0,"ion-note",9),e.qZA()(),e.TgZ(12,"ion-item")(13,"ion-label",5),e._uU(14,"Password"),e.qZA(),e._UZ(15,"ion-input",10),e.YNc(16,v,2,0,"ion-note",9),e.qZA(),e.TgZ(17,"button",11),e._uU(18,"Login"),e.qZA()()()()()),2&t&&(e.Q6J("fullscreen",!0),e.xp6(4),e.Q6J("formGroup",n.formUser),e.xp6(5),e.Q6J("hidden",n.email.valid||n.email.pristine),e.xp6(1),e.Q6J("ngIf",null==n.email||null==n.email.errors?null:n.email.errors.require),e.xp6(1),e.Q6J("ngIf",null==n.email||null==n.email.errors?null:n.email.errors.email),e.xp6(5),e.Q6J("ngIf",null==n.password||null==n.password.errors?null:n.password.errors.minLength),e.xp6(1),e.Q6J("disabled",n.formUser.invalid))},dependencies:[u.O5,i._Y,i.JJ,i.JL,i.sg,i.u,l.W2,l.Xz,l.pK,l.Ie,l.Q$,l.uN,l.j9],styles:["main[_ngcontent-%COMP%]{padding:30px 20px}#container[_ngcontent-%COMP%]{text-align:center;background-color:#fff;position:absolute;left:0;right:0;top:50%;transform:translateY(-50%)}#login-container[_ngcontent-%COMP%]{border:solid #F7F7F7 2px;border-radius:5px;width:90%;margin:auto;box-shadow:5px 3px 3px rgba(253,143,255,.3)}#image[_ngcontent-%COMP%]{background-color:var(--ion-color-light-rgb)}#button-login[_ngcontent-%COMP%]{margin-top:30px;width:70%;height:30px;border-radius:4px;background-color:#3dc2ff;color:#fff;font-weight:900}ion-input.custom[_ngcontent-%COMP%]{--color: #000000;--placeholder-color: blue;--placeholder-opacity: .8}ion-item[_ngcontent-%COMP%]{margin-top:20px}ion-button[_ngcontent-%COMP%]{margin-top:30px}"]}),o})()}];let b=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[c.Bz.forChild(P),c.Bz]}),o})(),Z=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[u.ez,i.u5,i.UX,l.Pc,b]}),o})()}}]);