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

let score7_name = "NT";
let score8_name  = "NT";
let score9_name  = "NT";
let score10_name  = "NT";
let score11_name  = "NT";
let score14_name  = "NT";
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

  total = score1 + score2 + score3 + score4 + score5 + score6 + score7 + score8 + score9 + score10 + score11 + score12 + score13 + score14 + score15;





  // if (score7 == "NT") {
  //   score7 = 0
  //  } else {
  //   total = total + score7
  //   score7_name = score7
  //   console.log(score7_name)
  //  }

  //  if (score8 === "NT") {
  //   score8 = 0
  //  } else {
  //   total += score7
  //   score8_name = score8
  //  }

  //  if (score9 === "NT") {
  //   score9 = 0
  //  } else {
  //   total += score9
  //   score9_name = score9
  //  }

  //  if (score10 === "NT") {
  //   score10 = 0
  //  } else {
  //   total += score10
  //   score10_name = score10

  //  }


  //  if (score11 === "NT") {
  //   score11 = 0
  //  } else {
  //   total += score11
  //   score11_name = score11
  //  }


  //  if (score14 === "NT") {
  //   score14 = 0
  //  } else {
  //   total += score14
  //   score14_name = score14

  //  }





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
    score8 >= 0 &&
    score9 >= 0 &&
    score10 >= 0 &&
    score11 >= 0 &&
    score12 >= 0 &&
    score13 >= 0 &&
    score14 >= 0 &&
    score15 >= 0 
  ) {


    console.log(score7_name)

    let resultBox = document.querySelectorAll(".result-box").forEach((x)=> {x.classList.add("show-result")});
    let paragraph = document.getElementById("p").style.display = "none";

    result.innerText = `Escala NIHSS = (${score1} + ${score2} + ${score3} + ${score4} + ${score5} + ${score6} + ${score7_name} + ${score8_name} + ${score9_name} + ${score10_name} + ${score11_name} + ${score12} + ${score13} + ${score14_name} + ${score15}) = ${total} pontos.`;
    
  
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
    data_name7 = btn.dataset.nameg;
    score7_name = btn.dataset.category;
    if (score7_name === "NT") {
      score7 = 0
    } 
    addScore(btn);
    showResults();
  });
});
buttons8.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    removeClasses(buttons8);
    addClass(btn);
    score8 = parseInt(btn.dataset.value, 10);
    data_name8 = btn.dataset.nameh;
    score8_name = btn.dataset.category;
    if (score8_name === "NT") {
      score8 = 0
    }

    addScore(btn);
    showResults();
  });
});

buttons9.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    removeClasses(buttons9);
    addClass(btn);
    score9 = parseInt(btn.dataset.value, 10);
    data_name9 = btn.dataset.namei;
    score9_name = btn.dataset.category;
    if (score9_name === "NT") {
      score9 = 0
    }

    addScore(btn);
    showResults();
  });
});

buttons10.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    removeClasses(buttons10);
    addClass(btn);
    score10 = parseInt(btn.dataset.value, 10);
    data_name10 = btn.dataset.namej;
    score10_name = btn.dataset.category;
    if (score10_name === "NT") {
      score10 = 0
    }

    addScore(btn);
    showResults();
  });
});

buttons11.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    removeClasses(buttons11);
    addClass(btn);
    score11 = parseInt(btn.dataset.value, 10);
    data_name1 = btn.dataset.namea;
    score11_name = btn.dataset.category;
    if (score11_name === "NT") {
      score11 = 0
    }

    addScore(btn);
    showResults();
  });
});


buttons12.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    removeClasses(buttons12);
    addClass(btn);
    score12 = parseInt(btn.dataset.value, 10);
    data_name1 = btn.dataset.namea;
    data_category = btn.dataset.category;
    addScore(btn);
    showResults();
  });
});


buttons13.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    removeClasses(buttons13);
    addClass(btn);
    score13 = parseInt(btn.dataset.value, 10);
    data_name13 = btn.dataset.namea;
    data_category = btn.dataset.category;
    addScore(btn);
    showResults();
  });
});


buttons14.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    removeClasses(buttons14);
    addClass(btn);
    score14 = parseInt(btn.dataset.value, 10);
    data_name1 = btn.dataset.namea;
    score14_name = btn.dataset.category;
    if (score14_name === "NT") {
      score14 = 0
    }

    addScore(btn);
    showResults();
  });
});


buttons15.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    removeClasses(buttons15);
    addClass(btn);
    score15 = parseInt(btn.dataset.value, 10);
    data_name1 = btn.dataset.namea;
    data_category = btn.dataset.category;
    addScore(btn);
    showResults();
  });
});


