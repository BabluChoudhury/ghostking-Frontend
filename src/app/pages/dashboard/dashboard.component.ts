import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { GhostkingDataService } from 'src/app/services/ghostking-data.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  // userDetails:any=localStorage.getItem('user')
name:any
msg=0
service=0
cancel=0
  constructor(private router:Router,private navComp:NavbarComponent,private userdata:GhostkingDataService) { }
  logOut(){
    this.navComp.isLogin=false;
    this.router.navigateByUrl('')
    localStorage.removeItem('token')
    localStorage.removeItem('user')
  }
  ngOnInit(): void {
    if(!this.navComp.isLogin){
      this.router.navigateByUrl('login');
    }
    // console.log(this.userDetails);
    this.name=localStorage.getItem('user')
    // this.name==this.userDetails
  }
}
