import { Component, OnInit } from '@angular/core';
import { map, startWith } from 'rxjs/operators';

import { TreeService } from '../../components/service/tree.service';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-right-side',
  templateUrl: './right-side.component.html',
  styleUrls: ['./right-side.component.scss']
})
export class RightSideComponent implements OnInit {

  slideImages = [];
  news = [];
  myControl = new FormControl();
  options = [];
  filteredOptions: Observable<string[]>;

  constructor(private service: TreeService, private router: Router) { }

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
      this.generateSearchOptions(val);
      val.forEach(element => {
        const n = {
          id: element.id,
          title: element.title,
          content: element.content,
          date: element.date
        };
        if (this.news.length > 5) {
          return this.news;
        }
        this.news.push(n);
      });
    }, () => {
      this.news = [];
    });
  }

  generateSearchOptions(searchOptionArray) {
    this.options = searchOptionArray.map(option => {
      return {
        id: option.id,
        title: option.title
      };
    });

    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this.filterOption(value))
    );

  }

  filterOption(value: string) {
    return this.options.filter(option => option.title.toLowerCase().includes(value));
  }

  onSearch(id) {
    this.router.navigate([`/chinguyentai/tin-tuc/${id}`]);
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
