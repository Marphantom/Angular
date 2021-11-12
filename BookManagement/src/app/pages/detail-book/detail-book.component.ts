import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/models/book.model';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-detail-book',
  templateUrl: './detail-book.component.html',
  styleUrls: ['./detail-book.component.scss']
})
export class DetailBookComponent implements OnInit {
  form!: FormGroup;
  book: any;
  id!: number | null;
  control(controlName: string): AbstractControl {
    return this.form.controls[controlName];
  }


  constructor(
    private bookService: BookService,
    private formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute
    ) { 
    
  }

  ngOnInit(): void {
    const paramIdStr = this.activatedRoute.snapshot.paramMap.get('id');
    const paramId: number | null = typeof paramIdStr === 'string' ? +paramIdStr : null;
    this.id = paramId;
    this.book = this.bookService.getOne(paramId);
  }


}






