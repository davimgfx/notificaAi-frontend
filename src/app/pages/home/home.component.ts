import { Component } from '@angular/core';
import { NavbarComponent } from "../../shared/components/navbar/navbar.component";
import { HeroComponent } from "./hero/hero.component";
import { HowWorksComponent } from "./how-works/how-works.component";
import { PlansComponent } from "./plans/plans.component";
import { FooterComponent } from "../../shared/components/footer/footer.component";
import { AppsChooseComponent } from "./apps-choose/apps-choose.component";

@Component({
    selector: 'app-home',
    imports: [NavbarComponent, HeroComponent, HowWorksComponent, PlansComponent, FooterComponent, AppsChooseComponent],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css'
})
export class HomeComponent {

}
