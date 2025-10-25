import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ClothService } from '../cloth.service';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { BuyjeansComponent } from '../buynow/buyjeans/buyjeans.component';

@Component({
  selector: 'app-jeans',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterModule,BuyjeansComponent],
  templateUrl: './jeans.component.html',
  styleUrl: './jeans.component.css'
})
export class JeansComponent implements OnInit{
  jeans:any
  constructor(private service:ClothService,private router:Router){

  }
  ngOnInit(): void {
    this.service.givejeans().subscribe(
      (result:any)=>{
        this.jeans=result.data
      }
    )
  }

  buyNow(jeansId:any){
    this.router.navigate(["/buyjeans/"+jeansId])
  }
}
