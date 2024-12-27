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
        localStorage.setItem('token', response.token); // Stocker le token
        localStorage.setItem('userName', response.userName); // Stocker le nom
        this.router.navigate(['/Accueil']);
         location.reload();
      },
      (error) => {
        console.error('Erreur lors de la connexion :', error);
      }
    );
  }
}




}


