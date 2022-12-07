import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router:Router) { }


  logout(){
    localStorage.clear()
    alert("Çıkış Yapıldı")
    this.router.navigate([""])
  }
}
