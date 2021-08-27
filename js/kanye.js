const kanyeRest = () => {
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data => quotes(data))
}

const quotes = quote =>{
    const kanye = document.getElementById('kanye');
    kanye.innerText = quote.quote;
}