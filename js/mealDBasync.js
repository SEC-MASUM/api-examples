const searchInput = document.getElementById("search-input");
// Load Data
const loadData = async () => {
  const searchInputValue = searchInput.value;
  // Clear
  searchInput.value = "";
  //   console.log(searchInputValue);
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInputValue}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    displayData(data);
  } catch (error) {
    console.log(error);
  }

  //   fetch(url)
  //     .then((response) => response.json())
  //     .then((data) => displayData(data));
};

// loadData();

// Display Data
const displayData = (data) => {
  const meals = data.meals;
  const mealsDiv = document.getElementById("meals");
  mealsDiv.textContent = "";

  console.log(data);
  console.log(meals.length);
  // const meals = data.meals;
  meals.forEach((element) => {
    // console.log(element);
    const mealDiv = document.createElement("div");
    mealDiv.classList.add("col");
    mealDiv.innerHTML = `
          <div class="card h-100">
            <img src="${element.strMealThumb}" class="card-img-top" alt="" />
            <div class="card-body p-2">
              <h5 class="card-title text-center m-0">${element.strMeal}</h5>
            </div>
            <div class="card-footer bg-white text-center border-0">
              <button
                  onclick="loadMealDetails(${element.idMeal})"     class="btn btn-info">See Details
              </button>
            </div>
          </div>
      `;
    mealsDiv.appendChild(mealDiv);
  });
};

// load data by meal id
const loadMealDetails = async (mealId) => {
  // console.log(mealId);
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;

  const response = await fetch(url);
  const data = await response.json();
  displayMealDetails(data.meals[0]);

  //   fetch(url)
  //     .then((response) => response.json())
  //     .then((data) => displayMealDetails(data.meals[0]));
};

// display data by meal id
const displayMealDetails = (meal) => {
  // let meal = data.meals;
  console.log(meal);
  const mealDetails = document.getElementById("meal-details");
  // Clear
  mealDetails.textContent = "";
  const cardDiv = document.createElement("div");
  cardDiv.classList.add("card");
  const mealDiscription = meal.strInstructions;
  cardDiv.innerHTML = `
        <img src="${
          meal.strMealThumb
        }" class="card-img-top w-50 rounded-circle mx-auto mt-3" alt="" />
        <div class="card-body">
          <h5 class="card-title text-center">${meal.strMeal}</h5>
          <p class="card-text">
            ${mealDiscription.slice(0, 500)}
          </p>
          <div class="text-end">
            <a href="${
              meal.strYoutube
            }" class="btn btn-primary ">Watch Video</a>
          </div>
        </div>
  `;
  mealDetails.appendChild(cardDiv);
};

//   console.log(data.meals);
//   console.log(data.meals[0].idMeal);
//   console.log(data.meals[0].strMeal);
//   console.log(data.meals[0].strInstructions);
//   ${discription.slice(0, 200)};
//   console.log(data.meals[0].strMealThumb);
//   console.log(data.meals[0].strYoutube);
//   console.log(data.meals[0].strTags);
//   console.log(data.meals[0].strCategory);
