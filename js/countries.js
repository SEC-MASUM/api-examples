const loadCountries = () => {
  fetch("https://restcountries.herokuapp.com/api/v1")
    .then((response) => response.json())
    .then((data) => console.log(data));
};

loadCountries();
