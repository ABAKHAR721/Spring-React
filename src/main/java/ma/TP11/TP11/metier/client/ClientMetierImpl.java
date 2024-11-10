package ma.TP11.TP11.metier.client;

import java.util.List;

import ma.TP11.TP11.dao.ClientRepository;
import ma.TP11.TP11.entities.Client;
import ma.TP11.TP11.entities.Compte;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ClientMetierImpl implements ClientMetier {
    @Autowired
    private ClientRepository clientRepository;
    @Override
    public Client saveClient(Client c) {

        return clientRepository.save(c);

    }
    @Override
    public List<Client> listClient() {
    // TODO Auto-generated method stub
        return clientRepository.findAll();
    }

    @Override
    public List<Compte> getComptesByClient(Long clientId) {
        Client client = clientRepository.findById(clientId).orElse(null);
        if (client != null) {
            return (List<Compte>) client.getComptes();
        }
        return null;
    }


}
