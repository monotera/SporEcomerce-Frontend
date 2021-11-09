import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CrewService } from '../shared/crew.service';
import { LoginService } from '../shared/login.service';
import { StarService } from '../shared/star.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(
    private _router: Router,
    private starService: StarService,
    private logInService: LoginService
  ) {}

  isLogged = false;
  activeLink: string = '';
  @ViewChild('nav-links') navLinks: any;
  onClick(route: string) {
    this.activeLink = route;
    this.open();
    this._router.navigateByUrl(route);
  }
  open() {
    const navLinks: any = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links li');
    const lines = document.querySelectorAll('.line');
    navLinks.classList.toggle('open');
    links.forEach((link) => {
      link.classList.toggle('fade');
    });
    lines.forEach((line) => {
      line.classList.toggle('open');
    });
  }
  ngOnInit(): void {
    this.activeLink = this._router.url;
    this.updateVal();
    this._router.events.subscribe((e) => {
      this.updateVal();
    });
  }
  logout() {
    this.logInService.logout().subscribe((data) => {
      this.activeLink = '/';
      this.open();
      this._router.navigateByUrl('/');
    });
  }
  updateVal() {
    this.starService.getThePlayer().subscribe(
      (data) => {
        this.isLogged = true;
      },
      (err) => {
        this.isLogged = false;
      }
    );
  }
}
