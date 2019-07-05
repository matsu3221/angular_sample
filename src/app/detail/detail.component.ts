import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { data } from '../data';
import { getLocaleDateFormat } from '@angular/common';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  data:data;

  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.data = this.getData();
    console.log(this.data);
  }

  getData():data{
    return this.dataService.getData();
  }
  
}
