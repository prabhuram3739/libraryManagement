import {Reader} from './reader';

class authors {
    name: string;
    Contact: string;

    constructor(values:Object = {}){
        Object.assign(this,values)
    }
}

export class Book {  
  title: string;
  sector: string;
  publDate: Date;
  reader: Reader;
  ISBN: string;
  authors: authors[];
  publisher: string;
  pageCount: number;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}