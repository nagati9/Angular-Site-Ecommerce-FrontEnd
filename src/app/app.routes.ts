import { Routes } from '@angular/router';
import { provideRouter } from '@angular/router';
import { ParfumComponent } from './parfum/parfum.component';
import { SkincareComponent } from './skincare/skincare.component';
import { VetementComponent } from './vetement/vetement.component';

export const routes: Routes = [
  { path: 'parfums', component: ParfumComponent },
  { path: 'skincare', component: SkincareComponent },
  { path: 'vetement', component: VetementComponent },
  { path: '', redirectTo: '/parfums', pathMatch: 'full' }, // Route par défaut
];

// Fournisseur global pour le routage
export const AppRouterProvider = provideRouter(routes);
