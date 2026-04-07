package za.co.entelect.backend.api.mapper;

import za.co.entelect.backend.api.generated.model.Country;
import za.co.entelect.backend.api.generated.model.CountryDetails;

public class CountryMapper {
    private CountryMapper() {}

    public static Country toCountryDto(za.co.entelect.backend.domain.models.Country d) {
        Country dto = new Country();
        dto.setName(d.getName());
        dto.setFlag(d.getFlag());
        return dto;
    }

    public static CountryDetails toCountryDetailsDto(za.co.entelect.backend.domain.models.CountryDetails d) {
        CountryDetails dto = new CountryDetails();
        dto.setName(d.getName());
        dto.setFlag(d.getFlag());
        dto.setCapital(d.getCapital());
        dto.setPopulation(d.getPopulation());
        return dto;
    }
}