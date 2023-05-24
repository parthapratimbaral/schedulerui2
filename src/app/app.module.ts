import {  CUSTOM_ELEMENTS_SCHEMA, NgModule, }  from '@angular/core';
//import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent} from './app.component';
import { DefaultModule } from './layouts/default/default.module';
import { FullscreenModule } from './layouts/fullscreen/fullscreen.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LogoutComponent } from './modules/logout/logout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
//import { Ng2OrderModule } from 'ng2-order-pipe';


@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    LogoutComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DefaultModule,
    FullscreenModule,
    HttpClientModule,
    BrowserAnimationsModule,
    Ng2SearchPipeModule,
    //Ng2OrderModule,
    
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [],
})
export class AppModule {

}
