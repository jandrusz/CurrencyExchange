package com.apsi.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.apsi.repository.AvailableCurrenciesRepository;
import com.apsi.service.dto.CurrencyDTO;
import com.apsi.service.mapper.CurrencyMapper;

@Service
public class AvailableCurrenciesService {

    private CurrencyMapper currencyMapper;

    private AvailableCurrenciesRepository availableCurrenciesRepository;

    @Autowired
    public AvailableCurrenciesService(CurrencyMapper currencyMapper, AvailableCurrenciesRepository availableCurrenciesRepository) {
        this.currencyMapper = currencyMapper;
        this.availableCurrenciesRepository = availableCurrenciesRepository;
    }

    public List<CurrencyDTO> getAllAvailableCurrencies(){
        return currencyMapper.mapToCurrencyDTO(availableCurrenciesRepository.getAll());
    }
}
