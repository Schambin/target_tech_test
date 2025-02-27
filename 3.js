// 3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
// • O menor valor de faturamento ocorrido em um dia do mês;
// • O maior valor de faturamento ocorrido em um dia do mês;
// • Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

// IMPORTANTE:
// a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
// b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;

const fs = require("fs");

fs.readFile("dados.json", "utf8", (err, data) => {
    if (err) {
        console.error("Erro ao ler o arquivo:", err);
        return;
    }

    const faturamento = JSON.parse(data);

    const diasComFaturamento = faturamento.filter(d => d.valor > 0);

    if (diasComFaturamento.length === 0) {
        console.log("Não há dados de faturamento para análise.");
        return;
    }

    const menorFaturamento = Math.min(...diasComFaturamento.map(d => d.valor));
    const maiorFaturamento = Math.max(...diasComFaturamento.map(d => d.valor));

    const somaFaturamento = diasComFaturamento.reduce((acc, d) => {
        acc + d.valor, 0
    });
    const mediaMensal = somaFaturamento / diasComFaturamento.length;

    const diasAcimaDaMedia = diasComFaturamento.filter(d => d.valor > mediaMensal).length;

    console.log("📊 Análise de Faturamento Mensal:");
    console.log(`➡️ Menor faturamento diário: R$ ${menorFaturamento.toFixed(2)}`);
    console.log(`➡️ Maior faturamento diário: R$ ${maiorFaturamento.toFixed(2)}`);
    console.log(`➡️ Dias com faturamento acima da média: ${diasAcimaDaMedia}`);
});
