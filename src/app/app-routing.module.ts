import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  {path :'home', component:AboutMeComponent},
  {path : 'menu', component:MenuComponent},
  {path : '', redirectTo:'home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
