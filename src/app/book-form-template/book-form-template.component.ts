import { ThisReceiver } from '@angular/compiler';
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { isFunctionDeclaration } from 'typescript';

@Component({
  selector: 'app-book-form-template',
  templateUrl: './book-form-template.component.html',
  styleUrls: ['./book-form-template.component.css'],
})
export class BookFormTemplateComponent {
  genres = ['Mystery', 'Fantasy', 'Science Fiction', 'Self Help'];
  selectedGenre = 'Mystery';
  isSubmitted = false;
  inputDetails = {
    title: '',
    author: '',
    genre: '',
  };
  @ViewChild('bookForm', { static: false }) newForm: NgForm;

  onFormSubmit() {
    console.log(this.newForm.value);
    this.isSubmitted = true;
    this.inputDetails.title = this.newForm.value.title;
    this.inputDetails.author = this.newForm.value.author;
    this.inputDetails.genre = this.newForm.value.genre;
    this.newForm.reset();
  }
}
