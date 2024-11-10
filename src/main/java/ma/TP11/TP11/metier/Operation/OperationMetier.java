package ma.TP11.TP11.metier.Operation;

import ma.TP11.TP11.entities.Operation;
import org.springframework.data.domain.Page;

public interface OperationMetier {
    public void deposit(String compteCode, double amount);
    public void withdraw(String compteCode, double amount);
    public void transfer(String fromCompteCode, String toCompteCode, double amount);
    public Page<Operation> getOperationsByCompte(String compteCode, int page, int size);
}
