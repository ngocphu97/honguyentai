import { Component, OnInit } from '@angular/core';
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

  constructor(private service: TreeService) { }

  ngOnInit() {
    this.getNews();
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

}
