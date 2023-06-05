const loadCountry = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}

loadCountry()

const displayCountries = (countries) => {
    const countryDiv = document.getElementById('country')
    countries.forEach(country => {
        // console.log(country);
        const div1 = document.createElement('div')
        div1.classList.add('country')
        div1.innerHTML = `<p>Name : <span>${country.name.common}</span></p>
               <p>Area : <span>${country?.area}</span></p>
               <p>Capital : <span>${country?.capital}</span></p>
               <a href="#country-details"><button onclick="loadCountryByName('${country.name.common}')">Show ${country.name.common}'s details</button></a>
         
        `

        countryDiv.appendChild(div1)
        // prepend
    });
}

const loadCountryByName = (name) => {
    const url = `https://restcountries.com/v3.1/name/${name}`
    console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountriesDetails(data[0]))
}

const displayCountriesDetails = (country) => {
    console.log(country);
    const countryDetaileDiv = document.getElementById('country-details')
    countryDetaileDiv.innerHTML = `<p>Name : <span>${country.name.common}</span></p>
    <p>Capital : <span>${country?.capital}</span></p>
    <p>Population : <span>${country?.population}</span></p>
    <img src="${country.flags.png}"/>`


}