import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TreeService } from '../service/tree.service';
import { map, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-general-list',
  templateUrl: './general-list.component.html',
  styleUrls: ['./general-list.component.scss']
})
export class GeneralListComponent implements OnInit {

  noImageUrl = 'assets/img/no-image.jpg';

  common$: Observable<any>;
  history$: Observable<any>;
  activities$: Observable<any>;
  lifestyle$: Observable<any>;
  books$: Observable<any>;
  money$: Observable<any>;
  connect$: Observable<any>;

  constructor(private service: TreeService) { }

  ngOnInit() {
    this.initData();
  }

  initData() {
    this.common$ = new Observable<any>();
    this.history$ = new Observable<any>();
    this.activities$ = new Observable<any>();
    this.lifestyle$ = new Observable<any>();
    this.books$ = new Observable<any>();
    this.money$ = new Observable<any>();
    this.connect$ = new Observable<any>();

    this.common$ = this.getSomething('common', this.common$);
    this.activities$ = this.getSomething('activities', this.activities$);
    this.lifestyle$ = this.getSomething('lifestyle', this.lifestyle$);
    this.books$ = this.getSomething('books', this.books$);
    this.money$ = this.getSomething('money', this.money$);
    this.connect$ = this.getSomething('connect', this.connect$);
  }

  getSomething(type: string, returnVariable: Observable<any>): Observable<any> {
    return returnVariable = this.service.getGeneralByType(type).pipe(
      map(docs => Object.keys(docs.result).map((key) => {
        if (!docs.result[key].image) {
          const documents = {
            ...docs.result[key],
            image: this.noImageUrl
          };
          return documents;
        }

        return docs.result[key];
      })),
      catchError(error => {
        console.log('type', type);
        return of(error)
      })
    );
  }


}
