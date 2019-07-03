import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TreeService } from '../service/tree.service';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-general-detail',
  templateUrl: './general-detail.component.html',
  styleUrls: ['./general-detail.component.scss']
})
export class GeneralDetailComponent implements OnInit, AfterViewInit {


  type: string;
  docId: string;
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
  noImageUrl = 'assets/img/no-image.jpg';

  doc$: Observable<any>;
  container: any;

  constructor(
    private route: ActivatedRoute,
    private service: TreeService,
    private router: Router
  ) {
    this.type = route.snapshot.params.type;
    this.docId = route.snapshot.params.generalInfoId;
  }

  ngOnInit() {
    this.doc$ = this.getData(this.type, this.docId).pipe(
      map(doc => {
        if (!doc.result.image) {
          const d = {
            ...doc.result,
            image: this.noImageUrl
          };
          return d;
        }
        return doc.result;
      }),
      tap(doc => {
        console.log(doc);
        this.loading = false;
        this.newsTitle = doc.title;
        this.newsText = doc.content;
        this.newsImage = doc.image;
        this.newsDate = doc.update;
      }),
    );
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      if (this.newsText.length > 0) {
        const x = (document as any).querySelector('#newsText');
        x.innerHTML = this.newsText;
      }
    }, 1000);
  }

  getData(type, id): Observable<any> {
    return this.service.getGeneralByTypeAndId(type, id);
  }

  toogleEditMode() {
    this.container = (document as any).querySelector('#newsText');
    this.container.style.display = 'none';
    const x = (document as any).querySelector('#newsImage');
    const y = (document as any).querySelector('#perfectScrollBar');
    x.style.display = 'none';
    y.style.display = 'none';

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
    this.service.updateGeneral(this.docId, this.newsTitle, this.editorValue, this.imagePreview, this.type)
      .subscribe(() => {
        alert('Đã thay đổi thành công');
        this.router.navigate(['/chinguyentai/thong-tin-chung']);
      });
  }


}
