import { Component, OnInit,ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { merge } from 'rxjs/operators';
import { DataService } from '../services/data.service';

import { Locations } from '../models/locations.model';
import { FaresComponent } from '../fares/fares.component';
import {MatPaginator, MatTableDataSource,MatSort,Sort} from '@angular/material';



@Component({
  selector: 'app-listairports',
  templateUrl: './listairports.component.html',
  styleUrls: ['./listairports.component.css']
})


export class ListairportsComponent extends FaresComponent implements OnInit {

  locations: Locations[];
  displayedColumns = ['code', 'name', 'description'];
  dataSource: MatTableDataSource<Locations>;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(svc: DataService, fb: FormBuilder) { super(svc,fb)}

  ngOnInit() {
    this.getLocationData();
  }

  gAfterViewInit() {
        
   
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
    
    //merge(this.sort.sortChange, this.paginator.page).pipe().subscribe();

}

applyFilter(filterValue: string) {
  filterValue = filterValue.trim(); // Remove whitespace
  filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
  this.dataSource.filter = filterValue;
}


  gotLocationsData(): void {
    console.info('-- ListairportsComponent gotLocations()');

    this.dataSource=new MatTableDataSource<Locations>(this.locations);

    this.dataSource.sort = this.sort;
    this.sortedData = this.locations.slice();
    this.dataSource.paginator = this.paginator;
  }


  sortedData;
  sortData(sort: Sort) {
    const data = this.locations.slice();
    if (!sort.active || sort.direction == '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      let isAsc = sort.direction == 'asc';
      switch (sort.active) {
        case 'name': return compare(a.name, b.name, isAsc);
        case 'code': return compare(+a.code, +b.code, isAsc);
        case 'description': return compare(+a.description, +b.description, isAsc);
       
        default: return 0;
      }
    });
  }
}

function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
