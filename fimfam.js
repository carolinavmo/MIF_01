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
let buttons17 = document.querySelectorAll(".score17");
let buttons18 = document.querySelectorAll(".score18");
let buttons19 = document.querySelectorAll(".score19");
let buttons20 = document.querySelectorAll(".score20");
let buttons21 = document.querySelectorAll(".score21");
let buttons22 = document.querySelectorAll(".score22");
let buttons23 = document.querySelectorAll(".score23");
let buttons24 = document.querySelectorAll(".score24");
let buttons25 = document.querySelectorAll(".score25");
let buttons26 = document.querySelectorAll(".score26");
let buttons27 = document.querySelectorAll(".score27");
let buttons28 = document.querySelectorAll(".score28");
let buttons29 = document.querySelectorAll(".score29");
let buttons30 = document.querySelectorAll(".score30");


let score1 = 0;
let score2 = 0;
let score3 = 0;
let score4 = 0;
let score5 = 0;
let score6 = 0;
let score7 = 0;
let score8 = 0;
let score9 = 0;
let score10 = 0;
let score11 = 0;
let score12 = 0;
let score13 = 0;
let score14 = 0;
let score15 = 0;
let score16 = 0;
let score17 = 0;
let score18 = 0;
let score19 = 0;
let score20 = 0;
let score21 = 0;
let score22 = 0;
let score23 = 0;
let score24 = 0;
let score25 = 0;
let score26 = 0;
let score27 = 0;
let score28 = 0;
let score29 = 0;
let score30 = 0;

let total = 0;
let motor = 0;
let cognitive = 0;

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
function addScore(btn) {
  motor =
    score1 +
    score2 +
    score3 +
    score4 +
    score5 +
    score6 +
    score7 +
    score8 +
    score9 +
    score10 +
    score11 +
    score12 +
    score13;
  cognitive = score14 + score15 + score16 + score17 + score18;
  total_fam = 
    score19 +
    score20 +
    score21 +
    score22 +
    score23 +
    score24 +
    score25 +
    score26 +
    score27 +
    score28 +
    score29 +
    score30 
  let total_array = [
    score1,
    score2,
    score3,
    score4,
    score5,
    score6,
    score7,
    score8,
    score9,
    score10,
    score11,
    score12,
    score13,
    score14,
    score15,
    score16,
    score17,
    score18,
  ];
  total = total_array.reduce((a, b) => a + b, 0);
}

// Create an array for each level of independence -------------------------------------

let i_compl = [];
let i_mod = [];
let i_sup = [];
let i_amin = [];
let i_amod = [];
let i_amax = [];
let i_at = [];

let categoriesAll = [i_compl, i_mod, i_sup, i_amin, i_mod, i_amax, i_at];

// Add the category-level of each option clicked to the respective independence level ------------------------------------
function independence_level(score, category) {
  if (score === 7) {i_compl.push(category)}
  if (score === 6) {i_mod.push(category)}
  if (score === 5) {i_sup.push(category)}
  if (score === 4) {i_amin.push(category)}
  if (score === 3) {i_amod.push(category)}
  if (score === 2) {i_amax.push(category)}
  if (score === 1) {i_at.push(category)}
}

// Remove duplicates from the independence levels array -------------------------------------------
function removeDuplicate(valuesToRemove) {
  i_compl = i_compl.filter(item => !valuesToRemove.includes(item))
  i_mod = i_mod.filter(item => !valuesToRemove.includes(item))
  i_sup = i_sup.filter(item => !valuesToRemove.includes(item))
  i_amin = i_amin.filter(item => !valuesToRemove.includes(item))
  i_amod = i_amod.filter(item => !valuesToRemove.includes(item))
  i_amax = i_amax.filter(item => !valuesToRemove.includes(item))
  i_at = i_at.filter(item => !valuesToRemove.includes(item))
  
}

// Create the display for the results --------------------------------------------

let i_compl_string = "- INDEPENDÊNCIA COMPLETA: ";
let i_mod_string = "- INDEPENDÊNCIA MODIFICADA: ";
let i_sup_string = "- SUPERVISÃO/PREPARAÇÃO: ";
let i_amin_string = "- AJUDA MÍNIMA: ";
let i_amod_string = "- AJUDA MODERADA: ";
let i_amax_string = "- AJUDA MÁXIMA: ";
let i_at_string = "- AJUDA TOTAL: ";

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
    score1 > 0 &&
    score2 > 0 &&
    score3 > 0 &&
    score4 > 0 &&
    score5 > 0 &&
    score6 > 0 &&
    score7 > 0 &&
    score8 > 0 &&
    score9 > 0 &&
    score10 > 0 &&
    score11 > 0 &&
    score12 > 0 &&
    score13 > 0 &&
    score14 > 0 &&
    score15 > 0 &&
    score16 > 0 &&
    score17 > 0 &&
    score18 > 0 &&
    score19 > 0 &&
    score20 > 0 &&
    score21 > 0 &&
    score22 > 0 &&
    score23 > 0 &&
    score24 > 0 &&
    score25 > 0 &&
    score26 > 0 &&
    score27 > 0 &&
    score28 > 0 &&
    score29 > 0 &&
    score30 > 0 

  ) {
    let resultBox = document.querySelectorAll(".result-box").forEach((x)=> {x.classList.add("show-result")});
    let paragraph = document.getElementById("p").style.display = "none";
    // result.innerHTML = `<strong>FIM = ${total} / 126 pts (Motor: ${motor}  Cognitivo: ${cognitive}) </strong> `;
    // result2.innerText = `MIF: A-${score1} | B-${score2} | C-${score3} | D-${score4} | E-${score5} | F-${score6} | G-${score7} | H-${score8} | I-${score9} | J-${score10} | K-${score11} | L-${score12} | M-${score13} | N-${score14} | O-${score15} | P-${score16} | Q-${score17} | R-${score18}.   Total = ${total} / 126 pts`;
    // result3.innerHTML = `<strong>MIF = ${total} / 126 pts (Motor: ${motor} |  Cognitivo: ${cognitive}) </strong>
    // <p>${i_to_string(i_compl, i_compl_string)} </p>
    // <p>${i_to_string(i_mod, i_mod_string)} </p>
    // <p>${i_to_string(i_sup, i_sup_string)}   </p>
    // <p>${i_to_string(i_amin, i_amin_string)}   </p>
    // <p>${i_to_string(i_amod, i_amod_string)} </p>
    // <p>${i_to_string(i_amax, i_amax_string)} </p>
    // <p>${i_to_string(i_at, i_at_string)}</p>`;
    // result4.innerText = `MIF = ${total} / 126 pts (M: ${motor}  C: ${cognitive}) | Alimentação - ${data_name1} (${score1}); Higiene pessoal - ${data_name2} (${score2}); Banho - ${data_name3} (${score3}); Vestir metade superior - ${data_name4} (${score4}); Vestir metade inferior - ${data_name5} (${score5}); Sanita - ${data_name6} (${score6}); Bexiga - ${data_name7} (${score7}); Intestino - ${data_name8} (${score8}); Transferências (leito, cadeira, CR) - ${data_name9} (${score9}); Transferências (sanita) - ${data_name10} (${score10}); Transferências (banheira ou chuveiro) - ${data_name11} (${score11}); Locomoção - ${data_name12} (${score12}); Escadas - ${data_name13} (${score13}); Compreensão - ${data_name14} (${score14}); Expressão - ${data_name15} (${score15}); Interação social - ${data_name16} (${score16}); Resolução de problemas - ${data_name17} (${score17}); Memória - ${data_name18} (${score18}).`;

    result4.innerHTML
     = 
       result4.innerHTML
  = `<strong>FIM = ${total} / 126 pontos </strong>
  <strong> FAM = ${total_fam} / 84 pontos </strong>
 
 <u>AUTOCUIDADOS: </u>
   <p>- Alimentação: ${score1} -- ${data_name1}; </p>
   <p>- Higiene pessoal: ${score2} -- ${data_name2}; </p>
   <p>- Banho: ${score3} -- ${data_name3};</p>
   <p>- Vestir metade superior: ${score4} -- ${data_name4}; </p> 
   <p>- Vestir metade inferior: ${score5} -- ${data_name5};   </p>
   <p>- Sanita: ${score6} -- ${data_name6};  </p>
   <p>- Deglutição *FAM: ${score19} -- ${data_name19};  </p>
 
 <u>CONTROLO DE ESFINCTERES:</u>
  <p>- Bexiga: ${score7} -- ${data_name7};  </p>
  <p>- Intestino: ${score8} -- ${data_name8}; </p> 
 
 <u>TRANSFERÊNCIAS:</u>
  <p>- Transferências (leito, cadeira, CR): ${score9} -- ${data_name9};  </p>
  <p>- Transferências (sanita): ${score10} -- ${data_name10};  </p>
  <p>- Transferências (banheira ou chuveiro): ${score11} -- ${data_name11}; </p> 
  <p>- Transferências (carro) *FAM: ${score20} -- ${data_name20}; </p> 
 
 <u>LOCOMOÇÃO:</u>
  <p>- Locomoção: ${score12} -- ${data_name12};  </p>
  <p>- Escadas: ${score13} -- ${data_name13};  </p>
  <p>- Acesso à comunidade *FAM: ${score21} -- ${data_name21};  </p>
 
 <u>COMUNICAÇÃO:</u>
  <p>- Compreensão: ${score14} -- ${data_name14}; </p> 
  <p>- Expressão: ${score15} -- ${data_name15};  </p>
  <p>- Leitura *FAM: ${score22} -- ${data_name22};  </p>
  <p>- Escrita *FAM: ${score23} -- ${data_name23};  </p>
  <p>- Inteligibilidade de discurso *FAM: ${score24} -- ${data_name24};  </p>

 <u>ADAPTAÇÃO PSICOSSOCIAL:</u>
  <p>- Interação social: ${score16} -- ${data_name16}; </p>  
  <p>- Status emocional *FAM: ${score25} -- ${data_name25};  </p>
  <p>- Adaptação a limitações *FAM: ${score26} -- ${data_name26}; </p>  
  <p>- Empregabilidade *FAM: ${score27} -- ${data_name27}; </p>  

  <u>COGNIÇÃO:</u>
  <p>- Resolução de problemas: ${score17} -- ${data_name17}; </p> 
  <p>- Memória: ${score18} -- ${data_name18};</p>
  <p>- Orientação *FAM: ${score28} -- ${data_name28};</p>
  <p>- Atenção *FAM: ${score29} -- ${data_name29};</p>
  <p>- Juízo de segurança *FAM: ${score30} -- ${data_name30}</p>
  
  `
     
     
     
     
     
     
    //  `MIF = ${total} / 126 pontos (Motor: ${motor} | Cognitivo: ${cognitive})
    // .
    // AUTOCUIDADOS: 
    //   - Alimentação: ${score1} (${data_name1}); 
    //   - Higiene pessoal: ${score2} (${data_name2}); 
    //   - Banho: ${score3} (${data_name3});
    //   - Vestir metade superior: ${score4} (${data_name4});  
    //   - Vestir metade inferior: ${score5} (${data_name5});   
    //   - Sanita: ${score6} (${data_name6});  
    // .
    // CONTROLO DE ESFINCTERES:
    //  - Bexiga: ${score7} (${data_name7});  
    //  - Intestino: ${score8} (${data_name8});  
    // .
    // TRANSFERÊNCIAS:
    //  - Transferências (leito, cadeira, CR): ${score9} (${data_name9});  
    //  - Transferências (sanita): ${score10} (${data_name10});  
    //  - Transferências (banheira ou chuveiro): ${score11} (${data_name11});  
    // .
    // LOCOMOÇÃO:
    //  - Locomoção: ${score12} (${data_name12});  
    //  - Escadas: ${score13} (${data_name13});  
    // .
    // COMUNICAÇÃO:
    //  - Compreensão: ${score14} (${data_name14});  
    //  - Expressão: ${score15} (${data_name15});  
    // .
    // CONSCIÊNCIA DO MUNDO EXTERIOR:
    //  - Interação social: ${score16} (${data_name16});   
    //  - Resolução de problemas: ${score17} (${data_name17});  
    //  - Memória: ${score18} (${data_name18}).`;


  }



//   result4.innerHTML
//   = `<strong>MIF = ${total} / 126 pontos (Motor: ${motor} | Cognitivo: ${cognitive})</strong>
//  .
//  <u>AUTOCUIDADOS: </u>
//    <p>- Alimentação: ${score1} (${data_name1}); </p>
//    <p>- Higiene pessoal: ${score2} (${data_name2}); </p>
//    <p>- Banho: ${score3} (${data_name3});</p>
//    <p>- Vestir metade superior: ${score4} (${data_name4}); </p> 
//    <p>- Vestir metade inferior: ${score5} (${data_name5});   </p>
//    <p>- Sanita: ${score6} (${data_name6});  </p>
 
//  <u>CONTROLO DE ESFINCTERES:</u>
//   <p>- Bexiga: ${score7} (${data_name7});  </p>
//   <p>- Intestino: ${score8} (${data_name8}); </p> 
 
//  <u>TRANSFERÊNCIAS:</u>
//   <p>- Transferências (leito, cadeira, CR): ${score9} (${data_name9});  </p>
//   <p>- Transferências (sanita): ${score10} (${data_name10});  </p>
//   <p>- Transferências (banheira ou chuveiro): ${score11} (${data_name11}); </p> 
 
//  <u>LOCOMOÇÃO:</u>
//   <p>- Locomoção: ${score12} (${data_name12});  </p>
//   <p>- Escadas: ${score13} (${data_name13});  </p>
 
//  <u>COMUNICAÇÃO:</u>
//   <p>- Compreensão: ${score14} (${data_name14}); </p> 
//   <p>- Expressão: ${score15} (${data_name15});  </p>
 
//  <u>CONSCIÊNCIA DO MUNDO EXTERIOR:</u>
//   <p>- Interação social: ${score16} (${data_name16}); </p>  
//   <p>- Resolução de problemas: ${score17} (${data_name17}); </p> 
//   <p>- Memória: ${score18} (${data_name18}).</p>`;









  // Add the functionality of COPY the text inside the text field --------------------------------------------------------------
  copy_1.addEventListener("click", () => {
    navigator.clipboard.writeText(result.innerText);
  });
  // copy_2.addEventListener("click", () => {
  //   navigator.clipboard.writeText(result2.innerText);
  // });
  copy_3.addEventListener("click", () => {
    navigator.clipboard.writeText(result3.innerText);
  });
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
    removeDuplicate(data_category);
    independence_level(score1, data_category);
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
    removeDuplicate(data_category);
    independence_level(score2, data_category);
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
    removeDuplicate(data_category);
    independence_level(score3, data_category)
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
    removeDuplicate(data_category);
    independence_level(score4, data_category)
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
    removeDuplicate(data_category);
    independence_level(score5, data_category)
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
    removeDuplicate(data_category);
    independence_level(score6, data_category)
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
    data_category = btn.dataset.category;
    removeDuplicate(data_category);
    independence_level(score7, data_category)
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
    data_category = btn.dataset.category;
    removeDuplicate(data_category);
    independence_level(score8, data_category)
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
    data_category = btn.dataset.category;
    removeDuplicate(data_category);
    independence_level(score9, data_category)
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
    data_category = btn.dataset.category;
    removeDuplicate(data_category);
    independence_level(score10, data_category)
    addScore(btn);
    showResults();
  });
});

buttons11.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    removeClasses(buttons11);
    addClass(btn);
    score11 = parseInt(btn.dataset.value, 10);
    data_name11 = btn.dataset.namek;
    data_category = btn.dataset.category;
    removeDuplicate(data_category);
    independence_level(score11, data_category)
    addScore(btn);
    showResults();
  });
});

buttons12.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    removeClasses(buttons12);
    addClass(btn);
    score12 = parseInt(btn.dataset.value, 10);
    data_name12 = btn.dataset.namel;
    data_category = btn.dataset.category;
    removeDuplicate(data_category);
    independence_level(score12, data_category)
    addScore(btn);
    showResults();
  });
});

buttons13.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    removeClasses(buttons13);
    addClass(btn);
    score13 = parseInt(btn.dataset.value, 10);
    data_name13 = btn.dataset.namem;
    data_category = btn.dataset.category;
    removeDuplicate(data_category);
    independence_level(score13, data_category)
    addScore(btn);
    showResults();
  });
});

buttons14.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    removeClassesCognitive(buttons14);
    addClassCognitive(btn);
    score14 = parseInt(btn.dataset.value, 10);
    data_name14 = btn.dataset.namen;
    data_category = btn.dataset.category;
    removeDuplicate(data_category);
    independence_level(score14, data_category)
    addScore(btn);
    showResults();
  });
});

buttons15.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    removeClassesCognitive(buttons15);
    addClassCognitive(btn);
    score15 = parseInt(btn.dataset.value, 10);
    data_name15 = btn.dataset.nameo;
    data_category = btn.dataset.category;
    removeDuplicate(data_category);
    independence_level(score15, data_category)
    addScore(btn);
    showResults();
  });
});

buttons16.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    removeClassesCognitive(buttons16);
    addClassCognitive(btn);
    score16 = parseInt(btn.dataset.value, 10);
    data_name16 = btn.dataset.namep;
    data_category = btn.dataset.category;
    removeDuplicate(data_category);
    independence_level(score16, data_category)
    addScore(btn);
    showResults();
  });
});

buttons17.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    removeClassesCognitive(buttons17);
    addClassCognitive(btn);
    score17 = parseInt(btn.dataset.value, 10);
    data_name17 = btn.dataset.nameq;
    data_category = btn.dataset.category;
    removeDuplicate(data_category);
    independence_level(score17, data_category)
    addScore(btn);
    showResults();
  });
});

buttons18.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    removeClassesCognitive(buttons18);
    addClassCognitive(btn);
    score18 = parseInt(btn.dataset.value, 10);
    data_name18 = btn.dataset.namer;
    data_category = btn.dataset.category;
    removeDuplicate(data_category);
    independence_level(score18, data_category)
    addScore(btn);
    showResults();
  });
});


buttons19.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    removeClasses(buttons19);
    addClass(btn);
    score19 = parseInt(btn.dataset.value, 10);
    data_name19 = btn.dataset.nameaa;
    data_category = btn.dataset.category;
    removeDuplicate(data_category);
    independence_level(score19, data_category);
    addScore(btn);
    showResults();
  });
});

buttons20.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    removeClasses(buttons20);
    addClass(btn);
    score20 = parseInt(btn.dataset.value, 10);
    data_name20 = btn.dataset.namebb;
    data_category = btn.dataset.category;
    removeDuplicate(data_category);
    independence_level(score20, data_category);
    addScore(btn);
    showResults();
  });
});

buttons21.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    removeClasses(buttons21);
    addClass(btn);
    score21 = parseInt(btn.dataset.value, 10);
    data_name21 = btn.dataset.namecc;
    data_category = btn.dataset.category;
    removeDuplicate(data_category);
    independence_level(score21, data_category);
    addScore(btn);
    showResults();
  });
});

buttons22.forEach((btn) => {
  btn.addEventListener("click", (e) => {
removeClassesCognitive(buttons22);
    addClassCognitive(btn);
    score22 = parseInt(btn.dataset.value, 10);
    data_name22 = btn.dataset.namedd;
    data_category = btn.dataset.category;
    removeDuplicate(data_category);
    independence_level(score22, data_category);
    addScore(btn);
    showResults();
  });
});

buttons23.forEach((btn) => {
  btn.addEventListener("click", (e) => {
removeClassesCognitive(buttons23);
    addClassCognitive(btn);
    score23 = parseInt(btn.dataset.value, 10);
    data_name23 = btn.dataset.nameee;
    data_category = btn.dataset.category;
    removeDuplicate(data_category);
    independence_level(score23, data_category);
    addScore(btn);
    showResults();
  });
});

buttons24.forEach((btn) => {
  btn.addEventListener("click", (e) => {
removeClassesCognitive(buttons24);
    addClassCognitive(btn);
    score24 = parseInt(btn.dataset.value, 10);
    data_name24 = btn.dataset.nameff;
    data_category = btn.dataset.category;
    removeDuplicate(data_category);
    independence_level(score24, data_category);
    addScore(btn);
    showResults();
  });
});

buttons25.forEach((btn) => {
  btn.addEventListener("click", (e) => {
removeClassesCognitive(buttons25);
    addClassCognitive(btn);
    score25 = parseInt(btn.dataset.value, 10);
    data_name25 = btn.dataset.namegg;
    data_category = btn.dataset.category;
    removeDuplicate(data_category);
    independence_level(score25, data_category);
    addScore(btn);
    showResults();
  });
});

buttons26.forEach((btn) => {
  btn.addEventListener("click", (e) => {
removeClassesCognitive(buttons26);
    addClassCognitive(btn);
    score26 = parseInt(btn.dataset.value, 10);
    data_name26 = btn.dataset.namehh;
    data_category = btn.dataset.category;
    removeDuplicate(data_category);
    independence_level(score26, data_category);
    addScore(btn);
    showResults();
  });
});

buttons27.forEach((btn) => {
  btn.addEventListener("click", (e) => {
removeClassesCognitive(buttons27);
    addClassCognitive(btn);
    score27 = parseInt(btn.dataset.value, 10);
    data_name27 = btn.dataset.nameii;
    data_category = btn.dataset.category;
    removeDuplicate(data_category);
    independence_level(score27, data_category);
    addScore(btn);
    showResults();
  });
});

buttons28.forEach((btn) => {
  btn.addEventListener("click", (e) => {
removeClassesCognitive(buttons28);
    addClassCognitive(btn);
    score28 = parseInt(btn.dataset.value, 10);
    data_name28 = btn.dataset.namejj;
    data_category = btn.dataset.category;
    removeDuplicate(data_category);
    independence_level(score28, data_category);
    addScore(btn);
    showResults();
  });
});

buttons29.forEach((btn) => {
  btn.addEventListener("click", (e) => {
removeClassesCognitive(buttons29);
    addClassCognitive(btn);
    score29 = parseInt(btn.dataset.value, 10);
    data_name29 = btn.dataset.namell;
    data_category = btn.dataset.category;
    removeDuplicate(data_category);
    independence_level(score29, data_category);
    addScore(btn);
    showResults();
  });
});

buttons30.forEach((btn) => {
  btn.addEventListener("click", (e) => {
removeClassesCognitive(buttons30);
    addClassCognitive(btn);
    score30 = parseInt(btn.dataset.value, 10);
    data_name30 = btn.dataset.namemm;
    data_category = btn.dataset.category;
    removeDuplicate(data_category);
    independence_level(score30, data_category);
    addScore(btn);
    showResults();
  });
});





















// Add the MODAL functionality for the images when the button (i) is clicked  ----------------------------------

let info_a = document.querySelector(".info-a");
let model_a = document.querySelector(".modal-a");
let close_a = document.querySelector(".close-a");

info_a.addEventListener("click", () => {
  model_a.classList.add("show");
  close_a.addEventListener("click", () => {
    model_a.classList.remove("show");
  });
});

function toggleModal(open, model, close) {
  open.addEventListener("click", () => {
    model.classList.add("show");
    close.addEventListener("click", () => {
      model.classList.remove("show");
    });
  });
}

let info_b = document.querySelector(".info-b");
let model_b = document.querySelector(".modal-b");
let close_b = document.querySelector(".close-b");
toggleModal(info_b, model_b, close_b);

let info_c = document.querySelector(".info-c");
let model_c = document.querySelector(".modal-c");
let close_c = document.querySelector(".close-c");
toggleModal(info_c, model_c, close_c);

let info_d = document.querySelector(".info-d");
let model_d = document.querySelector(".modal-d");
let close_d = document.querySelector(".close-d");
toggleModal(info_d, model_d, close_d);

let info_e = document.querySelector(".info-e");
let model_e = document.querySelector(".modal-e");
let close_e = document.querySelector(".close-e");
toggleModal(info_e, model_e, close_e);

let info_f = document.querySelector(".info-f");
let model_f = document.querySelector(".modal-f");
let close_f = document.querySelector(".close-f");
toggleModal(info_f, model_f, close_f);

let info_g = document.querySelector(".info-g");
let model_g = document.querySelector(".modal-g");
let close_g = document.querySelector(".close-g");
toggleModal(info_g, model_g, close_g);

let info_h = document.querySelector(".info-h");
let model_h = document.querySelector(".modal-h");
let close_h = document.querySelector(".close-h");
toggleModal(info_h, model_h, close_h);

let info_i = document.querySelector(".info-i");
let model_i = document.querySelector(".modal-i");
let close_i = document.querySelector(".close-i");
toggleModal(info_i, model_i, close_i);

let info_j = document.querySelector(".info-j");
let model_j = document.querySelector(".modal-j");
let close_j = document.querySelector(".close-j");
toggleModal(info_j, model_j, close_j);

let info_k = document.querySelector(".info-k");
let model_k = document.querySelector(".modal-k");
let close_k = document.querySelector(".close-k");
toggleModal(info_k, model_k, close_k);

let info_l = document.querySelector(".info-l");
let model_l = document.querySelector(".modal-l");
let close_l = document.querySelector(".close-l");
toggleModal(info_l, model_l, close_l);

let info_m = document.querySelector(".info-m");
let model_m = document.querySelector(".modal-m");
let close_m = document.querySelector(".close-m");
toggleModal(info_m, model_m, close_m);

let info_n = document.querySelector(".info-n");
let model_n = document.querySelector(".modal-n");
let close_n = document.querySelector(".close-n");
toggleModal(info_n, model_n, close_n);

let info_o = document.querySelector(".info-o");
let model_o = document.querySelector(".modal-o");
let close_o = document.querySelector(".close-o");
toggleModal(info_o, model_o, close_o);

let info_p = document.querySelector(".info-p");
let model_p = document.querySelector(".modal-p");
let close_p = document.querySelector(".close-p");
toggleModal(info_p, model_p, close_p);

let info_q = document.querySelector(".info-q");
let model_q = document.querySelector(".modal-q");
let close_q = document.querySelector(".close-q");
toggleModal(info_q, model_q, close_q);

let info_r = document.querySelector(".info-r");
let model_r = document.querySelector(".modal-r");
let close_r = document.querySelector(".close-r");
toggleModal(info_r, model_r, close_r);
