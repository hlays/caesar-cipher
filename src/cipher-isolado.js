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
        letterOffset = (((encodeText.charCodeAt(i) - 48) + encodeOffset) % 26) + 48;
      } 
      textEncode = textEncode + String.fromCharCode(letterOffset);
    }
    return textEncode;
  }
}



// teste:
console.log('=> resultado', encode(2, 'Hello world')); // => Jgnnq yqtnf
console.log('=> resultado', encode(2, 'alo ola')); // => cnq qnc
console.log('=> resultado', encode(2, 'Numero 1580')); // => Pwogtq 37:2
console.log('=> resultado', encode(2, 'Numero 3')); // => Pwogtq 5
// console.log('=> resultado', encode(2, '')); // => alert
// console.log('=> resultado', encode(0, 'Olá')); // => alert
