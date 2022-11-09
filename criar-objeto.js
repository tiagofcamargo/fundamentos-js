// O que é um Objeto?
// new Object();

var caneta = new Object();

caneta.cor = "Azul";
caneta.marca = "Bic";
caneta.dimensao = "6cm";

console.log({caneta});

// Criar utilizando função

function Caneta(cor, marca, dimensao) {
  this.cor = cor;
  this.marca = marca;
  this.dimensao = dimensao;
}

var novaCanetaPreta = new Caneta();
novaCanetaPreta.cor = "Preta";
novaCanetaPreta.marca = "Bic";
novaCanetaPreta.dimensao = "5cm";

var novaCanetaAzul = new Caneta();
novaCanetaAzul.cor = "Azul";
novaCanetaAzul.marca = "Bic";
novaCanetaAzul.dimensao = "7cm";

console.log({novaCanetaPreta});
console.log({novaCanetaAzul});

/**
 * Criar um objeto direto
 * 
 */

var novaCanetaRosa = {
  cor: "Rosa",
  marca: "Bic",
  dimensao: "10cm",
};

console.log({novaCanetaRosa})

/**
 * Object.create()
 */

var PrototipoCaneta = {
  cor: "Marron",
  marca: "Bic",
  dimensao: "10cm",
  imprimir() {
    console.log(this.cor, this.marca, this.dimensao);
  },
};

console.log(PrototipoCaneta)

var novaCanetaComPrototipo = Object.create(PrototipoCaneta);
novaCanetaComPrototipo.cor = "Verde";
novaCanetaComPrototipo.imprimir();
console.log(novaCanetaComPrototipo);