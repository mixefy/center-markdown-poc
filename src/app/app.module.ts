import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MarkdownModule } from "ngx-markdown";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MarkdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
