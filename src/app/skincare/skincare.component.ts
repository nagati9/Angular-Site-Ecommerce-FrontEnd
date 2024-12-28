import { Component, OnInit } from '@angular/core';
import { SkincareService } from '../services/skincare.service';
import { Skincare } from '../models/skincare.model';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PanierService } from '../services/panier.service';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-skincare',
  templateUrl: './skincare.component.html',
  styleUrls: ['./skincare.component.css'],
  standalone: true,
  imports: [CommonModule, RouterLink] // Ajout de CommonModule
})
export class SkincareComponent implements OnInit {
    skincare: Skincare[] = [];
  isOnline$!: Observable<boolean>;

    constructor(private skincareService: SkincareService, 
        private panierService: PanierService, private authService: AuthService ){}

    ngOnInit(): void {
        this.skincareService.getProduitsParType(2).subscribe(data => {
            this.isOnline$=this.authService.isOnline$;
            this.skincare = data;
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
