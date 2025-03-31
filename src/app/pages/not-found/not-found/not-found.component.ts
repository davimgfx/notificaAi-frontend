import { Component } from '@angular/core';
import { ButtonComponent } from "../../../shared/components/button/button.component";
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-not-found',
    imports: [ButtonComponent, RouterLink],
    templateUrl: './not-found.component.html',
    styleUrl: './not-found.component.css'
})
export class NotFoundComponent {

}
