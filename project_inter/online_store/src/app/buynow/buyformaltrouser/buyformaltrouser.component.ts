import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormalTrousersComponent } from '../../formal-trousers/formal-trousers.component';
import { ClothService } from '../../cloth.service';
import { UserService } from '../../user.service';
import { OrderserviceService } from '../../orderservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-buyformaltrouser',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,FormalTrousersComponent,FormsModule],
  templateUrl: './buyformaltrouser.component.html',
  styleUrl: './buyformaltrouser.component.css'
})
export class BuyformaltrouserComponent implements OnInit{
  id: any;
  proceedWith: boolean = false;
  formaltrouser: any;
  users: any;
  status: any;
  flag: boolean = false;
  totalPrice: number = 0;
  // orderForm = new FormGroup({
  //   name: new FormControl(''),
  //   address: new FormControl(''),
  //   state: new FormControl(''),
  //   modeofpayment : new FormControl(''),
  //   pin: new FormControl('')
  // });
 
  constructor(
    private cservice: ClothService,
    private uservice: UserService,
    private oservice: OrderserviceService,
    private arouter: ActivatedRoute,
    private router: Router
  ) {}
 
  ngOnInit(): void {
    if (!this.uservice.isLoggedIn()) {
      this.router.navigate(['login']);
    }
    this.id = this.arouter.snapshot.paramMap.get('formaltrouserId');
    this.cservice.getbuyformaltrouser(this.id).subscribe(
      (result:any)=>{
        this.formaltrouser = result.data[0]
      }
    )
  }
 
  proceed() {
    this.proceedWith = true;
  }
 
  updatePrice(increment: number) {
    this.totalPrice += increment;
  }

  totalamount:any
  quantityOptions = [1, 2, 3, 4, 5, 6, 7];
  selectedQuantity: number = 1;
  calculateTotalPrice(): number {
    return this.totalamount=this.formaltrouser.price * this.selectedQuantity;
  }
 
  // placeOrder() {
  //   const order = {
  //     uId: sessionStorage.getItem('uId'),
  //     id: this.id,
  //     name: this.orderForm.value.name,
  //     address: this.orderForm.value.address,
  //     pin: this.orderForm.value.pin,
  //     state: this.orderForm.value.state,
  //     modeofpayment: this.orderForm.value.modeofpayment,
  //     totalamount:this.totalamount,
  //     orderDate: new Date()
  //   };
  //   this.oservice.placeOrder(order)
  //   .subscribe((result: { orderId: string }) => {
  //     // alert('Your order is Placed, with a' + result.orderId);
  //     alert('Thank you for placing your order! We will process it shortly');
  //     this.router.navigate(['']);
  //   });
  // }
  selectedSize:any=""
  placeOrder(clothId:any){
    let uId= sessionStorage.getItem("uId")
    console.log(this.selectedSize)
    this.oservice.placeCart(uId,this.formaltrouser,this.selectedSize).subscribe()
    this.router.navigate(['cart'])
  }

}
