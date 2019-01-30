function test(funcao, strOriginal, offset, resultadoEsperado) {
  var result = funcao(offset, strOriginal);
  if (result === resultadoEsperado) {
    console.log("=> Correto! :) input:", strOriginal, "-> Output:", result, "===", resultadoEsperado, '(Resultado esperado)');
  } else {
    console.log("=> => Errado! :/ input:", strOriginal, "-> Output:", result, "!==", resultadoEsperado, '(Resultado esperado)');
  }
}



console.log(':::::::::::Cifrar:::::::::::');

test(encode, 'alo', 2, 'cnq');
test(encode, 'alo', 26, 'alo');
test(encode, 'Hello World!', 2, 'Jgnnq Yqtnf!');
test(encode, 'Hello World!', 5, 'Mjqqt Btwqi!');
test(encode, 'Hello World!', 250, 'Xubbe Mehbt!');
test(encode, ' ', 2, ' ');
test(encode, ' ', 20, ' ');
test(encode, ' ', 2000000, ' ');
test(encode, '123', 2, '123');
test(encode, '123', 5, '123');
test(encode, '123', 5500000, '123');

console.log(':::::::::::Descifrar:::::::::::');

test(decode, 'cnq', 2, 'alo');
test(decode, 'alo', 26, 'alo'); 
test(decode, 'Jgnnq Yqtnf!', 2, 'Hello World!'); 
test(decode, 'Mjqqt Btwqi!', 5, 'Hello World!'); //Hello =orld!
test(decode, 'Xubbe Mehbt!', 250, 'Hello World!'); //.KRRU =UXRJ!
test(decode, ' ', 2, ' ');
test(decode, ' ', 20, ' ');
test(decode, ' ', 2000000, ' ');
test(decode, '123', 2, '123');
test(decode, '123', 5, '123');
test(decode, '123', 5500000, '123');




