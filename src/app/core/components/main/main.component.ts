import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TreeService } from '../service/tree.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  loading = false;
  news = [];
  noImageUrl = 'assets/img/no-image.jpg';

  common$: Observable<any>;
  history$: Observable<any>;
  activities$: Observable<any>;
  culturelife$: Observable<any>;
  books$: Observable<any>;
  money$: Observable<any>;
  connect$: Observable<any>;


  constructor(private service: TreeService) { }

  ngOnInit() {
    this.getNews();
    this.initData();
  }

  initData() {
    this.common$ = new Observable<any>();
    this.history$ = new Observable<any>();
    this.activities$ = new Observable<any>();
    this.culturelife$ = new Observable<any>();
    this.books$ = new Observable<any>();
    this.money$ = new Observable<any>();
    this.connect$ = new Observable<any>();

    this.common$ = this.getSomething('common', this.common$);
    this.history$ = this.getSomething('history', this.history$);
    this.activities$ = this.getSomething('activities', this.activities$);
    this.culturelife$ = this.getSomething('culturelife', this.culturelife$);
    this.books$ = this.getSomething('books', this.books$);
    this.money$ = this.getSomething('money', this.money$);
    this.connect$ = this.getSomething('connect', this.connect$);
  }

  getNews() {
    this.loading = true;
    let newsArray = [];
    this.service.getNews().pipe(
      map((data) => {
        const obj = Object.values(data);
        newsArray = Object.values(obj[0]);
        return newsArray;
      })
    ).subscribe(val => {
      val.forEach(element => {

        const cleanText = element.content.replace(/<\/?[^>]+(>|$)/g, '');

        if (!element.image) {
          element.image = 'https://www.wingstosoaronline.com/wp-content/themes/wingstosoar/images/default_post.jpg';
        }

        const n = {
          id: element.id,
          image: element.image,
          title: element.title,
          content: cleanText,
        };
        this.news.push(n);
      });

      this.loading = false;

    }, error => {
      this.news = [];
    });
  }

  getSomething(type: string, returnVariable: Observable<any>): Observable<any> {
    return returnVariable = this.service.getGeneralByType(type).pipe(
      map(docs => Object.keys(docs.result).map((key) => {
        console.log(docs.result[key]);
        if (!docs.result[key].image) {
          const documents = {
            ...docs.result[key],
            image: this.noImageUrl
          };
          return documents;
        }

        return docs.result[key];
      }))
    );
  }
}
