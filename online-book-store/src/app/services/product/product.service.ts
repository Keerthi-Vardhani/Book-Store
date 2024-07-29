import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constant } from '../constant/constant';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  public cartUpdated$: Subject<boolean> =new Subject();

  constructor(private http:HttpClient) { }

  getCategory(){
    return this.http.get(Constant.API_END_POINT + Constant.METHODS.GET_ALL_CATEGORY);
  }
  getProductByCategory(id :number){
    return this.http.get(Constant.API_END_POINT + Constant.METHODS.GET_ALL_BY_CATEGORY + id);
  }
  getProduct(){
    return this.http.get(Constant.API_END_POINT + Constant.METHODS.GET_ALL_PRODUCTS);
  }
  saveProduct(obj:any){
    return this.http.post(Constant.API_END_POINT + Constant.METHODS.CREATE_PRODUCT,obj);
  }
  updateProduct(obj:any){
    return this.http.post(Constant.API_END_POINT + Constant.METHODS.UPDATE_PRODUCT,obj);
  }
  deleteProduct(id:any){
    return this.http.get(Constant.API_END_POINT + Constant.METHODS.DELETE_PRODUCT + id);
  }
  addToCart(obj:any){
    return this.http.post(Constant.API_END_POINT + Constant.METHODS.ADD_TO_CART,obj);
  }
  getCartProductByCustId(custId :number){
    return this.http.get(Constant.API_END_POINT + Constant.METHODS.GET_CART_BY_CUSTID + custId);
  }
  removeProductByCartId(cartId :number){
    return this.http.get(Constant.API_END_POINT + Constant.METHODS.REMOVE_CART + cartId);
  }
  registerCoustmer(obj:any){
    return this.http.post(Constant.API_END_POINT + Constant.METHODS.REGISTER_CUSTOMER,obj);
  }
  loginCoustmer(obj:any){
    return this.http.post(Constant.API_END_POINT + Constant.METHODS.LOGIN_CUSTOMER,obj);
  }
}
