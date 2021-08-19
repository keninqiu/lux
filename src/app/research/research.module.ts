import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '../layout/layout.module';
import { ResearchRoutingModule } from './research-routing.module';
import { ResearchComponent } from './research.component';
import { EmployerComponent } from './employer/employer.component';
import { JobComponent } from './job/job.component';
import { DegreeComponent } from './degree/degree.component';
import { CertificationComponent } from './certification/certification.component';
import { SkillComponent } from './skill/skill.component';
import { IndustryComponent } from './industry/industry.component';
import { SchoolComponent } from './school/school.component';
import { SearchSalaryComponent } from './search-salary/search-salary.component';
import { BrowseAllCategoriesComponent } from './browse-all-categories/browse-all-categories.component';
import { FindYourMarketWorthComponent } from './find-your-market-worth/find-your-market-worth.component';



@NgModule({
  declarations: [ResearchComponent, EmployerComponent, JobComponent, DegreeComponent, CertificationComponent, SkillComponent, IndustryComponent, SchoolComponent, SearchSalaryComponent, BrowseAllCategoriesComponent, FindYourMarketWorthComponent],
  imports: [
    ResearchRoutingModule,
    LayoutModule,
    CommonModule
  ]
})
export class ResearchModule { }
