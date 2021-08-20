import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MarketWorthComponent } from './market-worth.component';
import { ContentComponent } from './content/content.component';
import { JobComponent } from './job/job.component';
import { CompensationComponent } from './compensation/compensation.component';
import { SpecialConsiderationsComponent } from './special-considerations/special-considerations.component';
import { EmployerComponent } from './employer/employer.component';
import { BenefitsComponent } from './benefits/benefits.component';
import { EducationComponent } from './education/education.component';
import { OptionalResearchQuestionsComponent } from './optional-research-questions/optional-research-questions.component';
import { ReportComponent } from './report/report.component';

const routes: Routes = [
  {
    path: '', component: MarketWorthComponent,
    children: [
      {path: '', component: ContentComponent},
      {path: 'job', component: JobComponent},
      {path: 'compensation', component: CompensationComponent},
      {path: 'special-considerations', component: SpecialConsiderationsComponent},
      {path: 'employer', component: EmployerComponent},
      {path: 'benefits', component: BenefitsComponent},
      {path: 'education', component: EducationComponent},
      {path: 'optional-research-questions', component: OptionalResearchQuestionsComponent},
      {path: 'report', component: ReportComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarketWorthRoutingModule { }