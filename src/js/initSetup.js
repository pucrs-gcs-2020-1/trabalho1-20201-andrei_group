const OPERATORS = [
    { id: 1, name: 'Augusto Almir', initials: 'AA' },
    { id: 2, name: 'José Jair', initials: 'JJ' },
    { id: 3, name: 'Yasmin Yagni', initials: 'YY' }
]

const ACCOUNTS = [
    buildAccount(OPERATORS[0]),
    buildAccount(OPERATORS[0]),
    buildAccount(OPERATORS[0]),
    buildAccount(OPERATORS[1]),
    buildAccount(OPERATORS[1]),
    buildAccount(OPERATORS[2]),
    buildAccount(OPERATORS[2])
]

const updateWelcomeMessage = (operator) => {
    const welcome = document.getElementById('welcome');
    welcome.innerHTML = `Boas vindas, ${operator.name}`
}

const addToDropdown = (dropId, item, getItemText) => {
    console.log(item);
    const operatorSelection = document.getElementById(dropId)
    const opt = document.createElement('option');
    
    opt.appendChild( document.createTextNode(getItemText()) );
    opt.value = item.id

    operatorSelection.appendChild(opt);
}


setTimeout(() => {
    OPERATORS.forEach((op) => addToDropdown('operatorsSelection', op,  () => op.name));
    ACCOUNTS.forEach((ac) => addToDropdown('accountSelection', ac, () => `Cod: ${ac.id}`));
    updateWelcomeMessage(OPERATORS[0]);
    changeAccount();

    ACCOUNTS.forEach(ac => addRow({
        date: ac.getDate(),
        operatorInitials: ac.createdBy.initials,
        nroDoc: ac.id,
        description: 'sei la',
        value: ac.totalCash
    }))
}, 10)