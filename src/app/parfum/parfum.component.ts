import { Component, OnInit } from '@angular/core';
import { ParfumService } from '../services/parfum.service';
import { Parfum } from '../models/parfum.model';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { PanierService } from '../services/panier.service';
import { ProduitService } from '../services/produit.service';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-parfum',
  templateUrl: './parfum.component.html',
  styleUrls: ['./parfum.component.css'],
  standalone: true,
  imports: [CommonModule, RouterLink] // Ajout de CommonModule
})
export class ParfumComponent implements OnInit {
    parfums: Parfum[] = [];
    isOnline$!: Observable<boolean>;
   
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
    constructor(
        private parfumService: ParfumService, // Pour gérer les parfums
        private panierService: PanierService , 
        private authService: AuthService// Pour gérer le panier
      ) {}
    
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------    

    ngOnInit(): void {
        this.parfumService.getProduitsParType(1).subscribe(data => {
          this.isOnline$=this.authService.isOnline$;
            this.parfums = data;
        });
    }
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------    
    public   shortenName(nom : string){
        if (nom.length>25){
            return nom.substring(0,25)+"...";
        }
       else{
        return nom;
       }
    }
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------       
      public addToCart(id: any,quantite: any): void {
        this.panierService.addToCart(id,1).subscribe(() => {
          this.panierService.updateCartItemCount(); // Met à jour le compteur
        });
    }
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------    
}
