import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css'], 
})
export class Login {
  loginObj: any = {
    username: '',
    password: ''
  };

  router = inject(Router);

  onlogin() {
    const isValidUser =
      (this.loginObj.username === 'Testing' || this.loginObj.username === 'Testing@sample.com')
      && this.loginObj.password === '121212';

    if (isValidUser) {
      this.router.navigateByUrl('/dashboard'); 
      alert('Login successful!');
    } else {
      alert('Invalid Credential Contact Admin');
    }
  }
}
