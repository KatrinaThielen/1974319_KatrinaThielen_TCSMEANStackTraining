import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from './task.model';

@Injectable({
  providedIn: 'root'
})
export class TrackerService {

  constructor( public http:HttpClient) { }

  storeTracker( task:any ): void {
    this.http.post("http://localhost:3000/tasksList", task).
    subscribe(result=>console.log(result), error=>console.log(error));
  }

  loadTracker(): Observable<Task[]> {
    return this.http.get<Task[]>("http://localhost:3000/tasksList");
  }
}
