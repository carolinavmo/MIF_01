let buttons1 = document.querySelectorAll(".score1");
let buttons2 = document.querySelectorAll(".score2");
let buttons3 = document.querySelectorAll(".score3");
let buttons4 = document.querySelectorAll(".score4");
let buttons5 = document.querySelectorAll(".score5");



let score1 = -1;
let score2 = -1;
let score3 = -1;
let score4 = -1;
let score5 = -1;




let result = document.querySelector(".result-1");
let result2 = document.querySelector(".result-2");
let result3 = document.querySelector(".result-3");
let result4 = document.querySelector(".result-4");

let copy_1 = document.querySelector("#copy-1");
let copy_2 = document.querySelector("#copy-2");
let copy_3 = document.querySelector("#copy-3");
let copy_4 = document.querySelector("#copy-4");


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


function calculate () {
  // Input range scores
  score2 = document.getElementById("score2").value
  score3 = document.getElementById("score3").value
  score4 = document.getElementById("score4").value

  // score3 = document.getElementById("score3").value
  // score4 = document.getElementById("score4").value
  // score10 = document.getElementById("score10").value
  // score8_total = 0
  console.log(score1)
}



// Create the Show results function for the display --------------------------------------------
function showResults() {
  if (
    score1 > -1 &&
    score2 > -1 &&
    score3 > -1 &&
    score4 > -1 

  ) {
    let resultBox = document.querySelectorAll(".result-box").forEach((x)=> {x.classList.add("show-result")});
    let paragraph = document.getElementById("p").style.display = "none";

    result4.innerHTML
     = 
       result4.innerHTML
  =  `<p><strong>Esquema PERFECT</strong> = 
      Contração grau ${score1}, que sustenta por ${score2} seg, repete  ${score3} vezes, seguida por  ${score4} contrações rápidas.  </p> `

     
}     
     



   copy_4.addEventListener("click", () => {
     navigator.clipboard.writeText(result4.innerText);
   });
}


// Put it all together for each row / category --------------------------------------------------

buttons1.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    removeClasses(buttons1);
    addClass(btn);
    score1 = parseInt(btn.dataset.value, 10);
    data_name1 = btn.dataset.namea;
    data_category = btn.dataset.category;
    console.log(score1)
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
    
    showResults();
  });
});

// THE END ------------------------------------------------------------------------------------

let calculate_btn = document.getElementById("calculate_btn")

calculate_btn.addEventListener("click", () => {
  calculate()
  showResults()
  console.log()
})