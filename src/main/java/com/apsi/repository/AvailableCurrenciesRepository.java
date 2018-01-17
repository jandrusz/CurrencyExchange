package com.apsi.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import com.apsi.domain.Currency;

@Repository
public interface AvailableCurrenciesRepository extends JpaRepository<Currency, Integer> {

    @Query("SELECT c FROM Currency c")
    List<Currency> getAll();

}
