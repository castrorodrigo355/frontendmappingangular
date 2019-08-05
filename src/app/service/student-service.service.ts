import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {

  public URI: string = "http://localhost:3000/api/students/";

  constructor(private httpClient: HttpClient) {}

  getStudents(){
    return this.httpClient.get(this.URI)
  }

  getStudent(id){
    return this.httpClient.get(this.URI + id)
  }

  addStudent(student){
    return this.httpClient.post(this.URI, student);
  }

  deleteStudent(id) {
    return this.httpClient.delete(this.URI + id);
  }
  
}