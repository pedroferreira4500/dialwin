package dw.dw.dw.repository;
import dw.dw.dw.domain.DoenteHistMovimentos;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the DoenteHistMovimentos entity.
 */
@SuppressWarnings("unused")
@Repository
public interface DoenteHistMovimentosRepository extends JpaRepository<DoenteHistMovimentos, Long> {

}
