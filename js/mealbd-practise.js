const errorInput = document.getElementById('error-input');
errorInput.style.color = 'white';
errorInput.style.display = 'none';
const errorMsg = document.getElementById('error-msg');
errorMsg.style.color = 'white';
errorMsg.style.display = 'none';
const getSerch =async () =>{
    const searchBox = document.getElementById('search-box');
    const searchBoxValue = searchBox.value;
    searchBox.value = '';
    if (searchBoxValue ==''){
        errorInput.style.display = 'block';
    }
    else{
        errorInput.style.display = 'none';
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchBoxValue}`;

        // const res = await fetch(url);
        // const data = await res.json();
        // searchResult(data.meals)
        //    fetch(url)
        //    .then(res => res.json())
        //    .then(data => searchResult(data.meals))
        try{
            const res = await fetch(url);
            const data = await res.json();
            searchResult(data.meals)
        }
        catch (err) {
            errorMsg.style.display = 'block';
          }
    }

}
const searchResult = search =>{
    if (search == null){
        errorInput.style.display = 'block';  
    }
   else{
    errorInput.style.display = 'none'; 
    const showSearchResult = document.getElementById('search-result');
    showSearchResult.textContent = '';
    search.forEach ( result =>{
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div onclick="idNumber(${result.idMeal})" class="card">
            <img src="${result.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${result.strMeal}</h5>
            </div>
          </div>
        `;
        showSearchResult.appendChild(div);
    })
   }
}
const idNumber =async idnum =>{
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idnum}`;
    const res = await fetch(url);
    const data = await res.json();
    veiwDetails(data.meals[0]);
    // console.log(url);
}

const veiwDetails = details =>{
    // console.log(details)
    const veiwDetail = document.getElementById('details-view');
    veiwDetail.textContent = '';
    const div = document.createElement('div');
    div.innerHTML = `
    <img src="${details.strMealThumb}" class="card-img-top h-50 img-fluid" alt="Image">
    <div class="card-body">
      <h5 class="card-title">${details.strMeal}</h5>
      <p class="card-text">${details.strInstructions.slice(0,200)}.</p>
      <a href="${details.strYoutube}" class="btn btn-primary">Go somewhere</a>
    </div>
    `;
    veiwDetail.appendChild(div);
}

