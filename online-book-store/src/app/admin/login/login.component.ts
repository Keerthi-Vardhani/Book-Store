import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginObj:any={
     email:'',
     password:''
  };
  constructor(private router:Router){}

  OnLogin(){
    if(this.loginObj.email=="admin@gmail.com" && this.loginObj.password=="admin-login"){
      this.router.navigateByUrl('/products')

    }else{
      alert("Invalid login !")
    }
  }

}
