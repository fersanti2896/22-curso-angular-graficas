import { Component } from '@angular/core';
import { ChartType } from 'chart.js';
import { Color, Label, MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent {
  mensaje: string = 'Información de Instrumentos de Inversión!';

  public doughnutChartLabels: Label[] = [ 'CETES', 'Supertasas', 'Kubo Financiero', 'Finsus', 'GBM+' ];
  public doughnutChartData: MultiDataSet = [
      [ 9, 26, 13, 34, 17 ], 
  ];

  public doughnutChartType: ChartType = 'doughnut';
  public colors: Color[] = [
    { 
      backgroundColor: [ '#60ACE0', '#24E04C', '#FF6150', '#FAC241', '#9460E0' ]
     }
  ]

}
