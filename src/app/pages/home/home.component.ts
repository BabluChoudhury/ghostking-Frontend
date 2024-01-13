import { Component, OnInit } from '@angular/core';
import Typewriter from 't-writer.js';
import {faFacebookF ,faLinkedinIn,faInstagram,faTelegramPlane} from '@fortawesome/free-brands-svg-icons'
import {} from '@fortawesome/free-solid-svg-icons'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 fasqure=faFacebookF
 faLinkedinIn=faLinkedinIn
 faInstagramSquare=faInstagram
 faTelegramPlane=faTelegramPlane
  constructor() { }

  ngOnInit(): void {

    const target = document.querySelector('.tw')
    const target2 = document.querySelector('.tw2')

    const writer1 = new Typewriter(target, {
      typeSpeed: 60
    })

    const writer2 = new Typewriter(target2, {
      typeSpeed: 60
    })

    writer1
      .changeTypeColor('blue')
      .type('Welcome to My Website')
      .rest(500)
      .changeOps({ deleteSpeed: 80 })
      .remove(21)
      .changeTypeColor('black')
      .type("I'm Bhawani Sankar Choudhury")
      .rest(500)
      .remove(24)
      .removeCursor()
      .then(writer2.start.bind(writer2))
      .start()

    writer2
      .changeTypeColor('green')
      .type('a Web Developer')
      .rest(500)
      .changeOps({ deleteSpeed: 20 })
      .clear()
      .removeCursor()
      .then(writer1.start.bind(writer1))


  }

}
