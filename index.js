const equation = process.argv[2];

const calculator = (equation) => {
    return equation;
};

if (equation) {
    console.log(calculator(equation));
}

module.exports = calculator;
