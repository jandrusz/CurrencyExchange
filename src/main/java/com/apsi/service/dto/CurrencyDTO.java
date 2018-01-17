package com.apsi.service.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class CurrencyDTO {

    private Long id;

    private String code;

    private String description;
}
