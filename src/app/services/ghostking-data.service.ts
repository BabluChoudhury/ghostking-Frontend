import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class GhostkingDataService {
  userName:any
  constructor(private http:HttpClient) { }
  signupUser(data:any){
    return this.http.post("http://localhost:3000/signup",data);
  }
  loginUser(data:any){
    return this.http.post("http://localhost:3000/login",data)
  }
  sendMessage(data:any){
    return this.http.post("http://localhost:3000/contact",data)
  }
  sendService(data:any){
    return this.http.post("http://localhost:3000/services",data)
  }
  getUserData(){
    const token=localStorage.getItem('token')
    const headers = new HttpHeaders().set('Authorization', `${token}`);
    return this.http.get("http://localhost:3000/user",{headers})
  }

}
