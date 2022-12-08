import { UserService } from './../../../services/user.service';
import { ApplicantService } from './../../../services/applicant/applicant.service';
import { IGetAllApplicantResponseModel } from './../../../models/response/applicant/getAllApplicant-response';
import { Component, OnInit } from '@angular/core';
import { TitleStrategy } from '@angular/router';

@Component({
  selector: 'app-get-all-applicant',
  templateUrl: './get-all-applicant.component.html',
  styleUrls: ['./get-all-applicant.component.css']
})
export class GetAllApplicantComponent implements OnInit {

  applicants:IGetAllApplicantResponseModel[]=[];
  constructor(private applicantService:ApplicantService,
    private userService:UserService) { }

  ngOnInit(): void {
    this.getAllApplicant();
  }

  getAllApplicant(){
    this.applicantService.getAllApplicant().subscribe(data=>this.applicants=data)
  }

  deleteApplicant(data):void{
    this.applicants=this.applicants.filter((c)=> c !== data);
    this.applicantService.applicantDelete(data).subscribe();
    this.userService.applicantDelete(data).subscribe();
  }

  

}
