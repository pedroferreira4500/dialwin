import { Component, OnInit } from '@angular/core';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { JhiAlertService } from 'ng-jhipster';
import { IDoenteContactosOutros, DoenteContactosOutros } from 'app/shared/model/doente-contactos-outros.model';
import { DoenteContactosOutrosService } from './doente-contactos-outros.service';
import { IDoenteContactos } from 'app/shared/model/doente-contactos.model';
import { DoenteContactosService } from 'app/entities/doente-contactos/doente-contactos.service';

@Component({
  selector: 'jhi-doente-contactos-outros-update',
  templateUrl: './doente-contactos-outros-update.component.html'
})
export class DoenteContactosOutrosUpdateComponent implements OnInit {
  isSaving: boolean;

  doentecontactos: IDoenteContactos[];

  editForm = this.fb.group({
    id: [],
    nome: [],
    parentesco: [],
    coabita: [],
    telef: [],
    ocupacao: [],
    obs: [],
    preferencial: []
  });

  constructor(
    protected jhiAlertService: JhiAlertService,
    protected doenteContactosOutrosService: DoenteContactosOutrosService,
    protected doenteContactosService: DoenteContactosService,
    protected activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.isSaving = false;
    this.activatedRoute.data.subscribe(({ doenteContactosOutros }) => {
      this.updateForm(doenteContactosOutros);
    });
    this.doenteContactosService
      .query()
      .subscribe(
        (res: HttpResponse<IDoenteContactos[]>) => (this.doentecontactos = res.body),
        (res: HttpErrorResponse) => this.onError(res.message)
      );
  }

  updateForm(doenteContactosOutros: IDoenteContactosOutros) {
    this.editForm.patchValue({
      id: doenteContactosOutros.id,
      nome: doenteContactosOutros.nome,
      parentesco: doenteContactosOutros.parentesco,
      coabita: doenteContactosOutros.coabita,
      telef: doenteContactosOutros.telef,
      ocupacao: doenteContactosOutros.ocupacao,
      obs: doenteContactosOutros.obs,
      preferencial: doenteContactosOutros.preferencial
    });
  }

  previousState() {
    window.history.back();
  }

  save() {
    this.isSaving = true;
    const doenteContactosOutros = this.createFromForm();
    if (doenteContactosOutros.id !== undefined) {
      this.subscribeToSaveResponse(this.doenteContactosOutrosService.update(doenteContactosOutros));
    } else {
      this.subscribeToSaveResponse(this.doenteContactosOutrosService.create(doenteContactosOutros));
    }
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
      preferencial: this.editForm.get(['preferencial']).value
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IDoenteContactosOutros>>) {
    result.subscribe(() => this.onSaveSuccess(), () => this.onSaveError());
  }

  protected onSaveSuccess() {
    this.isSaving = false;
    this.previousState();
  }

  protected onSaveError() {
    this.isSaving = false;
  }
  protected onError(errorMessage: string) {
    this.jhiAlertService.error(errorMessage, null, null);
  }

  trackDoenteContactosById(index: number, item: IDoenteContactos) {
    return item.id;
  }
}
