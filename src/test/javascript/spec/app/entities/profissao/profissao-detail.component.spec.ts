import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { DwinTestModule } from '../../../test.module';
import { ProfissaoDetailComponent } from 'app/entities/profissao/profissao-detail.component';
import { Profissao } from 'app/shared/model/profissao.model';

describe('Component Tests', () => {
  describe('Profissao Management Detail Component', () => {
    let comp: ProfissaoDetailComponent;
    let fixture: ComponentFixture<ProfissaoDetailComponent>;
    const route = ({ data: of({ profissao: new Profissao(123) }) } as any) as ActivatedRoute;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [DwinTestModule],
        declarations: [ProfissaoDetailComponent],
        providers: [{ provide: ActivatedRoute, useValue: route }]
      })
        .overrideTemplate(ProfissaoDetailComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(ProfissaoDetailComponent);
      comp = fixture.componentInstance;
    });

    describe('OnInit', () => {
      it('Should call load all on init', () => {
        // GIVEN

        // WHEN
        comp.ngOnInit();

        // THEN
        expect(comp.profissao).toEqual(jasmine.objectContaining({ id: 123 }));
      });
    });
  });
});
