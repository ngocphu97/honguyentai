import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { TreeService } from '../service/tree.service';

@Component({
  selector: 'app-memoir-detail',
  templateUrl: './memoir-detail.component.html',
  styleUrls: ['./memoir-detail.component.scss']
})
export class MemoirDetailComponent implements OnInit {

  doc = {
    id: '',
    title: '',
    content: '',
    update: new Date,
  };

  id: string;

  constructor(
    private service: TreeService,
    private route: ActivatedRoute
  ) {

    this.route.params.subscribe((val) => {
      this.id = val.memoirId;
      this.getDocumentById(val.memoirId);
    });
  }

  ngOnInit() {
  }

  getDocumentById(id) {
    this.service.getGenealogyHistoryById(id).pipe(
    ).subscribe(document => {
      this.doc = document.result;
      this.createHTMLDOM(document.result.content);
    });
  }

  getDocuments() {
    this.service.getDocuments().pipe(
      map((data) => {
        const obj = Object.values(data);
        return Object.values(obj[0]);
      })
    ).subscribe(documents => {
      documents.forEach(document => {
        this.doc = {
          id: document.id,
          title: document.title,
          content: document.content,
          update: document.update
        };
        this.createHTMLDOM(document.content);
      });
    });
  }

  createHTMLDOM(content) {
    document.getElementById('newsText').innerHTML = content;
  }

}
