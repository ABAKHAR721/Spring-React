package ma.TP11.TP11.metier.groupe;

import ma.TP11.TP11.entities.Employe;
import ma.TP11.TP11.entities.Groupe;

import java.util.List;

public interface GroupeMetier {

    Groupe saveGroupe(Groupe e);

    public List<Groupe> listGroupe();
}
