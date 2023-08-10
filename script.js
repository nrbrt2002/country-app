let countryInput = document.getElementById("country-input");
let searchBtn = document.getElementById("search-btn");
let resultsDiv = document.getElementById('results');
searchBtn.addEventListener('click', ()=>{
    let countryName = countryInput.value;
    let finalUrl = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
    fetch(finalUrl).then((response) => response.json()).then((data)=>{
        console.log(data);
        resultsDiv.innerHTML = `<img src='${data[0].flags.png}' class='country-image'>
                                <p><b>Offical Name: </b>${data[0].name.official}</p>
                                <p><b>Continent: </b>${data[0].region}</p>
                                <p><b>Sub-Region: </b>${data[0].subregion}</p>
                                <p><b>Capital City: </b>${data[0].capital}</p>
                                <p><b>Population: </b>${data[0].population}</p>
                                <p><b>Demonyms: </b>${data[0].demonyms.eng.m}</p>
                                <p><b>Languages: </b>${Object.values(data[0].languages).toString().split(",").join(", ")}</p>
                                <p><b>Currency: </b>${data[0].currencies[Object.keys(data[0].currencies)].name} - ${data[0].currencies[Object.keys(data[0].currencies)].symbol}</p>
                                <p><b>Timezone: </b>${data[0].timezones[0]}</p>`;
                                document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?"+ data[0].name.common +"')"

        // resultsDiv.innerHTML = `<p><b>Official Name:</b> ${data[0].name.official}</p>`;
        // resultsDiv.innerHTML = `<p><b>Capital:</b> ${data[0].capital}</p>`;
    }).catch(()=>{
        if (countryName.length == 0) {
            resultsDiv.innerHTML = `<p class='error'>The input field can not be empty</p>`;
        }else{
            resultsDiv.innerHTML = `<p class='error'>Enter a valid Country</p>`
        }
    })
});