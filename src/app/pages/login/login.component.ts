import { Component, OnInit } from '@angular/core';
import { GhostkingDataService } from 'src/app/services/ghostking-data.service';
import {Router} from '@angular/router'
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private ghostData:GhostkingDataService, private router:Router,private navComponent:NavbarComponent) { }

  ngOnInit(): void {

  }
  createUser(data:any){
    this.ghostData.signupUser(data).subscribe((result:any)=>{
      this.navComponent.isLogin=true;
      this.router.navigateByUrl('home')
      if(result.token){
        localStorage.setItem('token',result.token)
      }
    })
  }
  findUser(data:any){
    this.ghostData.loginUser(data).subscribe((result:any)=>{
      this.navComponent.isLogin=true;
      if(result.token){
        localStorage.setItem('token',result.token)
      }
      this.ghostData.getUserData().subscribe((user:any)=>{
        localStorage.setItem('user',user.FullName)
        this.router.navigateByUrl('home')
    })      
    })
  }
}
