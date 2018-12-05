import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TdlistComponent } from './components/tdlist/tdlist.component';
import { AboutComponent } from './components/about/about.component';
import { AddtaskComponent } from './components/addtask/addtask.component';

const routes: Routes = [
  { path:'home', component:TdlistComponent},
  { path:'about', component:AboutComponent},
  { path:'addtask', component:AddtaskComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
