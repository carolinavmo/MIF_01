
let buttons2 = document.querySelectorAll(".score2");
let buttons3 = document.querySelectorAll(".score3");
let buttons4 = document.querySelectorAll(".score4");
let buttons5 = document.querySelectorAll(".score5");
let buttons6 = document.querySelectorAll(".score6");
let buttons7 = document.querySelectorAll(".score7");
let buttons8 = document.querySelectorAll(".score8");
let buttons9 = document.querySelectorAll(".score9");
let buttons10 = document.querySelectorAll(".score10");


let score1 = 0







let score2 = 0;
let score3 = 0;
let score4 = 0;
let score5 = 0;
let score6 = 0;
let score7 = 0;
let score8 = 0;
let score9 = 0;
let score10 = 0;



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
  // total = score1 + score2 + score3 + score4 + score5 + score6 + score7 + score8 + score9 + score10 + score11 + score12 + score13 + score14 + score15 + score16 + score17 + score18 + score19 + score20 + score21 + score22 + score23 + score24 + score25 + score26 + score27 + score28 + score29 + score30;
  // let sum_dash = total / 30;
  // let a = sum_dash - 1;
  // score_dash = a * 25;
  

  
}

let score8_total = 0

function calculate () {
  // Input range scores
  score1 = document.getElementById("score1").value
  score3 = document.getElementById("score3").value
  score4 = document.getElementById("score4").value
  score10 = document.getElementById("score10").value
  score8_total = 0


  // Multiple choices score

  buttons8.forEach((btn) => {
    if (btn.classList.contains("btn-success")) {
      score8_total = score8_total + parseInt(btn.dataset.value, 10); 
    }
  })

  // Total score
  constant_total = parseInt(score1) + parseInt(score2) + parseInt(score3) + parseInt(score4) + parseInt(score5) + parseInt(score6) + parseInt(score7) + parseInt(score8_total) + parseInt(score9) + parseInt(score10)
  avd_total =  parseInt(score2) + parseInt(score3) + parseInt(score4) + parseInt(score5)
  movimento_total = parseInt(score6) + parseInt(score7) + parseInt(score8_total) + parseInt(score9) + parseInt(score10)
}
//score1 + score2 + score3 + score4 + score5 + score6 + score7 + score8_total + score9 + score10;
// Create the Show results function for the display --------------------------------------------
function showResults() {

    let resultBox = document.querySelectorAll(".result-box").forEach((x)=> {x.classList.add("show-result")});
    let paragraph = document.getElementById("p").style.display = "none";



    result.innerHTML = `
    <b>Constant-Murley Score: ${constant_total} pontos </b>
    <p>A) Dor: ${score1} pontos </p>
    <p>B) Atividades de Vida Diárias: ${avd_total} pontos (${score2} + ${score3} + ${score4} + ${score5}) </p>
    <p>C) Movimento: ${movimento_total} pontos ( ${score6} + ${score7} + ${score8_total} + ${score9} ) </p>
    <p>D) Força: ${score10} pontos </p>
    
    `;
  }


  // Add the functionality of COPY the text inside the text field --------------------------------------------------------------
  copy_1.addEventListener("click", () => {
    navigator.clipboard.writeText(result.innerText);
  });



// Put it all together for each row / category --------------------------------------------------




buttons2.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    removeClasses(buttons2);
    addClass(btn);
    score2 = parseInt(btn.dataset.value, 10);
    addScore(btn);
  });
});

buttons3.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    removeClasses(buttons3);
    addClass(btn);
    score3 = parseInt(btn.dataset.value, 10);
    addScore(btn);
  });
});

buttons4.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    removeClasses(buttons4);
    addClass(btn);
    score4 = parseInt(btn.dataset.value, 10);
    addScore(btn);
  });
});

buttons5.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    removeClasses(buttons5);
    addClass(btn);
    score5 = parseInt(btn.dataset.value, 10);
    addScore(btn);
  });
});

buttons6.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    removeClasses(buttons6);
    addClass(btn);
    score6 = parseInt(btn.dataset.value, 10);
    addScore(btn);
  });
});

buttons7.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    removeClasses(buttons7);
    addClass(btn);
    score7 = parseInt(btn.dataset.value, 10);
    addScore(btn);
  });
});



buttons8.forEach((btn) => {
  btn.addEventListener("click", (e) => {

  
    if (btn.classList.contains("btn-success")) {
      btn.classList.remove("btn-success")
    } else {
      addClass(btn);
    }




    // removeClasses(buttons8);
    
    
    // addScore(btn);
    // showResults();
  });
});

buttons9.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    removeClasses(buttons9);
    addClass(btn);
    score9 = parseInt(btn.dataset.value, 10);
    addScore(btn);
  });
});

buttons10.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    removeClasses(buttons10);
    addClass(btn);
    score10 = parseInt(btn.dataset.value, 10);
    addScore(btn);
  });
});




// THE END ------------------------------------------------------------------------------------




let calculate_btn = document.getElementById("calculate_btn")

calculate_btn.addEventListener("click", () => {
  calculate()
  showResults()
  console.log(constant_total)
})