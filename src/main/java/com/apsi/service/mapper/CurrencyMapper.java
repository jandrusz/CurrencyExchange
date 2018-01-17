package com.apsi.service.mapper;


import java.util.List;
import java.util.stream.Collectors;
import org.springframework.stereotype.Service;
import com.apsi.domain.Currency;
import com.apsi.service.dto.CurrencyDTO;

@Service
public class CurrencyMapper {

    public CurrencyDTO mapToCurrencyDTO(Currency currency){
        return CurrencyDTO.builder()
            .id(currency.getId())
            .code(currency.getCode())
            .description(currency.getDescription())
            .build();
    }

    public List<CurrencyDTO> mapToCurrencyDTO(List<Currency> availableCurrencies){
        return availableCurrencies.stream().map(this::mapToCurrencyDTO).collect(Collectors.toList());
    }
}
