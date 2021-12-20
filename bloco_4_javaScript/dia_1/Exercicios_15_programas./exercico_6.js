let pecaDeXadrez = "RAINHA";

switch (pecaDeXadrez.toLowerCase()) { /** Uso o To lower case informado que pode ser maiuscula ou minuscula  */
  case "torre":
    console.log("Anda horizontal e vertical.");
    break;
  case "rainha":
    console.log("Anda horizontal, vertical e diagonal");
    break;
  default:
    console.log("Não escolheu a peça");
    break;
}
