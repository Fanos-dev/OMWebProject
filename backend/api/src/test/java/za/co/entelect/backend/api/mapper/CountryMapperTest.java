package za.co.entelect.backend.api.mapper;

import org.junit.jupiter.api.Test;
import za.co.entelect.backend.api.generated.model.Country;
import za.co.entelect.backend.api.generated.model.CountryDetails;

import static org.assertj.core.api.Assertions.assertThat;

class CountryMapperTest {
    @Test
    void toCountryDto_mapsNameAndFlag() {
        za.co.entelect.backend.domain.models.Country domain = new za.co.entelect.backend.domain.models.Country();
        domain.setName("Germany");
        domain.setFlag("https://flagcdn.com/de.svg");

        Country dto = CountryMapper.toCountryDto(domain);

        assertThat(dto.getName()).isEqualTo("Germany");
        assertThat(dto.getFlag()).isEqualTo("https://flagcdn.com/de.svg");
    }

    @Test
    void toCountryDetailsDto_mapsAllFields() {
        za.co.entelect.backend.domain.models.CountryDetails domain = new za.co.entelect.backend.domain.models.CountryDetails();
        domain.setName("Germany");
        domain.setFlag("https://flagcdn.com/de.svg");
        domain.setCapital("Berlin");
        domain.setPopulation(83491249);

        CountryDetails dto = CountryMapper.toCountryDetailsDto(domain);

        assertThat(dto.getName()).isEqualTo("Germany");
        assertThat(dto.getFlag()).isEqualTo("https://flagcdn.com/de.svg");
        assertThat(dto.getCapital()).isEqualTo("Berlin");
        assertThat(dto.getPopulation()).isEqualTo(83491249);
    }
}