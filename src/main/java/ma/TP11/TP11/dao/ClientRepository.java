package ma.TP11.TP11.dao;

import ma.TP11.TP11.entities.Client;
import org.springframework.data.jpa.repository.JpaRepository;
public interface ClientRepository extends JpaRepository<Client, Long> {
}