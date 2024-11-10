package ma.TP11.TP11.services;

import ma.TP11.TP11.entities.Employe;
import ma.TP11.TP11.entities.Groupe;
import ma.TP11.TP11.metier.groupe.GroupeMetier;
import ma.TP11.TP11.metier.groupe.GroupeMtierImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/groupes")
public class GroupeRestService {

    @Autowired
    private GroupeMetier groupeMetier;

    @Autowired
    private GroupeMtierImpl groupeMetierImpl;






    @PostMapping
    public Groupe saveGroupe(@RequestBody Groupe g) {
        return groupeMetier.saveGroupe(g);
    }

    @GetMapping
    public List<Groupe> listGroupe() {
        return groupeMetier.listGroupe();
    }

    @GetMapping("/{id}")
    public Groupe getGroupe(@PathVariable Long id) {
        return groupeMetier.listGroupe().stream()
                .filter(groupe -> groupe.getCodeGroupe().equals(id))
                .findFirst()
                .orElse(null);
    }

    @PutMapping("/{id}")
    public Groupe updateGroupe(@PathVariable Long id, @RequestBody Groupe g) {
        g.setCodeGroupe(id);
        return groupeMetier.saveGroupe(g);
    }

    @DeleteMapping("/{id}")
    public void deleteGroupe(@PathVariable Long id) {
        groupeMetier.listGroupe().removeIf(groupe -> groupe.getNomGroupe().equals(id));
    }

    @PostMapping("/assignEmploye")
    public void assignEmployeToGroupe(@RequestParam Long employeId, @RequestParam Long groupeId) {
        groupeMetierImpl.assignEmployeToGroupe(employeId, groupeId);
    }

    // New endpoint to get all employees and their groups
    @GetMapping("/employes")
    public List<Employe> listEmployesWithGroups() {
        return groupeMetierImpl.listEmployesWithGroups();
    }

}
