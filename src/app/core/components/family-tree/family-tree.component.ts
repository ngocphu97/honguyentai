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

  parent: string;

  parentNodeName: string;
  selectedNode: any;
  orgChartCollapsed = false;

  familyDataTable: Array<any> = [];

  familyData: GoogleChartInterface = {
    chartType: 'OrgChart',
    dataTable: this.familyDataTable,
    options: {
      allowHtml: true,
      allowCollapse: true
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
    this.service.getTreeData(id).subscribe((res: any) => {
      console.log(res);
      this.familyDataTable = res.result;
      this.familyData.dataTable = this.familyDataTable;
    });
  }

  onSelect(e: ChartSelectEvent) {
    console.log(e);
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
    const id = 'b37291df-5958-49e7-8133-c70e46448ba4';
    this.service.postTreeData(id, this.fakeData).subscribe(res => console.log(res));
  }

  delTree() {
    const id = 'b37291df-5958-49e7-8133-c70e46448ba4';
    this.service.delTree(id).subscribe(res => console.log(res));
  }

  getValueFromSelectedNode() {
    const seletedNode = this.familyDataTable.filter(x => x[1] === this.selectedNode.selectedRowValues[0]);
  }
}
