import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClothService } from '../cloth.service';
import { OrderserviceService } from '../orderservice.service';
 
@Component({
  selector: 'app-order',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent {
  orderId:any
  constructor(private oservice:OrderserviceService, private cservice: ClothService){}
  uId:any = sessionStorage.getItem("uId")
  marketOrders:any
  
  setFlagForMarketCancel: boolean= false
  checkMarketOrderVar:{ [key: number]: boolean } = {};
  ngOnInit(): void {
    this.oservice.getMarketOrderForUser(this.uId).subscribe(
      (result:any)=>{
        this.marketOrders=result.data
        console.log(this.marketOrders)
      }
      )
   
  }
  checkMarketOrderDetails(orderId: number): void {
        
        this.checkMarketOrderVar[orderId] = !this.checkMarketOrderVar[orderId];
    }
 
  cancelMarketOrder(orderId:any){
    
    this.setFlagForMarketCancel = true
    this.oservice.cancelMarketOrder(orderId).subscribe(
    (result:any)=>{
      this.marketOrders=result.data
    }
    )
    
  }
 
 
}
 