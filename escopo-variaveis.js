// escopo var -> Escopo maior

// function imprimeNome() {
//   if (true) {
//     var nome = "Dani";
//   }
//   console.log(nome);
// }

// imprimeNome();

// escopo let -> Escopo menos. Apenas valido no bloco


// function imprimeNome() {
//   if (true) {
//     let nome = "Dani";
//     console.log(nome);
//   }

// }

// imprimeNome();

// esconpo const


function imprimeNome() {
  const nome = "Dani";
  // nome = "Tiago"; Não pode atribuir outro valor da const
  console.log(nome);
}

imprimeNome();