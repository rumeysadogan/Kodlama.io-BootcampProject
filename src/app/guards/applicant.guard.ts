import { ApplicantLoginService } from './../services/applicant/applicant-login.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree ,Router} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApplicantGuard implements CanActivate {
  constructor(private applicantloginService:ApplicantLoginService,private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let isAuthenticated=this.applicantloginService.isAuthenticated();
      if(isAuthenticated==true){
        return true;
      }
      else{
        this.router.navigate(['applicantlogin'])
        console.log("Sisteme giriş yapınız.")
        return false;
      }
      
    }
    
  }
  

