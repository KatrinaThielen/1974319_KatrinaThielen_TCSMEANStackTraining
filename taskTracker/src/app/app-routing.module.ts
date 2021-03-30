import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListViewComponent } from './list-view/list-view.component';
import { TrackerComponent } from './tracker/tracker.component'

const routes: Routes = [
  {path:"", redirectTo:"\tracker", pathMatch:"full"},
  {path:"\tracker", component:TrackerComponent},
  {path:"\list-view", component:ListViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
