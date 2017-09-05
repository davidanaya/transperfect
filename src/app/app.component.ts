import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <nav class="navigation">
      <a routerLink="home" routerLinkActive="active">Home</a>
      <a routerLink="issues" routerLinkActive="active">Issues</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {}
