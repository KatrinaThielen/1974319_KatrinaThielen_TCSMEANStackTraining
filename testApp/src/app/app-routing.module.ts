import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScoreComponent } from './score/score.component';
import { TestQuestionsRetrieveComponent } from './test-questions-retrieve/test-questions-retrieve.component';
import { TestQuestionsComponent } from './test-questions/test-questions.component';

const routes: Routes = [
  {path:"", redirectTo:"\test-questions", pathMatch:"full"},
  {path:"\score", component:ScoreComponent},
  {path:"\test-questions-retrieve", component:TestQuestionsRetrieveComponent},
  {path:"\test-questions", component:TestQuestionsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
