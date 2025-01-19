import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup = new FormGroup({
    userName: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });

router = inject(Router);
onLogin (){
  const loginObj = this.loginForm.value;
  if(loginObj.userName == "Admin" && loginObj.password == "1234"){
    this.router.navigateByUrl("/layout/dashboard");
  }else{
    alert("login details are wrong");
  }
}
}
