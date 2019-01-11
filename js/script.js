let qt_btn = document.getElementById('qt_btn');

let array1 = [ "peace " , "love" , "money"];
let array2 = [ "will be " , "will never be ", "maybe will be"];
let array3 = ["your end", "your start", "your tasks"];

function checkStringForMatch (str, word) {
    return str.indexOf(word) !== -1
}

function finalQuote(...arrs) {
let quote = '';
    for (let i = 0; i < arrs.length; i++) {
        quote += arrs[i][Math.floor(Math.random() * 3)] + ' ';
    }
    if (checkStringForMatch(quote, 'peace') && checkStringForMatch(quote, 'will be') && checkStringForMatch(quote, 'your end')){
        alert("you found me!");
    } else {
        alert(quote)
    }
}

qt_btn.addEventListener("click", function(event) {
    finalQuote(array1, array2, array3);
});
