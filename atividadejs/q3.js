let fitaRNA = [];
console.log("\nDigite os 10 elementos da fita de RNA (A, U, C, G):");
for (let i = 0; i < 10; i++) {
    let base = prompt(`Base ${i + 1}: `).toUpperCase();
    fitaRNA.push(base);
}

let complemento = {
    A: "U",
    U: "A",
    C: "G",
    G: "C"
};

let fitaComplementar = fitaRNA.map(base => complemento[base] || "?");

console.log("\nFita RNA original:      ", fitaRNA.join(" "));
console.log("Fita RNA complementar: ", fitaComplementar.join(" "));