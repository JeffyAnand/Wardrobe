import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule,RouterLink,CommonModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  
  constructor( private router:Router, private service:UserService){}
  
  errormessage:any="";

  signupForm = new FormGroup({
      uId: new FormControl("", [Validators.required,Validators.pattern("^[a-zA-Z]+$")]),
      uemail: new FormControl("",[Validators.required,]),
      uPass: new FormControl("", [Validators.required,])
    });
  onSubmit(){
    

    let user={
      'uId':this.signupForm.value.uId,
      'uPass':this.signupForm.value.uPass,
      'uemail':this.signupForm.value.uemail,
    }

      this.service.signupUser(user).subscribe({
      next:(res)=>{
        console.log(res);
        
        this.signupForm.reset();
        this.router.navigate(['/login'])
      },
      error:(err)=>{
        this.errormessage=err.error;
      }
    })
    }
}
