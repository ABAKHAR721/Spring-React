package ma.TP11.TP11.dao;

import ma.TP11.TP11.entities.Operation;
import org.springframework.data.domain.Page;
import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.data.domain.Pageable;

public interface OperationRepository extends JpaRepository<Operation, Long> {
    Page<Operation> findByCompteCodeCompte(String compteCode, Pageable pageable);
}
