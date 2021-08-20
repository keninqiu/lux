import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '../layout/layout.module';
import { MarketWorthRoutingModule } from './market-worth-routing.module';
import { MarketWorthComponent } from './market-worth.component';
import { TopComponent } from './top/top.component';
import { ContentComponent } from './content/content.component';
import { BottomComponent } from './bottom/bottom.component';
import { JobComponent } from './job/job.component';



@NgModule({
  declarations: [MarketWorthComponent, TopComponent, ContentComponent, BottomComponent, JobComponent],
  imports: [
    CommonModule,
    LayoutModule,
    MarketWorthRoutingModule
  ]
})
export class MarketWorthModule { }
