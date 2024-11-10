package ma.TP11.TP11.metier.compte;

import java.util.List;

import ma.TP11.TP11.dao.ClientRepository;
import ma.TP11.TP11.dao.CompteRepository;
import ma.TP11.TP11.entities.Client;
import ma.TP11.TP11.entities.Compte;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CompteMetierImpl implements CompteMetier {
    @Autowired
    private CompteRepository compteRepository;

    @Autowired
    private ClientRepository clientRepository;
    @Override
    public Compte saveCompte(Compte c) {
        // Check if the client is set in the Compte object
        if (c.getClient() == null || c.getClient().getCodeClient() == null) {
            throw new IllegalArgumentException("Client ID is required.");
        }

        // Fetch the client by ID (codeClient)
        Client client = clientRepository.findById(c.getClient().getCodeClient()).orElse(null);
        if (client == null) {
            throw new RuntimeException("Client not found with code: " + c.getClient().getCodeClient());
        }

        // Set the client to the compte
        c.setClient(client);

        // Save and return the compte
        return compteRepository.save(c);
    }

    @Override
    public List<Compte> listCompte() {
        // Return the list of Compte objects
        return compteRepository.findAll();
    }

    @Override
    public Compte getCompte(String compteCode) {
        return compteRepository.findById(compteCode).orElse(null);
    }
}
