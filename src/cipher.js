const alphabetSize = 26;
const aInAsciiUpperCase = 65;
const zInAsciiUpperCase = 90;
const aInAsciiLowerCase = 97;
const zInAsciiLowerCase = 122;

function cipher() {
  const encondedOffset = parseInt(document.getElementById('encode-offset').value);
  const encodedText = document.getElementById('encode-text').value;
  const encodeResult = encode(encondedOffset, encodedText);

  document.getElementById('encode-result').value = encodeResult;
}

function decipher() {
  const decodeOffset = parseInt(document.getElementById('decode-offset').value);
  const dText = document.getElementById('decode-text').value;
  const decodeResult = decode(decodeOffset, dText);

  document.getElementById('decode-result').value = decodeResult;
}

function encode(encodeOffset, encodeText) {
  let textEncode = '';
  let letterOffset;

  for (let i = 0; i < encodeText.length; i++) {
    let encodedCodeAscii = encodeText.charCodeAt(i);

    if (encodedCodeAscii >= aInAsciiUpperCase && encodedCodeAscii <= zInAsciiUpperCase) {
      if (encodeOffset < 0) {
        letterOffset = (((encodedCodeAscii - aInAsciiUpperCase) + encodeOffset % alphabetSize) + alphabetSize) % alphabetSize + aInAsciiUpperCase;
      } else {
        letterOffset = ((encodedCodeAscii - aInAsciiUpperCase + encodeOffset) % alphabetSize) + aInAsciiUpperCase;
      }
    } else if (encodedCodeAscii >= aInAsciiLowerCase && encodedCodeAscii <= zInAsciiLowerCase) {
      if (encodeOffset < 0) {
        letterOffset = (((encodedCodeAscii - aInAsciiLowerCase) + encodeOffset % alphabetSize) + alphabetSize) % alphabetSize + aInAsciiLowerCase;
      } else {
        letterOffset = ((encodedCodeAscii - aInAsciiLowerCase + encodeOffset) % alphabetSize) + aInAsciiLowerCase;
      }
    } else {
      letterOffset = encodedCodeAscii;
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

    if (deCodeAscii >= aInAsciiUpperCase && deCodeAscii <= zInAsciiUpperCase) {
      decodeLetterOffset = (((deCodeAscii - aInAsciiUpperCase) - (decodeOffset % alphabetSize)) + alphabetSize) % alphabetSize + aInAsciiUpperCase;
    } else if (deCodeAscii >= aInAsciiLowerCase && deCodeAscii <= zInAsciiLowerCase) {
      decodeLetterOffset = (((deCodeAscii - aInAsciiLowerCase) - (decodeOffset % alphabetSize)) + alphabetSize) % alphabetSize + aInAsciiLowerCase;
    } else {
      decodeLetterOffset = deCodeAscii;
    }
    textDecode = textDecode + String.fromCharCode(decodeLetterOffset);
  }
  return textDecode;
}

document.getElementById('encode-text').addEventListener('input', cipher);
document.getElementById('decode-text').addEventListener('input', decipher);
