import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ShirtComponent } from '../../shirt/shirt.component';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderserviceService } from '../../orderservice.service';
import { ClothService } from '../../cloth.service';
import { UserService } from '../../user.service';
import { state } from '@angular/animations';

@Component({
  selector: 'app-buyshirt',
  standalone: true,
  imports: [CommonModule,ShirtComponent,ReactiveFormsModule,FormsModule],
  templateUrl: './buyshirt.component.html',
  styleUrl: './buyshirt.component.css'
})
export class BuyshirtComponent {
  id: any;
  proceedWith: boolean = false;
  shirt: any;
  users: any;
  status: any;
  flag: boolean = false;
  totalPrice: number = 0;
  // orderForm = new FormGroup({
  //   name: new FormControl(''),
  //   address: new FormControl(''),
  //   state:new FormControl(''),
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
    this.id = this.arouter.snapshot.paramMap.get('shirtId');
    console.log(this.id)
    this.cservice.getbuyshirt(this.id).subscribe((result: any) => {
      this.shirt = result.data[0];
      
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
    return this.totalamount = this.shirt.price * this.selectedQuantity;
  }

 

 
  
  selectedSize:any="";
  placeOrder(clothId:any){
    let uId= sessionStorage.getItem("uId")
    console.log(this.selectedSize)
    this.oservice.placeCart(uId,this.shirt,this.selectedSize).subscribe()
    this.router.navigate(['cart'])
  }


 }