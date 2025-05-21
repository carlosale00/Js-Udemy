
// Operadores lógicos

// && / and / e  -> Todas as expressões precisam ser verdadeiras para retornar True

const exp_and = false && false && true
console.log(`expressão and - ${exp_and}`);

// || / or / ou -> Se apenas 1 expressão for verdadeira ele retorna True
const exp_or = false || false || false
console.log(`expressão or - ${exp_or}`);

// ! / not / não -> nega a expresão, tornado ela negativa.
const exp_not = !false
console.log(`expressão not - ${exp_not}`);