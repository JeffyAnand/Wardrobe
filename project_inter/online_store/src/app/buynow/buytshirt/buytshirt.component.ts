import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TshirtComponent } from '../../tshirt/tshirt.component';
import { ClothService } from '../../cloth.service';
import { UserService } from '../../user.service';

import { ActivatedRoute, Router } from '@angular/router';
import { OrderserviceService } from '../../orderservice.service';

@Component({
  selector: 'app-buytshirt',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,TshirtComponent,FormsModule],
  templateUrl: './buytshirt.component.html',
  styleUrl: './buytshirt.component.css'
})
export class BuytshirtComponent implements OnInit{
  id: any;
  proceedWith: boolean = false;
  tshirt: any;
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
    this.id = this.arouter.snapshot.paramMap.get('tshirtId');
    this.cservice.getbuytshirt(this.id).subscribe((result: any) => {
      this.tshirt = result.data[0];
      
    });
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
    return this.totalamount=this.tshirt.price * this.selectedQuantity;
  }
 

  selectedSize:any=""
  placeOrder(clothId:any){
    let uId= sessionStorage.getItem("uId")
    console.log(this.selectedSize)
    this.oservice.placeCart(uId,this.tshirt,this.selectedSize).subscribe()
    this.router.navigate(['cart'])
  }
}
