import { Component, OnInit } from '@angular/core';
import { TreeService } from '../service/tree.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-image-lib',
  templateUrl: './image-lib.component.html',
  styleUrls: ['./image-lib.component.scss']
})
export class ImageLibComponent implements OnInit {

  page: any;
  images = [];

  constructor(private service: TreeService) { }

  ngOnInit() {
    this.getImage();
  }

  getImage() {
    let newsArray = [];
    this.service.getImage().pipe(
      map((data) => {
        const obj = Object.values(data);
        newsArray = Object.values(obj[0]);
        console.log(newsArray);
        return newsArray;
      })
    ).subscribe(val => {
      val.forEach(element => {
        if (!element.src) {
          element.src = 'https://www.wingstosoaronline.com/wp-content/themes/wingstosoar/images/default_post.jpg';
        }
        const n = {
          id: element.id,
          src: element.src,
          date: element.date
        };
        this.images.push(n);
      });
    });
  }

  onSelectImg(src, id) {
    const modal = document.getElementById('imagePreviewModal');
    const modalImg = document.getElementById('imagePreview') as HTMLElement;

    modal.style.display = 'block';
    modalImg.setAttribute('src', src);

    const span = document.getElementsByClassName('close')[0] as HTMLElement;

    span.onclick = function () {
      modal.style.display = 'none';
    };
  }

  private uuidv4() {
    return ([1e7] as any + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
      // tslint:disable-next-line:no-bitwise
      (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
  }

  uploadImg(url) {
    const id = this.uuidv4();
    const src = url;
    this.service.postImage(id, src).subscribe(
      data => {
        if (data.ok) {
          console.log('POST Request is successful ', data.ok);
        }
      },
      error => {
        console.log('Error', error);
      }
    );
  }
}
