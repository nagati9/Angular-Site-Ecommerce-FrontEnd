import { Component, OnInit } from '@angular/core';
import { ParfumService } from '../services/parfum.service';
import { Parfum } from '../models/parfum.model';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-parfum',
  templateUrl: './parfum.component.html',
  styleUrls: ['./parfum.component.css'],
  standalone: true,
  imports: [CommonModule, RouterLink] // Ajout de CommonModule
})
export class ParfumComponent implements OnInit {
    parfums: Parfum[] = [];

    constructor(private parfumService: ParfumService) {}

    ngOnInit(): void {
        this.parfumService.getProduitsParType(1).subscribe(data => {
            this.parfums = data;
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
