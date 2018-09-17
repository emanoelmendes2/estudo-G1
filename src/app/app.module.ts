import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListadenoticiasComponent } from './listadenoticias/listadenoticias.component';


@NgModule({
  declarations: [
    AppComponent,
    ListadenoticiasComponent,
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
