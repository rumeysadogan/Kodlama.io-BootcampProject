import { ITokenModel } from './../../models/token-model';
import { IInstructorLoginModel } from './../../models/login-model/intsructor-login-model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InstructorLoginService {

  apiurl:string="http:localhost:3000/instructor"
  constructor(private httpClient:HttpClient) { }


  instructorLogin(user:IInstructorLoginModel){
    return this.httpClient.get<ITokenModel[]>(this.apiurl +'?email' +user.email +'&password' +user.password)
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
