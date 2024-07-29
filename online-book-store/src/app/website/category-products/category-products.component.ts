import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category-products.component.html',
  styleUrl: './category-products.component.css'
})
export class CategoryProductsComponent {
  activeCategoryId:number=0;
  products:any[]=[];
constructor(private activatatedRoute:ActivatedRoute,private productSrv:ProductService ){
  this.activatatedRoute.params.subscribe(res=>{
    this.activeCategoryId=res['id'];
    this.loadProducts();
  })
}
loadProducts(){
this.productSrv.getProductByCategory(this.activeCategoryId).subscribe((res:any)=>{
 this.products=res.data;
})
}
}
