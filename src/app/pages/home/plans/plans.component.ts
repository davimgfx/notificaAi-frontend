import { Component } from '@angular/core';
import { ButtonComponent } from "../../../shared/components/button/button.component";

@Component({
  selector: 'app-plans',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './plans.component.html',
  styleUrl: './plans.component.css'
})
export class PlansComponent {

}
