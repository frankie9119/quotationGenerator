

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

// trying generators
function generator(arr) {
    quote = "";
    quote = arr[0][Math.floor(Math.random()*arr[0].length)];
    quote += arr[1][Math.floor(Math.random()*arr[1].length)];
    quote += arr[2][Math.floor(Math.random()*arr[2].length)];
};
function generators() {
    var mix = document.getElementById("userInput").value;
    let sentence = '';
    const element = document.getElementById("quoteChoice");
     if (element.value === '1'){
            for (var i = 0; i < mix; i++) {
              sentence += generator(first) + '. <br>';
            }
        } else if (element.value === '2') {
            for (var i = 0; i< mix; i++) {
            sentence += generator(second) + '. <br> ';
        }
    }
    //console.log(sentence);
    document.getElementById('demo').innerHTML = sentence.toString();
}

//generators
/*
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

function generators (){
    var mix = document.getElementById("userInput").value;
    //console.log(mix);
    let sentence = '';
    const element = document.getElementById("quoteChoice");
    //console.log(element.value);
    //console.log(document.getElementById("quoteChoice"));
        if (element.value === '1'){
            for (var i = 0; i < mix; i++) {
              sentence += generatorOne() + '. <br>';
            }
        } else if (element.value === '2') {
            for (var i = 0; i< mix; i++) {
            sentence += generatorTwo() + '. <br> ';
        }
    }
    //console.log(sentence);
    document.getElementById('demo').innerHTML = sentence.toString();
}
*/
