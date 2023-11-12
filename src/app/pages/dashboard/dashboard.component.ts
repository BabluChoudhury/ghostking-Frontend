import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
name="Bhawani Sankar Choudhury"
msg=0
service=0
cancel=0
  constructor(private router:Router,private navComp:NavbarComponent) { }
  logOut(){
    this.navComp.isLogin=false;
    this.router.navigateByUrl('')
  }
  ngOnInit(): void {
    if(!this.navComp.isLogin){
      this.router.navigateByUrl('login');
    }
  }

}
