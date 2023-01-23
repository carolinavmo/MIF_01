let buttons1 = document.querySelectorAll(".score1");
let buttons2 = document.querySelectorAll(".score2");
let buttons3 = document.querySelectorAll(".score3");
let buttons4 = document.querySelectorAll(".score4");
let buttons5 = document.querySelectorAll(".score5");
let buttons6 = document.querySelectorAll(".score6");
let buttons7 = document.querySelectorAll(".score7");
let buttons8 = document.querySelectorAll(".score8");

let score1 = -1;
let score2 = -1;
let score3 = -1;
let score4 = -1;
let score5 = -1;
let score6 = -1;
let score7 = -1;
let score8 = -1;

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


// Add all the scores ---------------------------------------
function addScore(btn) {
  total = score1 + score2 + score3 + score4 + score5 + score6 + score7 + score8;
}




// Create the Show results function for the display --------------------------------------------
function showResults() {
  if (
    score1 >= 0 &&
    score2 >= 0 &&
    score3 >= 0 &&
    score4 >= 0 &&
    score5 >= 0 &&
    score6 >= 0 &&
    score7 >= 0 &&
    score8 >= 0 
  ) {
    let resultBox = document.querySelectorAll(".result-box").forEach((x)=> {x.classList.add("show-result")});
    let paragraph = document.getElementById("p").style.display = "none";
    result.innerText = `Escala de Lawton & Brody = ${total} / 8 pts.`;
  
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

buttons2.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    removeClasses(buttons2);
    addClass(btn);
    score2 = parseInt(btn.dataset.value, 10);
    data_name2 = btn.dataset.nameb;
    data_category = btn.dataset.category;
    addScore(btn);
    showResults();
  });
});

buttons3.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    removeClasses(buttons3);
    addClass(btn);
    score3 = parseInt(btn.dataset.value, 10);
    data_name3 = btn.dataset.namec;
    data_category = btn.dataset.category;
    
    addScore(btn);
    showResults();
  });
});

buttons4.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    removeClasses(buttons4);
    addClass(btn);
    score4 = parseInt(btn.dataset.value, 10);
    data_name4 = btn.dataset.named;
    data_category = btn.dataset.category;
    addScore(btn);
    showResults();
  });
});

buttons5.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    removeClasses(buttons5);
    addClass(btn);
    score5 = parseInt(btn.dataset.value, 10);
    data_name5 = btn.dataset.namee;
    data_category = btn.dataset.category;
    addScore(btn);
    showResults();
  });
});

buttons6.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    removeClasses(buttons6);
    addClass(btn);
    score6 = parseInt(btn.dataset.value, 10);
    data_name6 = btn.dataset.namef;
    data_category = btn.dataset.category;
    addScore(btn);
    showResults();
  });
});

buttons7.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      removeClasses(buttons7);
      addClass(btn);
      score7 = parseInt(btn.dataset.value, 10);
      addScore(btn);
      showResults();
    });
  });

  buttons8.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      removeClasses(buttons8);
      addClass(btn);
      score8 = parseInt(btn.dataset.value, 10);
      addScore(btn);
      showResults();
    });
  });