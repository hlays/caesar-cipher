const alphabetSize = 26;
const aInAsciiUppercase = 65;
const zInAsciiUppercase = 90;
const aInAsciiLowercase = 97;
const zInAsciiLowercase = 122;

const cipher = () => {
  const offset = parseInt(document.getElementById('encode-offset').value);
  const text = document.getElementById('encode-text').value;
  const textEncoded = encode(offset, text);

  document.getElementById('encode-result').value = textEncoded;
}

const decipher = () => {
  const offset = parseInt(document.getElementById('decode-offset').value);
  const text = document.getElementById('decode-text').value;
  const textDecoded = decode(offset, text);

  document.getElementById('decode-result').value = textDecoded;
}

const encode = (encodeOffset, textToEncode) => {
  let encodedText = '';
  let letterOffset;
  
  for (let i in textToEncode) {
    let codeAscii = textToEncode.charCodeAt(i);
    const isLowercase = codeAscii >= aInAsciiUppercase && codeAscii <= zInAsciiUppercase;
    const isUppercase = codeAscii >= aInAsciiLowercase && codeAscii <= zInAsciiLowercase;

    if (isLowercase) {
      if (encodeOffset < 0) {
        letterOffset = (((codeAscii - aInAsciiUppercase) + encodeOffset % alphabetSize) + alphabetSize) % alphabetSize + aInAsciiUppercase;
      } else {
        letterOffset = ((codeAscii - aInAsciiUppercase + encodeOffset) % alphabetSize) + aInAsciiUppercase;
      }
    } else if (isUppercase) {
      if (encodeOffset < 0) {
        letterOffset = (((codeAscii - aInAsciiLowercase) + encodeOffset % alphabetSize) + alphabetSize) % alphabetSize + aInAsciiLowercase;
      } else {
        letterOffset = ((codeAscii - aInAsciiLowercase + encodeOffset) % alphabetSize) + aInAsciiLowercase;
      }
    } else {
      letterOffset = codeAscii;
    }
    encodedText = encodedText + String.fromCharCode(letterOffset);
  }
  return encodedText;
}

const decode = (decodeOffset, textToDecode) => {
  let decodedText = '';
  let letterOffset;
  
  for (let i in textToDecode) {
    let codeAscii = textToDecode.charCodeAt(i);
    const isLowercase = codeAscii >= aInAsciiUppercase && codeAscii <= zInAsciiUppercase;
    const isUppercase = codeAscii >= aInAsciiLowercase && codeAscii <= zInAsciiLowercase;

    if (isLowercase) {
      letterOffset = (((codeAscii - aInAsciiUppercase) - (decodeOffset % alphabetSize)) + alphabetSize) % alphabetSize + aInAsciiUppercase;
    } else if (isUppercase) {
      letterOffset = (((codeAscii - aInAsciiLowercase) - (decodeOffset % alphabetSize)) + alphabetSize) % alphabetSize + aInAsciiLowercase;
    } else {
      letterOffset = codeAscii;
    }
    decodedText = decodedText + String.fromCharCode(letterOffset);
  }
  return decodedText;
}

document.getElementById('encode-text').addEventListener('input', cipher);
document.getElementById('decode-text').addEventListener('input', decipher);
