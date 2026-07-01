import { Component, inject, OnInit } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { CarTableComponent } from "../../components/car-table/car-table.component";
import { DashboardService } from '../../services/dashboard.service';
import { Veiculo } from '../../models/car';

@Component({
  selector: 'app-dashboard',
  imports: [CardComponent, CarTableComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  dashboardService = inject(DashboardService)

  veiculos: Veiculo[] = []
  veiculoSelecionado: Veiculo = {
    id: -1,
    vehicle: "",
    volumeTotal: 0,
    connected: 0,
    softwareUpdates: 0,
    img: "",
    vin: "",
  }

  ngOnInit(){
    this.dashboardService.getVeiculos().subscribe({
      error: () => {},  /*lembrete para colocar possível erro*/
      next: (veiculos) => {
        this.veiculos = Object.values(veiculos) as  Veiculo[]
        this.veiculoSelecionado = this.veiculos[0]
      }
    })
  }

}
