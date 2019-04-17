import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CoreModule } from './core/core.module';

import { AppComponent } from './app.component';

import { routes } from './app.routing';
import { DropZoneDirective } from './drop-zone.directive';

@NgModule({
  imports: [
    BrowserModule,
    CoreModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
    AppComponent,
    DropZoneDirective
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
