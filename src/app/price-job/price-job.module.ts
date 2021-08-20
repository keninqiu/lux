import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '../layout/layout.module';
import { PriceJobRoutingModule } from './price-job-routing.module';
import { PriceJobComponent } from './price-job.component';



@NgModule({
  declarations: [PriceJobComponent],
  imports: [
    LayoutModule,
    PriceJobRoutingModule,
    CommonModule
  ]
})
export class PriceJobModule { }
