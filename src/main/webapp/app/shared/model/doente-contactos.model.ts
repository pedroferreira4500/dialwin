import { IDoente } from 'app/shared/model/doente.model';
import { IDoenteContactosOutros } from 'app/shared/model/doente-contactos-outros.model';

export interface IDoenteContactos {
  id?: number;
  transportador?: string;
  telefTransp?: number;
  doente?: IDoente;
  doenteContactosOutros?: IDoenteContactosOutros;
}

export class DoenteContactos implements IDoenteContactos {
  constructor(
    public id?: number,
    public transportador?: string,
    public telefTransp?: number,
    public doente?: IDoente,
    public doenteContactosOutros?: IDoenteContactosOutros
  ) {}
}
