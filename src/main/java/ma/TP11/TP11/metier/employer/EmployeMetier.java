package ma.TP11.TP11.metier.employer;

import ma.TP11.TP11.entities.Employe;

import java.util.List;

public interface EmployeMetier {
    public Employe saveEmploye(Employe e);
    public List<Employe> listEmployes();
}
