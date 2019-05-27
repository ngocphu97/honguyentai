import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

import { TreeService } from '../service/tree.service';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';


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
  defaultImageSource = 'https://www.wingstosoaronline.com/wp-content/themes/wingstosoar/images/default_post.jpg';


  galleryOptions = [
    {
      width: '100%',
      height: '400px',
      thumbnailsColumns: 4,
      imageAnimation: NgxGalleryAnimation.Slide
    },
    // max-width 800
    {
      breakpoint: 800,
      width: '100%',
      height: '600px',
      imagePercent: 60,
      thumbnailsPercent: 20,
      thumbnailsMargin: 20,
      thumbnailMargin: 20
    },
    // max-width 400
    {
      breakpoint: 400,
      preview: false
    }
  ];

  galleryImages = [
  ];


  constructor(private service: TreeService) { }

  ngOnInit() {
    this.getImage();
    baguetteBox.run('.tz-gallery');
  }

  getImage() {
    this.service.getImage()
      .pipe(
        map((data) => {
          return Object.values(Object.values(data)[0]);
        }))
      .subscribe((images: Array<any>) => {
        images.forEach(image => {
          if (!image.src) {
            image.src = this.defaultImageSource;
          }

          this.galleryImages.push({
            small: image.src,
            medium: image.src,
            big: image.src
          });

          this.images.push(image);
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
        this.images.push({
          id: 'previewId',
          date: new Date(),
          src: url
        });
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

  catchUploadProcess(snapshot): number {
    return this.uploadProcess = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  }

  catchUploadError(error: any) {
    switch (error.code) {
      case 'storage/unauthorized':
        alert('storage/unauthorized');
        this.uploadProcess = -1;
        break;
      case 'storage/canceled':
        alert('storage/canceled');
        this.uploadProcess = -1;
        break;
      case 'storage/unknown':
        alert('storage/unknown');
        this.uploadProcess = -1;
        break;
    }
  }
}
