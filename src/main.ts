import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes'; // Import des routes définies

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(), // Fournisseur pour les appels HTTP
    provideRouter(routes), // Fournisseur pour les routes
  ],
}).catch((err) => console.error(err));
