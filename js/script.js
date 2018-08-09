// new colors to change with each quote
var colors = [
  'teal', 'pink', 'orange', 'purple', 'skyblue', 'turquoise', 'fuchsia', 'lime', 'maroon', 'mango'
]

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called

// Get a hold of the button by its id
var buttonEL = document.getElementById('loadQuote')
// Add an event listener to the button
buttonEL.addEventListener("click", printQuote);

// Our event listener function for the button
function printQuote() {
  clearInterval (interval);

  // set the html content


  // change the background color
  var bodyTag = document.getElementsByTagName('body') [0];
  bodyTag.style['background-color'] = colors[randomNumberBetween(0, colors.length -1)];
  getRandomQuote()
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
  }).then((response) => {
    return response.json()
  }).then((response) => {
    var randomQuoteObj = response;
    var quoteString = constructQuote(randomQuoteObj.quote, randomQuoteObj.source, randomQuoteObj.year);
    document.getElementById('quote-box').innerHTML = quoteString;
  }).catch( error => {
      console.log('error')
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
  quoteString += '</p>'
  return quoteString;
}

// quote changes every 10 seconds until button is clicked
var interval = setInterval(printQuote, 10000);
