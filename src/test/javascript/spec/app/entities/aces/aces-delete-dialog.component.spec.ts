import { ComponentFixture, TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { of } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';

import { DwinTestModule } from '../../../test.module';
import { ACESDeleteDialogComponent } from 'app/entities/aces/aces-delete-dialog.component';
import { ACESService } from 'app/entities/aces/aces.service';

describe('Component Tests', () => {
  describe('ACES Management Delete Component', () => {
    let comp: ACESDeleteDialogComponent;
    let fixture: ComponentFixture<ACESDeleteDialogComponent>;
    let service: ACESService;
    let mockEventManager: any;
    let mockActiveModal: any;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [DwinTestModule],
        declarations: [ACESDeleteDialogComponent]
      })
        .overrideTemplate(ACESDeleteDialogComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(ACESDeleteDialogComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(ACESService);
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