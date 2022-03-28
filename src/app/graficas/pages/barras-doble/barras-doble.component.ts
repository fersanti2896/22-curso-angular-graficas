import { Component } from '@angular/core';
import { ChartDataSets } from 'chart.js';

@Component({
  selector: 'app-barras-doble',
  templateUrl: './barras-doble.component.html',
  styles: [
  ]
})
export class BarrasDobleComponent {
  proveedoresData: ChartDataSets[] = [
    { data: [ 100, 200, 300, 400, 500 ], label: 'Vendedor A', backgroundColor: '#4B3FE6', hoverBackgroundColor: 'grey' },
    { data: [ 50, 250, 30, 450, 200 ], label: 'Vendedor B', backgroundColor: '#7AF52C', 
    hoverBackgroundColor: 'grey' },
  ];
  
  proveedoresLabels: string[] = ['2021', '2022','2023','2024','2025'];
  
  productoData: ChartDataSets[] = [
    { data: [ 200, 300, 400, 300, 100 ], label: 'Carros', backgroundColor: '#FF304C', 
    hoverBackgroundColor: 'grey' },
  ];
}
