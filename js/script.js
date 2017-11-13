var quotes = [
  {
    quote: 'Always Play Dressup!',
    source: 'Beth Jones',
    citation: 'BjonesStyle',
  },

  {
    quote: 'Fashion is like eating, you shouldn\'t stick to the same menu.',
    source: 'Kenzo Takada',
  },
  {
    quote: 'When I first moved to New York and I was totally broke, sometimes I would buy Vogue instead of dinner. I felt it fed me more.',
    source: 'Carrie Bradshaw',
    citation: 'Sex and the City',
    year: 2001
  },
  {
    quote: 'People will stare, make it worth their while.',
    source: 'Harry Winston',
  },
  {
    quote: 'You can have anything you want if you dress for it.',
    source: 'Edith Head',
  },
  {
    quote: 'Style is a way to say who you are without having to speak.',
    source: 'Rachel Zoe',
    citation: 'InStyle',
    year: 2015
  }
];


// new colors to change with each quote
var colors = [
  'teal', 'pink', 'orange', 'purple', 'skyblue', 'turquoise', 'fuchsia', 'lime', 'maroon'
]

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called

// Get a hold of the button by its id
var buttonEL = document.getElementById('loadQuote')
// Add an event listener to the button
buttonEL.addEventListener("click", printQuote, false);

// Our event listener function for the button
function printQuote() {

    // select all of the elements we need
    var quoteElements   = document.getElementsByClassName('quote');
    var sourceElements = document.getElementsByClassName('sourcespan');
    var citationElements = document.getElementsByClassName('citation');
    var yearElements = document.getElementsByClassName('year');
    var bodyTag = document.getElementsByTagName('body')[0];

    // get first element out of first selection
    var quoteSpan = quoteElements[0];
    var sourceSpan = sourceElements[0];
    var citationSpan = citationElements[0];
    var yearSpan = yearElements[0];

    // set the html content
    var randomQuoteObj = getRamdomQuotes();
    bodyTag.style['background-color'] = colors[randomNumberBetween(0, colors.length -1)];
    quoteSpan.innerHTML = randomQuoteObj.quote;
    sourceSpan.innerHTML = randomQuoteObj.source;

      // Not all quotes have a known year and/or a citation
      if (randomQuoteObj.year) {
        yearSpan.innerHTML = ', ' + randomQuoteObj.year
      } else {
        yearSpan.innerHTML = ''
      }

      if (randomQuoteObj.citation) {
        citationSpan.innerHTML = ', ' + randomQuoteObj.citation
      } else {
        citationSpan.innerHTML = ''
      }
}

// function picking a number between min and max
function randomNumberBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRamdomQuotes() {
    return quotes[randomNumberBetween(0, quotes.length -1)];
}
