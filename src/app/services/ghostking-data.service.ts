import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class GhostkingDataService {
  userName:any
  constructor(private http:HttpClient) { }
  signupUser(data:any){
    return this.http.post("https://good-pumps-goat.cyclic.app/signup",data);
  }
  loginUser(data:any){
    return this.http.post("https://good-pumps-goat.cyclic.app/login",data)
  }
  sendMessage(data:any){
    return this.http.post("https://good-pumps-goat.cyclic.app/contact",data)
  }
  sendService(data:any){
    return this.http.post("https://good-pumps-goat.cyclic.app/services",data)
  }
  getUserData(){
    const token=localStorage.getItem('token')
    const headers = new HttpHeaders().set('Authorization', `${token}`);
    return this.http.get("https://good-pumps-goat.cyclic.app/user",{headers})
  }

}
