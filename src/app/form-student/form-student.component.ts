import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { StudentServiceService } from "../service/student-service.service";
import { Student } from "../models/students";
import { StudentsViewComponent } from "../students-view/students-view.component";

@Component({  
  selector: 'app-form-student',
  templateUrl: './form-student.component.html',
  styleUrls: ['./form-student.component.scss']
})
export class FormStudentComponent implements OnInit {

  miFormulario: FormGroup;

  constructor(public service: StudentServiceService) {
    this.miFormulario = new FormGroup({
      name: new FormControl("", [
                  Validators.required,
                  Validators.maxLength(8)
              ])
      // 'age': new FormControl("", [
      //             Validators.required
      //         ])
    });
  }

  ngOnInit() {
  }

  guardarCambios() {
    // const student = this.miFormulario.value;
    console.log(this.miFormulario.value)
    // this.service.addStudent(student).subscribe(res => {
    //   console.log("Estudiante agregado")
    // })
  }

}