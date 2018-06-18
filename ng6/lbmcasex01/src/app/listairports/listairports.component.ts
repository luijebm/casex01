import { Component, OnInit,ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith, catchError, finalize } from 'rxjs/operators';
import { DataService } from '../services/data.service';
import { Fares } from '../models/fares.model';
import { Locations } from '../models/locations.model';
import { FaresComponent } from '../fares/fares.component';
import {MatPaginator, MatTableDataSource,MatSort,Sort} from '@angular/material';


const ELEMENT_DATA: Locations[] = [];

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

  constructor(svc: DataService, fb: FormBuilder) { super(svc,fb)}

  ngOnInit() {
    this.getLocationData();
  }

  gAfterViewInit() {
        
    /* reset the paginator after sorting
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
    
    merge(this.sort.sortChange, this.paginator.page)
        .pipe(
            tap(() => this.loadLessonsPage())
        )
        .subscribe();

        */
}

  gotLocationsData(): void {
    console.info('-- ListairportsComponent gotLocations()');

    this.dataSource=new MatTableDataSource<Locations>(this.locations);

    this.dataSource.sort = this.sort;
    this.sortedData = this.locations.slice();
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
