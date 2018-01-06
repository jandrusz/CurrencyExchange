package com.apsi.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.apsi.domain.Transaction;

@Repository
public interface TransactionRepository extends JpaRepository<Transaction, Integer> {

    @Override
    Transaction save(Transaction transaction);

}
