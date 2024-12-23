import { Component, OnInit } from '@angular/core';
import { ParfumService } from '../services/parfum.service';
import { Parfum } from '../models/parfum.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-parfum',
  templateUrl: './parfum.component.html',
  styleUrls: ['./parfum.component.css'],
  standalone: true,
  imports: [CommonModule] // Ajout de CommonModule
})
export class ParfumComponent implements OnInit {
    parfums: Parfum[] = [];

    constructor(private parfumService: ParfumService) {}

    ngOnInit(): void {
        this.parfumService.getParfums().subscribe(data => {
            this.parfums = data;
        });
    }
}
