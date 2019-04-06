import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tree-form',
  templateUrl: './tree-form.component.html',
  styleUrls: ['./tree-form.component.scss']
})
export class TreeFormComponent implements OnInit {

  @Input() parent: any;

  constructor() { }

  ngOnInit() {
  }

  generateUuidv4() {
    return ([1e7] as any + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
      // tslint:disable-next-line:no-bitwise
      (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
  }
}
