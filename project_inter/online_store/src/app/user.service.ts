import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { apiUrls } from './apiurls';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users:any=[{'uId':'jeff','uemail':'jeff@1234','uPass':'123456'}]
  constructor(private http:HttpClient) {

   }

   getUsers(){
    return of (this.users)
   }

   signupUser(user:any){
    return this.http.post<any>(`${apiUrls.authServiceApi}register`,user)
   }

   loginUser(id:any,pass:any){
    return this.http.post<any>(`${apiUrls.authServiceApi}login`,{id,pass})
   }

   isLoggedIn(){
    let result = sessionStorage.getItem("loggedIn")
    if(result=='true'){
      return true
    }
    return false
  }

  contactUs(user:any){
    return this.http.post<any>(`${apiUrls.authServiceApi}contactus`,user)
  }
}
