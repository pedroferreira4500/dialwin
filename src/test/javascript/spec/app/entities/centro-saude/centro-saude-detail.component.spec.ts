import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { DwinTestModule } from '../../../test.module';
import { CentroSaudeDetailComponent } from 'app/entities/centro-saude/centro-saude-detail.component';
import { CentroSaude } from 'app/shared/model/centro-saude.model';

describe('Component Tests', () => {
  describe('CentroSaude Management Detail Component', () => {
    let comp: CentroSaudeDetailComponent;
    let fixture: ComponentFixture<CentroSaudeDetailComponent>;
    const route = ({ data: of({ centroSaude: new CentroSaude(123) }) } as any) as ActivatedRoute;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [DwinTestModule],
        declarations: [CentroSaudeDetailComponent],
        providers: [{ provide: ActivatedRoute, useValue: route }]
      })
        .overrideTemplate(CentroSaudeDetailComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(CentroSaudeDetailComponent);
      comp = fixture.componentInstance;
    });

    describe('OnInit', () => {
      it('Should call load all on init', () => {
        // GIVEN

        // WHEN
        comp.ngOnInit();

        // THEN
        expect(comp.centroSaude).toEqual(jasmine.objectContaining({ id: 123 }));
      });
    });
  });
});
