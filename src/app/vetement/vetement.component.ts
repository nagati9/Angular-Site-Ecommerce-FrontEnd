import { Component } from '@angular/core';
import { Vetement } from '../models/vetement.model';
import { VetementService } from '../services/vetement.service';

@Component({
  selector: 'app-vetement',
  imports: [],
  templateUrl: './vetement.component.html',
  styleUrl: './vetement.component.css'
})
export class VetementComponent {
  vetement: Vetement[] = [];

    constructor(private vetementService: VetementService) {}

    ngOnInit(): void {
        this.vetementService.getSkincare().subscribe(data => {
            this.vetement = data;
        });
    }
}
