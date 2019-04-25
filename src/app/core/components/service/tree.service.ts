import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TreeService {

  url = 'https://www.jsonstore.io/2bed3d6b6afd52a87b7e793dbec5c9045e39f3cf2fa900abbbe9b6e8f088b895/';
  informationArray = [];

  afuConfig = {
    uploadAPI: {
      url: `https://www.jsonstore.io/2bed3d6b6afd52a87b7e793dbec5c9045e39f3cf2fa900abbbe9b6e8f088b895/imageLib/id`
    }
  };

  constructor(private http: HttpClient) { }

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
      image: image,
      date: new Date()
    };
    return this.http.post(this.url + '/news/' + id, object);
  }

  postDocument(id, title, content): any {
    const object = {
      id: id,
      title: title,
      content: content,
      date: new Date()
    };
    return this.http.post(this.url + '/history-documents/' + id, object);
  }

  getDocuments(): Observable<any> {
    return this.http.get(this.url + 'history-documents');
  }

  deleteNews(id) {
    const url = this.url + '/news/' + id;
    return this.http.put(url, id);
  }

  updateNews(title, content, id, image): Observable<any> {
    const object = {
      content: content,
      id: id,
      image: image,
      title: title,
      date: new Date()
    };
    const url = this.url + '/news/' + id;
    return this.http.put(url, object, id);
  }

  updateDocument(title, content, id): Observable<any> {
    const object = {
      content: content,
      id: id,
      title: title,
      update: new Date()
    };
    const url = this.url + '/history-documents/' + id;
    return this.http.put(url, object, id);
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

  postTreeData(id: string, data: any) {
    return this.http.put(this.url + '/familyTreeData/' + id, data);
  }

  getTreeData(id: string) {
    return this.http.get(this.url + '/familyTreeData/' + id);
  }

  getTreeListId() {
    return this.http.get(this.url + '/familyTreeData/');
  }

  createFamilyTreeList(familyItem) {
    return this.http.post(this.url + '/familyTreeList/' + familyItem.id, familyItem);
  }

  getFamilyListData() {
    return this.http.get(this.url + '/familyTreeList');
  }

  delTree(id) {
    return this.http.delete(this.url + '/familyTreeData/' + id);
  }

  updateFamilyListData(updateFamilyData, id) {
    return this.http.put(this.url + '/familyTreeList/' + id, updateFamilyData);
  }
}
