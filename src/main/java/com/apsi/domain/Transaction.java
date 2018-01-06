package com.apsi.domain;


import java.io.Serializable;
import java.util.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import lombok.Builder;
import lombok.Data;

@Entity
@Table(name = "transactions")
@Data
@Builder
public class Transaction implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String side;

    private Float insertedAmount;

    @Column(name = "currency_1")
    private String currency1;

    private Float calculatedAmount;

    @Column(name = "currency_2")
    private String currency2;

    private String exchange;

    @Column(name = "bill_account_k")
    private String billAccountK;

    @Column(name = "bill_account_s")
    private String billAccountS;

    private Integer userId;

    private Date inclusionDate;
}
