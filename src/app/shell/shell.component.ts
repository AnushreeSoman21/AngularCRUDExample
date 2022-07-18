import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from "../services/auth.service";
@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.css']
})
export class ShellComponent implements OnInit {
  showFiller = false;
  navLinks: any[];
  activeLinkIndex = -1;

  constructor(private readonly router: Router, private readonly authservice: AuthService) {
    this.navLinks = [
      {
        label: 'Home',
        link: '/demo/home',
        index: 0,
        icon: 'dashboard'
      },
      {
        label: 'Employee',
        link: '/demo/employee',
        index: 1,
        icon: 'person'
      }
    ];

  }
  ngOnInit(): void {
    this.router.events.subscribe(() => {
      this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
    });

  }
  logout() {
    console.log('logout');
    this.authservice.logout();
    this.router.navigate(['/login']);
  }
}
