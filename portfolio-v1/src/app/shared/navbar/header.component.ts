import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  showNavItems = false;

  @HostListener("window:resize", []) updateDays() {
    if (window.innerWidth >= 600) {
      this.showNavItems = true;
    } else {
      this.showNavItems = false;
    }
  }

  constructor() { }

  ngOnInit(): void {
    if (window.innerWidth >= 600) {
      this.showNavItems = true;
    }
  }

  /**
   * Toggles Navigation Items
   */
  toggleNavItems() {
    this.showNavItems = !this.showNavItems;
  }
}
