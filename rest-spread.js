//Spread - Espalhar

const aluno = {
  nome: "Fernando",
  idade: 19,
  cursos: ['Nome', 'SQL', 'Docker'],
  email: "fernando@gmail.com",
  endereco: "Rua Qualquer uma",
  telefone: "11976583837"
};

// console.log({aluno});

const alunoAtualizado = {
  // Sem Spread
  // nome: aluno.nome,
  // cursos: aluno.cursos,
  // idade: 20,
  // email: aluno.email,
  // endereco: aluno.endereco,
  // telefone: aluno.telefone,

  //Com Spread
  ...aluno,
  idade : 20,
  cursos: [...aluno.cursos, "Java"],
};

// console.log({alunoAtualizado})

// Rest ... 

// const { nome, idade, ...resto } = aluno;
// console.log(nome, idade);
// console.log(resto);

const nomes = ["Daniel", "Mariana", "Carol"];
const [ primeiro, ...restoArray ] = nomes;
console.log(primeiro);
console.log(restoArray)