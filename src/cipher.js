window.onload = (function () {
  const cipherOffset = document.getElementById('cipher-offset').value;
  const cipherText = document.getElementById('cipher-text').value;
  const cipherResult = document.getElementById('cipher-result');

  
  function cipher(cipherOffset, cipherText) {
    let arrCipher = [];
    for (i in cipherText) {    
      let letterOffset = ((cipherText[i].charCodeAt() - 65 + cipherOffset) % 26) + 65;
      arrCipher.push(letterOffset);
    }
  
    let it = String.fromCharCode.apply(null, arrCipher);
    
    const arrCiphered = [];
    for (i in arrCipher) {
      return String.fromCharCode.apply(null, arrCipher);
    } 
  }
  
  cipherResult.addEventListener('input', cipher);
  
})()




// console.log('resultado', cipher(2, 'ALO'));


