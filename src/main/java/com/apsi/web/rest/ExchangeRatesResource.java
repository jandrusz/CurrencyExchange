package com.apsi.web.rest;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.apsi.api.NBPWebApi;
import com.apsi.api.dto.ExchangeRateDTO;

@RestController
@RequestMapping("/api")
public class ExchangeRatesResource {

    private final NBPWebApi nbpWebApi;

    @Autowired
    public ExchangeRatesResource(NBPWebApi nbpWebApi) {
        this.nbpWebApi = nbpWebApi;
    }

    @GetMapping("/exchange-rates")
    public List<ExchangeRateDTO> getExchangeRatesForAllCurrencies() {
        return nbpWebApi.getExchangeRatesForAllCurrencies();
    }

    @GetMapping("/exchange-rates/{currency}")
    public ExchangeRateDTO getExchangeRatesForCurrency(@PathVariable String currency) {
        return nbpWebApi.getExchangeRateForCurrency(currency);
    }

}
