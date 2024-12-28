import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RedirectCommand, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  imports: [CommonModule, FormsModule, ReactiveFormsModule] ,
})
export class LoginComponent {
loginForm: any;

constructor(private fb: FormBuilder, private authService: AuthService,private router: Router) {
  this.loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });

}
onSubmit() {
  if (this.loginForm.valid) {
    const credentials = this.loginForm.value;
    this.authService.login(credentials).subscribe(
      (response) => {
        // Stocker le token et les informations utilisateur
        localStorage.setItem('token', response.token);
        localStorage.setItem('userName', response.userName);
        console.log('Navigation vers /Accueil...');
        this.router.navigate(['/Accueil']).then(
          () => {
            console.log('Navigation réussie.');
            location.reload(); // Rafraîchit la page
          },
          (error) => {
            console.error('Erreur de navigation :', error);
          }
        );
      },
      (error) => {
        console.error('Erreur lors de la connexion :', error);
      }
    );
  }
}




}


