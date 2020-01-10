import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'vitalidade',
        loadChildren: () => import('./vitalidade/vitalidade.module').then(m => m.DwinVitalidadeModule)
      },
      {
        path: 'aces',
        loadChildren: () => import('./aces/aces.module').then(m => m.DwinACESModule)
      },
      {
        path: 'doente',
        loadChildren: () => import('./doente/doente.module').then(m => m.DwinDoenteModule)
      },
      {
        path: 'doente-identidade',
        loadChildren: () => import('./doente-identidade/doente-identidade.module').then(m => m.DwinDoenteIdentidadeModule)
      },
      {
        path: 'pais',
        loadChildren: () => import('./pais/pais.module').then(m => m.DwinPaisModule)
      },
      {
        path: 'doente-contactos',
        loadChildren: () => import('./doente-contactos/doente-contactos.module').then(m => m.DwinDoenteContactosModule)
      },
      {
        path: 'doente-contactos-outros',
        loadChildren: () => import('./doente-contactos-outros/doente-contactos-outros.module').then(m => m.DwinDoenteContactosOutrosModule)
      },
      {
        path: 'sit-prof',
        loadChildren: () => import('./sit-prof/sit-prof.module').then(m => m.DwinSitProfModule)
      },
      {
        path: 'profissao',
        loadChildren: () => import('./profissao/profissao.module').then(m => m.DwinProfissaoModule)
      },
      {
        path: 'doente-socio-familiar',
        loadChildren: () => import('./doente-socio-familiar/doente-socio-familiar.module').then(m => m.DwinDoenteSocioFamiliarModule)
      },
      {
        path: 'doente-diagnostico-social',
        loadChildren: () =>
          import('./doente-diagnostico-social/doente-diagnostico-social.module').then(m => m.DwinDoenteDiagnosticoSocialModule)
      },
      {
        path: 'doente-registos-intervencoes',
        loadChildren: () =>
          import('./doente-registos-intervencoes/doente-registos-intervencoes.module').then(m => m.DwinDoenteRegistosIntervencoesModule)
      },
      {
        path: 'doente-hist-movimentos',
        loadChildren: () => import('./doente-hist-movimentos/doente-hist-movimentos.module').then(m => m.DwinDoenteHistMovimentosModule)
      },
      {
        path: 'horario-doente',
        loadChildren: () => import('./horario-doente/horario-doente.module').then(m => m.DwinHorarioDoenteModule)
      },
      {
        path: 'sub-sistemas',
        loadChildren: () => import('./sub-sistemas/sub-sistemas.module').then(m => m.DwinSubSistemasModule)
      },
      {
        path: 'sub-sis-grupo',
        loadChildren: () => import('./sub-sis-grupo/sub-sis-grupo.module').then(m => m.DwinSubSisGrupoModule)
      },
      {
        path: 'turnos',
        loadChildren: () => import('./turnos/turnos.module').then(m => m.DwinTurnosModule)
      },
      {
        path: 'centro-saude',
        loadChildren: () => import('./centro-saude/centro-saude.module').then(m => m.DwinCentroSaudeModule)
      },
      {
        path: 'hosp-ref',
        loadChildren: () => import('./hosp-ref/hosp-ref.module').then(m => m.DwinHospRefModule)
      },
      {
        path: 'habit',
        loadChildren: () => import('./habit/habit.module').then(m => m.DwinHabitModule)
      },
      {
        path: 'grau-conf',
        loadChildren: () => import('./grau-conf/grau-conf.module').then(m => m.DwinGrauConfModule)
      },
      {
        path: 'user-extra',
        loadChildren: () => import('./user-extra/user-extra.module').then(m => m.DwinUserExtraModule)
      },
      {
        path: 'user-profile',
        loadChildren: () => import('./user-profile/user-profile.module').then(m => m.DwinUserProfileModule)
      },
      {
        path: 'user-permissions',
        loadChildren: () => import('./user-permissions/user-permissions.module').then(m => m.DwinUserPermissionsModule)
      }
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ])
  ]
})
export class DwinEntityModule {}
