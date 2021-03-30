import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from '../task.model';
import { TrackerService } from '../tracker.service';

@Component({
  selector: 'app-tracker',
  templateUrl: './tracker.component.html',
  styleUrls: ['./tracker.component.css']
})
export class TrackerComponent implements OnInit {
  tArr:Array<Task>=[];

  constructor(public router:Router, public trackSer:TrackerService) { }

  ngOnInit(): void {
    this.loadTask();
  }

  // Storing input task in JSON task.json
  storeTask( taskRef:any ): void {
    console.log(taskRef);
    this.trackSer.storeTracker(taskRef);
  }

  // Retrieve task items in JSON task.json
  loadTask(): void {
    this.trackSer.loadTracker().subscribe(task=>this.tArr=task);
  }
  
    
  tableView(){
    this.router.navigate(['\list-view']);
  }
}
