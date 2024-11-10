package ma.TP11.TP11.metier.compte;

import ma.TP11.TP11.entities.Compte;

import java.util.List;

public interface CompteMetier {
    public Compte saveCompte(Compte c);
    public List<Compte> listCompte();
    public Compte getCompte(String c);
}
