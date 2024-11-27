import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { NewPageComponent } from './pages/new-page/new-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { AnimespageComponent } from './pages/animes-page/animespage.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';


//localhost:4200/anime-heroe/''
const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      {path: 'new-anime', component: NewPageComponent},
      { path: 'search', component: SearchPageComponent},
      { path: 'edit/id', component: NewPageComponent},
      { path: 'list', component: ListPageComponent},
      { path: ':id', component: AnimespageComponent},
      { path: '**', redirectTo: 'list'},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnimeHeroRoutingModule { }
