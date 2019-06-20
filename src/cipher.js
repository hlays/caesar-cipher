const alphabetSize = 26;
const aInAsciiUpperCase = 65;
const zInAsciiUpperCase = 90;
const aInAsciiLowerCase = 97;
const zInAsciiLowerCase = 122;

const cipher = () => {
  const encondedOffset = parseInt(document.getElementById('encode-offset').value);
  const encodedText = document.getElementById('encode-text').value;
  const encodeResult = encode(encondedOffset, encodedText);

  document.getElementById('encode-result').value = encodeResult;
}

const decipher = () => {
  const decodeOffset = parseInt(document.getElementById('decode-offset').value);
  const dText = document.getElementById('decode-text').value;
  const decodeResult = decode(decodeOffset, dText);

  document.getElementById('decode-result').value = decodeResult;
}

const encode = (encodeOffset, encodeText) => {
  let textEncode = '';
  let letterOffset;
  
  for (let i = 0; i < encodeText.length; i++) {
    let encodedCodeAscii = encodeText.charCodeAt(i);
    const isLowerCase = encodedCodeAscii >= aInAsciiUpperCase && encodedCodeAscii <= zInAsciiUpperCase;
    const isUpperCase = encodedCodeAscii >= aInAsciiLowerCase && encodedCodeAscii <= zInAsciiLowerCase;

    if (isLowerCase) {
      if (encodeOffset < 0) {
        letterOffset = (((encodedCodeAscii - aInAsciiUpperCase) + encodeOffset % alphabetSize) + alphabetSize) % alphabetSize + aInAsciiUpperCase;
      } else {
        letterOffset = ((encodedCodeAscii - aInAsciiUpperCase + encodeOffset) % alphabetSize) + aInAsciiUpperCase;
      }
    } else if (isUpperCase) {
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

const decode = (decodeOffset, decodeText) => {
  let decodeLetterOffset;
  let textDecode = '';
  
  for (let i = 0; i < decodeText.length; i++) {
    let deCodeAscii = decodeText.charCodeAt(i);
    const isLowerCase = deCodeAscii >= aInAsciiUpperCase && deCodeAscii <= zInAsciiUpperCase;
    const isUpperCase = deCodeAscii >= aInAsciiLowerCase && deCodeAscii <= zInAsciiLowerCase;

    if (isLowerCase) {
      decodeLetterOffset = (((deCodeAscii - aInAsciiUpperCase) - (decodeOffset % alphabetSize)) + alphabetSize) % alphabetSize + aInAsciiUpperCase;
    } else if (isUpperCase) {
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
