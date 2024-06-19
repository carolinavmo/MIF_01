let buttons1 = document.querySelectorAll(".score1");



let score1 = 0;




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








function i_to_string(array, string_title) {
  if (array.length > 0) {
    return string_title + array.join(', ')
  } else {
    return ""
  }
}

// Create the Show results function for the display --------------------------------------------
function showResults() {
  if (
    score1 > -1 

  ) {
    let resultBox = document.querySelectorAll(".result-box").forEach((x)=> {x.classList.add("show-result")});
    let paragraph = document.getElementById("p").style.display = "none";

    result4.innerHTML
     = 
       result4.innerHTML
  =  `<p><strong>Escala de Tardieu </strong>= Grau ${data_category} </p>`

     
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
    console.log(data_category)

    showResults();
  });
});


// THE END ------------------------------------------------------------------------------------
