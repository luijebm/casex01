import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Locations} from '../models/locations.model';
import {Fares} from '../models/fares.model';
import {Stats} from '../models/stats.model';
import {Observable} from 'rxjs';

import { environment } from '../../environments/environment';

import {map,catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  endPointAirports: string;
  endPointFares: string;
  endPointStats: string;

  constructor(private _http : HttpClient) { 
    this.endPointAirports= environment.endPointAirports;
    this.endPointFares= environment.endPointFares;
    this.endPointStats=environment.endPointStats;
  }

  getLocationData(): Observable<Array<Locations>>{

    console.log('--DataService getLocationData()');

      return this._http.get<Array<Locations>>(this.endPointAirports)
        .pipe(
           map(result=>result['_embedded']['locations'])
          ,catchError((err: any, caught) => {
          
            console.log('err.error =', err.error, ';');
          
            return Observable.throw(err);
          })
        );
   }
   getFaresData( origin:string, destination: string ): Observable<Fares>{

    console.log('--DataService getFaresData()');

      return this._http.get(this.endPointFares + '/' + origin + '/' + destination )
        .pipe(
           map(result=>result as Fares)
          ,catchError((err: any, caught) => {
          
            console.log('err.error =', err.error, ';');
          
            return Observable.throw(err);
          })
        );
        

  }

  getStatsData(  ): Observable<Stats>{

    console.log('--DataService getFaresData()');

      return this._http.get(this.endPointStats )
        .pipe(
           map(result=>result as Stats)
          ,catchError((err: any, caught) => {
          
            console.log('err.error =', err.error, ';');
          
            return Observable.throw(err);
          })
        );
        

  }
}
