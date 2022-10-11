
// your age in days
function ageInDays() {
let birthYear = prompt ("What year where you born?")

let days = (2022 - birthYear) * 365;
let h1 = document.createElement ("h1");
let textAnswer = document.createTextNode("You are " + days + " days old");
h1.setAttribute("id" , "ageInDays" );
h1.appendChild(textAnswer);
document.getElementById("flex-box-result").appendChild(h1);
}

function reset() {
document.getElementById("ageInDays").remove();

}