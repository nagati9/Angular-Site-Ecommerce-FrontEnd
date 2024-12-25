import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  imports: [CommonModule, RouterLink, FormsModule, ReactiveFormsModule] ,
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.registerForm = this.fb.group({
      Nom:['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
      
      
    });
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      const formData = this.registerForm.value;
      this.authService.register(formData).subscribe({
        next: (response) => {
          console.log('Response from backend:', response);
          alert('Utilisateur créé avec succès.');
        },
        error: (error) => {
          console.error('Error during registration:', error);
          alert('Une erreur est survenue lors de l\'inscription.');
        },
        complete: () => {
          console.log('Registration process completed.');
        },
      });
    }
  }
  
  
}
