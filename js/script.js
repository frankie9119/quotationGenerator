let userChoice;
let generatorChoice;
// sentences for generatorOne
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

// random generator
function generator(arr) {
    quote = "";
    quote = arr[0][Math.floor(Math.random()*arr[0].length)];
    quote += arr[1][Math.floor(Math.random()*arr[1].length)];
    quote += arr[2][Math.floor(Math.random()*arr[2].length)];

    return quote
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
    document.getElementById('demo').innerHTML = sentence.toString();
}

let button = document.getElementById("make-quote");

button.addEventListener("click",function(){
  generators()
})