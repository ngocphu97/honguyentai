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

  /**
   * NEWS
   */
  getNews(): Observable<any> {
    return this.http.get(this.url + 'news');
  }

  getNewsById(id): Observable<any> {
    const url = this.url + '/news/' + id;
    return this.http.get(url);
  }

  postNews(id, title, content, image): Observable<any> {
    const object = {
      id: id,
      title: title,
      content: content,
      image: image,
      date: new Date()
    };
    return this.http.post(this.url + '/news/' + id, object);
  }

  deleteNews(id): Observable<any> {
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
    const url = this.url + 'news/' + id;
    return this.http.put(url, object, id);
  }

  /**
   * DOCUMENTS
   */
  getDocuments(): Observable<any> {
    return this.http.get(this.url + 'history-documents');
  }

  getDocumentById(id: string): Observable<any> {
    return this.http.get(this.url + 'history-documents/' + id);
  }

  postDocument(id, title, content, image): Observable<any> {
    const object = {
      id: id,
      title: title,
      image: image,
      content: content,
      update: new Date()
    };
    return this.http.post(this.url + '/history-documents/' + id, object);
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

  /**
    * Entrepreneurs
    */
  getEntrepreneurs(): Observable<any> {
    return this.http.get(this.url + '/entrepreneurs/');
  }

  getEntrepreneursById(id: string): Observable<any> {
    return this.http.get(this.url + `/entrepreneurs/${id}`);
  }

  postEntrepreneurs(id, title, content, image): Observable<any> {
    const object = {
      id: id,
      title: title,
      content: content,
      image: image,
      update: new Date()
    };
    return this.http.post(this.url + '/entrepreneurs/' + id, object);
  }

  updateEntrepreneurs(title, content, id, image): Observable<any> {
    const object = {
      content: content,
      id: id,
      image: image,
      title: title,
      update: new Date()
    };
    const url = this.url + 'entrepreneurs/' + id;
    return this.http.put(url, object, id);
  }

  /**
    * Genealogy History
    */
  getGenealogyHistory(): Observable<any> {
    return this.http.get(this.url + '/genealogy-history/');
  }

  getGenealogyHistoryById(genealogyHistoryId: string): Observable<any> {
    return this.http.get(this.url + '/genealogy-history/' + genealogyHistoryId);
  }

  postGenealogyHistory(id, title, content, image): Observable<any> {
    const object = {
      id: id,
      title: title,
      content: content,
      image: image,
      update: new Date()
    };
    return this.http.post(this.url + '/genealogy-history/' + id, object);
  }

  /**
   * GENERAL
   */

  postGeneral(id, title, content, image, type): Observable<any> {
    const object = {
      id: id,
      title: title,
      content: content,
      image: image,
      update: new Date()
    };
    return this.http.post(this.url + `/general/${type}/` + id, object);
  }

  getGeneralByType(type: string): Observable<any> {
    return this.http.get(this.url + `/general/${type}`);
  }

  getGeneralByTypeAndId(type: string, id: string): Observable<any> {
    return this.http.get(this.url + `/general/${type}/${id}`);
  }

  /**
   * IMAGES
   */
  getImage(): Observable<any> {
    return this.http.get(this.url + 'imageLib');
  }

  postImage(id, src): Observable<any> {
    const object = {
      id: id,
      src: src,
      date: new Date()
    };
    return this.http.post(this.url + '/imageLib/' + id, object);
  }

  /**
   * FAMILY TREE DATA
   */
  postTreeData(id: string, data: any): Observable<any> {
    return this.http.put(this.url + '/familyTreeData/' + id, data);
  }

  getTreeData(id: string): Observable<any> {
    return this.http.get(this.url + '/familyTreeData/' + id);
  }

  getTreeListId(): Observable<any> {
    return this.http.get(this.url + '/familyTreeData/');
  }

  createFamilyTreeList(familyItem): Observable<any> {
    return this.http.post(this.url + '/familyTreeList/' + familyItem.id, familyItem);
  }

  getFamilyListData(): Observable<any> {
    return this.http.get(this.url + '/familyTreeList');
  }

  delTree(): Observable<any> {
    const id = 'undefined';
    return this.http.delete(this.url + '/familyTreeList/' + id);
  }

  updateFamilyListData(updateFamilyData, id): Observable<any> {
    return this.http.put(this.url + '/familyTreeList/' + id, updateFamilyData);
  }
}
