import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BloodComponent } from './components/blood/blood.component';
import { BloodFormComponent } from './components/blood-form/blood-form.component';

const routes: Routes = [{path:'',component:BloodFormComponent},
                        {path:'blood-bank',component:BloodComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
