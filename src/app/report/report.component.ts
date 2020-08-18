import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service'
import { Book } from '../model/book';
import { DVD } from '../model/dvd'
import {Observable} from 'rxjs'

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {

  books: Book[];
  dvds: DVD[];

  constructor(private Api:ApiService) { }

  ngOnInit() {
    this.getAllODBooks().subscribe(
      (books) => {
        this.books = books;
      }
    );

    this.getAllODDVDs().subscribe(
      (dvds) => {
        this.dvds = dvds;
      }
    )
  }

  getAllODBooks(): Observable<Book[]>{
    return this.Api.getAllODBooks();
  }

  getAllODDVDs(): Observable<DVD[]>{
    return this.Api.getAllODDVDs();
  }
}
