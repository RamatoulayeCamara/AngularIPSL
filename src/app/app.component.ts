import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EnteteComponent } from "./frame/entete/entete.component";
import { MenuComponent } from "./frame/menu/menu.component";
import { AccueilComponent } from "./accueil/accueil.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, EnteteComponent, MenuComponent, AccueilComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'projetAngular';
}
