import { CommonModule } from '@angular/common';
import { Component,OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../services/product/product.service';


@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{
productObj:any={
  "productId" :0,
  "productSku":"",
  "productName" :"",
  "productShortName":"",
  "productPrice" :0,
  "categoryId": 0,
  "productDescription":"",
  "deliveryTimeSpan":"",
  "createdDate": new Date(),
  "productImageUrl":"",
  "categoryName":""
};
categoryList:any []=[];
productList:any []=[];
constructor(private productSr:ProductService){

}
  ngOnInit(): void {
    this.getAllProducts();
    this.getAllCategory();
  }
  
  getAllCategory(){
     this.productSr.getCategory().subscribe((res:any)=>{
         this.categoryList=res.data;
     })
  }
  getAllProducts(){
    this.productSr.getProduct().subscribe((res:any)=>{
        this.productList=res.data;
    })
 }
  onSave(){
    this.productSr.saveProduct(this.productObj).subscribe((res:any)=>{
      if(res.result){
        alert("Product Created")
        this.getAllProducts();
      }else{
        alert(res.message)
      }
  })
  }
  onUpdate(){
    this.productSr.updateProduct(this.productObj).subscribe((res:any)=>{
      if(res.result){
        alert("Product Updated!")
        this.getAllProducts();
      }else{
        alert(res.message)
      }
  })
  }
  onDelete(item:any){
    const isDelete=confirm('Are you sure want to delete?');
    if(isDelete){
      this.productSr.deleteProduct(item.productid).subscribe((res:any)=>{
        if(res.result){
          alert("Product Deleted!")
          this.getAllProducts();
        }else{
          alert(res.message)
        }
    })
    }

  }
  onEdit(item:any){
   this.productObj=item;
   this.openSidePanel();
  }
  
isSidePanel:boolean=false;
openSidePanel(){
  this.isSidePanel=true;
}
closeSidePanel(){
  this.isSidePanel=false;
}


}
