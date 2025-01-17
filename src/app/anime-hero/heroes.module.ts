import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { HeroRoutingModule } from './hero-routing.module';
import { MaterialModule } from '../material/material.module';

import { HeroespageComponent } from './pages/heroes-page/heroes-page.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { NewPageComponent } from './pages/new-page/new-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { CardComponent } from './components/card/card.component';
import { HeroImagePipe } from './pipes/hero-image.pipe';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';




@NgModule({
  declarations: [
    HeroespageComponent,
    LayoutPageComponent,
    ListPageComponent,
    NewPageComponent,
    SearchPageComponent,
    CardComponent,

    //pipes
    HeroImagePipe,
    ConfirmDialogComponent
  ],
  imports: [
    CommonModule,
    HeroRoutingModule,
    MaterialModule,
    ReactiveFormsModule,

  ]
})
export class HeroModule { }
