import { Component, OnInit } from '@angular/core';
import { IDoente } from 'app/shared/model/doente.model';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../../data.service'
import { DoenteContactosService } from '../doente-contactos/doente-contactos.service'
import { IDoenteContactos, DoenteContactos } from '../../shared/model/doente-contactos.model'
import { DoenteService } from 'app/entities/doente/doente.service';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { JhiAlertService } from 'ng-jhipster';
import { Observable } from 'rxjs';
@Component({
  selector: 'jhi-contactos',
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.scss']
})
export class ContactosComponent implements OnInit {
  isSaving: boolean;
  doenteId:number;
  doentes: IDoente[];

  editForm = this.fb.group({
    id: [],
    transportador: [],
    telefTransp: [],
    doente: []
  });

  constructor(private fb: FormBuilder,
    protected doenteContactosService: DoenteContactosService,
    protected jhiAlertService: JhiAlertService,
    protected doenteService: DoenteService,
    private data: DataService) { }

  ngOnInit() {
    this.isSaving = false;
    this.data.currentDoente.subscribe((doenteId) => {
      this.doenteId=doenteId;
      this.doenteContactosService.search(this.doenteId).subscribe((resp) => {
        this.updateForm(resp.body[0]);
      });
      this.doenteService.query({ filter: 'doentecontactos-is-null' }).subscribe(
        (res: HttpResponse<IDoente[]>) => {
          if (!this.editForm.get('doente').value || !this.editForm.get('doente').value.id) {
            this.doentes = res.body;
          } else {
            this.doenteService
              .find(this.editForm.get('doente').value.id)
              .subscribe(
                (subRes: HttpResponse<IDoente>) => (this.doentes = [subRes.body].concat(res.body)),
                (subRes: HttpErrorResponse) => this.onError(subRes.message)
              );
          }
        },
        (res: HttpErrorResponse) => this.onError(res.message)
      );
    })
  }

  updateForm(doenteContactos: IDoenteContactos) {
    this.editForm.patchValue({
      id: doenteContactos.id,
      transportador: doenteContactos.transportador,
      telefTransp: doenteContactos.telefTransp,
      doente: doenteContactos.doente
    });
  }

  private createFromForm(): IDoenteContactos {
    return {
      ...new DoenteContactos(),
      id: this.editForm.get(['id']).value,
      transportador: this.editForm.get(['transportador']).value,
      telefTransp: this.editForm.get(['telefTransp']).value,
      doente: this.editForm.get(['doente']).value
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IDoenteContactos>>) {
    result.subscribe(() => this.onSaveSuccess(), () => this.onSaveError());
  }

  protected onSaveSuccess() {
    this.isSaving = false;
    this.previousState();
  }

  protected onSaveError() {
    this.isSaving = false;
  }

  previousState() {
    window.history.back();
  }

  save() {
    this.isSaving = true;
    const doenteContactos = this.createFromForm();
    if (doenteContactos.id !== undefined) {
      this.subscribeToSaveResponse(this.doenteContactosService.update(doenteContactos));
    } else {
      this.subscribeToSaveResponse(this.doenteContactosService.create(doenteContactos));
    }
  }

  trackDoenteById(index: number, item: IDoente) {
    return item.id;
  }

  protected onError(errorMessage: string) {
    this.jhiAlertService.error(errorMessage, null, null);
  }

}
