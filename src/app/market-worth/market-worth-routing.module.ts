import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MarketWorthComponent } from './market-worth.component';
import { ContentComponent } from './content/content.component';
import { JobComponent } from './job/job.component';
const routes: Routes = [
  { path: '', component: MarketWorthComponent,
  children: [
    {path: '', component: ContentComponent},
    {path: 'job', component: JobComponent}
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarketWorthRoutingModule { }