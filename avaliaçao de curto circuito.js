// vai retornar o ultimo valor se estiver a espressao for veredadeira, se tiver algum 
// valor falso ele interrompe a verifiaçao e retorna false
console.log("carlos" && 0 && "false")


// vai retornar o primeiro valor vedadeiro caso ele exista , caso contrario retorna
// o valor falso

console.log(false || "carlos" || false)

// alguns valores que sao interpretados com falso  - chamados de valores falsy

// 0 , NaN , null , undefined , ""