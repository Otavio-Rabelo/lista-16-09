let tiposSanguineos = [];
for (let i = 0; i < 10; i++) {
    let tipo = prompt(`Digite o tipo sanguíneo da pessoa ${i + 1}: `).toUpperCase();
    tiposSanguineos.push(tipo);
}
console.log("\nCadastro de Tipos Sanguíneos:");
tiposSanguineos.forEach((tipo, index) => {
    console.log(`Pessoa ${index} - Tipo: ${tipo}`);
});
