import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-stemmata',
  templateUrl: './stemmata.component.html',
  styleUrls: ['./stemmata.component.scss']
})
export class StemmataComponent implements OnInit {

  navigationSubscription: any;

  treeName: any;
  id = 'Chi1';

  trees = [
    { name: 'Chi 1', value: 1 },
    { name: 'Chi 2', value: 2 },
    { name: 'Chi 3', value: 3 },
    { name: 'Chi 4', value: 4 },
    { name: 'Chi 5', value: 5 },
    { name: 'Chi 6', value: 6 },
    { name: 'Chi 7', value: 7 },
    { name: 'Chi 8', value: 8 },
    { name: 'Chi 9', value: 9 },
    { name: 'Chi 10', value: 10 },
    { name: 'Chi 11', value: 11 },
    { name: 'Chi 12', value: 12 }
  ];

  treesDisplay = [];

  selectedTree: any;

  constructor() {
  }

  ngOnInit() {
    this.setupTree();
  }

  setupTree() {
    for (let i = 0; i < this.trees.length; i += 4) {
      this.treesDisplay.push({ items: this.trees.slice(i, i + 4) });
    }
  }

  onSelectTree(tree) {
    this.selectedTree = tree;
  }
}
