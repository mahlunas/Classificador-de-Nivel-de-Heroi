var rl = require('readline-sync');

console.log("Olá, heroi.")

let nome = rl.question('Insira seu nome: ');
console.log("Seja bem-vindo " + nome + "!");
console.log("Insira a sua quantidade de xp para calcularmos seu nível")
let xp = rl.question();

let nivel;

if (xp < 1000)
    nivel = "Ferro";
else if (xp <= 2000)
    nivel = "Bronze";
else if (xp <= 5000)
    nivel = "Prata";
else if (xp <= 7000)
    nivel = "Ouro";
else if (xp <= 8000)
    nivel = "Platina";
else if (xp <= 9000)
    nivel = "Ascendente";
else if (xp <= 10000)
    nivel = "Imortal";
else 
    nivel = "Radiante";

console.log("O Herói de nome " + nome + " está no nível de " + nivel)