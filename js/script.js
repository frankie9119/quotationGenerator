// sentences for generatorOne
let userChoice;
let generatorChoice;
let first = 
[
[   'Peace,',
    'Love',
    'Money',
    'iPhones',
    'Beauty',
    'Happines',
    
],
[   ' will be',
    ' will not be',
    ' maybe wil be',
    ' will never be',
    ' must be',
    ' must not be',
    
],
[
    ' your end',
    ' your start',
    ' your future',
    ' your tasks',
    ' your past',
    
],
]

function printInside(text) {
    let newParagraph = document.createElement('p');
    newParagraph.className = "new-paragraph";
    newParagraph.innerText = text;
    document.getElementById('quote').appendChild(newParagraph);
       
}
// sentences for generatorTwo
let second = [
[   'Tulips',
    'Roses',
    'Daisys',
    'Azaleas',
    'Begonias',
    'Gardenias',
    
],
[   ' are',
    ' are not',
    ' maybe are',
    ' maybe are not',
    ' have to be',
    ' have not to be',
    
],
[
    ' good',
    ' awesome',
    ' great',
    ' red',
    ' black',
    
],

];


// create a quote with generator

function generator(arr) {
    quoteTwo = "";
    quoteTwo = arr[0][Math.floor(Math.random()*arr[0].length)];
    quoteTwo += arr[1][Math.floor(Math.random()*arr[1].length)];

    if(arr.length == 3) {
        quoteTwo += arr[2][Math.floor(Math.random()*arr[2].length)];
    }
    printInside(quoteTwo);
};

//function getValue(button) {
 //   userChoice = button.value;
//};
/*
function getValue()
    {
      var quotesChoice = document.getElementById("quotesChoice");
      for (var i = 0; i < quotesChoice.options.length; i++) {
         if(quotesChoice.options[i].selected ==true){
              return result;
          }
      }
    }

function getQuote(button) {
    generatorChoice = button.value;
   // document.getElementById('quote').innerHTML = "";
     for (var i = 0; i < userChoice; i++) {
        if (generatorChoice == 1) {
            generator(first);
        } else if (generatorChoice == 2) {
            generator(second);
        }   
    } 
}; 
*/

var finalQuote = function(){
    var quotesChoice = document.getElementById("quotesChoice");
      for (var i = 0; i < quotesChoice.options.length; i++) {
         if(quotesChoice.options[i].selected ==true){
              return result;
          }
      }
       generatorChoice = button.value;
   // document.getElementById('quote').innerHTML = "";
     for (var i = 0; i < userChoice; i++) {
        if (generatorChoice == 1) {
            generator(first);
        } else if (generatorChoice == 2) {
            generator(second);
        }   
    } 
};

qt_btn.addEventListener("click", function(event) {
    finalQuote();
});











