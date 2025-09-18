let filmes = [];
for (let i = 0; i < 6; i++) {
    let nome = prompt(`\nDigite o nome do filme ${i + 1}: `);
    let nota = parseFloat(prompt(`Digite a nota do filme "${nome}": `));
    filmes.push({ nome, nota });
}


let opcao;
do {
    console.log("\n===== MENU DE FILMES =====");
    console.log("a) Imprimir dados de 1 filme");
    console.log("b) Avaliar um filme (fazer média)");
    console.log("c) Alterar dados de um filme");
    console.log("d) Finalizar e exibir todos os dados");
    opcao = prompt("Escolha uma opção (a/b/c/d): ").toLowerCase();

    switch (opcao) {
        case "a":
            let idx1 = parseInt(prompt("Digite o índice do filme (0 a 5): "));
            if (filmes[idx1]) {
                console.log(`Filme: ${filmes[idx1].nome}, Nota: ${filmes[idx1].nota}`);
            } else {
                console.log("Índice inválido.");
            }
            break;

        case "b":
            let idx2 = parseInt(prompt("Digite o índice do filme para avaliar: "));
            if (filmes[idx2]) {
                let novaNota = parseFloat(prompt("Digite a nova nota para fazer média: "));
                filmes[idx2].nota = (filmes[idx2].nota + novaNota) / 2;
                console.log(`Nota atualizada para o filme "${filmes[idx2].nome}": ${filmes[idx2].nota.toFixed(2)}`);
            } else {
                console.log("Índice inválido.");
            }
            break;

        case "c":
            let idx3 = parseInt(prompt("Digite o índice do filme para alterar: "));
            if (filmes[idx3]) {
                let novoNome = prompt("Digite o novo nome do filme: ");
                let novaNota = parseFloat(prompt("Digite a nova nota do filme: "));
                filmes[idx3] = { nome: novoNome, nota: novaNota };
                console.log("Filme alterado com sucesso.");
            } else {
                console.log("Índice inválido.");
            }
            break;

        case "d":
            console.log("\n===== Dados Finais dos Filmes =====");
            filmes.forEach((filme, index) => {
                console.log(`${index}. ${filme.nome} - Nota: ${filme.nota.toFixed(2)}`);
            });
            break;

        default:
            console.log("Opção inválida.");
    }
} while (opcao !== "d");

