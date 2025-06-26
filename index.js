let nomeHeroi = "Batman";
let xpHeroi = 100;

function nivelHeroi() {
  if (xpHeroi <= 1000) {
    return "Ferro";
  }
  if (xpHeroi >= 1001 && xpHeroi <= 2000) {
    return "Bronze";
  }
  if (xpHeroi >= 2001 && xpHeroi <= 5000) {
    return "Prata";
  }
  if (xpHeroi >= 5001 && xpHeroi <= 7000) {
    return "Ouro";
  }
  if (xpHeroi >= 7001 && xpHeroi <= 8000) {
    return "Platina";
  }
  if (xpHeroi >= 8001 && xpHeroi <= 9000) {
    return "Ascendente";
  }
  if (xpHeroi >= 9001 && xpHeroi <= 10000) {
    return "Imortal";
  }
  if (xpHeroi >= 10001) {
    return "Radiante";
  }

}
console.log(`O Herói de nome ${nomeHeroi} está no nível ${nivelHeroi()} com ${xpHeroi} de XP.`);
