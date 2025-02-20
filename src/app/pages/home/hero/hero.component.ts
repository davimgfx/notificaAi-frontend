import { Component } from '@angular/core';
import { ButtonComponent } from '../../../shared/components/button/button.component';
import { AUTH } from '../../../core/models/constants-routing';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
    AUTH_ROUTER = AUTH;

}
