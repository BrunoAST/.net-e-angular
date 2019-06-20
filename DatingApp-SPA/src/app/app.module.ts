import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MainModule } from './main/main.module';
import { ValueModule } from './main/value/value.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,

    // Custom Modules
    MainModule,
    ValueModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
