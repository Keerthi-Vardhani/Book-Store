import { Component,OnInit } from '@angular/core';
import { ProductService } from '../../services/product/product.service';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterOutlet,FormsModule],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {
  userRegister:any={
    "CustId":0,
    "Name":"",
    "Email":"",
    "Password":""
  };
  loginObj:any={
    "Username":"",
    "Password":""
  };
[x: string]: any;
  ProductList:any []=[];
  CategoryList:any []=[];
  CartList:any[]=[];
constructor(private ProductSrv: ProductService,private router:Router){
  this.ProductSrv.cartUpdated$?.subscribe((res:any)=>{
    this.getCartByCustId();
  })
}
ngOnInit():void{
this.getAllProducts();
this.getAllCategory();
this.getCartByCustId();
}
navigateToProducts(id:number){
  this.router.navigate(['/products',id])
}
OnRegister(){
  this.ProductSrv.registerCoustmer(this.userRegister).subscribe((res:any)=>{
    if(res.result){
      alert('Sign Up Success!');
    }else{
      alert(res.message);
    }
  })
}
OnLogin(){
  this.ProductSrv.loginCoustmer(this.loginObj).subscribe((res:any)=>{
    if(res.result){
      alert('Login In Success!');
    }else{
      alert(res.message);
    }
  })
}
removeProductByCartId(cartId:number){
  this.ProductSrv.removeProductByCartId(cartId).subscribe((res:any)=>{
    this.getCartByCustId();
  })
}
getCartByCustId(){
  this.ProductSrv.getCartProductByCustId(379).subscribe((res:any)=>{
    this.CartList=res.data;
  })
}
getAllProducts(){
  this.ProductSrv.getProduct().subscribe((res:any)=>{
    this.ProductList=res.data;
  })
}
getAllCategory(){
  this.ProductSrv.getCategory().subscribe((res:any)=>{
    this.CategoryList=res.data;
  })
}
}
