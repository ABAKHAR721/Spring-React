package ma.TP11.TP11.dao;

import ma.TP11.TP11.entities.Employe;
import org.springframework.data.jpa.repository.JpaRepository;
public interface EmployeRepository extends JpaRepository<Employe, Long> {
}