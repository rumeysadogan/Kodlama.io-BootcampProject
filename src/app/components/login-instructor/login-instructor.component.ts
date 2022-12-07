import { ITokenModel } from './../../models/token-model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IInstructorLoginModel } from 'src/app/models/login-model/intsructor-login-model';
import { InstructorLoginService } from 'src/app/services/instructor/instructor-login.service';

@Component({
  selector: 'app-login-instructor',
  templateUrl: './login-instructor.component.html',
  styleUrls: ['./login-instructor.component.css']
})
export class LoginInstructorComponent implements OnInit {

  instructorLoginForm:FormGroup;
  tokenModel:ITokenModel;
  
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