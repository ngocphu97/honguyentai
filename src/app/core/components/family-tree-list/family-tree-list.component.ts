import { Component, OnInit } from '@angular/core';
import { TreeService } from '../service/tree.service';
import { Observable } from 'rxjs';
import { namespaceHTML } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-family-tree-list',
  templateUrl: './family-tree-list.component.html',
  styleUrls: ['./family-tree-list.component.scss']
})
export class FamilyTreeListComponent implements OnInit {

  annouce: any;
  familyListData: Array<any> = [];
  selectedName = '';
  selectedBasicInformation = '';
  selectedId = '';

  constructor(private familyService: TreeService) { }

  ngOnInit() {
    this.getFamilyListData();
  }

  getFamilyListData() {
    this.familyService.getFamilyListData().subscribe((res: any) => {
      const result = Object.keys(res.result).map((key) => {
        return res.result[key];
      });
      result.forEach(r => {
        this.familyListData.push(r);
      });
    });
  }

  addData(name, basicInformation) {
    const id = this.uuidv4();
    const familyDataItem = {
      name: name,
      id: id,
      link: `/chinguyentai/pha-do/${id}`,
      basicInformation: basicInformation,
      icon: 'fas fa-check',
    };
    this.familyListData.push(familyDataItem);
    this.familyService.createFamilyTreeList(familyDataItem).subscribe(res => {
      this.annouce = res;
      this.getFamilyListData();
    });
  }

  uuidv4(): string {
    return ([1e7] as any + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
      // tslint:disable-next-line:no-bitwise
      (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
  }

  editData(name, basicInformation, id) {
    this.selectedName = name;
    this.selectedBasicInformation = basicInformation;
    this.selectedId = id;
  }

  updateNewData(newName, newBasicInformation) {
    let editItem = this.familyListData.find(x => x.id === this.selectedId);
    editItem = {
      ...editItem,
      name: newName,
      basicInformation: newBasicInformation
    };

    this.familyService.updateFamilyListData(editItem, editItem.id).subscribe(res => console.log(res));
  }
}
