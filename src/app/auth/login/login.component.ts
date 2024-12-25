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
  imports: [CommonModule, RouterLink, FormsModule, ReactiveFormsModule, LoginComponent] ,
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
      (response: { userId: number; userName: string }) => {
        // Sauvegarder les informations utilisateur dans le localStorage
        localStorage.setItem('userId', response.userId.toString());
        localStorage.setItem('userName', response.userName);

        // Mettre à jour l'interface utilisateur pour afficher le nom
        console.log(`Bienvenue, ${response.userName}`);
        
        // Rediriger vers la page d'accueil
        this.router.navigate(['/Accueil']);
      },
      (error) => {
        console.error('Erreur lors de la connexion :', error);
      }
    );
  }
}

logout() {
  localStorage.removeItem('token');
  localStorage.removeItem('userName');
}
}


