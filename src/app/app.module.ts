import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Interfaz1Component } from './interfaz1/interfaz1.component';
import { Interfaz2Component } from './interfaz2/interfaz2.component';

@NgModule({
  declarations:[
    AppComponent,
    Interfaz1Component,
    Interfaz2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
