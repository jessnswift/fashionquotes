var quotes = [
  'Always Play Dressup!',
  'I like my money right where I can see it, hanging in my closet.',
  'When I first moved to New York and I was totally broke, sometimes I would buy Vogue instead of dinner. I felt it fed me more.'
];

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called

// Get a hold of the button by its id
var buttonEL = document.getElementById('loadQuote')
// Add an event listener to the button
buttonEL.addEventListener("click", printQuote, false);

// Our event listener function for the button
function printQuote() {
    var quoteElements = document.getElementsByClassName('quote');
    var quoteParagraph = quoteElements[0];
    quoteParagraph.innerHTML = quotes[randomNumberBetween(0, quotes.length -1)];
}
function randomNumberBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
