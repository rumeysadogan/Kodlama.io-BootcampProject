import { ITokenModel } from './../../models/token-model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IApplicantLoginModel } from 'src/app/models/login-model/applicant-login-model';

@Injectable({
  providedIn: 'root'
})
export class ApplicantLoginService {

  apiurl: string = 'http://localhost:3000/applicant';
  constructor(private httpClient:HttpClient) { }

  applicantLogin(user:IApplicantLoginModel){
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

