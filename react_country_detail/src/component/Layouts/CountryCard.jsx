export const CountryCard = ({ country }) => {
    const { name, flags, population, region, capital } = countryData;
    return (
        <li key={country.name.common}></li>
    );
};