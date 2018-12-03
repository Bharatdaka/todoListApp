import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TdlistComponent } from './components/tdlist/tdlist.component';
import { AddtaskComponent } from './components/addtask/addtask.component';

@NgModule({
  declarations: [
    AppComponent,
    TdlistComponent,
    AddtaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
