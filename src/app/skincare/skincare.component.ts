import { Component, OnInit } from '@angular/core';
import { SkincareService } from '../services/skincare.service';
import { Skincare } from '../models/skincare.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skincare',
  templateUrl: './skincare.component.html',
  styleUrls: ['./skincare.component.css'],
  standalone: true,
  imports: [CommonModule] // Ajout de CommonModule
})
export class SkincareComponent implements OnInit {
    skincare: Skincare[] = [];

    constructor(private skincareService: SkincareService) {}

    ngOnInit(): void {
        this.skincareService.getSkincare().subscribe(data => {
            this.skincare = data;
        });
    }
}
