import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TdlistComponent } from './components/tdlist/tdlist.component';
import { AddtaskComponent } from './components/addtask/addtask.component';
import { FormsModule } from '@angular/forms';
import { LabelcasePipe } from './pipes/labelcase.pipe';
import { HttpModule } from '@angular/http';
import { AboutComponent } from './components/about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    TdlistComponent,
    AddtaskComponent,
    LabelcasePipe,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
