package com.apsi.service;

import java.util.List;
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

    public Integer saveTransaction(TransactionDTO transactionDTO) {
        Transaction transaction = transactionRepository.save(transactionMapper.mapToTransaction(transactionDTO));
        return transaction.getId().intValue();
    }

    public List<TransactionDTO> getTransactionsByUserId(Integer userid) {
        return transactionMapper.mapToTransactionDTO(transactionRepository.findAllByUserIdOrderByIdDesc(userid));
    }
}
