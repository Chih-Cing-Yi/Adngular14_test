import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  //依賴注入
  constructor(private router: Router) {}

  navigateToAbout(): void {
    this.router.navigate(['about']);
  }
}
