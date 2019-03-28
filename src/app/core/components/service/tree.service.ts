import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TreeService {

  url = 'https://www.jsonstore.io/2bed3d6b6afd52a87b7e793dbec5c9045e39f3cf2fa900abbbe9b6e8f088b895/';
  informationArray = [];

  constructor(private http: HttpClient) { }

  // news

  getNews(): any {
    return this.http.get(this.url + 'news');
  }

  getNewsById(id): any {
    const url = this.url + '/news/' + id;
    console.log(url);
    return this.http.get(url);
  }

  postNews(id, title, content, image): any {
    const object = {
      id: id,
      title: title,
      content: content,
      image: image
    };
    return this.http.post(this.url + '/news/' + id, object);
  }

  deleteNews() {
    console.log('deleteNews');
  }

  updateNews(title, content, id, image) {
    const object = {
      content: content,
      id: id,
      image: image,
      title: title,
    };
    const url = this.url + '/news/' + id;
    console.log(url);
    this.http.put(url, object, id)
      .subscribe(
        data => {
          console.log('UPDATE is successful ', data);
        },
        error => {
          console.log('Error', error);
        }
      );
  }

  getImage(): any {
    return this.http.get(this.url + 'imageLib');
  }

  postImage(id, src): any {
    const object = {
      id: id,
      src: src,
      date: new Date()
    };
    return this.http.post(this.url + '/imageLib/' + id, object);
  }

}
