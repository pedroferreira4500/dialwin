import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  private doenteSource = new BehaviorSubject(0);
  currentDoente = this.doenteSource.asObservable();

  private selectSource = new BehaviorSubject(true);
  currentSelect = this.selectSource.asObservable();

  private doenteNomeSource = new BehaviorSubject("Selecionar Doente")
  currenteDoenteNome = this.doenteNomeSource.asObservable();

  private identidadeSource = new BehaviorSubject(false);
  currentIdentidade = this.identidadeSource.asObservable();

 
  constructor() { }

  changeIdentidade(id:boolean){
    this.identidadeSource.next(id);
  }

  changeSelect(select: boolean){
    this.selectSource.next(select)
  }
 
  changeDoente(doenteId: number) {
    this.doenteSource.next(doenteId)
  }

  changeDoenteNome(doenteNome: string){
    this.doenteNomeSource.next(doenteNome)
  }


}
