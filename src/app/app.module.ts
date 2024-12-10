import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration} from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MaterialModule } from './material/material.module';
import { HttpClientModule } from '@angular/common/http';





@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,



    AppRoutingModule,
    SharedModule
  ],
  providers: [
    provideClientHydration(),
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
