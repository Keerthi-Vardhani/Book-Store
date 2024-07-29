import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ProductService } from '../../services/product/product.service';

@Component({
  selector: 'app-website-products',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './website-products.component.html',
  styleUrl: './website-products.component.css'
})
export class WebsiteProductsComponent {
  [x: string]: any;
  ProductList:any []=[];
  CategoryList:any []=[];
constructor(private ProductSrv: ProductService,private router:Router){
}
ngOnInit():void{
this.getAllProducts();
this.getAllCategory();
}
addToCart(productId:number){
  const addtocartObj={
    "CartId":0,
    "CustId":0,
    "ProductId":productId,
    "Quantity":0
  };
  this.ProductSrv.addToCart(addtocartObj).subscribe((res:any)=>{
    if(res.result){
      alert('Add to Cart Success!');
      this.ProductSrv.cartUpdated$?.next(true);
    }else{
      alert(res.message);
    }
  })
}
navigateToProducts(id:number){
  this.router.navigate(['/products',id])
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
