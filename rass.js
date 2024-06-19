let buttons1 = document.querySelectorAll(".score1");


let score1 = -1;


let total = 0;

let result = document.querySelector(".result-1");

let copy_1 = document.querySelector("#copy-1");


// Remove the class btn-success from all options ------------------------------------

function removeClasses(options) {
  options.forEach((option) => {
    option.classList.remove("btn-success");
  });
}

function removeClassesCognitive(options) {
  options.forEach((option) => {
    option.classList.remove("btn-success-cognitive");
  });
}

// Add the class btn-success when user clicks the option ---------------------------------------

function addClass(e) {
  e.classList.add("btn-success");
}
function addClassCognitive(e) {
  e.classList.add("btn-success-cognitive");
}

// Add all the scores ---------------------------------------
function addScore(btn) {
  console.log(total)
}




// Create the Show results function for the display --------------------------------------------
function showResults() {
  if (
    score1 >= -5 
  ) {
    let resultBox = document.querySelectorAll(".result-box").forEach((x)=> {x.classList.add("show-result")});
    let paragraph = document.getElementById("p").style.display = "none";
    result.innerHTML = `<p><b>Escala de RASS = ${score1} pts ( ${data_category} )</b></p>`;
  
  // Add the functionality of COPY the text inside the text field --------------------------------------------------------------
  copy_1.addEventListener("click", () => {
    navigator.clipboard.writeText(result.innerText);
  });
}
}


// Put it all together for each row / category --------------------------------------------------

buttons1.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    removeClasses(buttons1);
    addClass(btn);
    score1 = parseInt(btn.dataset.value, 10);
    data_name1 = btn.dataset.namea;
    data_category = btn.dataset.category;
    addScore(btn);
    showResults();
  });
});

