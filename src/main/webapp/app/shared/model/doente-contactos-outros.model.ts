import { IDoenteContactos } from 'app/shared/model/doente-contactos.model';

export interface IDoenteContactosOutros {
  id?: number;
  nome?: string;
  parentesco?: string;
  coabita?: boolean;
  telef?: number;
  ocupacao?: string;
  obs?: string;
  preferencial?: boolean;
  doenteContactos?: IDoenteContactos;
}

export class DoenteContactosOutros implements IDoenteContactosOutros {
  constructor(
    public id?: number,
    public nome?: string,
    public parentesco?: string,
    public coabita?: boolean,
    public telef?: number,
    public ocupacao?: string,
    public obs?: string,
    public preferencial?: boolean,
    public doenteContactos?: IDoenteContactos
  ) {
    this.coabita = this.coabita || false;
    this.preferencial = this.preferencial || false;
  }
}
