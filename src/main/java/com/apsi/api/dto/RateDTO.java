package com.apsi.api.dto;

import java.util.Date;
import lombok.Data;

@Data
class RateDTO {

    String no;

    Date effectiveDate;

    Float bid;

    Float ask;

}
