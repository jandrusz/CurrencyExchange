package com.apsi.service.mapper;

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


}
