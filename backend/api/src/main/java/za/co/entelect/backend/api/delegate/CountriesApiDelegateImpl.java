package za.co.entelect.backend.api.delegate;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import za.co.entelect.backend.api.generated.CountriesApiDelegate;
import za.co.entelect.backend.api.generated.model.Country;
import za.co.entelect.backend.api.generated.model.CountryDetails;
import za.co.entelect.backend.api.mapper.CountryMapper;
import za.co.entelect.backend.service.interfaces.CountryService;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CountriesApiDelegateImpl implements CountriesApiDelegate {
    private final CountryService countryService;

    @Override
    public ResponseEntity<List<Country>> listCountries() {
        return ResponseEntity.ok(
            countryService.getAllCountries().stream()
                .map(CountryMapper::toCountryDto)
                .toList()
        );
    }

    @Override
    public ResponseEntity<CountryDetails> getCountryByName(String name) {
        return countryService.getCountryByName(name)
            .map(CountryMapper::toCountryDetailsDto)
            .map(ResponseEntity::ok)
            .orElse(ResponseEntity.notFound().build());
    }
}