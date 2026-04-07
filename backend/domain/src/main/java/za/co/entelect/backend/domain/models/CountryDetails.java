package za.co.entelect.backend.domain.models;

import lombok.Data;

@Data
public class CountryDetails {
    private String name;
    private Integer population;
    private String capital;
    private String flag;
}
