import { Component, Input } from '@angular/core';

@Component({
  selector: 'item-detail',
  templateUrl: './item-detail.component.html'
})
export class ItemDetailComponent {
    @Input() itemDetails: any;
}