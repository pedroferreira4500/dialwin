import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service'
import { DoenteIdentidadeService } from '../doente-identidade/doente-identidade.service' 

@Component({
  selector: 'jhi-demografia',
  templateUrl: './demografia.component.html',
  styleUrls: ['./demografia.component.scss']
})
export class DemografiaComponent implements OnInit {

  doenteId: number;
  doenteNome: string;
  selectDoente: boolean;
  constructor(private data: DataService,
    protected doIdSer: DoenteIdentidadeService) { 
  }

  changeSelect(select:boolean){
    this.data.changeSelect(select)
  }


  ngOnInit() {
    this.data.currentDoente.subscribe(doenteId => this.doenteId = doenteId
      )
    this.data.currenteDoenteNome.subscribe(doenteNome => this.doenteNome = doenteNome)
    
    this.data.currentSelect.subscribe(selectDoente => this.selectDoente = selectDoente)
  }

}
