import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Profil } from '../models/Profil.model';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
@Component({
  selector: 'app-utilisateur',
  imports: [CommonModule,FormsModule, RouterLink],
  templateUrl: './utilisateur.component.html',
  styleUrl: './utilisateur.component.css'
})
export class UtilisateurComponent {
    // profil!: Profil;
    profil!: Profil;
    isEditing: { [key: string]: boolean } = {
      nom: false,
      prenom: false,
      dateDeNaissance:false,
      email: false,
      telephone: false,
      indicatifTelephone: false,
      adresse: false,
      ville: false,
      codePostal: false,
      pays: false,
      motDePasse: false,
      genreId: false,
  };
  
  isModified: { [key: string]: boolean } = {
    nom: false,
    prenom: false,
    dateDeNaissance:false,
    email: false,
    telephone: false,
    indicatifTelephone: false,
    adresse: false,
    ville: false,
    codePostal: false,
    pays: false,
    motDePasse: false,
    genreId: false,
};
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
 constructor(private authService: AuthService,private router: Router,private iconLibrary: FaIconLibrary ){
  this.iconLibrary.addIcons(faPencilAlt);
 }
 //-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
 onEdit(): void {
  // Naviguer vers la page de modification du profil
  this.router.navigate(['/profil/edit']);
}
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
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
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
 ngOnInit(): void {
        this.authService.getProfil().subscribe(data => {           
            this.profil = data;
        });
    }
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
    toggleEdit(field: string): void {
      this.isEditing[field] = !this.isEditing[field];
      if (!this.isEditing[field]) {
        this.isModified[field] = false;
      }
    }
 //----------------------------------------------------------------------------------------------------------------------------------------------------------------------- 
    onFieldChange(field: string): void {
      this.isModified[field] = true;
    }
 //----------------------------------------------------------------------------------------------------------------------------------------------------------------------- 
    saveField(field: string): void {
      if (this.isModified[field]) {
        this.authService.updateProfil(this.profil).subscribe({
          next: () => {
            console.log(`${field} updated successfully`);
            this.isEditing[field] = false;
            this.isModified[field] = false;
            console.log(this.profil.nom);
            console.log(this.profil.genreId);
            console.log(this.profil.adresse);
            console.log(this.profil.prenom);
            console.log(this.profil.nom);
            console.log(this.profil.nom);
            console.log(this.profil.nom);
            console.log(this.profil.nom);
            console.log(this.profil.nom);
            console.log(this.profil.nom);

          },
          error: (err: any) => console.error('Error updating profile:', err)
        });
      }
    }
 //----------------------------------------------------------------------------------------------------------------------------------------------------------------------- 

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------  
}


