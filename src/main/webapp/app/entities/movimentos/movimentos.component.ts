import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../../data.service'
import { DoenteHistMovimentosService } from '../doente-hist-movimentos/doente-hist-movimentos.service';
import { HttpResponse } from '@angular/common/http';
import { IDoenteHistMovimentos } from 'app/shared/model/doente-hist-movimentos.model';
import { Subscription } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';
import { DoenteHistMovimentosDeleteDialogComponent } from '../doente-hist-movimentos/doente-hist-movimentos-delete-dialog.component';


@Component({
  selector: 'jhi-movimentos',
  templateUrl: './movimentos.component.html',
  styleUrls: ['./movimentos.component.scss']
})
export class MovimentosComponent implements OnInit, OnDestroy {
  doenteId:number;
  doenteHistMovimentos: IDoenteHistMovimentos[];
  eventSubscriber: Subscription;
  historico:boolean;
  constructor(
    private data: DataService,
    protected eventManager: JhiEventManager,
    protected modalService: NgbModal,
    protected doenteHistMovimentosService: DoenteHistMovimentosService
    ) { }

  ngOnInit() {
    this.data.currentHistorico.subscribe((hi) => {
      this.historico=hi;
    })
    this.data.currentDoente.subscribe((doenteId) =>  {
      this.doenteId = doenteId;
      this.loadAll();
      this.registerChangeInDoenteHistMovimentos();
    });
  }

  loadAll() {
    this.doenteHistMovimentosService.search(this.doenteId).subscribe((res: HttpResponse<IDoenteHistMovimentos[]>) => {
      this.doenteHistMovimentos = res.body;
    });
  }

  ngOnDestroy() {
    this.eventManager.destroy(this.eventSubscriber);
  }

  trackId(index: number, item: IDoenteHistMovimentos) {
    return item.id;
  }

  registerChangeInDoenteHistMovimentos() {
    this.eventSubscriber = this.eventManager.subscribe('doenteHistMovimentosListModification', () => this.loadAll());
  }

  delete(doenteHistMovimentos: IDoenteHistMovimentos) {
    const modalRef = this.modalService.open(DoenteHistMovimentosDeleteDialogComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.doenteHistMovimentos = doenteHistMovimentos;
  }

}
