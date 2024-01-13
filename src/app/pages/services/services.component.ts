import { Component, OnInit } from '@angular/core';
import { GhostkingDataService } from 'src/app/services/ghostking-data.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor(private ghostData:GhostkingDataService) { }
  createService(data:any){
    this.ghostData.sendService(data).subscribe((result)=>{
      alert("Service Requested");
      console.log(result);
    })
  }
  ngOnInit(): void {
  }

}
