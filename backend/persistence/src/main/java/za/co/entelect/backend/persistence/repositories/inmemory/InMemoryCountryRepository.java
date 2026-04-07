package za.co.entelect.backend.persistence.repositories.inmemory;

import org.springframework.stereotype.Repository;
import za.co.entelect.backend.domain.models.Country;
import za.co.entelect.backend.domain.models.CountryDetails;
import za.co.entelect.backend.persistence.repositories.CountryRepository;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@Repository
public class InMemoryCountryRepository implements CountryRepository {
    private static final List<Country> COUNTRIES = List.of(
            country("South Africa", "https://flagcdn.com/w320/za.png"),
            country("Germany", "https://flagcdn.com/w320/de.png"),
            country("Japan", "https://flagcdn.com/w320/jp.png"),
            country("Brazil", "https://flagcdn.com/w320/br.png"),
            country("Australia", "https://flagcdn.com/w320/au.png")
    );

    private static final Map<String, CountryDetails> DETAILS = Map.of(
            "South Africa", details("South Africa", "https://flagcdn.com/w320/za.png", "Pretoria", 63100945),
            "Germany", details("Germany", "https://flagcdn.com/w320/de.png", "Berlin", 83491249),
            "Japan", details("Japan", "https://flagcdn.com/w320/jp.png", "Tokyo", 123210000),
            "Brazil", details("Brazil", "https://flagcdn.com/w320/br.png", "Brasília", 213421037),
            "Australia", details("Australia", "https://flagcdn.com/w320/au.png", "Canberra", 27536874)
    );

    @Override
    public List<Country> findAll() {
        return COUNTRIES;
    }

    @Override
    public Optional<CountryDetails> findByName(String name) {
        return Optional.ofNullable(DETAILS.get(name));
    }

    private static Country country(String name, String flag) {
        Country c = new Country();
        c.setName(name);
        c.setFlag(flag);
        return c;
    }

    private static CountryDetails details(String name, String flag, String capital, Integer population) {
        CountryDetails d = new CountryDetails();
        d.setName(name);
        d.setFlag(flag);
        d.setCapital(capital);
        d.setPopulation(population);
        return d;
    }
}