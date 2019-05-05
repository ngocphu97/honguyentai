import { Component, OnInit, ViewChildren, QueryList, AfterViewInit } from '@angular/core';

declare var OrgChart;

@Component({
  selector: 'app-entrepreneurs',
  templateUrl: './entrepreneurs.component.html',
  styleUrls: ['./entrepreneurs.component.scss']
})
export class EntrepreneursComponent implements OnInit, AfterViewInit {

  data: any;
  chart: any;

  constructor() { }

  ngOnInit() {

    this.data = [
      {
        id: '1',
        name: 'Denny Curtis',
        title: 'CEO',
        img: 'https://balkangraph.com/js/img/2.jpg',
      },
      { id: '2', pid: '1', name: 'Ashley Barnett', title: 'Sales Manager', img: 'https://balkangraph.com/js/img/3.jpg' },
      { id: '3', pid: '1', name: 'Caden Ellison', title: 'Dev Manager', img: 'https://balkangraph.com/js/img/4.jpg' },
      { id: '4', pid: '2', name: 'Elliot Patel', title: 'Sales', img: 'https://balkangraph.com/js/img/5.jpg' },
      { id: '5', pid: '2', name: 'Lynn Hussain', title: 'Sales', img: 'https://balkangraph.com/js/img/6.jpg' },
      { id: '6', pid: '3', name: 'Tanner May', title: 'Developer', img: 'https://balkangraph.com/js/img/7.jpg' },
      { id: '7', pid: '3', name: 'Fran Parsons', title: 'Developer', img: 'https://balkangraph.com/js/img/8.jpg' }
    ];

    setTimeout(() => {
      const c1 = new OrgChart(document.getElementById('tree1'), {
        scaleInitial: OrgChart.match.boundary,
        template: 'isla',
        enableDragDrop: false,
        enableSearch: true,
        // toolbar: {
        //   layout: true,
        //   zoom: true,
        //   fit: true,
        //   expandAll: true
        // },
        nodeMenu: {
          details: { text: 'Chi tiết' },
          add: { text: 'Thêm' },
          edit: { text: 'Sửa' },
          remove: { text: 'Xóa' },
        },
        nodeBinding: {
          field_0: 'name',
          field_1: 'title',
          img_0: 'img',
          field_number_children: 'field_number_children',
        },
        nodes: this.data
      });
    }, 1000);
  }

  ngAfterViewInit() {
    if (this.chart) {
      this.chart.draw(OrgChart.action.init);
    }
  }


}
