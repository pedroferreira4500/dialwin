import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service'
import { IDoente } from 'app/shared/model/doente.model';
import { FormBuilder, Validators } from '@angular/forms';
import { JhiAlertService } from 'ng-jhipster';
import { DoenteContactosOutrosService } from '../doente-contactos-outros/doente-contactos-outros.service';
import { DoenteService } from 'app/entities/doente/doente.service';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { IDoenteContactosOutros, DoenteContactosOutros } from 'app/shared/model/doente-contactos-outros.model';
import { Observable } from 'rxjs';


@Component({
  selector: 'jhi-newcontacto',
  templateUrl: './newcontacto.component.html',
  styleUrls: ['./newcontacto.component.scss']
})
export class NewcontactoComponent implements OnInit {
  contactos:boolean;
  newContacto:boolean;
  isSaving: boolean;
  doenteId:number;
  doente:IDoente;
  changedoenteupdate:boolean;


  editForm = this.fb.group({
    id: [],
    nome: [],
    parentesco: [],
    coabita: [],
    telef: [],
    ocupacao: [],
    obs: [],
    preferencial: [],
    doente: []
  });

  constructor(private data: DataService,
    protected jhiAlertService: JhiAlertService,
    protected doenteContactosOutrosService: DoenteContactosOutrosService,
    protected doenteService: DoenteService,
    protected activatedRoute: ActivatedRoute,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.data.currentnewcontacto.subscribe((cnc) => {
      this.newContacto = cnc;
    })
    
    this.data.currentDoente.subscribe((doent) => {
      this.doenteId = doent;
      this.doenteService.find(this.doenteId).subscribe((doe) => {
        this.doente = doe.body;
      })
    })
    this.data.currentContactos.subscribe((ct) => {
      this.contactos= ct;
    });
    this.isSaving = false;
  }




  save() {
    this.isSaving = true;
    const doenteContactosOutros = this.createFromForm();
      this.subscribeToSaveResponse(this.doenteContactosOutrosService.create(doenteContactosOutros));
      this.data.changenewcontacto(false);
  }

  private createFromForm(): IDoenteContactosOutros {
    return {
      ...new DoenteContactosOutros(),
      id: this.editForm.get(['id']).value,
      nome: this.editForm.get(['nome']).value,
      parentesco: this.editForm.get(['parentesco']).value,
      coabita: this.editForm.get(['coabita']).value,
      telef: this.editForm.get(['telef']).value,
      ocupacao: this.editForm.get(['ocupacao']).value,
      obs: this.editForm.get(['obs']).value,
      preferencial: this.editForm.get(['preferencial']).value,
      doente: this.doente
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IDoenteContactosOutros>>) {
    result.subscribe(() => this.onSaveSuccess(), () => this.onSaveError());
  }

  protected onSaveSuccess() {
    this.isSaving = false;
  }

  protected onSaveError() {
    this.isSaving = false;
  }
  protected onError(errorMessage: string) {
    this.jhiAlertService.error(errorMessage, null, null);
  }

  trackDoenteById(index: number, item: IDoente) {
    return item.id;
  }
}
