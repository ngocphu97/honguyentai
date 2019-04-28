import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatAutocompleteModule, MatInputModule, MatFormFieldModule, MatCardModule } from '@angular/material';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NgxPaginationModule } from 'ngx-pagination';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFileUploaderModule } from 'angular-file-uploader';
import { CKEditorModule } from 'ngx-ckeditor';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

import { DashboardComponent } from './dashboard/dashboard.component';
import { routes } from './core.routing';
import { containers } from './containers';
import { components } from './components';

export const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

const firebase = {
  apiKey: 'AIzaSyBxvIax4S5ItOyeq7YT-POx4UTd1-L5XYM',
  authDomain: 'honguyentai-f9d56.firebaseapp.com',
  databaseURL: 'https://honguyentai-f9d56.firebaseio.com',
  projectId: 'honguyentai-f9d56',
  storageBucket: 'honguyentai-f9d56.appspot.com',
  messagingSenderId: '225000788937'
};

@NgModule({
  imports: [
    CommonModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' }),
    FormsModule,
    HttpClientModule,

    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatAutocompleteModule,

    ReactiveFormsModule,
    CKEditorModule,
    NgxPaginationModule,
    AngularFileUploaderModule,
    Ng2GoogleChartsModule,
    PerfectScrollbarModule,

    AngularFireModule.initializeApp(firebase),
    AngularFirestoreModule,
    AngularFireStorageModule
  ],
  declarations: [
    DashboardComponent,
    containers,
    components
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ]
})
export class CoreModule { }
