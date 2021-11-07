import { Component, OnInit } from '@angular/core';
import { LoginService } from '../shared/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user = 'alice';
  password = 'pass123';

  result: any;

  message: any;

  constructor(private logInService: LoginService) { }

  ngOnInit(): void {
  }
    doLogin() {
    console.log(this.user + ' - ' + this.password);
    this.logInService.login(this.user, this.password).subscribe(data => {
        this.message = 'Login Ok';
      }, error => {
        console.error(error);
        this.message = JSON.stringify(error);
      });
    }
  info() {
    this.logInService.getPlayer().subscribe(data => {
      console.log(data);
    })
  }

}
