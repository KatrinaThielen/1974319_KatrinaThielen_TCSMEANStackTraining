import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TrackerService } from '../tracker.service';

@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.css']
})
export class SubmitComponent implements OnInit {

  constructor(public router:Router, public trackSer:TrackerService) { }

  ngOnInit(): void {
  }
  // Storing input task in JSON task.json
  storeTask( taskRef:any ): void {
    console.log(taskRef);
    this.trackSer.storeTracker(taskRef);
  }

}
