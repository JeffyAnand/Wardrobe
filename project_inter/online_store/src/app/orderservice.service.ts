import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { ClothService } from './cloth.service';
import { apiUrls } from './apiurls';
import { HttpClient } from '@angular/common/http';
 
@Injectable({
  providedIn: 'root'
})
export class OrderserviceService {
orders:any=[]
  market: any;
  
  constructor(private cservice:ClothService, private http:HttpClient) {
   
   }
   placeOrder(order:any){
     
    //  order["orderStatus"]='Placed'
    //  return this.http.post(`${apiUrls.orderServiceApi}order/place-order`,order )
    //  for(let product of this.cservice.products)
    //   {
        
    //     if(product.id==order.id){
          
    //       order["type"] = product.type
    //       order["name"] = product.name
    //       order["image"] = product.image
          
          
    //     }
    //   }
     
    //   this.orders.push(order)
     
    //   return of (order)
    }
 
    getMarketOrderForUser(uId:any){
      console.log(uId);
      
      return this.http.get(`${apiUrls.orderServiceApi}history/${uId}`)
    }
    
    cancelMarketOrder(orderId:any){
      console.log("hello")
      return this.http.post<any>(`${apiUrls.orderServiceApi}cancel-order`,{orderId})
    }

    placeCart(uId:any,cloth:any,size:any){
      console.log(cloth)
      return this.http.post(`${apiUrls.cartServiceApi}add-cart`,{uId,cloth,size})
    }
    showCart(){
      let uId=sessionStorage.getItem("uId")
      return this.http.post(`${apiUrls.cartServiceApi}show-cart`,{uId})
    }
    removeFromCart(clothId:any){
      let uId= sessionStorage.getItem("uId")
      return this.http.post(`${apiUrls.cartServiceApi}remove-cart`,{clothId,uId})
    }

    placeUserOrder(cart:any,order:any){
      console.log(cart, order)
      let totalPrice=0
      for(let object of cart){
        totalPrice+=object.price
      }
      return this.http.post(`${apiUrls.orderServiceApi}place-order`,{order,cart,totalPrice})
    }

    addTotal(cart:any){
      let count=0;
      for(let product of cart){
          count+=product.price
      }
      return count
 }
  }