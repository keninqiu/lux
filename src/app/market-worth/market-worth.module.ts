import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '../layout/layout.module';
import { MarketWorthRoutingModule } from './market-worth-routing.module';
import { MarketWorthComponent } from './market-worth.component';
import { TopComponent } from './top/top.component';
import { ContentComponent } from './content/content.component';
import { BottomComponent } from './bottom/bottom.component';
import { JobComponent } from './job/job.component';
import { CompensationComponent } from './compensation/compensation.component';
import { SpecialConsiderationsComponent } from './special-considerations/special-considerations.component';
import { EmployerComponent } from './employer/employer.component';
import { BenefitsComponent } from './benefits/benefits.component';
import { EducationComponent } from './education/education.component';
import { OptionalResearchQuestionsComponent } from './optional-research-questions/optional-research-questions.component';
import { ReportComponent } from './report/report.component';



@NgModule({
  declarations: [MarketWorthComponent, TopComponent, ContentComponent, BottomComponent, JobComponent, CompensationComponent, SpecialConsiderationsComponent, EmployerComponent, BenefitsComponent, EducationComponent, OptionalResearchQuestionsComponent, ReportComponent],
  imports: [
    CommonModule,
    LayoutModule,
    MarketWorthRoutingModule
  ]
})
export class MarketWorthModule { }
