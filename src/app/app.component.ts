import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Parfum } from './models/parfum.model';
import { ParfumComponent } from "./parfum/parfum.component";
import { Skincare } from './models/skincare.model';
import { SkincareComponent } from './skincare/skincare.component';
import { VetementComponent } from './vetement/vetement.component';
import { HeaderComponent } from "./header/header.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ParfumComponent, SkincareComponent, VetementComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'gestionnaire';
}
