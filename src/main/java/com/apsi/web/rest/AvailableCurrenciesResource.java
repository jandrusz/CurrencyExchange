package com.apsi.web.rest;

import java.util.List;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.apsi.service.AvailableCurrenciesService;
import com.apsi.service.dto.CurrencyDTO;

@RequestMapping("/api")
@RestController
public class AvailableCurrenciesResource {

    private AvailableCurrenciesService availableCurrenciesService;

    public AvailableCurrenciesResource(AvailableCurrenciesService availableCurrenciesService) {
        this.availableCurrenciesService = availableCurrenciesService;
    }

    @GetMapping("/available-currencies")
    public List<CurrencyDTO> getAvailableCurrencies(){
        return availableCurrenciesService.getAllAvailableCurrencies();
    }

}
