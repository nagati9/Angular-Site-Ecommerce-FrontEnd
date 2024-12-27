import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PanierService } from '../services/panier.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-product-detail',
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit {
  product: any;

  // Injecter PanierService dans le constructeur
  constructor(private route: ActivatedRoute, private panierService: PanierService) {}

  ngOnInit(): void {
    // Récupérer les données de l'état de navigation
    this.product = history.state;

    // Si vous souhaitez afficher un message si aucun état n'est disponible :
    if (!this.product || Object.keys(this.product).length === 0) {
      this.product = { nom: 'Produit introuvable', marque: { nom: 'N/A' } };
    }
  }

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
