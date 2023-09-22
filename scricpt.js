let subject = "javascript";
console.log("Hello " +subject); 

let chooseColor = document.getElementById("chooseColor");
let colorBtn = document.getElementById("colorBtn");
let age = document.getElementById("age");
let testage = document.getElementById("testage");
let content = document.getElementById("content")

colorBtn.addEventListener("click",(e)=> {
    console.log("klick på knapp")

    let choosenColor = chooseColor.value;
    console.log(choosenColor);
    document.body.style.backgroundColor = choosenColor
})

testage.addEventListener("click", (e) =>{
    let getage = age.value;

    console.log("age" + getage);

    if (getage < 18){
        console.log("Mindre än 18");
        content.innerText = "sorry kom tillbaks om några år"; 

    } else {
        console.log("större än 18");
        content.innerText = "vassegod ta en öl!";
    }
})