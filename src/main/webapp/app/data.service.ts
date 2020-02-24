import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  private doenteSource = new BehaviorSubject(1);
  currentDoente = this.doenteSource.asObservable();

  private selectSource = new BehaviorSubject(true);
  currentSelect = this.selectSource.asObservable();
 
  constructor() { }

  changeSelect(select: boolean){
    this.selectSource.next(select)
  }
 
  changeDoente(doenteId: number) {
    this.doenteSource.next(doenteId)
  }
}
