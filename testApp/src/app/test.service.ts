import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Test } from './test.model';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(public http:HttpClient) { }


loadTest():Observable<Test[]> {
  return this.http.get<Test[]>("/assets/test.json");
}

}
