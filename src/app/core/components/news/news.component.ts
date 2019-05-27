import { Component, OnInit } from '@angular/core';
import { TreeService } from '../service/tree.service';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  p = 1;
  news = [];

  constructor(private service: TreeService) {
  }

  ngOnInit() {
    this.getNews();
  }

  getNews() {
    let newsArray = [];
    this.service.getNews().pipe(
      map((data) => {
        const obj = Object.values(data);
        newsArray = Object.values(obj[0]);
        return newsArray;
      })
    ).subscribe(val => {
      val.forEach(element => {
        if (!element.image) {
          element.image = 'https://www.wingstosoaronline.com/wp-content/themes/wingstosoar/images/default_post.jpg';
        }
        this.news.push(element);
      });
    });
  }
}
