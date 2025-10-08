
const countryCode = JSON.parse(localStorage.getItem("weatherAppData")).countryCode || "";

const goBackButton = document.getElementById('goBack');

goBackButton.addEventListener('click', () => {
    
    window.location.href = "./index.html";
})

fetchCountryData(countryCode);

async function fetchCountryData(countryCode){
    const url = `https://restcountries.com/v3.1/alpha/${countryCode}`;

    const response = await fetch(url);
    if(response.ok){
        const data = await response.json();
        console.log(data);
        displayCountryDetails(data[0]);
    }else{
        alert("404 not found country with code "+countryCode);
    }
}


const countryName = document.querySelector('.title');
const countryCommonName = document.querySelector('.country-name');
const countryCapitalName = document.querySelector('.capital'); 
const countryRegionName = document.querySelector('.region');
const countrySubRegionName = document.querySelector('.sub-region');
const countryFlag = document.querySelector('#flag');
const countryCoatOfArms = document.querySelector('.coat-of-arms');
const countryPopulation = document.querySelector('.population');
const countryContinent = document.querySelector('.continent');
const countryGoogleLocation = document.querySelector('.google-location');
const countryOpenMapsLocation = document.querySelector('.openmaps-location');
const countryBorders = document.querySelector('.border-container');

const displayCountryDetails= ({name,capital,region,subregion, maps, population, continents, coatOfArms,borders, flags}) => {
    countryBorders.innerHTML = "";
    console.log(countryName.innerText);
    countryName.innerText = `${name.official}`;
    countryCommonName.innerText = `Country Name : ${name.common}`
    countryCapitalName.innerText = `Country Capital : ${capital}`
    countryRegionName.innerText = `Region : ${region}`
    countrySubRegionName.innerText = `Sub Region : ${subregion}`
    countryPopulation.innerText = `Population : ${population}`;
    countryContinent.innerText = `Contient : ${continents[0]}`;
    countryGoogleLocation.href = `${maps.googleMaps}`;
    countryOpenMapsLocation.href = `${maps.openStreetMaps}`;

    countryFlag.src = flags.png;
    countryFlag.alt = name.common;

    countryCoatOfArms.src = coatOfArms.png;
    countryCoatOfArms.alt = name.common;

    borders.forEach(border => {
        const borderCountry = document.createElement('div');
        borderCountry.classList.add('border');
        borderCountry.innerText = border;

        borderCountry.addEventListener('click', () => {
            fetchCountryData(border);
        })
        countryBorders.append(borderCountry);
    });
    
}