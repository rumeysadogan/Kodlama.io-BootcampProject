import { InstructorLoginService } from './../services/instructor/instructor-login.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree,Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InstructorGuard implements CanActivate {
  constructor(private instructorloginService:InstructorLoginService,private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let isAuthenticated=this.instructorloginService.isAuthenticated();
      if(isAuthenticated==true){
        return true;
      }
      
      else{
        this.router.navigate(["instructorlogin"])
        console.log("Sisteme giriş yapınız.")
        return false;
      }
    }
    
    
  }
  

