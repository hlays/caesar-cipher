function cipher(cipherOffset, cipherThis) {
  let arrCipher = [];
  for (i in cipherThis) {    
    let letterOffset = ((cipherThis[i].charCodeAt() - 65 + cipherOffset) % 26) + 65;
    arrCipher.push(letterOffset);
  }
    
  const arrCiphered = [];
  for (i in arrCipher) {
    return String.fromCharCode.apply(null, arrCipher);
  }  
}

console.log('=> resultado', cipher(2, 'ALO'));
