module.exports = function toReadable (num) {
    let convertedNum = '';
    const hundreds = ['', 'one hundred ', 'two hundred ', 'three hundred ', 'four hundred ', 'five hundred ', 'six hundred ', 'seven hundred ', 'eight hundred ', 'nine hundred '];
    const tens = ['', 'ten ', 'twenty ', 'thirty ', 'forty ', 'fifty ', 'sixty ', 'seventy ', 'eighty ', 'ninety '];
    const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const tensSpecial = ['', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

    if(num === 0) {
      return 'zero';
    }

    convertedNum += hundreds[Math.floor(num / 100)];  //Пишет сотую часть
    if(Math.floor(num % 100) > 10 && Math.floor(num % 100) < 20) { //Проверяет особый случай
      convertedNum += tensSpecial[num % 10];
    } else {
      convertedNum += tens[Math.floor(num / 10 % 10)];  //Пишет десятую часть
      convertedNum += ones[num % 10];  //Пишет единичную часть
    }
    return convertedNum.trim();
}
