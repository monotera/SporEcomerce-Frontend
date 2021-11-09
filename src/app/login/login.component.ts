import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../shared/login.service';
import { StarService } from '../shared/star.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  user = '';
  password = 'pass123';

  result: any;

  message: any;

  constructor(
    private logInService: LoginService,
    private _router: Router,
    private starService: StarService
  ) {}

  ngOnInit(): void {
    this.starService.getThePlayer().subscribe((data) => {
      this._router.navigateByUrl('/navigation');
    });
  }
  doLogin() {
    console.log(this.user + ' - ' + this.password);
    this.logInService.login(this.user, this.password).subscribe(
      (data) => {
        this.message = 'Login Ok';
        this._router.navigateByUrl('/navigation');
      },
      (error) => {
        alert('The username or the password is incorrect');
        console.error(error);
        this.message = JSON.stringify(error);
      }
    );
  }
  info() {
    this.logInService.getPlayer().subscribe((data) => {
      console.log(data);
    });
  }
}
