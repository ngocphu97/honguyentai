import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-culture-life',
  templateUrl: './culture-life.component.html',
  styleUrls: ['./culture-life.component.scss']
})
export class CultureLifeComponent implements OnInit {

  @Input() culturelife: any;

  constructor() { }

  ngOnInit() {
  }

}
