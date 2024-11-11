package ma.TP11.TP11.services;

import ma.TP11.TP11.entities.Compte;
import ma.TP11.TP11.metier.client.ClientMetierImpl;
import ma.TP11.TP11.metier.compte.CompteMetier;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/comptes")
public class CompteRestService {

    @Autowired
    private CompteMetier compteMetier;

    @Autowired
    private ClientMetierImpl clientMetierImpl;

    @PostMapping
    public Compte saveCompte(@RequestBody Compte c) {
        return compteMetier.saveCompte(c);
    }


    @GetMapping
    public List<Compte> listCompte() {
        return compteMetier.listCompte();
    }

    @GetMapping("/{compteCode}")
    public Compte getCompte(@PathVariable String compteCode) {
        return compteMetier.getCompte(compteCode);
    }

    @PutMapping("/{compteCode}")
    public Compte updateCompte(@PathVariable String compteCode, @RequestBody Compte c) {
        c.setCodeCompte(compteCode);
        return compteMetier.saveCompte(c);
    }

    @DeleteMapping("/{compteCode}")
    public void deleteCompte(@PathVariable String compteCode) {
        compteMetier.listCompte().removeIf(compte -> compte.getCodeCompte().equals(compteCode));
    }

    @GetMapping("/client/{clientId}")
    public List<Compte> getComptesByClient(@PathVariable Long clientId) {
        return clientMetierImpl.getComptesByClient(clientId);
    }
}
