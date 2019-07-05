import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { DataComponent } from './data/data.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path:'' , redirectTo: '/data', pathMatch: 'full' },
  {path:'data', component:DataComponent},
  {path:'detail', component:DetailComponent},
  // {path:'detail', component: DetailComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
