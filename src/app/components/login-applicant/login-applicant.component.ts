import { IApplicantLoginModel } from './../../models/login-model/applicant-login-model';
import { Router } from '@angular/router';
import { ApplicantLoginService } from './../../services/applicant/applicant-login.service';
import { ISecondTokenModel } from './../../models/secondtoken-model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-applicant',
  templateUrl: './login-applicant.component.html',
  styleUrls: ['./login-applicant.component.css']
})
export class LoginApplicantComponent implements OnInit {

  applicantLoginForm:FormGroup;
  tokenModel:ISecondTokenModel;

  constructor(private applicantLoginService:ApplicantLoginService,
    private formBuilder:FormBuilder,private router:Router) { }

  ngOnInit(): void {
    this.createApplicantLoginForm();
    this.login();
  }

  createApplicantLoginForm(){
    this.applicantLoginForm=this.formBuilder.group({
      email:['',Validators.required],
      password:['',Validators.required],
    })
  }

  login(){
    if(this.applicantLoginForm.valid){
      let loginapplicantModel:IApplicantLoginModel=this.applicantLoginForm.value;
      this.applicantLoginService.applicantLogin(loginapplicantModel).subscribe((data)=>{
        if(data.length>0){
          this.tokenModel=data[0];
          localStorage.setItem('token',this.tokenModel.token)
          this.router.navigate(['bootcamps'])
        }
      })
    }
  }


}