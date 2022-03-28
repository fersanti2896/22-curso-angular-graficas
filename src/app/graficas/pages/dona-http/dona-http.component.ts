import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Color, Label, MultiDataSet } from 'ng2-charts';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [
  ]
})
export class DonaHttpComponent implements OnInit {

  public doughnutChartLabels: Label[] = [ 
    // 'CETES', 'Supertasas', 'Kubo Financiero', 'Finsus', 'GBM+'
  ];
  public doughnutChartData: MultiDataSet = [
      // [ 9, 26, 13, 34, 17 ] 
  ];

  public doughnutChartType: ChartType = 'doughnut';
  public colors: Color[] = [
    { 
      backgroundColor: [ '#60ACE0', '#24E04C', '#FF6150', '#FAC241', '#9460E0' ]
     }
  ]

  constructor(private serviceGraficas: GraficasService) { }

  ngOnInit(): void {
    this.serviceGraficas.getUsuariosRedesSociales()
        .subscribe( data => {
          console.log(data);
          const labels = Object.keys( data );
          const values = Object.values( data );
        
          console.log(labels);
          console.log(values);

          this.doughnutChartLabels = labels;
          this.doughnutChartData.push(values);
        });
  }

}
