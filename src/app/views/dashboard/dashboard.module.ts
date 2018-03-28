import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { AsyncLocalStorageModule } from 'angular-async-local-storage';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
  imports: [
    DashboardRoutingModule,
    ChartsModule,
    AsyncLocalStorageModule
  ],
  declarations: [ DashboardComponent ]
})
export class DashboardModule { }
