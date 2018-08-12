import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
// material-imports
import 'hammerjs';
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
// services
import { AppRoutingModule } from  './app-routing.module';

@NgModule({
  declarations: [
	AppComponent,
	NavbarComponent,
	HeaderComponent,
	SidebarComponent,
	FirstDashComponent
  ],
  imports: [
	BrowserModule,
	AppRoutingModule,
	NgbModule.forRoot(),
	SidebarModule.forRoot(),
	MDBBootstrapModule.forRoot(),
	FormsModule,
	ReactiveFormsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
