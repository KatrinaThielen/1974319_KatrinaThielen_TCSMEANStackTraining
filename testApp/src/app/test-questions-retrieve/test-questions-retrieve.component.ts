import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Test } from '../test.model';
import { TestService } from '../test.service';

@Component({
  selector: 'app-test-questions-retrieve',
  templateUrl: './test-questions-retrieve.component.html',
  styleUrls: ['./test-questions-retrieve.component.css']
})
export class TestQuestionsRetrieveComponent implements OnInit {
  questions:Array<Test>=[];
  answers:Array<string>=[];
  correct:number=0;
  userIN:Array<string> = [];
  //question:Array<Test>=[];
  // testRef= new FormGroup({
  // });

  testRef:FormGroup = new FormGroup({
    quest1:new FormControl(),
    quest2:new FormControl(),
    quest3:new FormControl(),
    quest4:new FormControl(),
    quest5:new FormControl(),
    quest6:new FormControl(),
    quest7:new FormControl(),
    quest8:new FormControl(),
    quest9:new FormControl(),
    quest10:new FormControl()
  });
  answer:Array<Test> = [];

  constructor(public route:Router, public testSer:TestService) { }

  ngOnInit(): void {
    this.testSer.loadTest().subscribe(triviaQuestion=>this.questions=triviaQuestion)
    //this.testSer.loadTest().subscribe(triviaQuestion=>this.question=triviaQuestion)
  }

  // submitAnswers():void{
  //   let answers:Array<string> = Object.values(this.questRef.value);
  //   for (let i = 0; i < this.qArr.length; i++) {
  //     this.qArr[i].userChoice=(eval(answers[i])!=null)? eval(answers[i]): 0;
  //     this.aArr.push(this.qArr[i].userChoice)
  //   }
  //   this.saveAnswers()
  //   this.goToResults()
  // }


  checkAns(){
 
    console.log("maybe it worked idk, you are in checkAns")

    // Loads questions & answers
    for (let y = 0; y < this.questions.length; y++){
    this.answer[y] = this.questions[y];
    }
    console.log("This is the answer bank to compare to.. ", this.answer);

    // Retrieve user multiple choice selections
    let inputs:Array<string> = Object.values(this.testRef.value);

    // Determine correct values & incorrect values in storage
    for (let x = 0; x < this.questions.length; x++){
      if (inputs[x] === this.answer[x].ans){
        console.log("This is where an answer is correct = ", x)
        this.correct = this.correct + 1;
        //this.correctIN.push(inputs[x]);
      } else{
        console.log("This answer is incorrect = ", x)

      }
      this.userIN.push(inputs[x]);
    }

    localStorage.setItem('Inputs', JSON.stringify(inputs));
    localStorage.setItem('Correct', JSON.stringify(this.correct));
    localStorage.setItem('UserInputs', JSON.stringify(this.userIN));
    this.resultsDirect();
    //localStorage.setItem('Incorrect', JSON.stringify(incorrect));
    //this.testSer.loadTest().subscribe(output=>this.answer=output);

    // let inputs:Array<string> = Object.values(this.testRef.value);
    // for (let x = 0; x < this.questions.length; x++){
    //   if (question )

    //   this.questions[x].userChoice=(eval(answers[i])!=null)? eval (answers[i]): 0;

    }

    resultsDirect(){
      this.route.navigate(["\score"]);
    }
    // let inputs = document.getElementsByTagName('input');

    // for (let x = 0; x < 4; x++){
    //   if inputs[x].checked == true){
    //     sessionStorage.setItem'in'+x, inputs[x].value);
    //     inputs[x].checked = false;
    //   }
    }

  //   let radios = document.getElementsByTagName('input');

  // for (let j = 0; j < 4; j++) {
  //   if (radios[j].checked == true) {
  //     sessionStorage.setItem('Ans' + i, radios[j].value);
  //     radios[j].checked = false;
  //   }
    //console.log('this is quest : ',quest);
    //console.log('this is opt : ', opt);
    //this.questions.forEach(q => 
   //   )
    
    //let answers = [];
    //this.questions.forEach(x => {answers.push {}}); aaaaaaaaaaaa
      
  

// onSelect(question:Test, option:string){
//  console.log('this is question output on select ',question);
//  console.log('this is option selection output on select ',option);
//  //array.forEach(item => {document.querySelector'
// }
// }
// );
//  document.querySelector('input[name="rate"]:checked').value;

//  if (option === question.ans){
//    console.log('this is true');
//  }

//  if (option != question.ans){
//   console.log('this is FALSE');
// }
// }
  // onSelect(question: Question, option: Option) {
  //   if (question.questionTypeId === 1) {
  //     question.options.forEach((x) => { if (x.id !== option.id) x.selected = false; });
  //   }


