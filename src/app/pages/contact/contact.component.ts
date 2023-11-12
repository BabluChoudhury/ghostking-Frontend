import { Component, OnInit } from '@angular/core';
import { GhostkingDataService } from 'src/app/services/ghostking-data.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private ghostData:GhostkingDataService) { }
   sendMsg(data:any){
    this.ghostData.sendMessage(data).subscribe((result)=>{
      alert("Message Send");
      console.log(result);
    })
   }
  ngOnInit(): void {
  }

}
