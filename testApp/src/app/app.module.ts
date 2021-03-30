import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestQuestionsComponent } from './test-questions/test-questions.component';
import { TestQuestionsRetrieveComponent } from './test-questions-retrieve/test-questions-retrieve.component';
import { TestService } from './test.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ScoreComponent } from './score/score.component';


@NgModule({
  declarations: [
    AppComponent,
    TestQuestionsComponent,
    TestQuestionsRetrieveComponent,
    ScoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [TestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
