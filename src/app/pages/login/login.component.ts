import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginObj : loginUser = new loginUser(); 
}

export class loginUser {
  userName : string;
  password : string;

  constructor() {
    this.userName = '';
    this.password = '';
  }
}
