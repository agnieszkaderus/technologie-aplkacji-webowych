import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-blog-home',
  templateUrl: './blog-home.component.html',
  styleUrls: ['./blog-home.component.css']
})
export class BlogHomeComponent implements OnInit{

  public filterText: string ="";

  constructor() {
  }

  ngOnInit(): void {
  }

  getName($event: string):void{
    this.filterText = $event;
  }
}
