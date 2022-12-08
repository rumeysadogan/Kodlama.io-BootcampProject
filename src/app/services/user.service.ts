import { Observable } from 'rxjs';
import { IGetAllApplicantResponseModel } from './../models/response/applicant/getAllApplicant-response';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiurl: string = 'http://localhost:3000/users';

  constructor(private httpClient:HttpClient) { }

  addApplicant(applicant){
    return this.httpClient.post(this.apiurl,applicant)

  }

  applicantDelete(data):Observable<IGetAllApplicantResponseModel>{
    return this.httpClient.delete<IGetAllApplicantResponseModel>(this.apiurl+'/' +data.id);

  }
}
