let buttons1 = document.querySelectorAll(".score1");
let buttons2 = document.querySelectorAll(".score2");
let buttons3 = document.querySelectorAll(".score3");
let buttons4 = document.querySelectorAll(".score4");
let buttons5 = document.querySelectorAll(".score5");
let buttons6 = document.querySelectorAll(".score6");
let buttons7 = document.querySelectorAll(".score7");
let buttons8 = document.querySelectorAll(".score8");
let buttons9 = document.querySelectorAll(".score9");
let buttons10 = document.querySelectorAll(".score10");
let buttons11 = document.querySelectorAll(".score11");
let buttons12 = document.querySelectorAll(".score12");



let score1 = -1;
let score2 = -1;
let score3 = -1;
let score4 = -1;
let score5 = -1;
let score6 = -1;
let score7 = -1;
let score8 = -1;
let score9 = -1;
let score10 = -1;
let score11 = -1;
let score12 = -1;



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
  total = score1 + score2 + score3 + score4 + score5 + score6 + score7 + score8 + score9 + score10 + score11 + score12 ;
  a = total * 100
  b = a / 48 
  hoos_12 = 100 - b

    dor_total = score1 + score2 + score3 + score4;
    dor_a = dor_total * 100
    dor_b = dor_a / 16
    dor_hoos = 100 - dor_b

    funcao_total = score5 + score6 + score7 + score8;
    funcao_a = funcao_total * 100
    funcao_b = funcao_a / 16
    funcao_hoos = 100 - funcao_b

    qualidade_total = score9 + score10 + score11 + score12;
    qualidade_a = qualidade_total * 100
    qualidade_b = qualidade_a / 16
    qualidade_hoos = 100 - qualidade_b
  
}


// Create the Show results function for the display --------------------------------------------
function showResults() {
  if (
    score1 > -1 &&
    score2 > -1 &&
    score3 > -1 &&
    score4 > -1 &&
    score5 > -1 &&
    score6 > -1 &&
    score7 > -1 &&
    score8 > -1 &&
    score9 > -1 &&
    score10 > -1 &&
    score11 > -1 &&
    score12 > -1


  ) {
    let resultBox = document.querySelectorAll(".result-box").forEach((x)=> {x.classList.add("show-result")});
    let paragraph = document.getElementById("p").style.display = "none";
    console.log(total)
    result.innerHTML = `
    <p><b>KOOS-12 Score = ${hoos_12.toFixed(1)} % </b> </p>
    <p>- Dor: ${dor_hoos} % (${score1} + ${score2} + ${score3} + ${score4}  = ${dor_total} pontos) </p>
    <p>- Função: ${funcao_hoos} % (${score5} + ${score6} + ${score7} + ${score8} = ${funcao_total} pontos) </p>
    <p>- Qualidade de vida: ${qualidade_hoos} % (${score9} + ${score10} + ${score11} + ${score12} = ${qualidade_total} pontos) </p>

    
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

buttons9.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    removeClasses(buttons9);
    addClass(btn);
    score9 = parseInt(btn.dataset.value, 10);
    addScore(btn);
    showResults();
  });
});

buttons10.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    removeClasses(buttons10);
    addClass(btn);
    score10 = parseInt(btn.dataset.value, 10);
    addScore(btn);
    showResults();
  });
});

buttons11.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    removeClasses(buttons11);
    addClass(btn);
    score11 = parseInt(btn.dataset.value, 10);
    addScore(btn);
    showResults();
  });
});

buttons12.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    removeClasses(buttons12);
    addClass(btn);
    score12 = parseInt(btn.dataset.value, 10);
    addScore(btn);
    showResults();
  });
});

