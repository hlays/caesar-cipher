window.onload = (function () {
  let encodeOffset = document.querySelector('#encode-offset > input');
  let encodeText = document.querySelector('#encode-text > input');
  let encodeResult = document.getElementById('encode-result');

  function encode(encodeOffset, encodeText) {
    if (encodeOffset < 1 || encodeText.length < 1) {
      // alert(':/ Dados inseridos inválidos. Tente de novo...');
    } else {
      
      let letterOffset;
      let textEncode = '';
  
      // Se uppercase
      for (let i = 0; i < encodeText.length; i++) {    
        if (encodeText.charCodeAt(i) >= 65 && encodeText.charCodeAt(i)  <= 90) {
          letterOffset = (((encodeText.charCodeAt(i) - 65) + encodeOffset) % 26) + 65;
        
      // se lowercase
        } else if (encodeText.charCodeAt(i)  >= 97 && encodeText.charCodeAt(i) <= 122) {
          letterOffset = (((encodeText.charCodeAt(i) - 97) + encodeOffset) % 26) + 97;
        } else if (encodeText.charCodeAt(i) === 32) {
          letterOffset = 32;
        }
        textEncode = textEncode + String.fromCharCode(letterOffset);
      }
      return textEncode;
    }
  }


  encodeText.addEventListener('input', encode);
})() 




