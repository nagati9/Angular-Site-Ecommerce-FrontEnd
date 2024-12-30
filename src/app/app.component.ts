import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Parfum } from './models/parfum.model';
import { ParfumComponent } from "./parfum/parfum.component";
import { Skincare } from './models/skincare.model';
import { SkincareComponent } from './skincare/skincare.component';
import { VetementComponent } from './vetement/vetement.component';
import { HeaderComponent } from "./header/header.component";
import { AccueilComponent } from './accueil/accueil.component';
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'gestionnaire';
  public   shortenName(nom : string){
    return nom.substring(10);

}
}
