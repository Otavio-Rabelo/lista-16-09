
let precos = [];
for (let i = 0; i < 5; i++) {
    let preco = parseFloat(prompt(`Digite o preço do produto ${i + 1}: `));
    precos.push(preco);
}

let precoMax = Math.max(...precos);
let indiceMax = precos.indexOf(precoMax);
console.log(`\nProduto mais caro está no índice ${indiceMax} com preço R$ ${precoMax.toFixed(2)}\n`);
