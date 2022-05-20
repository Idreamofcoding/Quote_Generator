let btn = document.getElementById("btn");
let output = document.getElementById("output");
let quote = [
    "Quote 1",
    "Quote 2",
    "Quote 3",
    "Quote 4",
    "Quote 5",
    "Quote 6",
    "Quote 7",
    "Quote 8",
    "Quote 9",
    "Quote 10",
    "Quote 11",
    "Quote 12",
];

btn.addEventListener("click", function() {
    var randomQuote = quote[Math.floor(Math.random() * quote.length)];
    output.innerHTML = randomQuote
})
