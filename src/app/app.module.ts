import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutMeComponent } from './about-me/about-me.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import {MatTabsModule} from '@angular/material/tabs';
import { HttpClientModule } from '@angular/common/http';
// For MDB Angular Free
import { CarouselModule, WavesModule } from 'angular-bootstrap-md';
import { NgbCarouselModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MenuComponent } from './menu/menu.component';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarModule, ButtonsModule, IconsModule } from 'angular-bootstrap-md'

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    MenuComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    CdkAccordionModule,
    MatTabsModule,
    HttpClientModule,
    CarouselModule,
    WavesModule,
    NgbModule,
    NgbCarouselModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    NavbarModule,
    ButtonsModule,
    IconsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
