const nomes = ["Maria", "João", "José", "Felipe", "Isabel"];

console.log(nomes)

// const result = nomes.map((nome) => {
//   return {
//     nome: nome,
//     descrição: "O nome do usuário é " + nome,
//     id: Math.random().toFixed(2),
//   };
// });
// console.log(result)

// nomes.forEach((nome) => console.log(nome));

for (var index = 0; index < nomes.length; index++) {
  console.log("Utilizando o for, o nome é " + nomes[index]);
}