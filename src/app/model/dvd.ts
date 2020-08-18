import { Reader } from './reader';

class Actor {
    name:string;
    Contact: string;

    constructor(values:Object = {}){
        Object.assign(this,values);
    }
}

export class DVD {
    title: string;
    sector: string;
    publDate: Date;
    reader: Reader;
    ISBN: string;
    actors: Actor[];
    producer: string;
    duration: string;
    subtitles: string[];
    languages: string[];
  
    constructor(values: Object = {}) {
      Object.assign(this, values);
    }
}