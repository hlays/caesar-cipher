function cipher() {
  let eOffset = document.getElementById('encode-offset').value;
  let eText = document.getElementById('encode-text').value;
  let encodeResult = encode(eOffset, eText);
  
  document.getElementById('encode-result').value = encodeResult;
}


function decipher() {
  let dOffset = document.getElementById('decode-offset').value;
  let dText = document.getElementById('decode-text').value;
  let decodeResult = decode(dOffset, dText);
  
  document.getElementById('decode-result').value = decodeResult;
}


function encode(encodeOffset, encodeText) {
  let textEncode = '';
  let letterOffset;
  
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


function decode(decodeOffset, decodeText) {
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