import { Component } from '@angular/core';
import { Produit } from '../models/produit.model';
import { ProduitService } from '../services/produit.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-produit',
  imports: [CommonModule],
  templateUrl: './produit.component.html',
  styleUrl: './produit.component.css'
})
export class ProduitComponent {
produits: Produit[] = [];

    constructor(private produitService: ProduitService) {}

    ngOnInit(): void {
        this.produitService.getProduits().subscribe(data => {
            this.produits = data;
        });
    }
}
