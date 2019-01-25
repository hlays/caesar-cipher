let cipherOffset = document.getElementById('cipher-offset').value;
let cipherText = document.getElementById('cipher-text').value;
let cipherResult = document.getElementById('cipher-result');

function cipher(cipherOffset, cipherText) {
  let arrCipher = [];
  for (i in cipherText) {    
    let letterOffset = ((cipherText[i].charCodeAt() - 65 + cipherOffset) % 26) + 65;
    arrCipher.push(letterOffset);
  }
  
  for (i in arrCipher) {
    cipherResult.value = String.fromCharCode.apply(null, arrCipher);
  } 
    
}

cipherText.addEventListener('input', cipher);
  




