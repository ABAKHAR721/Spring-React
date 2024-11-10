package ma.TP11.TP11.dao;


import ma.TP11.TP11.entities.Compte;
import org.springframework.data.jpa.repository.JpaRepository;
public interface CompteRepository extends JpaRepository<Compte, String> {
}