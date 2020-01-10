import { ComponentFixture, TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { of } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';

import { DwinTestModule } from '../../../test.module';
import { VitalidadeDeleteDialogComponent } from 'app/entities/vitalidade/vitalidade-delete-dialog.component';
import { VitalidadeService } from 'app/entities/vitalidade/vitalidade.service';

describe('Component Tests', () => {
  describe('Vitalidade Management Delete Component', () => {
    let comp: VitalidadeDeleteDialogComponent;
    let fixture: ComponentFixture<VitalidadeDeleteDialogComponent>;
    let service: VitalidadeService;
    let mockEventManager: any;
    let mockActiveModal: any;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [DwinTestModule],
        declarations: [VitalidadeDeleteDialogComponent]
      })
        .overrideTemplate(VitalidadeDeleteDialogComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(VitalidadeDeleteDialogComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(VitalidadeService);
      mockEventManager = fixture.debugElement.injector.get(JhiEventManager);
      mockActiveModal = fixture.debugElement.injector.get(NgbActiveModal);
    });

    describe('confirmDelete', () => {
      it('Should call delete service on confirmDelete', inject(
        [],
        fakeAsync(() => {
          // GIVEN
          spyOn(service, 'delete').and.returnValue(of({}));

          // WHEN
          comp.confirmDelete(123);
          tick();

          // THEN
          expect(service.delete).toHaveBeenCalledWith(123);
          expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
          expect(mockEventManager.broadcastSpy).toHaveBeenCalled();
        })
      ));
    });
  });
});