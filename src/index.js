const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
function decodeNumbToLetter(expr) {
    let i = 0;
    let letter = '';


    while (expr[i]==='0') {
        i++;
    }
    expr = expr.substring(i);

    for (i=0; i<expr.length; i+=2) {
        if (expr[i+1] === '0') {
            letter = letter + '.';
        } else {
            letter = letter + '-';
        }
    }

    return MORSE_TABLE[letter];
}

    let result = "";

    for(i=0; i<expr.length; i+=10) {
        if (expr.slice(i, i+1) === '*') {
            result = result + ' ';
        } else {
            result = result + decodeNumbToLetter(expr.slice(i, i+10));
        }
    }

    return result;
}

module.exports = {
    decode
}