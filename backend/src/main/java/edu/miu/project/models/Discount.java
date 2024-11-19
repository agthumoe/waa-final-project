package edu.miu.project.models;

import edu.miu.project.models.enums.DiscountType;
import jakarta.persistence.Embeddable;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;

@Embeddable
public class Discount {
    private Double percentage;
    private Double fixed;
    @Enumerated(EnumType.STRING)
    private DiscountType type;
}
