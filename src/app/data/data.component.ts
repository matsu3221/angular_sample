import { Component, OnInit } from '@angular/core';
import { data } from '../data';
import { DataService } from '../data.service';
import { Scheduler } from 'rxjs';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  title = '入力画面';

  data:data;

  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.getData();
    console.log(this.data);
  }

  getData():void{
    this.data = this.dataService.getData();
  }

  onClick():void{
    this.dataService.setData(this.data.name,this.data.schedule);
  }
}
