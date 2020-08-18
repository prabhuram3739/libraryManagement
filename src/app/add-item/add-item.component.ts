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

  public postData(bookTitle:any, bookIsbn:any, sector:any, author:any, publisher:any, pageCount:any) {

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
      console.log(result); 
      }, (err) => { 
      console.log(err); 
      });
});
    
  }

  getAllBooks() : Observable<Book[]>{
    return this.api.getAllBooks();
  }

}