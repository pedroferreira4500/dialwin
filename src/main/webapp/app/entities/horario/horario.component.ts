import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../../data.service';
import { Subscription } from 'rxjs';
import { IHorarioDoente } from 'app/shared/model/horario-doente.model';
import { HorarioDoenteService } from '../horario-doente/horario-doente.service';
import { JhiEventManager } from 'ng-jhipster';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpResponse } from '@angular/common/http';
import { HorarioDoenteDeleteDialogComponent } from '../horario-doente/horario-doente-delete-dialog.component';


@Component({
  selector: 'jhi-horario',
  templateUrl: './horario.component.html',
  styleUrls: ['./horario.component.scss']
})
export class HorarioComponent implements OnInit, OnDestroy {
  doenteId:number;
  horarioDoentes: IHorarioDoente[];
  eventSubscriber: Subscription;
  horario: boolean;

  constructor(
    private data: DataService,
    protected horarioDoenteService: HorarioDoenteService,
    protected eventManager: JhiEventManager,
    protected modalService: NgbModal
    ) { }


    loadAll() {
      this.horarioDoenteService.search(this.doenteId).subscribe((res: HttpResponse<IHorarioDoente[]>) => {
        this.horarioDoentes = res.body;
      });
    }

  ngOnInit() {
    this.data.currentHorario.subscribe((h) => {
      this.horario=h;
    })
    this.data.currentDoente.subscribe((doenteId) => {
      this.doenteId=doenteId;
      this.loadAll();
    this.registerChangeInHorarioDoentes();
    });
  }

  ngOnDestroy() {
    this.eventManager.destroy(this.eventSubscriber);
  }

  trackId(index: number, item: IHorarioDoente) {
    return item.id;
  }

  registerChangeInHorarioDoentes() {
    this.eventSubscriber = this.eventManager.subscribe('horarioDoenteListModification', () => this.loadAll());
  }

  delete(horarioDoente: IHorarioDoente) {
    this.horarioDoenteService.delete(horarioDoente.id).subscribe(() => {
      this.eventManager.broadcast({
        name: 'horarioDoenteListModification',
        content: 'Deleted an horarioDoente'
      });
  });
}

}
