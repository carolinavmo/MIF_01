let buttons1 = document.querySelectorAll(".score1");
let buttons2 = document.querySelectorAll(".score2");
let buttons3 = document.querySelectorAll(".score3");
let buttons4 = document.querySelectorAll(".score4");
let buttons5 = document.querySelectorAll(".score5");
let buttons6 = document.querySelectorAll(".score6");




let score1 = -1;
let score2 = -1;
let score3 = -1;
let score4 = -1;
let score5 = -1;
let score6 = -1;




let total = 0;

let result = document.querySelector(".result-1");
let copy_1 = document.querySelector("#copy-1");

// Remove the class btn-success from all options ------------------------------------

function removeClasses(options) {
  options.forEach((option) => {
    option.classList.remove("btn-success");
  });
}


// Add the class btn-success when user clicks the option ---------------------------------------

function addClass(e) {
  e.classList.add("btn-success");
}

let score_dash
// Add all the scores ---------------------------------------
function addScore(btn) {
  total = score1 + score2 + score3 + score4 + score5 + score6 

  ab = total / 6
  udi_score = ab * (33 + (1/3))
  
}


// Create the Show results function for the display --------------------------------------------
function showResults() {
  if (
    score1 > -1 &&
    score2 > -1 &&
    score3 > -1 &&
    score4 > -1 &&
    score5 > -1 &&
    score6 > -1 


  ) {
    let resultBox = document.querySelectorAll(".result-box").forEach((x)=> {x.classList.add("show-result")});
    let paragraph = document.getElementById("p").style.display = "none";
    console.log(total)
    result.innerHTML = `
    <p><b>UDI-6 Score = (${score1} + ${score2} + ${score3} + ${score4} + ${score5} + ${score6} ) = ${udi_score.toFixed(1)}  </b> </p>
    <p></p>

    
    `;
  }


  // Add the functionality of COPY the text inside the text field --------------------------------------------------------------
  copy_1.addEventListener("click", () => {
    navigator.clipboard.writeText(result.innerText);
  });
}


// Put it all together for each row / category --------------------------------------------------


buttons1.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    removeClasses(buttons1);
    addClass(btn);
    score1 = parseInt(btn.dataset.value, 10);
    addScore(btn);
    showResults();
  });
});

buttons2.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    removeClasses(buttons2);
    addClass(btn);
    score2 = parseInt(btn.dataset.value, 10);
    addScore(btn);
    showResults();
  });
});

buttons3.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    removeClasses(buttons3);
    addClass(btn);
    score3 = parseInt(btn.dataset.value, 10);
    addScore(btn);
    showResults();
  });
});

buttons4.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    removeClasses(buttons4);
    addClass(btn);
    score4 = parseInt(btn.dataset.value, 10);
    addScore(btn);
    showResults();
  });
});

buttons5.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    removeClasses(buttons5);
    addClass(btn);
    score5 = parseInt(btn.dataset.value, 10);
    addScore(btn);
    showResults();
  });
});

buttons6.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    removeClasses(buttons6);
    addClass(btn);
    score6 = parseInt(btn.dataset.value, 10);
    addScore(btn);
    showResults();
  });
});
