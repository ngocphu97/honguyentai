import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { routes } from './core.routing';

import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { NgxPaginationModule } from 'ngx-pagination';
import { AngularFileUploaderModule } from 'angular-file-uploader';
import { CKEditorModule } from 'ngx-ckeditor';

import { DashboardComponent } from './dashboard/dashboard.component';
import { containers } from './containers';
import { components } from './components';
@NgModule({
  imports: [
    CommonModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' }),
    FormsModule,
    HttpClientModule,
    CKEditorModule,
    NgxPaginationModule,
    AngularFileUploaderModule
  ],
  declarations: [
    DashboardComponent,
    containers,
    components
  ]
})
export class CoreModule { }
