let botaoSignIn = document.querySelector("#signin");
let botaoSignUp = document.querySelector("#signup");
let body = document.querySelector("body");

botaoSignIn.addEventListener("click", function () {
    body.className = "sign__in__js";
});

botaoSignUp.addEventListener("click", function () {
    body.className = "sign__up__js";
});