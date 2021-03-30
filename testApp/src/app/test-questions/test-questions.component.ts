import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test-questions',
  templateUrl: './test-questions.component.html',
  styleUrls: ['./test-questions.component.css']
})
export class TestQuestionsComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit(): void {
  }

  start(){
    this.router.navigate(["\test-questions-retrieve"]);
  }
}
