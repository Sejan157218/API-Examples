const searchFood = () =>{
    const inputField = document.getElementById('input-field');
    const inputValue = inputField.value;
    // console.log(inputValue);
    inputField.value = '';
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`;
    // console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(data => displaySerch(data.meals))
}

const displaySerch = search =>{
    // console.log(search);
    const serchResult = document.getElementById('serch-result');
    serchResult.textContent = '';
    search.forEach(result =>{
        // console.log(result);
        
        const div = document.createElement('div');
        div.classList.add('col')
        div.innerHTML = `
        <div onclick="loadUrl(${result.idMeal})" class="card h-100">
          <img src="${result.strMealThumb}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${result.strMeal}</h5>
            <p class="card-text">${result.strInstructions.slice(0,200)}.</p>
          </div>
        </div>
        `
        serchResult.appendChild(div);
    })
}

const loadUrl = withId =>{
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${withId}`;
    fetch(url)
    .then(res => res.json())
    .then(data =>displayWithId(data.meals[0]))
    // console.log(url)
}

const displayWithId = meal =>{
    const mealDetails = document.getElementById('meal-detail');
    mealDetails.textContent = '';
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
    <img class="img-flud"  src="${meal.strMealThumb}" class="card-img-top" alt="${meal.strMeal}">
    <div class="card-body">
      <h5 class="card-title">${meal.strMeal}</h5>
      <p class="card-text">${meal.strInstructions.slice(0,200)}.</p>
      <a href="${meal.strYoutube}" class="btn btn-primary">Go somewhere</a>
    </div>
    `
    mealDetails.appendChild(div);
}
