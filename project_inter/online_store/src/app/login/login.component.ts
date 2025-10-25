import { Component } from '@angular/core';

import { Router, RouterLink, RouterModule } from '@angular/router';

import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserService } from '../user.service';

 
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule, RouterModule, RouterLink, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  
 constructor( private router:Router,private service:UserService){}
 errMsg:String=""
  loginForm = new FormGroup({
      uId: new FormControl("", [Validators.required,Validators.pattern("^[a-zA-Z]+$")]),
      uPass: new FormControl("", [Validators.required,])
    });
  onSubmit(){
    console.log(this.loginForm.value)
    this.service.loginUser(this.loginForm.value.uId, this.loginForm.value.uPass).subscribe(
      {
        next:(res)=>{
          if(res){
            console.log(res)
            let  uid:any=this.loginForm.value.uId;
            sessionStorage.setItem("loggedIn","true"||"")
            sessionStorage.setItem("uId",uid ||"")
            console.log(res)
            alert(`Welcome ${res.data.username}`);
            this.router.navigate([''])
          }
        },
        error:(err)=>{
            this.errMsg=err.error
        }
      }
  )
    }
  }
