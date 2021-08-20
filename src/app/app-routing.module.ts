import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'research', loadChildren: () => import('./research/research.module').then(m => m.ResearchModule)
  },
  {
    path: 'salary', loadChildren: () => import('./salary/salary.module').then(m => m.SalaryModule)
  },
  {
    path: 'price-job', loadChildren: () => import('./price-job/price-job.module').then(m => m.PriceJobModule)
  },
  {
    path: 'market-worth', loadChildren: () => import('./market-worth/market-worth.module').then(m => m.MarketWorthModule)
  }    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
