import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
declare var google: any;
@Component({
  selector: 'app-finishing-labour-ledger',
  templateUrl: './finishing-labour-ledger.component.html',
  styleUrls: ['./finishing-labour-ledger.component.css']
})
export class FinishingLabourLedgerComponent {

  @ViewChild('pieChart') pieChart!: ElementRef

  mixColumnChart = () => {

  const data = google.visualization.arrayToDataTable([
    ['Mystery/Crime', 'General',
    'Western', 'Literature',  ],
   ['2010', 32, 18, 5 ],
   ['2020', 30, 16, 9 ],
   ['2030',  30, 12, 13]
  ]);


  var options = {
    width: 600,
    height: 400,
    colors: ['#109618', '#DC3912', '#3366CC'],
    legend: { position: 'top', maxLines: 3 },
    bar: { groupWidth: '75%' },
    isStacked: true,
  };

  const chart = new google.visualization.ColumnChart(this.pieChart.nativeElement);

  chart.draw(data, options);
}

  ngAfterViewInit() {
    google.charts.load('current', { 'packages': ['corechart'] });
    google.charts.setOnLoadCallback(this.mixColumnChart);
  }
}
