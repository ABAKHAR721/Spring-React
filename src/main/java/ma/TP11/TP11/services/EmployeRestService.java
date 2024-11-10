package ma.TP11.TP11.services;

import ma.TP11.TP11.entities.Employe;
import ma.TP11.TP11.metier.employer.EmployeMetier;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/employes")
public class EmployeRestService {
    @Autowired
    private EmployeMetier employeMetier;

    @PostMapping
    public Employe saveEmploye(@RequestBody Employe e) {
        return employeMetier.saveEmploye(e);
    }

    @GetMapping
    public List<Employe> listEmployes() {
        return employeMetier.listEmployes();
    }

    @GetMapping("/{id}")
    public Employe getEmploye(@PathVariable Long id) {
        return employeMetier.listEmployes().stream()
                .filter(employe -> employe.getCodeEmploye().equals(id))
                .findFirst()
                .orElse(null);
    }

    @PutMapping("/{id}")
    public Employe updateEmploye(@PathVariable Long id, @RequestBody Employe e) {
        e.setCodeEmploye(id);
        return employeMetier.saveEmploye(e);
    }

    @DeleteMapping("/{id}")
    public void deleteEmploye(@PathVariable Long id) {
        employeMetier.listEmployes().removeIf(employe -> employe.getCodeEmploye().equals(id));
    }
}
