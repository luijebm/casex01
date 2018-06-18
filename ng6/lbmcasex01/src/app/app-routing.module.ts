import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CommonModule } from '@angular/common';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { FaresComponent }   from './fares/fares.component';
import { ListairportsComponent }   from './listairports/listairports.component';

const routes: Routes = [

  { path: '', redirectTo: '/fares', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'fares', component: FaresComponent },
  { path: 'list-airports', component: ListairportsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
