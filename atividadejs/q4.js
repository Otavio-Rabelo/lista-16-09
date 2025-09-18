let materias = [];

for (let i = 0; i < 8; i++) {
    let nome = prompt(`\nDigite o nome da matéria ${i + 1}: `);
    let nota = parseFloat(prompt(`Digite a nota da matéria ${nome}: `));
    let frequencia = parseFloat(prompt(`Digite a frequência (%) da matéria ${nome}: `));
    materias.push({ nome, nota, frequencia });
}


let somaFreq = materias.reduce((acc, mat) => acc + mat.frequencia, 0);
let mediaFreq = somaFreq / materias.length;
console.log(`\nMédia de frequência das disciplinas: ${mediaFreq.toFixed(2)}%`);

let notasAcima60 = materias.filter(mat => mat.nota > 60).length;
console.log(`Quantidade de notas acima de 60%: ${notasAcima60}`);
