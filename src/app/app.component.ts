import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  apiResponse: Array<any> = []; 
  coPayCount: number = 0;
  bvCount: number = 0;
  paCount: number = 0;
  papCount: number = 0;
  prCount: number = 0;
  bv: string;
  p: number = 1;
  collection: any[];
  constructor(private appService: AppService) {}
  ngOnInit() {
    this.appService.getMockData().subscribe((response: any) => {
      this.apiResponse = response.json();
      for (let i = 0; i < this.apiResponse.length; i++) {
      if (this.apiResponse[i].service === 'CoPay') {
        this.coPayCount++;
       }
       else if (this.apiResponse[i].service === 'PAP') {
        this.papCount++;
       }
       else if (this.apiResponse[i].service === 'PA') {
        this.paCount++;
       }
       else if (this.apiResponse[i].service === 'BV') {
        this.bvCount++;
       }
       else
      {
        this.prCount++;
       }
    } 
    });

  }
}