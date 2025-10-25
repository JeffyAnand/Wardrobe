import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { ShirtComponent } from './shirt/shirt.component';
import { TshirtComponent } from './tshirt/tshirt.component';
import { FormalTrousersComponent } from './formal-trousers/formal-trousers.component';
import { CasualTrousersComponent } from './casual-trousers/casual-trousers.component';
import { JeansComponent } from './jeans/jeans.component';
import { BuyshirtComponent } from './buynow/buyshirt/buyshirt.component';
import { BuytshirtComponent } from './buynow/buytshirt/buytshirt.component';
import { BuyformaltrouserComponent } from './buynow/buyformaltrouser/buyformaltrouser.component';
import { BuycasualtrouserComponent } from './buynow/buycasualtrouser/buycasualtrouser.component';
import { BuyjeansComponent } from './buynow/buyjeans/buyjeans.component';
import { LogoutComponent } from './logout/logout.component';
import { ContactusComponent } from './contactus/contactus.component';
import { TermsComponent } from './terms/terms.component';
import { OrderComponent } from './order/order.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { CartComponent } from './cart/cart.component';
import { PolociesComponent } from './footer1/polocies/polocies.component';
import { OrderpolicyComponent } from './footer1/orderpolicy/orderpolicy.component';

export const routes: Routes = [
    {'path':'',component:HomeComponent},
    {'path':'login',component:LoginComponent},
    {'path':'signup',component:SignupComponent},
    {'path':'logout',component:LogoutComponent},
    {'path':'shirt',component:ShirtComponent},
    {'path':'tshirt',component:TshirtComponent},
    {'path':'formaltrouser',component:FormalTrousersComponent},
    {'path':'casualtrouser',component:CasualTrousersComponent},
    {'path':'jeans',component:JeansComponent},
    {'path':'buyshirt/:shirtId',component:BuyshirtComponent},
    {'path':'buytshirt/:tshirtId',component:BuytshirtComponent},
    {'path':'buyformaltrouser/:formaltrouserId',component:BuyformaltrouserComponent},
    {'path':'buycasualtrouser/:casualtrouserId',component:BuycasualtrouserComponent},
    {'path':'buyjeans/:jeansId',component:BuyjeansComponent},
    {'path':'contactus',component:ContactusComponent},
    {'path':'terms',component:TermsComponent},
    {'path':'order',component:OrderComponent},
    {'path':'aboutus',component:AboutusComponent},
    {'path':'cart',component:CartComponent},
    {'path':'policies',component:PolociesComponent},
    {'path':'orderpolicy',component:OrderpolicyComponent}

];

