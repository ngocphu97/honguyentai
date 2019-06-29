import { Component, OnInit } from '@angular/core';
import { TreeService } from '../service/tree.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-entrepreneurs',
  templateUrl: './entrepreneurs.component.html',
  styleUrls: ['./entrepreneurs.component.scss']
})
export class EntrepreneursComponent implements OnInit {

  entrepreneursDocuments$: Observable<any>;

  constructor(private service: TreeService) { }

  ngOnInit() {
    this.getEntrepreneursDocuments();
  }

  getEntrepreneursDocuments() {
    this.entrepreneursDocuments$ = this.service.getEntrepreneurs().pipe(
      map(docs => Object.keys(docs.result).map((key) => docs.result[key]))
    );
  }
}
