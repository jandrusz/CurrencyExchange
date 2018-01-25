package com.apsi.service.mapper;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.apsi.domain.Transaction;
import com.apsi.service.UserService;
import com.apsi.service.dto.TransactionDTO;

@Service
public class TransactionMapper {

    private final UserService userService;

    @Autowired
    public TransactionMapper(UserService userService) {
        this.userService = userService;
    }

    public Transaction mapToTransaction(TransactionDTO transactionDTO) {
        return Transaction.builder()
            .side(transactionDTO.getSide().substring(0,1))
            .insertedAmount(transactionDTO.getInsertedAmount())
            .currency1(transactionDTO.getCurrency1())
            .calculatedAmount(transactionDTO.getCalculatedAmount())
            .currency2(transactionDTO.getCurrency2())
            .exchange(transactionDTO.getExchange())
            .billAccountK(transactionDTO.getBillAccountK())
            .billAccountS(transactionDTO.getBillAccountS())
            .userId(userService.getUserWithAuthorities().getId().intValue())
            .inclusionDate(LocalDateTime.now())
            .build();
    }

    private TransactionDTO mapToTransactionDTO(Transaction transaction) {
        return TransactionDTO.builder()
            .id(transaction.getId())
            .side(transaction.getSide())
            .insertedAmount(transaction.getInsertedAmount())
            .currency1(transaction.getCurrency1())
            .calculatedAmount(transaction.getCalculatedAmount())
            .currency2(transaction.getCurrency2())
            .exchange(transaction.getExchange())
            .billAccountK(transaction.getBillAccountK())
            .billAccountS(transaction.getBillAccountS())
            .userId(transaction.getUserId())
            .inclusionDate(transaction.getInclusionDate())
            .build();
    }

    public List<TransactionDTO> mapToTransactionDTO(List<Transaction> transactions) {
        return transactions.stream()
                           .map(this::mapToTransactionDTO)
                           .collect(Collectors.toList());
    }
}
