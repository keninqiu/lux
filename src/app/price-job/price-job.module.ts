import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '../layout/layout.module';
import { PriceJobRoutingModule } from './price-job-routing.module';
import { PriceJobComponent } from './price-job.component';
import { ContentComponent } from './content/content.component';



@NgModule({
  declarations: [PriceJobComponent, ContentComponent],
  imports: [
    LayoutModule,
    PriceJobRoutingModule,
    CommonModule
  ]
})
export class PriceJobModule { }
