import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { HeroComponent } from './pages/home/hero/hero.component';
import { AppsChooseComponent } from "./pages/home/apps-choose/apps-choose.component";
import { HowWorksComponent } from "./pages/home/how-works/how-works.component";
import { PlansComponent } from "./pages/home/plans/plans.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, HeroComponent, AppsChooseComponent, HowWorksComponent, PlansComponent],
  templateUrl: './app.component.html'
})

export class AppComponent {
  title = 'notificaAi';
}
