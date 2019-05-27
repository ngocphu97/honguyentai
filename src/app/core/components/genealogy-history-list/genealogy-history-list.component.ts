import { Component, OnInit } from '@angular/core';
import { TreeService } from '../service/tree.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-genealogy-history-list',
  templateUrl: './genealogy-history-list.component.html',
  styleUrls: ['./genealogy-history-list.component.scss']
})
export class GenealogyHistoryListComponent implements OnInit {

  historyDocuments = [];

  constructor(private service: TreeService) { }

  ngOnInit() {
    this.getDocuments();
  }

  getDocuments() {
    this.service.getDocuments().pipe(
      map((data) => {
        const obj = Object.values(data);
        return Object.values(obj[0] );
      })
    ).subscribe(documents => {
      console.log(documents);
      this.historyDocuments = documents;
    });
  }

}
