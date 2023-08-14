let arrayClass = [0, 1, 1, 1, 0, 0];
const min = 3;

const assist = (arrayClass, min) =>
    arrayClass.filter((item) => item <= 0).length >= min
    ? "NO"
    : "YES";


console.log(assist(arrayClass, min));