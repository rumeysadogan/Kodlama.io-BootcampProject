import { ITokenModel } from './../../models/token-model';
import { IEmployeeLoginModel } from './../../models/login-model/employee-login-model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeLoginService {

  apiurl:string="http://localhost:3000/employee"
  constructor(private httpClient:HttpClient) { }

  employeeLogin(user:IEmployeeLoginModel){
    return this.httpClient.get<ITokenModel[]>(this.apiurl+'?email=' +user.email +'&password=' +user.password)

  }

  isAuthenticated(){
    if(localStorage.getItem("token")){
      return true;
    }
    else{
      return false;
    }

  }

}

