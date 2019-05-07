import { Component, ViewChild, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ChartSelectEvent } from 'ng2-google-charts';
import { TreeService } from '../service/tree.service';
import { GoogleChartInterface } from 'ng2-google-charts/google-charts-interfaces';

@Component({
  selector: 'app-family-tree',
  templateUrl: './family-tree.component.html',
  styleUrls: ['./family-tree.component.scss']
})
export class FamilyTreeComponent implements OnInit {

  // test id: b37291df-5958-49e7-8133-c70e46448ba4

  @ViewChild('familyOrgChart') familyOrgChart;

  toJsonString = '';

  parent: string;

  parentNodeName: string;
  selectedNode: any;
  orgChartCollapsed = false;
  announce: any;

  familyDataTable: Array<any> = [];

  familyData: GoogleChartInterface = {
    chartType: 'OrgChart',
    dataTable: this.familyDataTable,
    options: {
      allowHtml: true,
      allowCollapse: true,
      width: '400',
    }
  };

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: TreeService) {
  }

  ngOnInit() {
    this.getData();
  }

  getData() {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.getTreeData(id)
      .subscribe((res: any) => {
        if (res.result === null) {
          this.initFakeData();
          return this.announce = res;
        }
        this.familyDataTable = res.result;
        console.log(this.familyDataTable);
        this.familyData.dataTable = this.familyDataTable;
      }, (err) => {
        console.log(err);
      });
  }

  onSelect(e: ChartSelectEvent) {
    this.parent = e.selectedRowValues[0];
    this.selectedNode = e;
    this.parentNodeName = this.selectedNode.selectedRowValues[0];
  }

  editNode(newValue: string) {
    const editNodeIndex = this.familyData.dataTable
      .findIndex(node => node[0].v === this.selectedNode.selectedRowValues[0]);

    const editNodeParent = this.selectedNode.selectedRowValues[1];

    this.findRelativeNode(this.selectedNode.selectedRowValues[0], newValue);

    const nodeTable = [
      ...this.familyData.dataTable,
      this.familyData.dataTable[editNodeIndex] = [
        {
          v: newValue,
          f: `${newValue} <br> <strong class="text-white">Chi tiết</strong>`,
          id: '2',
        }, editNodeParent, 'VP'
      ]
    ];

    console.log(nodeTable);

    this.familyData.component.draw();
  }

  addNode(newNodeName: string) {
    const addNode = [
      {
        v: newNodeName,
        f: `${newNodeName} <br> <strong class="text-white my-class">Chi tiết</strong>`,
        id: 'newId'
      }, this.selectedNode.selectedRowValues[0], ''
    ];
    this.familyDataTable.push(addNode);
    this.familyData.component.draw();
  }

  deleteNode() {

    const selectedNodeName = this.selectedNode.selectedRowValues[0];
    const editNodeIndex = this.familyData.dataTable
      .findIndex(node => node[0].v === selectedNodeName);

    const deleteArray = this.findChildren(selectedNodeName);
    this.findChildren(selectedNodeName);

    console.log(deleteArray);


    this.familyDataTable.splice(editNodeIndex, 1);
    this.familyData.component.draw();
  }

  findIndexOfArray(array: Array<any>) {
    let editNodeIndex = 0;
    array.forEach(a => {
      editNodeIndex = this.familyData.dataTable
        .findIndex(node => node[0].v === a);
    });
    return editNodeIndex;
  }

  findChildren(parentNodeName: string): Array<any> {
    return this.familyDataTable.filter(x => x[1] === parentNodeName);
  }

  uuidv4() {
    return ([1e7] as any + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
      // tslint:disable-next-line:no-bitwise
      (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
  }

  findRelativeNode(oldParentName: string, newParentName: string) {
    const relativeNodeArray = this.familyDataTable.filter(x => x[1] === oldParentName);
    relativeNodeArray.map(y => y[1] = newParentName);
  }

  addData() {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.postTreeData(id, this.familyDataTable).subscribe(res => console.log(res));
  }

  delTree() {
    const id = 'b37291df-5958-49e7-8133-c70e46448ba4';
    this.service.delTree(id).subscribe(res => console.log(res));
  }

  getValueFromSelectedNode() {
    const seletedNode = this.familyDataTable.filter(x => x[1] === this.selectedNode.selectedRowValues[0]);
  }

  editFirstNode(newValue) {
    const editNodeIndex = 0;
    const firstNode = this.familyData.dataTable[0];
    this.findRelativeNode(firstNode[0].v, newValue);

    const nodeTable = [
      ...this.familyData.dataTable,
      this.familyData.dataTable[editNodeIndex] = [
        {
          v: newValue,
          f: `${newValue} <br> <strong class="text-white">Chi tiết</strong>`,
          id: '2',
        }, '', 'VP'
      ]
    ];

    this.familyData.component.draw();
  }

  addToFirstNode(newNodeName) {
    console.log(newNodeName);
    const firstNode = this.familyData.dataTable[0];
    const addNode = [
      {
        v: newNodeName,
        f: `${newNodeName} <br> <strong class="text-white my-class">Chi tiết</strong>`,
        id: 'newId'
      }, firstNode[0].v, ''
    ];
    this.familyDataTable.push(addNode);
    this.familyData.component.draw();
  }


  initFakeData() {
    this.familyDataTable = [
      [
        {
          'f': 'Nguyễn Tài Huyền <br> <strong class="text-white">Chi tiết</strong>',
          'id': '2',
          'v': 'Nguyễn Tài Huyền'
        },
        '',
        'VP'
      ],
      [
        {
          'f': 'Nguyễn Tài Viên <br> <strong class="text-white">Chi tiết</strong>',
          'id': '2',
          'v': 'Nguyễn Tài Viên'
        },
        'Nguyễn Tài Huyền',
        'VP'
      ],
      [
        {
          'f': 'Nguyễn Tài Hiềng <br> <strong class="text-white">Chi tiết</strong>',
          'id': '2',
          'v': 'Nguyễn Tài Hiềng'
        },
        'Nguyễn Tài Viên',
        'VP'
      ],
      [
        {
          'f': 'Nguyễn Tài Hùng <br> <strong class="text-white">Chi tiết</strong>',
          'id': '2',
          'v': 'Nguyễn Tài Hùng'
        },
        'Nguyễn Tài Hiềng',
        'VP'
      ],
      [
        {
          'f': 'Nguyễn Tài Tý <br> <strong class="text-white">Chi tiết</strong>',
          'id': '2',
          'v': 'Nguyễn Tài Tý'
        },
        'Nguyễn Tài Hùng',
        'VP'
      ],
      [
        {
          'f': 'Nguyễn Tài Mùi <br> <strong class="text-white my-class">Chi tiết</strong>',
          'id': 'newId',
          'v': 'Nguyễn Tài Mùi'
        },
        'Nguyễn Tài Hiềng',
        ''
      ],
      [
        {
          'f': 'Nguyễn Tài Kỳ <br> <strong class="text-white my-class">Chi tiết</strong>',
          'id': 'newId',
          'v': 'Nguyễn Tài Kỳ'
        },
        'Nguyễn Tài Hiềng',
        ''
      ],
      [
        {
          'f': 'Nguyễn Tài Hảo <br> <strong class="text-white my-class">Chi tiết</strong>',
          'id': 'newId',
          'v': 'Nguyễn Tài Hảo'
        },
        'Nguyễn Tài Mùi',
        ''
      ],
      [
        {
          'f': 'Nguyễn Tài Định <br> <strong class="text-white my-class">Chi tiết</strong>',
          'id': 'newId',
          'v': 'Nguyễn Tài Định'
        },
        'Nguyễn Tài Mùi',
        ''
      ],
      [
        {
          'f': 'Nguyễn Tài Đại <br> <strong class="text-white my-class">Chi tiết</strong>',
          'id': 'newId',
          'v': 'Nguyễn Tài Đại'
        },
        'Nguyễn Tài Kỳ',
        ''
      ]
    ];

    this.familyData.dataTable = this.familyDataTable;

    this.familyData.component.draw();
  }
}
