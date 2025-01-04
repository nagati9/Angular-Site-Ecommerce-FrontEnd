import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PanierService } from '../services/panier.service';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-product-detail',
  imports: [CommonModule,RouterLink],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit {
  product: any;
  isOnline$!: Observable<boolean>;
  // Injecter PanierService dans le constructeur
  constructor(private route: ActivatedRoute, private panierService: PanierService, private authService: AuthService) {}
 //----------------------------------------------------------------------------------------------------------------------------------------------------------------------- 
  ngOnInit(): void {
    // Récupérer les données de l'état de navigation
    this.product = history.state;
    this.isOnline$=this.authService.isOnline$;
    // Si vous souhaitez afficher un message si aucun état n'est disponible :
    if (!this.product || Object.keys(this.product).length === 0) {
      this.product = { nom: 'Produit introuvable', marque: { nom: 'N/A' } };
    }
  }
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
  public addToCart(id: any,quantite: any): void {
    this.panierService.addToCart(id, quantite).subscribe(
      (response) => {
        this.panierService.updateCartItemCount();
        console.log('Produit ajouté au panier avec succès !', response);
      },
      (error) => {
        console.error('Erreur lors de l\'ajout du produit au panier :', error);
      }
    );
  }
}
