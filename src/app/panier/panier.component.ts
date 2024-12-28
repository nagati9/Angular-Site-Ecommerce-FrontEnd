import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { PanierService } from '../services/panier.service';
import { Produit } from '../models/produit.model';
import { CommonModule } from '@angular/common';
import { PanierProduit } from '../models/panierProduit.model';
import { FormsModule, NgModel } from '@angular/forms';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-panier',
  imports: [CommonModule, FormsModule],
  templateUrl: './panier.component.html',
  styleUrl: './panier.component.css'
})
export class PanierComponent {

  produitsPanier: any[] = []; // Liste des produits dans le panier
  errorMessage: string | null = null; // Message d'erreur
  total: number = 0; // Somme totale des produits

constructor(private panierService: PanierService) {}
ngOnInit(): void {
  this.panierService.getPanier().subscribe(
    (data) => {
      this.produitsPanier = data;
      this.calcultotal(); 
    },
    (error) => {
      this.errorMessage = 'Impossible de récupérer les produits du panier.';
      console.error(error);
    }

    
  );
}
calcultotal(): void {
  if (Array.isArray(this.produitsPanier)) {
    this.total = this.produitsPanier.reduce((acc, produit) => {
      const prix = produit.produitPrix || 0; // Valeur par défaut si produitPrix est indéfini
      const quantite = produit.quantite || 0; // Valeur par défaut si quantite est indéfinie
      return acc + prix * quantite;
    }, 0);
  } else {
    console.error('this.produitsPanier n\'est pas un tableau:', this.produitsPanier);
    this.total = 0; // Ou une autre valeur par défaut appropriée
  }
}

retirerProduits(): void {
  console.log("Produits dans le panier :", this.produitsPanier);

  const produitsASupprimer = this.produitsPanier.filter(produit => produit.selected);

  if (produitsASupprimer.length === 0) {
    alert("Aucun produit sélectionné pour suppression.");
    return;
  }

  produitsASupprimer.forEach(produit => {
    console.log("Produit à supprimer :", produit);

    this.panierService.removeFromCart(produit.produitId, produit.quantite).subscribe({
      next: () => {
        this.produitsPanier = this.produitsPanier.filter(p => p.id !== produit.produitId);
        this.calcultotal(); // Recalculer le total
        this.panierService.updateCartItemCount();
        location.reload();
      },
      error: (err: any) => {
        console.error("Erreur lors de la suppression du produit :", err);
      }
    });
  });
}

}
