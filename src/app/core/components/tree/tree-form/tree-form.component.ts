import { Component, OnInit, Input } from '@angular/core';
import { TreeNode } from '../../models/TreeNode';
import { TreeService } from '../../tree.service';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tree-form',
  templateUrl: './tree-form.component.html',
  styleUrls: ['./tree-form.component.css']
})
export class TreeFormComponent implements OnInit {

  @Input() treeName: any;

  nodeStructure: TreeNode = new TreeNode();

  chis = [
    {
      name: 'Chi 1',
      value: 'profileChi1'
    },
    {
      name: 'Chi 2',
      value: 'profileChi2'
    },
  ];

  genders = [
    {
      name: 'Nam',
      value: 'male',
    },
    {
      name: 'Nữ',
      value: 'female',
    },
    {
      name: 'Chưa rõ',
      value: 'unknow',
    }
  ];

  personImg = [
    {
      gender: 'old-female',
      image: 'https://img.icons8.com/office/1600/old-woman-skin-type-3.png'
    },
    {
      gender: 'old-male',
      image: 'https://img.icons8.com/color/1600/matrix-architect.png'
    },
    {
      gender: 'female',
      image: 'https://img.icons8.com/office/1600/user-female.png'
    },
    {
      gender: 'old-male',
      image: 'https://img.icons8.com/office/1600/user-male.png'
    }
  ];

  gender = '';
  birthDay?: string;
  deadDay?: string;
  infomation?: string;
  blablaInfo?: string;
  tree: any = [];

  constructor(public treeService: TreeService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getNodeStructure();

    const treeId = +this.route.snapshot.paramMap.get('id');
    const treeName = 'Chi' + treeId;
    this.getData(treeName, treeId);
  }

  private uuidv4() {
    return ([1e7] as any + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
      // tslint:disable-next-line:no-bitwise
      (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
  }

  getNodeStructure() {
    this.nodeStructure = new TreeNode();
  }

  getData(treeName, treeRoot) {
    const rootNode = treeRoot;
    let testArray = [];
    this.treeService.getData1(treeName).pipe(
      map((data) => {
        testArray = Object.values(data.result);
        return testArray;
      })
    ).subscribe(val => {
      console.log('val, tree-form', val);
    });
  }

  onAddNode(node: TreeNode) {
    if (this.gender === 'male') {
      node.image = 'https://img.icons8.com/office/1600/user-male.png';
    } else if (this.gender === 'female') {
      node.image = 'https://img.icons8.com/office/1600/user-female.png';
    } else if (this.gender === 'unknow') {
      node.image = 'https://cdn3.iconfinder.com/data/icons/flatastic-4-1/256/user_orange-512.png';
    }
    node.gender = this.gender;
    node.birthDay = this.birthDay;
    node.deadDay = this.deadDay;
    node.infomation = this.infomation;
    node.blablaInfo = 'profile' + this.treeName;

    node.HTMLid = this.uuidv4();

    node.text.contact = {
      val: 'Chi tiết',
      href: `chinguyentai/chi-tiet/thanh-vien/${node.blablaInfo + '-' + node.HTMLid}`,
      target: '_self'
    };

    this.treeService.addNode(node);
    this.nodeStructure = new TreeNode();
    this.tree.push(node);
    this.treeService.saveData(node, 'profile' + this.treeName, node.HTMLid);
  }

  onSave() {
    location.assign('http://localhost:4200/pha-do');
  }
}
