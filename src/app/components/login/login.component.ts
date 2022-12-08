import { IEmployeeLoginModel } from './../../models/login-model/employee-login-model';
import { Router } from '@angular/router';
import { ITokenModel } from './../../models/token-model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EmployeeLoginService } from './../../services/employee/employee-login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: "./login.component.html",
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  employeeLoginForm:FormGroup;
  tokenModel:ITokenModel;
  constructor(private employeeloginService:EmployeeLoginService,
    private formBuilder:FormBuilder,private router:Router) { }

  ngOnInit(): void {
    this.createEmployeeLoginForm();
    // this.login();

  }

  createEmployeeLoginForm(){
    this.employeeLoginForm = this.formBuilder.group({
      email: ['', Validators.required ],
      password: ['',Validators.required],
      
    });
  }

  login(){
    if(this.employeeLoginForm.valid){

      let loginModel:IEmployeeLoginModel=this.employeeLoginForm.value;
      this.employeeloginService.employeeLogin(loginModel).subscribe((data)=>{
        if(data.length>0){
          this.tokenModel=data[0];
          localStorage.setItem('token',this.tokenModel.token)
          // this.router.navigate(["products"])
          // this.toastr.success('Kayıt başarılı')
          this.router.navigate(['admin'])
        }
        else{
          // this.toastr.error('Kayıt başarısız.')
        }
      })
    }
  }



}


