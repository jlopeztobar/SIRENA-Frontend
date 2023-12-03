import { ShareSelectItemService } from './../../services/shareSelectItem/share-select-item.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css'],
})
export class DropdownComponent {
  vShow: boolean = false;
  vText: string = '';
  constructor(private ShareSelectItemService: ShareSelectItemService) {}
  showDropDown() {
    this.vShow = !this.vShow;
  }
  selectItem(event: any) {
    this.vText = event.target.textContent;
    this.ShareSelectItemService.updateElement(this.vText);
    this.showDropDown();
  }
}
