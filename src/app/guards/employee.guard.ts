import { EmployeeLoginService } from './../services/employee/employee-login.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree,Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeGuard implements CanActivate {
  constructor(private employeelooginservice:EmployeeLoginService,private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let isAuthenticated=this.employeelooginservice.isAuthenticated();
      if(isAuthenticated==true){
        console.log("token geldi")
        return true;
        }
      else{
        this.router.navigate(["employeelogin"])
        console.log("sisteme giriş yapınız.")
        return false;
        }
     
    }
    
  }
  

