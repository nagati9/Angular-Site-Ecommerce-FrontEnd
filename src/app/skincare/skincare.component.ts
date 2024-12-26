import { Component, OnInit } from '@angular/core';
import { SkincareService } from '../services/skincare.service';
import { Skincare } from '../models/skincare.model';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-skincare',
  templateUrl: './skincare.component.html',
  styleUrls: ['./skincare.component.css'],
  standalone: true,
  imports: [CommonModule, RouterLink] // Ajout de CommonModule
})
export class SkincareComponent implements OnInit {
    skincare: Skincare[] = [];

    constructor(private skincareService: SkincareService) {}

    ngOnInit(): void {
        this.skincareService.getProduitsParType(2).subscribe(data => {
            this.skincare = data;
        });
    }
    public   shortenName(nom : string){
        if (nom.length>25){
            return nom.substring(0,25)+"...";
        }
       else{
        return nom;
       }
    }
}
