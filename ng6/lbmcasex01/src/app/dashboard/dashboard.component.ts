import { Component, OnInit } from '@angular/core';


import { environment } from '../../environments/environment';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  endPointStats:string;

  constructor() { }

  ngOnInit() {


    this.endPointStats=environment.endPointStats;
  }


}
