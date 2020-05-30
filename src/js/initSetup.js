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

window.addEventListener('updateWelcome', ({ detail: data }) => {
    const welcome = document.getElementById('welcome');
    welcome.innerHTML = `Boas vindas, ${data.operator.name}!`
})

window.addEventListener('updateSelectedOperator', () => {
    const operator = getOperator();
    console.log('Op', operator)
    dispatch('updateWelcome', { operator })
})

window.addEventListener('updateSelectedAccount', () => {
    const account = getSelectedAccount();
    const message = getAccountMessage();
    message.innerHTML = `Conta ${account.id}, criada por ${account.createdBy.name} (${account.createdBy.initials}) em ${account.getDate()}`
})

const Event = (key, props) => new CustomEvent(key, { bubbles: true, detail: props }) 
const dispatch = (event, data) => window.dispatchEvent(Event(event, data))

setTimeout(() => {
    dispatch('updateOperators')
    dispatch('updateAccount')
    dispatch('updateAccount')
    dispatch('updateWelcome', { operator: OPERATORS[0] })
    dispatch('updateSelectedAccount')
}, 10)