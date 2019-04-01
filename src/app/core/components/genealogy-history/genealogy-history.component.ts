import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { TreeService } from '../service/tree.service';
import { map } from 'rxjs/operators';

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

  constructor(private service: TreeService) {
  }

  ngOnInit() {
    this.getDocuments();
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

  // update() {
  //   this.service.updateDocument(this.doc.title, this.doc.content, this.doc.id).subscribe(d => {
  //     console.log(d);
  //   });
  // }
}
