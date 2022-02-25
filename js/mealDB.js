document.getElementById("error-message").style.display = "none";
const searchInput = document.getElementById("search-input");
const mealsDiv = document.getElementById("meals");
const mealDetails = document.getElementById("meal-details");
// Load Data
const loadData = () => {
  const searchInputValue = searchInput.value;
  if (searchInputValue === "") {
    // mealsDiv.textContent = "";
    // mealDetails.textContent = "";
    document.getElementById("error-message").innerText =
      "Please enter food name";
    document.getElementById("error-message").style.display = "block";
  } else {
    // Clear
    searchInput.value = "";
    document.getElementById("error-message").style.display = "none";
    //   console.log(searchInputValue);
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInputValue}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => displayData(data))
      .catch((error) => displayError(error));
  }
};

// loadData();

// Error Display
const displayError = (error) => {
  console.log(error);
  // document.getElementById("error-message").style.display = "block";
};

// Display Data
const displayData = (data) => {
  const meals = data.meals;
  const mealsDiv = document.getElementById("meals");
  mealsDiv.textContent = "";

  if (meals == null) {
    console.log("Not Found");
    document.getElementById("error-message").innerText =
      "Search item not found";
    document.getElementById("error-message").style.display = "block";
  }
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

const loadMealDetails = (mealId) => {
  // console.log(mealId);
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => displayMealDetails(data.meals[0]))
    .catch((error) => console.log(error));
};

const displayMealDetails = (meal) => {
  // let meal = data.meals;
  console.log(meal);
  const mealDetails = document.getElementById("meal-details");
  mealDetails.style.display = "block";
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
            <a class="btn btn-primary" onclick="closeMealDetails()" >Close</a>
            <a href="${
              meal.strYoutube
            }" class="btn btn-primary ">Watch Video</a>
          </div>
        </div>
  `;
  mealDetails.appendChild(cardDiv);
};

const closeMealDetails = () => {
  mealDetails.style.display = "none";
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
