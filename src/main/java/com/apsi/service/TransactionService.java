package com.apsi.service;

import javax.transaction.Transactional;
import org.springframework.stereotype.Service;
import com.apsi.domain.Transaction;
import com.apsi.repository.TransactionRepository;
import com.apsi.service.dto.TransactionDTO;
import com.apsi.service.mapper.TransactionMapper;

@Service
@Transactional
public class TransactionService {

    private final TransactionRepository transactionRepository;

    private final TransactionMapper transactionMapper;

    public TransactionService(TransactionRepository transactionRepository, TransactionMapper transactionMapper) {
        this.transactionRepository = transactionRepository;
        this.transactionMapper = transactionMapper;
    }

    public Transaction saveTransaction(TransactionDTO transactionDTO) {
        return transactionRepository.save(transactionMapper.mapToTransaction(transactionDTO));
    }

}
