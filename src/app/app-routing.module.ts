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
  }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
