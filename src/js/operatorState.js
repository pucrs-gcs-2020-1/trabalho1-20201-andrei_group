const changeOperator = (va) => {
    const operator = getOperator();
    updateWelcomeMessage(operator);
}

const getOperator = () => {
    const index = getOperatorSelection().value;
    return OPERATORS[index];
}

const getOperatorSelection = () => {
    return document.getElementById("operatorsSelection");
}

const updateWelcomeMessage = (operator) => {
    const welcome = document.getElementById('welcome');
    welcome.innerHTML = `Boas vindas, ${operator.name}`
}