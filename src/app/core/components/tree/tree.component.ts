import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { TreeNode } from '../models/TreeNode';
import { TreeService } from '../tree.service';
import * as $ from 'jquery';
import { ActivatedRoute } from '@angular/router';
import { map, timeout } from 'rxjs/operators';

declare var Treant: any;

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TreeComponent implements OnInit {

  interval: any;

  treeName = '';
  treant: any;
  treeId = 1;

  private options: any = {
    container: '#treant-id',
    levelSeparation: 20,
    siblingSeparation: 15,
    subTeeSeparation: 15,
    rootOrientation: 'NORTH',
    scrollbar: 'native',
    node: {
      HTMLclass: 'treant-class',
      drawLineThrough: false
    },
    connectors: {
      type: 'bCurve',
      style: {
        'stroke-width': 2,
        'stroke': 'grey'
      }
    },
    animation: {
      nodeSpeed: 100,
    }
  };

  configModal =
    {
      position: 'bottom'
    };

  rootNodeArray: Array<any> = [];

  rootNodePersonName = [
    {
      name: 'Nguyễn Tài 1',
      id: 1
    },
    {
      name: 'Nguyễn Tài 2',
      id: 2
    },
    {
      name: 'Nguyễn Tài 3',
      id: 3
    },
    {
      name: 'Nguyễn Tài 4',
      id: 4
    },
    {
      name: 'Nguyễn Tài 5',
      id: 5
    },
    {
      name: 'Nguyễn Tài 6',
      id: 6
    },
    {
      name: 'Nguyễn Tài 7',
      id: 7
    },
    {
      name: 'Nguyễn Tài 8',
      id: 8
    },
    {
      name: 'Nguyễn Tài 9',
      id: 9
    },
    {
      name: 'Nguyễn Tài 10',
      id: 10
    },
    {
      name: 'Nguyễn Tài 11',
      id: 11
    },
    {
      name: 'Nguyễn Tài 12',
      id: 12
    },

  ];

  loading = true;

  rootNode: TreeNode = {
    text: {
      name: 'Nguyễn Tài Huyềng',
      contact: {
        val: '',
        href: '/pha-do',
        target: '_self'
      }
    },
    HTMLclass: 'angular',
    HTMLid: 'tree-root',
    id: 0,
    gender: 'male',
    image: 'https://img.icons8.com/color/1600/matrix-architect.png'
  };

  constructor(
    private service: TreeService,
    private route: ActivatedRoute,
  ) {
    this.service.nodesChange$.subscribe((node: TreeNode) => {
      if (node.HTMLid !== 'tree-root') {
        this.treant.tree.addNode(node.parent, node);
      }
    });
  }

  ngOnInit() {
    this.addRootNode();
    this.treeId = +this.route.snapshot.paramMap.get('id');
    this.treeName = 'Chi' + this.treeId;

    let treeNode = this.rootNode;
    this.rootNodeArray.forEach(r => {
      if (r.id === this.treeId) {
        treeNode = r;
      }
    });

    this.getData(this.treeName, treeNode);
  }

  addRootNode() {
    this.rootNodePersonName.forEach(r => {
      const rootNode: TreeNode = {
        text: {
          name: r.name,
          contact: {
            val: 'Chi tiết',
            href: '/chi-tiet/thanh-vien/1',
            target: '_self'
          }
        },
        HTMLclass: 'angular',
        HTMLid: 'tree-root',
        id: r.id,
        gender: 'male',
        image: 'https://img.icons8.com/color/1600/matrix-architect.png'
      };
      this.rootNodeArray.push(rootNode);
    });
  }

  getData(treeName, treeRoot) {
    this.loading = true;

    // pipe data.result to array
    let treeArray = [];

    setTimeout(() => {
      const rootNode = treeRoot;
      this.treant = new Treant([this.options, rootNode], Function.prototype, $);
      this.service.addNode(rootNode);
      this.service.getData1(treeName).pipe(
        map((data) => {
          treeArray = Object.values(data.result);
          return treeArray;
        })
      ).subscribe(val => {
        console.log(val);
        val.forEach(d => {
          this.service.addNode(d);
        });
        this.loading = false;
      }), console.error();
    }, 5000);
  }
}
