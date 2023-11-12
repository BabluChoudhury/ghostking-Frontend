import { Component, OnInit } from '@angular/core';
import {faFacebookF ,faLinkedinIn,faInstagram,faTelegramPlane} from '@fortawesome/free-brands-svg-icons'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  fasqure=faFacebookF
  faLinkedinIn=faLinkedinIn
  faInstagramSquare=faInstagram
  faTelegramPlane=faTelegramPlane
  constructor() { }

  ngOnInit(): void {
  }

}
