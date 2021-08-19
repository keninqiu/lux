import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MenuComponent } from './menu/menu.component';
import { AdvComponent } from './adv/adv.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ChangeComponent } from './change/change.component';
import { SalaryDataComponent } from './salary-data/salary-data.component';
import { CustomersExperienceComponent } from './customers-experience/customers-experience.component';
import { BestInClassComponent } from './best-in-class/best-in-class.component';
import { FooterComponent } from './footer/footer.component';
import { GsapComponent } from './gsap/gsap.component';



@NgModule({
  declarations: [HomeComponent, MenuComponent, AdvComponent, CarouselComponent, ChangeComponent, SalaryDataComponent, CustomersExperienceComponent, BestInClassComponent, FooterComponent, GsapComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
