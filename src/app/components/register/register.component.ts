import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ICreateApplicantRequestModel } from 'src/app/models/request/applicant/create-applicant-request';
import { ApplicantService } from 'src/app/services/applicant/applicant.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  createApplicantForm:FormGroup;
  createApplicantModel:ICreateApplicantRequestModel[]=[];
  constructor(private applicantService:ApplicantService,
    private formBuilder:FormBuilder,private userService:UserService) { }

  ngOnInit(): void {
    this.createCreateApplicantForm();
  }

  createCreateApplicantForm() {
    this.createApplicantForm = this.formBuilder.group({
      
      firstName: ['', Validators.required ],
      lastName: ['',Validators.required],
      email: ['',Validators.required],
      password:['',Validators.required],
      nationalIdentity:['',Validators.required],
      dateOfBirth:['',Validators.required],
      about:['',Validators.required],
      role:['roleApplicant',Validators.required]
    });
  }

  addApplicant(){
    if(this.createApplicantForm.valid){
      
      let applicant=Object.assign({},this.createApplicantForm.value)
      this.applicantService.addApplicant(applicant).subscribe(data=>{
        console.log(data)
      })
      this.userService.addApplicant(applicant).subscribe(data=>{
        console.log(data)
      })
    }}
}

