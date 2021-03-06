import { Component, OnInit } from '@angular/core';
import { TreeService } from '../service/tree.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-entrepreneurs-detail',
  templateUrl: './entrepreneurs-detail.component.html',
  styleUrls: ['./entrepreneurs-detail.component.scss']
})
export class EntrepreneursDetailComponent {

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

  constructor(
    private service: TreeService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.params.subscribe((val) => {
      this.id = val.entrepreneursId;
      this.getEntrepreneursById(val.entrepreneursId);
    });
  }

  getEntrepreneursById(id: string) {
    this.service.getEntrepreneursById(id).subscribe(data => {
      this.loading = false;
      this.newsTitle = data.result.title;
      this.newsText = data.result.content;
      this.newsImage = data.result.image;
      this.newsDate = data.result.update;
      document.getElementById('newsText').innerHTML = data.result.content;
    });
  }

  createHTMLDOM() {
    document.getElementById('newsText').innerHTML = this.newsText;
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
    this.service.updateEntrepreneurs(this.newsTitle, this.editorValue, this.id, this.imagePreview)
      .subscribe(() => {
        alert('Đã thay đổi thành công');
        this.router.navigate(['/chinguyentai/doanh-nhan']);
      });
  }
}
