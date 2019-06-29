import { Component, OnInit } from '@angular/core';
import { TreeService } from '../service/tree.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-genealogy-history-list',
  templateUrl: './genealogy-history-list.component.html',
  styleUrls: ['./genealogy-history-list.component.scss']
})
export class GenealogyHistoryListComponent implements OnInit {

  historyDocuments$: Observable<any>;

  constructor(private service: TreeService) { }

  ngOnInit() {
    this.getDocuments();
  }

  getDocuments() {
    this.historyDocuments$ = this.service.getDocuments().pipe(
      map(docs => Object.keys(docs.result).map((key) => docs.result[key]))
    );
  }

}
