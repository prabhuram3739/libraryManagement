import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Book } from '../model/book';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {
  books: Book[];
  bookTitle: string;
  bookIsbn: string;
  sector: string;
  publDateBook:string;
  author:string;
  publisher: string;
  pageCount: string;
  typeToAdd: string;
  dvdTitle: string;
  dvdIsbn: string;
  dvdSector: string;
  producer: string;
  language: string;
  subtitles: string;
  actors: string;
  duration: string;
  responseMsg: string;

  constructor(private api:ApiService) { }

  ngOnInit() {
    this.typeToAdd = "book";
    this.getAllBooks().subscribe(
      (books) => {
        this.books = books;
      }
    );
  }

  toggleView(type:string){
   this.typeToAdd = type;
  }

  /* Post the book data */
  public postBookData(bookTitle:any, bookIsbn:any, sector:any, author:any, publisher:any, pageCount:any, bookForm: any) {

    this.bookTitle = bookTitle.value;
    this.bookIsbn = bookIsbn.value;
    this.sector = sector.value;
    this.author = author.value;
    this.publisher = publisher.value;
    this.pageCount = pageCount.value;
    
this.api.getAllBooks()
.subscribe(data => {
let booksDataLength = data.length + 1;
    let book = {
      id: booksDataLength,
      title: this.bookTitle,
      sector: this.sector,
      borrowedDate: "",
      reader: "",
      ISBN: this.bookIsbn,
      authors: this.author,
      publisher: this.publisher,
      pageCount: this.pageCount
    };
    
    this.api.postBook(book).then((result) => { 
      console.log(result['statusText']);
      if(result['statusText'] === "Created") {
        this.responseMsg = "Book Created Successfully";
        return this.responseMsg;
      }
      }, (err) => { 
        this.responseMsg = "Book didn't get Created";
        return this.responseMsg;
      });
});
    
  }

  /* Post the DVD Data */
  public postDvdData(dvdTitle:any, dvdIsbn:any, dvdSector:any, producer:any, language:any, subtitles:any, actors:any, duration:any, dvdForm: any) {

    this.dvdTitle = dvdTitle.value;
    this.dvdIsbn = dvdIsbn.value;
    this.dvdSector = dvdSector.value;
    this.producer = producer.value;
    this.language = language.value;
    this.subtitles = subtitles.value;
    this.actors = actors.value;
    this.duration = duration.value;

    let dvdFormValue = dvdForm.value;
    dvdFormValue.reset();
    
this.api.getAllDVDs()
.subscribe(data => {
let DvdDataLength = data.length + 1;
    let dvd = {
      id: DvdDataLength,
      title: this.dvdTitle,
      sector: this.dvdSector,
      borrowedDate: "",
      reader: "",
      ISBN: this.dvdIsbn,
      authors: this.actors,
      producer: this.producer,
      duration: this.duration,
      subtitles: this.subtitles,
      languages: this.language
    };
    
    this.api.postDvd(dvd).then((result) => { 
      console.log(result); 
      if(result['statusText'] === "Created") {
        this.responseMsg = "DVD Created Successfully";
        return this.responseMsg;
      }
      }, (err) => { 
        this.responseMsg = "DVD didn't get Created";
        return this.responseMsg;
      });
});
  }

  getAllBooks() : Observable<Book[]>{
    return this.api.getAllBooks();
  }

}