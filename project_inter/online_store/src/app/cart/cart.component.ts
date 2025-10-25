import { Component, OnInit } from '@angular/core';
import { OrderserviceService } from '../orderservice.service';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule,RouterLinkActive,RouterModule,RouterOutlet],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit{
  // router: any;
  constructor(private service: OrderserviceService , private router:Router){}
  cart:any=[]
  proceedWith:boolean=false
  orderForm = new FormGroup({
    name: new FormControl(''),
    address: new FormControl(''),
    paymentmode: new FormControl(''),
    state: new FormControl(''),
    pin: new FormControl(''),
    mobilenumber: new FormControl('')
  })
ngOnInit(): void {
  this.service.showCart().subscribe(
    (result:any)=>{
      this.cart = result.data
      console.log(this.cart)
    }
  )
}
removeCartItem(clothId:any){
  this.service.removeFromCart(clothId).subscribe(
    (result:any)=>{
      this.cart = result.data
      console.log(result)
    }
  )
}

addPrice:any=0;
buyNow(){
this.proceedWith=true;
this.addPrice=this.service.addTotal(this.cart)
}


placeOrder(){
  
let order ={
"uId":sessionStorage.getItem("uId"),
'name': this.orderForm.value.name,
'address':this.orderForm.value.address,
'pin':this.orderForm.value.pin,
'paymentmode':this.orderForm.value.paymentmode,
'state':this.orderForm.value.state,
'mobilenumber':this.orderForm.value.mobilenumber,

}

this.service.placeUserOrder(this.cart,order).subscribe(
(result:any)=>{
    console.log(result)
    
    alert(`${result.title}, Price:${result.price}`)
    this.router.navigate(["/order"])
    }

)




}

onClick(){
  this.router.navigate([''])
}
}
