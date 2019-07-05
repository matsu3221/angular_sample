import { Injectable } from '@angular/core';
import { data } from './data'; 

@Injectable({
  providedIn: 'root'
})
export class DataService {

  data:data={
    name:"",
    schedule:""
  };

  getData():data{
    return  this.data;
  }

  setData(nama:string,schedule:string){
    this.data.name = name;
    this.data.schedule = schedule;
  }

  constructor() { }
}
