export class Reader{
    ID: string;
    Name: string;
    address:string;
    
    constructor(values:Object = {}){
        Object.assign(this,values);
    }
}