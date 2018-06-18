
import { Component, ViewChild, ElementRef,OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith, catchError, finalize } from 'rxjs/operators';
import { DataService } from '../services/data.service';
import { Fares } from '../models/fares.model';
import { Locations } from '../models/locations.model';

@Component({
  selector: 'app-fares',
  templateUrl: './fares.component.html',
  styleUrls: ['./fares.component.css']
})
export class FaresComponent implements OnInit {
  title = 'app';
  locations: Locations[];
  filteredOriginLocations$: Observable<Locations[]>;
  filteredDestinationLocations$: Observable<Locations[]>;
  originControl: FormControl = new FormControl();
  formOrigin: FormGroup;
  destinationControl: FormControl = new FormControl();
  formDestination: FormGroup;

  originAirport = { 'name': '', 'latitude': '', 'longitude': '', 'description': 'description' };
  destinationAirport = { 'name': '', 'latitude': '', 'longitude': '', 'description': 'description' };
  gotFares = false;
  fares: Fares;

  @ViewChild('stepOrigin') stepOrigin;
  @ViewChild('stepDestination') stepDestination;
  @ViewChild('stepper') stepper;


  constructor(private _svc: DataService, fb: FormBuilder) {
    this.formOrigin = fb.group({
      originControl: new FormControl('')
    });
    this.formDestination = fb.group({
      destinationControl: new FormControl('')
    });
  }

  onChanges(): void {
    this.originControl.valueChanges.subscribe(val => {
        this.gotFares=false;
    });
    this.destinationControl.valueChanges.subscribe(val => {
      this.gotFares=false;
  });
  }

  ngOnInit() {
    this.getLocationData();
    this.onChanges();
  }
  getLocationData(): void {
    this._svc.getLocationData()
      .pipe(finalize(() => this.gotLocationsData()))
      .subscribe(res => this.locations = res as Locations[]);

    console.info('-- AppComponent getLocations()');
  }
  gotLocationsData(): void {
    console.info('-- AppComponent gotLocations()');
    this.filteredOriginLocations$ = this.originControl.valueChanges.pipe(
      startWith<string | Locations>(''),
      map(value => typeof value === 'string' ? value : value.name),
      map(name => name ? this.filterLocations(name) : this.locations.slice().sort(this.compareFnSortLocations))
    );

    this.filteredDestinationLocations$ = this.destinationControl.valueChanges.pipe(
      startWith<string | Locations>(''),
      map(value => typeof value === 'string' ? value : value.name),
      map(name => name ? this.filterLocations(name) : this.locations.slice().sort(this.compareFnSortLocations))
    );
  }


  filterLocations(search: string): Locations[] {
    
    return this.locations.filter(location =>
      location.name.toLowerCase().indexOf(search.toLowerCase()) > 0
      || location.code.toLowerCase().indexOf(search.toLowerCase()) > 0
      || location.description.toLowerCase().indexOf(search.toLowerCase()) > 0).sort(this.compareFnSortLocations);
  }


  locationDisplayFn(location?: Locations): string | undefined {
    return location ? location.name : undefined;
  }

  compareFnSortLocations = (a, b) => {
    if (a.name < b.name)
      return -1;
    if (a.name > b.name)
      return 1;
    return 0;
  };

  getFaresData(origin: string, dest: string): void {

    this._svc.getFaresData(origin, dest)
      .pipe(finalize(() => this.gotFaresData()))
      .subscribe(res => this.fares = res as Fares);
    console.info('-- AppComponent getLocations()');
  }
  gotFaresData(): void {
    this.originAirport = { 'name': this.originControl.value['name'], 'latitude': this.originControl.value['coordinates']['latitude'], 'longitude': this.originControl.value['coordinates']['longitude'], 'description': this.originControl.value['description'] };
    this.destinationAirport = { 'name': this.destinationControl.value['name'], 'latitude': this.destinationControl.value['coordinates']['latitude'], 'longitude': this.destinationControl.value['coordinates']['longitude'], 'description': this.destinationControl.value['description'] };
    this.gotFares = true;
  }

  changedStep(event: Event) {
    console.info('-- AppComponent changedStep() :', event);


    // lbm@theline
    // TODO:
    // There is an bug or miss implementation in the Form Controls. Using template 'Validators.required' option is not working.
    // Step 'select' mehtod is not working as well, must check that later...


    if (event['selectedIndex'] == 2 && (!this.destinationControl.pristine && !this.originControl.pristine)) {
        this.getFaresData(this.originControl.value['code'] as string, this.destinationControl.value['code'] as string);
    }

  }
  stepperAnimationDone(): void {
    if (this.stepper.selectedIndex == 1) {
      if (this.originControl.pristine) {
        this.stepOrigin.select();
      }
    } else if (this.stepper.selectedIndex == 2) {
      if (this.destinationControl.pristine) {
        this.stepDestination.select();
      }

    }
  }
   
    reset(): void {
      this.destinationControl.reset;
      this.originControl.reset;
    }

  }