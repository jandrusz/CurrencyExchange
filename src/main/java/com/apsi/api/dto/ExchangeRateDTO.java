package com.apsi.api.dto;

import java.util.List;
import lombok.Data;

@Data
public class ExchangeRateDTO {

    String table;

    String currency;

    String code;

    List<RateDTO> rates;

}
