import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Book } from 'src/app/models/book.model';
import { BookService } from 'src/app/services/book.service';


@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.scss']
})
export class CreateBookComponent implements OnInit {
  form!: FormGroup;


  control(controlName: string): AbstractControl {
    return this.form.controls[controlName];
  }

  constructor(
    private formBuilder: FormBuilder,
    private bookService: BookService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: ['', [Validators.required, Validators.maxLength(255)]],
      author: ['', [Validators.required]],
      description: ['', [Validators.required, Validators.maxLength(255)]]
    })

  }

  submit(): void {
    if (this.form.invalid) {
      alert('Form is not valid')
    }
    else {
      const { title, author, description } = this.form.value;
      const book: Book = {
        title: title,
        author: author,
        description: description
      }

      this.bookService.create(book);
      this.router.navigateByUrl('/');
    }
  }
  goBack(): void {
    this.router.navigateByUrl('/')
  }
}
