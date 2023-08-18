let candles = [4, 5, 1, 3, 2, 5];

const maxValue = Math.max(...candles) //Busca el valor mayor
const candlesUpper = (candles) => candles.filter((item) => item == maxValue).length;

console.log(candlesUpper(candles));