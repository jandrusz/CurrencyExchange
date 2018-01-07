package com.apsi.service.mapper;

import java.util.List;
import java.util.stream.Collectors;
import org.springframework.stereotype.Service;
import com.apsi.domain.Transaction;
import com.apsi.service.dto.TransactionDTO;

@Service
public class TransactionMapper {

    public Transaction mapToTransaction(TransactionDTO transactionDTO) {
        return Transaction.builder()
            .side(transactionDTO.getSide())
            .insertedAmount(transactionDTO.getInsertedAmount())
            .currency1(transactionDTO.getCurrency1())
            .calculatedAmount(transactionDTO.getCalculatedAmount())
            .currency2(transactionDTO.getCurrency2())
            .exchange(transactionDTO.getExchange())
            .billAccountK(transactionDTO.getBillAccountK())
            .billAccountS(transactionDTO.getBillAccountS())
            .userId(transactionDTO.getUserId())
            .build();
    }

    private TransactionDTO mapToTransactionDTO(Transaction transaction) {
        return TransactionDTO.builder()
            .side(transaction.getSide())
            .insertedAmount(transaction.getInsertedAmount())
            .currency1(transaction.getCurrency1())
            .calculatedAmount(transaction.getCalculatedAmount())
            .currency2(transaction.getCurrency2())
            .exchange(transaction.getExchange())
            .billAccountK(transaction.getBillAccountK())
            .billAccountS(transaction.getBillAccountS())
            .userId(transaction.getUserId())
            .build();
    }

    public List<TransactionDTO> mapToTransactionDTO(List<Transaction> transactions) {
        return transactions.stream()
                           .map(this::mapToTransactionDTO)
                           .collect(Collectors.toList());
    }
}
