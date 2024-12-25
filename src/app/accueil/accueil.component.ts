import { Component } from '@angular/core';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { NgFor } from '@angular/common';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css'],
  standalone: true,
  imports: [
   CarouselModule
  ],
})
export class AccueilComponent {

}
