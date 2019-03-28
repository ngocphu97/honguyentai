import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

import { TreeService } from '../../components/service/tree.service';

@Component({
  selector: 'app-right-side',
  templateUrl: './right-side.component.html',
  styleUrls: ['./right-side.component.scss']
})
export class RightSideComponent implements OnInit {

  slideImages = [
    {
      src: 'https://farm2.staticflickr.com/1520/24330829813_944c817720_b.jpg'
    },
    {
      src: 'https://www.westerntelegraph.co.uk/resources/images/7585716.jpg?display=1&htype=0&type=responsive-gallery'
    },
    {
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLUFixPFdNYGjmkMB1hlS4zHvrAcuCNzjCx2HwDjmshItqij2_MQ'
    }
  ];

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
    // let newsArray = [];
    // this.service.getImage().pipe(
    //   map((data) => {
    //     const obj = Object.values(data);
    //     newsArray = Object.values(obj[0]);
    //     return newsArray;
    //   })
    // ).subscribe(val => {
    //   let i = 0;
    //   val.forEach(element => {
    //     if (i < 2) {
    //       const n = {
    //         id: element.id,
    //         src: element.src,
    //         date: element.date
    //       };
    //       this.slideImages.push(n);
    //       i++;
    //     }
    //   });
    // });
    return this.slideImages;
  }

}
