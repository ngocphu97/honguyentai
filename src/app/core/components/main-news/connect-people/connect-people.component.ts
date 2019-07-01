import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-connect-people',
  templateUrl: './connect-people.component.html',
  styleUrls: ['./connect-people.component.scss']
})
export class ConnectPeopleComponent implements OnInit {

  @Input() connect: any;

  constructor() { }

  ngOnInit() {
  }

}
