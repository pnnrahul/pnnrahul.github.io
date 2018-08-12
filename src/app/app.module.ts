import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
// material-imports
import 'hammerjs';
import { ChartModule } from 'angular2-highcharts';
import { FusionChartsModule } from 'angular-fusioncharts';
import FusionCharts from 'fusioncharts/core';
import Column2D from 'fusioncharts/viz/column2d';
FusionChartsModule.fcRoot(FusionCharts, Column2D);
// bootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { SidebarModule } from 'ng-sidebar';
// components
import { AppComponent } from './app.component';
import { HeaderComponent } from '../components/header-component/header.component';
import { NavbarComponent } from '../components/navbar-component/navbar.component';
import { SidebarComponent } from '../components/sidebar-component/sidebar.component';
import { FirstDashComponent } from '../components/firstdash-component/firstdash.component';
import { SecondDashComponent } from '../components/seconddash-component/seconddash.component';
// services
import { AppRoutingModule } from  './app-routing.module';

@NgModule({
  declarations: [
	AppComponent,
	NavbarComponent,
	HeaderComponent,
	SidebarComponent,
	FirstDashComponent,
	SecondDashComponent
  ],
  imports: [
	BrowserModule,
	AppRoutingModule,
	NgbModule.forRoot(),
	SidebarModule.forRoot(),
	MDBBootstrapModule.forRoot(),
	FormsModule,
	ReactiveFormsModule,
	ChartModule.forRoot(require('highcharts')),
	FusionChartsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
