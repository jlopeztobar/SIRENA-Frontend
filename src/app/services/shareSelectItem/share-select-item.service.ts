import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareSelectItemService {
  private elementSource = new BehaviorSubject<string>('');
  elementSelected$ = this.elementSource.asObservable();

  constructor() { }


  updateElement(element: string){
    this.elementSource.next(element);
  }
}
