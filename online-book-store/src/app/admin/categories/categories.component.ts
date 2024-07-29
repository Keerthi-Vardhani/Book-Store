import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product/product.service';
import { Observable, map } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent implements OnInit{
  products$: Observable<any> | undefined;
  isSidePanel: boolean = false;
  categoryObj: categoryObject = new categoryObject();
  isApiCallInProgress: boolean = false;
constructor(private productSrv:ProductService){
  
}
  ngOnInit(): void {
    this.getAllCategory();
  }
getAllCategory(){
  this.products$ = this.productSrv.getCategory().pipe(
    map((item: any) => {
      return item.data;
    })
  );
}
}
export class categoryObject {
  categoryId: number;
  categoryName: string;
  parentCategoryId: number;

  constructor() {
    this.categoryId = 0;
    this.categoryName = '';
    this.parentCategoryId = 0;
  }
}
