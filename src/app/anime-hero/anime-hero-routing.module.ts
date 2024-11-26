import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import path from 'path';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';


//localhost:4200/anime-heroe/''
const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnimeHeroRoutingModule { }
