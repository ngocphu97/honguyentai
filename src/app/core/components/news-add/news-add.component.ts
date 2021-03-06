import { Component } from '@angular/core';
import { TreeService } from '../service/tree.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-news-add',
  templateUrl: './news-add.component.html',
  styleUrls: ['./news-add.component.scss']
})
export class NewsAddComponent {

  selectedFile = null;
  imagePreview: any;

  postStatus = false;

  afuConfig = {
    uploadAPI: {
      url: 'https://www.jsonstore.io/2bed3d6b6afd52a87b7e793dbec5c9045e39f3cf2fa900abbbe9b6e8f088b895/imageTest',
      headers: {
        'Content-Type': 'text/plain;charset=UTF-8',
        'Access-Control-Allow-Origin': 'http://localhost:4200',
        'Access-Control-Allow-Methods': 'POST, GET, OPTIONS'
      }
    }
  };

  editorValue = '';
  newsTitle = '';
  readonly: boolean;

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

  constructor(private service: TreeService, private http: HttpClient) { }


  onFileSelected(event) {
    this.selectedFile = event.target.files[0];

    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result;
    };
    reader.readAsDataURL(this.selectedFile);
  }

  private uuidv4() {
    return ([1e7] as any + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
      // tslint:disable-next-line:no-bitwise
      (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
  }

  postDocument() {
    this.service.postDocument(this.uuidv4(), this.newsTitle, this.editorValue, this.imagePreview)
      .subscribe(data => data.ok ? this.postStatus = true : this.postStatus = false);
  }

  postEntrepreneurs() {
    this.service.postEntrepreneurs(this.uuidv4(), this.newsTitle, this.editorValue, this.imagePreview)
      .subscribe(data => data.ok ? this.postStatus = true : this.postStatus = false);
  }

  postGenealogyHistory() {
    this.service.postGenealogyHistory(this.uuidv4(), this.newsTitle, this.editorValue, this.imagePreview)
      .subscribe(data => data.ok ? this.postStatus = true : this.postStatus = false);
  }

  postNews() {
    this.service.postNews(this.uuidv4(), this.newsTitle, this.editorValue, this.imagePreview)
      .subscribe(data => data.ok ? this.postStatus = true : this.postStatus = false);
  }

  postGeneralAnnounce(type: string) {
    this.service.postGeneral(this.uuidv4(), this.newsTitle, this.editorValue, this.imagePreview, type)
      .subscribe(data => data.ok ? this.postStatus = true : this.postStatus = false);
  }
}
