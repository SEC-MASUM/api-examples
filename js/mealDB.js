const searchInput = document.getElementById("search-input");
// Load Data
const loadData = () => {
  const searchInputValue = searchInput.value;
  // Clear
  searchInput.value = "";
  //   console.log(searchInputValue);
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInputValue}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => displayData(data));
};

// loadData();

const mealsDiv = document.getElementById("meals");

// Display Data
const displayData = (data) => {
  const meals = data.meals;
  meals.forEach((element) => {
    console.log(element);
    const discription = element.strInstructions;
    const mealDiv = document.createElement("div");
    mealDiv.innerHTML = `
        <div class="col">
          <div class="card h-100">
            <img src="${element.strMealThumb}" class="card-img-top" alt="" />
            <div class="card-body">
              <h5 class="card-title">${element.strMeal}</h5>
              <p class="card-text">
                ${discription.slice(0, 200)}
              </p>
            </div>
            <div class="card-footer">
              <small class="text-muted">${element.strCategory}</small>
            </div>
          </div>
        </div>
      `;
    mealsDiv.appendChild(mealDiv);
  });
  //   console.log(data.meals);
  //   console.log(data.meals[0].strInstructions);
  //   console.log(data.meals[0].strMealThumb);
  //   console.log(data.meals[0].strYoutube);
  //   console.log(data.meals[0].strTags);
  //   console.log(data.meals[0].strCategory);
};
