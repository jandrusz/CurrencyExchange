package com.apsi.web.rest;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.apsi.service.TransactionService;
import com.apsi.service.UserService;
import com.apsi.service.dto.TransactionDTO;

@RequestMapping("/api/transaction")
@RestController
public class TransactionResource {

    private final TransactionService transactionService;

    private final UserService userService;

    @Autowired
    public TransactionResource(TransactionService transactionService, UserService userService) {
        this.transactionService = transactionService;
        this.userService = userService;
    }

    @PostMapping("/save")
    public Integer saveTransaction(@RequestBody TransactionDTO transactionDTO) {
        return transactionService.saveTransaction(transactionDTO);
    }

    @GetMapping("/get")
    public List<TransactionDTO> getTransactions() {
        return transactionService.getTransactionsByUserId(userService.getUserWithAuthorities().getId().intValue());
    }


}
