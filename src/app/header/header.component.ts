import { Component, OnInit } from '@angular/core';
import { SkincareComponent } from '../skincare/skincare.component';
import { VetementComponent } from '../vetement/vetement.component';
import { ParfumComponent } from '../parfum/parfum.component';
import { AccueilComponent } from '../accueil/accueil.component';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/auth.service';
import { RouterLink } from '@angular/router';
import { LoginComponent } from '../auth/login/login.component';
import { catchError, of } from 'rxjs';
@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  userName: string | null = null;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.getCurrentUser().subscribe(
      (response) => {
        this.userName = response.userName; // Stocke le nom de l'utilisateur
      },
      (error) => {
        console.log('Aucun utilisateur connecté.', error);
      }
    );
  }
  

  logout(): void {
    this.authService.logout().subscribe(() => {
      this.userName = null; // Réinitialiser après la déconnexion
    });
  }
}
