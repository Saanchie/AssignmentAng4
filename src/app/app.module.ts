import { ItemDetailComponent } from './item-detail.component';
import { AccordComponent } from './accord.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AccordionModule} from "ng2-accordion";
import { NgxPaginationModule } from 'ngx-pagination';

import { AppComponent } from './app.component';
import { AppService } from "./app.service";

@NgModule({
  declarations: [
    AppComponent,
    ItemDetailComponent,
    AccordComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AccordionModule,
    NgxPaginationModule
  ],
  providers: [
    AppService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
