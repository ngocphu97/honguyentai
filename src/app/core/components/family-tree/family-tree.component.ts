import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { MatPaginator, MatTableDataSource } from '@angular/material';

import { TreeService } from '../service/tree.service';

declare var OrgChart;


@Component({
  selector: 'app-family-tree',
  templateUrl: './family-tree.component.html',
  styleUrls: ['./family-tree.component.scss']
})
export class FamilyTreeComponent implements OnInit, AfterViewInit {

  data: Array<any>;
  chart: any;
  announce: any;

  // dataSource: any;
  arrayData = [];
  displayedColumns: string[] = ['name', 'parent'];
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: TreeService) {
  }

  ngOnInit() {
    this.getFamilyData();
  }

  ngAfterViewInit() {
    if (this.chart) {
      this.chart.draw(OrgChart.action.init);
    }
  }

  getFamilyData() {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.getTreeData(id)
      .subscribe((res: any) => {
        console.log(res);
        let c1 = null;
        if (res.result === null) {
          this.data = [
            {
              id: '1',
              name: '',
              title: '',
              img: '',
            },
            {
              id: '2',
              name: '',
              title: '',
              pid: '1',
              img: '',
            },
          ];
          this.announce = null;
          c1 = this.generateChart();
          return;
        }
        this.data = res.result;
        this.arrayData = res.result.map(member => {
          return {
            name: member.name,
            parent: member.pid,
          };
        });

        c1 = this.generateChart();
      }, (err) => {
      });
  }

  generateChart() {
    return new OrgChart(document.getElementById('familyTree'), {
      scaleInitial: OrgChart.match.boundary,
      nodes: this.data,
      template: 'isla',
      enableDragDrop: false,
      enableSearch: true,
      collapse: {
        level: 4
      },
      nodeMouseClick: OrgChart.action.edit,
      onUpdate: (sender, oldNode, newNode) => {
        const index = this.data.findIndex(x => x.id === oldNode.id);
        const senderArray = Object.keys(sender.nodes).map((k) => sender.nodes[k]);
        const childrenIds = senderArray[index].childrenIds;
        setTimeout(() => {
          this.data[index].id = newNode.name;
          childrenIds.forEach(child => {
            const childIndex = this.data.findIndex(y => y.id === child);
            this.data[childIndex].pid = this.data[index].id;
          });
        }, 1500);
      },
      toolbar: {
        layout: true,
        zoom: true,
        fit: true,
        expandAll: true
      },
      nodeMenu: {
        details: { text: 'Chi tiết' },
        add: { text: 'Thêm' },
        edit: { text: 'Sửa' },
        remove: { text: 'Xóa' },
      },
      nodeBinding: {
        field_0: 'name',
        field_1: 'title',
        field_number_children: 'field_number_children',
      }
    });
  }

  update() {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.postTreeData(id, this.data).subscribe(res => console.log(res));
  }


}



