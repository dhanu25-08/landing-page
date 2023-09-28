/*   header starts  */
let navbar = document.querySelector(".navbar");
document.querySelector("#menu-btn").onclick = () =>{
    navbar.classList.toggle("active");
    searchForm.classList.remove("active");
    cartItem.classList.remove("active");
}

let searchForm = document.querySelector(".search-form");
document.querySelector("#search-btn").onclick = () =>{
    searchForm.classList.toggle("active");
    navbar.classList.remove("active");
    cartItem.classList.remove("active");
}

let cartItem = document.querySelector(".cart-items-container");
document.querySelector("#cart-btn").onclick = () =>{
    cartItem.classList.toggle("active");
    navbar.classList.remove("active");
    searchForm.classList.remove("active");

}
window.onscroll = () =>{
    navbar.classList.remove("active");
    searchForm.classList.remove("active");
    cartItem.classList.remove("active");
}
/* --- header ends -- */
let displayEl = document.getElementById("display");
let requiredParaEl = document.getElementById("requiredPara")

let num7EL = document.getElementById("num7");
let num8EL = document.getElementById("num8");
let num9EL = document.getElementById("num9");
let plusEL = document.getElementById("plus");


let num4EL = document.getElementById("num4");
let num5EL = document.getElementById("num5");
let num6EL = document.getElementById("num6");
let minusEl = document.getElementById("minus");

let num1EL = document.getElementById("num1");
let num2EL = document.getElementById("num2");
let num3EL = document.getElementById("num3");
let multiplicationEl = document.getElementById("multiplication");

let num0EL = document.getElementById("num0");

let allClearEL = document.getElementById("allClear");
let equalEL = document.getElementById("equal");
let divideEl = document.getElementById("divide");



let emptyEl = 0;
let emptyEl1 = 0;
let emptyEl2 = 0;
let valueEl = "";
let elem = 0;
let valueEl1 = "";

displayEl.addEventListener("keydown", function(event) {

    if (event.key === "+") {
        emptyEl = parseInt(event.target.value);
        event.target.value = "";
        valueEl1 = "+";
        //console.log(emptyEl);
    } else if (event.key === "-") {
        emptyEl = parseInt(event.target.value);
        event.target.value = "";
        valueEl1 = "-";
        //console.log(emptyEl);
    } else if (event.key === "*") {
        emptyEl = parseInt(event.target.value);
        event.target.value = "";
        valueEl1 = "*";
        //console.log(emptyEl);
    } else if (event.key === "/") {
        emptyEl = parseInt(event.target.value);
        event.target.value = "";
        valueEl1 = "/";
        //console.log(emptyEl);
    } else if (event.key === "Enter") {

        if (valueEl1 === "+") {
            emptyEl1 = parseInt(displayEl.value);
            //console.log(emptyEl1);
            emptyEl += emptyEl1;
            event.target.value = emptyEl;
        } else if (valueEl1 === "-") {
            emptyEl1 = parseInt(displayEl.value);
            //console.log(emptyEl1);
            emptyEl -= emptyEl1;
            event.target.value = emptyEl;
        } else if (valueEl1 === "*") {
            emptyEl1 = parseInt(displayEl.value);
            //console.log(emptyEl1);
            emptyEl *= emptyEl1;
            event.target.value = emptyEl;
        } else if (valueEl1 === "/") {
            emptyEl1 = parseInt(displayEl.value);
            //console.log(emptyEl1);
            emptyEl /= emptyEl1;
            event.target.value = emptyEl;
        }
    }

});


num1EL.onclick = function(event) {
    emptyEl += 1;
    displayEl.value = emptyEl;
}
num2EL.onclick = function(event) {
    emptyEl += 2;
    displayEl.value = emptyEl;
}
num3EL.onclick = function(event) {
    emptyEl += 3;
    displayEl.value = emptyEl;
}
num4EL.onclick = function(event) {
    emptyEl += 4;
    displayEl.value = emptyEl;
}
num5EL.onclick = function(event) {
    emptyEl += 5;
    displayEl.value = emptyEl;
}
num6EL.onclick = function(event) {
    emptyEl += 6;
    displayEl.value = emptyEl;
}
num7EL.onclick = function(event) {
    emptyEl += 7;
    displayEl.value = emptyEl;
}
num8EL.onclick = function(event) {
    emptyEl += 8;
    displayEl.value = emptyEl;
}
num9EL.onclick = function(event) {
    emptyEl += 9;
    displayEl.value = emptyEl;
}
num0EL.onclick = function(event) {
    emptyEl += 0;
    displayEl.value = emptyEl;
}



plusEL.addEventListener("click", function(event) {
    if (displayEl.value === "") {
        requiredParaEl.textContent = "----------Required any Integer----------";
    } else {
        emptyEl1 = parseInt(display.value);
        console.log((emptyEl1));
        emptyEl = "";
        valueEl = "+";
        displayEl.value = "+";
        requiredParaEl.textContent = "";
    }
});
minusEl.addEventListener("click", function(event) {
    if (displayEl.value === "") {
        requiredParaEl.textContent = "----------Required any Integer----------";
    } else {
        emptyEl1 = parseInt(display.value);
        console.log((emptyEl1));
        emptyEl = "";
        valueEl = "-";
        displayEl.value = "-";
        requiredParaEl.textContent = "";
    }
});
multiplicationEl.addEventListener("click", function(event) {
    if (displayEl.value === "") {
        requiredParaEl.textContent = "---------Required any Integer---------";
    } else {
        emptyEl1 = parseInt(display.value);
        console.log((emptyEl1));
        emptyEl = "";
        valueEl = "*";
        displayEl.value = "*";
        requiredParaEl.textContent = "";
    }
});
divideEl.addEventListener("click", function(event) {
    if (displayEl.value === "") {
        requiredParaEl.textContent = "---------Required any Integer---------";
    } else {
        emptyEl1 = parseInt(display.value);
        console.log((emptyEl1));
        emptyEl = "";
        valueEl = "/";
        displayEl.value = "/";
        requiredParaEl.textContent = "";
    }
});
equalEL.addEventListener("click", function(event) {
    if (displayEl.value === "") {
        requiredParaEl.textContent = "--------Required any Integer--------";
    } else {
        if (valueEl === "+") {
            emptyEl1 += parseInt(emptyEl);
            displayEl.value = (emptyEl1);
        }
        if (valueEl === "-") {
            emptyEl1 -= parseInt(emptyEl);
            displayEl.value = (emptyEl1);
        }
        if (valueEl === "*") {
            emptyEl1 *= parseInt(emptyEl);
            displayEl.value = (emptyEl1);
        }
        if (valueEl === "/") {
            emptyEl1 /= parseInt(emptyEl);
            displayEl.value = (emptyEl1);
        }
        requiredParaEl.textContent = "";
    }
});
allClearEL.addEventListener("click", function(event) {
    if (displayEl.value === "") {
        requiredParaEl.textContent = "-----    Nothing to clear    ------";
    } else {
        emptyEl = 0;
        emptyEl1 = 0;
        displayEl.value = "";
        requiredParaEl.textContent = "";
    }
});