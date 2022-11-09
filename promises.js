function aguardarSetTimeout() {

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // console.log("Segunda mensagem");
      resolve("Segunda mensagem")
    }, 1000);
  })
}

// async function executar () {
//   console.log("Primeira mensagem");

//   const segundaMensagem = await aguardarSetTimeout();

//   console.log(segundaMensagem);

//   console.log("Terceira mensagem");
// }

// executar();

console.log("Primeira mensagem");

aguardarSetTimeout().then((result) => console.log(result));

console.log("Terceira mensagem"); 