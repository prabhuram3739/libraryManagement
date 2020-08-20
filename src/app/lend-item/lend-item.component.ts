import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-lend-item',
  templateUrl: './lend-item.component.html',
  styleUrls: ['./lend-item.component.scss']
})
export class LendItemComponent implements OnInit {
  responseMsg: string;
  constructor(private api:ApiService) { }

  ngOnInit() {
  }

  public postData(isbn:any, readerId: any) {

    let isbnData = {
      isbn: isbn.value,
      reader: readerId.value
    };
    this.api.postIsbn(isbnData).then((result) => { 
      console.log(result); 
      if(result['statusText'] === "Created") {
        this.responseMsg = "Item Lended Successfully";
        return this.responseMsg;
      }
      }, (err) => { 
        this.responseMsg = "Item didn't get lended";
        return this.responseMsg;
      });
  }

}
