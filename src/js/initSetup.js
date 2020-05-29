const OPERATORS = [
    { name: 'Augusto Almir', initials: 'AA' },
    { name: 'José Jair', initials: 'JJ' },
    { name: 'Yasmin Yagni', initials: 'YY' }
]

const ACCOUNTS = [
    {}
]

const addToDropdown = (operator) => {
    const operatorSelection = document.getElementById('operatorsSelection')
    const opt = document.createElement('option');
    
    opt.appendChild( document.createTextNode(operator.name) );
    opt.value = OPERATORS.indexOf(operator)

    operatorSelection.appendChild(opt);
}

setTimeout(() => {
    OPERATORS.forEach(addToDropdown);
    updateWelcomeMessage(OPERATORS[0]);

}, 100)