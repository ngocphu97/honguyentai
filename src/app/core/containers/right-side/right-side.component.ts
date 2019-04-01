import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

import { TreeService } from '../../components/service/tree.service';

@Component({
  selector: 'app-right-side',
  templateUrl: './right-side.component.html',
  styleUrls: ['./right-side.component.scss']
})
export class RightSideComponent implements OnInit {

  slideImages = [];

  news = [];

  constructor(private service: TreeService) { }

  ngOnInit() {
    this.getNews();
    this.getImage();
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
        const n = {
          id: element.id,
          title: element.title,
          content: element.content,
        };
        this.news.push(n);
      });
    }, error => {
      this.news = [];
    });
  }

  getImage() {
    let newsArray = [];
    this.service.getImage()
      .pipe(
        map((data) => {
          const obj = Object.values(data);
          return newsArray = Object.values(obj[0]);
        }))
      .subscribe(val => {
        let i = 0;
        val.forEach(element => {
          if (!element.src) {
            element.src = 'https://www.wingstosoaronline.com/wp-content/themes/wingstosoar/images/default_post.jpg';
          }
          if (i < 3) {
            const n = {
              id: element.id,
              src: element.src,
              date: element.date
            };
            this.slideImages.push(n);
            i++;
          }
        });
      });
    return this.slideImages;
  }

}
