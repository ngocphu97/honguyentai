import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { TreeService } from '../service/tree.service';

@Component({
  selector: 'app-memoir-list',
  templateUrl: './memoir-list.component.html',
  styleUrls: ['./memoir-list.component.scss']
})
export class MemoirListComponent implements OnInit {

  documents$: Observable<any>;

  constructor(private service: TreeService) { }

  ngOnInit() {
    this.getDocuments();
  }

  getDocuments() {
    this.documents$ = this.service.getGenealogyHistory().pipe(
      map(docs => Object.keys(docs.result).map((key) => docs.result[key]))
    );
  }
}
