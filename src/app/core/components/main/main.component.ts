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
    this.getGeneralByTypeCommon();
    this.getGeneralByTypeActivities();
    this.getGeneralByTypeBooks();
    this.getGeneralByTypeConnect();
    this.getGeneralByTypeCulturelift();
    this.getGeneralByTypeHistory();
    this.getGeneralByTypeMoney()
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

  getGeneralByTypeCommon() {
    this.common$ = this.service.getGeneralByType('common').pipe(
      map(docs => Object.keys(docs.result).map((key) => docs.result[key]))
    );
  }

  getGeneralByTypeHistory() {
    this.history$ = this.service.getGeneralByType('history').pipe(
      map(docs => Object.keys(docs.result).map((key) => docs.result[key]))
    );
  }

  getGeneralByTypeActivities() {
    this.activities$ = this.service.getGeneralByType('activities').pipe(
      map(docs => Object.keys(docs.result).map((key) => docs.result[key]))
    );
  }

  getGeneralByTypeCulturelift() {
    this.culturelife$ = this.service.getGeneralByType('culturelife').pipe(
      map(docs => Object.keys(docs.result).map((key) => docs.result[key]))
    );
  }

  getGeneralByTypeBooks() {
    this.books$ = this.service.getGeneralByType('books').pipe(
      map(docs => Object.keys(docs.result).map((key) => docs.result[key]))
    );
  }

  getGeneralByTypeMoney() {
    this.money$ = this.service.getGeneralByType('money').pipe(
      map(docs => Object.keys(docs.result).map((key) => docs.result[key]))
    );
  }

  getGeneralByTypeConnect() {
    this.connect$ = this.service.getGeneralByType('connect').pipe(
      map(docs => Object.keys(docs.result).map((key) => docs.result[key]))
    );
  }
}
