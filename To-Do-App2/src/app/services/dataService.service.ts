import { Injectable } from '@angular/core';
import { task } from '../models/task';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private http: HttpClient) { }

  addTask(task: task): Observable<any> {
    return this.http.post<any>(`http://localhost:3000/tasks`, task);
  }
  getAllTasks(): Observable<any[]> {
    return this.http.get<any[]>(`http://localhost:3000/tasks`);
  }

  updateTask(task: task, id: number): Observable<any> {
    return this.http.put<any>(`http://localhost:3000/tasks/${id}`, task);
  }
  deleteTask(id: number): Observable<any> {
    const headers = {
      'Content-Type': 'application/json'
    };
    return this.http.delete<any>(`http://localhost:3000/tasks/${id}`, { headers: headers });

  }
  getTaskById(id: number): Observable<any> {
    return this.http.get<any>(`http://localhost:3000/tasks/${id}`)
  }
}
