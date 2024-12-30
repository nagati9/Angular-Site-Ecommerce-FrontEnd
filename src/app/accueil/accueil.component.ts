import { Component, getNgModuleById } from '@angular/core';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { NgFor } from '@angular/common';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProduitService } from '../services/produit.service';
import { Produit } from '../models/produit.model';
import { ProduitComponent } from '../produit/produit.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css'],
  standalone: true,
  imports: [
   CarouselModule, CommonModule, RouterLink
  ],
})
export class AccueilComponent {
  produits: Produit[] = [];

  constructor(private produitService: ProduitService) {}

  ngOnInit(): void {
      this.produitService.getProduits().subscribe(data => {
          this.produits = data;
      });
  }
}
