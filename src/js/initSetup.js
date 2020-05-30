const OPERATORS = [
    { id: 1, name: 'Augusto Almir', initials: 'AA' },
    { id: 2, name: 'José Jair', initials: 'JJ' },
    { id: 3, name: 'Yasmin Yagni', initials: 'YY' }
]

const TRANSACTIONS = [
    [
        buildTransaction({ date: new Date('07/25/2016'), description: 'Pagamento de impostos', value: -2000.50, operator: OPERATORS[0] }),
        buildTransaction({ date: new Date('07/28/2015'), description: 'Salario', value: 3000.00, operator: OPERATORS[0] }),
    ],
    [
        buildTransaction({ date: new Date('07/25/2016'), description: 'Compra de insumos', value: -1000.75, operator: OPERATORS[1] }),
        buildTransaction({ date: new Date('07/28/2015'), description: 'Fatura', value: 10000.00, operator: OPERATORS[2] }),
    ],
    [
        buildTransaction({ date: new Date('07/25/2016'), description: 'Compra material de escritório', value: -500.00, operator: OPERATORS[0]}),
        buildTransaction({ date: new Date('07/28/2015'), description: 'Fatura 021/2020', value: 4000.30, operator: OPERATORS[2] }),
    ],
    [
        buildTransaction({ date: new Date('07/25/2016'), description: 'Conserto da máquina #1', value: -750.00, operator: OPERATORS[1] }),
        buildTransaction({ date: new Date('07/28/2015'), description: 'Doação', value: 1200.00, operator: OPERATORS[2] }),
    ]
]

const ACCOUNTS = [
    buildAccount(OPERATORS[0], TRANSACTIONS[0]),
    buildAccount(OPERATORS[0], TRANSACTIONS[1]),
    buildAccount(OPERATORS[1], TRANSACTIONS[2]),
    buildAccount(OPERATORS[2], TRANSACTIONS[3])
]

const addToDropdown = (dropId, item, getItemText) => {
    const operatorSelection = document.getElementById(dropId)
    const opt = document.createElement('option');
    
    opt.appendChild( document.createTextNode(getItemText()));
    opt.value = item.id

    operatorSelection.appendChild(opt);
}

window.addEventListener('updateAccount', () => {
    ACCOUNTS.forEach((ac) => addToDropdown('accountSelection', ac, () => `Cod: ${ac.id} - Criado por: ${ac.createdBy.name}`));
})

window.addEventListener('updateOperators', () => {
    OPERATORS.forEach((op) => addToDropdown('operatorsSelection', op,  () => op.name));
})

window.addEventListener('transactionAccSelected', () => {
    ACCOUNTS.forEach((ac) => addToDropdown('receiverAcc', ac,  () => `Cod: ${ac.id}`));
})

window.addEventListener('updateWelcome', ({ detail: data }) => {
    const welcome = document.getElementById('welcome');
    welcome.innerHTML = `Boas vindas, ${data.operator.name}!`
})

window.addEventListener('updateSelectedOperator', () => {
    const operator = getOperator();
    dispatch('updateWelcome', { operator })
})

window.addEventListener('updateSelectedAccount', () => {
    const account = getSelectedAccount();
    const message = getAccountMessage();
    message.innerHTML = `Conta ${account.id}, criada por ${account.createdBy.name} (${account.createdBy.initials}) em ${account.getDate()}`;
    dispatch('updateContentTable')
})

const Event = (key, props) => new CustomEvent(key, { bubbles: true, detail: props }) 
const dispatch = (event, data) => window.dispatchEvent(Event(event, data))

setTimeout(() => {
    dispatch('updateOperators')
    dispatch('updateAccount')
    dispatch('updateWelcome', { operator: OPERATORS[0] })
    dispatch('updateSelectedAccount')
    dispatch('transactionAccSelected')
}, 10)