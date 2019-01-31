function cipher() {
  let eOffset = parseInt(document.getElementById('encode-offset').value);
  let eText = document.getElementById('encode-text').value;
  let encodeResult = encode(eOffset, eText);
  
  document.getElementById('encode-result').value = encodeResult;
}


function decipher() {
  let dOffset = parseInt(document.getElementById('decode-offset').value);
  let dText = document.getElementById('decode-text').value;
  let decodeResult = decode(dOffset, dText);
  
  document.getElementById('decode-result').value = decodeResult;
}


function encode(encodeOffset, encodeText) {
  let textEncode = '';
  let letterOffset;
  
  for (let i = 0; i < encodeText.length; i++) {    
    let eCodeAscii = encodeText.charCodeAt(i);

    // Se uppercase
    if (eCodeAscii >= 65 && eCodeAscii  <= 90) {
      if (encodeOffset < 0) {
        letterOffset = (((eCodeAscii - 65) + encodeOffset % 26) + 26) % 26 + 65;
      } else {
        letterOffset = ((eCodeAscii - 65 + encodeOffset) % 26) + 65;
      }
    // se lowercase
    } else if (eCodeAscii  >= 97 && eCodeAscii <= 122) {
      if (encodeOffset < 0) {
        letterOffset = (((eCodeAscii - 97) + encodeOffset % 26) + 26) % 26 + 97;
      } else {
        letterOffset = ((eCodeAscii - 97 + encodeOffset) % 26) + 97;
      }
    // se outros
    } else {
      letterOffset = eCodeAscii;
    } 
    textEncode = textEncode + String.fromCharCode(letterOffset);
  }
  return textEncode;
}


function decode(decodeOffset, decodeText) {
  let decodeLetterOffset;
  let textDecode = '';
  
  for (let i = 0; i < decodeText.length; i++) {    
    let deCodeAscii = decodeText.charCodeAt(i);

    // Se uppercase
    if (deCodeAscii >= 65 && deCodeAscii  <= 90) {
      if (decodeOffset < 0) {
        decodeLetterOffset = ((deCodeAscii - 65 - decodeOffset) % 26) + 65;
      } else {
        decodeLetterOffset = (((deCodeAscii - 65) - (decodeOffset % 26)) + 26) % 26 + 65;
      }
    // se lowercase
    } else if (deCodeAscii  >= 97 && deCodeAscii <= 122) {
      if (decodeOffset < 0) {
        decodeLetterOffset = ((deCodeAscii - 97 - decodeOffset) % 26) + 97;
      } else {
        decodeLetterOffset = (((deCodeAscii - 97) - (decodeOffset % 26)) + 26) % 26 + 97;
      }
    // se outros
    } else {
      decodeLetterOffset = deCodeAscii;
    } 
    textDecode = textDecode + String.fromCharCode(decodeLetterOffset);
  }
  return textDecode;
}