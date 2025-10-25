import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ClothService } from '../cloth.service';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { BuytshirtComponent } from '../buynow/buytshirt/buytshirt.component';

@Component({
  selector: 'app-tshirt',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterModule,BuytshirtComponent],
  templateUrl: './tshirt.component.html',
  styleUrl: './tshirt.component.css'
})
export class TshirtComponent implements OnInit{
  tshirts:any;
  constructor(private service:ClothService,private router:Router){
  }
  ngOnInit(): void {
    this.service.givetshirts().subscribe(
      (result:any)=>{
        this.tshirts=result.data;
      }
    )
  }

  buyNow(tshirtId:any){
    console.log(tshirtId)
    this.router.navigate(["/buytshirt/" + tshirtId])
  }
}
