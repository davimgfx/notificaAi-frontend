import { Component } from '@angular/core';
import { ButtonComponent } from "../button/button.component";
import { CommonModule } from '@angular/common';
import { AUTH } from '../../../core/models/constants-routing';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-navbar',
    imports: [ButtonComponent, CommonModule, RouterLink],
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.css'
})
export class NavbarComponent {
    AUTH_ROUTER = AUTH;
    isHamburgerMenuOpen = false;

    toggleHamburgerMenu() {
    this.isHamburgerMenuOpen = !this.isHamburgerMenuOpen;
     } 

}
