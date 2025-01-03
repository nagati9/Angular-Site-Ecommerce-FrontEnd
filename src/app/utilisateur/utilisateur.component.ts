import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Profil } from '../models/Profil.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-utilisateur',
  imports: [CommonModule],
  templateUrl: './utilisateur.component.html',
  styleUrl: './utilisateur.component.css'
})
export class UtilisateurComponent {
    profil: Profil | undefined;
 constructor(private authService: AuthService ){
  
 }
 getGenreLabel(genreId: number | undefined): string {
  switch (genreId) {
    case 2:
      return 'Masculin';
    case 1:
      return 'Féminin';
    case 3:
      return 'Autre';
    default:
      return 'Non spécifié';
  }
}

    ngOnInit(): void {
        this.authService.getProfil().subscribe(data => {           
            this.profil = data;
        });
    }
}
