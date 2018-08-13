// new colors to change with each quote
var backgroundColourArray = [
  "#03ddb6",
  "#03c4a2",
  "#02ac8e",
  "#029379",
  "#027b65",
  "#0bcaa8",
  "#0ab495",
  "#099d82",
  "#078770"
];

// Get a hold of the button by its id
var buttonEL = document.getElementById("loadQuote");
// Add an event listener to the button
buttonEL.addEventListener("click", printQuote);

// change background color every 10 secs and click
function changeBackgroundColour() {
  let bodyTag = document.getElementsByTagName("body")[0];
  bodyTag.style["background-color"] =
    backgroundColourArray[
      randomNumberBetween(0, backgroundColourArray.length - 1)
    ];
}
// Our event listener function for the button
function printQuote() {
  clearInterval(interval);

  // change the background color
  changeBackgroundColour();
  getRandomQuote();
}

// function picking a number between min and max
function randomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRandomQuote() {
  return fetch("http://127.0.0.1:8000/random_quote", {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(response => {
      return response.json();
    })
    .then(response => {
      var randomQuoteObj = response;
      var quoteString = constructQuote(
        randomQuoteObj.quote,
        randomQuoteObj.source,
        randomQuoteObj.year
      );
      document.getElementById("quote-box").innerHTML = quoteString;
      changeBackgroundColour();
    })
    .catch(error => {
      console.log("error");
    });
}

// construct HTML for quote-box
function constructQuote(quote, source, year) {
  var quoteString = `
    <p class="quote">${quote} </p>
    <p class="source">${source}`;
  if (year) {
    quoteString += `<span class="year">${year} </span>`;
  }
  quoteString += "</p>";
  return quoteString;
}

// quote changes every 10 seconds until button is clicked
var interval = setInterval(getRandomQuote, 10000);
