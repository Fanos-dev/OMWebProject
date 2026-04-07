package za.co.entelect.backend.persistence.repositories.inmemory;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import za.co.entelect.backend.domain.models.Country;
import za.co.entelect.backend.domain.models.CountryDetails;

import java.util.List;
import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;

class InMemoryCountryRepositoryTest {
    private InMemoryCountryRepository repository;

    @BeforeEach
    void setUp() {
        repository = new InMemoryCountryRepository();
    }

    @Test
    void findAll_returnsFiveCountries() {
        List<Country> result = repository.findAll();
        assertThat(result).hasSize(5);
    }

    @Test
    void findAll_containsGermany() {
        List<Country> result = repository.findAll();
        assertThat(result).anyMatch(c -> "Germany".equals(c.getName()));
    }

    @Test
    void findByName_existingCountry_returnsDetails() {
        Optional<CountryDetails> result = repository.findByName("Germany");
        assertThat(result).isPresent();
        assertThat(result.get().getCapital()).isEqualTo("Berlin");
        assertThat(result.get().getPopulation()).isEqualTo(83491249);
    }

    @Test
    void findByName_unknownCountry_returnsEmpty() {
        Optional<CountryDetails> result = repository.findByName("Narnia");
        assertThat(result).isEmpty();
    }

    @Test
    void findByName_isCaseSensitive() {
        Optional<CountryDetails> result = repository.findByName("germany");
        assertThat(result).isEmpty();
    }
}