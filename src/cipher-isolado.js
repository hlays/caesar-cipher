function encode(encodeOffset, encodeText) {
  if (encodeOffset < 1 || encodeText.length < 1) {
    // alert(':/ Dados inseridos inválidos. Tente de novo...');
  } else {
    
    let letterOffset;
    let textEncode = '';

    for (let i = 0; i < encodeText.length; i++) {    
      // Se uppercase
      if (encodeText.charCodeAt(i) >= 65 && encodeText.charCodeAt(i)  <= 90) {
        letterOffset = (((encodeText.charCodeAt(i) - 65) + encodeOffset) % 26) + 65;
      // se lowercase
      } else if (encodeText.charCodeAt(i)  >= 97 && encodeText.charCodeAt(i) <= 122) {
        letterOffset = (((encodeText.charCodeAt(i) - 97) + encodeOffset) % 26) + 97;
      // se espaço
      } else if (encodeText.charCodeAt(i) === 32) {
        letterOffset = 32;
      // se número
      } else if (encodeText.charCodeAt(i) >= 48 && encodeText.charCodeAt(i) <= 57) {
        letterOffset = (((encodeText.charCodeAt(i) - 48) + encodeOffset) % 10) + 48;
      } 
      textEncode = textEncode + String.fromCharCode(letterOffset);
    }
    return textEncode;
  }
}



// teste:
console.log('---------------ENCODE---------------------');

console.log('=> resultado (5)', encode(5, 'J')); // => O
console.log('=> resultado (25)', encode(25, 'Joao Oliveira')); // => Inzn Nkhudhqz
console.log('=> resultado (250)', encode(250, 'J')); // => Z
console.log('=> resultado (250)', encode(250, 'Joao Oliveira')); // => Zeqe Ebyluyhq
console.log('=> resultado', encode(2, 'Hello world')); // => Jgnnq yqtnf
console.log('=> resultado', encode(2, 'alo ola')); // => cnq qnc
console.log('=> resultado', encode(2, 'Numeros 12345')); // => Pwogtqu 34567
console.log('=> resultado', encode(27, 'Numero 3')); // => Ovnfsp 0
// console.log('=> resultado', encode(2, '')); // => alert
// console.log('=> resultado', encode(0, 'Olá')); // => alert

function decode(decodeOffset, decodeText) {
  if (decodeOffset < 1 || decodeText.length < 1) {
    // alert(':/ Dados inseridos inválidos. Tente de novo...');
  } else {
    
    let decodeLetterOffset;
    let textDecode = '';

    for (let i = 0; i < decodeText.length; i++) {    
      // Se uppercase
      if (decodeText.charCodeAt(i) >= 65 && decodeText.charCodeAt(i)  <= 90) {
        decodeLetterOffset = (((decodeText.charCodeAt(i) - 65) - decodeOffset) % 26) + 65;
      // se lowercase
      } else if (decodeText.charCodeAt(i)  >= 97 && decodeText.charCodeAt(i) <= 122) {
        decodeLetterOffset = (((decodeText.charCodeAt(i) - 97) - decodeOffset) % 26) + 97;
      // se espaço
      } else if (decodeText.charCodeAt(i) === 32) {
        decodeLetterOffset = 32;
      // se número
      } else if (decodeText.charCodeAt(i) >= 48 && decodeText.charCodeAt(i) <= 57) {
        decodeLetterOffset = (((decodeText.charCodeAt(i) - 48) - decodeOffset) % 10) + 48;
      } 
      textDecode = textDecode + String.fromCharCode(decodeLetterOffset);
    }
    return textDecode;
  }
}

// teste:
console.log('---------------DECODE---------------------');

console.log('=> resultado (5)', decode(5, 'D')); // => J
console.log('=> resultado (25)', decode(25, 'Inzn Nkhudhqz')); // => Inzn Oliveira
console.log('=> resultado (250)', decode(250, 'Z')); // => J
console.log('=> resultado (250)', decode(250, 'Zeqe Ebyluyhq')); // => Joao Oliveira
console.log('=> resultado', decode(2, 'Jgnnq yqtnf')); // => Hello world
console.log('=> resultado', decode(2, 'cnq qnc')); // => alo ola
console.log('=> resultado', decode(2, 'Pwogtqu 34567')); // => Numero 1580
console.log('=> resultado', decode(27, 'Ovnfsp 0')); // => Numero 3