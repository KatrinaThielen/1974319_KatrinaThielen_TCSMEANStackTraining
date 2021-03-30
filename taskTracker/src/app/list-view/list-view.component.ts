import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from '../task.model';
import { TrackerService } from '../tracker.service';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})
export class ListViewComponent implements OnInit {
  tArr:Array<Task>=[];
  constructor(public router:Router, public trackSer:TrackerService) { }

  ngOnInit(): void {
    this.loadTask();
  }

  loadTask(): void {
    this.trackSer.loadTracker().subscribe(task=>this.tArr=task);
  }
  
  listView(){
    this.router.navigate(['\tracker']);
  }
}
