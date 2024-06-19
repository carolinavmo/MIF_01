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
let buttons13 = document.querySelectorAll(".score13");
let buttons14 = document.querySelectorAll(".score14");
let buttons15 = document.querySelectorAll(".score15");
let buttons16 = document.querySelectorAll(".score16");



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
let score13 = -1;
let score14 = -1;
let score15 = -1;
let score16 = -1;



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
  total = score1 + score2 + score3 + score4 + score5 + score6 + score7 + score8 + score9 + score10 + score11 + score12 + score13 + score14 + score15;

  cuidado_pessoal = score1 + score2 + score3 + score4
  domestico = score5 + score6 + score7 + score8 + score9 + score10
  atividade_fisica = score11 + score12
  lazer = score13 + score14 + score15


  
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
    score12 > -1 &&
    score13 > -1 &&
    score14 > -1 &&
    score15 > -1 &&
    score16 > -1 
  ) {
    let resultBox = document.querySelectorAll(".result-box").forEach((x)=> {x.classList.add("show-result")});
    let paragraph = document.getElementById("p").style.display = "none";
    console.log(total)
    result.innerHTML = `
    <p><b>LCADL Score =     (${score1} + ${score2} + ${score3} + ${score4} + ${score5} + ${score6} + ${score7} + ${score8} + 
      ${score9} + ${score10} + ${score11} + ${score12} + ${score13} + ${score14} + ${score15} ) = ${total} pontos </b></p>
      <p>- Cuidado pessoal = (${score1} + ${score2} + ${score3} + ${score4}) = ${cuidado_pessoal}     </p>
      <p>- Doméstico = (${score5} + ${score6} + ${score7} + ${score8} + ${score9} + ${score10}) = ${domestico}     </p>
      <p>- Atividade física = (${score11} + ${score12}) = ${atividade_fisica}     </p>
      <p>- Lazer = (${score13} + ${score14} + ${score15}) = ${lazer}     </p>
      <p>- Quanto a sua respiração o prejudica nas suas actividades do dia-a dia? ${data_category}
      </p>

    
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

buttons13.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    removeClasses(buttons13);
    addClass(btn);
    score13 = parseInt(btn.dataset.value, 10);
    addScore(btn);
    showResults();
  });
});

buttons14.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    removeClasses(buttons14);
    addClass(btn);
    score14 = parseInt(btn.dataset.value, 10);
    addScore(btn);
    showResults();
  });
});

buttons15.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    removeClasses(buttons15);
    addClass(btn);
    score15 = parseInt(btn.dataset.value, 10);
    addScore(btn);
    showResults();
  });
});
buttons16.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    removeClasses(buttons16);
    addClass(btn);
    score16 = parseInt(btn.dataset.value, 10);
    data_category = btn.dataset.category;
    addScore(btn);
    showResults();
  });
});