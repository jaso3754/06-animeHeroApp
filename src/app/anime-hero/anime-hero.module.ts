import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimeHeroRoutingModule } from './anime-hero-routing.module';
import { AnimespageComponent } from './pages/animespage/animespage.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { NewPageComponent } from './pages/new-page/new-page.component';


@NgModule({
  declarations: [
    AnimespageComponent,
    LayoutPageComponent,
    ListPageComponent,
    NewPageComponent
  ],
  imports: [
    CommonModule,
    AnimeHeroRoutingModule
  ]
})
export class AnimeHeroModule { }
