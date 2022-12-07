import { Observable } from 'rxjs';
import { IGetApplicantResponseModel } from './../../models/response/applicant/getApplicant-response';
import { IGetAllApplicantResponseModel } from './../../models/response/applicant/getAllApplicant-response';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUpdateApplicantRequestModel } from 'src/app/models/request/applicant/update-applicant-request';
import { ThisReceiver } from '@angular/compiler';

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

  applicantDelete(data):Observable<IGetAllApplicantResponseModel>{
    return this.httpClient.delete<IGetAllApplicantResponseModel>(this.apiurl+'/' +data.id);

  }

  updateState(id,statevalue):Observable<IUpdateApplicantRequestModel>{
    return this.httpClient.patch<IUpdateApplicantRequestModel>(this.apiurl+'/'+id,{state:statevalue})
  }

}
