import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../../shared/interfaces';
import { AuthService } from '../shared/services/auth.service';
import { Router } from '@angular/router';

import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  form: FormGroup;

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.minLength(5)]),
      password: new FormControl(null, [Validators.required, Validators.minLength(5)]),
    });
  }

  submit() {
    if (this.form.invalid) {
      return;
    }

    const user: User = {
      login: this.form.value.email,
      password: CryptoJS.SHA1(this.form.value.password).toString(),
    };

    this.auth.login(user).subscribe(
      (res) => {
        console.log('status: ' + res);
        if (res == 200) this.router.navigate(['/success']);
      },
      (error) => {
        console.log('status: ' + error.status);
        this.router.navigate(['/error']);
      },
    );
  }
}
