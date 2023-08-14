let input = [
    { name: "Argentina", population: 45810000},
    { name: "Chile", population: 19493184},
    { name: "Brasil", population:  215586573},
];

const arrayPopulation = input.sort((a, b) => b.population - a.population); 

console.log(arrayPopulation);