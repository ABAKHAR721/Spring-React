package ma.TP11.TP11.metier.groupe;

import ma.TP11.TP11.dao.EmployeRepository;
import ma.TP11.TP11.dao.GroupeRepository;
import ma.TP11.TP11.entities.Employe;
import ma.TP11.TP11.entities.Groupe;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class GroupeMtierImpl implements GroupeMetier {

    @Autowired
    private GroupeRepository GroupeRepository;

    @Autowired
    private EmployeRepository employeRepository;

    @Override
    public Groupe saveGroupe(Groupe e) {
        return GroupeRepository.save(e);
    }

    @Override
    public List<Groupe> listGroupe() {
        return GroupeRepository.findAll();
    }


    public void assignEmployeToGroupe(Long employeId, Long groupeId) {
        Employe employe = employeRepository.findById(employeId).orElse(null);
        Groupe groupe = GroupeRepository.findById(groupeId).orElse(null);

        if (employe != null && groupe != null) {
            employe.getGroupes().add(groupe);
            employeRepository.save(employe);
        }
    }

    // New method to get all employees and their groups
    public List<Employe> listEmployesWithGroups() {
        return employeRepository.findAll(); // Assumes that groups are eagerly fetched or loaded via join
    }


}
