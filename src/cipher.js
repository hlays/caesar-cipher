console.log('=> começou ;)');


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

function cipher() {
  let offset = document.getElementById('encode-offset').value;
  // let offset = document.querySelector('#encode-offset > input');
  let text = document.getElementById('encode-text').value;
  // let text = document.querySelector('#encode-text > input');
  let encodeResult = document.getElementById('encode-result');

  const x = encode(offset, text);

  encodeResult.value = x;

  console.log('=> Terminou!');

}

// encodeText.addEventListener('input', encode, false);
