import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { PanierService } from '../services/panier.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  userName: string | null = null;
  cartItemCount: number = 0;
  currentUser$:Observable<boolean> | undefined;
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
  constructor(
    private authService: AuthService,
    private panierService: PanierService,
    private router: Router
    
  ) {}
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
  ngOnInit(): void {
    // Récupérer l'utilisateur actuel
    this.authService.getCurrentUser().subscribe(
      (response) => {
        this.userName = response.userName; // Stocke le nom de l'utilisateur
        this.currentUser$=this.authService.isOnline$;
      },
      (error) => {
        console.log('Aucun utilisateur connecté.', error);
      }
    );

      // Écouter les modifications du panier
      this.panierService.getCartItemCount().subscribe((count) => {
        this.cartItemCount = count;
      });
       // Initialiser le compteur d'articles
    this.panierService.updateCartItemCount();
  }
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
  logout(): void {
    this.authService.logout();
    this.userName = null;
    this.router.navigate(['/Accueil']).then(
      () => {
        console.log('Navigation réussie.');
        location.reload(); // Rafraîchit la page
      },
      (error) => {
        console.error('Erreur de navigation :', error);
      }
    );
  }
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------  
}
