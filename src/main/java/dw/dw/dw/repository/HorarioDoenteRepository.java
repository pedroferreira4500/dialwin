package dw.dw.dw.repository;
import dw.dw.dw.domain.HorarioDoente;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the HorarioDoente entity.
 */
@SuppressWarnings("unused")
@Repository
public interface HorarioDoenteRepository extends JpaRepository<HorarioDoente, Long> {

}
