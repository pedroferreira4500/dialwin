import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service'

@Component({
  selector: 'jhi-demografia',
  templateUrl: './demografia.component.html',
  styleUrls: ['./demografia.component.scss']
})
export class DemografiaComponent implements OnInit {

  doenteId: number;
  selectDoente: boolean;
  constructor(private data: DataService) { 
  }

  changeSelect(select:boolean){
    this.data.changeSelect(select)
  }


  ngOnInit() {
    this.data.currentDoente.subscribe(doenteId => this.doenteId = doenteId)
    this.data.currentSelect.subscribe(selectDoente => this.selectDoente = selectDoente)
  }

}
