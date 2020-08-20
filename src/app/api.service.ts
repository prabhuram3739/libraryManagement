import { Injectable } from '@angular/core';
import { environment } from '../environments/environment'
import { Http, Response } from '@angular/http'
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { Book } from './model/book';
import { DVD } from './model/dvd';
import { Reader } from './model/reader';
import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:Http, private httpPost: HttpClient) { }

  public getAllBooks() : Observable<Book[]> {
    return this.http
    .get( API_URL+'/books')
    .pipe(map(response=> {
      const books = response.json();
      if(books) {
        return books.map((book) => new Book(book));
      }

    }))
    .pipe(catchError(this.handleError));    
  }

  /* Post the Book for adding */
  public postBook(book) {
    console.log(book);
    /*return this.httpPost
    .post( API_URL+'/books', book)
    .pipe(map(response=> {
      console.log(response);
      const books = response;
      if(books) {
        return books[book];
      }

    }))
    .pipe(catchError(this.handleError));    */

    return new Promise((resolve, reject) => {
      this.http.post(API_URL+'/books', book).subscribe(res => {
      resolve(res);
      }, (err) => {
      reject(err);
      });
      });
  }

  public getAllODBooks() : Observable<Book[]> {
    return this.http
    .get( API_URL+'/overDraftedBooks')
    .pipe(map(response=> {
      const books = response.json();
      if(books) {
        return books.map((book) => new Book(book));
      }
    }))
    .pipe(catchError(this.handleError));    
  }

  public getAllDVDs() : Observable<DVD[]> {
    return this.http
    .get( API_URL+'/DVDS')
    .pipe(map(response=> {
      const dvds = response.json();
      if(dvds) {
        return dvds.map((dvd) => new DVD(dvd));
      }
    }))
    .pipe(catchError(this.handleError));    
  }

  public getAllODDVDs() : Observable<DVD[]> {
    return this.http
    .get( API_URL+'/odDVDS')
    .pipe(map(response=> {
      const dvds = response.json();
      if(dvds) {
        return dvds.map((dvd) => new DVD(dvd));
      }
    }))
    .pipe(catchError(this.handleError));    
  }

  public getAllReaders() : Observable<Reader[]> {
    return this.http
    .get( API_URL+'/readers')
    .pipe(map(response=> {
      const readers = response.json();
      if(readers) {
        return readers.map((reader) => new DVD(reader));
      }
      
    }))
    .pipe(catchError(this.handleError));    
  }

  private handleError(error: Response | any){
    console.error('ApiService::Error',error );
    return Observable.throw(error);
  }
}
