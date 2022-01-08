import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment';

export const TASK_TYPES = {
  ADHOC: 'adhoc',
  FULL_PROCESS: 'full process',
  TASK_FROM_SERVER: 'task from server'
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }

  async getAll(): Promise<Array<any>> {
    return new Promise((resolve, reject) => {
      // this.http.get(`${environment.apiBaseUrl}/task`).subscribe(resp => {
      //   resolve(resp as Array<Task>);
      // })
      resolve([
        {id: 1, taskName: 'Task 1'},
        {id: 2, taskName: 'Task 2'},
        {id: 3, taskName: 'Task 3'},
        {id: 4, taskName: 'Task 4'}
      ])
    })
  }

  // async createAdhocTask(data: any): Promise<any> {
  //   return new Promise((resolve, reject) => {
  //     this.http.post(`${environment.apiBaseUrl}/task`, {...data, type: TASK_TYPES.ADHOC}).subscribe(resp => {
  //       resolve(resp);
  //     })
  //   })
  // }

  // async createTaskFromServer(data: any): Promise<any> {
  //   return new Promise((resolve, reject) => {
  //     this.http.post(`${environment.apiBaseUrl}/task`, {...data, type: TASK_TYPES.TASK_FROM_SERVER}).subscribe(resp => {
  //       resolve(resp);
  //     })
  //   })
  // }

  // async createFullProcessTask(data: any): Promise<any> {
  //   return new Promise((resolve, reject) => {
  //     this.http.post(`${environment.apiBaseUrl}/task`, {...data, type: TASK_TYPES.FULL_PROCESS}).subscribe(resp => {
  //       resolve(resp);
  //     })
  //   })
  // }

}
