/*
function printInside(text) {
    let newParagraph = document.createElement('p');
    newParagraph.className = "new-paragraph";
    newParagraph.innerText = text;
    document.getElementById('quote').appendChild(newParagraph);     
}
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

function getValue(button) {
    userChoice = button.value;
};*/

//function getQuote(button) {
//    generatorChoice = button.value;
//    document.getElementById('quote').innerHTML = "";
//     for (var i = 0; i < userChoice; i++) {
//        if (generatorChoice == 1) {
//            generatorOne();
 //       } else if (generatorChoice == 2) {
 //           generatorTwo();
//        }   
//    } 
//};






/*
function printQuote() {
    var pTag = document.getElementById("demo");
    pTag.innerText=generators();
}

printQuote();
*/

/*
// sentences for generatorOne
let userChoice;
let generatorChoice;
let first = 
[
    [   'Peace,','Love','Money','iPhones','Beauty','Happines'],
    [   ' will be',' will not be',' maybe wil be',' will never be',' must be',' must not be'],
    [   ' your end',' your start',' your future',' your tasks',' your past'],
]

// sentences for generatorTwo
let second = [
  [ 'Tulips','Roses','Daisys','Azaleas','Begonias','Gardenias'],
  [ ' are',' are not',' maybe are',' maybe are not',' have to be',' have not to be'],
  [ ' good',' awesome',' great',' red',' black'],
];

//generators
function generatorOne() {
  var picks = [];
  for (let i = 0; i < first.length; i++) {
    picks.push(first[i][Math.floor(Math.random() * first[i].length)]);
  }
  return picks.join(" ");
}


function generatorTwo() {
  var nicks = [];
  for (let i = 0; i < second.length; i++) {
    nicks.push(second[i][Math.floor(Math.random() * second[i].length)]);
  }
  return nicks.join(" ");
}

/*function generators (){
    var mix = document.getElementById("userInput").value;
    for (var i = 0; i < mix; i++){
        if (document.getElementById("quoteChoice").innerText === '1'){
            return generatorOne();
        } else if (document.getElementById("quoteChoice").innerText === '2'){
            return generatorTwo();
        }
    }
}*/
/*
function generators (){
    var mix = document.getElementById("userInput").value;
    let sentence;
        if (document.getElementById("quoteChoice").innerText === '1'){
            for (var i = 0; i < mix; i++) {
              sentence += generatorOne();
            }
        } else if (document.getElementById("quoteChoice").innerText === '2'){
            for (var i = 0; i< mix; i++) {
            sentence += generatorTwo();
        }
    }
    return sentence;
}


function printQuote() {
    var pTag = document.getElementById("demo");
    pTag.innerText=generators();
}

printQuote();


