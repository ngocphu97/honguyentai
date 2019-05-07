import { Component, OnInit, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { TreeService } from '../service/tree.service';

declare var OrgChart;

@Component({
  selector: 'app-entrepreneurs',
  templateUrl: './entrepreneurs.component.html',
  styleUrls: ['./entrepreneurs.component.scss']
})
export class EntrepreneursComponent implements OnInit, AfterViewInit {

  data: any;
  chart: any;

  constructor(private service: TreeService) { }

  ngOnInit() {

    this.getFamilyData();

    this.data = [
      {
        id: '1',
        name: 'Denny Curtis',
        title: 'CEO',
        img: 'https://balkangraph.com/js/img/2.jpg',
      },
    ];

  }

  ngAfterViewInit() {
    if (this.chart) {
      this.chart.draw(OrgChart.action.init);
    }
  }

  getFamilyData() {
    const id = '7e03b03c-760a-4717-98b0-9103de50a33b';
    this.service.getTreeData(id)
      .subscribe((res: any) => {
        if (res.result === null) {
        }
        console.log(res);
        this.data = res.result;
        // this.data = res.result.map((member: Array<any>, index: number) => {
        //   return {
        //     id: member[0].v,
        //     pid: member[1],
        //     name: member[0].v,
        //     title: member[0].v,
        //     img: ''
        //   };
        // });

        const c1 = new OrgChart(document.getElementById('tree1'), {
          scaleInitial: OrgChart.match.boundary,
          nodes: this.data,
          template: 'isla',
          enableDragDrop: false,
          enableSearch: true,
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
      }, (err) => {
      });
  }

  update() {
    const id = '7e03b03c-760a-4717-98b0-9103de50a33b';
    this.service.postTreeData(id, this.data).subscribe(res => console.log(res));
  }
}
