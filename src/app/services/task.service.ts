import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }

  async getAll(): Promise<Array<Task>> {
    return new Promise((resolve, reject) => {
      this.http.get(`${environment.apiBaseUrl}/task`).subscribe(resp => {
        resolve(resp as Array<Task>);
      })
    })
  }

  async createAdhocTask(data: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.post(`${environment.apiBaseUrl}/task`, data).subscribe(resp => {
        resolve(resp);
      })
    })
  }

}
