import { Injectable } from '@angular/core';
import { TreeNode } from './models/TreeNode';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TreeService {

  nodes: Array<TreeNode> = new Array<TreeNode>();
  nodeIncrementalId = 0;
  nodesChange$: Subject<TreeNode> = new Subject<TreeNode>();

  url = 'http://localhost:3000/profile';
  urlTest = 'https://www.jsonstore.io/2bed3d6b6afd52a87b7e793dbec5c9045e39f3cf2fa900abbbe9b6e8f088b895';

  constructor(private http: HttpClient) {
    console.log('nodes: ', this.nodes);
  }

  addNode(node: TreeNode) {
    node.id = this.nodeIncrementalId++;
    this.nodes.push(node);
    this.nodesChange$.next(node);
  }

  getData(treeName) {
    console.log(treeName);
    // const url = this.urlTest + '/profile' + treeName;
    const url = this.url + 'Chi1';
    console.log(url);
    return this.http.get<any>(url);
  }

  getData1(treeName) {
    console.log(treeName);
    const url = this.urlTest + '/profile' + treeName;
    // const url = this.url + 'Chi1';
    console.log(url);
    return this.http.get<any>(url);
  }

  saveData(node, treeName, nodeId) {
    const object = node;
    const id = node.id;
    const url = this.urlTest + '/' + treeName + '/' + nodeId;

    console.log(url);
    // const url = this.url + '/' + treeName;
    // const url = 'http://localhost:3000/profileChi1';

    this.http.post(url, object)
      .subscribe(
        data => {
          console.log('POST Request is successful ', data);
        },
        error => {
          console.log('Error', error);
        }
      );
  }

  deleteNode(id) {
    console.log(id);
    const url = `http://localhost:3000/profileChi1/${id}`;
    this.http.delete(url).subscribe(
      data => {
        console.log('Đã xóa, chỉ xóa con chứ chưa xóa cha');
      },
      error => {
        console.log('Error', error);
      }
    );
  }

  getNodeById(id): Observable<any> {
    // const url = `http://localhost:3000/profileChi1?HTMLid=${id}`;

    const params = id.split('-');
    const chi = params[0];
    const _id = params[1] + '-' + params[2] + '-' + params[3] + '-' + params[4] + '-' + params[5];
    const url = this.urlTest + '/' + chi + '/' + _id;

    console.log(url);
    return new Observable((observer) => {
      this.http.get(url).subscribe(data => {
        observer.next(data);
        observer.complete();
      });
    });
  }
}
