import { Component, OnInit } from '@angular/core';

import { map } from 'rxjs/operators';

import { TreeService } from '../service/tree.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-genealogy-history',
  templateUrl: './genealogy-history.component.html',
  styleUrls: ['./genealogy-history.component.scss']
})
export class GenealogyHistoryComponent implements OnInit {

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
      this.id = val.id;
      this.getDocumentById(val.id);
    });
  }

  ngOnInit() {
  }

  getDocumentById(id) {
    this.service.getDocumentById(id).pipe(
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
