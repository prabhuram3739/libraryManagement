import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service'
import { Book } from '../model/book';
import { DVD } from '../model/dvd';
import { Reader } from '../model/reader';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-view-all',
  templateUrl: './view-all.component.html',
  styleUrls: ['./view-all.component.scss']
})
export class ViewAllComponent implements OnInit {

  books: Book[];
  dvds: DVD[];
  odBooks: Book[];
  odDVDs: DVD[];
  readers: Reader[];

  constructor(private Api:ApiService) { }

  ngOnInit() {
    this.getAllBooks().subscribe(
      (books) => {
        this.books = books;
      }
    );

    //Get all the OD  Books
    this.getAllODBooks().subscribe(
      (odBooks) => {
        this.odBooks = odBooks;
      }
    );
//Get all the DVD details
    this.getAllDVDs().subscribe(
      (dvds) => {
        this.dvds = dvds;
      }
    );

    //Get all the OD  DVDs
    this.getAllODDVDs().subscribe(
      (odDVDs) => {
        this.odDVDs = odDVDs;
      }
    );

    //Get all the Readers details
    this.getAllReaders().subscribe(
      (readers) => {
        this.readers = readers;
      }
    );
  }

  getAllBooks() : Observable<Book[]>{
    return this.Api.getAllBooks();
  }

  getAllODBooks(): Observable<Book[]> {
    return this.Api.getAllODBooks();
  }

  getAllDVDs() : Observable<DVD[]>{
    return this.Api.getAllDVDs();
  }

  getAllODDVDs(): Observable<DVD[]> {
    return this.Api.getAllODDVDs();
  }

  getAllReaders(): Observable<Reader[]> {
    return this.Api.getAllReaders();
  }

}
