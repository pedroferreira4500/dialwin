package dw.dw.dw.service;

import dw.dw.dw.domain.Doente;
import dw.dw.dw.domain.DoenteIdentidade;
import dw.dw.dw.domain.SubSistemas;
import dw.dw.dw.domain.Turnos;
import dw.dw.dw.domain.enumeration.Situacao;
import dw.dw.dw.repository.DoenteRepository;
import dw.dw.dw.web.rest.DoenteIdentidadeResource;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
public class DoenteService {

    @Autowired
    private DoenteRepository doenteRepository;

    @Autowired
    private DoenteIdentidadeResource doenteIdentidadeResource;

    @Autowired
    private DoenteIdentidadeService doenteIdentidadeService;

    // to do Turnos e SubSistema
    public List<Doente> findBySitSubTur(Situacao situacao, String subSistema, Long t) {
        List<Doente> doentes = doenteRepository.findAll();
        List<DoenteIdentidade> doenteIdentidades;
        List<Long> doenteIds = null;
        if (situacao == null && subSistema == null && t == null) {
            doentes = doenteRepository.findAll();
        } else if (situacao != null && subSistema == null && t == null) {
            doentes = doenteRepository.findAllBySituacao(situacao);
        }
        return doentes;
    }
}
