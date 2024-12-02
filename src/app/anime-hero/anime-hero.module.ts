import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimeHeroRoutingModule } from './anime-hero-routing.module';
import { AnimespageComponent } from './pages/animes-page/animespage.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { NewPageComponent } from './pages/new-page/new-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    AnimespageComponent,
    LayoutPageComponent,
    ListPageComponent,
    NewPageComponent,
    SearchPageComponent
  ],
  imports: [
    CommonModule,
    AnimeHeroRoutingModule,
    MaterialModule
  ]
})
export class AnimeHeroModule { }
