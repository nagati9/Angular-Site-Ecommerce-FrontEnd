import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  imports: [],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit {
  product: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Récupérer les données de l'état de navigation
    this.product = history.state;

    // Si vous souhaitez afficher un message si aucun état n'est disponible :
    if (!this.product || Object.keys(this.product).length === 0) {
      this.product = { nom: 'Produit introuvable', marque: { nom: 'N/A' } };
    }
  }
}
