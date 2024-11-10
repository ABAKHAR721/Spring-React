package ma.TP11.TP11.metier.Operation;

import ma.TP11.TP11.dao.CompteRepository;
import ma.TP11.TP11.dao.OperationRepository;
import ma.TP11.TP11.entities.Compte;
import ma.TP11.TP11.entities.Operation;
import ma.TP11.TP11.entities.Retrait;
import ma.TP11.TP11.entities.Versment;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
public class OperationMetierImpl implements OperationMetier {
    @Autowired
    private CompteRepository compteRepository;

    @Autowired
    private OperationRepository operationRepository;

    @Override
    public void deposit(String compteCode, double amount) {
        Compte compte = compteRepository.findById(compteCode).orElse(null);
        if (compte != null) {


            Versment versement = new Versment();
            versement.setDateOperation(new Date());
            versement.setMontant(amount);
            versement.setCompte(compte);
            versement.setTypeOp("V");
            operationRepository.save(versement);

            compte.setSolde(compte.getSolde() + amount);
            compteRepository.save(compte);
        }
    }

    @Override
    public void withdraw(String compteCode, double amount) {
        Compte compte = compteRepository.findById(compteCode).orElse(null);
        if (compte != null && compte.getSolde() >= amount) {
            Retrait retrait = new Retrait();
            retrait.setDateOperation(new Date());
            retrait.setMontant(amount);
            retrait.setCompte(compte);
            retrait.setTypeOp("R");
            operationRepository.save(retrait);

            compte.setSolde(compte.getSolde() - amount);
            compteRepository.save(compte);
        }
    }

    @Override
    public void transfer(String fromCompteCode, String toCompteCode, double amount) {
        Compte fromCompte = compteRepository.findById(fromCompteCode).orElse(null);
        Compte toCompte = compteRepository.findById(toCompteCode).orElse(null);

        if (fromCompte != null && toCompte != null && fromCompte.getSolde() >= amount) {
            // Withdraw from source account

            Retrait retrait = new Retrait();
            retrait.setDateOperation(new Date());
            retrait.setMontant(amount);
            retrait.setCompte(fromCompte);
            operationRepository.save(retrait);

            fromCompte.setSolde(fromCompte.getSolde() - amount);
            compteRepository.save(fromCompte);

            // Deposit to destination account
            Versment versement = new Versment();
            versement.setDateOperation(new Date());
            versement.setMontant(amount);
            versement.setCompte(toCompte);
            operationRepository.save(versement);

            toCompte.setSolde(toCompte.getSolde() + amount);
            compteRepository.save(toCompte);
        }
    }

    @Override
    public Page<Operation> getOperationsByCompte(String compteCode, int page, int size) {
        return operationRepository.findByCompteCodeCompte(compteCode, PageRequest.of(page, size));
    }

}
