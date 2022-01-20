import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

export const CONNECTION_TYPES = {
  TERA_DATA: "tera",
  SNOW_FLAKE: "flake"
}

export const TEST_RESPONSES = {
  NOT_CONNECTED: 'Not Connected',
  CONNECTED: 'Connected'
}

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  constructor(private http: HttpClient) { }

  async getAll(): Promise<Array<any>> {
    return new Promise((resolve, reject) => {
      this.http.get(`${environment.apiBaseUrl}/connection`).subscribe(resp => {
        resolve(resp as Array<Task>);
      })
    })
  }

  async deleteById(id: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.http.delete(`${environment.apiBaseUrl}/connection/${id}`).subscribe(resp => {
        resolve(true);
      })
    })
  }

  async test(data: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.post(`${environment.apiBaseUrl}/connection/test`, data).subscribe(resp => {
        resolve(resp);
      })
    })
  }

  async createTera(data: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.post(`${environment.apiBaseUrl}/connection`, {...data, type: CONNECTION_TYPES.TERA_DATA}).subscribe(resp => {
        resolve(resp);
      })
    })
  }

  async createFlake(data: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.post(`${environment.apiBaseUrl}/connection`, {...data, type: CONNECTION_TYPES.SNOW_FLAKE}).subscribe(resp => {
        resolve(resp);
      })
    })
  }

}
