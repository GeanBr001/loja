const computador = {
  marca: "Samsung",
  modelo: "galaxy book",
  ano: 2025,
  ligado: false,

  ligar: function () {
    this.ligar = true;
    console.log("computador ligado");
  },
};

computador.ligar();

console.log(
  `Marca: ${computador.marca} \nModelo: ${computador.modelo} \nAno: ${computador.ano} `
);
