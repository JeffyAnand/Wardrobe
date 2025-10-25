import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ClothService } from '../cloth.service';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { BuycasualtrouserComponent } from '../buynow/buycasualtrouser/buycasualtrouser.component';

@Component({
  selector: 'app-casual-trousers',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterModule,BuycasualtrouserComponent],
  templateUrl: './casual-trousers.component.html',
  styleUrl: './casual-trousers.component.css'
})
export class CasualTrousersComponent implements OnInit{
  casualtrousers:any
  constructor(private service:ClothService , private router:Router){

  }
  ngOnInit(): void {
    this.service.givecasualtrouser().subscribe(
      (result:any)=>{
        this.casualtrousers=result.data
      }
    )
  }
  buyNow(casualtrouserId:any){
    this.router.navigate(["/buycasualtrouser/"+casualtrouserId])
  }
}
