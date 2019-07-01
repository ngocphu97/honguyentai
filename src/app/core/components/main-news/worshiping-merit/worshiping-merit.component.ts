import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-worshiping-merit',
  templateUrl: './worshiping-merit.component.html',
  styleUrls: ['./worshiping-merit.component.scss']
})
export class WorshipingMeritComponent implements OnInit {

  @Input() money: any

  constructor() { }

  ngOnInit() {
  }

}
