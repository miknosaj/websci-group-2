import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './views/header.component.html',
})

export class HeaderComponent {
  loggedIn: boolean;

  constructor() {
    // TODO set this value based on whether user is logged in
    this.loggedIn = false;
  }
}
