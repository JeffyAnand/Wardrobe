import { Component } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { ShirtComponent } from './shirt/shirt.component';
import { TshirtComponent } from './tshirt/tshirt.component';
import { FormalTrousersComponent } from './formal-trousers/formal-trousers.component';
import { CasualTrousersComponent } from './casual-trousers/casual-trousers.component';
import { JeansComponent } from './jeans/jeans.component';
import { LogoutComponent } from './logout/logout.component';
import { UserService } from './user.service';
import { CommonModule } from '@angular/common';
import { ContactusComponent } from './contactus/contactus.component';
import { TermsComponent } from './terms/terms.component';
import { PolociesComponent } from './footer1/polocies/polocies.component';
import { OrderpolicyComponent } from './footer1/orderpolicy/orderpolicy.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterOutlet,LoginComponent,ReactiveFormsModule,RouterLink,RouterModule,SignupComponent,HomeComponent,ShirtComponent,TshirtComponent,FormalTrousersComponent,CasualTrousersComponent,JeansComponent,LogoutComponent,ContactusComponent,TermsComponent,PolociesComponent,OrderpolicyComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'online_store';
  constructor(public service: UserService ){}


}
