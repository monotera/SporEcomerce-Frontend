import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private _router: Router) { }

  activeLink:string = ""
  @ViewChild('nav-links') navLinks: any
  onClick(route:string) {
    this.activeLink = route
    this.open()
    this._router.navigateByUrl(route);
  }
  open() {
    const navLinks:any = document.querySelector(".nav-links");
    const links = document.querySelectorAll(".nav-links li");
    const lines = document.querySelectorAll(".line");
    navLinks.classList.toggle("open");
    links.forEach((link) => {
        link.classList.toggle("fade");
    });
    lines.forEach((line) => {
    line.classList.toggle("open");
  });
  }
  ngOnInit(): void {
    this.activeLink = this._router.url
  }

}
