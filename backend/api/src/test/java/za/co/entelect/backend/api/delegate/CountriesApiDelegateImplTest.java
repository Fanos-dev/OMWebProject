package za.co.entelect.backend.api.delegate;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import za.co.entelect.backend.api.generated.model.Country;
import za.co.entelect.backend.api.generated.model.CountryDetails;
import za.co.entelect.backend.service.interfaces.CountryService;

import java.util.List;
import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class CountriesApiDelegateImplTest {
    @Mock
    private CountryService countryService;

    @InjectMocks
    private CountriesApiDelegateImpl delegate;

    @Test
    void listCountries_returnsOk_withMappedList() {
        za.co.entelect.backend.domain.models.Country domainCountry = new za.co.entelect.backend.domain.models.Country();
        domainCountry.setName("Germany");
        domainCountry.setFlag("https://flagcdn.com/de.svg");
        when(countryService.getAllCountries()).thenReturn(List.of(domainCountry));

        ResponseEntity<List<Country>> response = delegate.listCountries();

        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.OK);
        assertThat(response.getBody()).hasSize(1);
        assertThat(response.getBody().get(0).getName()).isEqualTo("Germany");
    }

    @Test
    void listCountries_emptyService_returnsOkWithEmptyList() {
        when(countryService.getAllCountries()).thenReturn(List.of());

        ResponseEntity<List<Country>> response = delegate.listCountries();

        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.OK);
        assertThat(response.getBody()).isEmpty();
    }

    @Test
    void getCountryByName_found_returns200() {
        za.co.entelect.backend.domain.models.CountryDetails domain = new za.co.entelect.backend.domain.models.CountryDetails();
        domain.setName("Germany");
        domain.setCapital("Berlin");
        domain.setPopulation(83491249);
        domain.setFlag("https://flagcdn.com/de.svg");
        when(countryService.getCountryByName("Germany")).thenReturn(Optional.of(domain));

        ResponseEntity<CountryDetails> response = delegate.getCountryByName("Germany");

        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.OK);
        Assertions.assertNotNull(response.getBody());
        assertThat(response.getBody().getName()).isEqualTo("Germany");
        assertThat(response.getBody().getCapital()).isEqualTo("Berlin");
    }

    @Test
    void getCountryByName_notFound_returns404() {
        when(countryService.getCountryByName("Narnia")).thenReturn(Optional.empty());

        ResponseEntity<CountryDetails> response = delegate.getCountryByName("Narnia");

        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.NOT_FOUND);
    }
}