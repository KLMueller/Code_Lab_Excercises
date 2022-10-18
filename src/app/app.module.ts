import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BookFormTemplateComponent } from './book-form-template/book-form-template.component';
import { BookFormReactiveComponent } from './book-form-reactive/book-form-reactive.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BookFormTemplateComponent,
    BookFormReactiveComponent,
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
