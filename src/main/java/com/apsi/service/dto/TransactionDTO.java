package com.apsi.service.dto;

import java.util.Date;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class TransactionDTO {

    private Long id;

    private String side;

    private Float insertedAmount;

    private String currency1;

    private Float calculatedAmount;

    private String currency2;

    private String exchange;

    private String billAccountK;

    private String billAccountS;

    private Integer userId;

    private Date inclusionDate;
}
