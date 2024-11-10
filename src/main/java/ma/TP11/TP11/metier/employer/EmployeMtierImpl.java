package ma.TP11.TP11.metier.employer;

import java.util.List;
import ma.TP11.TP11.dao.EmployeRepository;
import ma.TP11.TP11.entities.Employe;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EmployeMtierImpl implements EmployeMetier {
    @Autowired
    private EmployeRepository employeRepository;

    @Override
    public Employe saveEmploye(Employe e) {
// TODO Auto-generated method stub
        return employeRepository.save(e);
    }

    @Override
    public List<Employe> listEmployes() {
// TODO Auto-generated method stub
        return employeRepository.findAll();
    }


}
