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
    if(!this.navComponent.isLogin){
      this.router.navigateByUrl('login')
    }
  }
  createUser(data:any){
    this.ghostData.signupUser(data).subscribe((result)=>{
      console.log(result);
      console.log(data);
    })
  }
  findUser(data:any){
    console.log(data);
    this.ghostData.loginUser(data).subscribe((result)=>{
      console.log(result);
      this.navComponent.isLogin=true;
      this.router.navigateByUrl('home')
    })
  }
}
