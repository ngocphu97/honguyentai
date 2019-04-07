import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent {

  @ViewChild('familyGeoChart') familyGeoChart;

  public geoChartData: any = {
    chartType: 'GeoChart',
    dataTable: [
      ['City', 'Area Percentage'],
      ['Dương A, Nam Định', 10],
      ['Đông Ngàn, Từ Sơn, Bắc Ninh', 10],
      ['Thổ Hoàng, Hồng Quang, Ân Thi, Hưng Yên', 10],
    ],
    options: {
      region: 'VN',
      displayMode: 'markers',
    }
  };

  constructor() {
  }

}

