import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { TreeService } from '../service/tree.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.scss']
})
export class NewsDetailComponent implements OnInit {

  loading = false;

  id: string;
  editorValue = '';
  newsText = '';
  newsTitle = '';
  newsImage = '';
  newsDate = '';
  readonly = false;
  readMode = true;

  editorConfig: any = {
    forceEnterMode: true,
    height: 250,
    toolbarGroups: [
      { name: 'document', groups: ['mode', 'document', 'doctools'] },
      { name: 'clipboard', groups: ['clipboard', 'undo'] },
      { name: 'editing', groups: ['find', 'selection', 'spellchecker'] },
      { name: 'basicstyles', groups: ['basicstyles', 'cleanup'] },
      { name: 'paragraph', groups: ['list', 'indent', 'blocks', 'align', 'bidi'] },
      { name: 'forms' },
      { name: 'insert' },
      { name: 'styles' },
      { name: 'colors' }
    ],
    removeButtons: 'Underline,Strike,Subscript,Superscript,Anchor,Styles,Specialchar'
  };

  selectedFile = null;
  imagePreview: any;
  uploadStatus = false;

  constructor(private service: TreeService, private location: Location,
    private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getNewsById();
  }

  getNewsById() {
    this.loading = true;
    this.id = this.route.snapshot.paramMap.get('id');
    this.service.getNewsById(this.id).subscribe(data => {
      console.log(data);
      this.loading = false;
      this.newsTitle = data.result.title;
      this.newsText = data.result.content;
      this.newsImage = data.result.image;
      this.newsDate = data.result.date;
      document.getElementById('newsText').innerHTML = data.result.content;
    });
  }

  createHTMLDOM() {
    document.getElementById('newsText').innerHTML = this.newsText;
  }

  postNews() {
    console.log('post news');
  }

  toogleEditMode() {
    document.getElementById('newsText').style.display = 'none';
    document.getElementById('newsImage').style.display = 'none';
    this.readMode = false;
    this.editorValue = this.newsText;
    this.readonly = false;
  }

  onFileSelected(event) {
    this.selectedFile = event.target.files[0];

    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result;
    };
    reader.readAsDataURL(this.selectedFile);
  }

  onSubmit() {
    document.getElementById('newsText').innerHTML = this.newsText;
    document.getElementById('newsText').style.display = 'block';
    this.readMode = true;
    this.service.updateNews(this.newsTitle, this.editorValue, this.id, this.imagePreview)
      .subscribe(
        () => {
          alert('Đã thay đổi thành công');
          this.router.navigate(['/chinguyentai/tin-tuc']);
        }
      );

  }
}
