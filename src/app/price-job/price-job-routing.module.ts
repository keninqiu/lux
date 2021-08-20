import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PriceJobComponent } from './price-job.component';

const routes: Routes = [
  { path: '', component: PriceJobComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PriceJobRoutingModule { }