package dw.dw.dw.domain;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;

import java.io.Serializable;

import dw.dw.dw.domain.enumeration.Situacao;

/**
 * A Doente.
 */
@Entity
@Table(name = "doente")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class Doente implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Enumerated(EnumType.STRING)
    @Column(name = "situacao")
    private Situacao situacao;

    @OneToOne(mappedBy = "doente")
    @JsonIgnore
    private DoenteIdentidade doenteIdentidade;

    @OneToOne(mappedBy = "doente")
    @JsonIgnore
    private DoenteContactos doenteContactos;

    @OneToOne(mappedBy = "doente")
    @JsonIgnore
    private DoenteSocioFamiliar doenteSocioFamiliar;

    @OneToOne(mappedBy = "doente")
    @JsonIgnore
    private HorarioDoente horarioDoente;

    @OneToOne(mappedBy = "doente")
    @JsonIgnore
    private DoenteDiagnosticoSocial doenteDiagnosticoSocial;

    @OneToOne(mappedBy = "doente")
    @JsonIgnore
    private DoenteRegistosIntervencoes doenteRegistosIntervencoes;

    @OneToOne(mappedBy = "doente")
    @JsonIgnore
    private DoenteHistMovimentos doenteHistMovimentos;

    @ManyToOne
    @JsonIgnoreProperties("doentes")
    private Turnos turnos;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Situacao getSituacao() {
        return situacao;
    }

    public Doente situacao(Situacao situacao) {
        this.situacao = situacao;
        return this;
    }

    public void setSituacao(Situacao situacao) {
        this.situacao = situacao;
    }

    public DoenteIdentidade getDoenteIdentidade() {
        return doenteIdentidade;
    }

    public Doente doenteIdentidade(DoenteIdentidade doenteIdentidade) {
        this.doenteIdentidade = doenteIdentidade;
        return this;
    }

    public void setDoenteIdentidade(DoenteIdentidade doenteIdentidade) {
        this.doenteIdentidade = doenteIdentidade;
    }

    public DoenteContactos getDoenteContactos() {
        return doenteContactos;
    }

    public Doente doenteContactos(DoenteContactos doenteContactos) {
        this.doenteContactos = doenteContactos;
        return this;
    }

    public void setDoenteContactos(DoenteContactos doenteContactos) {
        this.doenteContactos = doenteContactos;
    }

    public DoenteSocioFamiliar getDoenteSocioFamiliar() {
        return doenteSocioFamiliar;
    }

    public Doente doenteSocioFamiliar(DoenteSocioFamiliar doenteSocioFamiliar) {
        this.doenteSocioFamiliar = doenteSocioFamiliar;
        return this;
    }

    public void setDoenteSocioFamiliar(DoenteSocioFamiliar doenteSocioFamiliar) {
        this.doenteSocioFamiliar = doenteSocioFamiliar;
    }

    public HorarioDoente getHorarioDoente() {
        return horarioDoente;
    }

    public Doente horarioDoente(HorarioDoente horarioDoente) {
        this.horarioDoente = horarioDoente;
        return this;
    }

    public void setHorarioDoente(HorarioDoente horarioDoente) {
        this.horarioDoente = horarioDoente;
    }

    public DoenteDiagnosticoSocial getDoenteDiagnosticoSocial() {
        return doenteDiagnosticoSocial;
    }

    public Doente doenteDiagnosticoSocial(DoenteDiagnosticoSocial doenteDiagnosticoSocial) {
        this.doenteDiagnosticoSocial = doenteDiagnosticoSocial;
        return this;
    }

    public void setDoenteDiagnosticoSocial(DoenteDiagnosticoSocial doenteDiagnosticoSocial) {
        this.doenteDiagnosticoSocial = doenteDiagnosticoSocial;
    }

    public DoenteRegistosIntervencoes getDoenteRegistosIntervencoes() {
        return doenteRegistosIntervencoes;
    }

    public Doente doenteRegistosIntervencoes(DoenteRegistosIntervencoes doenteRegistosIntervencoes) {
        this.doenteRegistosIntervencoes = doenteRegistosIntervencoes;
        return this;
    }

    public void setDoenteRegistosIntervencoes(DoenteRegistosIntervencoes doenteRegistosIntervencoes) {
        this.doenteRegistosIntervencoes = doenteRegistosIntervencoes;
    }

    public DoenteHistMovimentos getDoenteHistMovimentos() {
        return doenteHistMovimentos;
    }

    public Doente doenteHistMovimentos(DoenteHistMovimentos doenteHistMovimentos) {
        this.doenteHistMovimentos = doenteHistMovimentos;
        return this;
    }

    public void setDoenteHistMovimentos(DoenteHistMovimentos doenteHistMovimentos) {
        this.doenteHistMovimentos = doenteHistMovimentos;
    }

    public Turnos getTurnos() {
        return turnos;
    }

    public Doente turnos(Turnos turnos) {
        this.turnos = turnos;
        return this;
    }

    public void setTurnos(Turnos turnos) {
        this.turnos = turnos;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Doente)) {
            return false;
        }
        return id != null && id.equals(((Doente) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    @Override
    public String toString() {
        return "Doente{" +
            "id=" + getId() +
            ", situacao='" + getSituacao() + "'" +
            "}";
    }
}
