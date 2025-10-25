import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-contactus',
  standalone: true,
  imports: [RouterLink,RouterModule,ReactiveFormsModule,CommonModule],
  templateUrl: './contactus.component.html',
  styleUrl: './contactus.component.css'
})
export class ContactusComponent {
  constructor(private router:Router, private service:UserService){
  }

  contactForm = new FormGroup({
    uId: new FormControl("", [Validators.required,Validators.pattern("^[a-zA-Z]+$")]),
    uQueries: new FormControl("", [Validators.required]),
    uEmail: new FormControl("", [Validators.required,Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
  });
 
  onSubmit() {
    console.log(this.contactForm.value)
    let user = {
      'uId': this.contactForm.value.uId,
      'uQueries': this.contactForm.value.uQueries,
      'uEmail': this.contactForm.value.uEmail
    }
    this.service.contactUs(user).subscribe()
}

  feedback(){
    alert("Your query submitted successfully")
    this.router.navigate(['/'])
  }

}
