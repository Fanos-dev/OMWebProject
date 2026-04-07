package za.co.entelect.backend.persistence.repositories;

import za.co.entelect.backend.domain.models.Country;
import za.co.entelect.backend.domain.models.CountryDetails;
import java.util.List;
import java.util.Optional;

public interface CountryRepository {
    List<Country> findAll();
    Optional<CountryDetails> findByName(String name);
}