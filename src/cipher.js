console.log('=> começou ;)');
let encodeOffset = document.getElementById('encode-offset').value;
// let encodeOffset = document.querySelector('#encode-offset > input');
let encodeText = document.getElementById('encode-text').value;
// let encodeText = document.querySelector('#encode-text > input');
let encodeResult = document.getElementById('encode-result');

function encode(encodeOffset, encodeText) {
  console.log('=> Entrou na função');
  console.log('=> encodeText ', encodeText);
  console.log('=> encodeOffset ', encodeOffset);
  
  let letterOffset;
  let textEncode = '';
  
  for (let i = 0; i < encodeText.length; i++) {    
    // Se uppercase
    if (encodeText.charCodeAt(i) >= 65 && encodeText.charCodeAt(i)  <= 90) {
      letterOffset = (((encodeText.charCodeAt(i) - 65) + encodeOffset) % 26) + 65;
      console.log('=> uppercase', letterOffset);

    // se lowercase
    } else if (encodeText.charCodeAt(i)  >= 97 && encodeText.charCodeAt(i) <= 122) {
      letterOffset = (((encodeText.charCodeAt(i) - 97) + encodeOffset) % 26) + 97;
      console.log('=> lowercase', letterOffset);

    // se espaço
    } else if (encodeText.charCodeAt(i) === 32) {
      letterOffset = 32;
      console.log('=> espaço', letterOffset);

    // se número
    } else if (encodeText.charCodeAt(i) >= 48 && encodeText.charCodeAt(i) <= 57) {
      letterOffset = (((encodeText.charCodeAt(i) - 48) + encodeOffset) % 26) + 48;
      console.log('=> número', letterOffset);
    } 
    return textEncode + String.fromCharCode(letterOffset);
    console.log('=> textencode', textEncode);
  }

}

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

// encodeText.addEventListener('input', encode, false);
