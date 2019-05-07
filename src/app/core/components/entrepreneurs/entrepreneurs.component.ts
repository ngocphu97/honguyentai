import { Component, OnInit } from '@angular/core';
import { TreeService } from '../service/tree.service';

declare var OrgChart;

@Component({
  selector: 'app-entrepreneurs',
  templateUrl: './entrepreneurs.component.html',
  styleUrls: ['./entrepreneurs.component.scss']
})
export class EntrepreneursComponent implements OnInit {

  constructor(private service: TreeService) { }

  ngOnInit() {

  }

}
