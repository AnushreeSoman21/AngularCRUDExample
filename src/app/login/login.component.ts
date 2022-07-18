import { Component, OnInit } from '@angular/core';
import { ILogin } from 'src/app/interfaces/login';
import { AuthService } from '../services/auth.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: ILogin = { userid: "admin", password: "admin@123" };
  loginForm: FormGroup;
  message: string;
  returnUrl: string;
  hide = true;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.loginForm = new FormGroup(
      {
        userid: new FormControl('', [Validators.required]),
        password: new FormControl('', [Validators.required, Validators.minLength(6)])
      });
    this.returnUrl = '/demo/home';
    this.authService.logout();
  }

  get f() { return this.loginForm.controls; }

  login() {
    if (this.loginForm.invalid) {
      return;
    }
    else {
      if (this.f['userid'].value == this.model.userid && this.f['password'].value == this.model.password) {
        console.log("Login successful");
        //this.authService.authLogin(this.model);  
        localStorage.setItem('isLoggedIn', "true");
        localStorage.setItem('token', this.f['userid'].value);
        this.router.navigate([this.returnUrl]);
      }
      else {
        this.message = "Please check your userid and password";
      }
    }
  }

}
