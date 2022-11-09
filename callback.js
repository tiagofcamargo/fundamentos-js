// Buscar os dados do usuário

// Chamar uma função para validar idade do usuário

function buscarUsuario(callback) {
  // Banco de dados
  const usuario = {
    id: 1,
    nome: "Maria",
    idade: 17,
  };

  callback(usuario)

}

function calcularIdade(usuario) {
  if (usuario.idade >= 18) {
    console.log("Usuário maior de idade");
  } else {
    console.log("Usuário menor de idade");
  }
}


buscarUsuario(calcularIdade);