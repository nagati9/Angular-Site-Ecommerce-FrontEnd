import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { PanierService } from '../services/panier.service';
import { Observable } from 'rxjs';
import { Profil } from '../models/Profil.model';
import { LocationService } from '../services/location.service';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  userName: string | null = null;
  cartItemCount: number = 0;
  currentUser$:Observable<boolean> | undefined;
  profil!: Profil;
  countryCode: string = '';
  currency: string = '';
  flagUrl: string = '';
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
  constructor(
    private authService: AuthService,
    private panierService: PanierService,
    private locationService:LocationService,
    private router: Router
    
  ) {}
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
ngOnInit(): void {
  this.authService.getProfil().subscribe(data => {
    this.profil = data;
    this.userName = `${data.nom} ${data.prenom}`;
  });

  this.panierService.getCartItemCount().subscribe(count => {
    this.cartItemCount = count;
  });

  this.locationService.getCountryData().subscribe(data => {
    this.flagUrl = `https://ipapi.co/${data.country_code.toLowerCase()}/flag.png`;
    this.currency = data.currencies[Object.keys(data.currencies)[0]].name;
    this.countryCode = data.name;
  });
}
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
  logout(): void {
    this.authService.logout();
    this.userName = null;
    this.router.navigate(['/Accueil']).then(
      () => {
        console.log('Navigation réussie.');
        location.reload(); // Rafraîchit la page
      },
      (error) => {
        console.error('Erreur de navigation :', error);
      }
    );
  }
  
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------  
}
