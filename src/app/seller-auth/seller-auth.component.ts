import { Component,OnInit } from '@angular/core';
import { signUp } from '../data-type';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent implements OnInit  {
  showLogin=false
  constructor(private seller:SellerService){}
  ngOnInit(): void {
    this.seller.reloadSeller()
  }
  signUp(data:signUp):void{
    console.log(data)
    this.seller.userSignUp(data)
  }
  login(data:signUp):void{
    console.log(data)
  
  }
  openLogin(){
    this.showLogin=true
  }
openSignUp(){
this.showLogin=false
}
}
