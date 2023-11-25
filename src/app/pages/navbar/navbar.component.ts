import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faUser } from '@fortawesome/free-regular-svg-icons'
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  faUser = faUser
  isLogin = false;
  constructor(private router: Router) { }
  logOut() {
    this.isLogin = false;
    this.router.navigateByUrl('')
    localStorage.removeItem('token')
    localStorage.removeItem('user')
  }
  ngOnInit(): void {
    if(localStorage.getItem('token')){
      this.isLogin=true
    }
    else{
      this.isLogin=false
    }
  }

}
