import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-circle-chart',
  templateUrl: './circle-chart.component.html',
  styleUrls: ['./circle-chart.component.scss'],
})
export class CircleChartComponent implements OnInit {
  @Input() size = 160;
  @Input() barThickness = 16;
  @Input() percent = 55;

  // Computed styles
  outerSize!: string;
  barPadding!: string;
  innerSize!: string;
  barLength!: number;
  barPercentage!: number;

  cx!: number;
  cy!: number;
  r!: number;

  constructor() {}

  ngOnInit(): void {
    this.outerSize = this.size + 'px';
    this.innerSize = this.size - 2 * this.barThickness + 'px';
    this.barPadding = this.barThickness + 'px';
    this.barLength = 2 * Math.PI * 70;
    this.barPercentage = this.barLength - (this.percent / 100) * this.barLength;
    
    this.cx = this.size / 2;
    this.cy = this.size / 2;
    this.r = this.cx - (this.barThickness / 2);
  }
}
