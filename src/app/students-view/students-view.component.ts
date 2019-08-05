import { Component, OnInit } from '@angular/core';
import { StudentServiceService } from "../service/student-service.service";
import { Student } from "../models/students"

@Component({
  selector: 'app-students-view',
  templateUrl: './students-view.component.html',
  styleUrls: ['./students-view.component.scss']
})

export class StudentsViewComponent implements OnInit {

  students: any = Array<Student>();
  constructor(public service: StudentServiceService) { }

  ngOnInit() {
    this.getStudentsData();
  }

  getStudentsData(){
    this.service.getStudents().subscribe(res => {
      this.students = res;
    })
  }

  getStudentData(id){
    this.service.getStudent(id).subscribe(res => {
      console.log(res)
    })
  }
  
  deleteStudent(id){
      if(confirm("Seguro que desea eliminar ?")){
        this.service.deleteStudent(id).subscribe(res => {
          console.log("Student deleted !");
        })
        this.getStudentsData();
      }else{
        console.log("Se mantiene el estudiante...")
      } 
    
  }

}