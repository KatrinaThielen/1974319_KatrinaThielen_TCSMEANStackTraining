import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Test } from '../test.model';
import { TestService } from '../test.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})

export class ScoreComponent implements OnInit {
  questions: Array<Test> = [];
  answers: Array<string> = [];
  correct:string = "";
  inputs: Array<string> = [];
  result:string = "";

  constructor(public route:Router, public testSer:TestService) { 
  
  }

  ngOnInit(): void {
    this.retrieve();
    this.testSer.loadTest().subscribe(triviaQuestion=>this.questions=triviaQuestion)
    this.calculate();
  }
  
  retrieve(): void {
    this.answers = JSON.parse(localStorage.getItem('Inputs'));
    this.correct = JSON.parse(localStorage.getItem('Correct'));
    this.inputs = JSON.parse(localStorage.getItem('UserInputs'));

  }

  values(): void {
    console.log('this is inputs ', this.inputs)
    console.log('this is correct ', this.correct)
    console.log('this is questions ', this.questions)

  }

  calculate(){
    let num = parseInt(this.correct);
    console.log('this is num', num)
    if (num >= 8){
      this.result = "Congrats! You passed the assessment!"
      console.log(num)
    }
    else {
      this.result = "You failed the assessment."
      console.log(num)
    }
  }

  homePage(){
    localStorage.clear();
    this.route.navigate(["\test-questions"]);
  }

  testPage(){
    localStorage.clear();
    this.route.navigate(["\test-questions-retrieve"]);
  }
  // getResults():void {
    
  // }
  // checkAns(){
 
  //   console.log("maybe it worked idk, you are in checkAns")

  //   // Loads questions & answers
  //   for (let y = 0; y < this.questions.length; y++){
  //   this.answer[y] = this.questions[y];
  //   }
  //   console.log("This is the answer bank to compare to.. ", this.answer);

  //   // Retrieve user multiple choice selections
  //   let inputs:Array<string> = Object.values(this.testRef.value);

  //   // Determine correct values & incorrect values in storage
  //   for (let x = 0; x < this.questions.length; x++){
  //     if (inputs[x] === this.answer[x].ans){
  //       console.log("This is where an answer is correct = ", x)
  //       this.correct = this.correct + 1;
  //       this.correctIN.push(inputs[x]);
  //     } else{
  //       console.log("This answer is incorrect = ", x)

  //     }
  //   }



}
