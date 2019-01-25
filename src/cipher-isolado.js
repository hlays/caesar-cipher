function cipher(cipherOffset, cipherThis) {
  if (cipherOffset < 1 || cipherThis.length < 1) {
    alert(':/ Dados inseridos inválidos. Tente de novo...');
  } else {
    
    const arrCiphered = [];
    // Se uppercase
    for (i in cipherThis) {    
      let arrCipher = [];
      if (cipherThis[i] >= 65 && cipherThis[i] <= 90) {
        let letterOffset = ((cipherThis[i].charCodeAt() - 65 + cipherOffset) % 26) + 65;
        arrCipher.push(letterOffset);
        for (i in arrCipher) {
          return String.fromCharCode.apply(null, arrCipher);
        } 
    // se lowercase
      } else if (cipherThis[i] >= 97 && cipherThis[i] <= 122) {
        for (i in cipherThis) {    
          let arrCipher = [];
          let letterOffset = ((cipherThis[i].charCodeAt() - 97 + cipherOffset) % 26) + 97;
          arrCipher.push(letterOffset);
        }
        const arrCiphered = [];
        for (i in arrCipher) {
          return String.fromCharCode.apply(null, arrCipher);
        } 
      } 
    } 
  }
}


// teste:
console.log('=> resultado', cipher(2, 'ALO')); // => CNQ
console.log('=> resultado', cipher(2, 'alo')); // => CNQ
