const NUMBERS = {
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve'
}

const TENSTEEN = {
  2: 'twenteen',
  3: 'thirteen',
  4: 'fourteen',
  5: 'fifteen',
  6: 'sixteen',
  7: 'seventeen',
  8: 'eighteen',
  9: 'nineteen',
  0: ' '
}

const TENSTY = {
  2: 'twenty',
  3: 'thirty',
  4: 'forty',
  5: 'fifty',
  6: 'sixty',
  7: 'seventy',
  8: 'eighty',
  9: 'ninety',
  0: ' '
}


module.exports = function toReadable (number) {
  let digit;

  if (number < 13) {
    return NUMBERS[number];
  } else if (number < 20) {
    digit = number.toString(10).split('');
    return `${TENSTEEN[digit[1]]}`;
  } else if (number >= 20 && number < 100) {
    digit = number.toString(10).split('');
    
    if (digit[1] == '0') {
      return `${TENSTY[digit[0]]}`;
    } else {
      return `${TENSTY[digit[0]]} ` + `${NUMBERS[digit[1]]}`;
    }
  } else {
    digit = number.toString(10).split('');

    if (digit[1] == '0' && digit[2] == '0') {
      return `${NUMBERS[digit[0]]} ` + "hundred";
    } else if (digit[1] == '1' && digit[2] == '0') {
      return `${NUMBERS[digit[0]]} ` + "hundred " + `${NUMBERS[10]}`;
    } else if (digit[1] == '1' && digit[2] == '1') {
      return `${NUMBERS[digit[0]]} ` + "hundred " + `${NUMBERS[11]}`; 
    } else if (digit[1] == '1' && digit[2] == '2') {
      return `${NUMBERS[digit[0]]} ` + "hundred " + `${NUMBERS[12]}`;
    } else if (digit[1] == '1') {
      return `${NUMBERS[digit[0]]} ` + "hundred " + `${TENSTEEN[digit[2]]}`;
    } else {
      if (digit[1] == '0') {
        return `${NUMBERS[digit[0]]} ` + "hundred " + `${NUMBERS[digit[2]]}`;
      } else if (digit[2] == '0') {
        return `${NUMBERS[digit[0]]} ` + "hundred " + `${TENSTY[digit[1]]}`;
      } else {
        return `${NUMBERS[digit[0]]} ` + "hundred " + `${TENSTY[digit[1]]} ` + `${NUMBERS[digit[2]]}`;
      }
    }
  }
}
