package za.co.entelect.backend.service.impl;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import za.co.entelect.backend.domain.models.Country;
import za.co.entelect.backend.domain.models.CountryDetails;
import za.co.entelect.backend.persistence.repositories.CountryRepository;

import java.util.List;
import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class CountryServiceImplTest {
    @Mock
    private CountryRepository countryRepository;

    @InjectMocks
    private CountryServiceImpl countryService;

    @Test
    void getAllCountries_delegatesToRepository() {
        Country country = new Country();
        country.setName("Germany");
        when(countryRepository.findAll()).thenReturn(List.of(country));

        List<Country> result = countryService.getAllCountries();

        assertThat(result).hasSize(1);
        assertThat(result.get(0).getName()).isEqualTo("Germany");
        verify(countryRepository).findAll();
    }

    @Test
    void getAllCountries_emptyRepository_returnsEmptyList() {
        when(countryRepository.findAll()).thenReturn(List.of());

        assertThat(countryService.getAllCountries()).isEmpty();
    }

    @Test
    void getCountryByName_found_returnsOptional() {
        CountryDetails details = new CountryDetails();
        details.setName("Germany");
        when(countryRepository.findByName("Germany")).thenReturn(Optional.of(details));

        Optional<CountryDetails> result = countryService.getCountryByName("Germany");

        assertThat(result).isPresent();
        assertThat(result.get().getName()).isEqualTo("Germany");
        verify(countryRepository).findByName("Germany");
    }

    @Test
    void getCountryByName_notFound_returnsEmpty() {
        when(countryRepository.findByName("Narnia")).thenReturn(Optional.empty());

        assertThat(countryService.getCountryByName("Narnia")).isEmpty();
    }
}