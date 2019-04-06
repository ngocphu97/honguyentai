import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-family-tree',
  templateUrl: './family-tree.component.html',
  styleUrls: ['./family-tree.component.scss']
})
export class FamilyTreeComponent implements OnInit {

  @ViewChild('familyOrgChart') familyOrgChart;

  parent: string;

  name: string;
  selectedNode: any;

  familyData: any = {
    chartType: 'OrgChart',
    dataTable: [
      [
        {
          v: 'Mike',
          f: 'Mike',
          id: '1',
        }, '', 'The President'],
      [
        {
          v: 'Jim',
          f: 'Jim <br> <button (click)="onClick(1)">Click here</button>',
          id: '2',
        }, 'Mike', 'VP'
      ],
      [
        {
          v: 'Alice',
          f: 'Alice <br> <a href="https://google.com">President</a>',
          id: '3',
        }, 'Jim', 'jim'
      ],
      [
        {
          v: 'Alice1',
          f: 'Alice1 <br> <a href="https://google.com">President</a>',
          id: '3',
        }, 'Mike', 'jim'
      ],
      [
        {
          v: 'Alice22',
          f: 'Alice22 <br> <a href="https://google.com">President</a>',
          id: '3',
        }, 'Jim', 'jim'
      ]
    ],
    options: { allowHtml: true }
  };


  constructor() { }

  ngOnInit() {
  }

  myfunction() {
    if (!this.parent) {
      alert('chọn ');
    } else {
      const googleChartWrapper = this.familyOrgChart.wrapper;
      const da = [
        {
          v: this.name,
          f: this.name,
          id: '3',
        }, this.parent, this.name
      ];

      this.familyData.dataTable.push(da);
      console.log(this.familyData.dataTable);
      googleChartWrapper.setDataTable(this.familyData.dataTable);
      this.familyOrgChart.draw();
    }

  }

  onSelect(e) {
    this.parent = e.selectedRowValues[0];
    this.selectedNode = e;
    this.name = this.selectedNode.selectedRowValues[0];
    console.log(this.selectedNode, '--', this.name);
  }

  onEdit(value = '123') {
    const x = this.familyData.dataTable
      .find(node => node[0].v === this.selectedNode.selectedRowValues[0]);
    x[0].v = 'asdlfkajsf;lasjdfa;lskfja;slkfjas;dflkj';
    const googleChartWrapper = this.familyOrgChart.wrapper;
    googleChartWrapper.setDataTable(this.familyData.dataTable);

    this.familyOrgChart.draw();
  }

}
