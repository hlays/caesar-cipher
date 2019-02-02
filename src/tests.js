function test(funcao, strOriginal, offset, resultadoEsperado) {
  let result = funcao(offset, strOriginal);
  if (result === resultadoEsperado) {
    console.log("=> Correto! :) output:", result, "===", resultadoEsperado);
  } else {
    console.log("<= Errado! :/ output:", result, "!==", resultadoEsperado);
  }
}



console.log('--- Cifrar >>>');
// encode: espaço e outros caracteres especiais (esperado retornar o mesmo caracter)
test(encode, ' ', 2, ' ');
test(encode, ' ', 20, ' ');
test(encode, ' ', 2000000, ' ');
test(encode, '^´=-', 5500000, '^´=-');
test(encode, '][~,.', 5500000, '][~,.');
test(encode, '][~,.', -9823, '][~,.');
// encode: números (esperado retornar o mesmo número)
test(encode, '123', 2, '123');
test(encode, '123', 5, '123');
test(encode, '123', 5500000, '123');
// encode: letras
test(encode, 'uvxwyz', 5, 'zacbde');
test(encode, 'alo', 2, 'cnq');
test(encode, 'alo', 26, 'alo');
test(encode, 'Hello World!', 2, 'Jgnnq Yqtnf!');
test(encode, 'abcABC fghFGH 123', 5, 'fghFGH klmKLM 123');
// encode: offset negativo
test(encode, 'abcde', -5, 'vwxyz');
test(encode, 'abcde', -26, 'abcde');



console.log('--- Descifrar <<<');
// decode: espaço e outros caracteres especiais (esperado retornar o mesmo caracter)
test(decode, '^´=-', 5500000, '^´=-');
test(decode, '][~,.', 5500000, '][~,.');
test(decode, '][~,.', -9823, '][~,.');
test(decode, ' ', 2, ' ');
test(decode, ' ', 20, ' ');
test(decode, ' ', 2000000, ' ');
// decode: números (esperado retornar o mesmo número)
test(decode, '123', 2, '123');
test(decode, '123', 5, '123');
test(decode, '123', 5500000, '123');
// decode: letras
test(decode, 'zacbde', 5, 'uvxwyz');
test(decode, 'cnq', 2, 'alo');
test(decode, 'alo', 26, 'alo'); 
test(decode, 'Jgnnq Yqtnf!', 2, 'Hello World!'); 
test(decode, 'fghFGH klmKLM 123', 5, 'abcABC fghFGH 123'); 
// decode: offset negativo
test(decode, 'vwxyz', -5, 'abcde');
test(decode, 'abcde', -26, 'abcde');