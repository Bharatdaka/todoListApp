import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TdlistComponent } from './components/tdlist/tdlist.component';
import { AddtaskComponent } from './components/addtask/addtask.component';
import { FormsModule } from '@angular/forms';
import { LabelcasePipe } from './pipes/labelcase.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TdlistComponent,
    AddtaskComponent,
    LabelcasePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
