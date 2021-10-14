import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  @ViewChild('nav-links') navLinks: any
  close() {
    console.log("clo")
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
  }

}
