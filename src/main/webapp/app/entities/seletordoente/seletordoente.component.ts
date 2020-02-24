import { Component, OnInit, Input } from '@angular/core';
import { ISubSistemas } from '../../shared/model/sub-sistemas.model';
import { SubSistemasService } from '../sub-sistemas/sub-sistemas.service';
import { HttpResponse } from '@angular/common/http';
import { ITurnos } from '../../shared/model/turnos.model';
import { TurnosService } from '../../entities/turnos/turnos.service';
import { IDoente } from '../../shared/model/doente.model';
import { DoenteService } from '../doente/doente.service';
import { IDoenteIdentidade } from '../../shared/model/doente-identidade.model';
import { DoenteIdentidadeService } from '../doente-identidade/doente-identidade.service';
import { DataService } from '../../data.service'
@Component({
  selector: 'jhi-seletordoente',
  templateUrl: './seletordoente.component.html',
  styleUrls: ['./seletordoente.component.scss']
})
export class SeletordoenteComponent implements OnInit {
  subSistemas: ISubSistemas[];
  turnos: ITurnos[];
  doentes: IDoente[];
  doenteIdentidades: IDoenteIdentidade[] = [];
  situacao ="" ;
  sit= "";
  sub ="";
  turno ="";
  doenteId:number;
  selectDoente:boolean;

// PASSAR SUBSISTEMA e turno DE NOME PARA ID

  constructor(
    private data: DataService,
    protected subSistemasService: SubSistemasService,
    protected turnosService: TurnosService,
    protected doenteService: DoenteService,
    protected doenteIdentidadeService: DoenteIdentidadeService
  ) { }

  loadAllSub() {
    this.subSistemasService.query().subscribe((res: HttpResponse<ISubSistemas[]>) => {
      this.subSistemas = res.body;
    });
  }

  loadAllTu() {
    this.turnosService.query().subscribe((res: HttpResponse<ITurnos[]>) => {
      this.turnos = res.body;
    });
  }

  loadAllDo() {
    this.doenteService.query().subscribe((res: HttpResponse<IDoente[]>) => {
      this.doentes = res.body;
      this.loadAllDoId();
    });
  }

  loadDo(sit: any, sub: any, turno: any) {
   this.turnos.forEach(t => {
     if(turno === t.nome){
       turno = t.id;
     }
   })
   this.subSistemas.forEach(subSistema => {
      if(subSistema.gidNome === sub){
        sub = subSistema.id;
      }
    });
    this.doenteService.search(sit, sub, turno).subscribe((res: HttpResponse<IDoente[] >) => {
      console.log("Search")
      this.doentes = res.body;
      this.loadAllDoId();
    })
  }

  loadAllDoId () {
    this.doenteIdentidades=[];
    console.log(this.doentes);
    this.doentes.forEach(doente => {
      this.doenteIdentidadeService.search(doente.id).subscribe((resp: HttpResponse<IDoenteIdentidade>) => {
        console.log("OVER HERE")
        console.log(resp.body);
        this.doenteIdentidades.push(resp.body);
        console.log(this.doenteIdentidades);
      });
    });
  }

  ngOnInit() {
    this.data.currentSelect.subscribe(selectDoente => this.selectDoente = selectDoente)
    this.data.currentDoente.subscribe(doenteId => this.doenteId = doenteId)
    this.loadAllSub();
    this.loadAllTu();
    this.loadAllDo();
  }

  changeSelect(select:boolean){
    this.data.changeSelect(select)
  }

  newDoente(){
    this.data.changeDoente(3)
  }

  logar(did: IDoenteIdentidade){
    this.data.changeDoente(did.doente.id)
    this.selectDoente=false
  }

}
