const buildTransaction = ({ date, description, operator, value }) => {
   return {
        createdAt: date || new Date(),
        operator: operator,
        nroDoc: intID(),
        description: description,
        value: value || 0.00,
        getDate() {
            const date = this.createdAt;
            const month = date.getMonth()+1
            return `${date.getDate()}/${month  >= 10 ? month : `0${month}`}/${date.getFullYear()}`;
        }
    }
}

const getReceiverAccount = () => {
    const id = document.getElementById('receiverAcc').value;
    return ACCOUNTS.find(ac => ac.id === parseInt(id));
}

const getTransactionValue = () => {
    const inptAmount = document.getElementById('inpt-amount');
    return Number(inptAmount.value);
}

const hasEnoughMoney = (account, value) => {
    return account.getTotalAmount() >= value
}

window.addEventListener('makeTransaction', () => {
    const operator = getOperator();
    const account = getSelectedAccount();
    const receiverAccount = getReceiverAccount();
    const value = getTransactionValue();

    if (!hasEnoughMoney(account, value)) {
        window.alert("Você não possui dinheiro suficiente :(");
        return;
    }

    const withdrawTransaction = buildTransaction({ description: 'eu quis', operator, value: -value })
    const depositTransaction = buildTransaction({ description: 'eu quis', operator, value })
    
    account.transactions.push(withdrawTransaction);
    receiverAccount.transactions.push(depositTransaction);

    dispatch('updateContentTable')
})