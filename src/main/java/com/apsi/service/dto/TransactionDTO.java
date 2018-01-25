package com.apsi.service.dto;

import java.time.LocalDateTime;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class TransactionDTO {

    private Long id;

    private String side;

    private Float insertedAmount;

    private String currency1;

    private Float calculatedAmount;

    private String currency2;

    private Float exchange;

    private String billAccountK;

    private String billAccountS;

    private Integer userId;

    private LocalDateTime inclusionDate;
}
