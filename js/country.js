const getCountry = () =>{
    fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data =>displayCountry(data))
}

getCountry();

const displayCountry = (countrys) =>{
    countrys.forEach(country => {
        // console.log(country);
        const countryDiv = document.getElementById('country');
        countryDiv.classList.add('grid')
        const div = document.createElement('div');
        div.classList.add('div')
        div.innerHTML =`
        <img class="imgs" src="${country.flag}" alt="">
        <h3>Name : ${country.name}</h3>
        <p>Capital : ${country.capital}</p>
        <button class="button" onclick="countryDetils('${country.name}')">Details</button>
        `
        countryDiv.appendChild(div);
        /* `
        Name : ${country.name}
        `;
        const p = document.createElement('p');
        p.innerText = `
        Capital : ${country.capital}
        `;
        const img = document.createElement('img');
        img.classList.add('imgs')
        img.src = `${country.flag}`;
        countryDiv.appendChild(h3);
        countryDiv.appendChild(p);
        countryDiv.appendChild(img); */
    });  
}

const countryDetils = countryname =>{
    const url = `https://restcountries.eu/rest/v2/name/${countryname}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayDetails(data[0]))
}

const displayDetails = detail =>{
    const detailsDiv = document.getElementById('details');
    detailsDiv.innerHTML = `
    <img class="imgs" src="${detail.flag}" alt="">
    <h3>Name : ${detail.name}</h3>
    <p>Capital : ${detail.capital}</p>
    `
}