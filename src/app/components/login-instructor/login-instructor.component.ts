import { IInstructorLoginModel } from './../../models/login-model/intsructor-login-model';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { InstructorLoginService } from './../../services/instructor/instructor-login.service';
import { Component, OnInit } from '@angular/core';
import { ISecondTokenModel } from 'src/app/models/secondtoken-model';

@Component({
  selector: 'app-login-instructor',
  templateUrl: './login-instructor.component.html',
  styleUrls: ['./login-instructor.component.css']
})
export class LoginInstructorComponent implements OnInit {

  instructorLoginForm:FormGroup;
  tokenModel:ISecondTokenModel;
  
  constructor(private instructorLoginService:InstructorLoginService,
    private formBuilder:FormBuilder,private router:Router) { }

  ngOnInit(): void {
    this.createInstructorLoginForm();
    this.login();
  }

  createInstructorLoginForm(){
    this.instructorLoginForm=this.formBuilder.group({
      email:['',Validators.required],
      password:['',Validators.required],
    })
  }

  login(){
    if(this.instructorLoginForm.valid){
      let logininstructorModel:IInstructorLoginModel=this.instructorLoginForm.value;
      this.instructorLoginService.instructorLogin(logininstructorModel).subscribe((data)=>{
        if(data.length>0){
          this.tokenModel=data[0];
          localStorage.setItem('token',this.tokenModel.token)
          this.router.navigate(['bootcamps'])
        }
      })
    }
  }

}
