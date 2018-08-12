import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import components

import { AppComponent } from '../app/app.component';

const routesConfig: Routes = [
  // {path: '', pathMatch: 'full', component: AppComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routesConfig)],
    exports: [RouterModule]
})

export class AppRoutingModule {}