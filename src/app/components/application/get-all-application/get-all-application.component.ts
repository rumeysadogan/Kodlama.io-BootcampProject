import { ApplicationService } from './../../../services/application/application.service';
import { IGetAllApplicationResponseModel } from './../../../models/response/application/getAllApplication-response';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-all-application',
  templateUrl: './get-all-application.component.html',
  styleUrls: ['./get-all-application.component.css']
})
export class GetAllApplicationComponent implements OnInit {

  applications:IGetAllApplicationResponseModel[]=[];
  constructor(private applicationService:ApplicationService) { }

  ngOnInit(): void {
    this.getAllApplication();
  }
  getAllApplication(){
    this.applicationService.getAllApplication().subscribe(data=>this.applications=data)
  }


}
