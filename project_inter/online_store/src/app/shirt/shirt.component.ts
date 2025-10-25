import { Component, OnInit } from '@angular/core';
import { ClothService } from '../cloth.service';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { BuyshirtComponent } from '../buynow/buyshirt/buyshirt.component';

@Component({
  selector: 'app-shirt',
  standalone: true,
  imports: [CommonModule,BuyshirtComponent,RouterLink,RouterModule],
  templateUrl: './shirt.component.html',
  styleUrl: './shirt.component.css'
})
export class ShirtComponent implements OnInit{
  shirts:any
  constructor(private service:ClothService,private router:Router){
  }
  ngOnInit(): void {
    
    this.service.giveShirts().subscribe(
      (result:any)=>{
        this.shirts=result.data;
        console.log(result)
      }
    )
  }
  buyNow(shirtId:any){
    //console.log(shirtId)
    this.router.navigate(["/buyshirt/"+shirtId])
  }
}
