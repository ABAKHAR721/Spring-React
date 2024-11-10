package ma.TP11.TP11.services;

import ma.TP11.TP11.entities.Client;
import ma.TP11.TP11.metier.client.ClientMetier;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/clients")
public class ClientRestService {
    @Autowired
    private ClientMetier clientMetier;

    @PostMapping
    public Client saveClient(@RequestBody Client c) {
        return clientMetier.saveClient(c);
    }

    @GetMapping
    public List<Client> listClient() {
        return clientMetier.listClient();
    }

    @GetMapping("/{id}")
    public Client getClient(@PathVariable Long id) {
        return clientMetier.listClient().stream()
                .filter(client -> client.getCodeClient().equals(id))
                .findFirst()
                .orElse(null);
    }

    @PutMapping("/{id}")
    public Client updateClient(@PathVariable Long id, @RequestBody Client c) {
        c.setCodeClient(id);
        return clientMetier.saveClient(c);
    }

    @DeleteMapping("/{id}")
    public void deleteClient(@PathVariable Long id) {
        clientMetier.listClient().removeIf(client -> client.getCodeClient().equals(id));
    }
}
