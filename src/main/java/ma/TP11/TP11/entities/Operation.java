package ma.TP11.TP11.entities;

import java.io.Serializable;
import java.util.Date;
import jakarta.persistence.DiscriminatorColumn;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.InheritanceType;
import jakarta.persistence.Inheritance;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.Entity;

@Entity
@Inheritance(strategy=InheritanceType.SINGLE_TABLE)
@DiscriminatorColumn(length=1)
public class Operation implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long numeroOperation;
    private Date dateOperation;
    private double montant;
    @ManyToOne
    @JoinColumn(name = "CODE_CPTE")
    private Compte compte;
    @ManyToOne
    @JoinColumn(name = "CODE_EMP")
    private Employe employe;

    private String typeOp;

    public String getTypeOp() {
        return typeOp;
    }

    public void setTypeOp(String typeOp) {
        this.typeOp = typeOp;
    }

    public Operation(Date dateOperation, double montant) {
        super();
        this.dateOperation = dateOperation;
        this.montant = montant;
    }

    public Operation() {
        super();
// TODO Auto-generated constructor stub
    }

    public Long getNumeroOperation() {
        return numeroOperation;
    }

    public void setNumeroOperation(Long numeroOperation) {
        this.numeroOperation = numeroOperation;
    }
    public Date getDateOperation() {
        return dateOperation;
    }
    public void setDateOperation(Date dateOperation) {
        this.dateOperation = dateOperation;
    }
    public double getMontant() {
        return montant;
    }
    public void setMontant(double montant) {
        this.montant = montant;
    }
    public Compte getCompte() {
        return compte;
    }
    public void setCompte(Compte compte) {
        this.compte = compte;
    }
    public Employe getEmploye() {
        return employe;
    }
    public void setEmploye(Employe employe) {
        this.employe = employe;
    }


}
