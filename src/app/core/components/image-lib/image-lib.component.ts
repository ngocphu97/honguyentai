import { Component, OnInit } from '@angular/core';
import { TreeService } from '../service/tree.service';
import { map } from 'rxjs/operators';

declare const firebase, baguetteBox: any;

@Component({
  selector: 'app-image-lib',
  templateUrl: './image-lib.component.html',
  styleUrls: ['./image-lib.component.scss']
})
export class ImageLibComponent implements OnInit {
  p = 1;
  images = [];
  uploadProcess = 0;
  uploadImage = null;
  previewImage = null;

  storageRef = firebase.storage().ref();

  constructor(private service: TreeService) { }

  ngOnInit() {
    this.getImage();
    baguetteBox.run('.tz-gallery');
  }

  getImage() {
    let newsArray = [];
    this.service.getImage().pipe(
      map((data) => {
        const obj = Object.values(data);
        newsArray = Object.values(obj[0]);
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

  onSelectImg(src) {
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
    this.service.postImage(id, src).subscribe((data) => {
      if (data.ok) {
        return data.ok;
      }
    }, (error) => {
      return error;
    });
  }

  onSelectImage(image: any) {
    this.uploadImage = image.target.files[0];

    const reader = new FileReader();
    reader.onload = () => {
      this.previewImage = reader.result;
    };
    reader.readAsDataURL(image.target.files[0]);

  }

  uploadImageToFirebase() {

    const metadata = {
      contentType: 'image/jpeg'
    };

    const uploadTask = this.storageRef.child('assets/' + this.uploadImage.name).put(this.uploadImage, metadata);

    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot) => this.catchUploadProcess(snapshot),
      (error) => this.catchUploadError(error));

    uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
      this.uploadImg(downloadURL);
    });
  }

  deleteImageFromFirebase() {
    const desertRef = this.storageRef.child('renamed-mountains.jpg');

    desertRef.delete().then((res) => {
      // console.log(res);
      return res;
    });
  }

  catchUploadProcess(snapshot): number {
    return this.uploadProcess = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  }

  catchUploadError(error: any) {
    switch (error.code) {
      case 'storage/unauthorized':
        break;
      case 'storage/canceled':
        break;
      case 'storage/unknown':
        break;
    }
  }

}
