import { ApplicantService } from '../../../services/applicant/applicant.service';
import { UserService } from '../../../services/user.service';
import { IGetAllApplicantResponseModel } from '../../../models/response/applicant/getAllApplicant-response';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-applicantlist',
  templateUrl: './applicantlist.component.html',
  styleUrls: ['./applicantlist.component.css']
})
export class ApplicantlistComponent implements OnInit {

  applicants:IGetAllApplicantResponseModel[]=[];
  constructor(private applicantService:ApplicantService,
    private userService:UserService) { }

  ngOnInit(): void {
    this.getAllApplicant();
  }

  getAllApplicant(){
    this.applicantService.getAllApplicant().subscribe(data=>this.applicants=data)
  }


  deleteApplicant(id:number){
    const swalWithBootstrapButtons=Swal.mixin({
      customClass:{
        confirmButton:'btn bg-gradient-info active ms-3',
        cancelButton:'btn bg-gradient-primary active',
      },
      buttonsStyling:false,

    });
    swalWithBootstrapButtons.fire({
      title:'Emin misiniz',
      text:'Bu işlem geri alınamaz',
      icon:'warning',
      showCancelButton:true,
      confirmButtonText:'Evet',
      cancelButtonText:'Hayır',
      reverseButtons:true,
    })
    .then((result)=>{
      if(result.isConfirmed){
        this.applicantService.applicantDelete(id).subscribe(()=>{
          swalWithBootstrapButtons.fire(
            'Silindi',
            'İstediğiniz veri silindi',
            'success'
          );
        }),
        setTimeout(()=>{
          window.location.reload();
        },1000);
      }else if(result.dismiss===Swal.DismissReason.cancel){
        swalWithBootstrapButtons.fire(
          'İptal Edildi',
          'Veriniz hala güvende',
          'error'
        );
      }
    })
  }

}
