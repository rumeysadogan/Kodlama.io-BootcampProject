import { ApplicantService } from './../../../services/applicant/applicant.service';
import { IGetAllApplicantResponseModel } from './../../../models/response/applicant/getAllApplicant-response';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-all-applicant',
  templateUrl: './get-all-applicant.component.html',
  styleUrls: ['./get-all-applicant.component.css']
})
export class GetAllApplicantComponent implements OnInit {

  applicants:IGetAllApplicantResponseModel[]=[];
  constructor(private applicantService:ApplicantService) { }

  ngOnInit(): void {
    this.getAllApplicant();
  }

  getAllApplicant(){
    this.applicantService.getAllApplicant().subscribe(data=>this.applicants=data)
  }

}
