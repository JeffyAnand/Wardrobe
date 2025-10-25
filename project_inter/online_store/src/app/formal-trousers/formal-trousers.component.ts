import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ClothService } from '../cloth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formal-trousers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './formal-trousers.component.html',
  styleUrl: './formal-trousers.component.css'
})
export class FormalTrousersComponent implements OnInit{
  formaltrousers:any;
  constructor(private service: ClothService,private router:Router){

  }
  ngOnInit(): void {
    this.service.giveformaltrouser().subscribe(
      (result:any)=>{
        this.formaltrousers=result.data;
      }
    )
  }

  buyNow(formaltrouserId:any){
    this.router.navigate(["/buyformaltrouser/"+formaltrouserId])
  }
}
