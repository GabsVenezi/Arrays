
const numeros = [];
let contador = 0;

for (let i = 0; i < 10; i++) {
    numeros[i] = Number(prompt("Digite o " + (i + 1) + " número:"));
}


let numeroBuscado = Number(prompt("Digite o número que você deseja buscar:"));

for (let i = 0; i < 10; i++) {
    if (numeros[i] === numeroVerificado) {
        contador = contador + 1;
    }
}

alert("O número " + numeroVerificado + " aparece " + contador + " vezes no vetor.");