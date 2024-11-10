package ma.TP11.TP11.dao;

import ma.TP11.TP11.entities.Groupe;
import org.springframework.data.jpa.repository.JpaRepository;
public interface GroupeRepository extends JpaRepository<Groupe, Long> {
}