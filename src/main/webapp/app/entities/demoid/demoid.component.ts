import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service'

@Component({
  selector: 'jhi-demoid',
  templateUrl: './demoid.component.html',
  styleUrls: ['./demoid.component.scss']
})
export class DemoidComponent implements OnInit {

  doenteId:number;
  nome:string;
  dataNascimento:string;
  altura:number;
  sexo:string;
  morada:string;
  telefone:number;
  telemovel:number;
  codigoPostal:string;
  freguesia:string;
  nif:number;
  docIdentif:number;
  subSis:string;
  numBenef:number;
  centroSaude:string;
  numUtente:number;
  aces:number;
  numGid:number;
  medicoFamilia:string;
  hospRef:string;
  numProc:number;
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.currentDoente.subscribe(doenteId => this.doenteId = doenteId)
  }



}
