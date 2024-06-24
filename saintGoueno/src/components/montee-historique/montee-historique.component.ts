import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-montee-historique',
  standalone: true,
  imports: [],
  templateUrl: './montee-historique.component.html',
  styleUrl: './montee-historique.component.scss'
})
export class MonteeHistoriqueComponent {

  constructor(private router: Router) {}

  navigateToRoute() {
    this.router.navigate(['/monteeHistorique']);
  }

}
