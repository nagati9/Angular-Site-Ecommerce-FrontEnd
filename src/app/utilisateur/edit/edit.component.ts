import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router, RouterLink } from '@angular/router';
import { UtilisateurComponent } from '../utilisateur.component';
import { Profil } from '../../models/Profil.model';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  imports: [CommonModule, FormsModule, ReactiveFormsModule,RouterLink ],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})

export class EditComponent {
  changePasswordForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.changePasswordForm = this.fb.group({
      oldPassword: ['', [Validators.required]],
      newPassword: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]]
    }, { validator: this.passwordMatchValidator });
  }
  
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------

  passwordMatchValidator(formGroup: FormGroup): ValidationErrors | null {
    const newPassword = formGroup.get('newPassword')?.value;
    const confirmPassword = formGroup.get('confirmPassword')?.value;
    return newPassword === confirmPassword ? null : { mismatch: true };
  }
  
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
onSubmit() {  
      var oldPassword= this.changePasswordForm.get('oldPassword')?.value;
      var newPassword= this.changePasswordForm.get('newPassword')?.value;   
    this.authService.changePassword(oldPassword,newPassword).subscribe({
      next: (response: any) => {
        console.log('Password changed successfully', response);
        // Gérer la réussite, par exemple rediriger l'utilisateur ou afficher un message
      },
      error: (error: any) => {
        console.error('Error changing password:', error);
      }
    });
  }
}
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------

  
  

