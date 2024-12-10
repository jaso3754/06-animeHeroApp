import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { NewPageComponent } from './pages/new-page/new-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { MaterialModule } from '../material/material.module';
import { HeroespageComponent } from './pages/heroes-page/heroes-page.component';
import { HeroRoutingModule } from './hero-routing.module';


@NgModule({
  declarations: [
    HeroespageComponent,
    LayoutPageComponent,
    ListPageComponent,
    NewPageComponent,
    SearchPageComponent
  ],
  imports: [
    CommonModule,
    HeroRoutingModule,
    MaterialModule
  ]
})
export class AnimeHeroModule { }
