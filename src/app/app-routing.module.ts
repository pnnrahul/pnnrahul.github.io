import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import components

import { FirstDashComponent } from '../components/firstdash-component/firstdash.component';
import { SecondDashComponent } from '../components/seconddash-component/seconddash.component';


const routesConfig: Routes = [
  {path: '', pathMatch: 'full', component: FirstDashComponent},
  {path: 'firtdash', pathMatch: 'full', component: FirstDashComponent},
  {path: 'seconddash', pathMatch: 'full', component: SecondDashComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routesConfig)],
    exports: [RouterModule]
})

export class AppRoutingModule {}