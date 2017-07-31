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
  bv: string;
  p: number = 1;
  collection: any[];
  constructor(private appService: AppService) {}
  ngOnInit() {
    this.appService.getMockData().subscribe((response: any) => {
      this.apiResponse = response.json();
    });
  }
}