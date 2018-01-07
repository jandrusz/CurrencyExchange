package com.apsi.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.apsi.domain.Transaction;

@Repository
public interface TransactionRepository extends JpaRepository<Transaction, Integer> {

    List<Transaction> findAllByUserIdOrderByIdDesc(Integer userId);

    @Override
    Transaction save(Transaction transaction);

}
