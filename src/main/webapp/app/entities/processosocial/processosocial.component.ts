import { Component, OnInit } from '@angular/core';
import { IDoente } from 'app/shared/model/doente.model';
import { FormBuilder, Validators } from '@angular/forms';
import { DoenteService } from 'app/entities/doente/doente.service';
import { IDoenteDiagnosticoSocial, DoenteDiagnosticoSocial } from 'app/shared/model/doente-diagnostico-social.model';
import { JhiAlertService } from 'ng-jhipster';
import { DoenteDiagnosticoSocialService } from '../doente-diagnostico-social/doente-diagnostico-social.service';
import { DataService } from '../../data.service';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IDoenteRegistosIntervencoes } from '../../shared/model/doente-registos-intervencoes.model';
import { Subscription } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';
import { DoenteRegistosIntervencoesService } from '../doente-registos-intervencoes/doente-registos-intervencoes.service';
import { DoenteRegistosIntervencoesDeleteDialogComponent } from '../doente-registos-intervencoes/doente-registos-intervencoes-delete-dialog.component';

@Component({
  selector: 'jhi-processosocial',
  templateUrl: './processosocial.component.html',
  styleUrls: ['./processosocial.component.scss']
})
export class ProcessosocialComponent implements OnInit {
  doenteRegistosIntervencoes: IDoenteRegistosIntervencoes[];
  eventSubscriber: Subscription;
  doenteId:number;
  perfilSocial:boolean;

  isSaving: boolean;
  doentes: IDoente[];

  editForm = this.fb.group({
    id: [],
    descr: [],
    doente: []
  });

  constructor(protected jhiAlertService: JhiAlertService,
    protected doenteRegistosIntervencoesService: DoenteRegistosIntervencoesService,
    protected eventManager: JhiEventManager,
    protected modalService: NgbModal,
    protected doenteDiagnosticoSocialService: DoenteDiagnosticoSocialService,
    protected doenteService: DoenteService,
    private fb: FormBuilder,
    private data: DataService
    ) { }

    loadAll() {
      this.doenteRegistosIntervencoesService.search(this.doenteId).subscribe((res: HttpResponse<IDoenteRegistosIntervencoes[]>) => {
        this.doenteRegistosIntervencoes = res.body;
      });
    }

  ngOnInit() {
    this.isSaving=false;
    this.data.currentPerfilSocial.subscribe((ps) =>{
      this.perfilSocial = ps;
    })
    this.data.currentDoente.subscribe((doenteId) => {
      this.doenteId=doenteId;
      this.loadAll();
    this.registerChangeInDoenteRegistosIntervencoes();
      this.doenteDiagnosticoSocialService.search(this.doenteId).subscribe((res) => {
        this.updateForm(res.body)
      })
    })
    this.doenteService
      .query()
      .subscribe((res: HttpResponse<IDoente[]>) => (this.doentes = res.body), (res: HttpErrorResponse) => this.onError(res.message));
  }

  ngOnDestroy() {
    this.eventManager.destroy(this.eventSubscriber);
  }

  trackId(index: number, item: IDoenteRegistosIntervencoes) {
    return item.id;
  }

  registerChangeInDoenteRegistosIntervencoes() {
    this.eventSubscriber = this.eventManager.subscribe('doenteRegistosIntervencoesListModification', () => this.loadAll());
  }

  delete(doenteRegistosIntervencoes: IDoenteRegistosIntervencoes) {
    const modalRef = this.modalService.open(DoenteRegistosIntervencoesDeleteDialogComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.doenteRegistosIntervencoes = doenteRegistosIntervencoes;
  }

  updateForm(doenteDiagnosticoSocial: IDoenteDiagnosticoSocial) {
    this.editForm.patchValue({
      id: doenteDiagnosticoSocial.id,
      descr: doenteDiagnosticoSocial.descr,
      doente: doenteDiagnosticoSocial.doente
    });
  }

  previousState() {
    window.history.back();
  }

  save() {
    this.isSaving = true;
    const doenteDiagnosticoSocial = this.createFromForm();
    if (doenteDiagnosticoSocial.id !== undefined) {
      this.subscribeToSaveResponse(this.doenteDiagnosticoSocialService.update(doenteDiagnosticoSocial));
    } else {
      this.subscribeToSaveResponse(this.doenteDiagnosticoSocialService.create(doenteDiagnosticoSocial));
    }
  }

  private createFromForm(): IDoenteDiagnosticoSocial {
    return {
      ...new DoenteDiagnosticoSocial(),
      id: this.editForm.get(['id']).value,
      descr: this.editForm.get(['descr']).value,
      doente: this.editForm.get(['doente']).value
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IDoenteDiagnosticoSocial>>) {
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

  trackDoenteById(index: number, item: IDoente) {
    return item.id;
  }
}
