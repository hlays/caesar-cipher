function test(funcao, strOriginal, offset, resultadoEsperado) {
  let result = funcao(offset, strOriginal);
  if (result === resultadoEsperado) {
    console.log("=> Correto! :) output:", result, "===", resultadoEsperado);
  } else {
    console.log("<= Errado! :/ output:", result, "!==", resultadoEsperado);
  }
}



console.log('--- Cifrar >>>');


test(encode, 'uvxwyz', 5, 'zacbde');
test(encode, 'alo', 2, 'cnq');
test(encode, 'alo', 26, 'alo');
test(encode, 'Hello World!', 2, 'Jgnnq Yqtnf!');
test(encode, 'abcABC fghFGH 123', 5, 'fghFGH klmKLM 123');
test(encode, '123', 2, '123');
test(encode, '123', 5, '123');
test(encode, '123', 5500000, '123');
test(encode, ' ', 2, ' ');
test(encode, ' ', 20, ' ');
test(encode, ' ', 2000000, ' ');



console.log('--- Descifrar <<<');

test(decode, 'zacbde', 5, 'uvxwyz');
test(decode, 'cnq', 2, 'alo');
test(decode, 'alo', 26, 'alo'); 
test(decode, 'Jgnnq Yqtnf!', 2, 'Hello World!'); 
test(decode, 'fghFGH klmKLM 123', 5, 'abcABC fghFGH 123'); 
test(decode, '123', 2, '123');
test(decode, '123', 5, '123');
test(decode, '123', 5500000, '123');
test(decode, ' ', 2, ' ');
test(decode, ' ', 20, ' ');
test(decode, ' ', 2000000, ' ');




