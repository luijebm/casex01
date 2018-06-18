import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {MatSnackBarModule,MatPaginatorModule,MatSortModule ,MatAutocompleteModule,MatFormFieldModule,MatInputModule,MatStepperModule,MatIconModule, MatButtonModule,MatCardModule, MatProgressSpinnerModule,MatTableModule} from '@angular/material';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';

import { BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import {DataService} from './services/data.service';

import {Interceptor} from './interceptors/httpinterceptor';
import {SearchFilterPipe} from './utils/searchfilterpipe';
import { AppRoutingModule } from './/app-routing.module';
import { FaresComponent } from './fares/fares.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListairportsComponent } from './listairports/listairports.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchFilterPipe,
    FaresComponent,
    DashboardComponent,
    ListairportsComponent
  ],
  imports: [
    BrowserModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatStepperModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatProgressSpinnerModule,
    AppRoutingModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatSnackBarModule
  ],
  providers: [
    DataService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Interceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
