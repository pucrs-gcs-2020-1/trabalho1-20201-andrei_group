const changeOperator = (va) => {
    const operator = getOperator();
    updateWelcomeMessage(operator);
}

const getOperator = () => {
    const id = getOperatorSelection().value;
    return OPERATORS.find(op => op.id === parseInt(id))
}

const getOperatorSelection = () => {
    return document.getElementById("operatorsSelection");
}

const getInitials = (name) => {
    var initials = name.match(/\b\w/g) || [];
    return ((initials.shift() || '') + (initials.pop() || '')).toUpperCase();
}

const openNewOperatorDialog = () => {
    const name = window.prompt("Nome do operador a ser adicionado: ");
    addOperator(name);
}

const addOperator = (operatorName) => {
    const operator = { id:OPERATORS.length +1, name: operatorName, intials: getInitials(operatorName) }
    OPERATORS.push(operator);
    addToDropdown('operatorsSelection', operator, () => operator.name);
}

window.addEventListener('addOperator', () => {
    const name = window.prompt("Nome do operador a ser adicionado: ");
    if (name) {
        addOperator(name)
    }
})
