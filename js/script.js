var quotes = [
  {
    quote: 'Always Play Dressup!',
    source: 'Beth Jones',
    citation: 'BjonesStyle'
  },

  {
    quote: 'I like my money right where I can see it, hanging in my closet.',
    source: 'Carrie Bradshaw',
    citation: 'Sex and the City',
    year: 2003
  },
  {
    quote: 'When I first moved to New York and I was totally broke, sometimes I would buy Vogue instead of dinner. I felt it fed me more.',
    source: 'Carrie Bradshaw',
    citation: 'Sex and the City',
    year: 2001
  }
];

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called

// Get a hold of the button by its id
var buttonEL = document.getElementById('loadQuote')
// Add an event listener to the button
buttonEL.addEventListener("click", printQuote, false);

// Our event listener function for the button
function printQuote() {

    var quoteElements   = document.getElementsByClassName('quote');
    var sourceElements = document.getElementsByClassName('sourcespan');
    var citationElements = document.getElementsByClassName('citation');
    var yearElements = document.getElementsByClassName('year');
    var quoteSpan = quoteElements[0];
    var sourceSpan = sourceElements[0];
    var citationSpan = citationElements[0];
    var yearSpan = yearElements[0];
    var randomQuoteObj = quotes[randomNumberBetween(0, quotes.length -1)];
    quoteSpan.innerHTML = randomQuoteObj.quote;
    sourceSpan.innerHTML = randomQuoteObj.source;
    citationSpan.innerHTML = randomQuoteObj.citation;
    yearSpan.innerHTML = randomQuoteObj.year;

// Array with no year displays undefined. 

}


function randomNumberBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
