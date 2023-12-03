import { Component, Input, ViewChild } from '@angular/core';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle,
  ChartType,
} from 'ng-apexcharts';
export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css'],
})
export class StatisticsComponent {
  @ViewChild('chart') chart!: ChartComponent;
  @Input() vType!: ChartType;
  @Input() vName!: string;
  @Input() vData!: number[];
  @Input() vText!: string;
  @Input() vChart!: ApexChart;
  @Input() vCategories!: string[];
  public chartOptions!: Partial<ChartOptions>;

  ngOnInit(): void {
    this.chartOptions = {
      series: [
        {
          name: this.vName,
          data: this.vData,
        },
      ],
      chart: {
        height: 350,
        
        type: this.vType,
      },
      title: {
        text: this.vText,
      },
      xaxis: {
        categories: this.vCategories,
      },
    };
  }
}
