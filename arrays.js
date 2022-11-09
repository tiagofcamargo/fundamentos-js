// O que é um array
// index
const nomes = ["Maria", "João", "José", "Felipe", "Isabel"];

console.log(nomes)

nomes.push("Joana") // Adicionar um item no fim do array

console.log(nomes)

nomes.splice(1, 2); // Remove um item do array, no index que eu apontar, até a quantidade de posições.

console.log(nomes)

const novoArray = nomes.slice(1, 3); // Seleciona , pega itens de uma posição até outra. 

console.log(novoArray)