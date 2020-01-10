import { IDoenteIdentidade } from 'app/shared/model/doente-identidade.model';
import { IDoenteContactos } from 'app/shared/model/doente-contactos.model';
import { IDoenteSocioFamiliar } from 'app/shared/model/doente-socio-familiar.model';
import { IHorarioDoente } from 'app/shared/model/horario-doente.model';
import { IDoenteDiagnosticoSocial } from 'app/shared/model/doente-diagnostico-social.model';
import { IDoenteRegistosIntervencoes } from 'app/shared/model/doente-registos-intervencoes.model';
import { IDoenteHistMovimentos } from 'app/shared/model/doente-hist-movimentos.model';
import { ITurnos } from 'app/shared/model/turnos.model';
import { Situacao } from 'app/shared/model/enumerations/situacao.model';

export interface IDoente {
  id?: number;
  situacao?: Situacao;
  doenteIdentidade?: IDoenteIdentidade;
  doenteContactos?: IDoenteContactos;
  doenteSocioFamiliar?: IDoenteSocioFamiliar;
  horarioDoente?: IHorarioDoente;
  doenteDiagnosticoSocial?: IDoenteDiagnosticoSocial;
  doenteRegistosIntervencoes?: IDoenteRegistosIntervencoes;
  doenteHistMovimentos?: IDoenteHistMovimentos;
  turnos?: ITurnos;
}

export class Doente implements IDoente {
  constructor(
    public id?: number,
    public situacao?: Situacao,
    public doenteIdentidade?: IDoenteIdentidade,
    public doenteContactos?: IDoenteContactos,
    public doenteSocioFamiliar?: IDoenteSocioFamiliar,
    public horarioDoente?: IHorarioDoente,
    public doenteDiagnosticoSocial?: IDoenteDiagnosticoSocial,
    public doenteRegistosIntervencoes?: IDoenteRegistosIntervencoes,
    public doenteHistMovimentos?: IDoenteHistMovimentos,
    public turnos?: ITurnos
  ) {}
}
