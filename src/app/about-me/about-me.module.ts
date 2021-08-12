import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import {MatTabsModule} from '@angular/material/tabs';
import { HttpClientModule } from '@angular/common/http';
import { CarouselModule, WavesModule } from 'angular-bootstrap-md';
import { NgbCarouselModule, NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { AboutMeRoutingModule } from './about-me-routing.module';
import { MatToolbar, MatToolbarModule, MatToolbarRow } from '@angular/material/toolbar';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AboutMeRoutingModule,
    MatToolbarModule,
    MatToolbarRow,
    MatToolbar,

  ]
})
export class AboutMeModule { }
