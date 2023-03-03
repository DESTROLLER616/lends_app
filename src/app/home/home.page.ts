import { Component } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LogService } from 'src/services/log.service';

import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private fb: FormBuilder, private loginService: LogService, private router: Router, private cookieService: CookieService) {}

  get email(){
    return this.formUser.get('email') as FormControl
  }

  get password(){
    return this.formUser.get('password') as FormControl
  }

  get strategy() {
    return this.formUser.get('strategy') as FormControl
  }

  formUser = this.fb.group({
    'email': ['', []],
    'password': ['', []],
    'strategy': ['local'],
  })

  login(){
    this.loginService.authenticated(this.formUser.value).subscribe( (res:any) => {
      const {user, accessToken} = res
      console.log(user)
      console.log(accessToken);

      this.cookieService.set('token', accessToken)
      this.cookieService.set('id', user._id)
      this.cookieService.set('name', user.fullname)
      this.cookieService.set('email', user.email)
      this.cookieService.set('telephone', user.telephone)
      

      console.log('logged');

      this.router.navigate(['dashboard'])
      
    },
    (err) => {
      console.log(err);
      
    })
  }
}
