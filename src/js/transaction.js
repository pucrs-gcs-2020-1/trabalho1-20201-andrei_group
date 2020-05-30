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

const getTransactionDescription= () => {
    const inptDescription = document.getElementById('inpt-description');
    return inptDescription.value;
}

const hasEnoughMoney = (account, value) => {
    return account.getCurrentAmount() >= value
}

window.addEventListener('makeTransaction', () => {
    const description = getTransactionDescription();
    const operator = getOperator();
    const account = getSelectedAccount();
    const receiverAccount = getReceiverAccount();
    const value = getTransactionValue();

    if (value <= 0) {
        window.alert("Você precisa digitar um valor para a transferencia. Tente novamente.");
        return;
    }
    if (!hasEnoughMoney(account, value)) {
        window.alert("Você não possui dinheiro suficiente :(");
        return;
    }

    if (!receiverAccount) {
        window.alert("Você precisa escolher uma conta destinatária. Tente novamente.");
        return;
    }

    if (!description.length) {
        window.alert("A descrição é obrigatória. Tente novamente.");
        return;
    }

    const withdrawTransaction = buildTransaction({ description, operator, value: -value })
    const depositTransaction = buildTransaction({ description, operator, value })
    
    account.transactions.push(withdrawTransaction);
    receiverAccount.transactions.push(depositTransaction);

    dispatch('updateTransactionsTable')
    dispatch('updateInformTable')
})