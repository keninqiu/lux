import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResearchComponent } from './research.component';
import { EmployerComponent } from './employer/employer.component';
import { DegreeComponent } from './degree/degree.component';
import { CertificationComponent } from './certification/certification.component';
import { SkillComponent } from './skill/skill.component';
import { IndustryComponent } from './industry/industry.component';
import { SchoolComponent } from './school/school.component';

const routes: Routes = [
  { path: '', component: ResearchComponent },
  { path: 'employer', component: EmployerComponent },
  { path: 'degree', component: DegreeComponent },
  { path: 'certification', component: CertificationComponent },
  { path: 'skill', component: SkillComponent },
  { path: 'industry', component: IndustryComponent },
  { path: 'school', component: SchoolComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResearchRoutingModule { }