import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CoreModule } from './core/core.module';

import { AppComponent } from './app.component';

import { routes } from './app.routing';
import { ActionsDirective } from './actions.directive';

@NgModule({
  imports: [
    BrowserModule,
    CoreModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
    AppComponent,
    ActionsDirective
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
