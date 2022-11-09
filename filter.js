const usuarios = [
  {id:1, nome: "Maria", idade: 18},
  {id:2, nome: "José", idade: 19},
  {id:3, nome: "João", idade: 18},
  {id:4, nome: "Pedro", idade: 19},
  {id:5, nome: "Joada", idade: 20},
]

console.log({usuarios})

const result = usuarios.filter((usuario) => usuario.id > 2);

console.log(result)