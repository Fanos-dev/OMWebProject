package za.co.entelect.backend.service.interfaces;

import za.co.entelect.backend.domain.models.Country;
import za.co.entelect.backend.domain.models.CountryDetails;

import java.util.List;
import java.util.Optional;

public interface CountryService {
    List<Country> getAllCountries();
    Optional<CountryDetails> getCountryByName(String name);
}