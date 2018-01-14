package com.apsi.api;


import java.util.List;
import java.util.stream.Collectors;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import com.apsi.api.dto.ExchangeRateDTO;
import com.google.common.collect.Lists;

@Service
public class NBPWebApi {

    private final List<String> CURRENCIES = Lists.newArrayList("USD","AUD","CAD","EUR","HUF","CHF","GBP","JPY","CZK","DKK","NOK","SEK");

    public ExchangeRateDTO getExchangeRateForCurrency(String currency) {
        return new RestTemplate().getForObject("http://api.nbp.pl/api/exchangerates/rates/c/" + currency, ExchangeRateDTO.class);
    }

    public List<ExchangeRateDTO> getExchangeRatesForAllCurrencies() {
        return CURRENCIES.stream()
            .map(currency -> new RestTemplate().getForObject("http://api.nbp.pl/api/exchangerates/rates/c/" + currency, ExchangeRateDTO.class))
            .collect(Collectors.toList());
    }

}
