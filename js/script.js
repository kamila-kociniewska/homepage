console.log("Dawka wiedzy w pigułce o Wyspach Kanaryjskich - miło, że tu jesteś!");

let button = document.querySelector(".button");
let body = document.querySelector(".body");
let themeName = document.querySelector(".themeName");

button.addEventListener("click", () => {
    body.classList.toggle("dark");

    themeName.innerText = body.classList.contains("dark") ? "Wróć do poprzedniego" : "Zobacz inny widok";

});

