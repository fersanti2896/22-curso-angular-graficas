import { Component, Input, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Color, Label, MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-grafica-dona',
  templateUrl: './grafica-dona.component.html',
  styles: [
  ]
})
export class GraficaDonaComponent {
  @Input() mensaje: string = '';

  @Input() doughnutChartLabels: Label[] = [ ];
  @Input() doughnutChartData: MultiDataSet = [ ];

  public doughnutChartType: ChartType = 'doughnut';
  public colors: Color[] = [
    { 
      backgroundColor: [ '#60ACE0', '#24E04C', '#FF6150', '#FAC241', '#9460E0' ]
    }
  ]

}
