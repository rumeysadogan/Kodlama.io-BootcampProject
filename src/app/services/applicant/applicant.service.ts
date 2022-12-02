import { Observable } from 'rxjs';
import { IGetApplicantResponseModel } from './../../models/response/applicant/getApplicant-response';
import { IGetAllApplicantResponseModel } from './../../models/response/applicant/getAllApplicant-response';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApplicantService {

  apiurl: string = 'http://localhost:3000/applicant';

  constructor(private httpClient:HttpClient) { }

  addApplicant(applicant){
    return this.httpClient.post(this.apiurl,applicant)

  }

  getAllApplicant():Observable<IGetAllApplicantResponseModel[]>{
    return this.httpClient.get<IGetAllApplicantResponseModel[]>(this.apiurl)

  }

  getApplicantById(id): Observable<IGetApplicantResponseModel> {
    return this.httpClient.get<IGetApplicantResponseModel>(this.apiurl + '/' + id);
  }


  
  updateApplicant(id, applicant) {
    return this.httpClient.put(this.apiurl+ '/' + id, applicant);
  }

}
