const loadAdvice = () => {
  fetch("https://api.adviceslip.com/advice")
    .then((respose) => respose.json())
    .then((data) => displayAdvice(data));
};

// loadAdvice();
let perviousId = -1;
const displayAdvice = (quote) => {
  console.log(quote.slip);
  if (quote.slip.id != perviousId) {
    const quoteElement = document.getElementById("quote");
    quoteElement.innerText = quote.slip.advice;
    perviousId = quote.slip.id;
  } else {
    loadAdvice();
  }
};
