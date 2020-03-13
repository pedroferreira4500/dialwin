import { Component, OnInit, OnDestroy } from '@angular/core';
import { IDoente } from 'app/shared/model/doente.model';
import { FormBuilder} from '@angular/forms';
import { DataService } from '../../data.service'
import { DoenteContactosService } from '../doente-contactos/doente-contactos.service'
import { IDoenteContactos, DoenteContactos } from '../../shared/model/doente-contactos.model'
import { DoenteService } from 'app/entities/doente/doente.service';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { JhiAlertService } from 'ng-jhipster';
import { Observable } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';
import { IDoenteContactosOutros } from 'app/shared/model/doente-contactos-outros.model';
import { Subscription } from 'rxjs';
import { DoenteContactosOutrosService } from '../doente-contactos-outros/doente-contactos-outros.service'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DoenteContactosOutrosDeleteDialogComponent } from '../doente-contactos-outros/doente-contactos-outros-delete-dialog.component';


@Component({
  selector: 'jhi-contactos',
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.scss']
})
export class ContactosComponent implements OnInit, OnDestroy {
  isSaving: boolean;
  doenteId:number;
  doentes: IDoente[];
  contactos:boolean;
  doenteContactosOutros: IDoenteContactosOutros[];
  eventSubscriber: Subscription;

  editForm = this.fb.group({
    id: [],
    transportador: [],
    telefTransp: [],
    doente: []
  });

  constructor(private fb: FormBuilder,
    protected eventManager: JhiEventManager,
    protected doenteContactosOutrosService: DoenteContactosOutrosService,
    protected doenteContactosService: DoenteContactosService,
    protected jhiAlertService: JhiAlertService,
    protected doenteService: DoenteService,
    protected modalService: NgbModal,
    private data: DataService) { }

  ngOnInit() {
    this.isSaving = false;
    this.data.currentContactos.subscribe((ct) => {
      this.contactos= ct;
    })
    this.data.currentDoente.subscribe((doenteId) => {
      this.doenteId=doenteId;
      this.loadAll();
      this.registerChangeInDoenteContactosOutros();
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

  loadAll() {
      this.doenteContactosOutrosService.search(this.doenteId).subscribe((res: HttpResponse<IDoenteContactosOutros[]>) => {
        this.doenteContactosOutros = res.body;
    })
}

ngOnDestroy() {
  this.eventManager.destroy(this.eventSubscriber);
}

trackId(index: number, item: IDoenteContactosOutros) {
  return item.id;
}

registerChangeInDoenteContactosOutros() {
  this.eventSubscriber = this.eventManager.subscribe('doenteContactosOutrosListModification', () => this.loadAll());
}

delete(doenteContactosOutros: IDoenteContactosOutros) {
  this.doenteContactosOutrosService.delete(doenteContactosOutros.id).subscribe(() => {
    this.eventManager.broadcast({
      name: 'doenteContactosOutrosListModification',
      content: 'Deleted an doenteContactosOutros'
    });
  this.loadAll();
  });
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
