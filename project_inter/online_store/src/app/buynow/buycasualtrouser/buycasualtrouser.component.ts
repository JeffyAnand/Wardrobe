import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClothService } from '../../cloth.service';
import { UserService } from '../../user.service';
import { OrderserviceService } from '../../orderservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CasualTrousersComponent } from '../../casual-trousers/casual-trousers.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-buycasualtrouser',
  standalone: true,
  imports: [CasualTrousersComponent,CommonModule,ReactiveFormsModule,FormsModule],
  templateUrl: './buycasualtrouser.component.html',
  styleUrl: './buycasualtrouser.component.css'
})
export class BuycasualtrouserComponent implements OnInit{
  id: any;
  proceedWith: boolean = false;
  casualtrouser: any;
  users: any;
  status: any;
  flag: boolean = false;
  totalPrice: number = 0;
  // orderForm = new FormGroup({
  //   name: new FormControl(''),
  //   address: new FormControl(''),
  //   state: new FormControl(''),
  //   modeofpayment : new FormControl(''),
  //   pin: new FormControl(''),
  // });
  selectedSize:any=""

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
    this.id = this.arouter.snapshot.paramMap.get('casualtrouserId');
    this.cservice.getbuycasualtrouser(this.id).subscribe((result: any) => {
      this.casualtrouser = result.data[0];
      console.log(this.id)
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
    return this.totalamount=this.casualtrouser.price * this.selectedQuantity;
  }
 
 
  placeOrder(clothId:any){
    let uId= sessionStorage.getItem("uId")
    console.log(this.selectedSize)
    this.oservice.placeCart(uId,this.casualtrouser,this.selectedSize).subscribe()
    this.router.navigate(['cart'])
  }
}
