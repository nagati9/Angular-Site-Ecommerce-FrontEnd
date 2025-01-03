import { Routes } from '@angular/router';
import { provideRouter } from '@angular/router';
import { ParfumComponent } from './parfum/parfum.component';
import { SkincareComponent } from './skincare/skincare.component';
import { VetementComponent } from './vetement/vetement.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { ProduitComponent } from './produit/produit.component';
import { PanierComponent } from './panier/panier.component';
import { AboutComponent } from './about/about.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';

export const routes: Routes = [
  { path: 'parfums', component: ParfumComponent },
  { path: 'skincare', component: SkincareComponent },
  { path: 'vetement', component: VetementComponent },
  { path: 'Accueil', component: AccueilComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'signin', component: LoginComponent },
  { path: 'panier', component: PanierComponent },
  { path: 'prod', component: ProduitComponent },
  { path: 'About', component: AboutComponent },
  { path: 'Profile', component: UtilisateurComponent },
  { path: 'product/:type/:id', component: ProductDetailComponent },
  { path: '', redirectTo: '/Accueil', pathMatch: 'full' }, // Route par défaut
];

// Fournisseur global pour le routage
export const AppRouterProvider = provideRouter(routes);
