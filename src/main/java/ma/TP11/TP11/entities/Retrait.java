package ma.TP11.TP11.entities;

import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;
@Entity
@DiscriminatorValue("R")
public class Retrait extends Operation {

}
