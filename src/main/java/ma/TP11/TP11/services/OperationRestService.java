package ma.TP11.TP11.services;

import ma.TP11.TP11.entities.Operation;
import ma.TP11.TP11.metier.Operation.OperationMetierImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/operations")
public class OperationRestService {

    @Autowired
    private OperationMetierImpl operationMetierImpl;

    @PostMapping("/deposit")
    public void deposit(@RequestParam String compteCode, @RequestParam double amount) {

        operationMetierImpl.deposit(compteCode, amount);
    }

    @PostMapping("/withdraw")
    public void withdraw(@RequestParam String compteCode, @RequestParam double amount) {

        operationMetierImpl.withdraw(compteCode, amount);
    }

    @PostMapping("/transfer")
    public void transfer(@RequestParam String fromCompteCode, @RequestParam String toCompteCode, @RequestParam double amount) {

        operationMetierImpl.transfer(fromCompteCode, toCompteCode, amount);
    }

    @GetMapping("/compte/{compteCode}")
    public Page<Operation> getOperationsByCompte(@PathVariable String compteCode,
                                                 @RequestParam int page,
                                                 @RequestParam int size) {
        return operationMetierImpl.getOperationsByCompte(compteCode, page, size);
    }
}
