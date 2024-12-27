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
  // Calculer la somme totale des produits
  this.total = this.produitsPanier.reduce((acc, produit) => {
    return acc + produit.produitPrix * produit.quantite;
  }, 0);
}
retirerProduits(): void {
  // Filtrer les produits non sélectionnés pour les garder dans le panier
  const produitsASupprimer = this.produitsPanier.filter(produit => produit.selected);

  if (produitsASupprimer.length === 0) {
    alert("Aucun produit sélectionné pour suppression.");
    return;
  }

  produitsASupprimer.forEach(produit => {
    this.panierService.removeFromCart(produit.id).subscribe({
      next: () => {
        this.produitsPanier = this.produitsPanier.filter(p => p.id !== produit.id);
        this.calcultotal(); // Recalculer le total
        this.panierService.updateCartItemCount();
      },
      error: (err: any) => {
        console.error("Erreur lors de la suppression du produit :", err);
      }
    });
  });
}
}
