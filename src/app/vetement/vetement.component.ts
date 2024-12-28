import { Component } from '@angular/core';
import { Vetement } from '../models/vetement.model';
import { VetementService } from '../services/vetement.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PanierService } from '../services/panier.service';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-vetement',
  imports: [CommonModule,RouterLink],
  templateUrl: './vetement.component.html',
  styleUrl: './vetement.component.css'
})
export class VetementComponent {
  vetement: Vetement[] = [];
  isOnline$!: Observable<boolean>;
    constructor(private vetementService: VetementService, 
      private panierService: PanierService,
    private authService: AuthService) {}

    ngOnInit(): void {
        this.vetementService.getProduitsParType(3).subscribe(data => {
          this.isOnline$=this.authService.isOnline$;
            this.vetement = data;
        });
    }
    public   shortenName(nom : string){
      if (nom.length>25){
          return nom.substring(0,25)+"...";
      }
     else{
      return nom;
     }
  }
  public addToCart(id: any,quantite: any): void {
    this.panierService.addToCart(id,1).subscribe(() => {
      this.panierService.updateCartItemCount(); // Met à jour le compteur
    });
}
}
