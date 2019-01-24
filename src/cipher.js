window.onload = (function () {
  const cipherOffset = document.getElementById('cipher-offset').value;
  const cipherText = document.getElementById('cipher-text').value;
  const btn = document.getElementById('cipher-button');

  btn.addEventListener('click', cipher, false);
  
  function cipher() {
    console.log(1)
    let arrCipher = [];
    for (i in cipherText) {    
      let letterOffset = ((cipherText[i].charCodeAt() - 65 + cipherOffset) % 26) + 65;
      arrCipher.push(letterOffset);
    }
      
    const arrCiphered = [];
    for (i in arrCipher) {
      return String.fromCharCode.apply(null, arrCipher);
      
      // let cipheredResult = String.fromCharCode.apply(null, arrCipher[i]);
      // console.log(cipheredResult);
      
      // arrCiphered.push(cipheredResult);
  
    }  
  }
  
})()




// console.log('resultado', cipher(2, 'ALO'));


