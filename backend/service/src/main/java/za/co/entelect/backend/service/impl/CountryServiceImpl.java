package za.co.entelect.backend.service.impl;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import za.co.entelect.backend.domain.models.Country;
import za.co.entelect.backend.domain.models.CountryDetails;
import za.co.entelect.backend.persistence.repositories.CountryRepository;
import za.co.entelect.backend.service.interfaces.CountryService;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class CountryServiceImpl implements CountryService {
    private final CountryRepository countryRepository;

    @Override
    public List<Country> getAllCountries() {
        return countryRepository.findAll();
    }

    @Override
    public Optional<CountryDetails> getCountryByName(String name) {
        return countryRepository.findByName(name);
    }
}