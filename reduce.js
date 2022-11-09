const carrinhoDeCompras = [
  {produto: "Mouse", preco: 600.10},
  {produto: "Teclado", preco: 120.00},
  {produto: "Monitor", preco: 1200.20},
  {produto: "Fone de ouvido", preco: 157.25},
];

const result = carrinhoDeCompras.reduce((previous, currentValue) => previous + 
currentValue.preco, 0)

console.log(result)