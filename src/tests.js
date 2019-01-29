function test(funcao, strOriginal, offset, resultadoEsperado) {
  var result = funcao(offset, strOriginal);
  if (result === resultadoEsperado) {
    console.log("=> Correto! :)", strOriginal, " === ", resultadoEsperado);
  } else {
    console.log("=> ERRADO! :/", strOriginal, " !== ", resultadoEsperado);
  }
}

test(encode, 'alo', 2, 'cnq');
test(encode, 'Hello World!', 5, 'Mjqqt Btxqi!');
test(encode, ' ', 2, ' ');
test(encode, '123', 2, '123');
test(encode, '123', 5, '123');
test(encode, '123', 55, '123');
test(encode, 'Hello World!', 2, 'Jgnnq Yqtnf!');
test(encode, 'Hello World!', 250, 'Xubbe Mehbt!');
test(encode, 'alo', 26, 'alo');
test(encode, ' ', 20, ' ');
test(encode, '123', 20, '123');


