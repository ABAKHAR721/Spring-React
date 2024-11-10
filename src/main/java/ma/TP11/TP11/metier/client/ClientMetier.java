package ma.TP11.TP11.metier.client;

import ma.TP11.TP11.entities.Client;
import ma.TP11.TP11.entities.Compte;

import java.util.List;

public interface ClientMetier {
    public Client saveClient(Client c);
    public List<Client> listClient();
    public List<Compte> getComptesByClient(Long clientId);
}
